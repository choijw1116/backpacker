import React, { useState } from 'react';
import Rating from './Rating';
import '../css/Textarea.css';

function Textarea() {
  const [isSave, setIsSave] = useState(false);
  const [count, setCount] = useState(50);
  const maxLength = 50;
  const a = document.getElementById('wrapstyle');
  const handleSave = () => {
    setIsSave(!isSave);
  };
  console.log(a);
  return (
    <>
      <div className="t-outline">
        {count === 50 || isSave === true ? (
          <div className="textarea">
            <div className="t-wrap">
              <textarea
                className="before"
                onChange={(e) => {
                  setCount(maxLength - e.target.value.length);
                  setIsSave(false);
                }}
                placeholder="입력해주세요"
                maxLength="49"
              ></textarea>
              <div className="remainchars">{count}</div>
            </div>
          </div>
        ) : (
          <div className="textarea">
            <div id="wrapstyle" className="t-wrap">
              <textarea
                className="after"
                onChange={(e) => setCount(maxLength - e.target.value.length)}
                placeholder="입력해주세요"
                maxLength="49"
              ></textarea>
              <div className="remainchars">{count}</div>
            </div>
            <input
              value="save"
              type="button"
              className="btn"
              onClick={handleSave}
            ></input>
          </div>
        )}
        <textarea className="disabled" id="text" disabled>
          비활성화입니다!
        </textarea>
        <textarea className="readonly" id="text" readOnly>
          읽기전용입니다!
        </textarea>
      </div>
    </>
  );
}

export default Textarea;
