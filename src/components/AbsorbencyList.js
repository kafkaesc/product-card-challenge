import { useState } from 'react';

import AbsorbencyScale from './AbsorbencyScale';

export default function AbsorbencyList({ absorbencyList }) {
	const [selectedIndex, setSelectedIndex] = useState(0);

	function selectAbsorbency(absorbency) {
		setSelectedIndex(absorbency);
	}

	return (
		<div className="mb-20 text-left">
			{absorbencyList.map((num, i) => (
				<AbsorbencyScale
					key={i}
					num={num}
					onClick={() => selectAbsorbency(i)}
					selected={selectedIndex === i}
				/>
			))}
		</div>
	);
}
