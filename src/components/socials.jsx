/** @format */

import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa/index.esm";
import { FaMailBulk } from "react-icons/fa/index.esm";

function Socials() {
	return (
		<>
			<a href='https://github.com/AteebHussain' target='_blank'>
				<FaGithub />
			</a>
			<a href='https://www.instagram.com/ateeeeeeeb_' target='_blank'>
				<FaInstagram />
			</a>
			<a
				href='https://www.linkedin.com/in/syed-ateeb-359867225/'
				target='_blank'>
				<FaLinkedin />
			</a>
			<a
        href="mailto:syedateebhussain123@gmail.com" target="_blank">
				<FaMailBulk />
			</a>
		</>
	);
}

export default Socials;
