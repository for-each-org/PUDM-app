// action types
export const UPDATE_USER_GROUP = "UPDATE_USER_GROUP"

// actions / action creators
export const updateGroup = newGroup => ({
  type: UPDATE_USER_GROUP,
  group: newGroup
})
