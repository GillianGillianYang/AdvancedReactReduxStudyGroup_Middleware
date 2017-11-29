import  { FETCH_USERS } from './type';


export default function(state = [], action){

switch(action.type){

case FETCH_USERS:

   return [...state, ...action.payload];


}

  return state;

}