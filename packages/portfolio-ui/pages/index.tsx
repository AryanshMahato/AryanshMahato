import Background from '../Global/Background/Background';
import HeroBox from '../Components/HeroBox/HeroBox';
import Skills from '../Components/Skills/Skills';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Containers/Footer/Footer';
import Projects from '../Containers/Projects/Projects';
import ParticleBackground from '../Components/Particle Background/ParticleBackground';
import ContactUs from '../Containers/Contact Us/ContactUs';
import About from '../Containers/About/About';
import Head from 'next/head';

const Index = () => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				{/*<link rel="icon" href="public/favicon.jpg" />*/}
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Aryansh Mahato - Full Stack Developer and Devops Engineer"
				/>
				<link rel="apple-touch-icon" href="public/logo192.jpg" />
				<link rel="manifest" href="public/manifest.json" />
				<title>Aryansh Mahato</title>
			</Head>
			<h1>
				<ParticleBackground />
				<NavBar />
				<HeroBox />
				<Background>
					<About />
					<Skills />
					<Projects />
				</Background>
				<ContactUs />
				<Footer />
			</h1>
		</>
	);
};

export default Index;
