import 'tachyons/css/tachyons.min.css'
import cfg from "./container_config.js" // imports default classes and styles and parameters for the container
import setup_container from "./setup_container.js"
import setup_interactions from "./setup_interactions.js"
import setup_controls from "./controls.js"
import {initialize as setup_simulation} from "./simulation.js"
import {go} from "./controls.js"
import meta from "./meta.js"


// load is called in the webpage
// the container configuration can be passed as an argument, including classes and styles for the 
// display and controls container. The defaults for this are imported above

// the function below usually doesn't have to change structurally. It is advisable to comment
// out steps from below to work on the code that is called sequentially

var display,controls,grid;

const load = function (container_id,config=cfg) {
	
// setting up the container
	
	const container = setup_container(container_id,config);

	display = container.display;
	controls = container.controls;
	grid = container.grid;
			
	setup_controls(controls,grid); 
	setup_interactions(display,controls,grid,config);
	setup_simulation(display,controls,grid,config);
	
}

const halt  = function(){
	if(go.value()==1){
			go.press(controls)
	}
}

export {load,cfg as config,halt,meta};
