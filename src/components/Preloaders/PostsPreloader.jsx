"use client";

import { useRef } from "react";
import { store } from "@/store";

function PostsPreloader({ posts }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    // store.dispatch(setStartupPokemon(pokemons));
    loaded.current = true;
  }

  return null;
}

export default PostsPreloader;
