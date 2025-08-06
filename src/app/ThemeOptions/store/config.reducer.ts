import { createReducer, on } from '@ngrx/store';
import * as ConfigActions from './config.actions.ngrx';

export interface ConfigState {
  headerTheme: string;
  sidebarTheme: string;
}

const INITIAL_STATE: ConfigState = {
  headerTheme:  '',
  sidebarTheme:  '',
}

export const configReducer = createReducer(
  INITIAL_STATE,
  on(ConfigActions.getConfig, (state) => ({ ...state })),
  on(ConfigActions.updateConfig, (state, { config }) => ({ ...state, ...config }))
);

// For backward compatibility with older Angular versions
export function ConfigReducer(state: ConfigState | undefined, action: any) {
  return configReducer(state, action);
}

