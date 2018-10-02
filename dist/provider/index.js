'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NotificationConsumer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _notification = require('./components/notification');

var _notification2 = _interopRequireDefault(_notification);

var _notifications = require('./service/notifications');

var _notifications2 = _interopRequireDefault(_notifications);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationContext = _react2.default.createContext('notification');

// Build notification list
var notificationList = document.createElement('div');
notificationList.id = 'notifications';
document.body.appendChild(notificationList);

var NotificationPortal = function NotificationPortal(_ref) {
    var children = _ref.children;

    return _reactDom2.default.createPortal(children, notificationList);
};

var NotificationsProvider = function (_React$Component) {
    _inherits(NotificationsProvider, _React$Component);

    function NotificationsProvider(props) {
        _classCallCheck(this, NotificationsProvider);

        var _this = _possibleConstructorReturn(this, (NotificationsProvider.__proto__ || Object.getPrototypeOf(NotificationsProvider)).call(this, props));

        _this.state = {
            notifications: []
        };

        _this.notificationsService = new _notifications2.default();
        return _this;
    }

    _createClass(NotificationsProvider, [{
        key: 'getChildContext',
        value: function getChildContext() {
            var notificationsService = this.notificationsService;

            return { notificationsService: notificationsService };
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.notificationsSubscription = this.notificationsService.subscribe(function (notifications) {
                _this2.setState({
                    notifications: notifications
                });
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.notificationsSubscription.unsubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                children = _props.children,
                notificationComponent = _props.notificationComponent;
            var notifications = this.state.notifications;

            var NotificationComp = notificationComponent;
            return _react2.default.createElement(
                NotificationContext.Provider,
                { value: this.notificationsService },
                children,
                _react2.default.createElement(
                    NotificationPortal,
                    null,
                    notifications.map(function (notif) {
                        return _react2.default.createElement(NotificationComp, _extends({}, _extends({}, notif), {
                            key: notif.id,
                            remove: _this3.notificationsService.remove
                        }));
                    })
                )
            );
        }
    }]);

    return NotificationsProvider;
}(_react2.default.Component);

NotificationsProvider.propTypes = {
    children: _propTypes2.default.node.isRequired,
    notificationComponent: _propTypes2.default.func
};

NotificationsProvider.defaultProps = {
    notificationComponent: _notification2.default
};

NotificationsProvider.childContextTypes = {
    notificationsService: _propTypes2.default.shape({}).isRequired
};

var NotificationConsumer = exports.NotificationConsumer = NotificationContext.Consumer;

exports.default = NotificationsProvider;