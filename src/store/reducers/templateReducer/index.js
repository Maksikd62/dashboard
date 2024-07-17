const initialState = {
    counter: 0
};

export const TestReducer = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + 1 }
        case "DECREMENT":
            return { ...state, counter: state.counter - 1 }
        case "INCREASE":
            return { ...state, counter: state.counter + action.payload }
        default:
            return state;
    };
};