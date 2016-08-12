<!--
  - ======
  - Prerequisites
  - ======
 -->

## Prerequisite: Node.js

Install [Node.js®](https://nodejs.org/en/download/) and npm if they are not already on your machine.

<!--
  - ======
  - Step 1
  - ======
 -->

## Step 1: Create the project

### Create the project folder

```bash
mkdir strawberry-quickstart
cd    strawberry-quickstart
```

### Add `package.json`

```json
{
  "name": "strawberry-quickstart",
  "version": "1.0.0",
  "scripts": {
    "start": "npm run build && concurrently \"npm run build:w\" \"npm run serve\" ",
    "build": "node-sass ./ -o ./",
    "build:w": "node-sass ./ -o ./ -w",
    "serve": "lite-server"
  },
  "devDependencies": {
    "concurrently": "^2.2.0",
    "lite-server": "^2.2.2",
    "node-sass": "^3.8.0",
    "strawberry": "1.0.0-alpha.2"
  }
}
```

### Install packages

```bash
npm install
```

<!--
  - ======
  - Step 2
  - ======
 -->

## Step 2: Install Strawberry

```bash
npm install --save-dev strawberry
```

<!--
  - ======
  - Step 3
  - ======
 -->

## Step 3: Import Strawberry

### Create the main file `_main.scss`

Because Strawberry have to be imported in each file. We import it once in `_main.scss` and then we just import the `_main.scss` file to avoid code repetition.

#### _main.scss
```scss
/// <reference path="../node_modules/strawberry/_strawberry.scss" />

@import '../node_modules/strawberry/strawberry';
```

<!--
  - ======
  - Step 4
  - ======
 -->

## Step 4: Create our first component

### Create an app subfolder

```bash
mkdir app
```

### Create the component file `app/my-component.scss`

##### app/my-component.scss
```scss
  @import '../main';

  @include new-component(
   $name: 'my-component', 
   $selector: '[--my-component]', 
   $declarations: (
     'background-color': transparent
     )
   ) { 
   @include dynamic {
     background-color: get('background-color');
   }
   @include static {
     display: inline-block;
   }
  } 
```

#### Import

It's time to include our `_main.scss` file that contain Strawberry.

##### app/my-component.scss (import)
```scss
  @import '../main';
```

#### Component metadata

`new-component` is a *Sass mixin* that Strawberry use to define some data about the component that will be useful in the component style and in the rest of the application. 

##### app/my-component.scss (metadata)
```scss
  @include new-component(
   $name: 'my-component', 
   $selector: '[--my-component]', 
   $declarations: (
     'background-color': transparent,
     'background-color': transparent
     )
   )
```

The **name** is the component's name that will be used in the rest of the application.

The **selector** is the *CSS selector* to access your *HTML element*.

The **declarations** specifies a list of *CSS properties* that can be overridden in the *Strawberry theme file*. The default values for those properties are also provided.

#### Component style

The component style are contained in the `new-component` mixin and contain our *CSS logic*.

##### app/my-component.scss (style)
```scss
  { 
   @include dynamic {
     background-color: get('background-color');
   }
   @include static {
     display: inline-block;
   }
  }
```

The **dynamic** section contain the CSS that will be includes in each component variant. To make a *CSS property* dynamic we have to get it value from the *component declarations* using the `get` function.

The **static** section contain the CSS that will never changed. This section can't have dynamic *CSS properties*.

<!--
  - ======
  - Step 5
  - ======
 -->

## Step 5: Add a theme file

### Create the theme file `_theme.scss`

#### Change our component from the theme file

`component` is *Sass mixin* that selects the component with the same name and overrides his declarations.

`component-variant` is *Sass mixin* that adds a variant to the component selected in the parent mixin. A component variant have its own declarations and its own selector.

##### _theme.scss
```scss
@include component(
  $name: 'my-component',
  $declarations: (
    'background-color': #c1cad6 
    'color': #fff 
    )
  ) {
  @include component-variant(
    $name: 'primary',
    $selector: '[-primary]',
    $declarations: (
      'background-color': #ff1053 
      )
  );
  @include component-variant(
    $name: 'secondary',
    $selector: '[-secondary]',
    $declarations: (
      'background-color': #66c7f4 
      )
  );
}
```

<!--
  - ======
  - Step 6
  - ======
 -->

## Step 6: Use our component

### Create the HTML file `index.html`

##### index.html
```html
<html>
  <head>
    <title>Strawberry QuickStart</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="app/my-component.css">
  </head>

  <body>
    <div --my-component>My Component (default)</div>
    <div --my-component -primary>My Component (primary)</div>
    <div --my-component -secondary>My Component (secondary)</div>
  </body>
</html>
```

<!--
  - ======
  - Step 7
  - ======
 -->

## Step 7: Start the application

```bash
npm start
```