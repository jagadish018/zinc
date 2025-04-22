import React, { Suspense } from 'react'
import ClientPostsList from './components/ClientPostsList';




    
const PostsPage =  () => {

  return (
    <div className="mx-auto ">
      <h1>posts</h1>
     <ClientPostsList/>
    </div>
  );
}

export default PostsPage