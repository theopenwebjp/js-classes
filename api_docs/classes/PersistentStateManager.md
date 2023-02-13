[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / PersistentStateManager

# Class: PersistentStateManager

Saving class.
Handles all possible saving methods in JavaScript.

## Table of contents

### Constructors

- [constructor](PersistentStateManager.md#constructor)

### Properties

- [settings](PersistentStateManager.md#settings)

### Methods

- [fixMethod](PersistentStateManager.md#fixmethod)
- [get](PersistentStateManager.md#get)
- [set](PersistentStateManager.md#set)

## Constructors

### constructor

• **new PersistentStateManager**()

#### Defined in

[class/PersistentStateManager.js:6](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/PersistentStateManager.js#L6)

## Properties

### settings

• **settings**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defaultMethod` | `string` |

#### Defined in

[class/PersistentStateManager.js:7](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/PersistentStateManager.js#L7)

## Methods

### fixMethod

▸ **fixMethod**(`method?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `method` | `string` | `''` |

#### Returns

`string`

#### Defined in

[class/PersistentStateManager.js:16](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/PersistentStateManager.js#L16)

___

### get

▸ **get**(`key`, `method`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `method` | `string` |

#### Returns

`any`

#### Defined in

[class/PersistentStateManager.js:26](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/PersistentStateManager.js#L26)

___

### set

▸ **set**(`key`, `value`, `method`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |
| `method` | `string` |

#### Returns

`boolean`

#### Defined in

[class/PersistentStateManager.js:48](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/PersistentStateManager.js#L48)
