class TopDirective {
    constructor () {
        return {
            transclude: true,
            restrict: 'E',
            template: require('./top.html'),
            controller: TopDirectiveController,
            controllerAs: 'controller',
            bindToController: true
        }
    }
}

class TopDirectiveController {
    constructor () {

    }
}

export default TopDirective
