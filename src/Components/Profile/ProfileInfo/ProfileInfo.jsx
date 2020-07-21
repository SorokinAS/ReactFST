import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src={props.imgSrc} />
      </div>
      <div className={s.descriptionBlock}>
        {props.textDescripBlock}
      </div>
    </div>
  )
}

export default ProfileInfo;