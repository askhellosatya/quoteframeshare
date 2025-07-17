(function(blocks, element, blockEditor, components) {
    var el = element.createElement;
    var Fragment = element.Fragment;
    var RichText = blockEditor.RichText;
    var InspectorControls = blockEditor.InspectorControls;
    var PanelBody = components.PanelBody;
    var ColorPalette = blockEditor.ColorPalette;
    var ToggleControl = components.ToggleControl;
    var RangeControl = components.RangeControl;
    var SelectControl = components.SelectControl;
    var TabPanel = components.TabPanel;
    var useState = element.useState;

    function Icon(props) {
        var icon = props.icon || 'fa-question';
        var prefix = icon === 'fa-copy' ? 'fa' : 'fab';
        return el('i', { className: prefix + ' ' + icon, style: { color: '#fff', fontSize: '1.2em' }, 'aria-hidden': true });
    }

    function getSocialBg(type) {
        if (type === 'facebook') return '#1877F3';
        if (type === 'whatsapp') return '#25D366';
        if (type === 'telegram') return '#0088cc';
        if (type === 'x') return '#000';
        if (type === 'copy') return '#222';
        return '#222';
    }

    blocks.registerBlockType('quoteframeshare/block', {
        title: 'QuoteFrameShare',
        icon: 'format-quote',
        category: 'widgets',
        attributes: {
            quote: { type: 'string', source: 'html', selector: 'blockquote' },
            citation: { type: 'string', source: 'text', selector: 'cite' },
            bgColor: { type: 'string', default: '#e0e0e0' },
            textColor: { type: 'string', default: '#222' },
            borderColor: { type: 'string', default: '#e0e0e0' },
            borderWidth: { type: 'number', default: 0 },
            borderRadius: { type: 'number', default: 32 },
            borderStyle: { type: 'string', default: 'solid' },
            showFacebook: { type: 'boolean', default: true },
            showWhatsapp: { type: 'boolean', default: true },
            showTelegram: { type: 'boolean', default: true },
            showX: { type: 'boolean', default: true },
            showCopy: { type: 'boolean', default: true },
            btnSize: { type: 'number', default: 64 },
            quoteFontSize: { type: 'number', default: 24 },
            quoteFontFamily: { type: 'string', default: 'inherit' },
            quoteFontWeight: { type: 'string', default: 'normal' },
            quoteColor: { type: 'string', default: '#222' },
            citationFontSize: { type: 'number', default: 18 },
            citationFontFamily: { type: 'string', default: 'inherit' },
            citationFontWeight: { type: 'string', default: 'normal' },
            citationColor: { type: 'string', default: '#555' },
            padding: { type: 'number', default: 32 },
            margin: { type: 'number', default: 24 },
            shadow: { type: 'boolean', default: true },
            facebookIcon: { type: 'string', default: 'fa-facebook-f' },
            whatsappIcon: { type: 'string', default: 'fa-whatsapp' },
            telegramIcon: { type: 'string', default: 'fa-telegram' },
            xIcon: { type: 'string', default: 'fa-x-twitter' },
            copyIcon: { type: 'string', default: 'fa-copy' },
            maxWidth: { type: 'number', default: 500 }
        },
        edit: function(props) {
            var attrs = props.attributes;
            var _useState = useState(false), copied = _useState[0], setCopied = _useState[1];
>>>>>>> cb4c2d2 (Initial commit: fixed icon issues, improved sidebar UI, cleaned up structure, updated version to 3.1.8.11)

            function showCopied() {
                setCopied(true);
                setTimeout(function() { setCopied(false); }, 1200);
            }

            return [
                el(InspectorControls, {},
                    el(TabPanel, {
                        className: "qfs-tabs",
                        activeClass: "is-active",
                        tabs: [
                            { name: 'settings', title: 'Settings', className: 'qfs-tab-settings' },
                            { name: 'style', title: 'Style', className: 'qfs-tab-style' }
                        ],
                        initialTabName: 'settings'
                    }, function(tab) {
                        if (tab.name === 'settings') {
                            return el(Fragment, {},
                                el(PanelBody, { title: 'Socials', initialOpen: true },
                                    el(ToggleControl, {
                                        label: 'Show Copy Button',
                                        checked: attrs.showCopy,
                                        onChange: function(val) { props.setAttributes({ showCopy: val }); }
                                    }),
                                    el(SelectControl, {
                                        label: 'Copy Icon',
                                        value: attrs.copyIcon,
                                        options: [
                                            { label: 'Default (Copy)', value: 'fa-copy' },
                                            { label: 'Clipboard', value: 'fa-clipboard' },
                                            { label: 'Check', value: 'fa-check' }
                                        ],
                                        onChange: function(val) { props.setAttributes({ copyIcon: val }); }
                                    }),
                                    el(ToggleControl, {
                                        label: 'Show Facebook',
                                        checked: attrs.showFacebook,
                                        onChange: function(val) { props.setAttributes({ showFacebook: val }); }
                                    }),
                                    el(SelectControl, {
                                        label: 'Facebook Icon',
                                        value: attrs.facebookIcon,
                                        options: [
                                            { label: 'Default (f)', value: 'fa-facebook-f' },
                                            { label: 'Square', value: 'fa-facebook-square' },
                                            { label: 'Circle', value: 'fa-facebook' }
                                        ],
                                        onChange: function(val) { props.setAttributes({ facebookIcon: val }); }
                                    }),
                                    el(ToggleControl, {
                                        label: 'Show WhatsApp',
                                        checked: attrs.showWhatsapp,
                                        onChange: function(val) { props.setAttributes({ showWhatsapp: val }); }
                                    }),
                                    el(SelectControl, {
                                        label: 'WhatsApp Icon',
                                        value: attrs.whatsappIcon,
                                        options: [
                                            { label: 'Default', value: 'fa-whatsapp' },
                                            { label: 'Square', value: 'fa-whatsapp-square' }
                                        ],
                                        onChange: function(val) { props.setAttributes({ whatsappIcon: val }); }
                                    }),
                                    el(ToggleControl, {
                                        label: 'Show Telegram',
                                        checked: attrs.showTelegram,
                                        onChange: function(val) { props.setAttributes({ showTelegram: val }); }
                                    }),
                                    el(SelectControl, {
                                        label: 'Telegram Icon',
                                        value: attrs.telegramIcon,
                                        options: [
                                            { label: 'Default', value: 'fa-telegram' },
                                            { label: 'Plane', value: 'fa-paper-plane' }
                                        ],
                                        onChange: function(val) { props.setAttributes({ telegramIcon: val }); }
                                    }),
                                    el(ToggleControl, {
                                        label: 'Show X (Twitter)',
                                        checked: attrs.showX,
                                        onChange: function(val) { props.setAttributes({ showX: val }); }
                                    }),
                                    el(SelectControl, {
                                        label: 'X (Twitter) Icon',
                                        value: attrs.xIcon,
                                        options: [
                                            { label: 'X (Twitter)', value: 'fa-x-twitter' },
                                            { label: 'Twitter', value: 'fa-twitter' },
                                            { label: 'Twitter Square', value: 'fa-twitter-square' }
                                        ],
                                        onChange: function(val) { props.setAttributes({ xIcon: val }); }
                                    }),
                                    el(RangeControl, {
                                        label: 'Button Size (px)',
                                        value: attrs.btnSize,
                                        min: 40, max: 100,
                                        onChange: function(val) { props.setAttributes({ btnSize: val }); }
                                    })
                                ),
                                el(PanelBody, { title: 'Typography', initialOpen: false },
                                    el('h4', {}, 'Quote Typography'),
                                    el(RangeControl, {
                                        label: 'Font Size (px)',
                                        value: attrs.quoteFontSize,
                                        min: 12, max: 48,
                                        onChange: function(val) { props.setAttributes({ quoteFontSize: val }); }
                                    }),
                                    el(SelectControl, {
                                        label: 'Font Family',
                                        value: attrs.quoteFontFamily,
                                        options: [
                                            { label: 'Default', value: 'inherit' },
                                            { label: 'Serif', value: 'serif' },
                                            { label: 'Sans-serif', value: 'sans-serif' },
                                            { label: 'Monospace', value: 'monospace' }
                                        ],
                                        onChange: function(val) { props.setAttributes({ quoteFontFamily: val }); }
                                    }),
                                    el(SelectControl, {
                                        label: 'Font Weight',
                                        value: attrs.quoteFontWeight,
                                        options: [
                                            { label: 'Normal', value: 'normal' },
                                            { label: 'Bold', value: 'bold' },
                                            { label: 'Bolder', value: 'bolder' },
                                            { label: 'Light', value: 'lighter' }
                                        ],
                                        onChange: function(val) { props.setAttributes({ quoteFontWeight: val }); }
                                    }),
                                    el('p', {}, 'Quote Text Color'),
                                    el(ColorPalette, {
                                        value: attrs.quoteColor,
                                        onChange: function(color) { props.setAttributes({ quoteColor: color }); }
                                    }),
                                    el('h4', {}, 'Citation Typography'),
                                    el(RangeControl, {
                                        label: 'Font Size (px)',
                                        value: attrs.citationFontSize,
                                        min: 10, max: 32,
                                        onChange: function(val) { props.setAttributes({ citationFontSize: val }); }
                                    }),
                                    el(SelectControl, {
                                        label: 'Font Family',
                                        value: attrs.citationFontFamily,
                                        options: [
                                            { label: 'Default', value: 'inherit' },
                                            { label: 'Serif', value: 'serif' },
                                            { label: 'Sans-serif', value: 'sans-serif' },
                                            { label: 'Monospace', value: 'monospace' }
                                        ],
                                        onChange: function(val) { props.setAttributes({ citationFontFamily: val }); }
                                    }),
                                    el(SelectControl, {
                                        label: 'Font Weight',
                                        value: attrs.citationFontWeight,
                                        options: [
                                            { label: 'Normal', value: 'normal' },
                                            { label: 'Bold', value: 'bold' },
                                            { label: 'Bolder', value: 'bolder' },
                                            { label: 'Light', value: 'lighter' }
                                        ],
                                        onChange: function(val) { props.setAttributes({ citationFontWeight: val }); }
                                    }),
                                    el('p', {}, 'Citation Text Color'),
                                    el(ColorPalette, {
                                        value: attrs.citationColor,
                                        onChange: function(color) { props.setAttributes({ citationColor: color }); }
                                    })
                                )
                            );
                        }
                        if (tab.name === 'style') {
                            return el(Fragment, {},
                                el(PanelBody, { title: 'Spacing & Border', initialOpen: true },
                                    el(RangeControl, {
                                        label: 'Padding (px)',
                                        value: attrs.padding,
                                        min: 8, max: 64,
                                        onChange: function(val) { props.setAttributes({ padding: val }); }
                                    }),
                                    el(RangeControl, {
                                        label: 'Margin Bottom (px)',
                                        value: attrs.margin,
                                        min: 0, max: 64,
                                        onChange: function(val) { props.setAttributes({ margin: val }); }
                                    }),
                                    el(RangeControl, {
                                        label: 'Block Max Width (px)',
                                        value: attrs.maxWidth,
                                        min: 300,
                                        max: 900,
                                        step: 10,
                                        onChange: function(val) { props.setAttributes({ maxWidth: val }); }
                                    }),
                                    el('p', {}, 'Border Color'),
                                    el(ColorPalette, {
                                        value: attrs.borderColor,
                                        onChange: function(color) { props.setAttributes({ borderColor: color }); }
                                    }),
                                    el(RangeControl, {
                                        label: 'Border Width (px)',
                                        value: attrs.borderWidth,
                                        min: 0, max: 12,
                                        onChange: function(val) { props.setAttributes({ borderWidth: val }); }
                                    }),
                                    el(RangeControl, {
                                        label: 'Border Radius (px)',
                                        value: attrs.borderRadius,
                                        min: 0, max: 64,
                                        onChange: function(val) { props.setAttributes({ borderRadius: val }); }
                                    }),
                                    el(SelectControl, {
                                        label: 'Border Style',
                                        value: attrs.borderStyle,
                                        options: [
                                            { label: 'Solid', value: 'solid' },
                                            { label: 'Dashed', value: 'dashed' },
                                            { label: 'Dotted', value: 'dotted' }
                                        ],
                                        onChange: function(val) { props.setAttributes({ borderStyle: val }); }
                                    }),
                                    el(ToggleControl, {
                                        label: 'Box Shadow',
                                        checked: attrs.shadow,
                                        onChange: function(val) { props.setAttributes({ shadow: val }); }
                                    })
                                ),
                                el(PanelBody, { title: 'Quote Block Colors', initialOpen: false },
                                    el('p', {}, 'Block Background Color'),
                                    el(ColorPalette, {
                                        value: attrs.bgColor,
                                        onChange: function(color) { props.setAttributes({ bgColor: color }); }
                                    }),
                                )
                            );
                        }
                    })
                ),
                el('blockquote', {
                    className: 'qfs-blockquote',
                    style: {
                        background: attrs.bgColor,
                        color: attrs.textColor,
                        borderRadius: attrs.borderRadius + 'px',
                        padding: attrs.padding + 'px',
                        textAlign: 'center',
                        border: attrs.borderWidth + 'px ' + attrs.borderStyle + ' ' + attrs.borderColor,
                        boxShadow: attrs.shadow ? '0 2px 12px rgba(0,0,0,0.10)' : 'none',
                        marginBottom: attrs.margin + 'px',
                        maxWidth: (attrs.maxWidth || 500) + 'px'
                    }
                },
                    el(RichText, {
                        tagName: 'p',
                        value: attrs.quote,
                        onChange: function(value) { props.setAttributes({ quote: value }); },
                        placeholder: 'Add quote…',
                        style: {
                            fontSize: attrs.quoteFontSize + 'px',
                            fontFamily: attrs.quoteFontFamily,
                            fontWeight: attrs.quoteFontWeight,
                            color: attrs.quoteColor
                        }
                    }),
                    el(RichText, {
                        tagName: 'cite',
                        value: attrs.citation,
                        onChange: function(value) { props.setAttributes({ citation: value }); },
                        placeholder: 'Citation (optional)',
                        style: {
                            fontSize: attrs.citationFontSize + 'px',
                            fontFamily: attrs.citationFontFamily,
                            fontWeight: attrs.citationFontWeight,
                            color: attrs.citationColor
                        }
                    }),
                    el('div', { className: 'qfs-actions' },
                        attrs.showCopy && el('button', {
                            className: 'qfs-copy',
                            type: 'button',
                            tabIndex: -1,
                            style: {
                                background: getSocialBg('copy'),
                                width: attrs.btnSize + 'px',
                                height: attrs.btnSize + 'px',
                                textDecoration: 'none'
                            },
                            onClick: showCopied
                        }, el(Icon, { icon: attrs.copyIcon })),
                        attrs.showFacebook && el('a', {
                            className: 'qfs-share qfs-facebook',
                            href: '#',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            tabIndex: -1,
                            style: {
                                background: getSocialBg('facebook'),
                                width: attrs.btnSize + 'px',
                                height: attrs.btnSize + 'px',
                                textDecoration: 'none'
                            }
                        }, el(Icon, { icon: attrs.facebookIcon })),
                        attrs.showWhatsapp && el('a', {
                            className: 'qfs-share qfs-whatsapp',
                            href: '#',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            tabIndex: -1,
                            style: {
                                background: getSocialBg('whatsapp'),
                                width: attrs.btnSize + 'px',
                                height: attrs.btnSize + 'px',
                                textDecoration: 'none'
                            }
                        }, el(Icon, { icon: attrs.whatsappIcon })),
                        attrs.showTelegram && el('a', {
                            className: 'qfs-share qfs-telegram',
                            href: '#',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            tabIndex: -1,
                            style: {
                                background: getSocialBg('telegram'),
                                width: attrs.btnSize + 'px',
                                height: attrs.btnSize + 'px',
                                textDecoration: 'none'
                            }
                        }, el(Icon, { icon: attrs.telegramIcon })),
                        attrs.showX && el('a', {
                            className: 'qfs-share qfs-x',
                            href: '#',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            tabIndex: -1,
                            style: {
                                background: getSocialBg('x'),
                                width: attrs.btnSize + 'px',
                                height: attrs.btnSize + 'px',
                                textDecoration: 'none'
                            }
                        }, el(Icon, { icon: attrs.xIcon }))
                    ),
                    copied && el('div', { className: 'qfs-copied-alert' }, 'Copied!')
                )
            ];
        },
        save: function(props) {
            var attrs = props.attributes;
            function btnStyle(bg) {
                return {
                    background: bg,
                    width: attrs.btnSize + 'px',
                    height: attrs.btnSize + 'px',
                    textDecoration: 'none'
                };
            }
            return el('blockquote', {
                className: 'qfs-blockquote',
                style: {
                    background: attrs.bgColor,
                    color: attrs.textColor,
                    borderRadius: attrs.borderRadius + 'px',
                    padding: attrs.padding + 'px',
                    textAlign: 'center',
                    border: attrs.borderWidth + 'px ' + attrs.borderStyle + ' ' + attrs.borderColor,
                    boxShadow: attrs.shadow ? '0 2px 12px rgba(0,0,0,0.10)' : 'none',
                    marginBottom: attrs.margin + 'px',
                    maxWidth: (attrs.maxWidth || 500) + 'px'
                }
            },
                el(RichText.Content, {
                    tagName: 'p',
                    value: attrs.quote,
                    style: {
                        fontSize: attrs.quoteFontSize + 'px',
                        fontFamily: attrs.quoteFontFamily,
                        fontWeight: attrs.quoteFontWeight,
                        color: attrs.quoteColor
                    }
                }),
                el(RichText.Content, {
                    tagName: 'cite',
                    value: attrs.citation,
                    style: {
                        fontSize: attrs.citationFontSize + 'px',
                        fontFamily: attrs.citationFontFamily,
                        fontWeight: attrs.citationFontWeight,
                        color: attrs.citationColor
                    }
                }),
                el('div', { className: 'qfs-actions' },
                    attrs.showCopy && el('button', {
                        className: 'qfs-copy',
                        type: 'button',
                        tabIndex: -1,
                        style: btnStyle(getSocialBg('copy'))
                    }, el(Icon, { icon: attrs.copyIcon })),
                    attrs.showFacebook && el('a', {
                        className: 'qfs-share qfs-facebook',
                        href: '#',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        tabIndex: -1,
                        style: btnStyle(getSocialBg('facebook'))
                    }, el(Icon, { icon: attrs.facebookIcon })),
                    attrs.showWhatsapp && el('a', {
                        className: 'qfs-share qfs-whatsapp',
                        href: '#',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        tabIndex: -1,
                        style: btnStyle(getSocialBg('whatsapp'))
                    }, el(Icon, { icon: attrs.whatsappIcon })),
                    attrs.showTelegram && el('a', {
                        className: 'qfs-share qfs-telegram',
                        href: '#',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        tabIndex: -1,
                        style: btnStyle(getSocialBg('telegram'))
                    }, el(Icon, { icon: attrs.telegramIcon })),
                    attrs.showX && el('a', {
                        className: 'qfs-share qfs-x',
                        href: '#',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        tabIndex: -1,
                        style: btnStyle(getSocialBg('x'))
                    }, el(Icon, { icon: attrs.xIcon }))
                )
            );
        }
    });
})(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor,
    window.wp.components
);
