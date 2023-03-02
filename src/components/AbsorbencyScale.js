import './AbsorbencyScale.css';
import Droplet from 'Droplet';

export default function AbsorbencyScale({ num, selected }) {
	if (num < 0 || num > 5) {
		console.error(
			`The AbsorbencyScale component is designed for a 1-5 scale but was passed ${num}`
		);
		return null;
	}
	const SCALE = 5;
	return (
		<button
			aria-label={`Select absorbency rating of ${num}`}
			className="pc__absorbency-button"
			style={
				selected
					? { border: 'solid 2px #000' }
					: { border: 'solid 2px #bfbfbf' }
			}
		>
			{[...Array(num)].map((obj, i) => (
				<span className="pc__absorbency-icon" key={i + '-filled'}>
					<Droplet width={13} isFilled={true} />
				</span>
			))}
			{[...Array(SCALE - num)].map((obj, i) => (
				<span className="pc__absorbency-icon" key={i + '-empty'}>
					<Droplet width={13} isFilled={false} />
				</span>
			))}
		</button>
	);
}
