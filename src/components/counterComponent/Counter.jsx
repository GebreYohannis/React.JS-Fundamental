import { Component } from "react";
import "./Counter.css";
class Counter extends Component {
  render() {
    return (
      <div className="component">
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          className="btn btn--secondary"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>
        <button
          className="btn btn--primary"
          onClick={() => this.props.onDecrement(this.props.counter)}
          disabled={this.props.counter.value > 0 ? false : true}
        >
          -
        </button>
        <button
          className="btn btn--accent"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge ";
    if (this.props.counter.value === 0) classes += "badge--warnig";
    else classes += "badge--secondary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value;
  }
}

export default Counter;
