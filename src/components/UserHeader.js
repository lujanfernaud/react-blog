import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserHeader extends Component {
  render() {
    const { user } = this.props

    if (!user) {
      return null
    }

    return <div>{user.name}</div>
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find(user => user.id === ownProps.userId)

  return { user }
}

export default connect(mapStateToProps)(UserHeader)
