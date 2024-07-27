import { Text, ITextProps } from "native-base"

interface TituloProps extends ITextProps {
    children: ReactNode
}

export function Titulo({ children }: TituloProps) {
    return (
        <Text
            fontSize="2xl"
            fontWeight="bold"
            color="gray.500"
            textAlign="center"
            marginTop={5}
        > {children}
        </Text>
    )
}