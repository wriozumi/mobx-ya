import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import DevTools from "mobx-react-devtools";
import { observable, computed } from "mobx";
import { observer } from "mobx-react";

const nickName = observable({
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
});

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
        <ul>
          {todos.map(({ text }) => {
            return <li key={text}>{text}</li>;
          })}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Counter store={todos} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
