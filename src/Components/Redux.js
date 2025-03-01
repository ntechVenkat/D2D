import { createStore, combineReducers } from "redux";

let initialState = {
  course: "React",
  person: "",
  mobile: "",
  totalPersons: 0,
};

function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case "addPerson":
      return { ...state, person: action.payload };
    case "updateCourse":
      return { ...state, course: action.payload };
    case "updateMobile":
      return { ...state, mobile: action.payload };
    case "updatePersonsCount":
      return { ...state, totalPersons: state.totalPersons + 1 };
    default:
      return state;
  }
}

function statusReducer(state = [], action) {
  switch (action.type) {
    case "candidateUpdate":
      return [
        ...state,
        {
          date: action.payload.date,
          statusType: action.payload.statusType,
          name: action.payload.name,
          id: action.payload.id,
        },
      ];
    default:
      return state;
  }
}

let rootReducer = combineReducers({
  details: detailsReducer,
  status: statusReducer,
});

let store = createStore(rootReducer);
export default store;
console.log(store.getState());
