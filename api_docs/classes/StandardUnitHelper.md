[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / StandardUnitHelper

# Class: StandardUnitHelper

Collection of functions for handling units.

## Table of contents

### Constructors

- [constructor](StandardUnitHelper.md#constructor)

### Methods

- [NumberUnit](StandardUnitHelper.md#numberunit)
- [Unit](StandardUnitHelper.md#unit)
- [getBestUnit](StandardUnitHelper.md#getbestunit)
- [getMeasurementBaseMultipliers](StandardUnitHelper.md#getmeasurementbasemultipliers)
- [getMeasurementMultipliers](StandardUnitHelper.md#getmeasurementmultipliers)
- [getNumberParts](StandardUnitHelper.md#getnumberparts)
- [getNumberWithBestUnit](StandardUnitHelper.md#getnumberwithbestunit)
- [getNumberWithUnit](StandardUnitHelper.md#getnumberwithunit)
- [getSiUnitMultipliers](StandardUnitHelper.md#getsiunitmultipliers)
- [getUnit](StandardUnitHelper.md#getunit)
- [getUnitByExponent](StandardUnitHelper.md#getunitbyexponent)
- [getUnitByName](StandardUnitHelper.md#getunitbyname)
- [getUnitByProperty](StandardUnitHelper.md#getunitbyproperty)
- [getUnitBySymbol](StandardUnitHelper.md#getunitbysymbol)
- [getUnitWithClosestExponent](StandardUnitHelper.md#getunitwithclosestexponent)
- [multipliersToConverters](StandardUnitHelper.md#multiplierstoconverters)

## Constructors

### constructor

• **new StandardUnitHelper**()

## Methods

### NumberUnit

▸ `Static` **NumberUnit**(): `NumberUnit`

#### Returns

`NumberUnit`

#### Defined in

StandardUnitHelper.js:117

___

### Unit

▸ `Static` **Unit**(): `Unit`

#### Returns

`Unit`

#### Defined in

StandardUnitHelper.js:109

___

### getBestUnit

▸ `Static` **getBestUnit**(`num`): `Unit`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

`Unit`

#### Defined in

StandardUnitHelper.js:241

___

### getMeasurementBaseMultipliers

▸ `Static` **getMeasurementBaseMultipliers**(`measurement`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `measurement` | `Measurement` |

#### Returns

`Object`

#### Defined in

StandardUnitHelper.js:297

___

### getMeasurementMultipliers

▸ `Static` **getMeasurementMultipliers**(`mKey`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mKey` | ``"time"`` \| ``"weight"`` |

#### Returns

`Object`

#### Defined in

StandardUnitHelper.js:336

___

### getNumberParts

▸ `Static` **getNumberParts**(`num`): `Object`

Converts e type exponential number to parts.
ONLY returns strings. Check should be done elsewhere.

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `exponent` | `string` |
| `mantissa` | `string` |

#### Defined in

StandardUnitHelper.js:282

___

### getNumberWithBestUnit

▸ `Static` **getNumberWithBestUnit**(`num`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

`string`

#### Defined in

StandardUnitHelper.js:233

___

### getNumberWithUnit

▸ `Static` **getNumberWithUnit**(`num`, `unit`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |
| `unit` | `Unit` |

#### Returns

`string`

#### Defined in

StandardUnitHelper.js:223

___

### getSiUnitMultipliers

▸ `Static` **getSiUnitMultipliers**(): `Object`

#### Returns

`Object`

#### Defined in

StandardUnitHelper.js:356

___

### getUnit

▸ `Static` **getUnit**(`unitKey`): ``null`` \| { `exponent`: `number` = -1; `name`: `string` = 'deci'; `symbol`: `string` = 'd' }

Alias function for ease-of-use.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `unitKey` | `string` | TODO |

#### Returns

``null`` \| { `exponent`: `number` = -1; `name`: `string` = 'deci'; `symbol`: `string` = 'd' }

#### Defined in

StandardUnitHelper.js:149

___

### getUnitByExponent

▸ `Static` **getUnitByExponent**(`num`): ``null`` \| { `exponent`: `number` = -1; `name`: `string` = 'deci'; `symbol`: `string` = 'd' }

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `num` | `number` | TODO |

#### Returns

``null`` \| { `exponent`: `number` = -1; `name`: `string` = 'deci'; `symbol`: `string` = 'd' }

#### Defined in

StandardUnitHelper.js:198

___

### getUnitByName

▸ `Static` **getUnitByName**(`str`): ``null`` \| { `exponent`: `number` = -1; `name`: `string` = 'deci'; `symbol`: `string` = 'd' }

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | TODO |

#### Returns

``null`` \| { `exponent`: `number` = -1; `name`: `string` = 'deci'; `symbol`: `string` = 'd' }

#### Defined in

StandardUnitHelper.js:182

___

### getUnitByProperty

▸ `Static` **getUnitByProperty**(`prop`, `val`): ``null`` \| { `exponent`: `number` = -1; `name`: `string` = 'deci'; `symbol`: `string` = 'd' }

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prop` | keyof `Unit` |  |
| `val` | `any` | TODO |

#### Returns

``null`` \| { `exponent`: `number` = -1; `name`: `string` = 'deci'; `symbol`: `string` = 'd' }

#### Defined in

StandardUnitHelper.js:207

___

### getUnitBySymbol

▸ `Static` **getUnitBySymbol**(`str`): ``null`` \| { `exponent`: `number` = -1; `name`: `string` = 'deci'; `symbol`: `string` = 'd' }

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | TODO |

#### Returns

``null`` \| { `exponent`: `number` = -1; `name`: `string` = 'deci'; `symbol`: `string` = 'd' }

#### Defined in

StandardUnitHelper.js:190

___

### getUnitWithClosestExponent

▸ `Static` **getUnitWithClosestExponent**(`exponent`): ``null`` \| `Unit`

Ideal should be following format: [1 DIGIT].[DECIMALS] [EXPONENT]

#### Parameters

| Name | Type |
| :------ | :------ |
| `exponent` | `number` |

#### Returns

``null`` \| `Unit`

#### Defined in

StandardUnitHelper.js:255

___

### multipliersToConverters

▸ `Static` **multipliersToConverters**(`multipliers`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `multipliers` | `Object` |

#### Returns

`Object`

#### Defined in

StandardUnitHelper.js:319
