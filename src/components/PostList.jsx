import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts}) => {

	const filteredPost = posts.filter((post) => {
		return post.id > 4
	})
	return (
		<div>
			<h1 style={{textAlign: 'center'}}>Список постов</h1>
			{
				filteredPost.map((posts) => {
					return <PostItem post={posts} key={posts.id} />
				})
			}

		</div>
	);
};

export default PostList;