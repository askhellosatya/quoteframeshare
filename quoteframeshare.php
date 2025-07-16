<?php
/**
 * Plugin Name: QuoteFrameShare – Blockquote with Border, Citation, Copy & Social Share
 * Description: Easily add bordered blockquotes with citations. Copy or share quotes on social media in one click. Lightweight, SEO-friendly Gutenberg plugin for beginners.
 * Version: 3.1.8
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

/**
 * Registers the QuoteFrameShare block and its assets.
 */
function quoteframeshare_register_block() {
    $dir = plugin_dir_path( __FILE__ );
    $asset_file = include( $dir . 'build/index.asset.php' );

    // Register block editor script
    wp_register_script(
        'quoteframeshare-block',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version'],
        true
    );

    // Register frontend script
    wp_register_script(
        'quoteframeshare-frontend',
        plugins_url( 'build/frontend.js', __FILE__ ),
        array(),
        $asset_file['version'],
        true
    );

    // Register block editor style
    wp_register_style(
        'quoteframeshare-block-editor',
        plugins_url( 'build/index.css', __FILE__ ),
        array(),
        $asset_file['version']
    );

    // Register Font Awesome (used for social icons)
    wp_register_style(
        'quoteframeshare-fontawesome',
        plugins_url( 'assets/fontawesome/all.min.css', __FILE__ ),
        array(),
        '6.5.1'
    );

    // Register frontend style, dependent on Font Awesome
    wp_register_style(
        'quoteframeshare-block-frontend',
        plugins_url( 'build/frontend.css', __FILE__ ),
        array( 'quoteframeshare-fontawesome' ),
        '1.0.0'
    );

    // Register the block type
    register_block_type( 'quoteframeshare/block', array(
        'editor_script' => 'quoteframeshare-block',
        'editor_style'  => 'quoteframeshare-block-editor',
        'style'         => 'quoteframeshare-block-frontend',
        'script'        => 'quoteframeshare-frontend',
    ) );
}
add_action( 'init', 'quoteframeshare_register_block' );

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
add_filter( 'plugin_row_meta', function( $links, $file ) {
    if ( strpos( $file, 'quoteframeshare.php' ) !== false ) {
        $links[] = '<a href="https://wordpress.org/plugins/quoteframeshare-blockquote-share-copy/" target="_blank">View details</a>';
    }
    return $links;
}, 10, 2 );