"use client";

import React, { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

interface MenuProps {
  text: string;
}

const Menu = ({ text }: MenuProps) => {
  const router = useRouter();
  const params = useSearchParams();
  const category = params?.get("category");
  const filter = text === "all" ? null : text;

  const isCategory = category === filter;

  const handleClick = useCallback(() => {
    let currentQuery = {};
    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: text,
    };

    if (text === "all" || category === text) {
      delete updatedQuery.category;
    }

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [text, router, params, category]);

  return (
    <div
      className={`menu ${isCategory ? "menu-selected" : ""}`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default Menu;
