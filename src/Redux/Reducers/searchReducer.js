const initialState = {
     search: "",
};

export const searchReducer = (state = initialState, actions) => {
     switch (actions.type) {
          case "SEARCH":
               return {
                    ...state,
                    search: actions.item,
               };
          default:
               return state;
     }
};
