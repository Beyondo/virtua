[**API**](../../API.md)

***

# Interface: VListHandle

Defined in: [src/solid/VList.tsx:15](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/VList.tsx#L15)

Methods of [VList](../functions/VList.md).

## Extends

- [`VirtualizerHandle`](VirtualizerHandle.md)

## Methods

### getItemOffset()

> **getItemOffset**(`index`): `number`

Defined in: [src/solid/Virtualizer.tsx:62](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/Virtualizer.tsx#L62)

Get item offset from start.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getItemOffset`](VirtualizerHandle.md#getitemoffset)

***

### getItemSize()

> **getItemSize**(`index`): `number`

Defined in: [src/solid/Virtualizer.tsx:67](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/Virtualizer.tsx#L67)

Get item size.

#### Parameters

##### index

`number`

index of item

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`getItemSize`](VirtualizerHandle.md#getitemsize)

***

### scrollToIndex()

> **scrollToIndex**(`index`, `opts`?): `void`

Defined in: [src/solid/Virtualizer.tsx:73](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/Virtualizer.tsx#L73)

Scroll to the item specified by index.

#### Parameters

##### index

`number`

index of item

##### opts?

[`ScrollToIndexOpts`](../../react/interfaces/ScrollToIndexOpts.md)

options

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollToIndex`](VirtualizerHandle.md#scrolltoindex)

***

### scrollTo()

> **scrollTo**(`offset`): `void`

Defined in: [src/solid/Virtualizer.tsx:78](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/Virtualizer.tsx#L78)

Scroll to the given offset.

#### Parameters

##### offset

`number`

offset from start

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollTo`](VirtualizerHandle.md#scrollto)

***

### scrollBy()

> **scrollBy**(`offset`): `void`

Defined in: [src/solid/Virtualizer.tsx:83](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/Virtualizer.tsx#L83)

Scroll by the given offset.

#### Parameters

##### offset

`number`

offset from current position

#### Returns

`void`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollBy`](VirtualizerHandle.md#scrollby)

## Properties

### scrollOffset

> `readonly` **scrollOffset**: `number`

Defined in: [src/solid/Virtualizer.tsx:41](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/Virtualizer.tsx#L41)

Get current scrollTop, or scrollLeft if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollOffset`](VirtualizerHandle.md#scrolloffset)

***

### scrollSize

> `readonly` **scrollSize**: `number`

Defined in: [src/solid/Virtualizer.tsx:45](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/Virtualizer.tsx#L45)

Get current scrollHeight, or scrollWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`scrollSize`](VirtualizerHandle.md#scrollsize)

***

### viewportSize

> `readonly` **viewportSize**: `number`

Defined in: [src/solid/Virtualizer.tsx:49](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/Virtualizer.tsx#L49)

Get current offsetHeight, or offsetWidth if horizontal: true.

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`viewportSize`](VirtualizerHandle.md#viewportsize)

***

### findStartIndex()

> **findStartIndex**: () => `number`

Defined in: [src/solid/Virtualizer.tsx:53](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/Virtualizer.tsx#L53)

Find the start index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findStartIndex`](VirtualizerHandle.md#findstartindex)

***

### findEndIndex()

> **findEndIndex**: () => `number`

Defined in: [src/solid/Virtualizer.tsx:57](https://github.com/inokawa/virtua/blob/469498bf9b9213391999278aeb12adba7b00fff9/src/solid/Virtualizer.tsx#L57)

Find the end index of visible range of items.

#### Returns

`number`

#### Inherited from

[`VirtualizerHandle`](VirtualizerHandle.md).[`findEndIndex`](VirtualizerHandle.md#findendindex)
