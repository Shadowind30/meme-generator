import { Component, ViewChild } from '@angular/core';
import * as htmlToImage from 'html-to-image'

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})

export class ImageContainerComponent{

  @ViewChild('container') container;
  public upperText: string = '';
  public bottomText: string = '';
  public url: string;
  public generateImage(): void {
    htmlToImage.toPng(this.container.nativeElement, {width: 512, height: 512,}).then(dataUrl => {
      console.log(dataUrl);
      this.url = dataUrl;
    })
  }

}
