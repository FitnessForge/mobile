import i18n from '@/configs/i18n';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { Button, StyleSheet, Text, View } from 'react-native';

const Index = () => {
  const { t } = useTranslation();

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <View style={styles.container}>
        <Text style={styles.mainText}>{t('welcome')}</Text>
        <Button
          title={t('changeLanguage')}
          onPress={() =>
            handleLanguageChange(i18n.language === 'en' ? 'fr' : 'en')
          }
        />
      </View>
    </I18nextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 24,
    color: 'red',
  },
});

export default Index;
