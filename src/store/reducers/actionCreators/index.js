import * as authActions from "../authReducer/actions";
import * as themeActions from "../themingReducer/actions";
import * as usersActions from "../usersReducer/actions"

const actions = {
    ...authActions,
    ...themeActions,
    ...usersActions
};

export default actions;