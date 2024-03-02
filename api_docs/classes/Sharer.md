[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / Sharer

# Class: Sharer

Data sharing handling.

## Table of contents

### Constructors

- [constructor](Sharer.md#constructor)

### Properties

- [share\_methods](Sharer.md#share_methods)
- [sharer\_settings](Sharer.md#sharer_settings)

### Methods

- [GroupedDataItem](Sharer.md#groupeddataitem)
- [ShareMethod](Sharer.md#sharemethod)
- [getGroupedData](Sharer.md#getgroupeddata)
- [getNewButton](Sharer.md#getnewbutton)
- [getNewWindow](Sharer.md#getnewwindow)
- [getShareMethod](Sharer.md#getsharemethod)
- [getShareMethods](Sharer.md#getsharemethods)
- [getShareMethodsByAttr](Sharer.md#getsharemethodsbyattr)
- [getShareMethodsByType](Sharer.md#getsharemethodsbytype)
- [getTypes](Sharer.md#gettypes)
- [handleShareClick](Sharer.md#handleshareclick)
- [hideWindow](Sharer.md#hidewindow)
- [setShareElement](Sharer.md#setshareelement)
- [setup](Sharer.md#setup)
- [setupShareMethod](Sharer.md#setupsharemethod)
- [setupShareMethods](Sharer.md#setupsharemethods)
- [showGroupedData](Sharer.md#showgroupeddata)
- [showWindow](Sharer.md#showwindow)

## Constructors

### constructor

• **new Sharer**(`settings`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `any` |

#### Defined in

Sharer.js:33

## Properties

### share\_methods

• **share\_methods**: `Object`

#### Defined in

Sharer.js:41

___

### sharer\_settings

• **sharer\_settings**: `Record`<`string`, ``null`` \| `Partial`<`ShareMethod`\>\>

#### Defined in

Sharer.js:37

## Methods

### GroupedDataItem

▸ **GroupedDataItem**(`options?`): `GroupedDataItem`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`GroupedDataItem`\> |

#### Returns

`GroupedDataItem`

#### Defined in

Sharer.js:229

___

### ShareMethod

▸ **ShareMethod**(`options?`): `ShareMethod`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`ShareMethod`\> |

#### Returns

`ShareMethod`

#### Defined in

Sharer.js:273

___

### getGroupedData

▸ **getGroupedData**(): `Object`

#### Returns

`Object`

#### Defined in

Sharer.js:209

___

### getNewButton

▸ **getNewButton**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

Sharer.js:134

___

### getNewWindow

▸ **getNewWindow**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

Sharer.js:113

___

### getShareMethod

▸ **getShareMethod**(`key`): `ShareMethod`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | ``"nfc"`` \| ``"line"`` \| ``"barcode"`` \| ``"ar_code"`` \| ``"url_recognizer"`` \| ``"data_recognizer"`` \| ``"audio_data"`` \| ``"bluetooth"`` \| ``"wifi"`` \| ``"facebook"`` \| ``"skype"`` \| ``"infrared"`` |

#### Returns

`ShareMethod`

#### Defined in

Sharer.js:73

___

### getShareMethods

▸ **getShareMethods**(): `Object`

#### Returns

`Object`

#### Defined in

Sharer.js:78

___

### getShareMethodsByAttr

▸ **getShareMethodsByAttr**(`attr`, `value`): `Partial`<`Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `string` |
| `value` | `any` |

#### Returns

`Partial`<`Object`\>

#### Defined in

Sharer.js:251

___

### getShareMethodsByType

▸ **getShareMethodsByType**(`type`): `Partial`<`Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`Partial`<`Object`\>

#### Defined in

Sharer.js:242

___

### getTypes

▸ **getTypes**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `account` | {} |
| `audio` | {} |
| `other` | {} |
| `visual` | {} |
| `wireless` | {} |

#### Defined in

Sharer.js:83

___

### handleShareClick

▸ **handleShareClick**(`ev`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

#### Returns

`void`

#### Defined in

Sharer.js:106

___

### hideWindow

▸ **hideWindow**(`el`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`void`

#### Defined in

Sharer.js:167

___

### setShareElement

▸ **setShareElement**(`el`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`void`

#### Defined in

Sharer.js:98

___

### setup

▸ **setup**(`settings`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `any` |

#### Returns

`void`

#### Defined in

Sharer.js:49

___

### setupShareMethod

▸ **setupShareMethod**(`key`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `data` | `any` |

#### Returns

`void`

#### Defined in

Sharer.js:66

___

### setupShareMethods

▸ **setupShareMethods**(): `void`

#### Returns

`void`

#### Defined in

Sharer.js:56

___

### showGroupedData

▸ **showGroupedData**(): `void`

#### Returns

`void`

#### Defined in

Sharer.js:176

___

### showWindow

▸ **showWindow**(`el`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`void`

#### Defined in

Sharer.js:155
