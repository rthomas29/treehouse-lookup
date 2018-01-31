import React from 'react';
import './ProfileData.css';

const ProfileData = props => {
  return (
    <div id="profile" className="container">
      <aside>Profile</aside>
      <p>
        Username: {props.userName}{' '}
        <img src={props.photo} alt="profile" className="rounded-circle float-right profile-img" />
      </p>
      <p>Badge Count - {props.badges.length}</p>
      <p>Total Points - {props.points.total.toLocaleString()}</p>
    </div>
  );
};

export default ProfileData;
