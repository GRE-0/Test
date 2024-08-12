# Git-Aufgaben für Anfänger

## Aufgabe 1: Git installieren
- Installieren Sie Git auf Ihrem Computer.
- Überprüfen Sie die Installation, indem Sie den Befehl `git --version` im Terminal ausführen.

## Aufgabe 2: Git konfigurieren
- Konfigurieren Sie Ihren Namen und Ihre E-Mail-Adresse:
  ```sh
  git config --global user.name "Ihr Name"
  git config --global user.email "ihr_email@example.com"
  ```

## Aufgabe 3: Neues Repository erstellen
- Erstellen Sie ein neues Verzeichnis auf Ihrem Computer.
- Initialisieren Sie ein Git-Repository in diesem Verzeichnis:
  ```sh
  git init
  ```

## Aufgabe 4: README.md erstellen
- Erstellen Sie eine Datei namens `README.md` im Stammverzeichnis des Repositorys.
- Fügen Sie einen Titel und eine kurze Beschreibung Ihres Projekts in die `README.md` Datei ein.

## Aufgabe 5: Dateien zur Staging Area hinzufügen
- Fügen Sie die `README.md` Datei zur Staging Area hinzu:
  ```sh
  git add README.md
  ```

## Aufgabe 6: Erste Änderungen committen
- Committen Sie die Änderungen mit einer sinnvollen Nachricht:
  ```sh
  git commit -m "Erstes Commit: README.md hinzugefügt"
  ```

## Aufgabe 7: Repository zu GitHub pushen
- Erstellen Sie ein neues Repository auf GitHub.
- Fügen Sie das entfernte Repository hinzu:
  ```sh
  git remote add origin https://github.com/IhrBenutzername/IhrRepository.git
  ```
- Pushen Sie die Änderungen:
  ```sh
  git push -u origin main
  ```

## Aufgabe 8: Neue Branch erstellen
- Erstellen Sie eine neue Branch und wechseln Sie zu dieser:
  ```sh
  git checkout -b feature/zweig
  ```

## Aufgabe 9: Änderungen in neuer Branch vornehmen
- Fügen Sie eine neue Datei namens `index.html` hinzu.
- Committen Sie die Änderungen in der neuen Branch:
  ```sh
  git add index.html
  git commit -m "Neue Datei index.html hinzugefügt"
  ```

## Aufgabe 10: Änderungen zur Hauptbranch mergen
- Wechseln Sie zurück zur Hauptbranch:
  ```sh
  git checkout main
  ```
- Mergen Sie die Änderungen aus der neuen Branch:
  ```sh
  git merge feature/zweig
  ```

## Aufgabe 11: Branch löschen
- Löschen Sie die Branch, die Sie nicht mehr benötigen:
  ```sh
  git branch -d feature/zweig
  ```

## Aufgabe 12: Git-Status überprüfen
- Überprüfen Sie den aktuellen Status Ihres Repositorys:
  ```sh
  git status
  ```

## Aufgabe 13: Git-Log anzeigen
- Zeigen Sie die Historie Ihrer Commits an:
  ```sh
  git log
  ```

## Aufgabe 14: Änderungen rückgängig machen
- Machen Sie Änderungen an einer Datei und fügen Sie sie zur Staging Area hinzu.
- Machen Sie die hinzugefügten Änderungen rückgängig:
  ```sh
  git reset HEAD <dateiname>
  ```

## Aufgabe 15: Git-Diff verwenden
- Zeigen Sie die Unterschiede zwischen den letzten Änderungen und dem aktuellen Status an:
  ```sh
  git diff
  ```

## Aufgabe 16: .gitignore Datei erstellen
- Erstellen Sie eine `.gitignore` Datei und fügen Sie Dateien oder Verzeichnisse hinzu, die Git ignorieren soll.

## Aufgabe 17: Remote-Repository klonen
- Klonen Sie ein bestehendes Repository von GitHub auf Ihren Computer:
  ```sh
  git clone https://github.com/IhrBenutzername/IhrRepository.git
  ```

## Aufgabe 18: Tags erstellen und pushen
- Erstellen Sie einen Tag für einen bestimmten Commit:
  ```sh
  git tag -a v1.0 -m "Version 1.0"
  ```
- Pushen Sie die Tags zu GitHub:
  ```sh
  git push origin --tags
  ```

## Aufgabe 19: Änderungen staschen
- Stashen Sie Ihre aktuellen Änderungen:
  ```sh
  git stash
  ```
- Zeigen Sie die gestashten Änderungen an:
  ```sh
  git stash list
  ```
- Wenden Sie die gestashten Änderungen wieder an:
  ```sh
  git stash apply
  ```

## Aufgabe 20: Konflikte lösen
- Erstellen Sie absichtlich einen Merge-Konflikt und lösen Sie diesen manuell.
- Committen Sie die Konfliktlösung.
