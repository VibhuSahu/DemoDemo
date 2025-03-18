import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('swachhata.db');

export const initDatabase = () => {
  db.transaction(tx => {
    // Complaints table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS complaints (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category TEXT NOT NULL,
        description TEXT,
        location TEXT NOT NULL,
        latitude REAL,
        longitude REAL,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        image_uri TEXT
      )`
    );

    // Events table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        location TEXT NOT NULL,
        date DATETIME NOT NULL,
        type TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`
    );

    // User profile table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS user_profile (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        address TEXT,
        phone TEXT,
        profile_image TEXT
      )`
    );

    // Surveys table
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS surveys (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`
    );
  });
};

export const addComplaint = (complaint: any) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO complaints (category, description, location, latitude, longitude, image_uri)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [
          complaint.category,
          complaint.description,
          complaint.location,
          complaint.latitude,
          complaint.longitude,
          complaint.imageUri
        ],
        (_, result) => resolve(result),
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

export const getComplaints = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM complaints ORDER BY created_at DESC',
        [],
        (_, { rows: { _array } }) => resolve(_array),
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

export const updateProfile = (profile: any) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT OR REPLACE INTO user_profile (name, email, address, phone, profile_image)
         VALUES (?, ?, ?, ?, ?)`,
        [
          profile.name,
          profile.email,
          profile.address,
          profile.phone,
          profile.profileImage
        ],
        (_, result) => resolve(result),
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};

export const getProfile = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM user_profile LIMIT 1',
        [],
        (_, { rows: { _array } }) => resolve(_array[0]),
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
};