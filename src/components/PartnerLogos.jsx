import React from "react";
import Slider from "react-infinite-logo-slider";

const logos = Array.from({ length: 36 }, (_, i) => `/img/partner/img${i + 1}.${i + 1 >= 34 ? "jpeg" : "png"}`);

const PartnerLogos = ({ lang }) => {
  return (
    <div
      className="live-sectionPartner py-10"
      style={{ direction: "ltr" }}
    >
      <h2 className="text-center text-xl font-semibold mb-6">
        {lang === "ar" ? "شركاؤنا" : "Our Partners"}
      </h2>
      <Slider
        width="200px"
        duration={40}
        pauseOnHover={true}
        blurBorders={false}
        blurBorderColor="#fff"
      >
        {logos.map((src, i) => (
          <Slider.Slide key={i}>
            <div className="partner-slide">
              <img src={src} alt={`Partner ${i + 1}`} className="partner-logo-img" onError={(e) => {
    e.target.style.display = "none";
  }} />
            </div>
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
};

export default PartnerLogos;