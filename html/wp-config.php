<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bonami' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'bonami' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Zs-y(GZr%=YL8K*xK<N}W*d%mh[W5yX0HJ!D}OY-]zVl)mt^aC9:VqE7Rtgh1Dv6' );
define( 'SECURE_AUTH_KEY',  'aV-l?lnR@pCEMXQ(?14E)l!E:cCV%O<1@L;9(ec;*:? 7KNFhIx28}|dWFj.`^-w' );
define( 'LOGGED_IN_KEY',    '?qB!9{GRz%l=aRg8;R?MAGb3,O~mm?||GXkiUSV.MH,asLx>p.LT.f_o<vK^@eV$' );
define( 'NONCE_KEY',        'bukmRT(435Y$0j[AK@w5o]C@Yp^1V:H6MrxYk8ULO6d37g7D-`i!N1&qAQQMicw9' );
define( 'AUTH_SALT',        'd72y^8Y8HC>g;8McI0%Z6M7#xKeb(>H;Cvzg[Rgzlif|_FZ,+>dCKrH;.BbdxOaP' );
define( 'SECURE_AUTH_SALT', 'rm&l(4;1q8]-[W6gHB^*|g|TgJzqa:sY3@m-MyW*|D2 h5k0gck-uVSi$&[vZm;f' );
define( 'LOGGED_IN_SALT',   '@i|fvENMMC=Q<AZ85CLmb;aobPDv[~U|Pc_B6u1#EyA_ gX@eSO0r)OT>kv7.ANw' );
define( 'NONCE_SALT',       'r2A]JRY6m7OkfWfsn-=DK#Fr-Zutlt$7Ig7c9A%*O&b,*P[Dan,cfg7_D&aR=/@t' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
