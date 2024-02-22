import  * as api  from 'node-calls-python';
const py = api.interpreter;
    
let pymodule = py.importSync("src/lib/py/pydata.py");


	export  function load({ params, cookies }) {
		const last = cookies.get("last")
		console.log(last)

		const result2 = py.evalSync(pymodule, "getcountries()");
		result2.visited = last
        console.log(result2)
		return result2;

	}	