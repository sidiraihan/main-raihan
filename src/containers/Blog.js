import React from 'react'
import { RouteData, Link } from 'react-static'
import { Helmet } from 'react-helmet'

//
const TITLE = 'Blog'

export default () => (
  <RouteData
    render={({ posts }) => (
      <div>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <h1>It's blog time.</h1>
        <br />
        All Posts:
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  />
)
