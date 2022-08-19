export default function BossHtml(boss) {
	return (
		<section className="unique-boss">
			<img
				className="boss-image"
				src={`./images/${boss.name.replace(/\s+/g, "_").toLocaleLowerCase()}.png`}
				alt="Boss icon"
			/>
			<div className="main-container">
				<p className="bossName border" key={boss.difficulty}>
					{boss.difficulty} {boss.name}
				</p>
				<p className="type border">{boss.type}</p>
				<p className="mesos border">
					{boss.mesos.toLocaleString()}
					<br />
					mesos
				</p>
				<input
					className="playersInParty border"
					type="number"
					min="1"
					max="6"
					defaultValue="1"
					style={{ fontSize: "20px" }}
					onKeyDown={(event) => event.preventDefault()}
					id={`playersInParty${boss.name.replace(/\s+/g, "")}${boss.difficulty}`}
				/>
				<input
					className="characters border"
					type="number"
					min="0"
					max="60"
					defaultValue="0"
					style={{ fontSize: "20px" }}
					onKeyDown={(event) => event.preventDefault()}
					id={`characters${boss.name.replace(/\s+/g, "")}${boss.difficulty}`}
				/>
			</div>
			<div className="crystal-img-amount">
				<div>
					<img src="images/grey.png" alt="Grey boss crystal" />
				</div>
				<div>
					<p className="crystalsToBeSold">x 0</p>
				</div>
			</div>
		</section>
	);
}
