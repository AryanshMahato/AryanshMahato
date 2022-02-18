import Background from '../Global/Background/Background';
import HeroBox from '../Components/HeroBox/HeroBox';
import Skills from '../Components/Skills/Skills';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Containers/Footer/Footer';
import Projects from '../Containers/Projects/Projects';
import ParticleBackground from '../Components/Particle Background/ParticleBackground';
import ContactUs from '../Containers/Contact Us/ContactUs';
import About from '../Containers/About/About';

const Index = () => {
	return (
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
	);
};

export default Index;
