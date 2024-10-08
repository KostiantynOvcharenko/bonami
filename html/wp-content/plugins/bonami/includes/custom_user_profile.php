<?php
/**
 * The Bonami administrator customise user profile
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
// var_dump($profileuser);
?>
    <input type="hidden" id="credit_user_id" name="user_id" value="<?= $profileuser->ID;?>">
    <input type="hidden" id="credit_comment" name="comment" value="Пополнение счета менеджером">
<table class="form-table" role="presentation">
	<tbody>
            <tr class="user-email-wrap">
		<th><label for="email">Баланс</label></th>
                <td colspan="2" id="bonami_user_balanse">
                    <?= BonamiHelper::get_user_balanse($profileuser->ID);?> руб.
                </td>
            <tr class="user-email-wrap">
            </tr>
		<th><label for="email">Пополнение баланса</label></th>
		<td>
                    <input type="text" name="user_credit" id="user_credit" class="regular-text ltr">
                </td>
		<td>
                    <label for="user_credit_yes" >Да</label>
                    <input type="radio" id = "user_credit_yes" name="do_user_credit" value="1">
                    <label for="user_credit_no" >Нет</label>
                    <input type="radio" id = "user_credit_no" name="do_user_credit" value="0" checked>
                </td>
		<td>
                    <input type="submit" name="add_credit_to_user_submit" id="add_credit_to_user_submit" class="button button-primary" value="Пополнить">
                </td>
            </tr>
            <tr class="user-email-wrap">
                <td colspan="3" id="add_credit_to_user_msg"></td>
            <tr class="user-email-wrap">
        </tbody>
</table>
