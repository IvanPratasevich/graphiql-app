import { Loader } from '@mantine/core';
import styles from './LoaderWrapper.module.scss';
import { windowInnerHeight } from '../../utils/window';
export function LoaderWrapper() {
  return (
    <div
      className={styles.loader}
      style={{ height: windowInnerHeight - 160, paddingTop: windowInnerHeight / 2 - 215 }}
    >
      <Loader color="cyan" size="xl" variant="bars" />
    </div>
  );
}
