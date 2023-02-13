[@theopenweb/js-classes](../README.md) / [Exports](../modules.md) / FunctionWrapper

# Class: FunctionWrapper

Dependencies: utility.js
Function wrapping functions.
FunctionWrapper functions not allowed to be wrapped.
Any function from FunctionWrapper should not be stack traced.

## Table of contents

### Constructors

- [constructor](FunctionWrapper.md#constructor)

### Properties

- [settings](FunctionWrapper.md#settings)
- [status](FunctionWrapper.md#status)

### Methods

- [Reference](FunctionWrapper.md#reference)
- [WrapStatus](FunctionWrapper.md#wrapstatus)
- [attemptWrapFunction](FunctionWrapper.md#attemptwrapfunction)
- [attemptWrapObjectFunction](FunctionWrapper.md#attemptwrapobjectfunction)
- [createWrapFunction](FunctionWrapper.md#createwrapfunction)
- [deepWrapObjectFunctions](FunctionWrapper.md#deepwrapobjectfunctions)
- [functionData](FunctionWrapper.md#functiondata)
- [getCommonEventData](FunctionWrapper.md#getcommoneventdata)
- [getFunctionData](FunctionWrapper.md#getfunctiondata)
- [handleCommonEvent](FunctionWrapper.md#handlecommonevent)
- [handleEvent](FunctionWrapper.md#handleevent)
- [handlePreparation](FunctionWrapper.md#handlepreparation)
- [handleWrapReference](FunctionWrapper.md#handlewrapreference)
- [isBad](FunctionWrapper.md#isbad)
- [isPossibleBad](FunctionWrapper.md#ispossiblebad)
- [isWrapForbidden](FunctionWrapper.md#iswrapforbidden)
- [isWrapped](FunctionWrapper.md#iswrapped)
- [isWrapperFunction](FunctionWrapper.md#iswrapperfunction)
- [logFunction](FunctionWrapper.md#logfunction)
- [onComplete](FunctionWrapper.md#oncomplete)
- [onStart](FunctionWrapper.md#onstart)
- [setup](FunctionWrapper.md#setup)
- [setupWrapStatus](FunctionWrapper.md#setupwrapstatus)
- [simpleWrapFunction](FunctionWrapper.md#simplewrapfunction)
- [stackTrace](FunctionWrapper.md#stacktrace)
- [stackTraceData](FunctionWrapper.md#stacktracedata)
- [stackTraceFunction](FunctionWrapper.md#stacktracefunction)
- [stackTraceFunctionCombinations](FunctionWrapper.md#stacktracefunctioncombinations)
- [startStackTrace](FunctionWrapper.md#startstacktrace)
- [stopStackTrace](FunctionWrapper.md#stopstacktrace)
- [unwrapFunction](FunctionWrapper.md#unwrapfunction)
- [unwrapFunctions](FunctionWrapper.md#unwrapfunctions)
- [wrapFunction](FunctionWrapper.md#wrapfunction)
- [wrapObjectFunctions](FunctionWrapper.md#wrapobjectfunctions)
- [wrapperOptions](FunctionWrapper.md#wrapperoptions)

## Constructors

### constructor

• **new FunctionWrapper**()

#### Defined in

[class/FunctionWrapper.js:76](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L76)

## Properties

### settings

• **settings**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `events` | { `complete`: `string` = 'onComplete'; `start`: `string` = 'onStart' } |
| `events.complete` | `string` |
| `events.start` | `string` |

#### Defined in

[class/FunctionWrapper.js:77](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L77)

___

### status

• **status**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `disableStackTrace` | `boolean` |
| `stackTrace` | `StackTraceData`[] |
| `wrap` | `Wrap` |

#### Defined in

[class/FunctionWrapper.js:83](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L83)

## Methods

### Reference

▸ **Reference**(): `Reference`

#### Returns

`Reference`

#### Defined in

[class/FunctionWrapper.js:152](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L152)

___

### WrapStatus

▸ **WrapStatus**(): `WrapStatus`

#### Returns

`WrapStatus`

#### Defined in

[class/FunctionWrapper.js:162](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L162)

___

### attemptWrapFunction

▸ **attemptWrapFunction**(`data`, `reference`, `options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `reference` | `any` |
| `options` | `Partial`<`WrapperOptions`\> |

#### Returns

`any`

#### Defined in

[class/FunctionWrapper.js:660](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L660)

___

### attemptWrapObjectFunction

▸ **attemptWrapObjectFunction**(`obj`, `key`, `options`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |
| `key` | `string` |
| `options` | `Partial`<`WrapperOptions`\> |

#### Returns

`any`

#### Defined in

[class/FunctionWrapper.js:648](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L648)

___

### createWrapFunction

▸ **createWrapFunction**(`func`, `options`): `WrapperFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |
| `options` | `WrapperOptions` |

#### Returns

`WrapperFunction`

#### Defined in

[class/FunctionWrapper.js:311](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L311)

___

### deepWrapObjectFunctions

▸ **deepWrapObjectFunctions**(`parentObj`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentObj` | `Object` |
| `options` | `Partial`<`WrapperOptions`\> |

#### Returns

`void`

#### Defined in

[class/FunctionWrapper.js:634](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L634)

___

### functionData

▸ **functionData**(): `FunctionData`

#### Returns

`FunctionData`

#### Defined in

[class/FunctionWrapper.js:125](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L125)

___

### getCommonEventData

▸ **getCommonEventData**(`objOptions`, `funcData`, `options`): `CommonEventData`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objOptions` | `Partial`<`CommonEventData`\> |
| `funcData` | `FunctionData` |
| `options` | `WrapperOptions` |

#### Returns

`CommonEventData`

#### Defined in

[class/FunctionWrapper.js:784](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L784)

___

### getFunctionData

▸ **getFunctionData**(`func`, `args`, `returnVal?`, `...args`): `FunctionData`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `func` | `Function` | `undefined` |
| `args` | `any`[] | `undefined` |
| `returnVal` | `any` | `undefined` |
| `...args` | `any`[] | `undefined` |

#### Returns

`FunctionData`

#### Defined in

[class/FunctionWrapper.js:733](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L733)

___

### handleCommonEvent

▸ **handleCommonEvent**(`obj`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `CommonEventData` |

#### Returns

`boolean`

#### Defined in

[class/FunctionWrapper.js:759](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L759)

___

### handleEvent

▸ **handleEvent**(`eventType`, `args?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `eventType` | ``"start"`` \| ``"complete"`` | `undefined` |
| `args` | `any`[] | `[]` |

#### Returns

`any`

#### Defined in

[class/FunctionWrapper.js:615](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L615)

___

### handlePreparation

▸ **handlePreparation**(`name`, `inPreparation`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `inPreparation` | `boolean` |

#### Returns

`boolean`

#### Defined in

[class/FunctionWrapper.js:209](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L209)

___

### handleWrapReference

▸ **handleWrapReference**(`wrapperFunction`, `reference`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wrapperFunction` | `WrapperFunction` |
| `reference` | `Reference` |

#### Returns

`void`

#### Defined in

[class/FunctionWrapper.js:255](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L255)

___

### isBad

▸ **isBad**(`obj`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |
| `obj.data` | `any` |
| `obj.options` | `WrapperOptions` |

#### Returns

`boolean`

#### Defined in

[class/FunctionWrapper.js:586](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L586)

___

### isPossibleBad

▸ **isPossibleBad**(`funcData`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `funcData` | `FunctionData` |

#### Returns

`boolean`

#### Defined in

[class/FunctionWrapper.js:597](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L597)

___

### isWrapForbidden

▸ **isWrapForbidden**(`func`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |

#### Returns

`boolean`

#### Defined in

[class/FunctionWrapper.js:701](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L701)

___

### isWrapped

▸ **isWrapped**(`func`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `WrapperFunction` |

#### Returns

`boolean`

#### Defined in

[class/FunctionWrapper.js:724](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L724)

___

### isWrapperFunction

▸ **isWrapperFunction**(`data`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`boolean`

#### Defined in

[class/FunctionWrapper.js:683](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L683)

___

### logFunction

▸ **logFunction**(`funcData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `funcData` | `CommonEventData` |

#### Returns

`void`

#### Defined in

[class/FunctionWrapper.js:832](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L832)

___

### onComplete

▸ **onComplete**(`funcData`, `options`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `funcData` | `FunctionData` |
| `options` | `WrapperOptions` |

#### Returns

`boolean`

#### Defined in

[class/FunctionWrapper.js:821](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L821)

___

### onStart

▸ **onStart**(`funcData`, `options`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `funcData` | `FunctionData` |
| `options` | `WrapperOptions` |

#### Returns

`boolean`

#### Defined in

[class/FunctionWrapper.js:809](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L809)

___

### setup

▸ **setup**(): `void`

#### Returns

`void`

#### Defined in

[class/FunctionWrapper.js:176](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L176)

___

### setupWrapStatus

▸ **setupWrapStatus**(`wrapperFunction`, `func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wrapperFunction` | `WrapperFunction` |
| `func` | `Function` |

#### Returns

`void`

#### Defined in

[class/FunctionWrapper.js:238](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L238)

___

### simpleWrapFunction

▸ **simpleWrapFunction**(`func`, `before?`, `after?`): (...`args`: `any`[]) => `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `func` | `Function` | `undefined` |
| `before` | `undefined` \| `Function` | `undefined` |
| `after` | `undefined` \| `Function` | `undefined` |

#### Returns

`fn`

▸ (`...args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

[class/FunctionWrapper.js:185](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L185)

___

### stackTrace

▸ **stackTrace**(`func`): `StackTraceData`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | () => `void` |

#### Returns

`StackTraceData`

#### Defined in

[class/FunctionWrapper.js:568](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L568)

___

### stackTraceData

▸ **stackTraceData**(): `StackTraceData`

All info is non-wrap function info.

#### Returns

`StackTraceData`

#### Defined in

[class/FunctionWrapper.js:139](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L139)

___

### stackTraceFunction

▸ **stackTraceFunction**(`func`, `returnHandle`, `obj`): () => `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `Function` | Function to stacktrace |
| `returnHandle` | (`trace`: `StackTraceData`[]) => `void` |  |
| `obj` | `object` |  |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[class/FunctionWrapper.js:454](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L454)

___

### stackTraceFunctionCombinations

▸ **stackTraceFunctionCombinations**(`funcs`, `callback`, `obj`): `undefined` \| ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `funcs` | `Function`[] |
| `callback` | (`trace`: `StackTraceData`[]) => `void` |
| `obj` | `object` |

#### Returns

`undefined` \| ``false``

#### Defined in

[class/FunctionWrapper.js:383](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L383)

___

### startStackTrace

▸ **startStackTrace**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |

#### Returns

`void`

#### Defined in

[class/FunctionWrapper.js:491](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L491)

___

### stopStackTrace

▸ **stopStackTrace**(): `StackTraceData`[]

TODO

#### Returns

`StackTraceData`[]

#### Defined in

[class/FunctionWrapper.js:524](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L524)

___

### unwrapFunction

▸ **unwrapFunction**(`wrapperFunction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wrapperFunction` | `WrapperFunction` |

#### Returns

`void`

#### Defined in

[class/FunctionWrapper.js:546](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L546)

___

### unwrapFunctions

▸ **unwrapFunctions**(): `void`

#### Returns

`void`

#### Defined in

[class/FunctionWrapper.js:532](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L532)

___

### wrapFunction

▸ **wrapFunction**(`func`, `reference`, `wrapperOptions?`): ``false`` \| `Function`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `Function` |
| `reference` | `Reference` |
| `wrapperOptions` | `undefined` \| `Partial`<`WrapperOptions`\> |

#### Returns

``false`` \| `Function`

#### Defined in

[class/FunctionWrapper.js:275](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L275)

___

### wrapObjectFunctions

▸ **wrapObjectFunctions**(`obj`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |
| `options` | `object` |

#### Returns

`void`

#### Defined in

[class/FunctionWrapper.js:624](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L624)

___

### wrapperOptions

▸ **wrapperOptions**(`options?`): `WrapperOptions`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`<`WrapperOptions`\> |

#### Returns

`WrapperOptions`

#### Defined in

[class/FunctionWrapper.js:106](https://github.com/theopenwebjp/js-classes/blob/3f0dc33/class/FunctionWrapper.js#L106)
