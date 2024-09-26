import '../styles/about.css'

const About = () => {
	return (
		<section className="about">
			<h2>ABOUT ME</h2>
			<iframe
				src="https://www.youtube.com/embed/OmRotR0EdhI?si=UIdffN7X4-MbuFQJ"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
		</section>
	);
};

export default About;
