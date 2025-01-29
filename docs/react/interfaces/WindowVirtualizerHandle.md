[**API**](../../API.md)

***

# Interface: WindowVirtualizerHandle

Methods of [WindowVirtualizer](../functions/WindowVirtualizer.md).

## Methods

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

Scroll to the item specified by index.

#### Parameters

##### index

`number`

index of item

##### opts?

[`ScrollToIndexOpts`](ScrollToIndexOpts.md)

options

#### Returns

`void`

#### Defined in

[src/react/WindowVirtualizer.tsx:51](https://github.com/inokawa/virtua/blob/d2c1d3653c8c81252d5e36872bda7c628b56b149/src/react/WindowVirtualizer.tsx#L51)

## Properties

### cache

> `readonly` **cache**: [`CacheSnapshot`](CacheSnapshot.md)

Get current [CacheSnapshot](CacheSnapshot.md).

#### Defined in

[src/react/WindowVirtualizer.tsx:37](https://github.com/inokawa/virtua/blob/d2c1d3653c8c81252d5e36872bda7c628b56b149/src/react/WindowVirtualizer.tsx#L37)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Find the start index of visible range of items.

#### Returns

`number`

#### Defined in

[src/react/WindowVirtualizer.tsx:41](https://github.com/inokawa/virtua/blob/d2c1d3653c8c81252d5e36872bda7c628b56b149/src/react/WindowVirtualizer.tsx#L41)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Find the end index of visible range of items.

#### Returns

`number`

#### Defined in

[src/react/WindowVirtualizer.tsx:45](https://github.com/inokawa/virtua/blob/d2c1d3653c8c81252d5e36872bda7c628b56b149/src/react/WindowVirtualizer.tsx#L45)
