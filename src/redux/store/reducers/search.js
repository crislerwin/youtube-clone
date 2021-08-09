const INITIAL_STATE = {
  videos: [],
  loading: false,
  error: false,
};

export default function busca(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SEARCH_VIDEO_REQUEST":
      return {
        loading: true,
        videos: [],
        error: false,
      };

    case "SEARCH_VIDEO_SUCCESS":
      return {
        loading: false,
        videos: action.videos,
        error: false,
      };

    case "SEARCH_VIDEO_ERROR":
      return {
        loading: false,
        videos: [],
        error: true,
      };

    default:
      return state;
  }
}
