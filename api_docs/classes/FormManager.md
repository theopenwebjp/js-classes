[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / FormManager

# Class: FormManager

Collection of functions for handling forms.
Static class.

## Table of contents

### Constructors

- [constructor](FormManager.md#constructor)

### Properties

- [constants](FormManager.md#constants)
- [domHelper](FormManager.md#domhelper)
- [extendedTypes](FormManager.md#extendedtypes)
- [inputTypes](FormManager.md#inputtypes)
- [settings](FormManager.md#settings)

### Methods

- [appendChildren](FormManager.md#appendchildren)
- [arrayifyAll](FormManager.md#arrayifyall)
- [attributesToSelector](FormManager.md#attributestoselector)
- [checkRequiredInput](FormManager.md#checkrequiredinput)
- [checkRequiredInputs](FormManager.md#checkrequiredinputs)
- [clickRadioInputs](FormManager.md#clickradioinputs)
- [createInput](FormManager.md#createinput)
- [createInputs](FormManager.md#createinputs)
- [createTag](FormManager.md#createtag)
- [elementToInputObject](FormManager.md#elementtoinputobject)
- [elementsToInputObjects](FormManager.md#elementstoinputobjects)
- [enterFormInputs](FormManager.md#enterforminputs)
- [enterTextInputs](FormManager.md#entertextinputs)
- [focusOnFirstInput](FormManager.md#focusonfirstinput)
- [formSettings](FormManager.md#formsettings)
- [getCheckedElements](FormManager.md#getcheckedelements)
- [getCurrentPageInputs](FormManager.md#getcurrentpageinputs)
- [getElementInputType](FormManager.md#getelementinputtype)
- [getInputValue](FormManager.md#getinputvalue)
- [getLabel](FormManager.md#getlabel)
- [getLabelElement](FormManager.md#getlabelelement)
- [getRequiredInputs](FormManager.md#getrequiredinputs)
- [getTableHeaderValue](FormManager.md#gettableheadervalue)
- [handleSubmit](FormManager.md#handlesubmit)
- [hasSingleTag](FormManager.md#hassingletag)
- [inputObject](FormManager.md#inputobject)
- [inputTypesToSelectors](FormManager.md#inputtypestoselectors)
- [isInput](FormManager.md#isinput)
- [keyValueObjToArrays](FormManager.md#keyvalueobjtoarrays)
- [m](FormManager.md#m)
- [setAttributes](FormManager.md#setattributes)
- [setInputAsRequired](FormManager.md#setinputasrequired)
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

FormManager.js:12

## Properties

### constants

• **constants**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `REQUIRED_ATTR` | `string` |

#### Defined in

FormManager.js:15

___

### domHelper

• **domHelper**: typeof [`DomHelper`](DomHelper.md)

#### Defined in

FormManager.js:13

___

### extendedTypes

• **extendedTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `boolean` | `ExtendedType` |

#### Defined in

FormManager.js:119

___

### inputTypes

• **inputTypes**: `Object`

#### Defined in

FormManager.js:30

___

### settings

• **settings**: `FormManagerSettings`

#### Defined in

FormManager.js:22

## Methods

### appendChildren

▸ **appendChildren**(`el`, `children`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `children` | `HTMLElement`[] |

#### Returns

`void`

#### Defined in

FormManager.js:439

___

### arrayifyAll

▸ **arrayifyAll**(`arr`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `any`[] |

#### Returns

`any`[]

#### Defined in

FormManager.js:413

___

### attributesToSelector

▸ **attributesToSelector**(`attributes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `Dictionary` |

#### Returns

`string`

#### Defined in

FormManager.js:499

___

### checkRequiredInput

▸ **checkRequiredInput**(`el`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`boolean`

#### Defined in

FormManager.js:363

___

### checkRequiredInputs

▸ **checkRequiredInputs**(`form`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `form` | `HTMLFormElement` |

#### Returns

`boolean`

#### Defined in

FormManager.js:347

___

### clickRadioInputs

▸ **clickRadioInputs**(`wrapper`): `void`

Clicks many radio inputs for when want to automatically test large radio input lists.
Even works in frameworks such as React = MUI.

**`Example`**

```ts
clickRadioInputs(document.querySelector('form'))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapper` | `HTMLElement` | Usually a form. |

#### Returns

`void`

#### Defined in

FormManager.js:754

___

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

FormManager.js:215

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

FormManager.js:187

___

### createTag

▸ **createTag**(`tagName`, `attributes`, `children?`): `HTMLElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tagName` | `string` | `undefined` |
| `attributes` | `Dictionary` | `undefined` |
| `children` | `DomElementSettings`[] | `[]` |

#### Returns

`HTMLElement`

#### Defined in

FormManager.js:427

___

### elementToInputObject

▸ **elementToInputObject**(`element`): `InputObject`

Should keep only necessary information for editing

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

#### Returns

`InputObject`

#### Defined in

FormManager.js:548

___

### elementsToInputObjects

▸ **elementsToInputObjects**(`elements`): `InputObject`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `elements` | `HTMLElement`[] |

#### Returns

`InputObject`[]

#### Defined in

FormManager.js:534

___

### enterFormInputs

▸ **enterFormInputs**(`wrapper`): `void`

Randomly inputs form inputs.

**`Example`**

```ts
enterTextInputs(document.querySelector('form'))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapper` | `HTMLElement` | Usually a form. |

#### Returns

`void`

#### Defined in

FormManager.js:800

___

### enterTextInputs

▸ **enterTextInputs**(`wrapper`): `void`

**`Example`**

```ts
enterTextInputs(document.querySelector('form'))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wrapper` | `HTMLElement` | Usually a form. |

#### Returns

`void`

#### Defined in

FormManager.js:782

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

FormManager.js:718

___

### formSettings

▸ **formSettings**(): `FormSettings`

#### Returns

`FormSettings`

#### Defined in

FormManager.js:155

___

### getCheckedElements

▸ **getCheckedElements**(`el`): `Element`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`Element`[]

#### Defined in

FormManager.js:391

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

FormManager.js:614

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

FormManager.js:637

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

FormManager.js:669

___

### getLabel

▸ **getLabel**(`element`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

#### Returns

`string`

#### Defined in

FormManager.js:599

___

### getLabelElement

▸ **getLabelElement**(`element`): `undefined` \| `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |

#### Returns

`undefined` \| `HTMLElement`

#### Defined in

FormManager.js:572

___

### getRequiredInputs

▸ **getRequiredInputs**(`form`): `HTMLElement`[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `form` | `HTMLFormElement` | TODO |

#### Returns

`HTMLElement`[]

#### Defined in

FormManager.js:324

___

### getTableHeaderValue

▸ **getTableHeaderValue**(`el`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`string`

#### Defined in

FormManager.js:455

___

### handleSubmit

▸ **handleSubmit**(`ev`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ev` | `Event` |

#### Returns

`boolean`

#### Defined in

FormManager.js:332

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

FormManager.js:401

___

### inputObject

▸ **inputObject**(): `InputObject`

#### Returns

`InputObject`

#### Defined in

FormManager.js:138

___

### inputTypesToSelectors

▸ **inputTypesToSelectors**(`inputTypes`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputTypes` | `Object` |

#### Returns

`string`[]

#### Defined in

FormManager.js:512

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

FormManager.js:744

___

### keyValueObjToArrays

▸ **keyValueObjToArrays**(`obj`): [`string`, `any`][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Dictionary` |

#### Returns

[`string`, `any`][]

#### Defined in

FormManager.js:464

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

FormManager.js:206

___

### setAttributes

▸ **setAttributes**(`el`, `attributes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `attributes` | `Dictionary` |

#### Returns

`void`

#### Defined in

FormManager.js:447

___

### setInputAsRequired

▸ **setInputAsRequired**(`el`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`void`

#### Defined in

FormManager.js:316

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

FormManager.js:701

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

FormManager.js:686

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

FormManager.js:167
