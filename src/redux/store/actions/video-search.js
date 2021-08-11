import { API_KEY } from "../../../api/env";
import youtubeSearch from "youtube-api-v3-search";

export const searchVideoRequest = () => {
  return {
    type: "SEARCH_VIDEO_REQUEST",
    loading: true,
    error: false,
  };
};

export const searchVideoSucess = (videos) => {
  return {
    type: "SEARCH_VIDEO_SUCCESS",
    videos,
    loading: false,
    error: false,
  };
};

export const searchVideoError = () => {
  return {
    type: "SEARCH_VIDEO_ERROR",
    loading: false,
    error: true,
  };
};

export const searchVideo = (param) => {
  return (dispatch) => {
    dispatch(searchVideoRequest());
    youtubeSearch(API_KEY, { q: param })
      .then((data) => dispatch(searchVideoSucess(data.items)))
      .catch(() => dispatch(searchVideoError()));
  };
};
