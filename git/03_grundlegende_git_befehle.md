# Grundlegende Git-Befehle

Git ist ein verteiltes Versionskontrollsystem, das es Entwicklern ermöglicht, Änderungen im Quellcode nachzuverfolgen und effizient zusammenzuarbeiten. Hier sind einige der grundlegenden Git-Befehle, die Sie kennen sollten, um mit Git zu starten.

## Installation

Bevor Sie Git-Befehle verwenden können, müssen Sie Git installieren. Besuchen Sie [git-scm.com](https://git-scm.com/), um die neueste Version für Ihr Betriebssystem herunterzuladen und zu installieren.

## Erste Schritte

### Git initialisieren

Um ein neues Git-Repository zu erstellen, navigieren Sie in das Verzeichnis Ihres Projekts und führen Sie den folgenden Befehl aus:

```sh
git init
```

### Git-Klonen

Um ein bestehendes Repository zu klonen, verwenden Sie den folgenden Befehl:

```sh
git clone <repository-url>
```

### Änderungen verfolgen

Um Änderungen zu verfolgen, müssen Sie Dateien zur sogenannten "Staging Area" hinzufügen:

```sh
git add <dateiname>
```

Um alle Änderungen in Ihrem Projekt zu verfolgen, verwenden Sie:

```sh
git add .
```

### Änderungen committen

Nachdem Sie Änderungen zur Staging Area hinzugefügt haben, können Sie diese committen:

```sh
git commit -m "Beschreibung der Änderung"
```

### Änderungen pushen

Um Ihre Änderungen in ein entferntes Repository zu übertragen, verwenden Sie:

```sh
git push origin <branch-name>
```

### Änderungen pullen

Um die neuesten Änderungen aus einem entfernten Repository zu holen, verwenden Sie:

```sh
git pull origin <branch-name>
```

## Branching und Merging

### Neuen Branch erstellen

Um einen neuen Branch zu erstellen und zu diesem zu wechseln, verwenden Sie:

```sh
git checkout -b <branch-name>
```

### Branch zusammenführen

Um einen Branch in den aktuellen Branch zu integrieren, verwenden Sie:

```sh
git merge <branch-name>
```

## Konfliktlösung

### Merge-Konflikte lösen

Wenn beim Zusammenführen von Branches Konflikte auftreten, müssen Sie diese manuell lösen. Bearbeiten Sie die betroffenen Dateien, um die Konflikte zu beseitigen, und committen Sie die Änderungen:

```sh
git add <konflikt-dateien>
git commit -m "Konflikte gelöst"
```

## Zusammenarbeit

### Remote Repository hinzufügen

Um ein entferntes Repository hinzuzufügen, verwenden Sie:

```sh
git remote add origin <repository-url>
```

### Branches anzeigen

Um alle Branches anzuzeigen, verwenden Sie:

```sh
git branch
```

### Branch löschen

Um einen Branch zu löschen, verwenden Sie:

```sh
git branch -d <branch-name>
```

## Fazit

Dies sind einige der grundlegenden Git-Befehle, die Ihnen helfen werden, Ihre Projekte mit Git zu verwalten. Übung macht den Meister – experimentieren Sie mit diesen Befehlen und erweitern Sie Ihr Wissen über Git, um ein effizienter Entwickler zu werden.

Weitere Informationen finden Sie in der [Git-Dokumentation](https://git-scm.com/doc) und im [Pro Git Buch](https://git-scm.com/book/en/v2).
