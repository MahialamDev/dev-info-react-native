import { StyleSheet, ScrollView, Text, View } from 'react-native';

import IntroCard from '@/components/about/IntroCard';
import SkillsCard from '@/components/about/SkillsCard';
import EducationCard from '@/components/about/EducationCard';

export default function About() {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.heading}>
        <Text style={styles.smallTitle}>ABOUT ME</Text>

        <Text style={styles.title}>
          A little about me
        </Text>

        <View style={styles.line} />
      </View>

      <IntroCard />
      <SkillsCard />
      <EducationCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#0F172A',
  },

  container: {
    padding: 20,
    paddingBottom: 40,
  },

  heading: {
    marginBottom: 22,
  },

  smallTitle: {
    color: '#38BDF8',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 6,
  },

  title: {
    color: '#F8FAFC',
    fontSize: 28,
    fontWeight: '800',
  },

  line: {
    width: 42,
    height: 3,
    backgroundColor: '#38BDF8',
    borderRadius: 10,
    marginTop: 10,
  },
});