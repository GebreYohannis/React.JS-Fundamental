import { Component } from "react";
import Counter from "./Counter";
import "./Counter.css";

class Counters extends Component {
  render() {
    return (
      <div className="">
        <button className="btn btn--black" onClick={this.props.onReset}>
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
