const checkPassword = (string) => {
    if(encrypt(string) == '') {

    }
}

const encryptPassword = (string) => {
    return Utilities.base64Encode(string, Utilities.Charset.UTF_8);
}

const logPassword = () => {
    return Utilities.base64Encore("@LayttosLukas356@", Utilities.Charset.UTF_8);
}