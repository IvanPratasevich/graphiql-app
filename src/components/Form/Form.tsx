import { useForm } from '@mantine/form';
import { Button, Group, TextInput, Box } from '@mantine/core';
import { useState } from 'react';
import { PasswordIsValidated } from '../Password/Password';
import styles from './Form.module.scss';
import { windowInnerHeight } from '../../utils/window';
import { useTranslation } from 'react-i18next';

interface Form {
  title: string;
  handleClick: (email: string, password: string) => void;
}
export function Form({ title, handleClick }: Form) {
  const { t } = useTranslation();

  const [valuePassword, setValuePassword] = useState('');
  const [validationPassword, setValidationPassword] = useState(true);

  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : t('invalid_email')),
    },
  });

  const wrapperIsValid = () => {
    form.isValid() && handleClick(form.values.email, valuePassword);
  };

  return (
    <div
      className={styles.container__auth}
      style={{ height: windowInnerHeight - 160, paddingTop: '140px' }}
    >
      <Box component="form" w={400} mx="auto">
        <TextInput
          label={t('your_email')}
          placeholder={t('your_email')!}
          withAsterisk
          mt="md"
          {...form.getInputProps('email')}
        />
        <br />
        <PasswordIsValidated
          setValidationPassword={setValidationPassword}
          setValuePassword={setValuePassword}
        />
        <Group position="right" mt="md">
          <Button
            w={200}
            variant="outline"
            color="white"
            size="md"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              wrapperIsValid();
            }}
            disabled={validationPassword}
          >
            {title}
          </Button>
        </Group>
      </Box>
    </div>
  );
}
