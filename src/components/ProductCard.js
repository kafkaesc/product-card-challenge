import './ProductCard.css';

export default function ProductCard(product) {
	return (
		<div className="Product-Card-Wrapper">
			<img
				alt={product.imgAltText}
				className="Product-Card-Img"
				src={require('assets/product-image.webp')}
			/>
		</div>
	);
}
