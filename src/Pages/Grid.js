import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
  width: 100%; /* Responsive width */
  height: auto; /* Responsive height */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack images vertically */
  }
`;

const ImageContainer = styled.div`
  width: ${(props) => (props.size === 'large' ? '60%' : '40%')};
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%; /* Full width for smaller screens */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio and cover the container */
  border-radius: ${(props) => {
		switch (props.position) {
			case 'top-left':
				return '10px 0 0 10px';
			case 'top-right':
				return '10px 10px 0 0';
			case 'bottom-right':
				return '0 10px 10px 0';
			default:
				return '0';
		}
	}};
`;

export const ImageGrid = () => {
	return (
		<Container>
			<ImageContainer size="large">
				<Image
					src="https://media.istockphoto.com/id/975148984/photo/3d-rendering-of-modern-cozy-house-by-the-river-at-evening.jpg?s=612x612&w=is&k=20&c=siXfYZI1O3p0BQy8dNU_jK0oMrKbhljcyHlDGs-W5eo="
					alt="Modern house"
					position="top-left"
				/>
			</ImageContainer>
			<ImageContainer>
				<Image
					src="https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D"
					alt="Kitchen"
					position="top-right"
				/>
				<Image
					src="https://plus.unsplash.com/premium_photo-1682377521741-66b111791809?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Pool"
					position="bottom-right"
				/>
			</ImageContainer>
		</Container>
	);
};

