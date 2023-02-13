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

[class/PageManager.js:27](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/PageManager.js#L27)

## Properties

### settings

• **settings**: `PageManagerSettings`

#### Defined in

[class/PageManager.js:31](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/PageManager.js#L31)

[class/PageManager.js:60](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/PageManager.js#L60)

## Methods

### PageManagerSettings

▸ **PageManagerSettings**(`options?`): { `defaultKey`: `string` = ''; `events`: `Object` ; `param`: `string` = 'page'; `parent`: ``null`` \| `HTMLElement` = null } & `Partial`<`PageManagerSettings`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`PageManagerSettings`\> |

#### Returns

{ `defaultKey`: `string` = ''; `events`: `Object` ; `param`: `string` = 'page'; `parent`: ``null`` \| `HTMLElement` = null } & `Partial`<`PageManagerSettings`\>

#### Defined in

[class/PageManager.js:38](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/PageManager.js#L38)

___

### getCurrentPageKey

▸ **getCurrentPageKey**(): `string`

#### Returns

`string`

#### Defined in

[class/PageManager.js:66](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/PageManager.js#L66)

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

[class/PageManager.js:102](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/PageManager.js#L102)

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

[class/PageManager.js:129](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/PageManager.js#L129)

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

[class/PageManager.js:59](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/PageManager.js#L59)

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

[class/PageManager.js:91](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/PageManager.js#L91)

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

[class/PageManager.js:143](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/PageManager.js#L143)
