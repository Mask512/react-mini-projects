import { useState } from 'react';
import { data } from './data';
import './styles.css';
import ButtonSelection from './ButtonSelection';

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    selected === getCurrentId ? setSelected(null) : setSelected(getCurrentId);
  }
  function handleMultipleSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findeIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findeIndexOfCurrentId === -1) {
      copyMultiple.push(getCurrentId);
    } else {
      copyMultiple.splice(findeIndexOfCurrentId, 1);
    }
    setMultiple(copyMultiple);
  }

  return (
    <div className="wrapper">
      <ButtonSelection
        setEnableMultiSelection={setEnableMultiSelection}
        enableMultiSelection={enableMultiSelection}
      />
      <div className="accordion">
        {(!data || data.length <= 0) && <div className='not-found'> data not found </div>}

        
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div key={item.id} className="item">
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="content">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="content">{item.answer}</div>
                  )}
            </div>
          ))}
      </div>
    </div>
  );
}
