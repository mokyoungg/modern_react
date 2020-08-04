import React from "react";

const ImageList = (props) => {
  /*기존 코드
  const images = props.images.map((image) => {
    return (
      <img key={image.id} src={image.urls.regular} alt={image.description} />
    );
  });*/

  // 리팩터링, image 단어 반복 줄이기
  const images = props.images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
