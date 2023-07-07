import React from "react";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";
import useSearch from "@/hooks/useSearch";

const SearchInput = () => {
  const router = useRouter();
  const setSearchQuery = useSearch((state) => state.setSearch);
  const search = useSearch((state) => state.search);

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/search");
  };

  return (
    <div className="nav-search">
      <form onSubmit={onSubmit}>
        <input
          required
          type="text"
          value={search}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button>
          <BiSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
