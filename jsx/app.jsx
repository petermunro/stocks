/** @jsx React.DOM */
"use strict";

var StockGrid = React.createClass({
	getDefaultProps: function() {
		return { width: 5, height: 5 };
	},
	render: function() {
		var grid = [];
		this.props.stocks.forEach(function(el) {
			grid.push(React.createElement(StockCell, {stockName: el.stock, stockDelta: el.delta, stockPrice: el.price, changed: el.changed}));
		});
		return <div>{grid}</div>;
	}
});

function randomAdjust() {
	return +(2 * Math.random() - 1).toFixed(3);
}
function adjustStocks() {
	var anyOne = Math.floor(Math.random() * stocks.length);
	var el = stocks[anyOne];
	if (Math.random() > 0.2) {
		el.changed = false;
	} else {
		var rnd = randomAdjust();
		el.delta = +((el.delta + rnd).toFixed(3));
		el.changed = true;
	}
}

function rqAnFr() {
	adjustStocks();

	React.render(
		<StockGrid width="48" stocks={stocks} />,
		document.getElementById('stocks')
	);
	window.requestAnimationFrame(rqAnFr);
}

function runOne() {
	adjustStocks();

	React.render(
		<StockGrid width="48" stocks={stocks} />,
		document.getElementById('stocks')
	);
}

window.stockTimer = 500;
//runOne();
//setInterval(runOne, window.stockTimer);

function keepRunning() {
	runOne();
	setTimeout(keepRunning, window.stockTimer);
}
keepRunning();
//window.requestAnimationFrame(rqAnFr);
