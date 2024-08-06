import React from "react";
import ImageGallery from "react-image-gallery";

const CustomGalleryItem = (item) => {

	console.log(item)
	if (item?.type === 'video') {
		return (
			<div style={{ height: '600px', width: '100%' }}>
				<iframe
					width="100%"
					height="100%"
					src={`https://www.youtube.com/embed/${item.original.split('v=')[1]}`}
					frameBorder="0"
					allowFullScreen
				/>

			</div>
		);
	} else {
		return (
			<div style={{ height: '600px', width: '100%' }}>

				<img src={item.original} alt="image" />;
			</div>
		)
	}
};

export const CustomImageGallery = ({
	showThumbnails = false,
	showFullscreenButton = false,
	showPlayButton = false,
	autoPlay = true,
	showBullets = true,
	showNav = false,
}) => {

	const images = [
		{
			original: "https://picsum.photos/id/1018/1000/600/",
			thumbnail: "https://picsum.photos/id/1018/250/150/",
		},
		{
			original: "https://picsum.photos/id/1015/1000/600/",
			thumbnail: "https://picsum.photos/id/1015/250/150/",
		},
		{
			original: "https://picsum.photos/id/1019/1000/600/",
			thumbnail: "https://picsum.photos/id/1019/250/150/",
		},
		{
			original: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
			thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
			type: 'video',
			renderItem: CustomGalleryItem,
		},
	];

	return (
		<>
			<ImageGallery
				items={images}
				renderItem={CustomGalleryItem}
				showThumbnails={showThumbnails}
				showFullscreenButton={showFullscreenButton}
				showPlayButton={showPlayButton}
				autoPlay={autoPlay}
				showBullets={showBullets}
				showNav={showNav} //for left right arrow
			/>
		</>
	)

}
