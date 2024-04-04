// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {each,range,map,random,sample,without} from "lodash-es"
import {rad2deg,deg2rad} from "./utils"
import {select as sw} from "weighted"

const L = param.L;


// typically objects needed for the explorable
// are defined here

var agents = [];
var fitness = []; 
var N_species;


function weightedChoice(agents) {
	
	const weights = agents.map(n=> Math.pow(n.fitness,param.selection_strength.widget.value()))	
  	return sw(agents,weights)
}

// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;
	fitness = [{f:1,n:param.N0}];
	N_species = 1;
		
	agents = map(range(param.N0), i => { return {
				id:i, 
				x:L*(Math.random()-0.5), 
				y:L*(Math.random()-0.5),
				type:0,
				r:random(param.agent_size_min,param.agent_size_max),
				fitness:1
			} 
	});

};

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.

const go  = () => {
	
	param.tick++;
	
	const n = weightedChoice(agents);

	const th = 2*Math.PI*Math.random();
	let type = n.type;
	let fit  = n.fitness;

	if (Math.random()<param.mutation_rate.widget.value()){
		N_species++;
		type = N_species-1;
		fit += param.variation_magnitude.widget.value()*(Math.random()-0.5);		
		fitness.push({f:fit,n:1})
	} else {
		fitness[type].n+=1;
	}
	

	agents.push({
		id:param.N0+param.tick,
		x:n.x+n.r*Math.cos(th),
		y:n.y+n.r*Math.sin(th),
		r:random(param.agent_size_min,param.agent_size_max),
		type:type,
		fitness:fit
	})
	
	if(agents.length>param.Nmax){
		let eimer = sample(agents)
		agents = without(agents,eimer)
		fitness[eimer.type].n-=1
	}
	
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 

const update = () => {
	
	
}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {agents,fitness,initialize,go,update}
