import AbsorbencyList from './AbsorbencyList';
import ProductColorSwatchList from './ProductColorSwatchList';
import './ProductCard.css';

export default function ProductCard({ product }) {
	return (
		<div className="Product-Card-Wrapper">
			<img
				alt={product.imgAltText}
				className="Product-Card-Img"
				src={require('assets/product-image.webp')}
			/>
			<div>
				<span className="pc__product-type">{product.productType}</span>
				<div className="d-flex">
					<h3 className="pc__product-title mb-20">{product.productTitle}</h3>
					<span className="pc__product-price">${product.price}</span>
				</div>
			</div>
			<AbsorbencyList absorbencyList={product.absorbencyOptions} />
			<ProductColorSwatchList swatchList={product.swatchList} />
		</div>
	);
}
