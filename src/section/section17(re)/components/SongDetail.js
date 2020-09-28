import React from "react";
import { connect } from "react-redux";

/*전체를 받는것
const SongDetail = (props) => {
  //console.log(props);
  return <div>Song Detail</div>;
};*/

// 필요한 부분만 받는 것
const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for: </h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
