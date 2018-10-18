import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/actions";

class App extends Component {
  render() {
    let input;
    return (
      <div className="App">
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            this.props.addTodo(input.value);
            input.value = "";
          }}
        >
          <input ref={node => (input = node)} />
          &nbsp;&nbsp;
          <button type="submit">Add Todo</button>
        </form>

        <ul>
          {this.props.todoArr.map(el => (
            <li key={el.key}>{el.item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoArr: state.todoArr
  };
};

const mapDispachToProps = dispatch => {
  return {
    addTodo: d => dispatch(actionCreator.onAddTodo(d))
  };
};
export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
