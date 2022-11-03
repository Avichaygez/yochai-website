const loggedReducer = (state = "", action: any) => {
    switch (action.type) {
        case "Admin":
            state = "Admin";
            break;
        case "Guest":
            state = "Guest";
            break;
        case "":
            state = "";
            break;
    }
    return state
}

export default loggedReducer;