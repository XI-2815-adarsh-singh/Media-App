import React, {Component} from "react";
import Tiles from "./Tiles";

class Photos extends Component {
    
	render() {
		return (
			<Tiles data={this.props.data} />
		);
	}
}

export default Photos;