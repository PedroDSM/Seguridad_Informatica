import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MensajesService } from '../Services/mensajes.service';
import * as CryptoJS from 'crypto-js'

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  posts:any = [];
  constructor(private mensajes: MensajesService) { }
  
  ngOnInit() {
    this.leerlista()

  }

  form = new FormGroup({
    user_ip: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  });
  
  leerlista(){
    this.mensajes.getAll().subscribe(
      respuesta=>{
        
      this.mensajes.getIp().subscribe(
        resp=>{
          
          respuesta.forEach((item:any) => {
            this.desencriptador(item,resp.ip_address!)
          });
        });
      });
  }
  send(){
    this.mensajes.new(this.form).subscribe(
      respuesta=>{
      }
    )
  }

  desencriptador(message:any, myIp:any){
    console.log( myIp);
    let bytes  = CryptoJS.AES.decrypt(message.message, myIp);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    this.posts.push({
      id:message.id, 
      message: (originalText!="") ? originalText : message.message,
    })
    console.log(this.posts)
  }

}
