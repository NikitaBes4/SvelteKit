<script>
	export let data;
</script>

<div class="layoutposts">
	<div class="posts">
		<slot />
	</div>

	<div class="users">
		{#each data.users as user}
        <p >
            <a href="/posts{user}">Пользователь №{user}</a>
        </p>
		{/each}
	</div>

</div>

<style>
	.layoutposts {
		display: flex;
		flex-direction: row;
		border: 1px black;
		margin: 20px;
	}
	.posts {
		width: 80%;
		border-right: 1px black;
	}
	.users {
		width: 20%;
		text-align: center;
    margin-top: 25px;
	}
</style>