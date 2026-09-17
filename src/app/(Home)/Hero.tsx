import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSpring,
  Easing,
} from 'react-native-reanimated';
import { Feather, FontAwesome } from '@expo/vector-icons';

export default function HeroPage() {
  // Animation values
  const avatarOpacity = useSharedValue(0);
  const avatarScale = useSharedValue(0.8);
  const textOpacity = useSharedValue(0);
  const textTranslateY = useSharedValue(20);
  const buttonsOpacity = useSharedValue(0);
  const buttonsTranslateY = useSharedValue(20);
  const socialOpacity = useSharedValue(0);

  useEffect(() => {
    avatarOpacity.value = withTiming(1, { duration: 600, easing: Easing.out(Easing.quad) });
    avatarScale.value = withSpring(1, { damping: 8 });

    textOpacity.value = withDelay(250, withTiming(1, { duration: 500 }));
    textTranslateY.value = withDelay(250, withTiming(0, { duration: 500, easing: Easing.out(Easing.quad) }));

    buttonsOpacity.value = withDelay(500, withTiming(1, { duration: 500 }));
    buttonsTranslateY.value = withDelay(500, withTiming(0, { duration: 500, easing: Easing.out(Easing.quad) }));

    socialOpacity.value = withDelay(750, withTiming(1, { duration: 500 }));
  }, []);

  const avatarStyle = useAnimatedStyle(() => ({
    opacity: avatarOpacity.value,
    transform: [{ scale: avatarScale.value }],
  }));

  const textStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
    transform: [{ translateY: textTranslateY.value }],
  }));

  const buttonsStyle = useAnimatedStyle(() => ({
    opacity: buttonsOpacity.value,
    transform: [{ translateY: buttonsTranslateY.value }],
  }));

  const socialStyle = useAnimatedStyle(() => ({
    opacity: socialOpacity.value,
  }));

  const openLink = (url: string) => Linking.openURL(url);

  return (
      <ScrollView contentContainerStyle={styles.container} >
      {/* Profile Image Section */}
      <Animated.View style={[styles.avatarContainer, avatarStyle]}>
        <Image
          source={require('../../../assets/images/profile.png')}
          style={styles.avatar}
        />
        <View style={styles.avatarGlow} />
      </Animated.View>

      {/* Intro Text Section */}
      <Animated.View style={[styles.textContainer, textStyle]}>
        <View style={styles.greetingRow}>
          <Text style={styles.greeting}>হ্যালো, আমি</Text>
          <FontAwesome name="hand-peace-o" size={15} color="#38BDF8" />
        </View>

        <Text style={styles.name}>Md Mahi Alam</Text>

        <Text style={styles.title}>
          Full-Stack Developer | React Native Expert
        </Text>

        <Text style={styles.bio}>
          আমি ইউজার-ফ্রেন্ডলি মোবাইল অ্যাপ এবং ওয়েব অ্যাপ্লিকেশন তৈরি করতে
          ভালোবাসি। নতুন নতুন টেকনোলজি শেখা এবং প্রবলেম সলভ করা আমার প্যাশন।
        </Text>

        <TouchableOpacity
          style={styles.contactRow}
          activeOpacity={0.7}
          onPress={() => openLink('tel:01979922268')}
        >
          <Feather name="phone" size={14} color="#38BDF8" />
          <Text style={styles.contactText}>01979922268</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contactRow}
          activeOpacity={0.7}
          onPress={() => openLink('mailto:mahialam407@gmail.com')}
        >
          <Feather name="mail" size={14} color="#38BDF8" />
          <Text style={styles.contactText}>mahialam407@gmail.com</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* Call to Action Buttons */}

        <Animated.View style={[styles.buttonGroup, buttonsStyle, ]} >
        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.8}
           onPress={() => openLink('tel:01979922268')}
        >
          <Feather name="send" size={16} color="#0F172A" />
          <Text style={styles.primaryButtonText}>যোগাযোগ করুন</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          activeOpacity={0.8}
          onPress={() => {}}
        >
          <Feather name="folder" size={16} color="#F8FAFC" />
          <Text style={styles.secondaryButtonText}>পোর্টফোলিও দেখুন</Text>
        </TouchableOpacity>
      </Animated.View>


      {/* Social Links Badge */}
      <Animated.View style={[styles.socialContainer, socialStyle]}>
        <TouchableOpacity
          style={styles.badge}
          activeOpacity={0.7}
          onPress={() => openLink('https://github.com/')}
        >
          <FontAwesome name="github" size={14} color="#94A3B8" />
          <Text style={styles.badgeText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.badge}
          activeOpacity={0.7}
          onPress={() => openLink('https://linkedin.com/')}
        >
          <FontAwesome name="linkedin" size={14} color="#94A3B8" />
          <Text style={styles.badgeText}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.badge}
          activeOpacity={0.7}
          onPress={() => openLink('https://twitter.com/')}
        >
          <FontAwesome name="twitter" size={14} color="#94A3B8" />
          <Text style={styles.badgeText}>Twitter</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  avatarContainer: {
    marginBottom: 24,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#38BDF8',
    padding: 4,
    shadowColor: '#38BDF8',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },

  avatarGlow: {
    position: 'absolute',
    top: -6,
    left: -6,
    right: -6,
    bottom: -6,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.3)',
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },

  textContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },

  greetingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },

  greeting: {
    fontSize: 16,
    color: '#38BDF8',
    fontWeight: '600',
  },

  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F8FAFC',
    marginBottom: 8,
    letterSpacing: 0.3,
  },

  title: {
    fontSize: 16,
    color: '#94A3B8',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 16,
  },

  bio: {
    fontSize: 14,
    color: '#CBD5E1',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 12,
    marginBottom: 16,
  },

  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
  },

  contactText: {
    fontSize: 13,
    color: '#38BDF8',
    fontWeight: '500',
  },

  buttonGroup: {
    flexDirection: 'row',
    gap: 12,
      marginBottom: 40,
    width: '100%'
  },

    primaryButton: {
  width: '50%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  backgroundColor: '#38BDF8',
  paddingVertical: 14,
  borderRadius: 12,
},

  primaryButtonText: {
    color: '#0F172A',
    fontWeight: 'bold',
    fontSize: 15,
  },

    secondaryButton: {
  width: '50%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
        gap: 8,
  paddingHorizontal:10,
  borderWidth: 1,
  borderColor: '#475569',
  paddingVertical: 14,
  borderRadius: 12,
},

  secondaryButtonText: {
    color: '#F8FAFC',
    fontWeight: '600',
    fontSize: 15,
  },

  socialContainer: {
    flexDirection: 'row',
    gap: 10,
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#1E293B',
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#334155',
  },

  badgeText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '500',
  },
});