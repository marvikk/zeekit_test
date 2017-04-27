export default function (state = null, action) {
    switch (action.type) {
        case 'DATA_FETCHED':
            return action.payload;
            break;
    }
    return state;
}