[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / CanvasHelper

# Class: CanvasHelper

Canvas helper class, that focuses on class related helpers.

## Table of contents

### Constructors

- [constructor](CanvasHelper.md#constructor)

### Properties

- [CanvasRenderer](CanvasHelper.md#canvasrenderer)

### Methods

- [checkCanvasChangeOnEvent](CanvasHelper.md#checkcanvaschangeonevent)
- [streamToCanvasRenderer](CanvasHelper.md#streamtocanvasrenderer)

## Constructors

### constructor

• **new CanvasHelper**()

## Properties

### CanvasRenderer

▪ `Static` **CanvasRenderer**: typeof [`CanvasRenderer`](CanvasRenderer.md)

#### Defined in

[CanvasHelper.js:44](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/CanvasHelper.js#L44)

## Methods

### checkCanvasChangeOnEvent

▸ `Static` **checkCanvasChangeOnEvent**(`canvas`, `onChange`, `event?`): () => `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `canvas` | `HTMLCanvasElement` | `undefined` |
| `onChange` | () => `void` | `undefined` |
| `event` | `string` | `'mouseup'` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[CanvasHelper.js:13](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/CanvasHelper.js#L13)

___

### streamToCanvasRenderer

▸ `Static` **streamToCanvasRenderer**(`stream`, `updateRate`): [`CanvasRenderer`](CanvasRenderer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |
| `updateRate` | `number` |

#### Returns

[`CanvasRenderer`](CanvasRenderer.md)

#### Defined in

[CanvasHelper.js:28](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/CanvasHelper.js#L28)
