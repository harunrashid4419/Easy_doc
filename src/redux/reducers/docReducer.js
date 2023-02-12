import { DOCERROR, ERROR, INTERVIEW, SUCCESS } from "../actionTypes/actionTypes";

const initialState = {
    data: {},
    error: '',
    loading: true,
    open: '',
};
const docReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                data: action.result
            };
        case ERROR:
            return {
                ...state,
                error: 'ther was a fetching problem',
                loading: false,
                data: {}
            };
        case INTERVIEW:
            return { open: 'interview' };
        case DOCERROR:
            return { open: 'docerror' }
        default:
            return state;
    }
}
export default docReducer;