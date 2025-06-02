import Image from "next/image";

import b1 from "@/assets/img/brands/b1.png";
import b2 from "@/assets/img/brands/b2.png";
import b3 from "@/assets/img/brands/b3.png";
import b4 from "@/assets/img/brands/b4.png";
import b5 from "@/assets/img/brands/b5.png";
import b6 from "@/assets/img/brands/b6.png";
import b7 from "@/assets/img/brands/b7.png";
import b8 from "@/assets/img/brands/b8.png";
import b9 from "@/assets/img/brands/b9.png";
import b10 from "@/assets/img/brands/b10.png";
import b11 from "@/assets/img/brands/b11.png";
import b12 from "@/assets/img/brands/b12.png";

const brands = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12];

function Brands() {
  return (
    <section className="section section_brands">
      <div className="container">
        <div className="hgroup">
          <h2>Transact seamlessly with...</h2>
          <p className="subtitle">
            Connect your other accounts to Kobodrop seamlessly. Kobodrop
            supports 200+ integrations with other payment platforms like stripe,
            paypal, payoneer and others
          </p>
        </div>

        <div className="brands">
          {brands.map((i, ind) => (
            <Image key={ind} src={i} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
