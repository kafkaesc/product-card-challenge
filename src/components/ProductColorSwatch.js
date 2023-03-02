import './ProductColorSwatch.css';

export default function ProductColorSwatch({ ariaLabel, color, selected }) {
	return (
		<button
			className="pc__swatch-button"
			style={{ border: selected && 'solid 1px #000', display: 'inline-block' }}
		>
			{selected ? (
				<i
					aria-label={ariaLabel}
					className="pc__swatch"
					style={{
						backgroundColor: color,
						borderRadius: '50%',
					}}
				></i>
			) : (
				<i
					aria-label={ariaLabel}
					className="pc__swatch"
					style={{ backgroundColor: color }}
				></i>
			)}
		</button>
	);
}
