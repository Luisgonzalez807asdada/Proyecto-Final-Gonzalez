import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {
  private dataUsers: User[] = [
    { id: 1, name: 'Gianluca', email: 'gianbrignani@gmail.com', age: 24 },
    { id: 2, name: 'Luana', email: 'luana@gmail.com', age: 24 },
    { id: 3, name: 'Valentino', email: 'valenbrignani@gmail.com', age: 18 },
    { id: 4, name: 'Fabrizio', email: 'fabignani@gmail.com', age: 17 },
  ];

  getUsers(): User[] {
    return this.dataUsers;
  }

  addUser(newUser: User) {
    this.dataUsers.push(newUser);
  }

  deleteUser(userId: number) {
    this.dataUsers = this.dataUsers.filter(user => user.id !== userId);
  }
}
