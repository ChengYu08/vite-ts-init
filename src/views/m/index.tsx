import React from 'react'
import s from "./index.module.scss";
import classNames from "classnames";
export default function index(prop: { className?: string; }) {
  return (
    <div className={classNames([s.container,prop.className])}>index</div>
  )
}
