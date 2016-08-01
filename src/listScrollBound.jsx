'use strict';

import React, { Component, PropTypes } from 'react';

class ListScrollBound extends Component {

    constructor (props) {
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

        return (
            <this.props.tagName
                onWheel={this.preventBodyScrolling}
                className={this.props.className}
                onClick={this.props.onClick.bind(this)}
            >
                {this.props.children}
            </this.props.tagName>
        );
    }
}

ListScrollBound.propTypes = {
    tagName: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

ListScrollBound.defaultProps = {
    tagName: 'ul',
    className: null,
    onClick: () => {}
}

module.exports = ListScrollBound;
