//action

const BUY_PHONE = "Buy_Phone";

function buyPhone() { // fonction qui retoure un objet 
    return {
        type: BUY_PHONE
    }

}

//reducer
//(PrevState, action) => NewState
const initialState = {
    phones: 5
}
const reducer = (state = initialState, action) => { //etape 3 : le reducer prend une decision on se basant sur la state initial et l'action et va changer le state 
    switch (action.type) {
        case BUY_PHONE:
            return {
                ...state,// copier l'etat initial 
                phones: state.phones - 1

            }


        default: return state

    }
}
const store = Redux.createStore(reducer);
const availablePhones = document.getElementById('count');
availablePhones.innerHTML = store.getState().phones;  // etape 1 : etat initial = 5 

document.getElementById('buy-phone').addEventListener('click', function () { // etape 2 : lorsque on click sur le bouton on dispatch une action 
    store.dispatch(buyPhone())
})
//etape 4 : un listener se lance à chaque modification de state pour pouvoir metttre à jour notre interface
store.subscribe(() => {
    availablePhones.innerHTML = store.getState().phones;
})