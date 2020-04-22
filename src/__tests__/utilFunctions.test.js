const {shortenText} = require('../../src/utils/functions')
const {wordCount, attachUserName} = require('../../server/utils')
import {shortText, longText, posts, users} from './__data__/testData'

test('shortenText should not alter stringers under 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})

test('should shorten strings over 100 and place ... at the end', () => {
    expect(shortenText(longText)).not.toHaveLength(longText.length)
    expect(shortenText(longText).slice(-3)).toBe('...')
})

test('should return the total amount of words', () => {
    expect(wordCount(posts)).toEqual(233)
})

test('Should see if the first post returned has a property called displayName', () => {
    expect(attachUserName(users,posts)[0]).toHaveProperty('displayName')
})

test('should remove a post that has no matching user', () => {
    const newPost = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(newPost).not.toContainEqual(deletedPost)
})