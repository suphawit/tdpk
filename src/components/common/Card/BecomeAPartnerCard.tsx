interface EventCardProps {
  imageUrl: string;
  title?: string;
}

const EventCard = ({ imageUrl = '', title = '' }: EventCardProps) => (
  <div className="ItemCard ItemCard__border-b-4 Background-gray p-6">
    <div className="flex justify-center h-16">
      {imageUrl && <img className="h-full" alt={title} src={imageUrl} />}
    </div>
    <div className="flex items-center justify-center h-12 mt-2">
      {title && (
        <div
          dangerouslySetInnerHTML={{ __html: title }}
          className="text-center font-bold"
        />
      )}
    </div>
  </div>
);

export default EventCard;
