import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPostsAndUsers } from '../actions'

import UserHeader from './UserHeader'

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers()
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      )
    })
  }

  render() {
    return <div>{this.renderList()}</div>
  }
}

const mapStateToProps = state => {
  return { posts: state.posts }
}

export default connect(
  mapStateToProps,
  { fetchPostsAndUsers },
)(PostList)