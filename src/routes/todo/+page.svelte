<script>
	import { enhance } from '$app/forms';
	export let data;
	export let form;

	let creating = false;
	let fileInput;
	let pict;
	let dateEnd;

	function getBase64(image) {
		const reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			pict = e.target.result;

		};
	}

	function getFile(){

		fileInput.click()
	}
</script>

<div class="centered">
	<h1>todos</h1>
	<div>

	</div>

	{#if form?.error}
		<p class="error">{form.error}</p>
	{/if}

	<form
		enctype="multipart/form-data"
		method="POST"
		action="?/create"
		class="mx-auto max-w-sm"
		use:enhance
	>
		<div class="group relative z-0 mb-5 w-full">
			<label>
				Добавить:
				
				<input
			
					name="description"
					value={form?.description ?? ''}
					autocomplete="off"
				/>
				
				<input type="hidden" value={pict} name="img" id="img" />
				<div>
					<label for="file" class="btn" on:click={getFile}> Выберите файл 
					<input
						class="invisible border-input bg-background file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
						bind:this={fileInput}
						on:change={() => getBase64(fileInput.files[0])}
						name="file"
						id="file"
						type="file"
						accept=".png,.jpg"
						
					/></label>
				</div>
			</label>
			<input bind:this = {dateEnd} type = "date" name = "dateEnd"/>
		</div>
		<div>
			<input type="submit" value="Save" class="btn" />
		</div>
	</form>

	<div class="todos">
		{#each data.todos as todo (todo.id)}
			<form method="POST" action="?/delete" use:enhance>
				<input type="hidden" name="id" value={todo.id} />
				<div class="item" style="display:flex; width:100%; align-items: center;">
					<div class:end={new Date(todo.dateEnd) < new Date()} class="item"></div>
					<div style="flex:1">{todo.description}</div>
					<div>{new Date(todo.dateEnd).toLocaleDateString()}</div>
					<img class = "w-10" src = {todo.img}/>
					<button class="del" title="удалить" />
					
				</div>
			</form>
		{/each}
	</div>
</div>

<style>
	.end{
		background-color: red;
		color:white;
	}
		.images {
		border: 1px solid rgb(0, 0, 0);
		overflow-y: auto;
		height: 200px;
		padding: 50px;
	}
	
	.centered {
		max-width: 20em;
		margin: 50px auto;
		background: rgb(185, 141, 21);
		padding: 20px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 1);
		min-width: 33%;
	}
	.todos {
		border: 1px solid rgb(0, 0, 0);
		overflow-y: auto;
		height: 200px;
		padding: 10px;
	}
	label {
		width: 100%;
	}

	input {
		flex: 1;
	}

	/* span {
		flex: 1;
	} */

	.del {
		border: none;
		background: url('remove.svg') no-repeat 50% 50%;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		width: 1rem;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 1.2s;
	}

	button:hover {
		opacity: 1;
	}

	.item:hover {
		background: rgb(0, 0, 0);
	}

	.saving {
		opacity: 0.5;
	}
</style>