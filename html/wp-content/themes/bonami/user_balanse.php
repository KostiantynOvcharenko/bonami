<?php
/**
 * The User balanse page
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
$int_month = !empty($_GET['month']) ? substr($_GET['month'], 0, 7) : date('Y-m');

?>
<?php
/**
 * The User balanse page
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
$int_month = !empty($_GET['month']) ? substr($_GET['month'], 0, 7) : date('Y-m');
?>
<div class="bonami-page-container mk_user_balanse">
    <form id="mk_user_balanse_form" action="/balans">
        <input type="hidden" name="user_id" value="<?= $user_id ?>">
        <div class="input_box">
            <label for="mk_user_balans_month">Выберите месяц:</label>
            <select name="month" id="mk_user_balans_month">
                <?php foreach (ManagerHelper::mt_get_monthes($user_id) as $month) : ?>
                    <option <?= $month['month'] == $int_month ? 'selected' : ''; ?> value="<?= $month['month']; ?>"><?= $month['month_str']; ?> </option>
                <?php endforeach; ?>
            </select>
        </div>
    </form>

    <div class="flex-column-nowrap bonami_balanse">
        <div class="flex-row-nowrap balans_header">
            <span>Дата и время</span>
            <span>Сумма</span>
            <span class="crapfik_last">Описание транзакции</span>
        </div>
        <?php $debet=$credit=0;?>
        <?php foreach (ManagerHelper::get_mk_user_balanse($user_id, $int_month) as $transaction) : ?>
            <?php $debet+=$transaction['debet']; $credit+=$transaction['credit'];?>
            <div class="flex-row-nowrap balanse_content mk_balans">
                <span><?= date("d.m.Y", strtotime($transaction['day'])) ?></span>
                <span class="crapfik_bold"><?= $transaction['debet'] . ' руб.' ?></span>
                <span class="crapfik_bold"><?= $transaction['credit'] . ' руб.' ?></span>
                <span class="crapfik_last"><?= $transaction['comment'] ?></span>
            </div>
        <?php endforeach; ?>
        <div class="flex-row-nowrap balans_footer">
            <span>Итого:</span>
            <span><?= number_format($debet,2).' руб.'; ?></span>
            <span><?= number_format($credit,2).' руб.'; ?></span>
            <span></span>
        </div>
    </div>
</div>