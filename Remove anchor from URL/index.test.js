const removeUrlAnchor = require(".");

removeUrlAnchor = require("./index.js")

test("the anchor (#) removed.", (url) => {
    expect(removeUrlAnchor(url)).toBe("www.codewars.com")
});