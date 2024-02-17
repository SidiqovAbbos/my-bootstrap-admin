export interface MenuItem {
  title: string;
  icon?: string;
  route?: string;
  collapsed?: boolean;
  subItems?: Omit<MenuItem, 'subItems' | 'collapsed'>[];
}
