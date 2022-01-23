import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-three',
  templateUrl: './block-three.component.html',
  styleUrls: ['./block-three.component.css']
})
export class BlockThreeComponent implements OnInit {
  @Input() item = '';

  constructor() { }

  ngOnInit(): void {
  }

}
