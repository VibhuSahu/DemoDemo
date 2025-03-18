import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { User, Calendar, Star, Bookmark, List } from 'lucide-react-native';

export default function EventsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.grid}>
        <TouchableOpacity style={[styles.card, { backgroundColor: '#689F38' }]}>
          <User size={24} color="#fff" />
          <Text style={styles.cardText}>Yours</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.card, { backgroundColor: '#D32F2F' }]}>
          <Calendar size={24} color="#fff" />
          <Text style={styles.cardText}>Upcoming</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.card, { backgroundColor: '#EF6C00' }]}>
          <Star size={24} color="#fff" />
          <Text style={styles.cardText}>Popular</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.card, { backgroundColor: '#7B1FA2' }]}>
          <Bookmark size={24} color="#fff" />
          <Text style={styles.cardText}>Bookmarked</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.card, { backgroundColor: '#0288D1' }]}>
          <List size={24} color="#fff" />
          <Text style={styles.cardText}>All</Text>
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