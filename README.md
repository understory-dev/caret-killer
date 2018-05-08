# caret-killer

## Problem

I don't trust semver adherence.  I've got a bunch of `^`s in my package.json
dependencies.  I have already installed them.  I want to get rid of the carets
and change the dep to the _current_ version I have installed.


## Example

> Allows changes that do not modify the left-most non-zero digit in the [major, minor, patch] tuple. In other words, this allows patch and minor updates for versions 1.0.0 and above, patch updates for versions 0.X >=0.1.0, and no updates for versions 0.0.X.

https://docs.npmjs.com/misc/semver#caret-ranges-123-025-004

This means if I have this in package.json

```
"babel-preset-react": "^6.3.13"
```

I could have 6.3.13, 6.3.14, or even 6.99.999 actually installed.


## Solution

This script will change each of the caret-dependencies to the current version
that is actually installed.


## Installation

```sh
yarn add caret-killer --dev
# I wonder if I should specify a version.
```


## Usage

Run `index.js` in the root of your project.

TODO: example
