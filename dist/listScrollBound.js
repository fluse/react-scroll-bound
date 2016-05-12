'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component, PropTypes } from 'react';

class ListScrollBound extends Component {

    constructor(props) {
        super(props);
    }

    preventBodyScrolling(e) {
        const el = e.currentTarget;

        if (el.clientHeight + el.scrollTop + e.deltaY >= el.scrollHeight) {
            e.preventDefault();
            el.scrollTop = el.scrollHeight;
        } else if (el.scrollTop + e.deltaY <= 0) {
            e.preventDefault();
            el.scrollTop = 0;
        }
    }

    render() {

        return React.createElement(
            this.props.tagName,
            _extends({ onWheel: this.preventBodyScrolling }, this.props),
            this.props.children
        );
    }
}

ListScrollBound.propTypes = {
    tagName: PropTypes.string,
    className: PropTypes.string
};

ListScrollBound.defaultProps = {
    tagName: 'ul',
    className: null
};

module.exports = ListScrollBound;
