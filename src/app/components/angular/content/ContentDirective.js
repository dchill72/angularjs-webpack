class ContentDirective {
    constructor () {
        return {
            transclude: true,
            restrict: 'E',
            template: require('./content.html'),
            controller: ContentDirectiveController,
            controllerAs: 'controller',
            bindToController: true
        }
    }
}

class ContentDirectiveController {
    constructor () {}
}

export default ContentDirective
