import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const menu = document.querySelector('.navbar-menu') as HTMLElement;
    if (menu) {
      menu.style.display = this.isMenuOpen ? 'flex' : 'none';
    }
  }
}
