import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Camera, Mail, MapPin, Bell } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImage} />
          <TouchableOpacity style={styles.cameraButton}>
            <Camera size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Swachhata Citizen</Text>
        <Text style={styles.subtitle}>Post a complaint in your locality to become a{'\n'}Swachhata Champion</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Your Details</Text>
        <View style={styles.detailRow}>
          <Mail size={20} color="#666" />
          <Text style={styles.detailText}>user@example.com</Text>
          <TouchableOpacity>
            <Text style={styles.editButton}>EDIT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.detailRow}>
          <MapPin size={20} color="#666" />
          <Text style={styles.detailText}>2/3, Cunningham Road, Vasant Nagar, Bengaluru Urban, IN, India</Text>
        </View>
      </View>

      <View style={styles.optionsContainer}>
        <Text style={styles.sectionTitle}>You can also</Text>
        <TouchableOpacity style={styles.optionRow}>
          <Bell size={20} color="#666" />
          <Text style={styles.optionText}>Check Notifications</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2B796C',
    padding: 20,
    alignItems: 'center',
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  cameraButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#1A5653',
    padding: 8,
    borderRadius: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  detailText: {
    flex: 1,
    marginLeft: 10,
    color: '#666',
  },
  editButton: {
    color: '#2B796C',
    fontWeight: '600',
  },
  optionsContainer: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 10,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionText: {
    marginLeft: 10,
    color: '#666',
  },
});