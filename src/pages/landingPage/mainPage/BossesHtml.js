export default function BossHtml(boss) {
	return (
		<section className={`unique-boss ${boss.order}`}>
			<img
				className="boss-image"
				src={require(`./images/${boss.name.replace(/\s+/g, "_").toLocaleLowerCase()}.png`)}
				alt="Boss Icon"
			/>
			<div className="main-container">
				<p className={`border ${boss.difficulty.toLocaleLowerCase()}`}>{boss.difficulty}</p>
				<p className="border">{boss.name}</p>
				<p className="border">{boss.type}</p>
				<p className="border">
					{boss.mesos.toLocaleString()}
					<br />
					mesos
				</p>
				<input
					className="border"
					type="number"
					min="1"
					max="6"
					defaultValue="1"
					style={{ fontSize: "20px" }}
					onKeyDown={(event) => event.preventDefault()}
					id={`playersInParty${boss.name.replace(/\s+/g, "")}${boss.difficulty}`}
				/>
				<input
					className="border"
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
					<img src={require("./images/grey.png")} alt="Grey boss crystal" />
				</div>
				<div>
					<p className="crystalsToBeSold">x 0</p>
				</div>
			</div>
		</section>
	);
}
