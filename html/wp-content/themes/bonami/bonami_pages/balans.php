<?php
/**
 * The template for personal user cabinet balanses
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>

<div class="cabinet__top_menu_container">
    <a href="cabinet" >Мои брони</a>
    <a href="profile">Профиль</a>
    <a href="" class="bon_active">История списаний</a>
</div>

<div class="bonami-page-container">
    <div class="flex-column-nowrap bonami_balanse">
        <div class="flex-row-nowrap balans_header">
            <span>Дата и время</span>
            <span>Сумма</span>
            <span>Описание транзакции</span>
        </div>
        
        <?php foreach (BonamiHelper::get_user_balanse_transactions($user_id) as $transaction) : ?>
            <div class="flex-row-nowrap balanse_content">
                <span><?= date("d.m.Y", strtotime($transaction['oper_time'])) ?></span>
                <span class="crapfik_bold"><?= ($transaction['sum']<0)?$transaction['sum'].'.00':$transaction['sum'].' руб.' ?></span>
                <span><?= $transaction['comment'] ?></span>
            </div>
        <?php endforeach; ?>
    </div>
    <?php $pages_count = BonamiHelper::get_user_balanse_transaction_pages_count($user_id); ?>
    <?php if($pages_count>1):?>
        <div class="flex-row-nowrap balanse_pagination">
            <a href="/" class="pagenum first"></a>
            <dv class="flex-row-wrap pagenation_pages_numbers">
                <?php for ($i = 0; $i < $pages_count; $i++) : $page_num = $i + 1; ?>
                    <a href="<?= get_permalink();?>page_<?= $page_num; ?>" class="pagenum">
                        <?= $page_num ?>
                    </a>
                <?php endfor; ?>
            </dv>
            <a href="/" class="pagenum last"></a>
        </div>
    <?php endif;?>
</div>