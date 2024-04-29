import React, { useState } from "react";
import * as TaskActionCreators from "../../redux/actions/taskActionCreators";
import { connect } from "react-redux";

const TaskList = (props) => {
  const { dispatch, tasks } = props;

  const [taskText, setTaskText] = useState("");

  const submitHendler = (e) => {
    e.preventDefault();

    dispatch(TaskActionCreators.createTask(taskText));
  };

  const changeTaskTextHendler = ({ target: { value } }) => {
    setTaskText(value);
  };

  const taskList = tasks.map((task) => (
    <li key={task.id}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => {
          dispatch(
            TaskActionCreators.updateTask({
              id: task.id,
              newValues: {
                isDone: !task.isDone,
              },
            })
          );
        }}
      />
      <span>{task.body}</span>
      <button onClick={() => {
        dispatch(TaskActionCreators.deleteTask(task.id))
      }}>delete</button>
    </li>
  ));

  return (
    <div>
      <h2>TaskList</h2>
      <form onSubmit={submitHendler}>
        <label>
          enter new task:{" "}
          <input value={taskText} onChange={changeTaskTextHendler} />
        </label>
        <button>Add task</button>
      </form>
      <ul>
        {taskList}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    tasks: state.task.tasks,
  };
}

export default connect(mapStateToProps)(TaskList);
