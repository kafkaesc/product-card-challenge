import './ProductColorSwatch.css';

export default function ProductColorSwatch({ ariaLabel, color, selected }) {
	return (
		<button
			className="pc__swatch-button"
			style={{
				border: selected && 'solid 2px #000',
				display: 'inline-block',
				padding: selected && '2px',
			}}
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
