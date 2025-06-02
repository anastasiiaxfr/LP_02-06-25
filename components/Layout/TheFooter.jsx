import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import app1 from "@/assets/img/app3.svg";
import app2 from "@/assets/img/app4.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div>
            <Logo type="white" />
            <p className="mt-4">Start spending the smart way</p>
          </div>
          <div>
            <div className="footer_nav">
              <div>
                <p>
                  <b>Product</b>
                </p>
                <nav>
                  <Link href="/">Overview</Link>
                  <Link href="/">Features</Link>
                  <Link href="/">Solutions</Link>
                  <Link href="/">Contact</Link>
                  <Link href="/">Releases</Link>
                </nav>
              </div>
              <div>
                <p>
                  <b>Resources</b>
                </p>
                <nav>
                  <Link href="/">Blog</Link>
                  <Link href="/">Newsletter</Link>
                  <Link href="/">Events</Link>
                  <Link href="/">Help centre</Link>
                  <Link href="/">Support</Link>
                </nav>
              </div>
            </div>
          </div>
          <div>
            <p>Get the app</p>
            <div className="flex sm:flex-col gap-2 mt-4">
              <Link href="/" className="hover:scale-105 transition">
                <Image src={app1} alt="" />
              </Link>
              <Link href="/" className="hover:scale-105 transition">
                <Image src={app2} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_btm">
        <div className="container">
          <hr className="divider" />
          <p>
            <small>&copy; 2025 Kobodrop. All rights reserved.</small>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
