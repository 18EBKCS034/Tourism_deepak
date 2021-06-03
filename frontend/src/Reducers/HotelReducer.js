export function hotelID (state = "",action){
    switch(action.type){
        case "CLICKED":
            state = action.payload;
            return state
        case "UNCLICKED" :
            state = "";
            return state;
        default :
            return state;
    }
}