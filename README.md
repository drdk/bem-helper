# bem-helper

> Helper functions to create [BEM](https://en.bem.info/methodology/naming-convention/#two-dashes-style)-style classnames

## Install

```

npm install @drdk/bem-helper

```

## Usage

```js

import bh from "@drdk/bem-helper";

// At the top of your component; create a bem function with prebound parameters:
const bem = bh('block');

// Further down; use the bem function to output BEM-style classnames:
return (
  <div className={bem()}>
    <div className={bem("element", { modifier: true })}>
      { /*  */ }
    </div>;
  </div>
);

// equals:
// <div className="block">
//   <div className="block__element block__element--modifier">
//     { /*  */ }
//   </div>;
// </div>

```


#### With CSS modules

To use @drdk/bem-helper with CSS modules, import your styles as an object as usual.
Then just add the `styles` object as a second parameter when creating the bem function: 

```js

import bh from "@drdk/bem-helper";

import styles from "./MyComponent.module.scss";

// At the top of your component; create a bem function with prebound parameters:
const bem = bh('block', styles);

// Further down; use the bem function to output BEM-style classnames:
return (
  <div className={bem()}>
    <div className={bem("element", { modifier: true })}>
      { /*  */ }
    </div>;
  </div>
);

// equals:
// <div className="block__f874i">
//   <div className="block__element__hxvxn block__element--modifier__nb3t8">
//     { /*  */ }
//   </div>;
// </div>

```


## API

* [bemHelper](#bemHelper)
* [bem](#bem)


### bemHelper

A helper function that returns a function to create BEM-style classnames, prebound with the parameters given.

CSS modules is supported via the `styles` param.

#### Arguments

* `block` (string) - The block element.
* `styles` (object) - An optional CSS modules styles object.

#### Returns

A bem function with prebound parameters.

#### Examples

###### Basic

```js

import bh from "@drdk/bem-helper";

const bem = bh('block');

```

###### With CSS modules

```js

import bh from "@drdk/bem-helper";

import styles from "./MyComponent.module.scss";

const bem = bh('block', styles);

```

### bem

A function that returns BEM-style classnames.

#### Arguments

* `element` (string) - Optional. The element for the classname.
* `modifier` (object) - An optional modifier (object); Keys are used for modifier names. Values determine whether to turn the modifier off (`false`, `""`, `null` or `undefined`) or on - either through `true` or a value which will be appended to the modifier name; `{modifier: true}` -> `"--modifier"`, `{modifier: "value"}` -> `"--modifier-value"`.

#### Returns

A string with BEM-style classnames.

#### Examples

###### Basic

```js

const bem = bh('block');

var className = bem("element");
// className === "block__element"

```

###### With modifiers

```js

const bem = bh('block');

var className = bem({ modifier: true });
// className === "block block--modifier"

```

###### Element and modifiers with values

```js

const bem = bh('block');

var className = bem("element", { modifier: "value", modifier2: false });
// className === "block__element block__element--modifier-value"

```