import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title:any) {
    throw new Error('Method not impleted');
  }
  // ShowFormDetails:boolean=true;
employeeForm: FormGroup;
ShowFormDetails:boolean=true
submitted=false;
// formDataSet:any;
constructor(private fb: FormBuilder,private router: Router){
  this.employeeForm= this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required,Validators.email]],
    dob:['null',Validators.required],
    designation:['',Validators.required],
    gender:['',Validators.required],
    mobile:['',[Validators.required,Validators.pattern('[0-9]{10}')]],

  });
}
//formDataSet:any[]=[]
onSubmit():void{
  this.submitted =true;
  if(this.employeeForm.valid){
  this.ShowFormDetails=false;
    // this.formDataSet.push(this.employeeForm.value);
    console.log(this.employeeForm.value);
    this.router.navigate(['/screen2'],{state:{data:this.employeeForm.value}});
  }
}
Back(event:any){
  this.ShowFormDetails=event;
}
}
