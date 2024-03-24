export type Card = {
  id: string;
  title: string;
  platforms: string[];
  description: string;
  website?: string;
  repository?: string;
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
  model: any;
  placeholder: string;
};
