[@davole/intent-service](../README.md) / Intent

# Class: Intent

Intent class

An 'intent' represents the intention to do something. An instance of this class represents an action that is bound to an intent.

## Table of contents

### Constructors

- [constructor](Intent.md#constructor)

### Properties

- [callback](Intent.md#callback)
- [counter](Intent.md#counter)
- [once](Intent.md#once)
- [to](Intent.md#to)

### Methods

- [execute](Intent.md#execute)

## Constructors

### constructor

• **new Intent**(`to`, `callback`)

Intent constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | `string` | Definition |
| `callback` | (...`params`: `any`[]) => `any` | Callback function |

#### Defined in

[src/classes/intent.class.ts:29](https://github.com/davole/intent-service/blob/144c074/src/classes/intent.class.ts#L29)

## Properties

### callback

• `Private` **callback**: (...`params`: `any`[]) => `any`

#### Type declaration

▸ (...`params`): `any`

Intent's callback function

##### Parameters

| Name | Type |
| :------ | :------ |
| `...params` | `any`[] |

##### Returns

`any`

#### Defined in

[src/classes/intent.class.ts:22](https://github.com/davole/intent-service/blob/144c074/src/classes/intent.class.ts#L22)

___

### counter

• **counter**: `number` = `0`

Counts the executions of the intent

#### Defined in

[src/classes/intent.class.ts:13](https://github.com/davole/intent-service/blob/144c074/src/classes/intent.class.ts#L13)

___

### once

• **once**: `boolean` = `false`

If true intent's callback only once

#### Defined in

[src/classes/intent.class.ts:16](https://github.com/davole/intent-service/blob/144c074/src/classes/intent.class.ts#L16)

___

### to

• **to**: `string`

Intent name/identifier

#### Defined in

[src/classes/intent.class.ts:19](https://github.com/davole/intent-service/blob/144c074/src/classes/intent.class.ts#L19)

## Methods

### execute

▸ **execute**(...`params`): `void`

Execute the intent's callback

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...params` | `any`[] | Callback parameters |

#### Returns

`void`

#### Defined in

[src/classes/intent.class.ts:38](https://github.com/davole/intent-service/blob/144c074/src/classes/intent.class.ts#L38)
