// import { Component,OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { FormBuilder,FormGroup } from '@angular/forms';
// @Component({
//   selector: 'app-screen2',
//   templateUrl: './screen2.component.html',
//   styleUrl: './screen2.component.css'
// })
// export class Screen2Component implements OnInit {
//   // employeeForm:FormGroup | null=null; 
//   employeeForm:FormGroup =new FormGroup({});
//   constructor(private route: ActivatedRoute,private router:Router,private fb:FormBuilder){}
//   ngOnInit(): void {
//     this.createForm();
//     this.populateForm();
//   }
//   createForm():void{
//     this.employeeForm=this.fb.group({
//       name:[''],
//       designation:[''],
//       gender:[''],
//       dob:[''],
//       email:[''],
//       phone:[''],
//     });
//   }
//   populateForm():void{
//     const employeeForm=history.state.data;
//     this.employeeForm.patchValue(employeeForm);
//   }
//   goBack():void{
//     this.router.navigate(['/app']);
//   }

// }


import { Component,EventEmitter,OnInit,Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrl: './screen2.component.css'
})
export class Screen2Component implements OnInit {
  
  formDataSet:any[]=[];
  formData:any = [];
  @Output() ValueChange=new EventEmitter();
  btnback:boolean=false;
  constructor(private location:Location ,private route: ActivatedRoute,
    private router: Router){}
  ngOnInit(): void {
    this.formData.push(history.state.data);
   this.formDataSet.push(history.state.data);
   console.log(this.formData, '..this.formData..');

  }
  goBack():void{
    // this.location.back();
    this.btnback=true;
  // this.router.navigate(['/app']);
   
   this.ValueChange.emit(this.btnback);
  }
}
