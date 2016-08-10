

Strawberry is a Sass framework to create, customize and reuse your own CSS components in a easy way.

## In progress...

<!--
  - ======
  - Header
  - ======
 -->

<!-- == Logo == -->

<p align="center">
    <img height="300" src="https://cdn.rawgit.com/strawberrysass/strawberry-branding/master/strawberry-logo.png">
</p>

<!-- == Badges == -->

[![NPM version][npm-version-img]][npm-url] [![Downloads][npm-downloads-img]][npm-url] 

<!-- == Description == -->

>Strawberry is a Sass framework that makes the life easier for creating, customizing and reusing your own CSS components.

<!--
  - Nav
  - ======
 -->

 #### Quick links
 [Getting started](https://github.com/strawberrysass/strawberry/blob/master/GETTING_STARTED.md),

<!--
  - ====
  - Body
  - ====
 -->

<br>

## How it works

* ### Component creation
  ```scss
  @include new-component(
   $name: 'greeting', 
   $selector: '[[greeting]]', 
   $declarations: (
     'background-color': transparent,
     'color': black
     )
   ) { 
   @include public {
     background-color: get('background-color');
     color: get('color');
   }
   @include private {
     font-size: 1.5rem;
   }
  } 
  ```
* ### Component configuration
  ```scss
  @include component(
    $name: 'greeting',
    $declarations: (
      'background-color': white
      )
    ) {
    @include component-variant(
      $name: 'dark',
      $selector: '[--dark]',
      $declarations: (
        'background-color': black,
        'color': white
      )
    );
  }
  ```
* ### Component utilisation
  ```html
  <p --greeting>Greeting</p> <!-- { backgroud-color: white; color: black; font-size: 1.5rem; } -->
  <p --greeting -dark>Greeting</p> <!-- { backgroud-color: black; color: white; font-size: 1.5rem; } -->
  ```

<br>

<!--
  - ======
  - Footer
  - ======
 -->

## License
MIT

<!--
  - ==========
  - Ressources
  - ==========
 -->

[npm-url]: https://www.npmjs.com/package/strawberry
[npm-version-img]: http://img.shields.io/npm/v/strawberry.svg?style=flat-square
[npm-downloads-img]: http://img.shields.io/npm/dm/strawberry.svg?style=flat-square