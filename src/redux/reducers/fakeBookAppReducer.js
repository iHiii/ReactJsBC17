import { COMMENT } from "../actions/types/fakeBookAppType";

const stateDefault = {
  arrComment: [
    { name: "Tèo", content: "Hello hello" },
    { name: "Nam", content: "Hello hello" },
  ],
};

export const fakeBookAppReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case COMMENT: {
      state.arrComment = [...state.arrComment, action.userComment];

      return { ...state };
    }

    default:
      return state;
  }
};
