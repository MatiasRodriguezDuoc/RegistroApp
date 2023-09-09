import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregunta-secreta',
  templateUrl: './pregunta-secreta.page.html',
  styleUrls: ['./pregunta-secreta.page.scss'],
})
export class PreguntaSecretaPage {
  preguntaSecreta = '¿Cuál es tu color favorito?';
  public respuesta = '';

  verificarRespuesta() {
    // Aquí puedes comparar la respuesta proporcionada con la respuesta correcta del usuario.
    // Si la respuesta es correcta, puedes navegar a la página 'Correcto', de lo contrario a 'Incorrecto'.
  }

}
