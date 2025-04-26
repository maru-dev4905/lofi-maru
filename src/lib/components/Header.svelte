<script>
	import { page } from '$app/stores';
	$: currentPath = $page.url.pathname;
</script>

<header>
	<h1 class="logo">
		<a href="/"><img src="/assets/images/common/logo.svg" alt="LoFi Maru"></a>
	</h1>
	<nav class="gnb">
		<ul>
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