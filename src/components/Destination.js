import Mountain1 from "../assets/image1.jpg";
import Mountain2 from "../assets/image2.jpg";
import Mountain3 from "../assets/image3.jpg";
import Mountain4 from "../assets/image4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1> Challenges Faced </h1>
      <p>Life Flows Within Us: Joining Forces to Beat the Blood Shortage</p>
      <DestinationData
        className="first-des"
        heading="Maternal Mortality:"
        text="Over one-third of maternal deaths in India are attributed to postpartum hemorrhage and severe anemia, with a disproportionate impact on rural areas. Addressing this issue requires targeted efforts to improve access to blood transfusion services in these regions and enhance healthcare infrastructure."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Demand-Supply Imbalance:"
        text="Achieving an effective balance between the demand and supply of blood is a critical challenge, given the high demand for blood in India. This necessitates strategic measures such as promoting voluntary blood donation, enhancing awareness, and implementing efficient blood collection and distribution systems to ensure a consistent and reliable blood supply across the country."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
