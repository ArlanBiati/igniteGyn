import { useCallback, useState } from 'react';
import { Heading, VStack, SectionList, Text, useToast } from 'native-base';
import { useFocusEffect } from '@react-navigation/native';

import { api } from '@services/api';
import { AppError } from '@utils/AppError';

import { HistoryByDayDTO } from '@dtos/HistoryByDayDTO';

import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';
import { Loading } from '@components/Loading';

export function History() {
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(true);
  const [exercises, setExercises] = useState<HistoryByDayDTO[]>([]);

  async function fetchHistory() {
    setIsLoading(true);
    try {
      const response = await api.get('/history');
      setExercises(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : 'Não foi possivel carregar o histórico';
      toast.show({
        title,
        placement: 'top',
        bgColor: 'red.500',
      });
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchHistory();
    }, [])
  );

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercicios" />
      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          sections={exercises}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <HistoryCard data={item} />}
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
      )}
    </VStack>
  );
}
