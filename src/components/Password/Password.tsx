import { useEffect, useState } from 'react';
import { IconX, IconCheck } from '@tabler/icons-react';
import { PasswordInput, Progress, Text, Popover, Box } from '@mantine/core';
import { propsPassword } from '../../type/tuype';
import { useTranslation } from 'react-i18next';

interface IRequirements {
  re: RegExp;
  label: string;
}

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      color={meets ? 'teal' : 'red'}
      sx={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size="0.9rem" /> : <IconX size="0.9rem" />} <Box ml={10}>{label}</Box>
    </Text>
  );
}

function getStrength(password: string, requirements: IRequirements[]) {
  let multiplier = password.length > 8 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

export function PasswordIsValidated({ setValidationPassword, setValuePassword }: propsPassword) {
  const { t } = useTranslation();

  const requirements = [
    { re: /[0-9]/, label: t('includes_number') },
    { re: /[a-z]/, label: t('includes_lowercase_letter') },
    { re: /[A-Z]/, label: t('includes_uppercase_letter') },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: t('includes_special_symbol') },
  ];

  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState('');
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value, requirements);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  useEffect(() => {
    setValuePassword(value);
    setValidationPassword(!(strength === 100));
  }, [value]);

  return (
    <Box maw={400} mx="auto">
      <Popover
        opened={popoverOpened}
        position="bottom"
        width="target"
        transitionProps={{ transition: 'pop' }}
      >
        <Popover.Target>
          <div
            onFocusCapture={() => setPopoverOpened(true)}
            onBlurCapture={() => setPopoverOpened(false)}
          >
            <PasswordInput
              withAsterisk
              label={t('your_password')}
              placeholder={t('your_password')!}
              value={value}
              onChange={(event) => {
                setValue(event.currentTarget.value);
              }}
            />
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <Progress color={color} value={strength} size={5} mb="xs" />
          <PasswordRequirement
            label={t('includes_at_least_8_characters')}
            meets={value.length > 8}
          />
          {checks}
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
}
