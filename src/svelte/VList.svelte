<script lang="ts" generics="T">
  import { styleToString } from "./utils";
  import Virtualizer from "./Virtualizer.svelte";
  import type { VListProps, VListHandle } from "./VList.type";

  interface Props extends VListProps<T> {}

  let {
    data,
    getKey,
    overscan,
    itemSize,
    shift,
    horizontal,
    reverse,
    children,
    onscroll,
    onscrollend,
    ...rest
  }: Props = $props();

  let ref: Virtualizer<T> = $state()!;
  let scrollRef: HTMLDivElement | undefined = $state();

  const shouldReverse = $derived(reverse && !horizontal);

  export const getScrollOffset = (() =>
    ref.getScrollOffset()) satisfies VListHandle["getScrollOffset"] as VListHandle["getScrollOffset"];
  export const getScrollSize = (() =>
    ref.getScrollSize()) satisfies VListHandle["getScrollSize"] as VListHandle["getScrollSize"];
  export const getViewportSize = (() =>
    ref.getViewportSize()) satisfies VListHandle["getViewportSize"] as VListHandle["getViewportSize"];
  export const findStartIndex = (() =>
    ref.findStartIndex()) satisfies VListHandle["findStartIndex"] as VListHandle["findStartIndex"];
  export const findEndIndex = (() =>
    ref.findEndIndex()) satisfies VListHandle["findEndIndex"] as VListHandle["findEndIndex"];
  export const getItemOffset = ((...args) =>
    ref.getItemOffset(
      ...args
    )) satisfies VListHandle["getItemOffset"] as VListHandle["getItemOffset"];
  export const getItemSize = ((...args) =>
    ref.getItemSize(
      ...args
    )) satisfies VListHandle["getItemSize"] as VListHandle["getItemSize"];
  export const scrollToIndex = ((...args) =>
    ref.scrollToIndex(
      ...args
    )) satisfies VListHandle["scrollToIndex"] as VListHandle["scrollToIndex"];
  export const scrollTo = ((...args) =>
    ref.scrollTo(
      ...args
    )) satisfies VListHandle["scrollTo"] as VListHandle["scrollTo"];
  export const scrollBy = ((...args) =>
    ref.scrollBy(
      ...args
    )) satisfies VListHandle["scrollBy"] as VListHandle["scrollBy"];

  const viewportStyle = styleToString({
    display: horizontal ? "inline-block" : "block",
    [horizontal ? "overflow-x" : "overflow-y"]: "auto",
    contain: "strict",
    width: "100%",
    height: "100%",
  });

  const wrapperStyle = styleToString({
    visibility: "hidden", // TODO replace with other optimization methods
    display: "flex",
    "flex-direction": "column",
    "justify-content": "flex-end",
    "min-height": "100%",
  });
</script>

<!-- 
  @component
  Virtualized list component. See {@link VListProps} and {@link VListHandle}.
-->
<div bind:this={scrollRef} {...rest} style="{viewportStyle} {rest.style || ''}">
  {#if shouldReverse}
    <div style={wrapperStyle}>
      <Virtualizer
        bind:this={ref}
        {data}
        {children}
        {getKey}
        {overscan}
        {itemSize}
        {shift}
        {horizontal}
        scrollRef={scrollRef}
        {onscroll}
        {onscrollend}
      />
    </div>
  {:else}
    <Virtualizer
      bind:this={ref}
      {data}
      {children}
      {getKey}
      {overscan}
      {itemSize}
      {shift}
      {horizontal}
      {onscroll}
      {onscrollend}
    />
  {/if}
</div>
