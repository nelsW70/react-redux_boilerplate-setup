const initialState = {
  username: "Hal",
  location: "space",
  current: "cold af"
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return {};

    default:
      return state;
  }
};

export default user;
