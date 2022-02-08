!(function () {
	'use strict';
	if (
		!(
			'function' == typeof Blob &&
			'function' == typeof PerformanceObserver &&
			'undefined' != typeof Intl &&
			'undefined' != typeof MutationObserver &&
			'undefined' != typeof URLSearchParams &&
			'undefined' != typeof WebSocket &&
			'undefined' != typeof IntersectionObserver &&
			'undefined' != typeof AbortController &&
			'undefined' != typeof queueMicrotask &&
			'undefined' != typeof TextEncoder &&
			'undefined' != typeof TextDecoder &&
			'undefined' != typeof customElements &&
			'undefined' != typeof HTMLDetailsElement &&
			'entries' in FormData.prototype &&
			'toggleAttribute' in Element.prototype &&
			'flatMap' in Array.prototype
		)
	) {
		function showUnsupportedBrowser() {
			var e = document.getElementById('unsupported-browser');
			e && e.removeAttribute('hidden');
		}

		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', showUnsupportedBrowser);
		} else {
			showUnsupportedBrowser();
		}
	}
})();
