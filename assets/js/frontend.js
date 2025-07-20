// QuoteFrameShare frontend logic: copy to clipboard & social share links
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.qfs-blockquote').forEach(function (block) {
        // Copy to clipboard functionality
        var copyBtn = block.querySelector('.qfs-copy');
        if (copyBtn) {
            copyBtn.addEventListener('click', function () {
                var quoteEl = block.querySelector('p');
                var citationEl = block.querySelector('cite');
                var quote = quoteEl ? quoteEl.innerText : '';
                var citation = citationEl ? citationEl.innerText : '';
                var text = quote;
                if (citation) text += '\n— ' + citation;
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(text);
                    // Show "Copied!" alert
                    var alert = document.createElement('div');
                    alert.className = 'qfs-copied-alert';
                    alert.innerText = 'Copied!';
                    copyBtn.parentNode.appendChild(alert);
                    setTimeout(function() {
                        if (alert.parentNode) alert.parentNode.removeChild(alert);
                    }, 1200);
                }
            });
        }

        // Social share link generation
        function getShareText() {
            var quoteEl = block.querySelector('p');
            var citationEl = block.querySelector('cite');
            var quote = quoteEl ? quoteEl.innerText : '';
            var citation = citationEl ? citationEl.innerText : '';
            var text = '"' + quote + '"';
            if (citation) text += ' — ' + citation;
            return text;
        }
        function getShareUrl() {
            return window.location.href;
        }

        // Facebook share
        var fb = block.querySelector('.qfs-facebook');
        if (fb) {
            fb.href = 'https://www.facebook.com/sharer/sharer.php?u=' +
                encodeURIComponent(getShareUrl()) +
                '&quote=' + encodeURIComponent(getShareText());
        }
        // WhatsApp share
        var wa = block.querySelector('.qfs-whatsapp');
        if (wa) {
            wa.href = 'https://wa.me/?text=' +
                encodeURIComponent(getShareText() + ' ' + getShareUrl());
        }
        // Telegram share
        var tg = block.querySelector('.qfs-telegram');
        if (tg) {
            tg.href = 'https://t.me/share/url?url=' +
                encodeURIComponent(getShareUrl()) +
                '&text=' + encodeURIComponent(getShareText());
        }
        // X (Twitter) share
        var x = block.querySelector('.qfs-x');
        if (x) {
            x.href = 'https://twitter.com/intent/tweet?text=' +
                encodeURIComponent(getShareText() + ' ' + getShareUrl());
        }
    });
});