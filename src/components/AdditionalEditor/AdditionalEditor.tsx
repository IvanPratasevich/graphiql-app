import { Button } from '@mantine/core';
import style from './additionalEditor.module.scss';
import { useTranslation } from 'react-i18next';

export const AdditionalEditor = () => {
  const { t } = useTranslation();
  return (
    <div className={style.wrapperVariables}>
      <div className={style.wrapperButtons}>
        <Button variant="subtle" color="gray" size="xs">
          {t('variables')}
        </Button>
        <Button variant="subtle" color="gray" size="xs">
          {t('headers')}
        </Button>
      </div>
      <div className={style.variables}></div>
    </div>
  );
};
