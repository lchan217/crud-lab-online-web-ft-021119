
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
    return ({
      ...state,
      restaurants: [
        ...state.restaurants,
        action.restaurant
      ]
    })

    case 'DELETE_RESTAURANT':
    let restaurant = {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id), reviews: state.reviews}
    return restaurant

    case 'ADD_REVIEW':
    const review = {text: action.review.text, restaurantId: action.review.restaurantId, id: action.review.id}
    const result =  ({
      ...state,
      reviews: [
        ...state.reviews,
        review
      ]
    })
    return result

    case 'DELETE_REVIEW':
    let rev =  {restaurants: state.restaurants, reviews: state.reviews.filter(review => review.id !== action.id)}
    return rev

    default:
      return state;
  }
}
