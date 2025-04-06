import * as React from "react";
import ButtonComponent from "@atoms/ButtonComponent/ButtonComponent";
import {
	Eye,
	Code
  } from "lucide-react";

const projects = [
	{
		id: "project-1",
		title: "Projeto 1",
		description: "• Descrição do projeto 1",
		image:
			"https://i.imgur.com/cNfD6d5.png",
	},
	{
		id: "project-2",
		title: "Projeto 2",
		description: "• Descrição do projeto 2",
		image:
			"https://i.imgur.com/cNfD6d5.png",
	},
	{
		id: "project-3",
		title: "Projeto 3",
		description: "• Descrição do projeto 3",
		image:
			"https://i.imgur.com/cNfD6d5.png",
	},
	{
		id: "project-4",
		title: "Projeto 4",
		description: "• Descrição do projeto 4",
		image:
			"https://i.imgur.com/cNfD6d5.png",
	},
];

const ProjectsTemplate: React.FC = () => {
	return (
		<section className="w-full bg-dark">
			<div className="flex justify-center items-center w-full text-white py-4 lg:py-20">
				<div className="flex flex-col w-[90%] sm:w-[80%] mx-auto h-full gap-6">
					<div className="flex flex-row items-center">
						<h3 className="text-regular font-semibold">
							<span className="text-primary"># </span>Projetos
						</h3>
						<div
							aria-hidden="true"
							className="border-b border-primary w-[2.5rem] lg:w-[1.875rem] mx-4"
						></div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 h-[18.75rem]">
						{projects.map((project) => (
							<article
								key={project.id}
								className="border border-gray p-4 bg-dark"
								aria-labelledby={project.id}
							>
								<img src={project.image} alt="" className="w-full" />
								<h4
									id={project.id}
									className="text-lg font-medium text-primary mb-2"
								>
									{project.title}
								</h4>
								<p className="text-gray">{project.description}</p>
								<div className="flex flex-row  gap-4 mt-2">
									<ButtonComponent
										className="w-full flex justify-center gap-2 items-center"
										aria-label="Ver mais projetos"
									>
										<Eye className="w-5 h-5 " /> Acessar site
									</ButtonComponent>
									<ButtonComponent
										className="w-full flex justify-center gap-2 items-center"
										aria-label="Ver mais projetos"
									>
										<Code className="w-5 h-5 " /> Ver codigo
									</ButtonComponent>
								</div>
							</article>
						))}
					</div>
					<div className="flex justify-center items-center w-full mt-8 hidden">
						<ButtonComponent
							className="w-full lg:w-[12.5rem]"
							aria-label="Ver mais projetos"
						>
							Ver mais projetos
						</ButtonComponent>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectsTemplate;
