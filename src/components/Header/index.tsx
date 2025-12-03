import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import logoImage from "../../assets/ignite-logo.svg";

export function Header() {
	return (
		<HeaderContainer>
			<HeaderContent>
				<img src={logoImage} alt="" />
				<Dialog.Root>
					{/* asChild faz com que não crie um novo botão, mas aproveite o que já está dentro de Dialog.Trigger */}
					<Dialog.Trigger asChild>
						<NewTransactionButton>Nova Transação</NewTransactionButton>
					</Dialog.Trigger>

					{/*
						Uma forma elegante de renderizar um elemento filho, dentro de um outro local da DOM. Ou seja,
						se for inserido um paragrafo dentro desse elemento, é possível renderizar o mesmo, em outro 
						local da aplicação.
					*/}
					<Dialog.Portal>
						{/* Dialog.Overlay é o fundo com opacidade preta de fundo */}
						<Dialog.Overlay>
							<Dialog.Content>
								<Dialog.Title>Nova Transação</Dialog.Title>

								<Dialog.Close>X</Dialog.Close>

								<Dialog.Description>Descrição</Dialog.Description>
							</Dialog.Content>
						</Dialog.Overlay>
					</Dialog.Portal>
				</Dialog.Root>
			</HeaderContent>
		</HeaderContainer>
	);
}
