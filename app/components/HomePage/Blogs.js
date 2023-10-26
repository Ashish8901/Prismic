import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchIcon from "../../../public/search-icon.svg";
import BlogImg1 from "../../../public/blog-1.png";
import BlogImg2 from "../../../public/blog-2.png";
import BlogImg3 from "../../../public/blog-3.png";
const Blogs = () => {
  return (
    <>
      <section className="blog-setion pt-28 pb-28">
        <div className="container">
          <h1 className="big-text font-light mb-12 text-center">Blog</h1>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-heading flex justify-between items-center mb-4">
                <h1 className="text-5xl mb-0 font-light">Latest Posts</h1>
                <div>
                  <form action="" className="search-form flex items-center">
                    <button type="submit" className="search-icon">
                      <Image alt="image" src={SearchIcon} />
                    </button>
                    <input
                      type="search"
                      placeholder="What are you looking for?"
                      id="gsearch"
                      name="gsearch"
                    />
                  </form>
                </div>
              </div>
              <div className="blog-link">
                <ul className="case-study-section flex pl-0 mb-0 gap-3">
                  <li className="nav-tabs">
                    <Link href="" className="nav-link">
                      Wearable
                    </Link>
                  </li>
                  <li className="nav-tabs">
                    <Link href="" className="nav-link">
                      Windows
                    </Link>
                  </li>
                  <li className="nav-tabs">
                    <Link href="" className="nav-link">
                      Saas
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="blog-section mt-4">
                <div id="myDIV">
                  <div className="item">
                    <Link href="">
                      <Image alt="image" src={BlogImg1} />
                      <div className="blog-content mt-4">
                        <h4 className="card-title mb-2 font-light">
                          Tempore harum debitis sit voluptas tempore et qui.
                        </h4>
                        <p className="mb-0 font-light opacity-50">
                          August 13, 2023
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="item">
                    <Link href="">
                      <Image alt="image" src={BlogImg2} />
                      <div className="blog-content mt-4">
                        <h4 className="card-title mb-2 font-light">
                          Perspiciatis et maiores
                        </h4>
                        <p className="mb-0 font-light opacity-50">
                          August 13, 2023
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div className="item">
                    <Link href="">
                      <Image alt="image" src={BlogImg3} />
                      <div className="blog-content mt-4">
                        <h4 className="card-title mb-2 font-light">
                          Dolorem quia expedita
                        </h4>
                        <p className="mb-0 font-light opacity-50">
                          August 13, 2023
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="hero-btn mt-5">
                  <Link
                    className=" w-full font-bold justify-center  btn rounded-full bg-white hover:bg-cyan-100 text-black text-base"
                    href="/"
                  >
                    Load More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
