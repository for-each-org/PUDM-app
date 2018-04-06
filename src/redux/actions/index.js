/*** ACTION TYPES ***/
export const UPDATE_USER_GROUP = "UPDATE_USER_GROUP"


/*** ACTION CREATORS ***/
export const updateGroup = newGroup => ({
  type: UPDATE_USER_GROUP,
  group: newGroup
})
