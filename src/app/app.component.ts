import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loadedSection = 'recipes';

  onSelectingSection(section: string) {
    this.loadedSection = section;
  }
}
