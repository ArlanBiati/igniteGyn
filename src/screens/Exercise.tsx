import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { ScrollView } from 'react-native';

import {
  Box,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
} from 'native-base';

import { Feather } from '@expo/vector-icons';

import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';

import { Button } from '@components/Button';

export function Exercise() {
  const navigate = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigate.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="gray.600" pt={16}>
        <HStack
          justifyContent="space-between"
          mt={4}
          mb={8}
          alignItems="center"
        >
          <IconButton
            icon={
              <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
            }
            colorScheme="gray"
            onPress={handleGoBack}
            _pressed={{ borderColor: 'green.500', borderWidth: 1 }}
          />
          <Heading
            color="gray.100"
            fontSize="lg"
            fontFamily="heading"
            flexShrink={1}
          >
            Puxador frontal
          </Heading>

          <HStack alignItems="center">
            <BodySvg />
            <Text color="gray.200" ml={1} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack p={8}>
          <Image
            w="full"
            h={80}
            source={{
              uri: 'http://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg',
            }}
            alt="Nome do exercicio"
            mb={3}
            resizeMode="cover"
            rounded="lg"
          />

          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb={6}
              mt={5}
            >
              <HStack>
                <SeriesSvg />
                <Text color="gray.200" ml={2}>
                  3 séries
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text color="gray.200" ml={2}>
                  12 repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
