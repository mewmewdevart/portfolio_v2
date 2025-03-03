import ButtonComponent from "@atoms/ButtonComponent/ButtonComponent";
import React from "react";

const AboutMePage: React.FC = () => {
	return (
		<div className="w-full h-[90%] bg-dark">
			<section className="flex justify-center items-center w-full h-[90%] text-white">
				<div className="flex flex-col w-[80%] mx-auto h-full py-20 gap-6">
					<div className="flex flex-row items-center">
						<h3 className="text-[18px] font-semibold">
							{" "}
							<span className="text-primary"># </span>Sobre Mim
						</h3>
						<div
							aria-hidden="true"
							className="border-b border-primary w-[40%] mx-4 "
						></div>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta
						enim orci, non cursus lacus laoreet vel. Aliquam in risus diam.
						Donec pharetra blandit risus, in pharetra urna porta nec. Duis
						iaculis ut sem a commodo. Donec feugiat, quam sit amet dapibus
						tristique, quam nulla egestas eros, ut sagittis tortor leo quis
						diam. Proin facilisis tempus pretium. Ut magna nulla, gravida eu
						felis eu, consequat sollicitudin lectus. Mauris feugiat eros
						suscipit metus placerat, id posuere velit accumsan. Aliquam sit amet
						metus vehicula, mollis quam in, egestas arcu. Vestibulum semper
						fringilla tortor ac malesuada. Pellentesque porttitor, velit eget
						molestie finibus, ante dolor vulputate leo, id viverra dui dolor
						eget tortor. Class aptent taciti sociosqu ad litora torquent per
						conubia nostra, per inceptos himenaeos. <br /> <br /> Lorem ipsum
						dolor sit amet, consectetur adipiscing elit. Sed porta enim orci,
						non cursus lacus laoreet vel. Aliquam in risus diam. Donec pharetra
						blandit risus, in pharetra urna porta nec. Duis iaculis ut sem a
						commodo. Donec feugiat, quam sit amet dapibus tristique, quam nulla
						egestas eros, ut sagittis tortor leo quis diam. Proin facilisis
						tempus pretium. Ut magna nulla, gravida eu felis eu, consequat
						sollicitudin lectus. Mauris feugiat eros suscipit metus placerat, id
						posuere velit accumsan. Aliquam sit amet metus vehicula, mollis quam
						in, egestas arcu. Vestibulum semper fringilla tortor ac malesuada.
						Pellentesque porttitor, velit eget molestie finibus, ante dolor
						vulputate leo, id viverra dui dolor eget tortor. Class aptent taciti
						sociosqu ad litora torquent per conubia nostra, per inceptos
						himenaeos.
					</p>
					<div className="flex  flex-row gap-4">
					<ButtonComponent className="w-[200px] ">
			  Contratar Serviços
			</ButtonComponent>
					<ButtonComponent className="w-[200px] ">
			  Acessar o Linkedin
			</ButtonComponent>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutMePage;
