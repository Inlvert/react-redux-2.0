import React, { useState } from "react";
import * as TaskActionCreators from "../../redux/actions/taskActionCreators";
import { useSelector, useDispatch} from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

const TaskList = (props) => {
  const { tasks } = useSelector((state) => state.task);

  const dispatch = useDispatch();

  const [taskText, setTaskText] = useState("");


  // const result = bindActionCreators(TaskActionCreators, dispatch);

  // console.log(result)


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

// function mapStateToProps(state) {
//   return {
//     tasks: state.task.tasks,
//   };
// }

// export default connect(mapStateToProps)(TaskList);

export default TaskList