import { AfterViewInit, Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SplineViewer from "./components/spline-viewer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnChanges, AfterViewInit, OnDestroy {

  title = 'angular-react-spline';

  public reactComponentId = 'reactComponnet';

  ngOnChanges(changes: SimpleChanges){
    this.render();
  }

  ngAfterViewInit(){
    this.render();
  }

  ngOnDestroy(){

  }

  private render(){
    ReactDOM.render(React.createElement(SplineViewer), document.getElementById(this.reactComponentId));
  }
}
