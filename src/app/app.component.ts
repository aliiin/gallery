import { Component } from '@angular/core';
import { ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private toasterService: ToasterService;

  constructor(toasterService: ToasterService) {
    this.toasterService = toasterService;
  }

  showMessage() {
    this.toasterService.pop('success', 'Success', 'Your profile was updated!');
  }
}
