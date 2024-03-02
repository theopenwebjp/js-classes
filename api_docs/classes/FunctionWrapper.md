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

FunctionWrapper.js:13

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

FunctionWrapper.js:14

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

FunctionWrapper.js:20

## Methods

### Reference

▸ **Reference**(): `Reference`

#### Returns

`Reference`

#### Defined in

FunctionWrapper.js:89

___

### WrapStatus

▸ **WrapStatus**(): `WrapStatus`

#### Returns

`WrapStatus`

#### Defined in

FunctionWrapper.js:99

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

FunctionWrapper.js:595

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

FunctionWrapper.js:582

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

FunctionWrapper.js:248

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

FunctionWrapper.js:571

___

### functionData

▸ **functionData**(): `FunctionData`

#### Returns

`FunctionData`

#### Defined in

FunctionWrapper.js:62

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

FunctionWrapper.js:719

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

FunctionWrapper.js:668

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

FunctionWrapper.js:694

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

FunctionWrapper.js:552

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

FunctionWrapper.js:146

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

FunctionWrapper.js:192

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

FunctionWrapper.js:523

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

FunctionWrapper.js:534

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

FunctionWrapper.js:636

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

FunctionWrapper.js:659

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

FunctionWrapper.js:618

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

FunctionWrapper.js:767

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

FunctionWrapper.js:756

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

FunctionWrapper.js:744

___

### setup

▸ **setup**(): `void`

#### Returns

`void`

#### Defined in

FunctionWrapper.js:113

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

FunctionWrapper.js:175

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

FunctionWrapper.js:122

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

FunctionWrapper.js:505

___

### stackTraceData

▸ **stackTraceData**(): `StackTraceData`

All info is non-wrap function info.

#### Returns

`StackTraceData`

#### Defined in

FunctionWrapper.js:76

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

FunctionWrapper.js:391

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

FunctionWrapper.js:320

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

FunctionWrapper.js:428

___

### stopStackTrace

▸ **stopStackTrace**(): `StackTraceData`[]

TODO

#### Returns

`StackTraceData`[]

#### Defined in

FunctionWrapper.js:461

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

FunctionWrapper.js:483

___

### unwrapFunctions

▸ **unwrapFunctions**(): `void`

#### Returns

`void`

#### Defined in

FunctionWrapper.js:469

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

FunctionWrapper.js:212

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

FunctionWrapper.js:561

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

FunctionWrapper.js:43
