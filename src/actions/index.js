import jsonPlaceholder from '../apis/jsonPlaceholder'
import chain from 'lodash/chain'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())

  chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts')

  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`)

  dispatch({ type: 'FETCH_USER', payload: response.data })
}
