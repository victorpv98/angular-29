import { Component } from '@angular/core';
import { AlluserService } from '../../services/alluser.service';
import { Inter } from '../../models/inter';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {


  constructor(private userServi: AlluserService){}

  displayedColumns: string[] = ['Id', 'Descripcion', 'Precio', 'Eliminar'];
  dataSource: any;

  listaDatos:Inter[]=[];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // metodo get
    this.userServi.getAll().subscribe({
      next: (user: Inter[])=>{
      this.listaDatos = user
      this.dataSource = this.listaDatos;
      }
    })
  }

  Eliminar(id: number){
    this.listaDatos=[];
   this.userServi.delete(id).subscribe({
    next:()=>{
      alert("Has eliminado el id: " + id);
    }
   })

  }
}
