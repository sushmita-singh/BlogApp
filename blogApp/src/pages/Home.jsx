import React from 'react'
import appwriteService from "../appwrite/config"
import { useState } from 'react'
import { useEffect } from 'react'
import Container from '../components/container/Container'
import PostCard from "../components/PostCard"
import { useNavigate } from 'react-router-dom'

function Home() {

  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  // useEffect(() => {
  //   appwriteService.getPosts([]).then((posts) => {
  //     if (posts) {
  //       setPosts(posts.documents)
  //     }
  //   })
  // }, [])
  // if (posts.length === 0) {
    // return (
    //   <div className='w-full py-8'>
    //   <Container>
    //     <div className="flex flex-wrap flex-row gap-2">
    //       <div  className='w-1/2 h-1/2 p-2 mr-2 flex-auto'>
    //         <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image home"/>  
    //       </div>
    //       <div className='flex flex-col p-2 mr-2 h-1/2 w-1/3 gap-4'>
    //         <h2 className='font-bold text-4xl pb-2'>UNSCRIPTED</h2>
    //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel incidunt nisi sapiente, alias eos soluta veritatis cum expedita, culpa excepturi, non doloribus odit? Laborum vel expedita harum non. Molestiae dolore ipsum ex quas esse itaque consequatur, minima corporis unde facere!</p>
    //         <button 
    //         onClick={() => navigate('/all-posts')}
    //         className='bg-slate-100 py-1 my-2 rounded-lg border-none hover:bg-slate-400 justify-self-end'
    //         >
    //           Read All Posts
    //         </button>
    //       </div>
    //     </div>
    //   </Container>
    // </div>
    // )
  // }

  return (
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          {/* {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))} */}
              <div className='w-full py-8'>
              <Container>
                <div className="flex flex-wrap flex-row gap-2">
                  <div  className='w-1/2 h-1/2 p-2 mr-2 flex-auto'>
                    <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image home"/>  
                  </div>
                  <div className='flex flex-col p-2 mr-2 h-1/2 w-1/3 gap-4'>
                    <h2 className='font-bold text-4xl pb-2'>UNSCRIPTED</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel incidunt nisi sapiente, alias eos soluta veritatis cum expedita, culpa excepturi, non doloribus odit? Laborum vel expedita harum non. Molestiae dolore ipsum ex quas esse itaque consequatur, minima corporis unde facere!</p>
                    <button 
                    onClick={() => navigate('/all-posts')}
                    className='bg-slate-100 py-1 my-2 rounded-lg border-none hover:bg-slate-400 justify-self-end'
                    >
                      Read All Posts
                    </button>
                  </div>
                </div>
              </Container>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Home