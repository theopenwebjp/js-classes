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

[class/FormManager.js:84](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L84)

## Properties

### constants

• **constants**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `REQUIRED_ATTR` | `string` |

#### Defined in

[class/FormManager.js:87](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L87)

___

### domHelper

• **domHelper**: typeof [`DomHelper`](DomHelper.md)

#### Defined in

[class/FormManager.js:85](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L85)

___

### extendedTypes

• **extendedTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `boolean` | `ExtendedType` |

#### Defined in

[class/FormManager.js:191](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L191)

___

### inputTypes

• **inputTypes**: `Object`

#### Defined in

[class/FormManager.js:102](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L102)

___

### settings

• **settings**: `FormManagerSettings`

#### Defined in

[class/FormManager.js:94](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L94)

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

[class/FormManager.js:514](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L514)

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

[class/FormManager.js:488](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L488)

___

### attributesToSelector

▸ **attributesToSelector**(`attributes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `Object` |

#### Returns

`string`

#### Defined in

[class/FormManager.js:574](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L574)

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

[class/FormManager.js:438](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L438)

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

[class/FormManager.js:422](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L422)

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

[class/FormManager.js:829](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L829)

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

[class/FormManager.js:287](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L287)

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

[class/FormManager.js:259](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L259)

___

### createTag

▸ **createTag**(`tagName`, `attributes`, `children?`): `HTMLElement`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `tagName` | `string` | `undefined` |
| `attributes` | `Object` | `undefined` |
| `children` | `DomElementSettings`[] | `[]` |

#### Returns

`HTMLElement`

#### Defined in

[class/FormManager.js:502](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L502)

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

[class/FormManager.js:623](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L623)

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

[class/FormManager.js:609](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L609)

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

[class/FormManager.js:875](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L875)

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

[class/FormManager.js:857](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L857)

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

[class/FormManager.js:793](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L793)

___

### formSettings

▸ **formSettings**(): `FormSettings`

#### Returns

`FormSettings`

#### Defined in

[class/FormManager.js:227](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L227)

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

[class/FormManager.js:466](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L466)

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

[class/FormManager.js:689](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L689)

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

[class/FormManager.js:712](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L712)

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

[class/FormManager.js:744](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L744)

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

[class/FormManager.js:674](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L674)

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

[class/FormManager.js:647](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L647)

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

[class/FormManager.js:399](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L399)

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

[class/FormManager.js:530](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L530)

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

[class/FormManager.js:407](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L407)

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

[class/FormManager.js:476](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L476)

___

### inputObject

▸ **inputObject**(): `InputObject`

#### Returns

`InputObject`

#### Defined in

[class/FormManager.js:210](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L210)

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

[class/FormManager.js:587](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L587)

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

[class/FormManager.js:819](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L819)

___

### keyValueObjToArrays

▸ **keyValueObjToArrays**(`obj`): [`string`, `any`][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |

#### Returns

[`string`, `any`][]

#### Defined in

[class/FormManager.js:539](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L539)

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

[class/FormManager.js:278](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L278)

___

### setAttributes

▸ **setAttributes**(`el`, `attributes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `attributes` | `Object` |

#### Returns

`void`

#### Defined in

[class/FormManager.js:522](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L522)

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

[class/FormManager.js:391](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L391)

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

[class/FormManager.js:776](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L776)

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

[class/FormManager.js:761](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L761)

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

[class/FormManager.js:239](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FormManager.js#L239)
