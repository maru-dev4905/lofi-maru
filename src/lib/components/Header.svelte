<script>
	import { page } from '$app/stores';
	$: currentPath = $page.url.pathname;
</script>

<header>
	<nav class="gnb">
		<ul>
			<li>
				<a href="/" class:active={currentPath === '/'}>Home</a>
			</li>
			<li>
				<a href="/about" class:active={currentPath === '/about'}>About</a>
			</li>
			<li>
				<a href="/music" class:active={currentPath === '/music'}>Music</a>
			</li>
			<li>
				<a href="/contact" class:active={currentPath === '/contact'}>Contact</a>
			</li>
		</ul>
	</nav>
</header>
