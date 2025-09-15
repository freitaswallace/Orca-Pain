import Roact from "@rbxts/roact";
import Card from "components/Card"; // ajuste o caminho se necessário

const SCRIPTS = [
	{ name: "Infinite Yield", onClick: () => print("Executar Infinite Yield") },
	{ name: "CMD-X", onClick: () => print("Executar CMD-X") },
	{ name: "Outro Script", onClick: () => print("Executar Outro Script") },
];

function ScriptsHub() {
	return (
		<Card
			Index={4}
			Page="Home"
			Size={new UDim2(0, 326, 0, 416)}
			Position={new UDim2(0, 710, 0, 0)}
			Title="Scripts Hub"
		>
			<frame Size={new UDim2(1, 0, 1, 0)} BackgroundTransparency={1}>
				<uilistlayout Padding={new UDim(0, 8)} />
				{SCRIPTS.map((script, i) => (
					<textbutton
						Key={script.name}
						Text={script.name}
						Size={new UDim2(1, -20, 0, 36)}
						Position={new UDim2(0, 10, 0, 10 + i * 44)}
						BackgroundColor3={Color3.fromRGB(60 + i * 30, 180, 75)}
						TextColor3={Color3.fromRGB(255, 255, 255)}
						Event={{
							MouseButton1Click: script.onClick,
						}}
					/>
				))}
			</frame>
		</Card>
	);
}

export = ScriptsHub;
