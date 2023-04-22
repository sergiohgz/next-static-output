'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <div>
        <p>
          <Link href="/users">Users &gt;</Link>
        </p>
      </div>
    </>
  );
}
