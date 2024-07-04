import PropTypes from "prop-types";
import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.profileInfo}>
        <img className={s.avatar} src={image} alt="User avatar" />
        <p className={s.username}>{name}</p>
        <p className={s.details}>@{tag}</p>
        <p className={s.details}>{location}</p>
      </div>

      <ul className={s.statsList}>
        <li className={s.stats}>
          <span>Followers</span>
          <span className={s.statsData}>{stats.followers}</span>
        </li>
        <li className={s.stats}>
          <span>Views</span>
          <span className={s.statsData}>{stats.views}</span>
        </li>
        <li className={s.stats}>
          <span>Likes</span>
          <span className={s.statsData}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
