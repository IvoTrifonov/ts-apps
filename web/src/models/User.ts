import { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
const rootUrl = 'http://localhost:3000/users';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User {
  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() { return this.events.on; }

  get trigger() { return this.events.trigger; }

  get get() {
    return this.attributes.get;
  }

  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id!');
    }

    this.sync.fetch(id)
      .then((res: AxiosResponse): void => {
        this.set(res.data);
      })
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
      .then((res: AxiosResponse) => {
        this.trigger('save');
      }).catch(() => {
        this.trigger('error');
      });
  }

}