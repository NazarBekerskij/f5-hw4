import style from './Friends.module.css';

export default function Friends({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={style.item} key={id}>
          <span className={`${style.status} ${isOnline ? style.online : style.offline}`}></span>
          <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={style.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}