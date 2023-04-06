import { useEffect, useState } from "react";

const ProductList = ({ effectHookDemo }: { effectHookDemo: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log(
      "The Selected Singer is",
      effectHookDemo === "" ? "NotDefined" : effectHookDemo
    );
    setProducts([...products, effectHookDemo]);
  }, [effectHookDemo]);
  return <></>;
};

export default ProductList;
