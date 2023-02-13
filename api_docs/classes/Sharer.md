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
| `settings` | `Object` |

#### Defined in

[class/Sharer.js:52](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L52)

## Properties

### share\_methods

• **share\_methods**: `Object`

#### Defined in

[class/Sharer.js:60](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L60)

___

### sharer\_settings

• **sharer\_settings**: `Record`<`string`, ``null`` \| `Partial`<`ShareMethod`\>\>

#### Defined in

[class/Sharer.js:56](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L56)

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

[class/Sharer.js:248](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L248)

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

[class/Sharer.js:292](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L292)

___

### getGroupedData

▸ **getGroupedData**(): `Object`

#### Returns

`Object`

#### Defined in

[class/Sharer.js:228](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L228)

___

### getNewButton

▸ **getNewButton**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

[class/Sharer.js:153](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L153)

___

### getNewWindow

▸ **getNewWindow**(): `HTMLElement`

#### Returns

`HTMLElement`

#### Defined in

[class/Sharer.js:132](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L132)

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

[class/Sharer.js:92](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L92)

___

### getShareMethods

▸ **getShareMethods**(): `Object`

#### Returns

`Object`

#### Defined in

[class/Sharer.js:97](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L97)

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

[class/Sharer.js:270](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L270)

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

[class/Sharer.js:261](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L261)

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

[class/Sharer.js:102](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L102)

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

[class/Sharer.js:125](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L125)

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

[class/Sharer.js:186](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L186)

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

[class/Sharer.js:117](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L117)

___

### setup

▸ **setup**(`settings`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `Object` |

#### Returns

`void`

#### Defined in

[class/Sharer.js:68](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L68)

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

[class/Sharer.js:85](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L85)

___

### setupShareMethods

▸ **setupShareMethods**(): `void`

#### Returns

`void`

#### Defined in

[class/Sharer.js:75](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L75)

___

### showGroupedData

▸ **showGroupedData**(): `void`

#### Returns

`void`

#### Defined in

[class/Sharer.js:195](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L195)

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

[class/Sharer.js:174](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/Sharer.js#L174)
