import cardCtrl from './card.controller'

var cardComponent = {
    bindings : {
        user: '='
    },
    templateUrl: 'card/card.template.html',
    controller: [cardCtrl]
}

export default cardComponent