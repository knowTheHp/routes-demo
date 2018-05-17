import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  users: User[] = [
    { id: 1, name: 'test one', email: 'user1@emailcom', allowEdit: 1 },
    { id: 2, name: 'test two', email: 'user2@emailcom', allowEdit: 0 }
  ];

  // get all users
  getUsers(): User[] {
    return this.users;
  }

  // get single user
  getUser(id: any) {
    const user = this.users.find(x => {
      // tslint:disable-next-line:triple-equals
      return x.id == id;
    });
    return user;
  }

  // update a user
  updateUser(id: number, userData: { name: string; email: string }) {
    const user = this.users.find(x => {
      // tslint:disable-next-line:triple-equals
      return x.id == id;
    });
    if (user) {
      user.name = userData.name;
      user.email = userData.email;
    }
    return user;
  }
}
