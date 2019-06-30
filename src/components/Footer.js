import React from 'react';
import { Container, Image, List, Segment } from 'semantic-ui-react';
import githubLogo from '../github.svg';

const Footer = props => {
	return (
		<div>
			<Segment
				inverted
				style={{ margin: '5em 0em 0em', padding: '2em 0em' }}
				vertical
			>
				<Container textAlign='center'>
					<Image src='https://react.semantic-ui.com/logo.png' centered size='mini' />
					<List horizontal inverted divided link>
						<List.Item as='a' href='#'>Site Map</List.Item>
						<List.Item as='a' href='#'>Contact Us</List.Item>
						<List.Item as='a' href='#'>Terms and Conditions</List.Item>
						<List.Item as='a' href='#'>Privacy Policy</List.Item>
					</List>
					<div className="github">
						<a href="https://github.com/ekayis" target="_blank">
							<img
								src={githubLogo}
								width={26}
								alt="mehmet seven twitter" />
							<span>@ekayis</span>
						</a>
					</div>
				</Container>
			</Segment>
		</div>
	);
};

export default Footer;
