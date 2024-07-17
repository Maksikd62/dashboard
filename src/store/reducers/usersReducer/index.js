const initialUsersState = {
  users: [
    {
      id: 1,
      userName: "admin",
      email: "admin@dash.com",
      role: "admin",
      name: "admin",
      surname: "admin",
    },
    {
      id: 2,
      userName: "user1",
      email: "user1@dash.com",
      role: "user",
      name: "userName1",
      surname: "userSurname1",
    },
    {
      id: 3,
      userName: "user2",
      email: "user2@dash.com",
      role: "user",
      name: "userName2",
      surname: "userSurname2",
    },
    {
      id: 4,
      userName: "user3",
      email: "user3@dash.com",
      role: "user",
      name: "userName3",
      surname: "userSurname3",
    },
    {
      id: 5,
      userName: "user4",
      email: "user4@dash.com",
      role: "user",
      name: "userName4",
      surname: "userSurname4",
    },
    {
      id: 6,
      userName: "user5",
      email: "user5@dash.com",
      role: "user",
      name: "userName5",
      surname: "userSurname5",
    },
    {
      id: 7,
      userName: "user6",
      email: "user6@dash.com",
      role: "user",
      name: "userName6",
      surname: "userSurname6",
    },
    {
      id: 8,
      userName: "user7",
      email: "user7@dash.com",
      role: "user",
      name: "userName7",
      surname: "userSurname7",
    },
    {
      id: 9,
      userName: "user8",
      email: "user8@dash.com",
      role: "user",
      name: "userName8",
      surname: "userSurname8",
    },
    {
      id: 10,
      userName: "user9",
      email: "user5@dash.com",
      role: "user",
      name: "userName9",
      surname: "userSurname9",
    },
    {
      id: 11,
      userName: "user10",
      email: "user10@dash.com",
      role: "user",
      name: "userName10",
      surname: "userSurname10",
    },
  ],
};

export const UsersReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "EDIT_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id
            ? { ...user, ...action.payload.updatedUser }
            : user
        ),
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
