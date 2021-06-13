import * as React from 'react';

import { ITermCondition } from '@models';
import { Container } from '@components';

interface TermConditionProps {
  termCondition: ITermCondition[];
}

const TermCondition = ({ termCondition = [] }: TermConditionProps) => {
  const refs = termCondition.reduce((item, value) => {
    item[value.id] = React.createRef();
    return item;
  }, {});

  const scrollToElement = (id: number) => {
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const handleClick = (id: number) => {
    scrollToElement(id);
  };

  const handleChange = (e) => {
    let id = e.target.value;
    scrollToElement(id);
  };

  return (
    <Container extraClasses="termCondition">
      <h1 className="font-extrabold text-3xl text-black">
        TRUE DIGITAL PARK MEMBERSHIP AGREEMENT
      </h1>
      <h2 className="font-extrabold text-3xl text-black">TERMS & CONDITIONS</h2>
      <article>
        <select
          className="border border-metallic-gray text-base font-bold bg-light-gray p-3 my-4 cursor-pointer w-full block lg:hidden"
          onChange={(e) => handleChange(e)}
        >
          {termCondition.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </article>
      <div className="grid grid-cols-5 grid-flow-col gap-4 mt-8">
        <div className="col-span-1 hidden lg:block">
          {termCondition.map((item) => (
            <article
              className="border border-metallic-gray text-base font-bold bg-light-gray p-3 mb-4 cursor-pointer"
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              {item.title}
            </article>
          ))}
        </div>
        <div className="col-span-5 ml-0 lg:col-span-4 lg:ml-4">
          {termCondition.map((item) => (
            <article key={item.id} ref={refs[item.id]}>
              <h1 className="text-2xl font-bold mb-6">{item.title}</h1>
              <div className="text-base leading-7 mb-10">
                <div
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  className="content leading-7"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TermCondition;
