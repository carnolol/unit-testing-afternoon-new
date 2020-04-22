import React from 'react'
import { render, act } from '@testing-library/react'
import Post from '../../src/views/Post'
import axios from 'axios'
import { MemoryRouter } from 'react-router-dom'
import { posts } from './__data__/testData'


it('post component should render render a post', async () => {
    let post = posts[0]
    let container

    jest.spyOn(axios, 'get').mockImplementation(() => {
        return Promise.resolve({data: post})
    })
    await act(async () =>{
        let rendered = render(<MemoryRouter>
            <Post match={{ params: {postId: 1}}}/>
        </MemoryRouter>)
        container = rendered.container
    })
    expect(container.textContent).toContain(post.text)
})