export const addUser = (user) => (dispatch) => {
    try {
      dispatch({ type: "ADD_USER", payload: user });
    } catch (error) {
      console.error("Add user error: ", error);
    }
  };
  
  export const editUser = (id, updatedUser) => (dispatch) => {
    try {
      dispatch({ type: "EDIT_USER", payload: { id, updatedUser } });
    } catch (error) {
      console.error("Edit user error: ", error);
    }
  };
  
  export const deleteUser = (id) => (dispatch) => {
    try {
      dispatch({ type: "DELETE_USER", payload: id });
    } catch (error) {
      console.error("Delete user error: ", error);
    }
  };
  