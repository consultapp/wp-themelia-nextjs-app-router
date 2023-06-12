import { store } from "@/store";
import Providers from "@/components/Provider/Provider";
import PostsPreloader from "../components/Preloaders/PostsPreloader";
import PostsContainer from "@/containers/Posts/Posts";
import MainLayout from "@/layouts/MainLayout";

export default async function Home() {
  // const req = await fetch("http://localhost:3000/api/search");
  // const data = await req.json();
  // store.dispatch(setStartupPokemon(data));
  const posts = {};

  return (
    <main>
      <PostsPreloader posts={posts} />
      <Providers>
        <MainLayout>
          <PostsContainer />
        </MainLayout>
      </Providers>
    </main>
  );
}
