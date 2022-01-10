[@davole/intent-service](../README.md) / IntentService

# Class: IntentService

Intent service

The intent service is the main interface to work with intents. While an intent object allows for a more detailed setup, the intent service itself can be used without instantiating an intent object.

## Table of contents

### Constructors

- [constructor](IntentService.md#constructor)

### Properties

- [intents](IntentService.md#intents)

### Methods

- [addIntent](IntentService.md#addintent)
- [addIntentTo](IntentService.md#addintentto)
- [executeIntent](IntentService.md#executeintent)
- [getIntents](IntentService.md#getintents)
- [intendTo](IntentService.md#intendto)
- [removeIntent](IntentService.md#removeintent)
- [removeIntentTo](IntentService.md#removeintentto)
- [removeIntents](IntentService.md#removeintents)

## Constructors

### constructor

• **new IntentService**()

## Properties

### intents

• `Private` **intents**: [`Intent`](Intent.md)[] = `[]`

#### Defined in

[src/services/intent.service.ts:14](https://github.com/davole/intent-service/blob/144c074/src/services/intent.service.ts#L14)

## Methods

### addIntent

▸ **addIntent**(`intent`): `void`

Add an intent to the service. This intent can then be called (wantTo) by consumers of the intent service.

#### Parameters

| Name | Type |
| :------ | :------ |
| `intent` | [`Intent`](Intent.md) |

#### Returns

`void`

#### Defined in

[src/services/intent.service.ts:32](https://github.com/davole/intent-service/blob/144c074/src/services/intent.service.ts#L32)

___

### addIntentTo

▸ **addIntentTo**(`to`, `callback`, `once?`): [`Intent`](Intent.md)

Add an intent by providing intent's constructor parameters. This creates an intent instance and adds that.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `to` | `string` | `undefined` | Intent name/identifier |
| `callback` | (...`parameters`: `any`[]) => `any` | `undefined` | Intent callback |
| `once` | `boolean` | `false` | Remove intent after first execution |

#### Returns

[`Intent`](Intent.md)

Intent that is created implicitly

#### Defined in

[src/services/intent.service.ts:43](https://github.com/davole/intent-service/blob/144c074/src/services/intent.service.ts#L43)

___

### executeIntent

▸ `Private` **executeIntent**(`intent`, ...`parameters`): [`Intent`](Intent.md)

Execute the intents callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `intent` | [`Intent`](Intent.md) | Intent instance to be executed |
| `...parameters` | `any`[] | Parameters for intent callback |

#### Returns

[`Intent`](Intent.md)

#### Defined in

[src/services/intent.service.ts:117](https://github.com/davole/intent-service/blob/144c074/src/services/intent.service.ts#L117)

___

### getIntents

▸ **getIntents**(`to?`): [`Intent`](Intent.md)[]

Search intents based on an intent's name.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `to` | `string` | `null` | Intent name |

#### Returns

[`Intent`](Intent.md)[]

#### Defined in

[src/services/intent.service.ts:95](https://github.com/davole/intent-service/blob/144c074/src/services/intent.service.ts#L95)

___

### intendTo

▸ **intendTo**(`to`, ...`parameters`): [`Intent`](Intent.md)[]

Trigger the execution of an intent. This executes the intent if it exists and throws an error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `to` | `string` | Intent name/identifier |
| `...parameters` | `any`[] | Optional callback paremeters |

#### Returns

[`Intent`](Intent.md)[]

Array of intents that were executed

#### Defined in

[src/services/intent.service.ts:22](https://github.com/davole/intent-service/blob/144c074/src/services/intent.service.ts#L22)

___

### removeIntent

▸ **removeIntent**(`intent`): `void`

Remove an intent

#### Parameters

| Name | Type |
| :------ | :------ |
| `intent` | [`Intent`](Intent.md) |

#### Returns

`void`

#### Defined in

[src/services/intent.service.ts:54](https://github.com/davole/intent-service/blob/144c074/src/services/intent.service.ts#L54)

___

### removeIntentTo

▸ **removeIntentTo**(`to`): `void`

Remove the intents to '...'

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |

#### Returns

`void`

#### Defined in

[src/services/intent.service.ts:78](https://github.com/davole/intent-service/blob/144c074/src/services/intent.service.ts#L78)

___

### removeIntents

▸ **removeIntents**(): `void`

Remove all intents.

#### Returns

`void`

#### Defined in

[src/services/intent.service.ts:86](https://github.com/davole/intent-service/blob/144c074/src/services/intent.service.ts#L86)
