# 📱 React Native Learn

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React Navigation](https://img.shields.io/badge/React_Navigation-6B52AE?style=for-the-badge&logo=react&logoColor=white)

</div>

Ce projet est un ensemble d'applications React Native développées avec Expo et TypeScript. Il contient trois applications distinctes pour apprendre différents aspects du développement mobile, chacune mettant en œuvre des fonctionnalités modernes et des designs élégants.

## 🚀 Structure du Projet

Le projet est divisé en trois applications principales :

### 🔐 1. Connect App
Une application de connexion/inscription avec les fonctionnalités suivantes :
- Page d'accueil avec illustration 
- Page de connexion avec authentification sociale
- Page d'inscription 
- Navigation fluide entre les écrans avec animations
- Design moderne avec ombres et effets visuels
- Support multiplateforme (iOS/Android)

Fonctionnalités techniques :
- Composants réutilisables pour les champs de texte
- Intégration des icônes SVG personnalisées
- Validation des formulaires
- Authentification sociale (Google, Apple, Facebook)
- Gestion du clavier avec KeyboardAvoidingView
- Navigation stack avec expo-router

### 🎮 2. Game Store
Une application de magasin de jeux vidéo avec un design moderne comprenant :
- Page d'accueil avec carrousel de jeux tendances
- Système de navigation par onglets (Home, Discover, Account)
- Barre de recherche
- Affichage des nouveaux jeux avec notes et catégories
- Système de catégories interactif avec icônes
- Page de profil utilisateur complète avec édition

Fonctionnalités techniques :
- Composants réutilisables et stylisés
- Gestion d'état avec TypeScript
- Animations et transitions fluides
- Intégration des images et icônes
- Interface utilisateur responsive
- Gestion des thèmes et des couleurs

### ✅ 3. Todo App
Une application de gestion de tâches moderne incluant :
- Dashboard avec statistiques des tâches
- Système de catégorisation (Aujourd'hui, Programmées, Toutes, En retard)
- Ajout et édition de tâches avec modal interactif
- Gestion des priorités et des statuts
- Interface utilisateur sombre élégante
- Stockage local persistant

Fonctionnalités techniques :
- Gestion de formulaires avec React Hook Form
- Stockage local avec AsyncStorage
- Composants modaux personnalisés
- Système de navigation par onglets
- Gestion des états avec TypeScript
- Design System cohérent

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
- Game Store: 0.1.0
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
