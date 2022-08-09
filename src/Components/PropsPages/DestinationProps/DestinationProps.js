import React from "react";
import styles from "./DestinationProps.module.css";
import Moon from "../../../Images/destination/image-moon.png";
import NavbarPlanets from "../../Navbar/NavbarPlanets";

function DestinationProps(props) {
  const { title, image, name, text, distance, time } = props;

  return (
    <main className={styles.destination_main_container}>
      <div className={styles.destination_left_container}>
        <h5>
          <span>01</span>Pick your destination
        </h5>
        <img src={Moon} alt="moon" />
      </div>
      <div className={styles.destination_right_container}>
        <div className={styles.navbar_planets}>
          <NavbarPlanets />
        </div>
        <div className={styles.text_planets}>
          <h1>Moon</h1>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
        </div>
        <div className={styles.bottom_container_planets}>
          <div>
            <h6>Avg. distance</h6>
            <h5>384,400 km</h5>
          </div>
          <div>
            <h6>Est. travel time</h6>
            <h5>3 days</h5>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DestinationProps;
