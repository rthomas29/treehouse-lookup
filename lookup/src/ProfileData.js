import React from 'react';
import './ProfileData.css';

const ProfileData = props => {
  return (
    <div id="profile">
      <p>
        Username: {props.userName}{' '}
        <img src={props.photo} alt="profile" className="rounded-circle float-right profile-img" />
      </p>
      <p>Badge Count - {props.badges.length}</p>
    </div>
  );
};

export default ProfileData;
