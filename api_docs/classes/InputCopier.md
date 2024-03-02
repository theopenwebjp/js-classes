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

InputCopier.js:7

## Properties

### elements

• **elements**: `CopierElements`

#### Defined in

InputCopier.js:11

___

### events

• **events**: `CopierEvents`

#### Defined in

InputCopier.js:19

___

### state

• **state**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `copy` | `any` |

#### Defined in

InputCopier.js:27

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

InputCopier.js:43

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

InputCopier.js:274

___

### newPage

▸ **newPage**(): `object`

#### Returns

`object`

#### Defined in

InputCopier.js:264

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

InputCopier.js:284

___

### setup

▸ **setup**(): `void`

#### Returns

`void`

#### Defined in

InputCopier.js:33
