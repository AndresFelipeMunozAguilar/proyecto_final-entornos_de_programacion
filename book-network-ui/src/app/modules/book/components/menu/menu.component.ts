import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports: [RouterLink, RouterLinkActive],
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {
    const linkColor = document.querySelectorAll('.nav-link');
    linkColor.forEach(link => {

      if (window.location.href.endsWith(link.getAttribute('routerLink') || '')) {

        link.classList.add('active');

      }
      link.addEventListener('click', () => {

        linkColor.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

      });
    });
  }

  logout() {

    localStorage.removeItem('token');
    window.location.reload();

  }
}
