import ButtonComponent from "@atoms/ButtonComponent/ButtonComponent";
import React from "react";

const projects = [
	{
		id: "project-1",
		title: "Projeto 1",
		description: "• Descrição do projeto 1",
		image:
			"https://static.wikia.nocookie.net/aesthetics/images/3/39/Pure_violet.png/revision/latest?cb=20210323212106",
	},
	{
		id: "project-2",
		title: "Projeto 2",
		description: "• Descrição do projeto 2",
		image:
			"https://static.wikia.nocookie.net/aesthetics/images/3/39/Pure_violet.png/revision/latest?cb=20210323212106",
	},
	{
		id: "project-3",
		title: "Projeto 3",
		description: "• Descrição do projeto 3",
		image:
			"https://static.wikia.nocookie.net/aesthetics/images/3/39/Pure_violet.png/revision/latest?cb=20210323212106",
	},
	{
		id: "project-4",
		title: "Projeto 4",
		description: "• Descrição do projeto 4",
		image:
			"https://static.wikia.nocookie.net/aesthetics/images/3/39/Pure_violet.png/revision/latest?cb=20210323212106",
	},
];

const ProjectsPage: React.FC = () => {
	return (
		<section className="w-full bg-dark">
			<div className="flex justify-center items-center w-full text-white">
				<div className="flex flex-col w-[90%] sm:w-[80%] mx-auto h-full py-20 gap-6">
					<div className="flex flex-row items-center">
						<h3 className="text-regular font-semibold">
							<span className="text-primary"># </span>Projetos
						</h3>
						<div
							aria-hidden="true"
							className="border-b border-primary w-[40%] sm:w-[30%] mx-4"
						></div>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-4 gap-6 h-[300px]">
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
										className="w-full"
										aria-label="Ver mais projetos"
									>
										A
									</ButtonComponent>
									<ButtonComponent
										className="w-full"
										aria-label="Ver mais projetos"
									>
										B
									</ButtonComponent>
								</div>
							</article>
						))}
					</div>
					<div className="flex justify-center items-center w-full mt-8">
						<ButtonComponent
							className="w-full sm:w-[200px]"
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

export default ProjectsPage;
