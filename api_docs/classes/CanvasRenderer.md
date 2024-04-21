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

[CanvasRenderer.js:32](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/CanvasRenderer.js#L32)

## Properties

### muted

• **muted**: `undefined` \| `boolean`

#### Defined in

[CanvasRenderer.js:70](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/CanvasRenderer.js#L70)

[CanvasRenderer.js:74](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/CanvasRenderer.js#L74)

___

### settings

• **settings**: `CanvasRenderOptions`

#### Defined in

[CanvasRenderer.js:36](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/CanvasRenderer.js#L36)

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

[CanvasRenderer.js:38](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/CanvasRenderer.js#L38)

## Methods

### mute

▸ **mute**(): `void`

#### Returns

`void`

#### Defined in

[CanvasRenderer.js:69](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/CanvasRenderer.js#L69)

___

### newCanvas

▸ **newCanvas**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Defined in

[CanvasRenderer.js:54](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/CanvasRenderer.js#L54)

___

### render

▸ **render**(): `undefined` \| ``false``

#### Returns

`undefined` \| ``false``

#### Defined in

[CanvasRenderer.js:94](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/CanvasRenderer.js#L94)

___

### start

▸ **start**(): `number`

#### Returns

`number`

#### Defined in

[CanvasRenderer.js:61](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/CanvasRenderer.js#L61)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

[CanvasRenderer.js:77](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/CanvasRenderer.js#L77)

___

### unmute

▸ **unmute**(): `void`

#### Returns

`void`

#### Defined in

[CanvasRenderer.js:73](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/CanvasRenderer.js#L73)

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

[CanvasRenderer.js:87](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/CanvasRenderer.js#L87)
