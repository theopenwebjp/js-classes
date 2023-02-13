[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / CanvasRenderer

# Class: CanvasRenderer

Renders canvas by drawing at interval.

**`Deprecated`**

Can use canvas.captureStream instead. If not available, can use polyfill.

Extra features:
※ "mute" and "unmute".
※ updateRenderable for updating source input at any time.

## Table of contents

### Constructors

- [constructor](CanvasRenderer.md#constructor)

### Properties

- [muted](CanvasRenderer.md#muted)
- [settings](CanvasRenderer.md#settings)
- [state](CanvasRenderer.md#state)

### Methods

- [mute](CanvasRenderer.md#mute)
- [newCanvas](CanvasRenderer.md#newcanvas)
- [render](CanvasRenderer.md#render)
- [start](CanvasRenderer.md#start)
- [stop](CanvasRenderer.md#stop)
- [unmute](CanvasRenderer.md#unmute)
- [updateRenderable](CanvasRenderer.md#updaterenderable)

## Constructors

### constructor

• **new CanvasRenderer**(`settings`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `Partial`<`CanvasRenderOptions`\> |

#### Defined in

[class/CanvasRenderer.js:45](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasRenderer.js#L45)

## Properties

### muted

• **muted**: `undefined` \| `boolean`

#### Defined in

[class/CanvasRenderer.js:83](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasRenderer.js#L83)

[class/CanvasRenderer.js:87](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasRenderer.js#L87)

___

### settings

• **settings**: `CanvasRenderOptions`

#### Defined in

[class/CanvasRenderer.js:49](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasRenderer.js#L49)

___

### state

• **state**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `canvas` | ``null`` \| `HTMLCanvasElement` |
| `context` | ``null`` \| `CanvasRenderingContext2D` |
| `interval` | ``null`` \| `number` |

#### Defined in

[class/CanvasRenderer.js:51](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasRenderer.js#L51)

## Methods

### mute

▸ **mute**(): `void`

#### Returns

`void`

#### Defined in

[class/CanvasRenderer.js:82](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasRenderer.js#L82)

___

### newCanvas

▸ **newCanvas**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Defined in

[class/CanvasRenderer.js:67](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasRenderer.js#L67)

___

### render

▸ **render**(): `undefined` \| ``false``

#### Returns

`undefined` \| ``false``

#### Defined in

[class/CanvasRenderer.js:107](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasRenderer.js#L107)

___

### start

▸ **start**(): `number`

#### Returns

`number`

#### Defined in

[class/CanvasRenderer.js:74](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasRenderer.js#L74)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

[class/CanvasRenderer.js:90](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasRenderer.js#L90)

___

### unmute

▸ **unmute**(): `void`

#### Returns

`void`

#### Defined in

[class/CanvasRenderer.js:86](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasRenderer.js#L86)

___

### updateRenderable

▸ **updateRenderable**(`renderable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `renderable` | `Renderable` |

#### Returns

`void`

#### Defined in

[class/CanvasRenderer.js:100](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasRenderer.js#L100)
