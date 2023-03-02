import ProductColorSwatch from './ProductColorSwatch';
import './ProductCard.css';

export default function ProductCard({ product }) {
	console.log('_jhdb: product: ', product);
	//console.log('_jhdb: product.product.price: ', product.product.price);
	return (
		<div className="Product-Card-Wrapper">
			<img
				alt={product.imgAltText}
				className="Product-Card-Img"
				src={require('assets/product-image.webp')}
			/>
			{/* TODO: Style these to match the spec. */}
			<div>
				<span className="pc__product-type">{product.productType}</span>
				<div className="d-flex">
					<h3 className="pc__product-title">{product.productTitle}</h3>
					<span className="pc__product-price">${product.price}</span>
				</div>
			</div>
			{/* TODO: Absorbency display component here. */}
			<ProductColorSwatch
				ariaLabel="Swap panty color to black"
				color="#000"
				selected={true}
			/>
			<ProductColorSwatch
				ariaLabel="Swap panty color to bright red"
				color="#fe0000"
			/>
			<ProductColorSwatch
				ariaLabel="Swap panty color to bright blue"
				color="#2400fe"
			/>
			<ProductColorSwatch
				ariaLabel="Swap panty color to bright pink"
				color="#ff00e6"
			/>
			<ProductColorSwatch
				ariaLabel="Swap panty color to lime green]"
				color="#90ff00"
			/>
		</div>
	);
}