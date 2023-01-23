import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { window } from 'rxjs';
import { ServiceService } from 'src/app/service.service';
import { Route , Router } from '@angular/router';
import { AdminModule } from '../admin/admin.module';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  /*login=new FormGroup({
    Snum :new FormControl(''),
    Hotel :new FormControl(''),
    Arrival :new  FormControl(''),
    Depature :new FormControl(''),
    Types :new FormControl(''),
    Guest :new FormControl(''),
    Price :new FormControl('')
  })
*/
login!:FormGroup;
actionbtn :string="Save";
  constructor(private routes:Router,private da:ServiceService,private dialog:MatDialogRef<DialogComponent> ,
    @Inject(MAT_DIALOG_DATA) public editdata :any , private formBuilder :FormBuilder) { }
  // save()
  // {
  //  let info=JSON.stringify(this.login.value)
  //  console.log(info);
  //  this.da.Insert(info);
  
  // }reset(){
  //   this.login.reset();
  // }

  ngOnInit(): void {
    
    // this.login=new FormGroup({
    //   Snum :new FormControl(''),
    //   Hotel :new FormControl(''),
    //   Arrival :new  FormControl(''),
    //   Depature :new FormControl(''),
    //   Types :new FormControl(''),
    //   Guest :new FormControl(''),
    //   Price :new FormControl('')
    // });
    this.login = this.formBuilder.group({
      Snum :['',Validators.required],
      Hotel:['',Validators.required],
      Arrival:['',Validators.required],
      Depature:['',Validators.required],
      Types:['',Validators.required],
      Guest:['',Validators.required],
      Price:['',Validators.required]
    });
    if(this.editdata){
      this.actionbtn="Update";
      this.login.controls['Snum'].setValue(this.editdata.Snum)
      this.login.controls['Hotel'].setValue(this.editdata.Hotel);
      this.login.controls['Arrival'].setValue(this.editdata.Arrival);
      this.login.controls['Depature'].setValue(this.editdata.Depature);
      this.login.controls['Types'].setValue(this.editdata.Types);
      this.login.controls['Guest'].setValue(this.editdata.Guest);
      this.login.controls['Price'].setValue(this.editdata.Price);
    }
  }
 
    Addres(){
      if(this.login.valid){
        this.da.Insert(this.login.value).subscribe({
          next:(res)=>{
            alert("added successfully");
            this.login.reset();
            this.dialog.close('save');
          },
          error:()=>{
            alert("error ")
          }
        })
      }
    }
      }
      
    


    // let Adate=this.data.Arrival.split('T');
    // let Ddate=this.data.Depature.split('T');
    // this.login.patchValue({
    //   Snum:this.data.Snum,
    //   Hotel:this.data.Hotel,
    //   Arrival:Adate[0],
    //   Depature:Ddate[0],
    //   Types:this.data.Types,
    //   Guests:this.data.Guests,
    //   Price:this.data.Price,

    // });
//     if(this.login){
//       this.actionBtn="update";
//       this.reservartion.controls['Snum'].setValue(Number(this.login.Snum));
//       this.reservartion.controls['Hotel'].setValue(Number(this.login.Snum));
//       this.reservartion.controls['Arrival'].setValue(Number(this.login.Snum));
//       this.reservartion.controls['Depature'].setValue(Number(this.login.Snum));
//       this.reservartion.controls['Types'].setValue(Number(this.login.Snum));
//       this.reservartion.controls['Guest'].setValue(Number(this.login.Snum));
//       this.reservartion.controls['Price'].setValue(Number(this.login.Snum));


//     }


//   }
//   add(){
//  let ar= new Date(this.reservartion.value.Arrival)
//  let are=ar.toISOString().slice(0,10)
//  let dr=new Date(this.reservartion.value.Depature)
//  let dre = dr.toISOString().slice(0,10)
//   let dataObject ={
//     Snum :Number(this.reservartion.value.Snum),
//     Hotel :( this.reservartion.value.Hotel),
//     Arrival:are,
//     Depature:dre,
//     Types:(this.reservartion.value.Types),
//     Guests:(this.reservartion.value.Guests),
//     Price:(this.reservartion.value.Price)

//   }

//   if(this.actionBtn==="Save")
//   {
//     let st=JSON.stringify(dataObject)
//     console.log(st);
//     this.da.Insert(st)
//   }
    
  


