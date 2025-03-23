import { useContext } from "react";
import ButtonComponent from "@atoms/ButtonComponent/ButtonComponent";
import { TranslationContext } from "../../context/TranslationContext";
import SocialsBarComponent from "@atoms/SocialsBarComponent/SocialsBarComponent";
import PortraitImage from "../../assets/portrait1.png";

const HomePage = () => {
	const { texts } = useContext(TranslationContext)!;

	return (
		<div className="w-full h-screen bg-dark">
			<SocialsBarComponent />
			<section
				className="flex justify-center items-center w-full h-[90%]"
				aria-labelledby="intro-title"
				role="main"
			>
				<article className="flex justify-between items-center w-[90%] sm:w-[80%] mx-auto h-full">
					<div className="w-1/2 text-white flex flex-col">
						<p className="text-small">{texts.welcome}</p>
						<h1 id="intro-title" className="text-large font-bold text-primary">
							Larissa Cristina Benedito
						</h1>
						<h2 className="text-large font-bold text-gray">
							{texts.introduction}
						</h2>
						<h3 className="text-small text-gray">{texts.presentation}</h3>
						<ButtonComponent
							className="w-[150px] mt-10"
							aria-label="View my Resume"
						>
							Ver Currículo
						</ButtonComponent>
					</div>

					<div className="flex flex-col justify-end relative text-white">
						<img
							src={PortraitImage}
							alt="A portrait of Larissa Cristina Benedito, a Fullstack Junior Developer"
							className="w-[600px] relative "
							aria-describedby="developer-role"
						/>
						<div
							id="developer-role"
							className="flex items-center justify-center text-center w-[350px] h-[40px] border-2 border-[#AA7EDF] absolute right-0 top-full gap-4"
						>
							<span className="w-3 h-3 bg-primary"></span>
							Desenvolvedora Fullstack Junior
						</div>
					</div>
				</article>
			</section>
		</div>
	);
};

export default HomePage;
