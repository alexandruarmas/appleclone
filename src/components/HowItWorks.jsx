import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { chipImg, frameImg, frameVideo } from "../assets";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center my-20 w-full">
          <img src={chipImg} alt="Cip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Cipul A17 Pro.
            <br />O victorie uriașă pentru gaming.
          </h2>

          <p className="hiw-subtitle">
            A sosit. Cel mai mare redesign din istoria GPU-urilor Apple
          </p>
        </div>

        <div className="mb-14 mt-10 md:mt-20">
          <div className="flex-center relative h-full">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="Ramă"
                className="relative z-10 bg-transparent"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="text-gray mt-3 text-center font-semibold">
            Honkai: Star Rail
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 flex-col justify-center">
            <p className="hiw-text g_fadeIn">
              A17 Pro este o clasă complet nouă de cip iPhone care oferă{" "}
              <span className="text-white">
                cele mai bune performanțe grafice de până acum.
              </span>{" "}
            </p>

            <br />
            <p className="hiw-text g_fadeIn">
              Jocurile mobile{" "}
              <span className="text-white">
                vor arăta și se vor simți incredibil de imersive
              </span>{" "}
              cu medii și personaje extrem de detaliate.
            </p>
          </div>

          <div className="g_fadeIn flex flex-1 flex-col justify-center">
            <p className="hiw-text">Nou</p>
            <p className="hiw-bigtext">GPU de clasă Pro</p>
            <p className="hiw-text">cu 6 nuclee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
