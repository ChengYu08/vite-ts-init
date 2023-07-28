import React from "react";
import s from "./index.module.scss";
import classNames from "classnames";
import Marquee from "react-fast-marquee";

import IKsmart from "@/assets/images/IKsmart.png";
import kid from "@/assets/images/kid.png";
import konnectWallet from "@/assets/images/konnectWallet.png";
import task from "@/assets/images/task.png";
import web3Social from "@/assets/images/web3Social.png";
import phoneBg from "@/assets/images/phoneBg.png";
import phoneTabBg from "@/assets/images/phoneTabBg.png";
import { bodyToScroll } from "@/utils";
import { Translation } from "react-i18next";
const listConfig = [
  {
    label: <Translation>{t=>t("wsc")}</Translation>,
    disable: false,
    assetsUrl: web3Social,
    desc: <Translation>{t=>t("wpscv")}</Translation>,
  },
  {
    label: <Translation>{t=>t("kw")}</Translation>,
    disable: false,
    assetsUrl: konnectWallet,
    desc:  <Translation>{t=>t("saty")}</Translation>,
  },
  // {
  //   label: "Web3 traffic portal",
  //   disable: false,
  //   assetsUrl: "",
  //   desc: "With Konnect Token incentives, we provide a scientific and conversion mechanism for billions of global Web2 and Web3 mature traffic ",
  // },
  {
    label: <Translation>{t=>t("Ktask")}</Translation>,
    disable: false,
    assetsUrl: task,
    desc: <Translation>{t=>t("kiapt")}</Translation>,
  },
  {
    label: <Translation>{t=>t("iks")}</Translation>,
    disable: false,
    assetsUrl: IKsmart,
    desc:<Translation>{t=>t("iksia")}</Translation>,
  },
  // {
  //   label: "Konnect Protocol",
  //   disable: false,
  //   assetsUrl: "",
  //   desc: "Konnect is powered by a high performance, open, secure web3 communications and social graph protocol",
  // },

  {
    label: <Translation>{t=>t("kid")}</Translation>,
    disable: false,
    assetsUrl: kid,
    desc: <Translation>{t=>t("kiaddi")}</Translation>,
  },

  // {
  //   label: "And More",
  //   disable: true,
  //   assetsUrl: "",
  //   desc: "",
  // },
];
export default class AppShow extends React.PureComponent<{className?:string}> {
  state = {
    activeIndex: 0,
  };

  componentDidMount(): void {}

  containerMouseEnter = () => {
    bodyToScroll(false);
    document.body.style.overflowY = "hidden";
    document.documentElement.style.overflowY = "hidden";
  };
  containerMouseLeave = () => {
    bodyToScroll(true);
    document.body.style.overflowY = "auto";
    document.documentElement.style.overflowY = "auto";
  };

  clickPhone=()=>{
    const { activeIndex } = this.state;
    let nextActiveIndex = activeIndex+1;
    if(activeIndex==listConfig.length-1) {
      nextActiveIndex = 0
    }
    this.setState({
      activeIndex: nextActiveIndex
    })
  }

  // 渲染顶部轮播部分
  _renderTopCarousel() {
    return (
      <Marquee className={s.marquee}>
        <div className={s.font}>
          * YOUR WEB3 * YOUR WEB3 * YOUR WEB3 * YOUR WEB3 * YOUR WEB3 * YOUR
          WEB3 * YOUR WEB3 * YOUR WEB3 * YOUR WEB3 * YOUR WEB3 * YOUR WEB3 *
          YOUR WEB3 *
        </div>
      </Marquee>
    );
  }

  // 渲染手机部分
  _renderPhone() {
    const { activeIndex } = this.state;
    const currentListItem = listConfig[activeIndex];
    return (
      <div className={s.phoneBox} >
        <img src={phoneBg} alt="" className={s.phoneBg} />
        {currentListItem.assetsUrl ? (
          <div className={classNames([s.curBox,'slide-in-right'])} key={activeIndex}>
            <img alt="" src={currentListItem.assetsUrl} className={classNames([s.phone])} />
          </div>
          
        ) : (
          <span className={s.phone}></span>
        )}
      </div>
    );
  }

  // 渲染文本信息
  _renderTextInfo() {
    const { activeIndex } = this.state;
    const currentListItem = listConfig[activeIndex];
    return (
      <div className={classNames([s.textInfo,'fade-in-bottom'])} key={activeIndex}>
      <div className={s.t}> <span>{"{ "}</span>{currentListItem.label}<span>{" }"}</span></div>
        <div className={s.desc}>{currentListItem.desc}</div>
      </div>
    );
  }

  render() {
    const { className } = this.props;
    return (
      <div className={classNames([s.container, className])} onClick={this.clickPhone}>
        <img src={phoneTabBg} alt="" className={s.phoneTabBg} />
        {this._renderTopCarousel()}
        {this._renderPhone()}
        {this._renderTextInfo()}
      </div>
    );
  }
}
