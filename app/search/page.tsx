"use client";

import { getSearchItems } from "@/actions/getSearchItems";
import ClientOnly from "@/components/ClientOnly";
import Food from "@/components/Home/Food";
import useSearch from "@/hooks/useSearch";
import { useRouter } from "next/navigation";
import React, { useEffect, useCallback } from "react";

const Search = async () => {
  const router = useRouter();
  const search = useSearch((state) => state.search);

  const back = useCallback(() => {
    router.push("/");
  }, [router]);

  useEffect(() => {
    if (!search) {
      router.push("/");
    }
  }, [search, router]);

  const { data: food } = await getSearchItems(search);

  return (
    <ClientOnly>
      <main className="search">
        <div className="search-text">Showing results for {`"${search}"`}</div>
        {food?.length !== 0 ? (
          <div className="home-foods">
            {food?.map((item) => (
              <Food key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="search-empty">
            <span>No result found</span>

            <button onClick={back}>Back to homepage</button>
          </div>
        )}
      </main>
    </ClientOnly>
  );
};

export default Search;
