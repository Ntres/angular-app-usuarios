import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css'],
})
export class CardUsuarioComponent implements OnInit {
  @Input() user: any;
  imgUrl: string = '';
  name: string = '';
  email: string = '';
  id: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.imgUrl =
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYYTLgX6ZLrYwz-3c7iB3gVs87jIKnbbg3Ba-Gt8ykJF2uZgu4';
    this.name = this.user.name;
    this.email = this.user.email;
    this.id = this.user.id;
  }
}
