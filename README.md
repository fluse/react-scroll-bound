# react-list-scroll-bound
prevent body scrolling, if list border reached, to get a better experience

this is an react ES6 component

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
