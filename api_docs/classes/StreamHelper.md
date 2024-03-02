[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / StreamHelper

# Class: StreamHelper

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

StreamHelper.js:319

___

### StreamObject

▸ `Static` **StreamObject**(): `StreamObject`

Connection between stream, video and url due to revoking and updating.

#### Returns

`StreamObject`

#### Defined in

StreamHelper.js:330

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

StreamHelper.js:87

___

### getBestConstraints

▸ `Static` **getBestConstraints**(): `Promise`<`any`\>

Attempts to get best constraints with best video.

#### Returns

`Promise`<`any`\>

#### Defined in

StreamHelper.js:410

___

### getEmptyStream

▸ `Static` **getEmptyStream**(): `MediaStream`

#### Returns

`MediaStream`

#### Defined in

StreamHelper.js:482

___

### getPolyfilledGetUserMedia

▸ `Static` **getPolyfilledGetUserMedia**(): `NavigatorGetUserMedia`

Old navigator version of getUserMedia

#### Returns

`NavigatorGetUserMedia`

#### Defined in

StreamHelper.js:354

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

StreamHelper.js:422

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

StreamHelper.js:238

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

StreamHelper.js:292

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

StreamHelper.js:311

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

StreamHelper.js:251

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

StreamHelper.js:301

___

### getUnlimitedConstraints

▸ `Static` **getUnlimitedConstraints**(): `MediaStreamConstraints`

#### Returns

`MediaStreamConstraints`

#### Defined in

StreamHelper.js:400

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

StreamHelper.js:129

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

StreamHelper.js:451

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

StreamHelper.js:164

___

### polyfillGetUserMedia

▸ `Static` **polyfillGetUserMedia**(): `void`

Old navigator version of getUserMedia

#### Returns

`void`

#### Defined in

StreamHelper.js:341

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

StreamHelper.js:66

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

StreamHelper.js:192

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

StreamHelper.js:209

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

StreamHelper.js:78

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

StreamHelper.js:113

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

StreamHelper.js:100

___

### webcamToElement

▸ `Static` **webcamToElement**(`constraints`, `element`, `callback`): `void`

Quick method to get webcam and show in element

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | `MediaStreamConstraints` |
| `element` | `HTMLElement` |
| `callback` | (`streamObject`: `StreamObject` \| `StreamError`) => `void` |

#### Returns

`void`

#### Defined in

StreamHelper.js:371
