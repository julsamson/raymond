"use client"

import Image from 'next/image'
import Navigation from './components/naviagtion'
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { aboutData } from './data';
import { SpecialtiesData } from './data';
import Dancers from './collaboration';

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  return (
    <main>
      <Navigation />
      <div className="ftco-section-reservation">
        <div className="container">
          <div className="row">
            <div className="col-md-12 reservation pt-5 px-5">
              <div className="block-17">
                <form action="/submit" method="post" className="d-block d-lg-flex">
                  <div className="fields d-block d-lg-flex">
                    <div className="textfield-name one-third">
                      <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="textfield-phone one-third">
                      <input type="text" className="form-control" placeholder="Phone" />
                    </div>
                    <div className="book-date one-third">
                      <input type="text" id="book_date" className="form-control" placeholder="M/D/YYYY" />
                    </div>
                    <div className="book-time one-third">
                      <input type="text" id="book_time" className="form-control" placeholder="Time" />
                    </div>
                    <div className="select-wrap one-third">
                      <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                      <select name='' id='' className="form-control">
                        <option value>Person</option>
                        <option value>1</option>
                        <option value>2</option>
                        <option value>3</option>
                        <option value>4+</option>
                      </select>
                    </div>
                  </div>
                  <input type="submit" className="search-submit btn btn-primary" value="Book a class" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Raymond */}

      <section className="ftco-section-2">
        <div className="container d-flex">
          <div className="section-2-blocks-wrapper row">
            <div className="img col-sm-12 col-lg-6" style={{ backgroundImage: "url('images/ray.jpeg')" }}>
            </div>
            <div className="text col-lg-6 " data-aos="fade-up-right">
              <div className="text-inner align-self-start">
                <span className="subheading">{aboutData.title}</span>
                <h3 className="heading">{aboutData.subTitle}</h3>
                <p>{aboutData.description}</p>
                <p>{aboutData.subdescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories part */}

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section " data-aos="fade-up-right">
              <span className="subheading">Categories</span>
              <h2>Our Dance Classes Categories</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 dish-menu">
              <div className="nav nav-pills justify-content-center " data-aos="fade-up-right" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link py-3 px-4 active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><span className=""></span> Biginner</a>
                <a className="nav-link py-3 px-4" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><span className=""></span> Intermidiate</a>
                <a className="nav-link py-3 px-4" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><span className=""></span> Pro</a>
              </div>
              <div className="tab-content py-5" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/rumba.jpg)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>Rumba</h3>
                            <p>Group dance lessons</p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/tango.jpg)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>Tango</h3>
                            <p><span>Group dance lessons</span></p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/swing.png)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>Swing</h3>
                            <p>Group dance lessons</p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/salsa.png)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>Salsa</h3>
                            <p><span>Group dance lessons</span></p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/afro.jpg)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>Afro dance</h3>
                            <p><span>Group dance lessons</span></p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/chore.jpeg)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>Dance choreography</h3>
                            <p>Group dance lessons</p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/chore.jpeg)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>Dance choreography</h3>
                            <p>Group dance lessons</p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/afro.jpg)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>Afro dance</h3>
                            <p>Group dance lessons</p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/afro.jpg)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>Trending</h3>
                            <p>Group Dance lessons</p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>


                    </div>
                    <div className="col-lg-6">
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/stage.png)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>Hip Hop</h3>
                            <p>Single Dance lessons</p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/salsa.png)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>Salsa</h3>
                            <p>Group Dance lessons</p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/partie.jpg)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>House Dance</h3>
                            <p>Group dance lessons</p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/stage.png)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>Hip Hop</h3>
                            <p>Single | Group dance lessons</p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/stage.png)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>Break dancing</h3>
                            <p>Single dance lessons</p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/afro.jpg)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>Wacking</h3>
                            <p>Single dance lessons</p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>


                    </div>
                    <div className="col-lg-6">
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/partie.jpg)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>House Dance</h3>
                            <p>Group dance lessons</p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/stage.png)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>Vogue</h3>
                            <p>Group dance lessons</p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>
                      <div className="menus d-flex " data-aos="fade-up-right">
                        <div className="menu-img" style={{ backgroundImage: "url(images/afro.jpg)" }}></div>
                        <div className="text d-flex">
                          <div className="one-half">
                            <h3>Trending</h3>
                            <p>Group dance lessons</p>
                          </div>
                          <div className="one-forth">
                            <span className="price">$10</span>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* my specialties */}

      <section className="ftco-section parallax-img" style={{ backgroundImage: "url('images/bg_1.jpeg')" }} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 text-center heading-section heading-section-white " data-aos="fade-up-right">
              <h2>{SpecialtiesData.title}</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section bg-light">
        <div className="container special-dish">
          <div className="row d-flex no-gutters">
            <div className="col-lg-6">
              <div className="block-3 d-md-flex " data-aos="fade-up-right">
                <div className="image order-last" style={{ backgroundImage: "url(images/private.jpeg)" }}></div>
                <div className="text text-center order-first">
                  <h2 className="heading">{SpecialtiesData.privateLesson[0].title}</h2>
                  <p>{SpecialtiesData.privateLesson[0].description}</p>
                  <span className="price">{SpecialtiesData.privateLesson[0].price}</span>
                </div>
              </div>
              <div className="block-3 d-md-flex " data-aos="fade-up-right">
                <div className="image order-first" style={{ backgroundImage: "url(images/wedding.png)" }}></div>
                <div className="text text-center order-first">
                  <h2 className="heading">{SpecialtiesData.WeddingLesson[0].title}</h2>
                  <p>{SpecialtiesData.WeddingLesson[0].description}</p>
                  <span className="price">{SpecialtiesData.WeddingLesson[0].price}</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="block-3 d-md-flex " data-aos="fade-up-right">
                <div className="image order-last" style={{ backgroundImage: "url(images/partie.jpg)" }}></div>
                <div className="text text-center order-first">
                  <h2 className="heading">{SpecialtiesData.danceLesson[0].title}</h2>
                  <p>{SpecialtiesData.danceLesson[0].description}</p>
                  <span className="price">{SpecialtiesData.danceLesson[0].price}</span>
                </div>
              </div>
              <div className="block-3 d-md-flex " data-aos="fade-up-right">
                <div className="image order-first" style={{ backgroundImage: "url(images/chore.jpeg)" }}></div>
                <div className="text text-center order-first">
                  <h2 className="heading">{SpecialtiesData.musicLesson[0].title}</h2>
                  <p>{SpecialtiesData.musicLesson[0].description}</p>
                  <span className="price">{SpecialtiesData.musicLesson[0].price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* People working with(collaboration) */}

      {/* <section className="ftco-section testimony-section">
        <div className="container">
          <div className="row justify-content-center mb-1 pb-5">
            <div className="col-md-7 text-center heading-section " data-aos="fade-up-right">
              <span className="subheading">Colaborations</span>
              <h2>People I have worked with</h2>
            </div>
          </div>
          <div className="row w-full" data-aos="fade-up-right">
            <div className="carousel ftco-owl md:flex items-center justify-center overflow-x-hidden space-x-4">


              <div className="item text-center">
                <div className="testimony-wrap p-4 pb-5">
                  <div className="user-img mb-4" style={{ backgroundImage: "url(images/angle.jpeg)", border: "1px solid red" }}></div>
                  <div className="text">

                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus numquam eos, eveniet earum quod quidem, quae, quasi libero harum corporis reiciendis minus ipsam doloremque consequuntur facere ratione! Amet, repellendus recusandae?</p>
                    <p className="name">Angel Nyigu</p>
                    <span className="position">Dancer</span>
                  </div>
                </div>
              </div>
              <div className="item text-center">
                <div className="testimony-wrap p-4 pb-5">
                  <div className="user-img mb-4" style={{ backgroundImage: "url(images/yoofi.jpeg)", border: "1px solid red" }}></div>
                  <div className="text">

                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum quae facilis quam est maxime necessitatibus distinctio dolorum dicta impedit pariatur cum praesentium enim culpa nemo, unde atque recusandae! Obcaecati.</p>
                    <p className="name">Yoofi</p>
                    <span className="position">Dancer</span>
                  </div>
                </div>
              </div>
              <div className="item text-center">
                <div className="testimony-wrap p-4 pb-5">
                  <div className="user-img mb-4" style={{ backgroundImage: "url(images/angle.jpeg)", border: "1px solid red" }}></div>
                  <div className="text">

                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur porro ratione aperiam illum maxime facere aliquid, exercitationem labore totam, possimus quam beatae ex voluptate magni, officiis dolores ipsam distinctio.</p>
                    <p className="name">Angel Nyigu</p>
                    <span className="position">Dancer</span>
                  </div>
                </div>
              </div>
              <div className="item text-center">
                <div className="testimony-wrap p-4 pb-5">
                  <div className="user-img mb-4" style={{ backgroundImage: "url(images/yoofi.jpeg)", border: "1px solid red" }}></div>
                  <div className="text">

                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam at optio debitis commodi eum, deserunt corporis accusamus nostrum laboriosam dolor, numquam, dolore dolorum et ad. Quae veniam distinctio similique esse.</p>
                    <p className="name">Yoofi</p>
                    <span className="position">Dancer</span>
                  </div>
                </div>
              </div>
              <div className="item text-center">
                <div className="testimony-wrap p-4 pb-5">
                  <div className="user-img mb-4" style={{ backgroundImage: "url(images/angle.jpeg)", border: "1px solid red" }}></div>
                  <div className="text">

                    <p className="mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo, dolores necessitatibus nostrum ducimus nulla quo? Explicabo incidunt ipsa, veniam consequatur similique, architecto cupiditate illo deserunt soluta, eligendi facilis. Molestias!</p>
                    <p className="name">Angel Nyigu</p>
                    <span className="position">Dancer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

    </main>
  )
}
