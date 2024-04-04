export interface servicesInterfaces {
  category: string;
  services: {
    id: number;
    name: string;
    description: string;
    category: string;
  }[];
}
export interface servicesSelected {
  id: number;
  name: string;
  description: string;
  category: string;
}

export interface SlotInterfaces {
  date: string;
  serviceId: number;
  availableTimeslots: Array<string>;
}

export interface SlotSelected {
  date: string;
  serviceId: number;
  availableTimeslots: string;
}

export interface selectedButtonProps {
  isSelected: boolean;
  handleClick: () => void;
  children: React.ReactNode;
}
export interface ProgressProps {
  title: string;
  value: string;
}

export interface CategoryListProps {
  updateCategories: (value: Array<servicesSelected>) => void;
}

export interface SchedulesListProps {
  updatedSchedules: (value: Array<SlotSelected>) => void;
}
export interface linksProps {
  nextRoute: string
  lastRoute:string
  nextText:string
  lastText:string
  isDisable: boolean
}