import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
  standalone: false,
})
export class CardPostComponent implements OnInit {
  @Input() descripcion: string = "";
  @Input() username: string = "";
  @Input() location: string = "";
  @Input() avatarUrl: string = "";
  @Input() imagenUrl: string = "";
  @Input() contentUrl: string = "";
  @Input() createAt: string = "";
  @Input() liked: string = "heart-outline";
  @Input() saved: string = "bookmark-outline";
  @Input() estados: string[] = ["heart-outline", "heart", "bookmark-outline", "bookmark"];

  cambiarEstado(valor: number){
    switch (valor){
      case 0:
        if(this.liked === this.estados[0]){
          this.liked = this.estados[1];
        }
        else{
          this.liked = this.estados[0];
        }
        break;

      case 1:
        if(this.saved === this.estados[2]){
          this.saved = this.estados[3];
        }
        else{
          this.saved = this.estados[2];
        }
        break;
    }
  }
  


  constructor() { }

  ngOnInit() { }

}
