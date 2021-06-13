import { Section234 } from '@models';

interface MembershipsCardProps {
  item: Section234;
}

const MembershipsCard = ({ item }: MembershipsCardProps) => {
  const bg = 'bg-white',
    padding = 'p-4',
    border = 'border-b-4 border-transparent hover:border-bright-green',
    shadow = 'hover:shadow-custom-sm md:hover:shadow-custom';
  return (
    <div className={`${bg} ${padding} ${border} ${shadow}`}>
      <div className="flex justify-center">
        <img src={item.image} height="60px" width="60px" />
      </div>
      <div className="mt-4 font-bold h-14 leading-7 line-clamp-2 text-center">
        {item.title}
      </div>
      <p className="hidden md:line-clamp-3">{item.detail}</p>
    </div>
  );
};

export default MembershipsCard;
