import React from 'react';

const ProfileData = props => {
  return (
    <div>
      <h5>{props.name}</h5>
      <img src={props.photo} alt="profile" className="img-fluid img-thumbnail" />
      <p>{props.badges.length} total badges</p>
    </div>
  );
};

export default ProfileData;
