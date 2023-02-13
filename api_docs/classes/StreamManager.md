[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / StreamManager

# Class: StreamManager

Stream functions.
Should change so is StreamHelper and is static.

## Table of contents

### Constructors

- [constructor](StreamManager.md#constructor)

### Properties

- [StreamError](StreamManager.md#streamerror)
- [StreamHelper](StreamManager.md#streamhelper)
- [StreamObject](StreamManager.md#streamobject)
- [TrackManager](StreamManager.md#trackmanager)
- [createStreamVideoElement](StreamManager.md#createstreamvideoelement)
- [getStreamTracks](StreamManager.md#getstreamtracks)
- [getTracks](StreamManager.md#gettracks)
- [getTracksByAttribute](StreamManager.md#gettracksbyattribute)
- [getTracksByStatus](StreamManager.md#gettracksbystatus)
- [getTracksByType](StreamManager.md#gettracksbytype)
- [getUserMedia](StreamManager.md#getusermedia)
- [getUserMediaWithWorkingConstraints](StreamManager.md#getusermediawithworkingconstraints)
- [handleCameraStream](StreamManager.md#handlecamerastream)
- [polyfillGetUserMedia](StreamManager.md#polyfillgetusermedia)
- [startRecordingStream](StreamManager.md#startrecordingstream)
- [stopCameraStream](StreamManager.md#stopcamerastream)
- [stopCameraStreamObject](StreamManager.md#stopcamerastreamobject)
- [stopRecordingStream](StreamManager.md#stoprecordingstream)
- [streamHasAudio](StreamManager.md#streamhasaudio)
- [streamHasVideo](StreamManager.md#streamhasvideo)
- [streams](StreamManager.md#streams)
- [trackHasData](StreamManager.md#trackhasdata)
- [webcamToElement](StreamManager.md#webcamtoelement)

### Methods

- [addStream](StreamManager.md#addstream)
- [getStreamIndex](StreamManager.md#getstreamindex)
- [removeStream](StreamManager.md#removestream)
- [setup](StreamManager.md#setup)

## Constructors

### constructor

• **new StreamManager**()

#### Defined in

[class/StreamManager.js:10](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L10)

## Properties

### StreamError

• **StreamError**: () => `StreamError`

#### Type declaration

▸ (): `StreamError`

##### Returns

`StreamError`

#### Defined in

[class/StreamManager.js:28](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L28)

___

### StreamHelper

• **StreamHelper**: typeof [`StreamHelper`](StreamHelper.md)

#### Defined in

[class/StreamManager.js:40](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L40)

___

### StreamObject

• **StreamObject**: () => `StreamObject`

#### Type declaration

▸ (): `StreamObject`

Connection between stream, video and url due to revoking and updating.

##### Returns

`StreamObject`

#### Defined in

[class/StreamManager.js:29](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L29)

___

### TrackManager

• **TrackManager**: typeof [`TrackManager`](TrackManager.md)

#### Defined in

[class/StreamManager.js:18](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L18)

___

### createStreamVideoElement

• **createStreamVideoElement**: (`stream`: `MediaStream`) => `HTMLVideoElement`

#### Type declaration

▸ (`stream`): `HTMLVideoElement`

Create video element from stream

##### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |

##### Returns

`HTMLVideoElement`

#### Defined in

[class/StreamManager.js:35](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L35)

___

### getStreamTracks

• **getStreamTracks**: (`stream`: `MediaStream`) => `MediaStreamTrack`[]

#### Type declaration

▸ (`stream`): `MediaStreamTrack`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |

##### Returns

`MediaStreamTrack`[]

#### Defined in

[class/StreamManager.js:23](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L23)

___

### getTracks

• **getTracks**: (`stream`: `MediaStream`) => `MediaStreamTrack`[]

#### Type declaration

▸ (`stream`): `MediaStreamTrack`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |

##### Returns

`MediaStreamTrack`[]

#### Defined in

[class/StreamManager.js:25](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L25)

___

### getTracksByAttribute

• **getTracksByAttribute**: (`stream`: `MediaStream`, `attr`: keyof `MediaStreamTrack`, `value`: `any`) => `MediaStreamTrack`[]

#### Type declaration

▸ (`stream`, `attr`, `value`): `MediaStreamTrack`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |
| `attr` | keyof `MediaStreamTrack` |
| `value` | `any` |

##### Returns

`MediaStreamTrack`[]

#### Defined in

[class/StreamManager.js:27](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L27)

___

### getTracksByStatus

• **getTracksByStatus**: (`stream`: `MediaStream`, `status`: `boolean`) => `MediaStreamTrack`[]

#### Type declaration

▸ (`stream`, `status`): `MediaStreamTrack`[]

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | `MediaStream` |  |
| `status` | `boolean` | Enabled: enabled = true & muted = false |

##### Returns

`MediaStreamTrack`[]

#### Defined in

[class/StreamManager.js:24](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L24)

___

### getTracksByType

• **getTracksByType**: (`stream`: `MediaStream`, `type`: `string`) => `MediaStreamTrack`[]

#### Type declaration

▸ (`stream`, `type`): `MediaStreamTrack`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |
| `type` | `string` |

##### Returns

`MediaStreamTrack`[]

#### Defined in

[class/StreamManager.js:26](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L26)

___

### getUserMedia

• **getUserMedia**: (`callback`: (`streamOrError`: `MediaStream` \| `StreamError`) => `void`, `constraints`: `MediaStreamConstraints`) => `void`

#### Type declaration

▸ (`callback`, `constraints`): `void`

Simple handling of getUserMedia
Be careful of argument order change: navigator.getUserMedia(constraints, onSuccess, onError)
Order changed due to constraints being optional.

**`Deprecated`**

This was used as during early adoption of this feature, but now it is standardized should use promises instead.

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`streamOrError`: `MediaStream` \| `StreamError`) => `void` |
| `constraints` | `MediaStreamConstraints` |

##### Returns

`void`

#### Defined in

[class/StreamManager.js:19](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L19)

___

### getUserMediaWithWorkingConstraints

• **getUserMediaWithWorkingConstraints**: (`constraints`: `MediaStreamConstraints`, `onSuccess`: `NavigatorUserMediaSuccessCallback`, `onError`: (`arg0`: `Error`) => `void`) => `void`

#### Type declaration

▸ (`constraints?`, `onSuccess`, `onError`): `void`

Attempts to getUserMedia with best video.
Falls back to simpler constraints on fail.
  Safe => Not safe
  1. {video: true, audio: false} OR {video: false, audio: true}
  2. {video: true, audio: true}
  3. {video: {...}, audio: {...}

##### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | `MediaStreamConstraints` |
| `onSuccess` | `NavigatorUserMediaSuccessCallback` |
| `onError` | (`arg0`: `Error`) => `void` |

##### Returns

`void`

#### Defined in

[class/StreamManager.js:32](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L32)

___

### handleCameraStream

• **handleCameraStream**: (`stream`: `MediaStream` \| `StreamError`, `object`: `undefined` \| `StreamObject`) => ``null`` \| `StreamObject`

#### Type declaration

▸ (`stream`, `object?`): ``null`` \| `StreamObject`

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `stream` | `MediaStream` \| `StreamError` | `undefined` |
| `object` | `undefined` \| `StreamObject` | `undefined` |

##### Returns

``null`` \| `StreamObject`

#### Defined in

[class/StreamManager.js:20](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L20)

___

### polyfillGetUserMedia

• **polyfillGetUserMedia**: () => `void`

#### Type declaration

▸ (): `void`

Old navigator version of getUserMedia

##### Returns

`void`

#### Defined in

[class/StreamManager.js:30](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L30)

___

### startRecordingStream

• **startRecordingStream**: (`stream`: `MediaStream`, `dataHandle`: ``null`` \| (`this`: `MediaRecorder`, `ev`: `BlobEvent`) => `any`, `options`: `MediaRecorderOptions`) => `MediaRecorder`

#### Type declaration

▸ (`stream`, `dataHandle`, `options?`): `MediaRecorder`

##### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |
| `dataHandle` | ``null`` \| (`this`: `MediaRecorder`, `ev`: `BlobEvent`) => `any` |
| `options` | `MediaRecorderOptions` |

##### Returns

`MediaRecorder`

#### Defined in

[class/StreamManager.js:33](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L33)

___

### stopCameraStream

• **stopCameraStream**: (`stream`: `MediaStream`) => `void`

#### Type declaration

▸ (`stream`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |

##### Returns

`void`

#### Defined in

[class/StreamManager.js:21](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L21)

___

### stopCameraStreamObject

• **stopCameraStreamObject**: (`o`: `StreamObject`, `removeFromDom`: `boolean`) => `void`

#### Type declaration

▸ (`o`, `removeFromDom?`): `void`

Stops stream and related data

##### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `o` | `StreamObject` | `undefined` |
| `removeFromDom` | `boolean` | `false` |

##### Returns

`void`

#### Defined in

[class/StreamManager.js:22](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L22)

___

### stopRecordingStream

• **stopRecordingStream**: (`recorder`: `MediaRecorder`) => `void`

#### Type declaration

▸ (`recorder`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `recorder` | `MediaRecorder` |

##### Returns

`void`

#### Defined in

[class/StreamManager.js:34](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L34)

___

### streamHasAudio

• **streamHasAudio**: (`stream`: `MediaStream`) => `boolean`

#### Type declaration

▸ (`stream`): `boolean`

Checks if audio exists

##### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |

##### Returns

`boolean`

#### Defined in

[class/StreamManager.js:37](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L37)

___

### streamHasVideo

• **streamHasVideo**: (`stream`: `MediaStream`) => `boolean`

#### Type declaration

▸ (`stream`): `boolean`

Checks if video exists

##### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |

##### Returns

`boolean`

#### Defined in

[class/StreamManager.js:36](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L36)

___

### streams

• **streams**: `MediaStream`[]

Storing

#### Defined in

[class/StreamManager.js:15](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L15)

___

### trackHasData

• **trackHasData**: (`track`: `MediaStreamTrack`) => `boolean`

#### Type declaration

▸ (`track`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `track` | `MediaStreamTrack` |

##### Returns

`boolean`

#### Defined in

[class/StreamManager.js:38](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L38)

___

### webcamToElement

• **webcamToElement**: (`constraints`: `MediaStreamConstraints`, `element`: `HTMLElement`, `callback`: (`streamObject`: `StreamError` \| `StreamObject`) => `void`) => `void`

#### Type declaration

▸ (`constraints`, `element`, `callback`): `void`

Quick method to get webcam and show in element

##### Parameters

| Name | Type |
| :------ | :------ |
| `constraints` | `MediaStreamConstraints` |
| `element` | `HTMLElement` |
| `callback` | (`streamObject`: `StreamError` \| `StreamObject`) => `void` |

##### Returns

`void`

#### Defined in

[class/StreamManager.js:31](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L31)

## Methods

### addStream

▸ **addStream**(`stream`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |

#### Returns

`void`

#### Defined in

[class/StreamManager.js:52](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L52)

___

### getStreamIndex

▸ **getStreamIndex**(`stream`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |

#### Returns

`number`

#### Defined in

[class/StreamManager.js:72](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L72)

___

### removeStream

▸ **removeStream**(`stream`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `MediaStream` |

#### Returns

`void`

#### Defined in

[class/StreamManager.js:59](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L59)

___

### setup

▸ **setup**(): `void`

#### Returns

`void`

#### Defined in

[class/StreamManager.js:45](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StreamManager.js#L45)
