import React, { useEffect, useState } from 'react';
import PostPreview from './PostPreview';

function AllPosts({posts}) {

    function renderPostPreview() {
        return posts.data.map((post) => {
            return <PostPreview post={post} key={post.id} />
        });
    }

    return(
        <>
            <h2>All Posts</h2>
            {renderPostPreview()}
        </>
    );
}

export default AllPosts;
