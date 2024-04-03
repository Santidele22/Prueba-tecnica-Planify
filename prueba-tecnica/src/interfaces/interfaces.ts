export interface servicesInterfaces {
  category: string;
  services: { id: number; name: string; description: string; category: string; }[];
}
export interface selectedButtonProps {
  isSelected: boolean;
  handleClick: () => void;
}
export interface ProgressProps {
  title: string;
  value: string;
}
