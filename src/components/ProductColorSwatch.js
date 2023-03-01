import './ProductColorSwatch.css';

export default function ProductColorSwatch({ ariaLabel, color, selected }) {
	return (
		<span
			className="swatch-wrapper"
			style={{ border: selected && 'solid 1px #000', display: 'inline-block' }}
		>
			{selected ? (
				<i
					aria-label={ariaLabel}
					className="swatch"
					style={{
						backgroundColor: color,
						borderRadius: '50%',
					}}
					tabIndex="0"
				></i>
			) : (
				<i
					aria-label={ariaLabel}
					className="swatch"
					style={{ backgroundColor: color }}
					tabIndex="0"
				></i>
			)}
		</span>
	);
}
