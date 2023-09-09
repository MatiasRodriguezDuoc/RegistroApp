import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  nombreUsuario = '';

  constructor(private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state && state['nombreUsuario']) {
      this.nombreUsuario = state['nombreUsuario'];
    }
  }


  abrirCamara() {
    // Aquí puedes implementar la lógica para abrir la cámara y leer un QR
    // Esto puede involucrar el uso de plugins o librerías externas.
  }

  subirArchivo() {
    // Aquí puedes implementar la lógica para subir un archivo QR y procesarlo.
  }

}
