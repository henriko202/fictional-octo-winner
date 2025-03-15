export class TodoObject {
  constructor(public id: number, public title: string, public completed: boolean, public isLocal?: boolean) {}

  get isCompleted() {
    return this.completed
  }
}
