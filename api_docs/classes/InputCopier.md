[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / InputCopier

# Class: InputCopier

Copy inputs from one list to another.

## Table of contents

### Constructors

- [constructor](InputCopier.md#constructor)

### Properties

- [elements](InputCopier.md#elements)
- [events](InputCopier.md#events)
- [state](InputCopier.md#state)

### Methods

- [Page](InputCopier.md#page)
- [addPage](InputCopier.md#addpage)
- [newPage](InputCopier.md#newpage)
- [removePage](InputCopier.md#removepage)
- [setup](InputCopier.md#setup)

## Constructors

### constructor

• **new InputCopier**()

#### Defined in

[class/InputCopier.js:52](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/InputCopier.js#L52)

## Properties

### elements

• **elements**: `CopierElements`

#### Defined in

[class/InputCopier.js:56](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/InputCopier.js#L56)

___

### events

• **events**: `CopierEvents`

#### Defined in

[class/InputCopier.js:64](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/InputCopier.js#L64)

___

### state

• **state**: `Object`

**`Property`**

// TODO: What is this?

#### Type declaration

| Name | Type |
| :------ | :------ |
| `copy` | ``null`` |

#### Defined in

[class/InputCopier.js:73](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/InputCopier.js#L73)

## Methods

### Page

▸ **Page**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `elements` | `PageElements` |
| `events` | `PageEvents` |
| `state` | `PageState` |
| `CalculatedRow` | (`name`: `string`, `value`: `any`) => `HTMLElement` |
| `Row` | (`obj?`: `RowOptions`) => `HTMLElement` |
| `addRow` | (`row`: `HTMLElement`) => `void` |
| `addRows` | (`rows`: `HTMLElement`[]) => `void` |
| `deleteRow` | (`row`: `HTMLElement`) => `undefined` \| `HTMLElement` |
| `deleteRowFromButton` | (`ev`: `MouseEvent`) => `void` |
| `formatRows` | (`arr`: `RowOptions`[]) => `HTMLElement`[] |
| `fromJson` | (`jsonStr`: `string`) => `boolean` |
| `getElement` | () => `HTMLElement` |
| `getRows` | () => `HTMLElement`[] |
| `newRow` | () => `void` |
| `setup` | () => `void` |
| `toJson` | () => `string` |

#### Defined in

[class/InputCopier.js:89](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/InputCopier.js#L89)

___

### addPage

▸ **addPage**(`page`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `page` | `Object` |
| `page.elements` | `PageElements` |
| `page.events` | `PageEvents` |
| `page.state` | `PageState` |
| `page.CalculatedRow` | (`name`: `string`, `value`: `any`) => `HTMLElement` |
| `page.Row` | (`obj?`: `RowOptions`) => `HTMLElement` |
| `page.addRow` | (`row`: `HTMLElement`) => `void` |
| `page.addRows` | (`rows`: `HTMLElement`[]) => `void` |
| `page.deleteRow` | (`row`: `HTMLElement`) => `undefined` \| `HTMLElement` |
| `page.deleteRowFromButton` | (`ev`: `MouseEvent`) => `void` |
| `page.formatRows` | (`arr`: `RowOptions`[]) => `HTMLElement`[] |
| `page.fromJson` | (`jsonStr`: `string`) => `boolean` |
| `page.getElement` | () => `HTMLElement` |
| `page.getRows` | () => `HTMLElement`[] |
| `page.newRow` | () => `void` |
| `page.setup` | () => `void` |
| `page.toJson` | () => `string` |

#### Returns

`void`

#### Defined in

[class/InputCopier.js:320](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/InputCopier.js#L320)

___

### newPage

▸ **newPage**(): `object`

#### Returns

`object`

#### Defined in

[class/InputCopier.js:310](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/InputCopier.js#L310)

___

### removePage

▸ **removePage**(`el`): `undefined` \| `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`undefined` \| `HTMLElement`

#### Defined in

[class/InputCopier.js:330](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/InputCopier.js#L330)

___

### setup

▸ **setup**(): `void`

#### Returns

`void`

#### Defined in

[class/InputCopier.js:79](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/InputCopier.js#L79)
