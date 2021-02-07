import { Component, ElementRef, ViewChild} from '@angular/core';
import * as htmlToImage from 'html-to-image';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent{
  @ViewChild('container') container: ElementRef<HTMLDivElement>;
  public url: string;

  public upperText: string = ''
  public bottomText: string = '';
  public canDownload: boolean = false;
  public randomFileName: string;


  public async generateImage(): Promise<void> {
    if( this.upperText.length || this.bottomText.length) {
    await htmlToImage.toPng(this.container.nativeElement, {width: 512, height: 512, pixelRatio: 1}).then(dataUrl => {
      console.log(dataUrl);
      this.url = dataUrl;
      this.canDownload = true;
      this.generateFileName();
    })
  }
  }

  public generateFileName(): void {
    const randomNumber = (Math.random() * 10000000).toFixed(0);
    this.randomFileName =  'meme-' + randomNumber + '.png';
  }


}
