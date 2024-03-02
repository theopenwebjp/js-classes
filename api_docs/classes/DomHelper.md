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
- [attemptUpdateNestedTextContent](DomHelper.md#attemptupdatenestedtextcontent)
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
- [getElementsBoundingRect](DomHelper.md#getelementsboundingrect)
- [getElementsByAttribute](DomHelper.md#getelementsbyattribute)
- [getElementsByIds](DomHelper.md#getelementsbyids)
- [getElementsBySelectors](DomHelper.md#getelementsbyselectors)
- [getElementsMappedToSelectors](DomHelper.md#getelementsmappedtoselectors)
- [getElementsWithAttribute](DomHelper.md#getelementswithattribute)
- [getHtmlImport](DomHelper.md#gethtmlimport)
- [getNestedAttributeListFromElement](DomHelper.md#getnestedattributelistfromelement)
- [getParents](DomHelper.md#getparents)
- [getUsedDOMBoundingRect](DomHelper.md#getuseddomboundingrect)
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

DomHelper.js:49

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

DomHelper.js:34

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

DomHelper.js:17

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

DomHelper.js:713

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

DomHelper.js:282

___

### NameValue

▸ `Static` **NameValue**(): `object`

#### Returns

`object`

#### Defined in

DomHelper.js:664

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

DomHelper.js:630

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

DomHelper.js:599

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

DomHelper.js:578

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

DomHelper.js:560

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

DomHelper.js:540

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

DomHelper.js:643

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

DomHelper.js:858

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

DomHelper.js:1480

___

### attemptUpdateNestedTextContent

▸ `Static` **attemptUpdateNestedTextContent**(`element`, `textContent`): `boolean`

Attempts to update nested textContent.
Usually if element.textContent = '...' is used, any nested elements will be overwritten.
Sometimes this is not desired, and any nested might not be known or may change.
This function attempts to update the textContent by checking for any elements with ONLY the same text, no nested elements, and then updating that element's textContent if the element exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `Element` |
| `textContent` | `string` |

#### Returns

`boolean`

#### Defined in

DomHelper.js:1963

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

DomHelper.js:1735

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

DomHelper.js:483

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

DomHelper.js:1795

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

DomHelper.js:1761

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

DomHelper.js:1748

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

DomHelper.js:1770

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

DomHelper.js:423

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

DomHelper.js:678

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

DomHelper.js:81

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

DomHelper.js:143

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

DomHelper.js:65

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

DomHelper.js:211

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

DomHelper.js:273

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

DomHelper.js:263

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

DomHelper.js:253

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

DomHelper.js:164

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

DomHelper.js:183

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

DomHelper.js:117

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

DomHelper.js:909

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

DomHelper.js:878

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

DomHelper.js:1209

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

DomHelper.js:1821

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

DomHelper.js:729

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

DomHelper.js:1615

___

### getAllElements

▸ `Static` **getAllElements**(): `Element`[]

#### Returns

`Element`[]

#### Defined in

DomHelper.js:1606

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

DomHelper.js:1651

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

DomHelper.js:1068

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

DomHelper.js:1146

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

DomHelper.js:1257

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

DomHelper.js:1283

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

DomHelper.js:1268

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

DomHelper.js:1239

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

DomHelper.js:1632

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

DomHelper.js:800

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

DomHelper.js:1349

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

DomHelper.js:792

___

### getElementsBoundingRect

▸ `Static` **getElementsBoundingRect**(`elements`): `Object`

Same as normal get bounding rect, but treats multiple elements as a single group.

#### Parameters

| Name | Type |
| :------ | :------ |
| `elements` | `Element`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bottom` | `number` |
| `height` | `number` |
| `left` | `number` |
| `right` | `number` |
| `top` | `number` |
| `width` | `number` |

#### Defined in

DomHelper.js:1921

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

DomHelper.js:1668

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

DomHelper.js:1219

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

DomHelper.js:1569

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

DomHelper.js:1588

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

DomHelper.js:1624

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

DomHelper.js:1185

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

DomHelper.js:1678

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

DomHelper.js:1125

___

### getUsedDOMBoundingRect

▸ `Static` **getUsedDOMBoundingRect**(): `Object`

Gets bounding rect of all DOM.
Usually, checking the size of "body" is enough. However, static, aboslute elements and badly cleared elements may cause the size of body to be different.
This function gets the bounding rect by checking each element.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `bottom` | `number` |
| `height` | `number` |
| `left` | `number` |
| `right` | `number` |
| `top` | `number` |
| `width` | `number` |

#### Defined in

DomHelper.js:1912

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

DomHelper.js:467

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

DomHelper.js:1109

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

DomHelper.js:1089

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

DomHelper.js:1507

___

### removeTabIndexes

▸ `Static` **removeTabIndexes**(): `void`

#### Returns

`void`

#### Defined in

DomHelper.js:1162

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

DomHelper.js:1395

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

DomHelper.js:654

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

DomHelper.js:105

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

DomHelper.js:1315

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

DomHelper.js:1717

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

DomHelper.js:1697

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

DomHelper.js:825

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

DomHelper.js:837

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

DomHelper.js:815

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

DomHelper.js:1173

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

DomHelper.js:315

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

DomHelper.js:935

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

DomHelper.js:973

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

DomHelper.js:1029

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

DomHelper.js:1554

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

DomHelper.js:958
