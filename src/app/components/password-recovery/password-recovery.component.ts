import { AuthenticationService } from './../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {
  forma: FormGroup;
  constructor(
    private _AuthenticationService: AuthenticationService
  ) {
    this.forma = new FormGroup({
      'Email': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')]),
    });
  }

  ngOnInit() {

  }
  SendEmail() {
    this._AuthenticationService.recover(this.forma.value.Email).subscribe(data => console.log(data));

  }
}
