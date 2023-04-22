"use client";

import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import Link from "next/link";

const UsersPage = ({params}: any) => {
  const { id } = params;

  const { data: response } = useSWR("/users/" + id, fetcher);

  return (
    <main>
      <h1>
        {response?.data.first_name} {response?.data.last_name}
      </h1>
      <div>
        <p>email: {response?.data.email}</p>
      </div>
      <p>
        <Link href="/users">&lt; back to list</Link>
      </p>
    </main>
  );
};

export default UsersPage;
