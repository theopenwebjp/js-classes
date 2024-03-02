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

CanvasRenderer.js:32

## Properties

### muted

• **muted**: `undefined` \| `boolean`

#### Defined in

CanvasRenderer.js:70

CanvasRenderer.js:74

___

### settings

• **settings**: `CanvasRenderOptions`

#### Defined in

CanvasRenderer.js:36

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

CanvasRenderer.js:38

## Methods

### mute

▸ **mute**(): `void`

#### Returns

`void`

#### Defined in

CanvasRenderer.js:69

___

### newCanvas

▸ **newCanvas**(): `HTMLCanvasElement`

#### Returns

`HTMLCanvasElement`

#### Defined in

CanvasRenderer.js:54

___

### render

▸ **render**(): `undefined` \| ``false``

#### Returns

`undefined` \| ``false``

#### Defined in

CanvasRenderer.js:94

___

### start

▸ **start**(): `number`

#### Returns

`number`

#### Defined in

CanvasRenderer.js:61

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

CanvasRenderer.js:77

___

### unmute

▸ **unmute**(): `void`

#### Returns

`void`

#### Defined in

CanvasRenderer.js:73

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

CanvasRenderer.js:87
