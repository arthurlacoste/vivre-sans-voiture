<p align="center">
  <img src="images/social-card.jpg" height="400">
  <h1 align="center">Vivre sans voiture</h1>
  <p align="center">par Arthur Lacoste<p>
</p>

Ce dépôt est dédié au livre _Vivre sans voiture_ de [Arthur Lacoste](https://arthurlacoste.com).

- Aller sur [le site web](https://sansvoiture.fr)
- Vous pouvez [pré-commander le livre](https://gumroad.com/l/vivre-sans-voiture) et ainsi aider le projet
- Vous pouvez [proposer vos idées](https://github.com/arthurlacoste/vivre-sans-voiture/issues)

## Installation

```shell
git clone https://github.com/arthurlacoste/vivre-sans-voiture/
npm install grunt -g
npm install
```

Pour créer un serveur temporaire :

```
grunt serve
```


## Générer le livre au format ebook

Pré-requis :
- [Installer pandoc](https://pandoc.org/installing.html)

Les fichiers seront publiés dans le répertoire `dist`.

Pour créer au format EPUB :

```shell
npm run build
```

Pour créer au format ODT :

```shell
npm run build:odt
```

Pour générer un fichier au format PDF, il faut au préalable disposer de `xelatex`, le moteur Latex utilisé.

```shell
npm run build:pdf
```
