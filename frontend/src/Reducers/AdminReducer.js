export function isAdmin(state=false,action){
    switch(action.type){
        case "ADMIN":
            state = true;
            return state;
        case "NO_ADMIN":
            state = false
            return state;
        default :
            return state;
    }
}