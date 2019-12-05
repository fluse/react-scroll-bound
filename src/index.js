import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ScrollBound from './scrollBound.jsx'

import css from './index.css';

class App extends Component {
   
    getListElements() {
        return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].map((entry, key) => {
            return (
                <li key={key}>{entry}</li>
            )
        })
    }

    render() {

        return (
            <section>
                <h1>
                    <strong>Prevent Scrolling of Parent</strong>
                    <small>react-list-scroll-bound</small>
                </h1>

                <p>When an children reach end of scrolling, stop scrolling of parent elements</p>

                <a href="https://github.com/fluse/react-list-scroll-bound" className="docu" target="_blank">Checkout Documentation</a>
                <a href="https://www.npmjs.com/package/react-list-scroll-bound" className="npm" target="_blank">NPM Package</a>

                <h2>Example</h2>

                <div className="container">
                    <div className="grd-2">
                        <h3>Prevent Parent Scroll</h3>
                        <ScrollBound className="scroll-list">
                            {this.getListElements()}
                        </ScrollBound>
                    </div>

                    <div className="grd-2">
                        <h3>Default Behavior</h3>
                        <ul className="scroll-list">
                            {this.getListElements()}
                        </ul>
                    </div>
                </div>

            </section>
        )
    }
}

const app = document.querySelector("main");
app ? ReactDOM.render(<App />, app) : false;
