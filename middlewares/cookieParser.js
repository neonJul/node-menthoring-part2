module.exports = cookieParser = (req, res, next) => {
    let tempObj = {};
    req.headers.cookie.split(';').forEach((item) => {
        tempObj[item.substr(0, item.indexOf('=')).trim()] = item.substr(item.indexOf('=') + 1);
    });
    req.parsedCookies = tempObj;
    next();
};