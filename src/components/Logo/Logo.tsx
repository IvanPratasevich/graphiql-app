import { Title } from '@mantine/core';
import styles from './Logo.module.scss';
import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';
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

const Logo: FC = () => {
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
    angle: 0,
  };

  firstElectron.angle = -1 * Math.acos((firstElectron.x - firstElectron.cx) / firstElectron.rx);
  secondElectron.angle = -1 * Math.acos((secondElectron.x - secondElectron.cx) / secondElectron.rx);

  const [positions, setPositions] = useState([firstElectron, secondElectron]);

  window.addEventListener('load', () => setPageLoaded(true));

  useEffect(() => {
    if (hovered) {
      const animationDuration = 5; //in seconds
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

  // Parametric equation of an ellipse x^2 / a^2 + y^2 / b^2 = 1
  // --
  // | x = a * cos(phi)   // phi - angle
  // |
  // | y = b * sin(phi)   // phi - angle
  // --

  useEffect(() => {
    const requestIds: number[] = [];
    if (pageLoaded) {
      for (let electronIdx = 0; electronIdx < positions.length; electronIdx += 1) {
        const animate = (): void => {
          const { rx, ry, cx, cy, angle } = positions[electronIdx];
          const x22 = cx + rx * Math.cos(angle);
          const y22 = cy + ry * Math.sin(angle);
          const speed = 0.05; // radian
          const newAngle = angle + speed; // radian
          const x = cx + rx * Math.cos(newAngle); // rx - ellipse horizontal radius
          const y = cy + ry * Math.sin(newAngle); // rx - ellipse vertical radius
          setPositions((prev) =>
            prev.map((electron, idx) =>
              idx === electronIdx ? { ...electron, x, y, angle: newAngle } : electron
            )
          );
        };

        requestIds.push(requestAnimationFrame(animate));
      }
    }
    return () => {
      requestIds.forEach((requestId: number) => cancelAnimationFrame(requestId ? requestId : 0));
    };
  }, [positions, pageLoaded]);

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
        <circle
          fill="url(#electron_first)"
          cx={positions[0].x}
          cy={positions[0].y}
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
          transform="matrix(0.866 -0.5 0.5 0.866 -9.1606 15.8414)"
          fill="url(#electron_second)"
          cx={positions[1].x}
          cy={positions[1].y}
          r={positions[1].radius}
        ></circle>
        <defs>
          <radialGradient id="electron_first" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#d71e49" />
            <stop offset="100%" stopColor="#ffff" />
          </radialGradient>

          <radialGradient id="electron_second" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#42aaff" />
            <stop offset="100%" stopColor="#8b00ff" />
          </radialGradient>
        </defs>
      </svg>
      <Title order={1}>GraphiQL</Title>
    </a>
  );
};

export default Logo;
