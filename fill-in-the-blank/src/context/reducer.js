import {
    DISPLAY_POPUP,
    CLEAR_POPUP
} from './actions'

const reducer = (state,action) => {

      if (action.type === DISPLAY_POPUP) {
        return {
          ...state,
          showPopup:"show"
        };
      }
      if (action.type === CLEAR_POPUP) {
        return {
          ...state,
          showPopup:""
        };
      }
}

export default reducer

