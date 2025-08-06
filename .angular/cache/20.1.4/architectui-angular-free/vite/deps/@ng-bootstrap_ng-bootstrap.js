import {
  takeUntilDestroyed
} from "./chunk-MG5WC2LR.js";
import {
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR
} from "./chunk-4VMYNEGK.js";
import {
  NgTemplateOutlet,
  PercentPipe,
  formatDate,
  isPlatformBrowser
} from "./chunk-HQ6NE63K.js";
import "./chunk-NDZIWK7R.js";
import {
  ApplicationRef,
  Attribute,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  LOCALE_ID,
  NEVER,
  NgModule,
  NgZone,
  Observable,
  Output,
  PLATFORM_ID,
  Subject,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  afterEveryRender,
  afterNextRender,
  combineLatest,
  createComponent,
  delay,
  distinctUntilChanged,
  endWith,
  filter,
  finalize,
  forwardRef,
  fromEvent,
  inject,
  map,
  merge,
  mergeMap,
  of,
  race,
  setClassMetadata,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  timer,
  withLatestFrom,
  zip,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementContainer,
  ɵɵdomElementContainerEnd,
  ɵɵdomElementContainerStart,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵi18n,
  ɵɵi18nApply,
  ɵɵi18nExp,
  ɵɵinjectAttribute,
  ɵɵinterpolate2,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-2ATTO4FH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

// node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}

// node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}

// node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles_default = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};

// node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
  return placement.split("-")[0];
}

// node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

// node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}

// node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

// node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}

// node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}

// node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

// node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}

// node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}

// node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}

// node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

// node_modules/@popperjs/core/lib/utils/within.js
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}

// node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

// node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

// node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

// node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow_default = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect2,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};

// node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split("-")[1];
}

// node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles_default = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};

// node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = {
  passive: true
};
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners_default = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect3,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}

// node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash2 = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

// node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

// node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

// node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}

// node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}

// node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

// node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

// node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}

// node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}

// node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements2;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}

// node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip_default = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};

// node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide_default = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};

// node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset_default = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};

// node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets_default = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};

// node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}

// node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min2 = offset2 + overflow[mainSide];
    var max2 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow_default = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};

// node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

// node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

// node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
  var map2 = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map2.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map2.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

// node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}

// node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}

// node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers3 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper4(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers3, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect4 = _ref.effect;
        if (typeof effect4 === "function") {
          var cleanupFn = effect4({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn2 = function noopFn3() {
          };
          effectCleanupFns.push(cleanupFn || noopFn2);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var createPopper = popperGenerator();

// node_modules/@popperjs/core/lib/popper-lite.js
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default];
var createPopper2 = popperGenerator({
  defaultModifiers
});

// node_modules/@popperjs/core/lib/popper.js
var defaultModifiers2 = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper3 = popperGenerator({
  defaultModifiers: defaultModifiers2
});

// node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs
var _c0 = ["container"];
var _c1 = ["ngbAccordionBody", ""];
var _c2 = ["*"];
function NgbAlert_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 1);
    ɵɵdomListener("click", function NgbAlert_Conditional_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close());
    });
    ɵɵdomElementEnd();
  }
}
function NgbCarousel_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function NgbCarousel_For_2_Template_button_click_0_listener() {
      const slide_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      ctx_r2.focus();
      return ɵɵresetView(ctx_r2.select(slide_r2.id, ctx_r2.NgbSlideEventSource.INDICATOR));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("active", slide_r2.id === ctx_r2.activeId);
    ɵɵattribute("aria-labelledby", "slide-" + slide_r2.id)("aria-controls", "slide-" + slide_r2.id)("aria-selected", slide_r2.id === ctx_r2.activeId);
  }
}
function NgbCarousel_For_5_ng_template_3_Template(rf, ctx) {
}
function NgbCarousel_For_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "span", 8);
    ɵɵi18n(2, 0);
    ɵɵelementEnd();
    ɵɵtemplate(3, NgbCarousel_For_5_ng_template_3_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const slide_r4 = ctx.$implicit;
    const ɵ$index_8_r5 = ctx.$index;
    const ɵ$count_8_r6 = ctx.$count;
    ɵɵproperty("id", "slide-" + slide_r4.id);
    ɵɵadvance(2);
    ɵɵi18nExp(ɵ$index_8_r5 + 1)(ɵ$count_8_r6);
    ɵɵi18nApply(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", slide_r4.templateRef);
  }
}
function NgbCarousel_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10);
    ɵɵlistener("click", function NgbCarousel_Conditional_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.arrowLeft());
    });
    ɵɵelement(1, "span", 11);
    ɵɵelementStart(2, "span", 12);
    ɵɵi18n(3, 1);
    ɵɵelementEnd()();
    ɵɵelementStart(4, "button", 13);
    ɵɵlistener("click", function NgbCarousel_Conditional_6_Template_button_click_4_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.arrowRight());
    });
    ɵɵelement(5, "span", 14);
    ɵɵelementStart(6, "span", 12);
    ɵɵi18n(7, 2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵattribute("aria-labelledby", ctx_r2.id + "-previous");
    ɵɵadvance(2);
    ɵɵproperty("id", ctx_r2.id + "-previous");
    ɵɵadvance(2);
    ɵɵattribute("aria-labelledby", ctx_r2.id + "-next");
    ɵɵadvance(2);
    ɵɵproperty("id", ctx_r2.id + "-next");
  }
}
var _c3 = ["ngbDatepickerDayView", ""];
var _c4 = ["month"];
var _c5 = ["year"];
function NgbDatepickerNavigationSelect_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "option", 3);
    ɵɵtext(1);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵdomProperty("value", m_r2);
    ɵɵattribute("aria-label", ctx_r2.i18n.getMonthFullName(m_r2, ctx_r2.date.year));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.i18n.getMonthShortName(m_r2, ctx_r2.date.year));
  }
}
function NgbDatepickerNavigationSelect_For_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "option", 3);
    ɵɵtext(1);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const y_r4 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵdomProperty("value", y_r4);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.i18n.getYearNumerals(y_r4));
  }
}
function _forTrack0($index, $item) {
  return this.idMonth($item);
}
function NgbDatepickerNavigation_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngb-datepicker-navigation-select", 7);
    ɵɵlistener("select", function NgbDatepickerNavigation_Conditional_3_Template_ngb_datepicker_navigation_select_select_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.select.emit($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("date", ctx_r1.date)("disabled", ctx_r1.disabled)("months", ctx_r1.selectBoxes.months)("years", ctx_r1.selectBoxes.years);
  }
}
function NgbDatepickerNavigation_Conditional_4_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 8);
  }
}
function NgbDatepickerNavigation_Conditional_4_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 8);
  }
}
function NgbDatepickerNavigation_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, NgbDatepickerNavigation_Conditional_4_For_1_Conditional_0_Template, 1, 0, "div", 8);
    ɵɵelementStart(1, "div", 9);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵconditionalCreate(3, NgbDatepickerNavigation_Conditional_4_For_1_Conditional_3_Template, 1, 0, "div", 8);
  }
  if (rf & 2) {
    const month_r3 = ctx.$implicit;
    const ɵ$index_11_r4 = ctx.$index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional(ɵ$index_11_r4 > 0 ? 0 : -1);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.i18n.getMonthLabel(month_r3.firstDate), " ");
    ɵɵadvance();
    ɵɵconditional(ɵ$index_11_r4 !== ctx_r1.months.length - 1 ? 3 : -1);
  }
}
function NgbDatepickerNavigation_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NgbDatepickerNavigation_Conditional_4_For_1_Template, 4, 3, null, null, _forTrack0, true);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵrepeater(ctx_r1.months);
  }
}
function NgbDatepickerNavigation_For_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const month_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.i18n.getMonthLabel(month_r5.firstDate));
  }
}
function NgbDatepickerMonth_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.i18n.getWeekLabel());
  }
}
function NgbDatepickerMonth_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const weekday_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(weekday_r2);
  }
}
function NgbDatepickerMonth_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵconditionalCreate(1, NgbDatepickerMonth_Conditional_0_Conditional_1_Template, 2, 1, "div", 1);
    ɵɵrepeaterCreate(2, NgbDatepickerMonth_Conditional_0_For_3_Template, 2, 1, "div", 2, ɵɵrepeaterTrackByIndex);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.datepicker.showWeekNumbers ? 1 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r0.viewModel.weekdays);
  }
}
function NgbDatepickerMonth_For_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const week_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.i18n.getWeekNumerals(week_r3.number));
  }
}
function NgbDatepickerMonth_For_2_Conditional_0_For_3_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NgbDatepickerMonth_For_2_Conditional_0_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, NgbDatepickerMonth_For_2_Conditional_0_For_3_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const day_r5 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.datepicker.dayTemplate)("ngTemplateOutletContext", day_r5.context);
  }
}
function NgbDatepickerMonth_For_2_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("click", function NgbDatepickerMonth_For_2_Conditional_0_For_3_Template_div_click_0_listener($event) {
      const day_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r0 = ɵɵnextContext(3);
      ctx_r0.doSelect(day_r5);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵconditionalCreate(1, NgbDatepickerMonth_For_2_Conditional_0_For_3_Conditional_1_Template, 1, 2, null, 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const day_r5 = ctx.$implicit;
    ɵɵclassProp("disabled", day_r5.context.disabled)("hidden", day_r5.hidden)("ngb-dp-today", day_r5.context.today);
    ɵɵproperty("tabindex", day_r5.tabindex);
    ɵɵattribute("aria-label", day_r5.ariaLabel)("aria-disabled", day_r5.context.disabled)("aria-selected", day_r5.context.selected);
    ɵɵadvance();
    ɵɵconditional(!day_r5.hidden ? 1 : -1);
  }
}
function NgbDatepickerMonth_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵconditionalCreate(1, NgbDatepickerMonth_For_2_Conditional_0_Conditional_1_Template, 2, 1, "div", 4);
    ɵɵrepeaterCreate(2, NgbDatepickerMonth_For_2_Conditional_0_For_3_Template, 2, 11, "div", 5, ɵɵrepeaterTrackByIdentity);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const week_r3 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(ctx_r0.datepicker.showWeekNumbers ? 1 : -1);
    ɵɵadvance();
    ɵɵrepeater(week_r3.days);
  }
}
function NgbDatepickerMonth_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, NgbDatepickerMonth_For_2_Conditional_0_Template, 4, 1, "div", 3);
  }
  if (rf & 2) {
    const week_r3 = ctx.$implicit;
    ɵɵconditional(!week_r3.collapsed ? 0 : -1);
  }
}
var _c6 = ["defaultDayTemplate"];
var _c7 = ["content"];
var _c8 = (a0) => ({
  $implicit: a0
});
function NgbDatepicker_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 8);
  }
  if (rf & 2) {
    const date_r1 = ctx.date;
    const currentMonth_r2 = ctx.currentMonth;
    const selected_r3 = ctx.selected;
    const disabled_r4 = ctx.disabled;
    const focused_r5 = ctx.focused;
    ɵɵproperty("date", date_r1)("currentMonth", currentMonth_r2)("selected", selected_r3)("disabled", disabled_r4)("focused", focused_r5);
  }
}
function NgbDatepicker_ng_template_2_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const month_r6 = ɵɵnextContext().$implicit;
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r6.i18n.getMonthLabel(month_r6.firstDate), " ");
  }
}
function NgbDatepicker_ng_template_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵconditionalCreate(1, NgbDatepicker_ng_template_2_For_1_Conditional_1_Template, 2, 1, "div", 10);
    ɵɵelement(2, "ngb-datepicker-month", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const month_r6 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(ctx_r6.navigation === "none" || ctx_r6.displayMonths > 1 && ctx_r6.navigation === "select" ? 1 : -1);
    ɵɵadvance();
    ɵɵproperty("month", month_r6.firstDate);
  }
}
function NgbDatepicker_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NgbDatepicker_ng_template_2_For_1_Template, 3, 2, "div", 9, ɵɵrepeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵrepeater(ctx_r6.model.months);
  }
}
function NgbDatepicker_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngb-datepicker-navigation", 12);
    ɵɵlistener("navigate", function NgbDatepicker_Conditional_5_Template_ngb_datepicker_navigation_navigate_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.onNavigateEvent($event));
    })("select", function NgbDatepicker_Conditional_5_Template_ngb_datepicker_navigation_select_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.onNavigateDateSelect($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("date", ctx_r6.model.firstDate)("months", ctx_r6.model.months)("disabled", ctx_r6.model.disabled)("showSelect", ctx_r6.model.navigation === "select")("prevDisabled", ctx_r6.model.prevDisabled)("nextDisabled", ctx_r6.model.nextDisabled)("selectBoxes", ctx_r6.model.selectBoxes);
  }
}
function NgbDatepicker_ng_template_8_Template(rf, ctx) {
}
function NgbDatepicker_ng_template_9_Template(rf, ctx) {
}
var _c9 = ["dialog"];
var _c10 = ["ngbNavOutlet", ""];
function NgbNavOutlet_For_1_Conditional_0_ng_template_1_Template(rf, ctx) {
}
function NgbNavOutlet_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 0);
    ɵɵtemplate(1, NgbNavOutlet_For_1_Conditional_0_ng_template_1_Template, 0, 0, "ng-template", 1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("item", item_r1)("nav", ctx_r1.nav)("role", ctx_r1.paneRole);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (item_r1.contentTpl == null ? null : item_r1.contentTpl.templateRef) || null)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c8, item_r1.active || ctx_r1.isPanelTransitioning(item_r1)));
  }
}
function NgbNavOutlet_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, NgbNavOutlet_For_1_Conditional_0_Template, 2, 7, "div", 0);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵconditional(item_r1.isPanelInDom() || ctx_r1.isPanelTransitioning(item_r1) ? 0 : -1);
  }
}
var _c11 = (a0, a1, a2) => ({
  $implicit: a0,
  pages: a1,
  disabled: a2
});
var _c12 = (a0) => ({
  disabled: true,
  currentPage: a0
});
var _c13 = (a0, a1, a2) => ({
  disabled: a0,
  $implicit: a1,
  currentPage: a2
});
var _c14 = (a0, a1) => ({
  disabled: a0,
  currentPage: a1
});
var _c15 = (a0) => ({
  disabled: a0
});
function NgbPagination_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵi18n(1, 7);
    ɵɵelementEnd();
  }
}
function NgbPagination_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵi18n(1, 8);
    ɵɵelementEnd();
  }
}
function NgbPagination_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵi18n(1, 9);
    ɵɵelementEnd();
  }
}
function NgbPagination_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵi18n(1, 10);
    ɵɵelementEnd();
  }
}
function NgbPagination_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0, "...");
  }
}
function NgbPagination_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const page_r1 = ctx.$implicit;
    ɵɵtextInterpolate(page_r1);
  }
}
function NgbPagination_ng_template_12_For_1_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function NgbPagination_ng_template_12_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 16);
    ɵɵtemplate(1, NgbPagination_ng_template_12_For_1_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const page_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    const ellipsis_r4 = ɵɵreference(9);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r2.tplEllipsis == null ? null : ctx_r2.tplEllipsis.templateRef) || ellipsis_r4)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c12, page_r2));
  }
}
function NgbPagination_ng_template_12_For_1_Conditional_2_ng_template_1_Template(rf, ctx) {
}
function NgbPagination_ng_template_12_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 18);
    ɵɵlistener("click", function NgbPagination_ng_template_12_For_1_Conditional_2_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r5);
      const pageNumber_r6 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      ctx_r2.selectPage(pageNumber_r6);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵtemplate(1, NgbPagination_ng_template_12_For_1_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const pageNumber_r6 = ɵɵnextContext().$implicit;
    const ctx_r6 = ɵɵnextContext();
    const page_r2 = ctx_r6.$implicit;
    const disabled_r8 = ctx_r6.disabled;
    const ctx_r2 = ɵɵnextContext();
    const defaultNumber_r9 = ɵɵreference(11);
    ɵɵattribute("tabindex", disabled_r8 ? "-1" : null)("aria-disabled", disabled_r8 ? "true" : null)("aria-current", pageNumber_r6 === page_r2 ? "page" : null);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r2.tplNumber == null ? null : ctx_r2.tplNumber.templateRef) || defaultNumber_r9)("ngTemplateOutletContext", ɵɵpureFunction3(5, _c13, disabled_r8, pageNumber_r6, page_r2));
  }
}
function NgbPagination_ng_template_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 15);
    ɵɵconditionalCreate(1, NgbPagination_ng_template_12_For_1_Conditional_1_Template, 2, 4, "a", 16)(2, NgbPagination_ng_template_12_For_1_Conditional_2_Template, 2, 9, "a", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const pageNumber_r6 = ctx.$implicit;
    const ctx_r6 = ɵɵnextContext();
    const page_r2 = ctx_r6.$implicit;
    const disabled_r8 = ctx_r6.disabled;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("active", pageNumber_r6 === page_r2)("disabled", ctx_r2.isEllipsis(pageNumber_r6) || disabled_r8);
    ɵɵadvance();
    ɵɵconditional(ctx_r2.isEllipsis(pageNumber_r6) ? 1 : 2);
  }
}
function NgbPagination_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵrepeaterCreate(0, NgbPagination_ng_template_12_For_1_Template, 3, 5, "li", 14, ɵɵrepeaterTrackByIndex);
  }
  if (rf & 2) {
    const pages_r10 = ctx.pages;
    ɵɵrepeater(pages_r10);
  }
}
function NgbPagination_Conditional_15_ng_template_2_Template(rf, ctx) {
}
function NgbPagination_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15)(1, "a", 19);
    ɵɵlistener("click", function NgbPagination_Conditional_15_Template_a_click_1_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r2 = ɵɵnextContext();
      ctx_r2.selectPage(1);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵtemplate(2, NgbPagination_Conditional_15_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const first_r12 = ɵɵreference(1);
    ɵɵclassProp("disabled", ctx_r2.previousDisabled());
    ɵɵadvance();
    ɵɵattribute("tabindex", ctx_r2.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r2.previousDisabled() ? "true" : null);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r2.tplFirst == null ? null : ctx_r2.tplFirst.templateRef) || first_r12)("ngTemplateOutletContext", ɵɵpureFunction2(6, _c14, ctx_r2.previousDisabled(), ctx_r2.page));
  }
}
function NgbPagination_Conditional_16_ng_template_2_Template(rf, ctx) {
}
function NgbPagination_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15)(1, "a", 20);
    ɵɵlistener("click", function NgbPagination_Conditional_16_Template_a_click_1_listener($event) {
      ɵɵrestoreView(_r13);
      const ctx_r2 = ɵɵnextContext();
      ctx_r2.selectPage(ctx_r2.page - 1);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵtemplate(2, NgbPagination_Conditional_16_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const previous_r14 = ɵɵreference(3);
    ɵɵclassProp("disabled", ctx_r2.previousDisabled());
    ɵɵadvance();
    ɵɵattribute("tabindex", ctx_r2.previousDisabled() ? "-1" : null)("aria-disabled", ctx_r2.previousDisabled() ? "true" : null);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r2.tplPrevious == null ? null : ctx_r2.tplPrevious.templateRef) || previous_r14)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c15, ctx_r2.previousDisabled()));
  }
}
function NgbPagination_ng_template_17_Template(rf, ctx) {
}
function NgbPagination_Conditional_18_ng_template_2_Template(rf, ctx) {
}
function NgbPagination_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15)(1, "a", 21);
    ɵɵlistener("click", function NgbPagination_Conditional_18_Template_a_click_1_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r2 = ɵɵnextContext();
      ctx_r2.selectPage(ctx_r2.page + 1);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵtemplate(2, NgbPagination_Conditional_18_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const next_r16 = ɵɵreference(5);
    ɵɵclassProp("disabled", ctx_r2.nextDisabled());
    ɵɵadvance();
    ɵɵattribute("tabindex", ctx_r2.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r2.nextDisabled() ? "true" : null);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r2.tplNext == null ? null : ctx_r2.tplNext.templateRef) || next_r16)("ngTemplateOutletContext", ɵɵpureFunction2(6, _c14, ctx_r2.nextDisabled(), ctx_r2.page));
  }
}
function NgbPagination_Conditional_19_ng_template_2_Template(rf, ctx) {
}
function NgbPagination_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 15)(1, "a", 22);
    ɵɵlistener("click", function NgbPagination_Conditional_19_Template_a_click_1_listener($event) {
      ɵɵrestoreView(_r17);
      const ctx_r2 = ɵɵnextContext();
      ctx_r2.selectPage(ctx_r2.pageCount);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵtemplate(2, NgbPagination_Conditional_19_ng_template_2_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const last_r18 = ɵɵreference(7);
    ɵɵclassProp("disabled", ctx_r2.nextDisabled());
    ɵɵadvance();
    ɵɵattribute("tabindex", ctx_r2.nextDisabled() ? "-1" : null)("aria-disabled", ctx_r2.nextDisabled() ? "true" : null);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", (ctx_r2.tplLast == null ? null : ctx_r2.tplLast.templateRef) || last_r18)("ngTemplateOutletContext", ɵɵpureFunction2(6, _c14, ctx_r2.nextDisabled(), ctx_r2.page));
  }
}
function NgbPopoverWindow_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵtextInterpolate(ctx_r0.title);
  }
}
function NgbPopoverWindow_Conditional_1_ng_template_3_Template(rf, ctx) {
}
function NgbPopoverWindow_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h3", 2);
    ɵɵtemplate(1, NgbPopoverWindow_Conditional_1_ng_template_1_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, NgbPopoverWindow_Conditional_1_ng_template_3_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const simpleTitle_r2 = ɵɵreference(2);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.isTitleTemplate() ? ctx_r0.title : simpleTitle_r2)("ngTemplateOutletContext", ctx_r0.context);
  }
}
function NgbProgressbar_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "span");
    ɵɵi18n(1, 0);
    ɵɵpipe(2, "percent");
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵi18nExp(ɵɵpipeBind1(2, 1, ctx_r0.getValue() / ctx_r0.max));
    ɵɵi18nApply(1);
  }
}
function NgbRating_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const fill_r1 = ctx.fill;
    ɵɵtextInterpolate(fill_r1 === 100 ? "★" : "☆");
  }
}
function NgbRating_For_3_ng_template_3_Template(rf, ctx) {
}
function NgbRating_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelementStart(2, "span", 2);
    ɵɵlistener("mouseenter", function NgbRating_For_3_Template_span_mouseenter_2_listener() {
      const ɵ$index_4_r3 = ɵɵrestoreView(_r2).$index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.enter(ɵ$index_4_r3 + 1));
    })("click", function NgbRating_For_3_Template_span_click_2_listener() {
      const ɵ$index_4_r3 = ɵɵrestoreView(_r2).$index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.handleClick(ɵ$index_4_r3 + 1));
    });
    ɵɵtemplate(3, NgbRating_For_3_ng_template_3_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ɵ$index_4_r3 = ctx.$index;
    const ctx_r3 = ɵɵnextContext();
    const t_r5 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵtextInterpolate1("(", ɵ$index_4_r3 < ctx_r3.nextRate ? "*" : " ", ")");
    ɵɵadvance();
    ɵɵstyleProp("cursor", ctx_r3.isInteractive() ? "pointer" : "default");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.starTemplate || ctx_r3.starTemplateFromContent || t_r5)("ngTemplateOutletContext", ctx_r3.contexts[ɵ$index_4_r3]);
  }
}
function NgbTimepicker_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 15);
    ɵɵdomListener("click", function NgbTimepicker_Conditional_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeHour(ctx_r1.hourStep));
    });
    ɵɵdomElement(1, "span", 16);
    ɵɵdomElementStart(2, "span", 17);
    ɵɵi18n(3, 0);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    ɵɵdomProperty("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 15);
    ɵɵdomListener("click", function NgbTimepicker_Conditional_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeHour(-ctx_r1.hourStep));
    });
    ɵɵdomElement(1, "span", 18);
    ɵɵdomElementStart(2, "span", 17);
    ɵɵi18n(3, 1);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    ɵɵdomProperty("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 15);
    ɵɵdomListener("click", function NgbTimepicker_Conditional_9_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeMinute(ctx_r1.minuteStep));
    });
    ɵɵdomElement(1, "span", 16);
    ɵɵdomElementStart(2, "span", 17);
    ɵɵi18n(3, 2);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    ɵɵdomProperty("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 15);
    ɵɵdomListener("click", function NgbTimepicker_Conditional_11_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.changeMinute(-ctx_r1.minuteStep));
    });
    ɵɵdomElement(1, "span", 18);
    ɵɵdomElementStart(2, "span", 17);
    ɵɵi18n(3, 3);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    ɵɵdomProperty("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 15);
    ɵɵdomListener("click", function NgbTimepicker_Conditional_12_Conditional_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.changeSecond(ctx_r1.secondStep));
    });
    ɵɵdomElement(1, "span", 16);
    ɵɵdomElementStart(2, "span", 17);
    ɵɵi18n(3, 4);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    ɵɵdomProperty("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "button", 15);
    ɵɵdomListener("click", function NgbTimepicker_Conditional_12_Conditional_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.changeSecond(-ctx_r1.secondStep));
    });
    ɵɵdomElement(1, "span", 18);
    ɵɵdomElementStart(2, "span", 17);
    ɵɵi18n(3, 5);
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    ɵɵdomProperty("disabled", ctx_r1.disabled);
  }
}
function NgbTimepicker_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵdomElementStart(0, "div", 12);
    ɵɵtext(1, ":");
    ɵɵdomElementEnd();
    ɵɵdomElementStart(2, "div", 19);
    ɵɵconditionalCreate(3, NgbTimepicker_Conditional_12_Conditional_3_Template, 4, 7, "button", 10);
    ɵɵdomElementStart(4, "input", 20);
    ɵɵdomListener("change", function NgbTimepicker_Conditional_12_Template_input_change_4_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.updateSecond($event.target.value));
    })("blur", function NgbTimepicker_Conditional_12_Template_input_blur_4_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.handleBlur());
    })("input", function NgbTimepicker_Conditional_12_Template_input_input_4_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.formatInput($event.target));
    })("keydown.ArrowUp", function NgbTimepicker_Conditional_12_Template_input_keydown_ArrowUp_4_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.changeSecond(ctx_r1.secondStep);
      return ɵɵresetView($event.preventDefault());
    })("keydown.ArrowDown", function NgbTimepicker_Conditional_12_Template_input_keydown_ArrowDown_4_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext();
      ctx_r1.changeSecond(-ctx_r1.secondStep);
      return ɵɵresetView($event.preventDefault());
    });
    ɵɵdomElementEnd();
    ɵɵconditionalCreate(5, NgbTimepicker_Conditional_12_Conditional_5_Template, 4, 7, "button", 10);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵconditional(ctx_r1.spinners ? 3 : -1);
    ɵɵadvance();
    ɵɵclassProp("form-control-sm", ctx_r1.isSmallSize)("form-control-lg", ctx_r1.isLargeSize);
    ɵɵdomProperty("value", ctx_r1.formatMinSec(ctx_r1.model == null ? null : ctx_r1.model.second))("readOnly", ctx_r1.readonlyInputs)("disabled", ctx_r1.disabled);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.spinners ? 5 : -1);
  }
}
function NgbTimepicker_Conditional_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementContainerStart(0);
    ɵɵi18n(1, 6);
    ɵɵdomElementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵi18nExp(ctx_r1.i18n.getAfternoonPeriod());
    ɵɵi18nApply(1);
  }
}
function NgbTimepicker_Conditional_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementContainerStart(0);
    ɵɵtext(1);
    ɵɵdomElementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.i18n.getMorningPeriod());
  }
}
function NgbTimepicker_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵdomElement(0, "div", 12);
    ɵɵdomElementStart(1, "div", 21)(2, "button", 22);
    ɵɵdomListener("click", function NgbTimepicker_Conditional_13_Template_button_click_2_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleMeridian());
    });
    ɵɵconditionalCreate(3, NgbTimepicker_Conditional_13_Conditional_3_Template, 2, 1, "ng-container")(4, NgbTimepicker_Conditional_13_Conditional_4_Template, 2, 1, "ng-container");
    ɵɵdomElementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵclassProp("btn-sm", ctx_r1.isSmallSize)("btn-lg", ctx_r1.isLargeSize)("disabled", ctx_r1.disabled);
    ɵɵdomProperty("disabled", ctx_r1.disabled);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.model && ctx_r1.model.hour >= 12 ? 3 : 4);
  }
}
function NgbToast_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "strong", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.header);
  }
}
function NgbToast_Conditional_2_ng_template_1_Template(rf, ctx) {
}
function NgbToast_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, NgbToast_Conditional_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementStart(2, "button", 5);
    ɵɵlistener("click", function NgbToast_Conditional_2_Template_button_click_2_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.hide());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const headerTpl_r3 = ɵɵreference(1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentHeaderTpl || headerTpl_r3);
  }
}
function NgbHighlight_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementStart(0, "span");
    ɵɵtext(1);
    ɵɵdomElementEnd();
  }
  if (rf & 2) {
    const part_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.highlightClass);
    ɵɵadvance();
    ɵɵtextInterpolate(part_r1);
  }
}
function NgbHighlight_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵdomElementContainerStart(0);
    ɵɵtext(1);
    ɵɵdomElementContainerEnd();
  }
  if (rf & 2) {
    const part_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(part_r1);
  }
}
function NgbHighlight_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, NgbHighlight_For_1_Conditional_0_Template, 2, 3, "span", 0)(1, NgbHighlight_For_1_Conditional_1_Template, 2, 1, "ng-container");
  }
  if (rf & 2) {
    const ɵ$index_1_r3 = ctx.$index;
    ɵɵconditional(ɵ$index_1_r3 % 2 !== 0 ? 0 : 1);
  }
}
var _c16 = (a0, a1, a2) => ({
  result: a0,
  term: a1,
  formatter: a2
});
function NgbTypeaheadWindow_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ngb-highlight", 2);
  }
  if (rf & 2) {
    const result_r1 = ctx.result;
    const term_r2 = ctx.term;
    const formatter_r3 = ctx.formatter;
    ɵɵproperty("result", formatter_r3(result_r1))("term", term_r2);
  }
}
function NgbTypeaheadWindow_For_3_ng_template_1_Template(rf, ctx) {
}
function NgbTypeaheadWindow_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("mouseenter", function NgbTypeaheadWindow_For_3_Template_button_mouseenter_0_listener() {
      const $index_r5 = ɵɵrestoreView(_r4).$index;
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.markActive($index_r5));
    })("click", function NgbTypeaheadWindow_For_3_Template_button_click_0_listener() {
      const result_r7 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.select(result_r7));
    });
    ɵɵtemplate(1, NgbTypeaheadWindow_For_3_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const result_r7 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const ctx_r5 = ɵɵnextContext();
    const rt_r8 = ɵɵreference(1);
    ɵɵclassProp("active", $index_r5 === ctx_r5.activeIdx);
    ɵɵproperty("id", ctx_r5.id + "-" + $index_r5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r5.resultTemplate || rt_r8)("ngTemplateOutletContext", ɵɵpureFunction3(5, _c16, result_r7, ctx_r5.term, ctx_r5.formatter));
  }
}
var environment = {
  animation: true,
  transitionTimerDelayMs: 5
};
var NgbConfig = class _NgbConfig {
  constructor() {
    this.animation = environment.animation;
  }
  static {
    this.ɵfac = function NgbConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbConfig,
      factory: _NgbConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbAccordionConfig = class _NgbAccordionConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.closeOthers = false;
    this.destroyOnHide = true;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.ɵfac = function NgbAccordionConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbAccordionConfig,
      factory: _NgbAccordionConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function getTransitionDurationMs(element) {
  const {
    transitionDelay,
    transitionDuration
  } = window.getComputedStyle(element);
  const transitionDelaySec = parseFloat(transitionDelay);
  const transitionDurationSec = parseFloat(transitionDuration);
  return (transitionDelaySec + transitionDurationSec) * 1e3;
}
function toInteger(value) {
  return parseInt(`${value}`, 10);
}
function toString(value) {
  return value !== void 0 && value !== null ? `${value}` : "";
}
function getValueInRange(value, max2, min2 = 0) {
  return Math.max(Math.min(value, max2), min2);
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return !isNaN(toInteger(value));
}
function isInteger(value) {
  return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isPromise(v) {
  return v && v.then;
}
function padNumber(value) {
  if (isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return "";
  }
}
function regExpEscape(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function closest(element, selector) {
  if (!selector) {
    return null;
  }
  if (typeof element.closest === "undefined") {
    return null;
  }
  return element.closest(selector);
}
function reflow(element) {
  return (element || document.body).getBoundingClientRect();
}
function runInZone(zone) {
  return (source) => {
    return new Observable((observer) => {
      const next = (value) => zone.run(() => observer.next(value));
      const error = (e) => zone.run(() => observer.error(e));
      const complete = () => zone.run(() => observer.complete());
      return source.subscribe({
        next,
        error,
        complete
      });
    });
  };
}
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function getActiveElement(root = document) {
  const activeEl = root?.activeElement;
  if (!activeEl) {
    return null;
  }
  return activeEl.shadowRoot ? getActiveElement(activeEl.shadowRoot) : activeEl;
}
var noopFn = () => {
};
var {
  transitionTimerDelayMs
} = environment;
var runningTransitions = /* @__PURE__ */ new Map();
var ngbRunTransition = (zone, element, startFn, options) => {
  let context = options.context || {};
  const running = runningTransitions.get(element);
  if (running) {
    switch (options.runningTransition) {
      // If there is one running and we want for it to 'continue' to run, we have to cancel the new one.
      // We're not emitting any values, but simply completing the observable (EMPTY).
      case "continue":
        return EMPTY;
      // If there is one running and we want for it to 'stop', we have to complete the running one.
      // We're simply completing the running one and not emitting any values and merging newly provided context
      // with the one coming from currently running transition.
      case "stop":
        zone.run(() => running.transition$.complete());
        context = Object.assign(running.context, context);
        runningTransitions.delete(element);
    }
  }
  const endFn = startFn(element, options.animation, context) || noopFn;
  if (!options.animation || window.getComputedStyle(element).transitionProperty === "none") {
    zone.run(() => endFn());
    return of(void 0).pipe(runInZone(zone));
  }
  const transition$ = new Subject();
  const finishTransition$ = new Subject();
  const stop$ = transition$.pipe(endWith(true));
  runningTransitions.set(element, {
    transition$,
    complete: () => {
      finishTransition$.next();
      finishTransition$.complete();
    },
    context
  });
  const transitionDurationMs = getTransitionDurationMs(element);
  zone.runOutsideAngular(() => {
    const transitionEnd$ = fromEvent(element, "transitionend").pipe(takeUntil(stop$), filter(({
      target
    }) => target === element));
    const timer$ = timer(transitionDurationMs + transitionTimerDelayMs).pipe(takeUntil(stop$));
    race(timer$, transitionEnd$, finishTransition$).pipe(takeUntil(stop$)).subscribe(() => {
      runningTransitions.delete(element);
      zone.run(() => {
        endFn();
        transition$.next();
        transition$.complete();
      });
    });
  });
  return transition$.asObservable();
};
var ngbCompleteTransition = (element) => {
  runningTransitions.get(element)?.complete();
};
function measureCollapsingElementDimensionPx(element, dimension) {
  if (typeof navigator === "undefined") {
    return "0px";
  }
  const {
    classList
  } = element;
  const hasShownClass = classList.contains("show");
  if (!hasShownClass) {
    classList.add("show");
  }
  element.style[dimension] = "";
  const dimensionSize = element.getBoundingClientRect()[dimension] + "px";
  if (!hasShownClass) {
    classList.remove("show");
  }
  return dimensionSize;
}
var ngbCollapsingTransition = (element, animation, context) => {
  let {
    direction,
    maxSize,
    dimension
  } = context;
  const {
    classList
  } = element;
  function setInitialClasses() {
    classList.add("collapse");
    if (direction === "show") {
      classList.add("show");
    } else {
      classList.remove("show");
    }
  }
  if (!animation) {
    setInitialClasses();
    return;
  }
  if (!maxSize) {
    maxSize = measureCollapsingElementDimensionPx(element, dimension);
    context.maxSize = maxSize;
    element.style[dimension] = direction !== "show" ? maxSize : "0px";
    classList.remove("collapse", "collapsing", "show");
    reflow(element);
    classList.add("collapsing");
  }
  element.style[dimension] = direction === "show" ? maxSize : "0px";
  return () => {
    setInitialClasses();
    classList.remove("collapsing");
    element.style[dimension] = "";
  };
};
var NgbCollapseConfig = class _NgbCollapseConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.horizontal = false;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.ɵfac = function NgbCollapseConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCollapseConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCollapseConfig,
      factory: _NgbCollapseConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCollapseConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbCollapse = class _NgbCollapse {
  constructor() {
    this._config = inject(NgbCollapseConfig);
    this._element = inject(ElementRef);
    this._zone = inject(NgZone);
    this.animation = this._config.animation;
    this._afterInit = false;
    this._isCollapsed = false;
    this.ngbCollapseChange = new EventEmitter();
    this.horizontal = this._config.horizontal;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
  }
  /**
   * If `true`, will collapse the element or show it otherwise.
   */
  set collapsed(isCollapsed) {
    if (this._isCollapsed !== isCollapsed) {
      this._isCollapsed = isCollapsed;
      if (this._afterInit) {
        this._runTransitionWithEvents(isCollapsed, this.animation);
      }
    }
  }
  ngOnInit() {
    this._runTransition(this._isCollapsed, false);
    this._afterInit = true;
  }
  /**
   * Triggers collapsing programmatically.
   *
   * If there is a collapsing transition running already, it will be reversed.
   * If the animations are turned off this happens synchronously.
   *
   * @since 8.0.0
   */
  toggle(open = this._isCollapsed) {
    this.collapsed = !open;
    this.ngbCollapseChange.next(this._isCollapsed);
  }
  _runTransition(collapsed, animation) {
    return ngbRunTransition(this._zone, this._element.nativeElement, ngbCollapsingTransition, {
      animation,
      runningTransition: "stop",
      context: {
        direction: collapsed ? "hide" : "show",
        dimension: this.horizontal ? "width" : "height"
      }
    });
  }
  _runTransitionWithEvents(collapsed, animation) {
    this._runTransition(collapsed, animation).subscribe(() => {
      if (collapsed) {
        this.hidden.emit();
      } else {
        this.shown.emit();
      }
    });
  }
  static {
    this.ɵfac = function NgbCollapse_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCollapse)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbCollapse,
      selectors: [["", "ngbCollapse", ""]],
      hostVars: 2,
      hostBindings: function NgbCollapse_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("collapse-horizontal", ctx.horizontal);
        }
      },
      inputs: {
        animation: "animation",
        collapsed: [0, "ngbCollapse", "collapsed"],
        horizontal: "horizontal"
      },
      outputs: {
        ngbCollapseChange: "ngbCollapseChange",
        shown: "shown",
        hidden: "hidden"
      },
      exportAs: ["ngbCollapse"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCollapse, [{
    type: Directive,
    args: [{
      selector: "[ngbCollapse]",
      exportAs: "ngbCollapse",
      host: {
        "[class.collapse-horizontal]": "horizontal"
      }
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    collapsed: [{
      type: Input,
      args: ["ngbCollapse"]
    }],
    ngbCollapseChange: [{
      type: Output
    }],
    horizontal: [{
      type: Input
    }],
    shown: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }]
  });
})();
var nextId$3 = 0;
var NgbAccordionBody = class _NgbAccordionBody {
  constructor() {
    this._item = inject(NgbAccordionItem);
    this._viewRef = null;
    this.elementRef = inject(ElementRef);
  }
  ngAfterContentChecked() {
    if (this._bodyTpl) {
      if (this._item._shouldBeInDOM) {
        this._createViewIfNotExists();
      } else {
        this._destroyViewIfExists();
      }
    }
  }
  ngOnDestroy() {
    this._destroyViewIfExists();
  }
  _destroyViewIfExists() {
    this._viewRef?.destroy();
    this._viewRef = null;
  }
  _createViewIfNotExists() {
    if (!this._viewRef) {
      this._viewRef = this._vcr.createEmbeddedView(this._bodyTpl);
      this._viewRef.detectChanges();
    }
  }
  static {
    this.ɵfac = function NgbAccordionBody_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionBody)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbAccordionBody,
      selectors: [["", "ngbAccordionBody", ""]],
      contentQueries: function NgbAccordionBody_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TemplateRef, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._bodyTpl = _t.first);
        }
      },
      viewQuery: function NgbAccordionBody_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7, ViewContainerRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._vcr = _t.first);
        }
      },
      hostAttrs: [1, "accordion-body"],
      attrs: _c1,
      ngContentSelectors: _c2,
      decls: 3,
      vars: 0,
      consts: [["container", ""]],
      template: function NgbAccordionBody_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵdomElementContainer(0, null, 0);
          ɵɵprojection(2);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionBody, [{
    type: Component,
    args: [{
      selector: "[ngbAccordionBody]",
      template: `
		<ng-container #container />
		<ng-content />
	`,
      host: {
        class: "accordion-body"
      }
    }]
  }], null, {
    _vcr: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef,
        static: true
      }]
    }],
    _bodyTpl: [{
      type: ContentChild,
      args: [TemplateRef, {
        static: true
      }]
    }]
  });
})();
var NgbAccordionCollapse = class _NgbAccordionCollapse {
  constructor() {
    this.item = inject(NgbAccordionItem);
    this.ngbCollapse = inject(NgbCollapse);
  }
  static {
    this.ɵfac = function NgbAccordionCollapse_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionCollapse)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbAccordionCollapse,
      selectors: [["", "ngbAccordionCollapse", ""]],
      hostAttrs: ["role", "region", 1, "accordion-collapse"],
      hostVars: 2,
      hostBindings: function NgbAccordionCollapse_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.item.collapseId);
          ɵɵattribute("aria-labelledby", ctx.item.toggleId);
        }
      },
      exportAs: ["ngbAccordionCollapse"],
      features: [ɵɵHostDirectivesFeature([NgbCollapse])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionCollapse, [{
    type: Directive,
    args: [{
      exportAs: "ngbAccordionCollapse",
      selector: "[ngbAccordionCollapse]",
      host: {
        role: "region",
        class: "accordion-collapse",
        "[id]": "item.collapseId",
        "[attr.aria-labelledby]": "item.toggleId"
      },
      hostDirectives: [NgbCollapse]
    }]
  }], null, null);
})();
var NgbAccordionToggle = class _NgbAccordionToggle {
  constructor() {
    this.item = inject(NgbAccordionItem);
    this.accordion = inject(NgbAccordionDirective);
  }
  static {
    this.ɵfac = function NgbAccordionToggle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionToggle)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbAccordionToggle,
      selectors: [["", "ngbAccordionToggle", ""]],
      hostVars: 5,
      hostBindings: function NgbAccordionToggle_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NgbAccordionToggle_click_HostBindingHandler() {
            return !ctx.item.disabled && ctx.accordion.toggle(ctx.item.id);
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.item.toggleId);
          ɵɵattribute("aria-controls", ctx.item.collapseId)("aria-expanded", !ctx.item.collapsed);
          ɵɵclassProp("collapsed", ctx.item.collapsed);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionToggle, [{
    type: Directive,
    args: [{
      selector: "[ngbAccordionToggle]",
      host: {
        "[id]": "item.toggleId",
        "[class.collapsed]": "item.collapsed",
        "[attr.aria-controls]": "item.collapseId",
        "[attr.aria-expanded]": "!item.collapsed",
        "(click)": "!item.disabled && accordion.toggle(item.id)"
      }
    }]
  }], null, null);
})();
var NgbAccordionButton = class _NgbAccordionButton {
  constructor() {
    this.item = inject(NgbAccordionItem);
  }
  static {
    this.ɵfac = function NgbAccordionButton_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionButton)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbAccordionButton,
      selectors: [["button", "ngbAccordionButton", ""]],
      hostAttrs: ["type", "button", 1, "accordion-button"],
      hostVars: 1,
      hostBindings: function NgbAccordionButton_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("disabled", ctx.item.disabled);
        }
      },
      features: [ɵɵHostDirectivesFeature([NgbAccordionToggle])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionButton, [{
    type: Directive,
    args: [{
      selector: "button[ngbAccordionButton]",
      host: {
        "[disabled]": "item.disabled",
        class: "accordion-button",
        type: "button"
      },
      hostDirectives: [NgbAccordionToggle]
    }]
  }], null, null);
})();
var NgbAccordionHeader = class _NgbAccordionHeader {
  constructor() {
    this.item = inject(NgbAccordionItem);
  }
  static {
    this.ɵfac = function NgbAccordionHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionHeader)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbAccordionHeader,
      selectors: [["", "ngbAccordionHeader", ""]],
      hostAttrs: ["role", "heading", 1, "accordion-header"],
      hostVars: 2,
      hostBindings: function NgbAccordionHeader_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("collapsed", ctx.item.collapsed);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionHeader, [{
    type: Directive,
    args: [{
      selector: "[ngbAccordionHeader]",
      host: {
        role: "heading",
        class: "accordion-header",
        "[class.collapsed]": "item.collapsed"
      }
    }]
  }], null, null);
})();
var NgbAccordionItem = class _NgbAccordionItem {
  constructor() {
    this._accordion = inject(NgbAccordionDirective);
    this._cd = inject(ChangeDetectorRef);
    this._destroyRef = inject(DestroyRef);
    this._collapsed = true;
    this._id = `ngb-accordion-item-${nextId$3++}`;
    this._collapseAnimationRunning = false;
    this.disabled = false;
    this.show = new EventEmitter();
    this.shown = new EventEmitter();
    this.hide = new EventEmitter();
    this.hidden = new EventEmitter();
  }
  /**
   * Sets the custom ID of the accordion item. It must be unique for the document.
   *
   * @param id The ID of the accordion item, must be a non-empty string
   */
  set id(id) {
    if (isString(id) && id !== "") {
      this._id = id;
    }
  }
  /**
   * If `true`, the content of the accordion item's body will be removed from the DOM. It will be just hidden otherwise.
   *
   * This property can also be set up on the parent [`NgbAccordion` directive](#/components/accordion/api#NgbAccordionDirective).
   */
  set destroyOnHide(destroyOnHide) {
    this._destroyOnHide = destroyOnHide;
  }
  get destroyOnHide() {
    return this._destroyOnHide === void 0 ? this._accordion.destroyOnHide : this._destroyOnHide;
  }
  /**
   *	If `true`, the accordion item will be collapsed. Otherwise, it will be expanded.
   *
   * @param collapsed New state of the accordion item.
   */
  set collapsed(collapsed) {
    if (collapsed) {
      this.collapse();
    } else {
      this.expand();
    }
  }
  get collapsed() {
    return this._collapsed;
  }
  get id() {
    return `${this._id}`;
  }
  get toggleId() {
    return `${this.id}-toggle`;
  }
  get collapseId() {
    return `${this.id}-collapse`;
  }
  get _shouldBeInDOM() {
    return !this.collapsed || this._collapseAnimationRunning || !this.destroyOnHide;
  }
  ngAfterContentInit() {
    const {
      ngbCollapse
    } = this._collapse;
    ngbCollapse.animation = false;
    ngbCollapse.collapsed = this.collapsed;
    ngbCollapse.animation = this._accordion.animation;
    ngbCollapse.hidden.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._collapseAnimationRunning = false;
      this.hidden.emit();
      this._accordion.hidden.emit(this.id);
      this._cd.markForCheck();
    });
    ngbCollapse.shown.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this.shown.emit();
      this._accordion.shown.emit(this.id);
      this._cd.markForCheck();
    });
  }
  /**
   * Toggles an accordion item.
   */
  toggle() {
    this.collapsed = !this.collapsed;
  }
  /**
   * Expands an accordion item.
   */
  expand() {
    if (this.collapsed) {
      if (!this._accordion._ensureCanExpand(this)) {
        return;
      }
      this._collapsed = false;
      this._cd.markForCheck();
      this._cd.detectChanges();
      this.show.emit();
      this._accordion.show.emit(this.id);
      this._collapse.ngbCollapse.animation = this._accordion.animation;
      this._collapse.ngbCollapse.collapsed = false;
    }
  }
  /**
   * Collapses an accordion item.
   */
  collapse() {
    if (!this.collapsed) {
      this._collapsed = true;
      this._collapseAnimationRunning = true;
      this._cd.markForCheck();
      this.hide.emit();
      this._accordion.hide.emit(this.id);
      this._collapse.ngbCollapse.animation = this._accordion.animation;
      this._collapse.ngbCollapse.collapsed = true;
    }
  }
  static {
    this.ɵfac = function NgbAccordionItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionItem)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbAccordionItem,
      selectors: [["", "ngbAccordionItem", ""]],
      contentQueries: function NgbAccordionItem_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbAccordionCollapse, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._collapse = _t.first);
        }
      },
      hostAttrs: [1, "accordion-item"],
      hostVars: 1,
      hostBindings: function NgbAccordionItem_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.id);
        }
      },
      inputs: {
        id: [0, "ngbAccordionItem", "id"],
        destroyOnHide: "destroyOnHide",
        disabled: "disabled",
        collapsed: "collapsed"
      },
      outputs: {
        show: "show",
        shown: "shown",
        hide: "hide",
        hidden: "hidden"
      },
      exportAs: ["ngbAccordionItem"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionItem, [{
    type: Directive,
    args: [{
      selector: "[ngbAccordionItem]",
      exportAs: "ngbAccordionItem",
      host: {
        "[id]": "id",
        class: "accordion-item"
      }
    }]
  }], null, {
    _collapse: [{
      type: ContentChild,
      args: [NgbAccordionCollapse, {
        static: true
      }]
    }],
    id: [{
      type: Input,
      args: ["ngbAccordionItem"]
    }],
    destroyOnHide: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    collapsed: [{
      type: Input
    }],
    show: [{
      type: Output
    }],
    shown: [{
      type: Output
    }],
    hide: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }]
  });
})();
var NgbAccordionDirective = class _NgbAccordionDirective {
  constructor() {
    this._config = inject(NgbAccordionConfig);
    this._anItemWasAlreadyExpandedDuringInitialisation = false;
    this.animation = this._config.animation;
    this.closeOthers = this._config.closeOthers;
    this.destroyOnHide = this._config.destroyOnHide;
    this.show = new EventEmitter();
    this.shown = new EventEmitter();
    this.hide = new EventEmitter();
    this.hidden = new EventEmitter();
  }
  /**
   * Toggles an item with the given id.
   *
   * It will toggle an item, even if it is disabled.
   *
   * @param itemId The id of the item to toggle.
   */
  toggle(itemId) {
    this._getItem(itemId)?.toggle();
  }
  /**
   * Expands an item with the given id.
   *
   * If `closeOthers` is `true`, it will collapse other panels.
   *
   * @param itemId The id of the item to expand.
   */
  expand(itemId) {
    this._getItem(itemId)?.expand();
  }
  /**
   * Expands all items.
   *
   * If `closeOthers` is `true` and all items are closed, it will open the first one. Otherwise, it will keep the opened one.
   */
  expandAll() {
    if (this._items) {
      if (this.closeOthers) {
        if (!this._items.find((item) => !item.collapsed)) {
          this._items.first.expand();
        }
      } else {
        this._items.forEach((item) => item.expand());
      }
    }
  }
  /**
   * Collapses an item with the given id.
   *
   * Has no effect if the `itemId` does not correspond to any item.
   *
   * @param itemId The id of the item to collapse.
   */
  collapse(itemId) {
    this._getItem(itemId)?.collapse();
  }
  /**
   * Collapses all items.
   */
  collapseAll() {
    this._items?.forEach((item) => item.collapse());
  }
  /**
   * Checks if an item with the given id is expanded.
   *
   * If the `itemId` does not correspond to any item, it returns `false`.
   *
   * @param itemId The id of the item to check.
   */
  isExpanded(itemId) {
    const item = this._getItem(itemId);
    return item ? !item.collapsed : false;
  }
  /**
   * It checks, if the item can be expanded in the current state of the accordion.
   * With `closeOthers` there can be only one expanded item at a time.
   *
   * @internal
   */
  _ensureCanExpand(toExpand) {
    if (!this.closeOthers) {
      return true;
    }
    if (!this._items) {
      if (!this._anItemWasAlreadyExpandedDuringInitialisation) {
        this._anItemWasAlreadyExpandedDuringInitialisation = true;
        return true;
      }
      return false;
    }
    this._items.find((item) => !item.collapsed && toExpand !== item)?.collapse();
    return true;
  }
  _getItem(itemId) {
    return this._items?.find((item) => item.id === itemId);
  }
  static {
    this.ɵfac = function NgbAccordionDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbAccordionDirective,
      selectors: [["", "ngbAccordion", ""]],
      contentQueries: function NgbAccordionDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbAccordionItem, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._items = _t);
        }
      },
      hostAttrs: [1, "accordion"],
      inputs: {
        animation: "animation",
        closeOthers: "closeOthers",
        destroyOnHide: "destroyOnHide"
      },
      outputs: {
        show: "show",
        shown: "shown",
        hide: "hide",
        hidden: "hidden"
      },
      exportAs: ["ngbAccordion"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionDirective, [{
    type: Directive,
    args: [{
      selector: "[ngbAccordion]",
      exportAs: "ngbAccordion",
      host: {
        class: "accordion"
      }
    }]
  }], null, {
    _items: [{
      type: ContentChildren,
      args: [NgbAccordionItem, {
        descendants: false
      }]
    }],
    animation: [{
      type: Input
    }],
    closeOthers: [{
      type: Input
    }],
    destroyOnHide: [{
      type: Input
    }],
    show: [{
      type: Output
    }],
    shown: [{
      type: Output
    }],
    hide: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }]
  });
})();
var NGB_ACCORDION_DIRECTIVES = [NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionBody, NgbAccordionCollapse];
var NgbAccordionModule = class _NgbAccordionModule {
  static {
    this.ɵfac = function NgbAccordionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAccordionModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbAccordionModule,
      imports: [NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionBody, NgbAccordionCollapse],
      exports: [NgbAccordionButton, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionBody, NgbAccordionCollapse]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAccordionModule, [{
    type: NgModule,
    args: [{
      imports: NGB_ACCORDION_DIRECTIVES,
      exports: NGB_ACCORDION_DIRECTIVES
    }]
  }], null, null);
})();
var NgbAlertConfig = class _NgbAlertConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.dismissible = true;
    this.type = "warning";
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.ɵfac = function NgbAlertConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAlertConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbAlertConfig,
      factory: _NgbAlertConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAlertConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ngbAlertFadingTransition = ({
  classList
}) => {
  classList.remove("show");
};
var NgbAlert = class _NgbAlert {
  constructor() {
    this._config = inject(NgbAlertConfig);
    this._elementRef = inject(ElementRef);
    this._zone = inject(NgZone);
    this.animation = this._config.animation;
    this.dismissible = this._config.dismissible;
    this.type = this._config.type;
    this.closed = new EventEmitter();
  }
  /**
   * Triggers alert closing programmatically (same as clicking on the close button (×)).
   *
   * The returned observable will emit and be completed once the closing transition has finished.
   * If the animations are turned off this happens synchronously.
   *
   * Alternatively you could listen or subscribe to the `(closed)` output
   *
   * @since 8.0.0
   */
  close() {
    const transition = ngbRunTransition(this._zone, this._elementRef.nativeElement, ngbAlertFadingTransition, {
      animation: this.animation,
      runningTransition: "continue"
    });
    transition.subscribe(() => this.closed.emit());
    return transition;
  }
  static {
    this.ɵfac = function NgbAlert_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAlert)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbAlert,
      selectors: [["ngb-alert"]],
      hostAttrs: ["role", "alert"],
      hostVars: 6,
      hostBindings: function NgbAlert_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap("alert show" + (ctx.type ? " alert-" + ctx.type : ""));
          ɵɵclassProp("fade", ctx.animation)("alert-dismissible", ctx.dismissible);
        }
      },
      inputs: {
        animation: "animation",
        dismissible: "dismissible",
        type: "type"
      },
      outputs: {
        closed: "closed"
      },
      exportAs: ["ngbAlert"],
      ngContentSelectors: _c2,
      decls: 2,
      vars: 1,
      consts: () => {
        let i18n_0;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_0 = goog.getMsg("Close");
          i18n_0 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_0;
        } else {
          i18n_0 = $localize`:@@ngb.alert.close:Close`;
        }
        return [["type", "button", "aria-label", i18n_0, 1, "btn-close"], ["type", "button", "aria-label", i18n_0, 1, "btn-close", 3, "click"]];
      },
      template: function NgbAlert_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
          ɵɵconditionalCreate(1, NgbAlert_Conditional_1_Template, 1, 0, "button", 0);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(ctx.dismissible ? 1 : -1);
        }
      },
      styles: ["ngb-alert{display:block}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAlert, [{
    type: Component,
    args: [{
      selector: "ngb-alert",
      exportAs: "ngbAlert",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        role: "alert",
        "[class]": '"alert show" + (type ? " alert-" + type : "")',
        "[class.fade]": "animation",
        "[class.alert-dismissible]": "dismissible"
      },
      template: `
		<ng-content />
		@if (dismissible) {
			<button
				type="button"
				class="btn-close"
				aria-label="Close"
				i18n-aria-label="@@ngb.alert.close"
				(click)="close()"
			></button>
		}
	`,
      styles: ["ngb-alert{display:block}\n"]
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    dismissible: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    closed: [{
      type: Output
    }]
  });
})();
var NgbAlertModule = class _NgbAlertModule {
  static {
    this.ɵfac = function NgbAlertModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbAlertModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbAlertModule,
      imports: [NgbAlert],
      exports: [NgbAlert]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbAlertModule, [{
    type: NgModule,
    args: [{
      imports: [NgbAlert],
      exports: [NgbAlert]
    }]
  }], null, null);
})();
var NgbCarouselConfig = class _NgbCarouselConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.interval = 5e3;
    this.wrap = true;
    this.keyboard = true;
    this.pauseOnHover = true;
    this.pauseOnFocus = true;
    this.showNavigationArrows = true;
    this.showNavigationIndicators = true;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.ɵfac = function NgbCarouselConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCarouselConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCarouselConfig,
      factory: _NgbCarouselConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCarouselConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbSlideEventDirection;
(function(NgbSlideEventDirection2) {
  NgbSlideEventDirection2["START"] = "start";
  NgbSlideEventDirection2["END"] = "end";
})(NgbSlideEventDirection || (NgbSlideEventDirection = {}));
var isBeingAnimated = ({
  classList
}) => {
  return classList.contains("carousel-item-start") || classList.contains("carousel-item-end");
};
var removeDirectionClasses = (classList) => {
  classList.remove("carousel-item-start", "carousel-item-end");
};
var removeClasses = (classList) => {
  removeDirectionClasses(classList);
  classList.remove("carousel-item-prev", "carousel-item-next");
};
var ngbCarouselTransitionIn = (element, animation, {
  direction
}) => {
  const {
    classList
  } = element;
  if (!animation) {
    removeClasses(classList);
    classList.add("active");
    return;
  }
  if (isBeingAnimated(element)) {
    removeDirectionClasses(classList);
  } else {
    classList.add("carousel-item-" + (direction === NgbSlideEventDirection.START ? "next" : "prev"));
    reflow(element);
    classList.add("carousel-item-" + direction);
  }
  return () => {
    removeClasses(classList);
    classList.add("active");
  };
};
var ngbCarouselTransitionOut = (element, animation, {
  direction
}) => {
  const {
    classList
  } = element;
  if (!animation) {
    removeClasses(classList);
    classList.remove("active");
    return;
  }
  if (isBeingAnimated(element)) {
    removeDirectionClasses(classList);
  } else {
    classList.add("carousel-item-" + direction);
  }
  return () => {
    removeClasses(classList);
    classList.remove("active");
  };
};
var nextId$2 = 0;
var carouselId = 0;
var NgbSlide = class _NgbSlide {
  constructor() {
    this.templateRef = inject(TemplateRef);
    this.id = `ngb-slide-${nextId$2++}`;
    this.slid = new EventEmitter();
  }
  static {
    this.ɵfac = function NgbSlide_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbSlide)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbSlide,
      selectors: [["ng-template", "ngbSlide", ""]],
      inputs: {
        id: "id"
      },
      outputs: {
        slid: "slid"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbSlide, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbSlide]"
    }]
  }], null, {
    id: [{
      type: Input
    }],
    slid: [{
      type: Output
    }]
  });
})();
var NgbCarousel = class _NgbCarousel {
  constructor() {
    this.NgbSlideEventSource = NgbSlideEventSource;
    this._config = inject(NgbCarouselConfig);
    this._platformId = inject(PLATFORM_ID);
    this._ngZone = inject(NgZone);
    this._cd = inject(ChangeDetectorRef);
    this._container = inject(ElementRef);
    this._destroyRef = inject(DestroyRef);
    this._injector = inject(Injector);
    this._interval$ = new BehaviorSubject(this._config.interval);
    this._mouseHover$ = new BehaviorSubject(false);
    this._focused$ = new BehaviorSubject(false);
    this._pauseOnHover$ = new BehaviorSubject(this._config.pauseOnHover);
    this._pauseOnFocus$ = new BehaviorSubject(this._config.pauseOnFocus);
    this._pause$ = new BehaviorSubject(false);
    this._wrap$ = new BehaviorSubject(this._config.wrap);
    this.id = `ngb-carousel-${carouselId++}`;
    this.animation = this._config.animation;
    this.keyboard = this._config.keyboard;
    this.showNavigationArrows = this._config.showNavigationArrows;
    this.showNavigationIndicators = this._config.showNavigationIndicators;
    this.slide = new EventEmitter();
    this.slid = new EventEmitter();
    this._transitionIds = null;
  }
  /**
   * Time in milliseconds before the next slide is shown.
   */
  set interval(value) {
    this._interval$.next(value);
  }
  get interval() {
    return this._interval$.value;
  }
  /**
   * If `true`, will 'wrap' the carousel by switching from the last slide back to the first.
   */
  set wrap(value) {
    this._wrap$.next(value);
  }
  get wrap() {
    return this._wrap$.value;
  }
  /**
   * If `true`, will pause slide switching when mouse cursor hovers the slide.
   *
   * @since 2.2.0
   */
  set pauseOnHover(value) {
    this._pauseOnHover$.next(value);
  }
  get pauseOnHover() {
    return this._pauseOnHover$.value;
  }
  /**
   * If `true`, will pause slide switching when the focus is inside the carousel.
   */
  set pauseOnFocus(value) {
    this._pauseOnFocus$.next(value);
  }
  get pauseOnFocus() {
    return this._pauseOnFocus$.value;
  }
  set mouseHover(value) {
    this._mouseHover$.next(value);
  }
  get mouseHover() {
    return this._mouseHover$.value;
  }
  set focused(value) {
    this._focused$.next(value);
  }
  get focused() {
    return this._focused$.value;
  }
  arrowLeft() {
    this.focus();
    this.prev(NgbSlideEventSource.ARROW_LEFT);
  }
  arrowRight() {
    this.focus();
    this.next(NgbSlideEventSource.ARROW_RIGHT);
  }
  ngAfterContentInit() {
    if (isPlatformBrowser(this._platformId)) {
      this._ngZone.runOutsideAngular(() => {
        const hasNextSlide$ = combineLatest([this.slide.pipe(map((slideEvent) => slideEvent.current), startWith(this.activeId)), this._wrap$, this.slides.changes.pipe(startWith(null))]).pipe(map(([currentSlideId, wrap]) => {
          const slideArr = this.slides.toArray();
          const currentSlideIdx = this._getSlideIdxById(currentSlideId);
          return wrap ? slideArr.length > 1 : currentSlideIdx < slideArr.length - 1;
        }), distinctUntilChanged());
        combineLatest([this._pause$, this._pauseOnHover$, this._mouseHover$, this._pauseOnFocus$, this._focused$, this._interval$, hasNextSlide$]).pipe(map(([pause, pauseOnHover, mouseHover, pauseOnFocus, focused, interval, hasNextSlide]) => pause || pauseOnHover && mouseHover || pauseOnFocus && focused || !hasNextSlide ? 0 : interval), distinctUntilChanged(), switchMap((interval) => interval > 0 ? timer(interval, interval) : NEVER), takeUntilDestroyed(this._destroyRef)).subscribe(() => this._ngZone.run(() => this.next(NgbSlideEventSource.TIMER)));
      });
    }
    this.slides.changes.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => {
      this._transitionIds?.forEach((id) => ngbCompleteTransition(this._getSlideElement(id)));
      this._transitionIds = null;
      this._cd.markForCheck();
      afterNextRender({
        mixedReadWrite: () => {
          for (const {
            id
          } of this.slides) {
            const element = this._getSlideElement(id);
            if (id === this.activeId) {
              element.classList.add("active");
            } else {
              element.classList.remove("active");
            }
          }
        }
      }, {
        injector: this._injector
      });
    });
  }
  ngAfterContentChecked() {
    let activeSlide = this._getSlideById(this.activeId);
    this.activeId = activeSlide ? activeSlide.id : this.slides.length ? this.slides.first.id : "";
  }
  ngAfterViewInit() {
    if (this.activeId) {
      const element = this._getSlideElement(this.activeId);
      if (element) {
        element.classList.add("active");
      }
    }
  }
  /**
   * Navigates to a slide with the specified identifier.
   */
  select(slideId, source) {
    this._cycleToSelected(slideId, this._getSlideEventDirection(this.activeId, slideId), source);
  }
  /**
   * Navigates to the previous slide.
   */
  prev(source) {
    this._cycleToSelected(this._getPrevSlide(this.activeId), NgbSlideEventDirection.END, source);
  }
  /**
   * Navigates to the next slide.
   */
  next(source) {
    this._cycleToSelected(this._getNextSlide(this.activeId), NgbSlideEventDirection.START, source);
  }
  /**
   * Pauses cycling through the slides.
   */
  pause() {
    this._pause$.next(true);
  }
  /**
   * Restarts cycling through the slides from start to end.
   */
  cycle() {
    this._pause$.next(false);
  }
  /**
   * Set the focus on the carousel.
   */
  focus() {
    this._container.nativeElement.focus();
  }
  _cycleToSelected(slideIdx, direction, source) {
    const transitionIds = this._transitionIds;
    if (transitionIds && (transitionIds[0] !== slideIdx || transitionIds[1] !== this.activeId)) {
      return;
    }
    let selectedSlide = this._getSlideById(slideIdx);
    if (selectedSlide && selectedSlide.id !== this.activeId) {
      this._transitionIds = [this.activeId, slideIdx];
      this.slide.emit({
        prev: this.activeId,
        current: selectedSlide.id,
        direction,
        paused: this._pause$.value,
        source
      });
      const options = {
        animation: this.animation,
        runningTransition: "stop",
        context: {
          direction
        }
      };
      const transitions = [];
      const activeSlide = this._getSlideById(this.activeId);
      if (activeSlide) {
        const activeSlideTransition = ngbRunTransition(this._ngZone, this._getSlideElement(activeSlide.id), ngbCarouselTransitionOut, options);
        activeSlideTransition.subscribe(() => {
          activeSlide.slid.emit({
            isShown: false,
            direction,
            source
          });
        });
        transitions.push(activeSlideTransition);
      }
      const previousId = this.activeId;
      this.activeId = selectedSlide.id;
      const nextSlide = this._getSlideById(this.activeId);
      const transition = ngbRunTransition(this._ngZone, this._getSlideElement(selectedSlide.id), ngbCarouselTransitionIn, options);
      transition.subscribe(() => {
        nextSlide?.slid.emit({
          isShown: true,
          direction,
          source
        });
      });
      transitions.push(transition);
      zip(...transitions).pipe(take(1)).subscribe(() => {
        this._transitionIds = null;
        this.slid.emit({
          prev: previousId,
          current: selectedSlide.id,
          direction,
          paused: this._pause$.value,
          source
        });
      });
    }
    this._cd.markForCheck();
  }
  _getSlideEventDirection(currentActiveSlideId, nextActiveSlideId) {
    const currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);
    const nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);
    return currentActiveSlideIdx > nextActiveSlideIdx ? NgbSlideEventDirection.END : NgbSlideEventDirection.START;
  }
  _getSlideById(slideId) {
    return this.slides.find((slide) => slide.id === slideId) || null;
  }
  _getSlideIdxById(slideId) {
    const slide = this._getSlideById(slideId);
    return slide != null ? this.slides.toArray().indexOf(slide) : -1;
  }
  _getNextSlide(currentSlideId) {
    const slideArr = this.slides.toArray();
    const currentSlideIdx = this._getSlideIdxById(currentSlideId);
    const isLastSlide = currentSlideIdx === slideArr.length - 1;
    return isLastSlide ? this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id : slideArr[currentSlideIdx + 1].id;
  }
  _getPrevSlide(currentSlideId) {
    const slideArr = this.slides.toArray();
    const currentSlideIdx = this._getSlideIdxById(currentSlideId);
    const isFirstSlide = currentSlideIdx === 0;
    return isFirstSlide ? this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id : slideArr[currentSlideIdx - 1].id;
  }
  _getSlideElement(slideId) {
    return this._container.nativeElement.querySelector(`#slide-${slideId}`);
  }
  static {
    this.ɵfac = function NgbCarousel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCarousel)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbCarousel,
      selectors: [["ngb-carousel"]],
      contentQueries: function NgbCarousel_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbSlide, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slides = _t);
        }
      },
      hostAttrs: ["tabIndex", "0", 1, "carousel", "slide"],
      hostVars: 2,
      hostBindings: function NgbCarousel_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.arrowLeft", function NgbCarousel_keydown_arrowLeft_HostBindingHandler() {
            return ctx.keyboard && ctx.arrowLeft();
          })("keydown.arrowRight", function NgbCarousel_keydown_arrowRight_HostBindingHandler() {
            return ctx.keyboard && ctx.arrowRight();
          })("mouseenter", function NgbCarousel_mouseenter_HostBindingHandler() {
            return ctx.mouseHover = true;
          })("mouseleave", function NgbCarousel_mouseleave_HostBindingHandler() {
            return ctx.mouseHover = false;
          })("focusin", function NgbCarousel_focusin_HostBindingHandler() {
            return ctx.focused = true;
          })("focusout", function NgbCarousel_focusout_HostBindingHandler() {
            return ctx.focused = false;
          });
        }
        if (rf & 2) {
          ɵɵstyleProp("display", "block");
        }
      },
      inputs: {
        animation: "animation",
        activeId: "activeId",
        interval: "interval",
        wrap: "wrap",
        keyboard: "keyboard",
        pauseOnHover: "pauseOnHover",
        pauseOnFocus: "pauseOnFocus",
        showNavigationArrows: "showNavigationArrows",
        showNavigationIndicators: "showNavigationIndicators"
      },
      outputs: {
        slide: "slide",
        slid: "slid"
      },
      exportAs: ["ngbCarousel"],
      decls: 7,
      vars: 3,
      consts: () => {
        let i18n_1;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_1 = goog.getMsg(" Slide {$interpolation} of {$interpolation_1} ", {
            "interpolation": "�0�",
            "interpolation_1": "�1�"
          }, {
            original_code: {
              "interpolation": "{{ i + 1 }}",
              "interpolation_1": "{{ c }}"
            }
          });
          i18n_1 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_1;
        } else {
          i18n_1 = $localize`:Currently selected slide number read by screen reader@@ngb.carousel.slide-number: Slide ${"�0�"}:INTERPOLATION: of ${"�1�"}:INTERPOLATION_1: `;
        }
        let i18n_2;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_2 = goog.getMsg("Previous");
          i18n_2 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_2;
        } else {
          i18n_2 = $localize`:@@ngb.carousel.previous:Previous`;
        }
        let i18n_3;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_3 = goog.getMsg("Next");
          i18n_3 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_3;
        } else {
          i18n_3 = $localize`:@@ngb.carousel.next:Next`;
        }
        return [i18n_1, i18n_2, i18n_3, ["role", "tablist", 1, "carousel-indicators"], ["type", "button", "data-bs-target", "", "role", "tab", 3, "active"], [1, "carousel-inner"], ["role", "tabpanel", 1, "carousel-item", 3, "id"], ["type", "button", "data-bs-target", "", "role", "tab", 3, "click"], [1, "visually-hidden"], [3, "ngTemplateOutlet"], ["type", "button", 1, "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden", 3, "id"], ["type", "button", 1, "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]];
      },
      template: function NgbCarousel_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 3);
          ɵɵrepeaterCreate(1, NgbCarousel_For_2_Template, 1, 5, "button", 4, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd();
          ɵɵelementStart(3, "div", 5);
          ɵɵrepeaterCreate(4, NgbCarousel_For_5_Template, 4, 4, "div", 6, ɵɵrepeaterTrackByIdentity);
          ɵɵelementEnd();
          ɵɵconditionalCreate(6, NgbCarousel_Conditional_6_Template, 8, 4);
        }
        if (rf & 2) {
          ɵɵclassProp("visually-hidden", !ctx.showNavigationIndicators);
          ɵɵadvance();
          ɵɵrepeater(ctx.slides);
          ɵɵadvance(3);
          ɵɵrepeater(ctx.slides);
          ɵɵadvance(2);
          ɵɵconditional(ctx.showNavigationArrows ? 6 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCarousel, [{
    type: Component,
    args: [{
      selector: "ngb-carousel",
      exportAs: "ngbCarousel",
      imports: [NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "carousel slide",
        "[style.display]": '"block"',
        tabIndex: "0",
        "(keydown.arrowLeft)": "keyboard && arrowLeft()",
        "(keydown.arrowRight)": "keyboard && arrowRight()",
        "(mouseenter)": "mouseHover = true",
        "(mouseleave)": "mouseHover = false",
        "(focusin)": "focused = true",
        "(focusout)": "focused = false"
      },
      template: `
		<div class="carousel-indicators" [class.visually-hidden]="!showNavigationIndicators" role="tablist">
			@for (slide of slides; track slide) {
				<button
					type="button"
					data-bs-target
					[class.active]="slide.id === activeId"
					role="tab"
					[attr.aria-labelledby]="'slide-' + slide.id"
					[attr.aria-controls]="'slide-' + slide.id"
					[attr.aria-selected]="slide.id === activeId"
					(click)="focus(); select(slide.id, NgbSlideEventSource.INDICATOR)"
				></button>
			}
		</div>
		<div class="carousel-inner">
			@for (slide of slides; track slide; let i = $index; let c = $count) {
				<div class="carousel-item" [id]="'slide-' + slide.id" role="tabpanel">
					<span
						class="visually-hidden"
						i18n="Currently selected slide number read by screen reader@@ngb.carousel.slide-number"
					>
						Slide {{ i + 1 }} of {{ c }}
					</span>
					<ng-template [ngTemplateOutlet]="slide.templateRef" />
				</div>
			}
		</div>
		@if (showNavigationArrows) {
			<button
				class="carousel-control-prev"
				type="button"
				(click)="arrowLeft()"
				[attr.aria-labelledby]="id + '-previous'"
			>
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden" i18n="@@ngb.carousel.previous" [id]="id + '-previous'">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" (click)="arrowRight()" [attr.aria-labelledby]="id + '-next'">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden" i18n="@@ngb.carousel.next" [id]="id + '-next'">Next</span>
			</button>
		}
	`
    }]
  }], null, {
    slides: [{
      type: ContentChildren,
      args: [NgbSlide]
    }],
    animation: [{
      type: Input
    }],
    activeId: [{
      type: Input
    }],
    interval: [{
      type: Input
    }],
    wrap: [{
      type: Input
    }],
    keyboard: [{
      type: Input
    }],
    pauseOnHover: [{
      type: Input
    }],
    pauseOnFocus: [{
      type: Input
    }],
    showNavigationArrows: [{
      type: Input
    }],
    showNavigationIndicators: [{
      type: Input
    }],
    slide: [{
      type: Output
    }],
    slid: [{
      type: Output
    }]
  });
})();
var NgbSlideEventSource;
(function(NgbSlideEventSource2) {
  NgbSlideEventSource2["TIMER"] = "timer";
  NgbSlideEventSource2["ARROW_LEFT"] = "arrowLeft";
  NgbSlideEventSource2["ARROW_RIGHT"] = "arrowRight";
  NgbSlideEventSource2["INDICATOR"] = "indicator";
})(NgbSlideEventSource || (NgbSlideEventSource = {}));
var NgbCarouselModule = class _NgbCarouselModule {
  static {
    this.ɵfac = function NgbCarouselModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCarouselModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbCarouselModule,
      imports: [NgbCarousel, NgbSlide],
      exports: [NgbCarousel, NgbSlide]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCarouselModule, [{
    type: NgModule,
    args: [{
      imports: [NgbCarousel, NgbSlide],
      exports: [NgbCarousel, NgbSlide]
    }]
  }], null, null);
})();
var NgbCollapseModule = class _NgbCollapseModule {
  static {
    this.ɵfac = function NgbCollapseModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCollapseModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbCollapseModule,
      imports: [NgbCollapse],
      exports: [NgbCollapse]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCollapseModule, [{
    type: NgModule,
    args: [{
      imports: [NgbCollapse],
      exports: [NgbCollapse]
    }]
  }], null, null);
})();
var NgbDate = class _NgbDate {
  /**
   * A **static method** that creates a new date object from the `NgbDateStruct`,
   *
   * ex. `NgbDate.from({year: 2000, month: 5, day: 1})`.
   *
   * If the `date` is already of `NgbDate` type, the method will return the same object.
   */
  static from(date) {
    if (date instanceof _NgbDate) {
      return date;
    }
    return date ? new _NgbDate(date.year, date.month, date.day) : null;
  }
  constructor(year, month, day) {
    this.year = isInteger(year) ? year : null;
    this.month = isInteger(month) ? month : null;
    this.day = isInteger(day) ? day : null;
  }
  /**
   * Checks if the current date is equal to another date.
   */
  equals(other) {
    return other != null && this.year === other.year && this.month === other.month && this.day === other.day;
  }
  /**
   * Checks if the current date is before another date.
   */
  before(other) {
    if (!other) {
      return false;
    }
    if (this.year === other.year) {
      if (this.month === other.month) {
        return this.day === other.day ? false : this.day < other.day;
      } else {
        return this.month < other.month;
      }
    } else {
      return this.year < other.year;
    }
  }
  /**
   * Checks if the current date is after another date.
   */
  after(other) {
    if (!other) {
      return false;
    }
    if (this.year === other.year) {
      if (this.month === other.month) {
        return this.day === other.day ? false : this.day > other.day;
      } else {
        return this.month > other.month;
      }
    } else {
      return this.year > other.year;
    }
  }
};
function fromJSDate(jsDate) {
  return new NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
function toJSDate(date) {
  const jsDate = new Date(date.year, date.month - 1, date.day, 12);
  if (!isNaN(jsDate.getTime())) {
    jsDate.setFullYear(date.year);
  }
  return jsDate;
}
function NGB_DATEPICKER_CALENDAR_FACTORY() {
  return new NgbCalendarGregorian();
}
var NgbCalendar = class _NgbCalendar {
  static {
    this.ɵfac = function NgbCalendar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbCalendar)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendar,
      factory: () => NGB_DATEPICKER_CALENDAR_FACTORY(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendar, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: NGB_DATEPICKER_CALENDAR_FACTORY
    }]
  }], null, null);
})();
var NgbCalendarGregorian = class _NgbCalendarGregorian extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
  getWeeksPerMonth() {
    return 6;
  }
  getNext(date, period = "d", number = 1) {
    let jsDate = toJSDate(date);
    let checkMonth = true;
    let expectedMonth = jsDate.getMonth();
    switch (period) {
      case "y":
        jsDate.setFullYear(jsDate.getFullYear() + number);
        break;
      case "m":
        expectedMonth += number;
        jsDate.setMonth(expectedMonth);
        expectedMonth = expectedMonth % 12;
        if (expectedMonth < 0) {
          expectedMonth = expectedMonth + 12;
        }
        break;
      case "d":
        jsDate.setDate(jsDate.getDate() + number);
        checkMonth = false;
        break;
      default:
        return date;
    }
    if (checkMonth && jsDate.getMonth() !== expectedMonth) {
      jsDate.setDate(0);
    }
    return fromJSDate(jsDate);
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    let jsDate = toJSDate(date);
    let day = jsDate.getDay();
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    let date = week[thursdayIndex];
    const jsDate = toJSDate(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7));
    const time = jsDate.getTime();
    jsDate.setMonth(0);
    jsDate.setDate(1);
    return Math.floor(Math.round((time - jsDate.getTime()) / 864e5) / 7) + 1;
  }
  getToday() {
    return fromJSDate(/* @__PURE__ */ new Date());
  }
  isValid(date) {
    if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
      return false;
    }
    if (date.year === 0) {
      return false;
    }
    const jsDate = toJSDate(date);
    return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month && jsDate.getDate() === date.day;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbCalendarGregorian_BaseFactory;
      return function NgbCalendarGregorian_Factory(__ngFactoryType__) {
        return (ɵNgbCalendarGregorian_BaseFactory || (ɵNgbCalendarGregorian_BaseFactory = ɵɵgetInheritedFactory(_NgbCalendarGregorian)))(__ngFactoryType__ || _NgbCalendarGregorian);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendarGregorian,
      factory: _NgbCalendarGregorian.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarGregorian, [{
    type: Injectable
  }], null, null);
})();
function isChangedDate(prev, next) {
  return !dateComparator(prev, next);
}
function isChangedMonth(prev, next) {
  return !prev && !next ? false : !prev || !next ? true : prev.year !== next.year || prev.month !== next.month;
}
function dateComparator(prev, next) {
  return !prev && !next || !!prev && !!next && prev.equals(next);
}
function checkMinBeforeMax(minDate, maxDate) {
  if (maxDate && minDate && maxDate.before(minDate)) {
    throw new Error(`'maxDate' ${maxDate} should be greater than 'minDate' ${minDate}`);
  }
}
function checkDateInRange(date, minDate, maxDate) {
  if (date && minDate && date.before(minDate)) {
    return minDate;
  }
  if (date && maxDate && date.after(maxDate)) {
    return maxDate;
  }
  return date || null;
}
function isDateSelectable(date, state) {
  const {
    minDate,
    maxDate,
    disabled,
    markDisabled
  } = state;
  return !(date === null || date === void 0 || disabled || markDisabled && markDisabled(date, {
    year: date.year,
    month: date.month
  }) || minDate && date.before(minDate) || maxDate && date.after(maxDate));
}
function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
  if (!date) {
    return [];
  }
  let months = calendar.getMonths(date.year);
  if (minDate && date.year === minDate.year) {
    const index = months.findIndex((month) => month === minDate.month);
    months = months.slice(index);
  }
  if (maxDate && date.year === maxDate.year) {
    const index = months.findIndex((month) => month === maxDate.month);
    months = months.slice(0, index + 1);
  }
  return months;
}
function generateSelectBoxYears(date, minDate, maxDate) {
  if (!date) {
    return [];
  }
  const start2 = minDate ? Math.max(minDate.year, date.year - 500) : date.year - 10;
  const end2 = maxDate ? Math.min(maxDate.year, date.year + 500) : date.year + 10;
  const length = end2 - start2 + 1;
  const numbers = Array(length);
  for (let i = 0; i < length; i++) {
    numbers[i] = start2 + i;
  }
  return numbers;
}
function nextMonthDisabled(calendar, date, maxDate) {
  const nextDate = Object.assign(calendar.getNext(date, "m"), {
    day: 1
  });
  return maxDate != null && nextDate.after(maxDate);
}
function prevMonthDisabled(calendar, date, minDate) {
  const prevDate = Object.assign(calendar.getPrev(date, "m"), {
    day: 1
  });
  return minDate != null && (prevDate.year === minDate.year && prevDate.month < minDate.month || prevDate.year < minDate.year && minDate.month === 1);
}
function buildMonths(calendar, date, state, i18n, force) {
  const {
    displayMonths,
    months
  } = state;
  const monthsToReuse = months.splice(0, months.length);
  const firstDates = Array.from({
    length: displayMonths
  }, (_, i) => {
    const firstDate = Object.assign(calendar.getNext(date, "m", i), {
      day: 1
    });
    months[i] = null;
    if (!force) {
      const reusedIndex = monthsToReuse.findIndex((month) => month.firstDate.equals(firstDate));
      if (reusedIndex !== -1) {
        months[i] = monthsToReuse.splice(reusedIndex, 1)[0];
      }
    }
    return firstDate;
  });
  firstDates.forEach((firstDate, i) => {
    if (months[i] === null) {
      months[i] = buildMonth(calendar, firstDate, state, i18n, monthsToReuse.shift() || {});
    }
  });
  return months;
}
function buildMonth(calendar, date, state, i18n, month = {}) {
  const {
    dayTemplateData,
    minDate,
    maxDate,
    firstDayOfWeek,
    markDisabled,
    outsideDays,
    weekdayWidth,
    weekdaysVisible
  } = state;
  const calendarToday = calendar.getToday();
  month.firstDate = null;
  month.lastDate = null;
  month.number = date.month;
  month.year = date.year;
  month.weeks = month.weeks || [];
  month.weekdays = month.weekdays || [];
  date = getFirstViewDate(calendar, date, firstDayOfWeek);
  if (!weekdaysVisible) {
    month.weekdays.length = 0;
  }
  for (let week = 0; week < calendar.getWeeksPerMonth(); week++) {
    let weekObject = month.weeks[week];
    if (!weekObject) {
      weekObject = month.weeks[week] = {
        number: 0,
        days: [],
        collapsed: true
      };
    }
    const days = weekObject.days;
    for (let day = 0; day < calendar.getDaysPerWeek(); day++) {
      if (week === 0 && weekdaysVisible) {
        month.weekdays[day] = i18n.getWeekdayLabel(calendar.getWeekday(date), weekdayWidth);
      }
      const newDate = new NgbDate(date.year, date.month, date.day);
      const nextDate = calendar.getNext(newDate);
      const ariaLabel = i18n.getDayAriaLabel(newDate);
      let disabled = !!(minDate && newDate.before(minDate) || maxDate && newDate.after(maxDate));
      if (!disabled && markDisabled) {
        disabled = markDisabled(newDate, {
          month: month.number,
          year: month.year
        });
      }
      let today = newDate.equals(calendarToday);
      let contextUserData = dayTemplateData ? dayTemplateData(newDate, {
        month: month.number,
        year: month.year
      }) : void 0;
      if (month.firstDate === null && newDate.month === month.number) {
        month.firstDate = newDate;
      }
      if (newDate.month === month.number && nextDate.month !== month.number) {
        month.lastDate = newDate;
      }
      let dayObject = days[day];
      if (!dayObject) {
        dayObject = days[day] = {};
      }
      dayObject.date = newDate;
      dayObject.context = Object.assign(dayObject.context || {}, {
        $implicit: newDate,
        date: newDate,
        data: contextUserData,
        currentMonth: month.number,
        currentYear: month.year,
        disabled,
        focused: false,
        selected: false,
        today
      });
      dayObject.tabindex = -1;
      dayObject.ariaLabel = ariaLabel;
      dayObject.hidden = false;
      date = nextDate;
    }
    weekObject.number = calendar.getWeekNumber(days.map((day) => day.date), firstDayOfWeek);
    weekObject.collapsed = outsideDays === "collapsed" && days[0].date.month !== month.number && days[days.length - 1].date.month !== month.number;
  }
  return month;
}
function getFirstViewDate(calendar, date, firstDayOfWeek) {
  const daysPerWeek = calendar.getDaysPerWeek();
  const firstMonthDate = new NgbDate(date.year, date.month, 1);
  const dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
  return calendar.getPrev(firstMonthDate, "d", (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
}
var NgbDatepickerI18n = class _NgbDatepickerI18n {
  /**
   * Returns the text label to display above the day view.
   *
   * @since 9.1.0
   */
  getMonthLabel(date) {
    return `${this.getMonthFullName(date.month, date.year)} ${this.getYearNumerals(date.year)}`;
  }
  /**
   * Returns the textual representation of a day that is rendered in a day cell.
   *
   * @since 3.0.0
   */
  getDayNumerals(date) {
    return `${date.day}`;
  }
  /**
   * Returns the textual representation of a week number rendered by datepicker.
   *
   * @since 3.0.0
   */
  getWeekNumerals(weekNumber) {
    return `${weekNumber}`;
  }
  /**
   * Returns the textual representation of a year that is rendered in the datepicker year select box.
   *
   * @since 3.0.0
   */
  getYearNumerals(year) {
    return `${year}`;
  }
  /**
   * Returns the week label to display in the heading of the month view.
   *
   * @since 9.1.0
   */
  getWeekLabel() {
    return "";
  }
  static {
    this.ɵfac = function NgbDatepickerI18n_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerI18n)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDatepickerI18n,
      factory: () => (() => new NgbDatepickerI18nDefault())(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerI18n, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new NgbDatepickerI18nDefault()
    }]
  }], null, null);
})();
var NgbDatepickerI18nDefault = class _NgbDatepickerI18nDefault extends NgbDatepickerI18n {
  constructor() {
    super(...arguments);
    this._locale = inject(LOCALE_ID);
    this._monthsShort = [...Array(12).keys()].map((month) => Intl.DateTimeFormat(this._locale, {
      month: "short",
      timeZone: "UTC"
    }).format(Date.UTC(2e3, month)));
    this._monthsFull = [...Array(12).keys()].map((month) => Intl.DateTimeFormat(this._locale, {
      month: "long",
      timeZone: "UTC"
    }).format(Date.UTC(2e3, month)));
  }
  getWeekdayLabel(weekday, width = "narrow") {
    const weekdays = [1, 2, 3, 4, 5, 6, 7].map((day) => Intl.DateTimeFormat(this._locale, {
      weekday: width,
      timeZone: "UTC"
    }).format(Date.UTC(2e3, 4, day)));
    return weekdays[weekday - 1] || "";
  }
  getMonthShortName(month) {
    return this._monthsShort[month - 1] || "";
  }
  getMonthFullName(month) {
    return this._monthsFull[month - 1] || "";
  }
  getDayAriaLabel(date) {
    const jsDate = new Date(date.year, date.month - 1, date.day);
    return formatDate(jsDate, "fullDate", this._locale);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbDatepickerI18nDefault_BaseFactory;
      return function NgbDatepickerI18nDefault_Factory(__ngFactoryType__) {
        return (ɵNgbDatepickerI18nDefault_BaseFactory || (ɵNgbDatepickerI18nDefault_BaseFactory = ɵɵgetInheritedFactory(_NgbDatepickerI18nDefault)))(__ngFactoryType__ || _NgbDatepickerI18nDefault);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDatepickerI18nDefault,
      factory: _NgbDatepickerI18nDefault.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerI18nDefault, [{
    type: Injectable
  }], null, null);
})();
var NgbDatepickerService = class _NgbDatepickerService {
  constructor() {
    this._VALIDATORS = {
      dayTemplateData: (dayTemplateData) => {
        if (this._state.dayTemplateData !== dayTemplateData) {
          return {
            dayTemplateData
          };
        }
      },
      displayMonths: (displayMonths) => {
        displayMonths = toInteger(displayMonths);
        if (isInteger(displayMonths) && displayMonths > 0 && this._state.displayMonths !== displayMonths) {
          return {
            displayMonths
          };
        }
      },
      disabled: (disabled) => {
        if (this._state.disabled !== disabled) {
          return {
            disabled
          };
        }
      },
      firstDayOfWeek: (firstDayOfWeek) => {
        firstDayOfWeek = toInteger(firstDayOfWeek);
        if (isInteger(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
          return {
            firstDayOfWeek
          };
        }
      },
      focusVisible: (focusVisible) => {
        if (this._state.focusVisible !== focusVisible && !this._state.disabled) {
          return {
            focusVisible
          };
        }
      },
      markDisabled: (markDisabled) => {
        if (this._state.markDisabled !== markDisabled) {
          return {
            markDisabled
          };
        }
      },
      maxDate: (date) => {
        const maxDate = this.toValidDate(date, null);
        if (isChangedDate(this._state.maxDate, maxDate)) {
          return {
            maxDate
          };
        }
      },
      minDate: (date) => {
        const minDate = this.toValidDate(date, null);
        if (isChangedDate(this._state.minDate, minDate)) {
          return {
            minDate
          };
        }
      },
      navigation: (navigation) => {
        if (this._state.navigation !== navigation) {
          return {
            navigation
          };
        }
      },
      outsideDays: (outsideDays) => {
        if (this._state.outsideDays !== outsideDays) {
          return {
            outsideDays
          };
        }
      },
      weekdays: (weekdays) => {
        const weekdayWidth = weekdays === true || weekdays === false ? "narrow" : weekdays;
        const weekdaysVisible = weekdays === true || weekdays === false ? weekdays : true;
        if (this._state.weekdayWidth !== weekdayWidth || this._state.weekdaysVisible !== weekdaysVisible) {
          return {
            weekdayWidth,
            weekdaysVisible
          };
        }
      }
    };
    this._calendar = inject(NgbCalendar);
    this._i18n = inject(NgbDatepickerI18n);
    this._model$ = new Subject();
    this._dateSelect$ = new Subject();
    this._state = {
      dayTemplateData: null,
      markDisabled: null,
      maxDate: null,
      minDate: null,
      disabled: false,
      displayMonths: 1,
      firstDate: null,
      firstDayOfWeek: 1,
      lastDate: null,
      focusDate: null,
      focusVisible: false,
      months: [],
      navigation: "select",
      outsideDays: "visible",
      prevDisabled: false,
      nextDisabled: false,
      selectedDate: null,
      selectBoxes: {
        years: [],
        months: []
      },
      weekdayWidth: "narrow",
      weekdaysVisible: true
    };
  }
  get model$() {
    return this._model$.pipe(filter((model) => model.months.length > 0));
  }
  get dateSelect$() {
    return this._dateSelect$.pipe(filter((date) => date !== null));
  }
  set(options) {
    let patch = Object.keys(options).map((key) => this._VALIDATORS[key](options[key])).reduce((obj, part) => __spreadValues(__spreadValues({}, obj), part), {});
    if (Object.keys(patch).length > 0) {
      this._nextState(patch);
    }
  }
  focus(date) {
    const focusedDate = this.toValidDate(date, null);
    if (focusedDate != null && !this._state.disabled && isChangedDate(this._state.focusDate, focusedDate)) {
      this._nextState({
        focusDate: date
      });
    }
  }
  focusSelect() {
    if (isDateSelectable(this._state.focusDate, this._state)) {
      this.select(this._state.focusDate, {
        emitEvent: true
      });
    }
  }
  open(date) {
    const firstDate = this.toValidDate(date, this._calendar.getToday());
    if (firstDate != null && !this._state.disabled && (!this._state.firstDate || isChangedMonth(this._state.firstDate, firstDate))) {
      this._nextState({
        firstDate
      });
    }
  }
  select(date, options = {}) {
    const selectedDate = this.toValidDate(date, null);
    if (selectedDate != null && !this._state.disabled) {
      if (isChangedDate(this._state.selectedDate, selectedDate)) {
        this._nextState({
          selectedDate
        });
      }
      if (options.emitEvent && isDateSelectable(selectedDate, this._state)) {
        this._dateSelect$.next(selectedDate);
      }
    }
  }
  toValidDate(date, defaultValue) {
    const ngbDate = NgbDate.from(date);
    if (defaultValue === void 0) {
      defaultValue = this._calendar.getToday();
    }
    return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
  }
  getMonth(struct) {
    for (let month of this._state.months) {
      if (struct.month === month.number && struct.year === month.year) {
        return month;
      }
    }
    throw new Error(`month ${struct.month} of year ${struct.year} not found`);
  }
  _nextState(patch) {
    const newState = this._updateState(patch);
    this._patchContexts(newState);
    this._state = newState;
    this._model$.next(this._state);
  }
  _patchContexts(state) {
    const {
      months,
      displayMonths,
      selectedDate,
      focusDate,
      focusVisible,
      disabled,
      outsideDays
    } = state;
    state.months.forEach((month) => {
      month.weeks.forEach((week) => {
        week.days.forEach((day) => {
          if (focusDate) {
            day.context.focused = focusDate.equals(day.date) && focusVisible;
          }
          day.tabindex = !disabled && focusDate && day.date.equals(focusDate) && focusDate.month === month.number ? 0 : -1;
          if (disabled === true) {
            day.context.disabled = true;
          }
          if (selectedDate !== void 0) {
            day.context.selected = selectedDate !== null && selectedDate.equals(day.date);
          }
          if (month.number !== day.date.month) {
            day.hidden = outsideDays === "hidden" || outsideDays === "collapsed" || displayMonths > 1 && day.date.after(months[0].firstDate) && day.date.before(months[displayMonths - 1].lastDate);
          }
        });
      });
    });
  }
  _updateState(patch) {
    const state = Object.assign({}, this._state, patch);
    let startDate = state.firstDate;
    if ("minDate" in patch || "maxDate" in patch) {
      checkMinBeforeMax(state.minDate, state.maxDate);
      state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
      state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
      startDate = state.focusDate;
    }
    if ("disabled" in patch) {
      state.focusVisible = false;
    }
    if ("selectedDate" in patch && this._state.months.length === 0) {
      startDate = state.selectedDate;
    }
    if ("focusVisible" in patch) {
      return state;
    }
    if ("focusDate" in patch) {
      state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
      startDate = state.focusDate;
      if (state.months.length !== 0 && state.focusDate && !state.focusDate.before(state.firstDate) && !state.focusDate.after(state.lastDate)) {
        return state;
      }
    }
    if ("firstDate" in patch) {
      state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
      startDate = state.firstDate;
    }
    if (startDate) {
      const forceRebuild = "dayTemplateData" in patch || "firstDayOfWeek" in patch || "markDisabled" in patch || "minDate" in patch || "maxDate" in patch || "disabled" in patch || "outsideDays" in patch || "weekdaysVisible" in patch;
      const months = buildMonths(this._calendar, startDate, state, this._i18n, forceRebuild);
      state.months = months;
      state.firstDate = months[0].firstDate;
      state.lastDate = months[months.length - 1].lastDate;
      if ("selectedDate" in patch && !isDateSelectable(state.selectedDate, state)) {
        state.selectedDate = null;
      }
      if ("firstDate" in patch) {
        if (!state.focusDate || state.focusDate.before(state.firstDate) || state.focusDate.after(state.lastDate)) {
          state.focusDate = startDate;
        }
      }
      const yearChanged = !this._state.firstDate || this._state.firstDate.year !== state.firstDate.year;
      const monthChanged = !this._state.firstDate || this._state.firstDate.month !== state.firstDate.month;
      if (state.navigation === "select") {
        if ("minDate" in patch || "maxDate" in patch || state.selectBoxes.years.length === 0 || yearChanged) {
          state.selectBoxes.years = generateSelectBoxYears(state.firstDate, state.minDate, state.maxDate);
        }
        if ("minDate" in patch || "maxDate" in patch || state.selectBoxes.months.length === 0 || yearChanged) {
          state.selectBoxes.months = generateSelectBoxMonths(this._calendar, state.firstDate, state.minDate, state.maxDate);
        }
      } else {
        state.selectBoxes = {
          years: [],
          months: []
        };
      }
      if ((state.navigation === "arrows" || state.navigation === "select") && (monthChanged || yearChanged || "minDate" in patch || "maxDate" in patch || "disabled" in patch)) {
        state.prevDisabled = state.disabled || prevMonthDisabled(this._calendar, state.firstDate, state.minDate);
        state.nextDisabled = state.disabled || nextMonthDisabled(this._calendar, state.lastDate, state.maxDate);
      }
    }
    return state;
  }
  static {
    this.ɵfac = function NgbDatepickerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDatepickerService,
      factory: _NgbDatepickerService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerService, [{
    type: Injectable
  }], null, null);
})();
var NavigationEvent;
(function(NavigationEvent2) {
  NavigationEvent2[NavigationEvent2["PREV"] = 0] = "PREV";
  NavigationEvent2[NavigationEvent2["NEXT"] = 1] = "NEXT";
})(NavigationEvent || (NavigationEvent = {}));
var NgbDatepickerConfig = class _NgbDatepickerConfig {
  constructor() {
    this.displayMonths = 1;
    this.firstDayOfWeek = 1;
    this.navigation = "select";
    this.outsideDays = "visible";
    this.showWeekNumbers = false;
    this.weekdays = "narrow";
  }
  static {
    this.ɵfac = function NgbDatepickerConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDatepickerConfig,
      factory: _NgbDatepickerConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function NGB_DATEPICKER_DATE_ADAPTER_FACTORY() {
  return new NgbDateStructAdapter();
}
var NgbDateAdapter = class _NgbDateAdapter {
  static {
    this.ɵfac = function NgbDateAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDateAdapter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDateAdapter,
      factory: () => NGB_DATEPICKER_DATE_ADAPTER_FACTORY(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateAdapter, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY
    }]
  }], null, null);
})();
var NgbDateStructAdapter = class _NgbDateStructAdapter extends NgbDateAdapter {
  /**
   * Converts a NgbDateStruct value into NgbDateStruct value
   */
  fromModel(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? {
      year: date.year,
      month: date.month,
      day: date.day
    } : null;
  }
  /**
   * Converts a NgbDateStruct value into NgbDateStruct value
   */
  toModel(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? {
      year: date.year,
      month: date.month,
      day: date.day
    } : null;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbDateStructAdapter_BaseFactory;
      return function NgbDateStructAdapter_Factory(__ngFactoryType__) {
        return (ɵNgbDateStructAdapter_BaseFactory || (ɵNgbDateStructAdapter_BaseFactory = ɵɵgetInheritedFactory(_NgbDateStructAdapter)))(__ngFactoryType__ || _NgbDateStructAdapter);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDateStructAdapter,
      factory: _NgbDateStructAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateStructAdapter, [{
    type: Injectable
  }], null, null);
})();
var NgbDatepickerKeyboardService = class _NgbDatepickerKeyboardService {
  /**
   * Processes a keyboard event.
   */
  processKey(event, datepicker) {
    const {
      state,
      calendar
    } = datepicker;
    switch (event.key) {
      case "PageUp":
        datepicker.focusDate(calendar.getPrev(state.focusedDate, event.shiftKey ? "y" : "m", 1));
        break;
      case "PageDown":
        datepicker.focusDate(calendar.getNext(state.focusedDate, event.shiftKey ? "y" : "m", 1));
        break;
      case "End":
        datepicker.focusDate(event.shiftKey ? state.maxDate : state.lastDate);
        break;
      case "Home":
        datepicker.focusDate(event.shiftKey ? state.minDate : state.firstDate);
        break;
      case "ArrowLeft":
        datepicker.focusDate(calendar.getPrev(state.focusedDate, "d", 1));
        break;
      case "ArrowUp":
        datepicker.focusDate(calendar.getPrev(state.focusedDate, "d", calendar.getDaysPerWeek()));
        break;
      case "ArrowRight":
        datepicker.focusDate(calendar.getNext(state.focusedDate, "d", 1));
        break;
      case "ArrowDown":
        datepicker.focusDate(calendar.getNext(state.focusedDate, "d", calendar.getDaysPerWeek()));
        break;
      case "Enter":
      case " ":
        datepicker.focusSelect();
        break;
      default:
        return;
    }
    event.preventDefault();
    event.stopPropagation();
  }
  static {
    this.ɵfac = function NgbDatepickerKeyboardService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerKeyboardService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDatepickerKeyboardService,
      factory: _NgbDatepickerKeyboardService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerKeyboardService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbDatepickerDayView = class _NgbDatepickerDayView {
  constructor() {
    this.i18n = inject(NgbDatepickerI18n);
  }
  isMuted() {
    return !this.selected && (this.date.month !== this.currentMonth || this.disabled);
  }
  static {
    this.ɵfac = function NgbDatepickerDayView_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerDayView)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbDatepickerDayView,
      selectors: [["", "ngbDatepickerDayView", ""]],
      hostAttrs: [1, "btn-light"],
      hostVars: 10,
      hostBindings: function NgbDatepickerDayView_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("bg-primary", ctx.selected)("text-white", ctx.selected)("text-muted", ctx.isMuted())("outside", ctx.isMuted())("active", ctx.focused);
        }
      },
      inputs: {
        currentMonth: "currentMonth",
        date: "date",
        disabled: "disabled",
        focused: "focused",
        selected: "selected"
      },
      attrs: _c3,
      decls: 1,
      vars: 1,
      template: function NgbDatepickerDayView_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtext(0);
        }
        if (rf & 2) {
          ɵɵtextInterpolate(ctx.i18n.getDayNumerals(ctx.date));
        }
      },
      styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:transparent}[ngbDatepickerDayView]:hover:not(.bg-primary),[ngbDatepickerDayView].active:not(.bg-primary){background-color:var(--bs-tertiary-bg);outline:1px solid var(--bs-border-color)}[ngbDatepickerDayView].outside{opacity:.5}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerDayView, [{
    type: Component,
    args: [{
      selector: "[ngbDatepickerDayView]",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "btn-light",
        "[class.bg-primary]": "selected",
        "[class.text-white]": "selected",
        "[class.text-muted]": "isMuted()",
        "[class.outside]": "isMuted()",
        "[class.active]": "focused"
      },
      template: `{{ i18n.getDayNumerals(date) }}`,
      styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:transparent}[ngbDatepickerDayView]:hover:not(.bg-primary),[ngbDatepickerDayView].active:not(.bg-primary){background-color:var(--bs-tertiary-bg);outline:1px solid var(--bs-border-color)}[ngbDatepickerDayView].outside{opacity:.5}\n"]
    }]
  }], null, {
    currentMonth: [{
      type: Input
    }],
    date: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    focused: [{
      type: Input
    }],
    selected: [{
      type: Input
    }]
  });
})();
var NgbDatepickerNavigationSelect = class _NgbDatepickerNavigationSelect {
  constructor() {
    this._month = -1;
    this._year = -1;
    this.i18n = inject(NgbDatepickerI18n);
    this.select = new EventEmitter();
  }
  changeMonth(month) {
    this.select.emit(new NgbDate(this.date.year, toInteger(month), 1));
  }
  changeYear(year) {
    this.select.emit(new NgbDate(toInteger(year), this.date.month, 1));
  }
  ngAfterViewChecked() {
    if (this.date) {
      if (this.date.month !== this._month) {
        this._month = this.date.month;
        this.monthSelect.nativeElement.value = `${this._month}`;
      }
      if (this.date.year !== this._year) {
        this._year = this.date.year;
        this.yearSelect.nativeElement.value = `${this._year}`;
      }
    }
  }
  static {
    this.ɵfac = function NgbDatepickerNavigationSelect_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerNavigationSelect)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbDatepickerNavigationSelect,
      selectors: [["ngb-datepicker-navigation-select"]],
      viewQuery: function NgbDatepickerNavigationSelect_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c4, 7, ElementRef);
          ɵɵviewQuery(_c5, 7, ElementRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.monthSelect = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.yearSelect = _t.first);
        }
      },
      inputs: {
        date: "date",
        disabled: "disabled",
        months: "months",
        years: "years"
      },
      outputs: {
        select: "select"
      },
      decls: 8,
      vars: 2,
      consts: () => {
        let i18n_4;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_4 = goog.getMsg("Select month");
          i18n_4 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_4;
        } else {
          i18n_4 = $localize`:@@ngb.datepicker.select-month:Select month`;
        }
        let i18n_5;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_5 = goog.getMsg("Select month");
          i18n_5 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_5;
        } else {
          i18n_5 = $localize`:@@ngb.datepicker.select-month:Select month`;
        }
        let i18n_6;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_6 = goog.getMsg("Select year");
          i18n_6 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_6;
        } else {
          i18n_6 = $localize`:@@ngb.datepicker.select-year:Select year`;
        }
        let i18n_7;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_7 = goog.getMsg("Select year");
          i18n_7 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_7;
        } else {
          i18n_7 = $localize`:@@ngb.datepicker.select-year:Select year`;
        }
        return [["month", ""], ["year", ""], ["aria-label", i18n_4, "title", i18n_5, 1, "form-select", 3, "change", "disabled"], [3, "value"], ["aria-label", i18n_6, "title", i18n_7, 1, "form-select", 3, "change", "disabled"]];
      },
      template: function NgbDatepickerNavigationSelect_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵdomElementStart(0, "select", 2, 0);
          ɵɵdomListener("change", function NgbDatepickerNavigationSelect_Template_select_change_0_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.changeMonth($event.target.value));
          });
          ɵɵrepeaterCreate(2, NgbDatepickerNavigationSelect_For_3_Template, 2, 3, "option", 3, ɵɵrepeaterTrackByIdentity);
          ɵɵdomElementEnd();
          ɵɵdomElementStart(4, "select", 4, 1);
          ɵɵdomListener("change", function NgbDatepickerNavigationSelect_Template_select_change_4_listener($event) {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.changeYear($event.target.value));
          });
          ɵɵrepeaterCreate(6, NgbDatepickerNavigationSelect_For_7_Template, 2, 2, "option", 3, ɵɵrepeaterTrackByIdentity);
          ɵɵdomElementEnd();
        }
        if (rf & 2) {
          ɵɵdomProperty("disabled", ctx.disabled);
          ɵɵadvance(2);
          ɵɵrepeater(ctx.months);
          ɵɵadvance(2);
          ɵɵdomProperty("disabled", ctx.disabled);
          ɵɵadvance(2);
          ɵɵrepeater(ctx.years);
        }
      },
      styles: ["ngb-datepicker-navigation-select>.form-select{flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.form-select:focus{z-index:1}ngb-datepicker-navigation-select>.form-select::-ms-value{background-color:transparent!important}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerNavigationSelect, [{
    type: Component,
    args: [{
      selector: "ngb-datepicker-navigation-select",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
		<select
			#month
			[disabled]="disabled"
			class="form-select"
			i18n-aria-label="@@ngb.datepicker.select-month"
			aria-label="Select month"
			i18n-title="@@ngb.datepicker.select-month"
			title="Select month"
			(change)="changeMonth($any($event).target.value)"
		>
			@for (m of months; track m) {
				<option [attr.aria-label]="i18n.getMonthFullName(m, date.year)" [value]="m">{{
					i18n.getMonthShortName(m, date.year)
				}}</option>
			}</select
		><select
			#year
			[disabled]="disabled"
			class="form-select"
			i18n-aria-label="@@ngb.datepicker.select-year"
			aria-label="Select year"
			i18n-title="@@ngb.datepicker.select-year"
			title="Select year"
			(change)="changeYear($any($event).target.value)"
		>
			@for (y of years; track y) {
				<option [value]="y">{{ i18n.getYearNumerals(y) }}</option>
			}
		</select>
	`,
      styles: ["ngb-datepicker-navigation-select>.form-select{flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.form-select:focus{z-index:1}ngb-datepicker-navigation-select>.form-select::-ms-value{background-color:transparent!important}\n"]
    }]
  }], null, {
    date: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    months: [{
      type: Input
    }],
    years: [{
      type: Input
    }],
    select: [{
      type: Output
    }],
    monthSelect: [{
      type: ViewChild,
      args: ["month", {
        static: true,
        read: ElementRef
      }]
    }],
    yearSelect: [{
      type: ViewChild,
      args: ["year", {
        static: true,
        read: ElementRef
      }]
    }]
  });
})();
var NgbDatepickerNavigation = class _NgbDatepickerNavigation {
  constructor() {
    this.navigation = NavigationEvent;
    this.i18n = inject(NgbDatepickerI18n);
    this.months = [];
    this.navigate = new EventEmitter();
    this.select = new EventEmitter();
  }
  onClickPrev(event) {
    event.currentTarget.focus();
    this.navigate.emit(this.navigation.PREV);
  }
  onClickNext(event) {
    event.currentTarget.focus();
    this.navigate.emit(this.navigation.NEXT);
  }
  idMonth(month) {
    return month;
  }
  static {
    this.ɵfac = function NgbDatepickerNavigation_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerNavigation)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbDatepickerNavigation,
      selectors: [["ngb-datepicker-navigation"]],
      inputs: {
        date: "date",
        disabled: "disabled",
        months: "months",
        showSelect: "showSelect",
        prevDisabled: "prevDisabled",
        nextDisabled: "nextDisabled",
        selectBoxes: "selectBoxes"
      },
      outputs: {
        navigate: "navigate",
        select: "select"
      },
      decls: 11,
      vars: 4,
      consts: () => {
        let i18n_8;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_8 = goog.getMsg("Previous month");
          i18n_8 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_8;
        } else {
          i18n_8 = $localize`:@@ngb.datepicker.previous-month:Previous month`;
        }
        let i18n_9;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_9 = goog.getMsg("Previous month");
          i18n_9 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_9;
        } else {
          i18n_9 = $localize`:@@ngb.datepicker.previous-month:Previous month`;
        }
        let i18n_10;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_10 = goog.getMsg("Next month");
          i18n_10 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_10;
        } else {
          i18n_10 = $localize`:@@ngb.datepicker.next-month:Next month`;
        }
        let i18n_11;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_11 = goog.getMsg("Next month");
          i18n_11 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_11;
        } else {
          i18n_11 = $localize`:@@ngb.datepicker.next-month:Next month`;
        }
        return [[1, "ngb-dp-arrow", "ngb-dp-arrow-prev"], ["type", "button", "aria-label", i18n_8, "title", i18n_9, 1, "btn", "btn-link", "ngb-dp-arrow-btn", 3, "click", "disabled"], [1, "ngb-dp-navigation-chevron"], [1, "ngb-dp-navigation-select", 3, "date", "disabled", "months", "years"], ["aria-live", "polite", 1, "visually-hidden"], [1, "ngb-dp-arrow", "ngb-dp-arrow-next"], ["type", "button", "aria-label", i18n_10, "title", i18n_11, 1, "btn", "btn-link", "ngb-dp-arrow-btn", 3, "click", "disabled"], [1, "ngb-dp-navigation-select", 3, "select", "date", "disabled", "months", "years"], [1, "ngb-dp-arrow"], [1, "ngb-dp-month-name"]];
      },
      template: function NgbDatepickerNavigation_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "button", 1);
          ɵɵlistener("click", function NgbDatepickerNavigation_Template_button_click_1_listener($event) {
            return ctx.onClickPrev($event);
          });
          ɵɵelement(2, "span", 2);
          ɵɵelementEnd()();
          ɵɵconditionalCreate(3, NgbDatepickerNavigation_Conditional_3_Template, 1, 4, "ngb-datepicker-navigation-select", 3);
          ɵɵconditionalCreate(4, NgbDatepickerNavigation_Conditional_4_Template, 2, 0);
          ɵɵelementStart(5, "div", 4);
          ɵɵrepeaterCreate(6, NgbDatepickerNavigation_For_7_Template, 2, 1, "span", null, _forTrack0, true);
          ɵɵelementEnd();
          ɵɵelementStart(8, "div", 5)(9, "button", 6);
          ɵɵlistener("click", function NgbDatepickerNavigation_Template_button_click_9_listener($event) {
            return ctx.onClickNext($event);
          });
          ɵɵelement(10, "span", 2);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("disabled", ctx.prevDisabled);
          ɵɵadvance(2);
          ɵɵconditional(ctx.showSelect ? 3 : -1);
          ɵɵadvance();
          ɵɵconditional(!ctx.showSelect ? 4 : -1);
          ɵɵadvance(2);
          ɵɵrepeater(ctx.months);
          ɵɵadvance(3);
          ɵɵproperty("disabled", ctx.nextDisabled);
        }
      },
      dependencies: [NgbDatepickerNavigationSelect],
      styles: ["ngb-datepicker-navigation{display:flex;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;transform:rotate(-135deg)}.ngb-dp-arrow{display:flex;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow-next{justify-content:flex-end}.ngb-dp-arrow-next .ngb-dp-navigation-chevron{transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:flex;flex:1 1 9rem}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerNavigation, [{
    type: Component,
    args: [{
      selector: "ngb-datepicker-navigation",
      imports: [NgbDatepickerNavigationSelect],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
		<div class="ngb-dp-arrow ngb-dp-arrow-prev">
			<button
				type="button"
				class="btn btn-link ngb-dp-arrow-btn"
				(click)="onClickPrev($event)"
				[disabled]="prevDisabled"
				i18n-aria-label="@@ngb.datepicker.previous-month"
				aria-label="Previous month"
				i18n-title="@@ngb.datepicker.previous-month"
				title="Previous month"
			>
				<span class="ngb-dp-navigation-chevron"></span>
			</button>
		</div>
		@if (showSelect) {
			<ngb-datepicker-navigation-select
				class="ngb-dp-navigation-select"
				[date]="date"
				[disabled]="disabled"
				[months]="selectBoxes.months"
				[years]="selectBoxes.years"
				(select)="select.emit($event)"
			/>
		}

		@if (!showSelect) {
			@for (month of months; track idMonth(month); let i = $index) {
				@if (i > 0) {
					<div class="ngb-dp-arrow"></div>
				}
				<div class="ngb-dp-month-name">
					{{ i18n.getMonthLabel(month.firstDate) }}
				</div>
				@if (i !== months.length - 1) {
					<div class="ngb-dp-arrow"></div>
				}
			}
		}
		<div class="visually-hidden" aria-live="polite">
			@for (month of months; track idMonth(month)) {
				<span>{{ i18n.getMonthLabel(month.firstDate) }}</span>
			}
		</div>

		<div class="ngb-dp-arrow ngb-dp-arrow-next">
			<button
				type="button"
				class="btn btn-link ngb-dp-arrow-btn"
				(click)="onClickNext($event)"
				[disabled]="nextDisabled"
				i18n-aria-label="@@ngb.datepicker.next-month"
				aria-label="Next month"
				i18n-title="@@ngb.datepicker.next-month"
				title="Next month"
			>
				<span class="ngb-dp-navigation-chevron"></span>
			</button>
		</div>
	`,
      styles: ["ngb-datepicker-navigation{display:flex;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;transform:rotate(-135deg)}.ngb-dp-arrow{display:flex;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow-next{justify-content:flex-end}.ngb-dp-arrow-next .ngb-dp-navigation-chevron{transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:flex;flex:1 1 9rem}\n"]
    }]
  }], null, {
    date: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    months: [{
      type: Input
    }],
    showSelect: [{
      type: Input
    }],
    prevDisabled: [{
      type: Input
    }],
    nextDisabled: [{
      type: Input
    }],
    selectBoxes: [{
      type: Input
    }],
    navigate: [{
      type: Output
    }],
    select: [{
      type: Output
    }]
  });
})();
var NgbDatepickerContent = class _NgbDatepickerContent {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbDatepickerContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbDatepickerContent,
      selectors: [["ng-template", "ngbDatepickerContent", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbDatepickerContent]"
    }]
  }], null, null);
})();
var NgbDatepickerMonth = class _NgbDatepickerMonth {
  constructor() {
    this._keyboardService = inject(NgbDatepickerKeyboardService);
    this._service = inject(NgbDatepickerService);
    this.i18n = inject(NgbDatepickerI18n);
    this.datepicker = inject(NgbDatepicker);
  }
  /**
   * The first date of month to be rendered.
   *
   * This month must one of the months present in the
   * [datepicker state](#/components/datepicker/api#NgbDatepickerState).
   */
  set month(month) {
    this.viewModel = this._service.getMonth(month);
  }
  onKeyDown(event) {
    this._keyboardService.processKey(event, this.datepicker);
  }
  doSelect(day) {
    if (!day.context.disabled && !day.hidden) {
      this.datepicker.onDateSelect(day.date);
    }
  }
  static {
    this.ɵfac = function NgbDatepickerMonth_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerMonth)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbDatepickerMonth,
      selectors: [["ngb-datepicker-month"]],
      hostAttrs: ["role", "grid"],
      hostBindings: function NgbDatepickerMonth_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown", function NgbDatepickerMonth_keydown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          });
        }
      },
      inputs: {
        month: "month"
      },
      decls: 3,
      vars: 1,
      consts: [["role", "row", 1, "ngb-dp-week", "ngb-dp-weekdays"], [1, "ngb-dp-weekday", "ngb-dp-showweek", "small"], ["role", "columnheader", 1, "ngb-dp-weekday", "small"], ["role", "row", 1, "ngb-dp-week"], [1, "ngb-dp-week-number", "small", "text-muted"], ["role", "gridcell", 1, "ngb-dp-day", 3, "disabled", "tabindex", "hidden", "ngb-dp-today"], ["role", "gridcell", 1, "ngb-dp-day", 3, "click", "tabindex"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NgbDatepickerMonth_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵconditionalCreate(0, NgbDatepickerMonth_Conditional_0_Template, 4, 1, "div", 0);
          ɵɵrepeaterCreate(1, NgbDatepickerMonth_For_2_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
        }
        if (rf & 2) {
          ɵɵconditional(ctx.viewModel.weekdays.length > 0 ? 0 : -1);
          ɵɵadvance();
          ɵɵrepeater(ctx.viewModel.weeks);
        }
      },
      dependencies: [NgTemplateOutlet],
      styles: ['ngb-datepicker-month{display:block}.ngb-dp-weekday,.ngb-dp-week-number{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:var(--bs-info)}.ngb-dp-week{border-radius:.25rem;display:flex}.ngb-dp-weekdays{border-bottom:1px solid var(--bs-border-color);border-radius:0;background-color:var(--bs-tertiary-bg)}.ngb-dp-day,.ngb-dp-weekday,.ngb-dp-week-number{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex="0"]{z-index:1}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerMonth, [{
    type: Component,
    args: [{
      selector: "ngb-datepicker-month",
      imports: [NgTemplateOutlet],
      host: {
        role: "grid",
        "(keydown)": "onKeyDown($event)"
      },
      encapsulation: ViewEncapsulation.None,
      template: `
		@if (viewModel.weekdays.length > 0) {
			<div class="ngb-dp-week ngb-dp-weekdays" role="row">
				@if (datepicker.showWeekNumbers) {
					<div class="ngb-dp-weekday ngb-dp-showweek small">{{ i18n.getWeekLabel() }}</div>
				}
				@for (weekday of viewModel.weekdays; track $index) {
					<div class="ngb-dp-weekday small" role="columnheader">{{ weekday }}</div>
				}
			</div>
		}
		@for (week of viewModel.weeks; track week) {
			@if (!week.collapsed) {
				<div class="ngb-dp-week" role="row">
					@if (datepicker.showWeekNumbers) {
						<div class="ngb-dp-week-number small text-muted">{{ i18n.getWeekNumerals(week.number) }}</div>
					}
					@for (day of week.days; track day) {
						<div
							(click)="doSelect(day); $event.preventDefault()"
							class="ngb-dp-day"
							role="gridcell"
							[class.disabled]="day.context.disabled"
							[tabindex]="day.tabindex"
							[class.hidden]="day.hidden"
							[class.ngb-dp-today]="day.context.today"
							[attr.aria-label]="day.ariaLabel"
							[attr.aria-disabled]="day.context.disabled"
							[attr.aria-selected]="day.context.selected"
						>
							@if (!day.hidden) {
								<ng-template [ngTemplateOutlet]="datepicker.dayTemplate" [ngTemplateOutletContext]="day.context" />
							}
						</div>
					}
				</div>
			}
		}
	`,
      styles: ['ngb-datepicker-month{display:block}.ngb-dp-weekday,.ngb-dp-week-number{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:var(--bs-info)}.ngb-dp-week{border-radius:.25rem;display:flex}.ngb-dp-weekdays{border-bottom:1px solid var(--bs-border-color);border-radius:0;background-color:var(--bs-tertiary-bg)}.ngb-dp-day,.ngb-dp-weekday,.ngb-dp-week-number{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex="0"]{z-index:1}\n']
    }]
  }], null, {
    month: [{
      type: Input
    }]
  });
})();
var NgbDatepicker = class _NgbDatepicker {
  constructor() {
    this.injector = inject(Injector);
    this._service = inject(NgbDatepickerService);
    this._calendar = inject(NgbCalendar);
    this._i18n = inject(NgbDatepickerI18n);
    this._config = inject(NgbDatepickerConfig);
    this._nativeElement = inject(ElementRef).nativeElement;
    this._ngbDateAdapter = inject(NgbDateAdapter);
    this._ngZone = inject(NgZone);
    this._destroyRef = inject(DestroyRef);
    this._injector = inject(Injector);
    this._controlValue = null;
    this._publicState = {};
    this._initialized = false;
    this.dayTemplate = this._config.dayTemplate;
    this.dayTemplateData = this._config.dayTemplateData;
    this.displayMonths = this._config.displayMonths;
    this.firstDayOfWeek = this._config.firstDayOfWeek;
    this.footerTemplate = this._config.footerTemplate;
    this.markDisabled = this._config.markDisabled;
    this.maxDate = this._config.maxDate;
    this.minDate = this._config.minDate;
    this.navigation = this._config.navigation;
    this.outsideDays = this._config.outsideDays;
    this.showWeekNumbers = this._config.showWeekNumbers;
    this.startDate = this._config.startDate;
    this.weekdays = this._config.weekdays;
    this.navigate = new EventEmitter();
    this.dateSelect = new EventEmitter();
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
    const cd = inject(ChangeDetectorRef);
    this._service.dateSelect$.pipe(takeUntilDestroyed()).subscribe((date) => {
      this.dateSelect.emit(date);
    });
    this._service.model$.pipe(takeUntilDestroyed()).subscribe((model) => {
      const newDate = model.firstDate;
      const oldDate = this.model ? this.model.firstDate : null;
      this._publicState = {
        maxDate: model.maxDate,
        minDate: model.minDate,
        firstDate: model.firstDate,
        lastDate: model.lastDate,
        focusedDate: model.focusDate,
        months: model.months.map((viewModel) => viewModel.firstDate)
      };
      let navigationPrevented = false;
      if (!newDate.equals(oldDate)) {
        this.navigate.emit({
          current: oldDate ? {
            year: oldDate.year,
            month: oldDate.month
          } : null,
          next: {
            year: newDate.year,
            month: newDate.month
          },
          preventDefault: () => navigationPrevented = true
        });
        if (navigationPrevented && oldDate !== null) {
          this._service.open(oldDate);
          return;
        }
      }
      const newSelectedDate = model.selectedDate;
      const newFocusedDate = model.focusDate;
      const oldFocusedDate = this.model ? this.model.focusDate : null;
      this.model = model;
      if (isChangedDate(newSelectedDate, this._controlValue)) {
        this._controlValue = newSelectedDate;
        this.onTouched();
        this.onChange(this._ngbDateAdapter.toModel(newSelectedDate));
      }
      if (isChangedDate(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
        this.focus();
      }
      cd.markForCheck();
    });
  }
  /**
   *  Returns the readonly public state of the datepicker
   *
   * @since 5.2.0
   */
  get state() {
    return this._publicState;
  }
  /**
   *  Returns the calendar service used in the specific datepicker instance.
   *
   *  @since 5.3.0
   */
  get calendar() {
    return this._calendar;
  }
  /**
   * Returns the i18n service used in the specific datepicker instance.
   *
   * @since 14.2.0
   */
  get i18n() {
    return this._i18n;
  }
  /**
   *  Focuses on given date.
   */
  focusDate(date) {
    this._service.focus(NgbDate.from(date));
  }
  /**
   *  Selects focused date.
   */
  focusSelect() {
    this._service.focusSelect();
  }
  focus() {
    afterNextRender({
      read: () => {
        this._nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]')?.focus();
      }
    }, {
      injector: this._injector
    });
  }
  /**
   * Navigates to the provided date.
   *
   * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
   * If nothing or invalid date provided calendar will open current month.
   *
   * Use the `[startDate]` input as an alternative.
   */
  navigateTo(date) {
    this._service.open(NgbDate.from(date ? date.day ? date : __spreadProps(__spreadValues({}, date), {
      day: 1
    }) : null));
  }
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      const focusIns$ = fromEvent(this._contentEl.nativeElement, "focusin");
      const focusOuts$ = fromEvent(this._contentEl.nativeElement, "focusout");
      merge(focusIns$, focusOuts$).pipe(filter((focusEvent) => {
        const target = focusEvent.target;
        const relatedTarget = focusEvent.relatedTarget;
        return !(target?.classList.contains("ngb-dp-day") && relatedTarget?.classList.contains("ngb-dp-day") && this._nativeElement.contains(target) && this._nativeElement.contains(relatedTarget));
      }), takeUntilDestroyed(this._destroyRef)).subscribe(({
        type
      }) => this._ngZone.run(() => this._service.set({
        focusVisible: type === "focusin"
      })));
    });
  }
  ngOnInit() {
    if (this.model === void 0) {
      const inputs = {};
      ["dayTemplateData", "displayMonths", "markDisabled", "firstDayOfWeek", "navigation", "minDate", "maxDate", "outsideDays", "weekdays"].forEach((name) => inputs[name] = this[name]);
      this._service.set(inputs);
      this.navigateTo(this.startDate);
    }
    if (!this.dayTemplate) {
      this.dayTemplate = this._defaultDayTemplate;
    }
    this._initialized = true;
  }
  ngOnChanges(changes) {
    const inputs = {};
    ["dayTemplateData", "displayMonths", "markDisabled", "firstDayOfWeek", "navigation", "minDate", "maxDate", "outsideDays", "weekdays"].filter((name) => name in changes).forEach((name) => inputs[name] = this[name]);
    this._service.set(inputs);
    if ("startDate" in changes && this._initialized) {
      const {
        currentValue,
        previousValue
      } = changes.startDate;
      if (isChangedMonth(previousValue, currentValue)) {
        this.navigateTo(this.startDate);
      }
    }
  }
  onDateSelect(date) {
    this._service.focus(date);
    this._service.select(date, {
      emitEvent: true
    });
  }
  onNavigateDateSelect(date) {
    this._service.open(date);
  }
  onNavigateEvent(event) {
    switch (event) {
      case NavigationEvent.PREV:
        this._service.open(this._calendar.getPrev(this.model.firstDate, "m", 1));
        break;
      case NavigationEvent.NEXT:
        this._service.open(this._calendar.getNext(this.model.firstDate, "m", 1));
        break;
    }
  }
  registerOnChange(fn2) {
    this.onChange = fn2;
  }
  registerOnTouched(fn2) {
    this.onTouched = fn2;
  }
  setDisabledState(disabled) {
    this._service.set({
      disabled
    });
  }
  writeValue(value) {
    this._controlValue = NgbDate.from(this._ngbDateAdapter.fromModel(value));
    this._service.select(this._controlValue);
  }
  static {
    this.ɵfac = function NgbDatepicker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepicker)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbDatepicker,
      selectors: [["ngb-datepicker"]],
      contentQueries: function NgbDatepicker_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbDatepickerContent, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplateFromContent = _t.first);
        }
      },
      viewQuery: function NgbDatepicker_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c6, 7);
          ɵɵviewQuery(_c7, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._defaultDayTemplate = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._contentEl = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function NgbDatepicker_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("disabled", ctx.model.disabled);
        }
      },
      inputs: {
        contentTemplate: "contentTemplate",
        dayTemplate: "dayTemplate",
        dayTemplateData: "dayTemplateData",
        displayMonths: "displayMonths",
        firstDayOfWeek: "firstDayOfWeek",
        footerTemplate: "footerTemplate",
        markDisabled: "markDisabled",
        maxDate: "maxDate",
        minDate: "minDate",
        navigation: "navigation",
        outsideDays: "outsideDays",
        showWeekNumbers: "showWeekNumbers",
        startDate: "startDate",
        weekdays: "weekdays"
      },
      outputs: {
        navigate: "navigate",
        dateSelect: "dateSelect"
      },
      exportAs: ["ngbDatepicker"],
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgbDatepicker),
        multi: true
      }, NgbDatepickerService]), ɵɵNgOnChangesFeature],
      decls: 10,
      vars: 9,
      consts: [["defaultDayTemplate", ""], ["defaultContentTemplate", ""], ["content", ""], [1, "ngb-dp-header"], [3, "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes"], [1, "ngb-dp-content"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", "ngTemplateOutletInjector"], [3, "ngTemplateOutlet"], ["ngbDatepickerDayView", "", 3, "date", "currentMonth", "selected", "disabled", "focused"], [1, "ngb-dp-month"], [1, "ngb-dp-month-name"], [3, "month"], [3, "navigate", "select", "date", "months", "disabled", "showSelect", "prevDisabled", "nextDisabled", "selectBoxes"]],
      template: function NgbDatepicker_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NgbDatepicker_ng_template_0_Template, 1, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NgbDatepicker_ng_template_2_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
          ɵɵelementStart(4, "div", 3);
          ɵɵconditionalCreate(5, NgbDatepicker_Conditional_5_Template, 1, 7, "ngb-datepicker-navigation", 4);
          ɵɵelementEnd();
          ɵɵelementStart(6, "div", 5, 2);
          ɵɵtemplate(8, NgbDatepicker_ng_template_8_Template, 0, 0, "ng-template", 6);
          ɵɵelementEnd();
          ɵɵtemplate(9, NgbDatepicker_ng_template_9_Template, 0, 0, "ng-template", 7);
        }
        if (rf & 2) {
          const defaultContentTemplate_r9 = ɵɵreference(3);
          ɵɵadvance(5);
          ɵɵconditional(ctx.navigation !== "none" ? 5 : -1);
          ɵɵadvance();
          ɵɵclassProp("ngb-dp-months", !ctx.contentTemplate);
          ɵɵadvance(2);
          ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate || (ctx.contentTemplateFromContent == null ? null : ctx.contentTemplateFromContent.templateRef) || defaultContentTemplate_r9)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c8, ctx))("ngTemplateOutletInjector", ctx.injector);
          ɵɵadvance();
          ɵɵproperty("ngTemplateOutlet", ctx.footerTemplate);
        }
      },
      dependencies: [NgTemplateOutlet, NgbDatepickerDayView, NgbDatepickerMonth, NgbDatepickerNavigation],
      styles: ["ngb-datepicker{border:1px solid var(--bs-border-color);border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}ngb-datepicker.disabled .ngb-dp-weekday,ngb-datepicker.disabled .ngb-dp-week-number,ngb-datepicker.disabled .ngb-dp-month-name{color:var(--bs-text-muted)}.ngb-dp-body{z-index:1055}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:var(--bs-tertiary-bg)}.ngb-dp-months{display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:var(--bs-tertiary-bg)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepicker, [{
    type: Component,
    args: [{
      exportAs: "ngbDatepicker",
      selector: "ngb-datepicker",
      imports: [NgTemplateOutlet, NgbDatepickerDayView, NgbDatepickerMonth, NgbDatepickerNavigation],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class.disabled]": "model.disabled"
      },
      template: `
		<ng-template
			#defaultDayTemplate
			let-date="date"
			let-currentMonth="currentMonth"
			let-selected="selected"
			let-disabled="disabled"
			let-focused="focused"
		>
			<div
				ngbDatepickerDayView
				[date]="date"
				[currentMonth]="currentMonth"
				[selected]="selected"
				[disabled]="disabled"
				[focused]="focused"
			>
			</div>
		</ng-template>

		<ng-template #defaultContentTemplate>
			@for (month of model.months; track month) {
				<div class="ngb-dp-month">
					@if (navigation === 'none' || (displayMonths > 1 && navigation === 'select')) {
						<div class="ngb-dp-month-name">
							{{ i18n.getMonthLabel(month.firstDate) }}
						</div>
					}
					<ngb-datepicker-month [month]="month.firstDate" />
				</div>
			}
		</ng-template>

		<div class="ngb-dp-header">
			@if (navigation !== 'none') {
				<ngb-datepicker-navigation
					[date]="model.firstDate!"
					[months]="model.months"
					[disabled]="model.disabled"
					[showSelect]="model.navigation === 'select'"
					[prevDisabled]="model.prevDisabled"
					[nextDisabled]="model.nextDisabled"
					[selectBoxes]="model.selectBoxes"
					(navigate)="onNavigateEvent($event)"
					(select)="onNavigateDateSelect($event)"
				/>
			}
		</div>

		<div class="ngb-dp-content" [class.ngb-dp-months]="!contentTemplate" #content>
			<ng-template
				[ngTemplateOutlet]="contentTemplate || contentTemplateFromContent?.templateRef || defaultContentTemplate"
				[ngTemplateOutletContext]="{ $implicit: this }"
				[ngTemplateOutletInjector]="injector"
			/>
		</div>

		<ng-template [ngTemplateOutlet]="footerTemplate" />
	`,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgbDatepicker),
        multi: true
      }, NgbDatepickerService],
      styles: ["ngb-datepicker{border:1px solid var(--bs-border-color);border-radius:.25rem;display:inline-block}ngb-datepicker-month{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}ngb-datepicker.disabled .ngb-dp-weekday,ngb-datepicker.disabled .ngb-dp-week-number,ngb-datepicker.disabled .ngb-dp-month-name{color:var(--bs-text-muted)}.ngb-dp-body{z-index:1055}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:var(--bs-tertiary-bg)}.ngb-dp-months{display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:var(--bs-tertiary-bg)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}\n"]
    }]
  }], () => [], {
    _defaultDayTemplate: [{
      type: ViewChild,
      args: ["defaultDayTemplate", {
        static: true
      }]
    }],
    _contentEl: [{
      type: ViewChild,
      args: ["content", {
        static: true
      }]
    }],
    contentTemplate: [{
      type: Input
    }],
    contentTemplateFromContent: [{
      type: ContentChild,
      args: [NgbDatepickerContent, {
        static: true
      }]
    }],
    dayTemplate: [{
      type: Input
    }],
    dayTemplateData: [{
      type: Input
    }],
    displayMonths: [{
      type: Input
    }],
    firstDayOfWeek: [{
      type: Input
    }],
    footerTemplate: [{
      type: Input
    }],
    markDisabled: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    navigation: [{
      type: Input
    }],
    outsideDays: [{
      type: Input
    }],
    showWeekNumbers: [{
      type: Input
    }],
    startDate: [{
      type: Input
    }],
    weekdays: [{
      type: Input
    }],
    navigate: [{
      type: Output
    }],
    dateSelect: [{
      type: Output
    }]
  });
})();
var isContainedIn = (element, array) => array ? array.some((item) => item.contains(element)) : false;
var matchesSelectorIfAny = (element, selector) => !selector || closest(element, selector) != null;
var isMobile = (() => {
  const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) || /Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2;
  const isAndroid = () => /Android/.test(navigator.userAgent);
  return typeof navigator !== "undefined" ? !!navigator.userAgent && (isIOS() || isAndroid()) : false;
})();
var wrapAsyncForMobile = (fn2) => isMobile ? () => setTimeout(() => fn2(), 100) : fn2;
function ngbAutoClose(zone, document2, type, close, closed$, insideElements, ignoreElements, insideSelector) {
  if (type) {
    zone.runOutsideAngular(wrapAsyncForMobile(() => {
      const shouldCloseOnClick = (event) => {
        const element = event.target;
        if (event.button === 2 || isContainedIn(element, ignoreElements)) {
          return false;
        }
        if (type === "inside") {
          return isContainedIn(element, insideElements) && matchesSelectorIfAny(element, insideSelector);
        } else if (type === "outside") {
          return !isContainedIn(element, insideElements);
        } else {
          return matchesSelectorIfAny(element, insideSelector) || !isContainedIn(element, insideElements);
        }
      };
      const escapes$ = fromEvent(document2, "keydown").pipe(takeUntil(closed$), filter((e) => e.key === "Escape"), tap((e) => e.preventDefault()));
      const mouseDowns$ = fromEvent(document2, "mousedown").pipe(map(shouldCloseOnClick), takeUntil(closed$));
      const closeableClicks$ = fromEvent(document2, "mouseup").pipe(withLatestFrom(mouseDowns$), filter(([_, shouldClose]) => shouldClose), delay(0), takeUntil(closed$));
      race([escapes$.pipe(map(
        (_) => 0
        /* SOURCE.ESCAPE */
      )), closeableClicks$.pipe(map(
        (_) => 1
        /* SOURCE.CLICK */
      ))]).subscribe((source) => zone.run(() => close(source)));
    }));
  }
}
var FOCUSABLE_ELEMENTS_SELECTOR = ["a[href]", "button:not([disabled])", 'input:not([disabled]):not([type="hidden"])', "select:not([disabled])", "textarea:not([disabled])", "[contenteditable]", '[tabindex]:not([tabindex="-1"])'].join(", ");
function getFocusableBoundaryElements(element) {
  const list = Array.from(element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR)).filter((el) => el.tabIndex !== -1);
  return [list[0], list[list.length - 1]];
}
var ngbFocusTrap = (zone, element, stopFocusTrap$, refocusOnClick = false) => {
  zone.runOutsideAngular(() => {
    const lastFocusedElement$ = fromEvent(element, "focusin").pipe(takeUntil(stopFocusTrap$), map((e) => e.target));
    fromEvent(element, "keydown").pipe(takeUntil(stopFocusTrap$), filter((e) => e.key === "Tab"), withLatestFrom(lastFocusedElement$)).subscribe(([tabEvent, focusedElement]) => {
      const [first, last] = getFocusableBoundaryElements(element);
      if ((focusedElement === first || focusedElement === element) && tabEvent.shiftKey) {
        last.focus();
        tabEvent.preventDefault();
      }
      if (focusedElement === last && !tabEvent.shiftKey) {
        first.focus();
        tabEvent.preventDefault();
      }
    });
    if (refocusOnClick) {
      fromEvent(element, "click").pipe(takeUntil(stopFocusTrap$), withLatestFrom(lastFocusedElement$), map((arr) => arr[1])).subscribe((lastFocusedElement) => lastFocusedElement.focus());
    }
  });
};
var NgbRTL = class _NgbRTL {
  constructor() {
    this._element = inject(DOCUMENT).documentElement;
  }
  isRTL() {
    return (this._element.getAttribute("dir") || "").toLowerCase() === "rtl";
  }
  static {
    this.ɵfac = function NgbRTL_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbRTL)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbRTL,
      factory: _NgbRTL.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbRTL, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var placementSeparator = /\s+/;
var spacesRegExp = /  +/gi;
var bootstrapPopperMatches = {
  top: ["top"],
  bottom: ["bottom"],
  start: ["left", "right"],
  left: ["left"],
  end: ["right", "left"],
  right: ["right"],
  "top-start": ["top-start", "top-end"],
  "top-left": ["top-start"],
  "top-end": ["top-end", "top-start"],
  "top-right": ["top-end"],
  "bottom-start": ["bottom-start", "bottom-end"],
  "bottom-left": ["bottom-start"],
  "bottom-end": ["bottom-end", "bottom-start"],
  "bottom-right": ["bottom-end"],
  "start-top": ["left-start", "right-start"],
  "left-top": ["left-start"],
  "start-bottom": ["left-end", "right-end"],
  "left-bottom": ["left-end"],
  "end-top": ["right-start", "left-start"],
  "right-top": ["right-start"],
  "end-bottom": ["right-end", "left-end"],
  "right-bottom": ["right-end"]
};
function getPopperClassPlacement(placement, isRTL) {
  const [leftClass, rightClass] = bootstrapPopperMatches[placement];
  return isRTL ? rightClass || leftClass : leftClass;
}
var popperStartPrimaryPlacement = /^left/;
var popperEndPrimaryPlacement = /^right/;
var popperStartSecondaryPlacement = /^start/;
var popperEndSecondaryPlacement = /^end/;
function getBootstrapBaseClassPlacement(baseClass, placement) {
  let [primary, secondary] = placement.split("-");
  const newPrimary = primary.replace(popperStartPrimaryPlacement, "start").replace(popperEndPrimaryPlacement, "end");
  let classnames = [newPrimary];
  if (secondary) {
    let newSecondary = secondary;
    if (primary === "left" || primary === "right") {
      newSecondary = newSecondary.replace(popperStartSecondaryPlacement, "top").replace(popperEndSecondaryPlacement, "bottom");
    }
    classnames.push(`${newPrimary}-${newSecondary}`);
  }
  if (baseClass) {
    classnames = classnames.map((classname) => `${baseClass}-${classname}`);
  }
  return classnames.join(" ");
}
function getPopperOptions({
  placement,
  baseClass
}, rtl) {
  let placementVals = Array.isArray(placement) ? placement : placement.split(placementSeparator);
  const allowedPlacements = ["top", "bottom", "start", "end", "top-start", "top-end", "bottom-start", "bottom-end", "start-top", "start-bottom", "end-top", "end-bottom"];
  let hasAuto = placementVals.findIndex((val) => val === "auto");
  if (hasAuto >= 0) {
    allowedPlacements.forEach(function(obj) {
      if (placementVals.find((val) => val.search("^" + obj) !== -1) == null) {
        placementVals.splice(hasAuto++, 1, obj);
      }
    });
  }
  const popperPlacements = placementVals.map((_placement) => {
    return getPopperClassPlacement(_placement, rtl.isRTL());
  });
  let mainPlacement = popperPlacements.shift();
  const bsModifier = {
    name: "bootstrapClasses",
    enabled: !!baseClass,
    phase: "write",
    fn({
      state
    }) {
      const bsClassRegExp = new RegExp(baseClass + "(-[a-z]+)*", "gi");
      const popperElement = state.elements.popper;
      const popperPlacement = state.placement;
      let className = popperElement.className;
      className = className.replace(bsClassRegExp, "");
      className += ` ${getBootstrapBaseClassPlacement(baseClass, popperPlacement)}`;
      className = className.trim().replace(spacesRegExp, " ");
      popperElement.className = className;
    }
  };
  return {
    placement: mainPlacement,
    modifiers: [bsModifier, flip_default, preventOverflow_default, arrow_default, {
      enabled: true,
      name: "flip",
      options: {
        fallbackPlacements: popperPlacements
      }
    }]
  };
}
function noop(arg) {
  return arg;
}
function ngbPositioning() {
  const rtl = inject(NgbRTL);
  let popperInstance = null;
  return {
    createPopper(positioningOption) {
      if (!popperInstance) {
        const updatePopperOptions = positioningOption.updatePopperOptions || noop;
        let popperOptions = updatePopperOptions(getPopperOptions(positioningOption, rtl));
        popperInstance = createPopper2(positioningOption.hostElement, positioningOption.targetElement, popperOptions);
      }
    },
    update() {
      if (popperInstance) {
        popperInstance.update();
      }
    },
    setOptions(positioningOption) {
      if (popperInstance) {
        const updatePopperOptions = positioningOption.updatePopperOptions || noop;
        let popperOptions = updatePopperOptions(getPopperOptions(positioningOption, rtl));
        popperInstance.setOptions(popperOptions);
      }
    },
    destroy() {
      if (popperInstance) {
        popperInstance.destroy();
        popperInstance = null;
      }
    }
  };
}
function NGB_DATEPICKER_PARSER_FORMATTER_FACTORY() {
  return new NgbDateISOParserFormatter();
}
var NgbDateParserFormatter = class _NgbDateParserFormatter {
  static {
    this.ɵfac = function NgbDateParserFormatter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDateParserFormatter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDateParserFormatter,
      factory: () => NGB_DATEPICKER_PARSER_FORMATTER_FACTORY(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateParserFormatter, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY
    }]
  }], null, null);
})();
var NgbDateISOParserFormatter = class _NgbDateISOParserFormatter extends NgbDateParserFormatter {
  parse(value) {
    if (value != null) {
      const dateParts = value.trim().split("-");
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return {
          year: toInteger(dateParts[0]),
          month: null,
          day: null
        };
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return {
          year: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          day: null
        };
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return {
          year: toInteger(dateParts[0]),
          month: toInteger(dateParts[1]),
          day: toInteger(dateParts[2])
        };
      }
    }
    return null;
  }
  format(date) {
    return date ? `${date.year}-${isNumber(date.month) ? padNumber(date.month) : ""}-${isNumber(date.day) ? padNumber(date.day) : ""}` : "";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbDateISOParserFormatter_BaseFactory;
      return function NgbDateISOParserFormatter_Factory(__ngFactoryType__) {
        return (ɵNgbDateISOParserFormatter_BaseFactory || (ɵNgbDateISOParserFormatter_BaseFactory = ɵɵgetInheritedFactory(_NgbDateISOParserFormatter)))(__ngFactoryType__ || _NgbDateISOParserFormatter);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDateISOParserFormatter,
      factory: _NgbDateISOParserFormatter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateISOParserFormatter, [{
    type: Injectable
  }], null, null);
})();
var NgbInputDatepickerConfig = class _NgbInputDatepickerConfig extends NgbDatepickerConfig {
  constructor() {
    super(...arguments);
    this.autoClose = true;
    this.placement = ["bottom-start", "bottom-end", "top-start", "top-end"];
    this.popperOptions = (options) => options;
    this.restoreFocus = true;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbInputDatepickerConfig_BaseFactory;
      return function NgbInputDatepickerConfig_Factory(__ngFactoryType__) {
        return (ɵNgbInputDatepickerConfig_BaseFactory || (ɵNgbInputDatepickerConfig_BaseFactory = ɵɵgetInheritedFactory(_NgbInputDatepickerConfig)))(__ngFactoryType__ || _NgbInputDatepickerConfig);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbInputDatepickerConfig,
      factory: _NgbInputDatepickerConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbInputDatepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function addPopperOffset(offset$1) {
  return (options) => {
    options.modifiers.push(offset_default, {
      name: "offset",
      options: {
        offset: () => offset$1
      }
    });
    return options;
  };
}
var NgbInputDatepicker = class _NgbInputDatepicker {
  constructor() {
    this._parserFormatter = inject(NgbDateParserFormatter);
    this._elRef = inject(ElementRef);
    this._vcRef = inject(ViewContainerRef);
    this._ngZone = inject(NgZone);
    this._calendar = inject(NgbCalendar);
    this._dateAdapter = inject(NgbDateAdapter);
    this._document = inject(DOCUMENT);
    this._changeDetector = inject(ChangeDetectorRef);
    this._injector = inject(Injector);
    this._config = inject(NgbInputDatepickerConfig);
    this._cRef = null;
    this._disabled = false;
    this._elWithFocus = null;
    this._model = null;
    this._positioning = ngbPositioning();
    this._destroyCloseHandlers$ = new Subject();
    this.autoClose = this._config.autoClose;
    this.placement = this._config.placement;
    this.popperOptions = this._config.popperOptions;
    this.container = this._config.container;
    this.positionTarget = this._config.positionTarget;
    this.dateSelect = new EventEmitter();
    this.navigate = new EventEmitter();
    this.closed = new EventEmitter();
    this._onChange = (_) => {
    };
    this._onTouched = () => {
    };
    this._validatorChange = () => {
    };
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value === "" || value && value !== "false";
    if (this.isOpen()) {
      this._cRef.instance.setDisabledState(this._disabled);
    }
  }
  registerOnChange(fn2) {
    this._onChange = fn2;
  }
  registerOnTouched(fn2) {
    this._onTouched = fn2;
  }
  registerOnValidatorChange(fn2) {
    this._validatorChange = fn2;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  validate(c) {
    const {
      value
    } = c;
    if (value != null) {
      const ngbDate = this._fromDateStruct(this._dateAdapter.fromModel(value));
      if (!ngbDate) {
        return {
          ngbDate: {
            invalid: value
          }
        };
      }
      if (this.minDate && ngbDate.before(NgbDate.from(this.minDate))) {
        return {
          ngbDate: {
            minDate: {
              minDate: this.minDate,
              actual: value
            }
          }
        };
      }
      if (this.maxDate && ngbDate.after(NgbDate.from(this.maxDate))) {
        return {
          ngbDate: {
            maxDate: {
              maxDate: this.maxDate,
              actual: value
            }
          }
        };
      }
    }
    return null;
  }
  writeValue(value) {
    this._model = this._fromDateStruct(this._dateAdapter.fromModel(value));
    this._writeModelValue(this._model);
  }
  manualDateChange(value, updateView = false) {
    const inputValueChanged = value !== this._inputValue;
    if (inputValueChanged) {
      this._inputValue = value;
      this._model = this._fromDateStruct(this._parserFormatter.parse(value));
    }
    if (inputValueChanged || !updateView) {
      this._onChange(this._model ? this._dateAdapter.toModel(this._model) : value === "" ? null : value);
    }
    if (updateView && this._model) {
      this._writeModelValue(this._model);
    }
  }
  isOpen() {
    return !!this._cRef;
  }
  /**
   * Opens the datepicker popup.
   *
   * If the related form control contains a valid date, the corresponding month will be opened.
   */
  open() {
    if (!this.isOpen()) {
      this._cRef = this._vcRef.createComponent(NgbDatepicker, {
        injector: this._injector
      });
      this._applyPopupStyling(this._cRef.location.nativeElement);
      this._applyDatepickerInputs(this._cRef);
      this._subscribeForDatepickerOutputs(this._cRef.instance);
      this._cRef.instance.ngOnInit();
      this._cRef.instance.writeValue(this._dateAdapter.toModel(this._model));
      this._cRef.instance.registerOnChange((selectedDate) => {
        this.writeValue(selectedDate);
        this._onChange(selectedDate);
        this._onTouched();
      });
      this._cRef.changeDetectorRef.detectChanges();
      this._cRef.instance.setDisabledState(this.disabled);
      if (this.container === "body") {
        this._document.querySelector(this.container)?.appendChild(this._cRef.location.nativeElement);
      }
      this._elWithFocus = this._document.activeElement;
      ngbFocusTrap(this._ngZone, this._cRef.location.nativeElement, this.closed, true);
      setTimeout(() => this._cRef?.instance.focus());
      let hostElement;
      if (isString(this.positionTarget)) {
        hostElement = this._document.querySelector(this.positionTarget);
      } else if (this.positionTarget instanceof HTMLElement) {
        hostElement = this.positionTarget;
      } else {
        hostElement = this._elRef.nativeElement;
      }
      if (this.positionTarget && !hostElement) {
        throw new Error("ngbDatepicker could not find element declared in [positionTarget] to position against.");
      }
      this._ngZone.runOutsideAngular(() => {
        if (this._cRef && hostElement) {
          this._positioning.createPopper({
            hostElement,
            targetElement: this._cRef.location.nativeElement,
            placement: this.placement,
            updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 2])(options))
          });
          this._afterRenderRef = afterEveryRender({
            mixedReadWrite: () => {
              this._positioning.update();
            }
          }, {
            injector: this._injector
          });
        }
      });
      this._setCloseHandlers();
    }
  }
  /**
   * Closes the datepicker popup.
   */
  close() {
    if (this.isOpen()) {
      this._cRef?.destroy();
      this._cRef = null;
      this._positioning.destroy();
      this._afterRenderRef?.destroy();
      this._destroyCloseHandlers$.next();
      this.closed.emit();
      this._changeDetector.markForCheck();
      let elementToFocus = this._elWithFocus;
      if (isString(this.restoreFocus)) {
        elementToFocus = this._document.querySelector(this.restoreFocus);
      } else if (this.restoreFocus !== void 0) {
        elementToFocus = this.restoreFocus;
      }
      if (elementToFocus && elementToFocus["focus"]) {
        elementToFocus.focus();
      } else {
        this._document.body.focus();
      }
    }
  }
  /**
   * Toggles the datepicker popup.
   */
  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Navigates to the provided date.
   *
   * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
   * If nothing or invalid date provided calendar will open current month.
   *
   * Use the `[startDate]` input as an alternative.
   */
  navigateTo(date) {
    if (this.isOpen()) {
      this._cRef.instance.navigateTo(date);
    }
  }
  onBlur() {
    this._onTouched();
  }
  onFocus() {
    this._elWithFocus = this._elRef.nativeElement;
  }
  ngOnChanges(changes) {
    if (changes["minDate"] || changes["maxDate"]) {
      this._validatorChange();
      if (this.isOpen()) {
        if (changes["minDate"]) {
          this._cRef.setInput("minDate", this.minDate);
        }
        if (changes["maxDate"]) {
          this._cRef.setInput("maxDate", this.maxDate);
        }
      }
    }
    if (changes["datepickerClass"]) {
      const {
        currentValue,
        previousValue
      } = changes["datepickerClass"];
      this._applyPopupClass(currentValue, previousValue);
    }
    if (changes["autoClose"] && this.isOpen()) {
      this._setCloseHandlers();
    }
  }
  ngOnDestroy() {
    this.close();
  }
  _applyDatepickerInputs(datepickerComponentRef) {
    ["contentTemplate", "dayTemplate", "dayTemplateData", "displayMonths", "firstDayOfWeek", "footerTemplate", "markDisabled", "minDate", "maxDate", "navigation", "outsideDays", "showNavigation", "showWeekNumbers", "weekdays"].forEach((inputName) => {
      if (this[inputName] !== void 0) {
        datepickerComponentRef.setInput(inputName, this[inputName]);
      }
    });
    datepickerComponentRef.setInput("startDate", this.startDate || this._model);
  }
  _applyPopupClass(newClass, oldClass) {
    const popupEl = this._cRef?.location.nativeElement;
    if (popupEl) {
      if (newClass) {
        popupEl.classList.add(newClass);
      }
      if (oldClass) {
        popupEl.classList.remove(oldClass);
      }
    }
  }
  _applyPopupStyling(nativeElement) {
    nativeElement.classList.add("dropdown-menu", "show");
    if (this.container === "body") {
      nativeElement.classList.add("ngb-dp-body");
    }
    this._applyPopupClass(this.datepickerClass);
  }
  _subscribeForDatepickerOutputs(datepickerInstance) {
    datepickerInstance.navigate.subscribe((navigateEvent) => this.navigate.emit(navigateEvent));
    datepickerInstance.dateSelect.subscribe((date) => {
      this.dateSelect.emit(date);
      if (this.autoClose === true || this.autoClose === "inside") {
        this.close();
      }
    });
  }
  _writeModelValue(model) {
    const value = this._parserFormatter.format(model);
    this._inputValue = value;
    this._elRef.nativeElement.value = value;
    if (this.isOpen()) {
      this._cRef.instance.writeValue(this._dateAdapter.toModel(model));
      this._onTouched();
    }
  }
  _fromDateStruct(date) {
    const ngbDate = date ? new NgbDate(date.year, date.month, date.day) : null;
    return this._calendar.isValid(ngbDate) ? ngbDate : null;
  }
  _setCloseHandlers() {
    this._destroyCloseHandlers$.next();
    ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this._destroyCloseHandlers$, [], [this._elRef.nativeElement, this._cRef.location.nativeElement]);
  }
  static {
    this.ɵfac = function NgbInputDatepicker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbInputDatepicker)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbInputDatepicker,
      selectors: [["input", "ngbDatepicker", ""]],
      hostVars: 1,
      hostBindings: function NgbInputDatepicker_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("input", function NgbInputDatepicker_input_HostBindingHandler($event) {
            return ctx.manualDateChange($event.target.value);
          })("change", function NgbInputDatepicker_change_HostBindingHandler($event) {
            return ctx.manualDateChange($event.target.value, true);
          })("focus", function NgbInputDatepicker_focus_HostBindingHandler() {
            return ctx.onFocus();
          })("blur", function NgbInputDatepicker_blur_HostBindingHandler() {
            return ctx.onBlur();
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("disabled", ctx.disabled);
        }
      },
      inputs: {
        autoClose: "autoClose",
        contentTemplate: "contentTemplate",
        datepickerClass: "datepickerClass",
        dayTemplate: "dayTemplate",
        dayTemplateData: "dayTemplateData",
        displayMonths: "displayMonths",
        firstDayOfWeek: "firstDayOfWeek",
        footerTemplate: "footerTemplate",
        markDisabled: "markDisabled",
        minDate: "minDate",
        maxDate: "maxDate",
        navigation: "navigation",
        outsideDays: "outsideDays",
        placement: "placement",
        popperOptions: "popperOptions",
        restoreFocus: "restoreFocus",
        showWeekNumbers: "showWeekNumbers",
        startDate: "startDate",
        container: "container",
        positionTarget: "positionTarget",
        weekdays: "weekdays",
        disabled: "disabled"
      },
      outputs: {
        dateSelect: "dateSelect",
        navigate: "navigate",
        closed: "closed"
      },
      exportAs: ["ngbDatepicker"],
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgbInputDatepicker),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _NgbInputDatepicker),
        multi: true
      }, {
        provide: NgbDatepickerConfig,
        useExisting: NgbInputDatepickerConfig
      }]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbInputDatepicker, [{
    type: Directive,
    args: [{
      selector: "input[ngbDatepicker]",
      exportAs: "ngbDatepicker",
      host: {
        "(input)": "manualDateChange($event.target.value)",
        "(change)": "manualDateChange($event.target.value, true)",
        "(focus)": "onFocus()",
        "(blur)": "onBlur()",
        "[disabled]": "disabled"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgbInputDatepicker),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => NgbInputDatepicker),
        multi: true
      }, {
        provide: NgbDatepickerConfig,
        useExisting: NgbInputDatepickerConfig
      }]
    }]
  }], null, {
    autoClose: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }],
    datepickerClass: [{
      type: Input
    }],
    dayTemplate: [{
      type: Input
    }],
    dayTemplateData: [{
      type: Input
    }],
    displayMonths: [{
      type: Input
    }],
    firstDayOfWeek: [{
      type: Input
    }],
    footerTemplate: [{
      type: Input
    }],
    markDisabled: [{
      type: Input
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    navigation: [{
      type: Input
    }],
    outsideDays: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    popperOptions: [{
      type: Input
    }],
    restoreFocus: [{
      type: Input
    }],
    showWeekNumbers: [{
      type: Input
    }],
    startDate: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    positionTarget: [{
      type: Input
    }],
    weekdays: [{
      type: Input
    }],
    dateSelect: [{
      type: Output
    }],
    navigate: [{
      type: Output
    }],
    closed: [{
      type: Output
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var NgbCalendarHijri = class _NgbCalendarHijri extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
  getWeeksPerMonth() {
    return 6;
  }
  getNext(date, period = "d", number = 1) {
    date = new NgbDate(date.year, date.month, date.day);
    switch (period) {
      case "y":
        date = this._setYear(date, date.year + number);
        date.month = 1;
        date.day = 1;
        return date;
      case "m":
        date = this._setMonth(date, date.month + number);
        date.day = 1;
        return date;
      case "d":
        return this._setDay(date, date.day + number);
      default:
        return date;
    }
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    const day = this.toGregorian(date).getDay();
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    const date = week[thursdayIndex];
    const jsDate = this.toGregorian(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7));
    const time = jsDate.getTime();
    const MuhDate = this.toGregorian(new NgbDate(date.year, 1, 1));
    return Math.floor(Math.round((time - MuhDate.getTime()) / 864e5) / 7) + 1;
  }
  getToday() {
    return this.fromGregorian(/* @__PURE__ */ new Date());
  }
  isValid(date) {
    return date != null && isNumber(date.year) && isNumber(date.month) && isNumber(date.day) && !isNaN(this.toGregorian(date).getTime());
  }
  _setDay(date, day) {
    day = +day;
    let mDays = this.getDaysPerMonth(date.month, date.year);
    if (day <= 0) {
      while (day <= 0) {
        date = this._setMonth(date, date.month - 1);
        mDays = this.getDaysPerMonth(date.month, date.year);
        day += mDays;
      }
    } else if (day > mDays) {
      while (day > mDays) {
        day -= mDays;
        date = this._setMonth(date, date.month + 1);
        mDays = this.getDaysPerMonth(date.month, date.year);
      }
    }
    date.day = day;
    return date;
  }
  _setMonth(date, month) {
    month = +month;
    date.year = date.year + Math.floor((month - 1) / 12);
    date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
    return date;
  }
  _setYear(date, year) {
    date.year = +year;
    return date;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbCalendarHijri_BaseFactory;
      return function NgbCalendarHijri_Factory(__ngFactoryType__) {
        return (ɵNgbCalendarHijri_BaseFactory || (ɵNgbCalendarHijri_BaseFactory = ɵɵgetInheritedFactory(_NgbCalendarHijri)))(__ngFactoryType__ || _NgbCalendarHijri);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendarHijri,
      factory: _NgbCalendarHijri.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarHijri, [{
    type: Injectable
  }], null, null);
})();
function isIslamicLeapYear(hYear) {
  return (14 + 11 * hYear) % 30 < 11;
}
function isGregorianLeapYear$1(gDate) {
  const year = gDate.getFullYear();
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function getIslamicMonthStart(hYear, hMonth) {
  return Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30);
}
function getIslamicYearStart(year) {
  return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30);
}
function mod$1(a, b) {
  return a - b * Math.floor(a / b);
}
var GREGORIAN_EPOCH$1 = 17214255e-1;
var ISLAMIC_EPOCH = 19484395e-1;
var NgbCalendarIslamicCivil = class _NgbCalendarIslamicCivil extends NgbCalendarHijri {
  /**
   * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
   * `gDate` is a JS Date to be converted to Hijri.
   */
  fromGregorian(gDate) {
    const gYear = gDate.getFullYear(), gMonth = gDate.getMonth(), gDay = gDate.getDate();
    let julianDay = GREGORIAN_EPOCH$1 - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) + -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) + Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear$1(gDate) ? -1 : -2) + gDay);
    julianDay = Math.floor(julianDay) + 0.5;
    const days = julianDay - ISLAMIC_EPOCH;
    const hYear = Math.floor((30 * days + 10646) / 10631);
    let hMonth = Math.ceil((days - 29 - getIslamicYearStart(hYear)) / 29.5);
    hMonth = Math.min(hMonth, 11);
    const hDay = Math.ceil(days - getIslamicMonthStart(hYear, hMonth)) + 1;
    return new NgbDate(hYear, hMonth + 1, hDay);
  }
  /**
   * Returns the equivalent JS date value for a give input islamic(civil) date.
   * `hDate` is an islamic(civil) date to be converted to Gregorian.
   */
  toGregorian(hDate) {
    const hYear = hDate.year;
    const hMonth = hDate.month - 1;
    const hDay = hDate.day;
    const julianDay = hDay + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
    const wjd = Math.floor(julianDay - 0.5) + 0.5, depoch = wjd - GREGORIAN_EPOCH$1, quadricent = Math.floor(depoch / 146097), dqc = mod$1(depoch, 146097), cent = Math.floor(dqc / 36524), dcent = mod$1(dqc, 36524), quad = Math.floor(dcent / 1461), dquad = mod$1(dcent, 1461), yindex = Math.floor(dquad / 365);
    let year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
    if (!(cent === 4 || yindex === 4)) {
      year++;
    }
    const gYearStart = GREGORIAN_EPOCH$1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400);
    const yearday = wjd - gYearStart;
    const tjd = GREGORIAN_EPOCH$1 - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear$1(new Date(year, 3, 1)) ? -1 : -2) + 1);
    const leapadj = wjd < tjd ? 0 : isGregorianLeapYear$1(new Date(year, 3, 1)) ? 1 : 2;
    const month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
    const tjd2 = GREGORIAN_EPOCH$1 - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear$1(new Date(year, month - 1, 1)) ? -1 : -2) + 1);
    const day = wjd - tjd2 + 1;
    return new Date(year, month - 1, day);
  }
  /**
   * Returns the number of days in a specific Hijri month.
   * `month` is 1 for Muharram, 2 for Safar, etc.
   * `year` is any Hijri year.
   */
  getDaysPerMonth(month, year) {
    year = year + Math.floor(month / 13);
    month = (month - 1) % 12 + 1;
    let length = 29 + month % 2;
    if (month === 12 && isIslamicLeapYear(year)) {
      length++;
    }
    return length;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbCalendarIslamicCivil_BaseFactory;
      return function NgbCalendarIslamicCivil_Factory(__ngFactoryType__) {
        return (ɵNgbCalendarIslamicCivil_BaseFactory || (ɵNgbCalendarIslamicCivil_BaseFactory = ɵɵgetInheritedFactory(_NgbCalendarIslamicCivil)))(__ngFactoryType__ || _NgbCalendarIslamicCivil);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendarIslamicCivil,
      factory: _NgbCalendarIslamicCivil.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarIslamicCivil, [{
    type: Injectable
  }], null, null);
})();
var GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
var GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
var HIJRI_BEGIN = 1300;
var HIJRI_END = 1600;
var ONE_DAY = 1e3 * 60 * 60 * 24;
var MONTH_LENGTH = [
  // 1300-1304
  "101010101010",
  "110101010100",
  "111011001001",
  "011011010100",
  "011011101010",
  // 1305-1309
  "001101101100",
  "101010101101",
  "010101010101",
  "011010101001",
  "011110010010",
  // 1310-1314
  "101110101001",
  "010111010100",
  "101011011010",
  "010101011100",
  "110100101101",
  // 1315-1319
  "011010010101",
  "011101001010",
  "101101010100",
  "101101101010",
  "010110101101",
  // 1320-1324
  "010010101110",
  "101001001111",
  "010100010111",
  "011010001011",
  "011010100101",
  // 1325-1329
  "101011010101",
  "001011010110",
  "100101011011",
  "010010011101",
  "101001001101",
  // 1330-1334
  "110100100110",
  "110110010101",
  "010110101100",
  "100110110110",
  "001010111010",
  // 1335-1339
  "101001011011",
  "010100101011",
  "101010010101",
  "011011001010",
  "101011101001",
  // 1340-1344
  "001011110100",
  "100101110110",
  "001010110110",
  "100101010110",
  "101011001010",
  // 1345-1349
  "101110100100",
  "101111010010",
  "010111011001",
  "001011011100",
  "100101101101",
  // 1350-1354
  "010101001101",
  "101010100101",
  "101101010010",
  "101110100101",
  "010110110100",
  // 1355-1359
  "100110110110",
  "010101010111",
  "001010010111",
  "010101001011",
  "011010100011",
  // 1360-1364
  "011101010010",
  "101101100101",
  "010101101010",
  "101010101011",
  "010100101011",
  // 1365-1369
  "110010010101",
  "110101001010",
  "110110100101",
  "010111001010",
  "101011010110",
  // 1370-1374
  "100101010111",
  "010010101011",
  "100101001011",
  "101010100101",
  "101101010010",
  // 1375-1379
  "101101101010",
  "010101110101",
  "001001110110",
  "100010110111",
  "010001011011",
  // 1380-1384
  "010101010101",
  "010110101001",
  "010110110100",
  "100111011010",
  "010011011101",
  // 1385-1389
  "001001101110",
  "100100110110",
  "101010101010",
  "110101010100",
  "110110110010",
  // 1390-1394
  "010111010101",
  "001011011010",
  "100101011011",
  "010010101011",
  "101001010101",
  // 1395-1399
  "101101001001",
  "101101100100",
  "101101110001",
  "010110110100",
  "101010110101",
  // 1400-1404
  "101001010101",
  "110100100101",
  "111010010010",
  "111011001001",
  "011011010100",
  // 1405-1409
  "101011101001",
  "100101101011",
  "010010101011",
  "101010010011",
  "110101001001",
  // 1410-1414
  "110110100100",
  "110110110010",
  "101010111001",
  "010010111010",
  "101001011011",
  // 1415-1419
  "010100101011",
  "101010010101",
  "101100101010",
  "101101010101",
  "010101011100",
  // 1420-1424
  "010010111101",
  "001000111101",
  "100100011101",
  "101010010101",
  "101101001010",
  // 1425-1429
  "101101011010",
  "010101101101",
  "001010110110",
  "100100111011",
  "010010011011",
  // 1430-1434
  "011001010101",
  "011010101001",
  "011101010100",
  "101101101010",
  "010101101100",
  // 1435-1439
  "101010101101",
  "010101010101",
  "101100101001",
  "101110010010",
  "101110101001",
  // 1440-1444
  "010111010100",
  "101011011010",
  "010101011010",
  "101010101011",
  "010110010101",
  // 1445-1449
  "011101001001",
  "011101100100",
  "101110101010",
  "010110110101",
  "001010110110",
  // 1450-1454
  "101001010110",
  "111001001101",
  "101100100101",
  "101101010010",
  "101101101010",
  // 1455-1459
  "010110101101",
  "001010101110",
  "100100101111",
  "010010010111",
  "011001001011",
  // 1460-1464
  "011010100101",
  "011010101100",
  "101011010110",
  "010101011101",
  "010010011101",
  // 1465-1469
  "101001001101",
  "110100010110",
  "110110010101",
  "010110101010",
  "010110110101",
  // 1470-1474
  "001011011010",
  "100101011011",
  "010010101101",
  "010110010101",
  "011011001010",
  // 1475-1479
  "011011100100",
  "101011101010",
  "010011110101",
  "001010110110",
  "100101010110",
  // 1480-1484
  "101010101010",
  "101101010100",
  "101111010010",
  "010111011001",
  "001011101010",
  // 1485-1489
  "100101101101",
  "010010101101",
  "101010010101",
  "101101001010",
  "101110100101",
  // 1490-1494
  "010110110010",
  "100110110101",
  "010011010110",
  "101010010111",
  "010101000111",
  // 1495-1499
  "011010010011",
  "011101001001",
  "101101010101",
  "010101101010",
  "101001101011",
  // 1500-1504
  "010100101011",
  "101010001011",
  "110101000110",
  "110110100011",
  "010111001010",
  // 1505-1509
  "101011010110",
  "010011011011",
  "001001101011",
  "100101001011",
  "101010100101",
  // 1510-1514
  "101101010010",
  "101101101001",
  "010101110101",
  "000101110110",
  "100010110111",
  // 1515-1519
  "001001011011",
  "010100101011",
  "010101100101",
  "010110110100",
  "100111011010",
  // 1520-1524
  "010011101101",
  "000101101101",
  "100010110110",
  "101010100110",
  "110101010010",
  // 1525-1529
  "110110101001",
  "010111010100",
  "101011011010",
  "100101011011",
  "010010101011",
  // 1530-1534
  "011001010011",
  "011100101001",
  "011101100010",
  "101110101001",
  "010110110010",
  // 1535-1539
  "101010110101",
  "010101010101",
  "101100100101",
  "110110010010",
  "111011001001",
  // 1540-1544
  "011011010010",
  "101011101001",
  "010101101011",
  "010010101011",
  "101001010101",
  // 1545-1549
  "110100101001",
  "110101010100",
  "110110101010",
  "100110110101",
  "010010111010",
  // 1550-1554
  "101000111011",
  "010010011011",
  "101001001101",
  "101010101010",
  "101011010101",
  // 1555-1559
  "001011011010",
  "100101011101",
  "010001011110",
  "101000101110",
  "110010011010",
  // 1560-1564
  "110101010101",
  "011010110010",
  "011010111001",
  "010010111010",
  "101001011101",
  // 1565-1569
  "010100101101",
  "101010010101",
  "101101010010",
  "101110101000",
  "101110110100",
  // 1570-1574
  "010110111001",
  "001011011010",
  "100101011010",
  "101101001010",
  "110110100100",
  // 1575-1579
  "111011010001",
  "011011101000",
  "101101101010",
  "010101101101",
  "010100110101",
  // 1580-1584
  "011010010101",
  "110101001010",
  "110110101000",
  "110111010100",
  "011011011010",
  // 1585-1589
  "010101011011",
  "001010011101",
  "011000101011",
  "101100010101",
  "101101001010",
  // 1590-1594
  "101110010101",
  "010110101010",
  "101010101110",
  "100100101110",
  "110010001111",
  // 1595-1599
  "010100100111",
  "011010010101",
  "011010101010",
  "101011010110",
  "010101011101",
  // 1600
  "001010011101"
];
function getDaysDiff(date1, date2) {
  const time1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const time2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  const diff = Math.abs(time1 - time2);
  return Math.round(diff / ONE_DAY);
}
var NgbCalendarIslamicUmalqura = class _NgbCalendarIslamicUmalqura extends NgbCalendarIslamicCivil {
  /**
   * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
   * `gdate` is s JS Date to be converted to Hijri.
   */
  fromGregorian(gDate) {
    let hDay = 1, hMonth = 0, hYear = 1300;
    let daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);
    if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
      let year = 1300;
      for (let i = 0; i < MONTH_LENGTH.length; i++, year++) {
        for (let j = 0; j < 12; j++) {
          let numOfDays = +MONTH_LENGTH[i][j] + 29;
          if (daysDiff <= numOfDays) {
            hDay = daysDiff + 1;
            if (hDay > numOfDays) {
              hDay = 1;
              j++;
            }
            if (j > 11) {
              j = 0;
              year++;
            }
            hMonth = j;
            hYear = year;
            return new NgbDate(hYear, hMonth + 1, hDay);
          }
          daysDiff = daysDiff - numOfDays;
        }
      }
      return null;
    } else {
      return super.fromGregorian(gDate);
    }
  }
  /**
   * Converts the current Hijri date to Gregorian.
   */
  toGregorian(hDate) {
    const hYear = hDate.year;
    const hMonth = hDate.month - 1;
    const hDay = hDate.day;
    let gDate = new Date(GREGORIAN_FIRST_DATE);
    let dayDiff = hDay - 1;
    if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
      for (let y = 0; y < hYear - HIJRI_BEGIN; y++) {
        for (let m = 0; m < 12; m++) {
          dayDiff += +MONTH_LENGTH[y][m] + 29;
        }
      }
      for (let m = 0; m < hMonth; m++) {
        dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][m] + 29;
      }
      gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
    } else {
      gDate = super.toGregorian(hDate);
    }
    return gDate;
  }
  /**
   * Returns the number of days in a specific Hijri hMonth.
   * `hMonth` is 1 for Muharram, 2 for Safar, etc.
   * `hYear` is any Hijri hYear.
   */
  getDaysPerMonth(hMonth, hYear) {
    if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
      const pos = hYear - HIJRI_BEGIN;
      return +MONTH_LENGTH[pos][hMonth - 1] + 29;
    }
    return super.getDaysPerMonth(hMonth, hYear);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbCalendarIslamicUmalqura_BaseFactory;
      return function NgbCalendarIslamicUmalqura_Factory(__ngFactoryType__) {
        return (ɵNgbCalendarIslamicUmalqura_BaseFactory || (ɵNgbCalendarIslamicUmalqura_BaseFactory = ɵɵgetInheritedFactory(_NgbCalendarIslamicUmalqura)))(__ngFactoryType__ || _NgbCalendarIslamicUmalqura);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendarIslamicUmalqura,
      factory: _NgbCalendarIslamicUmalqura.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarIslamicUmalqura, [{
    type: Injectable
  }], null, null);
})();
function toGregorian$3(jalaliDate) {
  let jdn = jalaliToJulian(jalaliDate.year, jalaliDate.month, jalaliDate.day);
  let date = julianToGregorian$1(jdn);
  date.setHours(6, 30, 3, 200);
  return date;
}
function fromGregorian$3(gdate) {
  let g2d = gregorianToJulian$1(gdate.getFullYear(), gdate.getMonth() + 1, gdate.getDate());
  return julianToJalali(g2d);
}
function setJalaliYear(date, yearValue) {
  date.year = +yearValue;
  return date;
}
function setJalaliMonth(date, month) {
  month = +month;
  date.year = date.year + Math.floor((month - 1) / 12);
  date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
  return date;
}
function setJalaliDay(date, day) {
  let mDays = getDaysPerMonth$1(date.month, date.year);
  if (day <= 0) {
    while (day <= 0) {
      date = setJalaliMonth(date, date.month - 1);
      mDays = getDaysPerMonth$1(date.month, date.year);
      day += mDays;
    }
  } else if (day > mDays) {
    while (day > mDays) {
      day -= mDays;
      date = setJalaliMonth(date, date.month + 1);
      mDays = getDaysPerMonth$1(date.month, date.year);
    }
  }
  date.day = day;
  return date;
}
function mod(a, b) {
  return a - b * Math.floor(a / b);
}
function div(a, b) {
  return Math.trunc(a / b);
}
function jalCal(jalaliYear) {
  let breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
  const breaksLength = breaks.length;
  const gYear = jalaliYear + 621;
  let leapJ = -14;
  let jp = breaks[0];
  if (jalaliYear < jp || jalaliYear >= breaks[breaksLength - 1]) {
    throw new Error("Invalid Jalali year " + jalaliYear);
  }
  let jump;
  for (let i = 1; i < breaksLength; i += 1) {
    const jm = breaks[i];
    jump = jm - jp;
    if (jalaliYear < jm) {
      break;
    }
    leapJ = leapJ + div(jump, 33) * 8 + div(mod(jump, 33), 4);
    jp = jm;
  }
  let n = jalaliYear - jp;
  leapJ = leapJ + div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
  if (mod(jump, 33) === 4 && jump - n === 4) {
    leapJ += 1;
  }
  const leapG = div(gYear, 4) - div((div(gYear, 100) + 1) * 3, 4) - 150;
  const march = 20 + leapJ - leapG;
  if (jump - n < 6) {
    n = n - jump + div(jump + 4, 33) * 33;
  }
  let leap = mod(mod(n + 1, 33) - 1, 4);
  if (leap === -1) {
    leap = 4;
  }
  return {
    leap,
    gy: gYear,
    march
  };
}
function julianToGregorian$1(julianDayNumber) {
  let j = 4 * julianDayNumber + 139361631;
  j = j + div(div(4 * julianDayNumber + 183187720, 146097) * 3, 4) * 4 - 3908;
  const i = div(mod(j, 1461), 4) * 5 + 308;
  const gDay = div(mod(i, 153), 5) + 1;
  const gMonth = mod(div(i, 153), 12) + 1;
  const gYear = div(j, 1461) - 100100 + div(8 - gMonth, 6);
  return new Date(gYear, gMonth - 1, gDay);
}
function gregorianToJulian$1(gy, gm, gd) {
  let d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
  return d;
}
function julianToJalali(julianDayNumber) {
  let gy = julianToGregorian$1(julianDayNumber).getFullYear(), jalaliYear = gy - 621, r = jalCal(jalaliYear), gregorianDay = gregorianToJulian$1(gy, 3, r.march), jalaliDay, jalaliMonth, numberOfDays;
  numberOfDays = julianDayNumber - gregorianDay;
  if (numberOfDays >= 0) {
    if (numberOfDays <= 185) {
      jalaliMonth = 1 + div(numberOfDays, 31);
      jalaliDay = mod(numberOfDays, 31) + 1;
      return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
    } else {
      numberOfDays -= 186;
    }
  } else {
    jalaliYear -= 1;
    numberOfDays += 179;
    if (r.leap === 1) {
      numberOfDays += 1;
    }
  }
  jalaliMonth = 7 + div(numberOfDays, 30);
  jalaliDay = mod(numberOfDays, 30) + 1;
  return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
}
function jalaliToJulian(jYear, jMonth, jDay) {
  let r = jalCal(jYear);
  return gregorianToJulian$1(r.gy, 3, r.march) + (jMonth - 1) * 31 - div(jMonth, 7) * (jMonth - 7) + jDay - 1;
}
function getDaysPerMonth$1(month, year) {
  if (month <= 6) {
    return 31;
  }
  if (month <= 11) {
    return 30;
  }
  if (jalCal(year).leap === 0) {
    return 30;
  }
  return 29;
}
var NgbCalendarPersian = class _NgbCalendarPersian extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }
  getWeeksPerMonth() {
    return 6;
  }
  getNext(date, period = "d", number = 1) {
    date = new NgbDate(date.year, date.month, date.day);
    switch (period) {
      case "y":
        date = setJalaliYear(date, date.year + number);
        date.month = 1;
        date.day = 1;
        return date;
      case "m":
        date = setJalaliMonth(date, date.month + number);
        date.day = 1;
        return date;
      case "d":
        return setJalaliDay(date, date.day + number);
      default:
        return date;
    }
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    const day = toGregorian$3(date).getDay();
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    const date = week[thursdayIndex];
    const jsDate = toGregorian$3(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7));
    const time = jsDate.getTime();
    const startDate = toGregorian$3(new NgbDate(date.year, 1, 1));
    return Math.floor(Math.round((time - startDate.getTime()) / 864e5) / 7) + 1;
  }
  getToday() {
    return fromGregorian$3(/* @__PURE__ */ new Date());
  }
  isValid(date) {
    return date != null && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) && !isNaN(toGregorian$3(date).getTime());
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbCalendarPersian_BaseFactory;
      return function NgbCalendarPersian_Factory(__ngFactoryType__) {
        return (ɵNgbCalendarPersian_BaseFactory || (ɵNgbCalendarPersian_BaseFactory = ɵɵgetInheritedFactory(_NgbCalendarPersian)))(__ngFactoryType__ || _NgbCalendarPersian);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendarPersian,
      factory: _NgbCalendarPersian.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarPersian, [{
    type: Injectable
  }], null, null);
})();
var PARTS_PER_HOUR = 1080;
var PARTS_PER_DAY = 24 * PARTS_PER_HOUR;
var PARTS_FRACTIONAL_MONTH = 12 * PARTS_PER_HOUR + 793;
var PARTS_PER_MONTH = 29 * PARTS_PER_DAY + PARTS_FRACTIONAL_MONTH;
var BAHARAD = 11 * PARTS_PER_HOUR + 204;
var HEBREW_DAY_ON_JAN_1_1970 = 2092591;
var GREGORIAN_EPOCH = 17214255e-1;
function isGregorianLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function numberOfFirstDayInYear(year) {
  let monthsBeforeYear = Math.floor((235 * year - 234) / 19);
  let fractionalMonthsBeforeYear = monthsBeforeYear * PARTS_FRACTIONAL_MONTH + BAHARAD;
  let dayNumber = monthsBeforeYear * 29 + Math.floor(fractionalMonthsBeforeYear / PARTS_PER_DAY);
  let timeOfDay = fractionalMonthsBeforeYear % PARTS_PER_DAY;
  let dayOfWeek = dayNumber % 7;
  if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6) {
    dayNumber++;
    dayOfWeek = dayNumber % 7;
  }
  if (dayOfWeek === 1 && timeOfDay > 15 * PARTS_PER_HOUR + 204 && !isHebrewLeapYear(year)) {
    dayNumber += 2;
  } else if (dayOfWeek === 0 && timeOfDay > 21 * PARTS_PER_HOUR + 589 && isHebrewLeapYear(year - 1)) {
    dayNumber++;
  }
  return dayNumber;
}
function getDaysInGregorianMonth(month, year) {
  let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (isGregorianLeapYear(year)) {
    days[1]++;
  }
  return days[month - 1];
}
function getHebrewMonths(year) {
  return isHebrewLeapYear(year) ? 13 : 12;
}
function getDaysInHebrewYear(year) {
  return numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
}
function isHebrewLeapYear(year) {
  if (year != null) {
    let b = (year * 12 + 17) % 19;
    return b >= (b < 0 ? -7 : 12);
  }
  return false;
}
function getDaysInHebrewMonth(month, year) {
  let yearLength = numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
  let yearType = (yearLength <= 380 ? yearLength : yearLength - 30) - 353;
  let leapYear = isHebrewLeapYear(year);
  let daysInMonth = leapYear ? [30, 29, 29, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29] : [30, 29, 29, 29, 30, 29, 30, 29, 30, 29, 30, 29];
  if (yearType > 0) {
    daysInMonth[2]++;
  }
  if (yearType > 1) {
    daysInMonth[1]++;
  }
  return daysInMonth[month - 1];
}
function getDayNumberInHebrewYear(date) {
  let numberOfDay = 0;
  for (let i = 1; i < date.month; i++) {
    numberOfDay += getDaysInHebrewMonth(i, date.year);
  }
  return numberOfDay + date.day;
}
function setHebrewMonth(date, val) {
  let after = val >= 0;
  if (!after) {
    val = -val;
  }
  while (val > 0) {
    if (after) {
      if (val > getHebrewMonths(date.year) - date.month) {
        val -= getHebrewMonths(date.year) - date.month + 1;
        date.year++;
        date.month = 1;
      } else {
        date.month += val;
        val = 0;
      }
    } else {
      if (val >= date.month) {
        date.year--;
        val -= date.month;
        date.month = getHebrewMonths(date.year);
      } else {
        date.month -= val;
        val = 0;
      }
    }
  }
  return date;
}
function setHebrewDay(date, val) {
  let after = val >= 0;
  if (!after) {
    val = -val;
  }
  while (val > 0) {
    if (after) {
      if (val > getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date)) {
        val -= getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date) + 1;
        date.year++;
        date.month = 1;
        date.day = 1;
      } else if (val > getDaysInHebrewMonth(date.month, date.year) - date.day) {
        val -= getDaysInHebrewMonth(date.month, date.year) - date.day + 1;
        date.month++;
        date.day = 1;
      } else {
        date.day += val;
        val = 0;
      }
    } else {
      if (val >= date.day) {
        val -= date.day;
        date.month--;
        if (date.month === 0) {
          date.year--;
          date.month = getHebrewMonths(date.year);
        }
        date.day = getDaysInHebrewMonth(date.month, date.year);
      } else {
        date.day -= val;
        val = 0;
      }
    }
  }
  return date;
}
function fromGregorian$2(gdate) {
  const date = new Date(gdate);
  const gYear = date.getFullYear(), gMonth = date.getMonth(), gDay = date.getDate();
  let julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) - Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) + Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(gYear) ? -1 : -2) + gDay);
  julianDay = Math.floor(julianDay + 0.5);
  let daysSinceHebEpoch = julianDay - 347997;
  let monthsSinceHebEpoch = Math.floor(daysSinceHebEpoch * PARTS_PER_DAY / PARTS_PER_MONTH);
  let hYear = Math.floor((monthsSinceHebEpoch * 19 + 234) / 235) + 1;
  let firstDayOfThisYear = numberOfFirstDayInYear(hYear);
  let dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
  while (dayOfYear < 1) {
    hYear--;
    firstDayOfThisYear = numberOfFirstDayInYear(hYear);
    dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
  }
  let hMonth = 1;
  let hDay = dayOfYear;
  while (hDay > getDaysInHebrewMonth(hMonth, hYear)) {
    hDay -= getDaysInHebrewMonth(hMonth, hYear);
    hMonth++;
  }
  return new NgbDate(hYear, hMonth, hDay);
}
function toGregorian$2(hebrewDate) {
  const hYear = hebrewDate.year;
  const hMonth = hebrewDate.month;
  const hDay = hebrewDate.day;
  let days = numberOfFirstDayInYear(hYear);
  for (let i = 1; i < hMonth; i++) {
    days += getDaysInHebrewMonth(i, hYear);
  }
  days += hDay;
  let diffDays = days - HEBREW_DAY_ON_JAN_1_1970;
  let after = diffDays >= 0;
  if (!after) {
    diffDays = -diffDays;
  }
  let gYear = 1970;
  let gMonth = 1;
  let gDay = 1;
  while (diffDays > 0) {
    if (after) {
      if (diffDays >= (isGregorianLeapYear(gYear) ? 366 : 365)) {
        diffDays -= isGregorianLeapYear(gYear) ? 366 : 365;
        gYear++;
      } else if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
        diffDays -= getDaysInGregorianMonth(gMonth, gYear);
        gMonth++;
      } else {
        gDay += diffDays;
        diffDays = 0;
      }
    } else {
      if (diffDays >= (isGregorianLeapYear(gYear - 1) ? 366 : 365)) {
        diffDays -= isGregorianLeapYear(gYear - 1) ? 366 : 365;
        gYear--;
      } else {
        if (gMonth > 1) {
          gMonth--;
        } else {
          gMonth = 12;
          gYear--;
        }
        if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
          diffDays -= getDaysInGregorianMonth(gMonth, gYear);
        } else {
          gDay = getDaysInGregorianMonth(gMonth, gYear) - diffDays + 1;
          diffDays = 0;
        }
      }
    }
  }
  return new Date(gYear, gMonth - 1, gDay);
}
function hebrewNumerals(numerals) {
  if (!numerals) {
    return "";
  }
  const hArray0_9 = ["", "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט"];
  const hArray10_19 = ["י", "יא", "יב", "יג", "יד", "טו", "טז", "יז", "יח", "יט"];
  const hArray20_90 = ["", "", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ"];
  const hArray100_900 = ["", "ק", "ר", "ש", "ת", "תק", "תר", "תש", "תת", "תתק"];
  const hArray1000_9000 = ["", "א", "ב", "בא", "בב", "ה", "הא", "הב", "הבא", "הבב"];
  const geresh = "׳", gershaim = "״";
  let mem = 0;
  let result = [];
  let step = 0;
  while (numerals > 0) {
    let m = numerals % 10;
    if (step === 0) {
      mem = m;
    } else if (step === 1) {
      if (m !== 1) {
        result.unshift(hArray20_90[m], hArray0_9[mem]);
      } else {
        result.unshift(hArray10_19[mem]);
      }
    } else if (step === 2) {
      result.unshift(hArray100_900[m]);
    } else {
      if (m !== 5) {
        result.unshift(hArray1000_9000[m], geresh, " ");
      }
      break;
    }
    numerals = Math.floor(numerals / 10);
    if (step === 0 && numerals === 0) {
      result.unshift(hArray0_9[m]);
    }
    step++;
  }
  result = result.join("").split("");
  if (result.length === 1) {
    result.push(geresh);
  } else if (result.length > 1) {
    result.splice(result.length - 1, 0, gershaim);
  }
  return result.join("");
}
var NgbCalendarHebrew = class _NgbCalendarHebrew extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths(year) {
    if (year && isHebrewLeapYear(year)) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    } else {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    }
  }
  getWeeksPerMonth() {
    return 6;
  }
  isValid(date) {
    if (date != null) {
      let b = isNumber(date.year) && isNumber(date.month) && isNumber(date.day);
      b = b && date.month > 0 && date.month <= (isHebrewLeapYear(date.year) ? 13 : 12);
      b = b && date.day > 0 && date.day <= getDaysInHebrewMonth(date.month, date.year);
      return b && !isNaN(toGregorian$2(date).getTime());
    }
    return false;
  }
  getNext(date, period = "d", number = 1) {
    date = new NgbDate(date.year, date.month, date.day);
    switch (period) {
      case "y":
        date.year += number;
        date.month = 1;
        date.day = 1;
        return date;
      case "m":
        date = setHebrewMonth(date, number);
        date.day = 1;
        return date;
      case "d":
        return setHebrewDay(date, number);
      default:
        return date;
    }
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    const day = toGregorian$2(date).getDay();
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    const date = week[week.length - 1];
    return Math.ceil(getDayNumberInHebrewYear(date) / 7);
  }
  getToday() {
    return fromGregorian$2(/* @__PURE__ */ new Date());
  }
  /**
   * @since 3.4.0
   */
  toGregorian(date) {
    return fromJSDate(toGregorian$2(date));
  }
  /**
   * @since 3.4.0
   */
  fromGregorian(date) {
    return fromGregorian$2(toJSDate(date));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbCalendarHebrew_BaseFactory;
      return function NgbCalendarHebrew_Factory(__ngFactoryType__) {
        return (ɵNgbCalendarHebrew_BaseFactory || (ɵNgbCalendarHebrew_BaseFactory = ɵɵgetInheritedFactory(_NgbCalendarHebrew)))(__ngFactoryType__ || _NgbCalendarHebrew);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendarHebrew,
      factory: _NgbCalendarHebrew.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarHebrew, [{
    type: Injectable
  }], null, null);
})();
var WEEKDAYS$1 = ["שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"];
var MONTHS$1 = ["תשרי", "חשון", "כסלו", "טבת", "שבט", "אדר", "ניסן", "אייר", "סיון", "תמוז", "אב", "אלול"];
var MONTHS_LEAP = ["תשרי", "חשון", "כסלו", "טבת", "שבט", "אדר א׳", "אדר ב׳", "ניסן", "אייר", "סיון", "תמוז", "אב", "אלול"];
var NgbDatepickerI18nHebrew = class _NgbDatepickerI18nHebrew extends NgbDatepickerI18n {
  getMonthShortName(month, year) {
    return this.getMonthFullName(month, year);
  }
  getMonthFullName(month, year) {
    return isHebrewLeapYear(year) ? MONTHS_LEAP[month - 1] || "" : MONTHS$1[month - 1] || "";
  }
  getWeekdayLabel(weekday, width) {
    return WEEKDAYS$1[weekday - 1] || "";
  }
  getDayAriaLabel(date) {
    return `${hebrewNumerals(date.day)} ${this.getMonthFullName(date.month, date.year)} ${hebrewNumerals(date.year)}`;
  }
  getDayNumerals(date) {
    return hebrewNumerals(date.day);
  }
  getWeekNumerals(weekNumber) {
    return hebrewNumerals(weekNumber);
  }
  getYearNumerals(year) {
    return hebrewNumerals(year);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbDatepickerI18nHebrew_BaseFactory;
      return function NgbDatepickerI18nHebrew_Factory(__ngFactoryType__) {
        return (ɵNgbDatepickerI18nHebrew_BaseFactory || (ɵNgbDatepickerI18nHebrew_BaseFactory = ɵɵgetInheritedFactory(_NgbDatepickerI18nHebrew)))(__ngFactoryType__ || _NgbDatepickerI18nHebrew);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDatepickerI18nHebrew,
      factory: _NgbDatepickerI18nHebrew.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerI18nHebrew, [{
    type: Injectable
  }], null, null);
})();
function toGregorian$1(date) {
  return new Date(date.year - 543, date.month - 1, date.day);
}
function fromGregorian$1(gdate) {
  return new NgbDate(gdate.getFullYear() + 543, gdate.getMonth() + 1, gdate.getDate());
}
var NgbCalendarBuddhist = class _NgbCalendarBuddhist extends NgbCalendarGregorian {
  getToday() {
    return fromGregorian$1(/* @__PURE__ */ new Date());
  }
  getNext(date, period = "d", number = 1) {
    let jsDate = toGregorian$1(date);
    let checkMonth = true;
    let expectedMonth = jsDate.getMonth();
    switch (period) {
      case "y":
        jsDate.setFullYear(jsDate.getFullYear() + number);
        break;
      case "m":
        expectedMonth += number;
        jsDate.setMonth(expectedMonth);
        expectedMonth = expectedMonth % 12;
        if (expectedMonth < 0) {
          expectedMonth = expectedMonth + 12;
        }
        break;
      case "d":
        jsDate.setDate(jsDate.getDate() + number);
        checkMonth = false;
        break;
      default:
        return date;
    }
    if (checkMonth && jsDate.getMonth() !== expectedMonth) {
      jsDate.setDate(0);
    }
    return fromGregorian$1(jsDate);
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    let jsDate = toGregorian$1(date);
    let day = jsDate.getDay();
    return day === 0 ? 7 : day;
  }
  getWeekNumber(week, firstDayOfWeek) {
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    let date = week[thursdayIndex];
    const jsDate = toGregorian$1(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7));
    const time = jsDate.getTime();
    jsDate.setMonth(0);
    jsDate.setDate(1);
    return Math.floor(Math.round((time - jsDate.getTime()) / 864e5) / 7) + 1;
  }
  isValid(date) {
    if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
      return false;
    }
    if (date.year === 0) {
      return false;
    }
    const jsDate = toGregorian$1(date);
    return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year - 543 && jsDate.getMonth() + 1 === date.month && jsDate.getDate() === date.day;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbCalendarBuddhist_BaseFactory;
      return function NgbCalendarBuddhist_Factory(__ngFactoryType__) {
        return (ɵNgbCalendarBuddhist_BaseFactory || (ɵNgbCalendarBuddhist_BaseFactory = ɵɵgetInheritedFactory(_NgbCalendarBuddhist)))(__ngFactoryType__ || _NgbCalendarBuddhist);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendarBuddhist,
      factory: _NgbCalendarBuddhist.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarBuddhist, [{
    type: Injectable
  }], null, null);
})();
var JD_EPOCH = 17242205e-1;
var DAYSPERMONTH = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 5];
function isEthiopianLeapYear(year) {
  if (year != null) {
    return year % 4 == 3 || year % 4 == -1;
  }
  return false;
}
function setEthiopianYear(date, yearValue) {
  date.year = +yearValue;
  return date;
}
function setEthiopianMonth(date, val) {
  val = +val;
  date.year = date.year + Math.floor((val - 1) / 13);
  date.month = Math.floor(((val - 1) % 13 + 13) % 13) + 1;
  return date;
}
function setEthiopianDay(date, day) {
  let mDays = getDaysPerMonth(date.month, date.year);
  if (day <= 0) {
    while (day <= 0) {
      date = setEthiopianMonth(date, date.month - 1);
      mDays = getDaysPerMonth(date.month, date.year);
      day += mDays;
    }
  } else if (day > mDays) {
    while (day > mDays) {
      day -= mDays;
      date = setEthiopianMonth(date, date.month + 1);
      mDays = getDaysPerMonth(date.month, date.year);
    }
  }
  date.day = day;
  return date;
}
function getDaysPerMonth(month, year) {
  let leapYear = isEthiopianLeapYear(year);
  return DAYSPERMONTH[month - 1] + (month === 13 && leapYear ? 1 : 0);
}
function toGregorian(ethiopianDate) {
  let jdn = ethiopianToJulian(ethiopianDate.year, ethiopianDate.month, ethiopianDate.day);
  let date = julianToGregorian(jdn);
  date.setHours(6, 30, 3, 200);
  return date;
}
function fromGregorian(gdate) {
  let g2d = gregorianToJulian(gdate.getFullYear(), gdate.getMonth() + 1, gdate.getDate());
  return juilianToEthiopia(g2d);
}
function ethiopianToJulian(year, month, day) {
  if (year < 0) {
    year++;
  }
  return day + (month - 1) * 30 + (year - 1) * 365 + Math.floor(year / 4) + JD_EPOCH - 1;
}
function juilianToEthiopia(jd) {
  let c = Math.floor(jd) + 0.5 - JD_EPOCH;
  let year = Math.floor((c - Math.floor((c + 366) / 1461)) / 365) + 1;
  if (year <= 0) {
    year--;
  }
  c = Math.floor(jd) + 0.5 - ethiopianToJulian(year, 1, 1);
  let month = Math.floor(c / 30) + 1;
  let day = c - (month - 1) * 30 + 1;
  return new NgbDate(year, month, day);
}
function julianToGregorian(jd) {
  let z = Math.floor(jd + 0.5);
  let a = Math.floor((z - 186721625e-2) / 36524.25);
  a = z + 1 + a - Math.floor(a / 4);
  let b = a + 1524;
  let c = Math.floor((b - 122.1) / 365.25);
  let d = Math.floor(365.25 * c);
  let e = Math.floor((b - d) / 30.6001);
  let day = b - d - Math.floor(e * 30.6001);
  let month = e - (e > 13.5 ? 13 : 1);
  let year = c - (month > 2.5 ? 4716 : 4715);
  if (year <= 0) {
    year--;
  }
  return new Date(year, month, day);
}
function gregorianToJulian(year, month, day) {
  if (year < 0) {
    year++;
  }
  if (month < 3) {
    month += 12;
    year--;
  }
  let a = Math.floor(year / 100);
  let b = 2 - a + Math.floor(a / 4);
  return Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + b - 1524.5;
}
var NgbCalendarEthiopian = class _NgbCalendarEthiopian extends NgbCalendar {
  getDaysPerWeek() {
    return 7;
  }
  getMonths(year) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  }
  getNext(date, period = "d", number = 1) {
    date = new NgbDate(date.year, date.month, date.day);
    switch (period) {
      case "y":
        date = setEthiopianYear(date, date.year + number);
        date.month = 1;
        date.day = 1;
        return date;
      case "m":
        date = setEthiopianMonth(date, date.month + number);
        date.day = 1;
        return date;
      case "d":
        return setEthiopianDay(date, date.day + number);
      default:
        return date;
    }
  }
  getPrev(date, period = "d", number = 1) {
    return this.getNext(date, period, -number);
  }
  getWeekday(date) {
    const dt = Math.floor(ethiopianToJulian(date.year, date.month, date.day) + 3) % 7;
    return dt === 0 ? 7 : dt;
  }
  getWeekNumber(week, firstDayOfWeek) {
    if (firstDayOfWeek === 7) {
      firstDayOfWeek = 0;
    }
    const thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
    const date = week[thursdayIndex];
    const jsDate = toGregorian(date);
    jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7));
    const time = jsDate.getTime();
    const startDate = toGregorian(new NgbDate(date.year, 1, 1));
    return Math.floor(Math.round((time - startDate.getTime()) / 864e5) / 7) + 1;
  }
  getWeeksPerMonth() {
    return 6;
  }
  getToday() {
    return fromGregorian(/* @__PURE__ */ new Date());
  }
  isValid(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) && !isNaN(toGregorian(date).getTime());
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbCalendarEthiopian_BaseFactory;
      return function NgbCalendarEthiopian_Factory(__ngFactoryType__) {
        return (ɵNgbCalendarEthiopian_BaseFactory || (ɵNgbCalendarEthiopian_BaseFactory = ɵɵgetInheritedFactory(_NgbCalendarEthiopian)))(__ngFactoryType__ || _NgbCalendarEthiopian);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbCalendarEthiopian,
      factory: _NgbCalendarEthiopian.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbCalendarEthiopian, [{
    type: Injectable
  }], null, null);
})();
var WEEKDAYS = ["እሑድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሓሙስ", "ዓርብ", "ቅዳሜ"];
var MONTHS = ["መስከረም", "ጥቅምት", "ኅዳር", "ታህሣሥ", "ጥር", "የካቲት", "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜ"];
var NgbDatepickerI18nAmharic = class _NgbDatepickerI18nAmharic extends NgbDatepickerI18n {
  getMonthShortName(month, year) {
    return this.getMonthFullName(month, year);
  }
  getMonthFullName(month, year) {
    return MONTHS[month - 1];
  }
  getWeekdayLabel(weekday, width) {
    return WEEKDAYS[weekday - 1];
  }
  getDayAriaLabel(date) {
    return `${date.day} ${this.getMonthFullName(date.month, date.year)} ${date.year}`;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbDatepickerI18nAmharic_BaseFactory;
      return function NgbDatepickerI18nAmharic_Factory(__ngFactoryType__) {
        return (ɵNgbDatepickerI18nAmharic_BaseFactory || (ɵNgbDatepickerI18nAmharic_BaseFactory = ɵɵgetInheritedFactory(_NgbDatepickerI18nAmharic)))(__ngFactoryType__ || _NgbDatepickerI18nAmharic);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDatepickerI18nAmharic,
      factory: _NgbDatepickerI18nAmharic.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerI18nAmharic, [{
    type: Injectable
  }], null, null);
})();
var NgbDateNativeAdapter = class _NgbDateNativeAdapter extends NgbDateAdapter {
  /**
   * Converts a native `Date` to a `NgbDateStruct`.
   */
  fromModel(date) {
    return date instanceof Date && !isNaN(date.getTime()) ? this._fromNativeDate(date) : null;
  }
  /**
   * Converts a `NgbDateStruct` to a native `Date`.
   */
  toModel(date) {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? this._toNativeDate(date) : null;
  }
  _fromNativeDate(date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }
  _toNativeDate(date) {
    const jsDate = new Date(date.year, date.month - 1, date.day, 12);
    jsDate.setFullYear(date.year);
    return jsDate;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbDateNativeAdapter_BaseFactory;
      return function NgbDateNativeAdapter_Factory(__ngFactoryType__) {
        return (ɵNgbDateNativeAdapter_BaseFactory || (ɵNgbDateNativeAdapter_BaseFactory = ɵɵgetInheritedFactory(_NgbDateNativeAdapter)))(__ngFactoryType__ || _NgbDateNativeAdapter);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDateNativeAdapter,
      factory: _NgbDateNativeAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateNativeAdapter, [{
    type: Injectable
  }], null, null);
})();
var NgbDateNativeUTCAdapter = class _NgbDateNativeUTCAdapter extends NgbDateNativeAdapter {
  _fromNativeDate(date) {
    return {
      year: date.getUTCFullYear(),
      month: date.getUTCMonth() + 1,
      day: date.getUTCDate()
    };
  }
  _toNativeDate(date) {
    const jsDate = new Date(Date.UTC(date.year, date.month - 1, date.day));
    jsDate.setUTCFullYear(date.year);
    return jsDate;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbDateNativeUTCAdapter_BaseFactory;
      return function NgbDateNativeUTCAdapter_Factory(__ngFactoryType__) {
        return (ɵNgbDateNativeUTCAdapter_BaseFactory || (ɵNgbDateNativeUTCAdapter_BaseFactory = ɵɵgetInheritedFactory(_NgbDateNativeUTCAdapter)))(__ngFactoryType__ || _NgbDateNativeUTCAdapter);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDateNativeUTCAdapter,
      factory: _NgbDateNativeUTCAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDateNativeUTCAdapter, [{
    type: Injectable
  }], null, null);
})();
var NGB_DATEPICKER_DIRECTIVES = [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth];
var NgbDatepickerModule = class _NgbDatepickerModule {
  static {
    this.ɵfac = function NgbDatepickerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDatepickerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbDatepickerModule,
      imports: [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth],
      exports: [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDatepickerModule, [{
    type: NgModule,
    args: [{
      exports: NGB_DATEPICKER_DIRECTIVES,
      imports: NGB_DATEPICKER_DIRECTIVES
    }]
  }], null, null);
})();
var NgbDropdownConfig = class _NgbDropdownConfig {
  constructor() {
    this.autoClose = true;
    this.placement = ["bottom-start", "bottom-end", "top-start", "top-end"];
    this.popperOptions = (options) => options;
    this.container = null;
  }
  static {
    this.ɵfac = function NgbDropdownConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbDropdownConfig,
      factory: _NgbDropdownConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbDropdownItem = class _NgbDropdownItem {
  constructor() {
    this._disabled = false;
    this.nativeElement = inject(ElementRef).nativeElement;
    this.tabindex = 0;
  }
  set disabled(value) {
    this._disabled = value === "" || value === true;
  }
  get disabled() {
    return this._disabled;
  }
  static {
    this.ɵfac = function NgbDropdownItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownItem)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbDropdownItem,
      selectors: [["", "ngbDropdownItem", ""]],
      hostAttrs: [1, "dropdown-item"],
      hostVars: 3,
      hostBindings: function NgbDropdownItem_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("tabIndex", ctx.disabled ? -1 : ctx.tabindex);
          ɵɵclassProp("disabled", ctx.disabled);
        }
      },
      inputs: {
        tabindex: "tabindex",
        disabled: "disabled"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownItem, [{
    type: Directive,
    args: [{
      selector: "[ngbDropdownItem]",
      host: {
        class: "dropdown-item",
        "[class.disabled]": "disabled",
        "[tabIndex]": "disabled ? -1 : tabindex"
      }
    }]
  }], null, {
    tabindex: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var NgbDropdownButtonItem = class _NgbDropdownButtonItem {
  constructor() {
    this.item = inject(NgbDropdownItem);
  }
  static {
    this.ɵfac = function NgbDropdownButtonItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownButtonItem)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbDropdownButtonItem,
      selectors: [["button", "ngbDropdownItem", ""]],
      hostVars: 1,
      hostBindings: function NgbDropdownButtonItem_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("disabled", ctx.item.disabled);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownButtonItem, [{
    type: Directive,
    args: [{
      selector: "button[ngbDropdownItem]",
      host: {
        "[disabled]": "item.disabled"
      }
    }]
  }], null, null);
})();
var NgbDropdownMenu = class _NgbDropdownMenu {
  constructor() {
    this.dropdown = inject(NgbDropdown);
    this.nativeElement = inject(ElementRef).nativeElement;
  }
  static {
    this.ɵfac = function NgbDropdownMenu_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownMenu)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbDropdownMenu,
      selectors: [["", "ngbDropdownMenu", ""]],
      contentQueries: function NgbDropdownMenu_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbDropdownItem, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menuItems = _t);
        }
      },
      hostAttrs: [1, "dropdown-menu"],
      hostVars: 2,
      hostBindings: function NgbDropdownMenu_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.ArrowUp", function NgbDropdownMenu_keydown_ArrowUp_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.ArrowDown", function NgbDropdownMenu_keydown_ArrowDown_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Home", function NgbDropdownMenu_keydown_Home_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.End", function NgbDropdownMenu_keydown_End_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Enter", function NgbDropdownMenu_keydown_Enter_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Space", function NgbDropdownMenu_keydown_Space_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Tab", function NgbDropdownMenu_keydown_Tab_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Shift.Tab", function NgbDropdownMenu_keydown_Shift_Tab_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          });
        }
        if (rf & 2) {
          ɵɵclassProp("show", ctx.dropdown.isOpen());
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownMenu, [{
    type: Directive,
    args: [{
      selector: "[ngbDropdownMenu]",
      host: {
        class: "dropdown-menu",
        "[class.show]": "dropdown.isOpen()",
        "(keydown.ArrowUp)": "dropdown.onKeyDown($event)",
        "(keydown.ArrowDown)": "dropdown.onKeyDown($event)",
        "(keydown.Home)": "dropdown.onKeyDown($event)",
        "(keydown.End)": "dropdown.onKeyDown($event)",
        "(keydown.Enter)": "dropdown.onKeyDown($event)",
        "(keydown.Space)": "dropdown.onKeyDown($event)",
        "(keydown.Tab)": "dropdown.onKeyDown($event)",
        "(keydown.Shift.Tab)": "dropdown.onKeyDown($event)"
      }
    }]
  }], null, {
    menuItems: [{
      type: ContentChildren,
      args: [NgbDropdownItem]
    }]
  });
})();
var NgbDropdownAnchor = class _NgbDropdownAnchor {
  constructor() {
    this.dropdown = inject(NgbDropdown);
    this.nativeElement = inject(ElementRef).nativeElement;
  }
  static {
    this.ɵfac = function NgbDropdownAnchor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownAnchor)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbDropdownAnchor,
      selectors: [["", "ngbDropdownAnchor", ""]],
      hostAttrs: [1, "dropdown-toggle"],
      hostVars: 3,
      hostBindings: function NgbDropdownAnchor_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("aria-expanded", ctx.dropdown.isOpen());
          ɵɵclassProp("show", ctx.dropdown.isOpen());
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownAnchor, [{
    type: Directive,
    args: [{
      selector: "[ngbDropdownAnchor]",
      host: {
        class: "dropdown-toggle",
        "[class.show]": "dropdown.isOpen()",
        "[attr.aria-expanded]": "dropdown.isOpen()"
      }
    }]
  }], null, null);
})();
var NgbDropdownToggle = class _NgbDropdownToggle extends NgbDropdownAnchor {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbDropdownToggle_BaseFactory;
      return function NgbDropdownToggle_Factory(__ngFactoryType__) {
        return (ɵNgbDropdownToggle_BaseFactory || (ɵNgbDropdownToggle_BaseFactory = ɵɵgetInheritedFactory(_NgbDropdownToggle)))(__ngFactoryType__ || _NgbDropdownToggle);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbDropdownToggle,
      selectors: [["", "ngbDropdownToggle", ""]],
      hostAttrs: [1, "dropdown-toggle"],
      hostVars: 3,
      hostBindings: function NgbDropdownToggle_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NgbDropdownToggle_click_HostBindingHandler() {
            return ctx.dropdown.toggle();
          })("keydown.ArrowUp", function NgbDropdownToggle_keydown_ArrowUp_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.ArrowDown", function NgbDropdownToggle_keydown_ArrowDown_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Home", function NgbDropdownToggle_keydown_Home_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.End", function NgbDropdownToggle_keydown_End_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Tab", function NgbDropdownToggle_keydown_Tab_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          })("keydown.Shift.Tab", function NgbDropdownToggle_keydown_Shift_Tab_HostBindingHandler($event) {
            return ctx.dropdown.onKeyDown($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("aria-expanded", ctx.dropdown.isOpen());
          ɵɵclassProp("show", ctx.dropdown.isOpen());
        }
      },
      features: [ɵɵProvidersFeature([{
        provide: NgbDropdownAnchor,
        useExisting: forwardRef(() => _NgbDropdownToggle)
      }]), ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownToggle, [{
    type: Directive,
    args: [{
      selector: "[ngbDropdownToggle]",
      host: {
        class: "dropdown-toggle",
        "[class.show]": "dropdown.isOpen()",
        "[attr.aria-expanded]": "dropdown.isOpen()",
        "(click)": "dropdown.toggle()",
        "(keydown.ArrowUp)": "dropdown.onKeyDown($event)",
        "(keydown.ArrowDown)": "dropdown.onKeyDown($event)",
        "(keydown.Home)": "dropdown.onKeyDown($event)",
        "(keydown.End)": "dropdown.onKeyDown($event)",
        "(keydown.Tab)": "dropdown.onKeyDown($event)",
        "(keydown.Shift.Tab)": "dropdown.onKeyDown($event)"
      },
      providers: [{
        provide: NgbDropdownAnchor,
        useExisting: forwardRef(() => NgbDropdownToggle)
      }]
    }]
  }], null, null);
})();
var NgbDropdown = class _NgbDropdown {
  constructor() {
    this._changeDetector = inject(ChangeDetectorRef);
    this._config = inject(NgbDropdownConfig);
    this._document = inject(DOCUMENT);
    this._injector = inject(Injector);
    this._ngZone = inject(NgZone);
    this._nativeElement = inject(ElementRef).nativeElement;
    this._destroyCloseHandlers$ = new Subject();
    this._bodyContainer = null;
    this._positioning = ngbPositioning();
    this.autoClose = this._config.autoClose;
    this._open = false;
    this.placement = this._config.placement;
    this.popperOptions = this._config.popperOptions;
    this.container = this._config.container;
    this.openChange = new EventEmitter();
  }
  ngOnInit() {
    if (!this.display) {
      this.display = this._nativeElement.closest(".navbar") ? "static" : "dynamic";
    }
  }
  ngAfterContentInit() {
    afterNextRender({
      write: () => {
        this._applyPlacementClasses();
        if (this._open) {
          this._setCloseHandlers();
        }
      }
    }, {
      injector: this._injector
    });
  }
  ngOnChanges(changes) {
    if (changes.container && this._open) {
      this._applyContainer(this.container);
    }
    if (changes.placement && !changes.placement.firstChange) {
      this._positioning.setOptions({
        hostElement: this._anchor.nativeElement,
        targetElement: this._bodyContainer || this._menu.nativeElement,
        placement: this.placement
      });
      this._applyPlacementClasses();
    }
    if (changes.dropdownClass) {
      const {
        currentValue,
        previousValue
      } = changes.dropdownClass;
      this._applyCustomDropdownClass(currentValue, previousValue);
    }
    if (changes.autoClose && this._open) {
      this.autoClose = changes.autoClose.currentValue;
      this._setCloseHandlers();
    }
  }
  /**
   * Checks if the dropdown menu is open.
   */
  isOpen() {
    return this._open;
  }
  /**
   * Opens the dropdown menu.
   */
  open() {
    if (!this._open) {
      this._open = true;
      this._applyContainer(this.container);
      this.openChange.emit(true);
      this._setCloseHandlers();
      if (this._anchor) {
        this._anchor.nativeElement.focus();
        if (this.display === "dynamic") {
          this._ngZone.runOutsideAngular(() => {
            this._positioning.createPopper({
              hostElement: this._anchor.nativeElement,
              targetElement: this._bodyContainer || this._menu.nativeElement,
              placement: this.placement,
              updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 2])(options))
            });
            this._applyPlacementClasses();
            this._afterRenderRef = afterEveryRender({
              write: () => {
                this._positionMenu();
              }
            }, {
              injector: this._injector
            });
          });
        }
      }
    }
  }
  _setCloseHandlers() {
    this._destroyCloseHandlers$.next();
    ngbAutoClose(this._ngZone, this._document, this.autoClose, (source) => {
      this.close();
      if (source === 0) {
        this._anchor.nativeElement.focus();
      }
    }, this._destroyCloseHandlers$, this._menu ? [this._menu.nativeElement] : [], this._anchor ? [this._anchor.nativeElement] : [], ".dropdown-item,.dropdown-divider");
  }
  /**
   * Closes the dropdown menu.
   */
  close() {
    if (this._open) {
      this._open = false;
      this._resetContainer();
      this._positioning.destroy();
      this._afterRenderRef?.destroy();
      this._destroyCloseHandlers$.next();
      this.openChange.emit(false);
      this._changeDetector.markForCheck();
    }
  }
  /**
   * Toggles the dropdown menu.
   */
  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }
  ngOnDestroy() {
    this.close();
  }
  onKeyDown(event) {
    const {
      key
    } = event;
    const itemElements = this._getMenuElements();
    let position = -1;
    let itemElement = null;
    const isEventFromToggle = this._isEventFromToggle(event);
    if (!isEventFromToggle && itemElements.length) {
      itemElements.forEach((item, index) => {
        if (item.contains(event.target)) {
          itemElement = item;
        }
        if (item === getActiveElement(this._document)) {
          position = index;
        }
      });
    }
    if (key === " " || key === "Enter") {
      if (itemElement && (this.autoClose === true || this.autoClose === "inside")) {
        fromEvent(itemElement, "click").pipe(take(1)).subscribe(() => this.close());
      }
      return;
    }
    if (key === "Tab") {
      if (event.target && this.isOpen() && this.autoClose) {
        if (this._anchor.nativeElement === event.target) {
          if (this.container === "body" && !event.shiftKey) {
            this._menu.nativeElement.setAttribute("tabindex", "0");
            this._menu.nativeElement.focus();
            this._menu.nativeElement.removeAttribute("tabindex");
          } else if (event.shiftKey) {
            this.close();
          }
          return;
        } else if (this.container === "body") {
          const focusableElements = this._menu.nativeElement.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR);
          if (event.shiftKey && event.target === focusableElements[0]) {
            this._anchor.nativeElement.focus();
            event.preventDefault();
          } else if (!event.shiftKey && event.target === focusableElements[focusableElements.length - 1]) {
            this._anchor.nativeElement.focus();
            this.close();
          }
        } else {
          fromEvent(event.target, "focusout").pipe(take(1)).subscribe(({
            relatedTarget
          }) => {
            if (!this._nativeElement.contains(relatedTarget)) {
              this.close();
            }
          });
        }
      }
      return;
    }
    if (isEventFromToggle || itemElement) {
      this.open();
      if (itemElements.length) {
        switch (key) {
          case "ArrowDown":
            position = Math.min(position + 1, itemElements.length - 1);
            break;
          case "ArrowUp":
            if (this._isDropup() && position === -1) {
              position = itemElements.length - 1;
              break;
            }
            position = Math.max(position - 1, 0);
            break;
          case "Home":
            position = 0;
            break;
          case "End":
            position = itemElements.length - 1;
            break;
        }
        itemElements[position].focus();
      }
      event.preventDefault();
    }
  }
  _isDropup() {
    return this._nativeElement.classList.contains("dropup");
  }
  _isEventFromToggle(event) {
    return this._anchor.nativeElement.contains(event.target);
  }
  _getMenuElements() {
    return this._menu ? this._menu.menuItems.filter(({
      disabled
    }) => !disabled).map(({
      nativeElement
    }) => nativeElement) : [];
  }
  _positionMenu() {
    const menu = this._menu;
    if (this.isOpen() && menu) {
      if (this.display === "dynamic") {
        this._positioning.update();
        this._applyPlacementClasses();
      } else {
        this._applyPlacementClasses(this._getFirstPlacement(this.placement));
      }
    }
  }
  _getFirstPlacement(placement) {
    return Array.isArray(placement) ? placement[0] : placement.split(" ")[0];
  }
  _resetContainer() {
    if (this._menu) {
      this._nativeElement.appendChild(this._menu.nativeElement);
    }
    if (this._bodyContainer) {
      this._document.body.removeChild(this._bodyContainer);
      this._bodyContainer = null;
    }
  }
  _applyContainer(container = null) {
    this._resetContainer();
    if (container === "body") {
      const dropdownMenuElement = this._menu.nativeElement;
      const bodyContainer = this._bodyContainer = this._bodyContainer || this._document.createElement("div");
      bodyContainer.style.position = "absolute";
      dropdownMenuElement.style.position = "static";
      bodyContainer.style.zIndex = "1055";
      bodyContainer.appendChild(dropdownMenuElement);
      this._document.body.appendChild(bodyContainer);
    }
    this._applyCustomDropdownClass(this.dropdownClass);
  }
  _applyCustomDropdownClass(newClass, oldClass) {
    const targetElement = this.container === "body" ? this._bodyContainer : this._nativeElement;
    if (targetElement) {
      if (oldClass) {
        targetElement.classList.remove(oldClass);
      }
      if (newClass) {
        targetElement.classList.add(newClass);
      }
    }
  }
  _applyPlacementClasses(placement) {
    if (this._menu) {
      if (!placement) {
        placement = this._getFirstPlacement(this.placement);
      }
      this._nativeElement.classList.remove("dropup", "dropdown");
      if (this.display === "static") {
        this._menu.nativeElement.setAttribute("data-bs-popper", "static");
      } else {
        this._menu.nativeElement.removeAttribute("data-bs-popper");
      }
      const dropdownClass = placement.search("^top") !== -1 ? "dropup" : "dropdown";
      this._nativeElement.classList.add(dropdownClass);
      if (this._bodyContainer) {
        this._bodyContainer.classList.remove("dropup", "dropdown");
        this._bodyContainer.classList.add(dropdownClass);
      }
    }
  }
  static {
    this.ɵfac = function NgbDropdown_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdown)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbDropdown,
      selectors: [["", "ngbDropdown", ""]],
      contentQueries: function NgbDropdown_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbDropdownMenu, 5);
          ɵɵcontentQuery(dirIndex, NgbDropdownAnchor, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._menu = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._anchor = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function NgbDropdown_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("show", ctx.isOpen());
        }
      },
      inputs: {
        autoClose: "autoClose",
        dropdownClass: "dropdownClass",
        _open: [0, "open", "_open"],
        placement: "placement",
        popperOptions: "popperOptions",
        container: "container",
        display: "display"
      },
      outputs: {
        openChange: "openChange"
      },
      exportAs: ["ngbDropdown"],
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdown, [{
    type: Directive,
    args: [{
      selector: "[ngbDropdown]",
      exportAs: "ngbDropdown",
      host: {
        "[class.show]": "isOpen()"
      }
    }]
  }], null, {
    _menu: [{
      type: ContentChild,
      args: [NgbDropdownMenu, {
        static: false
      }]
    }],
    _anchor: [{
      type: ContentChild,
      args: [NgbDropdownAnchor, {
        static: false
      }]
    }],
    autoClose: [{
      type: Input
    }],
    dropdownClass: [{
      type: Input
    }],
    _open: [{
      type: Input,
      args: ["open"]
    }],
    placement: [{
      type: Input
    }],
    popperOptions: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    display: [{
      type: Input
    }],
    openChange: [{
      type: Output
    }]
  });
})();
var NGB_DROPDOWN_DIRECTIVES = [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem];
var NgbDropdownModule = class _NgbDropdownModule {
  static {
    this.ɵfac = function NgbDropdownModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbDropdownModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbDropdownModule,
      imports: [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem],
      exports: [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbDropdownButtonItem]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbDropdownModule, [{
    type: NgModule,
    args: [{
      imports: NGB_DROPDOWN_DIRECTIVES,
      exports: NGB_DROPDOWN_DIRECTIVES
    }]
  }], null, null);
})();
var NgbModalConfig = class _NgbModalConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.backdrop = true;
    this.fullscreen = false;
    this.keyboard = true;
    this.role = "dialog";
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.ɵfac = function NgbModalConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbModalConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbModalConfig,
      factory: _NgbModalConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbModalConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ContentRef = class {
  constructor(nodes, viewRef, componentRef) {
    this.nodes = nodes;
    this.viewRef = viewRef;
    this.componentRef = componentRef;
  }
};
var PopupService = class {
  constructor(_componentType) {
    this._componentType = _componentType;
    this._windowRef = null;
    this._contentRef = null;
    this._document = inject(DOCUMENT);
    this._applicationRef = inject(ApplicationRef);
    this._injector = inject(Injector);
    this._viewContainerRef = inject(ViewContainerRef);
    this._ngZone = inject(NgZone);
  }
  open(content, templateContext, animation = false) {
    if (!this._windowRef) {
      this._contentRef = this._getContentRef(content, templateContext);
      this._windowRef = this._viewContainerRef.createComponent(this._componentType, {
        injector: this._injector,
        projectableNodes: this._contentRef.nodes
      });
    }
    const {
      nativeElement
    } = this._windowRef.location;
    const nextRenderSubject = new Subject();
    afterNextRender({
      mixedReadWrite: () => {
        nextRenderSubject.next();
        nextRenderSubject.complete();
      }
    }, {
      injector: this._injector
    });
    const transition$ = nextRenderSubject.pipe(mergeMap(() => ngbRunTransition(this._ngZone, nativeElement, ({
      classList
    }) => classList.add("show"), {
      animation,
      runningTransition: "continue"
    })));
    return {
      windowRef: this._windowRef,
      transition$
    };
  }
  close(animation = false) {
    if (!this._windowRef) {
      return of(void 0);
    }
    return ngbRunTransition(this._ngZone, this._windowRef.location.nativeElement, ({
      classList
    }) => classList.remove("show"), {
      animation,
      runningTransition: "stop"
    }).pipe(tap(() => {
      this._windowRef?.destroy();
      this._contentRef?.viewRef?.destroy();
      this._windowRef = null;
      this._contentRef = null;
    }));
  }
  _getContentRef(content, templateContext) {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(templateContext);
      this._applicationRef.attachView(viewRef);
      return new ContentRef([viewRef.rootNodes], viewRef);
    } else {
      return new ContentRef([[this._document.createTextNode(`${content}`)]]);
    }
  }
};
var ScrollBar = class _ScrollBar {
  constructor() {
    this._document = inject(DOCUMENT);
  }
  /**
   * To be called to hide a potential vertical scrollbar:
   * - if a scrollbar is there and has a width greater than 0, adds some compensation
   * padding to the body to keep the same layout as when the scrollbar is there
   * - adds overflow: hidden
   *
   * @return a callback used to revert the change
   */
  hide() {
    const scrollbarWidth = Math.abs(window.innerWidth - this._document.documentElement.clientWidth);
    const body = this._document.body;
    const bodyStyle = body.style;
    const {
      overflow,
      paddingRight
    } = bodyStyle;
    if (scrollbarWidth > 0) {
      const actualPadding = parseFloat(window.getComputedStyle(body).paddingRight);
      bodyStyle.paddingRight = `${actualPadding + scrollbarWidth}px`;
    }
    bodyStyle.overflow = "hidden";
    return () => {
      if (scrollbarWidth > 0) {
        bodyStyle.paddingRight = paddingRight;
      }
      bodyStyle.overflow = overflow;
    };
  }
  static {
    this.ɵfac = function ScrollBar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollBar)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ScrollBar,
      factory: _ScrollBar.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollBar, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BACKDROP_ATTRIBUTES = ["animation", "backdropClass"];
var NgbModalBackdrop = class _NgbModalBackdrop {
  constructor() {
    this._nativeElement = inject(ElementRef).nativeElement;
    this._zone = inject(NgZone);
    this._injector = inject(Injector);
    this._cdRef = inject(ChangeDetectorRef);
  }
  ngOnInit() {
    afterNextRender({
      mixedReadWrite: () => ngbRunTransition(this._zone, this._nativeElement, (element, animation) => {
        if (animation) {
          reflow(element);
        }
        element.classList.add("show");
      }, {
        animation: this.animation,
        runningTransition: "continue"
      })
    }, {
      injector: this._injector
    });
  }
  hide() {
    return ngbRunTransition(this._zone, this._nativeElement, ({
      classList
    }) => classList.remove("show"), {
      animation: this.animation,
      runningTransition: "stop"
    });
  }
  updateOptions(options) {
    BACKDROP_ATTRIBUTES.forEach((optionName) => {
      if (isDefined(options[optionName])) {
        this[optionName] = options[optionName];
      }
    });
    this._cdRef.markForCheck();
  }
  static {
    this.ɵfac = function NgbModalBackdrop_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbModalBackdrop)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbModalBackdrop,
      selectors: [["ngb-modal-backdrop"]],
      hostAttrs: [2, "z-index", "1055"],
      hostVars: 6,
      hostBindings: function NgbModalBackdrop_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap("modal-backdrop" + (ctx.backdropClass ? " " + ctx.backdropClass : ""));
          ɵɵclassProp("show", !ctx.animation)("fade", ctx.animation);
        }
      },
      inputs: {
        animation: "animation",
        backdropClass: "backdropClass"
      },
      decls: 0,
      vars: 0,
      template: function NgbModalBackdrop_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbModalBackdrop, [{
    type: Component,
    args: [{
      selector: "ngb-modal-backdrop",
      encapsulation: ViewEncapsulation.None,
      template: "",
      host: {
        "[class]": '"modal-backdrop" + (backdropClass ? " " + backdropClass : "")',
        "[class.show]": "!animation",
        "[class.fade]": "animation",
        style: "z-index: 1055"
      }
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    backdropClass: [{
      type: Input
    }]
  });
})();
var NgbActiveModal = class {
  /**
   * Updates options of an opened modal.
   *
   * @since 14.2.0
   */
  update(options) {
  }
  /**
   * Closes the modal with an optional `result` value.
   *
   * The `NgbModalRef.result` promise will be resolved with the provided value.
   */
  close(result) {
  }
  /**
   * Dismisses the modal with an optional `reason` value.
   *
   * The `NgbModalRef.result` promise will be rejected with the provided value.
   */
  dismiss(reason) {
  }
};
var NgbModalRef = class {
  /**
   * Updates options of an opened modal.
   *
   * @since 14.2.0
   */
  update(options) {
    this._windowCmptRef.instance.updateOptions(options);
    if (this._backdropCmptRef && this._backdropCmptRef.instance) {
      this._backdropCmptRef.instance.updateOptions(options);
    }
  }
  /**
   * The instance of a component used for the modal content.
   *
   * When a `TemplateRef` is used as the content or when the modal is closed, will return `undefined`.
   */
  get componentInstance() {
    if (this._contentRef && this._contentRef.componentRef) {
      return this._contentRef.componentRef.instance;
    }
  }
  /**
   * The observable that emits when the modal is closed via the `.close()` method.
   *
   * It will emit the result passed to the `.close()` method.
   *
   * @since 8.0.0
   */
  get closed() {
    return this._closed.asObservable().pipe(takeUntil(this._hidden));
  }
  /**
   * The observable that emits when the modal is dismissed via the `.dismiss()` method.
   *
   * It will emit the reason passed to the `.dismissed()` method by the user, or one of the internal
   * reasons like backdrop click or ESC key press.
   *
   * @since 8.0.0
   */
  get dismissed() {
    return this._dismissed.asObservable().pipe(takeUntil(this._hidden));
  }
  /**
   * The observable that emits when both modal window and backdrop are closed and animations were finished.
   * At this point modal and backdrop elements will be removed from the DOM tree.
   *
   * This observable will be completed after emitting.
   *
   * @since 8.0.0
   */
  get hidden() {
    return this._hidden.asObservable();
  }
  /**
   * The observable that emits when modal is fully visible and animation was finished.
   * Modal DOM element is always available synchronously after calling 'modal.open()' service.
   *
   * This observable will be completed after emitting.
   * It will not emit, if modal is closed before open animation is finished.
   *
   * @since 8.0.0
   */
  get shown() {
    return this._windowCmptRef.instance.shown.asObservable();
  }
  constructor(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
    this._windowCmptRef = _windowCmptRef;
    this._contentRef = _contentRef;
    this._backdropCmptRef = _backdropCmptRef;
    this._beforeDismiss = _beforeDismiss;
    this._closed = new Subject();
    this._dismissed = new Subject();
    this._hidden = new Subject();
    _windowCmptRef.instance.dismissEvent.subscribe((reason) => {
      this.dismiss(reason);
    });
    this.result = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this.result.then(null, () => {
    });
  }
  /**
   * Closes the modal with an optional `result` value.
   *
   * The `NgbMobalRef.result` promise will be resolved with the provided value.
   */
  close(result) {
    if (this._windowCmptRef) {
      this._closed.next(result);
      this._resolve(result);
      this._removeModalElements();
    }
  }
  _dismiss(reason) {
    this._dismissed.next(reason);
    this._reject(reason);
    this._removeModalElements();
  }
  /**
   * Dismisses the modal with an optional `reason` value.
   *
   * The `NgbModalRef.result` promise will be rejected with the provided value.
   */
  dismiss(reason) {
    if (this._windowCmptRef) {
      if (!this._beforeDismiss) {
        this._dismiss(reason);
      } else {
        const dismiss = this._beforeDismiss();
        if (isPromise(dismiss)) {
          dismiss.then((result) => {
            if (result !== false) {
              this._dismiss(reason);
            }
          }, () => {
          });
        } else if (dismiss !== false) {
          this._dismiss(reason);
        }
      }
    }
  }
  _removeModalElements() {
    const windowTransition$ = this._windowCmptRef.instance.hide();
    const backdropTransition$ = this._backdropCmptRef ? this._backdropCmptRef.instance.hide() : of(void 0);
    windowTransition$.subscribe(() => {
      const {
        nativeElement
      } = this._windowCmptRef.location;
      nativeElement.parentNode.removeChild(nativeElement);
      this._windowCmptRef.destroy();
      this._contentRef?.viewRef?.destroy();
      this._windowCmptRef = null;
      this._contentRef = null;
    });
    backdropTransition$.subscribe(() => {
      if (this._backdropCmptRef) {
        const {
          nativeElement
        } = this._backdropCmptRef.location;
        nativeElement.parentNode.removeChild(nativeElement);
        this._backdropCmptRef.destroy();
        this._backdropCmptRef = null;
      }
    });
    zip(windowTransition$, backdropTransition$).subscribe(() => {
      this._hidden.next();
      this._hidden.complete();
    });
  }
};
var ModalDismissReasons;
(function(ModalDismissReasons2) {
  ModalDismissReasons2[ModalDismissReasons2["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
  ModalDismissReasons2[ModalDismissReasons2["ESC"] = 1] = "ESC";
})(ModalDismissReasons || (ModalDismissReasons = {}));
var WINDOW_ATTRIBUTES = ["animation", "ariaLabelledBy", "ariaDescribedBy", "backdrop", "centered", "fullscreen", "keyboard", "role", "scrollable", "size", "windowClass", "modalDialogClass"];
var NgbModalWindow = class _NgbModalWindow {
  constructor() {
    this._document = inject(DOCUMENT);
    this._elRef = inject(ElementRef);
    this._zone = inject(NgZone);
    this._injector = inject(Injector);
    this._cdRef = inject(ChangeDetectorRef);
    this._closed$ = new Subject();
    this._elWithFocus = null;
    this.backdrop = true;
    this.keyboard = true;
    this.role = "dialog";
    this.dismissEvent = new EventEmitter();
    this.shown = new Subject();
    this.hidden = new Subject();
  }
  get fullscreenClass() {
    return this.fullscreen === true ? " modal-fullscreen" : isString(this.fullscreen) ? ` modal-fullscreen-${this.fullscreen}-down` : "";
  }
  dismiss(reason) {
    this.dismissEvent.emit(reason);
  }
  ngOnInit() {
    this._elWithFocus = this._document.activeElement;
    afterNextRender({
      mixedReadWrite: () => this._show()
    }, {
      injector: this._injector
    });
  }
  ngOnDestroy() {
    this._disableEventHandling();
  }
  hide() {
    const {
      nativeElement
    } = this._elRef;
    const context = {
      animation: this.animation,
      runningTransition: "stop"
    };
    const windowTransition$ = ngbRunTransition(this._zone, nativeElement, () => nativeElement.classList.remove("show"), context);
    const dialogTransition$ = ngbRunTransition(this._zone, this._dialogEl.nativeElement, () => {
    }, context);
    const transitions$ = zip(windowTransition$, dialogTransition$);
    transitions$.subscribe(() => {
      this.hidden.next();
      this.hidden.complete();
    });
    this._disableEventHandling();
    this._restoreFocus();
    return transitions$;
  }
  updateOptions(options) {
    WINDOW_ATTRIBUTES.forEach((optionName) => {
      if (isDefined(options[optionName])) {
        this[optionName] = options[optionName];
      }
    });
    this._cdRef.markForCheck();
  }
  _show() {
    const context = {
      animation: this.animation,
      runningTransition: "continue"
    };
    const windowTransition$ = ngbRunTransition(this._zone, this._elRef.nativeElement, (element, animation) => {
      if (animation) {
        reflow(element);
      }
      element.classList.add("show");
    }, context);
    const dialogTransition$ = ngbRunTransition(this._zone, this._dialogEl.nativeElement, () => {
    }, context);
    zip(windowTransition$, dialogTransition$).subscribe(() => {
      this.shown.next();
      this.shown.complete();
    });
    this._enableEventHandling();
    this._setFocus();
  }
  _enableEventHandling() {
    const {
      nativeElement
    } = this._elRef;
    this._zone.runOutsideAngular(() => {
      fromEvent(nativeElement, "keydown").pipe(takeUntil(this._closed$), filter((e) => e.key === "Escape")).subscribe((event) => {
        if (this.keyboard) {
          requestAnimationFrame(() => {
            if (!event.defaultPrevented) {
              this._zone.run(() => this.dismiss(ModalDismissReasons.ESC));
            }
          });
        } else if (this.backdrop === "static") {
          this._bumpBackdrop();
        }
      });
      let preventClose = false;
      fromEvent(this._dialogEl.nativeElement, "mousedown").pipe(takeUntil(this._closed$), tap(() => preventClose = false), switchMap(() => fromEvent(nativeElement, "mouseup").pipe(takeUntil(this._closed$), take(1))), filter(({
        target
      }) => nativeElement === target)).subscribe(() => {
        preventClose = true;
      });
      fromEvent(nativeElement, "click").pipe(takeUntil(this._closed$)).subscribe(({
        target
      }) => {
        if (nativeElement === target) {
          if (this.backdrop === "static") {
            this._bumpBackdrop();
          } else if (this.backdrop === true && !preventClose) {
            this._zone.run(() => this.dismiss(ModalDismissReasons.BACKDROP_CLICK));
          }
        }
        preventClose = false;
      });
    });
  }
  _disableEventHandling() {
    this._closed$.next();
  }
  _setFocus() {
    const {
      nativeElement
    } = this._elRef;
    if (!nativeElement.contains(document.activeElement)) {
      const autoFocusable = nativeElement.querySelector(`[ngbAutofocus]`);
      const firstFocusable = getFocusableBoundaryElements(nativeElement)[0];
      const elementToFocus = autoFocusable || firstFocusable || nativeElement;
      elementToFocus.focus();
    }
  }
  _restoreFocus() {
    const body = this._document.body;
    const elWithFocus = this._elWithFocus;
    let elementToFocus;
    if (elWithFocus && elWithFocus["focus"] && body.contains(elWithFocus)) {
      elementToFocus = elWithFocus;
    } else {
      elementToFocus = body;
    }
    this._zone.runOutsideAngular(() => {
      setTimeout(() => elementToFocus.focus());
      this._elWithFocus = null;
    });
  }
  _bumpBackdrop() {
    if (this.backdrop === "static") {
      ngbRunTransition(this._zone, this._elRef.nativeElement, ({
        classList
      }) => {
        classList.add("modal-static");
        return () => classList.remove("modal-static");
      }, {
        animation: this.animation,
        runningTransition: "continue"
      });
    }
  }
  static {
    this.ɵfac = function NgbModalWindow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbModalWindow)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbModalWindow,
      selectors: [["ngb-modal-window"]],
      viewQuery: function NgbModalWindow_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c9, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._dialogEl = _t.first);
        }
      },
      hostAttrs: ["tabindex", "-1"],
      hostVars: 8,
      hostBindings: function NgbModalWindow_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("aria-modal", true)("aria-labelledby", ctx.ariaLabelledBy)("aria-describedby", ctx.ariaDescribedBy)("role", ctx.role);
          ɵɵclassMap("modal d-block" + (ctx.windowClass ? " " + ctx.windowClass : ""));
          ɵɵclassProp("fade", ctx.animation);
        }
      },
      inputs: {
        animation: "animation",
        ariaLabelledBy: "ariaLabelledBy",
        ariaDescribedBy: "ariaDescribedBy",
        backdrop: "backdrop",
        centered: "centered",
        fullscreen: "fullscreen",
        keyboard: "keyboard",
        role: "role",
        scrollable: "scrollable",
        size: "size",
        windowClass: "windowClass",
        modalDialogClass: "modalDialogClass"
      },
      outputs: {
        dismissEvent: "dismiss"
      },
      ngContentSelectors: _c2,
      decls: 4,
      vars: 2,
      consts: [["dialog", ""], ["role", "document"], [1, "modal-content"]],
      template: function NgbModalWindow_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵdomElementStart(0, "div", 1, 0)(2, "div", 2);
          ɵɵprojection(3);
          ɵɵdomElementEnd()();
        }
        if (rf & 2) {
          ɵɵclassMap("modal-dialog" + (ctx.size ? " modal-" + ctx.size : "") + (ctx.centered ? " modal-dialog-centered" : "") + ctx.fullscreenClass + (ctx.scrollable ? " modal-dialog-scrollable" : "") + (ctx.modalDialogClass ? " " + ctx.modalDialogClass : ""));
        }
      },
      styles: ["ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}\n"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbModalWindow, [{
    type: Component,
    args: [{
      selector: "ngb-modal-window",
      host: {
        "[class]": '"modal d-block" + (windowClass ? " " + windowClass : "")',
        "[class.fade]": "animation",
        tabindex: "-1",
        "[attr.aria-modal]": "true",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.aria-describedby]": "ariaDescribedBy",
        "[attr.role]": "role"
      },
      template: `
		<div
			#dialog
			[class]="
				'modal-dialog' +
				(size ? ' modal-' + size : '') +
				(centered ? ' modal-dialog-centered' : '') +
				fullscreenClass +
				(scrollable ? ' modal-dialog-scrollable' : '') +
				(modalDialogClass ? ' ' + modalDialogClass : '')
			"
			role="document"
		>
			<div class="modal-content"><ng-content /></div>
		</div>
	`,
      encapsulation: ViewEncapsulation.None,
      styles: ["ngb-modal-window .component-host-scrollable{display:flex;flex-direction:column;overflow:hidden}\n"]
    }]
  }], null, {
    _dialogEl: [{
      type: ViewChild,
      args: ["dialog", {
        static: true
      }]
    }],
    animation: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaDescribedBy: [{
      type: Input
    }],
    backdrop: [{
      type: Input
    }],
    centered: [{
      type: Input
    }],
    fullscreen: [{
      type: Input
    }],
    keyboard: [{
      type: Input
    }],
    role: [{
      type: Input
    }],
    scrollable: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    windowClass: [{
      type: Input
    }],
    modalDialogClass: [{
      type: Input
    }],
    dismissEvent: [{
      type: Output,
      args: ["dismiss"]
    }]
  });
})();
var NgbModalStack = class _NgbModalStack {
  constructor() {
    this._applicationRef = inject(ApplicationRef);
    this._injector = inject(Injector);
    this._environmentInjector = inject(EnvironmentInjector);
    this._document = inject(DOCUMENT);
    this._scrollBar = inject(ScrollBar);
    this._activeWindowCmptHasChanged = new Subject();
    this._ariaHiddenValues = /* @__PURE__ */ new Map();
    this._scrollBarRestoreFn = null;
    this._modalRefs = [];
    this._windowCmpts = [];
    this._activeInstances = new EventEmitter();
    const ngZone = inject(NgZone);
    this._activeWindowCmptHasChanged.subscribe(() => {
      if (this._windowCmpts.length) {
        const activeWindowCmpt = this._windowCmpts[this._windowCmpts.length - 1];
        ngbFocusTrap(ngZone, activeWindowCmpt.location.nativeElement, this._activeWindowCmptHasChanged);
        this._revertAriaHidden();
        this._setAriaHidden(activeWindowCmpt.location.nativeElement);
      }
    });
  }
  _restoreScrollBar() {
    const scrollBarRestoreFn = this._scrollBarRestoreFn;
    if (scrollBarRestoreFn) {
      this._scrollBarRestoreFn = null;
      scrollBarRestoreFn();
    }
  }
  _hideScrollBar() {
    if (!this._scrollBarRestoreFn) {
      this._scrollBarRestoreFn = this._scrollBar.hide();
    }
  }
  open(contentInjector, content, options) {
    const containerEl = options.container instanceof HTMLElement ? options.container : isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
    if (!containerEl) {
      throw new Error(`The specified modal container "${options.container || "body"}" was not found in the DOM.`);
    }
    this._hideScrollBar();
    const activeModal = new NgbActiveModal();
    contentInjector = options.injector || contentInjector;
    const environmentInjector = contentInjector.get(EnvironmentInjector, null) || this._environmentInjector;
    const contentRef = this._getContentRef(contentInjector, environmentInjector, content, activeModal, options);
    let backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(containerEl) : void 0;
    let windowCmptRef = this._attachWindowComponent(containerEl, contentRef.nodes);
    let ngbModalRef = new NgbModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
    this._registerModalRef(ngbModalRef);
    this._registerWindowCmpt(windowCmptRef);
    ngbModalRef.hidden.pipe(take(1)).subscribe(() => Promise.resolve(true).then(() => {
      if (!this._modalRefs.length) {
        this._document.body.classList.remove("modal-open");
        this._restoreScrollBar();
        this._revertAriaHidden();
      }
    }));
    activeModal.close = (result) => {
      ngbModalRef.close(result);
    };
    activeModal.dismiss = (reason) => {
      ngbModalRef.dismiss(reason);
    };
    activeModal.update = (options2) => {
      ngbModalRef.update(options2);
    };
    ngbModalRef.update(options);
    if (this._modalRefs.length === 1) {
      this._document.body.classList.add("modal-open");
    }
    if (backdropCmptRef && backdropCmptRef.instance) {
      backdropCmptRef.changeDetectorRef.detectChanges();
    }
    windowCmptRef.changeDetectorRef.detectChanges();
    return ngbModalRef;
  }
  get activeInstances() {
    return this._activeInstances;
  }
  dismissAll(reason) {
    this._modalRefs.forEach((ngbModalRef) => ngbModalRef.dismiss(reason));
  }
  hasOpenModals() {
    return this._modalRefs.length > 0;
  }
  _attachBackdrop(containerEl) {
    let backdropCmptRef = createComponent(NgbModalBackdrop, {
      environmentInjector: this._applicationRef.injector,
      elementInjector: this._injector
    });
    this._applicationRef.attachView(backdropCmptRef.hostView);
    containerEl.appendChild(backdropCmptRef.location.nativeElement);
    return backdropCmptRef;
  }
  _attachWindowComponent(containerEl, projectableNodes) {
    let windowCmptRef = createComponent(NgbModalWindow, {
      environmentInjector: this._applicationRef.injector,
      elementInjector: this._injector,
      projectableNodes
    });
    this._applicationRef.attachView(windowCmptRef.hostView);
    containerEl.appendChild(windowCmptRef.location.nativeElement);
    return windowCmptRef;
  }
  _getContentRef(contentInjector, environmentInjector, content, activeModal, options) {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof TemplateRef) {
      return this._createFromTemplateRef(content, activeModal);
    } else if (isString(content)) {
      return this._createFromString(content);
    } else {
      return this._createFromComponent(contentInjector, environmentInjector, content, activeModal, options);
    }
  }
  _createFromTemplateRef(templateRef, activeModal) {
    const context = {
      $implicit: activeModal,
      close(result) {
        activeModal.close(result);
      },
      dismiss(reason) {
        activeModal.dismiss(reason);
      }
    };
    const viewRef = templateRef.createEmbeddedView(context);
    this._applicationRef.attachView(viewRef);
    return new ContentRef([viewRef.rootNodes], viewRef);
  }
  _createFromString(content) {
    const component = this._document.createTextNode(`${content}`);
    return new ContentRef([[component]]);
  }
  _createFromComponent(contentInjector, environmentInjector, componentType, context, options) {
    const elementInjector = Injector.create({
      providers: [{
        provide: NgbActiveModal,
        useValue: context
      }],
      parent: contentInjector
    });
    const componentRef = createComponent(componentType, {
      environmentInjector,
      elementInjector
    });
    const componentNativeEl = componentRef.location.nativeElement;
    if (options.scrollable) {
      componentNativeEl.classList.add("component-host-scrollable");
    }
    this._applicationRef.attachView(componentRef.hostView);
    return new ContentRef([[componentNativeEl]], componentRef.hostView, componentRef);
  }
  _setAriaHidden(element) {
    const parent = element.parentElement;
    if (parent && element !== this._document.body) {
      Array.from(parent.children).forEach((sibling) => {
        if (sibling !== element && sibling.nodeName !== "SCRIPT") {
          this._ariaHiddenValues.set(sibling, sibling.getAttribute("aria-hidden"));
          sibling.setAttribute("aria-hidden", "true");
        }
      });
      this._setAriaHidden(parent);
    }
  }
  _revertAriaHidden() {
    this._ariaHiddenValues.forEach((value, element) => {
      if (value) {
        element.setAttribute("aria-hidden", value);
      } else {
        element.removeAttribute("aria-hidden");
      }
    });
    this._ariaHiddenValues.clear();
  }
  _registerModalRef(ngbModalRef) {
    const unregisterModalRef = () => {
      const index = this._modalRefs.indexOf(ngbModalRef);
      if (index > -1) {
        this._modalRefs.splice(index, 1);
        this._activeInstances.emit(this._modalRefs);
      }
    };
    this._modalRefs.push(ngbModalRef);
    this._activeInstances.emit(this._modalRefs);
    ngbModalRef.result.then(unregisterModalRef, unregisterModalRef);
  }
  _registerWindowCmpt(ngbWindowCmpt) {
    this._windowCmpts.push(ngbWindowCmpt);
    this._activeWindowCmptHasChanged.next();
    ngbWindowCmpt.onDestroy(() => {
      const index = this._windowCmpts.indexOf(ngbWindowCmpt);
      if (index > -1) {
        this._windowCmpts.splice(index, 1);
        this._activeWindowCmptHasChanged.next();
      }
    });
  }
  static {
    this.ɵfac = function NgbModalStack_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbModalStack)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbModalStack,
      factory: _NgbModalStack.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbModalStack, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var NgbModal = class _NgbModal {
  constructor() {
    this._injector = inject(Injector);
    this._modalStack = inject(NgbModalStack);
    this._config = inject(NgbModalConfig);
  }
  /**
   * Opens a new modal window with the specified content and supplied options.
   *
   * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
   * then instances of those components can be injected with an instance of the `NgbActiveModal` class. You can then
   * use `NgbActiveModal` methods to close / dismiss modals from "inside" of your component.
   *
   * Also see the [`NgbModalOptions`](#/components/modal/api#NgbModalOptions) for the list of supported options.
   */
  open(content, options = {}) {
    const combinedOptions = __spreadValues(__spreadProps(__spreadValues({}, this._config), {
      animation: this._config.animation
    }), options);
    return this._modalStack.open(this._injector, content, combinedOptions);
  }
  /**
   * Returns an observable that holds the active modal instances.
   */
  get activeInstances() {
    return this._modalStack.activeInstances;
  }
  /**
   * Dismisses all currently displayed modal windows with the supplied reason.
   *
   * @since 3.1.0
   */
  dismissAll(reason) {
    this._modalStack.dismissAll(reason);
  }
  /**
   * Indicates if there are currently any open modal windows in the application.
   *
   * @since 3.3.0
   */
  hasOpenModals() {
    return this._modalStack.hasOpenModals();
  }
  static {
    this.ɵfac = function NgbModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbModal)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbModal,
      factory: _NgbModal.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbModal, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbModalModule = class _NgbModalModule {
  static {
    this.ɵfac = function NgbModalModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbModalModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbModalModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [NgbModal]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbModalModule, [{
    type: NgModule,
    args: [{
      providers: [NgbModal]
    }]
  }], null, null);
})();
var NgbNavConfig = class _NgbNavConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.destroyOnHide = true;
    this.orientation = "horizontal";
    this.roles = "tablist";
    this.keyboard = true;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.ɵfac = function NgbNavConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbNavConfig,
      factory: _NgbNavConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var isValidNavId = (id) => isDefined(id) && id !== "";
var navCounter = 0;
var NgbNavContent = class _NgbNavContent {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbNavContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavContent)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbNavContent,
      selectors: [["ng-template", "ngbNavContent", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbNavContent]"
    }]
  }], null, null);
})();
var NgbNavItemRole = class _NgbNavItemRole {
  constructor(role) {
    this.role = role;
    this.nav = inject(NgbNav);
  }
  static {
    this.ɵfac = function NgbNavItemRole_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavItemRole)(ɵɵinjectAttribute("role"));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbNavItemRole,
      selectors: [["", "ngbNavItem", "", 5, "ng-container"]],
      hostVars: 1,
      hostBindings: function NgbNavItemRole_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("role", ctx.role ? ctx.role : ctx.nav.roles ? "presentation" : void 0);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavItemRole, [{
    type: Directive,
    args: [{
      selector: "[ngbNavItem]:not(ng-container)",
      host: {
        "[attr.role]": `role ? role : nav.roles ? 'presentation' : undefined`
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["role"]
    }]
  }], null);
})();
var NgbNavItem = class _NgbNavItem {
  constructor() {
    this._nav = inject(NgbNav);
    this._nativeElement = inject(ElementRef).nativeElement;
    this.disabled = false;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
  }
  ngOnInit() {
    if (!isDefined(this.domId)) {
      this.domId = `ngb-nav-${navCounter++}`;
    }
  }
  get active() {
    return this._nav.activeId === this.id;
  }
  get id() {
    return isValidNavId(this._id) ? this._id : this.domId;
  }
  get panelDomId() {
    return `${this.domId}-panel`;
  }
  isPanelInDom() {
    return (isDefined(this.destroyOnHide) ? !this.destroyOnHide : !this._nav.destroyOnHide) || this.active;
  }
  /**
   * @internal
   */
  isNgContainer() {
    return this._nativeElement.nodeType === Node.COMMENT_NODE;
  }
  static {
    this.ɵfac = function NgbNavItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavItem)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbNavItem,
      selectors: [["", "ngbNavItem", ""]],
      contentQueries: function NgbNavItem_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbNavContent, 4);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTpl = _t.first);
        }
      },
      hostAttrs: [1, "nav-item"],
      inputs: {
        destroyOnHide: "destroyOnHide",
        disabled: "disabled",
        domId: "domId",
        _id: [0, "ngbNavItem", "_id"]
      },
      outputs: {
        shown: "shown",
        hidden: "hidden"
      },
      exportAs: ["ngbNavItem"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavItem, [{
    type: Directive,
    args: [{
      selector: "[ngbNavItem]",
      exportAs: "ngbNavItem",
      host: {
        class: "nav-item"
      }
    }]
  }], null, {
    destroyOnHide: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    domId: [{
      type: Input
    }],
    _id: [{
      type: Input,
      args: ["ngbNavItem"]
    }],
    shown: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }],
    contentTpl: [{
      type: ContentChild,
      args: [NgbNavContent, {
        descendants: false
      }]
    }]
  });
})();
var NgbNav = class _NgbNav {
  constructor(role) {
    this.role = role;
    this._config = inject(NgbNavConfig);
    this._cd = inject(ChangeDetectorRef);
    this._document = inject(DOCUMENT);
    this._nativeElement = inject(ElementRef).nativeElement;
    this.destroyRef = inject(DestroyRef);
    this._navigatingWithKeyboard = false;
    this.activeIdChange = new EventEmitter();
    this.animation = this._config.animation;
    this.destroyOnHide = this._config.destroyOnHide;
    this.orientation = this._config.orientation;
    this.roles = this._config.roles;
    this.keyboard = this._config.keyboard;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
    this.navItemChange$ = new Subject();
    this.navChange = new EventEmitter();
  }
  click(item) {
    if (!item.disabled) {
      this._updateActiveId(item.id);
    }
  }
  onFocusout({
    relatedTarget
  }) {
    if (!this._nativeElement.contains(relatedTarget)) {
      this._navigatingWithKeyboard = false;
    }
  }
  onKeyDown(event) {
    if (this.roles !== "tablist" || !this.keyboard) {
      return;
    }
    const enabledLinks = this.links.filter((link) => !link.navItem.disabled);
    const {
      length
    } = enabledLinks;
    let position = -1;
    enabledLinks.forEach((link, index) => {
      if (link.nativeElement === this._document.activeElement) {
        position = index;
      }
    });
    if (length) {
      switch (event.key) {
        case "ArrowUp":
        case "ArrowLeft":
          position = (position - 1 + length) % length;
          break;
        case "ArrowRight":
        case "ArrowDown":
          position = (position + 1) % length;
          break;
        case "Home":
          position = 0;
          break;
        case "End":
          position = length - 1;
          break;
      }
      if (this.keyboard === "changeWithArrows") {
        this.select(enabledLinks[position].navItem.id);
      }
      enabledLinks[position].nativeElement.focus();
      this._navigatingWithKeyboard = true;
      event.preventDefault();
    }
  }
  /**
   * Selects the nav with the given id and shows its associated pane.
   * Any other nav that was previously selected becomes unselected and its associated pane is hidden.
   */
  select(id) {
    this._updateActiveId(id, false);
  }
  ngAfterContentInit() {
    if (!isDefined(this.activeId)) {
      const nextId2 = this.items.first ? this.items.first.id : null;
      if (isValidNavId(nextId2)) {
        this._updateActiveId(nextId2, false);
        this._cd.detectChanges();
      }
    }
    this.items.changes.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this._notifyItemChanged(this.activeId));
  }
  ngOnChanges({
    activeId
  }) {
    if (activeId && !activeId.firstChange) {
      this._notifyItemChanged(activeId.currentValue);
    }
  }
  _updateActiveId(nextId2, emitNavChange = true) {
    if (this.activeId !== nextId2) {
      let defaultPrevented = false;
      if (emitNavChange) {
        this.navChange.emit({
          activeId: this.activeId,
          nextId: nextId2,
          preventDefault: () => {
            defaultPrevented = true;
          }
        });
      }
      if (!defaultPrevented) {
        this.activeId = nextId2;
        this.activeIdChange.emit(nextId2);
        this._notifyItemChanged(nextId2);
      }
    }
  }
  _notifyItemChanged(nextItemId) {
    this.navItemChange$.next(this._getItemById(nextItemId));
  }
  _getItemById(itemId) {
    return this.items && this.items.find((item) => item.id === itemId) || null;
  }
  static {
    this.ɵfac = function NgbNav_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNav)(ɵɵinjectAttribute("role"));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbNav,
      selectors: [["", "ngbNav", ""]],
      contentQueries: function NgbNav_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbNavItem, 4);
          ɵɵcontentQuery(dirIndex, NgbNavLinkBase, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.links = _t);
        }
      },
      hostAttrs: [1, "nav"],
      hostVars: 4,
      hostBindings: function NgbNav_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown.arrowLeft", function NgbNav_keydown_arrowLeft_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("keydown.arrowRight", function NgbNav_keydown_arrowRight_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("keydown.arrowDown", function NgbNav_keydown_arrowDown_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("keydown.arrowUp", function NgbNav_keydown_arrowUp_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("keydown.Home", function NgbNav_keydown_Home_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("keydown.End", function NgbNav_keydown_End_HostBindingHandler($event) {
            return ctx.onKeyDown($event);
          })("focusout", function NgbNav_focusout_HostBindingHandler($event) {
            return ctx.onFocusout($event);
          });
        }
        if (rf & 2) {
          ɵɵattribute("aria-orientation", ctx.orientation === "vertical" && ctx.roles === "tablist" ? "vertical" : void 0)("role", ctx.role ? ctx.role : ctx.roles ? "tablist" : void 0);
          ɵɵclassProp("flex-column", ctx.orientation === "vertical");
        }
      },
      inputs: {
        activeId: "activeId",
        animation: "animation",
        destroyOnHide: "destroyOnHide",
        orientation: "orientation",
        roles: "roles",
        keyboard: "keyboard"
      },
      outputs: {
        activeIdChange: "activeIdChange",
        shown: "shown",
        hidden: "hidden",
        navChange: "navChange"
      },
      exportAs: ["ngbNav"],
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNav, [{
    type: Directive,
    args: [{
      selector: "[ngbNav]",
      exportAs: "ngbNav",
      host: {
        class: "nav",
        "[class.flex-column]": `orientation === 'vertical'`,
        "[attr.aria-orientation]": `orientation === 'vertical' && roles === 'tablist' ? 'vertical' : undefined`,
        "[attr.role]": `role ? role : roles ? 'tablist' : undefined`,
        "(keydown.arrowLeft)": "onKeyDown($event)",
        "(keydown.arrowRight)": "onKeyDown($event)",
        "(keydown.arrowDown)": "onKeyDown($event)",
        "(keydown.arrowUp)": "onKeyDown($event)",
        "(keydown.Home)": "onKeyDown($event)",
        "(keydown.End)": "onKeyDown($event)",
        "(focusout)": "onFocusout($event)"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["role"]
    }]
  }], {
    activeId: [{
      type: Input
    }],
    activeIdChange: [{
      type: Output
    }],
    animation: [{
      type: Input
    }],
    destroyOnHide: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    roles: [{
      type: Input
    }],
    keyboard: [{
      type: Input
    }],
    shown: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }],
    items: [{
      type: ContentChildren,
      args: [NgbNavItem]
    }],
    links: [{
      type: ContentChildren,
      args: [forwardRef(() => NgbNavLinkBase), {
        descendants: true
      }]
    }],
    navChange: [{
      type: Output
    }]
  });
})();
var NgbNavLinkBase = class _NgbNavLinkBase {
  constructor(role) {
    this.role = role;
    this.navItem = inject(NgbNavItem);
    this.nav = inject(NgbNav);
    this.nativeElement = inject(ElementRef).nativeElement;
  }
  get tabindex() {
    if (this.nav.keyboard === false) {
      return this.navItem.disabled ? -1 : void 0;
    }
    if (this.nav._navigatingWithKeyboard) {
      return -1;
    }
    return this.navItem.disabled || !this.navItem.active ? -1 : void 0;
  }
  static {
    this.ɵfac = function NgbNavLinkBase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavLinkBase)(ɵɵinjectAttribute("role"));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbNavLinkBase,
      selectors: [["", "ngbNavLink", ""]],
      hostAttrs: [1, "nav-link"],
      hostVars: 12,
      hostBindings: function NgbNavLinkBase_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.navItem.domId);
          ɵɵattribute("role", ctx.role ? ctx.role : ctx.nav.roles ? "tab" : void 0)("tabindex", ctx.tabindex)("aria-controls", ctx.navItem.isPanelInDom() ? ctx.navItem.panelDomId : null)("aria-selected", ctx.navItem.active)("aria-disabled", ctx.navItem.disabled);
          ɵɵclassProp("nav-item", ctx.navItem.isNgContainer())("active", ctx.navItem.active)("disabled", ctx.navItem.disabled);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavLinkBase, [{
    type: Directive,
    args: [{
      selector: "[ngbNavLink]",
      host: {
        "[id]": "navItem.domId",
        class: "nav-link",
        "[class.nav-item]": "navItem.isNgContainer()",
        "[attr.role]": `role ? role : nav.roles ? 'tab' : undefined`,
        "[class.active]": "navItem.active",
        "[class.disabled]": "navItem.disabled",
        "[attr.tabindex]": "tabindex",
        "[attr.aria-controls]": "navItem.isPanelInDom() ? navItem.panelDomId : null",
        "[attr.aria-selected]": "navItem.active",
        "[attr.aria-disabled]": "navItem.disabled"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["role"]
    }]
  }], null);
})();
var NgbNavLinkButton = class _NgbNavLinkButton extends NgbNavLinkBase {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbNavLinkButton_BaseFactory;
      return function NgbNavLinkButton_Factory(__ngFactoryType__) {
        return (ɵNgbNavLinkButton_BaseFactory || (ɵNgbNavLinkButton_BaseFactory = ɵɵgetInheritedFactory(_NgbNavLinkButton)))(__ngFactoryType__ || _NgbNavLinkButton);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbNavLinkButton,
      selectors: [["button", "ngbNavLink", ""]],
      hostAttrs: ["type", "button"],
      hostVars: 1,
      hostBindings: function NgbNavLinkButton_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NgbNavLinkButton_click_HostBindingHandler() {
            return ctx.nav.click(ctx.navItem);
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("disabled", ctx.navItem.disabled);
        }
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavLinkButton, [{
    type: Directive,
    args: [{
      selector: "button[ngbNavLink]",
      host: {
        type: "button",
        "[disabled]": "navItem.disabled",
        "(click)": "nav.click(navItem)"
      }
    }]
  }], null, null);
})();
var NgbNavLink = class _NgbNavLink extends NgbNavLinkBase {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbNavLink_BaseFactory;
      return function NgbNavLink_Factory(__ngFactoryType__) {
        return (ɵNgbNavLink_BaseFactory || (ɵNgbNavLink_BaseFactory = ɵɵgetInheritedFactory(_NgbNavLink)))(__ngFactoryType__ || _NgbNavLink);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbNavLink,
      selectors: [["a", "ngbNavLink", ""]],
      hostAttrs: ["href", ""],
      hostBindings: function NgbNavLink_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NgbNavLink_click_HostBindingHandler($event) {
            ctx.nav.click(ctx.navItem);
            return $event.preventDefault();
          });
        }
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavLink, [{
    type: Directive,
    args: [{
      selector: "a[ngbNavLink]",
      host: {
        href: "",
        "(click)": "nav.click(navItem); $event.preventDefault()"
      }
    }]
  }], null, null);
})();
var ngbNavFadeOutTransition = ({
  classList
}) => {
  classList.remove("show");
  return () => classList.remove("active");
};
var ngbNavFadeInTransition = (element, animation) => {
  if (animation) {
    reflow(element);
  }
  element.classList.add("show");
};
var NgbNavPane = class _NgbNavPane {
  constructor() {
    this.nativeElement = inject(ElementRef).nativeElement;
  }
  static {
    this.ɵfac = function NgbNavPane_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavPane)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbNavPane,
      selectors: [["", "ngbNavPane", ""]],
      hostAttrs: [1, "tab-pane"],
      hostVars: 5,
      hostBindings: function NgbNavPane_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.item.panelDomId);
          ɵɵattribute("role", ctx.role ? ctx.role : ctx.nav.roles ? "tabpanel" : void 0)("aria-labelledby", ctx.item.domId);
          ɵɵclassProp("fade", ctx.nav.animation);
        }
      },
      inputs: {
        item: "item",
        nav: "nav",
        role: "role"
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavPane, [{
    type: Directive,
    args: [{
      selector: "[ngbNavPane]",
      host: {
        "[id]": "item.panelDomId",
        class: "tab-pane",
        "[class.fade]": "nav.animation",
        "[attr.role]": 'role ? role : nav.roles ? "tabpanel" : undefined',
        "[attr.aria-labelledby]": "item.domId"
      }
    }]
  }], null, {
    item: [{
      type: Input
    }],
    nav: [{
      type: Input
    }],
    role: [{
      type: Input
    }]
  });
})();
var NgbNavOutlet = class _NgbNavOutlet {
  constructor() {
    this._cd = inject(ChangeDetectorRef);
    this._ngZone = inject(NgZone);
    this._activePane = null;
  }
  isPanelTransitioning(item) {
    return this._activePane?.item === item;
  }
  ngAfterViewInit() {
    this._updateActivePane();
    this.nav.navItemChange$.pipe(takeUntilDestroyed(this.nav.destroyRef), startWith(this._activePane?.item || null), distinctUntilChanged(), skip(1)).subscribe((nextItem) => {
      const options = {
        animation: this.nav.animation,
        runningTransition: "stop"
      };
      this._cd.detectChanges();
      if (this._activePane) {
        ngbRunTransition(this._ngZone, this._activePane.nativeElement, ngbNavFadeOutTransition, options).subscribe(() => {
          const activeItem = this._activePane?.item;
          this._activePane = this._getPaneForItem(nextItem);
          this._cd.markForCheck();
          if (this._activePane) {
            this._activePane.nativeElement.classList.add("active");
            ngbRunTransition(this._ngZone, this._activePane.nativeElement, ngbNavFadeInTransition, options).subscribe(() => {
              if (nextItem) {
                nextItem.shown.emit();
                this.nav.shown.emit(nextItem.id);
              }
            });
          }
          if (activeItem) {
            activeItem.hidden.emit();
            this.nav.hidden.emit(activeItem.id);
          }
        });
      } else {
        this._updateActivePane();
      }
    });
  }
  _updateActivePane() {
    this._activePane = this._getActivePane();
    this._activePane?.nativeElement.classList.add("show", "active");
  }
  _getPaneForItem(item) {
    return this._panes && this._panes.find((pane) => pane.item === item) || null;
  }
  _getActivePane() {
    return this._panes && this._panes.find((pane) => pane.item.active) || null;
  }
  static {
    this.ɵfac = function NgbNavOutlet_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavOutlet)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbNavOutlet,
      selectors: [["", "ngbNavOutlet", ""]],
      viewQuery: function NgbNavOutlet_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(NgbNavPane, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._panes = _t);
        }
      },
      hostAttrs: [1, "tab-content"],
      inputs: {
        paneRole: "paneRole",
        nav: [0, "ngbNavOutlet", "nav"]
      },
      attrs: _c10,
      decls: 2,
      vars: 0,
      consts: [["ngbNavPane", "", 3, "item", "nav", "role"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NgbNavOutlet_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵrepeaterCreate(0, NgbNavOutlet_For_1_Template, 1, 1, null, null, ɵɵrepeaterTrackByIdentity);
        }
        if (rf & 2) {
          ɵɵrepeater(ctx.nav.items);
        }
      },
      dependencies: [NgbNavPane, NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavOutlet, [{
    type: Component,
    args: [{
      selector: "[ngbNavOutlet]",
      imports: [NgbNavPane, NgTemplateOutlet],
      host: {
        class: "tab-content"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
		@for (item of nav.items; track item) {
			@if (item.isPanelInDom() || isPanelTransitioning(item)) {
				<div ngbNavPane [item]="item" [nav]="nav" [role]="paneRole">
					<ng-template
						[ngTemplateOutlet]="item.contentTpl?.templateRef || null"
						[ngTemplateOutletContext]="{ $implicit: item.active || isPanelTransitioning(item) }"
					/>
				</div>
			}
		}
	`
    }]
  }], null, {
    _panes: [{
      type: ViewChildren,
      args: [NgbNavPane]
    }],
    paneRole: [{
      type: Input
    }],
    nav: [{
      type: Input,
      args: ["ngbNavOutlet"]
    }]
  });
})();
var NGB_NAV_DIRECTIVES = [NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkButton, NgbNavLinkBase, NgbNavOutlet, NgbNavPane];
var NgbNavModule = class _NgbNavModule {
  static {
    this.ɵfac = function NgbNavModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbNavModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbNavModule,
      imports: [NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkButton, NgbNavLinkBase, NgbNavOutlet, NgbNavPane],
      exports: [NgbNavContent, NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkButton, NgbNavLinkBase, NgbNavOutlet, NgbNavPane]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbNavModule, [{
    type: NgModule,
    args: [{
      imports: NGB_NAV_DIRECTIVES,
      exports: NGB_NAV_DIRECTIVES
    }]
  }], null, null);
})();
var NgbPaginationConfig = class _NgbPaginationConfig {
  constructor() {
    this.disabled = false;
    this.boundaryLinks = false;
    this.directionLinks = true;
    this.ellipses = true;
    this.maxSize = 0;
    this.pageSize = 10;
    this.rotate = false;
  }
  static {
    this.ɵfac = function NgbPaginationConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbPaginationConfig,
      factory: _NgbPaginationConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbPaginationEllipsis = class _NgbPaginationEllipsis {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbPaginationEllipsis_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationEllipsis)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbPaginationEllipsis,
      selectors: [["ng-template", "ngbPaginationEllipsis", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationEllipsis, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationEllipsis]"
    }]
  }], null, null);
})();
var NgbPaginationFirst = class _NgbPaginationFirst {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbPaginationFirst_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationFirst)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbPaginationFirst,
      selectors: [["ng-template", "ngbPaginationFirst", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationFirst, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationFirst]"
    }]
  }], null, null);
})();
var NgbPaginationLast = class _NgbPaginationLast {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbPaginationLast_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationLast)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbPaginationLast,
      selectors: [["ng-template", "ngbPaginationLast", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationLast, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationLast]"
    }]
  }], null, null);
})();
var NgbPaginationNext = class _NgbPaginationNext {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbPaginationNext_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationNext)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbPaginationNext,
      selectors: [["ng-template", "ngbPaginationNext", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationNext, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationNext]"
    }]
  }], null, null);
})();
var NgbPaginationNumber = class _NgbPaginationNumber {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbPaginationNumber_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationNumber)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbPaginationNumber,
      selectors: [["ng-template", "ngbPaginationNumber", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationNumber, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationNumber]"
    }]
  }], null, null);
})();
var NgbPaginationPrevious = class _NgbPaginationPrevious {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbPaginationPrevious_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationPrevious)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbPaginationPrevious,
      selectors: [["ng-template", "ngbPaginationPrevious", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationPrevious, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationPrevious]"
    }]
  }], null, null);
})();
var NgbPaginationPages = class _NgbPaginationPages {
  constructor() {
    this.templateRef = inject(TemplateRef);
  }
  static {
    this.ɵfac = function NgbPaginationPages_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationPages)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbPaginationPages,
      selectors: [["ng-template", "ngbPaginationPages", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationPages, [{
    type: Directive,
    args: [{
      selector: "ng-template[ngbPaginationPages]"
    }]
  }], null, null);
})();
var NgbPagination = class _NgbPagination {
  constructor() {
    this._config = inject(NgbPaginationConfig);
    this.pageCount = 0;
    this.pages = [];
    this.disabled = this._config.disabled;
    this.boundaryLinks = this._config.boundaryLinks;
    this.directionLinks = this._config.directionLinks;
    this.ellipses = this._config.ellipses;
    this.rotate = this._config.rotate;
    this.maxSize = this._config.maxSize;
    this.page = 1;
    this.pageSize = this._config.pageSize;
    this.pageChange = new EventEmitter(true);
    this.size = this._config.size;
  }
  hasPrevious() {
    return this.page > 1;
  }
  hasNext() {
    return this.page < this.pageCount;
  }
  nextDisabled() {
    return !this.hasNext() || this.disabled;
  }
  previousDisabled() {
    return !this.hasPrevious() || this.disabled;
  }
  selectPage(pageNumber) {
    this._updatePages(pageNumber);
  }
  ngOnChanges(changes) {
    this._updatePages(this.page);
  }
  isEllipsis(pageNumber) {
    return pageNumber === -1;
  }
  /**
   * Appends ellipses and first/last page number to the displayed pages
   */
  _applyEllipses(start2, end2) {
    if (this.ellipses) {
      if (start2 > 0) {
        if (start2 > 2) {
          this.pages.unshift(-1);
        } else if (start2 === 2) {
          this.pages.unshift(2);
        }
        this.pages.unshift(1);
      }
      if (end2 < this.pageCount) {
        if (end2 < this.pageCount - 2) {
          this.pages.push(-1);
        } else if (end2 === this.pageCount - 2) {
          this.pages.push(this.pageCount - 1);
        }
        this.pages.push(this.pageCount);
      }
    }
  }
  /**
   * Rotates page numbers based on maxSize items visible.
   * Currently selected page stays in the middle:
   *
   * Ex. for selected page = 6:
   * [5,*6*,7] for maxSize = 3
   * [4,5,*6*,7] for maxSize = 4
   */
  _applyRotation() {
    let start2 = 0;
    let end2 = this.pageCount;
    let leftOffset = Math.floor(this.maxSize / 2);
    let rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
    if (this.page <= leftOffset) {
      end2 = this.maxSize;
    } else if (this.pageCount - this.page < leftOffset) {
      start2 = this.pageCount - this.maxSize;
    } else {
      start2 = this.page - leftOffset - 1;
      end2 = this.page + rightOffset;
    }
    return [start2, end2];
  }
  /**
   * Paginates page numbers based on maxSize items per page.
   */
  _applyPagination() {
    let page = Math.ceil(this.page / this.maxSize) - 1;
    let start2 = page * this.maxSize;
    let end2 = start2 + this.maxSize;
    return [start2, end2];
  }
  _setPageInRange(newPageNo) {
    const prevPageNo = this.page;
    this.page = getValueInRange(newPageNo, this.pageCount, 1);
    if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
      this.pageChange.emit(this.page);
    }
  }
  _updatePages(newPage) {
    this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
    if (!isNumber(this.pageCount)) {
      this.pageCount = 0;
    }
    this.pages.length = 0;
    for (let i = 1; i <= this.pageCount; i++) {
      this.pages.push(i);
    }
    this._setPageInRange(newPage);
    if (this.maxSize > 0 && this.pageCount > this.maxSize) {
      let start2 = 0;
      let end2 = this.pageCount;
      if (this.rotate) {
        [start2, end2] = this._applyRotation();
      } else {
        [start2, end2] = this._applyPagination();
      }
      this.pages = this.pages.slice(start2, end2);
      this._applyEllipses(start2, end2);
    }
  }
  static {
    this.ɵfac = function NgbPagination_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPagination)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbPagination,
      selectors: [["ngb-pagination"]],
      contentQueries: function NgbPagination_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbPaginationEllipsis, 5);
          ɵɵcontentQuery(dirIndex, NgbPaginationFirst, 5);
          ɵɵcontentQuery(dirIndex, NgbPaginationLast, 5);
          ɵɵcontentQuery(dirIndex, NgbPaginationNext, 5);
          ɵɵcontentQuery(dirIndex, NgbPaginationNumber, 5);
          ɵɵcontentQuery(dirIndex, NgbPaginationPrevious, 5);
          ɵɵcontentQuery(dirIndex, NgbPaginationPages, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tplEllipsis = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tplFirst = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tplLast = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tplNext = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tplNumber = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tplPrevious = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tplPages = _t.first);
        }
      },
      hostAttrs: ["role", "navigation"],
      inputs: {
        disabled: "disabled",
        boundaryLinks: "boundaryLinks",
        directionLinks: "directionLinks",
        ellipses: "ellipses",
        rotate: "rotate",
        collectionSize: "collectionSize",
        maxSize: "maxSize",
        page: "page",
        pageSize: "pageSize",
        size: "size"
      },
      outputs: {
        pageChange: "pageChange"
      },
      features: [ɵɵNgOnChangesFeature],
      decls: 20,
      vars: 12,
      consts: () => {
        let i18n_12;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_12 = goog.getMsg("««");
          i18n_12 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_12;
        } else {
          i18n_12 = $localize`:@@ngb.pagination.first:««`;
        }
        let i18n_13;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_13 = goog.getMsg("«");
          i18n_13 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_13;
        } else {
          i18n_13 = $localize`:@@ngb.pagination.previous:«`;
        }
        let i18n_14;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_14 = goog.getMsg("»");
          i18n_14 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_14;
        } else {
          i18n_14 = $localize`:@@ngb.pagination.next:»`;
        }
        let i18n_15;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_15 = goog.getMsg("»»");
          i18n_15 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_15;
        } else {
          i18n_15 = $localize`:@@ngb.pagination.last:»»`;
        }
        let i18n_16;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_16 = goog.getMsg("First");
          i18n_16 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_16;
        } else {
          i18n_16 = $localize`:@@ngb.pagination.first-aria:First`;
        }
        let i18n_17;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_17 = goog.getMsg("Previous");
          i18n_17 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_17;
        } else {
          i18n_17 = $localize`:@@ngb.pagination.previous-aria:Previous`;
        }
        let i18n_18;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_18 = goog.getMsg("Next");
          i18n_18 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_18;
        } else {
          i18n_18 = $localize`:@@ngb.pagination.next-aria:Next`;
        }
        let i18n_19;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_19 = goog.getMsg("Last");
          i18n_19 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_19;
        } else {
          i18n_19 = $localize`:@@ngb.pagination.last-aria:Last`;
        }
        return [["first", ""], ["previous", ""], ["next", ""], ["last", ""], ["ellipsis", ""], ["defaultNumber", ""], ["defaultPages", ""], i18n_12, i18n_13, i18n_14, i18n_15, [1, "page-item", 3, "disabled"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true"], [1, "page-item", 3, "active", "disabled"], [1, "page-item"], ["tabindex", "-1", "aria-disabled", "true", 1, "page-link"], ["href", "", 1, "page-link"], ["href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_16, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_17, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_18, "href", "", 1, "page-link", 3, "click"], ["aria-label", i18n_19, "href", "", 1, "page-link", 3, "click"]];
      },
      template: function NgbPagination_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NgbPagination_ng_template_0_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, NgbPagination_ng_template_2_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, NgbPagination_ng_template_4_Template, 2, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor)(6, NgbPagination_ng_template_6_Template, 2, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor)(8, NgbPagination_ng_template_8_Template, 1, 0, "ng-template", null, 4, ɵɵtemplateRefExtractor)(10, NgbPagination_ng_template_10_Template, 1, 1, "ng-template", null, 5, ɵɵtemplateRefExtractor)(12, NgbPagination_ng_template_12_Template, 2, 0, "ng-template", null, 6, ɵɵtemplateRefExtractor);
          ɵɵelementStart(14, "ul");
          ɵɵconditionalCreate(15, NgbPagination_Conditional_15_Template, 3, 9, "li", 11);
          ɵɵconditionalCreate(16, NgbPagination_Conditional_16_Template, 3, 8, "li", 11);
          ɵɵtemplate(17, NgbPagination_ng_template_17_Template, 0, 0, "ng-template", 12);
          ɵɵconditionalCreate(18, NgbPagination_Conditional_18_Template, 3, 9, "li", 11);
          ɵɵconditionalCreate(19, NgbPagination_Conditional_19_Template, 3, 9, "li", 11);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const defaultPages_r19 = ɵɵreference(13);
          ɵɵadvance(14);
          ɵɵclassMap("pagination" + (ctx.size ? " pagination-" + ctx.size : ""));
          ɵɵadvance();
          ɵɵconditional(ctx.boundaryLinks ? 15 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.directionLinks ? 16 : -1);
          ɵɵadvance();
          ɵɵproperty("ngTemplateOutlet", (ctx.tplPages == null ? null : ctx.tplPages.templateRef) || defaultPages_r19)("ngTemplateOutletContext", ɵɵpureFunction3(8, _c11, ctx.page, ctx.pages, ctx.disabled));
          ɵɵadvance();
          ɵɵconditional(ctx.directionLinks ? 18 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.boundaryLinks ? 19 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPagination, [{
    type: Component,
    args: [{
      selector: "ngb-pagination",
      imports: [NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        role: "navigation"
      },
      template: `
		<ng-template #first><span aria-hidden="true" i18n="@@ngb.pagination.first">&laquo;&laquo;</span></ng-template>
		<ng-template #previous><span aria-hidden="true" i18n="@@ngb.pagination.previous">&laquo;</span></ng-template>
		<ng-template #next><span aria-hidden="true" i18n="@@ngb.pagination.next">&raquo;</span></ng-template>
		<ng-template #last><span aria-hidden="true" i18n="@@ngb.pagination.last">&raquo;&raquo;</span></ng-template>
		<ng-template #ellipsis>...</ng-template>
		<ng-template #defaultNumber let-page let-currentPage="currentPage">{{ page }}</ng-template>
		<ng-template #defaultPages let-page let-pages="pages" let-disabled="disabled">
			@for (pageNumber of pages; track $index) {
				<li
					class="page-item"
					[class.active]="pageNumber === page"
					[class.disabled]="isEllipsis(pageNumber) || disabled"
				>
					@if (isEllipsis(pageNumber)) {
						<a class="page-link" tabindex="-1" aria-disabled="true">
							<ng-template
								[ngTemplateOutlet]="tplEllipsis?.templateRef || ellipsis"
								[ngTemplateOutletContext]="{ disabled: true, currentPage: page }"
							/>
						</a>
					} @else {
						<a
							class="page-link"
							href
							(click)="selectPage(pageNumber); $event.preventDefault()"
							[attr.tabindex]="disabled ? '-1' : null"
							[attr.aria-disabled]="disabled ? 'true' : null"
							[attr.aria-current]="pageNumber === page ? 'page' : null"
						>
							<ng-template
								[ngTemplateOutlet]="tplNumber?.templateRef || defaultNumber"
								[ngTemplateOutletContext]="{ disabled: disabled, $implicit: pageNumber, currentPage: page }"
							/>
						</a>
					}
				</li>
			}
		</ng-template>
		<ul [class]="'pagination' + (size ? ' pagination-' + size : '')">
			@if (boundaryLinks) {
				<li class="page-item" [class.disabled]="previousDisabled()">
					<a
						aria-label="First"
						i18n-aria-label="@@ngb.pagination.first-aria"
						class="page-link"
						href
						(click)="selectPage(1); $event.preventDefault()"
						[attr.tabindex]="previousDisabled() ? '-1' : null"
						[attr.aria-disabled]="previousDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplFirst?.templateRef || first"
							[ngTemplateOutletContext]="{ disabled: previousDisabled(), currentPage: page }"
						/>
					</a>
				</li>
			}
			@if (directionLinks) {
				<li class="page-item" [class.disabled]="previousDisabled()">
					<a
						aria-label="Previous"
						i18n-aria-label="@@ngb.pagination.previous-aria"
						class="page-link"
						href
						(click)="selectPage(page - 1); $event.preventDefault()"
						[attr.tabindex]="previousDisabled() ? '-1' : null"
						[attr.aria-disabled]="previousDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplPrevious?.templateRef || previous"
							[ngTemplateOutletContext]="{ disabled: previousDisabled() }"
						/>
					</a>
				</li>
			}
			<ng-template
				[ngTemplateOutlet]="tplPages?.templateRef || defaultPages"
				[ngTemplateOutletContext]="{ $implicit: page, pages: pages, disabled: disabled }"
			/>
			@if (directionLinks) {
				<li class="page-item" [class.disabled]="nextDisabled()">
					<a
						aria-label="Next"
						i18n-aria-label="@@ngb.pagination.next-aria"
						class="page-link"
						href
						(click)="selectPage(page + 1); $event.preventDefault()"
						[attr.tabindex]="nextDisabled() ? '-1' : null"
						[attr.aria-disabled]="nextDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplNext?.templateRef || next"
							[ngTemplateOutletContext]="{ disabled: nextDisabled(), currentPage: page }"
						/>
					</a>
				</li>
			}
			@if (boundaryLinks) {
				<li class="page-item" [class.disabled]="nextDisabled()">
					<a
						aria-label="Last"
						i18n-aria-label="@@ngb.pagination.last-aria"
						class="page-link"
						href
						(click)="selectPage(pageCount); $event.preventDefault()"
						[attr.tabindex]="nextDisabled() ? '-1' : null"
						[attr.aria-disabled]="nextDisabled() ? 'true' : null"
					>
						<ng-template
							[ngTemplateOutlet]="tplLast?.templateRef || last"
							[ngTemplateOutletContext]="{ disabled: nextDisabled(), currentPage: page }"
						/>
					</a>
				</li>
			}
		</ul>
	`
    }]
  }], null, {
    tplEllipsis: [{
      type: ContentChild,
      args: [NgbPaginationEllipsis, {
        static: false
      }]
    }],
    tplFirst: [{
      type: ContentChild,
      args: [NgbPaginationFirst, {
        static: false
      }]
    }],
    tplLast: [{
      type: ContentChild,
      args: [NgbPaginationLast, {
        static: false
      }]
    }],
    tplNext: [{
      type: ContentChild,
      args: [NgbPaginationNext, {
        static: false
      }]
    }],
    tplNumber: [{
      type: ContentChild,
      args: [NgbPaginationNumber, {
        static: false
      }]
    }],
    tplPrevious: [{
      type: ContentChild,
      args: [NgbPaginationPrevious, {
        static: false
      }]
    }],
    tplPages: [{
      type: ContentChild,
      args: [NgbPaginationPages, {
        static: false
      }]
    }],
    disabled: [{
      type: Input
    }],
    boundaryLinks: [{
      type: Input
    }],
    directionLinks: [{
      type: Input
    }],
    ellipses: [{
      type: Input
    }],
    rotate: [{
      type: Input
    }],
    collectionSize: [{
      type: Input,
      args: [{
        required: true
      }]
    }],
    maxSize: [{
      type: Input
    }],
    page: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    pageChange: [{
      type: Output
    }],
    size: [{
      type: Input
    }]
  });
})();
var NGB_PAGINATION_DIRECTIVES = [NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPaginationPages];
var NgbPaginationModule = class _NgbPaginationModule {
  static {
    this.ɵfac = function NgbPaginationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPaginationModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbPaginationModule,
      imports: [NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPaginationPages],
      exports: [NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPaginationPages]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPaginationModule, [{
    type: NgModule,
    args: [{
      imports: NGB_PAGINATION_DIRECTIVES,
      exports: NGB_PAGINATION_DIRECTIVES
    }]
  }], null, null);
})();
var ALIASES = {
  hover: ["mouseenter", "mouseleave"],
  focus: ["focusin", "focusout"]
};
function parseTriggers(triggers) {
  const trimmedTriggers = (triggers || "").trim();
  if (trimmedTriggers.length === 0) {
    return [];
  }
  const parsedTriggers = trimmedTriggers.split(/\s+/).map((trigger) => trigger.split(":")).map((triggerPair) => ALIASES[triggerPair[0]] || triggerPair);
  const manualTriggers = parsedTriggers.filter((triggerPair) => triggerPair.includes("manual"));
  if (manualTriggers.length > 1) {
    throw `Triggers parse error: only one manual trigger is allowed`;
  }
  if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
    throw `Triggers parse error: manual trigger can't be mixed with other triggers`;
  }
  return manualTriggers.length ? [] : parsedTriggers;
}
function listenToTriggers(element, triggers, isOpenedFn, openFn, closeFn, openDelayMs = 0, closeDelayMs = 0, enterContent = EMPTY, leaveContent = EMPTY) {
  const parsedTriggers = parseTriggers(triggers);
  if (parsedTriggers.length === 0) {
    return () => {
    };
  }
  const activeOpenTriggers = /* @__PURE__ */ new Set();
  const cleanupFns = [];
  let timeout;
  function addEventListener(name, listener) {
    element.addEventListener(name, listener);
    cleanupFns.push(() => element.removeEventListener(name, listener));
  }
  function withDelay(fn2, delayMs) {
    clearTimeout(timeout);
    if (delayMs > 0) {
      timeout = setTimeout(fn2, delayMs);
    } else {
      fn2();
    }
  }
  for (const [openTrigger, closeTrigger] of parsedTriggers) {
    if (!closeTrigger) {
      addEventListener(openTrigger, () => isOpenedFn() ? withDelay(closeFn, closeDelayMs) : withDelay(openFn, openDelayMs));
    } else {
      addEventListener(openTrigger, () => {
        activeOpenTriggers.add(openTrigger);
        withDelay(() => activeOpenTriggers.size > 0 && openFn(), openDelayMs);
      });
      addEventListener(closeTrigger, () => {
        activeOpenTriggers.delete(openTrigger);
        withDelay(() => activeOpenTriggers.size === 0 && closeFn(), closeDelayMs);
      });
    }
    if (openTrigger === "mouseenter" && closeTrigger === "mouseleave" && closeDelayMs > 0) {
      const enterContentSub = enterContent.subscribe(() => {
        activeOpenTriggers.delete(openTrigger);
        clearTimeout(timeout);
      });
      const leaveContentSub = leaveContent.subscribe(() => {
        activeOpenTriggers.delete(openTrigger);
        withDelay(() => activeOpenTriggers.size === 0 && closeFn(), closeDelayMs);
      });
      cleanupFns.push(() => enterContentSub.unsubscribe(), () => leaveContentSub.unsubscribe());
    }
  }
  cleanupFns.push(() => clearTimeout(timeout));
  return () => cleanupFns.forEach((cleanupFn) => cleanupFn());
}
var NgbPopoverConfig = class _NgbPopoverConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.autoClose = true;
    this.placement = "auto";
    this.popperOptions = (options) => options;
    this.triggers = "click";
    this.disablePopover = false;
    this.openDelay = 0;
    this.closeDelay = 0;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.ɵfac = function NgbPopoverConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPopoverConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbPopoverConfig,
      factory: _NgbPopoverConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPopoverConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var nextId$1 = 0;
var NgbPopoverWindow = class _NgbPopoverWindow {
  isTitleTemplate() {
    return this.title instanceof TemplateRef;
  }
  static {
    this.ɵfac = function NgbPopoverWindow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPopoverWindow)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbPopoverWindow,
      selectors: [["ngb-popover-window"]],
      hostAttrs: ["role", "tooltip", 2, "position", "absolute"],
      hostVars: 5,
      hostBindings: function NgbPopoverWindow_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mouseenter", function NgbPopoverWindow_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          })("mouseleave", function NgbPopoverWindow_mouseleave_HostBindingHandler() {
            return ctx.onMouseLeave();
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.id);
          ɵɵclassMap("popover" + (ctx.popoverClass ? " " + ctx.popoverClass : ""));
          ɵɵclassProp("fade", ctx.animation);
        }
      },
      inputs: {
        animation: "animation",
        title: "title",
        id: "id",
        popoverClass: "popoverClass",
        context: "context",
        onMouseEnter: "onMouseEnter",
        onMouseLeave: "onMouseLeave"
      },
      ngContentSelectors: _c2,
      decls: 4,
      vars: 1,
      consts: [["simpleTitle", ""], ["data-popper-arrow", "", 1, "popover-arrow"], [1, "popover-header"], [1, "popover-body"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NgbPopoverWindow_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelement(0, "div", 1);
          ɵɵconditionalCreate(1, NgbPopoverWindow_Conditional_1_Template, 4, 2, "h3", 2);
          ɵɵelementStart(2, "div", 3);
          ɵɵprojection(3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵconditional(ctx.title ? 1 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPopoverWindow, [{
    type: Component,
    args: [{
      selector: "ngb-popover-window",
      imports: [NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": '"popover" + (popoverClass ? " " + popoverClass : "")',
        "[class.fade]": "animation",
        role: "tooltip",
        "[id]": "id",
        style: "position: absolute;",
        "(mouseenter)": "onMouseEnter()",
        "(mouseleave)": "onMouseLeave()"
      },
      template: `
		<div class="popover-arrow" data-popper-arrow></div>
		@if (title) {
			<h3 class="popover-header">
				<ng-template #simpleTitle>{{ title }}</ng-template>
				<ng-template
					[ngTemplateOutlet]="isTitleTemplate() ? $any(title) : simpleTitle"
					[ngTemplateOutletContext]="context"
				/>
			</h3>
		}
		<div class="popover-body">
			<ng-content />
		</div>
	`
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    popoverClass: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    onMouseEnter: [{
      type: Input
    }],
    onMouseLeave: [{
      type: Input
    }]
  });
})();
var NgbPopover = class _NgbPopover {
  constructor() {
    this._config = inject(NgbPopoverConfig);
    this.animation = this._config.animation;
    this.autoClose = this._config.autoClose;
    this.placement = this._config.placement;
    this.popperOptions = this._config.popperOptions;
    this.triggers = this._config.triggers;
    this.container = this._config.container;
    this.disablePopover = this._config.disablePopover;
    this.popoverClass = this._config.popoverClass;
    this.openDelay = this._config.openDelay;
    this.closeDelay = this._config.closeDelay;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
    this._nativeElement = inject(ElementRef).nativeElement;
    this._ngZone = inject(NgZone);
    this._document = inject(DOCUMENT);
    this._changeDetector = inject(ChangeDetectorRef);
    this._injector = inject(Injector);
    this._ngbPopoverWindowId = `ngb-popover-${nextId$1++}`;
    this._popupService = new PopupService(NgbPopoverWindow);
    this._windowRef = null;
    this._positioning = ngbPositioning();
    this._mouseEnterPopover = new Subject();
    this._mouseLeavePopover = new Subject();
    this._opening = true;
    this._transitioning = false;
  }
  /**
   * Opens the popover.
   *
   * This is considered to be a "manual" triggering.
   * The `context` is an optional value to be injected into the popover template when it is created.
   */
  open(context) {
    if (!this._opening && this._transitioning) {
      this._transitioning = false;
      ngbCompleteTransition(this._windowRef.location.nativeElement);
    }
    if (!this._windowRef && !this._isDisabled()) {
      const {
        windowRef,
        transition$
      } = this._popupService.open(this.ngbPopover, context ?? this.popoverContext, this.animation);
      this._opening = true;
      this._transitioning = true;
      this._windowRef = windowRef;
      this._windowRef.setInput("animation", this.animation);
      this._windowRef.setInput("title", this.popoverTitle);
      this._windowRef.setInput("context", context ?? this.popoverContext);
      this._windowRef.setInput("popoverClass", this.popoverClass);
      this._windowRef.setInput("id", this._ngbPopoverWindowId);
      this._windowRef.setInput("onMouseEnter", () => this._mouseEnterPopover.next());
      this._windowRef.setInput("onMouseLeave", () => this._mouseLeavePopover.next());
      this._getPositionTargetElement().setAttribute("aria-describedby", this._ngbPopoverWindowId);
      if (this.container === "body") {
        this._document.body.appendChild(this._windowRef.location.nativeElement);
      }
      this._windowRef.changeDetectorRef.detectChanges();
      this._windowRef.changeDetectorRef.markForCheck();
      this._ngZone.runOutsideAngular(() => {
        this._positioning.createPopper({
          hostElement: this._getPositionTargetElement(),
          targetElement: this._windowRef.location.nativeElement,
          placement: this.placement,
          baseClass: "bs-popover",
          updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 8])(options))
        });
        Promise.resolve().then(() => {
          this._positioning.update();
        });
        this._afterRenderRef = afterEveryRender({
          mixedReadWrite: () => {
            this._positioning.update();
          }
        }, {
          injector: this._injector
        });
      });
      ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden, [this._windowRef.location.nativeElement]);
      transition$.subscribe(() => {
        if (this._transitioning) {
          this._transitioning = false;
          this.shown.emit();
        }
      });
    }
  }
  /**
   * Closes the popover.
   *
   * This is considered to be a "manual" triggering of the popover.
   */
  close(animation = this.animation) {
    if (this._opening && this._transitioning) {
      this._transitioning = false;
      ngbCompleteTransition(this._windowRef.location.nativeElement);
    }
    if (this._windowRef) {
      this._getPositionTargetElement().removeAttribute("aria-describedby");
      this._opening = false;
      this._transitioning = true;
      this._popupService.close(animation).subscribe(() => {
        this._windowRef = null;
        this._positioning.destroy();
        this._afterRenderRef?.destroy();
        if (this._transitioning) {
          this._transitioning = false;
          this.hidden.emit();
        }
        this._changeDetector.markForCheck();
      });
    }
  }
  /**
   * Toggles the popover.
   *
   * This is considered to be a "manual" triggering of the popover.
   */
  toggle() {
    if (this._windowRef) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Returns `true`, if the popover is currently shown.
   */
  isOpen() {
    return this._windowRef != null;
  }
  ngOnInit() {
    this._unregisterListenersFn = listenToTriggers(this._nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay, this._mouseEnterPopover, this._mouseLeavePopover);
  }
  ngOnChanges({
    ngbPopover,
    popoverTitle,
    disablePopover,
    popoverClass
  }) {
    if (popoverClass && this.isOpen()) {
      this._windowRef.setInput("popoverClass", popoverClass.currentValue);
    }
    if ((ngbPopover || popoverTitle || disablePopover) && this._isDisabled()) {
      this.close();
    }
  }
  ngOnDestroy() {
    this.close(false);
    this._unregisterListenersFn?.();
  }
  _isDisabled() {
    return this.disablePopover ? true : !this.ngbPopover && !this.popoverTitle;
  }
  _getPositionTargetElement() {
    return (isString(this.positionTarget) ? this._document.querySelector(this.positionTarget) : this.positionTarget) || this._nativeElement;
  }
  static {
    this.ɵfac = function NgbPopover_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPopover)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbPopover,
      selectors: [["", "ngbPopover", ""]],
      inputs: {
        animation: "animation",
        autoClose: "autoClose",
        ngbPopover: "ngbPopover",
        popoverTitle: "popoverTitle",
        placement: "placement",
        popperOptions: "popperOptions",
        triggers: "triggers",
        positionTarget: "positionTarget",
        container: "container",
        disablePopover: "disablePopover",
        popoverClass: "popoverClass",
        popoverContext: "popoverContext",
        openDelay: "openDelay",
        closeDelay: "closeDelay"
      },
      outputs: {
        shown: "shown",
        hidden: "hidden"
      },
      exportAs: ["ngbPopover"],
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPopover, [{
    type: Directive,
    args: [{
      selector: "[ngbPopover]",
      exportAs: "ngbPopover"
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    autoClose: [{
      type: Input
    }],
    ngbPopover: [{
      type: Input
    }],
    popoverTitle: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    popperOptions: [{
      type: Input
    }],
    triggers: [{
      type: Input
    }],
    positionTarget: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    disablePopover: [{
      type: Input
    }],
    popoverClass: [{
      type: Input
    }],
    popoverContext: [{
      type: Input
    }],
    openDelay: [{
      type: Input
    }],
    closeDelay: [{
      type: Input
    }],
    shown: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }]
  });
})();
var NgbPopoverModule = class _NgbPopoverModule {
  static {
    this.ɵfac = function NgbPopoverModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbPopoverModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbPopoverModule,
      imports: [NgbPopover],
      exports: [NgbPopover]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbPopoverModule, [{
    type: NgModule,
    args: [{
      imports: [NgbPopover],
      exports: [NgbPopover]
    }]
  }], null, null);
})();
var NgbProgressbarConfig = class _NgbProgressbarConfig {
  constructor() {
    this.max = 100;
    this.animated = false;
    this.ariaLabel = "progress bar";
    this.striped = false;
    this.showValue = false;
  }
  static {
    this.ɵfac = function NgbProgressbarConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbProgressbarConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbProgressbarConfig,
      factory: _NgbProgressbarConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbProgressbarConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbProgressbar = class _NgbProgressbar {
  /**
   * The maximal value to be displayed in the progress bar.
   *
   * Should be a positive number. Will default to 100 otherwise.
   */
  set max(max2) {
    this._max = !isNumber(max2) || max2 <= 0 ? 100 : max2;
  }
  get max() {
    return this._max;
  }
  constructor() {
    this._config = inject(NgbProgressbarConfig);
    this.stacked = inject(NgbProgressbarStacked, {
      optional: true
    });
    this.animated = this._config.animated;
    this.ariaLabel = this._config.ariaLabel;
    this.striped = this._config.striped;
    this.showValue = this._config.showValue;
    this.textType = this._config.textType;
    this.type = this._config.type;
    this.value = 0;
    this.height = this._config.height;
    this.max = this._config.max;
  }
  getValue() {
    return getValueInRange(this.value, this.max);
  }
  getPercentValue() {
    return 100 * this.getValue() / this.max;
  }
  static {
    this.ɵfac = function NgbProgressbar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbProgressbar)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbProgressbar,
      selectors: [["ngb-progressbar"]],
      hostAttrs: ["role", "progressbar", "aria-valuemin", "0", 1, "progress"],
      hostVars: 7,
      hostBindings: function NgbProgressbar_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("aria-valuenow", ctx.getValue())("aria-valuemax", ctx.max)("aria-label", ctx.ariaLabel);
          ɵɵstyleProp("width", ctx.stacked ? ctx.getPercentValue() : null, "%")("height", ctx.height);
        }
      },
      inputs: {
        max: "max",
        animated: "animated",
        ariaLabel: "ariaLabel",
        striped: "striped",
        showValue: "showValue",
        textType: "textType",
        type: "type",
        value: "value",
        height: "height"
      },
      ngContentSelectors: _c2,
      decls: 3,
      vars: 11,
      consts: () => {
        let i18n_20;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_20 = goog.getMsg("{$interpolation}", {
            "interpolation": "�0�"
          }, {
            original_code: {
              "interpolation": "{{ getValue() / max | percent }}"
            }
          });
          i18n_20 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_20;
        } else {
          i18n_20 = $localize`:@@ngb.progressbar.value:${"�0�"}:INTERPOLATION:`;
        }
        return [i18n_20];
      },
      template: function NgbProgressbar_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵdomElementStart(0, "div");
          ɵɵconditionalCreate(1, NgbProgressbar_Conditional_1_Template, 3, 3, "span");
          ɵɵprojection(2);
          ɵɵdomElementEnd();
        }
        if (rf & 2) {
          ɵɵclassMap(ɵɵinterpolate2("progress-bar", ctx.type ? ctx.textType ? " bg-" + ctx.type : " text-bg-" + ctx.type : "", "", ctx.textType ? " text-" + ctx.textType : ""));
          ɵɵstyleProp("width", !ctx.stacked ? ctx.getPercentValue() : null, "%");
          ɵɵclassProp("progress-bar-animated", ctx.animated)("progress-bar-striped", ctx.striped);
          ɵɵadvance();
          ɵɵconditional(ctx.showValue ? 1 : -1);
        }
      },
      dependencies: [PercentPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbProgressbar, [{
    type: Component,
    args: [{
      selector: "ngb-progressbar",
      imports: [PercentPipe],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "progress",
        role: "progressbar",
        "[attr.aria-valuenow]": "getValue()",
        "aria-valuemin": "0",
        "[attr.aria-valuemax]": "max",
        "[attr.aria-label]": "ariaLabel",
        "[style.width.%]": "stacked ? getPercentValue() : null",
        "[style.height]": "height"
      },
      template: `
		<div
			class="progress-bar{{ type ? (textType ? ' bg-' + type : ' text-bg-' + type) : '' }}{{
				textType ? ' text-' + textType : ''
			}}"
			[class.progress-bar-animated]="animated"
			[class.progress-bar-striped]="striped"
			[style.width.%]="!stacked ? getPercentValue() : null"
		>
			@if (showValue) {
				<span i18n="@@ngb.progressbar.value">{{ getValue() / max | percent }}</span>
			}
			<ng-content />
		</div>
	`
    }]
  }], () => [], {
    max: [{
      type: Input
    }],
    animated: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    striped: [{
      type: Input
    }],
    showValue: [{
      type: Input
    }],
    textType: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        required: true
      }]
    }],
    height: [{
      type: Input
    }]
  });
})();
var NgbProgressbarStacked = class _NgbProgressbarStacked {
  static {
    this.ɵfac = function NgbProgressbarStacked_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbProgressbarStacked)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbProgressbarStacked,
      selectors: [["ngb-progressbar-stacked"]],
      hostAttrs: [1, "progress-stacked"],
      ngContentSelectors: _c2,
      decls: 1,
      vars: 0,
      template: function NgbProgressbarStacked_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbProgressbarStacked, [{
    type: Component,
    args: [{
      selector: "ngb-progressbar-stacked",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "progress-stacked"
      },
      template: `<ng-content></ng-content>`
    }]
  }], null, null);
})();
var NgbProgressbarModule = class _NgbProgressbarModule {
  static {
    this.ɵfac = function NgbProgressbarModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbProgressbarModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbProgressbarModule,
      imports: [NgbProgressbar, NgbProgressbarStacked],
      exports: [NgbProgressbar, NgbProgressbarStacked]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbProgressbarModule, [{
    type: NgModule,
    args: [{
      imports: [NgbProgressbar, NgbProgressbarStacked],
      exports: [NgbProgressbar, NgbProgressbarStacked]
    }]
  }], null, null);
})();
var NgbRatingConfig = class _NgbRatingConfig {
  constructor() {
    this.max = 10;
    this.readonly = false;
    this.resettable = false;
    this.tabindex = 0;
  }
  static {
    this.ɵfac = function NgbRatingConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbRatingConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbRatingConfig,
      factory: _NgbRatingConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbRatingConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbRating = class _NgbRating {
  constructor() {
    this.contexts = [];
    this._config = inject(NgbRatingConfig);
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this.disabled = false;
    this.max = this._config.max;
    this.readonly = this._config.readonly;
    this.resettable = this._config.resettable;
    this.tabindex = this._config.tabindex;
    this.hover = new EventEmitter();
    this.leave = new EventEmitter();
    this.rateChange = new EventEmitter(true);
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
  }
  /**
   * Allows to provide a function to set a custom aria-valuetext
   *
   * @since 14.1.0
   */
  ariaValueText(current, max2) {
    return `${current} out of ${max2}`;
  }
  isInteractive() {
    return !this.readonly && !this.disabled;
  }
  enter(value) {
    if (this.isInteractive()) {
      this._updateState(value);
    }
    this.hover.emit(value);
  }
  handleBlur() {
    this.onTouched();
  }
  handleClick(value) {
    if (this.isInteractive()) {
      this.update(this.resettable && this.rate === value ? 0 : value);
    }
  }
  handleKeyDown(event) {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowLeft":
        this.update(this.rate - 1);
        break;
      case "ArrowUp":
      case "ArrowRight":
        this.update(this.rate + 1);
        break;
      case "Home":
        this.update(0);
        break;
      case "End":
        this.update(this.max);
        break;
      default:
        return;
    }
    event.preventDefault();
  }
  ngOnChanges(changes) {
    if (changes["rate"]) {
      this.update(this.rate);
    }
    if (changes["max"]) {
      this._updateMax();
    }
  }
  ngOnInit() {
    this._setupContexts();
    this._updateState(this.rate);
  }
  registerOnChange(fn2) {
    this.onChange = fn2;
  }
  registerOnTouched(fn2) {
    this.onTouched = fn2;
  }
  reset() {
    this.leave.emit(this.nextRate);
    this._updateState(this.rate);
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  update(value, internalChange = true) {
    const newRate = getValueInRange(value, this.max, 0);
    if (this.isInteractive() && this.rate !== newRate) {
      this.rate = newRate;
      this.rateChange.emit(this.rate);
    }
    if (internalChange) {
      this.onChange(this.rate);
      this.onTouched();
    }
    this._updateState(this.rate);
  }
  writeValue(value) {
    this.update(value, false);
    this._changeDetectorRef.markForCheck();
  }
  _updateState(nextValue) {
    this.nextRate = nextValue;
    this.contexts.forEach((context, index) => context.fill = Math.round(getValueInRange(nextValue - index, 1, 0) * 100));
  }
  _updateMax() {
    if (this.max > 0) {
      this._setupContexts();
      this.update(this.rate);
    }
  }
  _setupContexts() {
    this.contexts = Array.from({
      length: this.max
    }, (v, k) => ({
      fill: 0,
      index: k
    }));
  }
  static {
    this.ɵfac = function NgbRating_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbRating)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbRating,
      selectors: [["ngb-rating"]],
      contentQueries: function NgbRating_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, TemplateRef, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.starTemplateFromContent = _t.first);
        }
      },
      hostAttrs: ["role", "slider", "aria-valuemin", "0", 1, "d-inline-flex"],
      hostVars: 6,
      hostBindings: function NgbRating_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("blur", function NgbRating_blur_HostBindingHandler() {
            return ctx.handleBlur();
          })("keydown", function NgbRating_keydown_HostBindingHandler($event) {
            return ctx.handleKeyDown($event);
          })("mouseleave", function NgbRating_mouseleave_HostBindingHandler() {
            return ctx.reset();
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("tabIndex", ctx.disabled ? -1 : ctx.tabindex);
          ɵɵattribute("aria-valuemax", ctx.max)("aria-valuenow", ctx.nextRate)("aria-valuetext", ctx.ariaValueText(ctx.nextRate, ctx.max))("aria-readonly", ctx.readonly && !ctx.disabled ? true : null)("aria-disabled", ctx.disabled ? true : null);
        }
      },
      inputs: {
        disabled: "disabled",
        max: "max",
        rate: "rate",
        readonly: "readonly",
        resettable: "resettable",
        starTemplate: "starTemplate",
        tabindex: "tabindex",
        ariaValueText: "ariaValueText"
      },
      outputs: {
        hover: "hover",
        leave: "leave",
        rateChange: "rateChange"
      },
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgbRating),
        multi: true
      }]), ɵɵNgOnChangesFeature],
      decls: 4,
      vars: 0,
      consts: [["t", ""], [1, "visually-hidden"], [3, "mouseenter", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NgbRating_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NgbRating_ng_template_0_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵrepeaterCreate(2, NgbRating_For_3_Template, 4, 5, null, null, ɵɵrepeaterTrackByIdentity);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵrepeater(ctx.contexts);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbRating, [{
    type: Component,
    args: [{
      selector: "ngb-rating",
      imports: [NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "d-inline-flex",
        "[tabindex]": "disabled ? -1 : tabindex",
        role: "slider",
        "aria-valuemin": "0",
        "[attr.aria-valuemax]": "max",
        "[attr.aria-valuenow]": "nextRate",
        "[attr.aria-valuetext]": "ariaValueText(nextRate, max)",
        "[attr.aria-readonly]": "readonly && !disabled ? true : null",
        "[attr.aria-disabled]": "disabled ? true : null",
        "(blur)": "handleBlur()",
        "(keydown)": "handleKeyDown($event)",
        "(mouseleave)": "reset()"
      },
      template: `
		<ng-template #t let-fill="fill">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>
		@for (_ of contexts; track _; let index = $index) {
			<span class="visually-hidden">({{ index < nextRate ? '*' : ' ' }})</span>
			<span
				(mouseenter)="enter(index + 1)"
				(click)="handleClick(index + 1)"
				[style.cursor]="isInteractive() ? 'pointer' : 'default'"
			>
				<ng-template
					[ngTemplateOutlet]="starTemplate || starTemplateFromContent || t"
					[ngTemplateOutletContext]="contexts[index]"
				/>
			</span>
		}
	`,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgbRating),
        multi: true
      }]
    }]
  }], null, {
    disabled: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    rate: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    resettable: [{
      type: Input
    }],
    starTemplate: [{
      type: Input
    }],
    starTemplateFromContent: [{
      type: ContentChild,
      args: [TemplateRef, {
        static: false
      }]
    }],
    tabindex: [{
      type: Input
    }],
    ariaValueText: [{
      type: Input
    }],
    hover: [{
      type: Output
    }],
    leave: [{
      type: Output
    }],
    rateChange: [{
      type: Output
    }]
  });
})();
var NgbRatingModule = class _NgbRatingModule {
  static {
    this.ɵfac = function NgbRatingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbRatingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbRatingModule,
      imports: [NgbRating],
      exports: [NgbRating]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbRatingModule, [{
    type: NgModule,
    args: [{
      imports: [NgbRating],
      exports: [NgbRating]
    }]
  }], null, null);
})();
function toFragmentElement(container, id) {
  if (!container || id == null) {
    return null;
  }
  return isString(id) ? container.querySelector(`#${CSS.escape(id)}`) : id;
}
function getOrderedFragments(container, fragments) {
  const selector = [...fragments].map(({
    id
  }) => `#${CSS.escape(id)}`).join(",");
  return Array.from(container.querySelectorAll(selector));
}
var defaultProcessChanges = (state, changeActive, ctx) => {
  const {
    rootElement,
    fragments,
    scrollSpy,
    options,
    entries
  } = state;
  const orderedFragments = getOrderedFragments(rootElement, fragments);
  if (!ctx.initialized) {
    ctx.initialized = true;
    ctx.gapFragment = null;
    ctx.visibleFragments = /* @__PURE__ */ new Set();
    const preSelectedFragment = toFragmentElement(rootElement, options?.initialFragment);
    if (preSelectedFragment) {
      scrollSpy.scrollTo(preSelectedFragment);
      return;
    }
  }
  for (const entry of entries) {
    const {
      isIntersecting,
      target: fragment
    } = entry;
    if (isIntersecting) {
      if (ctx.gapFragment) {
        ctx.visibleFragments.delete(ctx.gapFragment);
        ctx.gapFragment = null;
      }
      ctx.visibleFragments.add(fragment);
    } else {
      ctx.visibleFragments.delete(fragment);
      if (ctx.visibleFragments.size === 0 && scrollSpy.active !== "") {
        if (entry.boundingClientRect.top < entry.rootBounds.top) {
          ctx.gapFragment = fragment;
          ctx.visibleFragments.add(ctx.gapFragment);
        } else {
          if (fragment === orderedFragments[0]) {
            ctx.gapFragment = null;
            ctx.visibleFragments.clear();
            changeActive("");
            return;
          } else {
            const fragmentIndex = orderedFragments.indexOf(fragment);
            ctx.gapFragment = orderedFragments[fragmentIndex - 1] || null;
            if (ctx.gapFragment) {
              ctx.visibleFragments.add(ctx.gapFragment);
            }
          }
        }
      }
    }
  }
  for (const fragment of orderedFragments) {
    if (ctx.visibleFragments.has(fragment)) {
      changeActive(fragment.id);
      break;
    }
  }
};
var NgbScrollSpyConfig = class _NgbScrollSpyConfig {
  constructor() {
    this.scrollBehavior = "smooth";
    this.processChanges = defaultProcessChanges;
  }
  static {
    this.ɵfac = function NgbScrollSpyConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbScrollSpyConfig,
      factory: _NgbScrollSpyConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MATCH_THRESHOLD = 3;
var NgbScrollSpyService = class _NgbScrollSpyService {
  constructor() {
    this._observer = null;
    this._containerElement = null;
    this._fragments = /* @__PURE__ */ new Set();
    this._preRegisteredFragments = /* @__PURE__ */ new Set();
    this._active$ = new Subject();
    this._distinctActive$ = this._active$.pipe(distinctUntilChanged());
    this._active = "";
    this._config = inject(NgbScrollSpyConfig);
    this._document = inject(DOCUMENT);
    this._platformId = inject(PLATFORM_ID);
    this._scrollBehavior = this._config.scrollBehavior;
    this._diChangeDetectorRef = inject(ChangeDetectorRef, {
      optional: true
    });
    this._changeDetectorRef = this._diChangeDetectorRef;
    this._zone = inject(NgZone);
    this._distinctActive$.pipe(takeUntilDestroyed()).subscribe((active) => {
      this._active = active;
      this._changeDetectorRef?.markForCheck();
    });
  }
  /**
   * Getter for the currently active fragment id. Returns empty string if none.
   */
  get active() {
    return this._active;
  }
  /**
   * An observable emitting the currently active fragment. Emits empty string if none.
   */
  get active$() {
    return this._distinctActive$;
  }
  /**
   * Starts the scrollspy service and observes specified fragments.
   *
   * You can specify a list of options to pass, like the root element, initial fragment, scroll behavior, etc.
   * See the [`NgbScrollSpyOptions`](#/components/scrollspy/api#NgbScrollSpyOptions) interface for more details.
   */
  start(options) {
    if (isPlatformBrowser(this._platformId)) {
      this._cleanup();
      const {
        root,
        rootMargin,
        scrollBehavior,
        threshold,
        fragments,
        changeDetectorRef,
        processChanges
      } = __spreadValues({}, options);
      this._containerElement = root ?? this._document.documentElement;
      this._changeDetectorRef = changeDetectorRef ?? this._diChangeDetectorRef;
      this._scrollBehavior = scrollBehavior ?? this._config.scrollBehavior;
      const processChangesFn = processChanges ?? this._config.processChanges;
      const context = {};
      this._observer = new IntersectionObserver((entries) => processChangesFn({
        entries,
        rootElement: this._containerElement,
        fragments: this._fragments,
        scrollSpy: this,
        options: __spreadValues({}, options)
      }, (active) => this._active$.next(active), context), __spreadValues(__spreadValues({
        root: root ?? this._document
      }, rootMargin && {
        rootMargin
      }), threshold && {
        threshold
      }));
      for (const element of [...this._preRegisteredFragments, ...fragments ?? []]) {
        this.observe(element);
      }
      this._preRegisteredFragments.clear();
    }
  }
  /**
   * Stops the service and unobserves all fragments.
   */
  stop() {
    this._cleanup();
    this._active$.next("");
  }
  /**
   * Scrolls to a fragment, it must be known to the service and contained in the root element.
   * An id or an element reference can be passed.
   *
   * [`NgbScrollToOptions`](#/components/scrollspy/api#NgbScrollToOptions) can be passed.
   */
  scrollTo(fragment, options) {
    const {
      behavior
    } = __spreadValues({
      behavior: this._scrollBehavior
    }, options);
    if (this._containerElement) {
      const fragmentElement = toFragmentElement(this._containerElement, fragment);
      if (fragmentElement) {
        const heightPx = fragmentElement.offsetTop - this._containerElement.offsetTop;
        this._containerElement.scrollTo({
          top: heightPx,
          behavior
        });
        let lastOffset = this._containerElement.scrollTop;
        let matchCounter = 0;
        const containerElement = this._containerElement;
        this._zone.runOutsideAngular(() => {
          const updateActiveWhenScrollingIsFinished = () => {
            const sameOffsetAsLastTime = lastOffset === containerElement.scrollTop;
            if (sameOffsetAsLastTime) {
              matchCounter++;
            } else {
              matchCounter = 0;
            }
            if (!sameOffsetAsLastTime || sameOffsetAsLastTime && matchCounter < MATCH_THRESHOLD) {
              lastOffset = containerElement.scrollTop;
              requestAnimationFrame(updateActiveWhenScrollingIsFinished);
            } else {
              this._zone.run(() => this._active$.next(fragmentElement.id));
            }
          };
          requestAnimationFrame(updateActiveWhenScrollingIsFinished);
        });
      }
    }
  }
  /**
   * Adds a fragment to observe. It must be contained in the root element.
   * An id or an element reference can be passed.
   */
  observe(fragment) {
    if (!this._observer) {
      this._preRegisteredFragments.add(fragment);
      return;
    }
    const fragmentElement = toFragmentElement(this._containerElement, fragment);
    if (fragmentElement && !this._fragments.has(fragmentElement)) {
      this._fragments.add(fragmentElement);
      this._observer.observe(fragmentElement);
    }
  }
  /**
   * Unobserves a fragment.
   * An id or an element reference can be passed.
   */
  unobserve(fragment) {
    if (!this._observer) {
      this._preRegisteredFragments.delete(fragment);
      return;
    }
    const fragmentElement = toFragmentElement(this._containerElement, fragment);
    if (fragmentElement) {
      this._fragments.delete(fragmentElement);
      this._observer.disconnect();
      for (const fragment2 of this._fragments) {
        this._observer.observe(fragment2);
      }
    }
  }
  ngOnDestroy() {
    this._cleanup();
  }
  _cleanup() {
    this._fragments.clear();
    this._observer?.disconnect();
    this._changeDetectorRef = this._diChangeDetectorRef;
    this._scrollBehavior = this._config.scrollBehavior;
    this._observer = null;
    this._containerElement = null;
  }
  static {
    this.ɵfac = function NgbScrollSpyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbScrollSpyService,
      factory: _NgbScrollSpyService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var NgbScrollSpyItem = class _NgbScrollSpyItem {
  constructor() {
    this._changeDetector = inject(ChangeDetectorRef);
    this._scrollSpyMenu = inject(NgbScrollSpyMenu, {
      optional: true
    });
    this._scrollSpyAPI = this._scrollSpyMenu ?? inject(NgbScrollSpyService);
    this._destroyRef = inject(DestroyRef);
    this._isActive = false;
  }
  /**
   * References the scroll spy directive, the id of the associated fragment and the parent menu item.
   *
   * Can be used like:
   *  - `ngbScrollSpyItem="fragmentId"`
   *  - `[ngbScrollSpyItem]="scrollSpy" fragment="fragmentId"
   *  - `[ngbScrollSpyItem]="[scrollSpy, 'fragmentId']"` parent="parentId"`
   *  - `[ngbScrollSpyItem]="[scrollSpy, 'fragmentId', 'parentId']"`
   *
   *  As well as together with `[fragment]` and `[parent]` inputs.
   */
  set data(data) {
    if (Array.isArray(data)) {
      this._scrollSpyAPI = data[0];
      this.fragment = data[1];
      this.parent ??= data[2];
    } else if (data instanceof NgbScrollSpy) {
      this._scrollSpyAPI = data;
    } else if (isString(data)) {
      this.fragment = data;
    }
  }
  ngOnInit() {
    if (!this._scrollSpyMenu) {
      this._scrollSpyAPI.active$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((active) => {
        if (active === this.fragment) {
          this._activate();
        } else {
          this._deactivate();
        }
        this._changeDetector.markForCheck();
      });
    }
  }
  /**
   * @internal
   */
  _activate() {
    this._isActive = true;
    if (this._scrollSpyMenu) {
      this._scrollSpyMenu.getItem(this.parent ?? "")?._activate();
    }
  }
  /**
   * @internal
   */
  _deactivate() {
    this._isActive = false;
    if (this._scrollSpyMenu) {
      this._scrollSpyMenu.getItem(this.parent ?? "")?._deactivate();
    }
  }
  /**
   * Returns `true`, if the associated fragment is active.
   */
  isActive() {
    return this._isActive;
  }
  /**
   * Scrolls to the associated fragment.
   */
  scrollTo(options) {
    this._scrollSpyAPI.scrollTo(this.fragment, options);
  }
  static {
    this.ɵfac = function NgbScrollSpyItem_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyItem)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbScrollSpyItem,
      selectors: [["", "ngbScrollSpyItem", ""]],
      hostVars: 2,
      hostBindings: function NgbScrollSpyItem_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function NgbScrollSpyItem_click_HostBindingHandler() {
            return ctx.scrollTo();
          });
        }
        if (rf & 2) {
          ɵɵclassProp("active", ctx.isActive());
        }
      },
      inputs: {
        data: [0, "ngbScrollSpyItem", "data"],
        fragment: "fragment",
        parent: "parent"
      },
      exportAs: ["ngbScrollSpyItem"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyItem, [{
    type: Directive,
    args: [{
      selector: "[ngbScrollSpyItem]",
      exportAs: "ngbScrollSpyItem",
      host: {
        "[class.active]": "isActive()",
        "(click)": "scrollTo();"
      }
    }]
  }], null, {
    data: [{
      type: Input,
      args: ["ngbScrollSpyItem"]
    }],
    fragment: [{
      type: Input
    }],
    parent: [{
      type: Input
    }]
  });
})();
var NgbScrollSpyMenu = class _NgbScrollSpyMenu {
  constructor() {
    this._scrollSpyRef = inject(NgbScrollSpyService);
    this._destroyRef = inject(DestroyRef);
    this._map = /* @__PURE__ */ new Map();
    this._lastActiveItem = null;
  }
  set scrollSpy(scrollSpy) {
    this._scrollSpyRef = scrollSpy;
  }
  get active() {
    return this._scrollSpyRef.active;
  }
  get active$() {
    return this._scrollSpyRef.active$;
  }
  scrollTo(fragment, options) {
    this._scrollSpyRef.scrollTo(fragment, options);
  }
  getItem(id) {
    return this._map.get(id);
  }
  ngAfterViewInit() {
    this._items.changes.pipe(takeUntilDestroyed(this._destroyRef)).subscribe(() => this._rebuildMap());
    this._rebuildMap();
    this._scrollSpyRef.active$.pipe(takeUntilDestroyed(this._destroyRef)).subscribe((activeId) => {
      this._lastActiveItem?._deactivate();
      const item = this._map.get(activeId);
      if (item) {
        item._activate();
        this._lastActiveItem = item;
      }
    });
  }
  _rebuildMap() {
    this._map.clear();
    for (let item of this._items) {
      this._map.set(item.fragment, item);
    }
  }
  static {
    this.ɵfac = function NgbScrollSpyMenu_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyMenu)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbScrollSpyMenu,
      selectors: [["", "ngbScrollSpyMenu", ""]],
      contentQueries: function NgbScrollSpyMenu_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbScrollSpyItem, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._items = _t);
        }
      },
      inputs: {
        scrollSpy: [0, "ngbScrollSpyMenu", "scrollSpy"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyMenu, [{
    type: Directive,
    args: [{
      selector: "[ngbScrollSpyMenu]"
    }]
  }], null, {
    _items: [{
      type: ContentChildren,
      args: [NgbScrollSpyItem, {
        descendants: true
      }]
    }],
    scrollSpy: [{
      type: Input,
      args: ["ngbScrollSpyMenu"]
    }]
  });
})();
var NgbScrollSpy = class _NgbScrollSpy {
  constructor() {
    this._initialFragment = null;
    this._service = inject(NgbScrollSpyService);
    this._nativeElement = inject(ElementRef).nativeElement;
    this.activeChange = this._service.active$;
  }
  set active(fragment) {
    this._initialFragment = fragment;
    this.scrollTo(fragment);
  }
  /**
   * Getter/setter for the currently active fragment id.
   */
  get active() {
    return this._service.active;
  }
  /**
   * Returns an observable that emits currently active section id.
   */
  get active$() {
    return this._service.active$;
  }
  ngAfterViewInit() {
    this._service.start(__spreadValues({
      processChanges: this.processChanges,
      root: this._nativeElement,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    }, this._initialFragment && {
      initialFragment: this._initialFragment
    }));
  }
  /**
   * @internal
   */
  _registerFragment(fragment) {
    this._service.observe(fragment.id);
  }
  /**
   * @internal
   */
  _unregisterFragment(fragment) {
    this._service.unobserve(fragment.id);
  }
  /**
   * Scrolls to a fragment that is identified by the `ngbScrollSpyFragment` directive.
   * An id or an element reference can be passed.
   */
  scrollTo(fragment, options) {
    this._service.scrollTo(fragment, __spreadValues(__spreadValues({}, this.scrollBehavior && {
      behavior: this.scrollBehavior
    }), options));
  }
  static {
    this.ɵfac = function NgbScrollSpy_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpy)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbScrollSpy,
      selectors: [["", "ngbScrollSpy", ""]],
      hostAttrs: ["tabindex", "0", 2, "overflow-y", "auto"],
      inputs: {
        processChanges: "processChanges",
        rootMargin: "rootMargin",
        scrollBehavior: "scrollBehavior",
        threshold: "threshold",
        active: "active"
      },
      outputs: {
        activeChange: "activeChange"
      },
      exportAs: ["ngbScrollSpy"],
      features: [ɵɵProvidersFeature([NgbScrollSpyService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpy, [{
    type: Directive,
    args: [{
      selector: "[ngbScrollSpy]",
      exportAs: "ngbScrollSpy",
      host: {
        tabindex: "0",
        style: "overflow-y: auto"
      },
      providers: [NgbScrollSpyService]
    }]
  }], null, {
    processChanges: [{
      type: Input
    }],
    rootMargin: [{
      type: Input
    }],
    scrollBehavior: [{
      type: Input
    }],
    threshold: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    activeChange: [{
      type: Output
    }]
  });
})();
var NgbScrollSpyFragment = class _NgbScrollSpyFragment {
  constructor() {
    this._destroyRef = inject(DestroyRef);
    this._scrollSpy = inject(NgbScrollSpy);
  }
  ngAfterViewInit() {
    this._scrollSpy._registerFragment(this);
    this._destroyRef.onDestroy(() => this._scrollSpy._unregisterFragment(this));
  }
  static {
    this.ɵfac = function NgbScrollSpyFragment_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyFragment)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbScrollSpyFragment,
      selectors: [["", "ngbScrollSpyFragment", ""]],
      hostVars: 1,
      hostBindings: function NgbScrollSpyFragment_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.id);
        }
      },
      inputs: {
        id: [0, "ngbScrollSpyFragment", "id"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyFragment, [{
    type: Directive,
    args: [{
      selector: "[ngbScrollSpyFragment]",
      host: {
        "[id]": "id"
      }
    }]
  }], null, {
    id: [{
      type: Input,
      args: ["ngbScrollSpyFragment"]
    }]
  });
})();
var NgbScrollSpyModule = class _NgbScrollSpyModule {
  static {
    this.ɵfac = function NgbScrollSpyModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbScrollSpyModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbScrollSpyModule,
      imports: [NgbScrollSpy, NgbScrollSpyItem, NgbScrollSpyFragment, NgbScrollSpyMenu],
      exports: [NgbScrollSpy, NgbScrollSpyItem, NgbScrollSpyFragment, NgbScrollSpyMenu]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbScrollSpyModule, [{
    type: NgModule,
    args: [{
      imports: [NgbScrollSpy, NgbScrollSpyItem, NgbScrollSpyFragment, NgbScrollSpyMenu],
      exports: [NgbScrollSpy, NgbScrollSpyItem, NgbScrollSpyFragment, NgbScrollSpyMenu]
    }]
  }], null, null);
})();
var NgbTime = class {
  constructor(hour, minute, second) {
    this.hour = toInteger(hour);
    this.minute = toInteger(minute);
    this.second = toInteger(second);
  }
  changeHour(step = 1) {
    this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
  }
  updateHour(hour) {
    if (isNumber(hour)) {
      this.hour = (hour < 0 ? 24 + hour : hour) % 24;
    } else {
      this.hour = NaN;
    }
  }
  changeMinute(step = 1) {
    this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
  }
  updateMinute(minute) {
    if (isNumber(minute)) {
      this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
      this.changeHour(Math.floor(minute / 60));
    } else {
      this.minute = NaN;
    }
  }
  changeSecond(step = 1) {
    this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
  }
  updateSecond(second) {
    if (isNumber(second)) {
      this.second = second < 0 ? 60 + second % 60 : second % 60;
      this.changeMinute(Math.floor(second / 60));
    } else {
      this.second = NaN;
    }
  }
  isValid(checkSecs = true) {
    return isNumber(this.hour) && isNumber(this.minute) && (checkSecs ? isNumber(this.second) : true);
  }
  toString() {
    return `${this.hour || 0}:${this.minute || 0}:${this.second || 0}`;
  }
};
var NgbTimepickerConfig = class _NgbTimepickerConfig {
  constructor() {
    this.meridian = false;
    this.spinners = true;
    this.seconds = false;
    this.hourStep = 1;
    this.minuteStep = 1;
    this.secondStep = 1;
    this.disabled = false;
    this.readonlyInputs = false;
    this.size = "medium";
  }
  static {
    this.ɵfac = function NgbTimepickerConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTimepickerConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbTimepickerConfig,
      factory: _NgbTimepickerConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimepickerConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function NGB_DATEPICKER_TIME_ADAPTER_FACTORY() {
  return new NgbTimeStructAdapter();
}
var NgbTimeAdapter = class _NgbTimeAdapter {
  static {
    this.ɵfac = function NgbTimeAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTimeAdapter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbTimeAdapter,
      factory: () => NGB_DATEPICKER_TIME_ADAPTER_FACTORY(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimeAdapter, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY
    }]
  }], null, null);
})();
var NgbTimeStructAdapter = class _NgbTimeStructAdapter extends NgbTimeAdapter {
  /**
   * Converts a NgbTimeStruct value into NgbTimeStruct value
   */
  fromModel(time) {
    return time && isInteger(time.hour) && isInteger(time.minute) ? {
      hour: time.hour,
      minute: time.minute,
      second: isInteger(time.second) ? time.second : null
    } : null;
  }
  /**
   * Converts a NgbTimeStruct value into NgbTimeStruct value
   */
  toModel(time) {
    return time && isInteger(time.hour) && isInteger(time.minute) ? {
      hour: time.hour,
      minute: time.minute,
      second: isInteger(time.second) ? time.second : null
    } : null;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbTimeStructAdapter_BaseFactory;
      return function NgbTimeStructAdapter_Factory(__ngFactoryType__) {
        return (ɵNgbTimeStructAdapter_BaseFactory || (ɵNgbTimeStructAdapter_BaseFactory = ɵɵgetInheritedFactory(_NgbTimeStructAdapter)))(__ngFactoryType__ || _NgbTimeStructAdapter);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbTimeStructAdapter,
      factory: _NgbTimeStructAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimeStructAdapter, [{
    type: Injectable
  }], null, null);
})();
var NgbTimepickerI18n = class _NgbTimepickerI18n {
  static {
    this.ɵfac = function NgbTimepickerI18n_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTimepickerI18n)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbTimepickerI18n,
      factory: () => (() => new NgbTimepickerI18nDefault())(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimepickerI18n, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => new NgbTimepickerI18nDefault()
    }]
  }], null, null);
})();
var NgbTimepickerI18nDefault = class _NgbTimepickerI18nDefault extends NgbTimepickerI18n {
  constructor() {
    super(...arguments);
    this._locale = inject(LOCALE_ID);
    this._periods = [formatDate(/* @__PURE__ */ new Date(36e5), "a", this._locale, "UTC"), formatDate(new Date(36e5 * 13), "a", this._locale, "UTC")];
  }
  getMorningPeriod() {
    return this._periods[0];
  }
  getAfternoonPeriod() {
    return this._periods[1];
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNgbTimepickerI18nDefault_BaseFactory;
      return function NgbTimepickerI18nDefault_Factory(__ngFactoryType__) {
        return (ɵNgbTimepickerI18nDefault_BaseFactory || (ɵNgbTimepickerI18nDefault_BaseFactory = ɵɵgetInheritedFactory(_NgbTimepickerI18nDefault)))(__ngFactoryType__ || _NgbTimepickerI18nDefault);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbTimepickerI18nDefault,
      factory: _NgbTimepickerI18nDefault.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimepickerI18nDefault, [{
    type: Injectable
  }], null, null);
})();
var FILTER_REGEX = /[^0-9]/g;
var NgbTimepicker = class _NgbTimepicker {
  /**
   * The number of hours to add/subtract when clicking hour spinners.
   */
  set hourStep(step) {
    this._hourStep = isInteger(step) ? step : this._config.hourStep;
  }
  get hourStep() {
    return this._hourStep;
  }
  /**
   * The number of minutes to add/subtract when clicking minute spinners.
   */
  set minuteStep(step) {
    this._minuteStep = isInteger(step) ? step : this._config.minuteStep;
  }
  get minuteStep() {
    return this._minuteStep;
  }
  /**
   * The number of seconds to add/subtract when clicking second spinners.
   */
  set secondStep(step) {
    this._secondStep = isInteger(step) ? step : this._config.secondStep;
  }
  get secondStep() {
    return this._secondStep;
  }
  constructor(_config, _ngbTimeAdapter, _cd, i18n) {
    this._config = _config;
    this._ngbTimeAdapter = _ngbTimeAdapter;
    this._cd = _cd;
    this.i18n = i18n;
    this.onChange = (_) => {
    };
    this.onTouched = () => {
    };
    this.meridian = _config.meridian;
    this.spinners = _config.spinners;
    this.seconds = _config.seconds;
    this.hourStep = _config.hourStep;
    this.minuteStep = _config.minuteStep;
    this.secondStep = _config.secondStep;
    this.disabled = _config.disabled;
    this.readonlyInputs = _config.readonlyInputs;
    this.size = _config.size;
  }
  writeValue(value) {
    const structValue = this._ngbTimeAdapter.fromModel(value);
    this.model = structValue ? new NgbTime(structValue.hour, structValue.minute, structValue.second) : new NgbTime();
    if (!this.seconds && (!structValue || !isNumber(structValue.second))) {
      this.model.second = 0;
    }
    this._cd.markForCheck();
  }
  registerOnChange(fn2) {
    this.onChange = fn2;
  }
  registerOnTouched(fn2) {
    this.onTouched = fn2;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /**
   * Increments the hours by the given step.
   */
  changeHour(step) {
    this.model?.changeHour(step);
    this.propagateModelChange();
  }
  /**
   * Increments the minutes by the given step.
   */
  changeMinute(step) {
    this.model?.changeMinute(step);
    this.propagateModelChange();
  }
  /**
   * Increments the seconds by the given step.
   */
  changeSecond(step) {
    this.model?.changeSecond(step);
    this.propagateModelChange();
  }
  /**
   * Update hours with the new value.
   */
  updateHour(newVal) {
    const isPM = this.model ? this.model.hour >= 12 : false;
    const enteredHour = toInteger(newVal);
    if (this.meridian && (isPM && enteredHour < 12 || !isPM && enteredHour === 12)) {
      this.model?.updateHour(enteredHour + 12);
    } else {
      this.model?.updateHour(enteredHour);
    }
    this.propagateModelChange();
  }
  /**
   * Update minutes with the new value.
   */
  updateMinute(newVal) {
    this.model?.updateMinute(toInteger(newVal));
    this.propagateModelChange();
  }
  /**
   * Update seconds with the new value.
   */
  updateSecond(newVal) {
    this.model?.updateSecond(toInteger(newVal));
    this.propagateModelChange();
  }
  toggleMeridian() {
    if (this.model && isNumber(this.model.hour) && this.meridian) {
      this.changeHour(12);
    }
  }
  formatInput(input) {
    input.value = input.value.replace(FILTER_REGEX, "");
  }
  formatHour(value) {
    if (isNumber(value)) {
      if (this.meridian) {
        return padNumber(value % 12 === 0 ? 12 : value % 12);
      } else {
        return padNumber(value % 24);
      }
    } else {
      return padNumber(NaN);
    }
  }
  formatMinSec(value) {
    return padNumber(isNumber(value) ? value : NaN);
  }
  handleBlur() {
    this.onTouched();
  }
  get isSmallSize() {
    return this.size === "small";
  }
  get isLargeSize() {
    return this.size === "large";
  }
  ngOnChanges(changes) {
    if (changes["seconds"] && !this.seconds && this.model && !isNumber(this.model.second)) {
      this.model.second = 0;
      this.propagateModelChange(false);
    }
  }
  propagateModelChange(touched = true) {
    if (touched) {
      this.onTouched();
    }
    if (this.model?.isValid(this.seconds)) {
      this.onChange(this._ngbTimeAdapter.toModel({
        hour: this.model.hour,
        minute: this.model.minute,
        second: this.model.second
      }));
    } else {
      this.onChange(this._ngbTimeAdapter.toModel(null));
    }
  }
  static {
    this.ɵfac = function NgbTimepicker_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTimepicker)(ɵɵdirectiveInject(NgbTimepickerConfig), ɵɵdirectiveInject(NgbTimeAdapter), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgbTimepickerI18n));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbTimepicker,
      selectors: [["ngb-timepicker"]],
      inputs: {
        meridian: "meridian",
        spinners: "spinners",
        seconds: "seconds",
        hourStep: "hourStep",
        minuteStep: "minuteStep",
        secondStep: "secondStep",
        readonlyInputs: "readonlyInputs",
        size: "size"
      },
      exportAs: ["ngbTimepicker"],
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgbTimepicker),
        multi: true
      }]), ɵɵNgOnChangesFeature],
      decls: 14,
      vars: 23,
      consts: () => {
        let i18n_21;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_21 = goog.getMsg("HH");
          i18n_21 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_21;
        } else {
          i18n_21 = $localize`:@@ngb.timepicker.HH:HH`;
        }
        let i18n_22;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_22 = goog.getMsg("Hours");
          i18n_22 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_22;
        } else {
          i18n_22 = $localize`:@@ngb.timepicker.hours:Hours`;
        }
        let i18n_23;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_23 = goog.getMsg("MM");
          i18n_23 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_23;
        } else {
          i18n_23 = $localize`:@@ngb.timepicker.MM:MM`;
        }
        let i18n_24;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_24 = goog.getMsg("Minutes");
          i18n_24 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_24;
        } else {
          i18n_24 = $localize`:@@ngb.timepicker.minutes:Minutes`;
        }
        let i18n_25;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_25 = goog.getMsg("Increment hours");
          i18n_25 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_25;
        } else {
          i18n_25 = $localize`:@@ngb.timepicker.increment-hours:Increment hours`;
        }
        let i18n_26;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_26 = goog.getMsg("Decrement hours");
          i18n_26 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_26;
        } else {
          i18n_26 = $localize`:@@ngb.timepicker.decrement-hours:Decrement hours`;
        }
        let i18n_27;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_27 = goog.getMsg("Increment minutes");
          i18n_27 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_27;
        } else {
          i18n_27 = $localize`:@@ngb.timepicker.increment-minutes:Increment minutes`;
        }
        let i18n_28;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_28 = goog.getMsg("Decrement minutes");
          i18n_28 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_28;
        } else {
          i18n_28 = $localize`:@@ngb.timepicker.decrement-minutes:Decrement minutes`;
        }
        let i18n_29;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_29 = goog.getMsg("SS");
          i18n_29 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_29;
        } else {
          i18n_29 = $localize`:@@ngb.timepicker.SS:SS`;
        }
        let i18n_30;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_30 = goog.getMsg("Seconds");
          i18n_30 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_30;
        } else {
          i18n_30 = $localize`:@@ngb.timepicker.seconds:Seconds`;
        }
        let i18n_31;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_31 = goog.getMsg("Increment seconds");
          i18n_31 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_31;
        } else {
          i18n_31 = $localize`:@@ngb.timepicker.increment-seconds:Increment seconds`;
        }
        let i18n_32;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_32 = goog.getMsg("Decrement seconds");
          i18n_32 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_32;
        } else {
          i18n_32 = $localize`:@@ngb.timepicker.decrement-seconds:Decrement seconds`;
        }
        let i18n_33;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_33 = goog.getMsg("{$interpolation}", {
            "interpolation": "�0�"
          }, {
            original_code: {
              "interpolation": "{{ i18n.getAfternoonPeriod() }}"
            }
          });
          i18n_33 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_33;
        } else {
          i18n_33 = $localize`:@@ngb.timepicker.PM:${"�0�"}:INTERPOLATION:`;
        }
        return [i18n_25, i18n_26, i18n_27, i18n_28, i18n_31, i18n_32, i18n_33, [3, "disabled"], [1, "ngb-tp"], [1, "ngb-tp-input-container", "ngb-tp-hour"], ["tabindex", "-1", "type", "button", 1, "btn", "btn-link", 3, "btn-sm", "btn-lg", "disabled"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_21, "aria-label", i18n_22, 1, "ngb-tp-input", "form-control", 3, "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown", "value", "readOnly", "disabled"], [1, "ngb-tp-spacer"], [1, "ngb-tp-input-container", "ngb-tp-minute"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_23, "aria-label", i18n_24, 1, "ngb-tp-input", "form-control", 3, "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown", "value", "readOnly", "disabled"], ["tabindex", "-1", "type", "button", 1, "btn", "btn-link", 3, "click", "disabled"], [1, "chevron", "ngb-tp-chevron"], [1, "visually-hidden"], [1, "chevron", "ngb-tp-chevron", "bottom"], [1, "ngb-tp-input-container", "ngb-tp-second"], ["type", "text", "maxlength", "2", "inputmode", "numeric", "placeholder", i18n_29, "aria-label", i18n_30, 1, "ngb-tp-input", "form-control", 3, "change", "blur", "input", "keydown.ArrowUp", "keydown.ArrowDown", "value", "readOnly", "disabled"], [1, "ngb-tp-meridian"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"]];
      },
      template: function NgbTimepicker_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵdomElementStart(0, "fieldset", 7)(1, "div", 8)(2, "div", 9);
          ɵɵconditionalCreate(3, NgbTimepicker_Conditional_3_Template, 4, 7, "button", 10);
          ɵɵdomElementStart(4, "input", 11);
          ɵɵdomListener("change", function NgbTimepicker_Template_input_change_4_listener($event) {
            return ctx.updateHour($event.target.value);
          })("blur", function NgbTimepicker_Template_input_blur_4_listener() {
            return ctx.handleBlur();
          })("input", function NgbTimepicker_Template_input_input_4_listener($event) {
            return ctx.formatInput($event.target);
          })("keydown.ArrowUp", function NgbTimepicker_Template_input_keydown_ArrowUp_4_listener($event) {
            ctx.changeHour(ctx.hourStep);
            return $event.preventDefault();
          })("keydown.ArrowDown", function NgbTimepicker_Template_input_keydown_ArrowDown_4_listener($event) {
            ctx.changeHour(-ctx.hourStep);
            return $event.preventDefault();
          });
          ɵɵdomElementEnd();
          ɵɵconditionalCreate(5, NgbTimepicker_Conditional_5_Template, 4, 7, "button", 10);
          ɵɵdomElementEnd();
          ɵɵdomElementStart(6, "div", 12);
          ɵɵtext(7, ":");
          ɵɵdomElementEnd();
          ɵɵdomElementStart(8, "div", 13);
          ɵɵconditionalCreate(9, NgbTimepicker_Conditional_9_Template, 4, 7, "button", 10);
          ɵɵdomElementStart(10, "input", 14);
          ɵɵdomListener("change", function NgbTimepicker_Template_input_change_10_listener($event) {
            return ctx.updateMinute($event.target.value);
          })("blur", function NgbTimepicker_Template_input_blur_10_listener() {
            return ctx.handleBlur();
          })("input", function NgbTimepicker_Template_input_input_10_listener($event) {
            return ctx.formatInput($event.target);
          })("keydown.ArrowUp", function NgbTimepicker_Template_input_keydown_ArrowUp_10_listener($event) {
            ctx.changeMinute(ctx.minuteStep);
            return $event.preventDefault();
          })("keydown.ArrowDown", function NgbTimepicker_Template_input_keydown_ArrowDown_10_listener($event) {
            ctx.changeMinute(-ctx.minuteStep);
            return $event.preventDefault();
          });
          ɵɵdomElementEnd();
          ɵɵconditionalCreate(11, NgbTimepicker_Conditional_11_Template, 4, 7, "button", 10);
          ɵɵdomElementEnd();
          ɵɵconditionalCreate(12, NgbTimepicker_Conditional_12_Template, 6, 9);
          ɵɵconditionalCreate(13, NgbTimepicker_Conditional_13_Template, 5, 8);
          ɵɵdomElementEnd()();
        }
        if (rf & 2) {
          ɵɵclassProp("disabled", ctx.disabled);
          ɵɵdomProperty("disabled", ctx.disabled);
          ɵɵadvance(3);
          ɵɵconditional(ctx.spinners ? 3 : -1);
          ɵɵadvance();
          ɵɵclassProp("form-control-sm", ctx.isSmallSize)("form-control-lg", ctx.isLargeSize);
          ɵɵdomProperty("value", ctx.formatHour(ctx.model == null ? null : ctx.model.hour))("readOnly", ctx.readonlyInputs)("disabled", ctx.disabled);
          ɵɵadvance();
          ɵɵconditional(ctx.spinners ? 5 : -1);
          ɵɵadvance(4);
          ɵɵconditional(ctx.spinners ? 9 : -1);
          ɵɵadvance();
          ɵɵclassProp("form-control-sm", ctx.isSmallSize)("form-control-lg", ctx.isLargeSize);
          ɵɵdomProperty("value", ctx.formatMinSec(ctx.model == null ? null : ctx.model.minute))("readOnly", ctx.readonlyInputs)("disabled", ctx.disabled);
          ɵɵadvance();
          ɵɵconditional(ctx.spinners ? 11 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.seconds ? 12 : -1);
          ɵɵadvance();
          ɵɵconditional(ctx.meridian ? 13 : -1);
        }
      },
      styles: ['ngb-timepicker{font-size:1rem}.ngb-tp{display:flex;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron:before{border-style:solid;border-width:.29em .29em 0 0;content:"";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-minute,.ngb-tp-second,.ngb-tp-meridian{display:flex;flex-direction:column;align-items:center;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}\n'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimepicker, [{
    type: Component,
    args: [{
      exportAs: "ngbTimepicker",
      selector: "ngb-timepicker",
      encapsulation: ViewEncapsulation.None,
      template: `
		<fieldset [disabled]="disabled" [class.disabled]="disabled">
			<div class="ngb-tp">
				<div class="ngb-tp-input-container ngb-tp-hour">
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeHour(hourStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.increment-hours">Increment hours</span>
						</button>
					}
					<input
						type="text"
						class="ngb-tp-input form-control"
						[class.form-control-sm]="isSmallSize"
						[class.form-control-lg]="isLargeSize"
						maxlength="2"
						inputmode="numeric"
						placeholder="HH"
						i18n-placeholder="@@ngb.timepicker.HH"
						[value]="formatHour(model?.hour)"
						(change)="updateHour($any($event).target.value)"
						[readOnly]="readonlyInputs"
						[disabled]="disabled"
						aria-label="Hours"
						i18n-aria-label="@@ngb.timepicker.hours"
						(blur)="handleBlur()"
						(input)="formatInput($any($event).target)"
						(keydown.ArrowUp)="changeHour(hourStep); $event.preventDefault()"
						(keydown.ArrowDown)="changeHour(-hourStep); $event.preventDefault()"
					/>
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeHour(-hourStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron bottom"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-hours">Decrement hours</span>
						</button>
					}
				</div>
				<div class="ngb-tp-spacer">:</div>
				<div class="ngb-tp-input-container ngb-tp-minute">
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeMinute(minuteStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.increment-minutes">Increment minutes</span>
						</button>
					}
					<input
						type="text"
						class="ngb-tp-input form-control"
						[class.form-control-sm]="isSmallSize"
						[class.form-control-lg]="isLargeSize"
						maxlength="2"
						inputmode="numeric"
						placeholder="MM"
						i18n-placeholder="@@ngb.timepicker.MM"
						[value]="formatMinSec(model?.minute)"
						(change)="updateMinute($any($event).target.value)"
						[readOnly]="readonlyInputs"
						[disabled]="disabled"
						aria-label="Minutes"
						i18n-aria-label="@@ngb.timepicker.minutes"
						(blur)="handleBlur()"
						(input)="formatInput($any($event).target)"
						(keydown.ArrowUp)="changeMinute(minuteStep); $event.preventDefault()"
						(keydown.ArrowDown)="changeMinute(-minuteStep); $event.preventDefault()"
					/>
					@if (spinners) {
						<button
							tabindex="-1"
							type="button"
							(click)="changeMinute(-minuteStep)"
							class="btn btn-link"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[class.disabled]="disabled"
							[disabled]="disabled"
						>
							<span class="chevron ngb-tp-chevron bottom"></span>
							<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-minutes">Decrement minutes</span>
						</button>
					}
				</div>
				@if (seconds) {
					<div class="ngb-tp-spacer">:</div>
					<div class="ngb-tp-input-container ngb-tp-second">
						@if (spinners) {
							<button
								tabindex="-1"
								type="button"
								(click)="changeSecond(secondStep)"
								class="btn btn-link"
								[class.btn-sm]="isSmallSize"
								[class.btn-lg]="isLargeSize"
								[class.disabled]="disabled"
								[disabled]="disabled"
							>
								<span class="chevron ngb-tp-chevron"></span>
								<span class="visually-hidden" i18n="@@ngb.timepicker.increment-seconds">Increment seconds</span>
							</button>
						}
						<input
							type="text"
							class="ngb-tp-input form-control"
							[class.form-control-sm]="isSmallSize"
							[class.form-control-lg]="isLargeSize"
							maxlength="2"
							inputmode="numeric"
							placeholder="SS"
							i18n-placeholder="@@ngb.timepicker.SS"
							[value]="formatMinSec(model?.second)"
							(change)="updateSecond($any($event).target.value)"
							[readOnly]="readonlyInputs"
							[disabled]="disabled"
							aria-label="Seconds"
							i18n-aria-label="@@ngb.timepicker.seconds"
							(blur)="handleBlur()"
							(input)="formatInput($any($event).target)"
							(keydown.ArrowUp)="changeSecond(secondStep); $event.preventDefault()"
							(keydown.ArrowDown)="changeSecond(-secondStep); $event.preventDefault()"
						/>
						@if (spinners) {
							<button
								tabindex="-1"
								type="button"
								(click)="changeSecond(-secondStep)"
								class="btn btn-link"
								[class.btn-sm]="isSmallSize"
								[class.btn-lg]="isLargeSize"
								[class.disabled]="disabled"
								[disabled]="disabled"
							>
								<span class="chevron ngb-tp-chevron bottom"></span>
								<span class="visually-hidden" i18n="@@ngb.timepicker.decrement-seconds">Decrement seconds</span>
							</button>
						}
					</div>
				}
				@if (meridian) {
					<div class="ngb-tp-spacer"></div>
					<div class="ngb-tp-meridian">
						<button
							type="button"
							class="btn btn-outline-primary"
							[class.btn-sm]="isSmallSize"
							[class.btn-lg]="isLargeSize"
							[disabled]="disabled"
							[class.disabled]="disabled"
							(click)="toggleMeridian()"
						>
							@if (model && model.hour >= 12) {
								<ng-container i18n="@@ngb.timepicker.PM">{{ i18n.getAfternoonPeriod() }}</ng-container>
							} @else {
								<ng-container>{{ i18n.getMorningPeriod() }}</ng-container>
							}
						</button>
					</div>
				}
			</div>
		</fieldset>
	`,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgbTimepicker),
        multi: true
      }],
      styles: ['ngb-timepicker{font-size:1rem}.ngb-tp{display:flex;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron:before{border-style:solid;border-width:.29em .29em 0 0;content:"";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-minute,.ngb-tp-second,.ngb-tp-meridian{display:flex;flex-direction:column;align-items:center;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}\n']
    }]
  }], () => [{
    type: NgbTimepickerConfig
  }, {
    type: NgbTimeAdapter
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgbTimepickerI18n
  }], {
    meridian: [{
      type: Input
    }],
    spinners: [{
      type: Input
    }],
    seconds: [{
      type: Input
    }],
    hourStep: [{
      type: Input
    }],
    minuteStep: [{
      type: Input
    }],
    secondStep: [{
      type: Input
    }],
    readonlyInputs: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var NgbTimepickerModule = class _NgbTimepickerModule {
  static {
    this.ɵfac = function NgbTimepickerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTimepickerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbTimepickerModule,
      imports: [NgbTimepicker],
      exports: [NgbTimepicker]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTimepickerModule, [{
    type: NgModule,
    args: [{
      imports: [NgbTimepicker],
      exports: [NgbTimepicker]
    }]
  }], null, null);
})();
var NgbToastConfig = class _NgbToastConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.autohide = true;
    this.delay = 5e3;
    this.ariaLive = "polite";
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.ɵfac = function NgbToastConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbToastConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbToastConfig,
      factory: _NgbToastConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbToastConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ngbToastFadeInTransition = (element, animation) => {
  const {
    classList
  } = element;
  if (animation) {
    classList.add("fade");
  } else {
    classList.add("show");
    return;
  }
  reflow(element);
  classList.add("show", "showing");
  return () => {
    classList.remove("showing");
  };
};
var ngbToastFadeOutTransition = ({
  classList
}) => {
  classList.add("showing");
  return () => {
    classList.remove("show", "showing");
  };
};
var NgbToastHeader = class _NgbToastHeader {
  static {
    this.ɵfac = function NgbToastHeader_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbToastHeader)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbToastHeader,
      selectors: [["", "ngbToastHeader", ""]]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbToastHeader, [{
    type: Directive,
    args: [{
      selector: "[ngbToastHeader]"
    }]
  }], null, null);
})();
var NgbToast = class _NgbToast {
  constructor(ariaLive) {
    this.ariaLive = ariaLive;
    this._config = inject(NgbToastConfig);
    this._zone = inject(NgZone);
    this._injector = inject(Injector);
    this._element = inject(ElementRef);
    this.animation = this._config.animation;
    this.delay = this._config.delay;
    this.autohide = this._config.autohide;
    this.contentHeaderTpl = null;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
    this.ariaLive ??= this._config.ariaLive;
  }
  ngAfterContentInit() {
    afterNextRender({
      mixedReadWrite: () => {
        this._init();
        this.show();
      }
    }, {
      injector: this._injector
    });
  }
  ngOnChanges(changes) {
    if ("autohide" in changes) {
      this._clearTimeout();
      this._init();
    }
  }
  /**
   * Triggers toast closing programmatically.
   *
   * The returned observable will emit and be completed once the closing transition has finished.
   * If the animations are turned off this happens synchronously.
   *
   * Alternatively you could listen or subscribe to the `(hidden)` output
   *
   * @since 8.0.0
   */
  hide() {
    this._clearTimeout();
    const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbToastFadeOutTransition, {
      animation: this.animation,
      runningTransition: "stop"
    });
    transition.subscribe(() => {
      this.hidden.emit();
    });
    return transition;
  }
  /**
   * Triggers toast opening programmatically.
   *
   * The returned observable will emit and be completed once the opening transition has finished.
   * If the animations are turned off this happens synchronously.
   *
   * Alternatively you could listen or subscribe to the `(shown)` output
   *
   * @since 8.0.0
   */
  show() {
    const transition = ngbRunTransition(this._zone, this._element.nativeElement, ngbToastFadeInTransition, {
      animation: this.animation,
      runningTransition: "continue"
    });
    transition.subscribe(() => {
      this.shown.emit();
    });
    return transition;
  }
  _init() {
    if (this.autohide && !this._timeoutID) {
      this._timeoutID = setTimeout(() => this.hide(), this.delay);
    }
  }
  _clearTimeout() {
    if (this._timeoutID) {
      clearTimeout(this._timeoutID);
      this._timeoutID = null;
    }
  }
  static {
    this.ɵfac = function NgbToast_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbToast)(ɵɵinjectAttribute("aria-live"));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbToast,
      selectors: [["ngb-toast"]],
      contentQueries: function NgbToast_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          ɵɵcontentQuery(dirIndex, NgbToastHeader, 7, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentHeaderTpl = _t.first);
        }
      },
      hostAttrs: ["role", "alert", "aria-atomic", "true", 1, "toast"],
      hostVars: 3,
      hostBindings: function NgbToast_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("aria-live", ctx.ariaLive);
          ɵɵclassProp("fade", ctx.animation);
        }
      },
      inputs: {
        animation: "animation",
        delay: "delay",
        autohide: "autohide",
        header: "header"
      },
      outputs: {
        shown: "shown",
        hidden: "hidden"
      },
      exportAs: ["ngbToast"],
      features: [ɵɵNgOnChangesFeature],
      ngContentSelectors: _c2,
      decls: 5,
      vars: 1,
      consts: () => {
        let i18n_34;
        if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
          const MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_34 = goog.getMsg("Close");
          i18n_34 = MSG__USERS_SILKALNS_PROJECTS_ARCHITECTUI_ANGULAR_THEME_FREE_NODE_MODULES__NG_BOOTSTRAP_NG_BOOTSTRAP_FESM2022_NG_BOOTSTRAP_MJS_34;
        } else {
          i18n_34 = $localize`:@@ngb.toast.close-aria:Close`;
        }
        return [["headerTpl", ""], [1, "toast-header"], [1, "toast-body"], [1, "me-auto"], [3, "ngTemplateOutlet"], ["type", "button", "aria-label", i18n_34, 1, "btn-close", 3, "click"]];
      },
      template: function NgbToast_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, NgbToast_ng_template_0_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵconditionalCreate(2, NgbToast_Conditional_2_Template, 3, 1, "div", 1);
          ɵɵelementStart(3, "div", 2);
          ɵɵprojection(4);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵconditional(ctx.contentHeaderTpl || ctx.header ? 2 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      styles: ["ngb-toast{display:block}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}\n"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbToast, [{
    type: Component,
    args: [{
      selector: "ngb-toast",
      exportAs: "ngbToast",
      imports: [NgTemplateOutlet],
      encapsulation: ViewEncapsulation.None,
      host: {
        role: "alert",
        "[attr.aria-live]": "ariaLive",
        "aria-atomic": "true",
        class: "toast",
        "[class.fade]": "animation"
      },
      template: `
		<ng-template #headerTpl>
			<strong class="me-auto">{{ header }}</strong>
		</ng-template>
		@if (contentHeaderTpl || header) {
			<div class="toast-header">
				<ng-template [ngTemplateOutlet]="contentHeaderTpl || headerTpl" />
				<button
					type="button"
					class="btn-close"
					aria-label="Close"
					i18n-aria-label="@@ngb.toast.close-aria"
					(click)="hide()"
				>
				</button>
			</div>
		}
		<div class="toast-body">
			<ng-content />
		</div>
	`,
      styles: ["ngb-toast{display:block}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["aria-live"]
    }]
  }], {
    animation: [{
      type: Input
    }],
    delay: [{
      type: Input
    }],
    autohide: [{
      type: Input
    }],
    header: [{
      type: Input
    }],
    contentHeaderTpl: [{
      type: ContentChild,
      args: [NgbToastHeader, {
        read: TemplateRef,
        static: true
      }]
    }],
    shown: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }]
  });
})();
var NgbToastModule = class _NgbToastModule {
  static {
    this.ɵfac = function NgbToastModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbToastModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbToastModule,
      imports: [NgbToast, NgbToastHeader],
      exports: [NgbToast, NgbToastHeader]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbToastModule, [{
    type: NgModule,
    args: [{
      imports: [NgbToast, NgbToastHeader],
      exports: [NgbToast, NgbToastHeader]
    }]
  }], null, null);
})();
var NgbTooltipConfig = class _NgbTooltipConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.autoClose = true;
    this.placement = "auto";
    this.popperOptions = (options) => options;
    this.triggers = "hover focus";
    this.disableTooltip = false;
    this.openDelay = 0;
    this.closeDelay = 0;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.ɵfac = function NgbTooltipConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTooltipConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbTooltipConfig,
      factory: _NgbTooltipConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTooltipConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var nextId = 0;
var NgbTooltipWindow = class _NgbTooltipWindow {
  static {
    this.ɵfac = function NgbTooltipWindow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTooltipWindow)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbTooltipWindow,
      selectors: [["ngb-tooltip-window"]],
      hostAttrs: ["role", "tooltip"],
      hostVars: 5,
      hostBindings: function NgbTooltipWindow_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mouseenter", function NgbTooltipWindow_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          })("mouseleave", function NgbTooltipWindow_mouseleave_HostBindingHandler() {
            return ctx.onMouseLeave();
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.id);
          ɵɵclassMap("tooltip" + (ctx.tooltipClass ? " " + ctx.tooltipClass : ""));
          ɵɵclassProp("fade", ctx.animation);
        }
      },
      inputs: {
        animation: "animation",
        id: "id",
        tooltipClass: "tooltipClass",
        onMouseEnter: "onMouseEnter",
        onMouseLeave: "onMouseLeave"
      },
      ngContentSelectors: _c2,
      decls: 3,
      vars: 0,
      consts: [["data-popper-arrow", "", 1, "tooltip-arrow"], [1, "tooltip-inner"]],
      template: function NgbTooltipWindow_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵdomElement(0, "div", 0);
          ɵɵdomElementStart(1, "div", 1);
          ɵɵprojection(2);
          ɵɵdomElementEnd();
        }
      },
      styles: ["ngb-tooltip-window{pointer-events:none;position:absolute}ngb-tooltip-window .tooltip-inner{pointer-events:auto}ngb-tooltip-window.bs-tooltip-top,ngb-tooltip-window.bs-tooltip-bottom{padding-left:0;padding-right:0}ngb-tooltip-window.bs-tooltip-start,ngb-tooltip-window.bs-tooltip-end{padding-top:0;padding-bottom:0}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTooltipWindow, [{
    type: Component,
    args: [{
      selector: "ngb-tooltip-window",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": '"tooltip" + (tooltipClass ? " " + tooltipClass : "")',
        "[class.fade]": "animation",
        role: "tooltip",
        "[id]": "id",
        "(mouseenter)": "onMouseEnter()",
        "(mouseleave)": "onMouseLeave()"
      },
      template: `
		<div class="tooltip-arrow" data-popper-arrow></div>
		<div class="tooltip-inner">
			<ng-content />
		</div>
	`,
      styles: ["ngb-tooltip-window{pointer-events:none;position:absolute}ngb-tooltip-window .tooltip-inner{pointer-events:auto}ngb-tooltip-window.bs-tooltip-top,ngb-tooltip-window.bs-tooltip-bottom{padding-left:0;padding-right:0}ngb-tooltip-window.bs-tooltip-start,ngb-tooltip-window.bs-tooltip-end{padding-top:0;padding-bottom:0}\n"]
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    tooltipClass: [{
      type: Input
    }],
    onMouseEnter: [{
      type: Input
    }],
    onMouseLeave: [{
      type: Input
    }]
  });
})();
var NgbTooltip = class _NgbTooltip {
  constructor() {
    this._config = inject(NgbTooltipConfig);
    this.animation = this._config.animation;
    this.autoClose = this._config.autoClose;
    this.placement = this._config.placement;
    this.popperOptions = this._config.popperOptions;
    this.triggers = this._config.triggers;
    this.container = this._config.container;
    this.disableTooltip = this._config.disableTooltip;
    this.tooltipClass = this._config.tooltipClass;
    this.openDelay = this._config.openDelay;
    this.closeDelay = this._config.closeDelay;
    this.shown = new EventEmitter();
    this.hidden = new EventEmitter();
    this._nativeElement = inject(ElementRef).nativeElement;
    this._ngZone = inject(NgZone);
    this._document = inject(DOCUMENT);
    this._changeDetector = inject(ChangeDetectorRef);
    this._injector = inject(Injector);
    this._ngbTooltipWindowId = `ngb-tooltip-${nextId++}`;
    this._popupService = new PopupService(NgbTooltipWindow);
    this._windowRef = null;
    this._positioning = ngbPositioning();
    this._mouseEnterTooltip = new Subject();
    this._mouseLeaveTooltip = new Subject();
    this._opening = true;
    this._transitioning = false;
  }
  /**
   * The string content or a `TemplateRef` for the content to be displayed in the tooltip.
   *
   * If the content if falsy, the tooltip won't open.
   */
  set ngbTooltip(value) {
    this._ngbTooltip = value;
    if (!value && this._windowRef) {
      this.close();
    }
  }
  get ngbTooltip() {
    return this._ngbTooltip;
  }
  /**
   * Opens the tooltip.
   *
   * This is considered to be a "manual" triggering.
   * The `context` is an optional value to be injected into the tooltip template when it is created.
   */
  open(context) {
    if (!this._opening && this._transitioning) {
      this._transitioning = false;
      ngbCompleteTransition(this._windowRef.location.nativeElement);
    }
    if (!this._windowRef && this._ngbTooltip && !this.disableTooltip) {
      const {
        windowRef,
        transition$
      } = this._popupService.open(this._ngbTooltip, context ?? this.tooltipContext, this.animation);
      this._opening = true;
      this._transitioning = true;
      this._windowRef = windowRef;
      this._windowRef.setInput("animation", this.animation);
      this._windowRef.setInput("tooltipClass", this.tooltipClass);
      this._windowRef.setInput("id", this._ngbTooltipWindowId);
      this._windowRef.setInput("onMouseEnter", () => this._mouseEnterTooltip.next());
      this._windowRef.setInput("onMouseLeave", () => this._mouseLeaveTooltip.next());
      this._getPositionTargetElement().setAttribute("aria-describedby", this._ngbTooltipWindowId);
      if (this.container === "body") {
        this._document.body.appendChild(this._windowRef.location.nativeElement);
      }
      this._windowRef.changeDetectorRef.detectChanges();
      this._windowRef.changeDetectorRef.markForCheck();
      this._ngZone.runOutsideAngular(() => {
        this._positioning.createPopper({
          hostElement: this._getPositionTargetElement(),
          targetElement: this._windowRef.location.nativeElement,
          placement: this.placement,
          baseClass: "bs-tooltip",
          updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 6])(options))
        });
        Promise.resolve().then(() => {
          this._positioning.update();
        });
        this._afterRenderRef = afterEveryRender({
          mixedReadWrite: () => {
            this._positioning.update();
          }
        }, {
          injector: this._injector
        });
      });
      ngbAutoClose(this._ngZone, this._document, this.autoClose, () => this.close(), this.hidden, [this._windowRef.location.nativeElement], [this._nativeElement]);
      transition$.subscribe(() => {
        if (this._transitioning) {
          this._transitioning = false;
          this.shown.emit();
        }
      });
    }
  }
  /**
   * Closes the tooltip.
   *
   * This is considered to be a "manual" triggering of the tooltip.
   */
  close(animation = this.animation) {
    if (this._opening && this._transitioning) {
      this._transitioning = false;
      ngbCompleteTransition(this._windowRef.location.nativeElement);
    }
    if (this._windowRef != null) {
      this._getPositionTargetElement().removeAttribute("aria-describedby");
      this._opening = false;
      this._transitioning = true;
      this._popupService.close(animation).subscribe(() => {
        this._windowRef = null;
        this._positioning.destroy();
        this._afterRenderRef?.destroy();
        if (this._transitioning) {
          this._transitioning = false;
          this.hidden.emit();
        }
        this._changeDetector.markForCheck();
      });
    }
  }
  /**
   * Toggles the tooltip.
   *
   * This is considered to be a "manual" triggering of the tooltip.
   */
  toggle() {
    if (this._windowRef) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Returns `true`, if the tooltip is currently shown.
   */
  isOpen() {
    return this._windowRef != null;
  }
  ngOnInit() {
    this._unregisterListenersFn = listenToTriggers(this._nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay, this._mouseEnterTooltip, this._mouseLeaveTooltip);
  }
  ngOnChanges({
    tooltipClass
  }) {
    if (tooltipClass && this.isOpen()) {
      this._windowRef.setInput("tooltipClass", tooltipClass.currentValue);
    }
  }
  ngOnDestroy() {
    this.close(false);
    this._unregisterListenersFn?.();
  }
  _getPositionTargetElement() {
    return (isString(this.positionTarget) ? this._document.querySelector(this.positionTarget) : this.positionTarget) || this._nativeElement;
  }
  static {
    this.ɵfac = function NgbTooltip_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTooltip)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbTooltip,
      selectors: [["", "ngbTooltip", ""]],
      inputs: {
        animation: "animation",
        autoClose: "autoClose",
        placement: "placement",
        popperOptions: "popperOptions",
        triggers: "triggers",
        positionTarget: "positionTarget",
        container: "container",
        disableTooltip: "disableTooltip",
        tooltipClass: "tooltipClass",
        tooltipContext: "tooltipContext",
        openDelay: "openDelay",
        closeDelay: "closeDelay",
        ngbTooltip: "ngbTooltip"
      },
      outputs: {
        shown: "shown",
        hidden: "hidden"
      },
      exportAs: ["ngbTooltip"],
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTooltip, [{
    type: Directive,
    args: [{
      selector: "[ngbTooltip]",
      exportAs: "ngbTooltip"
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    autoClose: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    popperOptions: [{
      type: Input
    }],
    triggers: [{
      type: Input
    }],
    positionTarget: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    disableTooltip: [{
      type: Input
    }],
    tooltipClass: [{
      type: Input
    }],
    tooltipContext: [{
      type: Input
    }],
    openDelay: [{
      type: Input
    }],
    closeDelay: [{
      type: Input
    }],
    shown: [{
      type: Output
    }],
    hidden: [{
      type: Output
    }],
    ngbTooltip: [{
      type: Input
    }]
  });
})();
var NgbTooltipModule = class _NgbTooltipModule {
  static {
    this.ɵfac = function NgbTooltipModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTooltipModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbTooltipModule,
      imports: [NgbTooltip],
      exports: [NgbTooltip]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTooltipModule, [{
    type: NgModule,
    args: [{
      imports: [NgbTooltip],
      exports: [NgbTooltip]
    }]
  }], null, null);
})();
var NgbHighlight = class _NgbHighlight {
  constructor() {
    this.highlightClass = "ngb-highlight";
    this.accentSensitive = true;
  }
  ngOnChanges(changes) {
    if (!this.accentSensitive && !String.prototype.normalize) {
      console.warn("The `accentSensitive` input in `ngb-highlight` cannot be set to `false` in a browser that does not implement the `String.normalize` function. You will have to include a polyfill in your application to use this feature in the current browser.");
      this.accentSensitive = true;
    }
    const result = toString(this.result);
    const terms = Array.isArray(this.term) ? this.term : [this.term];
    const prepareTerm = (term) => this.accentSensitive ? term : removeAccents(term);
    const escapedTerms = terms.map((term) => regExpEscape(prepareTerm(toString(term)))).filter((term) => term);
    const toSplit = this.accentSensitive ? result : removeAccents(result);
    const parts = escapedTerms.length ? toSplit.split(new RegExp(`(${escapedTerms.join("|")})`, "gmi")) : [result];
    if (this.accentSensitive) {
      this.parts = parts;
    } else {
      let offset2 = 0;
      this.parts = parts.map((part) => result.substring(offset2, offset2 += part.length));
    }
  }
  static {
    this.ɵfac = function NgbHighlight_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbHighlight)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbHighlight,
      selectors: [["ngb-highlight"]],
      inputs: {
        highlightClass: "highlightClass",
        result: "result",
        term: "term",
        accentSensitive: "accentSensitive"
      },
      features: [ɵɵNgOnChangesFeature],
      decls: 2,
      vars: 0,
      consts: [[3, "class"]],
      template: function NgbHighlight_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵrepeaterCreate(0, NgbHighlight_For_1_Template, 2, 1, null, null, ɵɵrepeaterTrackByIndex);
        }
        if (rf & 2) {
          ɵɵrepeater(ctx.parts);
        }
      },
      styles: [".ngb-highlight{font-weight:700}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbHighlight, [{
    type: Component,
    args: [{
      selector: "ngb-highlight",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `
		@for (part of parts; track $index) {
			@if ($odd) {
				<span class="{{ highlightClass }}">{{ part }}</span>
			} @else {
				<ng-container>{{ part }}</ng-container>
			}
		}
	`,
      styles: [".ngb-highlight{font-weight:700}\n"]
    }]
  }], null, {
    highlightClass: [{
      type: Input
    }],
    result: [{
      type: Input,
      args: [{
        required: true
      }]
    }],
    term: [{
      type: Input,
      args: [{
        required: true
      }]
    }],
    accentSensitive: [{
      type: Input
    }]
  });
})();
var ARIA_LIVE_DELAY = new InjectionToken("live announcer delay", {
  providedIn: "root",
  factory: () => 100
});
function getLiveElement(document2, lazyCreate = false) {
  let element = document2.body.querySelector("#ngb-live");
  if (element == null && lazyCreate) {
    element = document2.createElement("div");
    element.setAttribute("id", "ngb-live");
    element.setAttribute("aria-live", "polite");
    element.setAttribute("aria-atomic", "true");
    element.classList.add("visually-hidden");
    document2.body.appendChild(element);
  }
  return element;
}
var Live = class _Live {
  constructor() {
    this._document = inject(DOCUMENT);
    this._delay = inject(ARIA_LIVE_DELAY);
  }
  ngOnDestroy() {
    const element = getLiveElement(this._document);
    if (element) {
      element.parentElement.removeChild(element);
    }
  }
  say(message) {
    const element = getLiveElement(this._document, true);
    const delay2 = this._delay;
    if (element != null) {
      element.textContent = "";
      const setText = () => element.textContent = message;
      if (delay2 === null) {
        setText();
      } else {
        setTimeout(setText, delay2);
      }
    }
  }
  static {
    this.ɵfac = function Live_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Live)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _Live,
      factory: _Live.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Live, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbTypeaheadConfig = class _NgbTypeaheadConfig {
  constructor() {
    this.editable = true;
    this.focusFirst = true;
    this.selectOnExact = false;
    this.showHint = false;
    this.placement = ["bottom-start", "bottom-end", "top-start", "top-end"];
    this.popperOptions = (options) => options;
  }
  static {
    this.ɵfac = function NgbTypeaheadConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTypeaheadConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbTypeaheadConfig,
      factory: _NgbTypeaheadConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTypeaheadConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbTypeaheadWindow = class _NgbTypeaheadWindow {
  constructor() {
    this.activeIdx = 0;
    this.focusFirst = true;
    this.formatter = toString;
    this.selectEvent = new EventEmitter();
    this.activeChangeEvent = new EventEmitter();
  }
  hasActive() {
    return this.activeIdx > -1 && this.activeIdx < this.results.length;
  }
  getActive() {
    return this.results[this.activeIdx];
  }
  markActive(activeIdx) {
    this.activeIdx = activeIdx;
    this._activeChanged();
  }
  next() {
    if (this.activeIdx === this.results.length - 1) {
      this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
    } else {
      this.activeIdx++;
    }
    this._activeChanged();
  }
  prev() {
    if (this.activeIdx < 0) {
      this.activeIdx = this.results.length - 1;
    } else if (this.activeIdx === 0) {
      this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
    } else {
      this.activeIdx--;
    }
    this._activeChanged();
  }
  resetActive() {
    this.activeIdx = this.focusFirst ? 0 : -1;
    this._activeChanged();
  }
  select(item) {
    this.selectEvent.emit(item);
  }
  ngOnInit() {
    this.resetActive();
  }
  _activeChanged() {
    this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + "-" + this.activeIdx : void 0);
  }
  static {
    this.ɵfac = function NgbTypeaheadWindow_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTypeaheadWindow)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbTypeaheadWindow,
      selectors: [["ngb-typeahead-window"]],
      hostAttrs: ["role", "listbox"],
      hostVars: 3,
      hostBindings: function NgbTypeaheadWindow_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousedown", function NgbTypeaheadWindow_mousedown_HostBindingHandler($event) {
            return $event.preventDefault();
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("id", ctx.id);
          ɵɵclassMap("dropdown-menu show" + (ctx.popupClass ? " " + ctx.popupClass : ""));
        }
      },
      inputs: {
        id: "id",
        focusFirst: "focusFirst",
        results: "results",
        term: "term",
        formatter: "formatter",
        resultTemplate: "resultTemplate",
        popupClass: "popupClass"
      },
      outputs: {
        selectEvent: "select",
        activeChangeEvent: "activeChange"
      },
      exportAs: ["ngbTypeaheadWindow"],
      decls: 4,
      vars: 0,
      consts: [["rt", ""], ["type", "button", "role", "option", 1, "dropdown-item", 3, "id", "active"], [3, "result", "term"], ["type", "button", "role", "option", 1, "dropdown-item", 3, "mouseenter", "click", "id"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NgbTypeaheadWindow_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, NgbTypeaheadWindow_ng_template_0_Template, 1, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵrepeaterCreate(2, NgbTypeaheadWindow_For_3_Template, 2, 9, "button", 1, ɵɵrepeaterTrackByIndex);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵrepeater(ctx.results);
        }
      },
      dependencies: [NgbHighlight, NgTemplateOutlet],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTypeaheadWindow, [{
    type: Component,
    args: [{
      selector: "ngb-typeahead-window",
      exportAs: "ngbTypeaheadWindow",
      imports: [NgbHighlight, NgTemplateOutlet],
      encapsulation: ViewEncapsulation.None,
      host: {
        "(mousedown)": "$event.preventDefault()",
        "[class]": '"dropdown-menu show" + (popupClass ? " " + popupClass : "")',
        role: "listbox",
        "[id]": "id"
      },
      template: `
		<ng-template #rt let-result="result" let-term="term" let-formatter="formatter">
			<ngb-highlight [result]="formatter(result)" [term]="term" />
		</ng-template>
		@for (result of results; track $index) {
			<button
				type="button"
				class="dropdown-item"
				role="option"
				[id]="id + '-' + $index"
				[class.active]="$index === activeIdx"
				(mouseenter)="markActive($index)"
				(click)="select(result)"
			>
				<ng-template
					[ngTemplateOutlet]="resultTemplate || rt"
					[ngTemplateOutletContext]="{ result: result, term: term, formatter: formatter }"
				/>
			</button>
		}
	`
    }]
  }], null, {
    id: [{
      type: Input
    }],
    focusFirst: [{
      type: Input
    }],
    results: [{
      type: Input
    }],
    term: [{
      type: Input
    }],
    formatter: [{
      type: Input
    }],
    resultTemplate: [{
      type: Input
    }],
    popupClass: [{
      type: Input
    }],
    selectEvent: [{
      type: Output,
      args: ["select"]
    }],
    activeChangeEvent: [{
      type: Output,
      args: ["activeChange"]
    }]
  });
})();
var nextWindowId = 0;
var NgbTypeahead = class _NgbTypeahead {
  constructor() {
    this._nativeElement = inject(ElementRef).nativeElement;
    this._config = inject(NgbTypeaheadConfig);
    this._live = inject(Live);
    this._document = inject(DOCUMENT);
    this._ngZone = inject(NgZone);
    this._changeDetector = inject(ChangeDetectorRef);
    this._injector = inject(Injector);
    this._popupService = new PopupService(NgbTypeaheadWindow);
    this._positioning = ngbPositioning();
    this._subscription = null;
    this._closed$ = new Subject();
    this._inputValueBackup = null;
    this._inputValueForSelectOnExact = null;
    this._valueChanges$ = fromEvent(this._nativeElement, "input").pipe(map(($event) => $event.target.value));
    this._resubscribeTypeahead$ = new BehaviorSubject(null);
    this._windowRef = null;
    this.autocomplete = "off";
    this.container = this._config.container;
    this.editable = this._config.editable;
    this.focusFirst = this._config.focusFirst;
    this.selectOnExact = this._config.selectOnExact;
    this.showHint = this._config.showHint;
    this.placement = this._config.placement;
    this.popperOptions = this._config.popperOptions;
    this.selectItem = new EventEmitter();
    this.activeDescendant = null;
    this.popupId = `ngb-typeahead-${nextWindowId++}`;
    this._onTouched = () => {
    };
    this._onChange = (_) => {
    };
  }
  ngOnInit() {
    this._subscribeToUserInput();
  }
  ngOnChanges({
    ngbTypeahead
  }) {
    if (ngbTypeahead && !ngbTypeahead.firstChange) {
      this._unsubscribeFromUserInput();
      this._subscribeToUserInput();
    }
  }
  ngOnDestroy() {
    this._closePopup();
    this._unsubscribeFromUserInput();
  }
  registerOnChange(fn2) {
    this._onChange = fn2;
  }
  registerOnTouched(fn2) {
    this._onTouched = fn2;
  }
  writeValue(value) {
    this._writeInputValue(this._formatItemForInput(value));
    if (this.showHint) {
      this._inputValueBackup = value;
    }
  }
  setDisabledState(isDisabled) {
    this._nativeElement.disabled = isDisabled;
  }
  /**
   * Dismisses typeahead popup window
   */
  dismissPopup() {
    if (this.isPopupOpen()) {
      this._resubscribeTypeahead$.next(null);
      this._closePopup();
      if (this.showHint && this._inputValueBackup !== null) {
        this._writeInputValue(this._inputValueBackup);
      }
      this._changeDetector.markForCheck();
    }
  }
  /**
   * Returns true if the typeahead popup window is displayed
   */
  isPopupOpen() {
    return this._windowRef != null;
  }
  handleBlur() {
    this._resubscribeTypeahead$.next(null);
    this._onTouched();
  }
  handleKeyDown(event) {
    if (!this.isPopupOpen()) {
      return;
    }
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        this._windowRef.instance.next();
        this._showHint();
        break;
      case "ArrowUp":
        event.preventDefault();
        this._windowRef.instance.prev();
        this._showHint();
        break;
      case "Enter":
      case "Tab": {
        const result = this._windowRef.instance.getActive();
        if (isDefined(result)) {
          event.preventDefault();
          event.stopPropagation();
          this._selectResult(result);
        }
        this._closePopup();
        break;
      }
    }
  }
  _openPopup() {
    if (!this.isPopupOpen()) {
      this._inputValueBackup = this._nativeElement.value;
      const {
        windowRef
      } = this._popupService.open();
      this._windowRef = windowRef;
      this._windowRef.setInput("id", this.popupId);
      this._windowRef.setInput("popupClass", this.popupClass);
      this._windowRef.instance.selectEvent.subscribe((result) => this._selectResultClosePopup(result));
      this._windowRef.instance.activeChangeEvent.subscribe((activeId) => this.activeDescendant = activeId);
      if (this.container === "body") {
        this._windowRef.location.nativeElement.style.zIndex = "1055";
        this._document.body.appendChild(this._windowRef.location.nativeElement);
      }
      this._changeDetector.markForCheck();
      this._ngZone.runOutsideAngular(() => {
        if (this._windowRef) {
          this._positioning.createPopper({
            hostElement: this._nativeElement,
            targetElement: this._windowRef.location.nativeElement,
            placement: this.placement,
            updatePopperOptions: (options) => this.popperOptions(addPopperOffset([0, 2])(options))
          });
          this._afterRenderRef = afterEveryRender({
            mixedReadWrite: () => {
              this._positioning.update();
            }
          }, {
            injector: this._injector
          });
        }
      });
      ngbAutoClose(this._ngZone, this._document, "outside", () => this.dismissPopup(), this._closed$, [this._nativeElement, this._windowRef.location.nativeElement]);
    }
  }
  _closePopup() {
    this._popupService.close().subscribe(() => {
      this._positioning.destroy();
      this._afterRenderRef?.destroy();
      this._closed$.next();
      this._windowRef = null;
      this.activeDescendant = null;
    });
  }
  _selectResult(result) {
    let defaultPrevented = false;
    this.selectItem.emit({
      item: result,
      preventDefault: () => {
        defaultPrevented = true;
      }
    });
    this._resubscribeTypeahead$.next(null);
    if (!defaultPrevented) {
      this.writeValue(result);
      this._onChange(result);
    }
  }
  _selectResultClosePopup(result) {
    this._selectResult(result);
    this._closePopup();
  }
  _showHint() {
    if (this.showHint && this._windowRef?.instance.hasActive() && this._inputValueBackup != null) {
      const userInputLowerCase = this._inputValueBackup.toLowerCase();
      const formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
      if (userInputLowerCase === formattedVal.substring(0, this._inputValueBackup.length).toLowerCase()) {
        this._writeInputValue(this._inputValueBackup + formattedVal.substring(this._inputValueBackup.length));
        this._nativeElement["setSelectionRange"].apply(this._nativeElement, [this._inputValueBackup.length, formattedVal.length]);
      } else {
        this._writeInputValue(formattedVal);
      }
    }
  }
  _formatItemForInput(item) {
    return item != null && this.inputFormatter ? this.inputFormatter(item) : toString(item);
  }
  _writeInputValue(value) {
    this._nativeElement.value = toString(value);
  }
  _subscribeToUserInput() {
    const results$ = this._valueChanges$.pipe(tap((value) => {
      this._inputValueBackup = this.showHint ? value : null;
      this._inputValueForSelectOnExact = this.selectOnExact ? value : null;
      this._onChange(this.editable ? value : null);
    }), this.ngbTypeahead ? this.ngbTypeahead : () => of([]));
    this._subscription = this._resubscribeTypeahead$.pipe(switchMap(() => results$)).subscribe((results) => {
      if (!results || results.length === 0) {
        this._closePopup();
      } else {
        if (this.selectOnExact && results.length === 1 && this._formatItemForInput(results[0]) === this._inputValueForSelectOnExact) {
          this._selectResult(results[0]);
          this._closePopup();
        } else {
          this._openPopup();
          this._windowRef.setInput("focusFirst", this.focusFirst);
          this._windowRef.setInput("results", results);
          this._windowRef.setInput("term", this._nativeElement.value);
          if (this.resultFormatter) {
            this._windowRef.setInput("formatter", this.resultFormatter);
          }
          if (this.resultTemplate) {
            this._windowRef.setInput("resultTemplate", this.resultTemplate);
          }
          this._windowRef.instance.resetActive();
          this._windowRef.changeDetectorRef.detectChanges();
          this._showHint();
        }
      }
      const count = results ? results.length : 0;
      this._live.say(count === 0 ? "No results available" : `${count} result${count === 1 ? "" : "s"} available`);
    });
  }
  _unsubscribeFromUserInput() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    this._subscription = null;
  }
  static {
    this.ɵfac = function NgbTypeahead_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTypeahead)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _NgbTypeahead,
      selectors: [["input", "ngbTypeahead", ""]],
      hostAttrs: ["autocapitalize", "off", "autocorrect", "off", "role", "combobox"],
      hostVars: 7,
      hostBindings: function NgbTypeahead_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("blur", function NgbTypeahead_blur_HostBindingHandler() {
            return ctx.handleBlur();
          })("keydown", function NgbTypeahead_keydown_HostBindingHandler($event) {
            return ctx.handleKeyDown($event);
          });
        }
        if (rf & 2) {
          ɵɵdomProperty("autocomplete", ctx.autocomplete);
          ɵɵattribute("aria-autocomplete", ctx.showHint ? "both" : "list")("aria-activedescendant", ctx.activeDescendant)("aria-controls", ctx.isPopupOpen() ? ctx.popupId : null)("aria-expanded", ctx.isPopupOpen());
          ɵɵclassProp("open", ctx.isPopupOpen());
        }
      },
      inputs: {
        autocomplete: "autocomplete",
        container: "container",
        editable: "editable",
        focusFirst: "focusFirst",
        inputFormatter: "inputFormatter",
        ngbTypeahead: "ngbTypeahead",
        resultFormatter: "resultFormatter",
        resultTemplate: "resultTemplate",
        selectOnExact: "selectOnExact",
        showHint: "showHint",
        placement: "placement",
        popperOptions: "popperOptions",
        popupClass: "popupClass"
      },
      outputs: {
        selectItem: "selectItem"
      },
      exportAs: ["ngbTypeahead"],
      features: [ɵɵProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _NgbTypeahead),
        multi: true
      }]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTypeahead, [{
    type: Directive,
    args: [{
      selector: "input[ngbTypeahead]",
      exportAs: "ngbTypeahead",
      host: {
        "(blur)": "handleBlur()",
        "[class.open]": "isPopupOpen()",
        "(keydown)": "handleKeyDown($event)",
        "[autocomplete]": "autocomplete",
        autocapitalize: "off",
        autocorrect: "off",
        role: "combobox",
        "[attr.aria-autocomplete]": 'showHint ? "both" : "list"',
        "[attr.aria-activedescendant]": "activeDescendant",
        "[attr.aria-controls]": "isPopupOpen() ? popupId : null",
        "[attr.aria-expanded]": "isPopupOpen()"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgbTypeahead),
        multi: true
      }]
    }]
  }], null, {
    autocomplete: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    editable: [{
      type: Input
    }],
    focusFirst: [{
      type: Input
    }],
    inputFormatter: [{
      type: Input
    }],
    ngbTypeahead: [{
      type: Input
    }],
    resultFormatter: [{
      type: Input
    }],
    resultTemplate: [{
      type: Input
    }],
    selectOnExact: [{
      type: Input
    }],
    showHint: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    popperOptions: [{
      type: Input
    }],
    popupClass: [{
      type: Input
    }],
    selectItem: [{
      type: Output
    }]
  });
})();
var NgbTypeaheadModule = class _NgbTypeaheadModule {
  static {
    this.ɵfac = function NgbTypeaheadModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbTypeaheadModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbTypeaheadModule,
      imports: [NgbHighlight, NgbTypeahead],
      exports: [NgbHighlight, NgbTypeahead]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbTypeaheadModule, [{
    type: NgModule,
    args: [{
      imports: [NgbHighlight, NgbTypeahead],
      exports: [NgbHighlight, NgbTypeahead]
    }]
  }], null, null);
})();
var NgbOffcanvasConfig = class _NgbOffcanvasConfig {
  constructor() {
    this._ngbConfig = inject(NgbConfig);
    this.backdrop = true;
    this.keyboard = true;
    this.position = "start";
    this.scroll = false;
  }
  get animation() {
    return this._animation ?? this._ngbConfig.animation;
  }
  set animation(animation) {
    this._animation = animation;
  }
  static {
    this.ɵfac = function NgbOffcanvasConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbOffcanvasConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbOffcanvasConfig,
      factory: _NgbOffcanvasConfig.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbOffcanvasConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbActiveOffcanvas = class {
  /**
   * Closes the offcanvas with an optional `result` value.
   *
   * The `NgbOffcanvasRef.result` promise will be resolved with the provided value.
   */
  close(result) {
  }
  /**
   * Dismisses the offcanvas with an optional `reason` value.
   *
   * The `NgbOffcanvasRef.result` promise will be rejected with the provided value.
   */
  dismiss(reason) {
  }
};
var NgbOffcanvasRef = class {
  /**
   * The instance of a component used for the offcanvas content.
   *
   * When a `TemplateRef` is used as the content or when the offcanvas is closed, will return `undefined`.
   */
  get componentInstance() {
    if (this._contentRef && this._contentRef.componentRef) {
      return this._contentRef.componentRef.instance;
    }
  }
  /**
   * The observable that emits when the offcanvas is closed via the `.close()` method.
   *
   * It will emit the result passed to the `.close()` method.
   */
  get closed() {
    return this._closed.asObservable().pipe(takeUntil(this._hidden));
  }
  /**
   * The observable that emits when the offcanvas is dismissed via the `.dismiss()` method.
   *
   * It will emit the reason passed to the `.dismissed()` method by the user, or one of the internal
   * reasons like backdrop click or ESC key press.
   */
  get dismissed() {
    return this._dismissed.asObservable().pipe(takeUntil(this._hidden));
  }
  /**
   * The observable that emits when both offcanvas window and backdrop are closed and animations were finished.
   * At this point offcanvas and backdrop elements will be removed from the DOM tree.
   *
   * This observable will be completed after emitting.
   */
  get hidden() {
    return this._hidden.asObservable();
  }
  /**
   * The observable that emits when offcanvas is fully visible and animation was finished.
   * The offcanvas DOM element is always available synchronously after calling 'offcanvas.open()' service.
   *
   * This observable will be completed after emitting.
   * It will not emit, if offcanvas is closed before open animation is finished.
   */
  get shown() {
    return this._panelCmptRef.instance.shown.asObservable();
  }
  constructor(_panelCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
    this._panelCmptRef = _panelCmptRef;
    this._contentRef = _contentRef;
    this._backdropCmptRef = _backdropCmptRef;
    this._beforeDismiss = _beforeDismiss;
    this._closed = new Subject();
    this._dismissed = new Subject();
    this._hidden = new Subject();
    _panelCmptRef.instance.dismissEvent.subscribe((reason) => {
      this.dismiss(reason);
    });
    if (_backdropCmptRef) {
      _backdropCmptRef.instance.dismissEvent.subscribe((reason) => {
        this.dismiss(reason);
      });
    }
    this.result = new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this.result.then(null, () => {
    });
  }
  /**
   * Closes the offcanvas with an optional `result` value.
   *
   * The `NgbMobalRef.result` promise will be resolved with the provided value.
   */
  close(result) {
    if (this._panelCmptRef) {
      this._closed.next(result);
      this._resolve(result);
      this._removeOffcanvasElements();
    }
  }
  _dismiss(reason) {
    this._dismissed.next(reason);
    this._reject(reason);
    this._removeOffcanvasElements();
  }
  /**
   * Dismisses the offcanvas with an optional `reason` value.
   *
   * The `NgbOffcanvasRef.result` promise will be rejected with the provided value.
   */
  dismiss(reason) {
    if (this._panelCmptRef) {
      if (!this._beforeDismiss) {
        this._dismiss(reason);
      } else {
        const dismiss = this._beforeDismiss();
        if (isPromise(dismiss)) {
          dismiss.then((result) => {
            if (result !== false) {
              this._dismiss(reason);
            }
          }, () => {
          });
        } else if (dismiss !== false) {
          this._dismiss(reason);
        }
      }
    }
  }
  _removeOffcanvasElements() {
    const panelTransition$ = this._panelCmptRef.instance.hide();
    const backdropTransition$ = this._backdropCmptRef ? this._backdropCmptRef.instance.hide() : of(void 0);
    panelTransition$.subscribe(() => {
      const {
        nativeElement
      } = this._panelCmptRef.location;
      nativeElement.parentNode.removeChild(nativeElement);
      this._panelCmptRef.destroy();
      this._contentRef?.viewRef?.destroy();
      this._panelCmptRef = null;
      this._contentRef = null;
    });
    backdropTransition$.subscribe(() => {
      if (this._backdropCmptRef) {
        const {
          nativeElement
        } = this._backdropCmptRef.location;
        nativeElement.parentNode.removeChild(nativeElement);
        this._backdropCmptRef.destroy();
        this._backdropCmptRef = null;
      }
    });
    zip(panelTransition$, backdropTransition$).subscribe(() => {
      this._hidden.next();
      this._hidden.complete();
    });
  }
};
var OffcanvasDismissReasons;
(function(OffcanvasDismissReasons2) {
  OffcanvasDismissReasons2[OffcanvasDismissReasons2["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
  OffcanvasDismissReasons2[OffcanvasDismissReasons2["ESC"] = 1] = "ESC";
})(OffcanvasDismissReasons || (OffcanvasDismissReasons = {}));
var NgbOffcanvasBackdrop = class _NgbOffcanvasBackdrop {
  constructor() {
    this._nativeElement = inject(ElementRef).nativeElement;
    this._zone = inject(NgZone);
    this._injector = inject(Injector);
    this.dismissEvent = new EventEmitter();
  }
  ngOnInit() {
    afterNextRender({
      mixedReadWrite: () => ngbRunTransition(this._zone, this._nativeElement, (element, animation) => {
        if (animation) {
          reflow(element);
        }
        element.classList.add("show");
      }, {
        animation: this.animation,
        runningTransition: "continue"
      })
    }, {
      injector: this._injector
    });
  }
  hide() {
    return ngbRunTransition(this._zone, this._nativeElement, ({
      classList
    }) => classList.remove("show"), {
      animation: this.animation,
      runningTransition: "stop"
    });
  }
  dismiss() {
    if (!this.static) {
      this.dismissEvent.emit(OffcanvasDismissReasons.BACKDROP_CLICK);
    }
  }
  static {
    this.ɵfac = function NgbOffcanvasBackdrop_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbOffcanvasBackdrop)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbOffcanvasBackdrop,
      selectors: [["ngb-offcanvas-backdrop"]],
      hostVars: 6,
      hostBindings: function NgbOffcanvasBackdrop_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("mousedown", function NgbOffcanvasBackdrop_mousedown_HostBindingHandler() {
            return ctx.dismiss();
          });
        }
        if (rf & 2) {
          ɵɵclassMap("offcanvas-backdrop" + (ctx.backdropClass ? " " + ctx.backdropClass : ""));
          ɵɵclassProp("show", !ctx.animation)("fade", ctx.animation);
        }
      },
      inputs: {
        animation: "animation",
        backdropClass: "backdropClass",
        static: "static"
      },
      outputs: {
        dismissEvent: "dismiss"
      },
      decls: 0,
      vars: 0,
      template: function NgbOffcanvasBackdrop_Template(rf, ctx) {
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbOffcanvasBackdrop, [{
    type: Component,
    args: [{
      selector: "ngb-offcanvas-backdrop",
      encapsulation: ViewEncapsulation.None,
      template: "",
      host: {
        "[class]": '"offcanvas-backdrop" + (backdropClass ? " " + backdropClass : "")',
        "[class.show]": "!animation",
        "[class.fade]": "animation",
        "(mousedown)": "dismiss()"
      }
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    backdropClass: [{
      type: Input
    }],
    static: [{
      type: Input
    }],
    dismissEvent: [{
      type: Output,
      args: ["dismiss"]
    }]
  });
})();
var NgbOffcanvasPanel = class _NgbOffcanvasPanel {
  constructor() {
    this._document = inject(DOCUMENT);
    this._elRef = inject(ElementRef);
    this._zone = inject(NgZone);
    this._injector = inject(Injector);
    this._closed$ = new Subject();
    this._elWithFocus = null;
    this.keyboard = true;
    this.position = "start";
    this.dismissEvent = new EventEmitter();
    this.shown = new Subject();
    this.hidden = new Subject();
  }
  dismiss(reason) {
    this.dismissEvent.emit(reason);
  }
  ngOnInit() {
    this._elWithFocus = this._document.activeElement;
    afterNextRender({
      mixedReadWrite: () => this._show()
    }, {
      injector: this._injector
    });
  }
  ngOnDestroy() {
    this._disableEventHandling();
  }
  hide() {
    const context = {
      animation: this.animation,
      runningTransition: "stop"
    };
    const offcanvasTransition$ = ngbRunTransition(this._zone, this._elRef.nativeElement, (element) => {
      element.classList.remove("showing");
      element.classList.add("hiding");
      return () => element.classList.remove("show", "hiding");
    }, context);
    offcanvasTransition$.subscribe(() => {
      this.hidden.next();
      this.hidden.complete();
    });
    this._disableEventHandling();
    this._restoreFocus();
    return offcanvasTransition$;
  }
  _show() {
    const context = {
      animation: this.animation,
      runningTransition: "continue"
    };
    const offcanvasTransition$ = ngbRunTransition(this._zone, this._elRef.nativeElement, (element, animation) => {
      if (animation) {
        reflow(element);
      }
      element.classList.add("show", "showing");
      return () => element.classList.remove("showing");
    }, context);
    offcanvasTransition$.subscribe(() => {
      this.shown.next();
      this.shown.complete();
    });
    this._enableEventHandling();
    this._setFocus();
  }
  _enableEventHandling() {
    const {
      nativeElement
    } = this._elRef;
    this._zone.runOutsideAngular(() => {
      fromEvent(nativeElement, "keydown").pipe(takeUntil(this._closed$), filter((e) => e.key === "Escape")).subscribe((event) => {
        if (this.keyboard) {
          requestAnimationFrame(() => {
            if (!event.defaultPrevented) {
              this._zone.run(() => this.dismiss(OffcanvasDismissReasons.ESC));
            }
          });
        }
      });
    });
  }
  _disableEventHandling() {
    this._closed$.next();
  }
  _setFocus() {
    const {
      nativeElement
    } = this._elRef;
    if (!nativeElement.contains(document.activeElement)) {
      const autoFocusable = nativeElement.querySelector(`[ngbAutofocus]`);
      const firstFocusable = getFocusableBoundaryElements(nativeElement)[0];
      const elementToFocus = autoFocusable || firstFocusable || nativeElement;
      elementToFocus.focus();
    }
  }
  _restoreFocus() {
    const body = this._document.body;
    const elWithFocus = this._elWithFocus;
    let elementToFocus;
    if (elWithFocus && elWithFocus["focus"] && body.contains(elWithFocus)) {
      elementToFocus = elWithFocus;
    } else {
      elementToFocus = body;
    }
    this._zone.runOutsideAngular(() => {
      setTimeout(() => elementToFocus.focus());
      this._elWithFocus = null;
    });
  }
  static {
    this.ɵfac = function NgbOffcanvasPanel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbOffcanvasPanel)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NgbOffcanvasPanel,
      selectors: [["ngb-offcanvas-panel"]],
      hostAttrs: ["role", "dialog", "tabindex", "-1"],
      hostVars: 5,
      hostBindings: function NgbOffcanvasPanel_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵattribute("aria-modal", true)("aria-labelledby", ctx.ariaLabelledBy)("aria-describedby", ctx.ariaDescribedBy);
          ɵɵclassMap("offcanvas offcanvas-" + ctx.position + (ctx.panelClass ? " " + ctx.panelClass : ""));
        }
      },
      inputs: {
        animation: "animation",
        ariaLabelledBy: "ariaLabelledBy",
        ariaDescribedBy: "ariaDescribedBy",
        keyboard: "keyboard",
        panelClass: "panelClass",
        position: "position"
      },
      outputs: {
        dismissEvent: "dismiss"
      },
      ngContentSelectors: _c2,
      decls: 1,
      vars: 0,
      template: function NgbOffcanvasPanel_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵprojection(0);
        }
      },
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbOffcanvasPanel, [{
    type: Component,
    args: [{
      selector: "ngb-offcanvas-panel",
      template: "<ng-content />",
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": '"offcanvas offcanvas-" + position  + (panelClass ? " " + panelClass : "")',
        role: "dialog",
        tabindex: "-1",
        "[attr.aria-modal]": "true",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.aria-describedby]": "ariaDescribedBy"
      }
    }]
  }], null, {
    animation: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaDescribedBy: [{
      type: Input
    }],
    keyboard: [{
      type: Input
    }],
    panelClass: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    dismissEvent: [{
      type: Output,
      args: ["dismiss"]
    }]
  });
})();
var NgbOffcanvasStack = class _NgbOffcanvasStack {
  constructor() {
    this._applicationRef = inject(ApplicationRef);
    this._injector = inject(Injector);
    this._document = inject(DOCUMENT);
    this._scrollBar = inject(ScrollBar);
    this._activePanelCmptHasChanged = new Subject();
    this._scrollBarRestoreFn = null;
    this._backdropAttributes = ["animation", "backdropClass"];
    this._panelAttributes = ["animation", "ariaDescribedBy", "ariaLabelledBy", "keyboard", "panelClass", "position"];
    this._activeInstance = new EventEmitter();
    const ngZone = inject(NgZone);
    this._activePanelCmptHasChanged.subscribe(() => {
      if (this._panelCmpt) {
        ngbFocusTrap(ngZone, this._panelCmpt.location.nativeElement, this._activePanelCmptHasChanged);
      }
    });
  }
  _restoreScrollBar() {
    const scrollBarRestoreFn = this._scrollBarRestoreFn;
    if (scrollBarRestoreFn) {
      this._scrollBarRestoreFn = null;
      scrollBarRestoreFn();
    }
  }
  _hideScrollBar() {
    if (!this._scrollBarRestoreFn) {
      this._scrollBarRestoreFn = this._scrollBar.hide();
    }
  }
  open(contentInjector, content, options) {
    const containerEl = options.container instanceof HTMLElement ? options.container : isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
    if (!containerEl) {
      throw new Error(`The specified offcanvas container "${options.container || "body"}" was not found in the DOM.`);
    }
    if (!options.scroll) {
      this._hideScrollBar();
    }
    const activeOffcanvas = new NgbActiveOffcanvas();
    const contentRef = this._getContentRef(options.injector || contentInjector, content, activeOffcanvas);
    let backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(containerEl) : void 0;
    let panelCmptRef = this._attachWindowComponent(containerEl, contentRef.nodes);
    let ngbOffcanvasRef = new NgbOffcanvasRef(panelCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
    this._registerOffcanvasRef(ngbOffcanvasRef);
    this._registerPanelCmpt(panelCmptRef);
    ngbOffcanvasRef.hidden.pipe(finalize(() => this._restoreScrollBar())).subscribe();
    activeOffcanvas.close = (result) => {
      ngbOffcanvasRef.close(result);
    };
    activeOffcanvas.dismiss = (reason) => {
      ngbOffcanvasRef.dismiss(reason);
    };
    this._applyPanelOptions(panelCmptRef.instance, options);
    if (backdropCmptRef && backdropCmptRef.instance) {
      this._applyBackdropOptions(backdropCmptRef.instance, options);
      backdropCmptRef.changeDetectorRef.detectChanges();
    }
    panelCmptRef.changeDetectorRef.detectChanges();
    return ngbOffcanvasRef;
  }
  get activeInstance() {
    return this._activeInstance;
  }
  dismiss(reason) {
    this._offcanvasRef?.dismiss(reason);
  }
  hasOpenOffcanvas() {
    return !!this._offcanvasRef;
  }
  _attachBackdrop(containerEl) {
    let backdropCmptRef = createComponent(NgbOffcanvasBackdrop, {
      environmentInjector: this._applicationRef.injector,
      elementInjector: this._injector
    });
    this._applicationRef.attachView(backdropCmptRef.hostView);
    containerEl.appendChild(backdropCmptRef.location.nativeElement);
    return backdropCmptRef;
  }
  _attachWindowComponent(containerEl, projectableNodes) {
    let panelCmptRef = createComponent(NgbOffcanvasPanel, {
      environmentInjector: this._applicationRef.injector,
      elementInjector: this._injector,
      projectableNodes
    });
    this._applicationRef.attachView(panelCmptRef.hostView);
    containerEl.appendChild(panelCmptRef.location.nativeElement);
    return panelCmptRef;
  }
  _applyPanelOptions(windowInstance, options) {
    this._panelAttributes.forEach((optionName) => {
      if (isDefined(options[optionName])) {
        windowInstance[optionName] = options[optionName];
      }
    });
  }
  _applyBackdropOptions(backdropInstance, options) {
    this._backdropAttributes.forEach((optionName) => {
      if (isDefined(options[optionName])) {
        backdropInstance[optionName] = options[optionName];
      }
    });
    backdropInstance.static = options.backdrop === "static";
  }
  _getContentRef(contentInjector, content, activeOffcanvas) {
    if (!content) {
      return new ContentRef([]);
    } else if (content instanceof TemplateRef) {
      return this._createFromTemplateRef(content, activeOffcanvas);
    } else if (isString(content)) {
      return this._createFromString(content);
    } else {
      return this._createFromComponent(contentInjector, content, activeOffcanvas);
    }
  }
  _createFromTemplateRef(templateRef, activeOffcanvas) {
    const context = {
      $implicit: activeOffcanvas,
      close(result) {
        activeOffcanvas.close(result);
      },
      dismiss(reason) {
        activeOffcanvas.dismiss(reason);
      }
    };
    const viewRef = templateRef.createEmbeddedView(context);
    this._applicationRef.attachView(viewRef);
    return new ContentRef([viewRef.rootNodes], viewRef);
  }
  _createFromString(content) {
    const component = this._document.createTextNode(`${content}`);
    return new ContentRef([[component]]);
  }
  _createFromComponent(contentInjector, componentType, context) {
    const elementInjector = Injector.create({
      providers: [{
        provide: NgbActiveOffcanvas,
        useValue: context
      }],
      parent: contentInjector
    });
    const componentRef = createComponent(componentType, {
      environmentInjector: this._applicationRef.injector,
      elementInjector
    });
    const componentNativeEl = componentRef.location.nativeElement;
    this._applicationRef.attachView(componentRef.hostView);
    return new ContentRef([[componentNativeEl]], componentRef.hostView, componentRef);
  }
  _registerOffcanvasRef(ngbOffcanvasRef) {
    const unregisterOffcanvasRef = () => {
      this._offcanvasRef = void 0;
      this._activeInstance.emit(this._offcanvasRef);
    };
    this._offcanvasRef = ngbOffcanvasRef;
    this._activeInstance.emit(this._offcanvasRef);
    ngbOffcanvasRef.result.then(unregisterOffcanvasRef, unregisterOffcanvasRef);
  }
  _registerPanelCmpt(ngbPanelCmpt) {
    this._panelCmpt = ngbPanelCmpt;
    this._activePanelCmptHasChanged.next();
    ngbPanelCmpt.onDestroy(() => {
      this._panelCmpt = void 0;
      this._activePanelCmptHasChanged.next();
    });
  }
  static {
    this.ɵfac = function NgbOffcanvasStack_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbOffcanvasStack)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbOffcanvasStack,
      factory: _NgbOffcanvasStack.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbOffcanvasStack, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var NgbOffcanvas = class _NgbOffcanvas {
  constructor() {
    this._injector = inject(Injector);
    this._offcanvasStack = inject(NgbOffcanvasStack);
    this._config = inject(NgbOffcanvasConfig);
  }
  /**
   * Opens a new offcanvas panel with the specified content and supplied options.
   *
   * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
   * then instances of those components can be injected with an instance of the `NgbActiveOffcanvas` class. You can then
   * use `NgbActiveOffcanvas` methods to close / dismiss offcanvas from "inside" of your component.
   *
   * Also see the [`NgbOffcanvasOptions`](#/components/offcanvas/api#NgbOffcanvasOptions) for the list of supported
   * options.
   */
  open(content, options = {}) {
    const combinedOptions = __spreadValues(__spreadProps(__spreadValues({}, this._config), {
      animation: this._config.animation
    }), options);
    return this._offcanvasStack.open(this._injector, content, combinedOptions);
  }
  /**
   * Returns an observable that holds the active offcanvas instance.
   */
  get activeInstance() {
    return this._offcanvasStack.activeInstance;
  }
  /**
   * Dismisses the currently displayed offcanvas with the supplied reason.
   */
  dismiss(reason) {
    this._offcanvasStack.dismiss(reason);
  }
  /**
   * Indicates if there is currently an open offcanvas in the application.
   */
  hasOpenOffcanvas() {
    return this._offcanvasStack.hasOpenOffcanvas();
  }
  static {
    this.ɵfac = function NgbOffcanvas_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbOffcanvas)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NgbOffcanvas,
      factory: _NgbOffcanvas.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbOffcanvas, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NgbOffcanvasModule = class _NgbOffcanvasModule {
  static {
    this.ɵfac = function NgbOffcanvasModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbOffcanvasModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbOffcanvasModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbOffcanvasModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var NGB_MODULES = [NgbAccordionModule, NgbAlertModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbOffcanvasModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbScrollSpyModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule];
var NgbModule = class _NgbModule {
  static {
    this.ɵfac = function NgbModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgbModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NgbModule,
      imports: [NgbAccordionModule, NgbAlertModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbOffcanvasModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbScrollSpyModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule],
      exports: [NgbAccordionModule, NgbAlertModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbOffcanvasModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbScrollSpyModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [NGB_MODULES, NgbAccordionModule, NgbAlertModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbOffcanvasModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbScrollSpyModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgbModule, [{
    type: NgModule,
    args: [{
      imports: NGB_MODULES,
      exports: NGB_MODULES
    }]
  }], null, null);
})();
export {
  ModalDismissReasons,
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionConfig,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem,
  NgbAccordionModule,
  NgbAccordionToggle,
  NgbActiveModal,
  NgbActiveOffcanvas,
  NgbAlert,
  NgbAlertConfig,
  NgbAlertModule,
  NgbCalendar,
  NgbCalendarBuddhist,
  NgbCalendarEthiopian,
  NgbCalendarGregorian,
  NgbCalendarHebrew,
  NgbCalendarIslamicCivil,
  NgbCalendarIslamicUmalqura,
  NgbCalendarPersian,
  NgbCarousel,
  NgbCarouselConfig,
  NgbCarouselModule,
  NgbCollapse,
  NgbCollapseConfig,
  NgbCollapseModule,
  NgbConfig,
  NgbDate,
  NgbDateAdapter,
  NgbDateNativeAdapter,
  NgbDateNativeUTCAdapter,
  NgbDateParserFormatter,
  NgbDateStructAdapter,
  NgbDatepicker,
  NgbDatepickerConfig,
  NgbDatepickerContent,
  NgbDatepickerI18n,
  NgbDatepickerI18nAmharic,
  NgbDatepickerI18nDefault,
  NgbDatepickerI18nHebrew,
  NgbDatepickerKeyboardService,
  NgbDatepickerModule,
  NgbDatepickerMonth,
  NgbDropdown,
  NgbDropdownAnchor,
  NgbDropdownButtonItem,
  NgbDropdownConfig,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownModule,
  NgbDropdownToggle,
  NgbHighlight,
  NgbInputDatepicker,
  NgbInputDatepickerConfig,
  NgbModal,
  NgbModalConfig,
  NgbModalModule,
  NgbModalRef,
  NgbModule,
  NgbNav,
  NgbNavConfig,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavLinkButton,
  NgbNavModule,
  NgbNavOutlet,
  NgbNavPane,
  NgbOffcanvas,
  NgbOffcanvasConfig,
  NgbOffcanvasModule,
  NgbOffcanvasRef,
  NgbPagination,
  NgbPaginationConfig,
  NgbPaginationEllipsis,
  NgbPaginationFirst,
  NgbPaginationLast,
  NgbPaginationModule,
  NgbPaginationNext,
  NgbPaginationNumber,
  NgbPaginationPages,
  NgbPaginationPrevious,
  NgbPopover,
  NgbPopoverConfig,
  NgbPopoverModule,
  NgbProgressbar,
  NgbProgressbarConfig,
  NgbProgressbarModule,
  NgbProgressbarStacked,
  NgbRating,
  NgbRatingConfig,
  NgbRatingModule,
  NgbScrollSpy,
  NgbScrollSpyConfig,
  NgbScrollSpyFragment,
  NgbScrollSpyItem,
  NgbScrollSpyMenu,
  NgbScrollSpyModule,
  NgbScrollSpyService,
  NgbSlide,
  NgbSlideEventDirection,
  NgbSlideEventSource,
  NgbTimeAdapter,
  NgbTimepicker,
  NgbTimepickerConfig,
  NgbTimepickerI18n,
  NgbTimepickerModule,
  NgbToast,
  NgbToastConfig,
  NgbToastHeader,
  NgbToastModule,
  NgbTooltip,
  NgbTooltipConfig,
  NgbTooltipModule,
  NgbTypeahead,
  NgbTypeaheadConfig,
  NgbTypeaheadModule,
  OffcanvasDismissReasons
};
//# sourceMappingURL=@ng-bootstrap_ng-bootstrap.js.map
