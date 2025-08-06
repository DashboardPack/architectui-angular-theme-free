import {
  toSignal
} from "./chunk-Y6UTS3Y5.js";
import {
  BehaviorSubject,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Subject,
  computed,
  distinctUntilChanged,
  effect,
  inject,
  isDevMode,
  makeEnvironmentProviders,
  map,
  observeOn,
  pluck,
  provideEnvironmentInitializer,
  queueScheduler,
  scan,
  setClassMetadata,
  untracked,
  withLatestFrom,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵinject
} from "./chunk-7P6CNZTP.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/@ngrx/store/fesm2022/ngrx-store.mjs
var REGISTERED_ACTION_TYPES = {};
function createAction(type, config) {
  REGISTERED_ACTION_TYPES[type] = (REGISTERED_ACTION_TYPES[type] || 0) + 1;
  if (typeof config === "function") {
    return defineType(type, (...args) => __spreadProps(__spreadValues({}, config(...args)), {
      type
    }));
  }
  const as = config ? config._as : "empty";
  switch (as) {
    case "empty":
      return defineType(type, () => ({
        type
      }));
    case "props":
      return defineType(type, (props2) => __spreadProps(__spreadValues({}, props2), {
        type
      }));
    default:
      throw new Error("Unexpected config.");
  }
}
function props() {
  return {
    _as: "props",
    _p: void 0
  };
}
function union(creators) {
  return void 0;
}
function defineType(type, creator) {
  return Object.defineProperty(creator, "type", {
    value: type,
    writable: false
  });
}
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.substring(1);
}
function uncapitalize(text) {
  return text.charAt(0).toLowerCase() + text.substring(1);
}
function assertDefined(value, name) {
  if (value === null || value === void 0) {
    throw new Error(`${name} must be defined.`);
  }
}
function createActionGroup(config) {
  const {
    source,
    events
  } = config;
  return Object.keys(events).reduce((actionGroup, eventName) => __spreadProps(__spreadValues({}, actionGroup), {
    [toActionName(eventName)]: createAction(toActionType(source, eventName), events[eventName])
  }), {});
}
function emptyProps() {
  return props();
}
function toActionName(eventName) {
  return eventName.trim().split(" ").map((word, i) => i === 0 ? uncapitalize(word) : capitalize(word)).join("");
}
function toActionType(source, eventName) {
  return `[${source}] ${eventName}`;
}
var INIT = "@ngrx/store/init";
var ActionsSubject = class _ActionsSubject extends BehaviorSubject {
  constructor() {
    super({
      type: INIT
    });
  }
  next(action) {
    if (typeof action === "function") {
      throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);
    } else if (typeof action === "undefined") {
      throw new TypeError(`Actions must be objects`);
    } else if (typeof action.type === "undefined") {
      throw new TypeError(`Actions must have a type property`);
    }
    super.next(action);
  }
  complete() {
  }
  ngOnDestroy() {
    super.complete();
  }
  static {
    this.ɵfac = function ActionsSubject_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActionsSubject)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ActionsSubject,
      factory: _ActionsSubject.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionsSubject, [{
    type: Injectable
  }], () => [], null);
})();
var ACTIONS_SUBJECT_PROVIDERS = [ActionsSubject];
var _ROOT_STORE_GUARD = new InjectionToken("@ngrx/store Internal Root Guard");
var _INITIAL_STATE = new InjectionToken("@ngrx/store Internal Initial State");
var INITIAL_STATE = new InjectionToken("@ngrx/store Initial State");
var REDUCER_FACTORY = new InjectionToken("@ngrx/store Reducer Factory");
var _REDUCER_FACTORY = new InjectionToken("@ngrx/store Internal Reducer Factory Provider");
var INITIAL_REDUCERS = new InjectionToken("@ngrx/store Initial Reducers");
var _INITIAL_REDUCERS = new InjectionToken("@ngrx/store Internal Initial Reducers");
var STORE_FEATURES = new InjectionToken("@ngrx/store Store Features");
var _STORE_REDUCERS = new InjectionToken("@ngrx/store Internal Store Reducers");
var _FEATURE_REDUCERS = new InjectionToken("@ngrx/store Internal Feature Reducers");
var _FEATURE_CONFIGS = new InjectionToken("@ngrx/store Internal Feature Configs");
var _STORE_FEATURES = new InjectionToken("@ngrx/store Internal Store Features");
var _FEATURE_REDUCERS_TOKEN = new InjectionToken("@ngrx/store Internal Feature Reducers Token");
var FEATURE_REDUCERS = new InjectionToken("@ngrx/store Feature Reducers");
var USER_PROVIDED_META_REDUCERS = new InjectionToken("@ngrx/store User Provided Meta Reducers");
var META_REDUCERS = new InjectionToken("@ngrx/store Meta Reducers");
var _RESOLVED_META_REDUCERS = new InjectionToken("@ngrx/store Internal Resolved Meta Reducers");
var USER_RUNTIME_CHECKS = new InjectionToken("@ngrx/store User Runtime Checks Config");
var _USER_RUNTIME_CHECKS = new InjectionToken("@ngrx/store Internal User Runtime Checks Config");
var ACTIVE_RUNTIME_CHECKS = new InjectionToken("@ngrx/store Internal Runtime Checks");
var _ACTION_TYPE_UNIQUENESS_CHECK = new InjectionToken("@ngrx/store Check if Action types are unique");
var ROOT_STORE_PROVIDER = new InjectionToken("@ngrx/store Root Store Provider");
var FEATURE_STATE_PROVIDER = new InjectionToken("@ngrx/store Feature State Provider");
function combineReducers(reducers, initialState = {}) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers = {};
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducerKeys = Object.keys(finalReducers);
  return function combination(state, action) {
    state = state === void 0 ? initialState : state;
    let hasChanged = false;
    const nextState = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
function omit(object, keyToRemove) {
  return Object.keys(object).filter((key) => key !== keyToRemove).reduce((result, key) => Object.assign(result, {
    [key]: object[key]
  }), {});
}
function compose(...functions) {
  return function(arg) {
    if (functions.length === 0) {
      return arg;
    }
    const last = functions[functions.length - 1];
    const rest = functions.slice(0, -1);
    return rest.reduceRight((composed, fn) => fn(composed), last(arg));
  };
}
function createReducerFactory(reducerFactory, metaReducers) {
  if (Array.isArray(metaReducers) && metaReducers.length > 0) {
    reducerFactory = compose.apply(null, [...metaReducers, reducerFactory]);
  }
  return (reducers, initialState) => {
    const reducer = reducerFactory(reducers);
    return (state, action) => {
      state = state === void 0 ? initialState : state;
      return reducer(state, action);
    };
  };
}
function createFeatureReducerFactory(metaReducers) {
  const reducerFactory = Array.isArray(metaReducers) && metaReducers.length > 0 ? compose(...metaReducers) : (r) => r;
  return (reducer, initialState) => {
    reducer = reducerFactory(reducer);
    return (state, action) => {
      state = state === void 0 ? initialState : state;
      return reducer(state, action);
    };
  };
}
var ReducerObservable = class extends Observable {
};
var ReducerManagerDispatcher = class extends ActionsSubject {
};
var UPDATE = "@ngrx/store/update-reducers";
var ReducerManager = class _ReducerManager extends BehaviorSubject {
  get currentReducers() {
    return this.reducers;
  }
  constructor(dispatcher, initialState, reducers, reducerFactory) {
    super(reducerFactory(reducers, initialState));
    this.dispatcher = dispatcher;
    this.initialState = initialState;
    this.reducers = reducers;
    this.reducerFactory = reducerFactory;
  }
  addFeature(feature) {
    this.addFeatures([feature]);
  }
  addFeatures(features) {
    const reducers = features.reduce((reducerDict, {
      reducers: reducers2,
      reducerFactory,
      metaReducers,
      initialState,
      key
    }) => {
      const reducer = typeof reducers2 === "function" ? createFeatureReducerFactory(metaReducers)(reducers2, initialState) : createReducerFactory(reducerFactory, metaReducers)(reducers2, initialState);
      reducerDict[key] = reducer;
      return reducerDict;
    }, {});
    this.addReducers(reducers);
  }
  removeFeature(feature) {
    this.removeFeatures([feature]);
  }
  removeFeatures(features) {
    this.removeReducers(features.map((p) => p.key));
  }
  addReducer(key, reducer) {
    this.addReducers({
      [key]: reducer
    });
  }
  addReducers(reducers) {
    this.reducers = __spreadValues(__spreadValues({}, this.reducers), reducers);
    this.updateReducers(Object.keys(reducers));
  }
  removeReducer(featureKey) {
    this.removeReducers([featureKey]);
  }
  removeReducers(featureKeys) {
    featureKeys.forEach((key) => {
      this.reducers = omit(this.reducers, key);
    });
    this.updateReducers(featureKeys);
  }
  updateReducers(featureKeys) {
    this.next(this.reducerFactory(this.reducers, this.initialState));
    this.dispatcher.next({
      type: UPDATE,
      features: featureKeys
    });
  }
  ngOnDestroy() {
    this.complete();
  }
  static {
    this.ɵfac = function ReducerManager_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReducerManager)(ɵɵinject(ReducerManagerDispatcher), ɵɵinject(INITIAL_STATE), ɵɵinject(INITIAL_REDUCERS), ɵɵinject(REDUCER_FACTORY));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ReducerManager,
      factory: _ReducerManager.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReducerManager, [{
    type: Injectable
  }], () => [{
    type: ReducerManagerDispatcher
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [INITIAL_STATE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [INITIAL_REDUCERS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [REDUCER_FACTORY]
    }]
  }], null);
})();
var REDUCER_MANAGER_PROVIDERS = [ReducerManager, {
  provide: ReducerObservable,
  useExisting: ReducerManager
}, {
  provide: ReducerManagerDispatcher,
  useExisting: ActionsSubject
}];
var ScannedActionsSubject = class _ScannedActionsSubject extends Subject {
  ngOnDestroy() {
    this.complete();
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵScannedActionsSubject_BaseFactory;
      return function ScannedActionsSubject_Factory(__ngFactoryType__) {
        return (ɵScannedActionsSubject_BaseFactory || (ɵScannedActionsSubject_BaseFactory = ɵɵgetInheritedFactory(_ScannedActionsSubject)))(__ngFactoryType__ || _ScannedActionsSubject);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ScannedActionsSubject,
      factory: _ScannedActionsSubject.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScannedActionsSubject, [{
    type: Injectable
  }], null, null);
})();
var SCANNED_ACTIONS_SUBJECT_PROVIDERS = [ScannedActionsSubject];
var StateObservable = class extends Observable {
};
var State = class _State extends BehaviorSubject {
  static {
    this.INIT = INIT;
  }
  constructor(actions$, reducer$, scannedActions, initialState) {
    super(initialState);
    const actionsOnQueue$ = actions$.pipe(observeOn(queueScheduler));
    const withLatestReducer$ = actionsOnQueue$.pipe(withLatestFrom(reducer$));
    const seed = {
      state: initialState
    };
    const stateAndAction$ = withLatestReducer$.pipe(scan(reduceState, seed));
    this.stateSubscription = stateAndAction$.subscribe(({
      state,
      action
    }) => {
      this.next(state);
      scannedActions.next(action);
    });
    this.state = toSignal(this, {
      manualCleanup: true,
      requireSync: true
    });
  }
  ngOnDestroy() {
    this.stateSubscription.unsubscribe();
    this.complete();
  }
  static {
    this.ɵfac = function State_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _State)(ɵɵinject(ActionsSubject), ɵɵinject(ReducerObservable), ɵɵinject(ScannedActionsSubject), ɵɵinject(INITIAL_STATE));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _State,
      factory: _State.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(State, [{
    type: Injectable
  }], () => [{
    type: ActionsSubject
  }, {
    type: ReducerObservable
  }, {
    type: ScannedActionsSubject
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [INITIAL_STATE]
    }]
  }], null);
})();
function reduceState(stateActionPair = {
  state: void 0
}, [action, reducer]) {
  const {
    state
  } = stateActionPair;
  return {
    state: reducer(state, action),
    action
  };
}
var STATE_PROVIDERS = [State, {
  provide: StateObservable,
  useExisting: State
}];
var Store = class _Store extends Observable {
  constructor(state$, actionsObserver, reducerManager, injector) {
    super();
    this.actionsObserver = actionsObserver;
    this.reducerManager = reducerManager;
    this.injector = injector;
    this.source = state$;
    this.state = state$.state;
  }
  /**
   * @deprecated Selectors with props are deprecated, for more info see {@link https://github.com/ngrx/platform/issues/2980 Github Issue}
   */
  select(pathOrMapFn, ...paths) {
    return select.call(null, pathOrMapFn, ...paths)(this);
  }
  /**
   * Returns a signal of the provided selector.
   *
   * @param selector selector function
   * @param options select signal options
   * @returns Signal of the state selected by the provided selector
   * @usageNotes
   *
   * ```ts
   * const count = this.store.selectSignal(state => state.count);
   * ```
   *
   * Or with a selector created by @ngrx/store!createSelector:function
   *
   * ```ts
   * const selectCount = createSelector(
   *  (state: State) => state.count,
   * );
   *
   * const count = this.store.selectSignal(selectCount);
   * ```
   */
  selectSignal(selector, options) {
    return computed(() => selector(this.state()), options);
  }
  lift(operator) {
    const store = new _Store(this, this.actionsObserver, this.reducerManager);
    store.operator = operator;
    return store;
  }
  dispatch(actionOrDispatchFn, config) {
    if (typeof actionOrDispatchFn === "function") {
      return this.processDispatchFn(actionOrDispatchFn, config);
    }
    this.actionsObserver.next(actionOrDispatchFn);
  }
  next(action) {
    this.actionsObserver.next(action);
  }
  error(err) {
    this.actionsObserver.error(err);
  }
  complete() {
    this.actionsObserver.complete();
  }
  addReducer(key, reducer) {
    this.reducerManager.addReducer(key, reducer);
  }
  removeReducer(key) {
    this.reducerManager.removeReducer(key);
  }
  processDispatchFn(dispatchFn, config) {
    assertDefined(this.injector, "Store Injector");
    const effectInjector = config?.injector ?? getCallerInjector() ?? this.injector;
    return effect(() => {
      const action = dispatchFn();
      untracked(() => this.dispatch(action));
    }, {
      injector: effectInjector
    });
  }
  static {
    this.ɵfac = function Store_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Store)(ɵɵinject(StateObservable), ɵɵinject(ActionsSubject), ɵɵinject(ReducerManager), ɵɵinject(Injector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _Store,
      factory: _Store.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Store, [{
    type: Injectable
  }], () => [{
    type: StateObservable
  }, {
    type: ActionsSubject
  }, {
    type: ReducerManager
  }, {
    type: Injector
  }], null);
})();
var STORE_PROVIDERS = [Store];
function select(pathOrMapFn, propsOrPath, ...paths) {
  return function selectOperator(source$) {
    let mapped$;
    if (typeof pathOrMapFn === "string") {
      const pathSlices = [propsOrPath, ...paths].filter(Boolean);
      mapped$ = source$.pipe(pluck(pathOrMapFn, ...pathSlices));
    } else if (typeof pathOrMapFn === "function") {
      mapped$ = source$.pipe(map((source) => pathOrMapFn(source, propsOrPath)));
    } else {
      throw new TypeError(`Unexpected type '${typeof pathOrMapFn}' in select operator, expected 'string' or 'function'`);
    }
    return mapped$.pipe(distinctUntilChanged());
  };
}
function getCallerInjector() {
  try {
    return inject(Injector);
  } catch (_) {
    return void 0;
  }
}
var RUNTIME_CHECK_URL = "https://ngrx.io/guide/store/configuration/runtime-checks";
function isUndefined(target) {
  return target === void 0;
}
function isNull(target) {
  return target === null;
}
function isArray(target) {
  return Array.isArray(target);
}
function isString(target) {
  return typeof target === "string";
}
function isBoolean(target) {
  return typeof target === "boolean";
}
function isNumber(target) {
  return typeof target === "number";
}
function isObjectLike(target) {
  return typeof target === "object" && target !== null;
}
function isObject(target) {
  return isObjectLike(target) && !isArray(target);
}
function isPlainObject(target) {
  if (!isObject(target)) {
    return false;
  }
  const targetPrototype = Object.getPrototypeOf(target);
  return targetPrototype === Object.prototype || targetPrototype === null;
}
function isFunction(target) {
  return typeof target === "function";
}
function isComponent(target) {
  return isFunction(target) && target.hasOwnProperty("ɵcmp");
}
function hasOwnProperty(target, propertyName) {
  return Object.prototype.hasOwnProperty.call(target, propertyName);
}
var _ngrxMockEnvironment = false;
function setNgrxMockEnvironment(value) {
  _ngrxMockEnvironment = value;
}
function isNgrxMockEnvironment() {
  return _ngrxMockEnvironment;
}
function isEqualCheck(a, b) {
  return a === b;
}
function isArgumentsChanged(args, lastArguments, comparator) {
  for (let i = 0; i < args.length; i++) {
    if (!comparator(args[i], lastArguments[i])) {
      return true;
    }
  }
  return false;
}
function resultMemoize(projectionFn, isResultEqual) {
  return defaultMemoize(projectionFn, isEqualCheck, isResultEqual);
}
function defaultMemoize(projectionFn, isArgumentsEqual = isEqualCheck, isResultEqual = isEqualCheck) {
  let lastArguments = null;
  let lastResult = null;
  let overrideResult;
  function reset() {
    lastArguments = null;
    lastResult = null;
  }
  function setResult(result = void 0) {
    overrideResult = {
      result
    };
  }
  function clearResult() {
    overrideResult = void 0;
  }
  function memoized() {
    if (overrideResult !== void 0) {
      return overrideResult.result;
    }
    if (!lastArguments) {
      lastResult = projectionFn.apply(null, arguments);
      lastArguments = arguments;
      return lastResult;
    }
    if (!isArgumentsChanged(arguments, lastArguments, isArgumentsEqual)) {
      return lastResult;
    }
    const newResult = projectionFn.apply(null, arguments);
    lastArguments = arguments;
    if (isResultEqual(lastResult, newResult)) {
      return lastResult;
    }
    lastResult = newResult;
    return newResult;
  }
  return {
    memoized,
    reset,
    setResult,
    clearResult
  };
}
function createSelector(...input) {
  return createSelectorFactory(defaultMemoize)(...input);
}
function defaultStateFn(state, selectors, props2, memoizedProjector) {
  if (props2 === void 0) {
    const args2 = selectors.map((fn) => fn(state));
    return memoizedProjector.memoized.apply(null, args2);
  }
  const args = selectors.map((fn) => fn(state, props2));
  return memoizedProjector.memoized.apply(null, [...args, props2]);
}
function createSelectorFactory(memoize, options = {
  stateFn: defaultStateFn
}) {
  return function(...input) {
    let args = input;
    if (Array.isArray(args[0])) {
      const [head, ...tail] = args;
      args = [...head, ...tail];
    } else if (args.length === 1 && isSelectorsDictionary(args[0])) {
      args = extractArgsFromSelectorsDictionary(args[0]);
    }
    const selectors = args.slice(0, args.length - 1);
    const projector = args[args.length - 1];
    const memoizedSelectors = selectors.filter((selector) => selector.release && typeof selector.release === "function");
    const memoizedProjector = memoize(function(...selectors2) {
      return projector.apply(null, selectors2);
    });
    const memoizedState = defaultMemoize(function(state, props2) {
      return options.stateFn.apply(null, [state, selectors, props2, memoizedProjector]);
    });
    function release() {
      memoizedState.reset();
      memoizedProjector.reset();
      memoizedSelectors.forEach((selector) => selector.release());
    }
    return Object.assign(memoizedState.memoized, {
      release,
      projector: memoizedProjector.memoized,
      setResult: memoizedState.setResult,
      clearResult: memoizedState.clearResult
    });
  };
}
function createFeatureSelector(featureName) {
  return createSelector((state) => {
    const featureState = state[featureName];
    if (!isNgrxMockEnvironment() && isDevMode() && !(featureName in state)) {
      console.warn(`@ngrx/store: The feature name "${featureName}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${featureName}', ...) or StoreModule.forFeature('${featureName}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`);
    }
    return featureState;
  }, (featureState) => featureState);
}
function isSelectorsDictionary(selectors) {
  return !!selectors && typeof selectors === "object" && Object.values(selectors).every((selector) => typeof selector === "function");
}
function extractArgsFromSelectorsDictionary(selectorsDictionary) {
  const selectors = Object.values(selectorsDictionary);
  const resultKeys = Object.keys(selectorsDictionary);
  const projector = (...selectorResults) => resultKeys.reduce((result, key, index) => __spreadProps(__spreadValues({}, result), {
    [key]: selectorResults[index]
  }), {});
  return [...selectors, projector];
}
function createFeature(featureConfig) {
  const {
    name,
    reducer,
    extraSelectors: extraSelectorsFactory
  } = featureConfig;
  const featureSelector = createFeatureSelector(name);
  const nestedSelectors = createNestedSelectors(featureSelector, reducer);
  const baseSelectors = __spreadValues({
    [`select${capitalize(name)}State`]: featureSelector
  }, nestedSelectors);
  const extraSelectors = extraSelectorsFactory ? extraSelectorsFactory(baseSelectors) : {};
  return __spreadValues(__spreadValues({
    name,
    reducer
  }, baseSelectors), extraSelectors);
}
function createNestedSelectors(featureSelector, reducer) {
  const initialState = getInitialState(reducer);
  const nestedKeys = isPlainObject(initialState) ? Object.keys(initialState) : [];
  return nestedKeys.reduce((nestedSelectors, nestedKey) => __spreadProps(__spreadValues({}, nestedSelectors), {
    [`select${capitalize(nestedKey)}`]: createSelector(featureSelector, (parentState) => parentState?.[nestedKey])
  }), {});
}
function getInitialState(reducer) {
  return reducer(void 0, {
    type: "@ngrx/feature/init"
  });
}
function _createStoreReducers(reducers) {
  return reducers instanceof InjectionToken ? inject(reducers) : reducers;
}
function _createFeatureStore(configs, featureStores) {
  return featureStores.map((feat, index) => {
    if (configs[index] instanceof InjectionToken) {
      const conf = inject(configs[index]);
      return {
        key: feat.key,
        reducerFactory: conf.reducerFactory ? conf.reducerFactory : combineReducers,
        metaReducers: conf.metaReducers ? conf.metaReducers : [],
        initialState: conf.initialState
      };
    }
    return feat;
  });
}
function _createFeatureReducers(reducerCollection) {
  return reducerCollection.map((reducer) => {
    return reducer instanceof InjectionToken ? inject(reducer) : reducer;
  });
}
function _initialStateFactory(initialState) {
  if (typeof initialState === "function") {
    return initialState();
  }
  return initialState;
}
function _concatMetaReducers(metaReducers, userProvidedMetaReducers) {
  return metaReducers.concat(userProvidedMetaReducers);
}
function _provideForRootGuard() {
  const store = inject(Store, {
    optional: true,
    skipSelf: true
  });
  if (store) {
    throw new TypeError(`The root Store has been provided more than once. Feature modules should provide feature states instead.`);
  }
  return "guarded";
}
function immutabilityCheckMetaReducer(reducer, checks) {
  return function(state, action) {
    const act = checks.action(action) ? freeze(action) : action;
    const nextState = reducer(state, act);
    return checks.state() ? freeze(nextState) : nextState;
  };
}
function freeze(target) {
  Object.freeze(target);
  const targetIsFunction = isFunction(target);
  Object.getOwnPropertyNames(target).forEach((prop) => {
    if (prop.startsWith("ɵ")) {
      return;
    }
    if (hasOwnProperty(target, prop) && (targetIsFunction ? prop !== "caller" && prop !== "callee" && prop !== "arguments" : true)) {
      const propValue = target[prop];
      if ((isObjectLike(propValue) || isFunction(propValue)) && !Object.isFrozen(propValue)) {
        freeze(propValue);
      }
    }
  });
  return target;
}
function serializationCheckMetaReducer(reducer, checks) {
  return function(state, action) {
    if (checks.action(action)) {
      const unserializableAction = getUnserializable(action);
      throwIfUnserializable(unserializableAction, "action");
    }
    const nextState = reducer(state, action);
    if (checks.state()) {
      const unserializableState = getUnserializable(nextState);
      throwIfUnserializable(unserializableState, "state");
    }
    return nextState;
  };
}
function getUnserializable(target, path = []) {
  if ((isUndefined(target) || isNull(target)) && path.length === 0) {
    return {
      path: ["root"],
      value: target
    };
  }
  const keys = Object.keys(target);
  return keys.reduce((result, key) => {
    if (result) {
      return result;
    }
    const value = target[key];
    if (isComponent(value)) {
      return result;
    }
    if (isUndefined(value) || isNull(value) || isNumber(value) || isBoolean(value) || isString(value) || isArray(value)) {
      return false;
    }
    if (isPlainObject(value)) {
      return getUnserializable(value, [...path, key]);
    }
    return {
      path: [...path, key],
      value
    };
  }, false);
}
function throwIfUnserializable(unserializable, context) {
  if (unserializable === false) {
    return;
  }
  const unserializablePath = unserializable.path.join(".");
  const error = new Error(`Detected unserializable ${context} at "${unserializablePath}". ${RUNTIME_CHECK_URL}#strict${context}serializability`);
  error.value = unserializable.value;
  error.unserializablePath = unserializablePath;
  throw error;
}
function inNgZoneAssertMetaReducer(reducer, checks) {
  return function(state, action) {
    if (checks.action(action) && !NgZone.isInAngularZone()) {
      throw new Error(`Action '${action.type}' running outside NgZone. ${RUNTIME_CHECK_URL}#strictactionwithinngzone`);
    }
    return reducer(state, action);
  };
}
function createActiveRuntimeChecks(runtimeChecks) {
  if (isDevMode()) {
    return __spreadValues({
      strictStateSerializability: false,
      strictActionSerializability: false,
      strictStateImmutability: true,
      strictActionImmutability: true,
      strictActionWithinNgZone: false,
      strictActionTypeUniqueness: false
    }, runtimeChecks);
  }
  return {
    strictStateSerializability: false,
    strictActionSerializability: false,
    strictStateImmutability: false,
    strictActionImmutability: false,
    strictActionWithinNgZone: false,
    strictActionTypeUniqueness: false
  };
}
function createSerializationCheckMetaReducer({
  strictActionSerializability,
  strictStateSerializability
}) {
  return (reducer) => strictActionSerializability || strictStateSerializability ? serializationCheckMetaReducer(reducer, {
    action: (action) => strictActionSerializability && !ignoreNgrxAction(action),
    state: () => strictStateSerializability
  }) : reducer;
}
function createImmutabilityCheckMetaReducer({
  strictActionImmutability,
  strictStateImmutability
}) {
  return (reducer) => strictActionImmutability || strictStateImmutability ? immutabilityCheckMetaReducer(reducer, {
    action: (action) => strictActionImmutability && !ignoreNgrxAction(action),
    state: () => strictStateImmutability
  }) : reducer;
}
function ignoreNgrxAction(action) {
  return action.type.startsWith("@ngrx");
}
function createInNgZoneCheckMetaReducer({
  strictActionWithinNgZone
}) {
  return (reducer) => strictActionWithinNgZone ? inNgZoneAssertMetaReducer(reducer, {
    action: (action) => strictActionWithinNgZone && !ignoreNgrxAction(action)
  }) : reducer;
}
function provideRuntimeChecks(runtimeChecks) {
  return [{
    provide: _USER_RUNTIME_CHECKS,
    useValue: runtimeChecks
  }, {
    provide: USER_RUNTIME_CHECKS,
    useFactory: _runtimeChecksFactory,
    deps: [_USER_RUNTIME_CHECKS]
  }, {
    provide: ACTIVE_RUNTIME_CHECKS,
    deps: [USER_RUNTIME_CHECKS],
    useFactory: createActiveRuntimeChecks
  }, {
    provide: META_REDUCERS,
    multi: true,
    deps: [ACTIVE_RUNTIME_CHECKS],
    useFactory: createImmutabilityCheckMetaReducer
  }, {
    provide: META_REDUCERS,
    multi: true,
    deps: [ACTIVE_RUNTIME_CHECKS],
    useFactory: createSerializationCheckMetaReducer
  }, {
    provide: META_REDUCERS,
    multi: true,
    deps: [ACTIVE_RUNTIME_CHECKS],
    useFactory: createInNgZoneCheckMetaReducer
  }];
}
function checkForActionTypeUniqueness() {
  return [{
    provide: _ACTION_TYPE_UNIQUENESS_CHECK,
    multi: true,
    deps: [ACTIVE_RUNTIME_CHECKS],
    useFactory: _actionTypeUniquenessCheck
  }];
}
function _runtimeChecksFactory(runtimeChecks) {
  return runtimeChecks;
}
function _actionTypeUniquenessCheck(config) {
  if (!config.strictActionTypeUniqueness) {
    return;
  }
  const duplicates = Object.entries(REGISTERED_ACTION_TYPES).filter(([, registrations]) => registrations > 1).map(([type]) => type);
  if (duplicates.length) {
    throw new Error(`Action types are registered more than once, ${duplicates.map((type) => `"${type}"`).join(", ")}. ${RUNTIME_CHECK_URL}#strictactiontypeuniqueness`);
  }
}
function provideState(featureNameOrSlice, reducers, config = {}) {
  return makeEnvironmentProviders([..._provideState(featureNameOrSlice, reducers, config), ENVIRONMENT_STATE_PROVIDER]);
}
function _provideStore(reducers = {}, config = {}) {
  return [{
    provide: _ROOT_STORE_GUARD,
    useFactory: _provideForRootGuard
  }, {
    provide: _INITIAL_STATE,
    useValue: config.initialState
  }, {
    provide: INITIAL_STATE,
    useFactory: _initialStateFactory,
    deps: [_INITIAL_STATE]
  }, {
    provide: _INITIAL_REDUCERS,
    useValue: reducers
  }, {
    provide: _STORE_REDUCERS,
    useExisting: reducers instanceof InjectionToken ? reducers : _INITIAL_REDUCERS
  }, {
    provide: INITIAL_REDUCERS,
    deps: [_INITIAL_REDUCERS, [new Inject(_STORE_REDUCERS)]],
    useFactory: _createStoreReducers
  }, {
    provide: USER_PROVIDED_META_REDUCERS,
    useValue: config.metaReducers ? config.metaReducers : []
  }, {
    provide: _RESOLVED_META_REDUCERS,
    deps: [META_REDUCERS, USER_PROVIDED_META_REDUCERS],
    useFactory: _concatMetaReducers
  }, {
    provide: _REDUCER_FACTORY,
    useValue: config.reducerFactory ? config.reducerFactory : combineReducers
  }, {
    provide: REDUCER_FACTORY,
    deps: [_REDUCER_FACTORY, _RESOLVED_META_REDUCERS],
    useFactory: createReducerFactory
  }, ACTIONS_SUBJECT_PROVIDERS, REDUCER_MANAGER_PROVIDERS, SCANNED_ACTIONS_SUBJECT_PROVIDERS, STATE_PROVIDERS, STORE_PROVIDERS, provideRuntimeChecks(config.runtimeChecks), checkForActionTypeUniqueness()];
}
function rootStoreProviderFactory() {
  inject(ActionsSubject);
  inject(ReducerObservable);
  inject(ScannedActionsSubject);
  inject(Store);
  inject(_ROOT_STORE_GUARD, {
    optional: true
  });
  inject(_ACTION_TYPE_UNIQUENESS_CHECK, {
    optional: true
  });
}
var ENVIRONMENT_STORE_PROVIDER = [{
  provide: ROOT_STORE_PROVIDER,
  useFactory: rootStoreProviderFactory
}, provideEnvironmentInitializer(() => inject(ROOT_STORE_PROVIDER))];
function provideStore(reducers, config) {
  return makeEnvironmentProviders([..._provideStore(reducers, config), ENVIRONMENT_STORE_PROVIDER]);
}
function featureStateProviderFactory() {
  inject(ROOT_STORE_PROVIDER);
  const features = inject(_STORE_FEATURES);
  const featureReducers = inject(FEATURE_REDUCERS);
  const reducerManager = inject(ReducerManager);
  inject(_ACTION_TYPE_UNIQUENESS_CHECK, {
    optional: true
  });
  const feats = features.map((feature, index) => {
    const featureReducerCollection = featureReducers.shift();
    const reducers = featureReducerCollection[index];
    return __spreadProps(__spreadValues({}, feature), {
      reducers,
      initialState: _initialStateFactory(feature.initialState)
    });
  });
  reducerManager.addFeatures(feats);
}
var ENVIRONMENT_STATE_PROVIDER = [{
  provide: FEATURE_STATE_PROVIDER,
  useFactory: featureStateProviderFactory
}, provideEnvironmentInitializer(() => inject(FEATURE_STATE_PROVIDER))];
function _provideState(featureNameOrSlice, reducers, config = {}) {
  return [{
    provide: _FEATURE_CONFIGS,
    multi: true,
    useValue: featureNameOrSlice instanceof Object ? {} : config
  }, {
    provide: STORE_FEATURES,
    multi: true,
    useValue: {
      key: featureNameOrSlice instanceof Object ? featureNameOrSlice.name : featureNameOrSlice,
      reducerFactory: !(config instanceof InjectionToken) && config.reducerFactory ? config.reducerFactory : combineReducers,
      metaReducers: !(config instanceof InjectionToken) && config.metaReducers ? config.metaReducers : [],
      initialState: !(config instanceof InjectionToken) && config.initialState ? config.initialState : void 0
    }
  }, {
    provide: _STORE_FEATURES,
    deps: [_FEATURE_CONFIGS, STORE_FEATURES],
    useFactory: _createFeatureStore
  }, {
    provide: _FEATURE_REDUCERS,
    multi: true,
    useValue: featureNameOrSlice instanceof Object ? featureNameOrSlice.reducer : reducers
  }, {
    provide: _FEATURE_REDUCERS_TOKEN,
    multi: true,
    useExisting: reducers instanceof InjectionToken ? reducers : _FEATURE_REDUCERS
  }, {
    provide: FEATURE_REDUCERS,
    multi: true,
    deps: [_FEATURE_REDUCERS, [new Inject(_FEATURE_REDUCERS_TOKEN)]],
    useFactory: _createFeatureReducers
  }, checkForActionTypeUniqueness()];
}
var StoreRootModule = class _StoreRootModule {
  constructor(actions$, reducer$, scannedActions$, store, guard, actionCheck) {
  }
  static {
    this.ɵfac = function StoreRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreRootModule)(ɵɵinject(ActionsSubject), ɵɵinject(ReducerObservable), ɵɵinject(ScannedActionsSubject), ɵɵinject(Store), ɵɵinject(_ROOT_STORE_GUARD, 8), ɵɵinject(_ACTION_TYPE_UNIQUENESS_CHECK, 8));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _StoreRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreRootModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: ActionsSubject
  }, {
    type: ReducerObservable
  }, {
    type: ScannedActionsSubject
  }, {
    type: Store
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [_ROOT_STORE_GUARD]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [_ACTION_TYPE_UNIQUENESS_CHECK]
    }]
  }], null);
})();
var StoreFeatureModule = class _StoreFeatureModule {
  constructor(features, featureReducers, reducerManager, root, actionCheck) {
    this.features = features;
    this.featureReducers = featureReducers;
    this.reducerManager = reducerManager;
    const feats = features.map((feature, index) => {
      const featureReducerCollection = featureReducers.shift();
      const reducers = featureReducerCollection[index];
      return __spreadProps(__spreadValues({}, feature), {
        reducers,
        initialState: _initialStateFactory(feature.initialState)
      });
    });
    reducerManager.addFeatures(feats);
  }
  // eslint-disable-next-line @angular-eslint/contextual-lifecycle
  ngOnDestroy() {
    this.reducerManager.removeFeatures(this.features);
  }
  static {
    this.ɵfac = function StoreFeatureModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreFeatureModule)(ɵɵinject(_STORE_FEATURES), ɵɵinject(FEATURE_REDUCERS), ɵɵinject(ReducerManager), ɵɵinject(StoreRootModule), ɵɵinject(_ACTION_TYPE_UNIQUENESS_CHECK, 8));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _StoreFeatureModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreFeatureModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [_STORE_FEATURES]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [FEATURE_REDUCERS]
    }]
  }, {
    type: ReducerManager
  }, {
    type: StoreRootModule
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [_ACTION_TYPE_UNIQUENESS_CHECK]
    }]
  }], null);
})();
var StoreModule = class _StoreModule {
  static forRoot(reducers, config) {
    return {
      ngModule: StoreRootModule,
      providers: [..._provideStore(reducers, config)]
    };
  }
  static forFeature(featureNameOrSlice, reducers, config = {}) {
    return {
      ngModule: StoreFeatureModule,
      providers: [..._provideState(featureNameOrSlice, reducers, config)]
    };
  }
  static {
    this.ɵfac = function StoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _StoreModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
function on(...args) {
  const reducer = args.pop();
  const types = args.map((creator) => creator.type);
  return {
    reducer,
    types
  };
}
function createReducer(initialState, ...ons) {
  const map2 = /* @__PURE__ */ new Map();
  for (const on2 of ons) {
    for (const type of on2.types) {
      const existingReducer = map2.get(type);
      if (existingReducer) {
        const newReducer = (state, action) => on2.reducer(existingReducer(state, action), action);
        map2.set(type, newReducer);
      } else {
        map2.set(type, on2.reducer);
      }
    }
  }
  return function(state = initialState, action) {
    const reducer = map2.get(action.type);
    return reducer ? reducer(state, action) : state;
  };
}

export {
  createAction,
  props,
  union,
  createActionGroup,
  emptyProps,
  INIT,
  ActionsSubject,
  INITIAL_STATE,
  REDUCER_FACTORY,
  INITIAL_REDUCERS,
  STORE_FEATURES,
  FEATURE_REDUCERS,
  USER_PROVIDED_META_REDUCERS,
  META_REDUCERS,
  USER_RUNTIME_CHECKS,
  ACTIVE_RUNTIME_CHECKS,
  ROOT_STORE_PROVIDER,
  FEATURE_STATE_PROVIDER,
  combineReducers,
  compose,
  createReducerFactory,
  ReducerObservable,
  ReducerManagerDispatcher,
  UPDATE,
  ReducerManager,
  ScannedActionsSubject,
  StateObservable,
  State,
  reduceState,
  Store,
  select,
  setNgrxMockEnvironment,
  isNgrxMockEnvironment,
  resultMemoize,
  defaultMemoize,
  createSelector,
  defaultStateFn,
  createSelectorFactory,
  createFeatureSelector,
  createFeature,
  provideState,
  provideStore,
  StoreRootModule,
  StoreFeatureModule,
  StoreModule,
  on,
  createReducer
};
//# sourceMappingURL=chunk-VAJRSNCB.js.map
