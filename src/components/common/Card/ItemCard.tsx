import * as React from 'react';
import { Box, Image, Tag, Text, Theme, useTheme } from '@chakra-ui/react';
import { SafeAny } from '@models';

interface ItemCardProps {
  imageUrl: string;
  category?: string;
  title?: string;
  imageHeight?: string;
  minHeight?: number | 'auto';
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

function ItemCardContainer({
  imageUrl,
  category,
  title,
  imageHeight,
  minHeight,
  children,
  className,
}: ItemCardProps) {
  const theme = useTheme<Theme>();

  const childNodes = React.Children.toArray(children);
  const ExtrasChild = childNodes.find(
    (c) => c && (c as SafeAny).type === Extras
  );
  const FooterChild = childNodes.find(
    (c) => c && (c as SafeAny).type === Footer
  );

  return (
    <Box
      background={theme.colors.white}
      boxShadow="0px 0px 4px rgba(0, 0, 0, 0.1)"
      minHeight={minHeight || 360}
      borderBottom="6px solid transparent"
      cursor="pointer"
      className={`ItemCard ${className}`}
    >
      <Image src={imageUrl} width="100%" height={imageHeight} objectFit="cover" />
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
          >
            {category}
          </Tag>
        )}
        {ExtrasChild}
        <Box textAlign="left">
          <Text color={theme.colors.black} fontWeight="bold" fontSize="md">
            {title}
          </Text>
        </Box>
        {FooterChild}
      </Box>
    </Box>
  );
}

const ItemCard: React.ComponentType<ItemCardProps> & {
  Extras: React.FC;
  Footer: React.FC;
} = ItemCardContainer as SafeAny;
ItemCard.Extras = Extras;
ItemCard.Footer = Footer;

export default ItemCard;
