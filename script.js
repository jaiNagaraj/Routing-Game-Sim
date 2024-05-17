/* Canvas heights are 300x100 */

//import * as MathJax from 'mathjax/es5/tex-svg'; 

function displayBraess(costVals=["x","x"], updateFuncs=true) {
	// display div
	document.getElementById("Braess").style.display = "block";
	document.getElementById("Pigou").style.display = "none";
	document.getElementById("Custom").style.display = "none";
	// get canvas
	var canvas = document.getElementById("BraessCanvas");
	var ctx = canvas.getContext("2d");
	console.log("Canvas width: " + canvas.width);
	console.log("Canvas height: " + canvas.height);

	// clear canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// draw edges
	ctx.lineWidth = 7;
	ctx.beginPath();
	ctx.moveTo(250, 250);
	ctx.lineTo(750, 125);
	ctx.lineTo(1500 - 250, 250);
	ctx.lineTo(750, 375);
	ctx.lineTo(250, 250);
	ctx.moveTo(750, 125);
	ctx.lineTo(750, 375);
	ctx.stroke();
	// draw nodes
	ctx.fillStyle = "red";
	ctx.beginPath();
	ctx.arc(250, 250, 30, 0, 2 * Math.PI);
	ctx.fill();
	ctx.fillStyle = "green";
	ctx.beginPath();
	ctx.arc(1500 - 250, 250, 30, 0, 2 * Math.PI);
	ctx.fill();
	ctx.fillStyle = "blue";
	ctx.beginPath();
	ctx.arc(750, 125, 30, 0, 2 * Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(750, 375, 30, 0, 2 * Math.PI);
	ctx.fill();

	if (updateFuncs)
	{
		// draw cost equations
		canvas = document.getElementById("BraessLatexCanvas");
		ctx = canvas.getContext("2d");
		// clear canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		let equation = "c(x) = " + costVals[0];
		let svg = MathJax.tex2svg(equation).firstElementChild;
		let img = document.createElement('img');
		img.onload = (e) => {
		  let tempWidth = e.target.naturalWidth *2;
		  let tempHeight = e.target.naturalHeight *2;
		  ctx.drawImage(e.target, canvas.width / 2 - tempWidth / 2 - 300, canvas.height / 2 - tempHeight / 2 - 120, tempWidth, tempHeight);
		}
		img.src = 'data:image/svg+xml;base64,' + btoa('<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n' + svg.outerHTML);

		let equation2 = "c(x) = " + costVals[1];
		let svg2 = MathJax.tex2svg(equation2).firstElementChild;
		let img2 = document.createElement('img');
		img2.onload = (e) => {
		  let tempWidth = e.target.naturalWidth *2;
		  let tempHeight = e.target.naturalHeight *2;
		  ctx.drawImage(e.target, canvas.width / 2 - tempWidth / 2 + 300, canvas.height / 2 - tempHeight / 2 + 120, tempWidth, tempHeight);
		}
		img2.src = 'data:image/svg+xml;base64,' + btoa('<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n' + svg2.outerHTML);

		let equation3 = "c(x) = 0";
		let svg3 = MathJax.tex2svg(equation3).firstElementChild;
		let img3 = document.createElement('img');
		img3.onload = (e) => {
		  let tempWidth = e.target.naturalWidth *1.2;
		  let tempHeight = e.target.naturalHeight *1.2;
		  ctx.drawImage(e.target, canvas.width / 2 - tempWidth / 2 + 50, canvas.height / 2 - tempHeight / 2, tempWidth, tempHeight);
		}
		img3.src = 'data:image/svg+xml;base64,' + btoa('<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n' + svg3.outerHTML);

		let equation4 = "c(x) = 100";
		let svg4 = MathJax.tex2svg(equation4).firstElementChild;
		let img4 = document.createElement('img');
		img4.onload = (e) => {
		  let tempWidth = e.target.naturalWidth *1.2;
		  let tempHeight = e.target.naturalHeight *1.2;
		  ctx.drawImage(e.target, canvas.width / 2 - tempWidth / 2 + 300, canvas.height / 2 - tempHeight / 2 - 120, tempWidth, tempHeight);
		}
		img4.src = 'data:image/svg+xml;base64,' + btoa('<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n' + svg4.outerHTML);

		let equation5 = "c(x) = 100";
		let svg5 = MathJax.tex2svg(equation5).firstElementChild;
		let img5 = document.createElement('img');
		img5.onload = (e) => {
		  let tempWidth = e.target.naturalWidth *1.2;
		  let tempHeight = e.target.naturalHeight *1.2;
		  ctx.drawImage(e.target, canvas.width / 2 - tempWidth / 2 - 300, canvas.height / 2 - tempHeight / 2 + 120, tempWidth, tempHeight);
		}
		img5.src = 'data:image/svg+xml;base64,' + btoa('<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n' + svg5.outerHTML);
	}
}

function displayPigou(costVals=["x"], updateFuncs=true) {
	// display div
	document.getElementById("Braess").style.display = "none";
	document.getElementById("Pigou").style.display = "block";
	document.getElementById("Custom").style.display = "none";
	// get canvas
	var canvas = document.getElementById("PigouCanvas");
	var ctx = canvas.getContext("2d");
	// clear canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// draw edges
	ctx.lineWidth = 7;
	ctx.beginPath();
	ctx.rect(250, 100, 1000, 300);
	ctx.stroke();
	// draw nodes
	ctx.fillStyle = "red";
	ctx.beginPath();
	ctx.arc(250, 250, 30, 0, 2 * Math.PI);
	ctx.fill();
	ctx.fillStyle = "green";
	ctx.beginPath();
	ctx.arc(1500 - 250, 250, 30, 0, 2 * Math.PI);
	ctx.fill();

	if (updateFuncs)
	{
		// draw cost equations
		canvas = document.getElementById("PigouLatexCanvas");
		ctx = canvas.getContext("2d");
		// clear canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		let equation = "c(x) = " + costVals[0];
		let svg = MathJax.tex2svg(equation).firstElementChild;
		let img = document.createElement('img');
		img.onload = (e) => {
		  let tempWidth = e.target.naturalWidth *2;
		  let tempHeight = e.target.naturalHeight *2;
		  ctx.drawImage(e.target, canvas.width / 2 - tempWidth / 2, canvas.height / 2 - tempHeight / 2 + 200, tempWidth, tempHeight);
		}
		img.src = 'data:image/svg+xml;base64,' + btoa('<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n' + svg.outerHTML);

		let equation2 = "c(x) = 1";
		let svg2 = MathJax.tex2svg(equation2).firstElementChild;
		let img2 = document.createElement('img');
		img2.onload = (e) => {
		  let tempWidth = e.target.naturalWidth *2;
		  let tempHeight = e.target.naturalHeight *2;
		  ctx.drawImage(e.target, canvas.width / 2 - tempWidth / 2, canvas.height / 2 - tempHeight / 2 - 200, tempWidth, tempHeight);
		}
		img2.src = 'data:image/svg+xml;base64,' + btoa('<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n' + svg2.outerHTML);
	}
}

function displayCustom() {
	// display div
	document.getElementById("Braess").style.display = "none";
	document.getElementById("Pigou").style.display = "none";
	document.getElementById("Custom").style.display = "block";

	// get canvas
	var canvas = document.getElementById("CustomCanvas");
	var ctx = canvas.getContext("2d");
	// clear canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// draw edges
	ctx.lineWidth = 7;
	ctx.beginPath();
	ctx.moveTo(250, 125);
	ctx.lineTo(750, 250);
	ctx.moveTo(250, 125);
	ctx.lineTo(1500 - 250, 250);
	ctx.lineTo(250, 375);
	ctx.moveTo(1500 - 250, 250);
	ctx.lineTo(750, 250);
	ctx.lineTo(250, 375);
	ctx.stroke();

	// draw nodes
	// soruce nodes
	ctx.fillStyle = "red";
	ctx.beginPath();
	ctx.arc(250, 125, 30, 0, 2 * Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(250, 375, 30, 0, 2 * Math.PI);
	ctx.fill();
	// middle node
	ctx.fillStyle = "blue";
	ctx.beginPath();
	ctx.arc(750, 250, 30, 0, 2 * Math.PI);
	ctx.fill();
	// sink node
	ctx.fillStyle = "green";
	ctx.beginPath();
	ctx.arc(1500 - 250, 250, 30, 0, 2 * Math.PI);
	ctx.fill();
}

/** CLASSES */
class BraessAgent
{
	constructor(x, y, flow)
	{
		this.x = x;
		this.y = y;
		this.flow = flow;
	}

	/**
	 * Updates position of agent based on flow and location.
	 * It aims to follow along the edges of its path.
	 * Returns 1 if it can keep going; returns 0 if it has reached the end.
	 */
	update()
	{
		if (this.x >= 1500 - 250) return 0;
		//console.log("In update method!");
		switch (+(this.flow))
		{
			case 0:
				//console.log("Flow 0!");
				if (this.x < 750) // first edge
				{
					this.x += 4;
					this.y -= 1;
				}
				else if (this.x < 1500 - 250) // second edge
				{
					this.x += 4;
					this.y += 1;
				}
				break;
			case 1:
				if (this.x < 750) // first edge
				{
					this.x += 4;
					this.y -= 1;
				}
				else if (this.x == 750 && this.y < 375) // second edge
				{
					this.y += 5;
				}
				else if (this.x < 1500 - 250) // third edge
				{
					this.x += 4;
					this.y -= 1;
				}
				break;
			case 2:
				//console.log("Flow 2!");
				if (this.x < 750) // first edge
				{
					this.x += 4;
					this.y += 1;
				}
				else if (this.x < 1500 - 250) // second edge
				{
					this.x += 4;
					this.y -= 1;
				}
				break;
			default:
				console.log("Flow not found???");
		}
		return 1;
	}
}

class PigouAgent
{
	constructor(x, y, flow)
	{
		this.x = x;
		this.y = y;
		this.flow = flow;
	}

	/**
	 * Updates position of agent based on flow and location.
	 * It aims to follow along the edges of its path.
	 * Returns 1 if it can keep going; returns 0 if it has reached the end.
	 */
	update()
	{
		if (this.x >= 1500 - 250 && this.y == 250) return 0;
		//console.log("In update method!");
		switch (+(this.flow)) {
			case 0:
				if (this.x == 250 && this.y > 100) // first edge
				{
					this.y -= 4;
				}
				else if (this.x < 1500 - 250) // second edge
				{
					this.x += 4;
				}
				else if (this.x == 1500 - 250 && this.y < 250) // third edge
				{
					this.y += 4;
				}
				break;
			case 1:
				if (this.x == 250 && this.y < 400) // first edge
				{
					this.y += 4;
				}
				else if (this.x < 1500 - 250) // second edge
				{
					this.x += 4;
				}
				else if (this.x == 1500 - 250 && this.y > 250) // third edge
				{
					this.y -= 4;
				}
				break;
			default:
				console.log("Flow not found???");
		}
		return 1;
	}
}

class CustomAgent
{
	constructor(x, y, flow)
	{
		this.x = x;
		this.y = y;
		this.flow = flow;
	}

	/**
	 * Updates position of agent based on flow and location.
	 * It aims to follow along the edges of its path.
	 * Returns 1 if it can keep going; returns 0 if it has reached the end.
	 */
	update()
	{
		if (this.x >= 1500 - 250) return 0;
		//console.log("In update method!");
		switch (+(this.flow)) {
			case 0:
				this.x += 8;
				this.y += 1;
				break;
			case 1:
				if (this.x < 750) // first edge
				{
					this.x += 4;
					this.y += 1;
				}
				else if (this.x < 1500 - 250) // third edge
				{
					this.x += 4;
				}
				break;
			case 2:
				if (this.x < 750) // first edge
				{
					this.x += 4;
					this.y -= 1;
				}
				else if (this.x < 1500 - 250) // third edge
				{
					this.x += 4;
				}
				break;
			case 3:
				this.x += 8;
				this.y -= 1;
				break;
			default:
				console.log("Flow not found???");
		}
		return 1;
	}
}

/* EVENT LISTENERS */
document.getElementById("BraessButton").addEventListener("click", braessSim);
document.getElementById("PigouButton").addEventListener("click", pigouSim);
document.getElementById("CustomButton").addEventListener("click", customSim);

/**
 * THANK YOU STACK OVERFLOW FOR THIS WONDERFUL FUNCTION
 */
function weightedRand(spec) {
	var i, j, table = [];
	for (i in spec) {
		// The constant 10 below should be computed based on the
		// weights in the spec for a correct and optimal table size.
		// E.g. the spec {0:0.999, 1:0.001} will break this impl.
		for (j = 0; j < spec[i] * 100; j++) table.push(i);
	}
	return function() {
		return table[Math.floor(Math.random() * table.length)];
	}
}


/* Graphs, Functions and Data for BRAESS */
// Directed Graph adjacency matrix
var braessGraph = [[0, 1, 1, 0], [0, 0, 1, 1], [0, 0, 0, 1], [0, 0, 0, 0]];
// Edge traffic; contains number of agents on edge x->y indexed by traffic[x][y]
var trafficBraess = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
// Cost function of edge x->y indexed by traffic[x][y]; -1 indicates no adjacency
var costsBraess = [
	[(x) => { return -1; }, (x) => { return x; }, (x) => { return 100; }, (x) => { return -1; }],
	[(x) => { return -1; }, (x) => { return -1; }, (x) => { return 0; }, (x) => { return 100; }],
	[(x) => { return -1; }, (x) => { return -1; }, (x) => { return -1; }, (x) => { return x; }],
	[(x) => { return -1; }, (x) => { return -1; }, (x) => { return -1; }, (x) => { return -1; }]];
// Potential of edge x->y indexed by traffic[x][y]; -1 indicates no adjacency
var potentialsBraess = [
	[(x) => { return -1; }, (x) => { return 0.5 * x * x; }, (x) => { return 100 * x; }, (x) => { return -1; }],
	[(x) => { return -1; }, (x) => { return -1; }, (x) => { return 0; }, (x) => { return 100 * x; }],
	[(x) => { return -1; }, (x) => { return -1; }, (x) => { return -1; }, (x) => { return 0.5 * x * x; }],
	[(x) => { return -1; }, (x) => { return -1; }, (x) => { return -1; }, (x) => { return -1; }]];


// Cost functions and array
// Flow 1: 0->1->3
function braessCost1() {
	return costsBraess[0][1](Math.round(100 * trafficBraess[0][1])) +
		costsBraess[1][3](Math.round(100 * trafficBraess[1][3]));
}
// Flow 2: 0->1->2->3
function braessCost2() {
	return costsBraess[0][1](Math.round(100 * trafficBraess[0][1])) +
		costsBraess[1][2](Math.round(100 * trafficBraess[1][2])) +
		costsBraess[2][3](Math.round(100 * trafficBraess[2][3]));
}
// Flow 3: 0->2->3
function braessCost3() {
	return costsBraess[0][2](Math.round(100 * trafficBraess[0][2])) +
		costsBraess[2][3](Math.round(100 * trafficBraess[2][3]));
}
// Flow 1: 0->1->3
function braessSocialCost1() {
	return Math.round(100 * trafficBraess[0][1]) * costsBraess[0][1](Math.round(100 * trafficBraess[0][1])) +
		Math.round(100 * trafficBraess[1][3]) * costsBraess[1][3](Math.round(100 * trafficBraess[1][3]));
}
// Flow 2: 0->1->2->3
function braessSocialCost2() {
	return Math.round(100 * trafficBraess[0][1]) * costsBraess[0][1](Math.round(100 * trafficBraess[0][1])) +
		Math.round(100 * trafficBraess[1][2]) * costsBraess[1][2](Math.round(100 * trafficBraess[1][2])) +
		Math.round(100 * trafficBraess[2][3]) * costsBraess[2][3](Math.round(100 * trafficBraess[2][3]));
}
// Flow 3: 0->2->3
function braessSocialCost3() {
	return Math.round(100 * trafficBraess[0][2]) * costsBraess[0][2](Math.round(100 * trafficBraess[0][2])) +
		Math.round(100 * trafficBraess[2][3]) * costsBraess[2][3](Math.round(100 * trafficBraess[2][3]));
}
var braessCosts = [braessCost1, braessCost2, braessCost3];
var braessSocialCosts = [braessSocialCost1, braessSocialCost2, braessSocialCost3];

function braessPotential() {
	var pot = 0;
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			if (braessGraph[i][j] == 1) pot += potentialsBraess[i][j](Math.round(100 * trafficBraess[i][j]));
		}
	}
	return pot;
}


/**
 * Function to animate network flow.
 * It sends out 100 agents based on the flow proportions provided by the traffic array.
 * It keeps track of the agent positions based on their update() functions.
 * It then draws the agents on the canvas.
*/
async function sendBraessAgents(traffic) {
	// Array to keep track of agents
	var agents = [];
	for (var i = 0; i < 100; i++) agents[i] = null;
	var agentCount = 0;
	// generate weighted random dist based on traffic array
	var rand = weightedRand({ 0: traffic[0], 1: traffic[1], 2: traffic[2] });
	// update cost functions
	cost1 = "" + costsBraess[0][1](Math.round(100 * trafficBraess[0][1]));
	cost2 = "" + costsBraess[2][3](Math.round(100 * trafficBraess[2][3]));
	displayBraess([cost1,cost2]);
	// main loop
	while (true) {
		var canvas = document.getElementById("BraessCanvas");
		var ctx = canvas.getContext("2d");
		// display agents
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		// first, draw the canvas
		displayBraess([], false);
		for (var i = 0; i < agentCount; i++) {
			if (agents[i] != null) {
				ctx.fillStyle = "yellow";
				ctx.beginPath();
				ctx.arc(agents[i].x, agents[i].y, 15, 0, 2 * Math.PI);
				ctx.fill();
			}
		}
		if (agentCount < 100) {
			let flow = rand();
			//console.log("Flow: " + flow);
			agents[agentCount] = new BraessAgent(250, 250, flow);
			agentCount++;
		}
		//else console.log("Agent count exceeded 100");
		breakout = true;
		for (var i = 0; i < agentCount; i++) {
			//console.log("Agent number " + (i + 1) + " is at (" + agents[i].x + ", " + agents[i].y + ")");
			if (agents[i].update() == 1) breakout = false;
		}

		if (breakout) break;

		//console.log("hi");

		// time delay between agents
		const timer = ms => new Promise(res => setTimeout(res, ms));
		await timer(10);
	}
}

/*
	Simulates convergence to equilibrium in Braess' Paradox.
	It updates traffic proportions based on best-response dynamics iteratively.
	Proportions change based on how far the best response cost is from the current flow cost; though in order to fully converge, there is a threshold for how little proportions can change.
	During each iteration, the simulation sends out 100 agents along the paths designated by the traffic proportions, and then calculates the best-response.
	The loop ends when minimum potential energy is achieved.
*/
async function braessSim() {
	document.getElementById("BraessButton").disabled = true;
	document.getElementById("BraessButton").innerHTML = "Running...";
	var alpha = 0.1; // convergence rate heuristic
	var timesteps = 1;
	var flowTraffic = [0.5, 0, 0.5]; // start at optimum
	// update edge traffic
	trafficBraess[0][1] = flowTraffic[0] + flowTraffic[1];
	trafficBraess[0][2] = flowTraffic[2];
	trafficBraess[1][2] = flowTraffic[1]
	trafficBraess[1][3] = flowTraffic[0];
	trafficBraess[2][3] = flowTraffic[1] + flowTraffic[2];
	// calculate graph potential
	var graphPotential = braessPotential();
	document.getElementById("braessPotential").innerHTML = graphPotential;
	var oldGraphPotential = braessPotential();
	// calculate initial (optimal) social cost
	var flowSocialCost1 = braessSocialCosts[0]();
	var flowSocialCost2 = braessSocialCosts[1]();
	var flowSocialCost3 = braessSocialCosts[2]();
	document.getElementById("braessSocialCost").innerHTML = Math.round(flowSocialCost1 + flowSocialCost2 + flowSocialCost3);
	do {
		document.getElementById("braessTimesteps").innerHTML = timesteps;
		// send out the agents!
		await sendBraessAgents(flowTraffic);

		// calculate costs
		var flowCost1 = braessCosts[0]();
		var flowCost2 = braessCosts[1]();
		var flowCost3 = braessCosts[2]();
		console.log("Cost 1: " + flowCost1 + " Cost 2: " + flowCost2 + " Cost 3: " + flowCost3);
		var minCost = Math.min(flowCost1, flowCost2, flowCost3);

		// update flow proportions
		let flowCarrier = 0;
		if (flowCost1 == minCost) {
			flowCarrier = Math.min(flowCost2 - flowCost1, 10) / 10 * alpha;
			flowTraffic[0] += flowCarrier;
			flowTraffic[1] -= flowCarrier;
			flowTraffic[1] = Math.max(0, flowTraffic[1]);
			flowCarrier = Math.min(flowCost3 - flowCost1, 10) / 10 * alpha;
			flowTraffic[0] += flowCarrier;
			flowTraffic[2] -= flowCarrier;
			flowTraffic[2] = Math.max(0, flowTraffic[2]);

			flowTraffic[0] = Math.min(1, flowTraffic[0]);
		}
		else if (flowCost2 == minCost) {
			flowCarrier = Math.min(flowCost1 - flowCost2, 10) / 10 * alpha;
			flowTraffic[1] += flowCarrier;
			flowTraffic[0] -= flowCarrier;
			flowTraffic[0] = Math.max(0, flowTraffic[0]);
			flowCarrier = Math.min(flowCost3 - flowCost2, 10) / 10 * alpha;
			flowTraffic[1] += flowCarrier;
			flowTraffic[2] -= flowCarrier;
			flowTraffic[2] = Math.max(0, flowTraffic[2]);

			flowTraffic[1] = Math.min(1, flowTraffic[1]);
		}
		else if (flowCost3 == minCost) {
			flowCarrier = Math.min(flowCost1 - flowCost3, 10) / 10 * alpha;
			flowTraffic[2] += flowCarrier;
			flowTraffic[0] -= flowCarrier;
			flowTraffic[0] = Math.max(0, flowTraffic[0]);
			flowCarrier = Math.min(flowCost2 - flowCost3, 10) / 10 * alpha;
			flowTraffic[2] += flowCarrier;
			flowTraffic[1] -= flowCarrier;
			flowTraffic[1] = Math.max(0, flowTraffic[1]);

			flowTraffic[2] = Math.min(1, flowTraffic[2]);
		}

		console.log(flowTraffic);

		// update edge traffic
		trafficBraess[0][1] = flowTraffic[0] + flowTraffic[1];
		trafficBraess[0][2] = flowTraffic[2];
		trafficBraess[1][2] = flowTraffic[1]
		trafficBraess[1][3] = flowTraffic[0];
		trafficBraess[2][3] = flowTraffic[1] + flowTraffic[2];

		// calculate new graph potentials
		oldGraphPotential = graphPotential;
		graphPotential = braessPotential();
		document.getElementById("braessPotential").innerHTML = graphPotential;

		// calculate new social costs
		flowSocialCost1 = braessSocialCosts[0]();
		flowSocialCost2 = braessSocialCosts[1]();
		flowSocialCost3 = braessSocialCosts[2]();
		document.getElementById("braessSocialCost").innerHTML = Math.round(flowSocialCost1 + flowSocialCost2 + flowSocialCost3);

		timesteps++;
	}
	while (graphPotential != oldGraphPotential);

	document.getElementById("BraessButton").disabled = false;
	document.getElementById("BraessButton").innerHTML = "Run Simulation";
	displayBraess(); // removes yellow dot on sink node
}





/* Graphs, Functions and Data for PIGOU */

var trafficPigou = [0, 0];
// Cost function of the two edges.
var costsPigou = [(x) => { return 100; }, (x) => { return x; }];
// Potential of the two edges.
var potentialsPigou = [(x) => { return 100 * x; }, (x) => { return 0.5 * x * x; }];


// Cost functions and array
// Flow 1: Top route
function pigouCost1() {
	return costsPigou[0](Math.round(100 * trafficPigou[0]));
}
// Flow 2: Bottom route
function pigouCost2() {
	return costsPigou[1](Math.round(100 * trafficPigou[1]));
}

// Flow 1: Top route
function pigouSocialCost1() {
	return Math.round(100 * trafficPigou[0]) * costsPigou[0](Math.round(100 * trafficPigou[0]));
}
// Flow 2: Bottom route
function pigouSocialCost2() {
	return Math.round(100 * trafficPigou[1]) * costsPigou[1](Math.round(100 * trafficPigou[1]));
}

var pigouCosts = [pigouCost1, pigouCost2];
var pigouSocialCosts = [pigouSocialCost1, pigouSocialCost2];

function pigouPotential() {
	return potentialsPigou[0](Math.round(100 * trafficPigou[0])) + potentialsPigou[1](Math.round(100 * trafficPigou[1]));
}

/**
 * Function to animate network flow.
 * It sends out 100 agents based on the flow proportions provided by the traffic array.
 * It keeps track of the agent positions based on their update() functions.
 * It then draws the agents on the canvas.
*/
async function sendPigouAgents(traffic) {
	// Array to keep track of agents
	var agents = [];
	for (var i = 0; i < 100; i++) agents[i] = null;
	var agentCount = 0;
	// generate weighted random dist based on traffic array
	var rand = weightedRand({ 0: traffic[0], 1: traffic[1] });
	// update cost functions
	cost1 = "" + costsPigou[1](Math.round(100 * trafficPigou[1]));
	displayPigou([cost1]);
	// main loop
	while (true) {
		var canvas = document.getElementById("PigouCanvas");
		var ctx = canvas.getContext("2d");
		// display agents
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		// first, draw the canvas
		displayPigou([], false);
		for (var i = 0; i < agentCount; i++) {
			if (agents[i] != null) {
				ctx.fillStyle = "yellow";
				ctx.beginPath();
				ctx.arc(agents[i].x, agents[i].y, 15, 0, 2 * Math.PI);
				ctx.fill();
			}
		}
		if (agentCount < 100) {
			let flow = rand();
			//console.log("Flow: " + flow);
			agents[agentCount] = new PigouAgent(250, 250, flow);
			agentCount++;
		}
		//else console.log("Agent count exceeded 100");
		breakout = true;
		for (var i = 0; i < agentCount; i++) {
			//console.log("Agent number " + (i + 1) + " is at (" + agents[i].x + ", " + agents[i].y + ")");
			if (agents[i].update() == 1) breakout = false;
		}

		if (breakout) break;

		//console.log("hi");

		// time delay between agents
		const timer = ms => new Promise(res => setTimeout(res, ms));
		await timer(10);
	}
}

/*
	Simulates convergence to equilibrium in Pigou's Example.
	It updates traffic proportions based on best-response dynamics iteratively.
	Proportions change based on how far the best response cost is from the current flow cost; though in order to fully converge, there is a threshold for how little proportions can change.
	During each iteration, the simulation sends out 100 agents along the paths designated by the traffic proportions, and then calculates the best-response.
	The loop ends when minimum potential energy is achieved.
*/
async function pigouSim() {
	document.getElementById("PigouButton").disabled = true;
	document.getElementById("PigouButton").innerHTML = "Running...";
	var alpha = 0.1; // convergence rate heuristic
	var timesteps = 1;
	var flowTraffic = [0.5, 0.5]; // start at optimum
	// update edge traffic
	trafficPigou[0] = flowTraffic[0];
	trafficPigou[1] = flowTraffic[1];
	// calculate graph potential
	var graphPotential = pigouPotential();
	document.getElementById("pigouPotential").innerHTML = graphPotential;
	var oldGraphPotential = pigouPotential();
	// calculate initial (optimal) social cost
	var flowSocialCost1 = pigouSocialCosts[0]();
	var flowSocialCost2 = pigouSocialCosts[1]();
	document.getElementById("pigouSocialCost").innerHTML = Math.round(flowSocialCost1 + flowSocialCost2);
	do {
		document.getElementById("pigouTimesteps").innerHTML = timesteps;
		// send out the agents!
		await sendPigouAgents(flowTraffic);

		// calculate costs
		var flowCost1 = pigouCosts[0]();
		var flowCost2 = pigouCosts[1]();
		console.log("Cost 1: " + flowCost1 + " Cost 2: " + flowCost2);
		var minCost = Math.min(flowCost1, flowCost2);

		// update flow proportions
		let flowCarrier = 0;
		if (flowCost1 == minCost) {
			flowCarrier = Math.min(flowCost2 - flowCost1, 10) / 10 * alpha;
			flowTraffic[0] += flowCarrier;
			flowTraffic[1] -= flowCarrier;
			flowTraffic[1] = Math.max(0, flowTraffic[1]);

			flowTraffic[0] = Math.min(1, flowTraffic[0]);
		}
		else if (flowCost2 == minCost) {
			flowCarrier = Math.min(flowCost1 - flowCost2, 10) / 10 * alpha;
			flowTraffic[1] += flowCarrier;
			flowTraffic[0] -= flowCarrier;
			flowTraffic[0] = Math.max(0, flowTraffic[0]);

			flowTraffic[1] = Math.min(1, flowTraffic[1]);
		}

		console.log(flowTraffic);

		// update edge traffic
		trafficPigou[0] = flowTraffic[0];
		trafficPigou[1] = flowTraffic[1];

		// calculate new graph potentials
		oldGraphPotential = graphPotential;
		graphPotential = pigouPotential();
		document.getElementById("pigouPotential").innerHTML = graphPotential;

		// calculate new social costs
		flowSocialCost1 = pigouSocialCosts[0]();
		flowSocialCost2 = pigouSocialCosts[1]();
		document.getElementById("pigouSocialCost").innerHTML = Math.round(flowSocialCost1 + flowSocialCost2);

		timesteps++;
	}
	while (graphPotential != oldGraphPotential);

	document.getElementById("PigouButton").disabled = false;
	document.getElementById("PigouButton").innerHTML = "Run Simulation";
	displayPigou(); // removes yellow dot on sink node
}





/* Graphs, Functions and Data for CUSTOM */

// Directed Graph adjacency matrix
var customGraph = [[0, 0, 1, 1], [0, 0, 1, 1], [0, 0, 0, 1], [0, 0, 0, 0]];
// Edge traffic; contains number of agents on edge x->y indexed by traffic[x][y]
var trafficCustom = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
// Cost function of edge x->y indexed by traffic[x][y]; -1 indicates no adjacency
var costsCustom = [
	[(x) => { return -1; }, (x) => { return -1; }, (x) => { return 0; }, (x) => { return x*x; }],
	[(x) => { return -1; }, (x) => { return -1; }, (x) => { return 0; }, (x) => { return 1.5*x; }],
	[(x) => { return -1; }, (x) => { return -1; }, (x) => { return -1; }, (x) => { return x; }],
	[(x) => { return -1; }, (x) => { return -1; }, (x) => { return -1; }, (x) => { return -1; }]];
// Potential of edge x->y indexed by traffic[x][y]; -1 indicates no adjacency
var potentialsCustom = [
	[(x) => { return -1; }, (x) => { return -1; }, (x) => { return 0; }, (x) => { return (x**3) / 3; }],
	[(x) => { return -1; }, (x) => { return -1; }, (x) => { return 0; }, (x) => { return 3/4 * x*x; }],
	[(x) => { return -1; }, (x) => { return -1; }, (x) => { return -1; }, (x) => { return 0.5 * x * x; }],
	[(x) => { return -1; }, (x) => { return -1; }, (x) => { return -1; }, (x) => { return -1; }]];


// Cost functions and array
// Flow 1: 0->3
function customCost1() {
	return costsCustom[0][3](trafficCustom[0][3]);
}
// Flow 2: 0->2->3
function customCost2() {
	return costsCustom[0][2](trafficCustom[0][2]) +
		costsCustom[2][3](trafficCustom[2][3]);
}
// Flow 3: 1->2->3
function customCost3() {
	return costsCustom[1][2](trafficCustom[1][2]) +
		costsCustom[2][3](trafficCustom[2][3]);
}
// Flow 4: 1->3
function customCost4() {
	return costsCustom[1][3](trafficCustom[1][3]);
}

// Flow 1: 0->3
function customSocialCost1() {
	return Math.round(100 * trafficCustom[0][3]) * costsCustom[0][3](Math.round(100 * trafficCustom[0][3]));
}
// Flow 2: 0->2->3
function customSocialCost2() {
	return Math.round(100 * trafficCustom[0][2]) * costsCustom[0][2](Math.round(100 * trafficCustom[0][2])) +
		Math.round(100 * trafficCustom[2][3]) * costsCustom[2][3](Math.round(100 * trafficCustom[2][3]));
}
// Flow 3: 1->2->3
function customSocialCost3() {
	return Math.round(100 * trafficCustom[1][2]) * costsCustom[1][2](Math.round(100 * trafficCustom[1][2])) +
		Math.round(100 * trafficCustom[2][3]) * costsCustom[2][3](Math.round(100 * trafficCustom[2][3]));
}
// Flow 4: 1->3
function customSocialCost4() {
	return Math.round(100 * trafficCustom[1][3]) * costsCustom[1][3](Math.round(100 * trafficCustom[1][3]));
}

var customCosts = [customCost1, customCost2, customCost3, customCost4];
var customSocialCosts = [customSocialCost1, customSocialCost2, customSocialCost3, customSocialCost4];

function customPotential() {
	var pot = 0;
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			if (customGraph[i][j] == 1) pot += potentialsCustom[i][j](trafficCustom[i][j]);
		}
	}
	return pot;
}


/**
 * Function to animate network flow.
 * It sends out 100 agents based on the flow proportions provided by the traffic array.
 * It keeps track of the agent positions based on their update() functions.
 * It then draws the agents on the canvas.
*/
async function sendCustomAgents(traffic)
{
	// Array to keep track of agents
	var agents = [];
	for (var i = 0; i < 100; i++) agents[i] = null;
	var agentCount = 0;
	// generate weighted random dist based on traffic array
	var rand = weightedRand({ 0: traffic[0], 1: traffic[1], 2: traffic[2], 3: traffic[3] });
	// main loop
	while (true) {
		var canvas = document.getElementById("CustomCanvas");
		var ctx = canvas.getContext("2d");
		// display agents
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		// first, draw the canvas
		displayCustom();
		for (var i = 0; i < agentCount; i++) {
			if (agents[i] != null) {
				ctx.fillStyle = "yellow";
				ctx.beginPath();
				ctx.arc(agents[i].x, agents[i].y, 15, 0, 2 * Math.PI);
				ctx.fill();
			}
		}
		if (agentCount < 100) {
			let flow = rand();
			//console.log("Flow: " + flow);
			if (flow < 2) agents[agentCount] = new CustomAgent(250, 125, flow);
			else agents[agentCount] = new CustomAgent(250, 375, flow);
			agentCount++;
		}
		//else console.log("Agent count exceeded 100");
		breakout = true;
		for (var i = 0; i < agentCount; i++) {
			//console.log("Agent number " + (i + 1) + " is at (" + agents[i].x + ", " + agents[i].y + ")");
			if (agents[i].update() == 1) breakout = false;
		}

		if (breakout) break;

		//console.log("hi");

		// time delay between agents
		const timer = ms => new Promise(res => setTimeout(res, ms));
		await timer(10);
	}
}

/*
	Simulates convergence to equilibrium in the custom graph.
	It updates traffic proportions based on best-response dynamics iteratively.
	Proportions change based on how far the best response cost is from the current flow cost; though in order to fully converge, there is a threshold for how little proportions can change.
	Note that in this graph, since there are two source nodes, flow comparisons are done separately (1 and 2, 3 and 4) so that each source always sends out half the total traffic.
	During each iteration, the simulation sends out 100 agents along the paths designated by the traffic proportions, and then calculates the best-response.
	The loop ends when minimum potential energy is achieved.
*/
async function customSim() {
	document.getElementById("CustomButton").disabled = true;
	document.getElementById("CustomButton").innerHTML = "Running...";
	var alpha = 1.5; // convergence rate heuristic
	var timesteps = 1;
	var alph = 0.4633;
	var bet = 0.2147
	// Describes the four possible flows: the first two emanate from the first source node, the last two emanate from the second source node
	var flowTraffic = [alph, 0.5-alph, 0.5-bet, bet]; // start at optimum
	// update edge traffic
	trafficCustom[0][2] = flowTraffic[1];
	trafficCustom[0][3] = flowTraffic[0];
	trafficCustom[1][2] = flowTraffic[2]
	trafficCustom[1][3] = flowTraffic[3];
	trafficCustom[2][3] = flowTraffic[1] + flowTraffic[2];
	// calculate graph potential
	var graphPotential = customPotential();
	document.getElementById("customPotential").innerHTML = graphPotential;
	var oldGraphPotential = customPotential();
	// calculate initial (optimal) social cost
	var flowSocialCost1 = customSocialCosts[0]();
	var flowSocialCost2 = customSocialCosts[1]();
	var flowSocialCost3 = customSocialCosts[2]();
	var flowSocialCost4 = customSocialCosts[3]();
	document.getElementById("customSocialCost").innerHTML = Math.round(flowSocialCost1 + flowSocialCost2 + flowSocialCost3 + flowSocialCost4);
	
	// main loop
	do {
		document.getElementById("customTimesteps").innerHTML = timesteps;
		// send out the agents!
		await sendCustomAgents(flowTraffic);

		// calculate costs
		var flowCost1 = customCosts[0]();
		var flowCost2 = customCosts[1]();
		var flowCost3 = customCosts[2]();
		var flowCost4 = customCosts[3]();
		console.log("Cost 1: " + flowCost1 + " Cost 2: " + flowCost2 + " Cost 3: " + flowCost3 + " Cost 4: " + flowCost4);
		var minCost1 = Math.min(flowCost1, flowCost2);
		var minCost2 = Math.min(flowCost3, flowCost4);

		// update flow proportions separately for each source
		let flowCarrier = 0;
		if (flowCost1 == minCost1) {
			flowCarrier = Math.min(flowCost2 - flowCost1, 10) / 10 * alpha;
			flowTraffic[0] += flowCarrier;
			flowTraffic[1] -= flowCarrier;
			flowTraffic[1] = Math.max(0, flowTraffic[1]);

			flowTraffic[0] = Math.min(0.5, flowTraffic[0]);
		}
		else if (flowCost2 == minCost1) {
			flowCarrier = Math.min(flowCost1 - flowCost2, 10) / 10 * alpha;
			flowTraffic[1] += flowCarrier;
			flowTraffic[0] -= flowCarrier;
			flowTraffic[0] = Math.max(0, flowTraffic[0]);

			flowTraffic[1] = Math.min(0.5, flowTraffic[1]);
		}
		if (flowCost3 == minCost2) {
			flowCarrier = Math.min(flowCost4 - flowCost3, 10) / 10 * alpha;
			flowTraffic[2] += flowCarrier;
			flowTraffic[3] -= flowCarrier;
			flowTraffic[3] = Math.max(0, flowTraffic[3]);

			flowTraffic[2] = Math.min(0.5, flowTraffic[2]);
		}
		else if (flowCost4 == minCost2)
		{
			flowCarrier = Math.min(flowCost3 - flowCost4, 10) / 10 * alpha;
			flowTraffic[3] += flowCarrier;
			flowTraffic[2] -= flowCarrier;
			flowTraffic[2] = Math.max(0, flowTraffic[2]);

			flowTraffic[3] = Math.min(0.5, flowTraffic[3]);
		}

		console.log(flowTraffic);

		// update edge traffic
		trafficCustom[0][2] = flowTraffic[1];
		trafficCustom[0][3] = flowTraffic[0];
		trafficCustom[1][2] = flowTraffic[2]
		trafficCustom[1][3] = flowTraffic[3];
		trafficCustom[2][3] = flowTraffic[1] + flowTraffic[2];

		// calculate new graph potentials
		oldGraphPotential = graphPotential;
		graphPotential = customPotential();
		document.getElementById("customPotential").innerHTML = graphPotential;

		// calculate new social costs
		var flowSocialCost1 = customSocialCosts[0]();
		var flowSocialCost2 = customSocialCosts[1]();
		var flowSocialCost3 = customSocialCosts[2]();
		var flowSocialCost4 = customSocialCosts[3]();
		document.getElementById("customSocialCost").innerHTML = Math.round(flowSocialCost1 + flowSocialCost2 + flowSocialCost3 + flowSocialCost4);

		timesteps++;
	}
	while (Math.abs(graphPotential - oldGraphPotential) > 0.00001);

	document.getElementById("CustomButton").disabled = false;
	document.getElementById("CustomButton").innerHTML = "Run Simulation";
	displayCustom(); // removes yellow dot on sink node
}