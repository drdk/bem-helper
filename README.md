# bem-helper

> Helper to create BEM-style classnames


```js

var className = bem("block", "element", {modifier: true});

/*

className ==  "element block__element element--modifier block__element--modifier"
                       ______________                   ________________________
                             |                                   |    |
                       ______|          _________________________|    |
                      \/               \/                             |
bem.scoped == "block__element block__element--modifier"               |
                                                                      |
                                                                      |
                         _____________________________________________|
                        \/
bem.single == "block__element--modifier"
*/
```

## Install

```
npm install @dr/bem-helper
```

## Usage

```js
var bem = require("@dr/bem-helper");

var className = bem("block", "element");
// className === "element block__element"

var className = bem("block", { modifier: true });
// className === "block block--modifier"


// Get all applicable combinations for an element:
var className = bem("block", "element", { modifier: true });
// className === "element block__element element--modifier block__element--modifier"


// Get all applicable combinations scoped combinations for an element:
var className = bem.scoped("block", "element", { modifier: true });
// className === "block__element block__element--modifier"

// Get a single classname for an element:
var className = bem.single("block", "element", { modifier: true });
// className === "block__element--modifier"


// Modifiers with values

// Get all applicable combinations for an element:
var className = bem("block", "element", { modifier: "value", modifier2: false });
// className === "element block__element element--modifier block__element--modifier element--modifier-value block__element--modifier-value"

// Get all applicable scoped combinations for an element:
var className = bem.scoped("block", "element", { modifier: "value", modifier2: false });
// className === "block__element block__element--modifier block__element--modifier-value"

// Get a single classname for an element:
var className = bem.single("block", "element", { modifier: "value" });
// className === "block__element--modifier-value"


// Prebinding a helper

var block = "block";

var boundBem = bem.bind(null, block);

// Get all applicable combinations for an element:
var className = boundBem("element", { modifier: true });
// className === "element block__element element--modifier block__element--modifier"

var boundScoped = bem.scoped.bind(null, block);

// Get all applicable scoped combinations for an element:
var className = boundScoped("element", { modifier: true });
// className === "block__element block__element--modifier"

var boundSingle = bem.single.bind(null, block);

// Get a single classname for an element:
var className = boundSingle("element", { modifier: true });
// className === "block__element--modifier"

```

## API

### bem

A function that creates all applicable combinations of classnames for an element in BEM-style.

#### Arguments

* `block` (string) - The block element for the classname.
* `...args` (string|object) - Optional. Elements are described by strings and modifiers are described by objects: keys are used for modifier names - boolean values trigger whether the modifier is active, and any other value type is used as a value; `{modifier: true}` > `"--modifier"`, `{modifier: "value"}` > `"--modifier-value"`.

### bem.scoped

Same as `bem` - but it returns a fully scoped classname.

### bem.single

Same as `bem` - but it only returns a single classname.
