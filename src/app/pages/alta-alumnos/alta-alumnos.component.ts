import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MiServicioService, User } from '../../services/mi-servicio.service';

@Component({
  selector: 'app-alta-alumnos',
  templateUrl: './alta-alumnos.component.html',
  styleUrls: ['./alta-alumnos.component.css']
})
export class AltaAlumnosComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private miServicio: MiServicioService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      id: [null, Validators.required],
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      age: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const newUser: User = this.userForm.value;
      this.miServicio.addUser(newUser);
      console.log(newUser);
      this.userForm.reset();

      this.cdRef.detectChanges();
    }
  }
}
