import React, { useState, useEffect } from "react";
import Launch from "../assets/Launch.svg";

const Timer = () => {
	const initialTime =
		15 * 24 * 60 * 60 * 1000 +
		10 * 60 * 60 * 1000 +
		20 * 60 * 1000 +
		30 * 1000;

	const [timeLeft, setTimeLeft] = useState(initialTime);

	useEffect(() => {
		let timer;

		if (typeof window !== "undefined") {
			timer = setInterval(() => {
				setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1000 : 0));
			}, 1000);
		}

		return () => clearInterval(timer);
	}, []);

	const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

	return (
		<div className="timer">
			<h2>
				<img src={Launch} alt="" />
				Launch Offer
				<img src={Launch} alt="" />
			</h2>
			<div className="timerper">
				<div>
          <p>{days}</p>
          <p className="days">Days</p>
        </div>
        :
				<div>
          <p>{hours}</p>
          <p className="hours">Hours</p>
        </div>
        :
				<div>
          <p>{minutes}</p>
          <p className="minuts">Minutes</p>
        </div>
        :
				<div>
          <p>{seconds}</p>
          <p className="secons">Seconds</p>
        </div>
			</div>
		</div>
	);
};

export default Timer;
