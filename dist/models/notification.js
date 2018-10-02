'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = require('../constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var uuid = function uuid() {
    var s4 = function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return '' + s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

var NotificationModel = function NotificationModel(_ref) {
    var title = _ref.title,
        message = _ref.message,
        type = _ref.type,
        timer = _ref.timer;

    _classCallCheck(this, NotificationModel);

    this.id = uuid();
    this.title = title;
    this.message = message;
    this.type = type || 'success';
    this.timer = timer || _constants.NOTIFICATION_TIMER;
};

exports.default = NotificationModel;