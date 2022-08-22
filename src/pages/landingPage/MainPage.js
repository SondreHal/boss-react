import BossesArray from "./mainPage/BossesArray";
import BossesHtml from "./mainPage/BossesHtml";

export default function BossList() {
	const BossesMap = BossesArray.map((boss) => {
		return (
			<BossesHtml
				name={boss.name}
				difficulty={boss.difficulty}
				mesos={boss.mesos}
				type={boss.type}
				order={boss.order}
			/>
		);
	});
	return <div>{BossesMap}</div>;
}
