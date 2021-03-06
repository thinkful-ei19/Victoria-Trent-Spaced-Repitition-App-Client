import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR,
    SUBMITTED_ANSWER_FEEDBACK,
    SUBMITTED_ANSWER_ERROR,
    FETCH_STATS_SUCCESS,
    FETCH_STATS_ERROR,
    UPDATE_STACK_SUCCESS,
    UPDATE_STACK_ERROR
} from '../actions/protected-data';

const initialState = {
    data: null,
    stats: null,
    feedback: null,
    points: null,
    tally: null,
    progress: null,
    isCardAdded: false,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            data: action.data,
            points: action.data.points,
            isCardAdded: false,
            feedback: null,
            tally: null,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === SUBMITTED_ANSWER_FEEDBACK) {
        return Object.assign({}, state, {
            feedback: action.data,
            points: action.data.points,
            tally: action.data.correct
        });
    } else if (action.type === SUBMITTED_ANSWER_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === FETCH_STATS_SUCCESS) {
        return Object.assign({}, state, {
            stats: action.data,
            error: null
        });
    } else if (action.type === FETCH_STATS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === UPDATE_STACK_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    } else if (action.type === UPDATE_STACK_SUCCESS) {
        return Object.assign({}, state, {
            isCardAdded: true
        });
    }
    return state;
}
