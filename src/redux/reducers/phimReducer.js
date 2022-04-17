const stateDefault = {
  mangPhim: [],
};

export const phimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_DANH_SACH_PHIM_API": {
      state.mangPhim = action.data;

      return { ...state };
    }

    default:
      return state;
  }
};
