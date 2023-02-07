import { DOC_DATA, ERROR } from "../actionTypes/actionTypes";

const initialState = {
    data: {},
    error: '',
    loading: true,
};
const docReducer = (state = initialState, action) => {
    switch (action.type) {
        case DOC_DATA:
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
        default:
            return state;
    }
}
export default docReducer;