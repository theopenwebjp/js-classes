[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / FormManager

# Class: FormManager

Collection of functions for handling forms.
Instantiable class for custom handling. Allows custom input elements.

## Table of contents

### Constructors

- [constructor](FormManager.md#constructor)

### Properties

- [extendedTypes](FormManager.md#extendedtypes)
- [inputTypes](FormManager.md#inputtypes)
- [settings](FormManager.md#settings)

### Methods

- [createInput](FormManager.md#createinput)
- [createInputs](FormManager.md#createinputs)
- [focusOnFirstInput](FormManager.md#focusonfirstinput)
- [getCurrentPageInputs](FormManager.md#getcurrentpageinputs)
- [getElementInputType](FormManager.md#getelementinputtype)
- [getInputValue](FormManager.md#getinputvalue)
- [hasSingleTag](FormManager.md#hassingletag)
- [isInput](FormManager.md#isinput)
- [m](FormManager.md#m)
- [setInputValue](FormManager.md#setinputvalue)
- [setInputValues](FormManager.md#setinputvalues)
- [settingsToForm](FormManager.md#settingstoform)

## Constructors

### constructor

• **new FormManager**(`settings?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings?` | `Partial`<`FormManagerSettings`\> |

#### Defined in

[FormManager.js:13](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FormManager.js#L13)

## Properties

### extendedTypes

• **extendedTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `boolean` | `ExtendedType` |

#### Defined in

[FormManager.js:115](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FormManager.js#L115)

___

### inputTypes

• **inputTypes**: `Object`

#### Defined in

[FormManager.js:26](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FormManager.js#L26)

___

### settings

• **settings**: `FormManagerSettings`

#### Defined in

[FormManager.js:18](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FormManager.js#L18)

## Methods

### createInput

▸ **createInput**(`settings`): `HTMLElement`

Input: <div><label>name</label> <div>{INPUT}</div></div>

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `InputObject` |

#### Returns

`HTMLElement`

#### Defined in

[FormManager.js:184](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FormManager.js#L184)

___

### createInputs

▸ **createInputs**(`settings`): `HTMLElement`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `InputObject`[] |

#### Returns

`HTMLElement`[]

#### Defined in

[FormManager.js:156](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FormManager.js#L156)

___

### focusOnFirstInput

▸ **focusOnFirstInput**(`el`): `void`

Focuses on first element found.
Useful for having forms that auto focus.

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`void`

#### Defined in

[FormManager.js:402](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FormManager.js#L402)

___

### getCurrentPageInputs

▸ **getCurrentPageInputs**(`options?`): `HTMLElement`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`PageInputOptions`\> |

#### Returns

`HTMLElement`[]

#### Defined in

[FormManager.js:298](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FormManager.js#L298)

___

### getElementInputType

▸ **getElementInputType**(`el`): ``null`` \| `Partial`<`InputType`\>

Gets input type from element

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

``null`` \| `Partial`<`InputType`\>

InputType. Default if not found.

#### Defined in

[FormManager.js:321](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FormManager.js#L321)

___

### getInputValue

▸ **getInputValue**(`el`): `any`

Gets input value of any form element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLInputElement` \| `HTMLSelectElement` |

#### Returns

`any`

input value

#### Defined in

[FormManager.js:353](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FormManager.js#L353)

___

### hasSingleTag

▸ **hasSingleTag**(`type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`boolean`

#### Defined in

[FormManager.js:286](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FormManager.js#L286)

___

### isInput

▸ **isInput**(`el`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`boolean`

#### Defined in

[FormManager.js:428](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FormManager.js#L428)

___

### m

▸ **m**(`key`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`string`

#### Defined in

[FormManager.js:175](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FormManager.js#L175)

___

### setInputValue

▸ **setInputValue**(`el`, `val`): `void`

Sets single input element's value

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLInputElement` \| `HTMLSelectElement` |
| `val` | `any` |

#### Returns

`void`

#### Defined in

[FormManager.js:385](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FormManager.js#L385)

___

### setInputValues

▸ **setInputValues**(`map`): `void`

Sets input values from a map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `Object` | {selector1: val1, ...} |

#### Returns

`void`

#### Defined in

[FormManager.js:370](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FormManager.js#L370)

___

### settingsToForm

▸ **settingsToForm**(`settings`): `HTMLFormElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `FormSettings` |

#### Returns

`HTMLFormElement`

#### Defined in

[FormManager.js:136](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FormManager.js#L136)
