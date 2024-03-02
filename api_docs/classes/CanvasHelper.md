[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / CanvasHelper

# Class: CanvasHelper

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
- [diffRGBA](CanvasHelper.md#diffrgba)
- [drawableToCanvas](CanvasHelper.md#drawabletocanvas)
- [drawableToDataURL](CanvasHelper.md#drawabletodataurl)
- [drawableToImage](CanvasHelper.md#drawabletoimage)
- [fitCanvasToBoundingRect](CanvasHelper.md#fitcanvastoboundingrect)
- [getContext](CanvasHelper.md#getcontext)
- [getContextBoundingRect](CanvasHelper.md#getcontextboundingrect)
- [getMainColor](CanvasHelper.md#getmaincolor)
- [getMaxRGBACount](CanvasHelper.md#getmaxrgbacount)
- [isImageDataSame](CanvasHelper.md#isimagedatasame)
- [loopImageData](CanvasHelper.md#loopimagedata)
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

CanvasHelper.js:483

## Methods

### BoundingRect

▸ `Static` **BoundingRect**(): `SimpleDOMRect`

#### Returns

`SimpleDOMRect`

#### Defined in

CanvasHelper.js:369

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

CanvasHelper.js:159

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

CanvasHelper.js:43

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

CanvasHelper.js:287

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

CanvasHelper.js:202

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

CanvasHelper.js:91

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

CanvasHelper.js:214

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

CanvasHelper.js:74

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

CanvasHelper.js:29

___

### diffRGBA

▸ `Static` **diffRGBA**(`rgba1`, `rgba2`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rgba1` | `RGBA` |
| `rgba2` | `RGBA` |

#### Returns

`number`

#### Defined in

CanvasHelper.js:417

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

CanvasHelper.js:174

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

CanvasHelper.js:191

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

CanvasHelper.js:145

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

CanvasHelper.js:317

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

CanvasHelper.js:57

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

CanvasHelper.js:333

___

### getMainColor

▸ `Static` **getMainColor**(`imgData`, `threshold?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `imgData` | `ImageData` | `undefined` |
| `threshold?` | `number` | `0` |

#### Returns

`any`

#### Defined in

CanvasHelper.js:430

___

### getMaxRGBACount

▸ `Static` **getMaxRGBACount**(`colors`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `colors` | `RGBACount`[] |

#### Returns

`any`

#### Defined in

CanvasHelper.js:459

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

CanvasHelper.js:265

___

### loopImageData

▸ `Static` **loopImageData**(`imgData`, `onPixel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imgData` | `ImageData` |
| `onPixel` | (`rgba`: `RGBA`, `index`: `number`) => `void` |

#### Returns

`void`

#### Defined in

CanvasHelper.js:402

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

CanvasHelper.js:382

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

CanvasHelper.js:11

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

CanvasHelper.js:239
