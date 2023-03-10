import { BigCard } from './BigCard';
import { LittleCard } from './LittleCard';
export function CardGroup(props: { status: string; index: number }) {
	const { status, index } = props;
	return (
		<div data-index={index} className={'cardgroup ' + status}>
			<LittleCard />
			<BigCard />
			<LittleCard />
			<BigCard />
			<LittleCard />
			<BigCard />
			<LittleCard />
			<BigCard />
		</div>
	);
}
