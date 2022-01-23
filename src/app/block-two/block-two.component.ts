import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-two',
  templateUrl: './block-two.component.html',
  styleUrls: ['./block-two.component.css']
})
export class BlockTwoComponent implements OnInit {
  @Input() item = '';

  constructor() { }

  ngOnInit(): void {
  }

}
