import heroImg from "./assets/japan.svg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            corporis dolor ipsam consequuntur corrupti incidunt, voluptatibus
            voluptatum repellendus soluta quae nulla reprehenderit esse voluptas
            exercitationem ut provident porro animi. Quidem.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
