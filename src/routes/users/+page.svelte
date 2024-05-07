<script>
	const fetchPosts = (async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json()
	})
    let x = fetchPosts()
</script>

{#await x}
	<p>...waiting</p>
{:then data}
    <div class = "wrapper">
{#each data as item}
    <div class = "cellstyle">
    <div class = "positionleft">{item.id}</div>
    <div class = "positionright">{item.userId}</div>
    {item.title}
    <div/>
</div>
{/each}
</div>
{/await}

<style>
.wrapper {
    width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	grid-gap: 10px;
    padding: 10px 10px;
	margin: 20px auto;
    position: relative;

}
.cellstyle{
    padding: 20px 10px;
    gap: 5px;
    border: 2px solid black;
    position: relative;
}
.positionleft{
		position:absolute;
		top:1px;
		font-size:1rem;
        left: 10px;
        
}
.positionright{
		position:absolute;
		top:1px;
		font-size:1rem;
        right: 10px;
        
}
</style>