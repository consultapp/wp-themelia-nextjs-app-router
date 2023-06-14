import Pagination from "../../components/Pagination/Pagination";

export default function PaginationContainer() {
  // const { pageIndex = 1 } = useParams();
  const pageIndex = 1;

  return <Pagination postsCount={postsCount} pageIndex={Number(pageIndex)} />;
}
