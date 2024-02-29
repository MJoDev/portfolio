import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [FontAwesomeModule],
  styleUrl: './home.component.css', 
})
export class HomeComponent implements OnInit {
  
  faAngular = faAngular;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  ngOnInit(): void {
      
  }

}
