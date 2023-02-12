@theopenweb/js-classes / [Exports](modules.md)

# Description

* Set of JavaScript classes for general use.
* Shouldn't include anything too large(move to separate project).
* Shouldn't include anything too specialized(partion elsewhere as unlikely to be used in most cases).
* Should move into own project once gets of a substantial size.
* May have varying formats, as is an ungrouped collection of classes.

## Installation

```bash
npm install @theopenweb/js-classes
```

## Technical Info

All code has been converted to es6 modules.

## Standards

* "Manager" suffixed files have state.
* "Helper" suffixed files are static.

## Status

This project is currently under development. There are small bugs and class-wide bugs remaining. The following classes have relatively few problems:  

* CanvasManager
* DOMHelper
* Log
* Drawer
* DrawableCanvas

## Testing

Typescript:

```bash
npm run ts-check
```

Eslint:

```bash
npm run eslint
```

## Examples

Check ./examples/
