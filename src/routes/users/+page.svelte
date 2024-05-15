<script>
    
export let data

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

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>