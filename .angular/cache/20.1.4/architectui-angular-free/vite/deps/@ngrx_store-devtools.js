import {
  ActionsSubject,
  INIT,
  INITIAL_STATE,
  ReducerManagerDispatcher,
  ReducerObservable,
  ScannedActionsSubject,
  StateObservable,
  UPDATE
} from "./chunk-3WUOT733.js";
import {
  toSignal
} from "./chunk-TKAJEFA3.js";
import {
  EMPTY,
  ErrorHandler,
  Inject,
  Injectable,
  InjectionToken,
  NgModule,
  NgZone,
  Observable,
  ReplaySubject,
  catchError,
  concatMap,
  debounceTime,
  filter,
  inject,
  makeEnvironmentProviders,
  map,
  merge,
  observeOn,
  of,
  queueScheduler,
  scan,
  setClassMetadata,
  share,
  skip,
  switchMap,
  take,
  takeUntil,
  timeout,
  withLatestFrom,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵinject
} from "./chunk-EXSWTI76.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/@ngrx/store-devtools/fesm2022/ngrx-store-devtools.mjs
var PERFORM_ACTION = "PERFORM_ACTION";
var REFRESH = "REFRESH";
var RESET = "RESET";
var ROLLBACK = "ROLLBACK";
var COMMIT = "COMMIT";
var SWEEP = "SWEEP";
var TOGGLE_ACTION = "TOGGLE_ACTION";
var SET_ACTIONS_ACTIVE = "SET_ACTIONS_ACTIVE";
var JUMP_TO_STATE = "JUMP_TO_STATE";
var JUMP_TO_ACTION = "JUMP_TO_ACTION";
var IMPORT_STATE = "IMPORT_STATE";
var LOCK_CHANGES = "LOCK_CHANGES";
var PAUSE_RECORDING = "PAUSE_RECORDING";
var PerformAction = class {
  constructor(action, timestamp) {
    this.action = action;
    this.timestamp = timestamp;
    this.type = PERFORM_ACTION;
    if (typeof action.type === "undefined") {
      throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
    }
  }
};
var Refresh = class {
  constructor() {
    this.type = REFRESH;
  }
};
var Reset = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = RESET;
  }
};
var Rollback = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = ROLLBACK;
  }
};
var Commit = class {
  constructor(timestamp) {
    this.timestamp = timestamp;
    this.type = COMMIT;
  }
};
var Sweep = class {
  constructor() {
    this.type = SWEEP;
  }
};
var ToggleAction = class {
  constructor(id) {
    this.id = id;
    this.type = TOGGLE_ACTION;
  }
};
var JumpToState = class {
  constructor(index) {
    this.index = index;
    this.type = JUMP_TO_STATE;
  }
};
var JumpToAction = class {
  constructor(actionId) {
    this.actionId = actionId;
    this.type = JUMP_TO_ACTION;
  }
};
var ImportState = class {
  constructor(nextLiftedState) {
    this.nextLiftedState = nextLiftedState;
    this.type = IMPORT_STATE;
  }
};
var LockChanges = class {
  constructor(status) {
    this.status = status;
    this.type = LOCK_CHANGES;
  }
};
var PauseRecording = class {
  constructor(status) {
    this.status = status;
    this.type = PAUSE_RECORDING;
  }
};
var StoreDevtoolsConfig = class {
  constructor() {
    this.maxAge = false;
  }
};
var STORE_DEVTOOLS_CONFIG = new InjectionToken("@ngrx/store-devtools Options");
var INITIAL_OPTIONS = new InjectionToken("@ngrx/store-devtools Initial Config");
function noMonitor() {
  return null;
}
var DEFAULT_NAME = "NgRx Store DevTools";
function createConfig(optionsInput) {
  const DEFAULT_OPTIONS = {
    maxAge: false,
    monitor: noMonitor,
    actionSanitizer: void 0,
    stateSanitizer: void 0,
    name: DEFAULT_NAME,
    serialize: false,
    logOnly: false,
    autoPause: false,
    trace: false,
    traceLimit: 75,
    // Add all features explicitly. This prevent buggy behavior for
    // options like "lock" which might otherwise not show up.
    features: {
      pause: true,
      // Start/pause recording of dispatched actions
      lock: true,
      // Lock/unlock dispatching actions and side effects
      persist: true,
      // Persist states on page reloading
      export: true,
      // Export history of actions in a file
      import: "custom",
      // Import history of actions from a file
      jump: true,
      // Jump back and forth (time travelling)
      skip: true,
      // Skip (cancel) actions
      reorder: true,
      // Drag and drop actions in the history list
      dispatch: true,
      // Dispatch custom actions or action creators
      test: true
      // Generate tests for the selected actions
    },
    connectInZone: false
  };
  const options = typeof optionsInput === "function" ? optionsInput() : optionsInput;
  const logOnly = options.logOnly ? {
    pause: true,
    export: true,
    test: true
  } : false;
  const features = options.features || logOnly || DEFAULT_OPTIONS.features;
  if (features.import === true) {
    features.import = "custom";
  }
  const config = Object.assign({}, DEFAULT_OPTIONS, {
    features
  }, options);
  if (config.maxAge && config.maxAge < 2) {
    throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${config.maxAge}`);
  }
  return config;
}
function difference(first, second) {
  return first.filter((item) => second.indexOf(item) < 0);
}
function unliftState(liftedState) {
  const {
    computedStates,
    currentStateIndex
  } = liftedState;
  if (currentStateIndex >= computedStates.length) {
    const {
      state: state2
    } = computedStates[computedStates.length - 1];
    return state2;
  }
  const {
    state
  } = computedStates[currentStateIndex];
  return state;
}
function liftAction(action) {
  return new PerformAction(action, +Date.now());
}
function sanitizeActions(actionSanitizer, actions) {
  return Object.keys(actions).reduce((sanitizedActions, actionIdx) => {
    const idx = Number(actionIdx);
    sanitizedActions[idx] = sanitizeAction(actionSanitizer, actions[idx], idx);
    return sanitizedActions;
  }, {});
}
function sanitizeAction(actionSanitizer, action, actionIdx) {
  return __spreadProps(__spreadValues({}, action), {
    action: actionSanitizer(action.action, actionIdx)
  });
}
function sanitizeStates(stateSanitizer, states) {
  return states.map((computedState, idx) => ({
    state: sanitizeState(stateSanitizer, computedState.state, idx),
    error: computedState.error
  }));
}
function sanitizeState(stateSanitizer, state, stateIdx) {
  return stateSanitizer(state, stateIdx);
}
function shouldFilterActions(config) {
  return config.predicate || config.actionsSafelist || config.actionsBlocklist;
}
function filterLiftedState(liftedState, predicate, safelist, blocklist) {
  const filteredStagedActionIds = [];
  const filteredActionsById = {};
  const filteredComputedStates = [];
  liftedState.stagedActionIds.forEach((id, idx) => {
    const liftedAction = liftedState.actionsById[id];
    if (!liftedAction) return;
    if (idx && isActionFiltered(liftedState.computedStates[idx], liftedAction, predicate, safelist, blocklist)) {
      return;
    }
    filteredActionsById[id] = liftedAction;
    filteredStagedActionIds.push(id);
    filteredComputedStates.push(liftedState.computedStates[idx]);
  });
  return __spreadProps(__spreadValues({}, liftedState), {
    stagedActionIds: filteredStagedActionIds,
    actionsById: filteredActionsById,
    computedStates: filteredComputedStates
  });
}
function isActionFiltered(state, action, predicate, safelist, blockedlist) {
  const predicateMatch = predicate && !predicate(state, action.action);
  const safelistMatch = safelist && !action.action.type.match(safelist.map((s) => escapeRegExp(s)).join("|"));
  const blocklistMatch = blockedlist && action.action.type.match(blockedlist.map((s) => escapeRegExp(s)).join("|"));
  return predicateMatch || safelistMatch || blocklistMatch;
}
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function injectZoneConfig(connectInZone) {
  const ngZone = connectInZone ? inject(NgZone) : null;
  return {
    ngZone,
    connectInZone
  };
}
var DevtoolsDispatcher = class _DevtoolsDispatcher extends ActionsSubject {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDevtoolsDispatcher_BaseFactory;
      return function DevtoolsDispatcher_Factory(__ngFactoryType__) {
        return (ɵDevtoolsDispatcher_BaseFactory || (ɵDevtoolsDispatcher_BaseFactory = ɵɵgetInheritedFactory(_DevtoolsDispatcher)))(__ngFactoryType__ || _DevtoolsDispatcher);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DevtoolsDispatcher,
      factory: _DevtoolsDispatcher.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevtoolsDispatcher, [{
    type: Injectable
  }], null, null);
})();
var ExtensionActionTypes = {
  START: "START",
  DISPATCH: "DISPATCH",
  STOP: "STOP",
  ACTION: "ACTION"
};
var REDUX_DEVTOOLS_EXTENSION = new InjectionToken("@ngrx/store-devtools Redux Devtools Extension");
var DevtoolsExtension = class _DevtoolsExtension {
  constructor(devtoolsExtension, config, dispatcher) {
    this.config = config;
    this.dispatcher = dispatcher;
    this.zoneConfig = injectZoneConfig(this.config.connectInZone);
    this.devtoolsExtension = devtoolsExtension;
    this.createActionStreams();
  }
  notify(action, state) {
    if (!this.devtoolsExtension) {
      return;
    }
    if (action.type === PERFORM_ACTION) {
      if (state.isLocked || state.isPaused) {
        return;
      }
      const currentState = unliftState(state);
      if (shouldFilterActions(this.config) && isActionFiltered(currentState, action, this.config.predicate, this.config.actionsSafelist, this.config.actionsBlocklist)) {
        return;
      }
      const sanitizedState = this.config.stateSanitizer ? sanitizeState(this.config.stateSanitizer, currentState, state.currentStateIndex) : currentState;
      const sanitizedAction = this.config.actionSanitizer ? sanitizeAction(this.config.actionSanitizer, action, state.nextActionId) : action;
      this.sendToReduxDevtools(() => this.extensionConnection.send(sanitizedAction, sanitizedState));
    } else {
      const sanitizedLiftedState = __spreadProps(__spreadValues({}, state), {
        stagedActionIds: state.stagedActionIds,
        actionsById: this.config.actionSanitizer ? sanitizeActions(this.config.actionSanitizer, state.actionsById) : state.actionsById,
        computedStates: this.config.stateSanitizer ? sanitizeStates(this.config.stateSanitizer, state.computedStates) : state.computedStates
      });
      this.sendToReduxDevtools(() => this.devtoolsExtension.send(null, sanitizedLiftedState, this.getExtensionConfig(this.config)));
    }
  }
  createChangesObservable() {
    if (!this.devtoolsExtension) {
      return EMPTY;
    }
    return new Observable((subscriber) => {
      const connection = this.zoneConfig.connectInZone ? (
        // To reduce change detection cycles, we need to run the `connect` method
        // outside of the Angular zone. The `connect` method adds a `message`
        // event listener to communicate with an extension using `window.postMessage`
        // and handle message events.
        this.zoneConfig.ngZone.runOutsideAngular(() => this.devtoolsExtension.connect(this.getExtensionConfig(this.config)))
      ) : this.devtoolsExtension.connect(this.getExtensionConfig(this.config));
      this.extensionConnection = connection;
      connection.init();
      connection.subscribe((change) => subscriber.next(change));
      return connection.unsubscribe;
    });
  }
  createActionStreams() {
    const changes$ = this.createChangesObservable().pipe(share());
    const start$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.START));
    const stop$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.STOP));
    const liftedActions$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.DISPATCH), map((change) => this.unwrapAction(change.payload)), concatMap((action) => {
      if (action.type === IMPORT_STATE) {
        return this.dispatcher.pipe(filter((action2) => action2.type === UPDATE), timeout(1e3), debounceTime(1e3), map(() => action), catchError(() => of(action)), take(1));
      } else {
        return of(action);
      }
    }));
    const actions$ = changes$.pipe(filter((change) => change.type === ExtensionActionTypes.ACTION), map((change) => this.unwrapAction(change.payload)));
    const actionsUntilStop$ = actions$.pipe(takeUntil(stop$));
    const liftedUntilStop$ = liftedActions$.pipe(takeUntil(stop$));
    this.start$ = start$.pipe(takeUntil(stop$));
    this.actions$ = this.start$.pipe(switchMap(() => actionsUntilStop$));
    this.liftedActions$ = this.start$.pipe(switchMap(() => liftedUntilStop$));
  }
  unwrapAction(action) {
    return typeof action === "string" ? (0, eval)(`(${action})`) : action;
  }
  getExtensionConfig(config) {
    const extensionOptions = {
      name: config.name,
      features: config.features,
      serialize: config.serialize,
      autoPause: config.autoPause ?? false,
      trace: config.trace ?? false,
      traceLimit: config.traceLimit ?? 75
      // The action/state sanitizers are not added to the config
      // because sanitation is done in this class already.
      // It is done before sending it to the devtools extension for consistency:
      // - If we call extensionConnection.send(...),
      //   the extension would call the sanitizers.
      // - If we call devtoolsExtension.send(...) (aka full state update),
      //   the extension would NOT call the sanitizers, so we have to do it ourselves.
    };
    if (config.maxAge !== false) {
      extensionOptions.maxAge = config.maxAge;
    }
    return extensionOptions;
  }
  sendToReduxDevtools(send) {
    try {
      send();
    } catch (err) {
      console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools", err);
    }
  }
  static {
    this.ɵfac = function DevtoolsExtension_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DevtoolsExtension)(ɵɵinject(REDUX_DEVTOOLS_EXTENSION), ɵɵinject(STORE_DEVTOOLS_CONFIG), ɵɵinject(DevtoolsDispatcher));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DevtoolsExtension,
      factory: _DevtoolsExtension.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DevtoolsExtension, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [REDUX_DEVTOOLS_EXTENSION]
    }]
  }, {
    type: StoreDevtoolsConfig,
    decorators: [{
      type: Inject,
      args: [STORE_DEVTOOLS_CONFIG]
    }]
  }, {
    type: DevtoolsDispatcher
  }], null);
})();
var INIT_ACTION = {
  type: INIT
};
var RECOMPUTE = "@ngrx/store-devtools/recompute";
var RECOMPUTE_ACTION = {
  type: RECOMPUTE
};
function computeNextEntry(reducer, action, state, error, errorHandler) {
  if (error) {
    return {
      state,
      error: "Interrupted by an error up the chain"
    };
  }
  let nextState = state;
  let nextError;
  try {
    nextState = reducer(state, action);
  } catch (err) {
    nextError = err.toString();
    errorHandler.handleError(err);
  }
  return {
    state: nextState,
    error: nextError
  };
}
function recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused) {
  if (minInvalidatedStateIndex >= computedStates.length && computedStates.length === stagedActionIds.length) {
    return computedStates;
  }
  const nextComputedStates = computedStates.slice(0, minInvalidatedStateIndex);
  const lastIncludedActionId = stagedActionIds.length - (isPaused ? 1 : 0);
  for (let i = minInvalidatedStateIndex; i < lastIncludedActionId; i++) {
    const actionId = stagedActionIds[i];
    const action = actionsById[actionId].action;
    const previousEntry = nextComputedStates[i - 1];
    const previousState = previousEntry ? previousEntry.state : committedState;
    const previousError = previousEntry ? previousEntry.error : void 0;
    const shouldSkip = skippedActionIds.indexOf(actionId) > -1;
    const entry = shouldSkip ? previousEntry : computeNextEntry(reducer, action, previousState, previousError, errorHandler);
    nextComputedStates.push(entry);
  }
  if (isPaused) {
    nextComputedStates.push(computedStates[computedStates.length - 1]);
  }
  return nextComputedStates;
}
function liftInitialState(initialCommittedState, monitorReducer) {
  return {
    monitorState: monitorReducer(void 0, {}),
    nextActionId: 1,
    actionsById: {
      0: liftAction(INIT_ACTION)
    },
    stagedActionIds: [0],
    skippedActionIds: [],
    committedState: initialCommittedState,
    currentStateIndex: 0,
    computedStates: [],
    isLocked: false,
    isPaused: false
  };
}
function liftReducerWith(initialCommittedState, initialLiftedState, errorHandler, monitorReducer, options = {}) {
  return (reducer) => (liftedState, liftedAction) => {
    let {
      monitorState,
      actionsById,
      nextActionId,
      stagedActionIds,
      skippedActionIds,
      committedState,
      currentStateIndex,
      computedStates,
      isLocked,
      isPaused
    } = liftedState || initialLiftedState;
    if (!liftedState) {
      actionsById = Object.create(actionsById);
    }
    function commitExcessActions(n) {
      let excess = n;
      let idsToDelete = stagedActionIds.slice(1, excess + 1);
      for (let i = 0; i < idsToDelete.length; i++) {
        if (computedStates[i + 1].error) {
          excess = i;
          idsToDelete = stagedActionIds.slice(1, excess + 1);
          break;
        } else {
          delete actionsById[idsToDelete[i]];
        }
      }
      skippedActionIds = skippedActionIds.filter((id) => idsToDelete.indexOf(id) === -1);
      stagedActionIds = [0, ...stagedActionIds.slice(excess + 1)];
      committedState = computedStates[excess].state;
      computedStates = computedStates.slice(excess);
      currentStateIndex = currentStateIndex > excess ? currentStateIndex - excess : 0;
    }
    function commitChanges() {
      actionsById = {
        0: liftAction(INIT_ACTION)
      };
      nextActionId = 1;
      stagedActionIds = [0];
      skippedActionIds = [];
      committedState = computedStates[currentStateIndex].state;
      currentStateIndex = 0;
      computedStates = [];
    }
    let minInvalidatedStateIndex = 0;
    switch (liftedAction.type) {
      case LOCK_CHANGES: {
        isLocked = liftedAction.status;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case PAUSE_RECORDING: {
        isPaused = liftedAction.status;
        if (isPaused) {
          stagedActionIds = [...stagedActionIds, nextActionId];
          actionsById[nextActionId] = new PerformAction({
            type: "@ngrx/devtools/pause"
          }, +Date.now());
          nextActionId++;
          minInvalidatedStateIndex = stagedActionIds.length - 1;
          computedStates = computedStates.concat(computedStates[computedStates.length - 1]);
          if (currentStateIndex === stagedActionIds.length - 2) {
            currentStateIndex++;
          }
          minInvalidatedStateIndex = Infinity;
        } else {
          commitChanges();
        }
        break;
      }
      case RESET: {
        actionsById = {
          0: liftAction(INIT_ACTION)
        };
        nextActionId = 1;
        stagedActionIds = [0];
        skippedActionIds = [];
        committedState = initialCommittedState;
        currentStateIndex = 0;
        computedStates = [];
        break;
      }
      case COMMIT: {
        commitChanges();
        break;
      }
      case ROLLBACK: {
        actionsById = {
          0: liftAction(INIT_ACTION)
        };
        nextActionId = 1;
        stagedActionIds = [0];
        skippedActionIds = [];
        currentStateIndex = 0;
        computedStates = [];
        break;
      }
      case TOGGLE_ACTION: {
        const {
          id: actionId
        } = liftedAction;
        const index = skippedActionIds.indexOf(actionId);
        if (index === -1) {
          skippedActionIds = [actionId, ...skippedActionIds];
        } else {
          skippedActionIds = skippedActionIds.filter((id) => id !== actionId);
        }
        minInvalidatedStateIndex = stagedActionIds.indexOf(actionId);
        break;
      }
      case SET_ACTIONS_ACTIVE: {
        const {
          start,
          end,
          active
        } = liftedAction;
        const actionIds = [];
        for (let i = start; i < end; i++) actionIds.push(i);
        if (active) {
          skippedActionIds = difference(skippedActionIds, actionIds);
        } else {
          skippedActionIds = [...skippedActionIds, ...actionIds];
        }
        minInvalidatedStateIndex = stagedActionIds.indexOf(start);
        break;
      }
      case JUMP_TO_STATE: {
        currentStateIndex = liftedAction.index;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case JUMP_TO_ACTION: {
        const index = stagedActionIds.indexOf(liftedAction.actionId);
        if (index !== -1) currentStateIndex = index;
        minInvalidatedStateIndex = Infinity;
        break;
      }
      case SWEEP: {
        stagedActionIds = difference(stagedActionIds, skippedActionIds);
        skippedActionIds = [];
        currentStateIndex = Math.min(currentStateIndex, stagedActionIds.length - 1);
        break;
      }
      case PERFORM_ACTION: {
        if (isLocked) {
          return liftedState || initialLiftedState;
        }
        if (isPaused || liftedState && isActionFiltered(liftedState.computedStates[currentStateIndex], liftedAction, options.predicate, options.actionsSafelist, options.actionsBlocklist)) {
          const lastState = computedStates[computedStates.length - 1];
          computedStates = [...computedStates.slice(0, -1), computeNextEntry(reducer, liftedAction.action, lastState.state, lastState.error, errorHandler)];
          minInvalidatedStateIndex = Infinity;
          break;
        }
        if (options.maxAge && stagedActionIds.length === options.maxAge) {
          commitExcessActions(1);
        }
        if (currentStateIndex === stagedActionIds.length - 1) {
          currentStateIndex++;
        }
        const actionId = nextActionId++;
        actionsById[actionId] = liftedAction;
        stagedActionIds = [...stagedActionIds, actionId];
        minInvalidatedStateIndex = stagedActionIds.length - 1;
        break;
      }
      case IMPORT_STATE: {
        ({
          monitorState,
          actionsById,
          nextActionId,
          stagedActionIds,
          skippedActionIds,
          committedState,
          currentStateIndex,
          computedStates,
          isLocked,
          isPaused
        } = liftedAction.nextLiftedState);
        break;
      }
      case INIT: {
        minInvalidatedStateIndex = 0;
        if (options.maxAge && stagedActionIds.length > options.maxAge) {
          computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
          commitExcessActions(stagedActionIds.length - options.maxAge);
          minInvalidatedStateIndex = Infinity;
        }
        break;
      }
      case UPDATE: {
        const stateHasErrors = computedStates.filter((state) => state.error).length > 0;
        if (stateHasErrors) {
          minInvalidatedStateIndex = 0;
          if (options.maxAge && stagedActionIds.length > options.maxAge) {
            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
            commitExcessActions(stagedActionIds.length - options.maxAge);
            minInvalidatedStateIndex = Infinity;
          }
        } else {
          if (!isPaused && !isLocked) {
            if (currentStateIndex === stagedActionIds.length - 1) {
              currentStateIndex++;
            }
            const actionId = nextActionId++;
            actionsById[actionId] = new PerformAction(liftedAction, +Date.now());
            stagedActionIds = [...stagedActionIds, actionId];
            minInvalidatedStateIndex = stagedActionIds.length - 1;
            computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
          }
          computedStates = computedStates.map((cmp) => __spreadProps(__spreadValues({}, cmp), {
            state: reducer(cmp.state, RECOMPUTE_ACTION)
          }));
          currentStateIndex = stagedActionIds.length - 1;
          if (options.maxAge && stagedActionIds.length > options.maxAge) {
            commitExcessActions(stagedActionIds.length - options.maxAge);
          }
          minInvalidatedStateIndex = Infinity;
        }
        break;
      }
      default: {
        minInvalidatedStateIndex = Infinity;
        break;
      }
    }
    computedStates = recomputeStates(computedStates, minInvalidatedStateIndex, reducer, committedState, actionsById, stagedActionIds, skippedActionIds, errorHandler, isPaused);
    monitorState = monitorReducer(monitorState, liftedAction);
    return {
      monitorState,
      actionsById,
      nextActionId,
      stagedActionIds,
      skippedActionIds,
      committedState,
      currentStateIndex,
      computedStates,
      isLocked,
      isPaused
    };
  };
}
var StoreDevtools = class _StoreDevtools {
  constructor(dispatcher, actions$, reducers$, extension, scannedActions, errorHandler, initialState, config) {
    const liftedInitialState = liftInitialState(initialState, config.monitor);
    const liftReducer = liftReducerWith(initialState, liftedInitialState, errorHandler, config.monitor, config);
    const liftedAction$ = merge(merge(actions$.asObservable().pipe(skip(1)), extension.actions$).pipe(map(liftAction)), dispatcher, extension.liftedActions$).pipe(observeOn(queueScheduler));
    const liftedReducer$ = reducers$.pipe(map(liftReducer));
    const zoneConfig = injectZoneConfig(config.connectInZone);
    const liftedStateSubject = new ReplaySubject(1);
    this.liftedStateSubscription = liftedAction$.pipe(
      withLatestFrom(liftedReducer$),
      // The extension would post messages back outside of the Angular zone
      // because we call `connect()` wrapped with `runOutsideAngular`. We run change
      // detection only once at the end after all the required asynchronous tasks have
      // been processed (for instance, `setInterval` scheduled by the `timeout` operator).
      // We have to re-enter the Angular zone before the `scan` since it runs the reducer
      // which must be run within the Angular zone.
      emitInZone(zoneConfig),
      scan(({
        state: liftedState
      }, [action, reducer]) => {
        let reducedLiftedState = reducer(liftedState, action);
        if (action.type !== PERFORM_ACTION && shouldFilterActions(config)) {
          reducedLiftedState = filterLiftedState(reducedLiftedState, config.predicate, config.actionsSafelist, config.actionsBlocklist);
        }
        extension.notify(action, reducedLiftedState);
        return {
          state: reducedLiftedState,
          action
        };
      }, {
        state: liftedInitialState,
        action: null
      })
    ).subscribe(({
      state,
      action
    }) => {
      liftedStateSubject.next(state);
      if (action.type === PERFORM_ACTION) {
        const unliftedAction = action.action;
        scannedActions.next(unliftedAction);
      }
    });
    this.extensionStartSubscription = extension.start$.pipe(emitInZone(zoneConfig)).subscribe(() => {
      this.refresh();
    });
    const liftedState$ = liftedStateSubject.asObservable();
    const state$ = liftedState$.pipe(map(unliftState));
    Object.defineProperty(state$, "state", {
      value: toSignal(state$, {
        manualCleanup: true,
        requireSync: true
      })
    });
    this.dispatcher = dispatcher;
    this.liftedState = liftedState$;
    this.state = state$;
  }
  ngOnDestroy() {
    this.liftedStateSubscription.unsubscribe();
    this.extensionStartSubscription.unsubscribe();
  }
  dispatch(action) {
    this.dispatcher.next(action);
  }
  next(action) {
    this.dispatcher.next(action);
  }
  error(error) {
  }
  complete() {
  }
  performAction(action) {
    this.dispatch(new PerformAction(action, +Date.now()));
  }
  refresh() {
    this.dispatch(new Refresh());
  }
  reset() {
    this.dispatch(new Reset(+Date.now()));
  }
  rollback() {
    this.dispatch(new Rollback(+Date.now()));
  }
  commit() {
    this.dispatch(new Commit(+Date.now()));
  }
  sweep() {
    this.dispatch(new Sweep());
  }
  toggleAction(id) {
    this.dispatch(new ToggleAction(id));
  }
  jumpToAction(actionId) {
    this.dispatch(new JumpToAction(actionId));
  }
  jumpToState(index) {
    this.dispatch(new JumpToState(index));
  }
  importState(nextLiftedState) {
    this.dispatch(new ImportState(nextLiftedState));
  }
  lockChanges(status) {
    this.dispatch(new LockChanges(status));
  }
  pauseRecording(status) {
    this.dispatch(new PauseRecording(status));
  }
  static {
    this.ɵfac = function StoreDevtools_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreDevtools)(ɵɵinject(DevtoolsDispatcher), ɵɵinject(ActionsSubject), ɵɵinject(ReducerObservable), ɵɵinject(DevtoolsExtension), ɵɵinject(ScannedActionsSubject), ɵɵinject(ErrorHandler), ɵɵinject(INITIAL_STATE), ɵɵinject(STORE_DEVTOOLS_CONFIG));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _StoreDevtools,
      factory: _StoreDevtools.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreDevtools, [{
    type: Injectable
  }], () => [{
    type: DevtoolsDispatcher
  }, {
    type: ActionsSubject
  }, {
    type: ReducerObservable
  }, {
    type: DevtoolsExtension
  }, {
    type: ScannedActionsSubject
  }, {
    type: ErrorHandler
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [INITIAL_STATE]
    }]
  }, {
    type: StoreDevtoolsConfig,
    decorators: [{
      type: Inject,
      args: [STORE_DEVTOOLS_CONFIG]
    }]
  }], null);
})();
function emitInZone({
  ngZone,
  connectInZone
}) {
  return (source) => connectInZone ? new Observable((subscriber) => source.subscribe({
    next: (value) => ngZone.run(() => subscriber.next(value)),
    error: (error) => ngZone.run(() => subscriber.error(error)),
    complete: () => ngZone.run(() => subscriber.complete())
  })) : source;
}
var IS_EXTENSION_OR_MONITOR_PRESENT = new InjectionToken("@ngrx/store-devtools Is Devtools Extension or Monitor Present");
function createIsExtensionOrMonitorPresent(extension, config) {
  return Boolean(extension) || config.monitor !== noMonitor;
}
function createReduxDevtoolsExtension() {
  const extensionKey = "__REDUX_DEVTOOLS_EXTENSION__";
  if (typeof window === "object" && typeof window[extensionKey] !== "undefined") {
    return window[extensionKey];
  } else {
    return null;
  }
}
function createStateObservable(devtools) {
  return devtools.state;
}
function provideStoreDevtools(options = {}) {
  return makeEnvironmentProviders([DevtoolsExtension, DevtoolsDispatcher, StoreDevtools, {
    provide: INITIAL_OPTIONS,
    useValue: options
  }, {
    provide: IS_EXTENSION_OR_MONITOR_PRESENT,
    deps: [REDUX_DEVTOOLS_EXTENSION, STORE_DEVTOOLS_CONFIG],
    useFactory: createIsExtensionOrMonitorPresent
  }, {
    provide: REDUX_DEVTOOLS_EXTENSION,
    useFactory: createReduxDevtoolsExtension
  }, {
    provide: STORE_DEVTOOLS_CONFIG,
    deps: [INITIAL_OPTIONS],
    useFactory: createConfig
  }, {
    provide: StateObservable,
    deps: [StoreDevtools],
    useFactory: createStateObservable
  }, {
    provide: ReducerManagerDispatcher,
    useExisting: DevtoolsDispatcher
  }]);
}
var StoreDevtoolsModule = class _StoreDevtoolsModule {
  static instrument(options = {}) {
    return {
      ngModule: _StoreDevtoolsModule,
      providers: [provideStoreDevtools(options)]
    };
  }
  static {
    this.ɵfac = function StoreDevtoolsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreDevtoolsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _StoreDevtoolsModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreDevtoolsModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
export {
  INITIAL_OPTIONS,
  RECOMPUTE,
  REDUX_DEVTOOLS_EXTENSION,
  StoreDevtools,
  StoreDevtoolsConfig,
  StoreDevtoolsModule,
  provideStoreDevtools
};
//# sourceMappingURL=@ngrx_store-devtools.js.map
