import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false};
  }

  render() {
    return (
      <div className="app">
        <button onClick={() => this.setState({isOpen: true})}>open modal</button>
        {this.state.isOpen && <div className="modal-container"><div className="modal-content">Hello world! <button onClick={() => this.setState({isOpen: false})}>x</button></div></div>}
      </div>
    );
  }
}

export default App;
