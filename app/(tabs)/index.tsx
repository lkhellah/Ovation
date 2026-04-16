//  Home tab 
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';


export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* Hero */}
      <View style={styles.hero}>
        <Image
          source={require('../../assets/images/ovation.jpeg')}
          style={styles.image}
        />
        <View style={styles.overlay} />

        <View style={styles.heroText}>
          <Text style={styles.logo}>Ovation</Text>
          <Text style={styles.tagline}>COFFEE & TEA</Text>
        </View>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to order ahead and earn rewards</Text>

        <TextInput placeholder="Email address" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.forgot}>Forgot password?</Text>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>Create Account</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5EDE4' },

  hero: { height: 280, position: 'relative' },
  image: { width: '100%', height: '100%' },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(139,38,53,0.4)'
  },

  heroText: {
    position: 'absolute',
    top: '40%',
    alignSelf: 'center',
    alignItems: 'center'
  },

  logo: {
    fontSize: 42,
    color: 'white',
    fontWeight: '300'
  },

  tagline: {
    color: 'white',
    letterSpacing: 4,
    marginTop: 5
  },

  form: {
    padding: 24
  },

  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#3E2723'
  },

  subtitle: {
    marginTop: 4,
    marginBottom: 20,
    color: '#6D4C41'
  },

  input: {
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0D4C8'
  },

  button: {
    backgroundColor: '#8B2635',
    padding: 14,
    borderRadius: 12,
    marginTop: 10
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600'
  },

  forgot: {
    textAlign: 'center',
    marginTop: 12,
    color: '#8B2635'
  },

  divider: {
    height: 1,
    backgroundColor: '#E0D4C8',
    marginVertical: 20
  },

  secondaryButton: {
    borderWidth: 2,
    borderColor: '#8B2635',
    padding: 14,
    borderRadius: 12
  },

  secondaryText: {
    color: '#8B2635',
    textAlign: 'center'
  }
});