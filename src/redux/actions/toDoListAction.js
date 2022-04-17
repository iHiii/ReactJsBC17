import axios from "axios";

export const getApiArrTaskAction = () => {
  return async (dispatch) => {
    //Xử lý bất đồng bộ rồi mới có dữ liệu gửi lên redux = tham số dispatch
    try {
      //gọi api
      const result = await axios({
        url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
        method: "get",
      });
      // console.log(result.data);
      // await setArrTask(result.data);
      const action = {
        type: "GET_ALL_TASK_API",
        arrTask: result.data,
      };
      dispatch(action);
    } catch (err) {
      console.log(123);
    }
  };
};

export const addTaskAction = (task) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "http://svcy.myclass.vn/api/todolist/addtask",
        method: "POST",
        data: task, // {taskName:'',status:false}
      });
      //Gọi api getalltask ...
      console.log("ketQua", result);

      //Tiếp tục dispatch logic getAllTask
      const action = getApiArrTaskAction();
      dispatch(action);
    } catch (err) {
      console.log({ err });
    }
  };
};

//Định nghĩa action gọi api/todolist/donetask => dispatch getApiArraTask

export const checkDoneTaskAction = (taskName) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
        method: "PUT",
      });

      console.log(result);
      //Tiếp tục dispatch logic getAllTask
      const action = getApiArrTaskAction();
      dispatch(action);
    } catch (err) {
      console.log({ err });
    }
  };
};

export const deleteTaskApiAction = (taskName) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskname=${taskName}`,
        method: "DELETE",
      });

      console.log(result);
      //Tiếp tục dispatch logic getAllTask
      const action = getApiArrTaskAction();
      dispatch(action);
    } catch (err) {
      console.log({ err });
    }
  };
};

export const rejectTaskApiAction = (taskName) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskname=${taskName}`,
        method: "put",
      });

      console.log(result);
      //Tiếp tục dispatch logic getAllTask
      const action = getApiArrTaskAction();
      dispatch(action);
    } catch (err) {
      console.log({ err });
    }
  };
};
