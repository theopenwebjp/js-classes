[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / TrackHelper

# Class: TrackHelper

## Table of contents

### Constructors

- [constructor](TrackHelper.md#constructor)

### Methods

- [startRecordingTrack](TrackHelper.md#startrecordingtrack)
- [trackHasData](TrackHelper.md#trackhasdata)
- [trackToStream](TrackHelper.md#tracktostream)

## Constructors

### constructor

• **new TrackHelper**()

## Methods

### startRecordingTrack

▸ `Static` **startRecordingTrack**(`track`, `dataHandle`): `MediaRecorder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | `MediaStreamTrack` |
| `dataHandle` | ``null`` \| (`this`: `MediaRecorder`, `ev`: `BlobEvent`) => `any` |

#### Returns

`MediaRecorder`

#### Defined in

TrackHelper.js:41

___

### trackHasData

▸ `Static` **trackHasData**(`track`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | `MediaStreamTrack` |

#### Returns

`boolean`

#### Defined in

TrackHelper.js:8

___

### trackToStream

▸ `Static` **trackToStream**(`track`): `MediaStream`

Creates stream with tracks added

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | `MediaStreamTrack` |

#### Returns

`MediaStream`

#### Defined in

TrackHelper.js:55
