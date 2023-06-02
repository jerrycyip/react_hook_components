import { GoChevronDown, GoChevronLeft } from 'react-icons/go'
import { useState } from 'react';

function Accordion({items}) {
  const [expandedIndex, setExpandedIndex] = useState(-1); // default to everything collapsed

  const handleClick = (itemIndex) => {
    /* functional version of state update: current state relies on value of old state */
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === itemIndex) {
        return -1;
      } else {
        return itemIndex;
      }
    })
    /* simple version of state update: potentially rare bug for delayed state update  */
    // if (expandedIndex === itemIndex){
    //   setExpandedIndex(-1);
    // }
    // else {
    //   setExpandedIndex(itemIndex);
    // }
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = <span className="text-3xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>;

    return (
      <div key={item.id}>
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return (
    <div>
      {renderedItems}
    </div>
  );
}

export default Accordion;