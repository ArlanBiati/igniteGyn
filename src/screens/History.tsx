import { useState } from 'react';
import { Heading, VStack, SectionList, Text } from 'native-base';

import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '05.12.2022',
      data: ['Arlan', 'Biati', 'Teste1'],
    },
  ]);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercicios" />
      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            color="gray.200"
            fontSize="md"
            fontFamily="heading"
            mt={10}
            mb={3}
          >
            {section.title}
          </Heading>
        )}
        px={8}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercicios registrados ainda.{'\n'}Vamos fazer exercicios
            hoje?
          </Text>
        )}
      />
    </VStack>
  );
}
