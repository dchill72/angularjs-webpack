class LeftDirective {
    constructor() {
        return {
            transclude: true,
            restrict: 'E',
            template: require('./left.html'),
            controller: LeftDirectiveController,
            controllerAs: 'controller',
            bindToController: true
        }        
    }
}

class LeftDirectiveController {
    constructor () {
        
    }
}
export default LeftDirective
