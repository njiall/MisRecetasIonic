import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/inicio', icon: 'home' },
    { title: 'Listado de recetas', url: '/folder/Listado', icon: 'label' },
    { title: 'Buscar receta', url: '/folder/Buscador', icon: 'search' },
    { title: 'Nueva receta', url: '/folder/Nueva', icon: 'add' },

  ];

  constructor() {}
}
