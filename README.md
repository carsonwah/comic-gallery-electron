# Comic Gallery

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A desktop comic gallery app for easily browsing comics on your computer.

## Motivation

- When browsing through folders, Windows/Mac file explorers does not show peek view of the content inside, which is a big pain point when browsing through comic folders.
- This repo aims to provide a good explorer for local comic folders, showing the 1st image in the folder as "Comic Cover".

For example, for the following folder structure:

```
selected_directory/
├── folder1/
│   └── image1.jpg
├── folder2/
│   └── image2.png
├── folder3/
│   └── image3.jpg
├── folder4/
│   └── image4.png
└── folder5/
    └── image5.jpg
```

The electron app will display image 1-5 as a quick preview. When you click on one of the image, it opens files explorer on that folder.

## Demo

![Demo](https://github.com/carsonwah/comic-gallery-electron/blob/main/doc/demo.png?raw=true)

## Download Packaged Application

[GitHub Releases](https://github.com/carsonwah/comic-gallery-electron/releases)

## Technology Stack

- Electron (`webpack-typescript` template)
- Typescript
- React

## Getting Started

```bash
# Install
yarn

# Start local
yarn start

# Building distributables
yarn make

# Publish e.g. to GitHub
# Pre-requisite: Set GITHUB_TOKEN or update authToken in forge.config.ts
yarn publish
```
