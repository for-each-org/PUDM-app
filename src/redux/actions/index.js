// action types
export const UPDATE_USER_GROUP = "UPDATE_USER_GROUP"

export const updateGroup = newGroup => ({
  type: UPDATE_USER_GROUP,
  group: newGroup
})
