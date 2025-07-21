# 📱 React Native Learn

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

</div>

Ce projet est un ensemble d'applications React Native développées avec Expo et TypeScript. Il contient trois applications distinctes pour apprendre différents aspects du développement mobile.

## 🚀 Structure du Projet

Le projet est divisé en trois applications principales :

### 🔐 1. Connect App
Une application de connexion/inscription avec les fonctionnalités suivantes :
- Page de connexion (Login)
- Page d'inscription (Register)
- Navigation entre les écrans
- Interface utilisateur moderne avec composants réutilisables

Technologies utilisées :
- Expo Router pour la navigation
- TypeScript pour le typage statique
- Composants personnalisés pour les entrées de texte

### 🎮 2. Game Store
Une application de magasin de jeux vidéo comprenant :
- Page d'accueil avec les jeux tendances
- Système de navigation par onglets
- Pages Découverte, Notifications et Paramètres
- Affichage des nouveaux jeux et des catégories
- Cartes de jeux interactives

Technologies utilisées :
- Expo Router avec système d'onglets
- Composants personnalisés pour les cartes de jeux
- Gestion des données avec fichier Data.tsx

### ✅ 3. Todo App
Une application de gestion de tâches incluant :
- Liste des tâches
- Ajout de nouvelles tâches
- Système de navigation par onglets
- Composant modal pour l'ajout de tâches
- Stockage local des données

Technologies utilisées :
- Expo Router pour la navigation
- Stockage local avec le système de storage
- Composants modaux personnalisés

## 🚀 Comment démarrer

Chaque application peut être lancée individuellement en suivant ces étapes :

### 📱 Prérequis
- Node.js installé sur votre machine
- Expo Go installé sur votre téléphone ou un émulateur Android/iOS sur votre ordinateur

### 🛠️ Installation et lancement

1. **Accéder au dossier de l'application souhaitée :**
```bash
cd [nom-de-l-app]  # connect-app, game-store, ou todo-app
```

2. **Installer les dépendances :**
```bash
npm install
```

3. **Lancer l'application :**
```bash
npx expo start
```

4. **Options de lancement :**
- Scannez le QR code avec l'app Expo Go (Android) ou l'app Camera (iOS)
- Appuyez sur 'a' dans le terminal pour ouvrir sur un émulateur Android
- Appuyez sur 'i' dans le terminal pour ouvrir sur un simulateur iOS

## 📈 Version
- Connect App: 0.0.1
- Game Store: 0.0.1
- Todo App: 0.2.1

## 🛠️ Technologies Communes

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=flat-square&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)

</div>

- 📱 React Native avec Expo
- 📘 TypeScript
- 🔄 Expo Router pour la navigation
- 🎨 @expo/vector-icons pour les icônes
- 🧭 React Navigation pour la gestion de la navigation
