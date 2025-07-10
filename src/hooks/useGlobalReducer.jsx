import { useContext, useReducer, createContext } from "react";

const initialState = {
  contacts: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      if (state.contacts.find(c => c.id === action.payload.id)) return state;
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case "REMOVE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(item => item !== action.payload)
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        )
      };
    default:
      return state;
  }
};

const GlobalContext = createContext();

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ store, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalReducer = () => useContext(GlobalContext);
export default useGlobalReducer;
