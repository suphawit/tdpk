import * as React from 'react';
import { Box, Theme, useTheme } from '@chakra-ui/react';
import { SafeAny } from '@models';

interface NewsAndPromotionsCardProps {
  imageUrl: string;
  category?: string;
  title?: string;
  children?: JSX.Element;
  className?: string;
}

// TODO: Refactor this
const Extras: React.FC = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);
const Footer: React.FC = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

function NewsAndPromotionsCardContainer({
  imageUrl,
  title,
  children,
  className,
}: NewsAndPromotionsCardProps) {
  const theme = useTheme<Theme>();

  const childNodes = React.Children.toArray(children);
  const ExtrasChild = childNodes.find(
    (c) => c && (c as SafeAny).type === Extras
  );
  const FooterChild = childNodes.find(
    (c) => c && (c as SafeAny).type === Footer
  );

  return (
    <div className={`ItemCard ${className}`}>
      <div className="ItemCard__imageDiv">
        <img src={imageUrl} className="w-full h-full object-cover	" />
      </div>
      <Box position="relative" py={4} px={4}>
        {ExtrasChild}
        <div className="ItemCard__header text-lg font-bold">
          <h2>{title}</h2>
        </div>
        {FooterChild}
      </Box>
    </div>
  );
}

const ItemCard: React.ComponentType<NewsAndPromotionsCardProps> & {
  Extras: React.FC;
  Footer: React.FC;
} = NewsAndPromotionsCardContainer as SafeAny;
ItemCard.Extras = Extras;
ItemCard.Footer = Footer;

export default ItemCard;
