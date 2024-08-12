
# Git-Konventionen

## Einleitung

Diese Git-Konventionen sollen sicherstellen, dass unser Code konsistent und gut strukturiert bleibt. Befolgen Sie diese Richtlinien bei der Arbeit mit Git in unseren Projekten.

## Branch-Namen

- **Feature-Branches**: `feature/<beschreibung>`
    - Beispiel: `feature/login-form`
- **Bugfix-Branches**: `bugfix/<beschreibung>`
    - Beispiel: `bugfix/fix-login-error`
- **Hotfix-Branches**: `hotfix/<beschreibung>`
    - Beispiel: `hotfix/critical-security-fix`
- **Release-Branches**: `release/<version>`
    - Beispiel: `release/v1.2.0`

Verwenden Sie beschreibende Namen, um den Zweck des Branches klar zu kennzeichnen.

## Commit-Nachrichten

Commit-Nachrichten sollten klar und prägnant sein. Verwenden Sie die folgende Struktur:

```
<Typ>: <Kurze Beschreibung>

<Optional: Ausführliche Beschreibung>
<Optional: Verlinkte Issues oder Pull-Requests>
```

### Typen

- **feat**: Ein neues Feature
    - Beispiel: `feat: Hinzufügen der Suchfunktion`
- **fix**: Ein Bugfix
    - Beispiel: `fix: Behebung des Anmeldefehlers`
- **docs**: Dokumentationsänderungen
    - Beispiel: `docs: Aktualisierung der README.md`
- **style**: Formatierungsänderungen, keine Logikänderungen
    - Beispiel: `style: Anpassung der Einrückungen`
- **refactor**: Code-Änderungen, die keine neuen Features hinzufügen oder Bugs beheben
    - Beispiel: `refactor: Umstrukturierung der Authentifizierungslogik`
- **test**: Hinzufügen oder Ändern von Tests
    - Beispiel: `test: Ergänzung von Unit-Tests für das Login-Modul`
- **chore**: Sonstige Änderungen, die keine Auswirkungen auf die Codebasis haben
    - Beispiel: `chore: Aktualisierung der Abhängigkeiten`

### Beispiele

- `feat: Hinzufügen der Suchfunktion für Produkte`
- `fix: Behebung des Fehlers beim Speichern von Benutzerdaten`
- `docs: Hinzufügen von Anweisungen zur Installation in die README.md`
- `style: Anpassung der CSS-Klassen für das Layout`
- `refactor: Verbesserung der Performance der Datenbankabfragen`
- `test: Erweiterung der Tests für die Benutzeranmeldung`
- `chore: Aktualisierung der ESLint-Konfiguration`

## Pull-Requests

- **Titel**: Der Titel sollte den Hauptzweck des Pull-Requests beschreiben.
    - Beispiel: `Feature: Benutzer können sich jetzt registrieren`
- **Beschreibung**: Beschreiben Sie die vorgenommenen Änderungen, warum sie gemacht wurden und ob es spezielle Tests oder Überprüfungen gibt.
    - Beispiel:
      ```
      Dieser Pull-Request fügt die Registrierung von Benutzern hinzu.
      - Formular zur Registrierung hinzugefügt
      - Validierung und Fehlerbehandlung implementiert
      - Unit-Tests hinzugefügt
      
      Verlinkte Issues: #42
      ```
- **Review**: Bitten Sie mindestens eine Person um Überprüfung, bevor Sie den Pull-Request mergen.

## Merge-Strategie

- **Rebase**: Verwenden Sie Rebase, um die Historie linear zu halten, bevor Sie einen Pull-Request mergen.
    - Beispiel: `git rebase main`
- **Merge Commit**: Verwenden Sie einen Merge-Commit, um die Historie klar zu dokumentieren, wenn Sie einen Pull-Request mergen.

## Fazit

Das Befolgen dieser Git-Konventionen hilft uns, die Codebasis übersichtlich und wartbar zu halten. Bei Fragen oder Unsicherheiten wenden Sie sich bitte an das Team.

