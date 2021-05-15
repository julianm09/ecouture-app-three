_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["amp"],{

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));
var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");
var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");
if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill.default;
}
const data = JSON.parse(document.getElementById("__NEXT_DATA__").textContent);
let {assetPrefix, page} = data;
assetPrefix = assetPrefix || "";
let mostRecentHash = null;
let curHash = __webpack_require__.h();
const hotUpdatePath = assetPrefix + (assetPrefix.endsWith("/") ? "" : "/") + "_next/static/webpack/";
function isUpdateAvailable() {
  return mostRecentHash !== __webpack_require__.h();
}
function canApplyUpdates() {
  return module.hot.status() === "idle";
}
async function tryApplyUpdates() {
  if (!isUpdateAvailable() || !canApplyUpdates()) {
    return;
  }
  try {
    const res = await fetch(`${hotUpdatePath}${curHash}.hot-update.json`);
    const jsonData = await res.json();
    const curPage = page === "/" ? "index" : page;
    const pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some((mod) => {
      return mod.indexOf(`pages${curPage.substr(0, 1) === "/" ? curPage : `/${curPage}`}`) !== -1 || mod.indexOf(`pages${curPage.substr(0, 1) === "/" ? curPage : `/${curPage}`}`.replace(/\//g, "\\")) !== -1;
    });
    if (pageUpdated) {
      document.location.reload(true);
    } else {
      curHash = mostRecentHash;
    }
  } catch (err) {
    console.error("Error occurred checking for update", err);
    document.location.reload(true);
  }
}
(0, _eventsource.getEventSourceWrapper)({path: `${assetPrefix}/_next/webpack-hmr`}).addMessageListener((event) => {
  if (event.data === "\u{1F493}") {
    return;
  }
  try {
    const message = JSON.parse(event.data);
    if (message.action === "sync" || message.action === "built") {
      if (!message.hash) {
        return;
      }
      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === "reloadPage") {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn("Invalid HMR message: " + event.data + "\n" + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, () => page);
(0, _fouc.displayContent)();


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
const eventCallbacks = [];
function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];
  if (!options.timeout) {
    options.timeout = 20 * 1e3;
  }
  init();
  var timer = setInterval(function() {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);
  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }
  function handleOnline() {
    if (options.log)
      console.log("[HMR] connected");
    lastActivity = new Date();
  }
  function handleMessage(event) {
    lastActivity = new Date();
    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }
    eventCallbacks.forEach((cb) => {
      if (!cb.unfiltered && event.data.indexOf("action") === -1)
        return;
      cb(event);
    });
  }
  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }
  return {close: () => {
    clearInterval(timer);
    source.close();
  }, addMessageListener: function(fn) {
    listeners.push(fn);
  }};
}
function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {addMessageListener: (cb) => {
      eventCallbacks.push(cb);
    }};
  }
  return EventSourceWrapper(options);
}


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
exports.__esModule = true;
exports.default = void 0;
var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;
if (AbortController == void 0) {
  AbortController = function() {
    this.signal = null;
    this.abort = function() {
    };
  };
}
function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}
TextDecoderPolyfill.prototype.decode = function(octets) {
  function valid(codePoint2, shift, octetsCount2) {
    if (octetsCount2 === 1) {
      return codePoint2 >= 128 >> shift && codePoint2 << shift <= 2047;
    }
    if (octetsCount2 === 2) {
      return codePoint2 >= 2048 >> shift && codePoint2 << shift <= 55295 || codePoint2 >= 57344 >> shift && codePoint2 << shift <= 65535;
    }
    if (octetsCount2 === 3) {
      return codePoint2 >= 65536 >> shift && codePoint2 << shift <= 1114111;
    }
    throw new Error();
  }
  function octetsCount(bitsNeeded2, codePoint2) {
    if (bitsNeeded2 === 6 * 1) {
      return codePoint2 >> 6 > 15 ? 3 : codePoint2 > 31 ? 2 : 1;
    }
    if (bitsNeeded2 === 6 * 2) {
      return codePoint2 > 15 ? 3 : 2;
    }
    if (bitsNeeded2 === 6 * 3) {
      return 3;
    }
    throw new Error();
  }
  var REPLACER = 65533;
  var string = "";
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;
  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];
    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }
    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }
    if (bitsNeeded === 0) {
      if (codePoint <= 65535) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(55296 + (codePoint - 65535 - 1 >> 10));
        string += String.fromCharCode(56320 + (codePoint - 65535 - 1 & 1023));
      }
    }
  }
  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
};
var supportsStreamOption = function supportsStreamOption2() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode("test"), {stream: true}) === "test";
  } catch (error) {
    console.log(error);
  }
  return false;
};
if (TextDecoder == void 0 || TextEncoder == void 0 || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}
var k = function k2() {
};
function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = "";
  this.readyState = 0;
  this.status = 0;
  this.statusText = "";
  this.responseText = "";
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = "";
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}
XHRWrapper.prototype.open = function(method, url) {
  this._abort(true);
  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;
  this._abort = function(silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }
    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k;
      xhr.abort();
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }
    state = 0;
  };
  var onStart = function onStart2() {
    if (state === 1) {
      var status = 0;
      var statusText = "";
      var contentType = void 0;
      if (!("contentType" in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader("Content-Type");
        } catch (error) {
          status = 0;
          statusText = "";
          contentType = void 0;
        }
      } else {
        status = 200;
        statusText = "OK";
        contentType = xhr.contentType;
      }
      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };
  var onProgress = function onProgress2() {
    onStart();
    if (state === 2 || state === 3) {
      state = 3;
      var responseText = "";
      try {
        responseText = xhr.responseText;
      } catch (error) {
      }
      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };
  var onFinish = function onFinish2() {
    onProgress();
    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      that.readyState = 4;
      that.onreadystatechange();
    }
  };
  var onReadyStateChange = function onReadyStateChange2() {
    if (xhr != void 0) {
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };
  var onTimeout = function onTimeout2() {
    timeout = setTimeout(function() {
      onTimeout2();
    }, 500);
    if (xhr.readyState === 3) {
      onProgress();
    }
  };
  xhr.onload = onFinish;
  xhr.onerror = onFinish;
  xhr.onabort = onFinish;
  if (!("sendAsBinary" in XMLHttpRequest.prototype) && !("mozAnon" in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  }
  xhr.onreadystatechange = onReadyStateChange;
  if ("contentType" in xhr) {
    url += (url.indexOf("?") === -1 ? "?" : "&") + "padding=true";
  }
  xhr.open(method, url, true);
  if ("readyState" in xhr) {
    timeout = setTimeout(function() {
      onTimeout();
    }, 0);
  }
};
XHRWrapper.prototype.abort = function() {
  this._abort(false);
};
XHRWrapper.prototype.getResponseHeader = function(name) {
  return this._contentType;
};
XHRWrapper.prototype.setRequestHeader = function(name, value) {
  var xhr = this._xhr;
  if ("setRequestHeader" in xhr) {
    xhr.setRequestHeader(name, value);
  }
};
XHRWrapper.prototype.getAllResponseHeaders = function() {
  return this._xhr.getAllResponseHeaders != void 0 ? this._xhr.getAllResponseHeaders() : "";
};
XHRWrapper.prototype.send = function() {
  if (!("ontimeout" in XMLHttpRequest.prototype) && document != void 0 && document.readyState != void 0 && document.readyState !== "complete") {
    var that = this;
    that._sendTimeout = setTimeout(function() {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }
  var xhr = this._xhr;
  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;
  try {
    xhr.send(void 0);
  } catch (error1) {
    throw error1;
  }
};
function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function(c) {
    return String.fromCharCode(c.charCodeAt(0) + 32);
  });
}
function HeadersPolyfill(all) {
  var map = Object.create(null);
  var array = all.split("\r\n");
  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(": ");
    var name = parts.shift();
    var value = parts.join(": ");
    map[toLowerCase(name)] = value;
  }
  this._map = map;
}
HeadersPolyfill.prototype.get = function(name) {
  return this._map[toLowerCase(name)];
};
function XHRTransport() {
}
XHRTransport.prototype.open = function(xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open("GET", url);
  var offset = 0;
  xhr.onprogress = function() {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader("Content-Type");
      var headers2 = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers2), function() {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };
  xhr.withCredentials = withCredentials;
  xhr.responseType = "text";
  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }
  xhr.send();
};
function HeadersWrapper(headers) {
  this._headers = headers;
}
HeadersWrapper.prototype.get = function(name) {
  return this._headers.get(name);
};
function FetchTransport() {
}
FetchTransport.prototype.open = function(xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal;
  var textDecoder = new TextDecoder();
  fetch(url, {headers, credentials: withCredentials ? "include" : "same-origin", signal, cache: "no-store"}).then(function(response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get("Content-Type"), new HeadersWrapper(response.headers), function() {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function(resolve, reject) {
      var readNextChunk = function readNextChunk2() {
        reader.read().then(function(result) {
          if (result.done) {
            resolve(void 0);
          } else {
            var chunk = textDecoder.decode(result.value, {stream: true});
            onProgressCallback(chunk);
            readNextChunk2();
          }
        })["catch"](function(error) {
          reject(error);
        });
      };
      readNextChunk();
    });
  }).then(function(result) {
    onFinishCallback();
    return result;
  }, function(error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};
function EventTarget() {
  this._listeners = Object.create(null);
}
function throwError(e) {
  setTimeout(function() {
    throw e;
  }, 0);
}
EventTarget.prototype.dispatchEvent = function(event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];
  if (typeListeners != void 0) {
    var length = typeListeners.length;
    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];
      try {
        if (typeof listener.handleEvent === "function") {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};
EventTarget.prototype.addEventListener = function(type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];
  if (typeListeners == void 0) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }
  var found = false;
  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }
  if (!found) {
    typeListeners.push(listener);
  }
};
EventTarget.prototype.removeEventListener = function(type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];
  if (typeListeners != void 0) {
    var filtered = [];
    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }
    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};
function Event(type) {
  this.type = type;
  this.target = void 0;
}
function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}
MessageEvent.prototype = Object.create(Event.prototype);
function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1e3;
var MAXIMUM_DURATION = 18e6;
var parseDuration = function parseDuration2(value, def) {
  var n = parseInt(value, 10);
  if (n !== n) {
    n = def;
  }
  return clampDuration(n);
};
var clampDuration = function clampDuration2(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};
var fire = function fire2(that, f, event) {
  try {
    if (typeof f === "function") {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};
function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = void 0;
  this.onmessage = void 0;
  this.onerror = void 0;
  this.url = void 0;
  this.readyState = void 0;
  this.withCredentials = void 0;
  this._close = void 0;
  start(this, url, options);
}
var isFetchSupported = fetch != void 0 && Response != void 0 && "body" in Response.prototype;
function start(es, url, options) {
  url = String(url);
  var withCredentials = options != void 0 && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1e3);
  var heartbeatTimeout = options != void 0 && options.heartbeatTimeout != void 0 ? parseDuration(options.heartbeatTimeout, 45e3) : clampDuration(45e3);
  var lastEventId = "";
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != void 0 && options.headers != void 0 ? JSON.parse(JSON.stringify(options.headers)) : void 0;
  var CurrentTransport = options != void 0 && options.Transport != void 0 ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != void 0 && options.Transport != void 0) ? void 0 : new XHRWrapper(new CurrentTransport());
  var transport = xhr == void 0 ? new FetchTransport() : new XHRTransport();
  var cancelFunction = void 0;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = "";
  var lastEventIdBuffer = "";
  var eventTypeBuffer = "";
  var textBuffer = "";
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;
  var onStart = function onStart2(status, statusText, contentType, headers2, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;
      if (status === 200 && contentType != void 0 && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent("open", {status, statusText, headers: headers2});
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = "";
        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, " ");
          }
          message = "EventSource's response has a status " + status + " " + statusText + " that is not 200. Aborting the connection.";
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == void 0 ? "-" : contentType.replace(/\s+/g, " ")) + ". Aborting the connection.";
        }
        throwError(new Error(message));
        close();
        var event = new ConnectionEvent("error", {status, statusText, headers: headers2});
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };
  var onProgress = function onProgress2(textChunk) {
    if (currentState === OPEN) {
      var n = -1;
      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);
        if (c === "\n".charCodeAt(0) || c === "\r".charCodeAt(0)) {
          n = i;
        }
      }
      var chunk = (n !== -1 ? textBuffer : "") + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : "") + textChunk.slice(n + 1);
      if (chunk !== "") {
        wasActivity = true;
      }
      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);
        if (state === AFTER_CR && c === "\n".charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }
          if (c === "\r".charCodeAt(0) || c === "\n".charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }
              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === " ".charCodeAt(0) ? 1 : 0), position);
              if (field === "data") {
                dataBuffer += "\n";
                dataBuffer += value;
              } else if (field === "id") {
                lastEventIdBuffer = value;
              } else if (field === "event") {
                eventTypeBuffer = value;
              } else if (field === "retry") {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === "heartbeatTimeout") {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);
                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function() {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }
            if (state === FIELD_START) {
              if (dataBuffer !== "") {
                lastEventId = lastEventIdBuffer;
                if (eventTypeBuffer === "") {
                  eventTypeBuffer = "message";
                }
                var event = new MessageEvent(eventTypeBuffer, {data: dataBuffer.slice(1), lastEventId: lastEventIdBuffer});
                es.dispatchEvent(event);
                if (eventTypeBuffer === "message") {
                  fire(es, es.onmessage, event);
                }
                if (currentState === CLOSED) {
                  return;
                }
              }
              dataBuffer = "";
              eventTypeBuffer = "";
            }
            state = c === "\r".charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }
            if (state === FIELD) {
              if (c === ":".charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };
  var onFinish = function onFinish2() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      timeout = setTimeout(function() {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event("error");
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };
  var close = function close2() {
    currentState = CLOSED;
    if (cancelFunction != void 0) {
      cancelFunction();
      cancelFunction = void 0;
    }
    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }
    es.readyState = CLOSED;
  };
  var onTimeout = function onTimeout2() {
    timeout = 0;
    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != void 0) {
        throwError(new Error("No activity within " + heartbeatTimeout + " milliseconds. Reconnecting."));
        cancelFunction();
        cancelFunction = void 0;
      } else {
        wasActivity = false;
        timeout = setTimeout(function() {
          onTimeout2();
        }, heartbeatTimeout);
      }
      return;
    }
    wasActivity = false;
    timeout = setTimeout(function() {
      onTimeout2();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = "";
    eventTypeBuffer = "";
    lastEventIdBuffer = lastEventId;
    textBuffer = "";
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START;
    var requestURL = url;
    if (url.slice(0, 5) !== "data:" && url.slice(0, 5) !== "blob:") {
      if (lastEventId !== "") {
        requestURL += (url.indexOf("?") === -1 ? "?" : "&") + "lastEventId=" + encodeURIComponent(lastEventId);
      }
    }
    var requestHeaders = {};
    requestHeaders["Accept"] = "text/event-stream";
    if (headers != void 0) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }
    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };
  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}
EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;
EventSourcePolyfill.prototype.close = function() {
  this._close();
};
EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = void 0;
var _default = EventSourcePolyfill;
exports.default = _default;


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
exports.__esModule = true;
exports.displayContent = displayContent;
function displayContent(callback) {
  ;
  (window.requestAnimationFrame || setTimeout)(function() {
    for (var x = document.querySelectorAll("[data-next-hide-fouc]"), i = x.length; i--; ) {
      x[i].parentNode.removeChild(x[i]);
    }
    if (callback) {
      callback();
    }
  });
}


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;
var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
let evtSource;
let currentPage;
exports.currentPage = currentPage;
function closePing() {
  if (evtSource)
    evtSource.close();
  evtSource = null;
}
function setupPing(assetPrefix, pathnameFn, retry) {
  const pathname = pathnameFn();
  if (pathname === currentPage && !retry)
    return;
  exports.currentPage = currentPage = pathname;
  closePing();
  const url = `${assetPrefix}/_next/webpack-hmr?page=${currentPage}`;
  evtSource = (0, _eventsource.getEventSourceWrapper)({path: url, timeout: 5e3, ondemand: 1});
  evtSource.addMessageListener((event) => {
    if (event.data.indexOf("{") === -1)
      return;
    try {
      const payload = JSON.parse(event.data);
      if (payload.invalid) {
        fetch(location.href, {credentials: "same-origin"}).then((pageRes) => {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error("on-demand-entries failed to parse response", err);
    }
  });
}


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
/*!***********************************!*\
  !*** (webpack)/webpack/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 880:
/***/ (function(module) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(880);
/******/ })()
;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ })

},[["./node_modules/next/dist/client/dev/amp-dev.js","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L2FtcC1kZXYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZm91Yy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL3dlYnBhY2svbW9kdWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWEsSUFBSSx5QkFBdUIsbUJBQU8sQ0FBQyxzSUFBOEM7QUFBRSxJQUFJLHVCQUFxQix1QkFBdUIsbUJBQU8sQ0FBQyw2RkFBeUI7QUFBRyxJQUFJLGVBQWEsbUJBQU8sQ0FBQyxxR0FBNkI7QUFBRSxJQUFJLHdCQUFzQixtQkFBTyxDQUFDLGlHQUEyQjtBQUFFLElBQUksUUFBTSxtQkFBTyxDQUFDLDJEQUFRO0FBQWdDLElBQUcsQ0FBQyxPQUFPLGFBQVk7QUFBQyxTQUFPLGNBQVkscUJBQXFCO0FBQUE7QUFBUyxNQUFNLE9BQUssS0FBSyxNQUFNLFNBQVMsZUFBZSxpQkFBaUI7QUFBYSxJQUFHLENBQUMsYUFBWSxRQUFNO0FBQUssY0FBWSxlQUFhO0FBQUcsSUFBSSxpQkFBZTtBQUFt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QUVBLHdDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvYW1wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO3ZhciBfZXZlbnRTb3VyY2VQb2x5ZmlsbD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2V2ZW50LXNvdXJjZS1wb2x5ZmlsbFwiKSk7dmFyIF9ldmVudHNvdXJjZT1yZXF1aXJlKFwiLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlXCIpO3ZhciBfb25EZW1hbmRFbnRyaWVzVXRpbHM9cmVxdWlyZShcIi4vb24tZGVtYW5kLWVudHJpZXMtdXRpbHNcIik7dmFyIF9mb3VjPXJlcXVpcmUoXCIuL2ZvdWNcIik7LyogZ2xvYmFscyBfX3dlYnBhY2tfaGFzaF9fICovaWYoIXdpbmRvdy5FdmVudFNvdXJjZSl7d2luZG93LkV2ZW50U291cmNlPV9ldmVudFNvdXJjZVBvbHlmaWxsLmRlZmF1bHQ7fWNvbnN0IGRhdGE9SlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19ORVhUX0RBVEFfXycpLnRleHRDb250ZW50KTtsZXR7YXNzZXRQcmVmaXgscGFnZX09ZGF0YTthc3NldFByZWZpeD1hc3NldFByZWZpeHx8Jyc7bGV0IG1vc3RSZWNlbnRIYXNoPW51bGw7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovbGV0IGN1ckhhc2g9X193ZWJwYWNrX2hhc2hfXztjb25zdCBob3RVcGRhdGVQYXRoPWFzc2V0UHJlZml4Kyhhc3NldFByZWZpeC5lbmRzV2l0aCgnLycpPycnOicvJykrJ19uZXh0L3N0YXRpYy93ZWJwYWNrLyc7Ly8gSXMgdGhlcmUgYSBuZXdlciB2ZXJzaW9uIG9mIHRoaXMgY29kZSBhdmFpbGFibGU/XG5mdW5jdGlvbiBpc1VwZGF0ZUF2YWlsYWJsZSgpey8vIF9fd2VicGFja19oYXNoX18gaXMgdGhlIGhhc2ggb2YgdGhlIGN1cnJlbnQgY29tcGlsYXRpb24uXG4vLyBJdCdzIGEgZ2xvYmFsIHZhcmlhYmxlIGluamVjdGVkIGJ5IFdlYnBhY2suXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9yZXR1cm4gbW9zdFJlY2VudEhhc2ghPT1fX3dlYnBhY2tfaGFzaF9fO30vLyBXZWJwYWNrIGRpc2FsbG93cyB1cGRhdGVzIGluIG90aGVyIHN0YXRlcy5cbmZ1bmN0aW9uIGNhbkFwcGx5VXBkYXRlcygpe3JldHVybiBtb2R1bGUuaG90LnN0YXR1cygpPT09J2lkbGUnO30vLyBUaGlzIGZ1bmN0aW9uIHJlYWRzIGNvZGUgdXBkYXRlcyBvbiB0aGUgZmx5IGFuZCBoYXJkXG4vLyByZWxvYWRzIHRoZSBwYWdlIHdoZW4gaXQgaGFzIGNoYW5nZWQuXG5hc3luYyBmdW5jdGlvbiB0cnlBcHBseVVwZGF0ZXMoKXtpZighaXNVcGRhdGVBdmFpbGFibGUoKXx8IWNhbkFwcGx5VXBkYXRlcygpKXtyZXR1cm47fXRyeXtjb25zdCByZXM9YXdhaXQgZmV0Y2goYCR7aG90VXBkYXRlUGF0aH0ke2N1ckhhc2h9LmhvdC11cGRhdGUuanNvbmApO2NvbnN0IGpzb25EYXRhPWF3YWl0IHJlcy5qc29uKCk7Y29uc3QgY3VyUGFnZT1wYWdlPT09Jy8nPydpbmRleCc6cGFnZTsvLyB3ZWJwYWNrIDUgdXNlcyBhbiBhcnJheSBpbnN0ZWFkXG5jb25zdCBwYWdlVXBkYXRlZD0oQXJyYXkuaXNBcnJheShqc29uRGF0YS5jKT9qc29uRGF0YS5jOk9iamVjdC5rZXlzKGpzb25EYXRhLmMpKS5zb21lKG1vZD0+e3JldHVybiBtb2QuaW5kZXhPZihgcGFnZXMke2N1clBhZ2Uuc3Vic3RyKDAsMSk9PT0nLyc/Y3VyUGFnZTpgLyR7Y3VyUGFnZX1gfWApIT09LTF8fG1vZC5pbmRleE9mKGBwYWdlcyR7Y3VyUGFnZS5zdWJzdHIoMCwxKT09PScvJz9jdXJQYWdlOmAvJHtjdXJQYWdlfWB9YC5yZXBsYWNlKC9cXC8vZywnXFxcXCcpKSE9PS0xO30pO2lmKHBhZ2VVcGRhdGVkKXtkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7fWVsc2V7Y3VySGFzaD1tb3N0UmVjZW50SGFzaDt9fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJyZWQgY2hlY2tpbmcgZm9yIHVwZGF0ZScsZXJyKTtkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7fX0oMCxfZXZlbnRzb3VyY2UuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKSh7cGF0aDpgJHthc3NldFByZWZpeH0vX25leHQvd2VicGFjay1obXJgfSkuYWRkTWVzc2FnZUxpc3RlbmVyKGV2ZW50PT57aWYoZXZlbnQuZGF0YT09PSdcXHVEODNEXFx1REM5Mycpe3JldHVybjt9dHJ5e2NvbnN0IG1lc3NhZ2U9SlNPTi5wYXJzZShldmVudC5kYXRhKTtpZihtZXNzYWdlLmFjdGlvbj09PSdzeW5jJ3x8bWVzc2FnZS5hY3Rpb249PT0nYnVpbHQnKXtpZighbWVzc2FnZS5oYXNoKXtyZXR1cm47fW1vc3RSZWNlbnRIYXNoPW1lc3NhZ2UuaGFzaDt0cnlBcHBseVVwZGF0ZXMoKTt9ZWxzZSBpZihtZXNzYWdlLmFjdGlvbj09PSdyZWxvYWRQYWdlJyl7ZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpO319Y2F0Y2goZXgpe2NvbnNvbGUud2FybignSW52YWxpZCBITVIgbWVzc2FnZTogJytldmVudC5kYXRhKydcXG4nK2V4KTt9fSk7KDAsX29uRGVtYW5kRW50cmllc1V0aWxzLnNldHVwUGluZykoYXNzZXRQcmVmaXgsKCk9PnBhZ2UpOygwLF9mb3VjLmRpc3BsYXlDb250ZW50KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW1wLWRldi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldEV2ZW50U291cmNlV3JhcHBlcj1nZXRFdmVudFNvdXJjZVdyYXBwZXI7Y29uc3QgZXZlbnRDYWxsYmFja3M9W107ZnVuY3Rpb24gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpe3ZhciBzb3VyY2U7dmFyIGxhc3RBY3Rpdml0eT1uZXcgRGF0ZSgpO3ZhciBsaXN0ZW5lcnM9W107aWYoIW9wdGlvbnMudGltZW91dCl7b3B0aW9ucy50aW1lb3V0PTIwKjEwMDA7fWluaXQoKTt2YXIgdGltZXI9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtpZihuZXcgRGF0ZSgpLWxhc3RBY3Rpdml0eT5vcHRpb25zLnRpbWVvdXQpe2hhbmRsZURpc2Nvbm5lY3QoKTt9fSxvcHRpb25zLnRpbWVvdXQvMik7ZnVuY3Rpb24gaW5pdCgpe3NvdXJjZT1uZXcgd2luZG93LkV2ZW50U291cmNlKG9wdGlvbnMucGF0aCk7c291cmNlLm9ub3Blbj1oYW5kbGVPbmxpbmU7c291cmNlLm9uZXJyb3I9aGFuZGxlRGlzY29ubmVjdDtzb3VyY2Uub25tZXNzYWdlPWhhbmRsZU1lc3NhZ2U7fWZ1bmN0aW9uIGhhbmRsZU9ubGluZSgpe2lmKG9wdGlvbnMubG9nKWNvbnNvbGUubG9nKCdbSE1SXSBjb25uZWN0ZWQnKTtsYXN0QWN0aXZpdHk9bmV3IERhdGUoKTt9ZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCl7bGFzdEFjdGl2aXR5PW5ldyBEYXRlKCk7Zm9yKHZhciBpPTA7aTxsaXN0ZW5lcnMubGVuZ3RoO2krKyl7bGlzdGVuZXJzW2ldKGV2ZW50KTt9ZXZlbnRDYWxsYmFja3MuZm9yRWFjaChjYj0+e2lmKCFjYi51bmZpbHRlcmVkJiZldmVudC5kYXRhLmluZGV4T2YoJ2FjdGlvbicpPT09LTEpcmV0dXJuO2NiKGV2ZW50KTt9KTt9ZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpe2NsZWFySW50ZXJ2YWwodGltZXIpO3NvdXJjZS5jbG9zZSgpO3NldFRpbWVvdXQoaW5pdCxvcHRpb25zLnRpbWVvdXQpO31yZXR1cm57Y2xvc2U6KCk9PntjbGVhckludGVydmFsKHRpbWVyKTtzb3VyY2UuY2xvc2UoKTt9LGFkZE1lc3NhZ2VMaXN0ZW5lcjpmdW5jdGlvbihmbil7bGlzdGVuZXJzLnB1c2goZm4pO319O31mdW5jdGlvbiBnZXRFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucyl7aWYoIW9wdGlvbnMub25kZW1hbmQpe3JldHVybnthZGRNZXNzYWdlTGlzdGVuZXI6Y2I9PntldmVudENhbGxiYWNrcy5wdXNoKGNiKTt9fTt9cmV0dXJuIEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudHNvdXJjZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwOy8qIGVzbGludC1kaXNhYmxlICovIC8vIEltcHJvdmVkIHZlcnNpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL1lhZmZsZS9FdmVudFNvdXJjZS9cbi8vIEF2YWlsYWJsZSB1bmRlciBNSVQgTGljZW5zZSAoTUlUKVxuLy8gT25seSB0cmllcyB0byBzdXBwb3J0IElFMTEgYW5kIG5vdGhpbmcgYmVsb3dcbnZhciBkb2N1bWVudD13aW5kb3cuZG9jdW1lbnQ7dmFyIFJlc3BvbnNlPXdpbmRvdy5SZXNwb25zZTt2YXIgVGV4dERlY29kZXI9d2luZG93LlRleHREZWNvZGVyO3ZhciBUZXh0RW5jb2Rlcj13aW5kb3cuVGV4dEVuY29kZXI7dmFyIEFib3J0Q29udHJvbGxlcj13aW5kb3cuQWJvcnRDb250cm9sbGVyO2lmKEFib3J0Q29udHJvbGxlcj09dW5kZWZpbmVkKXtBYm9ydENvbnRyb2xsZXI9ZnVuY3Rpb24oKXt0aGlzLnNpZ25hbD1udWxsO3RoaXMuYWJvcnQ9ZnVuY3Rpb24oKXt9O307fWZ1bmN0aW9uIFRleHREZWNvZGVyUG9seWZpbGwoKXt0aGlzLmJpdHNOZWVkZWQ9MDt0aGlzLmNvZGVQb2ludD0wO31UZXh0RGVjb2RlclBvbHlmaWxsLnByb3RvdHlwZS5kZWNvZGU9ZnVuY3Rpb24ob2N0ZXRzKXtmdW5jdGlvbiB2YWxpZChjb2RlUG9pbnQsc2hpZnQsb2N0ZXRzQ291bnQpe2lmKG9jdGV0c0NvdW50PT09MSl7cmV0dXJuIGNvZGVQb2ludD49MHgwMDgwPj5zaGlmdCYmY29kZVBvaW50PDxzaGlmdDw9MHgwN2ZmO31pZihvY3RldHNDb3VudD09PTIpe3JldHVybiBjb2RlUG9pbnQ+PTB4MDgwMD4+c2hpZnQmJmNvZGVQb2ludDw8c2hpZnQ8PTB4ZDdmZnx8Y29kZVBvaW50Pj0weGUwMDA+PnNoaWZ0JiZjb2RlUG9pbnQ8PHNoaWZ0PD0weGZmZmY7fWlmKG9jdGV0c0NvdW50PT09Myl7cmV0dXJuIGNvZGVQb2ludD49MHgwMTAwMDA+PnNoaWZ0JiZjb2RlUG9pbnQ8PHNoaWZ0PD0weDEwZmZmZjt9dGhyb3cgbmV3IEVycm9yKCk7fWZ1bmN0aW9uIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsY29kZVBvaW50KXtpZihiaXRzTmVlZGVkPT09NioxKXtyZXR1cm4gY29kZVBvaW50Pj42PjE1PzM6Y29kZVBvaW50PjMxPzI6MTt9aWYoYml0c05lZWRlZD09PTYqMil7cmV0dXJuIGNvZGVQb2ludD4xNT8zOjI7fWlmKGJpdHNOZWVkZWQ9PT02KjMpe3JldHVybiAzO310aHJvdyBuZXcgRXJyb3IoKTt9dmFyIFJFUExBQ0VSPTB4ZmZmZDt2YXIgc3RyaW5nPScnO3ZhciBiaXRzTmVlZGVkPXRoaXMuYml0c05lZWRlZDt2YXIgY29kZVBvaW50PXRoaXMuY29kZVBvaW50O2Zvcih2YXIgaT0wO2k8b2N0ZXRzLmxlbmd0aDtpKz0xKXt2YXIgb2N0ZXQ9b2N0ZXRzW2ldO2lmKGJpdHNOZWVkZWQhPT0wKXtpZihvY3RldDwxMjh8fG9jdGV0PjE5MXx8IXZhbGlkKGNvZGVQb2ludDw8NnxvY3RldCY2MyxiaXRzTmVlZGVkLTYsb2N0ZXRzQ291bnQoYml0c05lZWRlZCxjb2RlUG9pbnQpKSl7Yml0c05lZWRlZD0wO2NvZGVQb2ludD1SRVBMQUNFUjtzdHJpbmcrPVN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KTt9fWlmKGJpdHNOZWVkZWQ9PT0wKXtpZihvY3RldD49MCYmb2N0ZXQ8PTEyNyl7Yml0c05lZWRlZD0wO2NvZGVQb2ludD1vY3RldDt9ZWxzZSBpZihvY3RldD49MTkyJiZvY3RldDw9MjIzKXtiaXRzTmVlZGVkPTYqMTtjb2RlUG9pbnQ9b2N0ZXQmMzE7fWVsc2UgaWYob2N0ZXQ+PTIyNCYmb2N0ZXQ8PTIzOSl7Yml0c05lZWRlZD02KjI7Y29kZVBvaW50PW9jdGV0JjE1O31lbHNlIGlmKG9jdGV0Pj0yNDAmJm9jdGV0PD0yNDcpe2JpdHNOZWVkZWQ9NiozO2NvZGVQb2ludD1vY3RldCY3O31lbHNle2JpdHNOZWVkZWQ9MDtjb2RlUG9pbnQ9UkVQTEFDRVI7fWlmKGJpdHNOZWVkZWQhPT0wJiYhdmFsaWQoY29kZVBvaW50LGJpdHNOZWVkZWQsb2N0ZXRzQ291bnQoYml0c05lZWRlZCxjb2RlUG9pbnQpKSl7Yml0c05lZWRlZD0wO2NvZGVQb2ludD1SRVBMQUNFUjt9fWVsc2V7Yml0c05lZWRlZC09Njtjb2RlUG9pbnQ9Y29kZVBvaW50PDw2fG9jdGV0JjYzO31pZihiaXRzTmVlZGVkPT09MCl7aWYoY29kZVBvaW50PD0weGZmZmYpe3N0cmluZys9U3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO31lbHNle3N0cmluZys9U3RyaW5nLmZyb21DaGFyQ29kZSgweGQ4MDArKGNvZGVQb2ludC0weGZmZmYtMT4+MTApKTtzdHJpbmcrPVN0cmluZy5mcm9tQ2hhckNvZGUoMHhkYzAwKyhjb2RlUG9pbnQtMHhmZmZmLTEmMHgzZmYpKTt9fX10aGlzLmJpdHNOZWVkZWQ9Yml0c05lZWRlZDt0aGlzLmNvZGVQb2ludD1jb2RlUG9pbnQ7cmV0dXJuIHN0cmluZzt9Oy8vIEZpcmVmb3ggPCAzOCB0aHJvd3MgYW4gZXJyb3Igd2l0aCBzdHJlYW0gb3B0aW9uXG52YXIgc3VwcG9ydHNTdHJlYW1PcHRpb249ZnVuY3Rpb24gc3VwcG9ydHNTdHJlYW1PcHRpb24oKXt0cnl7cmV0dXJuIG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoJ3Rlc3QnKSx7c3RyZWFtOnRydWV9KT09PSd0ZXN0Jzt9Y2F0Y2goZXJyb3Ipe2NvbnNvbGUubG9nKGVycm9yKTt9cmV0dXJuIGZhbHNlO307Ly8gSUUsIEVkZ2VcbmlmKFRleHREZWNvZGVyPT11bmRlZmluZWR8fFRleHRFbmNvZGVyPT11bmRlZmluZWR8fCFzdXBwb3J0c1N0cmVhbU9wdGlvbigpKXtUZXh0RGVjb2Rlcj1UZXh0RGVjb2RlclBvbHlmaWxsO312YXIgaz1mdW5jdGlvbiBrKCl7fTtmdW5jdGlvbiBYSFJXcmFwcGVyKHhocil7dGhpcy53aXRoQ3JlZGVudGlhbHM9ZmFsc2U7dGhpcy5yZXNwb25zZVR5cGU9Jyc7dGhpcy5yZWFkeVN0YXRlPTA7dGhpcy5zdGF0dXM9MDt0aGlzLnN0YXR1c1RleHQ9Jyc7dGhpcy5yZXNwb25zZVRleHQ9Jyc7dGhpcy5vbnByb2dyZXNzPWs7dGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2U9azt0aGlzLl9jb250ZW50VHlwZT0nJzt0aGlzLl94aHI9eGhyO3RoaXMuX3NlbmRUaW1lb3V0PTA7dGhpcy5fYWJvcnQ9azt9WEhSV3JhcHBlci5wcm90b3R5cGUub3Blbj1mdW5jdGlvbihtZXRob2QsdXJsKXt0aGlzLl9hYm9ydCh0cnVlKTt2YXIgdGhhdD10aGlzO3ZhciB4aHI9dGhpcy5feGhyO3ZhciBzdGF0ZT0xO3ZhciB0aW1lb3V0PTA7dGhpcy5fYWJvcnQ9ZnVuY3Rpb24oc2lsZW50KXtpZih0aGF0Ll9zZW5kVGltZW91dCE9PTApe2NsZWFyVGltZW91dCh0aGF0Ll9zZW5kVGltZW91dCk7dGhhdC5fc2VuZFRpbWVvdXQ9MDt9aWYoc3RhdGU9PT0xfHxzdGF0ZT09PTJ8fHN0YXRlPT09Myl7c3RhdGU9NDt4aHIub25sb2FkPWs7eGhyLm9uZXJyb3I9azt4aHIub25hYm9ydD1rO3hoci5vbnByb2dyZXNzPWs7eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZT1rOy8vIElFIDggLSA5OiBYRG9tYWluUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XG4vLyBPcGVyYSA8IDEwOiBYTUxIdHRwUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XG54aHIuYWJvcnQoKTtpZih0aW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO3RpbWVvdXQ9MDt9aWYoIXNpbGVudCl7dGhhdC5yZWFkeVN0YXRlPTQ7dGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTt9fXN0YXRlPTA7fTt2YXIgb25TdGFydD1mdW5jdGlvbiBvblN0YXJ0KCl7aWYoc3RhdGU9PT0xKXsvLyBzdGF0ZSA9IDI7XG52YXIgc3RhdHVzPTA7dmFyIHN0YXR1c1RleHQ9Jyc7dmFyIGNvbnRlbnRUeXBlPXVuZGVmaW5lZDtpZighKCdjb250ZW50VHlwZSdpbiB4aHIpKXt0cnl7c3RhdHVzPXhoci5zdGF0dXM7c3RhdHVzVGV4dD14aHIuc3RhdHVzVGV4dDtjb250ZW50VHlwZT14aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO31jYXRjaChlcnJvcil7Ly8gSUUgPCAxMCB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMiB8fCB4aHIucmVhZHlTdGF0ZSA9PT0gM1xuLy8gT3BlcmEgPCAxMSB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMlxuLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MTIxXG5zdGF0dXM9MDtzdGF0dXNUZXh0PScnO2NvbnRlbnRUeXBlPXVuZGVmaW5lZDsvLyBGaXJlZm94IDwgMTQsIENocm9tZSA/LCBTYWZhcmkgP1xuLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5NjU4XG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Nzc4NTRcbn19ZWxzZXtzdGF0dXM9MjAwO3N0YXR1c1RleHQ9J09LJztjb250ZW50VHlwZT14aHIuY29udGVudFR5cGU7fWlmKHN0YXR1cyE9PTApe3N0YXRlPTI7dGhhdC5yZWFkeVN0YXRlPTI7dGhhdC5zdGF0dXM9c3RhdHVzO3RoYXQuc3RhdHVzVGV4dD1zdGF0dXNUZXh0O3RoYXQuX2NvbnRlbnRUeXBlPWNvbnRlbnRUeXBlO3RoYXQub25yZWFkeXN0YXRlY2hhbmdlKCk7fX19O3ZhciBvblByb2dyZXNzPWZ1bmN0aW9uIG9uUHJvZ3Jlc3MoKXtvblN0YXJ0KCk7aWYoc3RhdGU9PT0yfHxzdGF0ZT09PTMpe3N0YXRlPTM7dmFyIHJlc3BvbnNlVGV4dD0nJzt0cnl7cmVzcG9uc2VUZXh0PXhoci5yZXNwb25zZVRleHQ7fWNhdGNoKGVycm9yKXsvLyBJRSA4IC0gOSB3aXRoIFhNTEh0dHBSZXF1ZXN0XG59dGhhdC5yZWFkeVN0YXRlPTM7dGhhdC5yZXNwb25zZVRleHQ9cmVzcG9uc2VUZXh0O3RoYXQub25wcm9ncmVzcygpO319O3ZhciBvbkZpbmlzaD1mdW5jdGlvbiBvbkZpbmlzaCgpey8vIEZpcmVmb3ggNTIgZmlyZXMgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSA0KSB3aXRob3V0IGZpbmFsIFwicmVhZHlzdGF0ZWNoYW5nZVwiICh4aHIucmVhZHlTdGF0ZSA9PT0gMylcbi8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1wiXG5vblByb2dyZXNzKCk7aWYoc3RhdGU9PT0xfHxzdGF0ZT09PTJ8fHN0YXRlPT09Myl7c3RhdGU9NDtpZih0aW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO3RpbWVvdXQ9MDt9dGhhdC5yZWFkeVN0YXRlPTQ7dGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTt9fTt2YXIgb25SZWFkeVN0YXRlQ2hhbmdlPWZ1bmN0aW9uIG9uUmVhZHlTdGF0ZUNoYW5nZSgpe2lmKHhociE9dW5kZWZpbmVkKXsvLyBPcGVyYSAxMlxuaWYoeGhyLnJlYWR5U3RhdGU9PT00KXtvbkZpbmlzaCgpO31lbHNlIGlmKHhoci5yZWFkeVN0YXRlPT09Myl7b25Qcm9ncmVzcygpO31lbHNlIGlmKHhoci5yZWFkeVN0YXRlPT09Mil7b25TdGFydCgpO319fTt2YXIgb25UaW1lb3V0PWZ1bmN0aW9uIG9uVGltZW91dCgpe3RpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe29uVGltZW91dCgpO30sNTAwKTtpZih4aHIucmVhZHlTdGF0ZT09PTMpe29uUHJvZ3Jlc3MoKTt9fTsvLyBYRG9tYWluUmVxdWVzdCNhYm9ydCByZW1vdmVzIG9ucHJvZ3Jlc3MsIG9uZXJyb3IsIG9ubG9hZFxueGhyLm9ubG9hZD1vbkZpbmlzaDt4aHIub25lcnJvcj1vbkZpbmlzaDsvLyBpbXByb3BlciBmaXggdG8gbWF0Y2ggRmlyZWZveCBiZWhhdmlvciwgYnV0IGl0IGlzIGJldHRlciB0aGFuIGp1c3QgaWdub3JlIGFib3J0XG4vLyBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzY4NTk2XG4vLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODAyMDBcbi8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNTM1NzBcbi8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1xueGhyLm9uYWJvcnQ9b25GaW5pc2g7Ly8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzM2NzIzXG5pZighKCdzZW5kQXNCaW5hcnknaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSYmISgnbW96QW5vbidpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpKXt4aHIub25wcm9ncmVzcz1vblByb2dyZXNzO30vLyBJRSA4IC0gOSAoWE1MSFRUUFJlcXVlc3QpXG4vLyBPcGVyYSA8IDEyXG4vLyBGaXJlZm94IDwgMy41XG4vLyBGaXJlZm94IDMuNSAtIDMuNiAtID8gPCA5LjBcbi8vIG9ucHJvZ3Jlc3MgaXMgbm90IGZpcmVkIHNvbWV0aW1lcyBvciBkZWxheWVkXG4vLyBzZWUgYWxzbyAjNjRcbnhoci5vbnJlYWR5c3RhdGVjaGFuZ2U9b25SZWFkeVN0YXRlQ2hhbmdlO2lmKCdjb250ZW50VHlwZSdpbiB4aHIpe3VybCs9KHVybC5pbmRleE9mKCc/Jyk9PT0tMT8nPyc6JyYnKSsncGFkZGluZz10cnVlJzt9eGhyLm9wZW4obWV0aG9kLHVybCx0cnVlKTtpZigncmVhZHlTdGF0ZSdpbiB4aHIpey8vIHdvcmthcm91bmQgZm9yIE9wZXJhIDEyIGlzc3VlIHdpdGggXCJwcm9ncmVzc1wiIGV2ZW50c1xuLy8gIzkxXG50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LDApO319O1hIUldyYXBwZXIucHJvdG90eXBlLmFib3J0PWZ1bmN0aW9uKCl7dGhpcy5fYWJvcnQoZmFsc2UpO307WEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VIZWFkZXI9ZnVuY3Rpb24obmFtZSl7cmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlO307WEhSV3JhcHBlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlcj1mdW5jdGlvbihuYW1lLHZhbHVlKXt2YXIgeGhyPXRoaXMuX3hocjtpZignc2V0UmVxdWVzdEhlYWRlcidpbiB4aHIpe3hoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsdmFsdWUpO319O1hIUldyYXBwZXIucHJvdG90eXBlLmdldEFsbFJlc3BvbnNlSGVhZGVycz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIT11bmRlZmluZWQ/dGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpOicnO307WEhSV3JhcHBlci5wcm90b3R5cGUuc2VuZD1mdW5jdGlvbigpey8vIGxvYWRpbmcgaW5kaWNhdG9yIGluIFNhZmFyaSA8ID8gKDYpLCBDaHJvbWUgPCAxNCwgRmlyZWZveFxuaWYoISgnb250aW1lb3V0J2luIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkmJmRvY3VtZW50IT11bmRlZmluZWQmJmRvY3VtZW50LnJlYWR5U3RhdGUhPXVuZGVmaW5lZCYmZG9jdW1lbnQucmVhZHlTdGF0ZSE9PSdjb21wbGV0ZScpe3ZhciB0aGF0PXRoaXM7dGhhdC5fc2VuZFRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQuX3NlbmRUaW1lb3V0PTA7dGhhdC5zZW5kKCk7fSw0KTtyZXR1cm47fXZhciB4aHI9dGhpcy5feGhyOy8vIHdpdGhDcmVkZW50aWFscyBzaG91bGQgYmUgc2V0IGFmdGVyIFwib3BlblwiIGZvciBTYWZhcmkgYW5kIENocm9tZSAoPCAxOSA/KVxueGhyLndpdGhDcmVkZW50aWFscz10aGlzLndpdGhDcmVkZW50aWFsczt4aHIucmVzcG9uc2VUeXBlPXRoaXMucmVzcG9uc2VUeXBlO3RyeXsvLyB4aHIuc2VuZCgpOyB0aHJvd3MgXCJOb3QgZW5vdWdoIGFyZ3VtZW50c1wiIGluIEZpcmVmb3ggMy4wXG54aHIuc2VuZCh1bmRlZmluZWQpO31jYXRjaChlcnJvcjEpey8vIFNhZmFyaSA1LjEuNywgT3BlcmEgMTJcbnRocm93IGVycm9yMTt9fTtmdW5jdGlvbiB0b0xvd2VyQ2FzZShuYW1lKXtyZXR1cm4gbmFtZS5yZXBsYWNlKC9bQS1aXS9nLGZ1bmN0aW9uKGMpe3JldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMuY2hhckNvZGVBdCgwKSsweDIwKTt9KTt9ZnVuY3Rpb24gSGVhZGVyc1BvbHlmaWxsKGFsbCl7Ly8gR2V0IGhlYWRlcnM6IGltcGxlbWVudGVkIGFjY29yZGluZyB0byBtb3ppbGxhJ3MgZXhhbXBsZSBjb2RlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvZ2V0QWxsUmVzcG9uc2VIZWFkZXJzI0V4YW1wbGVcbnZhciBtYXA9T2JqZWN0LmNyZWF0ZShudWxsKTt2YXIgYXJyYXk9YWxsLnNwbGl0KCdcXHJcXG4nKTtmb3IodmFyIGk9MDtpPGFycmF5Lmxlbmd0aDtpKz0xKXt2YXIgbGluZT1hcnJheVtpXTt2YXIgcGFydHM9bGluZS5zcGxpdCgnOiAnKTt2YXIgbmFtZT1wYXJ0cy5zaGlmdCgpO3ZhciB2YWx1ZT1wYXJ0cy5qb2luKCc6ICcpO21hcFt0b0xvd2VyQ2FzZShuYW1lKV09dmFsdWU7fXRoaXMuX21hcD1tYXA7fUhlYWRlcnNQb2x5ZmlsbC5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKG5hbWUpe3JldHVybiB0aGlzLl9tYXBbdG9Mb3dlckNhc2UobmFtZSldO307ZnVuY3Rpb24gWEhSVHJhbnNwb3J0KCl7fVhIUlRyYW5zcG9ydC5wcm90b3R5cGUub3Blbj1mdW5jdGlvbih4aHIsb25TdGFydENhbGxiYWNrLG9uUHJvZ3Jlc3NDYWxsYmFjayxvbkZpbmlzaENhbGxiYWNrLHVybCx3aXRoQ3JlZGVudGlhbHMsaGVhZGVycyl7eGhyLm9wZW4oJ0dFVCcsdXJsKTt2YXIgb2Zmc2V0PTA7eGhyLm9ucHJvZ3Jlc3M9ZnVuY3Rpb24oKXt2YXIgcmVzcG9uc2VUZXh0PXhoci5yZXNwb25zZVRleHQ7dmFyIGNodW5rPXJlc3BvbnNlVGV4dC5zbGljZShvZmZzZXQpO29mZnNldCs9Y2h1bmsubGVuZ3RoO29uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuayk7fTt4aHIub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYoeGhyLnJlYWR5U3RhdGU9PT0yKXt2YXIgc3RhdHVzPXhoci5zdGF0dXM7dmFyIHN0YXR1c1RleHQ9eGhyLnN0YXR1c1RleHQ7dmFyIGNvbnRlbnRUeXBlPXhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7dmFyIGhlYWRlcnM9eGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO29uU3RhcnRDYWxsYmFjayhzdGF0dXMsc3RhdHVzVGV4dCxjb250ZW50VHlwZSxuZXcgSGVhZGVyc1BvbHlmaWxsKGhlYWRlcnMpLGZ1bmN0aW9uKCl7eGhyLmFib3J0KCk7fSk7fWVsc2UgaWYoeGhyLnJlYWR5U3RhdGU9PT00KXtvbkZpbmlzaENhbGxiYWNrKCk7fX07eGhyLndpdGhDcmVkZW50aWFscz13aXRoQ3JlZGVudGlhbHM7eGhyLnJlc3BvbnNlVHlwZT0ndGV4dCc7Zm9yKHZhciBuYW1lIGluIGhlYWRlcnMpe2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLG5hbWUpKXt4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLGhlYWRlcnNbbmFtZV0pO319eGhyLnNlbmQoKTt9O2Z1bmN0aW9uIEhlYWRlcnNXcmFwcGVyKGhlYWRlcnMpe3RoaXMuX2hlYWRlcnM9aGVhZGVyczt9SGVhZGVyc1dyYXBwZXIucHJvdG90eXBlLmdldD1mdW5jdGlvbihuYW1lKXtyZXR1cm4gdGhpcy5faGVhZGVycy5nZXQobmFtZSk7fTtmdW5jdGlvbiBGZXRjaFRyYW5zcG9ydCgpe31GZXRjaFRyYW5zcG9ydC5wcm90b3R5cGUub3Blbj1mdW5jdGlvbih4aHIsb25TdGFydENhbGxiYWNrLG9uUHJvZ3Jlc3NDYWxsYmFjayxvbkZpbmlzaENhbGxiYWNrLHVybCx3aXRoQ3JlZGVudGlhbHMsaGVhZGVycyl7dmFyIGNvbnRyb2xsZXI9bmV3IEFib3J0Q29udHJvbGxlcigpO3ZhciBzaWduYWw9Y29udHJvbGxlci5zaWduYWw7Ly8gc2VlICMxMjBcbnZhciB0ZXh0RGVjb2Rlcj1uZXcgVGV4dERlY29kZXIoKTtmZXRjaCh1cmwse2hlYWRlcnM6aGVhZGVycyxjcmVkZW50aWFsczp3aXRoQ3JlZGVudGlhbHM/J2luY2x1ZGUnOidzYW1lLW9yaWdpbicsc2lnbmFsOnNpZ25hbCxjYWNoZTonbm8tc3RvcmUnfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7dmFyIHJlYWRlcj1yZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO29uU3RhcnRDYWxsYmFjayhyZXNwb25zZS5zdGF0dXMscmVzcG9uc2Uuc3RhdHVzVGV4dCxyZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJyksbmV3IEhlYWRlcnNXcmFwcGVyKHJlc3BvbnNlLmhlYWRlcnMpLGZ1bmN0aW9uKCl7Y29udHJvbGxlci5hYm9ydCgpO3JlYWRlci5jYW5jZWwoKTt9KTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe3ZhciByZWFkTmV4dENodW5rPWZ1bmN0aW9uIHJlYWROZXh0Q2h1bmsoKXtyZWFkZXIucmVhZCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtpZihyZXN1bHQuZG9uZSl7Ly8gTm90ZTogYnl0ZXMgaW4gdGV4dERlY29kZXIgYXJlIGlnbm9yZWRcbnJlc29sdmUodW5kZWZpbmVkKTt9ZWxzZXt2YXIgY2h1bms9dGV4dERlY29kZXIuZGVjb2RlKHJlc3VsdC52YWx1ZSx7c3RyZWFtOnRydWV9KTtvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspO3JlYWROZXh0Q2h1bmsoKTt9fSlbJ2NhdGNoJ10oZnVuY3Rpb24oZXJyb3Ipe3JlamVjdChlcnJvcik7fSk7fTtyZWFkTmV4dENodW5rKCk7fSk7fSkudGhlbihmdW5jdGlvbihyZXN1bHQpe29uRmluaXNoQ2FsbGJhY2soKTtyZXR1cm4gcmVzdWx0O30sZnVuY3Rpb24oZXJyb3Ipe29uRmluaXNoQ2FsbGJhY2soKTtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO30pO307ZnVuY3Rpb24gRXZlbnRUYXJnZXQoKXt0aGlzLl9saXN0ZW5lcnM9T2JqZWN0LmNyZWF0ZShudWxsKTt9ZnVuY3Rpb24gdGhyb3dFcnJvcihlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZTt9LDApO31FdmVudFRhcmdldC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihldmVudCl7ZXZlbnQudGFyZ2V0PXRoaXM7dmFyIHR5cGVMaXN0ZW5lcnM9dGhpcy5fbGlzdGVuZXJzW2V2ZW50LnR5cGVdO2lmKHR5cGVMaXN0ZW5lcnMhPXVuZGVmaW5lZCl7dmFyIGxlbmd0aD10eXBlTGlzdGVuZXJzLmxlbmd0aDtmb3IodmFyIGk9MDtpPGxlbmd0aDtpKz0xKXt2YXIgbGlzdGVuZXI9dHlwZUxpc3RlbmVyc1tpXTt0cnl7aWYodHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50PT09J2Z1bmN0aW9uJyl7bGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpO31lbHNle2xpc3RlbmVyLmNhbGwodGhpcyxldmVudCk7fX1jYXRjaChlKXt0aHJvd0Vycm9yKGUpO319fX07RXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24odHlwZSxsaXN0ZW5lcil7dHlwZT1TdHJpbmcodHlwZSk7dmFyIGxpc3RlbmVycz10aGlzLl9saXN0ZW5lcnM7dmFyIHR5cGVMaXN0ZW5lcnM9bGlzdGVuZXJzW3R5cGVdO2lmKHR5cGVMaXN0ZW5lcnM9PXVuZGVmaW5lZCl7dHlwZUxpc3RlbmVycz1bXTtsaXN0ZW5lcnNbdHlwZV09dHlwZUxpc3RlbmVyczt9dmFyIGZvdW5kPWZhbHNlO2Zvcih2YXIgaT0wO2k8dHlwZUxpc3RlbmVycy5sZW5ndGg7aSs9MSl7aWYodHlwZUxpc3RlbmVyc1tpXT09PWxpc3RlbmVyKXtmb3VuZD10cnVlO319aWYoIWZvdW5kKXt0eXBlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO319O0V2ZW50VGFyZ2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsbGlzdGVuZXIpe3R5cGU9U3RyaW5nKHR5cGUpO3ZhciBsaXN0ZW5lcnM9dGhpcy5fbGlzdGVuZXJzO3ZhciB0eXBlTGlzdGVuZXJzPWxpc3RlbmVyc1t0eXBlXTtpZih0eXBlTGlzdGVuZXJzIT11bmRlZmluZWQpe3ZhciBmaWx0ZXJlZD1bXTtmb3IodmFyIGk9MDtpPHR5cGVMaXN0ZW5lcnMubGVuZ3RoO2krPTEpe2lmKHR5cGVMaXN0ZW5lcnNbaV0hPT1saXN0ZW5lcil7ZmlsdGVyZWQucHVzaCh0eXBlTGlzdGVuZXJzW2ldKTt9fWlmKGZpbHRlcmVkLmxlbmd0aD09PTApe2RlbGV0ZSBsaXN0ZW5lcnNbdHlwZV07fWVsc2V7bGlzdGVuZXJzW3R5cGVdPWZpbHRlcmVkO319fTtmdW5jdGlvbiBFdmVudCh0eXBlKXt0aGlzLnR5cGU9dHlwZTt0aGlzLnRhcmdldD11bmRlZmluZWQ7fWZ1bmN0aW9uIE1lc3NhZ2VFdmVudCh0eXBlLG9wdGlvbnMpe0V2ZW50LmNhbGwodGhpcyx0eXBlKTt0aGlzLmRhdGE9b3B0aW9ucy5kYXRhO3RoaXMubGFzdEV2ZW50SWQ9b3B0aW9ucy5sYXN0RXZlbnRJZDt9TWVzc2FnZUV2ZW50LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSk7ZnVuY3Rpb24gQ29ubmVjdGlvbkV2ZW50KHR5cGUsb3B0aW9ucyl7RXZlbnQuY2FsbCh0aGlzLHR5cGUpO3RoaXMuc3RhdHVzPW9wdGlvbnMuc3RhdHVzO3RoaXMuc3RhdHVzVGV4dD1vcHRpb25zLnN0YXR1c1RleHQ7dGhpcy5oZWFkZXJzPW9wdGlvbnMuaGVhZGVyczt9Q29ubmVjdGlvbkV2ZW50LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSk7dmFyIFdBSVRJTkc9LTE7dmFyIENPTk5FQ1RJTkc9MDt2YXIgT1BFTj0xO3ZhciBDTE9TRUQ9Mjt2YXIgQUZURVJfQ1I9LTE7dmFyIEZJRUxEX1NUQVJUPTA7dmFyIEZJRUxEPTE7dmFyIFZBTFVFX1NUQVJUPTI7dmFyIFZBTFVFPTM7dmFyIGNvbnRlbnRUeXBlUmVnRXhwPS9edGV4dFxcL2V2ZW50XFwtc3RyZWFtOz8oXFxzKmNoYXJzZXRcXD11dGZcXC04KT8kL2k7dmFyIE1JTklNVU1fRFVSQVRJT049MTAwMDt2YXIgTUFYSU1VTV9EVVJBVElPTj0xODAwMDAwMDt2YXIgcGFyc2VEdXJhdGlvbj1mdW5jdGlvbiBwYXJzZUR1cmF0aW9uKHZhbHVlLGRlZil7dmFyIG49cGFyc2VJbnQodmFsdWUsMTApO2lmKG4hPT1uKXtuPWRlZjt9cmV0dXJuIGNsYW1wRHVyYXRpb24obik7fTt2YXIgY2xhbXBEdXJhdGlvbj1mdW5jdGlvbiBjbGFtcER1cmF0aW9uKG4pe3JldHVybiBNYXRoLm1pbihNYXRoLm1heChuLE1JTklNVU1fRFVSQVRJT04pLE1BWElNVU1fRFVSQVRJT04pO307dmFyIGZpcmU9ZnVuY3Rpb24gZmlyZSh0aGF0LGYsZXZlbnQpe3RyeXtpZih0eXBlb2YgZj09PSdmdW5jdGlvbicpe2YuY2FsbCh0aGF0LGV2ZW50KTt9fWNhdGNoKGUpe3Rocm93RXJyb3IoZSk7fX07ZnVuY3Rpb24gRXZlbnRTb3VyY2VQb2x5ZmlsbCh1cmwsb3B0aW9ucyl7RXZlbnRUYXJnZXQuY2FsbCh0aGlzKTt0aGlzLm9ub3Blbj11bmRlZmluZWQ7dGhpcy5vbm1lc3NhZ2U9dW5kZWZpbmVkO3RoaXMub25lcnJvcj11bmRlZmluZWQ7dGhpcy51cmw9dW5kZWZpbmVkO3RoaXMucmVhZHlTdGF0ZT11bmRlZmluZWQ7dGhpcy53aXRoQ3JlZGVudGlhbHM9dW5kZWZpbmVkO3RoaXMuX2Nsb3NlPXVuZGVmaW5lZDtzdGFydCh0aGlzLHVybCxvcHRpb25zKTt9dmFyIGlzRmV0Y2hTdXBwb3J0ZWQ9ZmV0Y2ghPXVuZGVmaW5lZCYmUmVzcG9uc2UhPXVuZGVmaW5lZCYmJ2JvZHknaW4gUmVzcG9uc2UucHJvdG90eXBlO2Z1bmN0aW9uIHN0YXJ0KGVzLHVybCxvcHRpb25zKXt1cmw9U3RyaW5nKHVybCk7dmFyIHdpdGhDcmVkZW50aWFscz1vcHRpb25zIT11bmRlZmluZWQmJkJvb2xlYW4ob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpO3ZhciBpbml0aWFsUmV0cnk9Y2xhbXBEdXJhdGlvbigxMDAwKTt2YXIgaGVhcnRiZWF0VGltZW91dD1vcHRpb25zIT11bmRlZmluZWQmJm9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCE9dW5kZWZpbmVkP3BhcnNlRHVyYXRpb24ob3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0LDQ1MDAwKTpjbGFtcER1cmF0aW9uKDQ1MDAwKTt2YXIgbGFzdEV2ZW50SWQ9Jyc7dmFyIHJldHJ5PWluaXRpYWxSZXRyeTt2YXIgd2FzQWN0aXZpdHk9ZmFsc2U7dmFyIGhlYWRlcnM9b3B0aW9ucyE9dW5kZWZpbmVkJiZvcHRpb25zLmhlYWRlcnMhPXVuZGVmaW5lZD9KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuaGVhZGVycykpOnVuZGVmaW5lZDt2YXIgQ3VycmVudFRyYW5zcG9ydD1vcHRpb25zIT11bmRlZmluZWQmJm9wdGlvbnMuVHJhbnNwb3J0IT11bmRlZmluZWQ/b3B0aW9ucy5UcmFuc3BvcnQ6WE1MSHR0cFJlcXVlc3Q7dmFyIHhocj1pc0ZldGNoU3VwcG9ydGVkJiYhKG9wdGlvbnMhPXVuZGVmaW5lZCYmb3B0aW9ucy5UcmFuc3BvcnQhPXVuZGVmaW5lZCk/dW5kZWZpbmVkOm5ldyBYSFJXcmFwcGVyKG5ldyBDdXJyZW50VHJhbnNwb3J0KCkpO3ZhciB0cmFuc3BvcnQ9eGhyPT11bmRlZmluZWQ/bmV3IEZldGNoVHJhbnNwb3J0KCk6bmV3IFhIUlRyYW5zcG9ydCgpO3ZhciBjYW5jZWxGdW5jdGlvbj11bmRlZmluZWQ7dmFyIHRpbWVvdXQ9MDt2YXIgY3VycmVudFN0YXRlPVdBSVRJTkc7dmFyIGRhdGFCdWZmZXI9Jyc7dmFyIGxhc3RFdmVudElkQnVmZmVyPScnO3ZhciBldmVudFR5cGVCdWZmZXI9Jyc7dmFyIHRleHRCdWZmZXI9Jyc7dmFyIHN0YXRlPUZJRUxEX1NUQVJUO3ZhciBmaWVsZFN0YXJ0PTA7dmFyIHZhbHVlU3RhcnQ9MDt2YXIgb25TdGFydD1mdW5jdGlvbiBvblN0YXJ0KHN0YXR1cyxzdGF0dXNUZXh0LGNvbnRlbnRUeXBlLGhlYWRlcnMsY2FuY2VsKXtpZihjdXJyZW50U3RhdGU9PT1DT05ORUNUSU5HKXtjYW5jZWxGdW5jdGlvbj1jYW5jZWw7aWYoc3RhdHVzPT09MjAwJiZjb250ZW50VHlwZSE9dW5kZWZpbmVkJiZjb250ZW50VHlwZVJlZ0V4cC50ZXN0KGNvbnRlbnRUeXBlKSl7Y3VycmVudFN0YXRlPU9QRU47d2FzQWN0aXZpdHk9dHJ1ZTtyZXRyeT1pbml0aWFsUmV0cnk7ZXMucmVhZHlTdGF0ZT1PUEVOO3ZhciBldmVudD1uZXcgQ29ubmVjdGlvbkV2ZW50KCdvcGVuJyx7c3RhdHVzOnN0YXR1cyxzdGF0dXNUZXh0OnN0YXR1c1RleHQsaGVhZGVyczpoZWFkZXJzfSk7ZXMuZGlzcGF0Y2hFdmVudChldmVudCk7ZmlyZShlcyxlcy5vbm9wZW4sZXZlbnQpO31lbHNle3ZhciBtZXNzYWdlPScnO2lmKHN0YXR1cyE9PTIwMCl7aWYoc3RhdHVzVGV4dCl7c3RhdHVzVGV4dD1zdGF0dXNUZXh0LnJlcGxhY2UoL1xccysvZywnICcpO31tZXNzYWdlPVwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBzdGF0dXMgXCIrc3RhdHVzKycgJytzdGF0dXNUZXh0KycgdGhhdCBpcyBub3QgMjAwLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nO31lbHNle21lc3NhZ2U9XCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIENvbnRlbnQtVHlwZSBzcGVjaWZ5aW5nIGFuIHVuc3VwcG9ydGVkIHR5cGU6IFwiKyhjb250ZW50VHlwZT09dW5kZWZpbmVkPyctJzpjb250ZW50VHlwZS5yZXBsYWNlKC9cXHMrL2csJyAnKSkrJy4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJzt9dGhyb3dFcnJvcihuZXcgRXJyb3IobWVzc2FnZSkpO2Nsb3NlKCk7dmFyIGV2ZW50PW5ldyBDb25uZWN0aW9uRXZlbnQoJ2Vycm9yJyx7c3RhdHVzOnN0YXR1cyxzdGF0dXNUZXh0OnN0YXR1c1RleHQsaGVhZGVyczpoZWFkZXJzfSk7ZXMuZGlzcGF0Y2hFdmVudChldmVudCk7ZmlyZShlcyxlcy5vbmVycm9yLGV2ZW50KTt9fX07dmFyIG9uUHJvZ3Jlc3M9ZnVuY3Rpb24gb25Qcm9ncmVzcyh0ZXh0Q2h1bmspe2lmKGN1cnJlbnRTdGF0ZT09PU9QRU4pe3ZhciBuPS0xO2Zvcih2YXIgaT0wO2k8dGV4dENodW5rLmxlbmd0aDtpKz0xKXt2YXIgYz10ZXh0Q2h1bmsuY2hhckNvZGVBdChpKTtpZihjPT09J1xcbicuY2hhckNvZGVBdCgwKXx8Yz09PSdcXHInLmNoYXJDb2RlQXQoMCkpe249aTt9fXZhciBjaHVuaz0obiE9PS0xP3RleHRCdWZmZXI6JycpK3RleHRDaHVuay5zbGljZSgwLG4rMSk7dGV4dEJ1ZmZlcj0obj09PS0xP3RleHRCdWZmZXI6JycpK3RleHRDaHVuay5zbGljZShuKzEpO2lmKGNodW5rIT09Jycpe3dhc0FjdGl2aXR5PXRydWU7fWZvcih2YXIgcG9zaXRpb249MDtwb3NpdGlvbjxjaHVuay5sZW5ndGg7cG9zaXRpb24rPTEpe3ZhciBjPWNodW5rLmNoYXJDb2RlQXQocG9zaXRpb24pO2lmKHN0YXRlPT09QUZURVJfQ1ImJmM9PT0nXFxuJy5jaGFyQ29kZUF0KDApKXtzdGF0ZT1GSUVMRF9TVEFSVDt9ZWxzZXtpZihzdGF0ZT09PUFGVEVSX0NSKXtzdGF0ZT1GSUVMRF9TVEFSVDt9aWYoYz09PSdcXHInLmNoYXJDb2RlQXQoMCl8fGM9PT0nXFxuJy5jaGFyQ29kZUF0KDApKXtpZihzdGF0ZSE9PUZJRUxEX1NUQVJUKXtpZihzdGF0ZT09PUZJRUxEKXt2YWx1ZVN0YXJ0PXBvc2l0aW9uKzE7fXZhciBmaWVsZD1jaHVuay5zbGljZShmaWVsZFN0YXJ0LHZhbHVlU3RhcnQtMSk7dmFyIHZhbHVlPWNodW5rLnNsaWNlKHZhbHVlU3RhcnQrKHZhbHVlU3RhcnQ8cG9zaXRpb24mJmNodW5rLmNoYXJDb2RlQXQodmFsdWVTdGFydCk9PT0nICcuY2hhckNvZGVBdCgwKT8xOjApLHBvc2l0aW9uKTtpZihmaWVsZD09PSdkYXRhJyl7ZGF0YUJ1ZmZlcis9J1xcbic7ZGF0YUJ1ZmZlcis9dmFsdWU7fWVsc2UgaWYoZmllbGQ9PT0naWQnKXtsYXN0RXZlbnRJZEJ1ZmZlcj12YWx1ZTt9ZWxzZSBpZihmaWVsZD09PSdldmVudCcpe2V2ZW50VHlwZUJ1ZmZlcj12YWx1ZTt9ZWxzZSBpZihmaWVsZD09PSdyZXRyeScpe2luaXRpYWxSZXRyeT1wYXJzZUR1cmF0aW9uKHZhbHVlLGluaXRpYWxSZXRyeSk7cmV0cnk9aW5pdGlhbFJldHJ5O31lbHNlIGlmKGZpZWxkPT09J2hlYXJ0YmVhdFRpbWVvdXQnKXtoZWFydGJlYXRUaW1lb3V0PXBhcnNlRHVyYXRpb24odmFsdWUsaGVhcnRiZWF0VGltZW91dCk7aWYodGltZW91dCE9PTApe2NsZWFyVGltZW91dCh0aW1lb3V0KTt0aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LGhlYXJ0YmVhdFRpbWVvdXQpO319fWlmKHN0YXRlPT09RklFTERfU1RBUlQpe2lmKGRhdGFCdWZmZXIhPT0nJyl7bGFzdEV2ZW50SWQ9bGFzdEV2ZW50SWRCdWZmZXI7aWYoZXZlbnRUeXBlQnVmZmVyPT09Jycpe2V2ZW50VHlwZUJ1ZmZlcj0nbWVzc2FnZSc7fXZhciBldmVudD1uZXcgTWVzc2FnZUV2ZW50KGV2ZW50VHlwZUJ1ZmZlcix7ZGF0YTpkYXRhQnVmZmVyLnNsaWNlKDEpLGxhc3RFdmVudElkOmxhc3RFdmVudElkQnVmZmVyfSk7ZXMuZGlzcGF0Y2hFdmVudChldmVudCk7aWYoZXZlbnRUeXBlQnVmZmVyPT09J21lc3NhZ2UnKXtmaXJlKGVzLGVzLm9ubWVzc2FnZSxldmVudCk7fWlmKGN1cnJlbnRTdGF0ZT09PUNMT1NFRCl7cmV0dXJuO319ZGF0YUJ1ZmZlcj0nJztldmVudFR5cGVCdWZmZXI9Jyc7fXN0YXRlPWM9PT0nXFxyJy5jaGFyQ29kZUF0KDApP0FGVEVSX0NSOkZJRUxEX1NUQVJUO31lbHNle2lmKHN0YXRlPT09RklFTERfU1RBUlQpe2ZpZWxkU3RhcnQ9cG9zaXRpb247c3RhdGU9RklFTEQ7fWlmKHN0YXRlPT09RklFTEQpe2lmKGM9PT0nOicuY2hhckNvZGVBdCgwKSl7dmFsdWVTdGFydD1wb3NpdGlvbisxO3N0YXRlPVZBTFVFX1NUQVJUO319ZWxzZSBpZihzdGF0ZT09PVZBTFVFX1NUQVJUKXtzdGF0ZT1WQUxVRTt9fX19fX07dmFyIG9uRmluaXNoPWZ1bmN0aW9uIG9uRmluaXNoKCl7aWYoY3VycmVudFN0YXRlPT09T1BFTnx8Y3VycmVudFN0YXRlPT09Q09OTkVDVElORyl7Y3VycmVudFN0YXRlPVdBSVRJTkc7aWYodGltZW91dCE9PTApe2NsZWFyVGltZW91dCh0aW1lb3V0KTt0aW1lb3V0PTA7fXRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe29uVGltZW91dCgpO30scmV0cnkpO3JldHJ5PWNsYW1wRHVyYXRpb24oTWF0aC5taW4oaW5pdGlhbFJldHJ5KjE2LHJldHJ5KjIpKTtlcy5yZWFkeVN0YXRlPUNPTk5FQ1RJTkc7dmFyIGV2ZW50PW5ldyBFdmVudCgnZXJyb3InKTtlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtmaXJlKGVzLGVzLm9uZXJyb3IsZXZlbnQpO319O3ZhciBjbG9zZT1mdW5jdGlvbiBjbG9zZSgpe2N1cnJlbnRTdGF0ZT1DTE9TRUQ7aWYoY2FuY2VsRnVuY3Rpb24hPXVuZGVmaW5lZCl7Y2FuY2VsRnVuY3Rpb24oKTtjYW5jZWxGdW5jdGlvbj11bmRlZmluZWQ7fWlmKHRpbWVvdXQhPT0wKXtjbGVhclRpbWVvdXQodGltZW91dCk7dGltZW91dD0wO31lcy5yZWFkeVN0YXRlPUNMT1NFRDt9O3ZhciBvblRpbWVvdXQ9ZnVuY3Rpb24gb25UaW1lb3V0KCl7dGltZW91dD0wO2lmKGN1cnJlbnRTdGF0ZSE9PVdBSVRJTkcpe2lmKCF3YXNBY3Rpdml0eSYmY2FuY2VsRnVuY3Rpb24hPXVuZGVmaW5lZCl7dGhyb3dFcnJvcihuZXcgRXJyb3IoJ05vIGFjdGl2aXR5IHdpdGhpbiAnK2hlYXJ0YmVhdFRpbWVvdXQrJyBtaWxsaXNlY29uZHMuIFJlY29ubmVjdGluZy4nKSk7Y2FuY2VsRnVuY3Rpb24oKTtjYW5jZWxGdW5jdGlvbj11bmRlZmluZWQ7fWVsc2V7d2FzQWN0aXZpdHk9ZmFsc2U7dGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSxoZWFydGJlYXRUaW1lb3V0KTt9cmV0dXJuO313YXNBY3Rpdml0eT1mYWxzZTt0aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LGhlYXJ0YmVhdFRpbWVvdXQpO2N1cnJlbnRTdGF0ZT1DT05ORUNUSU5HO2RhdGFCdWZmZXI9Jyc7ZXZlbnRUeXBlQnVmZmVyPScnO2xhc3RFdmVudElkQnVmZmVyPWxhc3RFdmVudElkO3RleHRCdWZmZXI9Jyc7ZmllbGRTdGFydD0wO3ZhbHVlU3RhcnQ9MDtzdGF0ZT1GSUVMRF9TVEFSVDsvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD00Mjg5MTZcbi8vIFJlcXVlc3QgaGVhZGVyIGZpZWxkIExhc3QtRXZlbnQtSUQgaXMgbm90IGFsbG93ZWQgYnkgQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycy5cbnZhciByZXF1ZXN0VVJMPXVybDtpZih1cmwuc2xpY2UoMCw1KSE9PSdkYXRhOicmJnVybC5zbGljZSgwLDUpIT09J2Jsb2I6Jyl7aWYobGFzdEV2ZW50SWQhPT0nJyl7cmVxdWVzdFVSTCs9KHVybC5pbmRleE9mKCc/Jyk9PT0tMT8nPyc6JyYnKSsnbGFzdEV2ZW50SWQ9JytlbmNvZGVVUklDb21wb25lbnQobGFzdEV2ZW50SWQpO319dmFyIHJlcXVlc3RIZWFkZXJzPXt9O3JlcXVlc3RIZWFkZXJzWydBY2NlcHQnXT0ndGV4dC9ldmVudC1zdHJlYW0nO2lmKGhlYWRlcnMhPXVuZGVmaW5lZCl7Zm9yKHZhciBuYW1lIGluIGhlYWRlcnMpe2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLG5hbWUpKXtyZXF1ZXN0SGVhZGVyc1tuYW1lXT1oZWFkZXJzW25hbWVdO319fXRyeXt0cmFuc3BvcnQub3Blbih4aHIsb25TdGFydCxvblByb2dyZXNzLG9uRmluaXNoLHJlcXVlc3RVUkwsd2l0aENyZWRlbnRpYWxzLHJlcXVlc3RIZWFkZXJzKTt9Y2F0Y2goZXJyb3Ipe2Nsb3NlKCk7dGhyb3cgZXJyb3I7fX07ZXMudXJsPXVybDtlcy5yZWFkeVN0YXRlPUNPTk5FQ1RJTkc7ZXMud2l0aENyZWRlbnRpYWxzPXdpdGhDcmVkZW50aWFscztlcy5fY2xvc2U9Y2xvc2U7b25UaW1lb3V0KCk7fUV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoRXZlbnRUYXJnZXQucHJvdG90eXBlKTtFdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DT05ORUNUSU5HPUNPTk5FQ1RJTkc7RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuT1BFTj1PUEVOO0V2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNMT1NFRD1DTE9TRUQ7RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuY2xvc2U9ZnVuY3Rpb24oKXt0aGlzLl9jbG9zZSgpO307RXZlbnRTb3VyY2VQb2x5ZmlsbC5DT05ORUNUSU5HPUNPTk5FQ1RJTkc7RXZlbnRTb3VyY2VQb2x5ZmlsbC5PUEVOPU9QRU47RXZlbnRTb3VyY2VQb2x5ZmlsbC5DTE9TRUQ9Q0xPU0VEO0V2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLndpdGhDcmVkZW50aWFscz11bmRlZmluZWQ7dmFyIF9kZWZhdWx0PUV2ZW50U291cmNlUG9seWZpbGw7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGlzcGxheUNvbnRlbnQ9ZGlzcGxheUNvbnRlbnQ7Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJlbW92ZSBOZXh0LmpzJyBuby1GT1VDIHN0eWxlcyB3b3JrYXJvdW5kIGZvciB1c2luZ1xuLy8gYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQuIEl0IG11c3QgYmUgY2FsbGVkIGJlZm9yZSBoeWRyYXRpb24sIG9yIGVsc2Vcbi8vIHJlbmRlcmluZyB3b24ndCBoYXZlIHRoZSBjb3JyZWN0IGNvbXB1dGVkIHZhbHVlcyBpbiBlZmZlY3RzLlxuZnVuY3Rpb24gZGlzcGxheUNvbnRlbnQoY2FsbGJhY2spezsod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8c2V0VGltZW91dCkoZnVuY3Rpb24oKXtmb3IodmFyIHg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksaT14Lmxlbmd0aDtpLS07KXt4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7fWlmKGNhbGxiYWNrKXtjYWxsYmFjaygpO319KTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VjLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2xvc2VQaW5nPWNsb3NlUGluZztleHBvcnRzLnNldHVwUGluZz1zZXR1cFBpbmc7ZXhwb3J0cy5jdXJyZW50UGFnZT12b2lkIDA7dmFyIF9ldmVudHNvdXJjZT1yZXF1aXJlKFwiLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlXCIpOy8qIGdsb2JhbCBsb2NhdGlvbiAqL2xldCBldnRTb3VyY2U7bGV0IGN1cnJlbnRQYWdlO2V4cG9ydHMuY3VycmVudFBhZ2U9Y3VycmVudFBhZ2U7ZnVuY3Rpb24gY2xvc2VQaW5nKCl7aWYoZXZ0U291cmNlKWV2dFNvdXJjZS5jbG9zZSgpO2V2dFNvdXJjZT1udWxsO31mdW5jdGlvbiBzZXR1cFBpbmcoYXNzZXRQcmVmaXgscGF0aG5hbWVGbixyZXRyeSl7Y29uc3QgcGF0aG5hbWU9cGF0aG5hbWVGbigpOy8vIE1ha2Ugc3VyZSB0byBvbmx5IGNyZWF0ZSBuZXcgRXZlbnRTb3VyY2UgcmVxdWVzdCBpZiBwYWdlIGhhcyBjaGFuZ2VkXG5pZihwYXRobmFtZT09PWN1cnJlbnRQYWdlJiYhcmV0cnkpcmV0dXJuO2V4cG9ydHMuY3VycmVudFBhZ2U9Y3VycmVudFBhZ2U9cGF0aG5hbWU7Ly8gY2xvc2UgY3VycmVudCBFdmVudFNvdXJjZSBjb25uZWN0aW9uXG5jbG9zZVBpbmcoKTtjb25zdCB1cmw9YCR7YXNzZXRQcmVmaXh9L19uZXh0L3dlYnBhY2staG1yP3BhZ2U9JHtjdXJyZW50UGFnZX1gO2V2dFNvdXJjZT0oMCxfZXZlbnRzb3VyY2UuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKSh7cGF0aDp1cmwsdGltZW91dDo1MDAwLG9uZGVtYW5kOjF9KTtldnRTb3VyY2UuYWRkTWVzc2FnZUxpc3RlbmVyKGV2ZW50PT57aWYoZXZlbnQuZGF0YS5pbmRleE9mKCd7Jyk9PT0tMSlyZXR1cm47dHJ5e2NvbnN0IHBheWxvYWQ9SlNPTi5wYXJzZShldmVudC5kYXRhKTtpZihwYXlsb2FkLmludmFsaWQpey8vIFBheWxvYWQgY2FuIGJlIGludmFsaWQgZXZlbiBpZiB0aGUgcGFnZSBkb2VzIG5vdCBleGlzdC5cbi8vIFNvLCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSBpdCBleGlzdHMgYmVmb3JlIHJlbG9hZGluZy5cbmZldGNoKGxvY2F0aW9uLmhyZWYse2NyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHBhZ2VSZXM9PntpZihwYWdlUmVzLnN0YXR1cz09PTIwMCl7bG9jYXRpb24ucmVsb2FkKCk7fX0pO319Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKCdvbi1kZW1hbmQtZW50cmllcyBmYWlsZWQgdG8gcGFyc2UgcmVzcG9uc2UnLGVycik7fX0pO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID1cbi8qKioqKiovIChmdW5jdGlvbigpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIDg4MDpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fbmNjd3Bja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbi8qKioqKiovIFx0XHR0cnkge1xuLyoqKioqKi8gXHRcdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX19uY2N3cGNrX3JlcXVpcmVfXyk7XG4vKioqKioqLyBcdFx0XHR0aHJldyA9IGZhbHNlO1xuLyoqKioqKi8gXHRcdH0gZmluYWxseSB7XG4vKioqKioqLyBcdFx0XHRpZih0aHJldykgZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9jb21wYXQgKi9cbi8qKioqKiovIFx0XG4vKioqKioqLyBcdF9fbmNjd3Bja19yZXF1aXJlX18uYWIgPSBfX2Rpcm5hbWUgKyBcIi9cIjsvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLyoqKioqKi8gXHQvLyBzdGFydHVwXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg4ODApO1xuLyoqKioqKi8gfSkoKVxuOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7Il0sInNvdXJjZVJvb3QiOiIifQ==