import { Component } from "react";

class NewCounter extends Component {
  state = {
    count: 0,
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button>+</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count;
  }
}

export default NewCounter;
