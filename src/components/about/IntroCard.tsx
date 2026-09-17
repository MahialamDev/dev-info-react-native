
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function IntroCard() {
  return (
    <View style={styles.card}>
      <View style={styles.iconBox}>
        <Feather name="code" size={24} color="#38BDF8" />
      </View>

      <Text style={styles.title}>MERN Stack Developer</Text>

      <Text style={styles.description}>
        আমি একজন MERN Stack Developer, যিনি modern, responsive এবং
        user-friendly web application তৈরি করতে ভালোবাসি।
      </Text>

      <Text style={styles.description}>
        React ও Next.js দিয়ে frontend এবং Node.js ও Express দিয়ে
        backend development করি। MongoDB ব্যবহার করে database design
        এবং REST API তৈরি করতে কাজ করি।
      </Text>

      <View style={styles.focusRow}>
        <Feather name="target" size={16} color="#38BDF8" />

        <Text style={styles.focusText}>
          Clean UI • REST API • Authentication • Scalable Applications
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
    padding: 22,
    marginBottom: 16,
  },

  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  title: {
    color: '#F8FAFC',
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 12,
  },

  description: {
    color: '#CBD5E1',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 10,
  },

  focusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 6,
  },

  focusText: {
    flex: 1,
    color: '#38BDF8',
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '500',
  },
});

