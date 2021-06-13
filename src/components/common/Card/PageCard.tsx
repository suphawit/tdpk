const PageCard = ({ title, detail }) => {
  return (
    <div className="ItemCard p-4 pb-3">
      <div className="text-lg font-bold">
        <h2>{title}</h2>
      </div>
      <div className="">{detail}</div>
      <p className="mt-2 text-base font-bold text-bullet-navy underline">
        View Page
      </p>
    </div>
  );
};

export default PageCard;
