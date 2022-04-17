import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addTaskAction,
  checkDoneTaskAction,
  deleteTaskApiAction,
  getApiArrTaskAction,
  rejectTaskApiAction,
} from "../../../redux/actions/toDoListAction";
export default function ToDoListHook() {
  // const [arrTask, setArrTask] = useState([]);
  const [task, setTask] = useState({
    taskName: "",
    status: false,
  });
  const { arrTask } = useSelector((state) => state.toDoListReducer);
  const dispatch = useDispatch();
  useEffect(async () => {
    /*
            Trong redux có 2 dạng action 
            + action : {type:'',payload:'data_gui_di'}
            + action : (dispatch) => { xử lý logic => dispatch}
        */
    const action = getApiArrTaskAction();
    dispatch(action);
  }, []);

  const addTaskApi = async (event) => {
    //Khi người dùng submit hoặc enter
    //xử lý thêm task
    event.preventDefault();

    const action = addTaskAction(task); //Sau khi gọi hàm kết quả trả về là (dispatch) => { }
    dispatch(action);
  };

  const handleCheckDoneTask = (taskName) => {
    //Gọi api = action thunk
    const action = checkDoneTaskAction(taskName);
    dispatch(action);
  };

  const handleDelTask = (taskName) => {
    const action = deleteTaskApiAction(taskName);
    dispatch(action);
  };

  const handleRejectTask = (taskName) => {
    const action = rejectTaskApiAction(taskName);
    dispatch(action);
  };

  //ctr | cmd + F
  console.log(task);
  return (
    <div className="container">
      {/*Xoá button get task api */}
      <h3 className="text-center">To do app</h3>

      <form className="card" onSubmit={addTaskApi}>
        <div className="card-header">
          <div className="input-group-prepend mb-3">
            <button type="submit" className="input-group-text btn btn-success">
              Add task
            </button>
            <input
              onChange={(e) => {
                let { value, id } = e.target;
                setTask({
                  ...task,

                  [id]: value,
                });
              }}
              className="form-control"
              id="taskName"
            />
          </div>
        </div>
        <div className="card-body">
          <table className="table">
            <tbody>
              {/* Load công việc chưa làm */}
              {arrTask
                .filter((task) => task.status === false)
                .map((task, index) => {
                  return (
                    <tr key={index}>
                      <td>{task.taskName}</td>
                      <td>
                        <span className="badge badge-danger">incomplete</span>
                        <i
                          onClick={() => {
                            handleCheckDoneTask(task.taskName);
                          }}
                          className="fa fa-check-circle text-success"
                          style={{
                            padding: 10,
                            cursor: "pointer",
                            fontSize: 30,
                          }}
                        ></i>
                        <i
                          onClick={() => {
                            handleDelTask(task.taskName);
                          }}
                          className="fa fa-trash text-danger"
                          style={{
                            padding: 10,
                            cursor: "pointer",
                            fontSize: 30,
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <tr>
              <td colSpan={2}>
                <hr />
              </td>
            </tr>
            <tfoot>
              {/* Load công việc làm rồi */}
              {arrTask
                .filter((task) => task.status === true)
                .map((task, index) => {
                  return (
                    <tr key={index}>
                      <td>{task.taskName}</td>
                      <td>
                        <span className="badge badge-success">complete</span>
                        <i
                          onClick={() => {
                            handleRejectTask(task.taskName);
                          }}
                          className="fa fa-undo text-warning"
                          style={{
                            padding: 10,
                            cursor: "pointer",
                            fontSize: 30,
                          }}
                        ></i>
                        <i
                          onClick={() => {
                            handleDelTask(task.taskName);
                          }}
                          className="fa fa-trash text-danger"
                          style={{
                            padding: 10,
                            cursor: "pointer",
                            fontSize: 30,
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
            </tfoot>
          </table>
        </div>
      </form>
    </div>
  );
}
