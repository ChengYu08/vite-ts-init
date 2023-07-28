import s from "./index.module.scss";
import classNames from "classnames";
export default function PhotoCard(prop: any) {
  const { title, desc, photo ,className} = prop;
  return (
    <div className={classNames([s.container, className])}>
      <img className={s.photo} alt="" src={photo} />
      <div className={s.infoBox}>
        <div className={s.title}>{title}</div>
        <div className={s.desc}>{desc}</div>
      </div>
    </div>
  );
}
