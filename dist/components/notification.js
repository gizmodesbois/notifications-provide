'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notification = function Notification(_ref) {
    var id = _ref.id,
        title = _ref.title,
        message = _ref.message,
        type = _ref.type,
        timer = _ref.timer,
        remove = _ref.remove;
    return _react2.default.createElement(
        'li',
        { className: 'notification ' + type, 'data-purpose': 'notification_section' },
        _react2.default.createElement(
            'span',
            { className: 'material-icons notification-icon' },
            _constants.notificationsIcons[type]
        ),
        _react2.default.createElement(
            'span',
            { className: 'notification-content' },
            _react2.default.createElement(
                'span',
                { className: 'notification-title', 'data-purpose': 'title' },
                title
            ),
            _react2.default.createElement(
                'span',
                { className: 'notification-message', 'data-purpose': 'message' },
                message
            )
        ),
        _react2.default.createElement(
            'button',
            { type: 'button', className: 'notification-close', onClick: function onClick() {
                    remove(id);
                } },
            _react2.default.createElement(
                'svg',
                null,
                _react2.default.createElement('circle', { r: '18', cx: '20', cy: '20', style: { animationDuration: timer / 1000 + 's' } })
            ),
            _react2.default.createElement(
                'span',
                { className: 'material-icons notification-icon-close' },
                'close'
            )
        )
    );
};

Notification.propTypes = {
    id: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string.isRequired,
    message: _propTypes2.default.string.isRequired,
    type: _propTypes2.default.string.isRequired,
    remove: _propTypes2.default.func.isRequired,
    timer: _propTypes2.default.number.isRequired
};

exports.default = Notification;