import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'ngreact';
import Route1Controller from './routes/route1/Route1Controller'
import Route2Controller from './routes/route2/Route2Controller'

import LeftDirective from './components/angular/left/LeftDirective'
import TopDirective from './components/angular/top/TopDirective'
import ContentDirective from './components/angular/content/ContentDirective'

import ExampleComponent from './components/react/example/example.jsx'

import { reactAngularModule } from 'react-angular'
// import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uiRouter, 'react', reactAngularModule(true).name])
  .directive('app', app)
  .directive('left', () => new LeftDirective())
  .directive('top', () => new TopDirective())
  .directive('content', () => new ContentDirective())
  .directive('exampleComponent', (reactDirective) => {
    return reactDirective(ExampleComponent);
  })
  .controller('AppCtrl', AppCtrl)
  .controller('Route1Controller', Route1Controller)
  .controller('Route2Controller', Route2Controller)
  .config(function($stateProvider) {
    var defaultRoute = {
      name: 'default',
      url: '/',
      template: '<div>Default</div>'
    }
    var route1 = {
      name: 'angular',
      url: '/angular',
      template: require('./routes/route1/route1.html'),
      controller: 'Route1Controller'
    };

    var route2 = {
      name: 'react',
      url: '/react',
      template: require('./routes/route2/route2.html'),
      controller: 'Route2Controller'
    }

    $stateProvider.state(defaultRoute);
    $stateProvider.state(route1);
    $stateProvider.state(route2);
  });

export default MODULE_NAME;