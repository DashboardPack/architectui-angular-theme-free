import {
  AsyncPipe,
  CommonModule,
  NgIf,
  isPlatformBrowser
} from "./chunk-DLSM4I4B.js";
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Observable,
  Optional,
  PLATFORM_ID,
  Subject,
  ViewEncapsulation,
  combineLatest,
  map,
  of,
  setClassMetadata,
  shareReplay,
  startWith,
  switchMap,
  take,
  tap,
  timer,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate
} from "./chunk-7P6CNZTP.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/@ngx-loading-bar/core/fesm2022/ngx-loading-bar-core.mjs
function NgxLoadingBar_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵstyleProp("width", ctx_r0.diameter)("height", ctx_r0.diameter);
  }
}
function NgxLoadingBar_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 5);
  }
  if (rf & 2) {
    const progress_r2 = ɵɵnextContext().ngIf;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("background", ctx_r0.color)("height", ctx_r0.height)("width", progress_r2 + "%");
  }
}
function NgxLoadingBar_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NgxLoadingBar_ng_container_0_div_1_Template, 2, 4, "div", 1)(2, NgxLoadingBar_ng_container_0_div_2_Template, 1, 6, "div", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.includeSpinner);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.includeBar);
  }
}
function LoadingBarComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵstyleProp("width", ctx_r0.diameter)("height", ctx_r0.diameter);
  }
}
function LoadingBarComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 5);
  }
  if (rf & 2) {
    const progress_r2 = ɵɵnextContext().ngIf;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("background", ctx_r0.color)("height", ctx_r0.height)("width", progress_r2 + "%");
  }
}
function LoadingBarComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, LoadingBarComponent_ng_container_0_div_1_Template, 2, 4, "div", 1)(2, LoadingBarComponent_ng_container_0_div_2_Template, 1, 6, "div", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.includeSpinner);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.includeBar);
  }
}
var _c0 = "[_nghost-%COMP%]{position:relative;display:block;pointer-events:none}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{transition:.35s linear all;display:block;position:absolute;top:5px;left:0}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]   .ngx-spinner-icon[_ngcontent-%COMP%]{width:14px;height:14px;border:solid 2px transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;animation:_ngcontent-%COMP%_loading-bar-spinner .4s linear infinite}[_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{transition:width .35s;position:absolute;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl]   [_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{right:0;left:unset}[fixed=true][_nghost-%COMP%]{z-index:10002}[fixed=true][_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{position:fixed}[fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{position:fixed;top:10px;left:10px}[dir=rtl]   [fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{right:10px;left:unset}@keyframes _ngcontent-%COMP%_loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}";
var LoadingBarState = class {
  constructor(config = {}) {
    this.config = config;
    this.state = {
      action: null,
      value: 0,
      initialValue: 0
    };
    this.requests = null;
    this.disabled = false;
    this.stream$ = new Subject();
    this._value$ = null;
    this.timer$ = (s) => {
      let state$ = of(s);
      switch (s.action) {
        case "start":
        case "increment":
        case "set": {
          if (s.action === "start" && this.config.latencyThreshold === 0 && s.value === 0) {
            s.value = s.initialValue;
          }
          if (this.requests > 0) {
            state$ = timer(this.config.latencyThreshold, 250).pipe(map((t) => __spreadProps(__spreadValues({}, s), {
              value: t === 0 ? this.state.value || s.initialValue : this._increment()
            })));
          }
          break;
        }
        case "complete":
        case "stop": {
          state$ = s.value === 0 ? of(__spreadValues({}, s)) : timer(0, 500).pipe(take(2), map((t) => ({
            value: t === 0 ? 100 : 0
          })));
          break;
        }
      }
      return state$.pipe(map((next) => __spreadProps(__spreadValues({}, next), {
        action: "set"
      })), tap((next) => this.next(next, false)));
    };
    this.config = __spreadValues({
      latencyThreshold: 0
    }, config);
  }
  get value$() {
    if (this._value$) {
      return this._value$;
    }
    return this._value$ = this.stream$.pipe(startWith(this.state), switchMap((s) => this.timer$(s)), shareReplay(), map((s) => s.value));
  }
  start(initialValue = 2) {
    if (this.disabled) {
      return;
    }
    this.next({
      action: "start",
      initialValue
    });
  }
  stop() {
    this.next({
      action: "stop"
    });
  }
  complete() {
    this.next({
      action: "complete"
    });
  }
  disable() {
    this.disabled = true;
  }
  set(value) {
    this.next({
      action: "set",
      value
    });
  }
  increment(value = 0) {
    this.next({
      action: "increment",
      value
    });
  }
  next(state, emitEvent = true) {
    switch (state.action) {
      case "start":
        this.requests = (this.requests || 0) + 1;
        break;
      case "complete":
        this.requests = (this.requests || 1) - 1;
        if (this.requests > 0) {
          return;
        }
        break;
      case "stop":
        this.requests = 0;
        break;
      case "increment":
        state.value = this._increment(state.value);
        break;
    }
    this.state = __spreadValues(__spreadProps(__spreadValues({}, this.state), {
      action: null
    }), state);
    if (emitEvent) {
      this.stream$.next(this.state);
    }
  }
  _increment(rnd = 0) {
    const stat = this.state.value;
    if (stat >= 99) {
      rnd = 0;
    }
    if (rnd === 0) {
      if (stat >= 0 && stat < 25) {
        rnd = Math.random() * (5 - 3 + 1) + 3;
      } else if (stat >= 25 && stat < 65) {
        rnd = Math.random() * 3;
      } else if (stat >= 65 && stat < 90) {
        rnd = Math.random() * 2;
      } else if (stat >= 90 && stat < 99) {
        rnd = 0.5;
      } else {
        rnd = 0;
      }
    }
    return rnd + stat;
  }
};
var LOADING_BAR_CONFIG = new InjectionToken("LOADING_BAR_CONFIG");
function provideLoadingBar(config) {
  return {
    provide: LOADING_BAR_CONFIG,
    useValue: config
  };
}
var LoadingBarService = class _LoadingBarService {
  /** @deprecated use `value$` instead. */
  get progress$() {
    return this.value$;
  }
  constructor(platformId, config = {}, zone) {
    this.platformId = platformId;
    this.config = config;
    this.zone = zone;
    this.refs = {};
    this.streams$ = new Subject();
    this.value$ = this.streams$.pipe(startWith(null), switchMap(() => combineLatest(Object.keys(this.refs).map((s) => this.refs[s].value$))), runInZone(this.zone), map((v) => Math.max(0, ...v)));
  }
  /** @deprecated use `useRef` instead. */
  start(initialValue = 2) {
    this.useRef().start(initialValue);
  }
  /** @deprecated use `useRef` instead. */
  set(value) {
    this.useRef().set(value);
  }
  /** @deprecated use `useRef` instead. */
  increment(value) {
    this.useRef().increment(value);
  }
  /** @deprecated use `useRef` instead. */
  complete() {
    this.useRef().complete();
  }
  /** @deprecated use `useRef` instead. */
  stop() {
    this.useRef().stop();
  }
  useRef(id = "default") {
    if (!this.refs[id]) {
      this.refs[id] = new LoadingBarState(this.config);
      this.streams$.next();
      if (!isPlatformBrowser(this.platformId)) {
        this.refs[id].disable();
      }
    }
    return this.refs[id];
  }
  static {
    this.ɵfac = function LoadingBarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoadingBarService)(ɵɵinject(PLATFORM_ID), ɵɵinject(LOADING_BAR_CONFIG, 8), ɵɵinject(NgZone, 8));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _LoadingBarService,
      factory: _LoadingBarService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingBarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Object,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [LOADING_BAR_CONFIG]
      }]
    }, {
      type: NgZone,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
function runInZone(zone) {
  if (!zone) {
    return (source) => source;
  }
  return (source) => new Observable((observer) => source.subscribe((value) => zone.run(() => observer.next(value)), (e) => zone.run(() => observer.error(e)), () => zone.run(() => observer.complete())));
}
var NgxLoadingBar = class _NgxLoadingBar {
  get value$() {
    return this.ref ? this.loader.useRef(this.ref).value$ : this.loader.value$;
  }
  constructor(loader) {
    this.loader = loader;
    this.includeSpinner = true;
    this.includeBar = true;
    this.fixed = true;
    this.color = "#29d";
  }
  static {
    this.ɵfac = function NgxLoadingBar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxLoadingBar)(ɵɵdirectiveInject(LoadingBarService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgxLoadingBar,
      selectors: [["ngx-loading-bar"]],
      hostVars: 3,
      hostBindings: function NgxLoadingBar_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("fixed", ctx.fixed);
          ɵɵstyleProp("color", ctx.color);
        }
      },
      inputs: {
        includeSpinner: "includeSpinner",
        includeBar: "includeBar",
        fixed: "fixed",
        color: "color",
        value: "value",
        ref: "ref",
        height: "height",
        diameter: "diameter"
      },
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["class", "ngx-spinner", 4, "ngIf"], ["class", "ngx-bar", 3, "background", "height", "width", 4, "ngIf"], [1, "ngx-spinner"], [1, "ngx-spinner-icon"], [1, "ngx-bar"]],
      template: function NgxLoadingBar_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NgxLoadingBar_ng_container_0_Template, 3, 2, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.value != null ? ctx.value : ɵɵpipeBind1(1, 1, ctx.value$));
        }
      },
      dependencies: [AsyncPipe, NgIf],
      styles: ["[_nghost-%COMP%]{position:relative;display:block;pointer-events:none}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{transition:.35s linear all;display:block;position:absolute;top:5px;left:0}[_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]   .ngx-spinner-icon[_ngcontent-%COMP%]{width:14px;height:14px;border:solid 2px transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;animation:_ngcontent-%COMP%_loading-bar-spinner .4s linear infinite}[_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{transition:width .35s;position:absolute;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl]   [_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{right:0;left:unset}[fixed=true][_nghost-%COMP%]{z-index:10002}[fixed=true][_nghost-%COMP%]   .ngx-bar[_ngcontent-%COMP%]{position:fixed}[fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{position:fixed;top:10px;left:10px}[dir=rtl]   [fixed=true][_nghost-%COMP%]   .ngx-spinner[_ngcontent-%COMP%]{right:10px;left:unset}@keyframes _ngcontent-%COMP%_loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxLoadingBar, [{
    type: Component,
    args: [{
      selector: "ngx-loading-bar",
      standalone: true,
      imports: [AsyncPipe, NgIf],
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.Emulated,
      host: {
        "[attr.fixed]": "fixed",
        "[style.color]": "color"
      },
      template: `<ng-container *ngIf="value != null ? value : (value$ | async) as progress">
  <div *ngIf="includeSpinner" class="ngx-spinner">
    <div [style.width]="diameter" [style.height]="diameter" class="ngx-spinner-icon"></div>
  </div>
  <div
    *ngIf="includeBar"
    class="ngx-bar"
    [style.background]="color"
    [style.height]="height"
    [style.width]="progress + '%'"
  ></div>
</ng-container>
`,
      styles: [":host{position:relative;display:block;pointer-events:none}:host .ngx-spinner{transition:.35s linear all;display:block;position:absolute;top:5px;left:0}:host .ngx-spinner .ngx-spinner-icon{width:14px;height:14px;border:solid 2px transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;animation:loading-bar-spinner .4s linear infinite}:host .ngx-bar{transition:width .35s;position:absolute;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl] :host .ngx-bar{right:0;left:unset}:host[fixed=true]{z-index:10002}:host[fixed=true] .ngx-bar{position:fixed}:host[fixed=true] .ngx-spinner{position:fixed;top:10px;left:10px}[dir=rtl] :host[fixed=true] .ngx-spinner{right:10px;left:unset}@keyframes loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"]
    }]
  }], function() {
    return [{
      type: LoadingBarService
    }];
  }, {
    includeSpinner: [{
      type: Input
    }],
    includeBar: [{
      type: Input
    }],
    fixed: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    ref: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    diameter: [{
      type: Input
    }]
  });
})();
var LoadingBarComponent = class _LoadingBarComponent extends NgxLoadingBar {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵLoadingBarComponent_BaseFactory;
      return function LoadingBarComponent_Factory(__ngFactoryType__) {
        return (ɵLoadingBarComponent_BaseFactory || (ɵLoadingBarComponent_BaseFactory = ɵɵgetInheritedFactory(_LoadingBarComponent)))(__ngFactoryType__ || _LoadingBarComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LoadingBarComponent,
      selectors: [["ngx-loading-bar"]],
      hostVars: 3,
      hostBindings: function LoadingBarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("fixed", ctx.fixed);
          ɵɵstyleProp("color", ctx.color);
        }
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["class", "ngx-spinner", 4, "ngIf"], ["class", "ngx-bar", 3, "background", "height", "width", 4, "ngIf"], [1, "ngx-spinner"], [1, "ngx-spinner-icon"], [1, "ngx-bar"]],
      template: function LoadingBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, LoadingBarComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.value != null ? ctx.value : ɵɵpipeBind1(1, 1, ctx.value$));
        }
      },
      dependencies: [NgIf, AsyncPipe],
      styles: [_c0],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingBarComponent, [{
    type: Component,
    args: [{
      selector: "ngx-loading-bar",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.Emulated,
      host: {
        "[attr.fixed]": "fixed",
        "[style.color]": "color"
      },
      template: `<ng-container *ngIf="value != null ? value : (value$ | async) as progress">
  <div *ngIf="includeSpinner" class="ngx-spinner">
    <div [style.width]="diameter" [style.height]="diameter" class="ngx-spinner-icon"></div>
  </div>
  <div
    *ngIf="includeBar"
    class="ngx-bar"
    [style.background]="color"
    [style.height]="height"
    [style.width]="progress + '%'"
  ></div>
</ng-container>
`,
      styles: [":host{position:relative;display:block;pointer-events:none}:host .ngx-spinner{transition:.35s linear all;display:block;position:absolute;top:5px;left:0}:host .ngx-spinner .ngx-spinner-icon{width:14px;height:14px;border:solid 2px transparent;border-top-color:inherit;border-left-color:inherit;border-radius:50%;animation:loading-bar-spinner .4s linear infinite}:host .ngx-bar{transition:width .35s;position:absolute;top:0;left:0;width:100%;height:2px;border-bottom-right-radius:1px;border-top-right-radius:1px}[dir=rtl] :host .ngx-bar{right:0;left:unset}:host[fixed=true]{z-index:10002}:host[fixed=true] .ngx-bar{position:fixed}:host[fixed=true] .ngx-spinner{position:fixed;top:10px;left:10px}[dir=rtl] :host[fixed=true] .ngx-spinner{right:10px;left:unset}@keyframes loading-bar-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"]
    }]
  }], null, null);
})();
var LoadingBarModule = class _LoadingBarModule {
  static {
    this.ɵfac = function LoadingBarModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoadingBarModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LoadingBarModule,
      declarations: [LoadingBarComponent],
      imports: [CommonModule],
      exports: [LoadingBarComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingBarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [LoadingBarComponent],
      exports: [LoadingBarComponent]
    }]
  }], null, null);
})();

export {
  LOADING_BAR_CONFIG,
  provideLoadingBar,
  LoadingBarService,
  NgxLoadingBar,
  LoadingBarComponent,
  LoadingBarModule
};
//# sourceMappingURL=chunk-4JW3CCQ5.js.map
