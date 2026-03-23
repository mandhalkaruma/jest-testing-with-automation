
export const login = (username, password) => {
    if(!username || !password) {
        return "Fields required";
    }

    if(username === "admin" && password === "1234") {
        return "Login Successful";
    }

    return "Invalid Credentials";
};

export default login;