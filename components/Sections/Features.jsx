import Image from "next/image";
import i1 from "@/assets/img/icon/i1.svg";
import i2 from "@/assets/img/icon/i2.svg";
import img1 from "@/assets/img/img2.png";
import img2 from "@/assets/img/img3.png";

function Features() {
  return (
    <section className="section section_features">
      <div className="container">
        <div className="hgroup">
          <h2>Make every penny count</h2>
          <p className="subtitle">
            Spend smarter, lower your bills, get cashback on everything you buy,
            and unlock credit to grow your business.
          </p>
        </div>

        <div className="cards">
          <div className="card">
            <div>
              <h3>Pay with Kobodrop, quick, simple and easy</h3>
              <p>
                Paying your bills on Kobdrop has never been easier. Whether you
                are paying for electricity or internet, Kobodrop gets it done
                within seconds.
              </p>
            </div>
            <Image src={img1} alt="" className="-mb-10 mt-auto mx-auto" />
          </div>
          <div className="card">
            <Image src={i1} alt="" className="mb-4" />

            <div>
              <h3>Bank level security</h3>
              <p>
                Your money is 100% safe and secure on Kobodrop. No hassles, no
                glitches, get access to your money anytime.
              </p>
            </div>
          </div>
          <div className="card">
            <Image src={i2} alt="" className="mb-4 items-end" />
            <div>
              <h3>Cost reduction</h3>
              <p>
                Kobodrop reduced payments maintenance and processing fees. No
                hidden fees
              </p>
            </div>
          </div>
          <div className="card">
            <div>
              <h3>Send, recieve and Exchange money</h3>
              <p>
                Transfers, payments all work on Kobodrop. Get your alert message
                immediately after a completed transaction.
              </p>
            </div>
            <Image src={img2} alt="" className="-mb-10 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
