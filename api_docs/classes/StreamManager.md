[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / StreamManager

# Class: StreamManager

Stream functions.
Should change so is StreamHelper and is static.

## Table of contents

### Constructors

- [constructor](StreamManager.md#constructor)

### Properties

- [TrackManager](StreamManager.md#trackmanager)
- [streams](StreamManager.md#streams)

### Methods

- [addStream](StreamManager.md#addstream)
- [getStreamIndex](StreamManager.md#getstreamindex)
- [removeStream](StreamManager.md#removestream)
- [setup](StreamManager.md#setup)

## Constructors

### constructor

• **new StreamManager**()

#### Defined in

[StreamManager.js:10](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/StreamManager.js#L10)

## Properties

### TrackManager

• **TrackManager**: typeof [`TrackManager`](TrackManager.md)

#### Defined in

[StreamManager.js:18](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/StreamManager.js#L18)

___

### streams

• **streams**: `MediaStream`[]

Storing

#### Defined in

[StreamManager.js:15](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/StreamManager.js#L15)

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

[StreamManager.js:30](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/StreamManager.js#L30)

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

[StreamManager.js:50](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/StreamManager.js#L50)

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

[StreamManager.js:37](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/StreamManager.js#L37)

___

### setup

▸ **setup**(): `void`

#### Returns

`void`

#### Defined in

[StreamManager.js:23](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/StreamManager.js#L23)
