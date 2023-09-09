import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Filesystem} from '@capacitor/filesystem'
import { Camera, CameraResultType } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

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


  async abrirCamara() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });
  }

  async subirArchivo() {
     const fileInput = document.createElement('input');
     fileInput.setAttribute('type', 'file');
     fileInput.setAttribute('accept', 'image/*');

    fileInput.addEventListener('change', async () => {
      if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = async (e) => {
          if (e.target) {
            const dataUrl = e.target.result as string;
          }
        };

        reader.readAsDataURL(file);
      }
    });
    fileInput.click();
  }

}
