import { ConfigActions } from './config.actions';

const INITIAL_STATE = {
  headerTheme:  '',
  sidebarTheme:  '',
}

export function ConfigReducer(state = INITIAL_STATE, action: any): any {

  switch (action.type) {
    case ConfigActions.CONFIG_GET:
      return Object.assign({}, state);

    case ConfigActions.CONFIG_UPDATE:
      return Object.assign({}, state, {...action.payload});

    default:
      return state;
  }
}

