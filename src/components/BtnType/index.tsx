import React from "react";
import s from "./index.module.scss";
import classNames from "classnames";
export default function BtnType(props: {
  className?: String;
  type?: Number;
  children: any;
}) {
  const { className, type, children } = props;
  let btnTypeContent = null;
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
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined
) {
  return <div className={s.default}>{children}</div>;
}

function LinkBtn(
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined
) {
  return <div className={s.link}>{children}</div>;
}


function NavBtn(children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined) {
  return <div className={s.navDefault}>{children}</div>;
}
