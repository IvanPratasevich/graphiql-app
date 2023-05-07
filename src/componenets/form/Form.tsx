import { useForm } from '@mantine/form';
import { Button, Group, TextInput, Box } from '@mantine/core';
import { useSetState } from '@mantine/hooks';
import { useState } from 'react';
import { PasswordIsValidated } from '../Password/Password';

interface Form {
  title: string;
  handleClick: (email: string, password: string) => void;
}
export function Form({ title, handleClick }: Form) {
  const [state, setState] = useSetState({});

  const [valuePassword, setValuePassword] = useState('');
  const [validationPassword, setValidationPassword] = useState(true);

  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const wrappeIsValid = () => {
    // form.isValid();
    form.isValid() && handleClick(form.values.email, valuePassword);
  };

  return (
    <Box
      component="form"
      maw={400}
      mx="auto"
      onSubmit={form.onSubmit(() => {
        setState(form.values);
      })}
    >
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        {...form.getInputProps('email')}
      />
      <PasswordIsValidated
        setValidationPassword={setValidationPassword}
        setValuePassword={setValuePassword}
      />
      <Group position="right" mt="md">
        <Button type="submit" onClick={() => wrappeIsValid()} disabled={validationPassword}>
          {title}
        </Button>
      </Group>
    </Box>
  );
}
