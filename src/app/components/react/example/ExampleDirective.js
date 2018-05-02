import React from 'react';
import AngularTemplate, { reactAngularModule } from 'react-angular'
import { ExampleDirectiveController } from '../../angular/example/ExampleDirective'
import exampleDirectiveTemplate from '../../angular/example/example.html'

// var app = angular.module('app');
// app.requires.push(reactAngularModule(false).name);

export default function ExampleDirective(props) {
    return <AngularTemplate
        controller={ExampleDirectiveController}
        template={exampleDirectiveTemplate} />
}
