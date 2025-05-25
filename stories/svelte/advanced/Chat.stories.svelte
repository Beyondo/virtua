<script lang="ts">
  import { VList } from "../../../src/svelte";
  import { onMount, afterUpdate } from "svelte";
  import { faker } from "@faker-js/faker";

  type Data = { id: number; value: string; me: boolean };

  let id = 0;
  const createItem = (
    { value = faker.lorem.paragraphs(1), me = false }: { value?: string; me?: boolean } = {}
  ): Data => ({ id: id++, value, me });

  let ref: VList<Data> = $state();
  let items = $state(Array.from({ length: 100 }, () => createItem()));
  let value = $state("Hello world!");
  let isPrepend = false;
  let shouldStickToBottom = true;

  afterUpdate(() => {
    if (isPrepend) isPrepend = false;
    if (ref && shouldStickToBottom) {
      ref.scrollToIndex(items.length - 1, { align: "end" });
    }
  });

  onMount(() => {
    let canceled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const setTimer = () => {
      timer = setTimeout(() => {
        if (canceled) return;
        items = [...items, createItem()];
        setTimer();
      }, 5000);
    };
    setTimer();
    return () => {
      canceled = true;
      if (timer) {
        clearTimeout(timer);
      }
    };
  });

  const disabled = $derived(!value.length);
  const submit = () => {
    if (disabled) return;
    shouldStickToBottom = true;
    items = [...items, createItem({ value, me: true })];
    value = "";
  };
</script>

<div style="width: 90vw; height: 90vh; display: flex; flex-direction: column;">
  <VList
    bind:this={ref}
    style="flex: 1"
    {items}
    getKey={(d) => d.id}
    reverse
    shift={isPrepend}
    onscroll={(offset) => {
      if (!ref) return;
      shouldStickToBottom =
        offset - ref.getScrollSize() + ref.getViewportSize() >= -1.5;
      if (offset < 100) {
        isPrepend = true;
        items = [
          ...Array.from({ length: 100 }, () => createItem()),
          ...items,
        ];
      }
    }}
  >
    {#snippet children(item)}
      <div
        style={`
          border: solid 1px #ccc;
          background: #fff;
          margin: 10px;
          padding: 10px;
          border-radius: 8px;
          white-space: pre-wrap;
          ${item.me ? 'background: lightyellow; margin-left: 80px;' : 'margin-right: 80px;'}
        `}
      >
        {item.value}
      </div>
    {/snippet}
  </VList>
  <form
    style="margin: 10px;"
    onsubmit={(e) => {
      e.preventDefault();
      e.stopPropagation();
      submit();
    }}
  >
    <textarea
      style="width: 400px;"
      rows={6}
      bind:value={value}
      onkeydown={(e) => {
        if (e.code === 'Enter' && (e.ctrlKey || e.metaKey)) {
          submit();
          e.preventDefault();
        }
      }}
    />
    <button type="submit" disabled={disabled}>submit</button>
    <button type="button" onclick={() => { ref.scrollTo(0); }}>jump to top</button>
  </form>
</div>
