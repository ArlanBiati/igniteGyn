import { Heading, HStack, Icon, IconButton, Text, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import { UserPhoto } from './UserPhoto';

export function HomeHeader() {
  return (
    <HStack bgColor="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{ uri: 'https://github.com/ArlanBiati.png' }}
        alt="Imagem do usuário"
        size={16}
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading color="gray.100" fontSize="md">
          Arlan
        </Heading>
      </VStack>
      <IconButton
        icon={
          <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
        }
        colorScheme="gray"
        _pressed={{ bg: 'gray.700', color: 'gray.500' }}
      />
    </HStack>
  );
}
