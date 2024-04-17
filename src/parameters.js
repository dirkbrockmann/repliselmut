// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		L:500,
		N0:10,
		Nmax:400,
		agent_size_min:8,
		agent_size_max:10,
		L:100,
		agentsize: 1.0,
	
		variation_magnitude: {
			range:[0,1],
			default:0.9,
			label:"Variationsstärke"
		},
		mutation_rate: {
			range:[0,1.0/50],
		default:1/100,
			label:"Mutationsrate"
		},
		selection_strength:{
			range : [2,10],
			default : 8,
			label:"Selektionsdruck"
		}
}

