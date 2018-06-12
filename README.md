# caret-killer

![](https://user-images.githubusercontent.com/1720010/41296766-a80e5cb4-6e2b-11e8-999c-283994b7d6e0.png)

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
yarn global add caret-killer
# I wonder if I should specify a version.
```


## Usage

```
cd my-cool-project-with-jacked-depenendencies
caret-killer
```

## Dev

`node_modules` are not included, obviously, but you need them for tests.
Navigate to `fixtures/` and `yarn` to set them up.  When running in test mode,
the output will be `fixtures/result.package.json`.
