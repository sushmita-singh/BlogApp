import React from 'react'
import appwriteService from "../appwrite/config"
import { useState } from 'react'
import { useEffect } from 'react'
import Container from '../components/container/Container'
import PostCard from "../components/PostCard"
import { useNavigate } from 'react-router-dom'


function AllPosts() {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        console.log(posts)
        setPosts(posts.documents)
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          <h1 className='text-4xl self-center justify-center'>No Posts Available</h1>
          <button
          onClick={() => navigate('/add-post')}
          className='bg-slate-100 py-1 my-2 rounded-lg border-none hover:bg-slate-400 justify-self-end'
          >Click to add new post</button>
        </div>
      </Container>
    </div>
    )
  }

  return (
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts