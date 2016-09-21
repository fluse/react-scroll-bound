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

        this.props.onWheel();
    }

    render() {

        return (
            <this.props.tagName
                id={this.props.id}
                onWheel={this.preventBodyScrolling.bind(this)}
                className={this.props.className}
                onClick={this.props.onClick.bind(this)}
            >
                {this.props.children}
            </this.props.tagName>
        );
    }
}

ListScrollBound.propTypes = {
    id: PropTypes.string,
    tagName: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    onWheel: PropTypes.func
}

ListScrollBound.defaultProps = {
    id: null,
    tagName: 'ul',
    className: null,
    onClick: () => {},
    onWheel: () => {}
}

module.exports = ListScrollBound;
