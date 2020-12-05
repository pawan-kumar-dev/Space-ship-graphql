const initialState = {
     data: [],
};

export const dataReducer = (state = initialState, actions) => {
     switch (actions.type) {
          case "FETCH_DATA":
               return {
                    data: actions.item,
               };
          default:
               return state;
     }
};
