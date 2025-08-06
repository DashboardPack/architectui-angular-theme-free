// This file is deprecated - NgRx state management is now handled in:
// - config.state.ts (state interfaces)
// - config.reducer.ngrx.ts (reducers)
// - config.actions.ngrx.ts (actions)
// - config.service.ts (service layer)

// Re-export for backwards compatibility
export { AppState, ConfigState, initialConfigState } from './config.state';
export * from './config.actions.ngrx';
export { configReducer } from './config.reducer.ngrx';


