
import { findIndex } from "lodash";



export const useActions = (state, dispatch) => {
  // Creates a new user
  const addUser = (newUser) => {
    const newUsers = [...state.users];
    newUsers.push(newUser);
    dispatch({
      type: "ADD_USER",
      payload: newUsers,
    });
  };

  // Attempts to login with provided credentials
  const logIn = (credentials) => {
    const currentUser = state.users.find(
      (element) =>
        element.password === credentials.password &&
        element.email === credentials.email
    );
    if (currentUser) {
      dispatch({
        type: "LOGIN",
        payload: { ...currentUser },
      });
    } else {
      alert("Invalid username and/or password");
    }
  };

  const withdraw = (amount) => {
    const userIndex = findIndex(
      state.users,
      (element) => element.email === state.currentUser.email
    );
    const newUsers = [...state.users];
    const user = newUsers[userIndex];
    const newTransaction = {
      type: "WITHDRAW",
      amount: Number,
      date: new Date(),
    };
    user.transactions.push(newTransaction);
    user.balance -= amount;
    dispatch({
      type: "UPDATE_USERS",
      payload: newUsers,
    });

    dispatch({
      type: "UPDATE_USER",
      payload: {
        ...state.currentUser,
        balance: state.currentUser.balance - amount,
      },
    });
  };

  const deposit = (amount) => {
    const userIndex = findIndex(
      state.users,
      (element) => element.email === state.currentUser.email
    );
    const newUsers = [...state.users];
    const user = newUsers[userIndex];
    console.log ( user);
    const newTransaction = {
      type: "DEPOSIT",
      amount: Number,
      date: new Date(),
    };
    // problem code
    console.log (newTransaction);
    user.transactions.push(newTransaction);
    user.balance += amount;
    dispatch({
      type: "UPDATE_USERS",
      payload: newUsers,
    });

    dispatch({
      type: "UPDATE_USER",
      payload: {
        ...state.currentUser,
        balance: state.currentUser.balance + amount,
      },
    });
  };

  const setSuccess = (value) => {
    dispatch({
      type: "SET_SUCCESS",
      payload: value,
    });
  };

  const setError = (value) => {
    dispatch({
      type: "SET_ERROR",
      payload: value,
    });
  };

  return {
    addUser,
    logIn,
    withdraw,
    deposit,
    setSuccess,
    setError,
  };
};

export default useActions