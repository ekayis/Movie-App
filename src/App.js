import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';

import {
	Container, Image, Menu, Visibility,
} from 'semantic-ui-react';
import { menuStyle, fixedMenuStyle } from './helpers/styleHelper';

import MoviesPage from './components/pages/MoviesPage';
import Footer from './components/Footer';

import { Link, Route } from 'react-router-dom';

class App extends Component {

	state = {
		menuFixed: null,
		overlayFixed: false,
	};

	stickTopMenu = () => this.setState({ menuFixed: true })
  unStickTopMenu = () => this.setState({ menuFixed: null });

  render() {
		const { menuFixed } = this.state

		return (
      <div className="App">
				<Visibility
					onBottomPassed={this.stickTopMenu}
					onBottomVisible={this.unStickTopMenu}
					once={false}
				>
					<Menu
						borderless
						fixed={menuFixed && 'top'}
						style={menuFixed ? fixedMenuStyle : menuStyle}
					>
						<Container text>
							<Menu.Item>
								<Image size='mini' src='https://react.semantic-ui.com/logo.png' />
							</Menu.Item>
							<Menu.Item header>Movieapp</Menu.Item>
							<Menu.Item as={Link} to='/movies'>
								Movies
              </Menu.Item>
							<Menu.Item as='a'>Add New</Menu.Item>
						</Container>
					</Menu>
				</Visibility>

				<Container text>
					

					<Route path='/movies' component={MoviesPage}></Route>

          <hr />
          <div>askldjfaslkdfjasldkfjsdlkf</div>

        </Container>

				<Footer />
      </div>
    );
  }
}

export default App;
