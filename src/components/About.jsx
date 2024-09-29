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
		</section>
	);
};

export default About;
