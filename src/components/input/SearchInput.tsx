import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchIcon } from "@primer/octicons-react";
import { SearchInputStyles, InputContainer } from "./InputSearch.styles";

export const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryLetter = searchParams.get("q") || "";
  const handleChangeParams = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ q: target.value });
  };

  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchInput.current !== null) {
      searchInput.current.focus();
    }
  }, []);
  return (
    <InputContainer>
      <SearchIcon className="search-icon" size={16} />
      <SearchInputStyles
        type="text"
        placeholder="Busca per activitat"
        className="text-white p-1 w-[60%] text-center placeholder-[#5d910f] font-bold rounded-md md:text-lg focus:bg-white-600 focus:text-black focus:outline-none"
        value={queryLetter}
        onChange={handleChangeParams}
        ref={searchInput}
      />
    </InputContainer>
  );
};
