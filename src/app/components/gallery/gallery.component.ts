import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {

  gallery: any;

  constructor() {
    this.GenerateGallery();
    window.addEventListener('load', () => {
      document.getElementById('gallery_div').click();
    })
  }

  ngOnInit() {
  }

  GenerateGallery() {
    this.gallery = [
      { name_img: 'assets/img/gallery/1.jpg' },
      { name_img: 'assets/img/gallery/2.jpg' },
      { name_img: 'assets/img/gallery/3.jpg' },
      { name_img: 'assets/img/gallery/4.jpg' },
      { name_img: 'assets/img/gallery/5.jpg' },
      { name_img: 'assets/img/gallery/6.jpg' },
      { name_img: 'assets/img/gallery/7.jpg' },
      { name_img: 'assets/img/gallery/8.jpg' },
      { name_img: 'assets/img/gallery/9.jpg' },
      { name_img: 'assets/img/gallery/10.png' },
      { name_img: 'assets/img/gallery/11.png' },
      { name_img: 'assets/img/gallery/12.jpg' },
      { name_img: 'assets/img/gallery/13.jpg' }
    ]
  }

}
