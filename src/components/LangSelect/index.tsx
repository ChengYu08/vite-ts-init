import  { useEffect, useState } from "react";
import s from "./index.module.scss";
import classNames from "classnames";
import { ReactComponent as IconDown } from "@/assets/svg/IconDown.svg";
import { ReactComponent as IconUp } from "@/assets/svg/IconUp.svg";
import { ReactComponent as IconSelect } from "@/assets/svg/IconSelect.svg";
import t from "@/lang"
import langsKey from "@/langs/langsKey.json";
export default function LangSelect(props: { className?: string }) {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);

  function closeCurrent() {
    setIsOpen(false);
  }
  useEffect(()=>{
    document.addEventListener("scroll",closeCurrent)
    return ()=>{
      document.removeEventListener("scroll",closeCurrent)
    }
  },[])
  return <div className={classNames([s.container, className])}>
    <div className={s.currentLang} onClick={() => {
      setIsOpen(true)
    }}>
      <span className={s.lang}>{t.language}</span>
      {
        !isOpen? <IconDown />: <IconUp />
      }
      
    </div>
    {
      isOpen && <div className={s.toolTopBox} onClick={() => {
        setIsOpen(false)
      }}>
        <div className={s.inner}>
          {
            langsKey.map((i, idx) => {
              return <div
                key={idx}
                className={classNames([
                  s.item,
                  {
                    [s.active]: i === t.language
                  }
                ])}
                onClick={() => {
                  t.changeLanguage(i, () => {
                    setIsOpen(false)
                  })
                }}

              >
                <span></span>
                <span>{i.toUpperCase()}</span>
                <span className={s.select}>
                  <IconSelect />
                </span>
              </div>;
            })
          }
        </div>
      </div>
    }

  </div>;
}
