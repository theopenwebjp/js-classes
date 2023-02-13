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

[class/StandardUnitHelper.js:146](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StandardUnitHelper.js#L146)

___

### Unit

▸ `Static` **Unit**(): `Unit`

#### Returns

`Unit`

#### Defined in

[class/StandardUnitHelper.js:138](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StandardUnitHelper.js#L138)

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

[class/StandardUnitHelper.js:270](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StandardUnitHelper.js#L270)

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

[class/StandardUnitHelper.js:326](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StandardUnitHelper.js#L326)

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

[class/StandardUnitHelper.js:365](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StandardUnitHelper.js#L365)

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

[class/StandardUnitHelper.js:311](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StandardUnitHelper.js#L311)

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

[class/StandardUnitHelper.js:262](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StandardUnitHelper.js#L262)

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

[class/StandardUnitHelper.js:252](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StandardUnitHelper.js#L252)

___

### getSiUnitMultipliers

▸ `Static` **getSiUnitMultipliers**(): `Object`

#### Returns

`Object`

#### Defined in

[class/StandardUnitHelper.js:385](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StandardUnitHelper.js#L385)

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

[class/StandardUnitHelper.js:178](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StandardUnitHelper.js#L178)

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

[class/StandardUnitHelper.js:227](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StandardUnitHelper.js#L227)

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

[class/StandardUnitHelper.js:211](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StandardUnitHelper.js#L211)

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

[class/StandardUnitHelper.js:236](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StandardUnitHelper.js#L236)

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

[class/StandardUnitHelper.js:219](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StandardUnitHelper.js#L219)

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

[class/StandardUnitHelper.js:284](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StandardUnitHelper.js#L284)

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

[class/StandardUnitHelper.js:348](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/StandardUnitHelper.js#L348)
