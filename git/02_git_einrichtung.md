# Git auf dem Computer einrichten

## Einleitung

Git ist ein leistungsfähiges Versionskontrollsystem, das eine präzise Nachverfolgung von Änderungen im Quellcode ermöglicht. Bevor Sie Git effektiv nutzen können, müssen Sie es auf Ihrem Computer einrichten und konfigurieren. Diese Anleitung führt Sie durch die grundlegende Einrichtung und Konfiguration von Git.

## Git installieren

### Windows

1. Laden Sie die neueste Version von [Git für Windows](https://gitforwindows.org/) herunter.
2. Führen Sie den Installer aus und folgen Sie den Anweisungen auf dem Bildschirm.
3. Wählen Sie die Standardoptionen während der Installation.

### macOS

Öffnen Sie das Terminal und installieren Sie Git über Homebrew:

```sh
brew install git
```

Alternativ können Sie Git direkt von der [offiziellen Website](https://git-scm.com/) herunterladen.

### Linux

Öffnen Sie das Terminal und installieren Sie Git über den Paketmanager Ihrer Distribution:

**Debian/Ubuntu:**

```sh
sudo apt-get install git
```

**Fedora:**

```sh
sudo dnf install git
```

**Arch Linux:**

```sh
sudo pacman -S git
```

## Git konfigurieren

Nach der Installation von Git sollten Sie einige grundlegende Konfigurationen vornehmen. Diese Einstellungen werden in der globalen Git-Konfigurationsdatei gespeichert.

### Name und E-Mail-Adresse

Git verwendet diese Informationen, um die Autoren von Commits zu identifizieren. Führen Sie die folgenden Befehle aus, um Ihren Namen und Ihre E-Mail-Adresse zu konfigurieren:

```sh
git config --global user.name "Ihr Name"
git config --global user.email "ihr_email@example.com"
```

### End-of-Line (EOL) Konfiguration

Unterschiedliche Betriebssysteme verwenden unterschiedliche Zeichen für das Zeilenende (EOL). Git kann diese Unterschiede handhaben, um Konflikte zu vermeiden. Konfigurieren Sie Git wie folgt:

**Windows:**

```sh
git config --global core.autocrlf true
```

**macOS und Linux:**

```sh
git config --global core.autocrlf input
```

Diese Einstellungen stellen sicher, dass Git die Zeilenendungen beim Check-out und Check-in automatisch konvertiert.

### Standardeditor

Git benötigt einen Texteditor für die Eingabe von Commit-Nachrichten. Sie können den Standardeditor wie folgt festlegen:

**Vim:**

```sh
git config --global core.editor vim
```

**Nano:**

```sh
git config --global core.editor nano
```

**Visual Studio Code:**

```sh
git config --global core.editor "code --wait"
```

### Farbausgabe aktivieren

Um die Lesbarkeit von Git-Ausgaben zu verbessern, können Sie die Farbausgabe aktivieren:

```sh
git config --global color.ui auto
```

### Alias für häufig verwendete Befehle

Sie können Aliase für häufig verwendete Git-Befehle erstellen, um Ihre Arbeit zu beschleunigen. Zum Beispiel:

```sh
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.br branch
```

## Überprüfung der Konfiguration

Um Ihre Konfigurationseinstellungen zu überprüfen, verwenden Sie:

```sh
git config --list
```

## Fazit

Die Einrichtung und Konfiguration von Git ist ein wichtiger erster Schritt, um das Versionskontrollsystem effektiv zu nutzen. Durch die richtige Konfiguration können Sie Ihre Arbeitsabläufe optimieren und typische Probleme vermeiden. Weitere Informationen finden Sie in der [offiziellen Git-Dokumentation](https://git-scm.com/doc).
