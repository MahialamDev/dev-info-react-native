import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: menuOpen ? 0 : width,
      duration: 280,
      useNativeDriver: true,
    }).start();
  }, [menuOpen]);

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: width,
      duration: 220,
      useNativeDriver: true,
    }).start(() => {
      setMenuOpen(false);
    });
  };

  return (
    <>
      {/* Navbar */}
      <View style={styles.navbar}>
        {/* Logo */}
        <Link href="/" asChild>
          <TouchableOpacity style={styles.logoContainer}>
            <View style={styles.logoIcon}>
              <Text style={styles.logoSymbol}>{'</>'}</Text>
            </View>

            <View>
              <Text style={styles.logo}>Mahi Alam</Text>
              <Text style={styles.role}>Developer</Text>
            </View>
          </TouchableOpacity>
        </Link>

        {/* Right buttons */}
        <View style={styles.navigation}>
          <Link href="/" asChild>
            <TouchableOpacity style={styles.navItem}>
              <Feather name="home" size={18} color="#38BDF8" />
            </TouchableOpacity>
          </Link>

          <Link href="/about" asChild>
            <TouchableOpacity style={styles.navItem}>
              <Feather name="user" size={18} color="#CBD5E1" />
            </TouchableOpacity>
          </Link>

          {/* Menu */}
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => setMenuOpen(true)}
          >
            <Feather name="menu" size={20} color="#F8FAFC" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Drawer */}
      <Modal
        visible={menuOpen}
        transparent
        animationType="none"
        onRequestClose={closeMenu}
      >
        <View style={styles.modalContainer}>

          {/* Dark overlay */}
          <Pressable style={styles.overlay} onPress={closeMenu} />

          {/* Drawer */}
          <Animated.View
            style={[
              styles.drawer,
              {
                transform: [{ translateX: slideAnim }],
              },
            ]}
          >
            {/* Drawer Header */}
            <View style={styles.drawerHeader}>
              <View>
                <Text style={styles.drawerTitle}>Menu</Text>
                <Text style={styles.drawerSubtitle}>
                  Explore my portfolio
                </Text>
              </View>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={closeMenu}
              >
                <Feather name="x" size={22} color="#F8FAFC" />
              </TouchableOpacity>
            </View>

            {/* Menu Items */}
            <View style={styles.menuList}>

              <Link href="/" asChild>
                <TouchableOpacity
                  style={styles.drawerItem}
                  onPress={closeMenu}
                >
                  <View style={styles.itemIcon}>
                    <Feather name="home" size={20} color="#38BDF8" />
                  </View>

                  <View>
                    <Text style={styles.itemTitle}>Home</Text>
                    <Text style={styles.itemSubtitle}>
                      Welcome to my portfolio
                    </Text>
                  </View>
                </TouchableOpacity>
              </Link>

              <Link href="/about" asChild>
                <TouchableOpacity
                  style={styles.drawerItem}
                  onPress={closeMenu}
                >
                  <View style={styles.itemIcon}>
                    <Feather name="user" size={20} color="#A78BFA" />
                  </View>

                  <View>
                    <Text style={styles.itemTitle}>About Me</Text>
                    <Text style={styles.itemSubtitle}>
                      Learn more about me
                    </Text>
                  </View>
                </TouchableOpacity>
              </Link>

              <Link href="/explore" asChild>
                <TouchableOpacity
                  style={styles.drawerItem}
                  onPress={closeMenu}
                >
                  <View style={styles.itemIcon}>
                    <Feather name="code" size={20} color="#34D399" />
                  </View>

                  <View>
                    <Text style={styles.itemTitle}>Projects</Text>
                    <Text style={styles.itemSubtitle}>
                      My recent projects
                    </Text>
                  </View>
                </TouchableOpacity>
              </Link>

            </View>

            {/* Bottom */}
            <View style={styles.drawerFooter}>
              <Text style={styles.footerText}>
                Mahi Alam Rahat
              </Text>

              <Text style={styles.footerRole}>
                Full-Stack Developer
              </Text>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 68,
    paddingHorizontal: 20,
    backgroundColor: '#0F172A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B',
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  logoIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#38BDF8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoSymbol: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '900',
  },

  logo: {
    color: '#F8FAFC',
    fontSize: 17,
    fontWeight: '700',
  },

  role: {
    color: '#64748B',
    fontSize: 10,
    marginTop: 1,
  },

  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  navItem: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#334155',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Drawer

  modalContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },

  drawer: {
    width: width * 0.82,
    backgroundColor: '#0F172A',
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 30,
    borderLeftWidth: 1,
    borderLeftColor: '#1E293B',
  },

  drawerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#1E293B',
  },

  drawerTitle: {
    color: '#F8FAFC',
    fontSize: 26,
    fontWeight: '800',
  },

  drawerSubtitle: {
    color: '#64748B',
    fontSize: 13,
    marginTop: 4,
  },

  closeButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuList: {
    marginTop: 20,
    gap: 10,
  },

  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    padding: 14,
    borderRadius: 16,
    backgroundColor: '#111C30',
  },

  itemIcon: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemTitle: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: '700',
  },

  itemSubtitle: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 3,
  },

  drawerFooter: {
    marginTop: 'auto',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#1E293B',
  },

  footerText: {
    color: '#38BDF8',
    fontSize: 14,
    fontWeight: '700',
  },

  footerRole: {
    color: '#64748B',
    fontSize: 11,
    marginTop: 3,
  },
});