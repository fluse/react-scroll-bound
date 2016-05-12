# react-list-scroll-bound
prevent body scrolling, if list bottom or top reached.
This brings a better control for user and increase the use experience.

## example

![ScreenShot](/example.png)

build with react 14.x transpilled from ES6 to ES5

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
