import ProductCart from "../common/ProductCart";

import { url } from "../../../untils/variable";
import useCallAPINoPagination from "../../../hooks/useCallAPINoPagination";

const Section = () => {
  const { data, isLoading } = useCallAPINoPagination(url);
  console.log(data);

  // check sanpham co ton tai hay khong
  // if (data.length == 0) return <h1>khong co du lieu</h1>;
  //  check api call xong chuwa
  if (isLoading === true) return <p>loading...</p>;
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.map((product) => {
            return (
              <div key={product.id} className="col mb-5">
                <ProductCart product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section;
// dependencies :
// -> khong co gia tri
