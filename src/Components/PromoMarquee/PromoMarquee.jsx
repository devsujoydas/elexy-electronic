import Marquee from "react-fast-marquee";

const PromoMarquee = () => {
  return (
    <div className=" font-open-sans py-10">
      <Marquee speed={150} gradient={false} pauseOnHover>
        <span className="mx-4 font-bold text-3xl">✨ Unbeatable Deals Await! ✨</span>
        <span className="mx-4 font-bold text-3xl">✨ Smart Shopping! ✨</span>
        <span className="mx-4 font-bold text-3xl">✨ Shop More, Save More! ✨</span>
        <span className="mx-4 font-bold text-3xl">✨ Unbelievable Discounts! ✨</span>
        <span className="mx-4 font-bold text-3xl">✨ Welcome! ✨</span>
      </Marquee>
    </div>
  );
};

export default PromoMarquee;
