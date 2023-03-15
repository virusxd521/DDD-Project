import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.scss';

// adding links to different pages
export const Navigation : FC  = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li>
          <Image 
            src="/me.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </li>
        <li>
          <Link href="/ssss">Recent Articles</Link>
        </li>
        <li>
          <Link href="/bbb">About</Link>
        </li>
        <li>
          <Link href="/ccccc">Log ins</Link>
        </li>
      </ul>
    </nav>
  );
};