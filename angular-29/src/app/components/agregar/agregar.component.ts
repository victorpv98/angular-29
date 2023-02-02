import { Component } from '@angular/core';
import { AlluserService } from '../../services/alluser.service';
import { Inter } from '../../models/inter';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  constructor(private apiUser: AlluserService){

  }

  userDates: Inter[]=[
    {
      Id:0,
      Descripcion:'',
      Precio:0
    }
  ]


  Agregar(){
    if(this.userDates[0].Descripcion=="" || this.userDates[0].Precio==0){
      return;
    }else{
      this.apiUser.postNuevo(this.userDates[0]).subscribe({
        next:(user: Inter)=>{
          console.log(user);
        }
      })
    }
  }
}
