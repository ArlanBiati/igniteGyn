import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base';

import * as Yup from 'yup';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

interface FormDataProps {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = Yup.object({
  name: Yup.string().required('Informe o Nome'),
  email: Yup.string().required('Informe o Email').email('Email inválido'),
  password: Yup.string().required('Informe uma Senha'),
  password_confirm: Yup.string().required('Confirme a Senha'),
});

export function SignUp() {
  const navigation = useNavigation();

  const { control, handleSubmit } = useForm<FormDataProps>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
    },
  });

  function handleGoBack() {
    navigation.goBack();
  }

  function handleSignUp(data: FormDataProps) {
    console.log(data);
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} pb={16}>
        <Image
          defaultSource={BackgroundImg}
          source={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color="gray.100" fontFamily="heading" mb={6}>
            Crie sua conta
          </Heading>

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Nome"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="password_confirm"
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Confirme a Senha"
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType="send"
              />
            )}
          />

          <Button
            title="Criar e acessar"
            onPress={handleSubmit(handleSignUp)}
          />
        </Center>

        <Center mt={24}>
          <Button
            title="Voltar para o login"
            variant="outline"
            onPress={handleGoBack}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
