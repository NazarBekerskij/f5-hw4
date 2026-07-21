import style from './Statistics.module.css';

export default function Statistics({ stats }) {
  return (
    <ul className={style.statList}>
      <h2 className={style.title}>UPLOAD STATS</h2>
      {stats.map(({ id, label, percentage }) => (
        <li key={id} className={style.item}>
          <span className={style.label}>{label}</span>
          <span className={style.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
}