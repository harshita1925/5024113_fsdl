import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>Store Information</h2>
        <p>Store Name: {this.props.storeName}</p>
        <p>Location: {this.props.location}</p>
        <p>Rating: {this.props.rating} ⭐</p>
      </div>
    );
  }
}

export default ClassComponent;