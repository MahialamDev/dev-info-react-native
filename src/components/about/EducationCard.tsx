
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function EducationCard() {
  return (
    <View style={styles.card}>
      <View style={styles.iconBox}>
        <Feather name="book-open" size={22} color="#38BDF8" />
      </View>

      <Text style={styles.label}>EDUCATION</Text>

      <Text style={styles.degree}>
        Bachelor of Business Administration (BBA)
      </Text>

      <Text style={styles.status}>
        3rd Year Student • Marketing
      </Text>

      <View style={styles.divider} />

      <View style={styles.learningRow}>
        <Feather name="code" size={16} color="#38BDF8" />

        <Text style={styles.learning}>
          Alongside my academic studies, I continuously learn and build
          real-world software projects.
        </Text>
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
  },

  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  label: {
    color: '#38BDF8',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 7,
  },

  degree: {
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 25,
  },

  status: {
    color: '#94A3B8',
    fontSize: 13,
    marginTop: 6,
  },

  divider: {
    height: 1,
    backgroundColor: '#334155',
    marginVertical: 16,
  },

  learningRow: {
    flexDirection: 'row',
    gap: 9,
  },

  learning: {
    flex: 1,
    color: '#CBD5E1',
    fontSize: 13,
    lineHeight: 20,
  },
});

