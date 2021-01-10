import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

function Post({ username, caption, imageUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar 
                    className="post__avatar"
                    alt="Pleco"
                    src="https://cdn.shopify.com/s/files/1/1163/2672/products/L397-Panaqolus-Pleco-1_1024x1024.jpg?v=1561723517"
                />
                <h3>{ username }</h3>
            </div>

            <img className="post__image" src={ imageUrl } alt="" />
            <h4 className="post__text"><strong>{ username }</strong> { caption }</h4>
            {}
            {}
            {}
        </div>
    )
}

export default Post
