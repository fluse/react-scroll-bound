# react-scroll-bound

Prevent scrolling on parent element if list reached end or start.

Brings a better control for user and increase use experience.

**[Watch Demo](https://fluse.github.io/react-scroll-bound/)**

supports react 15.x and 16.x

## Install

```
npm install react-scroll-bound --save
```

## Usage

```jsx
import ScrollBound from 'react-scroll-bound'

<ScrollBound>
    {this.getListPoints()}
</ScrollBound>
```

Set css for element overflow scroll

```css
.my-class-name {
    max-height: 250px;
    overflow-y: auto;
}
```

### Change HTML-Tag

default tagName is `<ul>`

```jsx
<ScrollBound tagName="div">
    {this.getListPoints()}
</ScrollBound>
```

### Set properties

all attributes and properties will transmitted with `{...this.props}`

```jsx
<ScrollBound 
    id="name" 
    onWheel={onWheel} 
    onClick={onClick} 
    className="my-list"
>
    {this.getListPoints()}
</ScrollBound>
```

## Development

if you want to add or optimize this component, feel free <3

#### Run Dev Server

```
npm start
```

### Compile to ES5

```
npm run compile
```

## Give me a coffee

[![Donate](https://img.shields.io/badge/donate-%20%E2%9D%A4%20-green.svg)](https://www.paypal.me/schauf)

[get in touch?](http://www.holger-schauf.de)
