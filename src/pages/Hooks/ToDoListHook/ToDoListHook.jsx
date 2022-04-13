import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiArrTaskAction } from "../../../redux/actions/toDoListAction";
export default function ToDoListHook() {
  // const [arrTask, setArrTask] = useState([]);
  const { arrTask } = useSelector((state) => state.toDoListReducer);
  const dispatch = useDispatch();
  useEffect(async () => {
    // try {
    //     //gọi api
    //     const result = await axios({
    //         url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
    //         method: 'get'
    //     });
    //     // console.log(result.data);
    //     // await setArrTask(result.data);
    //     const action = {
    //         type: 'GET_ALL_TASK_API',
    //         arrTask: result.data
    //     }
    //     dispatch(action);
    // } catch (err) {

    // }

    /*
            Trong redux có 2 dạng action 
            + action : {type:'',payload:'data_gui_di'}
            + action : (dispatch) => { xử lý logic => dispatch}
        */
    const action = getApiArrTaskAction();

    dispatch(action);
  }, []);

  //ctr | cmd + F

  return (
    <div className="container">
      {/*Xoá button get task api */}
      <h3 className="text-center">To do app</h3>
      <div className="card">
        <div className="card-header">
          <div className="input-group-prepend mb-3">
            <span className="input-group-text btn btn-success">Add task</span>
            <input className="form-control" id="taskName" />
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
                      </td>
                    </tr>
                  );
                })}
            </tbody>
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
                      </td>
                    </tr>
                  );
                })}
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
