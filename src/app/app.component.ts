import { JsonPipe } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppInputData } from './shared/models/app-input-data.interface';

@Component({
  selector: 'bankline-pf-investimentos-catalogo',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-component';

  private _data: AppInputData = {};

  @Input()
  set configurationData(value: string) {
    this._data = JSON.parse(value) ?? {};
  }

  get configurationData(): AppInputData {
    return this._data;
  }

 ngOnInit() {
    console.log('Input ops:', this.configurationData);
  }

  onDestroy() {
    console.log('Custom element destroyed');
  }
}
