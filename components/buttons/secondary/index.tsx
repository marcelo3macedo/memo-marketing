import { PrimaryButtonProps } from "@interfaces/buttons/primary.interface"
import { Wrapper, TextValue } from "./styles"

const ButtonSecondary = ({ content, action }:PrimaryButtonProps) => {
    return (
        <Wrapper type={'button'} onClick={action}>
          <TextValue>{content}</TextValue>
        </Wrapper>
    )
}

export default ButtonSecondary