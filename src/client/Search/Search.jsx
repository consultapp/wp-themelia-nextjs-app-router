"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Search from "@/components/Plugins/Search";
import { usePathname, useRouter } from "next/navigation";
import { LOADING_STATUS } from "@/constants";
import { searchByText } from "@/utils/functions";

const initialState = { loadingStatus: LOADING_STATUS.idle, data: [] };

export default function SearchContainer() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(initialState);
  const pathname = usePathname();
  const timer = useRef();

  const handleSearchChange = useCallback((event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }, []);

  useEffect(() => {
    if (search.length < 1) {
      if (timer) clearTimeout(timer.current);
      setResult(initialState);
      return;
    }

    if (timer) clearTimeout(timer.current);
    setResult({ ...initialState, loadingStatus: LOADING_STATUS.pending });

    timer.current = setTimeout(() => {
      searchByText(search)
        .then((data) => {
          setResult({ data, loadingStatus: LOADING_STATUS.fulfilled });
        })
        .catch(() => {
          setResult({
            ...initialState,
            loadingStatus: LOADING_STATUS.rejected,
          });
        });
    }, 300);
  }, [search]);

  useEffect(() => {
    setResult(initialState);
    setSearch("");
  }, [pathname]);

  return (
    <Search
      handleSearchChange={handleSearchChange}
      search={search}
      result={result}
    />
  );
}
