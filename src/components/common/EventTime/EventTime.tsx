import { Box, Icon, Theme, useTheme } from '@chakra-ui/react';
import { RiCalendarEventFill } from 'react-icons/ri';
import useTranslation from 'next-translate/useTranslation';
import { FaClock } from 'react-icons/fa';

interface EventTimeProps {
  date: string;
  eventTime: string;
}

const EventTime = ({ date = '', eventTime = '' }: EventTimeProps) => {
  const { t } = useTranslation('common');
  const theme = useTheme<Theme>();
  return (
    <Box mb={4} d="flex" alignItems="baseline">
      <Box
        d="flex"
        alignItems="center"
        color={theme.colors.purple}
        fontWeight="bold"
        letterSpacing="wide"
        fontSize="md"
      >
        <Icon as={RiCalendarEventFill} fontSize={22} mr={2} />
        {date}
      </Box>
      <Box
        d="flex"
        alignItems="center"
        color={theme.colors.purple}
        fontWeight="bold"
        letterSpacing="wide"
        fontSize="md"
        ml={4}
      >
        <Icon as={FaClock} fontSize={22} mr={2} />
        {eventTime || t('anytime')}
      </Box>
    </Box>
  );
};

export default EventTime;
