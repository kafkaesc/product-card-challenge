import { useState } from 'react';

import ProductColorSwatch from './ProductColorSwatch';

export default function ProductColorSwatchList({ swatchList }) {
	const [selected, setSelected] = useState(swatchList[0] || null);

	function selectSwatch(swatch) {
		setSelected(swatch);
	}

	return (
		<div className="text-left">
			{swatchList.map((sw, i) => (
				<ProductColorSwatch
					key={i}
					onClick={() => selectSwatch(sw)}
					selected={sw === selected}
					{...sw}
				/>
			))}
		</div>
	);
}
