<?php
/**
 * The Managers cabinet lockers page 
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>

<!--Шкафчики-->
<div class="flex-row-nowrap operation_buttons">
    <a type="button" class="b-btn b-btn_red lockers_fam_flt" >Поиск клиента по фамилии</a>
    <span type="button" class="b-btn b-btn_red im-popup-link"  data-id="#add_locker">Добавить шкафчик</span>
</div>
<div class="find_user_flt hiden">
    <form class="flex-row-nowrap find_user_by_fam" action="/mk_lockers">
        <input type="hidden" name="action" value="find_user_flt">
        <input class="text_input lockers_fam_flt_input" type="text" name="user_fam_flt" value="<?= ManagerHelper::get_lockers_fam_flt()?>">
        <input type="submit" class="b-btn" value="Найти">
        <input type="submit" class="b-btn lockers_fam_flt_clear" value="Сбросить фильтр">
    </form>
</div>
<div class="flex-column-nowrap container main_table">
    <table class="mk_clients_table">
        <thead>
            <tr>
                <th>Номер шкафчика</th>
                <th>Мастер</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach (ManagerHelper::mt_get_lockers() as $lockers_id => $lockers_info): ?>
                <tr>
                    <?php foreach ($lockers_info as $key=>$row): ?>
                        <td class="table_cell_info <?=$row['class'];?>">
                            <?=$row['title'];?>
                        </td>
                    <?php endforeach; ?>
                    <td>
                        <btn class="mk-btn im-popup-link locker_row_edit" data-id="#edit_locker" rel="<?=$lockers_id;?>" number="<?=$lockers_info['number']['title'];?>">Изменить</btn>
                    </td>
                </tr>
            <?php endforeach; ?>
            <tr>
            </tr>
        </tbody>
    </table>
</div>


