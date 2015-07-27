( function( root, factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( [ "./chassis" ], factory );
	} else if ( typeof exports === "object" ) {
		module.exports = factory( require( "./chassis" ) );
	} else {
		root.chassis = factory( root.chassis );
	}
}( this, function( chassis ) {

chassis.progress = {
	"color-gray": {
		name: "Color-Gray",
		value: "#eee"
	},
	"color-gray-dark": {
		name: "Color-Gray",
		value: "#cfcfcf"
	},
	"ui-meter-height": {
		name: " Meter Height",
		value: "24px"
	},
	"ui-meter-width": {
		name:"Meter Width",
		value:"200px"
	},
	"ui-meter-border-radius": {
		name: "Meter Border Radius",
		value: 0

	},
	"ui-meter-border-size": {
		name: "Meter Border Size",
		value: "1px"
	},
	"ui-meter-border-color": {
		name: "Meter Border Color",
		value: "$color-gray-dark"
	},
	"ui-meter-optimum-background": {
		name: "Meter Optimum Color",
		value: "#37bfc9"
	},
	"ui-meter-suboptimum-background": {
		name: "Meter Suboptimum Color",
		value:" #FFDC4A"
	},
	"ui-meter-bad-background": {
		name: "Meter bad Color",
		value: "red"
	},
	"ui-meter-optimum-color": {
		name:" Meter Optimum Color",
		value:"#f2f2f2"
	},
	"ui-meter-suboptimum-color": {
		name: "Meter Suboptimum Color",
		value: "#f2f2f2"
	},
	"ui-meter-bad-color": {
		name: "Meter Bad Color",
		value: "#f2f2f2"
	},
	"ui-meter-color": {
		name: "Meter Color",
		value: "white"
	},
	"ui-meter-background": {
		name: "Meter Backgound Color",
		value: "$color-gray"
	},
	"ui-meter-animation-time": {
		nmae: "Meter Animation Time",
		value:"3s"
	}

};

return chassis;
} ) );
