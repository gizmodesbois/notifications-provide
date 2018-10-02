'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint react/prefer-stateless-function: off */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withNotifications = function withNotifications() {
    return function (WrappedComponent) {
        var notificationHoC = function notificationHoC(props) {
            return _react2.default.createElement(
                _index.NotificationConsumer,
                null,
                function (context) {
                    return _react2.default.createElement(WrappedComponent, _extends({}, props, { notificationsService: context }));
                }
            );
        };

        notificationHoC.contextTypes = {
            notificationsService: _propTypes2.default.shape({}).isRequired
        };

        return notificationHoC;
    };
};

exports.default = withNotifications;