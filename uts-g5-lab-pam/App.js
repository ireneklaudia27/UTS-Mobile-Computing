
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import InfoCard from './src/components/InfoCard.js';

// Dataset mahasiswa
const students = [
  { id: '1', name: 'Alifia Putri', npm: '2431001', major: 'Sistem Informasi' },
  { id: '2', name: 'Budi Santoso', npm: '2431002', major: 'Sistem Informasi' },
  { id: '3', name: 'Citra Dewi', npm: '2431003', major: 'Sistem Informasi' },
  { id: '4', name: 'Dimas Anggara', npm: '2431004', major: 'Sistem Informasi' },
  { id: '5', name: 'Eka Nur Safitri', npm: '2431005', major: 'Sistem Informasi' },
  { id: '6', name: 'Fajar Pratama', npm: '2431006', major: 'Sistem Informasi' },
];

// Header aplikasi
function AppHeader({ keyword, setKeyword, resultCount }) {
  return (
    <View>
      <View style={styles.hero}>
        <Text style={styles.eyebrow}>MOBILE COMPUTING</Text>
        <Text style={styles.heroTitle}>Student Directory</Text>
        <Text style={styles.heroSubtitle}>
          Informasi mahasiswa dalam satu aplikasi.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Status Tugas</Text>

      <InfoCard
        title="Tugas Mobile Computing"
        status="selesai"
        onPress={() =>
          Alert.alert(
            'Tugas Mobile Computing',
            'Status: Selesai\n\nTugas telah diselesaikan sesuai instruksi yang diberikan.'
          )
        }
      />

      <InfoCard
        title="Pengembangan Aplikasi"
        status="proses"
        onPress={() =>
          Alert.alert(
            'Pengembangan Aplikasi',
            'Status: Dalam Proses\n\nAplikasi sedang dikembangkan dan disempurnakan melalui pengujian fitur, pemeriksaan tampilan, serta perbaikan jika ditemukan kesalahan.'
          )
        }
      />

      <Text style={styles.sectionTitle}>Daftar Mahasiswa</Text>
      <Text style={styles.sectionSubtitle}>
        Cari mahasiswa berdasarkan nama, NPM, atau program studi.
      </Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Cari mahasiswa..."
        placeholderTextColor="#8A8F98"
        value={keyword}
        onChangeText={setKeyword}
        autoCapitalize="none"
        clearButtonMode="while-editing"
      />

      <View style={styles.resultHeader}>
        <Text style={styles.resultTitle}>Hasil Pencarian</Text>
        <View style={styles.resultBadge}>
          <Text style={styles.resultCount}>
            {resultCount} mahasiswa
          </Text>
        </View>
      </View>
    </View>
  );
}

// Tampilan setiap mahasiswa
function StudentItem({ item }) {
  return (
    <View style={styles.studentCard}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {item.name.charAt(0).toUpperCase()}
        </Text>
      </View>

      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>{item.name}</Text>
        <Text style={styles.studentNpm}>NPM: {item.npm}</Text>
        <Text style={styles.studentMajor}>{item.major}</Text>
      </View>
    </View>
  );
}

export default function App() {
  const [keyword, setKeyword] = useState('');

  // Filter mahasiswa berdasarkan nama, NPM, atau program studi
  const filteredStudents = students.filter((student) => {
    const searchText = keyword.trim().toLowerCase();

    return (
      student.name.toLowerCase().includes(searchText) ||
      student.npm.toLowerCase().includes(searchText) ||
      student.major.toLowerCase().includes(searchText)
    );
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#243447" />

      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StudentItem item={item} />}
        ListHeaderComponent={
          <AppHeader
            keyword={keyword}
            setKeyword={setKeyword}
            resultCount={filteredStudents.length}
          />
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Data tidak ditemukan!
          </Text>
        }
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F4EF',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 20,
    flexGrow: 1,
  },
  hero: {
    backgroundColor: '#243447',
    padding: 24,
    borderRadius: 22,
    marginBottom: 24,
  },
  eyebrow: {
    color: '#B8C9C0',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 10,
  },
  heroTitle: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '700',
    marginBottom: 8,
  },
  heroSubtitle: {
    color: '#D8DFE5',
    fontSize: 14,
    lineHeight: 21,
  },
  sectionTitle: {
    color: '#243447',
    fontSize: 19,
    fontWeight: '700',
    marginTop: 4,
    marginBottom: 12,
  },
  sectionSubtitle: {
    color: '#707781',
    fontSize: 13,
    lineHeight: 19,
    marginTop: -4,
    marginBottom: 14,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E3DF',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 13,
    fontSize: 14,
    color: '#243447',
    marginBottom: 16,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  resultTitle: {
    color: '#243447',
    fontSize: 14,
    fontWeight: '700',
  },
  resultBadge: {
    backgroundColor: '#E0EAE2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  resultCount: {
    color: '#365A46',
    fontSize: 12,
    fontWeight: '700',
  },
  studentCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E9E9E3',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#E0EAE2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  avatarText: {
    color: '#365A46',
    fontSize: 19,
    fontWeight: '700',
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    color: '#243447',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  studentNpm: {
    color: '#626B75',
    fontSize: 12,
    marginBottom: 3,
  },
  studentMajor: {
    color: '#858B92',
    fontSize: 12,
  },
  emptyText: {
    color: '#707781',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 28,
  },
});
