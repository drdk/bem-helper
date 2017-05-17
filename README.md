# bem-helper

> Helper functions to create [BEM](https://en.bem.info/methodology/naming-convention/#two-dashes-style)-style classnames


```js

var className = bem("block", "element", {modifier: true});
// className === "element block__element element--modifier block__element--modifier"
//                        ^^^^^^^^^^^^^^                   ^^^^^^^^^^^^^^^^^^^^^^^^
//                         _____/              _____________________/
//                        /                   /
// bem.scoped -> "block__element block__element--modifier"
//                               ^^^^^^^^^^^^^^^^^^^^^^^^
//                              ___________/
//                             /
// bem.single -> "block__element--modifier"

```

## Install

```

npm install @dr/bem-helper

```

## Usage

```js

var bem = require("@dr/bem-helper");

var className = bem("block", "element", { modifier: true });
// className === "element block__element element--modifier block__element--modifier"

```



## API

* [bem](#bem)
* [bem.scoped](#bemscoped)
* [bem.single](#bemsingle)

### bem

A function that creates all applicable combinations of classnames for an element in BEM-style.

#### Arguments

* `block` (string) - The block element for the classname.
* `...args` (string|object) - Optional. Any number of the following arguments are allowed:
  * `element` (string) - Optional.
  * `modifier` (object) - Optional. Keys are used for modifier names. Values determine whether to turn the modifier off (`false`, `""`, `null` or `undefined`) or on - either through `true` or a value which will be appended to the modifier name; `{modifier: true}` -> `"--modifier"`, `{modifier: "value"}` -> `"--modifier-value"`. Should not follow a previous modifier argument.

#### Examples

###### Basic

```js

var className = bem("block", "element");
// className === "element block__element"

```

###### Elements with modifiers

```js

var className = bem("block", "element", { modifier: true });
// className === "block__element--modifier"

```

###### Modifiers with values

```js

var className = bem("block", "element", { modifier: "value", modifier2: false });
// className === "element block__element element--modifier-value block__element--modifier-value"

```

###### Prebinding helpers

```js

var boundBem = bem.bind(null, "block");

var className = boundBem("element", { modifier: true });
// className === "element block__element element--modifier block__element--modifier"

```


### bem.scoped

Same as [bem](#bem) - but it returns a fully scoped classname.

#### Examples

###### Basic

```js

var className = bem.scoped("block", "element");
// className === "block__element"

```

###### Elements with modifiers

```js

var className = bem.scoped("block", { modifier: true });
// className === "block block--modifier"

```

###### Modifiers with values

```js

var className = bem.scoped("block", "element", { modifier: "value", modifier2: false });
// className === "block__element block__element--modifier-value"

```

###### Prebinding helpers

```js

var boundScoped = bem.scoped.bind(null, "block");

var className = boundScoped("element", { modifier: true });
// className === "block__element block__element--modifier"

```

### bem.single

Same as [bem](#bem) - but it only returns a single classname.

#### Examples

###### Basic

```js

var className = bem.single("block", "element");
// className === "block__element"

```

###### Elements with modifiers

```js

var className = bem.single("block", "element", { modifier: true });
// className === "block__element--modifier"

```

###### Modifiers with values

```js

var className = bem.single("block", "element", { modifier: "value" });
// className === "block__element--modifier-value"

```

###### Prebinding helpers

```js

var boundSingle = bem.single.bind(null, "block");

var className = boundSingle("element", { modifier: true });
// className === "block__element--modifier"

```
