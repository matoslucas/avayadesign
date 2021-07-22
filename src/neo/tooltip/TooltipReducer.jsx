export const Action = {
  SHOW: "show",
  HIDE: "hide",
};

export const TooltipReducer = (state, action) => {
  switch (action.type) {
    case Action.SHOW: {
      //console.log("state:", state)
      //console.log("action:",action)
      return action.state;
    }
    case Action.HIDE: {
      return action.state;
    }

    default:
      return state;
  }
};
