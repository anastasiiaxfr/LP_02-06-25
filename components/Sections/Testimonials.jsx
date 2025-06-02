"use client";

import Image from "next/image";
import Link from "next/link";
import app1 from "@/assets/img/app1.svg";
import app2 from "@/assets/img/app2.svg";
import img1 from "@/assets/img/comments/c1.jpg";
import RatingStars from "../ui/rating-client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function Testimonials() {
  return (
    <section className="section section_testimonials">
      <div className="container">
        <div>
          <h2>Join other thousands of people growing with Kobodrop</h2>
          <div className="apps">
            <Link href="/">
              <Image src={app1} alt="" />
            </Link>
            <Link href="/">
              <Image src={app2} alt="" />
            </Link>
          </div>
          <div></div>
        </div>

        <div>
          <Swiper
            modules={[EffectFade, Autoplay, Pagination, A11y]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            spaceBetween={8}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => null}
            onSlideChange={() => null}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            <SwiperSlide>
              <article className="comment">
                <Image src={img1} alt="" className="comment_img" />
                <div className="comment_body">
                  <cite>
                    “Kobodrop has helped me send and receive money with little
                    to no complications. It’s what everyone needs!!.”
                  </cite>
                  <div className="comment_info">
                    <div>
                      <p className="comment_title">
                        <b>Kemi Ogunnaike</b>
                      </p>
                      <p>Nigeria</p>
                    </div>
                    <RatingStars />
                  </div>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="comment">
                <Image src={img1} alt="" className="comment_img" />
                <div className="comment_body">
                  <cite>
                    “Kobodrop has helped me send and receive money with little
                    to no complications. It’s what everyone needs!!.”
                  </cite>
                  <div className="comment_info">
                    <div>
                      <p className="comment_title">
                        <b>Lisa Simpson</b>
                      </p>
                      <p>Nigeria</p>
                    </div>
                    <RatingStars />
                  </div>
                </div>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
