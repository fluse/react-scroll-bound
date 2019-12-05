import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ListScrollBound extends Component {

    static propTypes = {
        tagName: PropTypes.string,
        onWheel: PropTypes.func
    }
    
    static defaultProps = {
        tagName: 'ul',
        onWheel: () => {}
    }

    componentDidMount() {
        this.scroller.addEventListener('wheel', this.onWheel.bind(this))
    }

    componentWillUnmount() {
        this.scroller.removeEventListener('wheel', this.onWheel.bind(this))
    }

    onWheel(e) {
        const el = e.currentTarget;

        if (el.clientHeight + el.scrollTop + e.deltaY >= el.scrollHeight) {
            e.preventDefault()
            el.scrollTop = el.scrollHeight
        } else if (el.scrollTop + e.deltaY <= 0) {
            e.preventDefault()
            el.scrollTop = 0
        }

        this.props.onWheel(e)

    }

    render() {
        
        let Tag = this.props.tagName

        let props = Object.assign({}, this.props)
        delete props.tagName

        return (
            <Tag
                ref={ref => this.scroller = ref}
                {...props}
            >
                {this.props.children}
            </Tag>
        )
    }
}