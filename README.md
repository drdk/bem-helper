# bem-helper

> Helper to create BEM-style classnames

## Install

```
npm install @dr/bem-helper
```

## Usage

```
var bem = require("@dr/bem-helper");


// Get all applicable combinations for an element:
var className = bem("dr-module", "list", { expanded: true });
// className === "dr-module__list dr-module__list--expanded"


// Get a single classname for an element:
var className = bem.single("dr-module", "list", { expanded: true });
// className === "dr-module__list--expanded"


// Modifiers with values

// Get all applicable combinations for an element:
var className = bem("dr-module", "list", { expanded: true, rated: 3 });
// className === "dr-module__list dr-module__list--expanded dr-module__list--rated-3"


// Get a single classname for an element:
var className = bem.single("dr-module", "list", { rated: 3 });
// className === "dr-module__list--rated-3"


// Prebinding a helper

var block = "dr-module";

var boundBem = bem.bind(null, block);

// Get all applicable scoped combinations for an element:
var className = boundBem("list", { expanded: true });
// className === "dr-module__list dr-module__list--expanded"


// Get a single scoped classname for an element:
var className = bem.single("list", { expanded: true });
// className === "dr-module__list--expanded"

```

## API

### bem

#### Arguments

* `block` (string) - The block element for the classname.
* additional arguments (string|object) - Optional. Elements are described by strings and modifiers are described by objects: keys are use as the modifier names and boolean values trigger whether the modifier is active, and any other type is used as a value; `{expanded: true}` > `"--expanded"`, `{rating: 3}` > `"--rating-3"`.