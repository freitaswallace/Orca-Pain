import Roact from "@rbxts/roact";
import Card from "components/Card"; // ajuste o caminho se necessário

function ScriptsHub() {
	return (
		<Card
			Index={4}
			Page="Home"
			Size={new UDim2(0, 326, 0, 416)}
			Position={new UDim2(0, 710, 0, 0)} // ajuste se quiser mudar a posição
			Title="Scripts Hub"
		>
			<frame Size={new UDim2(1, 0, 1, 0)} BackgroundTransparency={1}>
				<uilistlayout Padding={new UDim(0, 8)} />
				<textbutton
					Text="Infinite Yield"
					Size={new UDim2(1, -20, 0, 36)}
					Position={new UDim2(0, 10, 0, 10)}
					BackgroundColor3={Color3.fromRGB(60, 180, 75)}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					Event={{
						MouseButton1Click: () => {
							// Coloque aqui a lógica para executar o script dentro do Roblox
							print("Executar Infinite Yield");
						},
					}}
				/>
				<textbutton
					Text="Outro Script"
					Size={new UDim2(1, -20, 0, 36)}
					BackgroundColor3={Color3.fromRGB(70, 130, 180)}
					TextColor3={Color3.fromRGB(255, 255, 255)}
					Event={{
						MouseButton1Click: () => {
							print("Executar Outro Script");
						},
					}}
				/>
				{/* Adicione mais textbutton para outros scripts */}
			</frame>
		</Card>
	);
}

export = ScriptsHub;
