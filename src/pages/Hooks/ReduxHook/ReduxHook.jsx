import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { commentAction } from "../../../redux/actions/fakeBookAppActions";
import { COMMENT } from "../../../redux/actions/types/fakeBookAppType";

export default function ReduxHook(props) {
  const [userComment, setUserComment] = useState({
    name: "",
    content: "",
  });
  //useSelector giống hàm mapStateToprops dùng để lấy dữ liệu từ reducer về

  const { arrComment } = useSelector(
    (rootReducer) => rootReducer.fakeBookAppReducer
  );

  //Sử dụng hook useDispatch giống props.dispatch
  const dispatch = useDispatch();

  console.log("arrComment", arrComment);

  console.log("userComment", userComment);
  const handleChange = (e) => {
    let { id, value } = e.target;
    setUserComment({
      ...userComment,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //Chặn sự kiện reload browser
    //gửi dữ liệu
    console.log("submit", userComment);

    //Tạo ra action
    // const action = {type:'',userComment}

    const action = {
      type: COMMENT,
      userComment,
    };
    dispatch(action);
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          {arrComment.map(({ name, content }, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-2">
                  <img
                    src={`https://i.pravatar.cc?u=${name}`}
                    alt="..."
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col-10">
                  <p className="text-danger">{name}</p>
                  <p>{content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <form className="card-body bg-dark text-white" onSubmit={handleSubmit}>
        <div className="form-group">
          <p>name</p>
          <input id="name" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <p>content</p>
          <input
            id="content"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

// const mapStateToProps = (rootReducer)=>{

//     return {
//         arrComment:rootReducer.fakeBookAppReducer.arrComment
//     }
// }

// export default connect(mapStateToProps)(ReduxHook)
