'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListScrollBound = function (_Component) {
    _inherits(ListScrollBound, _Component);

    function ListScrollBound(props) {
        _classCallCheck(this, ListScrollBound);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ListScrollBound).call(this, props));
    }

    _createClass(ListScrollBound, [{
        key: 'preventBodyScrolling',
        value: function preventBodyScrolling(e) {

            var el = e.currentTarget;

            if (el.clientHeight + el.scrollTop + e.deltaY >= el.scrollHeight) {
                e.preventDefault();
                el.scrollTop = el.scrollHeight;
            } else if (el.scrollTop + e.deltaY <= 0) {
                e.preventDefault();
                el.scrollTop = 0;
            }

            this.props.onWheel();
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                this.props.tagName,
                {
                    id: this.props.id,
                    onWheel: this.preventBodyScrolling,
                    className: this.props.className,
                    onClick: this.props.onClick.bind(this)
                },
                this.props.children
            );
        }
    }]);

    return ListScrollBound;
}(_react.Component);

ListScrollBound.propTypes = {
    id: _react.PropTypes.string,
    tagName: _react.PropTypes.string,
    className: _react.PropTypes.string,
    onClick: _react.PropTypes.func,
    onWheel: _react.PropTypes.func
};

ListScrollBound.defaultProps = {
    id: null,
    tagName: 'ul',
    className: null,
    onClick: function onClick() {},
    onWheel: function onWheel() {}
};

module.exports = ListScrollBound;
