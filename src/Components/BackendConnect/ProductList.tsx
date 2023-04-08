// in this file, basically we're trying to get an understanding of how the UseEffect works by only implementing it when we need it, i.e, only when the render is complete

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
