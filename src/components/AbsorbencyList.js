import AbsorbencyScale from './AbsorbencyScale';

export default function AbsorbencyList({ absorbencyList }) {
	if (!absorbencyList || !absorbencyList.length) {
		console.error(
			'Invalid absorbencyList argument passed into the AbsorbencyList component'
		);
		return null;
	}
	return (
		<div className="mb-20 text-left">
			{absorbencyList.map((num, i) => (
				<AbsorbencyScale key={i} num={num} selected={i === 0} />
			))}
		</div>
	);
}
