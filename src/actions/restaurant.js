export const addRestaurant = (restaurant) =>{
  return {type: "ADD_RESTAURANT",
  restaurant}
}

export const deleteRestaurant = (id) =>{
  return {type: "DELETE_RESTAURANT",
  id}
}

export const addReview = (review) =>{
  return {type: "ADD_REVIEW",
  review}
}

export const deleteReview = (id) =>{
  return {type: "DELETE_REVIEW",
  id}
}
