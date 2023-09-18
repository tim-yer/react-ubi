import React from 'react';

const PostItem = (props) => {
	return (
		<div className='post'>
			<div className="post__content">
				<strong>{props.post.id}. {props.post.name}</strong>
				<div>
					{props.post.description}
				</div>
			</div>
			<div className="post__btn">
				<button>Удалить</button>
			</div>
		</div>
	);
};

export default PostItem;