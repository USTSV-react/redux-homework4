import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: "1" }
  }

  onChange = e => {
    this.setState({ num: e.target.value });
  }

  onIn = () => {
    this.props.dispatch({ type: "INCREMENT", number: +this.state.num });
  }

  onDe = () => {
    this.props.dispatch({ type: "DECREMENT", number: +this.state.num });
  }

  render() {
    console.log(this.state);
    const { number } = this.props;
    return (
      <div>
        <div>{number}</div>
        <button onClick={this.onIn}>+</button>
        <button onClick={this.onDe}>-</button>
        <select value={this.state.num} onChange={this.onChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    number: state
  };
};

export default connect(mapStateToProps)(App);
