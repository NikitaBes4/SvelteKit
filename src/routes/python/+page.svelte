<script>
	export let data;
    console.log(data)
</script>


<div>
</div>
<div class="overflow-x-auto">
    <table class="table ">
        
{#if data.result}
<thead>
    <tr>
      <th>Страна</th> 
      <th>Континет</th> 
    </tr>
  </thead> 

	{#each data.result as item}
    
    
    <tbody>
        <tr>
		<td>{item[0]}</td>  <td>{item[1]}</td>
        </tr>
    </tbody>
	{/each}
{/if}
</table>
</div>
