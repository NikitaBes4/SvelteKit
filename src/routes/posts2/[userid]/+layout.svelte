<script>
	export let data
	import { page } from '$app/stores';
</script>


<div class="layoutuserposts">
	<div class="menu">
		{#each data.userposts as post}
			<div class:active={post == $page.params.postid}>
				<a href="/posts2/{data.userid}/{post}">Пост №{post} </a>
			</div>
		{/each}
	</div>
	<div class="post">
		<slot />
	</div>
</div>

<style>
	.layoutuserposts {
		display: flex;
		flex-direction: row;
		border: 1px solid black;
		margin: 25px;
		text-align: justify;
		
	}

	.post {
		width: 90%;
		margin-left: 15px;
		margin-right: 15px;
	}
	.menu {
		width: 30%;
		text-align: center;
		min-width: 90px;
	}
	.active {
		background-color: blue;
		color: black;
	}
</style>