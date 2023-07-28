import React, { useEffect, useState } from "react";
import s from "./index.module.scss";
import classNames from "classnames";
export default function VerticalScroll(prop: {
  className?: string;
  children?: any;
  isTop: boolean
}) {
  const { className, children,isTop } = prop;

  const [isMouthed,setMouthed]= useState(false);

  useEffect(()=>{
    setMouthed(true);
    return ()=>{

    }
  },[])
  if(!isMouthed) {
    return null
  }

  return (
    <div className={classNames([s.container, className])}>
      <div className={s.disable}></div>
      <div className={s.topBox}></div>
      <div  className={s.scrollBox}>
        <div className={isTop ?s.innerBox : s.innerBox2}
        style={{
          "animationPlayState": isMouthed? "running" : "paused",
        }}
        
        >{children}{children}{children}{children}</div>
      </div>

      <div className={s.bottomBox}></div>
    </div>
  );
}
