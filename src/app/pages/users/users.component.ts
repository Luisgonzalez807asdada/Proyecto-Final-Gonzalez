import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MiServicioService, User } from '../../services/mi-servicio.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'email', 'age', 'actions'];
    dataSource: MatTableDataSource<User> = new MatTableDataSource<User>();
    userForm!: FormGroup;

    constructor(private miServicio: MiServicioService, private cdRef: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.dataSource = new MatTableDataSource<User>(this.miServicio.getUsers());
    }

    refreshTable() {
        this.dataSource.data = this.miServicio.getUsers();
    }

    deleteUser(userId: number) {
        this.miServicio.deleteUser(userId);
        this.dataSource.data = this.miServicio.getUsers();
    }

    onSubmit(): void {
        if (this.userForm.valid) {
            const newUser: User = this.userForm.value;
            this.miServicio.addUser(newUser);
            console.log(newUser);
            this.userForm.reset();

            this.miServicio.getUsers();
            this.cdRef.detectChanges(); 
        }
    }
}


