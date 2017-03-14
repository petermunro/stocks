/**
 * Created by peter on 23/02/2015.
 */
/** @jsx React.DOM */
"use strict";

var StockCell = React.createClass({
	getDefaultProps: function() {
		return {
			stockName: 'IBM',
			stockDelta: 0.0,
			stockPrice: 137.6
		};
	},
	render: function () {
		var cx = React.addons.classSet;

		var classes = "stock-cell";
		if (this.props.changed === false) {
			classes += " direction-stay";
		} else if (this.props.stockDelta > 0) {
			classes += " direction-up";
		} else { // this.props.stockDelta < 0
			classes += " direction-down";
		}

/*
		var classes = cx({
			"stock-cell": true,
			"direction-up": this.props.stockDelta > 0,
			"direction-stay": this.props.changed === false,
			"direction-down": this.props.stockDelta < 0
		});
*/
		return  <div className={classes}>
			<span className="name">
				{this.props.stockName}
			</span>
			<span className="delta">
				{this.props.stockDelta}
			</span>
			<span className="price">
				{this.props.stockPrice}
			</span>
		</div>;
	}
});

