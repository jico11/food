import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent implements OnInit {
  visionText = `Constituir una Plataforma estructurada y eficiente para que exalumnos
                 del Colegio San Luis puedan ofrecer distintos servicios Profesionales
                 de calidad y de manera voluntaria a poblaciones socioeconómicas vulnerables de la ciudad,
                 región, país y de manera particular internacional en caso de catástrofes.`;
  misionText = `Somos un Movimiento de exalumnos del Colegio San Luis, que movidos por nuestra 
  espiritualidad, ofrecemos nuestras Profesiones y especialidades para ayudar en la calidad de
   vida de personas con vulnerabilidad económica o social, así mismo en momentos de catástrofes
   nacionales o internacionales.`;

  valoresText = `Nuestro trabajo se realizara bajo los valores. Solidaridad
   y generosidad, honestidad y transparencia, sobriedad, trabajo bien hecho, colaboración, justicia, paz.`;
  
  constructor() { }

  ngOnInit() {
  }

}
