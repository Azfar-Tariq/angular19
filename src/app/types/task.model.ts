export interface Task {
  id: Number;
  title: String;
  priority: 'Low' | 'Medium' | 'High';
  completed: Boolean;
}
