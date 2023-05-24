import { ActionIcon } from '@mantine/core';
import { IconClipboardData } from '@tabler/icons-react';
import { setOpen } from '../../type/tuype';

const DocsWrapper = ({ setOpen, open }: setOpen) => {
  return (
    <div>
      <ActionIcon
        onClick={() => {
          return setOpen(!open);
        }}
      >
        <IconClipboardData size="1.625rem"></IconClipboardData>
      </ActionIcon>
    </div>
  );
};
export default DocsWrapper;
