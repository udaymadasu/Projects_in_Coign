import { Component, OnInit,inject,Inject } from '@angular/core';
import { MatDialog, MatDialogClose, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css']
})
export class DelComponent implements OnInit {

  constructor(private routes : Router,private E :MatDialog ,private Y:ServiceService,@Inject(MAT_DIALOG_DATA) public data :any ) { }

  ngOnInit(): void {
  }
  No(){
   this.E.closeAll();
  
  }
  Yes(){
    this.Y.Delete(this.data.Snum)
   
  }

}
