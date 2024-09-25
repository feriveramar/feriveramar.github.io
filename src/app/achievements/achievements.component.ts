import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {

  achivements: Array<any> = []

  constructor() {}

  ngOnInit(): void {
    let achievement1 = {
      description: "Ganadora de tercer lugar en consurso de prototipos de software a nivel estatal"
    }

    let achievement2 = {
      description: "Certificada en uso de paquetería office por el CECATI 168"
    }


    this.achivements.push(achievement1);
    this.achivements.push(achievement2);
    console.log(this.achivements);
  }
}