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
  constructor(private activatedRoute: ActivatedRoute) {
    this.forma = new FormGroup({
      'Password1': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'Password2': new FormControl('')
    });

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

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'];
      this.token = id;
    });
  }

}
