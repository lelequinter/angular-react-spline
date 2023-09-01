import { Component } from '@angular/core';
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import SplineViewer from "./components/spline-viewer";
import Spline, { SplineProps } from '@splinetool/react-spline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  title = 'angular-react-spline';

  Spline = Spline;
  splineProps: SplineProps = {
    scene: 'https://prod.spline.design/UWoeqiir20o49Dah/scene.splinecode'
  }

  SplineViewer = SplineViewer;

  // public reactComponentId = 'reactComponnet';

  // ngOnChanges(changes: SimpleChanges){
  //   this.render();
  // }

  // ngAfterViewInit(){
  //   this.render();
  // }

  // ngOnDestroy(){

  // }

  // private render(){
  //   ReactDOM.render(React.createElement(SplineViewer), document.getElementById(this.reactComponentId));
  // }
}
