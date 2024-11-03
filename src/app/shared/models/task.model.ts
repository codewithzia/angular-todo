export class Task {
  id: number;
  title: string;
  note: string;
  status: string;
  constructor(title: string = '', note: string = '', id: number = null, status :string ='') {
    this.title = title;
    this.note = note;
    this.id = id;
    this.status = status;
  }
}

// export interface  Task {
//   id: number;
//   title: string;
//   note: string;
// }
