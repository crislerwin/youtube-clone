const INITIAL_STATE = {
  videos: [],
};
export default function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SEARCH_VIDEOS":
      return {
        ...state,
        videos: action.payload,
      };
    default:
      return state;
  }
}
