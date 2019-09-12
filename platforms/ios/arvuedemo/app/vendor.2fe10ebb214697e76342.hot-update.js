webpackHotUpdate("vendor",{

/***/ "../node_modules/rxjs/_esm5/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internal_Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _internal_Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });

/* harmony import */ var _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return _internal_observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_1__["ConnectableObservable"]; });

/* harmony import */ var _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/operators/groupBy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return _internal_operators_groupBy__WEBPACK_IMPORTED_MODULE_2__["GroupedObservable"]; });

/* harmony import */ var _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/symbol/observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_3__["observable"]; });

/* harmony import */ var _internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return _internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]; });

/* harmony import */ var _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/BehaviorSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return _internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]; });

/* harmony import */ var _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/ReplaySubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return _internal_ReplaySubject__WEBPACK_IMPORTED_MODULE_6__["ReplaySubject"]; });

/* harmony import */ var _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return _internal_AsyncSubject__WEBPACK_IMPORTED_MODULE_7__["AsyncSubject"]; });

/* harmony import */ var _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/asap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asapScheduler", function() { return _internal_scheduler_asap__WEBPACK_IMPORTED_MODULE_8__["asap"]; });

/* harmony import */ var _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncScheduler", function() { return _internal_scheduler_async__WEBPACK_IMPORTED_MODULE_9__["async"]; });

/* harmony import */ var _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/queue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queueScheduler", function() { return _internal_scheduler_queue__WEBPACK_IMPORTED_MODULE_10__["queue"]; });

/* harmony import */ var _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "animationFrameScheduler", function() { return _internal_scheduler_animationFrame__WEBPACK_IMPORTED_MODULE_11__["animationFrame"]; });

/* harmony import */ var _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualTimeScheduler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return _internal_scheduler_VirtualTimeScheduler__WEBPACK_IMPORTED_MODULE_12__["VirtualAction"]; });

/* harmony import */ var _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Scheduler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return _internal_Scheduler__WEBPACK_IMPORTED_MODULE_13__["Scheduler"]; });

/* harmony import */ var _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return _internal_Subscription__WEBPACK_IMPORTED_MODULE_14__["Subscription"]; });

/* harmony import */ var _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return _internal_Subscriber__WEBPACK_IMPORTED_MODULE_15__["Subscriber"]; });

/* harmony import */ var _internal_Notification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Notification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _internal_Notification__WEBPACK_IMPORTED_MODULE_16__["Notification"]; });

/* harmony import */ var _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _internal_util_pipe__WEBPACK_IMPORTED_MODULE_17__["pipe"]; });

/* harmony import */ var _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/noop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _internal_util_noop__WEBPACK_IMPORTED_MODULE_18__["noop"]; });

/* harmony import */ var _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _internal_util_identity__WEBPACK_IMPORTED_MODULE_19__["identity"]; });

/* harmony import */ var _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isObservable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return _internal_util_isObservable__WEBPACK_IMPORTED_MODULE_20__["isObservable"]; });

/* harmony import */ var _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return _internal_util_ArgumentOutOfRangeError__WEBPACK_IMPORTED_MODULE_21__["ArgumentOutOfRangeError"]; });

/* harmony import */ var _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/EmptyError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return _internal_util_EmptyError__WEBPACK_IMPORTED_MODULE_22__["EmptyError"]; });

/* harmony import */ var _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return _internal_util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_23__["ObjectUnsubscribedError"]; });

/* harmony import */ var _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return _internal_util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_24__["UnsubscriptionError"]; });

/* harmony import */ var _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/TimeoutError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return _internal_util_TimeoutError__WEBPACK_IMPORTED_MODULE_25__["TimeoutError"]; });

/* harmony import */ var _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/bindCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindCallback", function() { return _internal_observable_bindCallback__WEBPACK_IMPORTED_MODULE_26__["bindCallback"]; });

/* harmony import */ var _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return _internal_observable_bindNodeCallback__WEBPACK_IMPORTED_MODULE_27__["bindNodeCallback"]; });

/* harmony import */ var _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/combineLatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return _internal_observable_combineLatest__WEBPACK_IMPORTED_MODULE_28__["combineLatest"]; });

/* harmony import */ var _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/concat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _internal_observable_concat__WEBPACK_IMPORTED_MODULE_29__["concat"]; });

/* harmony import */ var _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/defer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _internal_observable_defer__WEBPACK_IMPORTED_MODULE_30__["defer"]; });

/* harmony import */ var _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["empty"]; });

/* harmony import */ var _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/forkJoin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return _internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_32__["forkJoin"]; });

/* harmony import */ var _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _internal_observable_from__WEBPACK_IMPORTED_MODULE_33__["from"]; });

/* harmony import */ var _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/fromEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return _internal_observable_fromEvent__WEBPACK_IMPORTED_MODULE_34__["fromEvent"]; });

/* harmony import */ var _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return _internal_observable_fromEventPattern__WEBPACK_IMPORTED_MODULE_35__["fromEventPattern"]; });

/* harmony import */ var _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/generate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return _internal_observable_generate__WEBPACK_IMPORTED_MODULE_36__["generate"]; });

/* harmony import */ var _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/iif.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iif", function() { return _internal_observable_iif__WEBPACK_IMPORTED_MODULE_37__["iif"]; });

/* harmony import */ var _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return _internal_observable_interval__WEBPACK_IMPORTED_MODULE_38__["interval"]; });

/* harmony import */ var _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _internal_observable_merge__WEBPACK_IMPORTED_MODULE_39__["merge"]; });

/* harmony import */ var _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/never.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "never", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["never"]; });

/* harmony import */ var _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "of", function() { return _internal_observable_of__WEBPACK_IMPORTED_MODULE_41__["of"]; });

/* harmony import */ var _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return _internal_observable_onErrorResumeNext__WEBPACK_IMPORTED_MODULE_42__["onErrorResumeNext"]; });

/* harmony import */ var _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _internal_observable_pairs__WEBPACK_IMPORTED_MODULE_43__["pairs"]; });

/* harmony import */ var _internal_observable_race__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/race.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "race", function() { return _internal_observable_race__WEBPACK_IMPORTED_MODULE_44__["race"]; });

/* harmony import */ var _internal_observable_range__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _internal_observable_range__WEBPACK_IMPORTED_MODULE_45__["range"]; });

/* harmony import */ var _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/throwError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return _internal_observable_throwError__WEBPACK_IMPORTED_MODULE_46__["throwError"]; });

/* harmony import */ var _internal_observable_timer__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/timer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return _internal_observable_timer__WEBPACK_IMPORTED_MODULE_47__["timer"]; });

/* harmony import */ var _internal_observable_using__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/using.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "using", function() { return _internal_observable_using__WEBPACK_IMPORTED_MODULE_48__["using"]; });

/* harmony import */ var _internal_observable_zip__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _internal_observable_zip__WEBPACK_IMPORTED_MODULE_49__["zip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return _internal_observable_empty__WEBPACK_IMPORTED_MODULE_31__["EMPTY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return _internal_observable_never__WEBPACK_IMPORTED_MODULE_40__["NEVER"]; });

/* harmony import */ var _internal_config__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _internal_config__WEBPACK_IMPORTED_MODULE_50__["config"]; });

/** PURE_IMPORTS_START  PURE_IMPORTS_END */






















































/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/AsyncSubject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncSubject", function() { return AsyncSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */




var AsyncSubject =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncSubject, _super);

  function AsyncSubject() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.value = null;
    _this.hasNext = false;
    _this.hasCompleted = false;
    return _this;
  }

  AsyncSubject.prototype._subscribe = function (subscriber) {
    if (this.hasError) {
      subscriber.error(this.thrownError);
      return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
    } else if (this.hasCompleted && this.hasNext) {
      subscriber.next(this.value);
      subscriber.complete();
      return _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
    }

    return _super.prototype._subscribe.call(this, subscriber);
  };

  AsyncSubject.prototype.next = function (value) {
    if (!this.hasCompleted) {
      this.value = value;
      this.hasNext = true;
    }
  };

  AsyncSubject.prototype.error = function (error) {
    if (!this.hasCompleted) {
      _super.prototype.error.call(this, error);
    }
  };

  AsyncSubject.prototype.complete = function () {
    this.hasCompleted = true;

    if (this.hasNext) {
      _super.prototype.next.call(this, this.value);
    }

    _super.prototype.complete.call(this);
  };

  return AsyncSubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/BehaviorSubject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return BehaviorSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */




var BehaviorSubject =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BehaviorSubject, _super);

  function BehaviorSubject(_value) {
    var _this = _super.call(this) || this;

    _this._value = _value;
    return _this;
  }

  Object.defineProperty(BehaviorSubject.prototype, "value", {
    get: function () {
      return this.getValue();
    },
    enumerable: true,
    configurable: true
  });

  BehaviorSubject.prototype._subscribe = function (subscriber) {
    var subscription = _super.prototype._subscribe.call(this, subscriber);

    if (subscription && !subscription.closed) {
      subscriber.next(this._value);
    }

    return subscription;
  };

  BehaviorSubject.prototype.getValue = function () {
    if (this.hasError) {
      throw this.thrownError;
    } else if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_2__["ObjectUnsubscribedError"]();
    } else {
      return this._value;
    }
  };

  BehaviorSubject.prototype.next = function (value) {
    _super.prototype.next.call(this, this._value = value);
  };

  return BehaviorSubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/InnerSubscriber.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerSubscriber", function() { return InnerSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */



var InnerSubscriber =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InnerSubscriber, _super);

  function InnerSubscriber(parent, outerValue, outerIndex) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    _this.outerValue = outerValue;
    _this.outerIndex = outerIndex;
    _this.index = 0;
    return _this;
  }

  InnerSubscriber.prototype._next = function (value) {
    this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
  };

  InnerSubscriber.prototype._error = function (error) {
    this.parent.notifyError(error, this);
    this.unsubscribe();
  };

  InnerSubscriber.prototype._complete = function () {
    this.parent.notifyComplete(this);
    this.unsubscribe();
  };

  return InnerSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/Notification.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationKind", function() { return NotificationKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/throwError.js");
/** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */



var NotificationKind;
/*@__PURE__*/

(function (NotificationKind) {
  NotificationKind["NEXT"] = "N";
  NotificationKind["ERROR"] = "E";
  NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));

var Notification =
/*@__PURE__*/
function () {
  function Notification(kind, value, error) {
    this.kind = kind;
    this.value = value;
    this.error = error;
    this.hasValue = kind === "N";
  }

  Notification.prototype.observe = function (observer) {
    switch (this.kind) {
      case "N":
        return observer.next && observer.next(this.value);

      case "E":
        return observer.error && observer.error(this.error);

      case "C":
        return observer.complete && observer.complete();
    }
  };

  Notification.prototype.do = function (next, error, complete) {
    var kind = this.kind;

    switch (kind) {
      case "N":
        return next && next(this.value);

      case "E":
        return error && error(this.error);

      case "C":
        return complete && complete();
    }
  };

  Notification.prototype.accept = function (nextOrObserver, error, complete) {
    if (nextOrObserver && typeof nextOrObserver.next === 'function') {
      return this.observe(nextOrObserver);
    } else {
      return this.do(nextOrObserver, error, complete);
    }
  };

  Notification.prototype.toObservable = function () {
    var kind = this.kind;

    switch (kind) {
      case "N":
        return Object(_observable_of__WEBPACK_IMPORTED_MODULE_1__["of"])(this.value);

      case "E":
        return Object(_observable_throwError__WEBPACK_IMPORTED_MODULE_2__["throwError"])(this.error);

      case "C":
        return Object(_observable_empty__WEBPACK_IMPORTED_MODULE_0__["empty"])();
    }

    throw new Error('unexpected notification kind value');
  };

  Notification.createNext = function (value) {
    if (typeof value !== 'undefined') {
      return new Notification("N", value);
    }

    return Notification.undefinedValueNotification;
  };

  Notification.createError = function (err) {
    return new Notification("E", undefined, err);
  };

  Notification.createComplete = function () {
    return Notification.completeNotification;
  };

  Notification.completeNotification = new Notification("C");
  Notification.undefinedValueNotification = new Notification("N", undefined);
  return Notification;
}();



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/Observable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/toSubscriber.js");
/* harmony import */ var _internal_symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/symbol/observable.js");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/pipe.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/config.js");
/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_internal_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */






var Observable =
/*@__PURE__*/
function () {
  function Observable(subscribe) {
    this._isScalar = false;

    if (subscribe) {
      this._subscribe = subscribe;
    }
  }

  Observable.prototype.lift = function (operator) {
    var observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
  };

  Observable.prototype.subscribe = function (observerOrNext, error, complete) {
    var operator = this.operator;
    var sink = Object(_util_toSubscriber__WEBPACK_IMPORTED_MODULE_1__["toSubscriber"])(observerOrNext, error, complete);

    if (operator) {
      sink.add(operator.call(sink, this.source));
    } else {
      sink.add(this.source || _config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
    }

    if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
      if (sink.syncErrorThrowable) {
        sink.syncErrorThrowable = false;

        if (sink.syncErrorThrown) {
          throw sink.syncErrorValue;
        }
      }
    }

    return sink;
  };

  Observable.prototype._trySubscribe = function (sink) {
    try {
      return this._subscribe(sink);
    } catch (err) {
      if (_config__WEBPACK_IMPORTED_MODULE_4__["config"].useDeprecatedSynchronousErrorHandling) {
        sink.syncErrorThrown = true;
        sink.syncErrorValue = err;
      }

      if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_0__["canReportError"])(sink)) {
        sink.error(err);
      } else {
        console.warn(err);
      }
    }
  };

  Observable.prototype.forEach = function (next, promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var subscription;
      subscription = _this.subscribe(function (value) {
        try {
          next(value);
        } catch (err) {
          reject(err);

          if (subscription) {
            subscription.unsubscribe();
          }
        }
      }, reject, resolve);
    });
  };

  Observable.prototype._subscribe = function (subscriber) {
    var source = this.source;
    return source && source.subscribe(subscriber);
  };

  Observable.prototype[_internal_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]] = function () {
    return this;
  };

  Observable.prototype.pipe = function () {
    var operations = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      operations[_i] = arguments[_i];
    }

    if (operations.length === 0) {
      return this;
    }

    return Object(_util_pipe__WEBPACK_IMPORTED_MODULE_3__["pipeFromArray"])(operations)(this);
  };

  Observable.prototype.toPromise = function (promiseCtor) {
    var _this = this;

    promiseCtor = getPromiseCtor(promiseCtor);
    return new promiseCtor(function (resolve, reject) {
      var value;

      _this.subscribe(function (x) {
        return value = x;
      }, function (err) {
        return reject(err);
      }, function () {
        return resolve(value);
      });
    });
  };

  Observable.create = function (subscribe) {
    return new Observable(subscribe);
  };

  return Observable;
}();



function getPromiseCtor(promiseCtor) {
  if (!promiseCtor) {
    promiseCtor = _config__WEBPACK_IMPORTED_MODULE_4__["config"].Promise || Promise;
  }

  if (!promiseCtor) {
    throw new Error('no Promise impl found');
  }

  return promiseCtor;
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/Observer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */


var empty = {
  closed: true,
  next: function (value) {},
  error: function (err) {
    if (_config__WEBPACK_IMPORTED_MODULE_0__["config"].useDeprecatedSynchronousErrorHandling) {
      throw err;
    } else {
      Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_1__["hostReportError"])(err);
    }
  },
  complete: function () {}
};

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/OuterSubscriber.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OuterSubscriber", function() { return OuterSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */



var OuterSubscriber =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OuterSubscriber, _super);

  function OuterSubscriber() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  };

  OuterSubscriber.prototype.notifyError = function (error, innerSub) {
    this.destination.error(error);
  };

  OuterSubscriber.prototype.notifyComplete = function (innerSub) {
    this.destination.complete();
  };

  return OuterSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/ReplaySubject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaySubject", function() { return ReplaySubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _scheduler_queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/queue.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/operators/observeOn.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/SubjectSubscription.js");
/** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */








var ReplaySubject =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ReplaySubject, _super);

  function ReplaySubject(bufferSize, windowTime, scheduler) {
    if (bufferSize === void 0) {
      bufferSize = Number.POSITIVE_INFINITY;
    }

    if (windowTime === void 0) {
      windowTime = Number.POSITIVE_INFINITY;
    }

    var _this = _super.call(this) || this;

    _this.scheduler = scheduler;
    _this._events = [];
    _this._infiniteTimeWindow = false;
    _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
    _this._windowTime = windowTime < 1 ? 1 : windowTime;

    if (windowTime === Number.POSITIVE_INFINITY) {
      _this._infiniteTimeWindow = true;
      _this.next = _this.nextInfiniteTimeWindow;
    } else {
      _this.next = _this.nextTimeWindow;
    }

    return _this;
  }

  ReplaySubject.prototype.nextInfiniteTimeWindow = function (value) {
    var _events = this._events;

    _events.push(value);

    if (_events.length > this._bufferSize) {
      _events.shift();
    }

    _super.prototype.next.call(this, value);
  };

  ReplaySubject.prototype.nextTimeWindow = function (value) {
    this._events.push(new ReplayEvent(this._getNow(), value));

    this._trimBufferThenGetEvents();

    _super.prototype.next.call(this, value);
  };

  ReplaySubject.prototype._subscribe = function (subscriber) {
    var _infiniteTimeWindow = this._infiniteTimeWindow;

    var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();

    var scheduler = this.scheduler;
    var len = _events.length;
    var subscription;

    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_5__["ObjectUnsubscribedError"]();
    } else if (this.isStopped || this.hasError) {
      subscription = _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
    } else {
      this.observers.push(subscriber);
      subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_6__["SubjectSubscription"](this, subscriber);
    }

    if (scheduler) {
      subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__["ObserveOnSubscriber"](subscriber, scheduler));
    }

    if (_infiniteTimeWindow) {
      for (var i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i]);
      }
    } else {
      for (var i = 0; i < len && !subscriber.closed; i++) {
        subscriber.next(_events[i].value);
      }
    }

    if (this.hasError) {
      subscriber.error(this.thrownError);
    } else if (this.isStopped) {
      subscriber.complete();
    }

    return subscription;
  };

  ReplaySubject.prototype._getNow = function () {
    return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_2__["queue"]).now();
  };

  ReplaySubject.prototype._trimBufferThenGetEvents = function () {
    var now = this._getNow();

    var _bufferSize = this._bufferSize;
    var _windowTime = this._windowTime;
    var _events = this._events;
    var eventsCount = _events.length;
    var spliceCount = 0;

    while (spliceCount < eventsCount) {
      if (now - _events[spliceCount].time < _windowTime) {
        break;
      }

      spliceCount++;
    }

    if (eventsCount > _bufferSize) {
      spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
    }

    if (spliceCount > 0) {
      _events.splice(0, spliceCount);
    }

    return _events;
  };

  return ReplaySubject;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]);



var ReplayEvent =
/*@__PURE__*/
function () {
  function ReplayEvent(time, value) {
    this.time = time;
    this.value = value;
  }

  return ReplayEvent;
}();

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/Scheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scheduler", function() { return Scheduler; });
var Scheduler =
/*@__PURE__*/
function () {
  function Scheduler(SchedulerAction, now) {
    if (now === void 0) {
      now = Scheduler.now;
    }

    this.SchedulerAction = SchedulerAction;
    this.now = now;
  }

  Scheduler.prototype.schedule = function (work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }

    return new this.SchedulerAction(this, work).schedule(state, delay);
  };

  Scheduler.now = function () {
    return Date.now();
  };

  return Scheduler;
}();



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/Subject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscriber", function() { return SubjectSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousSubject", function() { return AnonymousSubject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js");
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/SubjectSubscription.js");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */








var SubjectSubscriber =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectSubscriber, _super);

  function SubjectSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.destination = destination;
    return _this;
  }

  return SubjectSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_2__["Subscriber"]);



var Subject =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Subject, _super);

  function Subject() {
    var _this = _super.call(this) || this;

    _this.observers = [];
    _this.closed = false;
    _this.isStopped = false;
    _this.hasError = false;
    _this.thrownError = null;
    return _this;
  }

  Subject.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_6__["rxSubscriber"]] = function () {
    return new SubjectSubscriber(this);
  };

  Subject.prototype.lift = function (operator) {
    var subject = new AnonymousSubject(this, this);
    subject.operator = operator;
    return subject;
  };

  Subject.prototype.next = function (value) {
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
    }

    if (!this.isStopped) {
      var observers = this.observers;
      var len = observers.length;
      var copy = observers.slice();

      for (var i = 0; i < len; i++) {
        copy[i].next(value);
      }
    }
  };

  Subject.prototype.error = function (err) {
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
    }

    this.hasError = true;
    this.thrownError = err;
    this.isStopped = true;
    var observers = this.observers;
    var len = observers.length;
    var copy = observers.slice();

    for (var i = 0; i < len; i++) {
      copy[i].error(err);
    }

    this.observers.length = 0;
  };

  Subject.prototype.complete = function () {
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
    }

    this.isStopped = true;
    var observers = this.observers;
    var len = observers.length;
    var copy = observers.slice();

    for (var i = 0; i < len; i++) {
      copy[i].complete();
    }

    this.observers.length = 0;
  };

  Subject.prototype.unsubscribe = function () {
    this.isStopped = true;
    this.closed = true;
    this.observers = null;
  };

  Subject.prototype._trySubscribe = function (subscriber) {
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
    } else {
      return _super.prototype._trySubscribe.call(this, subscriber);
    }
  };

  Subject.prototype._subscribe = function (subscriber) {
    if (this.closed) {
      throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_4__["ObjectUnsubscribedError"]();
    } else if (this.hasError) {
      subscriber.error(this.thrownError);
      return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
    } else if (this.isStopped) {
      subscriber.complete();
      return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
    } else {
      this.observers.push(subscriber);
      return new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_5__["SubjectSubscription"](this, subscriber);
    }
  };

  Subject.prototype.asObservable = function () {
    var observable = new _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
    observable.source = this;
    return observable;
  };

  Subject.create = function (destination, source) {
    return new AnonymousSubject(destination, source);
  };

  return Subject;
}(_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]);



var AnonymousSubject =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnonymousSubject, _super);

  function AnonymousSubject(destination, source) {
    var _this = _super.call(this) || this;

    _this.destination = destination;
    _this.source = source;
    return _this;
  }

  AnonymousSubject.prototype.next = function (value) {
    var destination = this.destination;

    if (destination && destination.next) {
      destination.next(value);
    }
  };

  AnonymousSubject.prototype.error = function (err) {
    var destination = this.destination;

    if (destination && destination.error) {
      this.destination.error(err);
    }
  };

  AnonymousSubject.prototype.complete = function () {
    var destination = this.destination;

    if (destination && destination.complete) {
      this.destination.complete();
    }
  };

  AnonymousSubject.prototype._subscribe = function (subscriber) {
    var source = this.source;

    if (source) {
      return this.source.subscribe(subscriber);
    } else {
      return _Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
    }
  };

  return AnonymousSubject;
}(Subject);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/SubjectSubscription.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectSubscription", function() { return SubjectSubscription; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */



var SubjectSubscription =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectSubscription, _super);

  function SubjectSubscription(subject, subscriber) {
    var _this = _super.call(this) || this;

    _this.subject = subject;
    _this.subscriber = subscriber;
    _this.closed = false;
    return _this;
  }

  SubjectSubscription.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }

    this.closed = true;
    var subject = this.subject;
    var observers = subject.observers;
    this.subject = null;

    if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
      return;
    }

    var subscriberIndex = observers.indexOf(this.subscriber);

    if (subscriberIndex !== -1) {
      observers.splice(subscriberIndex, 1);
    }
  };

  return SubjectSubscription;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/Subscriber.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscriber", function() { return Subscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeSubscriber", function() { return SafeSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observer.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/config.js");
/* harmony import */ var _util_hostReportError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */








var Subscriber =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Subscriber, _super);

  function Subscriber(destinationOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this.syncErrorValue = null;
    _this.syncErrorThrown = false;
    _this.syncErrorThrowable = false;
    _this.isStopped = false;

    switch (arguments.length) {
      case 0:
        _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"];
        break;

      case 1:
        if (!destinationOrNext) {
          _this.destination = _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"];
          break;
        }

        if (typeof destinationOrNext === 'object') {
          if (destinationOrNext instanceof Subscriber) {
            _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
            _this.destination = destinationOrNext;
            destinationOrNext.add(_this);
          } else {
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext);
          }

          break;
        }

      default:
        _this.syncErrorThrowable = true;
        _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
        break;
    }

    return _this;
  }

  Subscriber.prototype[_internal_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_4__["rxSubscriber"]] = function () {
    return this;
  };

  Subscriber.create = function (next, error, complete) {
    var subscriber = new Subscriber(next, error, complete);
    subscriber.syncErrorThrowable = false;
    return subscriber;
  };

  Subscriber.prototype.next = function (value) {
    if (!this.isStopped) {
      this._next(value);
    }
  };

  Subscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      this.isStopped = true;

      this._error(err);
    }
  };

  Subscriber.prototype.complete = function () {
    if (!this.isStopped) {
      this.isStopped = true;

      this._complete();
    }
  };

  Subscriber.prototype.unsubscribe = function () {
    if (this.closed) {
      return;
    }

    this.isStopped = true;

    _super.prototype.unsubscribe.call(this);
  };

  Subscriber.prototype._next = function (value) {
    this.destination.next(value);
  };

  Subscriber.prototype._error = function (err) {
    this.destination.error(err);
    this.unsubscribe();
  };

  Subscriber.prototype._complete = function () {
    this.destination.complete();
    this.unsubscribe();
  };

  Subscriber.prototype._unsubscribeAndRecycle = function () {
    var _a = this,
        _parent = _a._parent,
        _parents = _a._parents;

    this._parent = null;
    this._parents = null;
    this.unsubscribe();
    this.closed = false;
    this.isStopped = false;
    this._parent = _parent;
    this._parents = _parents;
    return this;
  };

  return Subscriber;
}(_Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"]);



var SafeSubscriber =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SafeSubscriber, _super);

  function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
    var _this = _super.call(this) || this;

    _this._parentSubscriber = _parentSubscriber;
    var next;
    var context = _this;

    if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(observerOrNext)) {
      next = observerOrNext;
    } else if (observerOrNext) {
      next = observerOrNext.next;
      error = observerOrNext.error;
      complete = observerOrNext.complete;

      if (observerOrNext !== _Observer__WEBPACK_IMPORTED_MODULE_2__["empty"]) {
        context = Object.create(observerOrNext);

        if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(context.unsubscribe)) {
          _this.add(context.unsubscribe.bind(context));
        }

        context.unsubscribe = _this.unsubscribe.bind(_this);
      }
    }

    _this._context = context;
    _this._next = next;
    _this._error = error;
    _this._complete = complete;
    return _this;
  }

  SafeSubscriber.prototype.next = function (value) {
    if (!this.isStopped && this._next) {
      var _parentSubscriber = this._parentSubscriber;

      if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
        this.__tryOrUnsub(this._next, value);
      } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.error = function (err) {
    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;
      var useDeprecatedSynchronousErrorHandling = _config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling;

      if (this._error) {
        if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(this._error, err);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, this._error, err);

          this.unsubscribe();
        }
      } else if (!_parentSubscriber.syncErrorThrowable) {
        this.unsubscribe();

        if (useDeprecatedSynchronousErrorHandling) {
          throw err;
        }

        Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
      } else {
        if (useDeprecatedSynchronousErrorHandling) {
          _parentSubscriber.syncErrorValue = err;
          _parentSubscriber.syncErrorThrown = true;
        } else {
          Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
        }

        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.complete = function () {
    var _this = this;

    if (!this.isStopped) {
      var _parentSubscriber = this._parentSubscriber;

      if (this._complete) {
        var wrappedComplete = function () {
          return _this._complete.call(_this._context);
        };

        if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(wrappedComplete);

          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, wrappedComplete);

          this.unsubscribe();
        }
      } else {
        this.unsubscribe();
      }
    }
  };

  SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
    try {
      fn.call(this._context, value);
    } catch (err) {
      this.unsubscribe();

      if (_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
        throw err;
      } else {
        Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
      }
    }
  };

  SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
    if (!_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
      throw new Error('bad call');
    }

    try {
      fn.call(this._context, value);
    } catch (err) {
      if (_config__WEBPACK_IMPORTED_MODULE_5__["config"].useDeprecatedSynchronousErrorHandling) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      } else {
        Object(_util_hostReportError__WEBPACK_IMPORTED_MODULE_6__["hostReportError"])(err);
        return true;
      }
    }

    return false;
  };

  SafeSubscriber.prototype._unsubscribe = function () {
    var _parentSubscriber = this._parentSubscriber;
    this._context = null;
    this._parentSubscriber = null;

    _parentSubscriber.unsubscribe();
  };

  return SafeSubscriber;
}(Subscriber);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/Subscription.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscription", function() { return Subscription; });
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isObject.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js");
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */





var Subscription =
/*@__PURE__*/
function () {
  function Subscription(unsubscribe) {
    this.closed = false;
    this._parent = null;
    this._parents = null;
    this._subscriptions = null;

    if (unsubscribe) {
      this._unsubscribe = unsubscribe;
    }
  }

  Subscription.prototype.unsubscribe = function () {
    var hasErrors = false;
    var errors;

    if (this.closed) {
      return;
    }

    var _a = this,
        _parent = _a._parent,
        _parents = _a._parents,
        _unsubscribe = _a._unsubscribe,
        _subscriptions = _a._subscriptions;

    this.closed = true;
    this._parent = null;
    this._parents = null;
    this._subscriptions = null;
    var index = -1;
    var len = _parents ? _parents.length : 0;

    while (_parent) {
      _parent.remove(this);

      _parent = ++index < len && _parents[index] || null;
    }

    if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(_unsubscribe)) {
      try {
        _unsubscribe.call(this);
      } catch (e) {
        hasErrors = true;
        errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"] ? flattenUnsubscriptionErrors(e.errors) : [e];
      }
    }

    if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(_subscriptions)) {
      index = -1;
      len = _subscriptions.length;

      while (++index < len) {
        var sub = _subscriptions[index];

        if (Object(_util_isObject__WEBPACK_IMPORTED_MODULE_1__["isObject"])(sub)) {
          try {
            sub.unsubscribe();
          } catch (e) {
            hasErrors = true;
            errors = errors || [];

            if (e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"]) {
              errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
            } else {
              errors.push(e);
            }
          }
        }
      }
    }

    if (hasErrors) {
      throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"](errors);
    }
  };

  Subscription.prototype.add = function (teardown) {
    var subscription = teardown;

    switch (typeof teardown) {
      case 'function':
        subscription = new Subscription(teardown);

      case 'object':
        if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
          return subscription;
        } else if (this.closed) {
          subscription.unsubscribe();
          return subscription;
        } else if (!(subscription instanceof Subscription)) {
          var tmp = subscription;
          subscription = new Subscription();
          subscription._subscriptions = [tmp];
        }

        break;

      default:
        {
          if (!teardown) {
            return Subscription.EMPTY;
          }

          throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
    }

    if (subscription._addParent(this)) {
      var subscriptions = this._subscriptions;

      if (subscriptions) {
        subscriptions.push(subscription);
      } else {
        this._subscriptions = [subscription];
      }
    }

    return subscription;
  };

  Subscription.prototype.remove = function (subscription) {
    var subscriptions = this._subscriptions;

    if (subscriptions) {
      var subscriptionIndex = subscriptions.indexOf(subscription);

      if (subscriptionIndex !== -1) {
        subscriptions.splice(subscriptionIndex, 1);
      }
    }
  };

  Subscription.prototype._addParent = function (parent) {
    var _a = this,
        _parent = _a._parent,
        _parents = _a._parents;

    if (_parent === parent) {
      return false;
    } else if (!_parent) {
      this._parent = parent;
      return true;
    } else if (!_parents) {
      this._parents = [parent];
      return true;
    } else if (_parents.indexOf(parent) === -1) {
      _parents.push(parent);

      return true;
    }

    return false;
  };

  Subscription.EMPTY = function (empty) {
    empty.closed = true;
    return empty;
  }(new Subscription());

  return Subscription;
}();



function flattenUnsubscriptionErrors(errors) {
  return errors.reduce(function (errs, err) {
    return errs.concat(err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_3__["UnsubscriptionError"] ? err.errors : err);
  }, []);
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
  Promise: undefined,

  set useDeprecatedSynchronousErrorHandling(value) {
    if (value) {
      var error =
      /*@__PURE__*/
      new Error();
      /*@__PURE__*/

      console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
    } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
      /*@__PURE__*/
      console.log('RxJS: Back to a better error behavior. Thank you. <3');
    }

    _enable_super_gross_mode_that_will_cause_bad_things = value;
  },

  get useDeprecatedSynchronousErrorHandling() {
    return _enable_super_gross_mode_that_will_cause_bad_things;
  }

};

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/ConnectableObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectableObservable", function() { return ConnectableObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectableObservableDescriptor", function() { return connectableObservableDescriptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subject.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _operators_refCount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/operators/refCount.js");
/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */







var ConnectableObservable =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConnectableObservable, _super);

  function ConnectableObservable(source, subjectFactory) {
    var _this = _super.call(this) || this;

    _this.source = source;
    _this.subjectFactory = subjectFactory;
    _this._refCount = 0;
    _this._isComplete = false;
    return _this;
  }

  ConnectableObservable.prototype._subscribe = function (subscriber) {
    return this.getSubject().subscribe(subscriber);
  };

  ConnectableObservable.prototype.getSubject = function () {
    var subject = this._subject;

    if (!subject || subject.isStopped) {
      this._subject = this.subjectFactory();
    }

    return this._subject;
  };

  ConnectableObservable.prototype.connect = function () {
    var connection = this._connection;

    if (!connection) {
      this._isComplete = false;
      connection = this._connection = new _Subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
      connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));

      if (connection.closed) {
        this._connection = null;
        connection = _Subscription__WEBPACK_IMPORTED_MODULE_4__["Subscription"].EMPTY;
      } else {
        this._connection = connection;
      }
    }

    return connection;
  };

  ConnectableObservable.prototype.refCount = function () {
    return Object(_operators_refCount__WEBPACK_IMPORTED_MODULE_5__["refCount"])()(this);
  };

  return ConnectableObservable;
}(_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]);


var connectableProto = ConnectableObservable.prototype;
var connectableObservableDescriptor = {
  operator: {
    value: null
  },
  _refCount: {
    value: 0,
    writable: true
  },
  _subject: {
    value: null,
    writable: true
  },
  _connection: {
    value: null,
    writable: true
  },
  _subscribe: {
    value: connectableProto._subscribe
  },
  _isComplete: {
    value: connectableProto._isComplete,
    writable: true
  },
  getSubject: {
    value: connectableProto.getSubject
  },
  connect: {
    value: connectableProto.connect
  },
  refCount: {
    value: connectableProto.refCount
  }
};

var ConnectableSubscriber =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConnectableSubscriber, _super);

  function ConnectableSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  ConnectableSubscriber.prototype._error = function (err) {
    this._unsubscribe();

    _super.prototype._error.call(this, err);
  };

  ConnectableSubscriber.prototype._complete = function () {
    this.connectable._isComplete = true;

    this._unsubscribe();

    _super.prototype._complete.call(this);
  };

  ConnectableSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (connectable) {
      this.connectable = null;
      var connection = connectable._connection;
      connectable._refCount = 0;
      connectable._subject = null;
      connectable._connection = null;

      if (connection) {
        connection.unsubscribe();
      }
    }
  };

  return ConnectableSubscriber;
}(_Subject__WEBPACK_IMPORTED_MODULE_1__["SubjectSubscriber"]);

var RefCountOperator =
/*@__PURE__*/
function () {
  function RefCountOperator(connectable) {
    this.connectable = connectable;
  }

  RefCountOperator.prototype.call = function (subscriber, source) {
    var connectable = this.connectable;
    connectable._refCount++;
    var refCounter = new RefCountSubscriber(subscriber, connectable);
    var subscription = source.subscribe(refCounter);

    if (!refCounter.closed) {
      refCounter.connection = connectable.connect();
    }

    return subscription;
  };

  return RefCountOperator;
}();

var RefCountSubscriber =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RefCountSubscriber, _super);

  function RefCountSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  RefCountSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (!connectable) {
      this.connection = null;
      return;
    }

    this.connectable = null;
    var refCount = connectable._refCount;

    if (refCount <= 0) {
      this.connection = null;
      return;
    }

    connectable._refCount = refCount - 1;

    if (refCount > 1) {
      this.connection = null;
      return;
    }

    var connection = this.connection;
    var sharedConnection = connectable._connection;
    this.connection = null;

    if (sharedConnection && (!connection || sharedConnection === connection)) {
      sharedConnection.unsubscribe();
    }
  };

  return RefCountSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_3__["Subscriber"]);

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/bindCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindCallback", function() { return bindCallback; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */






function bindCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_5__["isScheduler"])(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return bindCallback(callbackFunc, scheduler).apply(void 0, args).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) {
          return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_4__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
        }));
      };
    }
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var context = this;
    var subject;
    var params = {
      context: context,
      subject: subject,
      callbackFunc: callbackFunc,
      scheduler: scheduler
    };
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
      if (!scheduler) {
        if (!subject) {
          subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();

          var handler = function () {
            var innerArgs = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i] = arguments[_i];
            }

            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };

          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }

        return subject.subscribe(subscriber);
      } else {
        var state = {
          args: args,
          subscriber: subscriber,
          params: params
        };
        return scheduler.schedule(dispatch, 0, state);
      }
    });
  };
}

function dispatch(state) {
  var _this = this;

  var self = this;
  var args = state.args,
      subscriber = state.subscriber,
      params = state.params;
  var callbackFunc = params.callbackFunc,
      context = params.context,
      scheduler = params.scheduler;
  var subject = params.subject;

  if (!subject) {
    subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();

    var handler = function () {
      var innerArgs = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }

      var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;

      _this.add(scheduler.schedule(dispatchNext, 0, {
        value: value,
        subject: subject
      }));
    };

    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      subject.error(err);
    }
  }

  this.add(subject.subscribe(subscriber));
}

function dispatchNext(state) {
  var value = state.value,
      subject = state.subject;
  subject.next(value);
  subject.complete();
}

function dispatchError(state) {
  var err = state.err,
      subject = state.subject;
  subject.error(err);
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/bindNodeCallback.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindNodeCallback", function() { return bindNodeCallback; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/AsyncSubject.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/canReportError.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isArray.js");
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */






function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_4__["isScheduler"])(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function () {
        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_2__["map"])(function (args) {
          return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_5__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
        }));
      };
    }
  }

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var params = {
      subject: undefined,
      args: args,
      callbackFunc: callbackFunc,
      scheduler: scheduler,
      context: this
    };
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
      var context = params.context;
      var subject = params.subject;

      if (!scheduler) {
        if (!subject) {
          subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();

          var handler = function () {
            var innerArgs = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              innerArgs[_i] = arguments[_i];
            }

            var err = innerArgs.shift();

            if (err) {
              subject.error(err);
              return;
            }

            subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
            subject.complete();
          };

          try {
            callbackFunc.apply(context, args.concat([handler]));
          } catch (err) {
            if (Object(_util_canReportError__WEBPACK_IMPORTED_MODULE_3__["canReportError"])(subject)) {
              subject.error(err);
            } else {
              console.warn(err);
            }
          }
        }

        return subject.subscribe(subscriber);
      } else {
        return scheduler.schedule(dispatch, 0, {
          params: params,
          subscriber: subscriber,
          context: context
        });
      }
    });
  };
}

function dispatch(state) {
  var _this = this;

  var params = state.params,
      subscriber = state.subscriber,
      context = state.context;
  var callbackFunc = params.callbackFunc,
      args = params.args,
      scheduler = params.scheduler;
  var subject = params.subject;

  if (!subject) {
    subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_1__["AsyncSubject"]();

    var handler = function () {
      var innerArgs = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        innerArgs[_i] = arguments[_i];
      }

      var err = innerArgs.shift();

      if (err) {
        _this.add(scheduler.schedule(dispatchError, 0, {
          err: err,
          subject: subject
        }));
      } else {
        var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;

        _this.add(scheduler.schedule(dispatchNext, 0, {
          value: value,
          subject: subject
        }));
      }
    };

    try {
      callbackFunc.apply(context, args.concat([handler]));
    } catch (err) {
      this.add(scheduler.schedule(dispatchError, 0, {
        err: err,
        subject: subject
      }));
    }
  }

  this.add(subject.subscribe(subscriber));
}

function dispatchNext(arg) {
  var value = arg.value,
      subject = arg.subject;
  subject.next(value);
  subject.complete();
}

function dispatchError(arg) {
  var err = arg.err,
      subject = arg.subject;
  subject.error(err);
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/combineLatest.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineLatest", function() { return combineLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestOperator", function() { return CombineLatestOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombineLatestSubscriber", function() { return CombineLatestSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */






var NONE = {};
function combineLatest() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var resultSelector = null;
  var scheduler = null;

  if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(observables[observables.length - 1])) {
    scheduler = observables.pop();
  }

  if (typeof observables[observables.length - 1] === 'function') {
    resultSelector = observables.pop();
  }

  if (observables.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(observables[0])) {
    observables = observables[0];
  }

  return Object(_fromArray__WEBPACK_IMPORTED_MODULE_5__["fromArray"])(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}

var CombineLatestOperator =
/*@__PURE__*/
function () {
  function CombineLatestOperator(resultSelector) {
    this.resultSelector = resultSelector;
  }

  CombineLatestOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
  };

  return CombineLatestOperator;
}();



var CombineLatestSubscriber =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CombineLatestSubscriber, _super);

  function CombineLatestSubscriber(destination, resultSelector) {
    var _this = _super.call(this, destination) || this;

    _this.resultSelector = resultSelector;
    _this.active = 0;
    _this.values = [];
    _this.observables = [];
    return _this;
  }

  CombineLatestSubscriber.prototype._next = function (observable) {
    this.values.push(NONE);
    this.observables.push(observable);
  };

  CombineLatestSubscriber.prototype._complete = function () {
    var observables = this.observables;
    var len = observables.length;

    if (len === 0) {
      this.destination.complete();
    } else {
      this.active = len;
      this.toRespond = len;

      for (var i = 0; i < len; i++) {
        var observable = observables[i];
        this.add(Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(this, observable, observable, i));
      }
    }
  };

  CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
    if ((this.active -= 1) === 0) {
      this.destination.complete();
    }
  };

  CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    var values = this.values;
    var oldVal = values[outerIndex];
    var toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
    values[outerIndex] = innerValue;

    if (toRespond === 0) {
      if (this.resultSelector) {
        this._tryResultSelector(values);
      } else {
        this.destination.next(values.slice());
      }
    }
  };

  CombineLatestSubscriber.prototype._tryResultSelector = function (values) {
    var result;

    try {
      result = this.resultSelector.apply(this, values);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return CombineLatestSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__["OuterSubscriber"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/concat.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony import */ var _of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/of.js");
/* harmony import */ var _operators_concatAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/operators/concatAll.js");
/** PURE_IMPORTS_START _of,_operators_concatAll PURE_IMPORTS_END */


function concat() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  return Object(_operators_concatAll__WEBPACK_IMPORTED_MODULE_1__["concatAll"])()(_of__WEBPACK_IMPORTED_MODULE_0__["of"].apply(void 0, observables));
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/defer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */



function defer(observableFactory) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
    var input;

    try {
      input = observableFactory();
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var source = input ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(input) : Object(_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])();
    return source.subscribe(subscriber);
  });
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/empty.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY", function() { return EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyScheduled", function() { return emptyScheduled; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

var EMPTY =
/*@__PURE__*/
new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
  return subscriber.complete();
});
function empty(scheduler) {
  return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
    return scheduler.schedule(function () {
      return subscriber.complete();
    });
  });
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/forkJoin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forkJoin", function() { return forkJoin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/operators/map.js");
/** PURE_IMPORTS_START tslib,_Observable,_util_isArray,_empty,_util_subscribeToResult,_OuterSubscriber,_operators_map PURE_IMPORTS_END */







function forkJoin() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  var resultSelector;

  if (typeof sources[sources.length - 1] === 'function') {
    resultSelector = sources.pop();
  }

  if (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(sources[0])) {
    sources = sources[0];
  }

  if (sources.length === 0) {
    return _empty__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
  }

  if (resultSelector) {
    return forkJoin(sources).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_6__["map"])(function (args) {
      return resultSelector.apply(void 0, args);
    }));
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (subscriber) {
    return new ForkJoinSubscriber(subscriber, sources);
  });
}

var ForkJoinSubscriber =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ForkJoinSubscriber, _super);

  function ForkJoinSubscriber(destination, sources) {
    var _this = _super.call(this, destination) || this;

    _this.sources = sources;
    _this.completed = 0;
    _this.haveValues = 0;
    var len = sources.length;
    _this.values = new Array(len);

    for (var i = 0; i < len; i++) {
      var source = sources[i];
      var innerSubscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(_this, source, null, i);

      if (innerSubscription) {
        _this.add(innerSubscription);
      }
    }

    return _this;
  }

  ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.values[outerIndex] = innerValue;

    if (!innerSub._hasValue) {
      innerSub._hasValue = true;
      this.haveValues++;
    }
  };

  ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
    var _a = this,
        destination = _a.destination,
        haveValues = _a.haveValues,
        values = _a.values;

    var len = values.length;

    if (!innerSub._hasValue) {
      destination.complete();
      return;
    }

    this.completed++;

    if (this.completed !== len) {
      return;
    }

    if (haveValues === len) {
      destination.next(values);
    }

    destination.complete();
  };

  return ForkJoinSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_5__["OuterSubscriber"]);

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/from.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isPromise.js");
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isArrayLike.js");
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isInteropObservable.js");
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isIterable.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _fromPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/fromPromise.js");
/* harmony import */ var _fromIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/fromIterable.js");
/* harmony import */ var _fromObservable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/fromObservable.js");
/* harmony import */ var _util_subscribeTo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/subscribeTo.js");
/** PURE_IMPORTS_START _Observable,_util_isPromise,_util_isArrayLike,_util_isInteropObservable,_util_isIterable,_fromArray,_fromPromise,_fromIterable,_fromObservable,_util_subscribeTo PURE_IMPORTS_END */










function from(input, scheduler) {
  if (!scheduler) {
    if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
      return input;
    }

    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeTo__WEBPACK_IMPORTED_MODULE_9__["subscribeTo"])(input));
  }

  if (input != null) {
    if (Object(_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_3__["isInteropObservable"])(input)) {
      return Object(_fromObservable__WEBPACK_IMPORTED_MODULE_8__["fromObservable"])(input, scheduler);
    } else if (Object(_util_isPromise__WEBPACK_IMPORTED_MODULE_1__["isPromise"])(input)) {
      return Object(_fromPromise__WEBPACK_IMPORTED_MODULE_6__["fromPromise"])(input, scheduler);
    } else if (Object(_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__["isArrayLike"])(input)) {
      return Object(_fromArray__WEBPACK_IMPORTED_MODULE_5__["fromArray"])(input, scheduler);
    } else if (Object(_util_isIterable__WEBPACK_IMPORTED_MODULE_4__["isIterable"])(input) || typeof input === 'string') {
      return Object(_fromIterable__WEBPACK_IMPORTED_MODULE_7__["fromIterable"])(input, scheduler);
    }
  }

  throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/fromArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromArray", function() { return fromArray; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _util_subscribeToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/subscribeToArray.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToArray PURE_IMPORTS_END */



function fromArray(input, scheduler) {
  if (!scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToArray__WEBPACK_IMPORTED_MODULE_2__["subscribeToArray"])(input));
  } else {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
      var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
      var i = 0;
      sub.add(scheduler.schedule(function () {
        if (i === input.length) {
          subscriber.complete();
          return;
        }

        subscriber.next(input[i++]);

        if (!subscriber.closed) {
          sub.add(this.schedule());
        }
      }));
      return sub;
    });
  }
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/fromEvent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEvent", function() { return fromEvent; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/operators/map.js");
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




var toString = Object.prototype.toString;
function fromEvent(target, eventName, options, resultSelector) {
  if (Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(options)) {
    resultSelector = options;
    options = undefined;
  }

  if (resultSelector) {
    return fromEvent(target, eventName, options).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (args) {
      return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
    function handler(e) {
      if (arguments.length > 1) {
        subscriber.next(Array.prototype.slice.call(arguments));
      } else {
        subscriber.next(e);
      }
    }

    setupSubscription(target, eventName, handler, subscriber, options);
  });
}

function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
  var unsubscribe;

  if (isEventTarget(sourceObj)) {
    var source_1 = sourceObj;
    sourceObj.addEventListener(eventName, handler, options);

    unsubscribe = function () {
      return source_1.removeEventListener(eventName, handler, options);
    };
  } else if (isJQueryStyleEventEmitter(sourceObj)) {
    var source_2 = sourceObj;
    sourceObj.on(eventName, handler);

    unsubscribe = function () {
      return source_2.off(eventName, handler);
    };
  } else if (isNodeStyleEventEmitter(sourceObj)) {
    var source_3 = sourceObj;
    sourceObj.addListener(eventName, handler);

    unsubscribe = function () {
      return source_3.removeListener(eventName, handler);
    };
  } else if (sourceObj && sourceObj.length) {
    for (var i = 0, len = sourceObj.length; i < len; i++) {
      setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
    }
  } else {
    throw new TypeError('Invalid event target');
  }

  subscriber.add(unsubscribe);
}

function isNodeStyleEventEmitter(sourceObj) {
  return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}

function isJQueryStyleEventEmitter(sourceObj) {
  return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}

function isEventTarget(sourceObj) {
  return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/fromEventPattern.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEventPattern", function() { return fromEventPattern; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isFunction.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/operators/map.js");
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */




function fromEventPattern(addHandler, removeHandler, resultSelector) {
  if (resultSelector) {
    return fromEventPattern(addHandler, removeHandler).pipe(Object(_operators_map__WEBPACK_IMPORTED_MODULE_3__["map"])(function (args) {
      return Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
    var handler = function () {
      var e = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        e[_i] = arguments[_i];
      }

      return subscriber.next(e.length === 1 ? e[0] : e);
    };

    var retValue;

    try {
      retValue = addHandler(handler);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    if (!Object(_util_isFunction__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(removeHandler)) {
      return undefined;
    }

    return function () {
      return removeHandler(handler, retValue);
    };
  });
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/fromIterable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromIterable", function() { return fromIterable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/* harmony import */ var _util_subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator,_util_subscribeToIterable PURE_IMPORTS_END */




function fromIterable(input, scheduler) {
  if (!input) {
    throw new Error('Iterable cannot be null');
  }

  if (!scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__["subscribeToIterable"])(input));
  } else {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
      var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
      var iterator;
      sub.add(function () {
        if (iterator && typeof iterator.return === 'function') {
          iterator.return();
        }
      });
      sub.add(scheduler.schedule(function () {
        iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__["iterator"]]();
        sub.add(scheduler.schedule(function () {
          if (subscriber.closed) {
            return;
          }

          var value;
          var done;

          try {
            var result = iterator.next();
            value = result.value;
            done = result.done;
          } catch (err) {
            subscriber.error(err);
            return;
          }

          if (done) {
            subscriber.complete();
          } else {
            subscriber.next(value);
            this.schedule();
          }
        }));
      }));
      return sub;
    });
  }
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/fromObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromObservable", function() { return fromObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/symbol/observable.js");
/* harmony import */ var _util_subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable,_util_subscribeToObservable PURE_IMPORTS_END */




function fromObservable(input, scheduler) {
  if (!scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToObservable__WEBPACK_IMPORTED_MODULE_3__["subscribeToObservable"])(input));
  } else {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
      var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
      sub.add(scheduler.schedule(function () {
        var observable = input[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__["observable"]]();
        sub.add(observable.subscribe({
          next: function (value) {
            sub.add(scheduler.schedule(function () {
              return subscriber.next(value);
            }));
          },
          error: function (err) {
            sub.add(scheduler.schedule(function () {
              return subscriber.error(err);
            }));
          },
          complete: function () {
            sub.add(scheduler.schedule(function () {
              return subscriber.complete();
            }));
          }
        }));
      }));
      return sub;
    });
  }
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/fromPromise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _util_subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js");
/** PURE_IMPORTS_START _Observable,_Subscription,_util_subscribeToPromise PURE_IMPORTS_END */



function fromPromise(input, scheduler) {
  if (!scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](Object(_util_subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__["subscribeToPromise"])(input));
  } else {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
      var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
      sub.add(scheduler.schedule(function () {
        return input.then(function (value) {
          sub.add(scheduler.schedule(function () {
            subscriber.next(value);
            sub.add(scheduler.schedule(function () {
              return subscriber.complete();
            }));
          }));
        }, function (err) {
          sub.add(scheduler.schedule(function () {
            return subscriber.error(err);
          }));
        });
      }));
      return sub;
    });
  }
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/generate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/identity.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */



function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
  var resultSelector;
  var initialState;

  if (arguments.length == 1) {
    var options = initialStateOrOptions;
    initialState = options.initialState;
    condition = options.condition;
    iterate = options.iterate;
    resultSelector = options.resultSelector || _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
    scheduler = options.scheduler;
  } else if (resultSelectorOrObservable === undefined || Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_2__["isScheduler"])(resultSelectorOrObservable)) {
    initialState = initialStateOrOptions;
    resultSelector = _util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"];
    scheduler = resultSelectorOrObservable;
  } else {
    initialState = initialStateOrOptions;
    resultSelector = resultSelectorOrObservable;
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
    var state = initialState;

    if (scheduler) {
      return scheduler.schedule(dispatch, 0, {
        subscriber: subscriber,
        iterate: iterate,
        condition: condition,
        resultSelector: resultSelector,
        state: state
      });
    }

    do {
      if (condition) {
        var conditionResult = void 0;

        try {
          conditionResult = condition(state);
        } catch (err) {
          subscriber.error(err);
          return undefined;
        }

        if (!conditionResult) {
          subscriber.complete();
          break;
        }
      }

      var value = void 0;

      try {
        value = resultSelector(state);
      } catch (err) {
        subscriber.error(err);
        return undefined;
      }

      subscriber.next(value);

      if (subscriber.closed) {
        break;
      }

      try {
        state = iterate(state);
      } catch (err) {
        subscriber.error(err);
        return undefined;
      }
    } while (true);

    return undefined;
  });
}

function dispatch(state) {
  var subscriber = state.subscriber,
      condition = state.condition;

  if (subscriber.closed) {
    return undefined;
  }

  if (state.needIterate) {
    try {
      state.state = state.iterate(state.state);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }
  } else {
    state.needIterate = true;
  }

  if (condition) {
    var conditionResult = void 0;

    try {
      conditionResult = condition(state.state);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    if (!conditionResult) {
      subscriber.complete();
      return undefined;
    }

    if (subscriber.closed) {
      return undefined;
    }
  }

  var value;

  try {
    value = state.resultSelector(state.state);
  } catch (err) {
    subscriber.error(err);
    return undefined;
  }

  if (subscriber.closed) {
    return undefined;
  }

  subscriber.next(value);

  if (subscriber.closed) {
    return undefined;
  }

  return this.schedule(state);
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/iif.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iif", function() { return iif; });
/* harmony import */ var _defer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/defer.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */


function iif(condition, trueResult, falseResult) {
  if (trueResult === void 0) {
    trueResult = _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
  }

  if (falseResult === void 0) {
    falseResult = _empty__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
  }

  return Object(_defer__WEBPACK_IMPORTED_MODULE_0__["defer"])(function () {
    return condition() ? trueResult : falseResult;
  });
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/interval.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interval", function() { return interval; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isNumeric.js");
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */



function interval(period, scheduler) {
  if (period === void 0) {
    period = 0;
  }

  if (scheduler === void 0) {
    scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
  }

  if (!Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(period) || period < 0) {
    period = 0;
  }

  if (!scheduler || typeof scheduler.schedule !== 'function') {
    scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
    subscriber.add(scheduler.schedule(dispatch, period, {
      subscriber: subscriber,
      counter: 0,
      period: period
    }));
    return subscriber;
  });
}

function dispatch(state) {
  var subscriber = state.subscriber,
      counter = state.counter,
      period = state.period;
  subscriber.next(counter);
  this.schedule({
    subscriber: subscriber,
    counter: counter + 1,
    period: period
  }, period);
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/merge.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/operators/mergeAll.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */




function merge() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var concurrent = Number.POSITIVE_INFINITY;
  var scheduler = null;
  var last = observables[observables.length - 1];

  if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__["isScheduler"])(last)) {
    scheduler = observables.pop();

    if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
      concurrent = observables.pop();
    }
  } else if (typeof last === 'number') {
    concurrent = observables.pop();
  }

  if (scheduler === null && observables.length === 1 && observables[0] instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
    return observables[0];
  }

  return Object(_operators_mergeAll__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])(concurrent)(Object(_fromArray__WEBPACK_IMPORTED_MODULE_3__["fromArray"])(observables, scheduler));
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/never.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEVER", function() { return NEVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "never", function() { return never; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/noop.js");
/** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */


var NEVER =
/*@__PURE__*/
new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](_util_noop__WEBPACK_IMPORTED_MODULE_1__["noop"]);
function never() {
  return NEVER;
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/of.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "of", function() { return of; });
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/empty.js");
/* harmony import */ var _scalar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/scalar.js");
/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_empty,_scalar PURE_IMPORTS_END */




function of() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var scheduler = args[args.length - 1];

  if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__["isScheduler"])(scheduler)) {
    args.pop();
  } else {
    scheduler = undefined;
  }

  switch (args.length) {
    case 0:
      return Object(_empty__WEBPACK_IMPORTED_MODULE_2__["empty"])(scheduler);

    case 1:
      return scheduler ? Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(args, scheduler) : Object(_scalar__WEBPACK_IMPORTED_MODULE_3__["scalar"])(args[0]);

    default:
      return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(args, scheduler);
  }
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/onErrorResumeNext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onErrorResumeNext", function() { return onErrorResumeNext; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */




function onErrorResumeNext() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  if (sources.length === 0) {
    return _empty__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
  }

  var first = sources[0],
      remainder = sources.slice(1);

  if (sources.length === 1 && Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(first)) {
    return onErrorResumeNext.apply(void 0, first);
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
    var subNext = function () {
      return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber));
    };

    return Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(first).subscribe({
      next: function (value) {
        subscriber.next(value);
      },
      error: subNext,
      complete: subNext
    });
  });
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/pairs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */


function pairs(obj, scheduler) {
  if (!scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length && !subscriber.closed; i++) {
        var key = keys[i];

        if (obj.hasOwnProperty(key)) {
          subscriber.next([key, obj[key]]);
        }
      }

      subscriber.complete();
    });
  } else {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
      var keys = Object.keys(obj);
      var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
      subscription.add(scheduler.schedule(dispatch, 0, {
        keys: keys,
        index: 0,
        subscriber: subscriber,
        subscription: subscription,
        obj: obj
      }));
      return subscription;
    });
  }
}
function dispatch(state) {
  var keys = state.keys,
      index = state.index,
      subscriber = state.subscriber,
      subscription = state.subscription,
      obj = state.obj;

  if (!subscriber.closed) {
    if (index < keys.length) {
      var key = keys[index];
      subscriber.next([key, obj[key]]);
      subscription.add(this.schedule({
        keys: keys,
        index: index + 1,
        subscriber: subscriber,
        subscription: subscription,
        obj: obj
      }));
    } else {
      subscriber.complete();
    }
  }
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/race.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "race", function() { return race; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceOperator", function() { return RaceOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaceSubscriber", function() { return RaceSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */





function race() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  if (observables.length === 1) {
    if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_1__["isArray"])(observables[0])) {
      observables = observables[0];
    } else {
      return observables[0];
    }
  }

  return Object(_fromArray__WEBPACK_IMPORTED_MODULE_2__["fromArray"])(observables, undefined).lift(new RaceOperator());
}

var RaceOperator =
/*@__PURE__*/
function () {
  function RaceOperator() {}

  RaceOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new RaceSubscriber(subscriber));
  };

  return RaceOperator;
}();



var RaceSubscriber =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RaceSubscriber, _super);

  function RaceSubscriber(destination) {
    var _this = _super.call(this, destination) || this;

    _this.hasFirst = false;
    _this.observables = [];
    _this.subscriptions = [];
    return _this;
  }

  RaceSubscriber.prototype._next = function (observable) {
    this.observables.push(observable);
  };

  RaceSubscriber.prototype._complete = function () {
    var observables = this.observables;
    var len = observables.length;

    if (len === 0) {
      this.destination.complete();
    } else {
      for (var i = 0; i < len && !this.hasFirst; i++) {
        var observable = observables[i];
        var subscription = Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_4__["subscribeToResult"])(this, observable, observable, i);

        if (this.subscriptions) {
          this.subscriptions.push(subscription);
        }

        this.add(subscription);
      }

      this.observables = null;
    }
  };

  RaceSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    if (!this.hasFirst) {
      this.hasFirst = true;

      for (var i = 0; i < this.subscriptions.length; i++) {
        if (i !== outerIndex) {
          var subscription = this.subscriptions[i];
          subscription.unsubscribe();
          this.remove(subscription);
        }
      }

      this.subscriptions = null;
    }

    this.destination.next(innerValue);
  };

  return RaceSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_3__["OuterSubscriber"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/range.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function range(start, count, scheduler) {
  if (start === void 0) {
    start = 0;
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
    if (count === undefined) {
      count = start;
      start = 0;
    }

    var index = 0;
    var current = start;

    if (scheduler) {
      return scheduler.schedule(dispatch, 0, {
        index: index,
        count: count,
        start: start,
        subscriber: subscriber
      });
    } else {
      do {
        if (index++ >= count) {
          subscriber.complete();
          break;
        }

        subscriber.next(current++);

        if (subscriber.closed) {
          break;
        }
      } while (true);
    }

    return undefined;
  });
}
function dispatch(state) {
  var start = state.start,
      index = state.index,
      count = state.count,
      subscriber = state.subscriber;

  if (index >= count) {
    subscriber.complete();
    return;
  }

  subscriber.next(start);

  if (subscriber.closed) {
    return;
  }

  state.index = index + 1;
  state.start = start + 1;
  this.schedule(state);
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/scalar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scalar", function() { return scalar; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function scalar(value) {
  var result = new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
    subscriber.next(value);
    subscriber.complete();
  });
  result._isScalar = true;
  result.value = value;
  return result;
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/throwError.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwError", function() { return throwError; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function throwError(error, scheduler) {
  if (!scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
      return subscriber.error(error);
    });
  } else {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
      return scheduler.schedule(dispatch, 0, {
        error: error,
        subscriber: subscriber
      });
    });
  }
}

function dispatch(_a) {
  var error = _a.error,
      subscriber = _a.subscriber;
  subscriber.error(error);
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/timer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timer", function() { return timer; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/async.js");
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isNumeric.js");
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isScheduler.js");
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */




function timer(dueTime, periodOrScheduler, scheduler) {
  if (dueTime === void 0) {
    dueTime = 0;
  }

  var period = -1;

  if (Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(periodOrScheduler)) {
    period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
  } else if (Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(periodOrScheduler)) {
    scheduler = periodOrScheduler;
  }

  if (!Object(_util_isScheduler__WEBPACK_IMPORTED_MODULE_3__["isScheduler"])(scheduler)) {
    scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_1__["async"];
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
    var due = Object(_util_isNumeric__WEBPACK_IMPORTED_MODULE_2__["isNumeric"])(dueTime) ? dueTime : +dueTime - scheduler.now();
    return scheduler.schedule(dispatch, due, {
      index: 0,
      period: period,
      subscriber: subscriber
    });
  });
}

function dispatch(state) {
  var index = state.index,
      period = state.period,
      subscriber = state.subscriber;
  subscriber.next(index);

  if (subscriber.closed) {
    return;
  } else if (period === -1) {
    return subscriber.complete();
  }

  state.index = index + 1;
  this.schedule(state, period);
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/using.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "using", function() { return using; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/from.js");
/* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/empty.js");
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */



function using(resourceFactory, observableFactory) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
    var resource;

    try {
      resource = resourceFactory();
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var result;

    try {
      result = observableFactory(resource);
    } catch (err) {
      subscriber.error(err);
      return undefined;
    }

    var source = result ? Object(_from__WEBPACK_IMPORTED_MODULE_1__["from"])(result) : _empty__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
    var subscription = source.subscribe(subscriber);
    return function () {
      subscription.unsubscribe();

      if (resource) {
        resource.unsubscribe();
      }
    };
  });
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/observable/zip.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipOperator", function() { return ZipOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipSubscriber", function() { return ZipSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/fromArray.js");
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isArray.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_OuterSubscriber,_util_subscribeToResult,_.._internal_symbol_iterator PURE_IMPORTS_END */







function zip() {
  var observables = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i] = arguments[_i];
  }

  var resultSelector = observables[observables.length - 1];

  if (typeof resultSelector === 'function') {
    observables.pop();
  }

  return Object(_fromArray__WEBPACK_IMPORTED_MODULE_1__["fromArray"])(observables, undefined).lift(new ZipOperator(resultSelector));
}

var ZipOperator =
/*@__PURE__*/
function () {
  function ZipOperator(resultSelector) {
    this.resultSelector = resultSelector;
  }

  ZipOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
  };

  return ZipOperator;
}();



var ZipSubscriber =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ZipSubscriber, _super);

  function ZipSubscriber(destination, resultSelector, values) {
    if (values === void 0) {
      values = Object.create(null);
    }

    var _this = _super.call(this, destination) || this;

    _this.iterators = [];
    _this.active = 0;
    _this.resultSelector = typeof resultSelector === 'function' ? resultSelector : null;
    _this.values = values;
    return _this;
  }

  ZipSubscriber.prototype._next = function (value) {
    var iterators = this.iterators;

    if (Object(_util_isArray__WEBPACK_IMPORTED_MODULE_2__["isArray"])(value)) {
      iterators.push(new StaticArrayIterator(value));
    } else if (typeof value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]] === 'function') {
      iterators.push(new StaticIterator(value[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]]()));
    } else {
      iterators.push(new ZipBufferIterator(this.destination, this, value));
    }
  };

  ZipSubscriber.prototype._complete = function () {
    var iterators = this.iterators;
    var len = iterators.length;
    this.unsubscribe();

    if (len === 0) {
      this.destination.complete();
      return;
    }

    this.active = len;

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];

      if (iterator.stillUnsubscribed) {
        var destination = this.destination;
        destination.add(iterator.subscribe(iterator, i));
      } else {
        this.active--;
      }
    }
  };

  ZipSubscriber.prototype.notifyInactive = function () {
    this.active--;

    if (this.active === 0) {
      this.destination.complete();
    }
  };

  ZipSubscriber.prototype.checkIterators = function () {
    var iterators = this.iterators;
    var len = iterators.length;
    var destination = this.destination;

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];

      if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
        return;
      }
    }

    var shouldComplete = false;
    var args = [];

    for (var i = 0; i < len; i++) {
      var iterator = iterators[i];
      var result = iterator.next();

      if (iterator.hasCompleted()) {
        shouldComplete = true;
      }

      if (result.done) {
        destination.complete();
        return;
      }

      args.push(result.value);
    }

    if (this.resultSelector) {
      this._tryresultSelector(args);
    } else {
      destination.next(args);
    }

    if (shouldComplete) {
      destination.complete();
    }
  };

  ZipSubscriber.prototype._tryresultSelector = function (args) {
    var result;

    try {
      result = this.resultSelector.apply(this, args);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return ZipSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_3__["Subscriber"]);



var StaticIterator =
/*@__PURE__*/
function () {
  function StaticIterator(iterator) {
    this.iterator = iterator;
    this.nextResult = iterator.next();
  }

  StaticIterator.prototype.hasValue = function () {
    return true;
  };

  StaticIterator.prototype.next = function () {
    var result = this.nextResult;
    this.nextResult = this.iterator.next();
    return result;
  };

  StaticIterator.prototype.hasCompleted = function () {
    var nextResult = this.nextResult;
    return nextResult && nextResult.done;
  };

  return StaticIterator;
}();

var StaticArrayIterator =
/*@__PURE__*/
function () {
  function StaticArrayIterator(array) {
    this.array = array;
    this.index = 0;
    this.length = 0;
    this.length = array.length;
  }

  StaticArrayIterator.prototype[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]] = function () {
    return this;
  };

  StaticArrayIterator.prototype.next = function (value) {
    var i = this.index++;
    var array = this.array;
    return i < this.length ? {
      value: array[i],
      done: false
    } : {
      value: null,
      done: true
    };
  };

  StaticArrayIterator.prototype.hasValue = function () {
    return this.array.length > this.index;
  };

  StaticArrayIterator.prototype.hasCompleted = function () {
    return this.array.length === this.index;
  };

  return StaticArrayIterator;
}();

var ZipBufferIterator =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ZipBufferIterator, _super);

  function ZipBufferIterator(destination, parent, observable) {
    var _this = _super.call(this, destination) || this;

    _this.parent = parent;
    _this.observable = observable;
    _this.stillUnsubscribed = true;
    _this.buffer = [];
    _this.isComplete = false;
    return _this;
  }

  ZipBufferIterator.prototype[_internal_symbol_iterator__WEBPACK_IMPORTED_MODULE_6__["iterator"]] = function () {
    return this;
  };

  ZipBufferIterator.prototype.next = function () {
    var buffer = this.buffer;

    if (buffer.length === 0 && this.isComplete) {
      return {
        value: null,
        done: true
      };
    } else {
      return {
        value: buffer.shift(),
        done: false
      };
    }
  };

  ZipBufferIterator.prototype.hasValue = function () {
    return this.buffer.length > 0;
  };

  ZipBufferIterator.prototype.hasCompleted = function () {
    return this.buffer.length === 0 && this.isComplete;
  };

  ZipBufferIterator.prototype.notifyComplete = function () {
    if (this.buffer.length > 0) {
      this.isComplete = true;
      this.parent.notifyInactive();
    } else {
      this.destination.complete();
    }
  };

  ZipBufferIterator.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.buffer.push(innerValue);
    this.parent.checkIterators();
  };

  ZipBufferIterator.prototype.subscribe = function (value, index) {
    return Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_5__["subscribeToResult"])(this, this.observable, this, index);
  };

  return ZipBufferIterator;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_4__["OuterSubscriber"]);

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/operators/concatAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatAll", function() { return concatAll; });
/* harmony import */ var _mergeAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/operators/mergeAll.js");
/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */

function concatAll() {
  return Object(_mergeAll__WEBPACK_IMPORTED_MODULE_0__["mergeAll"])(1);
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/operators/groupBy.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupedObservable", function() { return GroupedObservable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscription.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subject.js");
/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */





function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
  return function (source) {
    return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
  };
}

var GroupByOperator =
/*@__PURE__*/
function () {
  function GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector) {
    this.keySelector = keySelector;
    this.elementSelector = elementSelector;
    this.durationSelector = durationSelector;
    this.subjectSelector = subjectSelector;
  }

  GroupByOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
  };

  return GroupByOperator;
}();

var GroupBySubscriber =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupBySubscriber, _super);

  function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
    var _this = _super.call(this, destination) || this;

    _this.keySelector = keySelector;
    _this.elementSelector = elementSelector;
    _this.durationSelector = durationSelector;
    _this.subjectSelector = subjectSelector;
    _this.groups = null;
    _this.attemptedToUnsubscribe = false;
    _this.count = 0;
    return _this;
  }

  GroupBySubscriber.prototype._next = function (value) {
    var key;

    try {
      key = this.keySelector(value);
    } catch (err) {
      this.error(err);
      return;
    }

    this._group(value, key);
  };

  GroupBySubscriber.prototype._group = function (value, key) {
    var groups = this.groups;

    if (!groups) {
      groups = this.groups = new Map();
    }

    var group = groups.get(key);
    var element;

    if (this.elementSelector) {
      try {
        element = this.elementSelector(value);
      } catch (err) {
        this.error(err);
      }
    } else {
      element = value;
    }

    if (!group) {
      group = this.subjectSelector ? this.subjectSelector() : new _Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      groups.set(key, group);
      var groupedObservable = new GroupedObservable(key, group, this);
      this.destination.next(groupedObservable);

      if (this.durationSelector) {
        var duration = void 0;

        try {
          duration = this.durationSelector(new GroupedObservable(key, group));
        } catch (err) {
          this.error(err);
          return;
        }

        this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
      }
    }

    if (!group.closed) {
      group.next(element);
    }
  };

  GroupBySubscriber.prototype._error = function (err) {
    var groups = this.groups;

    if (groups) {
      groups.forEach(function (group, key) {
        group.error(err);
      });
      groups.clear();
    }

    this.destination.error(err);
  };

  GroupBySubscriber.prototype._complete = function () {
    var groups = this.groups;

    if (groups) {
      groups.forEach(function (group, key) {
        group.complete();
      });
      groups.clear();
    }

    this.destination.complete();
  };

  GroupBySubscriber.prototype.removeGroup = function (key) {
    this.groups.delete(key);
  };

  GroupBySubscriber.prototype.unsubscribe = function () {
    if (!this.closed) {
      this.attemptedToUnsubscribe = true;

      if (this.count === 0) {
        _super.prototype.unsubscribe.call(this);
      }
    }
  };

  return GroupBySubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]);

var GroupDurationSubscriber =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupDurationSubscriber, _super);

  function GroupDurationSubscriber(key, group, parent) {
    var _this = _super.call(this, group) || this;

    _this.key = key;
    _this.group = group;
    _this.parent = parent;
    return _this;
  }

  GroupDurationSubscriber.prototype._next = function (value) {
    this.complete();
  };

  GroupDurationSubscriber.prototype._unsubscribe = function () {
    var _a = this,
        parent = _a.parent,
        key = _a.key;

    this.key = this.parent = null;

    if (parent) {
      parent.removeGroup(key);
    }
  };

  return GroupDurationSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]);

var GroupedObservable =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GroupedObservable, _super);

  function GroupedObservable(key, groupSubject, refCountSubscription) {
    var _this = _super.call(this) || this;

    _this.key = key;
    _this.groupSubject = groupSubject;
    _this.refCountSubscription = refCountSubscription;
    return _this;
  }

  GroupedObservable.prototype._subscribe = function (subscriber) {
    var subscription = new _Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();

    var _a = this,
        refCountSubscription = _a.refCountSubscription,
        groupSubject = _a.groupSubject;

    if (refCountSubscription && !refCountSubscription.closed) {
      subscription.add(new InnerRefCountSubscription(refCountSubscription));
    }

    subscription.add(groupSubject.subscribe(subscriber));
    return subscription;
  };

  return GroupedObservable;
}(_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"]);



var InnerRefCountSubscription =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InnerRefCountSubscription, _super);

  function InnerRefCountSubscription(parent) {
    var _this = _super.call(this) || this;

    _this.parent = parent;
    parent.count++;
    return _this;
  }

  InnerRefCountSubscription.prototype.unsubscribe = function () {
    var parent = this.parent;

    if (!parent.closed && !this.closed) {
      _super.prototype.unsubscribe.call(this);

      parent.count -= 1;

      if (parent.count === 0 && parent.attemptedToUnsubscribe) {
        parent.unsubscribe();
      }
    }
  };

  return InnerRefCountSubscription;
}(_Subscription__WEBPACK_IMPORTED_MODULE_2__["Subscription"]);

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/operators/map.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapOperator", function() { return MapOperator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function map(project, thisArg) {
  return function mapOperation(source) {
    if (typeof project !== 'function') {
      throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
    }

    return source.lift(new MapOperator(project, thisArg));
  };
}

var MapOperator =
/*@__PURE__*/
function () {
  function MapOperator(project, thisArg) {
    this.project = project;
    this.thisArg = thisArg;
  }

  MapOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
  };

  return MapOperator;
}();



var MapSubscriber =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MapSubscriber, _super);

  function MapSubscriber(destination, project, thisArg) {
    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.count = 0;
    _this.thisArg = thisArg || _this;
    return _this;
  }

  MapSubscriber.prototype._next = function (value) {
    var result;

    try {
      result = this.project.call(this.thisArg, value, this.count++);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.destination.next(result);
  };

  return MapSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]);

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/operators/mergeAll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeAll", function() { return mergeAll; });
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/operators/mergeMap.js");
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/identity.js");
/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */


function mergeAll(concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  return Object(_mergeMap__WEBPACK_IMPORTED_MODULE_0__["mergeMap"])(_util_identity__WEBPACK_IMPORTED_MODULE_1__["identity"], concurrent);
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/operators/mergeMap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeMap", function() { return mergeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapOperator", function() { return MergeMapOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MergeMapSubscriber", function() { return MergeMapSubscriber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js");
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/OuterSubscriber.js");
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/InnerSubscriber.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/operators/map.js");
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/observable/from.js");
/** PURE_IMPORTS_START tslib,_util_subscribeToResult,_OuterSubscriber,_InnerSubscriber,_map,_observable_from PURE_IMPORTS_END */






function mergeMap(project, resultSelector, concurrent) {
  if (concurrent === void 0) {
    concurrent = Number.POSITIVE_INFINITY;
  }

  if (typeof resultSelector === 'function') {
    return function (source) {
      return source.pipe(mergeMap(function (a, i) {
        return Object(_observable_from__WEBPACK_IMPORTED_MODULE_5__["from"])(project(a, i)).pipe(Object(_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (b, ii) {
          return resultSelector(a, b, i, ii);
        }));
      }, concurrent));
    };
  } else if (typeof resultSelector === 'number') {
    concurrent = resultSelector;
  }

  return function (source) {
    return source.lift(new MergeMapOperator(project, concurrent));
  };
}

var MergeMapOperator =
/*@__PURE__*/
function () {
  function MergeMapOperator(project, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }

    this.project = project;
    this.concurrent = concurrent;
  }

  MergeMapOperator.prototype.call = function (observer, source) {
    return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
  };

  return MergeMapOperator;
}();



var MergeMapSubscriber =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MergeMapSubscriber, _super);

  function MergeMapSubscriber(destination, project, concurrent) {
    if (concurrent === void 0) {
      concurrent = Number.POSITIVE_INFINITY;
    }

    var _this = _super.call(this, destination) || this;

    _this.project = project;
    _this.concurrent = concurrent;
    _this.hasCompleted = false;
    _this.buffer = [];
    _this.active = 0;
    _this.index = 0;
    return _this;
  }

  MergeMapSubscriber.prototype._next = function (value) {
    if (this.active < this.concurrent) {
      this._tryNext(value);
    } else {
      this.buffer.push(value);
    }
  };

  MergeMapSubscriber.prototype._tryNext = function (value) {
    var result;
    var index = this.index++;

    try {
      result = this.project(value, index);
    } catch (err) {
      this.destination.error(err);
      return;
    }

    this.active++;

    this._innerSub(result, value, index);
  };

  MergeMapSubscriber.prototype._innerSub = function (ish, value, index) {
    var innerSubscriber = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_3__["InnerSubscriber"](this, undefined, undefined);
    var destination = this.destination;
    destination.add(innerSubscriber);
    Object(_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__["subscribeToResult"])(this, ish, value, index, innerSubscriber);
  };

  MergeMapSubscriber.prototype._complete = function () {
    this.hasCompleted = true;

    if (this.active === 0 && this.buffer.length === 0) {
      this.destination.complete();
    }

    this.unsubscribe();
  };

  MergeMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    this.destination.next(innerValue);
  };

  MergeMapSubscriber.prototype.notifyComplete = function (innerSub) {
    var buffer = this.buffer;
    this.remove(innerSub);
    this.active--;

    if (buffer.length > 0) {
      this._next(buffer.shift());
    } else if (this.active === 0 && this.hasCompleted) {
      this.destination.complete();
    }
  };

  return MergeMapSubscriber;
}(_OuterSubscriber__WEBPACK_IMPORTED_MODULE_2__["OuterSubscriber"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/operators/observeOn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observeOn", function() { return observeOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnOperator", function() { return ObserveOnOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnSubscriber", function() { return ObserveOnSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserveOnMessage", function() { return ObserveOnMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Notification.js");
/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */



function observeOn(scheduler, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return function observeOnOperatorFunction(source) {
    return source.lift(new ObserveOnOperator(scheduler, delay));
  };
}

var ObserveOnOperator =
/*@__PURE__*/
function () {
  function ObserveOnOperator(scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    this.scheduler = scheduler;
    this.delay = delay;
  }

  ObserveOnOperator.prototype.call = function (subscriber, source) {
    return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
  };

  return ObserveOnOperator;
}();



var ObserveOnSubscriber =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ObserveOnSubscriber, _super);

  function ObserveOnSubscriber(destination, scheduler, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    var _this = _super.call(this, destination) || this;

    _this.scheduler = scheduler;
    _this.delay = delay;
    return _this;
  }

  ObserveOnSubscriber.dispatch = function (arg) {
    var notification = arg.notification,
        destination = arg.destination;
    notification.observe(destination);
    this.unsubscribe();
  };

  ObserveOnSubscriber.prototype.scheduleMessage = function (notification) {
    var destination = this.destination;
    destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
  };

  ObserveOnSubscriber.prototype._next = function (value) {
    this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createNext(value));
  };

  ObserveOnSubscriber.prototype._error = function (err) {
    this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createError(err));
    this.unsubscribe();
  };

  ObserveOnSubscriber.prototype._complete = function () {
    this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_2__["Notification"].createComplete());
    this.unsubscribe();
  };

  return ObserveOnSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]);



var ObserveOnMessage =
/*@__PURE__*/
function () {
  function ObserveOnMessage(notification, destination) {
    this.notification = notification;
    this.destination = destination;
  }

  return ObserveOnMessage;
}();



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/operators/refCount.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refCount", function() { return refCount; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */


function refCount() {
  return function refCountOperatorFunction(source) {
    return source.lift(new RefCountOperator(source));
  };
}

var RefCountOperator =
/*@__PURE__*/
function () {
  function RefCountOperator(connectable) {
    this.connectable = connectable;
  }

  RefCountOperator.prototype.call = function (subscriber, source) {
    var connectable = this.connectable;
    connectable._refCount++;
    var refCounter = new RefCountSubscriber(subscriber, connectable);
    var subscription = source.subscribe(refCounter);

    if (!refCounter.closed) {
      refCounter.connection = connectable.connect();
    }

    return subscription;
  };

  return RefCountOperator;
}();

var RefCountSubscriber =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RefCountSubscriber, _super);

  function RefCountSubscriber(destination, connectable) {
    var _this = _super.call(this, destination) || this;

    _this.connectable = connectable;
    return _this;
  }

  RefCountSubscriber.prototype._unsubscribe = function () {
    var connectable = this.connectable;

    if (!connectable) {
      this.connection = null;
      return;
    }

    this.connectable = null;
    var refCount = connectable._refCount;

    if (refCount <= 0) {
      this.connection = null;
      return;
    }

    connectable._refCount = refCount - 1;

    if (refCount > 1) {
      this.connection = null;
      return;
    }

    var connection = this.connection;
    var sharedConnection = connectable._connection;
    this.connection = null;

    if (sharedConnection && (!connection || sharedConnection === connection)) {
      sharedConnection.unsubscribe();
    }
  };

  return RefCountSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__["Subscriber"]);

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/scheduler/Action.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscription.js");
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */



var Action =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Action, _super);

  function Action(scheduler, work) {
    return _super.call(this) || this;
  }

  Action.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return this;
  };

  return Action;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__["Subscription"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameAction", function() { return AnimationFrameAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */



var AnimationFrameAction =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnimationFrameAction, _super);

  function AnimationFrameAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    scheduler.actions.push(this);
    return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function () {
      return scheduler.flush(null);
    }));
  };

  AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
    }

    if (scheduler.actions.length === 0) {
      cancelAnimationFrame(id);
      scheduler.scheduled = undefined;
    }

    return undefined;
  };

  return AnimationFrameAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFrameScheduler", function() { return AnimationFrameScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */



var AnimationFrameScheduler =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AnimationFrameScheduler, _super);

  function AnimationFrameScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AnimationFrameScheduler.prototype.flush = function (action) {
    this.active = true;
    this.scheduled = undefined;
    var actions = this.actions;
    var error;
    var index = -1;
    var count = actions.length;
    action = action || actions.shift();

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (++index < count && (action = actions.shift()));

    this.active = false;

    if (error) {
      while (++index < count && (action = actions.shift())) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AnimationFrameScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapAction", function() { return AsapAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/Immediate.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */




var AsapAction =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsapAction, _super);

  function AsapAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    scheduler.actions.push(this);
    return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_1__["Immediate"].setImmediate(scheduler.flush.bind(scheduler, null)));
  };

  AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
    }

    if (scheduler.actions.length === 0) {
      _util_Immediate__WEBPACK_IMPORTED_MODULE_1__["Immediate"].clearImmediate(id);
      scheduler.scheduled = undefined;
    }

    return undefined;
  };

  return AsapAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_2__["AsyncAction"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsapScheduler", function() { return AsapScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */



var AsapScheduler =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsapScheduler, _super);

  function AsapScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AsapScheduler.prototype.flush = function (action) {
    this.active = true;
    this.scheduled = undefined;
    var actions = this.actions;
    var error;
    var index = -1;
    var count = actions.length;
    action = action || actions.shift();

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (++index < count && (action = actions.shift()));

    this.active = false;

    if (error) {
      while (++index < count && (action = actions.shift())) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AsapScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncAction", function() { return AsyncAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/Action.js");
/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */



var AsyncAction =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncAction, _super);

  function AsyncAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    _this.pending = false;
    return _this;
  }

  AsyncAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (this.closed) {
      return this;
    }

    this.state = state;
    var id = this.id;
    var scheduler = this.scheduler;

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, delay);
    }

    this.pending = true;
    this.delay = delay;
    this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
    return this;
  };

  AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return setInterval(scheduler.flush.bind(scheduler, this), delay);
  };

  AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && this.delay === delay && this.pending === false) {
      return id;
    }

    clearInterval(id);
    return undefined;
  };

  AsyncAction.prototype.execute = function (state, delay) {
    if (this.closed) {
      return new Error('executing a cancelled action');
    }

    this.pending = false;

    var error = this._execute(state, delay);

    if (error) {
      return error;
    } else if (this.pending === false && this.id != null) {
      this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    }
  };

  AsyncAction.prototype._execute = function (state, delay) {
    var errored = false;
    var errorValue = undefined;

    try {
      this.work(state);
    } catch (e) {
      errored = true;
      errorValue = !!e && e || new Error(e);
    }

    if (errored) {
      this.unsubscribe();
      return errorValue;
    }
  };

  AsyncAction.prototype._unsubscribe = function () {
    var id = this.id;
    var scheduler = this.scheduler;
    var actions = scheduler.actions;
    var index = actions.indexOf(this);
    this.work = null;
    this.state = null;
    this.pending = false;
    this.scheduler = null;

    if (index !== -1) {
      actions.splice(index, 1);
    }

    if (id != null) {
      this.id = this.recycleAsyncId(scheduler, id, null);
    }

    this.delay = null;
  };

  return AsyncAction;
}(_Action__WEBPACK_IMPORTED_MODULE_1__["Action"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncScheduler", function() { return AsyncScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Scheduler.js");
/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */



var AsyncScheduler =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AsyncScheduler, _super);

  function AsyncScheduler(SchedulerAction, now) {
    if (now === void 0) {
      now = _Scheduler__WEBPACK_IMPORTED_MODULE_1__["Scheduler"].now;
    }

    var _this = _super.call(this, SchedulerAction, function () {
      if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
        return AsyncScheduler.delegate.now();
      } else {
        return now();
      }
    }) || this;

    _this.actions = [];
    _this.active = false;
    _this.scheduled = undefined;
    return _this;
  }

  AsyncScheduler.prototype.schedule = function (work, delay, state) {
    if (delay === void 0) {
      delay = 0;
    }

    if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
      return AsyncScheduler.delegate.schedule(work, delay, state);
    } else {
      return _super.prototype.schedule.call(this, work, delay, state);
    }
  };

  AsyncScheduler.prototype.flush = function (action) {
    var actions = this.actions;

    if (this.active) {
      actions.push(action);
      return;
    }

    var error;
    this.active = true;

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift());

    this.active = false;

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  return AsyncScheduler;
}(_Scheduler__WEBPACK_IMPORTED_MODULE_1__["Scheduler"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueAction", function() { return QueueAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */



var QueueAction =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QueueAction, _super);

  function QueueAction(scheduler, work) {
    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    return _this;
  }

  QueueAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay > 0) {
      return _super.prototype.schedule.call(this, state, delay);
    }

    this.delay = delay;
    this.state = state;
    this.scheduler.flush(this);
    return this;
  };

  QueueAction.prototype.execute = function (state, delay) {
    return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
  };

  QueueAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
      return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
    }

    return scheduler.flush(this);
  };

  return QueueAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueScheduler", function() { return QueueScheduler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */



var QueueScheduler =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QueueScheduler, _super);

  function QueueScheduler() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return QueueScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/scheduler/VirtualTimeScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualTimeScheduler", function() { return VirtualTimeScheduler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualAction", function() { return VirtualAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */




var VirtualTimeScheduler =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VirtualTimeScheduler, _super);

  function VirtualTimeScheduler(SchedulerAction, maxFrames) {
    if (SchedulerAction === void 0) {
      SchedulerAction = VirtualAction;
    }

    if (maxFrames === void 0) {
      maxFrames = Number.POSITIVE_INFINITY;
    }

    var _this = _super.call(this, SchedulerAction, function () {
      return _this.frame;
    }) || this;

    _this.maxFrames = maxFrames;
    _this.frame = 0;
    _this.index = -1;
    return _this;
  }

  VirtualTimeScheduler.prototype.flush = function () {
    var _a = this,
        actions = _a.actions,
        maxFrames = _a.maxFrames;

    var error, action;

    while ((action = actions[0]) && action.delay <= maxFrames) {
      actions.shift();
      this.frame = action.delay;

      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    }

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }

      throw error;
    }
  };

  VirtualTimeScheduler.frameTimeFactor = 10;
  return VirtualTimeScheduler;
}(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_2__["AsyncScheduler"]);



var VirtualAction =
/*@__PURE__*/
function (_super) {
  tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VirtualAction, _super);

  function VirtualAction(scheduler, work, index) {
    if (index === void 0) {
      index = scheduler.index += 1;
    }

    var _this = _super.call(this, scheduler, work) || this;

    _this.scheduler = scheduler;
    _this.work = work;
    _this.index = index;
    _this.active = true;
    _this.index = scheduler.index = index;
    return _this;
  }

  VirtualAction.prototype.schedule = function (state, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    if (!this.id) {
      return _super.prototype.schedule.call(this, state, delay);
    }

    this.active = false;
    var action = new VirtualAction(this.scheduler, this.work);
    this.add(action);
    return action.schedule(state, delay);
  };

  VirtualAction.prototype.requestAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    this.delay = scheduler.frame + delay;
    var actions = scheduler.actions;
    actions.push(this);
    actions.sort(VirtualAction.sortActions);
    return true;
  };

  VirtualAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return undefined;
  };

  VirtualAction.prototype._execute = function (state, delay) {
    if (this.active === true) {
      return _super.prototype._execute.call(this, state, delay);
    }
  };

  VirtualAction.sortActions = function (a, b) {
    if (a.delay === b.delay) {
      if (a.index === b.index) {
        return 0;
      } else if (a.index > b.index) {
        return 1;
      } else {
        return -1;
      }
    } else if (a.delay > b.delay) {
      return 1;
    } else {
      return -1;
    }
  };

  return VirtualAction;
}(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__["AsyncAction"]);



/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/scheduler/animationFrame.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationFrame", function() { return animationFrame; });
/* harmony import */ var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameAction.js");
/* harmony import */ var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/AnimationFrameScheduler.js");
/** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */


var animationFrame =
/*@__PURE__*/
new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_1__["AnimationFrameScheduler"](_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_0__["AnimationFrameAction"]);

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/scheduler/asap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asap", function() { return asap; });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/AsapAction.js");
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/AsapScheduler.js");
/** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */


var asap =
/*@__PURE__*/
new _AsapScheduler__WEBPACK_IMPORTED_MODULE_1__["AsapScheduler"](_AsapAction__WEBPACK_IMPORTED_MODULE_0__["AsapAction"]);

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/scheduler/async.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "async", function() { return async; });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/AsyncAction.js");
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/AsyncScheduler.js");
/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */


var async =
/*@__PURE__*/
new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__["AsyncScheduler"](_AsyncAction__WEBPACK_IMPORTED_MODULE_0__["AsyncAction"]);

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/scheduler/queue.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return queue; });
/* harmony import */ var _QueueAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/QueueAction.js");
/* harmony import */ var _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/scheduler/QueueScheduler.js");
/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */


var queue =
/*@__PURE__*/
new _QueueScheduler__WEBPACK_IMPORTED_MODULE_1__["QueueScheduler"](_QueueAction__WEBPACK_IMPORTED_MODULE_0__["QueueAction"]);

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/symbol/iterator.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSymbolIterator", function() { return getSymbolIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$iterator", function() { return $$iterator; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function getSymbolIterator() {
  if (typeof Symbol !== 'function' || !Symbol.iterator) {
    return '@@iterator';
  }

  return Symbol.iterator;
}
var iterator =
/*@__PURE__*/
getSymbolIterator();
var $$iterator = iterator;

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/symbol/observable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rxSubscriber", function() { return rxSubscriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$rxSubscriber", function() { return $$rxSubscriber; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var rxSubscriber = typeof Symbol === 'function' ?
/*@__PURE__*/
Symbol('rxSubscriber') : '@@rxSubscriber_' +
/*@__PURE__*/
Math.random();
var $$rxSubscriber = rxSubscriber;

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/ArgumentOutOfRangeError.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArgumentOutOfRangeError", function() { return ArgumentOutOfRangeError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ArgumentOutOfRangeErrorImpl() {
  Error.call(this);
  this.message = 'argument out of range';
  this.name = 'ArgumentOutOfRangeError';
  return this;
}

ArgumentOutOfRangeErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/EmptyError.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyError", function() { return EmptyError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function EmptyErrorImpl() {
  Error.call(this);
  this.message = 'no elements in sequence';
  this.name = 'EmptyError';
  return this;
}

EmptyErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var EmptyError = EmptyErrorImpl;

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/Immediate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Immediate", function() { return Immediate; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var nextHandle = 1;
var tasksByHandle = {};

function runIfPresent(handle) {
  var cb = tasksByHandle[handle];

  if (cb) {
    cb();
  }
}

var Immediate = {
  setImmediate: function (cb) {
    var handle = nextHandle++;
    tasksByHandle[handle] = cb;
    Promise.resolve().then(function () {
      return runIfPresent(handle);
    });
    return handle;
  },
  clearImmediate: function (handle) {
    delete tasksByHandle[handle];
  }
};

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/ObjectUnsubscribedError.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectUnsubscribedError", function() { return ObjectUnsubscribedError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function ObjectUnsubscribedErrorImpl() {
  Error.call(this);
  this.message = 'object unsubscribed';
  this.name = 'ObjectUnsubscribedError';
  return this;
}

ObjectUnsubscribedErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/TimeoutError.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeoutError", function() { return TimeoutError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function TimeoutErrorImpl() {
  Error.call(this);
  this.message = 'Timeout has occurred';
  this.name = 'TimeoutError';
  return this;
}

TimeoutErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var TimeoutError = TimeoutErrorImpl;

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/UnsubscriptionError.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscriptionError", function() { return UnsubscriptionError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function UnsubscriptionErrorImpl(errors) {
  Error.call(this);
  this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
    return i + 1 + ") " + err.toString();
  }).join('\n  ') : '';
  this.name = 'UnsubscriptionError';
  this.errors = errors;
  return this;
}

UnsubscriptionErrorImpl.prototype =
/*@__PURE__*/
Object.create(Error.prototype);
var UnsubscriptionError = UnsubscriptionErrorImpl;

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/canReportError.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canReportError", function() { return canReportError; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscriber.js");
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */

function canReportError(observer) {
  while (observer) {
    var _a = observer,
        closed_1 = _a.closed,
        destination = _a.destination,
        isStopped = _a.isStopped;

    if (closed_1 || isStopped) {
      return false;
    } else if (destination && destination instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
      observer = destination;
    } else {
      observer = null;
    }
  }

  return true;
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/hostReportError.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hostReportError", function() { return hostReportError; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function hostReportError(err) {
  setTimeout(function () {
    throw err;
  });
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/identity.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function identity(x) {
  return x;
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/isArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArray = Array.isArray || function (x) {
  return x && typeof x.length === 'number';
};

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/isArrayLike.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var isArrayLike = function (x) {
  return x && typeof x.length === 'number' && typeof x !== 'function';
};

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/isFunction.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isFunction(x) {
  return typeof x === 'function';
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/isInteropObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteropObservable", function() { return isInteropObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

function isInteropObservable(input) {
  return input && typeof input[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]] === 'function';
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/isIterable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

function isIterable(input) {
  return input && typeof input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]] === 'function';
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/isNumeric.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return isNumeric; });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isArray.js");
/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */

function isNumeric(val) {
  return !Object(_isArray__WEBPACK_IMPORTED_MODULE_0__["isArray"])(val) && val - parseFloat(val) + 1 >= 0;
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/isObject.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isObject(x) {
  return x !== null && typeof x === 'object';
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/isObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */

function isObservable(obj) {
  return !!obj && (obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"] || typeof obj.lift === 'function' && typeof obj.subscribe === 'function');
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/isPromise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isPromise(value) {
  return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/isScheduler.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScheduler", function() { return isScheduler; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function isScheduler(value) {
  return value && typeof value.schedule === 'function';
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/noop.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
function noop() {}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/pipe.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipeFromArray", function() { return pipeFromArray; });
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/noop.js");
/** PURE_IMPORTS_START _noop PURE_IMPORTS_END */

function pipe() {
  var fns = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }

  return pipeFromArray(fns);
}
function pipeFromArray(fns) {
  if (!fns) {
    return _noop__WEBPACK_IMPORTED_MODULE_0__["noop"];
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return function piped(input) {
    return fns.reduce(function (prev, fn) {
      return fn(prev);
    }, input);
  };
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/subscribeTo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeTo", function() { return subscribeTo; });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observable.js");
/* harmony import */ var _subscribeToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/subscribeToArray.js");
/* harmony import */ var _subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js");
/* harmony import */ var _subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js");
/* harmony import */ var _subscribeToObservable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js");
/* harmony import */ var _isArrayLike__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isArrayLike.js");
/* harmony import */ var _isPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isPromise.js");
/* harmony import */ var _isObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/isObject.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _Observable,_subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */










var subscribeTo = function (result) {
  if (result instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__["Observable"]) {
    return function (subscriber) {
      if (result._isScalar) {
        subscriber.next(result.value);
        subscriber.complete();
        return undefined;
      } else {
        return result.subscribe(subscriber);
      }
    };
  } else if (!!result && typeof result[_symbol_observable__WEBPACK_IMPORTED_MODULE_9__["observable"]] === 'function') {
    return Object(_subscribeToObservable__WEBPACK_IMPORTED_MODULE_4__["subscribeToObservable"])(result);
  } else if (Object(_isArrayLike__WEBPACK_IMPORTED_MODULE_5__["isArrayLike"])(result)) {
    return Object(_subscribeToArray__WEBPACK_IMPORTED_MODULE_1__["subscribeToArray"])(result);
  } else if (Object(_isPromise__WEBPACK_IMPORTED_MODULE_6__["isPromise"])(result)) {
    return Object(_subscribeToPromise__WEBPACK_IMPORTED_MODULE_2__["subscribeToPromise"])(result);
  } else if (!!result && typeof result[_symbol_iterator__WEBPACK_IMPORTED_MODULE_8__["iterator"]] === 'function') {
    return Object(_subscribeToIterable__WEBPACK_IMPORTED_MODULE_3__["subscribeToIterable"])(result);
  } else {
    var value = Object(_isObject__WEBPACK_IMPORTED_MODULE_7__["isObject"])(result) ? 'an invalid object' : "'" + result + "'";
    var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
    throw new TypeError(msg);
  }
};

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/subscribeToArray.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToArray", function() { return subscribeToArray; });
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var subscribeToArray = function (array) {
  return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
      subscriber.next(array[i]);
    }

    if (!subscriber.closed) {
      subscriber.complete();
    }
  };
};

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/subscribeToIterable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToIterable", function() { return subscribeToIterable; });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/symbol/iterator.js");
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */

var subscribeToIterable = function (iterable) {
  return function (subscriber) {
    var iterator = iterable[_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"]]();

    do {
      var item = iterator.next();

      if (item.done) {
        subscriber.complete();
        break;
      }

      subscriber.next(item.value);

      if (subscriber.closed) {
        break;
      }
    } while (true);

    if (typeof iterator.return === 'function') {
      subscriber.add(function () {
        if (iterator.return) {
          iterator.return();
        }
      });
    }

    return subscriber;
  };
};

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/subscribeToObservable.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToObservable", function() { return subscribeToObservable; });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/symbol/observable.js");
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */

var subscribeToObservable = function (obj) {
  return function (subscriber) {
    var obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_0__["observable"]]();

    if (typeof obs.subscribe !== 'function') {
      throw new TypeError('Provided object does not correctly implement Symbol.observable');
    } else {
      return obs.subscribe(subscriber);
    }
  };
};

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/subscribeToPromise.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToPromise", function() { return subscribeToPromise; });
/* harmony import */ var _hostReportError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/hostReportError.js");
/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */

var subscribeToPromise = function (promise) {
  return function (subscriber) {
    promise.then(function (value) {
      if (!subscriber.closed) {
        subscriber.next(value);
        subscriber.complete();
      }
    }, function (err) {
      return subscriber.error(err);
    }).then(null, _hostReportError__WEBPACK_IMPORTED_MODULE_0__["hostReportError"]);
    return subscriber;
  };
};

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/subscribeToResult.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeToResult", function() { return subscribeToResult; });
/* harmony import */ var _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/InnerSubscriber.js");
/* harmony import */ var _subscribeTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/util/subscribeTo.js");
/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo PURE_IMPORTS_END */


function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
  if (destination === void 0) {
    destination = new _InnerSubscriber__WEBPACK_IMPORTED_MODULE_0__["InnerSubscriber"](outerSubscriber, outerValue, outerIndex);
  }

  if (destination.closed) {
    return;
  }

  return Object(_subscribeTo__WEBPACK_IMPORTED_MODULE_1__["subscribeTo"])(result)(destination);
}

/***/ }),

/***/ "../node_modules/rxjs/_esm5/internal/util/toSubscriber.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSubscriber", function() { return toSubscriber; });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Subscriber.js");
/* harmony import */ var _symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/symbol/rxSubscriber.js");
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/rxjs/_esm5/internal/Observer.js");
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */



function toSubscriber(nextOrObserver, error, complete) {
  if (nextOrObserver) {
    if (nextOrObserver instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"]) {
      return nextOrObserver;
    }

    if (nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]) {
      return nextOrObserver[_symbol_rxSubscriber__WEBPACK_IMPORTED_MODULE_1__["rxSubscriber"]]();
    }
  }

  if (!nextOrObserver && !error && !complete) {
    return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](_Observer__WEBPACK_IMPORTED_MODULE_2__["empty"]);
  }

  return new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["Subscriber"](nextOrObserver, error, complete);
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaW50ZXJuYWwvQXN5bmNTdWJqZWN0LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0LnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaW50ZXJuYWwvSW5uZXJTdWJzY3JpYmVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaW50ZXJuYWwvTm90aWZpY2F0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaW50ZXJuYWwvT2JzZXJ2YWJsZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ludGVybmFsL09ic2VydmVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaW50ZXJuYWwvT3V0ZXJTdWJzY3JpYmVyLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaW50ZXJuYWwvUmVwbGF5U3ViamVjdC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ludGVybmFsL1NjaGVkdWxlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ludGVybmFsL1N1YmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9pbnRlcm5hbC9TdWJqZWN0U3Vic2NyaXB0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvaW50ZXJuYWwvU3Vic2NyaWJlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ludGVybmFsL1N1YnNjcmlwdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2ludGVybmFsL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvQ29ubmVjdGFibGVPYnNlcnZhYmxlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9iaW5kQ2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2JpbmROb2RlQ2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3QudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbmNhdC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvZGVmZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2VtcHR5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9mb3JrSm9pbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvZnJvbS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvZnJvbUFycmF5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9mcm9tRXZlbnQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb21FdmVudFBhdHRlcm4udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb21JdGVyYWJsZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvZnJvbU9ic2VydmFibGUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb21Qcm9taXNlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9nZW5lcmF0ZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvaWlmLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9pbnRlcnZhbC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvbWVyZ2UudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL25ldmVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9vZi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvb25FcnJvclJlc3VtZU5leHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL3BhaXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9yYWNlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvc2NhbGFyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS90aHJvd0Vycm9yLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb2JzZXJ2YWJsZS90aW1lci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL29ic2VydmFibGUvdXNpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vYnNlcnZhYmxlL3ppcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9jb25jYXRBbGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvZ3JvdXBCeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL29wZXJhdG9ycy9tYXAudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWVyZ2VBbGwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvbWVyZ2VNYXAudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvb2JzZXJ2ZU9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvb3BlcmF0b3JzL3JlZkNvdW50LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL0FjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL3NjaGVkdWxlci9BbmltYXRpb25GcmFtZUFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL3NjaGVkdWxlci9BbmltYXRpb25GcmFtZVNjaGVkdWxlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL3NjaGVkdWxlci9Bc2FwQWN0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvc2NoZWR1bGVyL0FzYXBTY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvQXN5bmNBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvQXN5bmNTY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvUXVldWVBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvUXVldWVTY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvVmlydHVhbFRpbWVTY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvYW5pbWF0aW9uRnJhbWUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC9zY2hlZHVsZXIvYXNhcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL3NjaGVkdWxlci9hc3luYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL3NjaGVkdWxlci9xdWV1ZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL3N5bWJvbC9pdGVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL3N5bWJvbC9vYnNlcnZhYmxlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvc3ltYm9sL3J4U3Vic2NyaWJlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL0VtcHR5RXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL0ltbWVkaWF0ZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL1RpbWVvdXRFcnJvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvY2FuUmVwb3J0RXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL2hvc3RSZXBvcnRFcnJvci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvaWRlbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL2lzQXJyYXkudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL2lzQXJyYXlMaWtlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvdXRpbC9pc0Z1bmN0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvdXRpbC9pc0l0ZXJhYmxlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvdXRpbC9pc051bWVyaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL2lzT2JqZWN0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvdXRpbC9pc09ic2VydmFibGUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL2lzUHJvbWlzZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvaXNTY2hlZHVsZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL25vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL3BpcGUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvdXRpbC9zdWJzY3JpYmVUb0FycmF5LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvdXRpbC9zdWJzY3JpYmVUb0l0ZXJhYmxlLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9zcmMvaW50ZXJuYWwvdXRpbC9zdWJzY3JpYmVUb09ic2VydmFibGUudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL3N1YnNjcmliZVRvUHJvbWlzZS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vc3JjL2ludGVybmFsL3V0aWwvc3Vic2NyaWJlVG9SZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL3NyYy9pbnRlcm5hbC91dGlsL3RvU3Vic2NyaWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4vaW50ZXJuYWwvT2JzZXJ2YWJsZSc7XG5leHBvcnQgeyBDb25uZWN0YWJsZU9ic2VydmFibGUgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvQ29ubmVjdGFibGVPYnNlcnZhYmxlJztcbmV4cG9ydCB7IEdyb3VwZWRPYnNlcnZhYmxlIH0gZnJvbSAnLi9pbnRlcm5hbC9vcGVyYXRvcnMvZ3JvdXBCeSc7XG5leHBvcnQgeyBvYnNlcnZhYmxlIH0gZnJvbSAnLi9pbnRlcm5hbC9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5leHBvcnQgeyBTdWJqZWN0IH0gZnJvbSAnLi9pbnRlcm5hbC9TdWJqZWN0JztcbmV4cG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJy4vaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0JztcbmV4cG9ydCB7IFJlcGxheVN1YmplY3QgfSBmcm9tICcuL2ludGVybmFsL1JlcGxheVN1YmplY3QnO1xuZXhwb3J0IHsgQXN5bmNTdWJqZWN0IH0gZnJvbSAnLi9pbnRlcm5hbC9Bc3luY1N1YmplY3QnO1xuZXhwb3J0IHsgYXNhcCBhcyBhc2FwU2NoZWR1bGVyIH0gZnJvbSAnLi9pbnRlcm5hbC9zY2hlZHVsZXIvYXNhcCc7XG5leHBvcnQgeyBhc3luYyBhcyBhc3luY1NjaGVkdWxlciB9IGZyb20gJy4vaW50ZXJuYWwvc2NoZWR1bGVyL2FzeW5jJztcbmV4cG9ydCB7IHF1ZXVlIGFzIHF1ZXVlU2NoZWR1bGVyIH0gZnJvbSAnLi9pbnRlcm5hbC9zY2hlZHVsZXIvcXVldWUnO1xuZXhwb3J0IHsgYW5pbWF0aW9uRnJhbWUgYXMgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgfSBmcm9tICcuL2ludGVybmFsL3NjaGVkdWxlci9hbmltYXRpb25GcmFtZSc7XG5leHBvcnQgeyBWaXJ0dWFsVGltZVNjaGVkdWxlciwgVmlydHVhbEFjdGlvbiB9IGZyb20gJy4vaW50ZXJuYWwvc2NoZWR1bGVyL1ZpcnR1YWxUaW1lU2NoZWR1bGVyJztcbmV4cG9ydCB7IFNjaGVkdWxlciB9IGZyb20gJy4vaW50ZXJuYWwvU2NoZWR1bGVyJztcbmV4cG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vaW50ZXJuYWwvU3Vic2NyaXB0aW9uJztcbmV4cG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuL2ludGVybmFsL1N1YnNjcmliZXInO1xuZXhwb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9pbnRlcm5hbC9Ob3RpZmljYXRpb24nO1xuZXhwb3J0IHsgcGlwZSB9IGZyb20gJy4vaW50ZXJuYWwvdXRpbC9waXBlJztcbmV4cG9ydCB7IG5vb3AgfSBmcm9tICcuL2ludGVybmFsL3V0aWwvbm9vcCc7XG5leHBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4vaW50ZXJuYWwvdXRpbC9pZGVudGl0eSc7XG5leHBvcnQgeyBpc09ic2VydmFibGUgfSBmcm9tICcuL2ludGVybmFsL3V0aWwvaXNPYnNlcnZhYmxlJztcbmV4cG9ydCB7IEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yIH0gZnJvbSAnLi9pbnRlcm5hbC91dGlsL0FyZ3VtZW50T3V0T2ZSYW5nZUVycm9yJztcbmV4cG9ydCB7IEVtcHR5RXJyb3IgfSBmcm9tICcuL2ludGVybmFsL3V0aWwvRW1wdHlFcnJvcic7XG5leHBvcnQgeyBPYmplY3RVbnN1YnNjcmliZWRFcnJvciB9IGZyb20gJy4vaW50ZXJuYWwvdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG5leHBvcnQgeyBVbnN1YnNjcmlwdGlvbkVycm9yIH0gZnJvbSAnLi9pbnRlcm5hbC91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3InO1xuZXhwb3J0IHsgVGltZW91dEVycm9yIH0gZnJvbSAnLi9pbnRlcm5hbC91dGlsL1RpbWVvdXRFcnJvcic7XG5leHBvcnQgeyBiaW5kQ2FsbGJhY2sgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvYmluZENhbGxiYWNrJztcbmV4cG9ydCB7IGJpbmROb2RlQ2FsbGJhY2sgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvYmluZE5vZGVDYWxsYmFjayc7XG5leHBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbWJpbmVMYXRlc3QnO1xuZXhwb3J0IHsgY29uY2F0IH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2NvbmNhdCc7XG5leHBvcnQgeyBkZWZlciB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9kZWZlcic7XG5leHBvcnQgeyBlbXB0eSB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9lbXB0eSc7XG5leHBvcnQgeyBmb3JrSm9pbiB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9mb3JrSm9pbic7XG5leHBvcnQgeyBmcm9tIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb20nO1xuZXhwb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XG5leHBvcnQgeyBmcm9tRXZlbnRQYXR0ZXJuIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb21FdmVudFBhdHRlcm4nO1xuZXhwb3J0IHsgZ2VuZXJhdGUgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvZ2VuZXJhdGUnO1xuZXhwb3J0IHsgaWlmIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL2lpZic7XG5leHBvcnQgeyBpbnRlcnZhbCB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9pbnRlcnZhbCc7XG5leHBvcnQgeyBtZXJnZSB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9tZXJnZSc7XG5leHBvcnQgeyBuZXZlciB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9uZXZlcic7XG5leHBvcnQgeyBvZiB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9vZic7XG5leHBvcnQgeyBvbkVycm9yUmVzdW1lTmV4dCB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9vbkVycm9yUmVzdW1lTmV4dCc7XG5leHBvcnQgeyBwYWlycyB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS9wYWlycyc7XG5leHBvcnQgeyByYWNlIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL3JhY2UnO1xuZXhwb3J0IHsgcmFuZ2UgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvcmFuZ2UnO1xuZXhwb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS90aHJvd0Vycm9yJztcbmV4cG9ydCB7IHRpbWVyIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL3RpbWVyJztcbmV4cG9ydCB7IHVzaW5nIH0gZnJvbSAnLi9pbnRlcm5hbC9vYnNlcnZhYmxlL3VzaW5nJztcbmV4cG9ydCB7IHppcCB9IGZyb20gJy4vaW50ZXJuYWwvb2JzZXJ2YWJsZS96aXAnO1xuZXhwb3J0IHsgRU1QVFkgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvZW1wdHknO1xuZXhwb3J0IHsgTkVWRVIgfSBmcm9tICcuL2ludGVybmFsL29ic2VydmFibGUvbmV2ZXInO1xuZXhwb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9pbnRlcm5hbC9jb25maWcnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9TdWJqZWN0LF9TdWJzY3JpcHRpb24gUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICcuL1N1YmplY3QnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xudmFyIEFzeW5jU3ViamVjdCA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhBc3luY1N1YmplY3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXN5bmNTdWJqZWN0KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICBfdGhpcy5oYXNOZXh0ID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmhhc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFzeW5jU3ViamVjdC5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0Vycm9yKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKHRoaXMudGhyb3duRXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmhhc0NvbXBsZXRlZCAmJiB0aGlzLmhhc05leHQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuX3N1YnNjcmliZS5jYWxsKHRoaXMsIHN1YnNjcmliZXIpO1xuICAgIH07XG4gICAgQXN5bmNTdWJqZWN0LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuaGFzTmV4dCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFzeW5jU3ViamVjdC5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5lcnJvci5jYWxsKHRoaXMsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXN5bmNTdWJqZWN0LnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oYXNDb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5oYXNOZXh0KSB7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLm5leHQuY2FsbCh0aGlzLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmNvbXBsZXRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICByZXR1cm4gQXN5bmNTdWJqZWN0O1xufShTdWJqZWN0KSk7XG5leHBvcnQgeyBBc3luY1N1YmplY3QgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFzeW5jU3ViamVjdC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX1N1YmplY3QsX3V0aWxfT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICcuL1N1YmplY3QnO1xuaW1wb3J0IHsgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IgfSBmcm9tICcuL3V0aWwvT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xudmFyIEJlaGF2aW9yU3ViamVjdCA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhCZWhhdmlvclN1YmplY3QsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQmVoYXZpb3JTdWJqZWN0KF92YWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fdmFsdWUgPSBfdmFsdWU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJlaGF2aW9yU3ViamVjdC5wcm90b3R5cGUsIFwidmFsdWVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFZhbHVlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEJlaGF2aW9yU3ViamVjdC5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBfc3VwZXIucHJvdG90eXBlLl9zdWJzY3JpYmUuY2FsbCh0aGlzLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvbiAmJiAhc3Vic2NyaXB0aW9uLmNsb3NlZCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHRoaXMuX3ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH07XG4gICAgQmVoYXZpb3JTdWJqZWN0LnByb3RvdHlwZS5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IHRoaXMudGhyb3duRXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBCZWhhdmlvclN1YmplY3QucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5uZXh0LmNhbGwodGhpcywgdGhpcy5fdmFsdWUgPSB2YWx1ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gQmVoYXZpb3JTdWJqZWN0O1xufShTdWJqZWN0KSk7XG5leHBvcnQgeyBCZWhhdmlvclN1YmplY3QgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJlaGF2aW9yU3ViamVjdC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX1N1YnNjcmliZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xudmFyIElubmVyU3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhJbm5lclN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSW5uZXJTdWJzY3JpYmVyKHBhcmVudCwgb3V0ZXJWYWx1ZSwgb3V0ZXJJbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIF90aGlzLm91dGVyVmFsdWUgPSBvdXRlclZhbHVlO1xuICAgICAgICBfdGhpcy5vdXRlckluZGV4ID0gb3V0ZXJJbmRleDtcbiAgICAgICAgX3RoaXMuaW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIElubmVyU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQubm90aWZ5TmV4dCh0aGlzLm91dGVyVmFsdWUsIHZhbHVlLCB0aGlzLm91dGVySW5kZXgsIHRoaXMuaW5kZXgrKywgdGhpcyk7XG4gICAgfTtcbiAgICBJbm5lclN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLnBhcmVudC5ub3RpZnlFcnJvcihlcnJvciwgdGhpcyk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIElubmVyU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBhcmVudC5ub3RpZnlDb21wbGV0ZSh0aGlzKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIElubmVyU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgSW5uZXJTdWJzY3JpYmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Jbm5lclN1YnNjcmliZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9vYnNlcnZhYmxlX2VtcHR5LF9vYnNlcnZhYmxlX29mLF9vYnNlcnZhYmxlX3Rocm93RXJyb3IgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgZW1wdHkgfSBmcm9tICcuL29ic2VydmFibGUvZW1wdHknO1xuaW1wb3J0IHsgb2YgfSBmcm9tICcuL29ic2VydmFibGUvb2YnO1xuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gJy4vb2JzZXJ2YWJsZS90aHJvd0Vycm9yJztcbmV4cG9ydCB2YXIgTm90aWZpY2F0aW9uS2luZDtcbi8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChOb3RpZmljYXRpb25LaW5kKSB7XG4gICAgTm90aWZpY2F0aW9uS2luZFtcIk5FWFRcIl0gPSBcIk5cIjtcbiAgICBOb3RpZmljYXRpb25LaW5kW1wiRVJST1JcIl0gPSBcIkVcIjtcbiAgICBOb3RpZmljYXRpb25LaW5kW1wiQ09NUExFVEVcIl0gPSBcIkNcIjtcbn0pKE5vdGlmaWNhdGlvbktpbmQgfHwgKE5vdGlmaWNhdGlvbktpbmQgPSB7fSkpO1xudmFyIE5vdGlmaWNhdGlvbiA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb3RpZmljYXRpb24oa2luZCwgdmFsdWUsIGVycm9yKSB7XG4gICAgICAgIHRoaXMua2luZCA9IGtpbmQ7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5lcnJvciA9IGVycm9yO1xuICAgICAgICB0aGlzLmhhc1ZhbHVlID0ga2luZCA9PT0gXCJOXCI7XG4gICAgfVxuICAgIE5vdGlmaWNhdGlvbi5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICBzd2l0Y2ggKHRoaXMua2luZCkge1xuICAgICAgICAgICAgY2FzZSBcIk5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIubmV4dCAmJiBvYnNlcnZlci5uZXh0KHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBcIkVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JzZXJ2ZXIuZXJyb3IgJiYgb2JzZXJ2ZXIuZXJyb3IodGhpcy5lcnJvcik7XG4gICAgICAgICAgICBjYXNlIFwiQ1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlci5jb21wbGV0ZSAmJiBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb3RpZmljYXRpb24ucHJvdG90eXBlLmRvID0gZnVuY3Rpb24gKG5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIga2luZCA9IHRoaXMua2luZDtcbiAgICAgICAgc3dpdGNoIChraW5kKSB7XG4gICAgICAgICAgICBjYXNlIFwiTlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0ICYmIG5leHQodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIFwiRVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBlcnJvciAmJiBlcnJvcih0aGlzLmVycm9yKTtcbiAgICAgICAgICAgIGNhc2UgXCJDXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBsZXRlICYmIGNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vdGlmaWNhdGlvbi5wcm90b3R5cGUuYWNjZXB0ID0gZnVuY3Rpb24gKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyICYmIHR5cGVvZiBuZXh0T3JPYnNlcnZlci5uZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlKG5leHRPck9ic2VydmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb3RpZmljYXRpb24ucHJvdG90eXBlLnRvT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGtpbmQgPSB0aGlzLmtpbmQ7XG4gICAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICAgICAgY2FzZSBcIk5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIFwiRVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKHRoaXMuZXJyb3IpO1xuICAgICAgICAgICAgY2FzZSBcIkNcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZW1wdHkoKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VuZXhwZWN0ZWQgbm90aWZpY2F0aW9uIGtpbmQgdmFsdWUnKTtcbiAgICB9O1xuICAgIE5vdGlmaWNhdGlvbi5jcmVhdGVOZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE5vdGlmaWNhdGlvbihcIk5cIiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOb3RpZmljYXRpb24udW5kZWZpbmVkVmFsdWVOb3RpZmljYXRpb247XG4gICAgfTtcbiAgICBOb3RpZmljYXRpb24uY3JlYXRlRXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBuZXcgTm90aWZpY2F0aW9uKFwiRVwiLCB1bmRlZmluZWQsIGVycik7XG4gICAgfTtcbiAgICBOb3RpZmljYXRpb24uY3JlYXRlQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBOb3RpZmljYXRpb24uY29tcGxldGVOb3RpZmljYXRpb247XG4gICAgfTtcbiAgICBOb3RpZmljYXRpb24uY29tcGxldGVOb3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKFwiQ1wiKTtcbiAgICBOb3RpZmljYXRpb24udW5kZWZpbmVkVmFsdWVOb3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKFwiTlwiLCB1bmRlZmluZWQpO1xuICAgIHJldHVybiBOb3RpZmljYXRpb247XG59KCkpO1xuZXhwb3J0IHsgTm90aWZpY2F0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob3RpZmljYXRpb24uanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF91dGlsX2NhblJlcG9ydEVycm9yLF91dGlsX3RvU3Vic2NyaWJlcixfaW50ZXJuYWxfc3ltYm9sX29ic2VydmFibGUsX3V0aWxfcGlwZSxfY29uZmlnIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IGNhblJlcG9ydEVycm9yIH0gZnJvbSAnLi91dGlsL2NhblJlcG9ydEVycm9yJztcbmltcG9ydCB7IHRvU3Vic2NyaWJlciB9IGZyb20gJy4vdXRpbC90b1N1YnNjcmliZXInO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4uL2ludGVybmFsL3N5bWJvbC9vYnNlcnZhYmxlJztcbmltcG9ydCB7IHBpcGVGcm9tQXJyYXkgfSBmcm9tICcuL3V0aWwvcGlwZSc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG52YXIgT2JzZXJ2YWJsZSA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlKHN1YnNjcmliZSkge1xuICAgICAgICB0aGlzLl9pc1NjYWxhciA9IGZhbHNlO1xuICAgICAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICAgICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBvcGVyYXRvciA9IHRoaXMub3BlcmF0b3I7XG4gICAgICAgIHZhciBzaW5rID0gdG9TdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBpZiAob3BlcmF0b3IpIHtcbiAgICAgICAgICAgIHNpbmsuYWRkKG9wZXJhdG9yLmNhbGwoc2luaywgdGhpcy5zb3VyY2UpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNpbmsuYWRkKHRoaXMuc291cmNlIHx8IChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyAmJiAhc2luay5zeW5jRXJyb3JUaHJvd2FibGUpID9cbiAgICAgICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUoc2luaykgOlxuICAgICAgICAgICAgICAgIHRoaXMuX3RyeVN1YnNjcmliZShzaW5rKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICBpZiAoc2luay5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICBzaW5rLnN5bmNFcnJvclRocm93YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChzaW5rLnN5bmNFcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBzaW5rLnN5bmNFcnJvclZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2luaztcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLl90cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc2luaykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZShzaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICBzaW5rLnN5bmNFcnJvclRocm93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2luay5zeW5jRXJyb3JWYWx1ZSA9IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5SZXBvcnRFcnJvcihzaW5rKSkge1xuICAgICAgICAgICAgICAgIHNpbmsuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKG5leHQsIHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgcmVqZWN0LCByZXNvbHZlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHRoaXMuc291cmNlO1xuICAgICAgICByZXR1cm4gc291cmNlICYmIHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZVtTeW1ib2xfb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9wZXJhdGlvbnMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG9wZXJhdGlvbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3BlcmF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwaXBlRnJvbUFycmF5KG9wZXJhdGlvbnMpKHRoaXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUudG9Qcm9taXNlID0gZnVuY3Rpb24gKHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZShmdW5jdGlvbiAoeCkgeyByZXR1cm4gdmFsdWUgPSB4OyB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiByZWplY3QoZXJyKTsgfSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZSh2YWx1ZSk7IH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUuY3JlYXRlID0gZnVuY3Rpb24gKHN1YnNjcmliZSkge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlO1xufSgpKTtcbmV4cG9ydCB7IE9ic2VydmFibGUgfTtcbmZ1bmN0aW9uIGdldFByb21pc2VDdG9yKHByb21pc2VDdG9yKSB7XG4gICAgaWYgKCFwcm9taXNlQ3Rvcikge1xuICAgICAgICBwcm9taXNlQ3RvciA9IGNvbmZpZy5Qcm9taXNlIHx8IFByb21pc2U7XG4gICAgfVxuICAgIGlmICghcHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBQcm9taXNlIGltcGwgZm91bmQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2VDdG9yO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2YWJsZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX2NvbmZpZyxfdXRpbF9ob3N0UmVwb3J0RXJyb3IgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgaG9zdFJlcG9ydEVycm9yIH0gZnJvbSAnLi91dGlsL2hvc3RSZXBvcnRFcnJvcic7XG5leHBvcnQgdmFyIGVtcHR5ID0ge1xuICAgIGNsb3NlZDogdHJ1ZSxcbiAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHsgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkgeyB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T2JzZXJ2ZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9TdWJzY3JpYmVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi9TdWJzY3JpYmVyJztcbnZhciBPdXRlclN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoT3V0ZXJTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE91dGVyU3Vic2NyaWJlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGlubmVyVmFsdWUpO1xuICAgIH07XG4gICAgT3V0ZXJTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnJvcik7XG4gICAgfTtcbiAgICBPdXRlclN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKGlubmVyU3ViKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9O1xuICAgIHJldHVybiBPdXRlclN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbmV4cG9ydCB7IE91dGVyU3Vic2NyaWJlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T3V0ZXJTdWJzY3JpYmVyLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfU3ViamVjdCxfc2NoZWR1bGVyX3F1ZXVlLF9TdWJzY3JpcHRpb24sX29wZXJhdG9yc19vYnNlcnZlT24sX3V0aWxfT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IsX1N1YmplY3RTdWJzY3JpcHRpb24gUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICcuL1N1YmplY3QnO1xuaW1wb3J0IHsgcXVldWUgfSBmcm9tICcuL3NjaGVkdWxlci9xdWV1ZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBPYnNlcnZlT25TdWJzY3JpYmVyIH0gZnJvbSAnLi9vcGVyYXRvcnMvb2JzZXJ2ZU9uJztcbmltcG9ydCB7IE9iamVjdFVuc3Vic2NyaWJlZEVycm9yIH0gZnJvbSAnLi91dGlsL09iamVjdFVuc3Vic2NyaWJlZEVycm9yJztcbmltcG9ydCB7IFN1YmplY3RTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YmplY3RTdWJzY3JpcHRpb24nO1xudmFyIFJlcGxheVN1YmplY3QgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoUmVwbGF5U3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZXBsYXlTdWJqZWN0KGJ1ZmZlclNpemUsIHdpbmRvd1RpbWUsIHNjaGVkdWxlcikge1xuICAgICAgICBpZiAoYnVmZmVyU2l6ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBidWZmZXJTaXplID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3dUaW1lID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHdpbmRvd1RpbWUgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBfdGhpcy5fZXZlbnRzID0gW107XG4gICAgICAgIF90aGlzLl9pbmZpbml0ZVRpbWVXaW5kb3cgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuX2J1ZmZlclNpemUgPSBidWZmZXJTaXplIDwgMSA/IDEgOiBidWZmZXJTaXplO1xuICAgICAgICBfdGhpcy5fd2luZG93VGltZSA9IHdpbmRvd1RpbWUgPCAxID8gMSA6IHdpbmRvd1RpbWU7XG4gICAgICAgIGlmICh3aW5kb3dUaW1lID09PSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpIHtcbiAgICAgICAgICAgIF90aGlzLl9pbmZpbml0ZVRpbWVXaW5kb3cgPSB0cnVlO1xuICAgICAgICAgICAgX3RoaXMubmV4dCA9IF90aGlzLm5leHRJbmZpbml0ZVRpbWVXaW5kb3c7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5uZXh0ID0gX3RoaXMubmV4dFRpbWVXaW5kb3c7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBSZXBsYXlTdWJqZWN0LnByb3RvdHlwZS5uZXh0SW5maW5pdGVUaW1lV2luZG93ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgICBfZXZlbnRzLnB1c2godmFsdWUpO1xuICAgICAgICBpZiAoX2V2ZW50cy5sZW5ndGggPiB0aGlzLl9idWZmZXJTaXplKSB7XG4gICAgICAgICAgICBfZXZlbnRzLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5uZXh0LmNhbGwodGhpcywgdmFsdWUpO1xuICAgIH07XG4gICAgUmVwbGF5U3ViamVjdC5wcm90b3R5cGUubmV4dFRpbWVXaW5kb3cgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZXZlbnRzLnB1c2gobmV3IFJlcGxheUV2ZW50KHRoaXMuX2dldE5vdygpLCB2YWx1ZSkpO1xuICAgICAgICB0aGlzLl90cmltQnVmZmVyVGhlbkdldEV2ZW50cygpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLm5leHQuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBSZXBsYXlTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIF9pbmZpbml0ZVRpbWVXaW5kb3cgPSB0aGlzLl9pbmZpbml0ZVRpbWVXaW5kb3c7XG4gICAgICAgIHZhciBfZXZlbnRzID0gX2luZmluaXRlVGltZVdpbmRvdyA/IHRoaXMuX2V2ZW50cyA6IHRoaXMuX3RyaW1CdWZmZXJUaGVuR2V0RXZlbnRzKCk7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgdmFyIGxlbiA9IF9ldmVudHMubGVuZ3RoO1xuICAgICAgICB2YXIgc3Vic2NyaXB0aW9uO1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNTdG9wcGVkIHx8IHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBuZXcgU3ViamVjdFN1YnNjcmlwdGlvbih0aGlzLCBzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NoZWR1bGVyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmFkZChzdWJzY3JpYmVyID0gbmV3IE9ic2VydmVPblN1YnNjcmliZXIoc3Vic2NyaWJlciwgc2NoZWR1bGVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9pbmZpbml0ZVRpbWVXaW5kb3cpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuICYmICFzdWJzY3JpYmVyLmNsb3NlZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KF9ldmVudHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW4gJiYgIXN1YnNjcmliZXIuY2xvc2VkOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoX2V2ZW50c1tpXS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IodGhpcy50aHJvd25FcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH07XG4gICAgUmVwbGF5U3ViamVjdC5wcm90b3R5cGUuX2dldE5vdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnNjaGVkdWxlciB8fCBxdWV1ZSkubm93KCk7XG4gICAgfTtcbiAgICBSZXBsYXlTdWJqZWN0LnByb3RvdHlwZS5fdHJpbUJ1ZmZlclRoZW5HZXRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBub3cgPSB0aGlzLl9nZXROb3coKTtcbiAgICAgICAgdmFyIF9idWZmZXJTaXplID0gdGhpcy5fYnVmZmVyU2l6ZTtcbiAgICAgICAgdmFyIF93aW5kb3dUaW1lID0gdGhpcy5fd2luZG93VGltZTtcbiAgICAgICAgdmFyIF9ldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICAgIHZhciBldmVudHNDb3VudCA9IF9ldmVudHMubGVuZ3RoO1xuICAgICAgICB2YXIgc3BsaWNlQ291bnQgPSAwO1xuICAgICAgICB3aGlsZSAoc3BsaWNlQ291bnQgPCBldmVudHNDb3VudCkge1xuICAgICAgICAgICAgaWYgKChub3cgLSBfZXZlbnRzW3NwbGljZUNvdW50XS50aW1lKSA8IF93aW5kb3dUaW1lKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGxpY2VDb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudHNDb3VudCA+IF9idWZmZXJTaXplKSB7XG4gICAgICAgICAgICBzcGxpY2VDb3VudCA9IE1hdGgubWF4KHNwbGljZUNvdW50LCBldmVudHNDb3VudCAtIF9idWZmZXJTaXplKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3BsaWNlQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBfZXZlbnRzLnNwbGljZSgwLCBzcGxpY2VDb3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9ldmVudHM7XG4gICAgfTtcbiAgICByZXR1cm4gUmVwbGF5U3ViamVjdDtcbn0oU3ViamVjdCkpO1xuZXhwb3J0IHsgUmVwbGF5U3ViamVjdCB9O1xudmFyIFJlcGxheUV2ZW50ID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlcGxheUV2ZW50KHRpbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIFJlcGxheUV2ZW50O1xufSgpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJlcGxheVN1YmplY3QuanMubWFwXG4iLCJ2YXIgU2NoZWR1bGVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjaGVkdWxlcihTY2hlZHVsZXJBY3Rpb24sIG5vdykge1xuICAgICAgICBpZiAobm93ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIG5vdyA9IFNjaGVkdWxlci5ub3c7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5TY2hlZHVsZXJBY3Rpb24gPSBTY2hlZHVsZXJBY3Rpb247XG4gICAgICAgIHRoaXMubm93ID0gbm93O1xuICAgIH1cbiAgICBTY2hlZHVsZXIucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHdvcmssIGRlbGF5LCBzdGF0ZSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5TY2hlZHVsZXJBY3Rpb24odGhpcywgd29yaykuc2NoZWR1bGUoc3RhdGUsIGRlbGF5KTtcbiAgICB9O1xuICAgIFNjaGVkdWxlci5ub3cgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBEYXRlLm5vdygpOyB9O1xuICAgIHJldHVybiBTY2hlZHVsZXI7XG59KCkpO1xuZXhwb3J0IHsgU2NoZWR1bGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TY2hlZHVsZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9PYnNlcnZhYmxlLF9TdWJzY3JpYmVyLF9TdWJzY3JpcHRpb24sX3V0aWxfT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IsX1N1YmplY3RTdWJzY3JpcHRpb24sX2ludGVybmFsX3N5bWJvbF9yeFN1YnNjcmliZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBPYmplY3RVbnN1YnNjcmliZWRFcnJvciB9IGZyb20gJy4vdXRpbC9PYmplY3RVbnN1YnNjcmliZWRFcnJvcic7XG5pbXBvcnQgeyBTdWJqZWN0U3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJqZWN0U3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IHJ4U3Vic2NyaWJlciBhcyByeFN1YnNjcmliZXJTeW1ib2wgfSBmcm9tICcuLi9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyJztcbnZhciBTdWJqZWN0U3Vic2NyaWJlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhTdWJqZWN0U3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJqZWN0U3Vic2NyaWJlcihkZXN0aW5hdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gU3ViamVjdFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbmV4cG9ydCB7IFN1YmplY3RTdWJzY3JpYmVyIH07XG52YXIgU3ViamVjdCA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhTdWJqZWN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YmplY3QoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm9ic2VydmVycyA9IFtdO1xuICAgICAgICBfdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnRocm93bkVycm9yID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdWJqZWN0LnByb3RvdHlwZVtyeFN1YnNjcmliZXJTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFN1YmplY3RTdWJzY3JpYmVyKHRoaXMpO1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgc3ViamVjdCA9IG5ldyBBbm9ueW1vdXNTdWJqZWN0KHRoaXMsIHRoaXMpO1xuICAgICAgICBzdWJqZWN0Lm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHJldHVybiBzdWJqZWN0O1xuICAgIH07XG4gICAgU3ViamVjdC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlcnMgPSB0aGlzLm9ic2VydmVycztcbiAgICAgICAgICAgIHZhciBsZW4gPSBvYnNlcnZlcnMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGNvcHkgPSBvYnNlcnZlcnMuc2xpY2UoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb3B5W2ldLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aHJvd25FcnJvciA9IGVycjtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gdGhpcy5vYnNlcnZlcnM7XG4gICAgICAgIHZhciBsZW4gPSBvYnNlcnZlcnMubGVuZ3RoO1xuICAgICAgICB2YXIgY29weSA9IG9ic2VydmVycy5zbGljZSgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjb3B5W2ldLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vYnNlcnZlcnMubGVuZ3RoID0gMDtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHRoaXMub2JzZXJ2ZXJzO1xuICAgICAgICB2YXIgbGVuID0gb2JzZXJ2ZXJzLmxlbmd0aDtcbiAgICAgICAgdmFyIGNvcHkgPSBvYnNlcnZlcnMuc2xpY2UoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29weVtpXS5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCA9IDA7XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gbnVsbDtcbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLl90cnlTdWJzY3JpYmUgPSBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBPYmplY3RVbnN1YnNjcmliZWRFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuX3RyeVN1YnNjcmliZS5jYWxsKHRoaXMsIHN1YnNjcmliZXIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJqZWN0LnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmhhc0Vycm9yKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKHRoaXMudGhyb3duRXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2goc3Vic2NyaWJlcik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN1YmplY3RTdWJzY3JpcHRpb24odGhpcywgc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YmplY3QucHJvdG90eXBlLmFzT2JzZXJ2YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgICAgICBvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgU3ViamVjdC5jcmVhdGUgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gbmV3IEFub255bW91c1N1YmplY3QoZGVzdGluYXRpb24sIHNvdXJjZSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3ViamVjdDtcbn0oT2JzZXJ2YWJsZSkpO1xuZXhwb3J0IHsgU3ViamVjdCB9O1xudmFyIEFub255bW91c1N1YmplY3QgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoQW5vbnltb3VzU3ViamVjdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBbm9ueW1vdXNTdWJqZWN0KGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbjtcbiAgICAgICAgX3RoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFub255bW91c1N1YmplY3QucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uICYmIGRlc3RpbmF0aW9uLm5leHQpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLm5leHQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBbm9ueW1vdXNTdWJqZWN0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdmFyIGRlc3RpbmF0aW9uID0gdGhpcy5kZXN0aW5hdGlvbjtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uICYmIGRlc3RpbmF0aW9uLmVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFub255bW91c1N1YmplY3QucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICBpZiAoZGVzdGluYXRpb24gJiYgZGVzdGluYXRpb24uY29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQW5vbnltb3VzU3ViamVjdC5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcbiAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBbm9ueW1vdXNTdWJqZWN0O1xufShTdWJqZWN0KSk7XG5leHBvcnQgeyBBbm9ueW1vdXNTdWJqZWN0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJqZWN0LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfU3Vic2NyaXB0aW9uIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG52YXIgU3ViamVjdFN1YnNjcmlwdGlvbiA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhTdWJqZWN0U3Vic2NyaXB0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN1YmplY3RTdWJzY3JpcHRpb24oc3ViamVjdCwgc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcbiAgICAgICAgX3RoaXMuc3Vic2NyaWJlciA9IHN1YnNjcmliZXI7XG4gICAgICAgIF90aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFN1YmplY3RTdWJzY3JpcHRpb24ucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHZhciBzdWJqZWN0ID0gdGhpcy5zdWJqZWN0O1xuICAgICAgICB2YXIgb2JzZXJ2ZXJzID0gc3ViamVjdC5vYnNlcnZlcnM7XG4gICAgICAgIHRoaXMuc3ViamVjdCA9IG51bGw7XG4gICAgICAgIGlmICghb2JzZXJ2ZXJzIHx8IG9ic2VydmVycy5sZW5ndGggPT09IDAgfHwgc3ViamVjdC5pc1N0b3BwZWQgfHwgc3ViamVjdC5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3Vic2NyaWJlckluZGV4ID0gb2JzZXJ2ZXJzLmluZGV4T2YodGhpcy5zdWJzY3JpYmVyKTtcbiAgICAgICAgaWYgKHN1YnNjcmliZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIG9ic2VydmVycy5zcGxpY2Uoc3Vic2NyaWJlckluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFN1YmplY3RTdWJzY3JpcHRpb247XG59KFN1YnNjcmlwdGlvbikpO1xuZXhwb3J0IHsgU3ViamVjdFN1YnNjcmlwdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3ViamVjdFN1YnNjcmlwdGlvbi5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX3V0aWxfaXNGdW5jdGlvbixfT2JzZXJ2ZXIsX1N1YnNjcmlwdGlvbixfaW50ZXJuYWxfc3ltYm9sX3J4U3Vic2NyaWJlcixfY29uZmlnLF91dGlsX2hvc3RSZXBvcnRFcnJvciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IGVtcHR5IGFzIGVtcHR5T2JzZXJ2ZXIgfSBmcm9tICcuL09ic2VydmVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IHJ4U3Vic2NyaWJlciBhcyByeFN1YnNjcmliZXJTeW1ib2wgfSBmcm9tICcuLi9pbnRlcm5hbC9zeW1ib2wvcnhTdWJzY3JpYmVyJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IGhvc3RSZXBvcnRFcnJvciB9IGZyb20gJy4vdXRpbC9ob3N0UmVwb3J0RXJyb3InO1xudmFyIFN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJzY3JpYmVyKGRlc3RpbmF0aW9uT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3luY0Vycm9yVmFsdWUgPSBudWxsO1xuICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd24gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGVtcHR5T2JzZXJ2ZXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKCFkZXN0aW5hdGlvbk9yTmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGVtcHR5T2JzZXJ2ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRlc3RpbmF0aW9uT3JOZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb25Pck5leHQgaW5zdGFuY2VvZiBTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zeW5jRXJyb3JUaHJvd2FibGUgPSBkZXN0aW5hdGlvbk9yTmV4dC5zeW5jRXJyb3JUaHJvd2FibGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uT3JOZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdGluYXRpb25Pck5leHQuYWRkKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnN5bmNFcnJvclRocm93YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTYWZlU3Vic2NyaWJlcihfdGhpcywgZGVzdGluYXRpb25Pck5leHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgX3RoaXMuc3luY0Vycm9yVGhyb3dhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IG5ldyBTYWZlU3Vic2NyaWJlcihfdGhpcywgZGVzdGluYXRpb25Pck5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZVtyeFN1YnNjcmliZXJTeW1ib2xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcbiAgICBTdWJzY3JpYmVyLmNyZWF0ZSA9IGZ1bmN0aW9uIChuZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIHN1YnNjcmliZXIgPSBuZXcgU3Vic2NyaWJlcihuZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBzdWJzY3JpYmVyLnN5bmNFcnJvclRocm93YWJsZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5fbmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlKTtcbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUuX3Vuc3Vic2NyaWJlQW5kUmVjeWNsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgX3BhcmVudCA9IF9hLl9wYXJlbnQsIF9wYXJlbnRzID0gX2EuX3BhcmVudHM7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3BhcmVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IF9wYXJlbnQ7XG4gICAgICAgIHRoaXMuX3BhcmVudHMgPSBfcGFyZW50cztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gU3Vic2NyaWJlcjtcbn0oU3Vic2NyaXB0aW9uKSk7XG5leHBvcnQgeyBTdWJzY3JpYmVyIH07XG52YXIgU2FmZVN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoU2FmZVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2FmZVN1YnNjcmliZXIoX3BhcmVudFN1YnNjcmliZXIsIG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3BhcmVudFN1YnNjcmliZXIgPSBfcGFyZW50U3Vic2NyaWJlcjtcbiAgICAgICAgdmFyIG5leHQ7XG4gICAgICAgIHZhciBjb250ZXh0ID0gX3RoaXM7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKG9ic2VydmVyT3JOZXh0KSkge1xuICAgICAgICAgICAgbmV4dCA9IG9ic2VydmVyT3JOZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9ic2VydmVyT3JOZXh0KSB7XG4gICAgICAgICAgICBuZXh0ID0gb2JzZXJ2ZXJPck5leHQubmV4dDtcbiAgICAgICAgICAgIGVycm9yID0gb2JzZXJ2ZXJPck5leHQuZXJyb3I7XG4gICAgICAgICAgICBjb21wbGV0ZSA9IG9ic2VydmVyT3JOZXh0LmNvbXBsZXRlO1xuICAgICAgICAgICAgaWYgKG9ic2VydmVyT3JOZXh0ICE9PSBlbXB0eU9ic2VydmVyKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dCA9IE9iamVjdC5jcmVhdGUob2JzZXJ2ZXJPck5leHQpO1xuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQudW5zdWJzY3JpYmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkZChjb250ZXh0LnVuc3Vic2NyaWJlLmJpbmQoY29udGV4dCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250ZXh0LnVuc3Vic2NyaWJlID0gX3RoaXMudW5zdWJzY3JpYmUuYmluZChfdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICBfdGhpcy5fbmV4dCA9IG5leHQ7XG4gICAgICAgIF90aGlzLl9lcnJvciA9IGVycm9yO1xuICAgICAgICBfdGhpcy5fY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkICYmIHRoaXMuX25leHQpIHtcbiAgICAgICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgICAgICBpZiAoIWNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nIHx8ICFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fdHJ5T3JVbnN1Yih0aGlzLl9uZXh0LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLl9fdHJ5T3JTZXRFcnJvcihfcGFyZW50U3Vic2NyaWJlciwgdGhpcy5fbmV4dCwgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTYWZlU3Vic2NyaWJlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgICAgICB2YXIgdXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZyA9IGNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nIHx8ICFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIodGhpcy5fZXJyb3IsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190cnlPclNldEVycm9yKF9wYXJlbnRTdWJzY3JpYmVyLCB0aGlzLl9lcnJvciwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wYXJlbnRTdWJzY3JpYmVyLnN5bmNFcnJvclZhbHVlID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICBfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zdFJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICB2YXIgX3BhcmVudFN1YnNjcmliZXIgPSB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZWRDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLl9jb21wbGV0ZS5jYWxsKF90aGlzLl9jb250ZXh0KTsgfTtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nIHx8ICFfcGFyZW50U3Vic2NyaWJlci5zeW5jRXJyb3JUaHJvd2FibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yVW5zdWIod3JhcHBlZENvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RyeU9yU2V0RXJyb3IoX3BhcmVudFN1YnNjcmliZXIsIHdyYXBwZWRDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fX3RyeU9yVW5zdWIgPSBmdW5jdGlvbiAoZm4sIHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmbi5jYWxsKHRoaXMuX2NvbnRleHQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBob3N0UmVwb3J0RXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU2FmZVN1YnNjcmliZXIucHJvdG90eXBlLl9fdHJ5T3JTZXRFcnJvciA9IGZ1bmN0aW9uIChwYXJlbnQsIGZuLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIWNvbmZpZy51c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2JhZCBjYWxsJyk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZuLmNhbGwodGhpcy5fY29udGV4dCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgIHBhcmVudC5zeW5jRXJyb3JWYWx1ZSA9IGVycjtcbiAgICAgICAgICAgICAgICBwYXJlbnQuc3luY0Vycm9yVGhyb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGhvc3RSZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFNhZmVTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfcGFyZW50U3Vic2NyaWJlciA9IHRoaXMuX3BhcmVudFN1YnNjcmliZXI7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBudWxsO1xuICAgICAgICB0aGlzLl9wYXJlbnRTdWJzY3JpYmVyID0gbnVsbDtcbiAgICAgICAgX3BhcmVudFN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICAgIHJldHVybiBTYWZlU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgU2FmZVN1YnNjcmliZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmliZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF91dGlsX2lzQXJyYXksX3V0aWxfaXNPYmplY3QsX3V0aWxfaXNGdW5jdGlvbixfdXRpbF9VbnN1YnNjcmlwdGlvbkVycm9yIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuL3V0aWwvaXNBcnJheSc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4vdXRpbC9pc09iamVjdCc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgVW5zdWJzY3JpcHRpb25FcnJvciB9IGZyb20gJy4vdXRpbC9VbnN1YnNjcmlwdGlvbkVycm9yJztcbnZhciBTdWJzY3JpcHRpb24gPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU3Vic2NyaXB0aW9uKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3BhcmVudHMgPSBudWxsO1xuICAgICAgICB0aGlzLl9zdWJzY3JpcHRpb25zID0gbnVsbDtcbiAgICAgICAgaWYgKHVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLl91bnN1YnNjcmliZSA9IHVuc3Vic2NyaWJlO1xuICAgICAgICB9XG4gICAgfVxuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBoYXNFcnJvcnMgPSBmYWxzZTtcbiAgICAgICAgdmFyIGVycm9ycztcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9hID0gdGhpcywgX3BhcmVudCA9IF9hLl9wYXJlbnQsIF9wYXJlbnRzID0gX2EuX3BhcmVudHMsIF91bnN1YnNjcmliZSA9IF9hLl91bnN1YnNjcmliZSwgX3N1YnNjcmlwdGlvbnMgPSBfYS5fc3Vic2NyaXB0aW9ucztcbiAgICAgICAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9wYXJlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLl9wYXJlbnRzID0gbnVsbDtcbiAgICAgICAgdGhpcy5fc3Vic2NyaXB0aW9ucyA9IG51bGw7XG4gICAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgICB2YXIgbGVuID0gX3BhcmVudHMgPyBfcGFyZW50cy5sZW5ndGggOiAwO1xuICAgICAgICB3aGlsZSAoX3BhcmVudCkge1xuICAgICAgICAgICAgX3BhcmVudC5yZW1vdmUodGhpcyk7XG4gICAgICAgICAgICBfcGFyZW50ID0gKytpbmRleCA8IGxlbiAmJiBfcGFyZW50c1tpbmRleF0gfHwgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNGdW5jdGlvbihfdW5zdWJzY3JpYmUpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIF91bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBoYXNFcnJvcnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVycm9ycyA9IGUgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yID8gZmxhdHRlblVuc3Vic2NyaXB0aW9uRXJyb3JzKGUuZXJyb3JzKSA6IFtlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBcnJheShfc3Vic2NyaXB0aW9ucykpIHtcbiAgICAgICAgICAgIGluZGV4ID0gLTE7XG4gICAgICAgICAgICBsZW4gPSBfc3Vic2NyaXB0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbikge1xuICAgICAgICAgICAgICAgIHZhciBzdWIgPSBfc3Vic2NyaXB0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHN1YikpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNFcnJvcnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBVbnN1YnNjcmlwdGlvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzLmNvbmNhdChmbGF0dGVuVW5zdWJzY3JpcHRpb25FcnJvcnMoZS5lcnJvcnMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNFcnJvcnMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBVbnN1YnNjcmlwdGlvbkVycm9yKGVycm9ycyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHRlYXJkb3duKSB7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0ZWFyZG93bjtcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdGVhcmRvd24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKHRlYXJkb3duKTtcbiAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbiA9PT0gdGhpcyB8fCBzdWJzY3JpcHRpb24uY2xvc2VkIHx8IHR5cGVvZiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCEoc3Vic2NyaXB0aW9uIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG1wID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5fc3Vic2NyaXB0aW9ucyA9IFt0bXBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRlYXJkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5yZWNvZ25pemVkIHRlYXJkb3duICcgKyB0ZWFyZG93biArICcgYWRkZWQgdG8gU3Vic2NyaXB0aW9uLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdWJzY3JpcHRpb24uX2FkZFBhcmVudCh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbnMgPSB0aGlzLl9zdWJzY3JpcHRpb25zO1xuICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBbc3Vic2NyaXB0aW9uXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb25zID0gdGhpcy5fc3Vic2NyaXB0aW9ucztcbiAgICAgICAgaWYgKHN1YnNjcmlwdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb25JbmRleCA9IHN1YnNjcmlwdGlvbnMuaW5kZXhPZihzdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbnMuc3BsaWNlKHN1YnNjcmlwdGlvbkluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5fYWRkUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBfcGFyZW50ID0gX2EuX3BhcmVudCwgX3BhcmVudHMgPSBfYS5fcGFyZW50cztcbiAgICAgICAgaWYgKF9wYXJlbnQgPT09IHBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFfcGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghX3BhcmVudHMpIHtcbiAgICAgICAgICAgIHRoaXMuX3BhcmVudHMgPSBbcGFyZW50XTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9wYXJlbnRzLmluZGV4T2YocGFyZW50KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIF9wYXJlbnRzLnB1c2gocGFyZW50KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5FTVBUWSA9IChmdW5jdGlvbiAoZW1wdHkpIHtcbiAgICAgICAgZW1wdHkuY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGVtcHR5O1xuICAgIH0obmV3IFN1YnNjcmlwdGlvbigpKSk7XG4gICAgcmV0dXJuIFN1YnNjcmlwdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBTdWJzY3JpcHRpb24gfTtcbmZ1bmN0aW9uIGZsYXR0ZW5VbnN1YnNjcmlwdGlvbkVycm9ycyhlcnJvcnMpIHtcbiAgICByZXR1cm4gZXJyb3JzLnJlZHVjZShmdW5jdGlvbiAoZXJycywgZXJyKSB7IHJldHVybiBlcnJzLmNvbmNhdCgoZXJyIGluc3RhbmNlb2YgVW5zdWJzY3JpcHRpb25FcnJvcikgPyBlcnIuZXJyb3JzIDogZXJyKTsgfSwgW10pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3Vic2NyaXB0aW9uLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIF9lbmFibGVfc3VwZXJfZ3Jvc3NfbW9kZV90aGF0X3dpbGxfY2F1c2VfYmFkX3RoaW5ncyA9IGZhbHNlO1xuZXhwb3J0IHZhciBjb25maWcgPSB7XG4gICAgUHJvbWlzZTogdW5kZWZpbmVkLFxuICAgIHNldCB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGVycm9yID0gLypAX19QVVJFX18qLyBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgIC8qQF9fUFVSRV9fKi8gY29uc29sZS53YXJuKCdERVBSRUNBVEVEISBSeEpTIHdhcyBzZXQgdG8gdXNlIGRlcHJlY2F0ZWQgc3luY2hyb25vdXMgZXJyb3IgaGFuZGxpbmcgYmVoYXZpb3IgYnkgY29kZSBhdDogXFxuJyArIGVycm9yLnN0YWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfZW5hYmxlX3N1cGVyX2dyb3NzX21vZGVfdGhhdF93aWxsX2NhdXNlX2JhZF90aGluZ3MpIHtcbiAgICAgICAgICAgIC8qQF9fUFVSRV9fKi8gY29uc29sZS5sb2coJ1J4SlM6IEJhY2sgdG8gYSBiZXR0ZXIgZXJyb3IgYmVoYXZpb3IuIFRoYW5rIHlvdS4gPDMnKTtcbiAgICAgICAgfVxuICAgICAgICBfZW5hYmxlX3N1cGVyX2dyb3NzX21vZGVfdGhhdF93aWxsX2NhdXNlX2JhZF90aGluZ3MgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGdldCB1c2VEZXByZWNhdGVkU3luY2hyb25vdXNFcnJvckhhbmRsaW5nKCkge1xuICAgICAgICByZXR1cm4gX2VuYWJsZV9zdXBlcl9ncm9zc19tb2RlX3RoYXRfd2lsbF9jYXVzZV9iYWRfdGhpbmdzO1xuICAgIH0sXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlnLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfU3ViamVjdCxfT2JzZXJ2YWJsZSxfU3Vic2NyaWJlcixfU3Vic2NyaXB0aW9uLF9vcGVyYXRvcnNfcmVmQ291bnQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YmplY3RTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3ViamVjdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgcmVmQ291bnQgYXMgaGlnaGVyT3JkZXJSZWZDb3VudCB9IGZyb20gJy4uL29wZXJhdG9ycy9yZWZDb3VudCc7XG52YXIgQ29ubmVjdGFibGVPYnNlcnZhYmxlID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKENvbm5lY3RhYmxlT2JzZXJ2YWJsZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb25uZWN0YWJsZU9ic2VydmFibGUoc291cmNlLCBzdWJqZWN0RmFjdG9yeSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zb3VyY2UgPSBzb3VyY2U7XG4gICAgICAgIF90aGlzLnN1YmplY3RGYWN0b3J5ID0gc3ViamVjdEZhY3Rvcnk7XG4gICAgICAgIF90aGlzLl9yZWZDb3VudCA9IDA7XG4gICAgICAgIF90aGlzLl9pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ29ubmVjdGFibGVPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3ViamVjdCgpLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9O1xuICAgIENvbm5lY3RhYmxlT2JzZXJ2YWJsZS5wcm90b3R5cGUuZ2V0U3ViamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN1YmplY3QgPSB0aGlzLl9zdWJqZWN0O1xuICAgICAgICBpZiAoIXN1YmplY3QgfHwgc3ViamVjdC5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N1YmplY3QgPSB0aGlzLnN1YmplY3RGYWN0b3J5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1YmplY3Q7XG4gICAgfTtcbiAgICBDb25uZWN0YWJsZU9ic2VydmFibGUucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gdGhpcy5fY29ubmVjdGlvbjtcbiAgICAgICAgaWYgKCFjb25uZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICBjb25uZWN0aW9uID0gdGhpcy5fY29ubmVjdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uYWRkKHRoaXMuc291cmNlXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShuZXcgQ29ubmVjdGFibGVTdWJzY3JpYmVyKHRoaXMuZ2V0U3ViamVjdCgpLCB0aGlzKSkpO1xuICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb24uY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2Nvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb25uZWN0aW9uO1xuICAgIH07XG4gICAgQ29ubmVjdGFibGVPYnNlcnZhYmxlLnByb3RvdHlwZS5yZWZDb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGhpZ2hlck9yZGVyUmVmQ291bnQoKSh0aGlzKTtcbiAgICB9O1xuICAgIHJldHVybiBDb25uZWN0YWJsZU9ic2VydmFibGU7XG59KE9ic2VydmFibGUpKTtcbmV4cG9ydCB7IENvbm5lY3RhYmxlT2JzZXJ2YWJsZSB9O1xudmFyIGNvbm5lY3RhYmxlUHJvdG8gPSBDb25uZWN0YWJsZU9ic2VydmFibGUucHJvdG90eXBlO1xuZXhwb3J0IHZhciBjb25uZWN0YWJsZU9ic2VydmFibGVEZXNjcmlwdG9yID0ge1xuICAgIG9wZXJhdG9yOiB7IHZhbHVlOiBudWxsIH0sXG4gICAgX3JlZkNvdW50OiB7IHZhbHVlOiAwLCB3cml0YWJsZTogdHJ1ZSB9LFxuICAgIF9zdWJqZWN0OiB7IHZhbHVlOiBudWxsLCB3cml0YWJsZTogdHJ1ZSB9LFxuICAgIF9jb25uZWN0aW9uOiB7IHZhbHVlOiBudWxsLCB3cml0YWJsZTogdHJ1ZSB9LFxuICAgIF9zdWJzY3JpYmU6IHsgdmFsdWU6IGNvbm5lY3RhYmxlUHJvdG8uX3N1YnNjcmliZSB9LFxuICAgIF9pc0NvbXBsZXRlOiB7IHZhbHVlOiBjb25uZWN0YWJsZVByb3RvLl9pc0NvbXBsZXRlLCB3cml0YWJsZTogdHJ1ZSB9LFxuICAgIGdldFN1YmplY3Q6IHsgdmFsdWU6IGNvbm5lY3RhYmxlUHJvdG8uZ2V0U3ViamVjdCB9LFxuICAgIGNvbm5lY3Q6IHsgdmFsdWU6IGNvbm5lY3RhYmxlUHJvdG8uY29ubmVjdCB9LFxuICAgIHJlZkNvdW50OiB7IHZhbHVlOiBjb25uZWN0YWJsZVByb3RvLnJlZkNvdW50IH1cbn07XG52YXIgQ29ubmVjdGFibGVTdWJzY3JpYmVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKENvbm5lY3RhYmxlU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb25uZWN0YWJsZVN1YnNjcmliZXIoZGVzdGluYXRpb24sIGNvbm5lY3RhYmxlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jb25uZWN0YWJsZSA9IGNvbm5lY3RhYmxlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIENvbm5lY3RhYmxlU3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB0aGlzLl91bnN1YnNjcmliZSgpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLl9lcnJvci5jYWxsKHRoaXMsIGVycik7XG4gICAgfTtcbiAgICBDb25uZWN0YWJsZVN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0YWJsZS5faXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX3Vuc3Vic2NyaWJlKCk7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuX2NvbXBsZXRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBDb25uZWN0YWJsZVN1YnNjcmliZXIucHJvdG90eXBlLl91bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbm5lY3RhYmxlID0gdGhpcy5jb25uZWN0YWJsZTtcbiAgICAgICAgaWYgKGNvbm5lY3RhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RhYmxlID0gbnVsbDtcbiAgICAgICAgICAgIHZhciBjb25uZWN0aW9uID0gY29ubmVjdGFibGUuX2Nvbm5lY3Rpb247XG4gICAgICAgICAgICBjb25uZWN0YWJsZS5fcmVmQ291bnQgPSAwO1xuICAgICAgICAgICAgY29ubmVjdGFibGUuX3N1YmplY3QgPSBudWxsO1xuICAgICAgICAgICAgY29ubmVjdGFibGUuX2Nvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgaWYgKGNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBDb25uZWN0YWJsZVN1YnNjcmliZXI7XG59KFN1YmplY3RTdWJzY3JpYmVyKSk7XG52YXIgUmVmQ291bnRPcGVyYXRvciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZWZDb3VudE9wZXJhdG9yKGNvbm5lY3RhYmxlKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGFibGUgPSBjb25uZWN0YWJsZTtcbiAgICB9XG4gICAgUmVmQ291bnRPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIGNvbm5lY3RhYmxlID0gdGhpcy5jb25uZWN0YWJsZTtcbiAgICAgICAgY29ubmVjdGFibGUuX3JlZkNvdW50Kys7XG4gICAgICAgIHZhciByZWZDb3VudGVyID0gbmV3IFJlZkNvdW50U3Vic2NyaWJlcihzdWJzY3JpYmVyLCBjb25uZWN0YWJsZSk7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBzb3VyY2Uuc3Vic2NyaWJlKHJlZkNvdW50ZXIpO1xuICAgICAgICBpZiAoIXJlZkNvdW50ZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICByZWZDb3VudGVyLmNvbm5lY3Rpb24gPSBjb25uZWN0YWJsZS5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICB9O1xuICAgIHJldHVybiBSZWZDb3VudE9wZXJhdG9yO1xufSgpKTtcbnZhciBSZWZDb3VudFN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoUmVmQ291bnRTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlZkNvdW50U3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgY29ubmVjdGFibGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNvbm5lY3RhYmxlID0gY29ubmVjdGFibGU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUmVmQ291bnRTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0YWJsZSA9IHRoaXMuY29ubmVjdGFibGU7XG4gICAgICAgIGlmICghY29ubmVjdGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25uZWN0YWJsZSA9IG51bGw7XG4gICAgICAgIHZhciByZWZDb3VudCA9IGNvbm5lY3RhYmxlLl9yZWZDb3VudDtcbiAgICAgICAgaWYgKHJlZkNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGFibGUuX3JlZkNvdW50ID0gcmVmQ291bnQgLSAxO1xuICAgICAgICBpZiAocmVmQ291bnQgPiAxKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gdGhpcy5jb25uZWN0aW9uO1xuICAgICAgICB2YXIgc2hhcmVkQ29ubmVjdGlvbiA9IGNvbm5lY3RhYmxlLl9jb25uZWN0aW9uO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICBpZiAoc2hhcmVkQ29ubmVjdGlvbiAmJiAoIWNvbm5lY3Rpb24gfHwgc2hhcmVkQ29ubmVjdGlvbiA9PT0gY29ubmVjdGlvbikpIHtcbiAgICAgICAgICAgIHNoYXJlZENvbm5lY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFJlZkNvdW50U3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29ubmVjdGFibGVPYnNlcnZhYmxlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfQXN5bmNTdWJqZWN0LF9vcGVyYXRvcnNfbWFwLF91dGlsX2NhblJlcG9ydEVycm9yLF91dGlsX2lzQXJyYXksX3V0aWxfaXNTY2hlZHVsZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQXN5bmNTdWJqZWN0IH0gZnJvbSAnLi4vQXN5bmNTdWJqZWN0JztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4uL29wZXJhdG9ycy9tYXAnO1xuaW1wb3J0IHsgY2FuUmVwb3J0RXJyb3IgfSBmcm9tICcuLi91dGlsL2NhblJlcG9ydEVycm9yJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsL2lzQXJyYXknO1xuaW1wb3J0IHsgaXNTY2hlZHVsZXIgfSBmcm9tICcuLi91dGlsL2lzU2NoZWR1bGVyJztcbmV4cG9ydCBmdW5jdGlvbiBiaW5kQ2FsbGJhY2soY2FsbGJhY2tGdW5jLCByZXN1bHRTZWxlY3Rvciwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgIGlmIChpc1NjaGVkdWxlcihyZXN1bHRTZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHNjaGVkdWxlciA9IHJlc3VsdFNlbGVjdG9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpbmRDYWxsYmFjayhjYWxsYmFja0Z1bmMsIHNjaGVkdWxlcikuYXBwbHkodm9pZCAwLCBhcmdzKS5waXBlKG1hcChmdW5jdGlvbiAoYXJncykgeyByZXR1cm4gaXNBcnJheShhcmdzKSA/IHJlc3VsdFNlbGVjdG9yLmFwcGx5KHZvaWQgMCwgYXJncykgOiByZXN1bHRTZWxlY3RvcihhcmdzKTsgfSkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgdmFyIHN1YmplY3Q7XG4gICAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgc3ViamVjdDogc3ViamVjdCxcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuYzogY2FsbGJhY2tGdW5jLFxuICAgICAgICAgICAgc2NoZWR1bGVyOiBzY2hlZHVsZXIsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgaWYgKCFzY2hlZHVsZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXN1YmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViamVjdCA9IG5ldyBBc3luY1N1YmplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5uZXJBcmdzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyQXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5uZXh0KGlubmVyQXJncy5sZW5ndGggPD0gMSA/IGlubmVyQXJnc1swXSA6IGlubmVyQXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0LmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja0Z1bmMuYXBwbHkoY29udGV4dCwgYXJncy5jb25jYXQoW2hhbmRsZXJdKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhblJlcG9ydEVycm9yKHN1YmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YmplY3Quc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0ge1xuICAgICAgICAgICAgICAgICAgICBhcmdzOiBhcmdzLCBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyLCBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2gsIDAsIHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKHN0YXRlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGFyZ3MgPSBzdGF0ZS5hcmdzLCBzdWJzY3JpYmVyID0gc3RhdGUuc3Vic2NyaWJlciwgcGFyYW1zID0gc3RhdGUucGFyYW1zO1xuICAgIHZhciBjYWxsYmFja0Z1bmMgPSBwYXJhbXMuY2FsbGJhY2tGdW5jLCBjb250ZXh0ID0gcGFyYW1zLmNvbnRleHQsIHNjaGVkdWxlciA9IHBhcmFtcy5zY2hlZHVsZXI7XG4gICAgdmFyIHN1YmplY3QgPSBwYXJhbXMuc3ViamVjdDtcbiAgICBpZiAoIXN1YmplY3QpIHtcbiAgICAgICAgc3ViamVjdCA9IHBhcmFtcy5zdWJqZWN0ID0gbmV3IEFzeW5jU3ViamVjdCgpO1xuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbm5lckFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgaW5uZXJBcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBpbm5lckFyZ3MubGVuZ3RoIDw9IDEgPyBpbm5lckFyZ3NbMF0gOiBpbm5lckFyZ3M7XG4gICAgICAgICAgICBfdGhpcy5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoTmV4dCwgMCwgeyB2YWx1ZTogdmFsdWUsIHN1YmplY3Q6IHN1YmplY3QgfSkpO1xuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2FsbGJhY2tGdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MuY29uY2F0KFtoYW5kbGVyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHN1YmplY3QuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkZChzdWJqZWN0LnN1YnNjcmliZShzdWJzY3JpYmVyKSk7XG59XG5mdW5jdGlvbiBkaXNwYXRjaE5leHQoc3RhdGUpIHtcbiAgICB2YXIgdmFsdWUgPSBzdGF0ZS52YWx1ZSwgc3ViamVjdCA9IHN0YXRlLnN1YmplY3Q7XG4gICAgc3ViamVjdC5uZXh0KHZhbHVlKTtcbiAgICBzdWJqZWN0LmNvbXBsZXRlKCk7XG59XG5mdW5jdGlvbiBkaXNwYXRjaEVycm9yKHN0YXRlKSB7XG4gICAgdmFyIGVyciA9IHN0YXRlLmVyciwgc3ViamVjdCA9IHN0YXRlLnN1YmplY3Q7XG4gICAgc3ViamVjdC5lcnJvcihlcnIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmluZENhbGxiYWNrLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfQXN5bmNTdWJqZWN0LF9vcGVyYXRvcnNfbWFwLF91dGlsX2NhblJlcG9ydEVycm9yLF91dGlsX2lzU2NoZWR1bGVyLF91dGlsX2lzQXJyYXkgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQXN5bmNTdWJqZWN0IH0gZnJvbSAnLi4vQXN5bmNTdWJqZWN0JztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4uL29wZXJhdG9ycy9tYXAnO1xuaW1wb3J0IHsgY2FuUmVwb3J0RXJyb3IgfSBmcm9tICcuLi91dGlsL2NhblJlcG9ydEVycm9yJztcbmltcG9ydCB7IGlzU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9pc1NjaGVkdWxlcic7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vdXRpbC9pc0FycmF5JztcbmV4cG9ydCBmdW5jdGlvbiBiaW5kTm9kZUNhbGxiYWNrKGNhbGxiYWNrRnVuYywgcmVzdWx0U2VsZWN0b3IsIHNjaGVkdWxlcikge1xuICAgIGlmIChyZXN1bHRTZWxlY3Rvcikge1xuICAgICAgICBpZiAoaXNTY2hlZHVsZXIocmVzdWx0U2VsZWN0b3IpKSB7XG4gICAgICAgICAgICBzY2hlZHVsZXIgPSByZXN1bHRTZWxlY3RvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBiaW5kTm9kZUNhbGxiYWNrKGNhbGxiYWNrRnVuYywgc2NoZWR1bGVyKS5hcHBseSh2b2lkIDAsIGFyZ3MpLnBpcGUobWFwKGZ1bmN0aW9uIChhcmdzKSB7IHJldHVybiBpc0FycmF5KGFyZ3MpID8gcmVzdWx0U2VsZWN0b3IuYXBwbHkodm9pZCAwLCBhcmdzKSA6IHJlc3VsdFNlbGVjdG9yKGFyZ3MpOyB9KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgICAgIHN1YmplY3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGFyZ3M6IGFyZ3MsXG4gICAgICAgICAgICBjYWxsYmFja0Z1bmM6IGNhbGxiYWNrRnVuYyxcbiAgICAgICAgICAgIHNjaGVkdWxlcjogc2NoZWR1bGVyLFxuICAgICAgICAgICAgY29udGV4dDogdGhpcyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHBhcmFtcy5jb250ZXh0O1xuICAgICAgICAgICAgdmFyIHN1YmplY3QgPSBwYXJhbXMuc3ViamVjdDtcbiAgICAgICAgICAgIGlmICghc2NoZWR1bGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzdWJqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3QgPSBwYXJhbXMuc3ViamVjdCA9IG5ldyBBc3luY1N1YmplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5uZXJBcmdzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVyQXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IGlubmVyQXJncy5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0Lm5leHQoaW5uZXJBcmdzLmxlbmd0aCA8PSAxID8gaW5uZXJBcmdzWzBdIDogaW5uZXJBcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrRnVuYy5hcHBseShjb250ZXh0LCBhcmdzLmNvbmNhdChbaGFuZGxlcl0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FuUmVwb3J0RXJyb3Ioc3ViamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0LmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc3ViamVjdC5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoLCAwLCB7IHBhcmFtczogcGFyYW1zLCBzdWJzY3JpYmVyOiBzdWJzY3JpYmVyLCBjb250ZXh0OiBjb250ZXh0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gZGlzcGF0Y2goc3RhdGUpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBwYXJhbXMgPSBzdGF0ZS5wYXJhbXMsIHN1YnNjcmliZXIgPSBzdGF0ZS5zdWJzY3JpYmVyLCBjb250ZXh0ID0gc3RhdGUuY29udGV4dDtcbiAgICB2YXIgY2FsbGJhY2tGdW5jID0gcGFyYW1zLmNhbGxiYWNrRnVuYywgYXJncyA9IHBhcmFtcy5hcmdzLCBzY2hlZHVsZXIgPSBwYXJhbXMuc2NoZWR1bGVyO1xuICAgIHZhciBzdWJqZWN0ID0gcGFyYW1zLnN1YmplY3Q7XG4gICAgaWYgKCFzdWJqZWN0KSB7XG4gICAgICAgIHN1YmplY3QgPSBwYXJhbXMuc3ViamVjdCA9IG5ldyBBc3luY1N1YmplY3QoKTtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaW5uZXJBcmdzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGlubmVyQXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGVyciA9IGlubmVyQXJncy5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2hFcnJvciwgMCwgeyBlcnI6IGVyciwgc3ViamVjdDogc3ViamVjdCB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpbm5lckFyZ3MubGVuZ3RoIDw9IDEgPyBpbm5lckFyZ3NbMF0gOiBpbm5lckFyZ3M7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaE5leHQsIDAsIHsgdmFsdWU6IHZhbHVlLCBzdWJqZWN0OiBzdWJqZWN0IH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuYy5hcHBseShjb250ZXh0LCBhcmdzLmNvbmNhdChbaGFuZGxlcl0pKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2hFcnJvciwgMCwgeyBlcnI6IGVyciwgc3ViamVjdDogc3ViamVjdCB9KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5hZGQoc3ViamVjdC5zdWJzY3JpYmUoc3Vic2NyaWJlcikpO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2hOZXh0KGFyZykge1xuICAgIHZhciB2YWx1ZSA9IGFyZy52YWx1ZSwgc3ViamVjdCA9IGFyZy5zdWJqZWN0O1xuICAgIHN1YmplY3QubmV4dCh2YWx1ZSk7XG4gICAgc3ViamVjdC5jb21wbGV0ZSgpO1xufVxuZnVuY3Rpb24gZGlzcGF0Y2hFcnJvcihhcmcpIHtcbiAgICB2YXIgZXJyID0gYXJnLmVyciwgc3ViamVjdCA9IGFyZy5zdWJqZWN0O1xuICAgIHN1YmplY3QuZXJyb3IoZXJyKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJpbmROb2RlQ2FsbGJhY2suanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF91dGlsX2lzU2NoZWR1bGVyLF91dGlsX2lzQXJyYXksX091dGVyU3Vic2NyaWJlcixfdXRpbF9zdWJzY3JpYmVUb1Jlc3VsdCxfZnJvbUFycmF5IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc1NjaGVkdWxlciB9IGZyb20gJy4uL3V0aWwvaXNTY2hlZHVsZXInO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheSc7XG5pbXBvcnQgeyBPdXRlclN1YnNjcmliZXIgfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuaW1wb3J0IHsgc3Vic2NyaWJlVG9SZXN1bHQgfSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0JztcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJy4vZnJvbUFycmF5JztcbnZhciBOT05FID0ge307XG5leHBvcnQgZnVuY3Rpb24gY29tYmluZUxhdGVzdCgpIHtcbiAgICB2YXIgb2JzZXJ2YWJsZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBvYnNlcnZhYmxlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0U2VsZWN0b3IgPSBudWxsO1xuICAgIHZhciBzY2hlZHVsZXIgPSBudWxsO1xuICAgIGlmIChpc1NjaGVkdWxlcihvYnNlcnZhYmxlc1tvYnNlcnZhYmxlcy5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgc2NoZWR1bGVyID0gb2JzZXJ2YWJsZXMucG9wKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JzZXJ2YWJsZXNbb2JzZXJ2YWJsZXMubGVuZ3RoIC0gMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVzdWx0U2VsZWN0b3IgPSBvYnNlcnZhYmxlcy5wb3AoKTtcbiAgICB9XG4gICAgaWYgKG9ic2VydmFibGVzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5KG9ic2VydmFibGVzWzBdKSkge1xuICAgICAgICBvYnNlcnZhYmxlcyA9IG9ic2VydmFibGVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZnJvbUFycmF5KG9ic2VydmFibGVzLCBzY2hlZHVsZXIpLmxpZnQobmV3IENvbWJpbmVMYXRlc3RPcGVyYXRvcihyZXN1bHRTZWxlY3RvcikpO1xufVxudmFyIENvbWJpbmVMYXRlc3RPcGVyYXRvciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb21iaW5lTGF0ZXN0T3BlcmF0b3IocmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5yZXN1bHRTZWxlY3RvciA9IHJlc3VsdFNlbGVjdG9yO1xuICAgIH1cbiAgICBDb21iaW5lTGF0ZXN0T3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBDb21iaW5lTGF0ZXN0U3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnJlc3VsdFNlbGVjdG9yKSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29tYmluZUxhdGVzdE9wZXJhdG9yO1xufSgpKTtcbmV4cG9ydCB7IENvbWJpbmVMYXRlc3RPcGVyYXRvciB9O1xudmFyIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCByZXN1bHRTZWxlY3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucmVzdWx0U2VsZWN0b3IgPSByZXN1bHRTZWxlY3RvcjtcbiAgICAgICAgX3RoaXMuYWN0aXZlID0gMDtcbiAgICAgICAgX3RoaXMudmFsdWVzID0gW107XG4gICAgICAgIF90aGlzLm9ic2VydmFibGVzID0gW107XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKG9ic2VydmFibGUpIHtcbiAgICAgICAgdGhpcy52YWx1ZXMucHVzaChOT05FKTtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlcy5wdXNoKG9ic2VydmFibGUpO1xuICAgIH07XG4gICAgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGVzID0gdGhpcy5vYnNlcnZhYmxlcztcbiAgICAgICAgdmFyIGxlbiA9IG9ic2VydmFibGVzLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBsZW47XG4gICAgICAgICAgICB0aGlzLnRvUmVzcG9uZCA9IGxlbjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG9ic2VydmFibGVzW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkKHN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIG9ic2VydmFibGUsIG9ic2VydmFibGUsIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUNvbXBsZXRlID0gZnVuY3Rpb24gKHVudXNlZCkge1xuICAgICAgICBpZiAoKHRoaXMuYWN0aXZlIC09IDEpID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbWJpbmVMYXRlc3RTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlOZXh0ID0gZnVuY3Rpb24gKG91dGVyVmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgsIGlubmVySW5kZXgsIGlubmVyU3ViKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgdmFyIG9sZFZhbCA9IHZhbHVlc1tvdXRlckluZGV4XTtcbiAgICAgICAgdmFyIHRvUmVzcG9uZCA9ICF0aGlzLnRvUmVzcG9uZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IG9sZFZhbCA9PT0gTk9ORSA/IC0tdGhpcy50b1Jlc3BvbmQgOiB0aGlzLnRvUmVzcG9uZDtcbiAgICAgICAgdmFsdWVzW291dGVySW5kZXhdID0gaW5uZXJWYWx1ZTtcbiAgICAgICAgaWYgKHRvUmVzcG9uZCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90cnlSZXN1bHRTZWxlY3Rvcih2YWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHZhbHVlcy5zbGljZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIucHJvdG90eXBlLl90cnlSZXN1bHRTZWxlY3RvciA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucmVzdWx0U2VsZWN0b3IuYXBwbHkodGhpcywgdmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHJlc3VsdCk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29tYmluZUxhdGVzdFN1YnNjcmliZXI7XG59KE91dGVyU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgQ29tYmluZUxhdGVzdFN1YnNjcmliZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbWJpbmVMYXRlc3QuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9vZixfb3BlcmF0b3JzX2NvbmNhdEFsbCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBvZiB9IGZyb20gJy4vb2YnO1xuaW1wb3J0IHsgY29uY2F0QWxsIH0gZnJvbSAnLi4vb3BlcmF0b3JzL2NvbmNhdEFsbCc7XG5leHBvcnQgZnVuY3Rpb24gY29uY2F0KCkge1xuICAgIHZhciBvYnNlcnZhYmxlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIG9ic2VydmFibGVzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBjb25jYXRBbGwoKShvZi5hcHBseSh2b2lkIDAsIG9ic2VydmFibGVzKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25jYXQuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlLF9mcm9tLF9lbXB0eSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAnLi9mcm9tJztcbmltcG9ydCB7IGVtcHR5IH0gZnJvbSAnLi9lbXB0eSc7XG5leHBvcnQgZnVuY3Rpb24gZGVmZXIob2JzZXJ2YWJsZUZhY3RvcnkpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGlucHV0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW5wdXQgPSBvYnNlcnZhYmxlRmFjdG9yeSgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNvdXJjZSA9IGlucHV0ID8gZnJvbShpbnB1dCkgOiBlbXB0eSgpO1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlZmVyLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5leHBvcnQgdmFyIEVNUFRZID0gLypAX19QVVJFX18qLyBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9KTtcbmV4cG9ydCBmdW5jdGlvbiBlbXB0eShzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gc2NoZWR1bGVyID8gZW1wdHlTY2hlZHVsZWQoc2NoZWR1bGVyKSA6IEVNUFRZO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVtcHR5U2NoZWR1bGVkKHNjaGVkdWxlcikge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikgeyByZXR1cm4gc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIuY29tcGxldGUoKTsgfSk7IH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZW1wdHkuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9PYnNlcnZhYmxlLF91dGlsX2lzQXJyYXksX2VtcHR5LF91dGlsX3N1YnNjcmliZVRvUmVzdWx0LF9PdXRlclN1YnNjcmliZXIsX29wZXJhdG9yc19tYXAgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsL2lzQXJyYXknO1xuaW1wb3J0IHsgRU1QVFkgfSBmcm9tICcuL2VtcHR5JztcbmltcG9ydCB7IHN1YnNjcmliZVRvUmVzdWx0IH0gZnJvbSAnLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdCc7XG5pbXBvcnQgeyBPdXRlclN1YnNjcmliZXIgfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi4vb3BlcmF0b3JzL21hcCc7XG5leHBvcnQgZnVuY3Rpb24gZm9ya0pvaW4oKSB7XG4gICAgdmFyIHNvdXJjZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBzb3VyY2VzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciByZXN1bHRTZWxlY3RvcjtcbiAgICBpZiAodHlwZW9mIHNvdXJjZXNbc291cmNlcy5sZW5ndGggLSAxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXN1bHRTZWxlY3RvciA9IHNvdXJjZXMucG9wKCk7XG4gICAgfVxuICAgIGlmIChzb3VyY2VzLmxlbmd0aCA9PT0gMSAmJiBpc0FycmF5KHNvdXJjZXNbMF0pKSB7XG4gICAgICAgIHNvdXJjZXMgPSBzb3VyY2VzWzBdO1xuICAgIH1cbiAgICBpZiAoc291cmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgIH1cbiAgICBpZiAocmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKHNvdXJjZXMpLnBpcGUobWFwKGZ1bmN0aW9uIChhcmdzKSB7IHJldHVybiByZXN1bHRTZWxlY3Rvci5hcHBseSh2b2lkIDAsIGFyZ3MpOyB9KSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICByZXR1cm4gbmV3IEZvcmtKb2luU3Vic2NyaWJlcihzdWJzY3JpYmVyLCBzb3VyY2VzKTtcbiAgICB9KTtcbn1cbnZhciBGb3JrSm9pblN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoRm9ya0pvaW5TdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZvcmtKb2luU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgc291cmNlcykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc291cmNlcyA9IHNvdXJjZXM7XG4gICAgICAgIF90aGlzLmNvbXBsZXRlZCA9IDA7XG4gICAgICAgIF90aGlzLmhhdmVWYWx1ZXMgPSAwO1xuICAgICAgICB2YXIgbGVuID0gc291cmNlcy5sZW5ndGg7XG4gICAgICAgIF90aGlzLnZhbHVlcyA9IG5ldyBBcnJheShsZW4pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gc291cmNlc1tpXTtcbiAgICAgICAgICAgIHZhciBpbm5lclN1YnNjcmlwdGlvbiA9IHN1YnNjcmliZVRvUmVzdWx0KF90aGlzLCBzb3VyY2UsIG51bGwsIGkpO1xuICAgICAgICAgICAgaWYgKGlubmVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRkKGlubmVyU3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEZvcmtKb2luU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5TmV4dCA9IGZ1bmN0aW9uIChvdXRlclZhbHVlLCBpbm5lclZhbHVlLCBvdXRlckluZGV4LCBpbm5lckluZGV4LCBpbm5lclN1Yikge1xuICAgICAgICB0aGlzLnZhbHVlc1tvdXRlckluZGV4XSA9IGlubmVyVmFsdWU7XG4gICAgICAgIGlmICghaW5uZXJTdWIuX2hhc1ZhbHVlKSB7XG4gICAgICAgICAgICBpbm5lclN1Yi5faGFzVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5oYXZlVmFsdWVzKys7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEZvcmtKb2luU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5Q29tcGxldGUgPSBmdW5jdGlvbiAoaW5uZXJTdWIpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgZGVzdGluYXRpb24gPSBfYS5kZXN0aW5hdGlvbiwgaGF2ZVZhbHVlcyA9IF9hLmhhdmVWYWx1ZXMsIHZhbHVlcyA9IF9hLnZhbHVlcztcbiAgICAgICAgdmFyIGxlbiA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGlmICghaW5uZXJTdWIuX2hhc1ZhbHVlKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcGxldGVkKys7XG4gICAgICAgIGlmICh0aGlzLmNvbXBsZXRlZCAhPT0gbGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhdmVWYWx1ZXMgPT09IGxlbikge1xuICAgICAgICAgICAgZGVzdGluYXRpb24ubmV4dCh2YWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gRm9ya0pvaW5TdWJzY3JpYmVyO1xufShPdXRlclN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcmtKb2luLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfdXRpbF9pc1Byb21pc2UsX3V0aWxfaXNBcnJheUxpa2UsX3V0aWxfaXNJbnRlcm9wT2JzZXJ2YWJsZSxfdXRpbF9pc0l0ZXJhYmxlLF9mcm9tQXJyYXksX2Zyb21Qcm9taXNlLF9mcm9tSXRlcmFibGUsX2Zyb21PYnNlcnZhYmxlLF91dGlsX3N1YnNjcmliZVRvIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJy4uL3V0aWwvaXNQcm9taXNlJztcbmltcG9ydCB7IGlzQXJyYXlMaWtlIH0gZnJvbSAnLi4vdXRpbC9pc0FycmF5TGlrZSc7XG5pbXBvcnQgeyBpc0ludGVyb3BPYnNlcnZhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0ludGVyb3BPYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzSXRlcmFibGUnO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tQXJyYXknO1xuaW1wb3J0IHsgZnJvbVByb21pc2UgfSBmcm9tICcuL2Zyb21Qcm9taXNlJztcbmltcG9ydCB7IGZyb21JdGVyYWJsZSB9IGZyb20gJy4vZnJvbUl0ZXJhYmxlJztcbmltcG9ydCB7IGZyb21PYnNlcnZhYmxlIH0gZnJvbSAnLi9mcm9tT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzdWJzY3JpYmVUbyB9IGZyb20gJy4uL3V0aWwvc3Vic2NyaWJlVG8nO1xuZXhwb3J0IGZ1bmN0aW9uIGZyb20oaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIGlmICghc2NoZWR1bGVyKSB7XG4gICAgICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlVG8oaW5wdXQpKTtcbiAgICB9XG4gICAgaWYgKGlucHV0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGlzSW50ZXJvcE9ic2VydmFibGUoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbU9ic2VydmFibGUoaW5wdXQsIHNjaGVkdWxlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNQcm9taXNlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21Qcm9taXNlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQXJyYXlMaWtlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21BcnJheShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0l0ZXJhYmxlKGlucHV0KSB8fCB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbUl0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKGlucHV0ICE9PSBudWxsICYmIHR5cGVvZiBpbnB1dCB8fCBpbnB1dCkgKyAnIGlzIG5vdCBvYnNlcnZhYmxlJyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcm9tLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfU3Vic2NyaXB0aW9uLF91dGlsX3N1YnNjcmliZVRvQXJyYXkgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IHN1YnNjcmliZVRvQXJyYXkgfSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvQXJyYXknO1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21BcnJheShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKCFzY2hlZHVsZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZVRvQXJyYXkoaW5wdXQpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgdmFyIHN1YiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoaW5wdXRbaSsrXSk7XG4gICAgICAgICAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBzdWIuYWRkKHRoaXMuc2NoZWR1bGUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIHN1YjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbUFycmF5LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfdXRpbF9pc0FycmF5LF91dGlsX2lzRnVuY3Rpb24sX29wZXJhdG9yc19tYXAgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheSc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4uL29wZXJhdG9ycy9tYXAnO1xudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmV4cG9ydCBmdW5jdGlvbiBmcm9tRXZlbnQodGFyZ2V0LCBldmVudE5hbWUsIG9wdGlvbnMsIHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgcmVzdWx0U2VsZWN0b3IgPSBvcHRpb25zO1xuICAgICAgICBvcHRpb25zID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAocmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZyb21FdmVudCh0YXJnZXQsIGV2ZW50TmFtZSwgb3B0aW9ucykucGlwZShtYXAoZnVuY3Rpb24gKGFyZ3MpIHsgcmV0dXJuIGlzQXJyYXkoYXJncykgPyByZXN1bHRTZWxlY3Rvci5hcHBseSh2b2lkIDAsIGFyZ3MpIDogcmVzdWx0U2VsZWN0b3IoYXJncyk7IH0pKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoZSkge1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldHVwU3Vic2NyaXB0aW9uKHRhcmdldCwgZXZlbnROYW1lLCBoYW5kbGVyLCBzdWJzY3JpYmVyLCBvcHRpb25zKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNldHVwU3Vic2NyaXB0aW9uKHNvdXJjZU9iaiwgZXZlbnROYW1lLCBoYW5kbGVyLCBzdWJzY3JpYmVyLCBvcHRpb25zKSB7XG4gICAgdmFyIHVuc3Vic2NyaWJlO1xuICAgIGlmIChpc0V2ZW50VGFyZ2V0KHNvdXJjZU9iaikpIHtcbiAgICAgICAgdmFyIHNvdXJjZV8xID0gc291cmNlT2JqO1xuICAgICAgICBzb3VyY2VPYmouYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICB1bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNvdXJjZV8xLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKTsgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNKUXVlcnlTdHlsZUV2ZW50RW1pdHRlcihzb3VyY2VPYmopKSB7XG4gICAgICAgIHZhciBzb3VyY2VfMiA9IHNvdXJjZU9iajtcbiAgICAgICAgc291cmNlT2JqLm9uKGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgICAgIHVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc291cmNlXzIub2ZmKGV2ZW50TmFtZSwgaGFuZGxlcik7IH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTm9kZVN0eWxlRXZlbnRFbWl0dGVyKHNvdXJjZU9iaikpIHtcbiAgICAgICAgdmFyIHNvdXJjZV8zID0gc291cmNlT2JqO1xuICAgICAgICBzb3VyY2VPYmouYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgICAgdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzb3VyY2VfMy5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIpOyB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChzb3VyY2VPYmogJiYgc291cmNlT2JqLmxlbmd0aCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc291cmNlT2JqLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBzZXR1cFN1YnNjcmlwdGlvbihzb3VyY2VPYmpbaV0sIGV2ZW50TmFtZSwgaGFuZGxlciwgc3Vic2NyaWJlciwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgZXZlbnQgdGFyZ2V0Jyk7XG4gICAgfVxuICAgIHN1YnNjcmliZXIuYWRkKHVuc3Vic2NyaWJlKTtcbn1cbmZ1bmN0aW9uIGlzTm9kZVN0eWxlRXZlbnRFbWl0dGVyKHNvdXJjZU9iaikge1xuICAgIHJldHVybiBzb3VyY2VPYmogJiYgdHlwZW9mIHNvdXJjZU9iai5hZGRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygc291cmNlT2JqLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gaXNKUXVlcnlTdHlsZUV2ZW50RW1pdHRlcihzb3VyY2VPYmopIHtcbiAgICByZXR1cm4gc291cmNlT2JqICYmIHR5cGVvZiBzb3VyY2VPYmoub24gPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHNvdXJjZU9iai5vZmYgPT09ICdmdW5jdGlvbic7XG59XG5mdW5jdGlvbiBpc0V2ZW50VGFyZ2V0KHNvdXJjZU9iaikge1xuICAgIHJldHVybiBzb3VyY2VPYmogJiYgdHlwZW9mIHNvdXJjZU9iai5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBzb3VyY2VPYmoucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZyb21FdmVudC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUsX3V0aWxfaXNBcnJheSxfdXRpbF9pc0Z1bmN0aW9uLF9vcGVyYXRvcnNfbWFwIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsL2lzQXJyYXknO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuLi9vcGVyYXRvcnMvbWFwJztcbmV4cG9ydCBmdW5jdGlvbiBmcm9tRXZlbnRQYXR0ZXJuKGFkZEhhbmRsZXIsIHJlbW92ZUhhbmRsZXIsIHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgaWYgKHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBmcm9tRXZlbnRQYXR0ZXJuKGFkZEhhbmRsZXIsIHJlbW92ZUhhbmRsZXIpLnBpcGUobWFwKGZ1bmN0aW9uIChhcmdzKSB7IHJldHVybiBpc0FycmF5KGFyZ3MpID8gcmVzdWx0U2VsZWN0b3IuYXBwbHkodm9pZCAwLCBhcmdzKSA6IHJlc3VsdFNlbGVjdG9yKGFyZ3MpOyB9KSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIGVbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpYmVyLm5leHQoZS5sZW5ndGggPT09IDEgPyBlWzBdIDogZSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciByZXRWYWx1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldFZhbHVlID0gYWRkSGFuZGxlcihoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNGdW5jdGlvbihyZW1vdmVIYW5kbGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVtb3ZlSGFuZGxlcihoYW5kbGVyLCByZXRWYWx1ZSk7IH07XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcm9tRXZlbnRQYXR0ZXJuLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfU3Vic2NyaXB0aW9uLF9zeW1ib2xfaXRlcmF0b3IsX3V0aWxfc3Vic2NyaWJlVG9JdGVyYWJsZSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgaXRlcmF0b3IgYXMgU3ltYm9sX2l0ZXJhdG9yIH0gZnJvbSAnLi4vc3ltYm9sL2l0ZXJhdG9yJztcbmltcG9ydCB7IHN1YnNjcmliZVRvSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvSXRlcmFibGUnO1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21JdGVyYWJsZShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0l0ZXJhYmxlIGNhbm5vdCBiZSBudWxsJyk7XG4gICAgfVxuICAgIGlmICghc2NoZWR1bGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShzdWJzY3JpYmVUb0l0ZXJhYmxlKGlucHV0KSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIHZhciBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgICB2YXIgaXRlcmF0b3I7XG4gICAgICAgICAgICBzdWIuYWRkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgJiYgdHlwZW9mIGl0ZXJhdG9yLnJldHVybiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpdGVyYXRvciA9IGlucHV0W1N5bWJvbF9pdGVyYXRvcl0oKTtcbiAgICAgICAgICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRvbmU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lID0gcmVzdWx0LmRvbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIHN1YjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbUl0ZXJhYmxlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfU3Vic2NyaXB0aW9uLF9zeW1ib2xfb2JzZXJ2YWJsZSxfdXRpbF9zdWJzY3JpYmVUb09ic2VydmFibGUgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzdWJzY3JpYmVUb09ic2VydmFibGUgfSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvT2JzZXJ2YWJsZSc7XG5leHBvcnQgZnVuY3Rpb24gZnJvbU9ic2VydmFibGUoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIGlmICghc2NoZWR1bGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShzdWJzY3JpYmVUb09ic2VydmFibGUoaW5wdXQpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgdmFyIHN1YiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IGlucHV0W1N5bWJvbF9vYnNlcnZhYmxlXSgpO1xuICAgICAgICAgICAgICAgIHN1Yi5hZGQob2JzZXJ2YWJsZS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHsgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5uZXh0KHZhbHVlKTsgfSkpOyB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycikgeyBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycik7IH0pKTsgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHsgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9KSk7IH0sXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIHN1YjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbU9ic2VydmFibGUuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlLF9TdWJzY3JpcHRpb24sX3V0aWxfc3Vic2NyaWJlVG9Qcm9taXNlIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBzdWJzY3JpYmVUb1Byb21pc2UgfSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvUHJvbWlzZSc7XG5leHBvcnQgZnVuY3Rpb24gZnJvbVByb21pc2UoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIGlmICghc2NoZWR1bGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShzdWJzY3JpYmVUb1Byb21pc2UoaW5wdXQpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgdmFyIHN1YiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmliZXIuY29tcGxldGUoKTsgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycik7IH0pKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHJldHVybiBzdWI7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZyb21Qcm9taXNlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfdXRpbF9pZGVudGl0eSxfdXRpbF9pc1NjaGVkdWxlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4uL3V0aWwvaWRlbnRpdHknO1xuaW1wb3J0IHsgaXNTY2hlZHVsZXIgfSBmcm9tICcuLi91dGlsL2lzU2NoZWR1bGVyJztcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZShpbml0aWFsU3RhdGVPck9wdGlvbnMsIGNvbmRpdGlvbiwgaXRlcmF0ZSwgcmVzdWx0U2VsZWN0b3JPck9ic2VydmFibGUsIHNjaGVkdWxlcikge1xuICAgIHZhciByZXN1bHRTZWxlY3RvcjtcbiAgICB2YXIgaW5pdGlhbFN0YXRlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBpbml0aWFsU3RhdGVPck9wdGlvbnM7XG4gICAgICAgIGluaXRpYWxTdGF0ZSA9IG9wdGlvbnMuaW5pdGlhbFN0YXRlO1xuICAgICAgICBjb25kaXRpb24gPSBvcHRpb25zLmNvbmRpdGlvbjtcbiAgICAgICAgaXRlcmF0ZSA9IG9wdGlvbnMuaXRlcmF0ZTtcbiAgICAgICAgcmVzdWx0U2VsZWN0b3IgPSBvcHRpb25zLnJlc3VsdFNlbGVjdG9yIHx8IGlkZW50aXR5O1xuICAgICAgICBzY2hlZHVsZXIgPSBvcHRpb25zLnNjaGVkdWxlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAocmVzdWx0U2VsZWN0b3JPck9ic2VydmFibGUgPT09IHVuZGVmaW5lZCB8fCBpc1NjaGVkdWxlcihyZXN1bHRTZWxlY3Rvck9yT2JzZXJ2YWJsZSkpIHtcbiAgICAgICAgaW5pdGlhbFN0YXRlID0gaW5pdGlhbFN0YXRlT3JPcHRpb25zO1xuICAgICAgICByZXN1bHRTZWxlY3RvciA9IGlkZW50aXR5O1xuICAgICAgICBzY2hlZHVsZXIgPSByZXN1bHRTZWxlY3Rvck9yT2JzZXJ2YWJsZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGluaXRpYWxTdGF0ZSA9IGluaXRpYWxTdGF0ZU9yT3B0aW9ucztcbiAgICAgICAgcmVzdWx0U2VsZWN0b3IgPSByZXN1bHRTZWxlY3Rvck9yT2JzZXJ2YWJsZTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICAgICAgaWYgKHNjaGVkdWxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgMCwge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXI6IHN1YnNjcmliZXIsXG4gICAgICAgICAgICAgICAgaXRlcmF0ZTogaXRlcmF0ZSxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcbiAgICAgICAgICAgICAgICByZXN1bHRTZWxlY3RvcjogcmVzdWx0U2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbmRpdGlvblJlc3VsdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25SZXN1bHQgPSBjb25kaXRpb24oc3RhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjb25kaXRpb25SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gcmVzdWx0U2VsZWN0b3Ioc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IGl0ZXJhdGUoc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICh0cnVlKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKHN0YXRlKSB7XG4gICAgdmFyIHN1YnNjcmliZXIgPSBzdGF0ZS5zdWJzY3JpYmVyLCBjb25kaXRpb24gPSBzdGF0ZS5jb25kaXRpb247XG4gICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5uZWVkSXRlcmF0ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3RhdGUuc3RhdGUgPSBzdGF0ZS5pdGVyYXRlKHN0YXRlLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdGF0ZS5uZWVkSXRlcmF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgdmFyIGNvbmRpdGlvblJlc3VsdCA9IHZvaWQgMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbmRpdGlvblJlc3VsdCA9IGNvbmRpdGlvbihzdGF0ZS5zdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNvbmRpdGlvblJlc3VsdCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHZhbHVlO1xuICAgIHRyeSB7XG4gICAgICAgIHZhbHVlID0gc3RhdGUucmVzdWx0U2VsZWN0b3Ioc3RhdGUuc3RhdGUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNjaGVkdWxlKHN0YXRlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdlbmVyYXRlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfZGVmZXIsX2VtcHR5IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IGRlZmVyIH0gZnJvbSAnLi9kZWZlcic7XG5pbXBvcnQgeyBFTVBUWSB9IGZyb20gJy4vZW1wdHknO1xuZXhwb3J0IGZ1bmN0aW9uIGlpZihjb25kaXRpb24sIHRydWVSZXN1bHQsIGZhbHNlUmVzdWx0KSB7XG4gICAgaWYgKHRydWVSZXN1bHQgPT09IHZvaWQgMCkge1xuICAgICAgICB0cnVlUmVzdWx0ID0gRU1QVFk7XG4gICAgfVxuICAgIGlmIChmYWxzZVJlc3VsdCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGZhbHNlUmVzdWx0ID0gRU1QVFk7XG4gICAgfVxuICAgIHJldHVybiBkZWZlcihmdW5jdGlvbiAoKSB7IHJldHVybiBjb25kaXRpb24oKSA/IHRydWVSZXN1bHQgOiBmYWxzZVJlc3VsdDsgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1paWYuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlLF9zY2hlZHVsZXJfYXN5bmMsX3V0aWxfaXNOdW1lcmljIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSAnLi4vc2NoZWR1bGVyL2FzeW5jJztcbmltcG9ydCB7IGlzTnVtZXJpYyB9IGZyb20gJy4uL3V0aWwvaXNOdW1lcmljJztcbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnZhbChwZXJpb2QsIHNjaGVkdWxlcikge1xuICAgIGlmIChwZXJpb2QgPT09IHZvaWQgMCkge1xuICAgICAgICBwZXJpb2QgPSAwO1xuICAgIH1cbiAgICBpZiAoc2NoZWR1bGVyID09PSB2b2lkIDApIHtcbiAgICAgICAgc2NoZWR1bGVyID0gYXN5bmM7XG4gICAgfVxuICAgIGlmICghaXNOdW1lcmljKHBlcmlvZCkgfHwgcGVyaW9kIDwgMCkge1xuICAgICAgICBwZXJpb2QgPSAwO1xuICAgIH1cbiAgICBpZiAoIXNjaGVkdWxlciB8fCB0eXBlb2Ygc2NoZWR1bGVyLnNjaGVkdWxlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHNjaGVkdWxlciA9IGFzeW5jO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgc3Vic2NyaWJlci5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGRpc3BhdGNoLCBwZXJpb2QsIHsgc3Vic2NyaWJlcjogc3Vic2NyaWJlciwgY291bnRlcjogMCwgcGVyaW9kOiBwZXJpb2QgfSkpO1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKHN0YXRlKSB7XG4gICAgdmFyIHN1YnNjcmliZXIgPSBzdGF0ZS5zdWJzY3JpYmVyLCBjb3VudGVyID0gc3RhdGUuY291bnRlciwgcGVyaW9kID0gc3RhdGUucGVyaW9kO1xuICAgIHN1YnNjcmliZXIubmV4dChjb3VudGVyKTtcbiAgICB0aGlzLnNjaGVkdWxlKHsgc3Vic2NyaWJlcjogc3Vic2NyaWJlciwgY291bnRlcjogY291bnRlciArIDEsIHBlcmlvZDogcGVyaW9kIH0sIHBlcmlvZCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbnRlcnZhbC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUsX3V0aWxfaXNTY2hlZHVsZXIsX29wZXJhdG9yc19tZXJnZUFsbCxfZnJvbUFycmF5IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGlzU2NoZWR1bGVyIH0gZnJvbSAnLi4vdXRpbC9pc1NjaGVkdWxlcic7XG5pbXBvcnQgeyBtZXJnZUFsbCB9IGZyb20gJy4uL29wZXJhdG9ycy9tZXJnZUFsbCc7XG5pbXBvcnQgeyBmcm9tQXJyYXkgfSBmcm9tICcuL2Zyb21BcnJheSc7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIG9ic2VydmFibGVzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgb2JzZXJ2YWJsZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIGNvbmN1cnJlbnQgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgdmFyIHNjaGVkdWxlciA9IG51bGw7XG4gICAgdmFyIGxhc3QgPSBvYnNlcnZhYmxlc1tvYnNlcnZhYmxlcy5sZW5ndGggLSAxXTtcbiAgICBpZiAoaXNTY2hlZHVsZXIobGFzdCkpIHtcbiAgICAgICAgc2NoZWR1bGVyID0gb2JzZXJ2YWJsZXMucG9wKCk7XG4gICAgICAgIGlmIChvYnNlcnZhYmxlcy5sZW5ndGggPiAxICYmIHR5cGVvZiBvYnNlcnZhYmxlc1tvYnNlcnZhYmxlcy5sZW5ndGggLSAxXSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGNvbmN1cnJlbnQgPSBvYnNlcnZhYmxlcy5wb3AoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgbGFzdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uY3VycmVudCA9IG9ic2VydmFibGVzLnBvcCgpO1xuICAgIH1cbiAgICBpZiAoc2NoZWR1bGVyID09PSBudWxsICYmIG9ic2VydmFibGVzLmxlbmd0aCA9PT0gMSAmJiBvYnNlcnZhYmxlc1swXSBpbnN0YW5jZW9mIE9ic2VydmFibGUpIHtcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gbWVyZ2VBbGwoY29uY3VycmVudCkoZnJvbUFycmF5KG9ic2VydmFibGVzLCBzY2hlZHVsZXIpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfdXRpbF9ub29wIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi91dGlsL25vb3AnO1xuZXhwb3J0IHZhciBORVZFUiA9IC8qQF9fUFVSRV9fKi8gbmV3IE9ic2VydmFibGUobm9vcCk7XG5leHBvcnQgZnVuY3Rpb24gbmV2ZXIoKSB7XG4gICAgcmV0dXJuIE5FVkVSO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmV2ZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF91dGlsX2lzU2NoZWR1bGVyLF9mcm9tQXJyYXksX2VtcHR5LF9zY2FsYXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgaXNTY2hlZHVsZXIgfSBmcm9tICcuLi91dGlsL2lzU2NoZWR1bGVyJztcbmltcG9ydCB7IGZyb21BcnJheSB9IGZyb20gJy4vZnJvbUFycmF5JztcbmltcG9ydCB7IGVtcHR5IH0gZnJvbSAnLi9lbXB0eSc7XG5pbXBvcnQgeyBzY2FsYXIgfSBmcm9tICcuL3NjYWxhcic7XG5leHBvcnQgZnVuY3Rpb24gb2YoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciBzY2hlZHVsZXIgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgaWYgKGlzU2NoZWR1bGVyKHNjaGVkdWxlcikpIHtcbiAgICAgICAgYXJncy5wb3AoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNjaGVkdWxlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gZW1wdHkoc2NoZWR1bGVyKTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlciA/IGZyb21BcnJheShhcmdzLCBzY2hlZHVsZXIpIDogc2NhbGFyKGFyZ3NbMF0pO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZyb21BcnJheShhcmdzLCBzY2hlZHVsZXIpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9mLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfZnJvbSxfdXRpbF9pc0FycmF5LF9lbXB0eSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAnLi9mcm9tJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsL2lzQXJyYXknO1xuaW1wb3J0IHsgRU1QVFkgfSBmcm9tICcuL2VtcHR5JztcbmV4cG9ydCBmdW5jdGlvbiBvbkVycm9yUmVzdW1lTmV4dCgpIHtcbiAgICB2YXIgc291cmNlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHNvdXJjZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBFTVBUWTtcbiAgICB9XG4gICAgdmFyIGZpcnN0ID0gc291cmNlc1swXSwgcmVtYWluZGVyID0gc291cmNlcy5zbGljZSgxKTtcbiAgICBpZiAoc291cmNlcy5sZW5ndGggPT09IDEgJiYgaXNBcnJheShmaXJzdCkpIHtcbiAgICAgICAgcmV0dXJuIG9uRXJyb3JSZXN1bWVOZXh0LmFwcGx5KHZvaWQgMCwgZmlyc3QpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1Yk5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmFkZChvbkVycm9yUmVzdW1lTmV4dC5hcHBseSh2b2lkIDAsIHJlbWFpbmRlcikuc3Vic2NyaWJlKHN1YnNjcmliZXIpKTsgfTtcbiAgICAgICAgcmV0dXJuIGZyb20oZmlyc3QpLnN1YnNjcmliZSh7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAodmFsdWUpIHsgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTsgfSxcbiAgICAgICAgICAgIGVycm9yOiBzdWJOZXh0LFxuICAgICAgICAgICAgY29tcGxldGU6IHN1Yk5leHQsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b25FcnJvclJlc3VtZU5leHQuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlLF9TdWJzY3JpcHRpb24gUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmV4cG9ydCBmdW5jdGlvbiBwYWlycyhvYmosIHNjaGVkdWxlcikge1xuICAgIGlmICghc2NoZWR1bGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aCAmJiAhc3Vic2NyaWJlci5jbG9zZWQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoW2tleSwgb2JqW2tleV1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2gsIDAsIHsga2V5czoga2V5cywgaW5kZXg6IDAsIHN1YnNjcmliZXI6IHN1YnNjcmliZXIsIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uLCBvYmo6IG9iaiB9KSk7XG4gICAgICAgICAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2goc3RhdGUpIHtcbiAgICB2YXIga2V5cyA9IHN0YXRlLmtleXMsIGluZGV4ID0gc3RhdGUuaW5kZXgsIHN1YnNjcmliZXIgPSBzdGF0ZS5zdWJzY3JpYmVyLCBzdWJzY3JpcHRpb24gPSBzdGF0ZS5zdWJzY3JpcHRpb24sIG9iaiA9IHN0YXRlLm9iajtcbiAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIGlmIChpbmRleCA8IGtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpbmRleF07XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoW2tleSwgb2JqW2tleV1dKTtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbi5hZGQodGhpcy5zY2hlZHVsZSh7IGtleXM6IGtleXMsIGluZGV4OiBpbmRleCArIDEsIHN1YnNjcmliZXI6IHN1YnNjcmliZXIsIHN1YnNjcmlwdGlvbjogc3Vic2NyaXB0aW9uLCBvYmo6IG9iaiB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWlycy5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX3V0aWxfaXNBcnJheSxfZnJvbUFycmF5LF9PdXRlclN1YnNjcmliZXIsX3V0aWxfc3Vic2NyaWJlVG9SZXN1bHQgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsL2lzQXJyYXknO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tQXJyYXknO1xuaW1wb3J0IHsgT3V0ZXJTdWJzY3JpYmVyIH0gZnJvbSAnLi4vT3V0ZXJTdWJzY3JpYmVyJztcbmltcG9ydCB7IHN1YnNjcmliZVRvUmVzdWx0IH0gZnJvbSAnLi4vdXRpbC9zdWJzY3JpYmVUb1Jlc3VsdCc7XG5leHBvcnQgZnVuY3Rpb24gcmFjZSgpIHtcbiAgICB2YXIgb2JzZXJ2YWJsZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBvYnNlcnZhYmxlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAob2JzZXJ2YWJsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGlmIChpc0FycmF5KG9ic2VydmFibGVzWzBdKSkge1xuICAgICAgICAgICAgb2JzZXJ2YWJsZXMgPSBvYnNlcnZhYmxlc1swXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvYnNlcnZhYmxlc1swXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnJvbUFycmF5KG9ic2VydmFibGVzLCB1bmRlZmluZWQpLmxpZnQobmV3IFJhY2VPcGVyYXRvcigpKTtcbn1cbnZhciBSYWNlT3BlcmF0b3IgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmFjZU9wZXJhdG9yKCkge1xuICAgIH1cbiAgICBSYWNlT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBSYWNlU3Vic2NyaWJlcihzdWJzY3JpYmVyKSk7XG4gICAgfTtcbiAgICByZXR1cm4gUmFjZU9wZXJhdG9yO1xufSgpKTtcbmV4cG9ydCB7IFJhY2VPcGVyYXRvciB9O1xudmFyIFJhY2VTdWJzY3JpYmVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFJhY2VTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJhY2VTdWJzY3JpYmVyKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5oYXNGaXJzdCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5vYnNlcnZhYmxlcyA9IFtdO1xuICAgICAgICBfdGhpcy5zdWJzY3JpcHRpb25zID0gW107XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUmFjZVN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKG9ic2VydmFibGUpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlcy5wdXNoKG9ic2VydmFibGUpO1xuICAgIH07XG4gICAgUmFjZVN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG9ic2VydmFibGVzID0gdGhpcy5vYnNlcnZhYmxlcztcbiAgICAgICAgdmFyIGxlbiA9IG9ic2VydmFibGVzLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW4gJiYgIXRoaXMuaGFzRmlyc3Q7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlID0gb2JzZXJ2YWJsZXNbaV07XG4gICAgICAgICAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHN1YnNjcmliZVRvUmVzdWx0KHRoaXMsIG9ic2VydmFibGUsIG9ic2VydmFibGUsIGkpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub2JzZXJ2YWJsZXMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSYWNlU3Vic2NyaWJlci5wcm90b3R5cGUubm90aWZ5TmV4dCA9IGZ1bmN0aW9uIChvdXRlclZhbHVlLCBpbm5lclZhbHVlLCBvdXRlckluZGV4LCBpbm5lckluZGV4LCBpbm5lclN1Yikge1xuICAgICAgICBpZiAoIXRoaXMuaGFzRmlyc3QpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzRmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1YnNjcmlwdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSAhPT0gb3V0ZXJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpcHRpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUoc3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChpbm5lclZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiBSYWNlU3Vic2NyaWJlcjtcbn0oT3V0ZXJTdWJzY3JpYmVyKSk7XG5leHBvcnQgeyBSYWNlU3Vic2NyaWJlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFjZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBjb3VudCwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKHN0YXJ0ID09PSB2b2lkIDApIHtcbiAgICAgICAgc3RhcnQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgaWYgKGNvdW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvdW50ID0gc3RhcnQ7XG4gICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSBzdGFydDtcbiAgICAgICAgaWYgKHNjaGVkdWxlcikge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgMCwge1xuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCwgY291bnQ6IGNvdW50LCBzdGFydDogc3RhcnQsIHN1YnNjcmliZXI6IHN1YnNjcmliZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCsrID49IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChjdXJyZW50KyspO1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlICh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoKHN0YXRlKSB7XG4gICAgdmFyIHN0YXJ0ID0gc3RhdGUuc3RhcnQsIGluZGV4ID0gc3RhdGUuaW5kZXgsIGNvdW50ID0gc3RhdGUuY291bnQsIHN1YnNjcmliZXIgPSBzdGF0ZS5zdWJzY3JpYmVyO1xuICAgIGlmIChpbmRleCA+PSBjb3VudCkge1xuICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3Vic2NyaWJlci5uZXh0KHN0YXJ0KTtcbiAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdGF0ZS5pbmRleCA9IGluZGV4ICsgMTtcbiAgICBzdGF0ZS5zdGFydCA9IHN0YXJ0ICsgMTtcbiAgICB0aGlzLnNjaGVkdWxlKHN0YXRlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmdlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5leHBvcnQgZnVuY3Rpb24gc2NhbGFyKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICB9KTtcbiAgICByZXN1bHQuX2lzU2NhbGFyID0gdHJ1ZTtcbiAgICByZXN1bHQudmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2NhbGFyLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dFcnJvcihlcnJvciwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKCFzY2hlZHVsZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycm9yKTsgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHsgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgMCwgeyBlcnJvcjogZXJyb3IsIHN1YnNjcmliZXI6IHN1YnNjcmliZXIgfSk7IH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKF9hKSB7XG4gICAgdmFyIGVycm9yID0gX2EuZXJyb3IsIHN1YnNjcmliZXIgPSBfYS5zdWJzY3JpYmVyO1xuICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyb3IpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGhyb3dFcnJvci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX09ic2VydmFibGUsX3NjaGVkdWxlcl9hc3luYyxfdXRpbF9pc051bWVyaWMsX3V0aWxfaXNTY2hlZHVsZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgYXN5bmMgfSBmcm9tICcuLi9zY2hlZHVsZXIvYXN5bmMnO1xuaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi4vdXRpbC9pc051bWVyaWMnO1xuaW1wb3J0IHsgaXNTY2hlZHVsZXIgfSBmcm9tICcuLi91dGlsL2lzU2NoZWR1bGVyJztcbmV4cG9ydCBmdW5jdGlvbiB0aW1lcihkdWVUaW1lLCBwZXJpb2RPclNjaGVkdWxlciwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKGR1ZVRpbWUgPT09IHZvaWQgMCkge1xuICAgICAgICBkdWVUaW1lID0gMDtcbiAgICB9XG4gICAgdmFyIHBlcmlvZCA9IC0xO1xuICAgIGlmIChpc051bWVyaWMocGVyaW9kT3JTY2hlZHVsZXIpKSB7XG4gICAgICAgIHBlcmlvZCA9IE51bWJlcihwZXJpb2RPclNjaGVkdWxlcikgPCAxICYmIDEgfHwgTnVtYmVyKHBlcmlvZE9yU2NoZWR1bGVyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTY2hlZHVsZXIocGVyaW9kT3JTY2hlZHVsZXIpKSB7XG4gICAgICAgIHNjaGVkdWxlciA9IHBlcmlvZE9yU2NoZWR1bGVyO1xuICAgIH1cbiAgICBpZiAoIWlzU2NoZWR1bGVyKHNjaGVkdWxlcikpIHtcbiAgICAgICAgc2NoZWR1bGVyID0gYXN5bmM7XG4gICAgfVxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgZHVlID0gaXNOdW1lcmljKGR1ZVRpbWUpXG4gICAgICAgICAgICA/IGR1ZVRpbWVcbiAgICAgICAgICAgIDogKCtkdWVUaW1lIC0gc2NoZWR1bGVyLm5vdygpKTtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgZHVlLCB7XG4gICAgICAgICAgICBpbmRleDogMCwgcGVyaW9kOiBwZXJpb2QsIHN1YnNjcmliZXI6IHN1YnNjcmliZXJcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBkaXNwYXRjaChzdGF0ZSkge1xuICAgIHZhciBpbmRleCA9IHN0YXRlLmluZGV4LCBwZXJpb2QgPSBzdGF0ZS5wZXJpb2QsIHN1YnNjcmliZXIgPSBzdGF0ZS5zdWJzY3JpYmVyO1xuICAgIHN1YnNjcmliZXIubmV4dChpbmRleCk7XG4gICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZiAocGVyaW9kID09PSAtMSkge1xuICAgICAgICByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH1cbiAgICBzdGF0ZS5pbmRleCA9IGluZGV4ICsgMTtcbiAgICB0aGlzLnNjaGVkdWxlKHN0YXRlLCBwZXJpb2QpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGltZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9PYnNlcnZhYmxlLF9mcm9tLF9lbXB0eSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSAnLi9mcm9tJztcbmltcG9ydCB7IEVNUFRZIH0gZnJvbSAnLi9lbXB0eSc7XG5leHBvcnQgZnVuY3Rpb24gdXNpbmcocmVzb3VyY2VGYWN0b3J5LCBvYnNlcnZhYmxlRmFjdG9yeSkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgcmVzb3VyY2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNvdXJjZSA9IHJlc291cmNlRmFjdG9yeSgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG9ic2VydmFibGVGYWN0b3J5KHJlc291cmNlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzb3VyY2UgPSByZXN1bHQgPyBmcm9tKHJlc3VsdCkgOiBFTVBUWTtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIGlmIChyZXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHJlc291cmNlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2luZy5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX2Zyb21BcnJheSxfdXRpbF9pc0FycmF5LF9TdWJzY3JpYmVyLF9PdXRlclN1YnNjcmliZXIsX3V0aWxfc3Vic2NyaWJlVG9SZXN1bHQsXy4uX2ludGVybmFsX3N5bWJvbF9pdGVyYXRvciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgZnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tQXJyYXknO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheSc7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBPdXRlclN1YnNjcmliZXIgfSBmcm9tICcuLi9PdXRlclN1YnNjcmliZXInO1xuaW1wb3J0IHsgc3Vic2NyaWJlVG9SZXN1bHQgfSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0JztcbmltcG9ydCB7IGl0ZXJhdG9yIGFzIFN5bWJvbF9pdGVyYXRvciB9IGZyb20gJy4uLy4uL2ludGVybmFsL3N5bWJvbC9pdGVyYXRvcic7XG5leHBvcnQgZnVuY3Rpb24gemlwKCkge1xuICAgIHZhciBvYnNlcnZhYmxlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIG9ic2VydmFibGVzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciByZXN1bHRTZWxlY3RvciA9IG9ic2VydmFibGVzW29ic2VydmFibGVzLmxlbmd0aCAtIDFdO1xuICAgIGlmICh0eXBlb2YgcmVzdWx0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb2JzZXJ2YWJsZXMucG9wKCk7XG4gICAgfVxuICAgIHJldHVybiBmcm9tQXJyYXkob2JzZXJ2YWJsZXMsIHVuZGVmaW5lZCkubGlmdChuZXcgWmlwT3BlcmF0b3IocmVzdWx0U2VsZWN0b3IpKTtcbn1cbnZhciBaaXBPcGVyYXRvciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBaaXBPcGVyYXRvcihyZXN1bHRTZWxlY3Rvcikge1xuICAgICAgICB0aGlzLnJlc3VsdFNlbGVjdG9yID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgfVxuICAgIFppcE9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKHN1YnNjcmliZXIsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLnN1YnNjcmliZShuZXcgWmlwU3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLnJlc3VsdFNlbGVjdG9yKSk7XG4gICAgfTtcbiAgICByZXR1cm4gWmlwT3BlcmF0b3I7XG59KCkpO1xuZXhwb3J0IHsgWmlwT3BlcmF0b3IgfTtcbnZhciBaaXBTdWJzY3JpYmVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFppcFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gWmlwU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcmVzdWx0U2VsZWN0b3IsIHZhbHVlcykge1xuICAgICAgICBpZiAodmFsdWVzID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLml0ZXJhdG9ycyA9IFtdO1xuICAgICAgICBfdGhpcy5hY3RpdmUgPSAwO1xuICAgICAgICBfdGhpcy5yZXN1bHRTZWxlY3RvciA9ICh0eXBlb2YgcmVzdWx0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpID8gcmVzdWx0U2VsZWN0b3IgOiBudWxsO1xuICAgICAgICBfdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgWmlwU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9ycyA9IHRoaXMuaXRlcmF0b3JzO1xuICAgICAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9ycy5wdXNoKG5ldyBTdGF0aWNBcnJheUl0ZXJhdG9yKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlW1N5bWJvbF9pdGVyYXRvcl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9ycy5wdXNoKG5ldyBTdGF0aWNJdGVyYXRvcih2YWx1ZVtTeW1ib2xfaXRlcmF0b3JdKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGl0ZXJhdG9ycy5wdXNoKG5ldyBaaXBCdWZmZXJJdGVyYXRvcih0aGlzLmRlc3RpbmF0aW9uLCB0aGlzLCB2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBaaXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpdGVyYXRvcnMgPSB0aGlzLml0ZXJhdG9ycztcbiAgICAgICAgdmFyIGxlbiA9IGl0ZXJhdG9ycy5sZW5ndGg7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZlID0gbGVuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvcnNbaV07XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3Iuc3RpbGxVbnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmFkZChpdGVyYXRvci5zdWJzY3JpYmUoaXRlcmF0b3IsIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFppcFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeUluYWN0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZS0tO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgWmlwU3Vic2NyaWJlci5wcm90b3R5cGUuY2hlY2tJdGVyYXRvcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpdGVyYXRvcnMgPSB0aGlzLml0ZXJhdG9ycztcbiAgICAgICAgdmFyIGxlbiA9IGl0ZXJhdG9ycy5sZW5ndGg7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3IuaGFzVmFsdWUgPT09ICdmdW5jdGlvbicgJiYgIWl0ZXJhdG9yLmhhc1ZhbHVlKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNob3VsZENvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yc1tpXTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3IuaGFzQ29tcGxldGVkKCkpIHtcbiAgICAgICAgICAgICAgICBzaG91bGRDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFyZ3MucHVzaChyZXN1bHQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgICAgICB0aGlzLl90cnlyZXN1bHRTZWxlY3RvcihhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uLm5leHQoYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZENvbXBsZXRlKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBaaXBTdWJzY3JpYmVyLnByb3RvdHlwZS5fdHJ5cmVzdWx0U2VsZWN0b3IgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5yZXN1bHRTZWxlY3Rvci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KHJlc3VsdCk7XG4gICAgfTtcbiAgICByZXR1cm4gWmlwU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgWmlwU3Vic2NyaWJlciB9O1xudmFyIFN0YXRpY0l0ZXJhdG9yID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN0YXRpY0l0ZXJhdG9yKGl0ZXJhdG9yKSB7XG4gICAgICAgIHRoaXMuaXRlcmF0b3IgPSBpdGVyYXRvcjtcbiAgICAgICAgdGhpcy5uZXh0UmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgIH1cbiAgICBTdGF0aWNJdGVyYXRvci5wcm90b3R5cGUuaGFzVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgU3RhdGljSXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLm5leHRSZXN1bHQ7XG4gICAgICAgIHRoaXMubmV4dFJlc3VsdCA9IHRoaXMuaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgU3RhdGljSXRlcmF0b3IucHJvdG90eXBlLmhhc0NvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG5leHRSZXN1bHQgPSB0aGlzLm5leHRSZXN1bHQ7XG4gICAgICAgIHJldHVybiBuZXh0UmVzdWx0ICYmIG5leHRSZXN1bHQuZG9uZTtcbiAgICB9O1xuICAgIHJldHVybiBTdGF0aWNJdGVyYXRvcjtcbn0oKSk7XG52YXIgU3RhdGljQXJyYXlJdGVyYXRvciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTdGF0aWNBcnJheUl0ZXJhdG9yKGFycmF5KSB7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgfVxuICAgIFN0YXRpY0FycmF5SXRlcmF0b3IucHJvdG90eXBlW1N5bWJvbF9pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgU3RhdGljQXJyYXlJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgaSA9IHRoaXMuaW5kZXgrKztcbiAgICAgICAgdmFyIGFycmF5ID0gdGhpcy5hcnJheTtcbiAgICAgICAgcmV0dXJuIGkgPCB0aGlzLmxlbmd0aCA/IHsgdmFsdWU6IGFycmF5W2ldLCBkb25lOiBmYWxzZSB9IDogeyB2YWx1ZTogbnVsbCwgZG9uZTogdHJ1ZSB9O1xuICAgIH07XG4gICAgU3RhdGljQXJyYXlJdGVyYXRvci5wcm90b3R5cGUuaGFzVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aCA+IHRoaXMuaW5kZXg7XG4gICAgfTtcbiAgICBTdGF0aWNBcnJheUl0ZXJhdG9yLnByb3RvdHlwZS5oYXNDb21wbGV0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5Lmxlbmd0aCA9PT0gdGhpcy5pbmRleDtcbiAgICB9O1xuICAgIHJldHVybiBTdGF0aWNBcnJheUl0ZXJhdG9yO1xufSgpKTtcbnZhciBaaXBCdWZmZXJJdGVyYXRvciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhaaXBCdWZmZXJJdGVyYXRvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBaaXBCdWZmZXJJdGVyYXRvcihkZXN0aW5hdGlvbiwgcGFyZW50LCBvYnNlcnZhYmxlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIF90aGlzLm9ic2VydmFibGUgPSBvYnNlcnZhYmxlO1xuICAgICAgICBfdGhpcy5zdGlsbFVuc3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICAgIF90aGlzLmJ1ZmZlciA9IFtdO1xuICAgICAgICBfdGhpcy5pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgWmlwQnVmZmVySXRlcmF0b3IucHJvdG90eXBlW1N5bWJvbF9pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgWmlwQnVmZmVySXRlcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1ZmZlcjtcbiAgICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDAgJiYgdGhpcy5pc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbnVsbCwgZG9uZTogdHJ1ZSB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGJ1ZmZlci5zaGlmdCgpLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBaaXBCdWZmZXJJdGVyYXRvci5wcm90b3R5cGUuaGFzVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1ZmZlci5sZW5ndGggPiAwO1xuICAgIH07XG4gICAgWmlwQnVmZmVySXRlcmF0b3IucHJvdG90eXBlLmhhc0NvbXBsZXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmlzQ29tcGxldGU7XG4gICAgfTtcbiAgICBaaXBCdWZmZXJJdGVyYXRvci5wcm90b3R5cGUubm90aWZ5Q29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmJ1ZmZlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQubm90aWZ5SW5hY3RpdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgWmlwQnVmZmVySXRlcmF0b3IucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5idWZmZXIucHVzaChpbm5lclZhbHVlKTtcbiAgICAgICAgdGhpcy5wYXJlbnQuY2hlY2tJdGVyYXRvcnMoKTtcbiAgICB9O1xuICAgIFppcEJ1ZmZlckl0ZXJhdG9yLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCB0aGlzLm9ic2VydmFibGUsIHRoaXMsIGluZGV4KTtcbiAgICB9O1xuICAgIHJldHVybiBaaXBCdWZmZXJJdGVyYXRvcjtcbn0oT3V0ZXJTdWJzY3JpYmVyKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD16aXAuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9tZXJnZUFsbCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBtZXJnZUFsbCB9IGZyb20gJy4vbWVyZ2VBbGwnO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdEFsbCgpIHtcbiAgICByZXR1cm4gbWVyZ2VBbGwoMSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25jYXRBbGwuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9TdWJzY3JpYmVyLF9TdWJzY3JpcHRpb24sX09ic2VydmFibGUsX1N1YmplY3QgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAnLi4vU3ViamVjdCc7XG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBCeShrZXlTZWxlY3RvciwgZWxlbWVudFNlbGVjdG9yLCBkdXJhdGlvblNlbGVjdG9yLCBzdWJqZWN0U2VsZWN0b3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLmxpZnQobmV3IEdyb3VwQnlPcGVyYXRvcihrZXlTZWxlY3RvciwgZWxlbWVudFNlbGVjdG9yLCBkdXJhdGlvblNlbGVjdG9yLCBzdWJqZWN0U2VsZWN0b3IpKTtcbiAgICB9O1xufVxudmFyIEdyb3VwQnlPcGVyYXRvciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBHcm91cEJ5T3BlcmF0b3Ioa2V5U2VsZWN0b3IsIGVsZW1lbnRTZWxlY3RvciwgZHVyYXRpb25TZWxlY3Rvciwgc3ViamVjdFNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMua2V5U2VsZWN0b3IgPSBrZXlTZWxlY3RvcjtcbiAgICAgICAgdGhpcy5lbGVtZW50U2VsZWN0b3IgPSBlbGVtZW50U2VsZWN0b3I7XG4gICAgICAgIHRoaXMuZHVyYXRpb25TZWxlY3RvciA9IGR1cmF0aW9uU2VsZWN0b3I7XG4gICAgICAgIHRoaXMuc3ViamVjdFNlbGVjdG9yID0gc3ViamVjdFNlbGVjdG9yO1xuICAgIH1cbiAgICBHcm91cEJ5T3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBHcm91cEJ5U3Vic2NyaWJlcihzdWJzY3JpYmVyLCB0aGlzLmtleVNlbGVjdG9yLCB0aGlzLmVsZW1lbnRTZWxlY3RvciwgdGhpcy5kdXJhdGlvblNlbGVjdG9yLCB0aGlzLnN1YmplY3RTZWxlY3RvcikpO1xuICAgIH07XG4gICAgcmV0dXJuIEdyb3VwQnlPcGVyYXRvcjtcbn0oKSk7XG52YXIgR3JvdXBCeVN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoR3JvdXBCeVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR3JvdXBCeVN1YnNjcmliZXIoZGVzdGluYXRpb24sIGtleVNlbGVjdG9yLCBlbGVtZW50U2VsZWN0b3IsIGR1cmF0aW9uU2VsZWN0b3IsIHN1YmplY3RTZWxlY3Rvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMua2V5U2VsZWN0b3IgPSBrZXlTZWxlY3RvcjtcbiAgICAgICAgX3RoaXMuZWxlbWVudFNlbGVjdG9yID0gZWxlbWVudFNlbGVjdG9yO1xuICAgICAgICBfdGhpcy5kdXJhdGlvblNlbGVjdG9yID0gZHVyYXRpb25TZWxlY3RvcjtcbiAgICAgICAgX3RoaXMuc3ViamVjdFNlbGVjdG9yID0gc3ViamVjdFNlbGVjdG9yO1xuICAgICAgICBfdGhpcy5ncm91cHMgPSBudWxsO1xuICAgICAgICBfdGhpcy5hdHRlbXB0ZWRUb1Vuc3Vic2NyaWJlID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmNvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBHcm91cEJ5U3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGtleSA9IHRoaXMua2V5U2VsZWN0b3IodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9ncm91cCh2YWx1ZSwga2V5KTtcbiAgICB9O1xuICAgIEdyb3VwQnlTdWJzY3JpYmVyLnByb3RvdHlwZS5fZ3JvdXAgPSBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICB2YXIgZ3JvdXBzID0gdGhpcy5ncm91cHM7XG4gICAgICAgIGlmICghZ3JvdXBzKSB7XG4gICAgICAgICAgICBncm91cHMgPSB0aGlzLmdyb3VwcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZ3JvdXAgPSBncm91cHMuZ2V0KGtleSk7XG4gICAgICAgIHZhciBlbGVtZW50O1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50U2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuZWxlbWVudFNlbGVjdG9yKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFncm91cCkge1xuICAgICAgICAgICAgZ3JvdXAgPSAodGhpcy5zdWJqZWN0U2VsZWN0b3IgPyB0aGlzLnN1YmplY3RTZWxlY3RvcigpIDogbmV3IFN1YmplY3QoKSk7XG4gICAgICAgICAgICBncm91cHMuc2V0KGtleSwgZ3JvdXApO1xuICAgICAgICAgICAgdmFyIGdyb3VwZWRPYnNlcnZhYmxlID0gbmV3IEdyb3VwZWRPYnNlcnZhYmxlKGtleSwgZ3JvdXAsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGdyb3VwZWRPYnNlcnZhYmxlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmR1cmF0aW9uU2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB2YXIgZHVyYXRpb24gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uU2VsZWN0b3IobmV3IEdyb3VwZWRPYnNlcnZhYmxlKGtleSwgZ3JvdXApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoZHVyYXRpb24uc3Vic2NyaWJlKG5ldyBHcm91cER1cmF0aW9uU3Vic2NyaWJlcihrZXksIGdyb3VwLCB0aGlzKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghZ3JvdXAuY2xvc2VkKSB7XG4gICAgICAgICAgICBncm91cC5uZXh0KGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBHcm91cEJ5U3Vic2NyaWJlci5wcm90b3R5cGUuX2Vycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICB2YXIgZ3JvdXBzID0gdGhpcy5ncm91cHM7XG4gICAgICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgICAgIGdyb3Vwcy5mb3JFYWNoKGZ1bmN0aW9uIChncm91cCwga2V5KSB7XG4gICAgICAgICAgICAgICAgZ3JvdXAuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZ3JvdXBzLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgIH07XG4gICAgR3JvdXBCeVN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGdyb3VwcyA9IHRoaXMuZ3JvdXBzO1xuICAgICAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgICAgICBncm91cHMuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXAsIGtleSkge1xuICAgICAgICAgICAgICAgIGdyb3VwLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdyb3Vwcy5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICB9O1xuICAgIEdyb3VwQnlTdWJzY3JpYmVyLnByb3RvdHlwZS5yZW1vdmVHcm91cCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdGhpcy5ncm91cHMuZGVsZXRlKGtleSk7XG4gICAgfTtcbiAgICBHcm91cEJ5U3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYXR0ZW1wdGVkVG9VbnN1YnNjcmliZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5jb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUudW5zdWJzY3JpYmUuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEdyb3VwQnlTdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG52YXIgR3JvdXBEdXJhdGlvblN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoR3JvdXBEdXJhdGlvblN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR3JvdXBEdXJhdGlvblN1YnNjcmliZXIoa2V5LCBncm91cCwgcGFyZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGdyb3VwKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIF90aGlzLmdyb3VwID0gZ3JvdXA7XG4gICAgICAgIF90aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBHcm91cER1cmF0aW9uU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH07XG4gICAgR3JvdXBEdXJhdGlvblN1YnNjcmliZXIucHJvdG90eXBlLl91bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgcGFyZW50ID0gX2EucGFyZW50LCBrZXkgPSBfYS5rZXk7XG4gICAgICAgIHRoaXMua2V5ID0gdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlR3JvdXAoa2V5KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEdyb3VwRHVyYXRpb25TdWJzY3JpYmVyO1xufShTdWJzY3JpYmVyKSk7XG52YXIgR3JvdXBlZE9ic2VydmFibGUgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoR3JvdXBlZE9ic2VydmFibGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR3JvdXBlZE9ic2VydmFibGUoa2V5LCBncm91cFN1YmplY3QsIHJlZkNvdW50U3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmtleSA9IGtleTtcbiAgICAgICAgX3RoaXMuZ3JvdXBTdWJqZWN0ID0gZ3JvdXBTdWJqZWN0O1xuICAgICAgICBfdGhpcy5yZWZDb3VudFN1YnNjcmlwdGlvbiA9IHJlZkNvdW50U3Vic2NyaXB0aW9uO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEdyb3VwZWRPYnNlcnZhYmxlLnByb3RvdHlwZS5fc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgdmFyIF9hID0gdGhpcywgcmVmQ291bnRTdWJzY3JpcHRpb24gPSBfYS5yZWZDb3VudFN1YnNjcmlwdGlvbiwgZ3JvdXBTdWJqZWN0ID0gX2EuZ3JvdXBTdWJqZWN0O1xuICAgICAgICBpZiAocmVmQ291bnRTdWJzY3JpcHRpb24gJiYgIXJlZkNvdW50U3Vic2NyaXB0aW9uLmNsb3NlZCkge1xuICAgICAgICAgICAgc3Vic2NyaXB0aW9uLmFkZChuZXcgSW5uZXJSZWZDb3VudFN1YnNjcmlwdGlvbihyZWZDb3VudFN1YnNjcmlwdGlvbikpO1xuICAgICAgICB9XG4gICAgICAgIHN1YnNjcmlwdGlvbi5hZGQoZ3JvdXBTdWJqZWN0LnN1YnNjcmliZShzdWJzY3JpYmVyKSk7XG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XG4gICAgfTtcbiAgICByZXR1cm4gR3JvdXBlZE9ic2VydmFibGU7XG59KE9ic2VydmFibGUpKTtcbmV4cG9ydCB7IEdyb3VwZWRPYnNlcnZhYmxlIH07XG52YXIgSW5uZXJSZWZDb3VudFN1YnNjcmlwdGlvbiA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhJbm5lclJlZkNvdW50U3Vic2NyaXB0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIElubmVyUmVmQ291bnRTdWJzY3JpcHRpb24ocGFyZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgcGFyZW50LmNvdW50Kys7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSW5uZXJSZWZDb3VudFN1YnNjcmlwdGlvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgaWYgKCFwYXJlbnQuY2xvc2VkICYmICF0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgcGFyZW50LmNvdW50IC09IDE7XG4gICAgICAgICAgICBpZiAocGFyZW50LmNvdW50ID09PSAwICYmIHBhcmVudC5hdHRlbXB0ZWRUb1Vuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBJbm5lclJlZkNvdW50U3Vic2NyaXB0aW9uO1xufShTdWJzY3JpcHRpb24pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdyb3VwQnkuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9TdWJzY3JpYmVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5leHBvcnQgZnVuY3Rpb24gbWFwKHByb2plY3QsIHRoaXNBcmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbWFwT3BlcmF0aW9uKHNvdXJjZSkge1xuICAgICAgICBpZiAodHlwZW9mIHByb2plY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IGlzIG5vdCBhIGZ1bmN0aW9uLiBBcmUgeW91IGxvb2tpbmcgZm9yIGBtYXBUbygpYD8nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc291cmNlLmxpZnQobmV3IE1hcE9wZXJhdG9yKHByb2plY3QsIHRoaXNBcmcpKTtcbiAgICB9O1xufVxudmFyIE1hcE9wZXJhdG9yID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hcE9wZXJhdG9yKHByb2plY3QsIHRoaXNBcmcpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy50aGlzQXJnID0gdGhpc0FyZztcbiAgICB9XG4gICAgTWFwT3BlcmF0b3IucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBNYXBTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMucHJvamVjdCwgdGhpcy50aGlzQXJnKSk7XG4gICAgfTtcbiAgICByZXR1cm4gTWFwT3BlcmF0b3I7XG59KCkpO1xuZXhwb3J0IHsgTWFwT3BlcmF0b3IgfTtcbnZhciBNYXBTdWJzY3JpYmVyID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKE1hcFN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWFwU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcHJvamVjdCwgdGhpc0FyZykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBkZXN0aW5hdGlvbikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIF90aGlzLmNvdW50ID0gMDtcbiAgICAgICAgX3RoaXMudGhpc0FyZyA9IHRoaXNBcmcgfHwgX3RoaXM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJvamVjdC5jYWxsKHRoaXMudGhpc0FyZywgdmFsdWUsIHRoaXMuY291bnQrKyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dChyZXN1bHQpO1xuICAgIH07XG4gICAgcmV0dXJuIE1hcFN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX21lcmdlTWFwLF91dGlsX2lkZW50aXR5IFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IG1lcmdlTWFwIH0gZnJvbSAnLi9tZXJnZU1hcCc7XG5pbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4uL3V0aWwvaWRlbnRpdHknO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQWxsKGNvbmN1cnJlbnQpIHtcbiAgICBpZiAoY29uY3VycmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbmN1cnJlbnQgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgfVxuICAgIHJldHVybiBtZXJnZU1hcChpZGVudGl0eSwgY29uY3VycmVudCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZXJnZUFsbC5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX3V0aWxfc3Vic2NyaWJlVG9SZXN1bHQsX091dGVyU3Vic2NyaWJlcixfSW5uZXJTdWJzY3JpYmVyLF9tYXAsX29ic2VydmFibGVfZnJvbSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlVG9SZXN1bHQgfSBmcm9tICcuLi91dGlsL3N1YnNjcmliZVRvUmVzdWx0JztcbmltcG9ydCB7IE91dGVyU3Vic2NyaWJlciB9IGZyb20gJy4uL091dGVyU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBJbm5lclN1YnNjcmliZXIgfSBmcm9tICcuLi9Jbm5lclN1YnNjcmliZXInO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAnLi9tYXAnO1xuaW1wb3J0IHsgZnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvZnJvbSc7XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VNYXAocHJvamVjdCwgcmVzdWx0U2VsZWN0b3IsIGNvbmN1cnJlbnQpIHtcbiAgICBpZiAoY29uY3VycmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbmN1cnJlbnQgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVzdWx0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzb3VyY2UpIHsgcmV0dXJuIHNvdXJjZS5waXBlKG1lcmdlTWFwKGZ1bmN0aW9uIChhLCBpKSB7IHJldHVybiBmcm9tKHByb2plY3QoYSwgaSkpLnBpcGUobWFwKGZ1bmN0aW9uIChiLCBpaSkgeyByZXR1cm4gcmVzdWx0U2VsZWN0b3IoYSwgYiwgaSwgaWkpOyB9KSk7IH0sIGNvbmN1cnJlbnQpKTsgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHJlc3VsdFNlbGVjdG9yID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25jdXJyZW50ID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlKSB7IHJldHVybiBzb3VyY2UubGlmdChuZXcgTWVyZ2VNYXBPcGVyYXRvcihwcm9qZWN0LCBjb25jdXJyZW50KSk7IH07XG59XG52YXIgTWVyZ2VNYXBPcGVyYXRvciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNZXJnZU1hcE9wZXJhdG9yKHByb2plY3QsIGNvbmN1cnJlbnQpIHtcbiAgICAgICAgaWYgKGNvbmN1cnJlbnQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgY29uY3VycmVudCA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLmNvbmN1cnJlbnQgPSBjb25jdXJyZW50O1xuICAgIH1cbiAgICBNZXJnZU1hcE9wZXJhdG9yLnByb3RvdHlwZS5jYWxsID0gZnVuY3Rpb24gKG9ic2VydmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IE1lcmdlTWFwU3Vic2NyaWJlcihvYnNlcnZlciwgdGhpcy5wcm9qZWN0LCB0aGlzLmNvbmN1cnJlbnQpKTtcbiAgICB9O1xuICAgIHJldHVybiBNZXJnZU1hcE9wZXJhdG9yO1xufSgpKTtcbmV4cG9ydCB7IE1lcmdlTWFwT3BlcmF0b3IgfTtcbnZhciBNZXJnZU1hcFN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoTWVyZ2VNYXBTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1lcmdlTWFwU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgcHJvamVjdCwgY29uY3VycmVudCkge1xuICAgICAgICBpZiAoY29uY3VycmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBjb25jdXJyZW50ID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgX3RoaXMuY29uY3VycmVudCA9IGNvbmN1cnJlbnQ7XG4gICAgICAgIF90aGlzLmhhc0NvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5idWZmZXIgPSBbXTtcbiAgICAgICAgX3RoaXMuYWN0aXZlID0gMDtcbiAgICAgICAgX3RoaXMuaW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE1lcmdlTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlIDwgdGhpcy5jb25jdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLl90cnlOZXh0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNZXJnZU1hcFN1YnNjcmliZXIucHJvdG90eXBlLl90cnlOZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXgrKztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMucHJvamVjdCh2YWx1ZSwgaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZSsrO1xuICAgICAgICB0aGlzLl9pbm5lclN1YihyZXN1bHQsIHZhbHVlLCBpbmRleCk7XG4gICAgfTtcbiAgICBNZXJnZU1hcFN1YnNjcmliZXIucHJvdG90eXBlLl9pbm5lclN1YiA9IGZ1bmN0aW9uIChpc2gsIHZhbHVlLCBpbmRleCkge1xuICAgICAgICB2YXIgaW5uZXJTdWJzY3JpYmVyID0gbmV3IElubmVyU3Vic2NyaWJlcih0aGlzLCB1bmRlZmluZWQsIHVuZGVmaW5lZCk7XG4gICAgICAgIHZhciBkZXN0aW5hdGlvbiA9IHRoaXMuZGVzdGluYXRpb247XG4gICAgICAgIGRlc3RpbmF0aW9uLmFkZChpbm5lclN1YnNjcmliZXIpO1xuICAgICAgICBzdWJzY3JpYmVUb1Jlc3VsdCh0aGlzLCBpc2gsIHZhbHVlLCBpbmRleCwgaW5uZXJTdWJzY3JpYmVyKTtcbiAgICB9O1xuICAgIE1lcmdlTWFwU3Vic2NyaWJlci5wcm90b3R5cGUuX2NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhhc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSA9PT0gMCAmJiB0aGlzLmJ1ZmZlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBNZXJnZU1hcFN1YnNjcmliZXIucHJvdG90eXBlLm5vdGlmeU5leHQgPSBmdW5jdGlvbiAob3V0ZXJWYWx1ZSwgaW5uZXJWYWx1ZSwgb3V0ZXJJbmRleCwgaW5uZXJJbmRleCwgaW5uZXJTdWIpIHtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGlubmVyVmFsdWUpO1xuICAgIH07XG4gICAgTWVyZ2VNYXBTdWJzY3JpYmVyLnByb3RvdHlwZS5ub3RpZnlDb21wbGV0ZSA9IGZ1bmN0aW9uIChpbm5lclN1Yikge1xuICAgICAgICB2YXIgYnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgICAgIHRoaXMucmVtb3ZlKGlubmVyU3ViKTtcbiAgICAgICAgdGhpcy5hY3RpdmUtLTtcbiAgICAgICAgaWYgKGJ1ZmZlci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLl9uZXh0KGJ1ZmZlci5zaGlmdCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmFjdGl2ZSA9PT0gMCAmJiB0aGlzLmhhc0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTWVyZ2VNYXBTdWJzY3JpYmVyO1xufShPdXRlclN1YnNjcmliZXIpKTtcbmV4cG9ydCB7IE1lcmdlTWFwU3Vic2NyaWJlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVyZ2VNYXAuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9TdWJzY3JpYmVyLF9Ob3RpZmljYXRpb24gUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4uL05vdGlmaWNhdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZU9uKHNjaGVkdWxlciwgZGVsYXkpIHtcbiAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICBkZWxheSA9IDA7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiBvYnNlcnZlT25PcGVyYXRvckZ1bmN0aW9uKHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gc291cmNlLmxpZnQobmV3IE9ic2VydmVPbk9wZXJhdG9yKHNjaGVkdWxlciwgZGVsYXkpKTtcbiAgICB9O1xufVxudmFyIE9ic2VydmVPbk9wZXJhdG9yID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmVPbk9wZXJhdG9yKHNjaGVkdWxlciwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgIH1cbiAgICBPYnNlcnZlT25PcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IE9ic2VydmVPblN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5zY2hlZHVsZXIsIHRoaXMuZGVsYXkpKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZlT25PcGVyYXRvcjtcbn0oKSk7XG5leHBvcnQgeyBPYnNlcnZlT25PcGVyYXRvciB9O1xudmFyIE9ic2VydmVPblN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoT2JzZXJ2ZU9uU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBPYnNlcnZlT25TdWJzY3JpYmVyKGRlc3RpbmF0aW9uLCBzY2hlZHVsZXIsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMuZGVsYXkgPSBkZWxheTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYnNlcnZlT25TdWJzY3JpYmVyLmRpc3BhdGNoID0gZnVuY3Rpb24gKGFyZykge1xuICAgICAgICB2YXIgbm90aWZpY2F0aW9uID0gYXJnLm5vdGlmaWNhdGlvbiwgZGVzdGluYXRpb24gPSBhcmcuZGVzdGluYXRpb247XG4gICAgICAgIG5vdGlmaWNhdGlvbi5vYnNlcnZlKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgT2JzZXJ2ZU9uU3Vic2NyaWJlci5wcm90b3R5cGUuc2NoZWR1bGVNZXNzYWdlID0gZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgICAgICB2YXIgZGVzdGluYXRpb24gPSB0aGlzLmRlc3RpbmF0aW9uO1xuICAgICAgICBkZXN0aW5hdGlvbi5hZGQodGhpcy5zY2hlZHVsZXIuc2NoZWR1bGUoT2JzZXJ2ZU9uU3Vic2NyaWJlci5kaXNwYXRjaCwgdGhpcy5kZWxheSwgbmV3IE9ic2VydmVPbk1lc3NhZ2Uobm90aWZpY2F0aW9uLCB0aGlzLmRlc3RpbmF0aW9uKSkpO1xuICAgIH07XG4gICAgT2JzZXJ2ZU9uU3Vic2NyaWJlci5wcm90b3R5cGUuX25leHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU1lc3NhZ2UoTm90aWZpY2F0aW9uLmNyZWF0ZU5leHQodmFsdWUpKTtcbiAgICB9O1xuICAgIE9ic2VydmVPblN1YnNjcmliZXIucHJvdG90eXBlLl9lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU1lc3NhZ2UoTm90aWZpY2F0aW9uLmNyZWF0ZUVycm9yKGVycikpO1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgICBPYnNlcnZlT25TdWJzY3JpYmVyLnByb3RvdHlwZS5fY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVNZXNzYWdlKE5vdGlmaWNhdGlvbi5jcmVhdGVDb21wbGV0ZSgpKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmVPblN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbmV4cG9ydCB7IE9ic2VydmVPblN1YnNjcmliZXIgfTtcbnZhciBPYnNlcnZlT25NZXNzYWdlID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmVPbk1lc3NhZ2Uobm90aWZpY2F0aW9uLCBkZXN0aW5hdGlvbikge1xuICAgICAgICB0aGlzLm5vdGlmaWNhdGlvbiA9IG5vdGlmaWNhdGlvbjtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gT2JzZXJ2ZU9uTWVzc2FnZTtcbn0oKSk7XG5leHBvcnQgeyBPYnNlcnZlT25NZXNzYWdlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYnNlcnZlT24uanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9TdWJzY3JpYmVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5leHBvcnQgZnVuY3Rpb24gcmVmQ291bnQoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHJlZkNvdW50T3BlcmF0b3JGdW5jdGlvbihzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5saWZ0KG5ldyBSZWZDb3VudE9wZXJhdG9yKHNvdXJjZSkpO1xuICAgIH07XG59XG52YXIgUmVmQ291bnRPcGVyYXRvciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZWZDb3VudE9wZXJhdG9yKGNvbm5lY3RhYmxlKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGFibGUgPSBjb25uZWN0YWJsZTtcbiAgICB9XG4gICAgUmVmQ291bnRPcGVyYXRvci5wcm90b3R5cGUuY2FsbCA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIGNvbm5lY3RhYmxlID0gdGhpcy5jb25uZWN0YWJsZTtcbiAgICAgICAgY29ubmVjdGFibGUuX3JlZkNvdW50Kys7XG4gICAgICAgIHZhciByZWZDb3VudGVyID0gbmV3IFJlZkNvdW50U3Vic2NyaWJlcihzdWJzY3JpYmVyLCBjb25uZWN0YWJsZSk7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBzb3VyY2Uuc3Vic2NyaWJlKHJlZkNvdW50ZXIpO1xuICAgICAgICBpZiAoIXJlZkNvdW50ZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICByZWZDb3VudGVyLmNvbm5lY3Rpb24gPSBjb25uZWN0YWJsZS5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmlwdGlvbjtcbiAgICB9O1xuICAgIHJldHVybiBSZWZDb3VudE9wZXJhdG9yO1xufSgpKTtcbnZhciBSZWZDb3VudFN1YnNjcmliZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoUmVmQ291bnRTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlZkNvdW50U3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgY29ubmVjdGFibGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZGVzdGluYXRpb24pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNvbm5lY3RhYmxlID0gY29ubmVjdGFibGU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUmVmQ291bnRTdWJzY3JpYmVyLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb25uZWN0YWJsZSA9IHRoaXMuY29ubmVjdGFibGU7XG4gICAgICAgIGlmICghY29ubmVjdGFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25uZWN0YWJsZSA9IG51bGw7XG4gICAgICAgIHZhciByZWZDb3VudCA9IGNvbm5lY3RhYmxlLl9yZWZDb3VudDtcbiAgICAgICAgaWYgKHJlZkNvdW50IDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGFibGUuX3JlZkNvdW50ID0gcmVmQ291bnQgLSAxO1xuICAgICAgICBpZiAocmVmQ291bnQgPiAxKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gdGhpcy5jb25uZWN0aW9uO1xuICAgICAgICB2YXIgc2hhcmVkQ29ubmVjdGlvbiA9IGNvbm5lY3RhYmxlLl9jb25uZWN0aW9uO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICBpZiAoc2hhcmVkQ29ubmVjdGlvbiAmJiAoIWNvbm5lY3Rpb24gfHwgc2hhcmVkQ29ubmVjdGlvbiA9PT0gY29ubmVjdGlvbikpIHtcbiAgICAgICAgICAgIHNoYXJlZENvbm5lY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFJlZkNvdW50U3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVmQ291bnQuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9TdWJzY3JpcHRpb24gUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG52YXIgQWN0aW9uID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBBY3Rpb24oc2NoZWR1bGVyLCB3b3JrKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgcmV0dXJuIEFjdGlvbjtcbn0oU3Vic2NyaXB0aW9uKSk7XG5leHBvcnQgeyBBY3Rpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFjdGlvbi5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX0FzeW5jQWN0aW9uIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBBc3luY0FjdGlvbiB9IGZyb20gJy4vQXN5bmNBY3Rpb24nO1xudmFyIEFuaW1hdGlvbkZyYW1lQWN0aW9uID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFuaW1hdGlvbkZyYW1lQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFuaW1hdGlvbkZyYW1lQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIHdvcmspIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMud29yayA9IHdvcms7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQW5pbWF0aW9uRnJhbWVBY3Rpb24ucHJvdG90eXBlLnJlcXVlc3RBc3luY0lkID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaWQsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbGF5ICE9PSBudWxsICYmIGRlbGF5ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUucmVxdWVzdEFzeW5jSWQuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIGlkLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgc2NoZWR1bGVyLmFjdGlvbnMucHVzaCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZWQgfHwgKHNjaGVkdWxlci5zY2hlZHVsZWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2NoZWR1bGVyLmZsdXNoKG51bGwpOyB9KSk7XG4gICAgfTtcbiAgICBBbmltYXRpb25GcmFtZUFjdGlvbi5wcm90b3R5cGUucmVjeWNsZUFzeW5jSWQgPSBmdW5jdGlvbiAoc2NoZWR1bGVyLCBpZCwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGRlbGF5ICE9PSBudWxsICYmIGRlbGF5ID4gMCkgfHwgKGRlbGF5ID09PSBudWxsICYmIHRoaXMuZGVsYXkgPiAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUucmVjeWNsZUFzeW5jSWQuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIGlkLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNjaGVkdWxlci5hY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xuICAgICAgICAgICAgc2NoZWR1bGVyLnNjaGVkdWxlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmV0dXJuIEFuaW1hdGlvbkZyYW1lQWN0aW9uO1xufShBc3luY0FjdGlvbikpO1xuZXhwb3J0IHsgQW5pbWF0aW9uRnJhbWVBY3Rpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFuaW1hdGlvbkZyYW1lQWN0aW9uLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfQXN5bmNTY2hlZHVsZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IEFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi9Bc3luY1NjaGVkdWxlcic7XG52YXIgQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVkID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgYWN0aW9ucyA9IHRoaXMuYWN0aW9ucztcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgdmFyIGNvdW50ID0gYWN0aW9ucy5sZW5ndGg7XG4gICAgICAgIGFjdGlvbiA9IGFjdGlvbiB8fCBhY3Rpb25zLnNoaWZ0KCk7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChlcnJvciA9IGFjdGlvbi5leGVjdXRlKGFjdGlvbi5zdGF0ZSwgYWN0aW9uLmRlbGF5KSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICgrK2luZGV4IDwgY291bnQgJiYgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkpO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHdoaWxlICgrK2luZGV4IDwgY291bnQgJiYgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXI7XG59KEFzeW5jU2NoZWR1bGVyKSk7XG5leHBvcnQgeyBBbmltYXRpb25GcmFtZVNjaGVkdWxlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF91dGlsX0ltbWVkaWF0ZSxfQXN5bmNBY3Rpb24gUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IEltbWVkaWF0ZSB9IGZyb20gJy4uL3V0aWwvSW1tZWRpYXRlJztcbmltcG9ydCB7IEFzeW5jQWN0aW9uIH0gZnJvbSAnLi9Bc3luY0FjdGlvbic7XG52YXIgQXNhcEFjdGlvbiA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhBc2FwQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzYXBBY3Rpb24oc2NoZWR1bGVyLCB3b3JrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHNjaGVkdWxlciwgd29yaykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBfdGhpcy53b3JrID0gd29yaztcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBc2FwQWN0aW9uLnByb3RvdHlwZS5yZXF1ZXN0QXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxheSAhPT0gbnVsbCAmJiBkZWxheSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnJlcXVlc3RBc3luY0lkLmNhbGwodGhpcywgc2NoZWR1bGVyLCBpZCwgZGVsYXkpO1xuICAgICAgICB9XG4gICAgICAgIHNjaGVkdWxlci5hY3Rpb25zLnB1c2godGhpcyk7XG4gICAgICAgIHJldHVybiBzY2hlZHVsZXIuc2NoZWR1bGVkIHx8IChzY2hlZHVsZXIuc2NoZWR1bGVkID0gSW1tZWRpYXRlLnNldEltbWVkaWF0ZShzY2hlZHVsZXIuZmx1c2guYmluZChzY2hlZHVsZXIsIG51bGwpKSk7XG4gICAgfTtcbiAgICBBc2FwQWN0aW9uLnByb3RvdHlwZS5yZWN5Y2xlQXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZGVsYXkgIT09IG51bGwgJiYgZGVsYXkgPiAwKSB8fCAoZGVsYXkgPT09IG51bGwgJiYgdGhpcy5kZWxheSA+IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5yZWN5Y2xlQXN5bmNJZC5jYWxsKHRoaXMsIHNjaGVkdWxlciwgaWQsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2NoZWR1bGVyLmFjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBJbW1lZGlhdGUuY2xlYXJJbW1lZGlhdGUoaWQpO1xuICAgICAgICAgICAgc2NoZWR1bGVyLnNjaGVkdWxlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgcmV0dXJuIEFzYXBBY3Rpb247XG59KEFzeW5jQWN0aW9uKSk7XG5leHBvcnQgeyBBc2FwQWN0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc2FwQWN0aW9uLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfQXN5bmNTY2hlZHVsZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IEFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi9Bc3luY1NjaGVkdWxlcic7XG52YXIgQXNhcFNjaGVkdWxlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhBc2FwU2NoZWR1bGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzYXBTY2hlZHVsZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQXNhcFNjaGVkdWxlci5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBhY3Rpb25zID0gdGhpcy5hY3Rpb25zO1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIHZhciBpbmRleCA9IC0xO1xuICAgICAgICB2YXIgY291bnQgPSBhY3Rpb25zLmxlbmd0aDtcbiAgICAgICAgYWN0aW9uID0gYWN0aW9uIHx8IGFjdGlvbnMuc2hpZnQoKTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKGVycm9yID0gYWN0aW9uLmV4ZWN1dGUoYWN0aW9uLnN0YXRlLCBhY3Rpb24uZGVsYXkpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKCsraW5kZXggPCBjb3VudCAmJiAoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKSk7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgd2hpbGUgKCsraW5kZXggPCBjb3VudCAmJiAoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBc2FwU2NoZWR1bGVyO1xufShBc3luY1NjaGVkdWxlcikpO1xuZXhwb3J0IHsgQXNhcFNjaGVkdWxlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXNhcFNjaGVkdWxlci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX0FjdGlvbiBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgKiBhcyB0c2xpYl8xIGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnLi9BY3Rpb24nO1xudmFyIEFzeW5jQWN0aW9uID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKEFzeW5jQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFzeW5jQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIHdvcmspIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMud29yayA9IHdvcms7XG4gICAgICAgIF90aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuc2NoZWR1bGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHNjaGVkdWxlciwgaWQsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmlkIHx8IHRoaXMucmVxdWVzdEFzeW5jSWQoc2NoZWR1bGVyLCB0aGlzLmlkLCBkZWxheSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLnJlcXVlc3RBc3luY0lkID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaWQsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKHNjaGVkdWxlci5mbHVzaC5iaW5kKHNjaGVkdWxlciwgdGhpcyksIGRlbGF5KTtcbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5yZWN5Y2xlQXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxheSAhPT0gbnVsbCAmJiB0aGlzLmRlbGF5ID09PSBkZWxheSAmJiB0aGlzLnBlbmRpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBBc3luY0FjdGlvbi5wcm90b3R5cGUuZXhlY3V0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdleGVjdXRpbmcgYSBjYW5jZWxsZWQgYWN0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBlcnJvciA9IHRoaXMuX2V4ZWN1dGUoc3RhdGUsIGRlbGF5KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nID09PSBmYWxzZSAmJiB0aGlzLmlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHRoaXMuc2NoZWR1bGVyLCB0aGlzLmlkLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQXN5bmNBY3Rpb24ucHJvdG90eXBlLl9leGVjdXRlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICB2YXIgZXJyb3JlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgZXJyb3JWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMud29yayhzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgZXJyb3JWYWx1ZSA9ICEhZSAmJiBlIHx8IG5ldyBFcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3JlZCkge1xuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yVmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFzeW5jQWN0aW9uLnByb3RvdHlwZS5fdW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG4gICAgICAgIHZhciBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSBzY2hlZHVsZXIuYWN0aW9ucztcbiAgICAgICAgdmFyIGluZGV4ID0gYWN0aW9ucy5pbmRleE9mKHRoaXMpO1xuICAgICAgICB0aGlzLndvcmsgPSBudWxsO1xuICAgICAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gbnVsbDtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZChzY2hlZHVsZXIsIGlkLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlbGF5ID0gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBBc3luY0FjdGlvbjtcbn0oQWN0aW9uKSk7XG5leHBvcnQgeyBBc3luY0FjdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXN5bmNBY3Rpb24uanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIHRzbGliLF9TY2hlZHVsZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFNjaGVkdWxlciB9IGZyb20gJy4uL1NjaGVkdWxlcic7XG52YXIgQXN5bmNTY2hlZHVsZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoQXN5bmNTY2hlZHVsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXN5bmNTY2hlZHVsZXIoU2NoZWR1bGVyQWN0aW9uLCBub3cpIHtcbiAgICAgICAgaWYgKG5vdyA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBub3cgPSBTY2hlZHVsZXIubm93O1xuICAgICAgICB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIFNjaGVkdWxlckFjdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlICYmIEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlICE9PSBfdGhpcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZS5ub3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBub3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYWN0aW9ucyA9IFtdO1xuICAgICAgICBfdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVkID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEFzeW5jU2NoZWR1bGVyLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICh3b3JrLCBkZWxheSwgc3RhdGUpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUgJiYgQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZS5zY2hlZHVsZSh3b3JrLCBkZWxheSwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUuc2NoZWR1bGUuY2FsbCh0aGlzLCB3b3JrLCBkZWxheSwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBBc3luY1NjaGVkdWxlci5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBhY3Rpb25zID0gdGhpcy5hY3Rpb25zO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgPSBhY3Rpb24uZXhlY3V0ZShhY3Rpb24uc3RhdGUsIGFjdGlvbi5kZWxheSkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB3aGlsZSAoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEFzeW5jU2NoZWR1bGVyO1xufShTY2hlZHVsZXIpKTtcbmV4cG9ydCB7IEFzeW5jU2NoZWR1bGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc3luY1NjaGVkdWxlci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgdHNsaWIsX0FzeW5jQWN0aW9uIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBBc3luY0FjdGlvbiB9IGZyb20gJy4vQXN5bmNBY3Rpb24nO1xudmFyIFF1ZXVlQWN0aW9uID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFF1ZXVlQWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFF1ZXVlQWN0aW9uKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBzY2hlZHVsZXIsIHdvcmspIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgX3RoaXMud29yayA9IHdvcms7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUXVldWVBY3Rpb24ucHJvdG90eXBlLnNjaGVkdWxlID0gZnVuY3Rpb24gKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWxheSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnNjaGVkdWxlLmNhbGwodGhpcywgc3RhdGUsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIuZmx1c2godGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgUXVldWVBY3Rpb24ucHJvdG90eXBlLmV4ZWN1dGUgPSBmdW5jdGlvbiAoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIHJldHVybiAoZGVsYXkgPiAwIHx8IHRoaXMuY2xvc2VkKSA/XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmV4ZWN1dGUuY2FsbCh0aGlzLCBzdGF0ZSwgZGVsYXkpIDpcbiAgICAgICAgICAgIHRoaXMuX2V4ZWN1dGUoc3RhdGUsIGRlbGF5KTtcbiAgICB9O1xuICAgIFF1ZXVlQWN0aW9uLnByb3RvdHlwZS5yZXF1ZXN0QXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZGVsYXkgIT09IG51bGwgJiYgZGVsYXkgPiAwKSB8fCAoZGVsYXkgPT09IG51bGwgJiYgdGhpcy5kZWxheSA+IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5yZXF1ZXN0QXN5bmNJZC5jYWxsKHRoaXMsIHNjaGVkdWxlciwgaWQsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NoZWR1bGVyLmZsdXNoKHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIFF1ZXVlQWN0aW9uO1xufShBc3luY0FjdGlvbikpO1xuZXhwb3J0IHsgUXVldWVBY3Rpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVF1ZXVlQWN0aW9uLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfQXN5bmNTY2hlZHVsZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0ICogYXMgdHNsaWJfMSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IEFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi9Bc3luY1NjaGVkdWxlcic7XG52YXIgUXVldWVTY2hlZHVsZXIgPSAvKkBfX1BVUkVfXyovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHNsaWJfMS5fX2V4dGVuZHMoUXVldWVTY2hlZHVsZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUXVldWVTY2hlZHVsZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFF1ZXVlU2NoZWR1bGVyO1xufShBc3luY1NjaGVkdWxlcikpO1xuZXhwb3J0IHsgUXVldWVTY2hlZHVsZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVF1ZXVlU2NoZWR1bGVyLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCB0c2xpYixfQXN5bmNBY3Rpb24sX0FzeW5jU2NoZWR1bGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCAqIGFzIHRzbGliXzEgZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBBc3luY0FjdGlvbiB9IGZyb20gJy4vQXN5bmNBY3Rpb24nO1xuaW1wb3J0IHsgQXN5bmNTY2hlZHVsZXIgfSBmcm9tICcuL0FzeW5jU2NoZWR1bGVyJztcbnZhciBWaXJ0dWFsVGltZVNjaGVkdWxlciA9IC8qQF9fUFVSRV9fKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0c2xpYl8xLl9fZXh0ZW5kcyhWaXJ0dWFsVGltZVNjaGVkdWxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBWaXJ0dWFsVGltZVNjaGVkdWxlcihTY2hlZHVsZXJBY3Rpb24sIG1heEZyYW1lcykge1xuICAgICAgICBpZiAoU2NoZWR1bGVyQWN0aW9uID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIFNjaGVkdWxlckFjdGlvbiA9IFZpcnR1YWxBY3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heEZyYW1lcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBtYXhGcmFtZXMgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgU2NoZWR1bGVyQWN0aW9uLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5mcmFtZTsgfSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubWF4RnJhbWVzID0gbWF4RnJhbWVzO1xuICAgICAgICBfdGhpcy5mcmFtZSA9IDA7XG4gICAgICAgIF90aGlzLmluZGV4ID0gLTE7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVmlydHVhbFRpbWVTY2hlZHVsZXIucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBhY3Rpb25zID0gX2EuYWN0aW9ucywgbWF4RnJhbWVzID0gX2EubWF4RnJhbWVzO1xuICAgICAgICB2YXIgZXJyb3IsIGFjdGlvbjtcbiAgICAgICAgd2hpbGUgKChhY3Rpb24gPSBhY3Rpb25zWzBdKSAmJiBhY3Rpb24uZGVsYXkgPD0gbWF4RnJhbWVzKSB7XG4gICAgICAgICAgICBhY3Rpb25zLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLmZyYW1lID0gYWN0aW9uLmRlbGF5O1xuICAgICAgICAgICAgaWYgKGVycm9yID0gYWN0aW9uLmV4ZWN1dGUoYWN0aW9uLnN0YXRlLCBhY3Rpb24uZGVsYXkpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB3aGlsZSAoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVmlydHVhbFRpbWVTY2hlZHVsZXIuZnJhbWVUaW1lRmFjdG9yID0gMTA7XG4gICAgcmV0dXJuIFZpcnR1YWxUaW1lU2NoZWR1bGVyO1xufShBc3luY1NjaGVkdWxlcikpO1xuZXhwb3J0IHsgVmlydHVhbFRpbWVTY2hlZHVsZXIgfTtcbnZhciBWaXJ0dWFsQWN0aW9uID0gLypAX19QVVJFX18qLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRzbGliXzEuX19leHRlbmRzKFZpcnR1YWxBY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVmlydHVhbEFjdGlvbihzY2hlZHVsZXIsIHdvcmssIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBpbmRleCA9IHNjaGVkdWxlci5pbmRleCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHNjaGVkdWxlciwgd29yaykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICBfdGhpcy53b3JrID0gd29yaztcbiAgICAgICAgX3RoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgX3RoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgX3RoaXMuaW5kZXggPSBzY2hlZHVsZXIuaW5kZXggPSBpbmRleDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBWaXJ0dWFsQWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGRlbGF5ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnNjaGVkdWxlLmNhbGwodGhpcywgc3RhdGUsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgYWN0aW9uID0gbmV3IFZpcnR1YWxBY3Rpb24odGhpcy5zY2hlZHVsZXIsIHRoaXMud29yayk7XG4gICAgICAgIHRoaXMuYWRkKGFjdGlvbik7XG4gICAgICAgIHJldHVybiBhY3Rpb24uc2NoZWR1bGUoc3RhdGUsIGRlbGF5KTtcbiAgICB9O1xuICAgIFZpcnR1YWxBY3Rpb24ucHJvdG90eXBlLnJlcXVlc3RBc3luY0lkID0gZnVuY3Rpb24gKHNjaGVkdWxlciwgaWQsIGRlbGF5KSB7XG4gICAgICAgIGlmIChkZWxheSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBkZWxheSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWxheSA9IHNjaGVkdWxlci5mcmFtZSArIGRlbGF5O1xuICAgICAgICB2YXIgYWN0aW9ucyA9IHNjaGVkdWxlci5hY3Rpb25zO1xuICAgICAgICBhY3Rpb25zLnB1c2godGhpcyk7XG4gICAgICAgIGFjdGlvbnMuc29ydChWaXJ0dWFsQWN0aW9uLnNvcnRBY3Rpb25zKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBWaXJ0dWFsQWN0aW9uLnByb3RvdHlwZS5yZWN5Y2xlQXN5bmNJZCA9IGZ1bmN0aW9uIChzY2hlZHVsZXIsIGlkLCBkZWxheSkge1xuICAgICAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICBWaXJ0dWFsQWN0aW9uLnByb3RvdHlwZS5fZXhlY3V0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS5fZXhlY3V0ZS5jYWxsKHRoaXMsIHN0YXRlLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZpcnR1YWxBY3Rpb24uc29ydEFjdGlvbnMgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoYS5kZWxheSA9PT0gYi5kZWxheSkge1xuICAgICAgICAgICAgaWYgKGEuaW5kZXggPT09IGIuaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGEuaW5kZXggPiBiLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYS5kZWxheSA+IGIuZGVsYXkpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gVmlydHVhbEFjdGlvbjtcbn0oQXN5bmNBY3Rpb24pKTtcbmV4cG9ydCB7IFZpcnR1YWxBY3Rpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZpcnR1YWxUaW1lU2NoZWR1bGVyLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfQW5pbWF0aW9uRnJhbWVBY3Rpb24sX0FuaW1hdGlvbkZyYW1lU2NoZWR1bGVyIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IEFuaW1hdGlvbkZyYW1lQWN0aW9uIH0gZnJvbSAnLi9BbmltYXRpb25GcmFtZUFjdGlvbic7XG5pbXBvcnQgeyBBbmltYXRpb25GcmFtZVNjaGVkdWxlciB9IGZyb20gJy4vQW5pbWF0aW9uRnJhbWVTY2hlZHVsZXInO1xuZXhwb3J0IHZhciBhbmltYXRpb25GcmFtZSA9IC8qQF9fUFVSRV9fKi8gbmV3IEFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKEFuaW1hdGlvbkZyYW1lQWN0aW9uKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuaW1hdGlvbkZyYW1lLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfQXNhcEFjdGlvbixfQXNhcFNjaGVkdWxlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBBc2FwQWN0aW9uIH0gZnJvbSAnLi9Bc2FwQWN0aW9uJztcbmltcG9ydCB7IEFzYXBTY2hlZHVsZXIgfSBmcm9tICcuL0FzYXBTY2hlZHVsZXInO1xuZXhwb3J0IHZhciBhc2FwID0gLypAX19QVVJFX18qLyBuZXcgQXNhcFNjaGVkdWxlcihBc2FwQWN0aW9uKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzYXAuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9Bc3luY0FjdGlvbixfQXN5bmNTY2hlZHVsZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgQXN5bmNBY3Rpb24gfSBmcm9tICcuL0FzeW5jQWN0aW9uJztcbmltcG9ydCB7IEFzeW5jU2NoZWR1bGVyIH0gZnJvbSAnLi9Bc3luY1NjaGVkdWxlcic7XG5leHBvcnQgdmFyIGFzeW5jID0gLypAX19QVVJFX18qLyBuZXcgQXN5bmNTY2hlZHVsZXIoQXN5bmNBY3Rpb24pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXN5bmMuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9RdWV1ZUFjdGlvbixfUXVldWVTY2hlZHVsZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgUXVldWVBY3Rpb24gfSBmcm9tICcuL1F1ZXVlQWN0aW9uJztcbmltcG9ydCB7IFF1ZXVlU2NoZWR1bGVyIH0gZnJvbSAnLi9RdWV1ZVNjaGVkdWxlcic7XG5leHBvcnQgdmFyIHF1ZXVlID0gLypAX19QVVJFX18qLyBuZXcgUXVldWVTY2hlZHVsZXIoUXVldWVBY3Rpb24pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVldWUuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ltYm9sSXRlcmF0b3IoKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICdmdW5jdGlvbicgfHwgIVN5bWJvbC5pdGVyYXRvcikge1xuICAgICAgICByZXR1cm4gJ0BAaXRlcmF0b3InO1xuICAgIH1cbiAgICByZXR1cm4gU3ltYm9sLml0ZXJhdG9yO1xufVxuZXhwb3J0IHZhciBpdGVyYXRvciA9IC8qQF9fUFVSRV9fKi8gZ2V0U3ltYm9sSXRlcmF0b3IoKTtcbmV4cG9ydCB2YXIgJCRpdGVyYXRvciA9IGl0ZXJhdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXRlcmF0b3IuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5leHBvcnQgdmFyIG9ic2VydmFibGUgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5vYnNlcnZhYmxlIHx8ICdAQG9ic2VydmFibGUnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b2JzZXJ2YWJsZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbmV4cG9ydCB2YXIgcnhTdWJzY3JpYmVyID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gLypAX19QVVJFX18qLyBTeW1ib2woJ3J4U3Vic2NyaWJlcicpXG4gICAgOiAnQEByeFN1YnNjcmliZXJfJyArIC8qQF9fUFVSRV9fKi8gTWF0aC5yYW5kb20oKTtcbmV4cG9ydCB2YXIgJCRyeFN1YnNjcmliZXIgPSByeFN1YnNjcmliZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yeFN1YnNjcmliZXIuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5mdW5jdGlvbiBBcmd1bWVudE91dE9mUmFuZ2VFcnJvckltcGwoKSB7XG4gICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgICB0aGlzLm1lc3NhZ2UgPSAnYXJndW1lbnQgb3V0IG9mIHJhbmdlJztcbiAgICB0aGlzLm5hbWUgPSAnQXJndW1lbnRPdXRPZlJhbmdlRXJyb3InO1xuICAgIHJldHVybiB0aGlzO1xufVxuQXJndW1lbnRPdXRPZlJhbmdlRXJyb3JJbXBsLnByb3RvdHlwZSA9IC8qQF9fUFVSRV9fKi8gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuZXhwb3J0IHZhciBBcmd1bWVudE91dE9mUmFuZ2VFcnJvciA9IEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9ySW1wbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZnVuY3Rpb24gRW1wdHlFcnJvckltcGwoKSB7XG4gICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgICB0aGlzLm1lc3NhZ2UgPSAnbm8gZWxlbWVudHMgaW4gc2VxdWVuY2UnO1xuICAgIHRoaXMubmFtZSA9ICdFbXB0eUVycm9yJztcbiAgICByZXR1cm4gdGhpcztcbn1cbkVtcHR5RXJyb3JJbXBsLnByb3RvdHlwZSA9IC8qQF9fUFVSRV9fKi8gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuZXhwb3J0IHZhciBFbXB0eUVycm9yID0gRW1wdHlFcnJvckltcGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FbXB0eUVycm9yLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xudmFyIG5leHRIYW5kbGUgPSAxO1xudmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbmZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICB2YXIgY2IgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgaWYgKGNiKSB7XG4gICAgICAgIGNiKCk7XG4gICAgfVxufVxuZXhwb3J0IHZhciBJbW1lZGlhdGUgPSB7XG4gICAgc2V0SW1tZWRpYXRlOiBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgdmFyIGhhbmRsZSA9IG5leHRIYW5kbGUrKztcbiAgICAgICAgdGFza3NCeUhhbmRsZVtoYW5kbGVdID0gY2I7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgIH0sXG4gICAgY2xlYXJJbW1lZGlhdGU6IGZ1bmN0aW9uIChoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUltbWVkaWF0ZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbmZ1bmN0aW9uIE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbCgpIHtcbiAgICBFcnJvci5jYWxsKHRoaXMpO1xuICAgIHRoaXMubWVzc2FnZSA9ICdvYmplY3QgdW5zdWJzY3JpYmVkJztcbiAgICB0aGlzLm5hbWUgPSAnT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3InO1xuICAgIHJldHVybiB0aGlzO1xufVxuT2JqZWN0VW5zdWJzY3JpYmVkRXJyb3JJbXBsLnByb3RvdHlwZSA9IC8qQF9fUFVSRV9fKi8gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuZXhwb3J0IHZhciBPYmplY3RVbnN1YnNjcmliZWRFcnJvciA9IE9iamVjdFVuc3Vic2NyaWJlZEVycm9ySW1wbDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9iamVjdFVuc3Vic2NyaWJlZEVycm9yLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZnVuY3Rpb24gVGltZW91dEVycm9ySW1wbCgpIHtcbiAgICBFcnJvci5jYWxsKHRoaXMpO1xuICAgIHRoaXMubWVzc2FnZSA9ICdUaW1lb3V0IGhhcyBvY2N1cnJlZCc7XG4gICAgdGhpcy5uYW1lID0gJ1RpbWVvdXRFcnJvcic7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5UaW1lb3V0RXJyb3JJbXBsLnByb3RvdHlwZSA9IC8qQF9fUFVSRV9fKi8gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuZXhwb3J0IHZhciBUaW1lb3V0RXJyb3IgPSBUaW1lb3V0RXJyb3JJbXBsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VGltZW91dEVycm9yLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZnVuY3Rpb24gVW5zdWJzY3JpcHRpb25FcnJvckltcGwoZXJyb3JzKSB7XG4gICAgRXJyb3IuY2FsbCh0aGlzKTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBlcnJvcnMgP1xuICAgICAgICBlcnJvcnMubGVuZ3RoICsgXCIgZXJyb3JzIG9jY3VycmVkIGR1cmluZyB1bnN1YnNjcmlwdGlvbjpcXG5cIiArIGVycm9ycy5tYXAoZnVuY3Rpb24gKGVyciwgaSkgeyByZXR1cm4gaSArIDEgKyBcIikgXCIgKyBlcnIudG9TdHJpbmcoKTsgfSkuam9pbignXFxuICAnKSA6ICcnO1xuICAgIHRoaXMubmFtZSA9ICdVbnN1YnNjcmlwdGlvbkVycm9yJztcbiAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICByZXR1cm4gdGhpcztcbn1cblVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsLnByb3RvdHlwZSA9IC8qQF9fUFVSRV9fKi8gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuZXhwb3J0IHZhciBVbnN1YnNjcmlwdGlvbkVycm9yID0gVW5zdWJzY3JpcHRpb25FcnJvckltcGw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1VbnN1YnNjcmlwdGlvbkVycm9yLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfU3Vic2NyaWJlciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5leHBvcnQgZnVuY3Rpb24gY2FuUmVwb3J0RXJyb3Iob2JzZXJ2ZXIpIHtcbiAgICB3aGlsZSAob2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIF9hID0gb2JzZXJ2ZXIsIGNsb3NlZF8xID0gX2EuY2xvc2VkLCBkZXN0aW5hdGlvbiA9IF9hLmRlc3RpbmF0aW9uLCBpc1N0b3BwZWQgPSBfYS5pc1N0b3BwZWQ7XG4gICAgICAgIGlmIChjbG9zZWRfMSB8fCBpc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZXN0aW5hdGlvbiAmJiBkZXN0aW5hdGlvbiBpbnN0YW5jZW9mIFN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIG9ic2VydmVyID0gZGVzdGluYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYW5SZXBvcnRFcnJvci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbmV4cG9ydCBmdW5jdGlvbiBob3N0UmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHRocm93IGVycjsgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ob3N0UmVwb3J0RXJyb3IuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkoeCkge1xuICAgIHJldHVybiB4O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWRlbnRpdHkuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5leHBvcnQgdmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IChmdW5jdGlvbiAoeCkgeyByZXR1cm4geCAmJiB0eXBlb2YgeC5sZW5ndGggPT09ICdudW1iZXInOyB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzQXJyYXkuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5leHBvcnQgdmFyIGlzQXJyYXlMaWtlID0gKGZ1bmN0aW9uICh4KSB7IHJldHVybiB4ICYmIHR5cGVvZiB4Lmxlbmd0aCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHggIT09ICdmdW5jdGlvbic7IH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNBcnJheUxpa2UuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNGdW5jdGlvbi5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3N5bWJvbF9vYnNlcnZhYmxlIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dCAmJiB0eXBlb2YgaW5wdXRbU3ltYm9sX29ic2VydmFibGVdID09PSAnZnVuY3Rpb24nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNJbnRlcm9wT2JzZXJ2YWJsZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgX3N5bWJvbF9pdGVyYXRvciBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBpdGVyYXRvciBhcyBTeW1ib2xfaXRlcmF0b3IgfSBmcm9tICcuLi9zeW1ib2wvaXRlcmF0b3InO1xuZXhwb3J0IGZ1bmN0aW9uIGlzSXRlcmFibGUoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQgJiYgdHlwZW9mIGlucHV0W1N5bWJvbF9pdGVyYXRvcl0gPT09ICdmdW5jdGlvbic7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0l0ZXJhYmxlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfaXNBcnJheSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi9pc0FycmF5JztcbmV4cG9ydCBmdW5jdGlvbiBpc051bWVyaWModmFsKSB7XG4gICAgcmV0dXJuICFpc0FycmF5KHZhbCkgJiYgKHZhbCAtIHBhcnNlRmxvYXQodmFsKSArIDEpID49IDA7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc051bWVyaWMuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QoeCkge1xuICAgIHJldHVybiB4ICE9PSBudWxsICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0Jztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzT2JqZWN0LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5leHBvcnQgZnVuY3Rpb24gaXNPYnNlcnZhYmxlKG9iaikge1xuICAgIHJldHVybiAhIW9iaiAmJiAob2JqIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSB8fCAodHlwZW9mIG9iai5saWZ0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc09ic2VydmFibGUuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUICBQVVJFX0lNUE9SVFNfRU5EICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzUHJvbWlzZS5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NjaGVkdWxlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUuc2NoZWR1bGUgPT09ICdmdW5jdGlvbic7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc1NjaGVkdWxlci5qcy5tYXBcbiIsIi8qKiBQVVJFX0lNUE9SVFNfU1RBUlQgIFBVUkVfSU1QT1JUU19FTkQgKi9cbmV4cG9ydCBmdW5jdGlvbiBub29wKCkgeyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub29wLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfbm9vcCBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBub29wIH0gZnJvbSAnLi9ub29wJztcbmV4cG9ydCBmdW5jdGlvbiBwaXBlKCkge1xuICAgIHZhciBmbnMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBmbnNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgcmV0dXJuIHBpcGVGcm9tQXJyYXkoZm5zKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwaXBlRnJvbUFycmF5KGZucykge1xuICAgIGlmICghZm5zKSB7XG4gICAgICAgIHJldHVybiBub29wO1xuICAgIH1cbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZm5zWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gcGlwZWQoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZucy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGZuKSB7IHJldHVybiBmbihwcmV2KTsgfSwgaW5wdXQpO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1waXBlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfT2JzZXJ2YWJsZSxfc3Vic2NyaWJlVG9BcnJheSxfc3Vic2NyaWJlVG9Qcm9taXNlLF9zdWJzY3JpYmVUb0l0ZXJhYmxlLF9zdWJzY3JpYmVUb09ic2VydmFibGUsX2lzQXJyYXlMaWtlLF9pc1Byb21pc2UsX2lzT2JqZWN0LF9zeW1ib2xfaXRlcmF0b3IsX3N5bWJvbF9vYnNlcnZhYmxlIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IHN1YnNjcmliZVRvQXJyYXkgfSBmcm9tICcuL3N1YnNjcmliZVRvQXJyYXknO1xuaW1wb3J0IHsgc3Vic2NyaWJlVG9Qcm9taXNlIH0gZnJvbSAnLi9zdWJzY3JpYmVUb1Byb21pc2UnO1xuaW1wb3J0IHsgc3Vic2NyaWJlVG9JdGVyYWJsZSB9IGZyb20gJy4vc3Vic2NyaWJlVG9JdGVyYWJsZSc7XG5pbXBvcnQgeyBzdWJzY3JpYmVUb09ic2VydmFibGUgfSBmcm9tICcuL3N1YnNjcmliZVRvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0FycmF5TGlrZSB9IGZyb20gJy4vaXNBcnJheUxpa2UnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi9pc1Byb21pc2UnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuL2lzT2JqZWN0JztcbmltcG9ydCB7IGl0ZXJhdG9yIGFzIFN5bWJvbF9pdGVyYXRvciB9IGZyb20gJy4uL3N5bWJvbC9pdGVyYXRvcic7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuZXhwb3J0IHZhciBzdWJzY3JpYmVUbyA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuX2lzU2NhbGFyKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHJlc3VsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnN1YnNjcmliZShzdWJzY3JpYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoISFyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdFtTeW1ib2xfb2JzZXJ2YWJsZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZVRvT2JzZXJ2YWJsZShyZXN1bHQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5TGlrZShyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb0FycmF5KHJlc3VsdCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb1Byb21pc2UocmVzdWx0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoISFyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdFtTeW1ib2xfaXRlcmF0b3JdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVUb0l0ZXJhYmxlKHJlc3VsdCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgdmFsdWUgPSBpc09iamVjdChyZXN1bHQpID8gJ2FuIGludmFsaWQgb2JqZWN0JyA6IFwiJ1wiICsgcmVzdWx0ICsgXCInXCI7XG4gICAgICAgIHZhciBtc2cgPSBcIllvdSBwcm92aWRlZCBcIiArIHZhbHVlICsgXCIgd2hlcmUgYSBzdHJlYW0gd2FzIGV4cGVjdGVkLlwiXG4gICAgICAgICAgICArICcgWW91IGNhbiBwcm92aWRlIGFuIE9ic2VydmFibGUsIFByb21pc2UsIEFycmF5LCBvciBJdGVyYWJsZS4nO1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG1zZyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZVRvLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCAgUFVSRV9JTVBPUlRTX0VORCAqL1xuZXhwb3J0IHZhciBzdWJzY3JpYmVUb0FycmF5ID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW4gJiYgIXN1YnNjcmliZXIuY2xvc2VkOyBpKyspIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVUb0FycmF5LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfc3ltYm9sX2l0ZXJhdG9yIFBVUkVfSU1QT1JUU19FTkQgKi9cbmltcG9ydCB7IGl0ZXJhdG9yIGFzIFN5bWJvbF9pdGVyYXRvciB9IGZyb20gJy4uL3N5bWJvbC9pdGVyYXRvcic7XG5leHBvcnQgdmFyIHN1YnNjcmliZVRvSXRlcmFibGUgPSBmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmFibGVbU3ltYm9sX2l0ZXJhdG9yXSgpO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgIGlmIChpdGVtLmRvbmUpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAodHJ1ZSk7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3IucmV0dXJuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmFkZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vic2NyaWJlcjtcbiAgICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZVRvSXRlcmFibGUuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9zeW1ib2xfb2JzZXJ2YWJsZSBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuZXhwb3J0IHZhciBzdWJzY3JpYmVUb09ic2VydmFibGUgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBvYnMgPSBvYmpbU3ltYm9sX29ic2VydmFibGVdKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzLnN1YnNjcmliZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvdmlkZWQgb2JqZWN0IGRvZXMgbm90IGNvcnJlY3RseSBpbXBsZW1lbnQgU3ltYm9sLm9ic2VydmFibGUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvYnMuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdWJzY3JpYmVUb09ic2VydmFibGUuanMubWFwXG4iLCIvKiogUFVSRV9JTVBPUlRTX1NUQVJUIF9ob3N0UmVwb3J0RXJyb3IgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgaG9zdFJlcG9ydEVycm9yIH0gZnJvbSAnLi9ob3N0UmVwb3J0RXJyb3InO1xuZXhwb3J0IHZhciBzdWJzY3JpYmVUb1Byb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoZXJyKTsgfSlcbiAgICAgICAgICAgIC50aGVuKG51bGwsIGhvc3RSZXBvcnRFcnJvcik7XG4gICAgICAgIHJldHVybiBzdWJzY3JpYmVyO1xuICAgIH07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3Vic2NyaWJlVG9Qcm9taXNlLmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfSW5uZXJTdWJzY3JpYmVyLF9zdWJzY3JpYmVUbyBQVVJFX0lNUE9SVFNfRU5EICovXG5pbXBvcnQgeyBJbm5lclN1YnNjcmliZXIgfSBmcm9tICcuLi9Jbm5lclN1YnNjcmliZXInO1xuaW1wb3J0IHsgc3Vic2NyaWJlVG8gfSBmcm9tICcuL3N1YnNjcmliZVRvJztcbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmVUb1Jlc3VsdChvdXRlclN1YnNjcmliZXIsIHJlc3VsdCwgb3V0ZXJWYWx1ZSwgb3V0ZXJJbmRleCwgZGVzdGluYXRpb24pIHtcbiAgICBpZiAoZGVzdGluYXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgICBkZXN0aW5hdGlvbiA9IG5ldyBJbm5lclN1YnNjcmliZXIob3V0ZXJTdWJzY3JpYmVyLCBvdXRlclZhbHVlLCBvdXRlckluZGV4KTtcbiAgICB9XG4gICAgaWYgKGRlc3RpbmF0aW9uLmNsb3NlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBzdWJzY3JpYmVUbyhyZXN1bHQpKGRlc3RpbmF0aW9uKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1YnNjcmliZVRvUmVzdWx0LmpzLm1hcFxuIiwiLyoqIFBVUkVfSU1QT1JUU19TVEFSVCBfU3Vic2NyaWJlcixfc3ltYm9sX3J4U3Vic2NyaWJlcixfT2JzZXJ2ZXIgUFVSRV9JTVBPUlRTX0VORCAqL1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4uL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgcnhTdWJzY3JpYmVyIGFzIHJ4U3Vic2NyaWJlclN5bWJvbCB9IGZyb20gJy4uL3N5bWJvbC9yeFN1YnNjcmliZXInO1xuaW1wb3J0IHsgZW1wdHkgYXMgZW1wdHlPYnNlcnZlciB9IGZyb20gJy4uL09ic2VydmVyJztcbmV4cG9ydCBmdW5jdGlvbiB0b1N1YnNjcmliZXIobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgIGlmIChuZXh0T3JPYnNlcnZlcikge1xuICAgICAgICBpZiAobmV4dE9yT2JzZXJ2ZXIgaW5zdGFuY2VvZiBTdWJzY3JpYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV4dE9yT2JzZXJ2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHRPck9ic2VydmVyW3J4U3Vic2NyaWJlclN5bWJvbF0pIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0T3JPYnNlcnZlcltyeFN1YnNjcmliZXJTeW1ib2xdKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFuZXh0T3JPYnNlcnZlciAmJiAhZXJyb3IgJiYgIWNvbXBsZXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgU3Vic2NyaWJlcihlbXB0eU9ic2VydmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTdWJzY3JpYmVyKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG9TdWJzY3JpYmVyLmpzLm1hcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==