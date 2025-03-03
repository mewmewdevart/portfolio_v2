import React from "react";
import LogoImage from "../assets/logo.svg";
import PortraitImage from "../assets/portrait1.png";

const HomePage = () => {
	return (
	<div className="w-full h-screen bg-dark">
	  {/* <div className="flex flex-col absolute items-center">
				<span className="border-r-1 border-gray h-[100px] mx-4  w-[5px]"></span>
				<ul className="text-white bg-red-500 w-fit mx-4">
					<li>Github</li>
					<li>Linkedin</li>
					<li>Behance</li>
					<li>Itch.Io</li>
				</ul>
			</div> */}
	  <nav className="bg-dark flex justify-between w-[80%] mx-auto items-center py-4">
		<div className="flex items-center text-primary gap-2 font-bold">
		  <img src={LogoImage} alt="" className="w-[30px] h-[30px]:" />
		  <h1>MewMew</h1>
		</div>
		<ul className="flex justify-center gap-6 text-white">
		  <li>
			<span className="text-primary"># </span> Inicio{" "}
		  </li>
		  <li>
			<span className="text-primary"># </span> Sobre{" "}
		  </li>
		  <li>
			<span className="text-primary"># </span> Projetos{" "}
		  </li>
		  <li>
			<span className="text-primary"># </span> Contato{" "}
		  </li>
		</ul>
	  </nav>

	  <section className="flex justify-center items-center w-full h-[90%]">
		<div className="flex justify-between items-center w-[80%] mx-auto h-[100%]">
			<div className="w-1/2 text-white flex flex-col gap-[32px]">
				<h1 className="text-[32px] font-bold">Larissa Cristina Benedito</h1>
				<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates fugiat obcaecati nemo? Consectetur nesciunt maiores labore quas atque sit dolores nemo! Explicabo praesentium autem minus eaque delectus eos aut quidem!</h2>
			</div>
			
			<div className="flex justify-end w-1/2 h-[600px]">
				<img src={PortraitImage} alt="" className="bg-primary" />
			</div>
		</div>
	  </section>
	</div>
  );
};

export default HomePage;