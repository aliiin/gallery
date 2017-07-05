import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ImageService } from '../shared';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
 // inputs: ['image'],
})
export class ImageComponent implements OnInit {
  image: any;

  constructor(private imageService: ImageService, private route: ActivatedRoute) {}

  ngOnInit() {
      this.image = this.imageService.getImage(+this.route.snapshot.params['id']);
   }

}
