import React from 'react';
import styles from './Profile.module.scss';

interface ProfileProps {
  mainColor: string;
  badgeColor: string;
}

const Profile: React.FC<ProfileProps> = ({ mainColor, badgeColor }) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.mainCircle} style={{ backgroundColor: mainColor }}>
        <div className={styles.badge} style={{ backgroundColor: badgeColor }}></div>
      </div>
    </div>
  );
};

export default Profile;
