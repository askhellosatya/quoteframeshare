<?php
// This file is generated. Do not modify it manually.
return array(
	'quote-frame-share' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'satya/quoteframeshare',
		'version' => '3.2.0.1',
		'title' => 'Quote Frame Share',
		'category' => 'widgets',
		'icon' => 'format-quote',
		'description' => 'Beautiful Blockquotes with Citation, Copy & Social Share.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'interactivity' => true
		),
		'attributes' => array(
			'quote' => array(
				'type' => 'string',
				'default' => ''
			),
			'citation' => array(
				'type' => 'string',
				'default' => ''
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => '#e0e0e0'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#222'
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => '#e0e0e0'
			),
			'borderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 32
			),
			'borderStyle' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'showFacebook' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showWhatsapp' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showTelegram' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showX' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showCopy' => array(
				'type' => 'boolean',
				'default' => true
			),
			'btnSize' => array(
				'type' => 'number',
				'default' => 64
			),
			'quoteFontSize' => array(
				'type' => 'number',
				'default' => 24
			),
			'quoteFontFamily' => array(
				'type' => 'string',
				'default' => 'inherit'
			),
			'quoteFontWeight' => array(
				'type' => 'string',
				'default' => 'normal'
			),
			'quoteColor' => array(
				'type' => 'string',
				'default' => '#222'
			),
			'citationFontSize' => array(
				'type' => 'number',
				'default' => 18
			),
			'citationFontFamily' => array(
				'type' => 'string',
				'default' => 'inherit'
			),
			'citationFontWeight' => array(
				'type' => 'string',
				'default' => 'normal'
			),
			'citationColor' => array(
				'type' => 'string',
				'default' => '#555'
			),
			'padding' => array(
				'type' => 'number',
				'default' => 32
			),
			'margin' => array(
				'type' => 'number',
				'default' => 24
			),
			'shadow' => array(
				'type' => 'boolean',
				'default' => true
			),
			'facebookIcon' => array(
				'type' => 'string',
				'default' => 'fa-facebook-f'
			),
			'whatsappIcon' => array(
				'type' => 'string',
				'default' => 'fa-whatsapp'
			),
			'telegramIcon' => array(
				'type' => 'string',
				'default' => 'fa-telegram'
			),
			'xIcon' => array(
				'type' => 'string',
				'default' => 'fa-x-twitter'
			),
			'copyIcon' => array(
				'type' => 'string',
				'default' => 'fa-copy'
			),
			'maxWidth' => array(
				'type' => 'number',
				'default' => 500
			)
		),
		'textdomain' => 'quote-frame-share',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
