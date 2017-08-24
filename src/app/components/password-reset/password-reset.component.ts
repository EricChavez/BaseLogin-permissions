import { NotificationService } from './../../service/notification.service';
import { AuthenticationService } from './../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  forma: FormGroup;
  token: string;
  email: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private AuthenticationService_: AuthenticationService,
    private Router_: Router,
    private NotificationService_: NotificationService
  ) {
    this.forma = new FormGroup({
      'Password1': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'Password2': new FormControl('')
    });

    this.forma.controls['Password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);

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

  reset() {
    this.AuthenticationService_.reset(this.token, this.forma.controls['Password2'].value)
      .subscribe(data => {
          this.Router_.navigate(['/login'])
          this.NotificationService_.success('Correcto', 'Tu contraseña ha sido actualizada')
      });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params)
      const id = params['id'];
      this.AuthenticationService_.validateToken(id)
        .subscribe(
        result => {
          this.token = id;
          this.email = result.email
        },
        error => {
          this.Router_.navigate(['/login'])
        })
    });
  }




}