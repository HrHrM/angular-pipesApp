import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.scss'
})
export class UncommonPageComponent implements OnInit {

  ngOnInit(): void {
    console.log('UNCOMMONG PAGE');
  }

}
