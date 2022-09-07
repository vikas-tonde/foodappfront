import React, { useState } from "react";
import AdminSidebar from "../../component/AdminSidebar";
import { useForm } from "react-hook-form";

function Dashboard(props) {
  const [name, setUser] = useState(props.name);
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <AdminSidebar name={name} />

          <div className="col py-3 second row">
            <main className="main">
              <section className="card-area">
                <section className="card-section">
                  <div className="card">
                    <div className="flip-card">
                      <div className="flip-card__container">
                        <div className="card-front">
                          <div className="card-front__tp card-front__tp--city">
                          <i className="fas fa-hand-holding-usd"></i>
                            <h2 className="card-front__heading">Donation</h2>
                            {/* <p className="card-front__text-price">
                                All donation history
                            </p> */}
                          </div>

                          <div className="card-front__bt">
                            <p className="card-front__text-view card-front__text-view--city">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="card-back">
                          <video className="video__container" autoPlay muted loop>
                            <source
                              className="video__media"
                              src="https://vod-progressive.akamaized.net/exp=1662551747~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2922%2F20%2F514613831%2F2385013494.mp4~hmac=5fe76a76b226dfe2830df0652ca7017511d6420b3da8ee93cd824f872b24f408/vimeo-prod-skyfire-std-us/01/2922/20/514613831/2385013494.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--city">
                          Donation History
                        </h3>
                        {/* <p className="inside-page__text">
                          As cities never sleep, there are always something
                          going on, no matter what time!
                        </p> */}
                        <a
                          href="donations"
                          className="inside-page__btn inside-page__btn--city"
                        >
                          View deals
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="card-section">
                  <div className="card">
                    <div className="flip-card">
                      <div className="flip-card__container">
                        <div className="card-front">
                          <div className="card-front__tp card-front__tp--ski">
                            <h2 className="card-front__heading">User</h2>
                            {/* <p className="card-front__text-price">From £29</p> */}
                          </div>

                          <div className="card-front__bt">
                            <p className="card-front__text-view card-front__text-view--ski">
                              View me
                            </p>
                          </div>
                        </div>
                        <div className="card-back">
                          <video className="video__container" autoPlay muted loop>
                            <source
                              className="video__media"
                              src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </div>
                    </div>

                    <div className="inside-page">
                      <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--ski">
                          Users Information
                        </h3>
                       
                        <a
                          href="users"
                          className="inside-page__btn inside-page__btn--ski"
                        >
                          View deals
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {};
export async function getServerSideProps(context) {
  return { props: { "name": context.req.cookies["name"] } };
}
export default Dashboard;
