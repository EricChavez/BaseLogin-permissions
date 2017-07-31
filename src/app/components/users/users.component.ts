import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  forma: FormGroup;
  constructor() {

    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required]),
      'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
      'rol': new FormControl('', [Validators.required]),
      password1: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required),
      status: new FormControl(''),
    });

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);
  }

  ngOnInit() {

  }

  noIgual(control: FormControl) {
    const forma: any = this;
    return (control.value !== forma.controls['password1'].value) ? true : null;
  }
  guardarCambios() {

  }

}
