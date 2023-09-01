/** @format */

import React from "react";
import EducationCards from "./EducationCards";
import education from "../DB/education.json";
import Socials from "./socials";
import skills from "../DB/skills.json";
import Skills from "./skills";
import Project from "./project";
import project from "../DB/project.json";

function Body() {
	return (
		<section className='flex flex-wrap h-full'>
			<article className='w-[18rem] mx-auto  md:w-1/2 lg:w-1/2'>
				<div className='flex flex-wrap items-center gap-6 text-[1.4rem]'>
					<img
						src='https://github.com/AteebHussain.png'
						alt='syedateeb'
						className='h-20 rounded-full'
					/>
					<h1 className='text-4xl font-semibold font-dancingScript tracking-widest'>
						Hi there!
					</h1>

					{/* Socials icons */}
					<Socials />
				</div>
				<br />
				<p className=' text-gray-700 dark:text-gray-400 pt-5'>
					<span className='text-green-400'> -</span> I'm Ateeb, a full stack
					developer from Jamshedpur, India.
				</p>
				<br />
				<p className='text-gray-700 dark:text-gray-400'>
					{" "}
					<span className='text-green-400'> -</span> I design and code
					beautifully simple things and I enjoy creating things that live on the
					internet.
				</p>
				<br />
				<p className='text-gray-700 dark:text-gray-400'>
					{" "}
					<span className='text-green-400'> -</span> Mainly I work with ReactJS
					and SCSS on a daily basis.
				</p>
				<br />
				<p className='text-gray-700 dark:text-gray-400'>
					{" "}
					<span className='text-green-400'> -</span> I like to code things from
					scratch, and enjoy bringing ideas to life in the browser.
				</p>
				<br />
				<p className='pt-5 pb-5 text-gray-700 dark:text-gray-400'>
					As a final year CSE student specializing in ReactJS development, I
					value simple content structure, clean design patterns, and thoughtful
					interactions as there is always a desire to improve my abilities and
					knowledge to provide the best possible results.
				</p>
				<br />
				<br />

				{/* Education section*/}
				<h1 className='text-3xl font-semibold pb-5'>🏫 Education</h1>
				<div className='grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-2 '>
					{education.map((education, i) => (
						<EducationCards
							link={education.github}
							title={education.name}
							description={education.description}
							key={i}
						/>
					))}
				</div>
				<br />
				<br />

				{/* Skills Section */}
				<h1 className='text-3xl font-bold pt-5'>⚙️ Skills</h1>
				<div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-8 '>
					{skills.map((skills, i) => (
						<Skills image={skills.image} name={skills.name} key={i} />
					))}
				</div>
				<br />
				<br />

				{/* Project Section */}
				<h1 className='text-3xl font-bold pt-5  pb-5'>📑 My Projects</h1>
				<div className='grid grid-cols-1  gap-5  md:grid-cols-1 lg:grid-cols-1 '>
					{project.map((project, i) => (
						<Project
							link={project.link}
							title={project.title}
							description={project.description}
							date={project.date}
							key={i}
						/>
					))}
				</div>
				<br />
			</article>
		</section>
	);
}

export default Body;
