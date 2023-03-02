import MainContent from 'layout/MainContent';
//import ThinxHeading from 'layout/ThinxHeading';

import ProductCard from 'components/ProductCard';
import './App.css';

const productItem = {
	imgAltText: 'Alt text',
	imgPath: 'imgPath',
	price: 35,
	productTitle: 'Hiphugger',
	productType: 'collection',
};

export default function App() {
	return (
		<div className="App">
			{/*<ThinxHeading>Thinx Product Card</ThinxHeading>*/}
			<MainContent>
				<ProductCard product={productItem} />
			</MainContent>
		</div>
	);
}
