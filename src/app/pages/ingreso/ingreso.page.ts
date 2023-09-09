import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})

export class IngresoPage {
  public correo = '';
  public contrasena = '';

  usuarios = [
    {
      correo: 'franco@duocuc.cl',
      contrasena: '1234',
      nombre: 'Franco',
    },
    {
      correo: 'francisco@profesor.cl',
      contrasena: 'duoc123',
      nombre: 'Francisco',
    }
  ];

  constructor (private router: Router, private toastController: ToastController) {}

  async iniciarSesion() {
    const usuarioEncontrado = this.usuarios.find(
      (usuario) => usuario.correo === this.correo && 
      usuario.contrasena === this.contrasena);

    if (usuarioEncontrado) {
      this.router.navigate (['/inicio'], {
        state: {nombreUsuario: usuarioEncontrado.nombre},
      });
    } else {
      const toast = await this.toastController.create({
        message: 'Credenciales de inicio de sesión incorrectas',
        duration: 2000,
        position: 'middle',
        color: 'danger',
      });

      toast.present();
    
    }
  }
}
