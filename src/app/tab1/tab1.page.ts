import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  tarjetas = [
    {
      username: "David Martinez",
      location: "Fortin",
      descripcion: "Holapo",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
      createAt: "Today",
      imagenUrl: "https://ionicframework.com/docs/img/demos/card-media.png"
    },
    {
      username: "Tomasa Pérez",
      location: "Florida",
      descripcion: "¡Cada dia nuevas aventuras!",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
      createAt: "Yesterday",
      imagenUrl: "https://ionicframework.com/docs/img/demos/card-media.png"
    },
    {
      username: "Gabrielito",
      location: "Los Angeles",
      descripcion: "poquetatite",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
      createAt: "2 days ago",
      imagenUrl: "https://ionicframework.com/docs/img/demos/card-media.png"
    },
    {
      username: "Fernanda Altehua",
      location: "Chicago",
      descripcion: "Soy emo",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
      createAt: "3 days ago",
      imagenUrl: "https://ionicframework.com/docs/img/demos/card-media.png"
    },
    {
      username: "Eliansito",
      location: "Houston",
      descripcion: "Me encanta hacer ejercicio",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
      createAt: "Last week",
      imagenUrl: "https://ionicframework.com/docs/img/demos/card-media.png"
    },
    {
      username: "Jerry",
      location: "San Francisco",
      descripcion: "Amo la naturaleza",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
      createAt: "Last month",
      imagenUrl: "https://ionicframework.com/docs/img/demos/card-media.png"
    },
    {
      username: "Jaime Hernandez",
      location: "Boston",
      descripcion: "Soy un apasionado de la tecnología",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
      createAt: "2 months ago",
      imagenUrl: "https://ionicframework.com/docs/img/demos/card-media.png"
    },
    {
      username: "Pedrooo",
      location: "Seattle",
      descripcion: "Men encantan los gatos",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
      createAt: "3 months ago",
      imagenUrl: "https://ionicframework.com/docs/img/demos/card-media.png"
    },
    {
      username: "Fernando Mastre",
      location: "Austin",
      descripcion: "Programador en proceso",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
      createAt: "4 months ago",
      imagenUrl: "https://ionicframework.com/docs/img/demos/card-media.png"
    },
    {
      username: "Abi Mejia",
      location: "Denver",
      descripcion: "¡Cocinandooo!",
      avatarUrl: "https://ionicframework.com/docs/img/demos/avatar.svg",
      createAt: "5 months ago",
      imagenUrl: "https://ionicframework.com/docs/img/demos/card-media.png"
    }
  ];
  
  
  

  constructor() {}

}
