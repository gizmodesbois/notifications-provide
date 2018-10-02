"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observer = function () {
    function Observer() {
        _classCallCheck(this, Observer);

        this.observers = [];
    }

    _createClass(Observer, [{
        key: "subscribe",
        value: function subscribe(observer) {
            this.observers.push(observer);
        }
    }, {
        key: "unsubscribe",
        value: function unsubscribe(observer) {
            this.observers = this.observers.filter(function (subscriber) {
                return subscriber !== observer;
            });
        }
    }, {
        key: "broadcast",
        value: function broadcast(obj) {
            var _this = this;

            this.observers.forEach(function (observer) {
                return observer.call(_this, obj);
            });
        }
    }]);

    return Observer;
}();

exports.default = Observer;