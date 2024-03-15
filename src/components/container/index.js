import React from "react";
import * as style from './style.module.scss';

const Container = ({ children, color }) =>{
const containerClasses = [style.container, style[color]];
  return (
    <div className={ containerClasses.join(" ") }>
      { children }
    </div>
  )
}

export default Container;