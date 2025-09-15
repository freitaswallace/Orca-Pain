import Roact from "@rbxts/roact";
import Card from "components/Card";
import { useTheme } from "hooks/use-theme";
import { DashboardPage } from "store/models/dashboard.model";
import { px } from "utils/udim2";

const SCRIPTS = [
	{
		name: "Infinite Yield",
		onClick: () => {
			print("Executar Infinite Yield");
			// Exemplo: para executar scripts, adicione sua lógica aqui.
			// Se quiser rodar scripts reais, use sua função de execução.
		},
	},
	{
		name: "CMD-X",
		onClick: () => {
			print("Executar CMD-X");
		},
	},
	{
		name: "Dex Explorer",
		onClick: () => {
			print("Executar Dex Explorer");
		},
	},
];

function ScriptsHub() {
	const theme = useTheme("home").title; // ou "home".server, ajuste conforme necessário

	return (
		<Card
			index={4}
			page={DashboardPage.Home}
			theme={theme}
			size={px(326, 416)}
			position={new UDim2(0, 710, 1, 0)}
			title="Scripts Hub"
		>
			<frame Size={new UDim2(1, 0, 1, 0)} BackgroundTransparency={1}>
				<uilistlayout Padding={new UDim(0, 8)} />
				{SCRIPTS.map((script, i) => (
					<textbutton
						Key={script.name}
						Text={script.name}
						Size={new UDim2(1, -20, 0, 36)}
						Position={new UDim2(0, 10, 0, 10 + i * 44)}
						BackgroundColor3={Color3.fromRGB(60 + i * 40, 180, 75)}
						TextColor3={Color3.fromRGB(255, 255, 255)}
						Font={Enum.Font.GothamBold}
						TextSize={16}
						Event={{
							MouseButton1Click: script.onClick,
						}}
					/>
				))}
			</frame>
		</Card>
	);
}

export default ScriptsHub;
