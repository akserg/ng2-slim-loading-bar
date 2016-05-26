System.registerDynamic("src/component", ["@angular/core", "@angular/common/src/facade/lang", "@angular/common", "./service"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var lang_1 = $__require('@angular/common/src/facade/lang');
  var common_1 = $__require('@angular/common');
  var service_1 = $__require('./service');
  var SlimLoadingBar = (function() {
    function SlimLoadingBar(service) {
      this.service = service;
      this._progress = '0%';
      this.color = 'firebrick';
      this.height = '2px';
      this.show = true;
    }
    Object.defineProperty(SlimLoadingBar.prototype, "progress", {
      get: function() {
        return this._progress;
      },
      set: function(value) {
        if (lang_1.isPresent(value)) {
          this._progress = value + '%';
        }
      },
      enumerable: true,
      configurable: true
    });
    SlimLoadingBar.prototype.ngOnInit = function() {
      var _this = this;
      this.service.observable.subscribe(function(event) {
        if (event.type === service_1.SlimLoadingBarEventType.PROGRESS) {
          _this.progress = event.value;
        } else if (event.type === service_1.SlimLoadingBarEventType.COLOR) {
          _this.color = event.value;
        } else if (event.type === service_1.SlimLoadingBarEventType.HEIGHT) {
          _this.height = event.value;
        } else if (event.type === service_1.SlimLoadingBarEventType.VISIBLE) {
          _this.show = event.value;
        }
      });
    };
    __decorate([core_1.Input(), __metadata('design:type', String), __metadata('design:paramtypes', [String])], SlimLoadingBar.prototype, "progress", null);
    __decorate([core_1.Input(), __metadata('design:type', String)], SlimLoadingBar.prototype, "color", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], SlimLoadingBar.prototype, "height", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], SlimLoadingBar.prototype, "show", void 0);
    SlimLoadingBar = __decorate([core_1.Component({
      selector: 'ng2-slim-loading-bar',
      directives: [common_1.CORE_DIRECTIVES],
      template: "\n<div class=\"slim-loading-bar\">\n    <div class=\"slim-loading-bar-progress\" [style.width]=\"progress\" [style.backgroundColor]=\"color\" [style.color]=\"color\"\n        [style.height]=\"height\" [style.opacity]=\"show ? '1' : '0'\"></div>\n</div>"
    }), __metadata('design:paramtypes', [service_1.SlimLoadingBarService])], SlimLoadingBar);
    return SlimLoadingBar;
  }());
  exports.SlimLoadingBar = SlimLoadingBar;
  return module.exports;
});

System.registerDynamic("src/service", ["@angular/core", "@angular/common/src/facade/lang", "rxjs/Observable"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('@angular/core');
  var lang_1 = $__require('@angular/common/src/facade/lang');
  var Observable_1 = $__require('rxjs/Observable');
  (function(SlimLoadingBarEventType) {
    SlimLoadingBarEventType[SlimLoadingBarEventType["PROGRESS"] = 0] = "PROGRESS";
    SlimLoadingBarEventType[SlimLoadingBarEventType["HEIGHT"] = 1] = "HEIGHT";
    SlimLoadingBarEventType[SlimLoadingBarEventType["COLOR"] = 2] = "COLOR";
    SlimLoadingBarEventType[SlimLoadingBarEventType["VISIBLE"] = 3] = "VISIBLE";
  })(exports.SlimLoadingBarEventType || (exports.SlimLoadingBarEventType = {}));
  var SlimLoadingBarEventType = exports.SlimLoadingBarEventType;
  var SlimLoadingBarEvent = (function() {
    function SlimLoadingBarEvent(type, value) {
      this.type = type;
      this.value = value;
    }
    return SlimLoadingBarEvent;
  }());
  exports.SlimLoadingBarEvent = SlimLoadingBarEvent;
  var SlimLoadingBarService = (function() {
    function SlimLoadingBarService() {
      var _this = this;
      this._progress = 0;
      this._height = '2px';
      this._color = 'firebrick';
      this._visible = true;
      this._intervalCounterId = 0;
      this.interval = 500;
      this.observable = new Observable_1.Observable(function(subscriber) {
        _this.subscriber = subscriber;
      });
    }
    Object.defineProperty(SlimLoadingBarService.prototype, "progress", {
      get: function() {
        return this._progress;
      },
      set: function(value) {
        if (lang_1.isPresent(value)) {
          if (value > 0) {
            this.visible = true;
          }
          this._progress = value;
          this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.PROGRESS, this._progress));
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SlimLoadingBarService.prototype, "height", {
      get: function() {
        return this._height;
      },
      set: function(value) {
        if (lang_1.isPresent(value)) {
          this._height = value;
          this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.HEIGHT, this._height));
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SlimLoadingBarService.prototype, "color", {
      get: function() {
        return this._color;
      },
      set: function(value) {
        if (lang_1.isPresent(value)) {
          this._color = value;
          this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.COLOR, this._color));
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(SlimLoadingBarService.prototype, "visible", {
      get: function() {
        return this._visible;
      },
      set: function(value) {
        if (lang_1.isPresent(value)) {
          this._visible = value;
          this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.VISIBLE, this._visible));
        }
      },
      enumerable: true,
      configurable: true
    });
    SlimLoadingBarService.prototype.emitEvent = function(event) {
      try {
        this.subscriber.next(event);
      } catch (e) {
        console.log('!!! Suggestion: Seems you forget add <ng2-slim-loading-bar></ng2-slim-loading-bar> into your html?');
      }
    };
    SlimLoadingBarService.prototype.start = function(onCompleted) {
      var _this = this;
      if (onCompleted === void 0) {
        onCompleted = null;
      }
      this.stop();
      this.visible = true;
      this._intervalCounterId = setInterval(function() {
        _this.progress++;
        if (_this.progress === 100) {
          _this.complete();
        }
      }, this.interval);
    };
    SlimLoadingBarService.prototype.stop = function() {
      if (this._intervalCounterId) {
        clearInterval(this._intervalCounterId);
        this._intervalCounterId = null;
      }
    };
    SlimLoadingBarService.prototype.reset = function() {
      this.stop();
      this.progress = 0;
    };
    SlimLoadingBarService.prototype.complete = function() {
      var _this = this;
      this.progress = 100;
      this.stop();
      setTimeout(function() {
        _this.visible = false;
        setTimeout(function() {
          _this.progress = 0;
        }, 250);
      }, 250);
    };
    SlimLoadingBarService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], SlimLoadingBarService);
    return SlimLoadingBarService;
  }());
  exports.SlimLoadingBarService = SlimLoadingBarService;
  return module.exports;
});

System.registerDynamic("ng2-slim-loading-bar", ["./src/component", "./src/service"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  var component_1 = $__require('./src/component');
  var service_1 = $__require('./src/service');
  __export($__require('./src/component'));
  __export($__require('./src/service'));
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.default = {
    providers: [service_1.SlimLoadingBarService],
    directives: [component_1.SlimLoadingBar]
  };
  return module.exports;
});
