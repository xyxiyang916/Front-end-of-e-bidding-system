import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  welcomeMessage: string = 'Welcome to e Bidding System, You can view BWIC list by clicking "View BWIC" menu on the left.'
}
