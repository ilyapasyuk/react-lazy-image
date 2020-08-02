# react-lazy-image-loader
 
Simple lazy loader for React.js
+ TypeScript ready

![size](https://img.shields.io/bundlephobia/min/react-lazy-image-loader.svg)
![](https://img.shields.io/npm/v/react-lazy-image-loader.svg?style=flat-square)

[NPM](https://www.npmjs.com/package/react-lazy-image-loader) |
[Github](https://github.com/ilyapasyuk/react-lazy-image-loader) |
[Feature request](https://github.com/ilyapasyuk/react-lazy-image-loader/issues/new)

### Installation

* `npm install --react-lazy-image-loader`
* `yarn add react-lazy-image-loader`

### How To Use

First import this component where you want to use it

`import LazyImage from react-lazy-image-loader"`

Then just renders it

`<LazyImage src="./link/to/source.jpg" alt="avatar" height={30} width={30} borderRadius={4} />`

### Props

|      _Prop_     |       _type_              | _Default value_ |
| --------------- |   :-------------------:   | :-------------: |
| src             |   string                  |      none       |
| alt             |   string                  |      none       |
| height          |   number?                 |      none       |
| width           |   number?                 |      none       |
| borderRadius    |   number?                 |      2          |

### Example

``` jsx
import React from "react";
import LazyImage from 'react-lazy-image-loader';


const App = () => {
    return (
        <LazyImage src="./link/to/source.jpg" alt="avatar" height={30} width={30} borderRadius={4} />
    );
}

export { App };
```
