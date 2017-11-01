import {Component, OnInit} from '@angular/core';
import {MyModel} from "./model/my-model";
import {MyModelService} from "./model/my-model.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private myModelService: MyModelService
  ) { }

  ngOnInit(): void {
    this.myModelService.getMyModels().then(models => this.models = models);
  }

  title = 'app';

  models: MyModel[];
 }
