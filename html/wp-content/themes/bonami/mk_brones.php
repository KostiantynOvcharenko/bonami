<?php
/**
 * The Managers cabinet brones page 
 *
 * @package WordPress
 * @subpackage Bonami
 * @since Bonami 1.0
 */
?>
<!--Бронирование-->
<div class="flex-row-nowrap operation_buttons">
    <a type="button" class="b-btn b-btn_red im-popup-link" data-id="#date_servise_filter" >Фильтр по дате, услуге</a>
    <a type="button" class="b-btn b-btn_red im-popup-link" data-id="#mk_bronirovanie" href="/mk_bronirovanie">Добавить бронь</a>
    <a type="button" class="b-btn b-btn_red im-popup-link" data-id="#mk_bronirovanie_vip" href="/mk_bronirovanie_vip">Добавить VIP бронь</a>
</div>
<div class="mk cabinet___carousel_content calendar_container">
    <div id="carousel" class="cabinet___carousel_arrow left"></div>
    <div id="carousel" class="cabinet___carousel">
        <ul>
            <?php foreach (BonamiHelper::get_calendar_days(TRUE) as $key => $day): ?>
                <li rel="<?= $key; ?>" class="shown <?= $day['class'] ?>">
                    <a href="<?= $day['href'] ?>">
                        <h6><?= $day['title'] ?></h6>
                        <span><?= $day['number'] . ' ' . $day['str_month'] ?></span>
                    </a>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
    <div id="carousel" class="cabinet___carousel_arrow right"></div>
</div>
<div class="flex-column-nowrap container main_table">
    <h4>Брони на <?= ManagerHelper::flt_date_str()?></h4>
    <table class="user_brones">
        <thead>
            <tr>
                <th>Пользователь</th>
                <?php foreach ($get_min_period_keys as $period): ?>
                    <td><?= $period['title']; ?></td>
                <?php endforeach; ?>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <?php foreach (BonamiHelper::mt_table() as $user_id => $user_brones): ?>
                <tr style="display:none"><td id="user_info_data_<?= $user_id ?>" style="display:none"><?= json_encode($user_brones['user_info']) ?></td></tr>
                <tr>
                    <th><div class="flex-column-nowrap user_info">
                            <div class="user_name">
                                <span><?= $user_brones['user_info']['user_name'] . ' (' . $user_brones['user_info']['user_brones_count'] . ')' ?></span>
                                <span class="icon-info"></span>
                            </div>
                            <ul>
                                <li class="toggled userdata_hiden">Телефон: <?= $user_brones['user_info']['phone'] ?></li>
                                <li class="toggled userdata_hiden">E-mail: <?= $user_brones['user_info']['email'] ?></li>
                                <li class="toggled userdata_hiden">Овердрафт: <?= BonamiHelper::get_user_overdraft($user_id) ?> руб.</li>
                                <li>Баланс: <?= $user_brones['user_info']['user_balans'] ?> руб</li>
                                <li>
                                    <span style="display:none;" id="remove_user_<?= $user_brones['user_info']['user_id'] ?>" class="im-popup-link hiden" data-id="#remove_user_brone" ></span>
                                    <?php if (!empty($user_brones['brones'])): ?>
                                        <span type="button" class="b-btn remove_user_brone" user_id="<?= $user_brones['user_info']['user_id'] ?>" rel="remove_user_<?= $user_brones['user_info']['user_id'] ?>" > Удалить брони за день</span>
                                    <?php endif; ?>
                                </li>
                            </ul>
                        </div>
                    </th>
                    <?php foreach (array_keys($get_min_period_keys) as $p_key): ?>
                        <td class="table_cell_info">
                            <div class="service_icons">
                                <?php if (!empty($user_brones['brones'][$p_key])): ?>
                                    <?php foreach ($user_brones['brones'][$p_key] as $s_key => $_servise): ?>
                                        <?php foreach ($_servise as $brone_today): ?>
                                            <div class="td-box servise_item">
                                                    <span class="service_icon  <?= $brone_today['class']; ?>"></span>
                                                    <div class="flax_row_nowrap_item checkbox_icon hiden toggled">
                                                        <?php $element_id = $brone_today['id']; ?>
                                                        <?php $value = json_encode(array('user_id'=>$user_id, 'servise'=>$s_key, 'period'=>$brone_today['period'], 'time_period'=>$p_key)); ?>
                                                        <span id="info-<?= $element_id; ?>" style="display: none;"><?=json_encode($brone_today);?></span>
                                                        <input type="radio" name="brone_edit[<?= $user_id; ?>]" id="brone-<?= $element_id; ?>" class="b-checkbox__input brone_edit_<?=$user_id;?>" value='<?= $element_id; ?>'>
                                                        <label for="brone-<?= $element_id; ?>" class="b-checkbox__label">
                                                            <span class="b-checkbox__box"></span>
                                                        </label>
                                                    </div>
                                                <span class="uner_text"><?= $brone_today['under_text']; ?></span>

                                            </div>
                                        <?php endforeach; ?>
                                    <?php endforeach; ?>
                                <?php endif; ?>
                            </div>
                        </td>

                    <?php endforeach; ?>

                    <td>
                            <div class="flex-column-wrap">
                                <btn class="mk-btn toggled change_row">Изменить</btn>
                                <btn class="mk-btn menu toggled hiden im-popup-link add_user_brone_btn" data-id="#add_user_brone" user_id="<?= $user_id; ?>">Добавить</btn>
                                <btn class="mk-btn menu toggled hiden im-popup-link remove_user_brones_btn" data-id="#remove_user_brones" user_id="<?= $user_id; ?>">Удалить</btn>
                                <btn class="mk-btn menu toggled hiden im-popup-link move_user_brones_btn" data-id="#move_user_brones" user_id="<?= $user_id; ?>">Перенести</btn>
                            </div>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
    <span id="flt_period_data" style="display: none;"><?= json_encode($flt_period); ?></span>
    <span id="flt_min_period_keys" style="display: none;"><?= json_encode($get_min_period_keys); ?></span>
</div>


