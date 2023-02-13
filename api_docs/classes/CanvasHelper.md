[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / CanvasHelper

# Class: CanvasHelper

**`Property`**

**`Property`**

**`Property`**

**`Property`**

## Table of contents

### Constructors

- [constructor](CanvasHelper.md#constructor)

### Properties

- [CanvasRenderer](CanvasHelper.md#canvasrenderer)

### Methods

- [BoundingRect](CanvasHelper.md#boundingrect)
- [ImageSrcToDataURL](CanvasHelper.md#imagesrctodataurl)
- [RGBASelection](CanvasHelper.md#rgbaselection)
- [canvasHasColorData](CanvasHelper.md#canvashascolordata)
- [canvasToDataURL](CanvasHelper.md#canvastodataurl)
- [canvasToImage](CanvasHelper.md#canvastoimage)
- [canvasToImageFile](CanvasHelper.md#canvastoimagefile)
- [canvasToStream](CanvasHelper.md#canvastostream)
- [checkCanvasChangeOnEvent](CanvasHelper.md#checkcanvaschangeonevent)
- [drawableToCanvas](CanvasHelper.md#drawabletocanvas)
- [drawableToDataURL](CanvasHelper.md#drawabletodataurl)
- [drawableToImage](CanvasHelper.md#drawabletoimage)
- [fitCanvasToBoundingRect](CanvasHelper.md#fitcanvastoboundingrect)
- [getContext](CanvasHelper.md#getcontext)
- [getContextBoundingRect](CanvasHelper.md#getcontextboundingrect)
- [isImageDataSame](CanvasHelper.md#isimagedatasame)
- [streamToCanvasRenderer](CanvasHelper.md#streamtocanvasrenderer)
- [watchCanvas](CanvasHelper.md#watchcanvas)
- [watchForCanvasStop](CanvasHelper.md#watchforcanvasstop)

## Constructors

### constructor

• **new CanvasHelper**()

## Properties

### CanvasRenderer

▪ `Static` **CanvasRenderer**: typeof [`CanvasRenderer`](CanvasRenderer.md)

#### Defined in

[class/CanvasHelper.js:429](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L429)

## Methods

### BoundingRect

▸ `Static` **BoundingRect**(): `SimpleDOMRect`

#### Returns

`SimpleDOMRect`

#### Defined in

[class/CanvasHelper.js:400](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L400)

___

### ImageSrcToDataURL

▸ `Static` **ImageSrcToDataURL**(`src`, `onLoad`, `format`, `conversionOptions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `onLoad` | (`dataUrl`: `string`) => `void` |
| `format` | `string` |
| `conversionOptions` | `undefined` \| `number` |

#### Returns

`void`

#### Defined in

[class/CanvasHelper.js:190](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L190)

___

### RGBASelection

▸ `Static` **RGBASelection**(`options`): { `a`: `boolean` = false; `b`: `boolean` = true; `g`: `boolean` = true; `r`: `boolean` = true } & `Partial`<`RGBASelection`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`RGBASelection`\> |

#### Returns

{ `a`: `boolean` = false; `b`: `boolean` = true; `g`: `boolean` = true; `r`: `boolean` = true } & `Partial`<`RGBASelection`\>

#### Defined in

[class/CanvasHelper.js:71](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L71)

___

### canvasHasColorData

▸ `Static` **canvasHasColorData**(`canvas`, `rgbaOptions?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |
| `rgbaOptions` | `Partial`<`RGBASelection`\> |

#### Returns

`boolean`

#### Defined in

[class/CanvasHelper.js:318](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L318)

___

### canvasToDataURL

▸ `Static` **canvasToDataURL**(`canvas`, `format?`, `encoderOptions?`): `string`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `canvas` | `HTMLCanvasElement` | `undefined` |  |
| `format` | `undefined` \| `string` | `undefined` |  |
| `encoderOptions` | `undefined` \| `number` | `undefined` | https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL |

#### Returns

`string`

#### Defined in

[class/CanvasHelper.js:233](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L233)

___

### canvasToImage

▸ `Static` **canvasToImage**(`canvas`, `options`): `string` \| `HTMLImageElement`

Abstract canvas to image function

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |
| `options` | `Partial`<`CanvasImageOptions`\> |

#### Returns

`string` \| `HTMLImageElement`

#### Defined in

[class/CanvasHelper.js:119](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L119)

___

### canvasToImageFile

▸ `Static` **canvasToImageFile**(`canvas`, `format`, `conversionOptions`, `onLoad?`): `HTMLImageElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |
| `format` | `string` |
| `conversionOptions` | `undefined` \| `number` |
| `onLoad?` | (`image`: `HTMLImageElement`) => `void` |

#### Returns

`HTMLImageElement`

#### Defined in

[class/CanvasHelper.js:245](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L245)

___

### canvasToStream

▸ `Static` **canvasToStream**(`canvas`, `fps`): `boolean` \| `MediaStream`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |
| `fps` | `number` |

#### Returns

`boolean` \| `MediaStream`

#### Defined in

[class/CanvasHelper.js:102](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L102)

___

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

[class/CanvasHelper.js:57](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L57)

___

### drawableToCanvas

▸ `Static` **drawableToCanvas**(`drawable`, `startCanvas?`): `HTMLCanvasElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `drawable` | `CanvasImageSource` | `undefined` |
| `startCanvas` | `undefined` \| `HTMLCanvasElement` | `undefined` |

#### Returns

`HTMLCanvasElement`

#### Defined in

[class/CanvasHelper.js:205](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L205)

___

### drawableToDataURL

▸ `Static` **drawableToDataURL**(`drawable`, `format?`, `conversionOptions?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `drawable` | `CanvasImageSource` | `undefined` |
| `format` | `undefined` \| `string` | `undefined` |
| `conversionOptions` | `undefined` \| `number` | `undefined` |

#### Returns

`string`

#### Defined in

[class/CanvasHelper.js:222](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L222)

___

### drawableToImage

▸ `Static` **drawableToImage**(`drawable`): `HTMLImageElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drawable` | `any` |

#### Returns

`HTMLImageElement`

#### Defined in

[class/CanvasHelper.js:176](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L176)

___

### fitCanvasToBoundingRect

▸ `Static` **fitCanvasToBoundingRect**(`canvas`, `boundingRect`): `HTMLCanvasElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |
| `boundingRect` | `SimpleDOMRect` |

#### Returns

`HTMLCanvasElement`

#### Defined in

[class/CanvasHelper.js:348](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L348)

___

### getContext

▸ `Static` **getContext**(`canvas`): `CanvasRenderingContext2D`

Caching allows for higher speed.
  *

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | `CachedHTMLCanvasElement` | * |

#### Returns

`CanvasRenderingContext2D`

#### Defined in

[class/CanvasHelper.js:85](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L85)

___

### getContextBoundingRect

▸ `Static` **getContextBoundingRect**(`ctx`): `SimpleDOMRect`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`SimpleDOMRect`

#### Defined in

[class/CanvasHelper.js:364](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L364)

___

### isImageDataSame

▸ `Static` **isImageDataSame**(`imgData1`, `imgData2`): `boolean`

Returns boolean for quick imageData checking.

#### Parameters

| Name | Type |
| :------ | :------ |
| `imgData1` | `ImageData` |
| `imgData2` | `ImageData` |

#### Returns

`boolean`

#### Defined in

[class/CanvasHelper.js:296](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L296)

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

[class/CanvasHelper.js:413](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L413)

___

### watchCanvas

▸ `Static` **watchCanvas**(`canvas`, `onChange`, `intervalMs?`): () => `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `canvas` | `HTMLCanvasElement` | `undefined` |
| `onChange` | () => `void` | `undefined` |
| `intervalMs` | `number` | `1000` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[class/CanvasHelper.js:39](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L39)

___

### watchForCanvasStop

▸ `Static` **watchForCanvasStop**(`canvas`, `onStop`, `options`): `void`

Watches for canvas stop, usual for WebRTC connection problems in older browsers.
Stops on first stop.

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `HTMLCanvasElement` |
| `onStop` | () => `void` |
| `options` | `Object` |
| `options.interval` | `number` |

#### Returns

`void`

#### Defined in

[class/CanvasHelper.js:270](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/CanvasHelper.js#L270)
