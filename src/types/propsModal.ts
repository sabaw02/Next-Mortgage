export interface PropsModal {
  open: boolean;
  type: string;
  setType?: (value: string) => void;
  onClose: () => void;
}
