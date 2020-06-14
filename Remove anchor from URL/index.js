function removeUrlAnchor(url) {
    var split = url.split("#");
    return split[0]
}

module.exports = removeUrlAnchor, url;