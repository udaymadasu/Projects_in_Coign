import { Component, OnInit ,Inject,ViewChild} from '@angular/core';
import { MatDialog ,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DelComponent } from '../del/del.component';
import { DialogComponent } from '../dialog/dialog.component';
import { ServiceService } from '../service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


//import { ServiceService } from 'src/app/service.service';
 
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  displayedColumns: string[] = ['Snum', 'Hotel', 'Arrival', 'Depature','Types','Guest','Price','Manage'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 
  constructor(private da : ServiceService ,private dia:MatDialog) { }


  ngOnInit() {
     

     this.da.getdata().subscribe({next:(res:any)=>
      {
        this.dataSource= new MatTableDataSource(res);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    },
    error:(err)=>{
      alert("ERROR!!")
   } });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  opendialog(){
    let dialog =this.dia.open(DialogComponent,{width:'40%',height:'50%'});
  }
Delete(Snum : number){
  let dialog=this.da.Delete(Snum)
  .subscribe({
    next:(res)=>{
      alert("Deleted Successfully");
    },
    error:()=>{
      alert("ERROR !! ERROR")
    }
  })
}
Edit(row :any){
  this.dia.open(DialogComponent,{width:'40%',height:'40%',data:row});
}


}

                                                                                                                                      