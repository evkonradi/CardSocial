module.exports = {
    createCode: () => {
        var length = 6;
        var charset = "abcdefghijkmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ23456789";
        var code = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        code += charset.charAt(Math.floor(Math.random() * n));
    }
    return code;
    }
};