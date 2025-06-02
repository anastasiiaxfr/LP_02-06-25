import Image from "next/image";
import Link from "next/link";
import app1 from "@/assets/img/app1.svg";
import app2 from "@/assets/img/app2.svg";
import img1 from "@/assets/img/img0.png";
import img2 from "@/assets/img/img1.png";

function Hero() {
  return (
    <section className="section section_hero">
      <div className="container">
        <div>
          <h1>Start spending the smart way</h1>
          <p className="subtitle">
            Take Control of Your Finances Anytime, Anywhere with Kobodrop.
            Discover the Smart Way to Use Your Money!
          </p>

          <div className="apps">
            <Link href="/">
              <Image src={app1} alt="" />
            </Link>
            <Link href="/">
              <Image src={app2} alt="" />
            </Link>
          </div>
        </div>
        <div>
          <div className="hero_imgs">
            <Image
              src={img1}
              alt=""
              className="hidden sm:block ml-auto w-[90%]"
            />
            <Image
              src={img2}
              alt=""
              className="mx-auto sm:mx-0 mt-auto sm:mr-auto w-[45%] lg:-translate-x-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
