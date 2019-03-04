export const RECEIVE_TWEETS = "RECEIVE TWEETS"

export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}