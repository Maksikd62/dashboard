import * as authActions from "../authReducer/actions";
import * as themeActions from "../themingReducer/actions";

const actions = {
    ...authActions,
    ...themeActions
};

export default actions;