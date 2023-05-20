import { Title } from '@mantine/core';
import styles from './Logo.module.scss';
import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';
import { useHover } from '@mantine/hooks';

const Logo: FC = () => {
  const { hovered, ref } = useHover();
  const intervalRef = useRef<number | NodeJS.Timer>(0);
  const [degree, setDegree] = useState(0);
  const animationDuration = 5; //in seconds

  useEffect(() => {
    if (hovered) {
      const tempInterval = setInterval(() => {
        setDegree((prevDegree) => {
          const nextDegree = prevDegree + 1;
          return nextDegree === 360 ? 0 : nextDegree;
        });
      }, (animationDuration * 1000) / 360);
      intervalRef.current = tempInterval;
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [hovered, degree]);

  return (
    <a
      ref={ref as unknown as MutableRefObject<HTMLAnchorElement>}
      className={`hidden ${styles.logo}`}
      href="/welcome"
      target="blank"
    >
      <svg
        style={{ transform: `rotate(${degree}deg)` }}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 50 50"
        width="50px"
        height="50px"
        className={styles.svgLogo}
      >
        <circle style={{ fillRule: 'evenodd', clipRule: 'evenodd' }} cx={25} cy={25} r={4} />
        <circle
          style={{
            fill: 'none',
            stroke: '#ffee08',
            strokeWidth: 2,
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
          }}
          cx={25}
          cy={25}
          r={4}
        />
        <ellipse
          transform="matrix(0.5 -0.866 0.866 0.5 -9.153 34.1177)"
          style={{ fill: 'none', stroke: '#ffee08', strokeWidth: '2.0431' }}
          cx="24.97"
          cy="24.986"
          rx="22.534"
          ry="8.593"
        />
        <path
          style={{ fill: 'none', stroke: '#ffee08', strokeWidth: '2.019' }}
          d="M47,24.593c0,4.743-9.858,8.593-22,8.593c-12.142,0-22-3.85-22-8.593C3,19.85,12.858,16,25,16C37.142,16,47,19.85,47,24.593z"
        />
        <ellipse
          transform="matrix(0.866 -0.5 0.5 0.866 -9.1606 15.8414)"
          style={{ fill: 'none', stroke: '#ffee08', strokeWidth: 2 }}
          cx="24.98"
          cy="25.014"
          rx="8.593"
          ry="22.534"
        />
      </svg>
      <Title order={1}>GraphiQL</Title>
    </a>
  );
};

export default Logo;
