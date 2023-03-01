import ProductColorSwatch from './ProductColorSwatch';
import './ProductCard.css';

export default function ProductCard(product) {
	return (
		<div className="Product-Card-Wrapper">
			<img
				alt={product.imgAltText}
				className="Product-Card-Img"
				src={require('assets/product-image.webp')}
			/>
			<ProductColorSwatch
				ariaLabel="Swap color display to dark red"
				color="#d00"
				selected={true}
			/>
			<ProductColorSwatch
				ariaLabel="Swap color display to dark green"
				color="#0d0"
			/>
			<ProductColorSwatch
				ariaLabel="Swap color display to dark blue"
				color="#00d"
			/>
		</div>
	);
}
