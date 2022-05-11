# bem-helper

> Helper functions to create [BEM](https://en.bem.info/methodology/naming-convention/#two-dashes-style)-style classnames

## Install

```

npm install @dr/bem-helper

```

## Usage

```js

import bem from "@dr/bem-helper";

var className = bem("block", "element", { modifier: true });
// className = "block__element block__element--modifier"

```



## API

* [bem](#bem)
* [bemStyles](#bemstyles)

### bem

A function that creates all applicable combinations of classnames for an element scoped to a block in BEM-style format.

#### Arguments

* `block` (string) - The block element for the classname.
* `...args` (string|object) - Optional. Any number of the following arguments are allowed:
  * `element` (string) - Optional.
  * `modifier` (object) - Optional. Keys are used for modifier names. Values determine whether to turn the modifier off (`false`, `""`, `null` or `undefined`) or on - either through `true` or a value which will be appended to the modifier name; `{modifier: true}` -> `"--modifier"`, `{modifier: "value"}` -> `"--modifier-value"`. Should not follow a previous modifier argument.

#### Examples

###### Basic

```js

var className = bem("block", "element");
// className === "block__element"

```

###### Elements with modifiers

```js

var className = bem("block", { modifier: true });
// className === "block block--modifier"

```

###### Modifiers with values

```js

var className = bem("block", "element", { modifier: "value", modifier2: false });
// className === "block__element block__element--modifier-value"

```

###### Prebinding helpers

```js

var boundBem = bem.bind(null, "block");

var className = boundBem("element", { modifier: true });
// className === "block__element block__element--modifier"

```

### bemStyles

