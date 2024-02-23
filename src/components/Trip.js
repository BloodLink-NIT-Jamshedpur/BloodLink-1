import "./TripStyles.css";

import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Services Provided</h1>
      <p> Overcoming Blood Donation Challenges with Unity</p>
      <div className="tripcard">
        <TripData
          image="https://plus.unsplash.com/premium_photo-1661670219639-2ea9af8e9d88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="BLOOD BANK GET YOUR NEXT POTENTIAL DONOR NOW- "
          text="Get access to send a reminder to your next potential donors based on their user history. Blood Banks need to register themselves and provide their location. According to your location eligible/potential donors will be encouraged to come for the donation based on Blood Bank's requirement."
        />
        <TripData
          image="https://plus.unsplash.com/premium_photo-1682309837866-12337bd9cd9e?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          heading="NEAREST BLOOD BANK"
          text="Incase of emergencies immediately locate your nearest blood bank and contact them. Blood Banks can also use this when they're short of any particular blood type" 
          
        />
        <TripData
          image="https://media.istockphoto.com/id/1404127232/photo/young-asian-woman-in-red-dress-typing-on-laptop-computer-keyboard-registering-for-online.webp?b=1&s=170667a&w=0&k=20&c=hTOkaVJxfgywKkpEvpnuMkwZeAY49ylkAeF1X8MUgC4="
          heading="REGISTER YOURSELF AS A BLOOD BANK OR DONOR TODAY "
          text="Donors and blood banks can easily reach out to each other with the help of BloodLink. Rememeber 'Once a donor always a life saver'. "
        />
      </div>
    </div>
  );
}

export default Trip;
