import React, { Component } from 'react';
import Tile from './Tile';

class Tiles extends Component {
    
    render() {
		return (
			<div className="tiles">
                <div className="row">
                    {this.props.data.map((data) => {
                        return <Tile data={data} key={data.id} />
                    })}
                </div>
			</div>
		);
	}
}

export default Tiles;