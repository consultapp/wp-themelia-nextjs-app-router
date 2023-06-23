"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Search from "@/components/Plugins/Search";
import { usePathname, useRouter } from "next/navigation";
import { LOADING_STATUS } from "@/constants";
import { clearStringForParams, searchByText } from "@/utils/functions";
import SearchPlugin from "@/components/Plugins/Search";

const initialState = {
  loadingStatus: LOADING_STATUS.idle,
  data: [],
};

export default function SearchContainer() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(initialState);
  const [cache, setCache] = useState(new Map());
  const pathname = usePathname();
  const timer = useRef();

  const handleSearchChange = useCallback((event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }, []);

  useEffect(() => {
    const searchText = clearStringForParams(search);

    if (timer) {
      clearTimeout(timer.current);
    }

    if (searchText.length < 1) {
      setResult(initialState);
      return;
    }

    if (cache.get(searchText)) {
      setResult({
        loadingStatus: LOADING_STATUS.fulfilled,
        data: cache.get(searchText),
      });

      return;
    }

    setResult({ ...initialState, loadingStatus: LOADING_STATUS.pending });

    timer.current = setTimeout(() => {
      searchByText(searchText)
        .then((data) => {
          setResult({ data, loadingStatus: LOADING_STATUS.fulfilled });
          setCache(cache.set(searchText, data));
        })
        .catch(() => {
          setResult({
            ...initialState,
            loadingStatus: LOADING_STATUS.rejected,
          });
        });
    }, 400);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    setResult(initialState);
    setSearch("");
  }, [pathname]);

  return (
    <SearchPlugin
      handleSearchChange={handleSearchChange}
      search={search}
      result={result}
    />
  );
}
