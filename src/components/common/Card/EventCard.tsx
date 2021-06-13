interface EventCardProps {
  imageUrl: string;
  title?: string;
}

const EventCard = ({ imageUrl = '', title = '' }: EventCardProps) => (
  <div className="ItemCard ItemCard__border-b-4">
    <img className="h-32 w-full object-cover" alt={title} src={imageUrl} />
    <div
      dangerouslySetInnerHTML={{ __html: title }}
      className="text-center font-bold pt-2"
    />
  </div>
);

export default EventCard;
