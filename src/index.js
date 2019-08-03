import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import DevTools from "mobx-react-devtools";
import { observable, computed, configure, action } from "mobx";
import { observer } from "mobx-react";

configure({ enforceActions: "observed" });

const nickName = observable(
  {
    firstName: "Wrio",
    age: 30,

    get nickName() {
      console.log(`Generate nickname!`);
      return `${this.firstName}${this.age}`;
    },
    increment() {
      this.age++;
    },
    decrement() {
      this.age--;
    }
  },
  {
    increment: action,
    decrement: action
  }
);

const todos = observable([{ text: "Learn React" }, { text: "Learn MobX" }]);
@observer
class Counter extends React.Component {
  handleDecrement = () => {
    this.props.store.decrement();
  };
  handleIncrement = () => {
    this.props.store.increment();
  };
  render() {
    return (
      <div className="App">
        {/* <DevTools /> */}
        <h1>{this.props.store.nickName}</h1>
        <h1>{this.props.store.age}</h1>
        <button onClick={this.handleDecrement}>-1</button>
        <button onClick={this.handleIncrement}>+1</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter store={nickName} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
