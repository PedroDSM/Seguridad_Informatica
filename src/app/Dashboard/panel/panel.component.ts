import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    ip : new FormControl('', [Validators.required]),
  });

  send(){
    if(this.form.invalid){
      return;
    }
  
  // this.peticion.registro(this.form.get('nombre')?.value, this.form.get('email')?.value, this.form.get('password')?.value, this.form.get('status')?.value, this.form.get('roles_id')?.value)
  // .subscribe((response: any)=>{
  //   console.log(response);
  //   this.router.navigate(['/dashboard']);
  //   this.cookieService.set('token',response.token!.token!,1,'/')
  // });
    }



}
