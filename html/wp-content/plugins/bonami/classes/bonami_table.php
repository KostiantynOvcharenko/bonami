<?php
/**
 * The abstract table class
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
**/

abstract class BonamiTable
{
    protected $_db;
    protected $_table_name;
    protected $_table;
    protected $_id;
    protected $_error='';
    
    public function __construct($table_name,$id) {
        global $wpdb;
        $this->_db = $wpdb;
        $this->_table_name = $table_name;
        $this->_id = $id;
        $this->_table = $wpdb->prefix.$table_name;        
    }
    public function get_error()
    {
        return $this->_error;
    }

    protected function _add($row)
    {
        $fields = $this->_get_new_fields();
        $data = $format = array();
        foreach ($fields as $key=>$value)
        {
            if(!isset($row[$key]))
            {
                throw new Exception('Поле: '.$value['name'].' отсутствует');
            }
            $data[$key] = $row[$key];
            $format[] = $fields[$key]['format'];
            
        }
        try
        {
            $this->_db->insert($this->_table,$data,$format);
        } catch (Exception $ex) {
            $this->_error = 'Ошибка при добавлении в таблицу: '.$this->_table.' '.$ex->getMessage();
            return FALSE;
        }
        return $this->_db->insert_id;        
    }
    protected function _update($id, $upd_fields)
    {
        $fields = $this->_get_fields();
        $format = array();
        foreach(array_keys($upd_fields) as $key)
        {
            if(!isset($fields[$key]))
            {
                $this->_error = 'Поле: '.$key.' отсутствует в таблице '.$this->_table_name;
                return FALSE;
            }
            $format[] = $fields[$key]['format'];
        }
        $where = is_array($id)?$id:array($this->_id => $id);
        return $this->_db->update( 
            $this->_table, 
            $upd_fields, 
            $where, 
            $format
        );
    }
    protected function _delete($ids)
    {
        
        if(!is_array($ids))
        {
            $ids = array($ids);
        }
        foreach ($ids as $_id)
        {
            $this->_db->delete( $this->_table, array( $this->_id => $_id ) );
        }
    }
    public function find_row($where)
    {
        $_where = array();
        foreach ($where as $key=>$value)
        {
            $_where[] = $key.'="'.$value.'"';
        }
        return $this->_db->get_row('SELECT * FROM '.$this->_table.' WHERE '. implode(' AND ', $_where), ARRAY_A);
    }

    protected function _get_new_fields()
    {
        return array();
    }
    protected function _get_fields()
    {
        return array();
    }
}