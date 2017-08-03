import { User } from './../../models/user';
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
  user: User;
  constructor(
    private _UserService: UserService,
    private _RoleService: RoleService,


  ) {

    this.forma = new FormGroup({
      'UserName': new FormControl('', [Validators.required]),
      'Email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
      'RoleId': new FormControl('', [Validators.required]),
      'Password1': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'Password2': new FormControl(''),
      'Status': new FormControl(''),
      'PhoneNumber': new FormControl('', [Validators.required, Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)])
    });

    this.forma.controls['Password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);
  }

  ngOnInit() {
    this._RoleService.GetRoleList()
      .subscribe(data => {
        this.roles = data.result;
      });
    this.avatarsrc = 'http://localhost:50/api/image-not-found';
    this.user = new User();
  }


  existeCorreo(control: FormControl): Promise<any> | Observable<any> {
    const promesa = new Promise(
      (resolve, reject) => {
        console.log(this);
        if (control.value === 'correo@correo.com') {
          resolve({ existe: true });
        } else {
          resolve(null);
        }
      });
    return promesa;
  }

  noIgual(control: FormControl): { [s: string]: boolean } {
    const forma: any = this;
    if (control.value !== forma.controls['Password1'].value) {
      return {
        noIguales: true
      };
    }
    return null;
  }

  guardarCambios() {
    this.user.UserName = this.forma.value.UserName;
    this.user.Email = this.forma.value.Email;
    this.user.Password = this.forma.value.Password1;
    this.user.PhoneNumber = this.forma.value.PhoneNumber;
    this.user.RoleId = this.forma.value.RoleId;
    this.user.Status = true;
    this._UserService.CreateUser(this.user)
    .subscribe(data => console.log(data));
    console.log(this.user);
  }

}



/* this.forma.controls['correo'].setValidators([
       Validators.required,
       Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
       this.existeCorreo.bind(this)
     ]);*/


    /*this.forma.controls['correo'].statusChanges.subscribe(data => {

    })*/