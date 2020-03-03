import { SOME_TEST, STORE_DATA } from "../actionTypes";

const initialState = {
  authors: [],
  featuredReviews: [],
  files: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case STORE_DATA: {
      const { authors, featuredReviews, files } = action.payload;
      return {
        ...state,
        authors,
        featuredReviews,
        files
      };
    }
    default:
      return state;
  }
}
