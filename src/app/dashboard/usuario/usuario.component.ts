import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  id: any;
  name: string = '';
  email: string = '';
  gender: string = '';
  status: string = '';
  urlImg =
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYYTLgX6ZLrYwz-3c7iB3gVs87jIKnbbg3Ba-Gt8ykJF2uZgu4';

  constructor(
    private aRoute: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario = () => {
    this.usuarioService.getUsuario(this.id).subscribe((data) => {
      this.name = data.data.name;
      this.email = data.data.email;
      this.gender = data.data.gender;
      this.status = data.data.status;
    });
  };
}
