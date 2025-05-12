import { useState, useRef} from "react";
import '../assets/style/collapse.css'




export function Collapse(props) {
  const [isShow, setIsShow] = useState(false);
  const contentRef = useRef(null);

  const toggleShow = () => setIsShow(!isShow);

  const chevronClass = (isShow ? "fa-chevron-up" : "fa-chevron-down") + " fas";

  return (
    <div className="collapse__panel">
      <div className="collapse__header" onClick={toggleShow}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </div>
      <div
        ref={contentRef}
        className="collapse__content-wrapper"
        style={{
          maxHeight: isShow ? `${contentRef.current?.scrollHeight}px` : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <div className="collapse__content">
          {Array.isArray(props.content) ? (
            <ul className="collapse__list">
              {props.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{props.content}</p>
          )}
        </div>
      </div>
    </div>
  );
}
