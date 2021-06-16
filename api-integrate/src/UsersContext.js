import React, {createContext, useReducer, useContext} from 'react';
import * as api from './api';
import {createAsyncDispatch, createAsyncHandler, initialAsyncState} from './asyncActionUtils'

const initialState = {
  users: initialAsyncState,
  user: initialAsyncState
}

const usersHandler = createAsyncHandler('GET_USERS', 'users');
const userHandler = createAsyncHandler('GET_USER', 'user');

function usersReducer(state, action) {
  switch (action.type) {
    case 'GET_USERS':
    case 'GET_USERS_SUCCESS':
    case 'GET_USERS_ERROR':
      return usersHandler(state, action);
    case 'GET_USER':
    case 'GET_USER_SUCCESS':
    case 'GET_USER_ERROR':
      return userHandler(state, action);
    default:
      return new Error(`Unhandled action type: ${action.type}`);
  }
}

const UsersStateContext = createContext(null);
const UsersDispatchContext = createContext(null);

export function UsersProvider({children}) {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContext.Provider value={dispatch}>
        {children}
      </UsersDispatchContext.Provider>
    </UsersStateContext.Provider>
  )
}

export function useUsersState() { // 커스텀 Hook을 통해서 반환
  const state = useContext(UsersStateContext);
  if (!state) {
    throw new Error('Cannot find UserProvider');
  }
  return state;
}

export function useUserDispatch() {
  const dispatch = useContext(UsersDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find UserProvider');
  }
  return dispatch;
}

export const getUsers = createAsyncDispatch('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatch('GET_USER', api.getUser);
