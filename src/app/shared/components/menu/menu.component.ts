import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            route: '/',
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            route: '/numbers',
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            route: '/uncommon',
          }
        ],
        
      },
      {
        label: 'Pipes Perzonalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Phos',
            icon: 'pi pi-align-left',
          },
          {
            label: 'Antarct',
            icon: 'pi pi-dollar',
          },
          {
            label: 'Cairngorm',
            icon: 'pi pi-globe',
          }
        ],
        
      },
    ];
  }


}
