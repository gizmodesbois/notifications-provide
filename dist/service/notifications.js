'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _observer = require('./observer');

var _observer2 = _interopRequireDefault(_observer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationsService = function (_Observer) {
    _inherits(NotificationsService, _Observer);

    function NotificationsService() {
        _classCallCheck(this, NotificationsService);

        var _this = _possibleConstructorReturn(this, (NotificationsService.__proto__ || Object.getPrototypeOf(NotificationsService)).call(this));

        _this.notifications = [];
        _this.timers = [];
        return _this;
    }

    _createClass(NotificationsService, [{
        key: 'add',
        value: function add(notification) {
            var _this2 = this;

            this.timers[notification.id] = setTimeout(function () {
                _this2.remove(notification.id);
            }, notification.timer);
            this.notifications.push(notification);
            this.broadcast(this.notifications);
        }
    }, {
        key: 'remove',
        value: function remove(notificationId) {
            clearTimeout(this.timers[notificationId]);
            this.notifications = this.notifications.filter(function (notif) {
                return notif.id !== notificationId;
            });
            this.broadcast(this.notifications);
        }
    }]);

    return NotificationsService;
}(_observer2.default);

exports.default = NotificationsService;