import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contrasenia-correcta',
  templateUrl: './contrasenia-correcta.page.html',
  styleUrls: ['./contrasenia-correcta.page.scss'],
})
export class ContraseniaCorrectaPage {
  public contrasena = '';

  constructor(private route: ActivatedRoute) {
    // Recuperar la contraseña desde la URL o cualquier otro método
    
  }
}
