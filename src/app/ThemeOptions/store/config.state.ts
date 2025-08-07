export interface ConfigState {
  headerTheme: string;
  sidebarTheme: string;
}

export const initialConfigState: ConfigState = {
  headerTheme: '',
  sidebarTheme: ''
};

export interface AppState {
  config: ConfigState;
}