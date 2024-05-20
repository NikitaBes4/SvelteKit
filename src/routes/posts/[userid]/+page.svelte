<script>
    export let data;
    import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Посты{$page.params.userid}</title>
</svelte:head>
<div class="posts">
    {#each data.userposts as post}
        <div>
			<div class='position left' >
				{post.userId}
			</div>
			<div  class='position right'>
				{post.id}
			</div>
			<div>
			  {post.title}
		    </div>

		</div>
    {/each}
</div>

<style>
	.posts {
		 width: 95%; 
 		display: grid;

		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		grid-gap: 8px;
		padding: 15px 10px;
		margin: 20px auto;
		background-color: rgb(196, 155, 42);
    }
	.posts > * {
		display: grid;
		position: relative;
		justify-content: normal;
        align-content: start;
		padding: 0.75rem;
		font-size: 1.25rem;
		color: rgb(0, 0, 0);
		border: 1px solid black;
	}

	.position{
		background-color: rgb(196, 155, 42);
		position:absolute;
		
		top:3px;
		font-size:0.75rem
	}
	.left{
		left:10px; 
	}
	.right{
		right:10px; 
	}
</style>