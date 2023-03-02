import MainContent from 'layout/MainContent';
import ThinxHeading from 'layout/ThinxHeading';

import ProductCard from 'components/ProductCard';
import './App.css';

const productObject = {
	absorbencyOptions: [2, 4, 5],
	imgAltText:
		'A pair of hip-hugging panties are shown, they feature a broad, comfortable waistband with a zig-zag pattern.',
	imgPath: 'imgPath',
	price: 35,
	productTitle: 'Hiphugger',
	productType: 'collection',
	swatchList: [
		{ ariaLabel: 'Swap panty color to black', color: '#000' },
		{ ariaLabel: 'Swap panty color to bright red', color: '#fe0000' },
		{ ariaLabel: 'Swap panty color to bright blue', color: '#2400fe' },
		{ ariaLabel: 'Swap panty color to bright pink', color: '#ff00e6' },
		{ ariaLabel: 'Swap panty color to lime green', color: '#90ff00' },
	],
};

export default function App() {
	return (
		<div className="App">
			<ThinxHeading>Thinx Product Card</ThinxHeading>
			<MainContent>
				<ProductCard product={productObject} />
			</MainContent>
		</div>
	);
}
