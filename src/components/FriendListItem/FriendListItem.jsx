import clsx from "clsx";
import PropTypes from "prop-types";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={s.friendName}>{name}</p>
      <p
        className={clsx(s.status, {
          [s.online]: isOnline,
          [s.offline]: !isOnline,
        })}
      >
        {isOnline ? "online" : "offline"}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
