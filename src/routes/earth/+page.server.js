import  * as api  from 'node-calls-python';
const py = api.interpreter;
    
let pymodule = py.importSync("src/lib/py/pydata.py");
// pymodule = py.importSync("$lib/py/pydata.py", true);

	export  function load({ params, cookies }) {
		
		const countlast = cookies.get("countlast")

		if(Number(countlast) > 0){
			cookies.set("countlast", (Number(countlast)+1), {path:'/'})	
		}
		else{
			cookies.set("cookiescocountlastuntlastCount", 1, {path:'/'})
		}
		


		const last = cookies.get("last")
		

		const result2 = py.evalSync(pymodule, "getcountries()");
		const result1 = countlast
		result2.last = last
        console.log(result2)
		console.log(result1)
		
		return result2;

	}	