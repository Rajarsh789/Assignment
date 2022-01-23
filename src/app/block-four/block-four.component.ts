import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-four',
  templateUrl: './block-four.component.html',
  styleUrls: ['./block-four.component.css']
})
export class BlockFourComponent implements OnInit {
  @Input() item = '';

  constructor() { }

  ngOnInit(): void {
  }

}
