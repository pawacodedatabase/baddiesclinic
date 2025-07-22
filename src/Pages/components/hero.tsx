import hero from '../../assets/Untitled design.png'

const HeroSection2 = () => {
  return (
    <section className="w-full">
      <img
        src={hero} // Replace with your image path
        alt="Hero"
        className="w-full h-auto object-cover"
      />
    </section>
  );
};

export default HeroSection2;
