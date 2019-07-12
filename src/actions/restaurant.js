export const addRestaurant = (restaurant) =>{
  return {type: "ADD_RESTAURANT",
  restaurant}
}

export const deleteRestaurant = (id) =>{
  return {type: "DELETE_RESTAURANT",
  id}
}
