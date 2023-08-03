import { ReactNode } from "react";
import s from "./index.module.scss";
import classNames from "classnames";
export default function BtnType(props: {
  className?: string;
  type?: number;
  children: ReactNode;
}) {
  const { className, type, children } = props;
  let btnTypeContent;
  switch (type) {
    case 2: // 链接按钮
      btnTypeContent = LinkBtn(children);
      break;
    case 3: // nav底部导航栏按钮
      btnTypeContent = NavBtn(children);
      break;
    default: // 默认按钮
      btnTypeContent = DefaultBtn(children);
  }
  return (
    <div className={classNames([s.container, className])}>{btnTypeContent}</div>
  );
}

// 默认按钮
function DefaultBtn(
  children
) {
  return <div className={s.default}>{children}</div>;
}

function LinkBtn(
  children
) {
  return <div className={s.link}>{children}</div>;
}


function NavBtn(children) {
  return <div className={s.navDefault}>{children}</div>;
}
