import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'header';
  @Output() selectedSection = new EventEmitter<string>();

  switchSection(section: string) {
    this.selectedSection.emit(section);
  }
}
