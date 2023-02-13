[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / DomHelper

# Class: DomHelper

Collection of DOM helper functions.
Static class.

## Table of contents

### Constructors

- [constructor](DomHelper.md#constructor)

### Methods

- [ChildrenSettings](DomHelper.md#childrensettings)
- [DOMSearchSettings](DomHelper.md#domsearchsettings)
- [DomElementSettings](DomHelper.md#domelementsettings)
- [FormOptions](DomHelper.md#formoptions)
- [MenuListSettings](DomHelper.md#menulistsettings)
- [NameValue](DomHelper.md#namevalue)
- [\_applyObjectReplacement](DomHelper.md#_applyobjectreplacement)
- [\_handleChildReplacements](DomHelper.md#_handlechildreplacements)
- [\_handleChildrenReplacements](DomHelper.md#_handlechildrenreplacements)
- [\_setChildren](DomHelper.md#_setchildren)
- [\_setEvents](DomHelper.md#_setevents)
- [appendChildren](DomHelper.md#appendchildren)
- [applyMarginsToDimensions](DomHelper.md#applymarginstodimensions)
- [arrayInputter](DomHelper.md#arrayinputter)
- [centerFixElement](DomHelper.md#centerfixelement)
- [clearForm](DomHelper.md#clearform)
- [convertArrToTableElement](DomHelper.md#convertarrtotableelement)
- [convertTableElementToArray](DomHelper.md#converttableelementtoarray)
- [convertTableHtmlToArray](DomHelper.md#converttablehtmltoarray)
- [convertTableRowElementsToArray](DomHelper.md#converttablerowelementstoarray)
- [createBreadcrumbList](DomHelper.md#createbreadcrumblist)
- [createCommonList](DomHelper.md#createcommonlist)
- [createElement](DomHelper.md#createelement)
- [createElementList](DomHelper.md#createelementlist)
- [createElements](DomHelper.md#createelements)
- [createHeadedArrayElement](DomHelper.md#createheadedarrayelement)
- [createHeadedKeyValueList](DomHelper.md#createheadedkeyvaluelist)
- [createHeadedList](DomHelper.md#createheadedlist)
- [createHeadedTable](DomHelper.md#createheadedtable)
- [createKeyValueList](DomHelper.md#createkeyvaluelist)
- [createList](DomHelper.md#createlist)
- [createTable](DomHelper.md#createtable)
- [displayElementAtPageDimensions](DomHelper.md#displayelementatpagedimensions)
- [displayElementAtScreenDimensions](DomHelper.md#displayelementatscreendimensions)
- [e](DomHelper.md#e)
- [elementChainer](DomHelper.md#elementchainer)
- [formify](DomHelper.md#formify)
- [getAllChildren](DomHelper.md#getallchildren)
- [getAllElements](DomHelper.md#getallelements)
- [getAttributeSelector](DomHelper.md#getattributeselector)
- [getAvailableElementEvents](DomHelper.md#getavailableelementevents)
- [getClosestParent](DomHelper.md#getclosestparent)
- [getDOMImage](DomHelper.md#getdomimage)
- [getDOMInputRow](DomHelper.md#getdominputrow)
- [getDOMInputsList](DomHelper.md#getdominputslist)
- [getDOMList](DomHelper.md#getdomlist)
- [getElementAttributes](DomHelper.md#getelementattributes)
- [getElementPageDimensions](DomHelper.md#getelementpagedimensions)
- [getElementPositionData](DomHelper.md#getelementpositiondata)
- [getElementScreenDimensions](DomHelper.md#getelementscreendimensions)
- [getElementsByAttribute](DomHelper.md#getelementsbyattribute)
- [getElementsByIds](DomHelper.md#getelementsbyids)
- [getElementsBySelectors](DomHelper.md#getelementsbyselectors)
- [getElementsMappedToSelectors](DomHelper.md#getelementsmappedtoselectors)
- [getElementsWithAttribute](DomHelper.md#getelementswithattribute)
- [getHtmlImport](DomHelper.md#gethtmlimport)
- [getNestedAttributeListFromElement](DomHelper.md#getnestedattributelistfromelement)
- [getParents](DomHelper.md#getparents)
- [groupify](DomHelper.md#groupify)
- [htmlifyEvent](DomHelper.md#htmlifyevent)
- [htmlifyEvents](DomHelper.md#htmlifyevents)
- [nestedInputter](DomHelper.md#nestedinputter)
- [removeTabIndexes](DomHelper.md#removetabindexes)
- [searchDom](DomHelper.md#searchdom)
- [setAttributes](DomHelper.md#setattributes)
- [setChildrenSettings](DomHelper.md#setchildrensettings)
- [setClickFileHandler](DomHelper.md#setclickfilehandler)
- [setEditMode](DomHelper.md#seteditmode)
- [setElementAsEditable](DomHelper.md#setelementaseditable)
- [setStyleDimensions](DomHelper.md#setstyledimensions)
- [setStyleMeasurements](DomHelper.md#setstylemeasurements)
- [setStylePosition](DomHelper.md#setstyleposition)
- [setTabIndexes](DomHelper.md#settabindexes)
- [setupMenuList](DomHelper.md#setupmenulist)
- [showAboveElement](DomHelper.md#showaboveelement)
- [startWatchingHtmlElementListenerChanges](DomHelper.md#startwatchinghtmlelementlistenerchanges)
- [stopWatchingHtmlElementListenerChanges](DomHelper.md#stopwatchinghtmlelementlistenerchanges)
- [textNodesUnder](DomHelper.md#textnodesunder)
- [watchDocumentSizeChanges](DomHelper.md#watchdocumentsizechanges)

## Constructors

### constructor

• **new DomHelper**()

## Methods

### ChildrenSettings

▸ `Static` **ChildrenSettings**(`options`): `ChildrenSettings`

Settings for lists

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`ChildrenSettings`\> |

#### Returns

`ChildrenSettings`

#### Defined in

[class/DomHelper.js:185](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L185)

___

### DOMSearchSettings

▸ `Static` **DOMSearchSettings**(`options?`): `DOMSearchSettings`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`DOMSearchSettings`\> |

#### Returns

`DOMSearchSettings`

#### Defined in

[class/DomHelper.js:170](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L170)

___

### DomElementSettings

▸ `Static` **DomElementSettings**(`options?`): `DomElementSettings`

Represent customizable parts of an HTML Element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`DomElementSettings`\> |

#### Returns

`DomElementSettings`

#### Defined in

[class/DomHelper.js:153](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L153)

___

### FormOptions

▸ `Static` **FormOptions**(`options?`): `FormOptions`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`FormOptions`\> |

#### Returns

`FormOptions`

#### Defined in

[class/DomHelper.js:849](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L849)

___

### MenuListSettings

▸ `Static` **MenuListSettings**(`options?`): `MenuListSettings`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`MenuListSettings`\> |

#### Returns

`MenuListSettings`

#### Defined in

[class/DomHelper.js:418](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L418)

___

### NameValue

▸ `Static` **NameValue**(): `object`

#### Returns

`object`

#### Defined in

[class/DomHelper.js:800](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L800)

___

### \_applyObjectReplacement

▸ `Static` `Private` **_applyObjectReplacement**(`obj`, `item`, `elementPropKey`, `replacements`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `any`\> |
| `item` | `any` |
| `elementPropKey` | `string` |
| `replacements` | `Record`<`string`, (`arg0`: `any`, `arg1`: `string`) => `any`\> |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:766](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L766)

___

### \_handleChildReplacements

▸ `Static` `Private` **_handleChildReplacements**(`item`, `format`, `replacements`): `DomElementSettings`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | `any` |
| `format` | `Partial`<`DomElementSettings`\> |
| `replacements` | `Object` |

#### Returns

`DomElementSettings`

#### Defined in

[class/DomHelper.js:735](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L735)

___

### \_handleChildrenReplacements

▸ `Static` `Private` **_handleChildrenReplacements**(`childrenSettings`): `DomElementSettings`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `childrenSettings` | `ChildrenSettings` |

#### Returns

`DomElementSettings`[]

#### Defined in

[class/DomHelper.js:714](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L714)

___

### \_setChildren

▸ `Static` `Private` **_setChildren**(`el`, `settingsArr`): `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `settingsArr` | `DomElementSettings`[] |

#### Returns

`HTMLElement`

#### Defined in

[class/DomHelper.js:696](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L696)

___

### \_setEvents

▸ `Static` `Private` **_setEvents**(`el`, `events`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `events` | `Object` |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:676](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L676)

___

### appendChildren

▸ `Static` **appendChildren**(`el`, `children`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `children` | `HTMLElement`[] |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:779](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L779)

___

### applyMarginsToDimensions

▸ `Static` **applyMarginsToDimensions**(`margins`, `dimensions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `margins` | `Partial`<`Margins`\> |
| `dimensions` | `CustomDOMRect` |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:994](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L994)

___

### arrayInputter

▸ `Static` **arrayInputter**(`objectInfoArray`): `HTMLUListElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectInfoArray` | { `key`: `string` ; `value`: `any`  }[] |

#### Returns

`HTMLUListElement`

#### Defined in

[class/DomHelper.js:1616](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1616)

___

### centerFixElement

▸ `Static` **centerFixElement**(`el`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:1871](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1871)

___

### clearForm

▸ `Static` **clearForm**(`form`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `form` | `HTMLFormElement` |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:619](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L619)

___

### convertArrToTableElement

▸ `Static` **convertArrToTableElement**(`arr`): `HTMLTableElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `string`[][] |

#### Returns

`HTMLTableElement`

#### Defined in

[class/DomHelper.js:1931](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1931)

___

### convertTableElementToArray

▸ `Static` **convertTableElementToArray**(`table`): `string`[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `HTMLTableElement` |

#### Returns

`string`[][]

#### Defined in

[class/DomHelper.js:1897](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1897)

___

### convertTableHtmlToArray

▸ `Static` **convertTableHtmlToArray**(`html`): `string`[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `html` | `string` |

#### Returns

`string`[][]

#### Defined in

[class/DomHelper.js:1884](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1884)

___

### convertTableRowElementsToArray

▸ `Static` **convertTableRowElementsToArray**(`rows`): `string`[][]

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `HTMLTableRowElement`[] |

#### Returns

`string`[][]

#### Defined in

[class/DomHelper.js:1906](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1906)

___

### createBreadcrumbList

▸ `Static` **createBreadcrumbList**(`links`, `separator`): `HTMLSpanElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `links` | (`string` \| `Link`)[] |
| `separator` | `string` |

#### Returns

`HTMLSpanElement`

#### Defined in

[class/DomHelper.js:559](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L559)

___

### createCommonList

▸ `Static` **createCommonList**(`arr`): `HTMLUListElement`

DOM list with name value pairs.
Common in Android settings pages.

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | { `name`: `string` ; `value`: `string` \| `HTMLElement`  }[] |

#### Returns

`HTMLUListElement`

#### Defined in

[class/DomHelper.js:814](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L814)

___

### createElement

▸ `Static` **createElement**(`options`): `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`DomElementSettings`\> |

#### Returns

`HTMLElement`

#### Defined in

[class/DomHelper.js:217](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L217)

___

### createElementList

▸ `Static` **createElementList**(`nameValues`): `HTMLUListElement`

**`Example`**

```ts
createElementList([{name: 'a', value: 'b'}])
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameValues` | `NameValue`[] |

#### Returns

`HTMLUListElement`

#### Defined in

[class/DomHelper.js:279](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L279)

___

### createElements

▸ `Static` **createElements**(`settingsArr`, `defaults`): `HTMLElement`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `settingsArr` | `Partial`<`DomElementSettings`\>[] |
| `defaults` | `Partial`<`DomElementSettings`\> |

#### Returns

`HTMLElement`[]

#### Defined in

[class/DomHelper.js:201](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L201)

___

### createHeadedArrayElement

▸ `Static` **createHeadedArrayElement**(`handle?`, `headerText`, `arr`): `HTMLDivElement`

**`Example`**

```ts
createHeadedArrayElement()
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `handle` | `undefined` \| (`arr`: `any`[]) => `HTMLElement` | `undefined` |
| `headerText` | `string` | `undefined` |
| `arr` | `any`[] | `undefined` |

#### Returns

`HTMLDivElement`

#### Defined in

[class/DomHelper.js:347](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L347)

___

### createHeadedKeyValueList

▸ `Static` **createHeadedKeyValueList**(`header`, `obj`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |
| `obj` | `object` |

#### Returns

`HTMLDivElement`

#### Defined in

[class/DomHelper.js:409](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L409)

___

### createHeadedList

▸ `Static` **createHeadedList**(`header`, `arr`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |
| `arr` | `string`[] |

#### Returns

`HTMLDivElement`

#### Defined in

[class/DomHelper.js:399](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L399)

___

### createHeadedTable

▸ `Static` **createHeadedTable**(`header`, `arr`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `header` | `string` |
| `arr` | `string`[] |

#### Returns

`HTMLDivElement`

#### Defined in

[class/DomHelper.js:389](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L389)

___

### createKeyValueList

▸ `Static` **createKeyValueList**(`obj`): `HTMLUListElement`

**`Example`**

```ts
createKeyValueList({ name1: 'value1', name2: 'value2' })
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `any`\> |

#### Returns

`HTMLUListElement`

#### Defined in

[class/DomHelper.js:300](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L300)

___

### createList

▸ `Static` **createList**(`arr`): `HTMLUListElement`

**`Example`**

```ts
createList(['a', 'b'])
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | (`string` \| `HTMLElement`)[] |

#### Returns

`HTMLUListElement`

#### Defined in

[class/DomHelper.js:319](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L319)

___

### createTable

▸ `Static` **createTable**(`rows`): `HTMLTableElement`

**`Example`**

```ts
createTable([[1, 2][3, 4]])
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `string`[][] |

#### Returns

`HTMLTableElement`

#### Defined in

[class/DomHelper.js:253](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L253)

___

### displayElementAtPageDimensions

▸ `Static` **displayElementAtPageDimensions**(`el`, `dimensions`): `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `dimensions` | `object` |

#### Returns

`HTMLElement`

#### Defined in

[class/DomHelper.js:1045](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1045)

___

### displayElementAtScreenDimensions

▸ `Static` **displayElementAtScreenDimensions**(`el`, `dimensions`): `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `dimensions` | `object` |

#### Returns

`HTMLElement`

#### Defined in

[class/DomHelper.js:1014](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1014)

___

### e

▸ `Static` **e**(`id`): `undefined` \| ``null`` \| `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| ``null`` \| `HTMLElement`

#### Defined in

[class/DomHelper.js:1345](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1345)

___

### elementChainer

▸ `Static` **elementChainer**(`el`): `Object`

Makes setting element info chainable.
TODO: Import native types and add to each below.

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`Object`

chainer with functions represeting properties/functions of element all returning chainer

#### Defined in

[class/DomHelper.js:1957](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1957)

___

### formify

▸ `Static` **formify**(`el`, `fOptions`): `HTMLFormElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `fOptions` | `Partial`<`FormOptions`\> |

#### Returns

`HTMLFormElement`

#### Defined in

[class/DomHelper.js:865](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L865)

___

### getAllChildren

▸ `Static` **getAllChildren**(`el`): `Element`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `Document` \| `HTMLElement` |

#### Returns

`Element`[]

#### Defined in

[class/DomHelper.js:1751](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1751)

___

### getAllElements

▸ `Static` **getAllElements**(): `Element`[]

#### Returns

`Element`[]

#### Defined in

[class/DomHelper.js:1742](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1742)

___

### getAttributeSelector

▸ `Static` **getAttributeSelector**(`attr`, `value?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `attr` | `string` | `undefined` |
| `value` | `string` | `''` |

#### Returns

`string`

#### Defined in

[class/DomHelper.js:1787](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1787)

___

### getAvailableElementEvents

▸ `Static` **getAvailableElementEvents**(`el`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`string`[]

#### Defined in

[class/DomHelper.js:1204](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1204)

___

### getClosestParent

▸ `Static` **getClosestParent**(`el`, `selector`): ``null`` \| `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `selector` | `string` |

#### Returns

``null`` \| `HTMLElement`

#### Defined in

[class/DomHelper.js:1282](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1282)

___

### getDOMImage

▸ `Static` **getDOMImage**(`src`): `HTMLImageElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |

#### Returns

`HTMLImageElement`

#### Defined in

[class/DomHelper.js:1393](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1393)

___

### getDOMInputRow

▸ `Static` **getDOMInputRow**(`input`): `HTMLTableRowElement`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `HTMLInputElement` | Must contain name and value properties. |

#### Returns

`HTMLTableRowElement`

#### Defined in

[class/DomHelper.js:1419](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1419)

___

### getDOMInputsList

▸ `Static` **getDOMInputsList**(`inputs`): `HTMLTableElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputs` | `HTMLInputElement`[] |

#### Returns

`HTMLTableElement`

#### Defined in

[class/DomHelper.js:1404](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1404)

___

### getDOMList

▸ `Static` **getDOMList**(`arr`): `HTMLUListElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `string`[] |

#### Returns

`HTMLUListElement`

#### Defined in

[class/DomHelper.js:1375](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1375)

___

### getElementAttributes

▸ `Static` **getElementAttributes**(`el`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`Object`

#### Defined in

[class/DomHelper.js:1768](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1768)

___

### getElementPageDimensions

▸ `Static` **getElementPageDimensions**(`el`): `CustomDOMRect`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`CustomDOMRect`

#### Defined in

[class/DomHelper.js:936](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L936)

___

### getElementPositionData

▸ `Static` **getElementPositionData**(`elementPosition`): ``null`` \| `string`

Goal:
Use position to get DOM data.
Would be used where position remains same but data can vary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementPosition` | `ElementPosition` |

#### Returns

``null`` \| `string`

#### Defined in

[class/DomHelper.js:1485](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1485)

___

### getElementScreenDimensions

▸ `Static` **getElementScreenDimensions**(`el`): `DOMRect`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`DOMRect`

#### Defined in

[class/DomHelper.js:928](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L928)

___

### getElementsByAttribute

▸ `Static` **getElementsByAttribute**(`attr`, `value`): `NodeListOf`<`Element`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `string` |
| `value` | `string` |

#### Returns

`NodeListOf`<`Element`\>

#### Defined in

[class/DomHelper.js:1804](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1804)

___

### getElementsByIds

▸ `Static` **getElementsByIds**(`ids`): `HTMLElement`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

`HTMLElement`[]

#### Defined in

[class/DomHelper.js:1355](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1355)

___

### getElementsBySelectors

▸ `Static` **getElementsBySelectors**(`selectors`, `baseElement?`): `Element`[]

**`See`**

https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `selectors` | `string`[] | `undefined` |
| `baseElement?` | `Element` \| `Document` \| `HTMLElement` | `document` |

#### Returns

`Element`[]

#### Defined in

[class/DomHelper.js:1705](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1705)

___

### getElementsMappedToSelectors

▸ `Static` **getElementsMappedToSelectors**(`selectors`, `baseElement?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `selectors` | `string`[] | `undefined` |
| `baseElement?` | `Document` \| `HTMLElement` | `document` |

#### Returns

`Object`

#### Defined in

[class/DomHelper.js:1724](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1724)

___

### getElementsWithAttribute

▸ `Static` **getElementsWithAttribute**(`attr`): `HTMLElement`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `string` |

#### Returns

`HTMLElement`[]

#### Defined in

[class/DomHelper.js:1760](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1760)

___

### getHtmlImport

▸ `Static` **getHtmlImport**(`selector`): ``null`` \| `DocumentFragment`

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#### Returns

``null`` \| `DocumentFragment`

#### Defined in

[class/DomHelper.js:1321](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1321)

___

### getNestedAttributeListFromElement

▸ `Static` **getNestedAttributeListFromElement**(`el`, `attr`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `Element` \| `Document` |
| `attr` | `string` |

#### Returns

`string`[]

#### Defined in

[class/DomHelper.js:1814](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1814)

___

### getParents

▸ `Static` **getParents**(`el`): `HTMLElement`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`HTMLElement`[]

#### Defined in

[class/DomHelper.js:1261](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1261)

___

### groupify

▸ `Static` **groupify**(`nameValues`): `HTMLDivElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameValues` | `NameValue`[] |

#### Returns

`HTMLDivElement`

#### Defined in

[class/DomHelper.js:603](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L603)

___

### htmlifyEvent

▸ `Static` **htmlifyEvent**(`el`, `eventName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `eventName` | `string` |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:1245](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1245)

___

### htmlifyEvents

▸ `Static` **htmlifyEvents**(`el`, `eventNames`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `eventNames` | `string`[] |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:1225](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1225)

___

### nestedInputter

▸ `Static` **nestedInputter**(`obj`): `HTMLUListElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |

#### Returns

`HTMLUListElement`

#### Defined in

[class/DomHelper.js:1643](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1643)

___

### removeTabIndexes

▸ `Static` **removeTabIndexes**(): `void`

#### Returns

`void`

#### Defined in

[class/DomHelper.js:1298](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1298)

___

### searchDom

▸ `Static` **searchDom**(`searchStr`, `optionalType?`, `el?`): `undefined` \| `ElementPosition`[]

Goal: Search for any format of data at once in DOM.
Should only get direct parent of text nodes OR direct element.
Should get position as best as possible so can replace if needed.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `searchStr` | `string` | `undefined` |
| `optionalType` | `Partial`<`DOMSearchSettings`\> | `{}` |
| `el` | `Document` \| `HTMLElement` | `document` |

#### Returns

`undefined` \| `ElementPosition`[]

#### Defined in

[class/DomHelper.js:1531](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1531)

___

### setAttributes

▸ `Static` **setAttributes**(`el`, `attributes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `attributes` | `Object` |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:790](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L790)

___

### setChildrenSettings

▸ `Static` **setChildrenSettings**(`settings`, `childrenOptions`): `DomElementSettings`[]

Helper for applying array of items to element settings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `DomElementSettings` |
| `childrenOptions` | `Partial`<`ChildrenSettings`\> |

#### Returns

`DomElementSettings`[]

#### Defined in

[class/DomHelper.js:241](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L241)

___

### setClickFileHandler

▸ `Static` **setClickFileHandler**(`el`, `onFileHandle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `onFileHandle` | () => `void` |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:1451](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1451)

___

### setEditMode

▸ `Static` **setEditMode**(`attr`, `bool`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `string` |
| `bool` | `boolean` |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:1853](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1853)

___

### setElementAsEditable

▸ `Static` **setElementAsEditable**(`el`, `onChange`, `bool`): `void`

Sets as editable or non-editable.
Adds/removes onChange event depending on edit mode.

**`See`**

https://stackoverflow.com/questions/8694054/onchange-event-with-contenteditable

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `onChange` | () => `void` |
| `bool` | `boolean` |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:1833](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1833)

___

### setStyleDimensions

▸ `Static` **setStyleDimensions**(`el`, `dimensions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `dimensions` | `Record`<keyof `CSSStyleDeclaration`, ``null`` \| `string`\> |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:961](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L961)

___

### setStyleMeasurements

▸ `Static` **setStyleMeasurements**(`el`, `obj`, `allowed`, `unit?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `el` | `HTMLElement` | `undefined` |
| `obj` | `Record`<keyof `CSSStyleDeclaration`, ``null`` \| `string`\> | `undefined` |
| `allowed` | `string`[] | `undefined` |
| `unit?` | `string` | `undefined` |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:973](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L973)

___

### setStylePosition

▸ `Static` **setStylePosition**(`el`, `position`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |
| `position` | `any` |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:951](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L951)

___

### setTabIndexes

▸ `Static` **setTabIndexes**(`elements`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `elements` | `HTMLElement`[] |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:1309](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1309)

___

### setupMenuList

▸ `Static` **setupMenuList**(`parentEl`, `settings`): `HTMLElement`

Creates a list from settings + items.
May include a header.
Parent element is required to add header, etc.
Parent element preferred rather than using returned element due to nested formatting possible.
If id is included for item, anchor tag with id as id + _a is also included.

**`Deprecated`**

This function is bloated. Should standardize and use what is necessary.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentEl` | `HTMLElement` |
| `settings` | `MenuListSettings` |

#### Returns

`HTMLElement`

#### Defined in

[class/DomHelper.js:451](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L451)

___

### showAboveElement

▸ `Static` **showAboveElement**(`shownElement`, `targetElement`, `options`): `HTMLElement`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shownElement` | `HTMLElement` |
| `targetElement` | `HTMLElement` |
| `options` | `Partial`<`Margins`\> |

#### Returns

`HTMLElement`

#### Defined in

[class/DomHelper.js:1071](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1071)

___

### startWatchingHtmlElementListenerChanges

▸ `Static` **startWatchingHtmlElementListenerChanges**(`eventName`, `handle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `handle` | `Function` |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:1109](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1109)

___

### stopWatchingHtmlElementListenerChanges

▸ `Static` **stopWatchingHtmlElementListenerChanges**(`eventName`, `handle`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `handle` | `Function` |

#### Returns

`boolean`

#### Defined in

[class/DomHelper.js:1165](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1165)

___

### textNodesUnder

▸ `Static` **textNodesUnder**(`el`): `Node`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `HTMLElement` |

#### Returns

`Node`[]

Text node

#### Defined in

[class/DomHelper.js:1690](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1690)

___

### watchDocumentSizeChanges

▸ `Static` **watchDocumentSizeChanges**(`element`, `handle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |
| `handle` | `Function` |

#### Returns

`void`

#### Defined in

[class/DomHelper.js:1094](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/DomHelper.js#L1094)
