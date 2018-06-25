# react-list-scroll-bound
prevent body scrolling on list bottom or top end.
Brings a better control for user and increase use experience.

## example

![ScreenShot](/example.png)

supports react 15.x and 16.x

[![npm package](https://nodei.co/npm/react-list-scroll-bound.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-list-scroll-bound/)
[![NPM](https://nodei.co/npm-dl/react-list-scroll-bound.png?months=6&height=3)](https://www.npmjs.com/package/react-list-scroll-bound)

## install

```
> npm install react-list-scroll-bound --save
```

## how to use

```jsx

<ListScrollBound className="my-list">
    {this.getListPoints()}
</ListScrollBound>

```

### set html tag

default tagName is `<ul>`

```jsx

<ListScrollBound tagName="div" className="my-list">
    {this.getListPoints()}
</ListScrollBound>

```

### get events

```jsx

let onWheel = function (event) {
    console.log(event)
}

let onClick = function (event) {
    console.log(event)
}

<ListScrollBound onWheel={onWheel} onClick={onClick} className="my-list">
    {this.getListPoints()}
</ListScrollBound>

```

### set more propTypes

all given properties will set on the given ListScrollBound element, with

`{...this.props}`

so you can set all what you want and need

```jsx

<ListScrollBound tagName="div" className="my-list" onChange onClick>
    {this.getListPoints()}
</ListScrollBound>

```

### Development

if you want to add or optimize this component, feel free <3

clone this repository and run install

```
npm install
```

and after changes compile es6 to es5

```
npm run compile
```

## Give me a coffee

[![Donate](https://img.shields.io/badge/donate-%20%E2%9D%A4%20-green.svg)](https://www.paypal.me/schauf)

[get in touch?](http://www.holger-schauf.de)
