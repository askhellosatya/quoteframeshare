<?php
/**
 * Plugin Name: QuoteFrameShare – Beautiful Blockquotes with Citation, Copy & Social Share
 * Description: Easily add bordered blockquotes with citations. Copy or share quotes on social media in one click. Lightweight, SEO-friendly Gutenberg plugin for beginners.
 * Version: 3.2.0
 * Author: Satyam Vishwakarma (Satya)
 * Author URI: https://profiles.wordpress.org/hellosatya/
 * Plugin URI: https://wordpress.org/plugins/quoteframeshare-blockquote-share-copy/
 * License: GPLv2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Tested up to: 6.8
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'QUOTEFRAMESHARE_VERSION' ) ) {
	/**
	 * Define the plugin version.
	 */
	define( 'QUOTEFRAMESHARE_VERSION', '3.2.0' );
}



/**
 * Enqueue Font Awesome for both frontend and editor.
 */
function quoteframeshare_enqueue_fontawesome() {
	wp_enqueue_style(
		'quoteframeshare-fontawesome',
		plugins_url( 'assets/fontawesome/all.min.css', __FILE__ ),
		array(),
		'6.7.2'
	);
}
add_action( 'wp_enqueue_scripts', 'quoteframeshare_enqueue_fontawesome' );
add_action( 'enqueue_block_editor_assets', 'quoteframeshare_enqueue_fontawesome' );

/**
 * Add 'View details' link in the plugin row on the plugins page.
 */
add_filter(
	'plugin_row_meta',
	function ( $links, $file ) {
		if ( strpos( $file, 'quoteframeshare.php' ) !== false ) {
			$links[] = '<a href="https://wordpress.org/plugins/quoteframeshare-blockquote-share-copy/" target="_blank">View details</a>';
		}
		return $links;
	},
	10,
	2
);

/**
 * Register the QuoteFrameShare block.
 *
 * @return void
 */
function quoteframeshare_register_block() {
	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
	 * based on the registered block metadata.
	 * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
	 *
	 * @see https://make.wordpress.org/core/2025/03/13/more-efficient-block-type-registration-in-6-8/
	 */
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}

	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` file.
	 * Added to WordPress 6.7 to improve the performance of block type registration.
	 *
	 * @see https://make.wordpress.org/core/2024/10/17/new-block-type-registration-apis-to-improve-performance-in-wordpress-6-7/
	 */
	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}
	/**
	 * Registers the block type(s) in the `blocks-manifest.php` file.
	 *
	 * @see https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}
add_action( 'init', 'quoteframeshare_register_block' );

/**
 * Enqueue Custom script.
 *
 * @return void
 */
function quoteframeshare_enqueue_script() {

	wp_enqueue_script(
		'quoteframeshare-frontend',
		plugins_url( 'assets/js/frontend.js', __FILE__ ),
		array(),
		QUOTEFRAMESHARE_VERSION,
		true
	);
}
add_action( 'enqueue_block_assets', 'quoteframeshare_enqueue_script' );
