const db = new Map();

export function getTodos(userid) {
	if (!db.get(userid)) {
		db.set(userid, [{
			id: crypto.randomUUID(),
			description: 'Учите SvelteKit',
			dateEnd: '',
			img: '',
			done: false
		}]);
	}

	return db.get(userid);
}

export function createTodo(userid, description, img, dateEnd) {

	if (description === '') {
		throw new Error('План не может быть пустым');
	}
	const todos = db.get(userid);

	todos.push({
		id: crypto.randomUUID(),
		description,
		img,
		dateEnd,
		done: false
	});
}

export function deleteTodo(userid, todoid) {
	const todos = db.get(userid);
	const index = todos.findIndex((todo) => todo.id === todoid);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}