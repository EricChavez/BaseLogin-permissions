import { UserService } from './../../service/user.service';
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
  constructor(
    private _UserService: UserService

  ) {

    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required]),
      'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'), this.existeCorreo]),
      'rol': new FormControl('', [Validators.required]),
      password1: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password2: new FormControl(''),
      status: new FormControl(''),
    });

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);
  }

  ngOnInit() {

  }

  existeCorreo(control: FormControl): Promise<any> | Observable<any> {
    const promesa = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          this._UserService.validateEmail(control.value)
          .subscribe(data => {
            if (data.existe === true) {
               resolve({ existe: true });
          }
            resolve(null);
          });

          // resolve(null)
        }, 300);
      }
    );
    return promesa;
  }

  noIgual(control: FormControl): { [s: string]: boolean } {
    const forma: any = this;
    if (control.value !== forma.controls['password1'].value) {
      return {
        noIguales: true
      };
    }
    return null;
  }

  guardarCambios() {
    console.log(this.forma);
    console.log(this.forma.value);
  }

}
