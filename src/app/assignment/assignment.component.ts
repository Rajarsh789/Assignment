import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CONSTANT } from '../constant';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  searchForm: FormGroup
  myDate = new Date();
  indexNumber: number = 8;
  arr: any;
  arrValue:any;
  result: any = [ ];
  anyValue:string="ABC123"
  constructor(public fb: FormBuilder, private toastr: ToastrService) {
    this.searchForm = this.fb.group({
      index: [''],
    })
  }

  ngOnInit(): void {
    this.findMissingNumber();
  }

  // FIND MISSING NUMBER
  findMissingNumber() {
    this.arr = CONSTANT.arr;
    for (let i = 1; i <= this.arr.length; i++) {
      if (i % 2 == 0) {
        let value = (i * i) - 1;
        this.result.push(value);
      } else {
        let value = (i * i) + 1;
        this.result.push(value);
      }
    }
    // console.log(this.result);
  }

  // FIND VALUE OF PARTICULAR INDEXNUMBER
  findArraryList() {
    this.indexNumber = this.searchForm.value.index
    this.arrValue = this.result[this.indexNumber];
    if(this.indexNumber >= 9){
      this.toastr.error(`Invalid index number!`);
    }
    console.log(this.arrValue);

  }

  // FOR RESE FORM
  resetForm() {
    this.searchForm.reset();
    this.arrValue =''
  }

}
