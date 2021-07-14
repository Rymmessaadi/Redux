//action

const BUY_PHONE = "Buy_Phone";
const BUY_TABLET = "Buy_tablet";

function buyPhone() { // fonction qui retoure un objet 
    return {
        type: BUY_PHONE
    }

}
function buyTablet() { // fonction qui retoure un objet 
    return {
        type: BUY_TABLET
    }

}

//reducer
//(PrevState, action) => NewState
const initialState = {
    phones: 5,
    tablet: 11
}

const reducer = (state = initialState, action) => { //etape 3 : le reducer prend une decision on se basant sur la state initial et l'action et va changer le state 
    switch (action.type) {
        case BUY_PHONE:
            return {
                ...state,// copier l'etat initial 
                phones: state.phones - 1

            }
            break;
        case BUY_TABLET:
            return {
                ...state,// copier l'etat initial 
                tablet: state.tablet - 1

            }


        default: return state

    }
}
const store = Redux.createStore(reducer);
const availablePhones = document.getElementById('count');
const availableTablet = document.getElementById('count-tab');
availablePhones.innerHTML = store.getState().phones;
availableTablet.innerHTML = store.getState().tablet;  // etape 1 : etat initial = 5 

document.getElementById('buy-phone').addEventListener('click', function () { // etape 2 : lorsque on click sur le bouton on dispatch une action 
    store.dispatch(buyPhone())
})
document.getElementById('buy-tablet').addEventListener('click', function () {
    store.dispatch(buyTablet())
})
//etape 4 : un listener se lance à chaque modification de state pour pouvoir metttre à jour notre interface
store.subscribe(() => {
    availablePhones.innerHTML = store.getState().phones;
    availableTablet.innerHTML = store.getState().tablet;

})