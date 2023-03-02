import ProductColorSwatch from './ProductColorSwatch';

export default function ProductColorSwatchList({ swatchList }) {
	if (!swatchList || !swatchList.length) {
		console.error(
			'Invalid swatchList object passed into the ProductColorSwatchList component'
		);
		return null;
	}
	return (
		<div className="text-left">
			{swatchList.map((cs, i) => (
				<ProductColorSwatch selected={i === 0} {...cs} />
			))}
		</div>
	);
}
