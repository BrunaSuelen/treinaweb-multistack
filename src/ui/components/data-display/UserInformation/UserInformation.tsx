import React from 'react';
import {
  UserInformationContainter,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from './UserInformation.style';

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  name,
  picture,
  rating,
  description,
}) => {
  return (
    <>
      <UserInformationContainter>
        <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
        <UserName>{name}</UserName>
        <RatingStyled readOnly value={rating} />
        <UserDescription>{description}</UserDescription>
      </UserInformationContainter>
    </>
  );
};

export default UserInformation;
