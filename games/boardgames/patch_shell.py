#!/usr/bin/env python3
"""Add the site extras to a freshly exported Godot web shell (index.html).

Godot overwrites index.html on every export, so run this after copying a new
build over:  python3 games/boardgames/patch_shell.py <game folder>/index.html

Adds the noindex meta tag and a "Library" back button. Safe to run twice.
"""
import sys

NOINDEX = '<meta name="robots" content="noindex, nofollow">'

BACK_BUTTON = '''<!-- site: back button -->
<style>
#back-to-library {
	position: fixed;
	top: 10px;
	left: 10px;
	z-index: 10;
	padding: 6px 12px;
	border-radius: 6px;
	background: rgba(20, 12, 8, 0.6);
	color: #f3e6d0;
	font: 17px/1.2 Georgia, serif;
	text-decoration: none;
	opacity: 0.75;
	transition: opacity 0.2s, background 0.2s;
}
#back-to-library:hover, #back-to-library:focus-visible, #back-to-library.confirm { opacity: 1; }
#back-to-library.confirm { background: #b8322a; color: #fff; }
</style>
<a id="back-to-library" href="/boardgames.html">&larr; Library</a>
<script>
// First click asks, second click leaves, so a stray click doesn't end a game.
(function () {
	const link = document.getElementById('back-to-library');
	let timer = null;
	link.addEventListener('click', function (event) {
		if (link.classList.contains('confirm')) return;
		event.preventDefault();
		link.classList.add('confirm');
		link.textContent = 'Leave game? Click again';
		timer = setTimeout(function () {
			link.classList.remove('confirm');
			link.innerHTML = '&larr; Library';
		}, 3000);
	});
})();
</script>
<!-- /site: back button -->
'''


def main(path):
	with open(path, encoding='utf-8') as f:
		html = f.read()
	if NOINDEX not in html:
		html = html.replace('<head>', '<head>\n' + NOINDEX, 1)
	if '<!-- site: back button -->' not in html:
		html = html.replace('</body>', BACK_BUTTON + '</body>', 1)
	with open(path, 'w', encoding='utf-8') as f:
		f.write(html)


if __name__ == '__main__':
	for arg in sys.argv[1:]:
		main(arg)
