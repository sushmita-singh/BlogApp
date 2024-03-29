import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import appwriteService from '../appwrite/config'
import Container from '../components/container/Container'
import PostForm from '../components/post-form/PostForm'

function EditPost() {

  const [post, setPost] = useState(null)
  const {slug} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        console.log('inside update post', post)
        if (post) {
          console.log('post found')
          setPost(post)
        }else {
          navigate("/")
        }
      })
    }
  }, [slug, navigate])

  return (
    <div className='py-6'>
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  )
}

export default EditPost