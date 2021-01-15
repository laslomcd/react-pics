import React from "react";

const ImageList = ({ images }) => {
	const imagesArray = images.map((image) => {
		return <img src={image.urls.regular} alt="" />;
	});

	return <div>{imagesArray}</div>;
};

export default ImageList;
