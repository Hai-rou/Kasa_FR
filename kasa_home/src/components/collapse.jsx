import React, {useState} from "react";
import '../assets/style/collapse.css'

export function Collapse(props) {

    const [ isShow, setIsShow ] = useState(false);

    const showContent = () => {
          setIsShow(!isShow);
    }

    const contentClass = (isShow ? "visible" : "hidden") + " collapse__content";
    const chevronClass = (isShow ? "fa-chevron-up" : "fa-chevron-down") + " fas";

    return (
          <div className='collapse__panel'>
                <div className='collapse__header' onClick={showContent} >
                      <span>{props.title}</span>
                      <i className={chevronClass}></i>
                </div>
                {isShow && <p className={contentClass}>{props.content}</p>}
          </div>
    );
}