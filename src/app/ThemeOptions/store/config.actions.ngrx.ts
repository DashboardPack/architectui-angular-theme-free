import { createAction, props } from '@ngrx/store';

export const getConfig = createAction('[Config] Get Config');

export const updateConfig = createAction(
  '[Config] Update Config',
  props<{ config: { headerTheme?: string; sidebarTheme?: string } }>()
);