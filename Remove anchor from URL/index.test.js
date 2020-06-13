var removeUrlAnchor = require("./index");


test("the anchor (#) removed.", () => {
    expect(removeUrlAnchor()).toBe("www.codewars.com")
})