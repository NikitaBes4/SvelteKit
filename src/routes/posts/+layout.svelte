<script>
	export let data;
</script>

<div class="layoutposts">
	<div class="posts">
		<slot />
	</div>

	<div class="users">
		{#each data.users as user}
		<p>
			<a href='/posts/{user}'>Пользователь №{user}</a>
		  </p>
		{/each}
	</div>

</div>

<style>
	.layoutposts {
		display: flex;
		flex-direction: row;
		border: 2px black;
		margin: 20px;
	}
	.posts {
		width: 100%;
		border-right: 1px black;
	}
	.users {
		width: 25%;
		text-align: center;
    margin-top: 15px;
	}
</style>