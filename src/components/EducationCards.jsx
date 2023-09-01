/** @format */

import React from "react";

function EducationCards({ title, description }) {
	return (
		<div className='max-w-sm p-6 bg-white border shadow-lg border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700'>
			<h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1'>
				{title}
			</h5>

			<p className='mb-3  text-gray-700 dark:text-gray-400 line-clamp-2'>
				{description}
			</p>
		</div>
	);
}

export default EducationCards;
