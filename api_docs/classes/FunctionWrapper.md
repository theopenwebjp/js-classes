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

[FunctionWrapper.js:12](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L12)

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

[FunctionWrapper.js:13](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L13)

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

[FunctionWrapper.js:19](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L19)

## Methods

### Reference

▸ **Reference**(): `Reference`

#### Returns

`Reference`

#### Defined in

[FunctionWrapper.js:88](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L88)

___

### WrapStatus

▸ **WrapStatus**(): `WrapStatus`

#### Returns

`WrapStatus`

#### Defined in

[FunctionWrapper.js:98](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L98)

___

### attemptWrapFunction

▸ **attemptWrapFunction**(`data`, `reference`, `options`): `any`

Attempts to wrap function. Because is "attempt", if not function, is ignored.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `reference` | `Reference` |
| `options` | `Partial`<`WrapperOptions`\> |

#### Returns

`any`

#### Defined in

[FunctionWrapper.js:594](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L594)

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

[FunctionWrapper.js:581](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L581)

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

[FunctionWrapper.js:247](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L247)

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

[FunctionWrapper.js:570](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L570)

___

### functionData

▸ **functionData**(): `FunctionData`

#### Returns

`FunctionData`

#### Defined in

[FunctionWrapper.js:61](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L61)

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

[FunctionWrapper.js:718](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L718)

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

[FunctionWrapper.js:667](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L667)

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

[FunctionWrapper.js:693](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L693)

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

[FunctionWrapper.js:551](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L551)

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

[FunctionWrapper.js:145](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L145)

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

[FunctionWrapper.js:191](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L191)

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

[FunctionWrapper.js:522](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L522)

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

[FunctionWrapper.js:533](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L533)

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

[FunctionWrapper.js:635](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L635)

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

[FunctionWrapper.js:658](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L658)

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

[FunctionWrapper.js:617](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L617)

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

[FunctionWrapper.js:766](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L766)

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

[FunctionWrapper.js:755](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L755)

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

[FunctionWrapper.js:743](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L743)

___

### setup

▸ **setup**(): `void`

#### Returns

`void`

#### Defined in

[FunctionWrapper.js:112](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L112)

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

[FunctionWrapper.js:174](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L174)

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

[FunctionWrapper.js:121](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L121)

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

[FunctionWrapper.js:504](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L504)

___

### stackTraceData

▸ **stackTraceData**(): `StackTraceData`

All info is non-wrap function info.

#### Returns

`StackTraceData`

#### Defined in

[FunctionWrapper.js:75](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L75)

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

[FunctionWrapper.js:390](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L390)

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

[FunctionWrapper.js:319](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L319)

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

[FunctionWrapper.js:427](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L427)

___

### stopStackTrace

▸ **stopStackTrace**(): `StackTraceData`[]

TODO

#### Returns

`StackTraceData`[]

#### Defined in

[FunctionWrapper.js:460](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L460)

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

[FunctionWrapper.js:482](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L482)

___

### unwrapFunctions

▸ **unwrapFunctions**(): `void`

#### Returns

`void`

#### Defined in

[FunctionWrapper.js:468](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L468)

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

[FunctionWrapper.js:211](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L211)

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

[FunctionWrapper.js:560](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L560)

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

[FunctionWrapper.js:42](https://github.com/theopenwebjp/js-classes/blob/3046fa5/src/FunctionWrapper.js#L42)
