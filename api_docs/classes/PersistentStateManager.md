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

PersistentStateManager.js:6

## Properties

### settings

• **settings**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `defaultMethod` | `string` |

#### Defined in

PersistentStateManager.js:7

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

PersistentStateManager.js:16

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

PersistentStateManager.js:26

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

PersistentStateManager.js:48
