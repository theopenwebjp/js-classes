[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / PageManager

# Class: PageManager

## Table of contents

### Constructors

- [constructor](PageManager.md#constructor)

### Properties

- [settings](PageManager.md#settings)

### Methods

- [PageManagerSettings](PageManager.md#pagemanagersettings)
- [getCurrentPageKey](PageManager.md#getcurrentpagekey)
- [getMenu](PageManager.md#getmenu)
- [handleEvent](PageManager.md#handleevent)
- [setup](PageManager.md#setup)
- [setupCurrentPage](PageManager.md#setupcurrentpage)
- [setupPage](PageManager.md#setuppage)

## Constructors

### constructor

• **new PageManager**(`settings`)

Page loading class.
Functions:
1. Load dynamic page area.
2. Load based on url param.
3. Create menu based on pages info.

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `PageManagerSettings` |

#### Defined in

PageManager.js:11

## Properties

### settings

• **settings**: `PageManagerSettings`

#### Defined in

PageManager.js:15

PageManager.js:44

## Methods

### PageManagerSettings

▸ **PageManagerSettings**(`options?`): { `defaultKey`: `string` = ''; `events`: `EventListenersMap` ; `param`: `string` = 'page'; `parent`: ``null`` \| `HTMLElement` = null } & `Partial`<`PageManagerSettings`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`PageManagerSettings`\> |

#### Returns

{ `defaultKey`: `string` = ''; `events`: `EventListenersMap` ; `param`: `string` = 'page'; `parent`: ``null`` \| `HTMLElement` = null } & `Partial`<`PageManagerSettings`\>

#### Defined in

PageManager.js:22

___

### getCurrentPageKey

▸ **getCurrentPageKey**(): `string`

#### Returns

`string`

#### Defined in

PageManager.js:50

___

### getMenu

▸ **getMenu**(`pages`): `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pages` | `object` |

#### Returns

`HTMLElement`

#### Defined in

PageManager.js:86

___

### handleEvent

▸ **handleEvent**(`name`, `args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `args` | `any`[] |

#### Returns

`any`

#### Defined in

PageManager.js:113

___

### setup

▸ **setup**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`PageManagerSettings`\> |

#### Returns

`void`

#### Defined in

PageManager.js:43

___

### setupCurrentPage

▸ **setupCurrentPage**(`parent`, `settings`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | `any` | TODO |
| `settings` | `object` |  |

#### Returns

`void`

#### Defined in

PageManager.js:75

___

### setupPage

▸ **setupPage**(`parent`, `key`, `settings`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `any` |
| `key` | `string` |
| `settings` | `object` |

#### Returns

`void`

#### Defined in

PageManager.js:127
