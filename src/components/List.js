import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

export class List extends Component {
	static propTypes = {
		data: PropTypes.object,
	};
	static defaultProps = {
		data: {},
	};

	render() {
		const results = Object.assign({}, this.props.data);
		let list;
		if (results && Object.keys(results).length > 0) {
			list = Object.keys(results).map(result => (
				<CSSTransition
					key={results[result].id}
					timeout={500}
					classNames="fade"
				>
					<ListItem
						key={results[result].id}
						result={results[result]}
					/>
				</CSSTransition>
			));
		}
		return (
			<div className="ListContainer">
				<TransitionGroup>{list}</TransitionGroup>
			</div>
		);
	}
}

/* istanbul ignore next */
const mapStateToProps = state => ({
	data: state.getDataReducer.data,
});

export default connect(mapStateToProps, null)(List);
