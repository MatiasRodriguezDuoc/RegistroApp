import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage {
  public correo = '';
  public contrasena = '';

  iniciarSesion() {
    // Aquí puedes agregar la lógica de autenticación
    // Por ejemplo, comparar correo y contraseña con datos en la base de datos
    // Si la autenticación es exitosa, puedes navegar a la página de inicio.
  }
}
