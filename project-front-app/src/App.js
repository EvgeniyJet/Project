import AuthorsBook from './components/AuthorsBook';
import BestBook from './components/BestBook';
import Header from './components/Header';
import Section from './components/Section';
import AboutAuthor from './components/AboutAuthor';
import './App.sass';

function App() {
	return (
		<div className="App">
			<Header />
			<Section>
				<BestBook />
			</Section>
			<Section bgVariant="white">
				<h2 className="Title">The Author’s Book</h2>
				<AuthorsBook />
			</Section>
			<Section bgVariant="light">
				<AboutAuthor />
			</Section>
		</div>
	);
}

export default App;
