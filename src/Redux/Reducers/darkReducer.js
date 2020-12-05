let initialState = {
     dark: true,
};

export const darkReducer = (state = initialState, actions) => {
     switch (actions.type) {
          case "TOGGLE_MODE":
               return {
                    ...state,
                    dark: actions.item,
               };
          default:
               return state;
     }
};
