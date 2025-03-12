import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CoreService } from '../../services/core.service';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: [],
  standalone: true,
  imports: [RouterOutlet, MaterialModule, CommonModule],
})
export class BlankComponent {
  private readonly htmlElement!: HTMLHtmlElement;

  options = this.settings.getOptions();

  constructor(private readonly settings: CoreService) {
    this.htmlElement = document.querySelector('html')!;
  }
}
