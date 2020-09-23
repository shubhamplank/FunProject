import React, { Component } from "react";
import axios from "axios";

class FetchData extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const url = "/api/customers";
    axios.get(url).then(res => {
      this.setState({
        data: res.data.data
      });
      console.log(res);
    });
  }
  render() {
    console.log(this.state.data);
    return <div></div>;
  }
}

export default FetchData;
