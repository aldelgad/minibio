import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minibio';
  socialNetworks = [
    {
      img: '../assets/images/github.png',
      text: 'Github',
      link: 'https://github.com/aldelgad'
    },
    {
      img: '../assets/images/twitter.png',
      text: 'Twitter',
      link: 'https://twitter.com/penks23'
    },
    {
      img: '../assets/images/instagram.png',
      text: 'Instagram',
      link: 'https://www.instagram.com/varo50'
    },
    {
      img: '../assets/images/discord.png',
      text: 'Discord',
      link: 'https://discord.gg/vf9cM7stBG'
    }
  ];

  imagesGallery = [
    {
      img: '../assets/images/draw.jpg'
    },
    {
      img: '../assets/images/fantasy.jpg'
    },
    {
      img: '../assets/images/space.jpg'
    },
    {
      img: '../assets/images/warrior.jpg'
    }
  ];
}
