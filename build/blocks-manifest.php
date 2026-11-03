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
			'attributes' => array(
				'quote' => 'Code is poetry.',
				'citation' => 'WordPress'
			)
		),
		'supports' => array(
			'html' => false,
			'interactivity' => true,
			'anchor' => true,
			'color' => array(
				'background' => true,
				'text' => true,
				'gradients' => true,
				'link' => false
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'__experimentalFontFamily' => true,
				'__experimentalFontWeight' => true,
				'__experimentalFontStyle' => true,
				'__experimentalLetterSpacing' => true,
				'__experimentalDefaultControls' => array(
					'fontSize' => true
				)
			),
			'spacing' => array(
				'padding' => true,
				'margin' => true,
				'__experimentalDefaultControls' => array(
					'padding' => true
				)
			),
			'__experimentalBorder' => array(
				'color' => true,
				'radius' => true,
				'style' => true,
				'width' => true,
				'__experimentalDefaultControls' => array(
					'radius' => true
				)
			),
			'shadow' => true
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
