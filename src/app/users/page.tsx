"use client";

import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import Link from "next/link";

const UsersPage = () => {
  const { data: response } = useSWR("/users", fetcher);

  return (
    <main>
      <h1>Users</h1>
      <ul>
        {response?.data.map((item: any) => (
          <li key={item.id}>
            <Link href={"/users/" + item.id}>{item.first_name} &gt;</Link>
          </li>
        ))}
      </ul>
      <div>
        <p>
          <Link href="/">&lt; back to home</Link>
        </p>
      </div>
    </main>
  );
};

export default UsersPage;
