import React from 'react';
import axios from 'axios';
import MarkdownIt from 'markdown-it';

function PostPage({post}) {
  const md = new MarkdownIt();
  const htmlContent = md.render(post.data.attributes.content);

  return (
    <article>
      <header>
        <h1>{post.data.attributes.title}</h1>
        <h2>{post.data.attributes.description}</h2>
      </header>
      <section dangerouslySetInnerHTML={{__html: htmlContent}}></section>
    </article>
  );
}

export default PostPage;

export async function getServerSideProps({query}){ //context.query
  const postRes = await axios.get(`http://localhost:1337/api/posts/${query.id}`);
  return{
    props: {
      post: postRes.data,
    }
  };

}
