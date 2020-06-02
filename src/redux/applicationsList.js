
export function setApplicationsList(payload) {
    return {
        type: "SET_APPLICATIONS_LIST",
        payload: payload
    }
}

const defaultApplicationsList = []

export default function applicationsListReducer(applicationsList = defaultApplicationsList, action) {
    switch (action.type){
    
        case "SET_APPLICATIONS_LIST":
            return action.payload

        default:
            return applicationsList
    }
}