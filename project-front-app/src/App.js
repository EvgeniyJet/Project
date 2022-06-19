import AuthorsBook from './components/AuthorsBook';
import BestBook from './components/BestBook';
import Header from './components/Header';
import Footer from './components/Footer';
import Section from './components/Section';
import AboutAuthor from './components/AboutAuthor';
import './App.sass';
import Trust from './components/Trust';
import GetBook from './components/GetBook';
import YouLern from './components/YouLern';
import ArticleResourse from './components/ArticleResourse';
import AuthorsContainer from './components/AuthorsContainer';
import { Provider } from 'react-redux';
import { store } from './store'
import AuthorsBookContainer from './components/AuthorsBookContainer/AuthorsBookContainer';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Header />
				<Section>
					<BestBook />
				</Section>

				<Section bgVariant="white">
					<h2 className="Title">The Author’s Book</h2>
					<AuthorsBookContainer>

					</AuthorsBookContainer>
				</Section>
				<Section bgVariant="light">
					<AboutAuthor />
				</Section>
				<Section bgVariant="white">
					<h2 className="Title">Trusted By The Best</h2>
					<Trust />
				</Section>
				<Section >
					<GetBook />
				</Section>
				<Section bgVariant="white">
					<h2 className="Title">What Will You Learn?</h2>
					<YouLern />
				</Section>
				<Section bgVariant="light">
					<h2 className="Title">Articles & Resources</h2>
					<ArticleResourse />
				</Section>

				<AuthorsContainer />


				<Footer />
			</div>
		</Provider>
	);
}

export default App;
