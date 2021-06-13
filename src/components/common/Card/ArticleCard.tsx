import * as React from 'react';
import { Box, Tag, Theme, useTheme } from '@chakra-ui/react';

import { SafeAny } from '@models';

interface ArticleCardProps {
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

function ArticleCardContainer({
  imageUrl,
  category,
  title,
  children,
  className = '',
}: ArticleCardProps) {
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
      <Box position="relative" pt={8} px={4} pb={4}>
        {category && (
          <Tag
            position="absolute"
            left="1rem"
            top="-15px"
            size="large"
            variant="solid"
            px={4}
            py={2}
            background={theme.colors.black}
            className="text-sm"
          >
            {category}
          </Tag>
        )}
        {ExtrasChild}
        <div className="ItemCard__header text-lg font-bold">
          <h2>{title}</h2>
        </div>
        {FooterChild}
      </Box>
    </div>
  );
}

const ItemCard: React.ComponentType<ArticleCardProps> & {
  Extras: React.FC;
  Footer: React.FC;
} = ArticleCardContainer as SafeAny;
ItemCard.Extras = Extras;
ItemCard.Footer = Footer;

export default ItemCard;
