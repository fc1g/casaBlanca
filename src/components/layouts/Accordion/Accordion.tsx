import { useState } from 'react';
import AccordionItem from '../../AccordionItem/AccordionItem';

function Accordion() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      {Array.from({ length: 2 }, (_, i) => (
        <AccordionItem
          active={active}
          onClick={setActive}
          key={i}
          content={`contacts.accordion.${i === 0 ? 'firstPart' : 'secondPart'}`}
          data={i}
        />
      ))}
    </>
  );
}

export default Accordion;
