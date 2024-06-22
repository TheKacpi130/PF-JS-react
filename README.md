*Strona na zaliczenie przedmiotu Popularne frameworki JavaScript Kacper Łukaszewski Nr albumu: 154948*


Projekt Aplikacji: Strona Portfolio
Wykorzystane Frameworki JavaScript oraz Ich Architektura
W projekcie Strona Portfolio wykorzystano następujące frameworki i narzędzia JavaScript:

React: Główny framework do budowy interfejsu użytkownika.
Hooks: Do zarządzania stanem komponentów i cyklem życia w React.
HTML: Do strukturyzacji strony.
CSS oraz SASS: Do stylizacji strony.
AOS: Biblioteka do animacji, takich jak fade-in.
Scrollspy: Do dynamicznego śledzenia i zmiany wyglądu elementów w zależności od pozycji użytkownika na stronie.
React Transition Group: Do implementacji efektów przejść w karuzeli zdjęć.
EmailJS: Do obsługi wysyłania wiadomości e-mail.
Architektura Aplikacji
Aplikacja jest zbudowana w architekturze komponentowej, typowej dla projektów opartych na React. Każdy element interfejsu użytkownika jest odrębnym komponentem, co umożliwia łatwe zarządzanie, rozwijanie i utrzymanie kodu. Aplikacja korzysta z mechanizmu hooków do zarządzania stanem i cyklem życia komponentów.

Konkretne Użyte Narzędzia
a. Generatory komponentów (modeli, kontrolerów, API)

Create React App: Narzędzie do generowania i zarządzania projektem React.
React Hooks: Do tworzenia komponentów funkcyjnych oraz zarządzania stanem i efektami ubocznymi.
b. Routery kierujące ruchem HTTP

React Router: Do zarządzania nawigacją na stronie klienta.
c. Szablony HTML

JSX (JavaScript XML): Używany w React do tworzenia dynamicznych komponentów HTML.
d. Konektory do baz danych

Brak: Projekt nie wykorzystuje bezpośredniego połączenia z bazą danych. Dane mogą być przechowywane w stanie komponentów lub w zewnętrznych plikach JSON.
e. Współpraca z REST API

EmailJS: Do wysyłania wiadomości e-mail poprzez zewnętrzne API.
Propozycje Aplikacji i Systemów
a. Własne prace inżynierskie

Projekt jednoosobowy mający na celu stworzenie portfolio online prezentującego prace i projekty.
b. Projekty z przedmiotu Programowanie Aplikacji Internetowych

Aplikacja stworzona w ramach kursu, mająca na celu praktyczne zastosowanie zdobytej wiedzy z zakresu budowy aplikacji internetowych.
c. Projekty z innych przedmiotów w Uczelni

Projekty realizowane w ramach innych kursów informatycznych, takich jak "Web Development" lub "User Interface Design".
d. Inne związane z hobby lub pracą zawodową

Strona portfolio, która może być wykorzystywana do prezentacji osiągnięć zawodowych, projektów hobbystycznych oraz jako narzędzie do szukania pracy.
Problemy i Sposoby Ich Rozwiązania
Problem: Zarządzanie stanem komponentów

Rozwiązanie: Wykorzystanie React Hooks (useState, useEffect) do zarządzania stanem komponentów i efektami ubocznymi. Hooks umożliwiają łatwe i czytelne zarządzanie stanem bez potrzeby korzystania z klas.
Problem: Dynamiczna zmiana wyglądu elementów w zależności od pozycji użytkownika na stronie

Rozwiązanie: Implementacja Scrollspy do śledzenia pozycji użytkownika na stronie i dynamicznego zmieniania wyglądu elementów, takich jak nawigacja lub sekcje.
Problem: Płynne przejścia między elementami karuzeli zdjęć

Rozwiązanie: Wykorzystanie React Transition Group do implementacji efektów przejść, co umożliwia płynne przechodzenie między elementami karuzeli zdjęć.
Problem: Wysyłanie wiadomości e-mail z formularza kontaktowego

Rozwiązanie: Użycie EmailJS do obsługi wysyłania wiadomości e-mail bez potrzeby konfiguracji własnego serwera e-mail. EmailJS umożliwia łatwe i szybkie wysyłanie e-maili poprzez API.
Problem: Animacje elementów na stronie

Rozwiązanie: Implementacja biblioteki AOS (Animate On Scroll) do dodawania animacji, takich jak fade-in, które są uruchamiane w momencie, gdy użytkownik przewija stronę. AOS jest łatwe w konfiguracji i dodaje atrakcyjne efekty wizualne.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
