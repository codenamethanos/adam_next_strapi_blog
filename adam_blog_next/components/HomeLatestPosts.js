import React, { useEffect, useState } from 'react';
import PostPreview from './PostPreview';

function HomeLatestPosts({posts}) {
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(()=>{
        setLatestPosts(posts.data.slice(0, 5));
    }, [posts]);

    function renderPostPreview() {
        return latestPosts.map((post) => {
            return <PostPreview post={post} key={post.id} />
        });
    }

    return(
        <>
            <h2>Latest Posts</h2>
            {renderPostPreview()}
        </>
    );
}

export default HomeLatestPosts;
