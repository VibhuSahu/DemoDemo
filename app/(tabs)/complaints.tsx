import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { List, ThumbsUp, MapPin, Building, User, Search } from 'lucide-react-native';

export default function ComplaintsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card}>
          <List size={24} color="#fff" />
          <Text style={styles.cardText}>Posted</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.card, { backgroundColor: '#4A148C' }]}>
          <ThumbsUp size={24} color="#fff" />
          <Text style={styles.cardText}>Voted</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.card, { backgroundColor: '#00695C' }]}>
          <MapPin size={24} color="#fff" />
          <Text style={styles.cardText}>Nearby</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.card, { backgroundColor: '#1A237E' }]}>
          <Building size={24} color="#fff" />
          <Text style={styles.cardText}>City</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.card, { backgroundColor: '#D84315' }]}>
          <User size={24} color="#fff" />
          <Text style={styles.cardText}>Your Activity</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.card, { backgroundColor: '#33691E' }]}>
          <Search size={24} color="#fff" />
          <Text style={styles.cardText}>Search</Text>
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  card: {
    width: '45%',
    aspectRatio: 1.5,
    margin: '2.5%',
    backgroundColor: '#37474F',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});