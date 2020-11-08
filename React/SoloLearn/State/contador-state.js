class Counter extends React.Component {
    state = {
      counter: 0
    }
    increment = () => {
      this.setState({
       counter: this.state.counter+1});
    }
    render() {
      return <div>
      <p>{this.state.counter}</p>
      <button onClick={this.increment}>Increment</button>
      </div>;
    }
  }