<!--
  - ======
  - Header
  - ======
 -->

<!-- == Logo == -->

<p align="center">
    <img height="300" src="https://cdn.rawgit.com/strawberrysass/strawberry-branding/master/logo_1500x1872.png">
</p>

<!-- == Badges == -->

[![NPM version][npm-version-img]][npm-url] 
[![Downloads][npm-downloads-img]][npm-url]
[![Dependency Status][david-dependencies-img]][david-url]
[![devDependency Status][david-dev-dependencies-img]][david-url]
[![Build Status][travis-img]][travis-url]


<!-- == Description == -->

>Strawberry is a Sass framework that makes the life easier for creating, customizing and reusing your own CSS components.

<!--
  - ====
  - Body
  - ====
 -->

<br>

## Usage

[![Join the chat at https://gitter.im/strawberrysass/strawberry](https://badges.gitter.im/strawberrysass/strawberry.svg)](https://gitter.im/strawberrysass/strawberry?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Join the chat at https://gitter.im/strawberrysass/strawberry](https://badges.gitter.im/strawberrysass/strawberry.svg)](https://gitter.im/strawberrysass/strawberry?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### Step 1
**Create** your component.

````scss
@include new-component(
  $name: 'my-component', 
  $selector: '.my-component', 
  $declarations: (
    'background-color': white,
    'color': black
    )
  ) { 
  @include dynamic {
    background-color: get('background-color');
    color: get('color');
  }
}
````

### Step 2
**Edit** your component or create variants of it in the theme file.

````scss
@include component(
  $name: 'my-component',
  $declarations: (
    'background-color': #b71c1c,
    'color': white
    )
  ) {
  @include component-variant(
    $name: 'my-component-variant',
    $selector: '.my-variant',
    $declarations: (
      'background-color': #76ff03,
      'color': black
      )
  );
}
````

### Step 3
**Use** your component and its variants in your application.

````html
<div class="my-component">MY COMPONENT</div>
<div class="my-component my-variant">MY COMPONENT'S VARIANT</div>
````

<br>

## Features

Easy to Use | Fast & Effective | Built to Last
----------- | ---------------- | -------------
The simplicity is a priority and it's why Strawberry are built to be easy to use and easy to read. | Outputs only the needed css to make your application smaller and faster | Built with the popular Sass language and thinked to work with the very new technologies.

<br>

## Installation

````bash
npm install strawberry
````

<br>

## License

MIT

<!--
  - ==========
  - Ressources
  - ==========
 -->

[npm-url]: https://www.npmjs.com/package/strawberry
[npm-version-img]: http://img.shields.io/npm/v/strawberry.svg?style=flat-square
[npm-downloads-img]: http://img.shields.io/npm/dt/strawberry.svg?style=flat-square

[david-url]: https://david-dm.org/strawberrysass/strawberry
[david-dependencies-img]: https://img.shields.io/david/strawberrysass/strawberry.svg?style=flat-square
[david-dev-dependencies-img]: https://img.shields.io/david/dev/strawberrysass/strawberry.svg?style=flat-square

[travis-url]: https://travis-ci.org/strawberrysass/strawberry
[travis-img]: https://img.shields.io/travis/strawberrysass/strawberry.svg?style=flat-square
