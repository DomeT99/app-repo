import type { App } from "./generic";
export type Card = App & {
  deleteFn?: () => void;
  editFn?: () => void;
};

export type ComboBox = {
  options: Option[];
  model?: any;
  maxSelectedLabels?: number;
  placeholder?: string;
};
type Option = {
  key: string;
  value: string;
};

export type InputText = {
  placeholder: string;
};

export type Modal = {
  title: string;
  content: string;
  visible?: boolean;
  confirmLabel: string;
  confirm: () => void;
  close: () => void;
};
