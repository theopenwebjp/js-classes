[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / StreamHelper

# Class: StreamHelper

**`Property`**

**`Property`**

## Table of contents

### Constructors

- [constructor](StreamHelper.md#constructor)

### Methods

- [StreamError](StreamHelper.md#streamerror)
- [StreamObject](StreamHelper.md#streamobject)
- [createStreamVideoElement](StreamHelper.md#createstreamvideoelement)
- [getBestConstraints](StreamHelper.md#getbestconstraints)
- [getEmptyStream](StreamHelper.md#getemptystream)
- [getPolyfilledGetUserMedia](StreamHelper.md#getpolyfilledgetusermedia)
- [getStreamConstraints](StreamHelper.md#getstreamconstraints)
- [getStreamTracks](StreamHelper.md#getstreamtracks)
- [getTracks](StreamHelper.md#gettracks)
- [getTracksByAttribute](StreamHelper.md#gettracksbyattribute)
- [getTracksByStatus](StreamHelper.md#gettracksbystatus)
- [getTracksByType](StreamHelper.md#gettracksbytype)
- [getUnlimitedConstraints](StreamHelper.md#getunlimitedconstraints)
- [getUserMedia](StreamHelper.md#getusermedia)
- [getUserMediaWithWorkingConstraints](StreamHelper.md#getusermediawithworkingconstraints)
- [handleCameraStream](StreamHelper.md#handlecamerastream)
- [polyfillGetUserMedia](StreamHelper.md#polyfillgetusermedia)
- [startRecordingStream](StreamHelper.md#startrecordingstream)
- [stopCameraStream](StreamHelper.md#stopcamerastream)
- [stopCameraStreamObject](StreamHelper.md#stopcamerastreamobject)
- [stopRecordingStream](StreamHelper.md#stoprecordingstream)
- [streamHasAudio](StreamHelper.md#streamhasaudio)
- [streamHasVideo](StreamHelper.md#streamhasvideo)
- [webcamToElement](StreamHelper.md#webcamtoelement)

## Constructors

### constructor

• **new StreamHelper**()

## Methods

### StreamError

▸ `Static` **StreamError**(): `StreamError`

#### Returns

`StreamError`

#### Defined in

[class/StreamHelper.js:338](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L338)

___

### StreamObject

▸ `Static` **StreamObject**(): `StreamObject`

Connection between stream, video and url due to revoking and updating.

#### Returns

`StreamObject`

#### Defined in

[class/StreamHelper.js:349](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L349)

___

### createStreamVideoElement

▸ `Static` **createStreamVideoElement**(`stream`): `HTMLVideoElement`

Create video element from stream

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |

#### Returns

`HTMLVideoElement`

#### Defined in

[class/StreamHelper.js:106](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L106)

___

### getBestConstraints

▸ `Static` **getBestConstraints**(): `Promise`<`any`\>

Attempts to get best constraints with best video.

#### Returns

`Promise`<`any`\>

#### Defined in

[class/StreamHelper.js:429](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L429)

___

### getEmptyStream

▸ `Static` **getEmptyStream**(): `MediaStream`

#### Returns

`MediaStream`

#### Defined in

[class/StreamHelper.js:501](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L501)

___

### getPolyfilledGetUserMedia

▸ `Static` **getPolyfilledGetUserMedia**(): `NavigatorGetUserMedia`

Old navigator version of getUserMedia

#### Returns

`NavigatorGetUserMedia`

#### Defined in

[class/StreamHelper.js:373](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L373)

___

### getStreamConstraints

▸ `Static` **getStreamConstraints**(`stream`): `MediaStreamConstraints`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |

#### Returns

`MediaStreamConstraints`

#### Defined in

[class/StreamHelper.js:441](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L441)

___

### getStreamTracks

▸ `Static` **getStreamTracks**(`stream`): `MediaStreamTrack`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |

#### Returns

`MediaStreamTrack`[]

#### Defined in

[class/StreamHelper.js:257](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L257)

___

### getTracks

▸ `Static` **getTracks**(`stream`): `MediaStreamTrack`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |

#### Returns

`MediaStreamTrack`[]

#### Defined in

[class/StreamHelper.js:311](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L311)

___

### getTracksByAttribute

▸ `Static` **getTracksByAttribute**(`stream`, `attr`, `value`): `MediaStreamTrack`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |
| `attr` | keyof `MediaStreamTrack` |
| `value` | `any` |

#### Returns

`MediaStreamTrack`[]

#### Defined in

[class/StreamHelper.js:330](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L330)

___

### getTracksByStatus

▸ `Static` **getTracksByStatus**(`stream`, `status`): `MediaStreamTrack`[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | `MediaStream` |  |
| `status` | `boolean` | Enabled: enabled = true & muted = false |

#### Returns

`MediaStreamTrack`[]

#### Defined in

[class/StreamHelper.js:270](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L270)

___

### getTracksByType

▸ `Static` **getTracksByType**(`stream`, `type`): `MediaStreamTrack`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |
| `type` | `string` |

#### Returns

`MediaStreamTrack`[]

#### Defined in

[class/StreamHelper.js:320](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L320)

___

### getUnlimitedConstraints

▸ `Static` **getUnlimitedConstraints**(): `MediaStreamConstraints`

#### Returns

`MediaStreamConstraints`

#### Defined in

[class/StreamHelper.js:419](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L419)

___

### getUserMedia

▸ `Static` **getUserMedia**(`callback`, `constraints`): `void`

Simple handling of getUserMedia
Be careful of argument order change: navigator.getUserMedia(constraints, onSuccess, onError)
Order changed due to constraints being optional.

**`Deprecated`**

This was used as during early adoption of this feature, but now it is standardized should use promises instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`streamOrError`: `MediaStream` \| `StreamError`) => `void` |
| `constraints` | `MediaStreamConstraints` |

#### Returns

`void`

#### Defined in

[class/StreamHelper.js:148](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L148)

___

### getUserMediaWithWorkingConstraints

▸ `Static` **getUserMediaWithWorkingConstraints**(`constraints?`, `onSuccess`, `onError`): `void`

Attempts to getUserMedia with best video.
Falls back to simpler constraints on fail.
  Safe => Not safe
  1. {video: true, audio: false} OR {video: false, audio: true}
  2. {video: true, audio: true}
  3. {video: {...}, audio: {...}

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | `MediaStreamConstraints` |
| `onSuccess` | `NavigatorUserMediaSuccessCallback` |
| `onError` | (`arg0`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

[class/StreamHelper.js:470](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L470)

___

### handleCameraStream

▸ `Static` **handleCameraStream**(`stream`, `object?`): ``null`` \| `StreamObject`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `stream` | `MediaStream` \| `StreamError` | `undefined` |
| `object` | `undefined` \| `StreamObject` | `undefined` |

#### Returns

``null`` \| `StreamObject`

#### Defined in

[class/StreamHelper.js:183](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L183)

___

### polyfillGetUserMedia

▸ `Static` **polyfillGetUserMedia**(): `void`

Old navigator version of getUserMedia

#### Returns

`void`

#### Defined in

[class/StreamHelper.js:360](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L360)

___

### startRecordingStream

▸ `Static` **startRecordingStream**(`stream`, `dataHandle`, `options?`): `MediaRecorder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |
| `dataHandle` | ``null`` \| (`this`: `MediaRecorder`, `ev`: `BlobEvent`) => `any` |
| `options` | `MediaRecorderOptions` |

#### Returns

`MediaRecorder`

#### Defined in

[class/StreamHelper.js:85](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L85)

___

### stopCameraStream

▸ `Static` **stopCameraStream**(`stream`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |

#### Returns

`void`

#### Defined in

[class/StreamHelper.js:211](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L211)

___

### stopCameraStreamObject

▸ `Static` **stopCameraStreamObject**(`o`, `removeFromDom?`): `void`

Stops stream and related data

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `o` | `StreamObject` | `undefined` |
| `removeFromDom` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[class/StreamHelper.js:228](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L228)

___

### stopRecordingStream

▸ `Static` **stopRecordingStream**(`recorder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `recorder` | `MediaRecorder` |

#### Returns

`void`

#### Defined in

[class/StreamHelper.js:97](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L97)

___

### streamHasAudio

▸ `Static` **streamHasAudio**(`stream`): `boolean`

Checks if audio exists

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |

#### Returns

`boolean`

#### Defined in

[class/StreamHelper.js:132](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L132)

___

### streamHasVideo

▸ `Static` **streamHasVideo**(`stream`): `boolean`

Checks if video exists

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |

#### Returns

`boolean`

#### Defined in

[class/StreamHelper.js:119](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L119)

___

### webcamToElement

▸ `Static` **webcamToElement**(`constraints`, `element`, `callback`): `void`

Quick method to get webcam and show in element

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | `MediaStreamConstraints` |
| `element` | `HTMLElement` |
| `callback` | (`streamObject`: `StreamError` \| `StreamObject`) => `void` |

#### Returns

`void`

#### Defined in

[class/StreamHelper.js:390](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamHelper.js#L390)
