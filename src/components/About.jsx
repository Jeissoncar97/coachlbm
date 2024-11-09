import Instagram from "./social_media/Instagram"
import Facebook from "./social_media/Facebook"
import Youtube from "./social_media/Youtube"
import TikTok from "./social_media/TikTok"

import '../styles/about.css'

const About = () => {
	return (
		<section className="about">
			<h2>ABOUT ME</h2>
			<div className="video-container">
				<video className="video" controls

				>
					<source type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<div className="social_media_container">
				<Instagram />
				<TikTok />
				<Facebook />
				<Youtube />
			</div>
		</section>
	);
};

export default About;
