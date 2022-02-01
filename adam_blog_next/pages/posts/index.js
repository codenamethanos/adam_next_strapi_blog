import React from 'react';
import axios from 'axios';
import AllPosts from '../../components/AllPosts';

function Posts({posts}) {
  return(
    <>
        <AllPosts posts={posts} />
    </>
  );
}

export default Posts;

export async function getServerSideProps(){ //getStaticProps()
    const postsRes = await axios.get("http://localhost:1337/api/posts");
    // console.log(postsRes.data.data[0].attributes.title);
    return{
      props: {
        posts: postsRes.data,
      }
    };
}
