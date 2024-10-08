<?php

/**
 * The Managers cabinet testimonials page 
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>

<!--Отзывы-->
<div class="flex-column-nowrap container main_table">
    <table class="mk_clients_table mk_testionials_table">
        <thead>
            <tr>
                <th>Дата отзыва</th>
                <th>Клиент (ФИО + услуга)</th>
                <th>Отзыв</th>
                <th>Размещение на сайте</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach (ManagerHelper::mt_get_testimonials() as $testimonial_id => $testimonial_info) : ?>
                <tr id="testimonial_row_<?= $testimonial_id; ?>">
                    <?php foreach ($testimonial_info as $key => $row) : ?>
                        <td class="table_cell_info <?= $row['class']; ?>" id="<?= $key . '_' . $testimonial_id ?>">
                            <?= $row['title']; ?>
                        </td>
                    <?php endforeach; ?>
                    <td>
                        <?php if (strpos($testimonial_info['content']['class'], 'publish')) : ?>
                            <btn class="mk-btn testimonial_unpublish" rel="<?= $testimonial_id; ?>">Снять</btn>
                        <?php else : ?>
                            <btn class="mk-btn testimonial_publish" rel="<?= $testimonial_id; ?>">Опубликовать</btn>
                        <?php endif; ?>
                        <btn class="mk-btn testimonial_remove " rel="<?= $testimonial_id; ?>">Удалить</btn>
                    </td>
                </tr>
            <?php endforeach; ?>
            <tr>
            </tr>
        </tbody>
    </table>
</div>