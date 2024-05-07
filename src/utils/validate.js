
export const checkValidData = (email, Password, name) => {
    const isEmailValid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
    const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(Password);
    
    // const isNameValid= /^(?:[a-zA-Z0-9][a-zA-Z0-9\s]*)?$/.test(name);
    // if(!isNameValid) return "Name is not valid";
    if (!isEmailValid)
        return "Email is not valid";
    if (!isPasswordValid)
        return "Password is not valid";

    return null;
}