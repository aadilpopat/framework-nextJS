<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db_frameworknextjslocal' );

/** Database username */
define( 'DB_USER', 'user_dbframeworknextjslocal' );

/** Database password */
define( 'DB_PASSWORD', 'user_dbframeworknextjslocal' );

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
define( 'AUTH_KEY',         '9)jmi>T0&3,Xrl]RJ~p[U]<S%lHbs|ZQll) {]kLR(n2ZE3l<3}naOry^HLenWPo' );
define( 'SECURE_AUTH_KEY',  'bOVjYOX,`1eHa7%^tZyaljXg&&qtS1-x&&D`7p|0*byB)8B=_0Rj!H>oeQP@YX2{' );
define( 'LOGGED_IN_KEY',    'OQX(?cEuc:by%JPwg+|Z)D]ln?`ezfK/s*>?2G[;7TU^IKTbX8(+vA?=]5#e{5D<' );
define( 'NONCE_KEY',        'fm=ER?8kN_FKvgz,.$rT;+af76tv@,`F-;~E%jHcIwwZ532r>?*v@rI<q^K|2s-b' );
define( 'AUTH_SALT',        'Ww|.rK)K1r0nlau~v}1)S|xT8B,>s&!;y/d|+-JDvyc_A4L%J_-33 Y<^^F.FCB2' );
define( 'SECURE_AUTH_SALT', 'C]H!>BS;E|1q^3kpdpQpQ^-y,z`NIjIT@3#)a3J$]uN7cEgw%o)I~qfi7q{<_9rv' );
define( 'LOGGED_IN_SALT',   'OjsSPTK6w1.t}gX>;qP5c9@{P)vZcz3_#x?LE^.yc&p:(4:+vKZIg6~A8zP72w~-' );
define( 'NONCE_SALT',       'QsVa>DOM#_d|<4fp4WD1QPtW>x`InnQq]1!6wTpMY^+$UcM5zL2bH]B&6A&s8=+^' );

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
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
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
