import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pipesApp';

  constructor(private primeng: PrimeNGConfig) {}

  ngOnInit() {
      this.primeng.ripple = true;
  }

}
