'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './nav-link.module.css';

export function NavLink({ href, children }) {
  const path = usePathname();

  function getClassName() {
    const classes = [styles.link];

    if (path.startsWith(href)) {
      classes.push(styles.active);
    }

    return classes.join(' ');
  }

  return (
    <Link href={href} className={getClassName()}>
      {children}
    </Link>
  );
}
