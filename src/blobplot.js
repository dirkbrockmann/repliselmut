import * as d3 from "d3"
import cfg from "./config.js"
import param from "./parameters.js"
import {fitness,agents} from "./model.js"
import {sumBy,meanBy,each,mean,max,maxBy} from "lodash-es"
import styles from "./styles.module.css"
import cmap from "./colormaps.js"


const C = d3.scaleOrdinal([0,cmap.batlowS.length-1]).range(cmap.batlowS)
	
const sc_x = d3.scaleLinear()
	.range([0, cfg.plot.blob_plot_width]);

const sc_y = d3.scaleSqrt()
	.range([0,-cfg.plot.blob_plot_height]);
	
const xAxis = d3.axisBottom(sc_x).tickFormat("");
const yAxis = d3.axisLeft(sc_y).tickFormat("");

const initialize = (controls,grid) => {

	sc_y.domain([1,400])
 	sc_x.domain([0,2])
//
 	const pos=grid.position(cfg.plot.blob_plot_anchor.x,cfg.plot.blob_plot_anchor.y);

 	controls.selectAll("#blobplot").remove()
//
 	const plot = controls.append("g").attr("class",styles.plot)
 		.attr("transform","translate("+pos.x+","+pos.y+")")
 		.attr("id","blobplot")
//
 	plot.append("text").text(cfg.plot.blob_plot_xlabel)
 		.attr("transform","translate("+sc_x(1)+","+70+")")
 		.attr("class",styles.xlabel)
//
 	plot.append("g").call(xAxis).attr("class",styles.xaxis);
// 	plot.append("g").call(yAxis).attr("class",styles.yaxis);
//
	
	let dot = plot.selectAll("."+styles.dot)
		.data(fitness).enter().append("g")
		.attr("class",styles.dot)
		.attr("transform",function(d){return "translate("+sc_x(d.f)+",0)"})
	
	
	dot.append("circle")
		.attr("class",styles.bigcircle)
		.attr("r",function(d){return -sc_y(d.n)})
		.style("fill",function(d,i){return C(i)})

	dot.append("circle")
		.attr("class",styles.smallcircle)
		.attr("r",3)
		.style("fill",function(d,i){return C(i)})

	const mf = sumBy(fitness, d => d.f*d.n/agents.length)

	plot.append("circle").datum(mf).attr("class",styles.mf)
	.attr("r",cfg.plot.mf_size)
	.attr("transform",function(d){return "translate("+sc_x(d)+",0)"})



// 		.attr("d",spike)
// 		.attr("class",styles.spike)
// 		.style("stroke",function(d,i){return C(i)})
		

}

const update = (controls) => {
		
	let dot = controls.select("."+styles.plot).selectAll("."+styles.dot).data(fitness)
	
	let urk = dot.enter().insert("g","."+styles.mf).attr("class",styles.dot)
	
	//.merge(dot);

//	var ente = dot.enter().insert("g",".mf").attr("class","dot")
//		.attr("transform",function(d){return "translate("+sc_fit(d.f)+",0)"})

	urk.append("circle").attr("class",styles.bigcircle)
	urk.append("circle").attr("class",styles.smallcircle)
	
	dot.merge(urk);
	
	dot.attr("transform",function(d){return "translate("+sc_x(d.f)+","+(d.n==0 ? 20 :0)+")"})
	
	dot.select("."+styles.bigcircle)
		.attr("r",function(d){return  d.n==0 ? 0 : -sc_y(d.n)})
		.style("fill",function(d,i){return d.n==0 ? "white" : C(i)})

	dot.select("."+styles.smallcircle)
		.attr("r",function(d){return d.n==0?2:3})
		.style("fill",function(d,i){return d.n==0 ? "white" : C(i)})

	const mf = sumBy(fitness, d => d.f*d.n/agents.length)
	
	controls.select("."+styles.plot).select("."+styles.mf).datum(mf)
		.attr("r",cfg.plot.mf_size)
		.attr("transform",function(d){return "translate("+sc_x(d)+",0)"})
	

	if(maxBy(fitness,d=>d.f).f > sc_x.domain()[1]){
		let od = sc_x.domain();
		let m = (od[1]+od[0])/2;

		sc_x.domain([m,m+od[1]-od[0]])
		controls.select("."+styles.plot).selectAll("."+styles.xaxis).transition().call(xAxis)
		dot.transition().attr("transform",function(d){return "translate("+sc_x(d.f)+","+(d.n==0 ? 20 :0)+")"})
	};
	
		
}

export {initialize,update}

