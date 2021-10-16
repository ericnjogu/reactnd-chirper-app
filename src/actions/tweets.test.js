const rewire = require("rewire")
const tweets = rewire("./tweets")
const addTweet = tweets.__get__("addTweet")
// @ponicode
describe("tweets.receiveTweets", () => {
    test("0", () => {
        let callFunction = () => {
            tweets.receiveTweets("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            tweets.receiveTweets("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            tweets.receiveTweets("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            tweets.receiveTweets("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            tweets.receiveTweets("Edmond")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            tweets.receiveTweets(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("tweets.toggleTweet", () => {
    test("0", () => {
        let callFunction = () => {
            tweets.toggleTweet({ id: 56784, authedUser: "username", hasLiked: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            tweets.toggleTweet({ id: "bc23a9d531064583ace8f67dad60f6bb", authedUser: "user_name", hasLiked: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            tweets.toggleTweet({ id: 12345, authedUser: "username", hasLiked: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            tweets.toggleTweet({ id: "a1969970175", authedUser: "username", hasLiked: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            tweets.toggleTweet({ id: 56784, authedUser: "user-name", hasLiked: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            tweets.toggleTweet({ id: -Infinity, authedUser: "", hasLiked: false })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("tweets.handleToggleTweet", () => {
    test("0", () => {
        let callFunction = () => {
            tweets.handleToggleTweet("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            tweets.handleToggleTweet(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("addTweet", () => {
    test("0", () => {
        let callFunction = () => {
            addTweet("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            addTweet("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            addTweet("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            addTweet("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            addTweet("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            addTweet(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("tweets.handleAddTweet", () => {
    test("0", () => {
        let callFunction = () => {
            tweets.handleAddTweet("foo bar", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            tweets.handleAddTweet("This is a Text", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            tweets.handleAddTweet("Foo bar", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            tweets.handleAddTweet("foo bar", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            tweets.handleAddTweet("Hello, world!", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            tweets.handleAddTweet(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
