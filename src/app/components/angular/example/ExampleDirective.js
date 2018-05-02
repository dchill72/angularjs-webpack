class ExampleDirective {
    constructor() {
        return {
            transclude: true,
            restrict: 'E',
            template: require('./example.html'),
            controller: ExampleDirectiveController,
            controllerAs: 'controller',
            bindToController: true
        }
    }
}

export class ExampleDirectiveController {
    constructor () {

    }
}

export default ExampleDirective
