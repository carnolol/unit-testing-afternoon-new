import React from 'react'
import {render} from '@testing-library/react'
import PostWidget from '../components/PostWidget'
import {MemoryRouter} from 'react-router-dom'
const {shortenText} = require('../../src/utils/functions')
import {posts} from './__data__/testData'

const longPost = posts[0]
const shortPost = posts[1]

it('makes a post', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...shortPost}/>
        </MemoryRouter>
    )
    expect(container.textContent).toContain(shortPost.text)
})

it('shortens the text that is displayed', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget {...longPost}/>
        </MemoryRouter>
    )
    expect(container.textContent).toContain(shortenText(longPost.text))
})

it('will check to make sure all text is displayed when expanded', () => {
    const {container} = render(
        <MemoryRouter>
            <PostWidget expanded={true} {...longPost}/>
        </MemoryRouter>
    )
    expect(container.textContent).toContain(longPost.text)
})