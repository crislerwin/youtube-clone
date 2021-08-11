import React, { Component } from "react";
import { connect } from "react-redux";
import { Hidden, Box, Paper, InputBase, IconButton } from "@material-ui/core";
import { SearchIcon } from "@material-ui/icons/Search";

import { searchVideo } from "../redux/store/actions/video-search";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    //on load
    this.props.searchVideo("Youtube Redux");
  }

  surveyTerm = (e) => {
    if (e.keyCode === 13) {
      const param = e.target.value;
      console.log(param);
      this.props.searchVideo(param);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Hidden mdDown>
          <Box>
            <Paper
              component="form"
              style={{
                padding: "2px 4px",
                display: "flex",
                alignItems: "center",
                height: 35,
                width: 600,
              }}
            >
              <InputBase
                style={{
                  flex: 1,
                }}
                placeholder="Pesquisar"
              />
              <IconButton aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Hidden>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.search.loading,
    error: state.search.error,
    videos: state.search.videos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchVideo: (param) => dispatch(searchVideo(param)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
