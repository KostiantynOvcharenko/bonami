<?php
/**
 * The Bonami administrator menu page
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>
<div class="wrap">
    <h2>Bonami настройки</h2>

    <form method="post" action="options.php">
<?php // wp_nonce_field('update-options'); ?>
<?php settings_fields( 'bonami_options_group' ); ?>
<?php do_settings_sections( 'bonami_options_group' ); ?>        
        <table class="form-table">

            <tr valign="top">
                <th scope="row"><label for="home">Тег заголовка главной страницы</label></th>
                <td><input type="text" name="bonami_meta_title" value="<?= get_option('bonami_meta_title'); ?>" class="regular-text code"/></td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="home">Адрес главной страницы</label></th>
                <td><input type="text" name="bonami_main_page_url" value="<?= get_option('bonami_main_page_url'); ?>" class="regular-text code"/></td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="home">Контактный телефон</label></th>
                <td><input type="text" name="bonami_contact_phone" value="<?= get_option('bonami_contact_phone'); ?>" class="regular-text code"/></td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="home">Контактный E-mail</label></th>
                <td><input type="text" name="bonami_contact_email" value="<?= get_option('bonami_contact_email'); ?>" class="regular-text code"/></td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="home">Адрес</label></th>
                <td><input type="text" name="bonami_address" value="<?= get_option('bonami_address'); ?>" class="regular-text code"/></td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="home">Время работы</label></th>
                <td><input type="text" name="bonami_worktime" value="<?= get_option('bonami_worktime'); ?>" class="regular-text code"/></td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="home">Овердрафт</label></th>
                <td><input type="text" name="bonami_overdraft" value="<?= get_option('bonami_overdraft'); ?>" class="regular-text code"/></td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="home">Параметры карты”</label></th>
                <td>
                    <table style="border: 1px solid gray; border-radius: 5px; padding: 5px;">
                        <tr>
                            <th scope="row"><label for="home">Координаты карты</label></th>
                            <td><input type="text" name="bonami_googlemap_mark" value="<?= get_option('bonami_googlemap_mark'); ?>" class="regular-text code"/></td>
                        </tr>
                        <tr>
                            <th scope="row"><label for="home">Zoom карты</label></th>
                            <td><input type="text" name="bonami_googlemap_zoom" value="<?= get_option('bonami_googlemap_zoom'); ?>" class="regular-text code"/></td>
                        </tr>
                        <tr>
                            <th scope="row"><label for="home"> API ключ</label></th>
                            <td><input type="text" name="bonami_googlemap_apikey" value="<?= get_option('bonami_googlemap_apikey'); ?>" class="regular-text code"/></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr valign="top">
                <th scope="row"><label for="home">Параметры платежной системы ОАО “Альфа-Банк”</label></th>
                <td>
                    <table style="border: 1px solid gray; border-radius: 5px; padding: 5px;">
                        <tr>
                            <th>Логин</th>
                            <td><input type="text" name="bonami_abank_login" value="<?= get_option('bonami_abank_login'); ?>" class="regular-text code"/></td>
                        </tr>
                        <tr>
                            <th>Пароль</th>
                            <td><input type="text" name="bonami_abank_password" value="<?= get_option('bonami_abank_password'); ?>" class="regular-text code"/></td>
                        </tr>
                        <tr>
                            <th>Тестовый режим</th>
                            <td><input type="checkbox" name="bonami_abank_test" value="1" class="regular-text code" <?= get_option('bonami_abank_test')?' checked ':''; ?>/></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <!--tr valign="top">
                <th scope="row"><label for="home">Сток на страние баланса</label></th>
                <td><input type="text" name="bonami_overdraft" value="<?= get_option('bonami_rows_count')?get_option('bonami_rows_count'):'20'; ?>" class="regular-text code"/></td>
            </tr-->
        </table>

<?php submit_button(); ?>


    </form>
</div>