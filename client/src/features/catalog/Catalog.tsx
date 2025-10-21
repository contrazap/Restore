import ProductList from "./ProductList";
import { useFetchProductsQuery } from "./catalogApi";

export default function Catalog() {
  const { data, isLoading } = useFetchProductsQuery();

  if (isLoading || data === undefined) return <div>Loading...</div>;

  return <ProductList products={data} />;
}
