import './AbsorbencyScale.css';
import Droplet from 'Droplet';

const SCALE = 5;

export default function AbsorbencyScale({ num, selected, ...props }) {
	if (num < 0 || num > 5) {
		console.error(
			`The AbsorbencyScale component is designed for a 1-5 scale but was passed ${num}`
		);
		return null;
	}

	return (
		<button
			aria-label={`Select absorbency rating of ${num}`}
			className="pc__absorbency-button cur-point"
			style={
				selected
					? { border: 'solid 2px #000' }
					: { border: 'solid 2px #bfbfbf' }
			}
			{...props}
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
