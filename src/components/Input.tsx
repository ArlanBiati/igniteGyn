import { IInputProps, Input as NativeBaseInput } from 'native-base';

interface InputProps extends IInputProps {
  bgColor: string;
}

export function Input({ bgColor = 'gray.700', ...rest }: InputProps) {
  return (
    <NativeBaseInput
      {...rest}
      bg={bgColor}
      h={14}
      px={4}
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      color="white"
      mb={4}
      placeholderTextColor="gray.300"
      _focus={{
        bg: 'gray.700',
        borderWidth: 1,
        borderColor: 'green.500',
      }}
    />
  );
}
