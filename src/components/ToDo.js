import React, { Component } from "react";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import List from "./List";
import { postData } from "../actions/postData_action";
import { requestData } from "../actions/getData_action";

export class ToDo extends Component {
	static propTypes = {
		requestData: PropTypes.func,
		postData: PropTypes.func,
	};
	constructor(props) {
		super(props);
		this.state = {
			input: "",
		};
		this.addData = this.addData.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		this.props.requestData();
	}

	handleChange(event) {
		this.setState({ input: event.target.value });
	}

	addData(event) {
		event.preventDefault();
		const data = {
			task: this.state.input,
			color: "#FFFFFF",
			done: false,
			is_archived: false,
		};

		this.props.postData(data);
		this.setState({ input: "" });
		return data;
	}

	render() {
		return (
			<div>
				<div className="addTask">
					<form>
						<button
							className="addTask-button"
							onClick={this.addData}
						>
							+
						</button>
						<input
							type="text"
							className="addTask-input"
							placeholder="Add a to-do.."
							autoComplete="off"
							autofill="off"
							id="textbox"
							onChange={this.handleChange}
							value={this.state.input}
						/>
					</form>
				</div>
				<List />
			</div>
		);
	}
}

/* istanbul ignore next */
const mapStateToProps = state => ({
	data: state.getDataReducer.data,
});

/* istanbul ignore next */
const mapDispatchToProps = dispatch =>
	bindActionCreators({ postData, requestData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
