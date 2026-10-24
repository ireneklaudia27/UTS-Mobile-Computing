
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function InfoCard({ title, status, onPress }) {
  const isCompleted = status === 'selesai';

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>

        <View
          style={[
            styles.statusBadge,
            isCompleted ? styles.completedBadge : styles.processBadge,
          ]}
        >
          <Text
            style={[
              styles.statusText,
              isCompleted ? styles.completedText : styles.processText,
            ]}
          >
            {isCompleted ? 'Selesai' : 'Dalam Proses'}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.75}
      >
        <Text style={styles.buttonText}>Lihat Detail</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 17,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E9E9E3',
  },
  cardContent: {
    marginBottom: 15,
  },
  cardTitle: {
    color: '#243447',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 10,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 20,
  },
  completedBadge: {
    backgroundColor: '#E0F2E5',
  },
  processBadge: {
    backgroundColor: '#FFF0D9',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '700',
  },
  completedText: {
    color: '#267344',
  },
  processText: {
    color: '#A45B12',
  },
  button: {
    backgroundColor: '#243447',
    paddingVertical: 11,
    paddingHorizontal: 15,
    borderRadius: 11,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});
