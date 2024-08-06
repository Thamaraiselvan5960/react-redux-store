import React from 'react';
import Card from '@mui/material/Card';
import { styled } from 'styled-components';
import { Input } from '../components';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	background-color: #f4f9ff;
	height: calc( 100% - 64px );
`;

const ProfileWrapper = styled.div`
	padding: 1rem;
	background-color: #e4edfb;
`;

const ProfileCard = styled(Card)`
	width: 700px;
	height: auto;
	padding: 1rem;
`;

const HeadingWrapper = styled.h1`
	font-size: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LayoutWrapper = styled.div`
	width: 50%;
`;
const LeftWrapper = styled(LayoutWrapper)`
	display: flex;
	align-items:center;
	justify-content: center;
`
const RightWrapper = styled(LayoutWrapper)``

const ImageWrapper = styled.div`
  border: 1px solid blue;
  width: 250px;
  height: auto;
  padding: 1rem;
  overflow: hidden;
  display:flex;
  align-items: center;
  flex-direction:column;
`;

const Image = styled.img`
  border: 1px solid gray;
  width: 200px;
  height: 200px;
//   height: auto;
  border-radius: 50%;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 10px;
	margin-top: 1rem;
`;

const Button = styled.button`
	height: 50px;
	padding: 1rem 0.8rem;
	border-radius: 5px;
	outline: none;
	border: none;

	&:hover {
		cursor: pointer;
	}
`;

const SaveButton = styled(Button)`
	background-color: #16182d;
	color: white;
`;


const FormGroup = styled.div`
	margin: 1rem 0;
`;

const FlexFormGroup = styled(FormGroup)`
	display: flex;
	gap: 1rem;
`;

export const Profile = () => {
	return (
		<Wrapper>
			<ProfileWrapper>

				<ProfileCard>
					<HeadingWrapper>Basic Information</HeadingWrapper>
					<Container>
						<LeftWrapper>
							<ImageWrapper>
								<Image src="https://media.istockphoto.com/id/1021908014/photo/word-writing-text-free-sample-business-concept-for-portion-of-products-given-to-consumers-in.jpg?s=612x612&w=0&k=20&c=eAgjkxxxb4UcD2XgFSuOF6ALXHPkcwB-iOpi71wnmqc=" alt='image' />
								<p>replace image</p>
							</ImageWrapper>
						</LeftWrapper>
						<RightWrapper>
							<FlexFormGroup>
								<Input placeholder='firstname' width={'50%'} />
								<Input placeholder='lastname' width={'50%'} />
							</FlexFormGroup>
							<FormGroup>
								<Input placeholder='email' width={'100%'} />
							</FormGroup>
							<FormGroup>
								<Input placeholder='phonenumber' width={'100%'} />
							</FormGroup>
							<ButtonContainer>
								<Button>Cancel</Button>
								<SaveButton>Save Changes</SaveButton>
							</ButtonContainer>
						</RightWrapper>
					</Container>
				</ProfileCard>
			</ProfileWrapper>
		</Wrapper>
	)
}