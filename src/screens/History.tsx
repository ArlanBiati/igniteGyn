import { useState } from 'react';
import { Heading, VStack, SectionList } from 'native-base';
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
      />
    </VStack>
  );
}
