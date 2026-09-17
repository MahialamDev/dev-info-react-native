
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'React Native',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Tailwind CSS',
  'DaisyUI',
  'Firebase',
  'JWT',
  'REST API',
  'Stripe',
  'Git & GitHub',
];

export default function SkillsCard() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconBox}>
          <Feather name="layers" size={21} color="#38BDF8" />
        </View>

        <View>
          <Text style={styles.title}>Skills & Technologies</Text>
          <Text style={styles.subtitle}>
            Technologies I work with
          </Text>
        </View>
      </View>

      <View style={styles.skills}>
        {skills.map((skill) => (
          <View key={skill} style={styles.skill}>
            <View style={styles.dot} />
            <Text style={styles.skillText}>{skill}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E293B',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },

  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: '700',
  },

  subtitle: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 3,
  },

  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
  },

  skill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 11,
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#38BDF8',
  },

  skillText: {
    color: '#CBD5E1',
    fontSize: 12,
    fontWeight: '500',
  },
});

