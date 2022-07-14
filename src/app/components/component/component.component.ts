import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  isShow: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onShow(){
    this.isShow = !this.isShow;
  }
}
