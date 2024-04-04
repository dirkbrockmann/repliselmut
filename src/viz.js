// This is the core module for the implementation of the visualization
// It's analogous to model.js in terms of its relation to other modules,
// e.g. it reads the parameters and provides initialize, go and update functions
// to simulation.js where they get bundled with the analogous functions in model.js
// the observables and variables exported in model.js, e.g. the quantities
// used for the actual visualizations are also imported to viz.js

import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"
import styles from "./styles.module.css"
import cfg from "./config.js"
import cmap from "./colormaps.js"
import {each,range,map,random,sample,without} from "lodash-es"

const C = d3.scaleOrdinal([0,cmap.batlowS.length-1]).range(cmap.batlowS)
const L = param.L;
const X = d3.scaleLinear().domain([-L/2,L/2]);
const Y = d3.scaleLinear().domain([-L/2,L/2]);

var node, simulation;

// the initialization function, this is bundled in simulation.js with the initialization of
// the model and effectively executed in index.js when the whole explorable is loaded
// typically here all the elements in the SVG or CANVAS element are set.



const initialize = (display,config) => {


	
	const W = config.display_size.width;
	const H = config.display_size.height;
	
	X.range([0,W]);
	Y.range([0,H]);
		
	display.selectAll("#origin").remove();
	
	const origin = display.append("g")
		.attr("id","origin")
		.attr("transform","translate("+X(0)+","+Y(0)+")")
		
	node = origin.selectAll("."+styles.cell).data(agents,d => d.id)
		.enter().append("circle")
		.attr("class",styles.cell)
		.attr("cx",d => d.x)
		.attr("cy",d => d.y)
		.style("fill",d => C(d.type))
		.attr("r",d => d.r)
	
	simulation = d3.forceSimulation(agents)
		.velocityDecay(cfg.simulation.velocityDecay)
		.force("x", d3.forceX().strength(cfg.simulation.attractionStrenth))
		.force("y", d3.forceY().strength(cfg.simulation.attractionStrenth))
		.force("collide", d3.forceCollide().radius(d => d.r).iterations(cfg.simulation.iterations))
		.on("tick", ticked);


	 
//
// 	origin.selectAll(null).data(agents).enter().append("circle")
// 		.attr("class",styles.node)
// 		.attr("cx",d=>X(d.x))
// 		.attr("cy",d=>Y(d.y))
// 		.attr("r",X(param.agentsize/2))
// 		.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : "black")
	
};

// the go function, this is bundled in simulation.js with the go function of
// the model, typically this is the iteration function of the model that
// is run in the explorable. It contains the code that updates the parts of the display
// panel as a function of the model quantities.

const go = (display,config) => {
	
	node = node.data(agents,d => d.id)

	node.exit().remove()
	let enter = node.enter().append("circle").attr("class",styles.cell)
		.attr("cx",d => d.x)
		.attr("cy",d => d.y)
		.style("fill",d => C(d.type))
		
	enter.transition().duration(500).attr("r",d => d.r);

	node = node.merge(enter);
	
	simulation.nodes(agents)
	simulation.alpha(1).restart()
//	node.style("fill",d => C(d.type))
	// display.selectAll("."+styles.node)
// 		.attr("cx",d=>X(d.x))
// 		.attr("cy",d=>Y(d.y))
// 		.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : "black")
	
	//d3.selectAll(".cell").data(agents).style("fill",d => C(d.type))
	
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the visualization, if a parameter is changed,
// e.g. a radio button is pressed, when the system is not running, e.g. when it is paused.

const update = (display,config) => {
	
	// display.selectAll("."+styles.node)
	// 	.style("fill", d => param.color_by_heading.widget.value() ? d3.interpolateSinebow(d.theta/2/Math.PI)  : "black")
	
}

function ticked() {
  node
		.attr("cx",d => d.x)
		.attr("cy",d => d.y)
	
	
}


export {initialize,go,update}
