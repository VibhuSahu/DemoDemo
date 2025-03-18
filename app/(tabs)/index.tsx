import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MessageSquare, MapPin, ThumbsUp, MessageCircle } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImage} />
        <Text style={styles.welcomeText}>
          Good Afternoon, Welcome{'\n'}
          <Text style={styles.citizenText}>Swachhata Citizen</Text>
        </Text>
      </View>

      <View style={styles.complaintCard}>
        <Text style={styles.complaintTitle}>Overflow of Sewerage or Storm Water reported</Text>
        <Text style={styles.complaintId}>ID: W0210C28125506</Text>
        <View style={styles.locationContainer}>
          <MapPin size={16} color="#666" />
          <Text style={styles.locationText}>
            14, 2nd Main Road, Cholanayakanahalli, Bengaluru Urban, IN, India
          </Text>
        </View>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusButtonText}>View Status</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionGrid}>
        <TouchableOpacity style={styles.actionItem}>
          <MessageSquare size={24} color="#2B796C" />
          <Text style={styles.actionText}>Post A{'\n'}Complaint</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <ThumbsUp size={24} color="#FF9800" />
          <Text style={styles.actionText}>Rate Public{'\n'}Toilet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <MapPin size={24} color="#4CAF50" />
          <Text style={styles.actionText}>SBM Toilet{'\n'}Locator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <MessageCircle size={24} color="#2B796C" />
          <Text style={styles.actionText}>Provide{'\n'}Feedback</Text>
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
    padding: 20,
    backgroundColor: '#2B796C',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginRight: 15,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 16,
  },
  citizenText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  complaintCard: {
    margin: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  complaintTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  complaintId: {
    color: '#666',
    marginVertical: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationText: {
    marginLeft: 5,
    color: '#666',
    flex: 1,
  },
  statusButton: {
    backgroundColor: '#2B796C',
    padding: 8,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  statusButtonText: {
    color: '#fff',
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  actionItem: {
    width: '45%',
    backgroundColor: '#fff',
    margin: '2.5%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
  },
  actionText: {
    marginTop: 10,
    textAlign: 'center',
    color: '#333',
  },
});