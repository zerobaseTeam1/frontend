'use client';

import { Button } from '@chakra-ui/react';
import InfoIcon from '@/components/svg/info';

export default function InfoButton({ onClick }) {
  return (
    <Button
      variant="outline"
      fontSize="var(--font-size-md)"
      fontWeight="var(--font-regular)"
      leftIcon={<InfoIcon width={20} height={20} />}
      aria-label="Info"
      color="black"
      borderColor="var(--gray300)"
      _hover={{
        bg: 'var(--gray100)',
        color: 'black',
      }}
      _active={{
        bg: 'var(--gray100)',
        color: 'black',
      }}
      sx={{
        padding: 'var(--spacing-xs) var(--spacing-lg) var(--spacing-xs) var(--spacing-md)',
        borderWidth: '1.3px',
      }}
      onClick={onClick}
    >
      정보
    </Button>
  );
}
