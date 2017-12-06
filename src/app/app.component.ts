import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private loadedFeature: string;

  constructor() {
    this.loadedFeature = 'players';
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
