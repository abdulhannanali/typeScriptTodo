class Todo {
  description: string;
  done: boolean;

  // we are storing the creation date in number using Date.now()
  public _created: number

  constructor(description: string) {
    this.description = description;
    this._created = Date.now();
  }

  // accessors for the class
  get created () {
    return new Date(this._created);
  }

  set dsecription(description: string) {
    this.description = description
  }



}
