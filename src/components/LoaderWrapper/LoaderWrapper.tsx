import { Loader } from '@mantine/core';
import styles from './LoaderWrapper.module.scss';
export function LoaderWrapper() {
  return (
    <div className={styles.loader}>
      <Loader color="cyan" size="xl" variant="bars" />
    </div>
  );
}
