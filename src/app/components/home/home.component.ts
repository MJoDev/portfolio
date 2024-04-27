import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { faJenkins } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';



@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [FontAwesomeModule],
  styleUrl: './home.component.css', 
})
export class HomeComponent implements OnInit {
  
  faAngular = faAngular;
  faNodeJs = faNodeJs;
  faDocker = faDocker;
  faPython = faPython;
  faJava = faJava;
  faCss3 = faCss3;
  faHtml5 = faHtml5;
  faBootstrap = faBootstrap;
  faGit = faGit;
  faJenkins = faJenkins;
  faenvelopes = faEnvelope;
  faPhone = faWhatsapp;
  faInstagram = faInstagram;

  pythonGames: string = '/assets/images/PythonGames.png';
  javaChess: string = '/assets/images/JavaChess.png';
  livestock: string = '/assets/images/Livestock.png';
  qronos: string = '/assets/images/Qronos.png';
  game: string = '/assets/images/game.png';
  facial: string = '/assets/images/facial.png';
  




  
  faLinkedin = faLinkedin;
  faGithub = faGithub;



  ngOnInit(): void {
      
  }

}
