import { Exclude } from 'class-transformer';

export interface User {
  username: string;
  password: string;
}

export class SerializedUsers {
  username: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<SerializedUsers>) {
    Object.assign(this, partial);
  }
}
