import React, { Component } from 'react';
import { Redirect } from "react-router";
import {
    Card, CardImg, CardBody,
    CardTitle, Button
  } from 'reactstrap';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            mouseOver: false
        };
        // Bind properties to class instance
        this._clickHandler = this._clickHandler.bind(this);
        this._mouseEnter = this._mouseEnter.bind(this);
        this._mouseLeave = this._mouseLeave.bind(this);
    }
    // Event handlers to modify state values
    _mouseEnter(e) {
        e.preventDefault();
        if (this.state.mouseOver === false) {
            // console.log(this.props.data.name);
            this.setState({
                mouseOver: true
            })
        }
    }
    _mouseLeave(e) {
        e.preventDefault();
        if (this.state.mouseOver === true) {
            this.setState({
                mouseOver: false
            })
        }
    }
    _clickHandler(e) {
        e.preventDefault();
        console.log(this.props.data.name);
        // if (this.state.open === false) {
            this.setState({ open: true });
            this.renderRedirect();
        // } else {
            // this.setState({
            //     open: false
            // });
        // }
    }

    renderRedirect = () => {
        if (this.state.open) {
            return <Redirect to='/new' />
        }
    }

    render() {
        // Modify styles based on state values
        // let tileStyle = {};
        // let headerStyle = {};
        // let zoom = {};
        // When tile clicked
        // if (this.state.open) {
        //     tileStyle = {
        //         width: '62vw',
        //         height: '62vw',
        //         position: 'absolute',
        //         top: '50%',
        //         left: '50%',
        //         margin: '0',
        //         marginTop: '-31vw',
        //         marginLeft: '-31vw',
        //         boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
        //         transform: 'none'
        //     };
        // } else {
        //     tileStyle = {
        //         width: '18vw',
        //         height: '18vw'
        //     };
        // }

        return (
            <div className="col-md-3 mb-3">
                {/* <img
                    onMouseEnter={this._mouseEnter}
                    onMouseLeave={this._mouseLeave}
                    onClick={this._clickHandler}
                    src={this.props.data.image}
                    alt={this.props.data.name}
                    style={tileStyle}
                /> */}

                <Card onMouseEnter={this._mouseEnter} onMouseLeave={this._mouseLeave}>
                    <CardImg className="photo" top width="100%" src={this.props.data.image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5">{this.props.data.name}</CardTitle>
                        <Button onClick={this._clickHandler}>Open</Button>
                        {this.renderRedirect()}
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Tile;