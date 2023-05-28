import { Title } from '@mantine/core';
import styles from './Logo.module.scss';
import { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useHover } from '@mantine/hooks';

interface IPosition {
  x: number;
  y: number;
  radius: number;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  angle: number;
}

const Logo = (props: { location: string }) => {
  const { location } = props;
  const { hovered, ref } = useHover();
  const intervalRef = useRef<number | NodeJS.Timer>(0);
  const [degree, setDegree] = useState(0);
  const [pageLoaded, setPageLoaded] = useState(false);

  const firstElectron: IPosition = {
    x: 37.5,
    y: 17.843,
    radius: 2.5,
    cx: 24.97,
    cy: 24.986,
    rx: 22.534,
    ry: 8.593,
    angle: 0,
  };

  const secondElectron: IPosition = {
    x: 29.758,
    y: 6.28,
    radius: 2.5,
    cx: 24.98,
    cy: 25.014,
    rx: 8.593,
    ry: 22.534,
    angle: 100,
  };

  const thirdElectron: IPosition = {
    x: 3.0159,
    y: 24.92,
    radius: 2.5,
    cx: 25,
    cy: 24.593,
    rx: 22,
    ry: 8.593,
    angle: 0,
  };

  firstElectron.angle = -1 * Math.acos((firstElectron.x - firstElectron.cx) / firstElectron.rx);
  secondElectron.angle = -1 * Math.acos((secondElectron.x - secondElectron.cx) / secondElectron.rx);
  thirdElectron.angle = -1 * Math.acos((thirdElectron.x - thirdElectron.cx) / thirdElectron.rx);

  const [positions, setPositions] = useState([firstElectron, secondElectron, thirdElectron]);

  useEffect(() => {
    window.addEventListener('load', () => setPageLoaded(true));
    return () => window.removeEventListener('load', () => setPageLoaded(true));
  }, []);

  useEffect(() => {
    if (hovered) {
      const tempInterval = requestAnimationFrame(() => {
        setDegree((prevDegree) => {
          const nextDegree = prevDegree + 1;
          return nextDegree === 360 ? 0 : nextDegree;
        });
      });
      intervalRef.current = tempInterval;
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [hovered, degree]);

  const animate = useCallback((electronIdx: number) => {
    setPositions((prev) =>
      prev.map((electron, idx) => {
        const { rx, ry, cx, cy, angle } = electron;
        const speed = 0.03;
        const newAngle = angle + speed;
        const x = cx + rx * Math.cos(newAngle);
        const y = cy + ry * Math.sin(newAngle);
        return idx === electronIdx ? { ...electron, x, y, angle: newAngle } : electron;
      })
    );
  }, []);

  useEffect(() => {
    const requestIds: number[] = [];
    if (hovered) {
      for (let electronIdx = 0; electronIdx < positions.length; electronIdx += 1) {
        const animateFn = () => animate(electronIdx);
        const requestId = requestAnimationFrame(animateFn);
        requestIds.push(requestId);
      }
    }
    return () => {
      requestIds.forEach((requestId: number) => cancelAnimationFrame(requestId ? requestId : 0));
    };
  }, [hovered, positions, pageLoaded, animate]);

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
        width="90px"
        height="90px"
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

        <ellipse
          cx="25"
          cy="24.593"
          rx="22"
          ry="8.593"
          style={{ fill: 'none', stroke: '#ffee08', strokeWidth: '2.019' }}
        />

        <circle
          fill={location === 'header' ? 'url(#electron_first)' : 'url(#electron_first_footer)'}
          style={{
            transform: `translate(${positions[0].x}px, ${positions[0].y}px)`,
          }}
          r={positions[0].radius}
        ></circle>

        <circle
          fill={location === 'header' ? 'url(#electron_third)' : 'url(#electron_third_footer)'}
          style={{
            transform: `matrix(0.5, -0.866, 0.866, 0.5, -9.153, 34.1177) translate(${positions[2].x}px, ${positions[2].y}px)`,
          }}
          r={positions[0].radius}
        ></circle>

        <ellipse
          transform="matrix(0.866 -0.5 0.5 0.866 -9.1606 15.8414)"
          style={{
            fill: 'none',
            stroke: '#ffee08',
            strokeWidth: 2,
          }}
          cx="24.98"
          cy="25.014"
          rx="8.593"
          ry="22.534"
        />
        <circle
          fill={location === 'header' ? 'url(#electron_second)' : 'url(#electron_second_footer)'}
          style={{
            transform: `matrix(0.866, -0.5, 0.5, 0.866, -9.1606, 15.8414) translate(${positions[1].x}px, ${positions[1].y}px)`,
          }}
          r={positions[1].radius}
        ></circle>

        <defs>
          {location === 'header' ? (
            <>
              <radialGradient id="electron_first" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#d71e49" />
                <stop offset="100%" stopColor="#ffff" />
              </radialGradient>

              <radialGradient id="electron_second" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#42aaff" />
                <stop offset="100%" stopColor="#8b00ff" />
              </radialGradient>

              <radialGradient id="electron_third" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#00ffff" />
                <stop offset="100%" stopColor="#ffffff" />
              </radialGradient>
            </>
          ) : (
            <>
              <radialGradient
                id="electron_first_footer"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" stopColor="#ff4d00" />
                <stop offset="100%" stopColor="#ffb200" />
              </radialGradient>

              <radialGradient
                id="electron_second_footer"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" stopColor="#00cc00" />
                <stop offset="100%" stopColor="#00ff99" />
              </radialGradient>

              <radialGradient
                id="electron_third_footer"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" stopColor="#ffff" />
                <stop offset="100%" stopColor="#dc143c" />
              </radialGradient>
            </>
          )}
        </defs>
      </svg>
      <Title order={1}>GraphiQL</Title>
    </a>
  );
};

export default Logo;
