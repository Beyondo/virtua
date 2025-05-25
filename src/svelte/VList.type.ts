import type { ViewportComponentAttributes } from "./types";
import type { VirtualizerHandle, VirtualizerProps } from "./Virtualizer.type";

/**
 * Props of {@link VList}.
 */
export interface VListProps<T>
  extends Pick<
      VirtualizerProps<T>,
      | "data"
      | "getKey"
      | "overscan"
      | "itemSize"
      | "shift"
      | "horizontal"
      | "children"
      | "onscroll"
      | "onscrollend"
    >,
    ViewportComponentAttributes {
  /**
   * If true, items are aligned to the end of the list when total size of items are smaller than viewport size. It's useful for chat like app.
   */
  reverse?: boolean;
}

/**
 * Methods of {@link VList}.
 */
export interface VListHandle extends VirtualizerHandle {}
