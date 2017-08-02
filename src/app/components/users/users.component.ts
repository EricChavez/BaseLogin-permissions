import { RoleService } from './../../service/role.service';
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
  roles: any;
  avatarsrc: string;
  avatarFile: any;
  constructor(
    private _UserService: UserService,
    private _RoleService: RoleService

  ) {

    this.forma = new FormGroup({
      'nombre': new FormControl('', [Validators.required], this.existeUsuario),
      'correo': new FormControl('',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
        ], this.existeCorreo),


      'rol': new FormControl('', [Validators.required]),
      'password1': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'password2': new FormControl(''),
      'status': new FormControl(''),
      'telefono': new FormControl(''),
      'avatar': new FormControl(''),
    });

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);

    this.forma.controls['telefono'].setValidators([
      Validators.required,
      Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),

    ]);

    /* this.forma.controls['correo'].setValidators([
       Validators.required,
       Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
       this.existeCorreo.bind(this)
     ]);*/

    this.forma.controls['nombre'].valueChanges.subscribe(data => {

    })
    this.forma.controls['nombre'].statusChanges.subscribe(data => {

    });

    this.forma.controls['correo'].valueChanges.subscribe(data => {

    })
    this.forma.controls['correo'].statusChanges.subscribe(data => {

    })
  }

  ngOnInit() {
    this._RoleService.GetRoleList()
      .subscribe(data => {
        console.log(data);
        this.roles = data.result;
      }
      );
    this.avatarsrc = 'http://localhost:50/api/image-not-found';

  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === "murci") {
            resolve({ existe: true })
          } else {
            resolve(null)
          }

        }, 300)
      }

    );
    return promesa;
  }


  existeCorreo(control: FormControl): Promise<any> | Observable<any> {
    console.log(control)

    const promesa = new Promise(
      (resolve, reject) => {
        console.log(this);
        if (control.value === 'correo@correo.com') {
          resolve({ existe: true });
        } else {
          resolve(null);
        }


      }

    );
    return promesa;







    /*return new Promise(
      (resolve, reject) => {

        if (control.value === 'correo@correo.com') {
          resolve({ existe: true })
        } else {
          resolve(null)
        }

        /* this._UserService.validateEmail(this.forma.controls['correo'].value)
           .subscribe(data => {
             if (data.existe === true) {
               resolve({ existe: false });
             } else {
               resolve(null);
             }
           }
           );

      }
    );*/
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


  }

}
