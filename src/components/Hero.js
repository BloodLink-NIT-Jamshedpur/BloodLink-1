import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        {props.heroVideo ? (
          <video autoPlay loop muted>
            <source src={props.heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img alt="HeroImg" src={props.heroImg} />
        )}
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
