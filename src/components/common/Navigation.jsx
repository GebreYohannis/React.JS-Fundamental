import { Component } from "react";

class NavigationBar extends Component {
  render() {
    console.log("props", this.props);
    return (
      <nav
        style={{
          background: "#122342",
          border: "1px solid #ccc",
          padding: "6px",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <h2>NabBar</h2>
        <span
          style={{
            background: "red",
            padding: 10,
            borderRadius: "100%",
            fontSize: 20,
          }}
        >
          {this.props.counters.length}
        </span>
      </nav>
    );
  }
}

export default NavigationBar;
