# Portfolio — Philipp Demmelmair

[![CI](https://github.com/Pe-De-E/cv/actions/workflows/ci.yml/badge.svg)](https://github.com/Pe-De-E/cv/actions/workflows/ci.yml)

Persönliches Portfolio und Lebenslauf, gebaut mit React und TypeScript. Verfügbar auf Deutsch und Englisch.

## Tech Stack

| Bereich | Entscheidung |
| --- | --- |
| Framework | React 18 + TypeScript + Vite |
| i18n | react-i18next mit vollständiger Typisierung — keine Casts |
| Unit-Tests | Vitest + React Testing Library + jest-axe |
| E2E-Tests | Playwright — Desktop Chrome + Mobile Chrome |
| Accessibility | eslint-plugin-jsx-a11y + automatisierte axe-Checks |
| CI/CD | GitHub Actions — Lint, Tests, Coverage-Report auf PRs |

## Lokale Entwicklung

```bash
npm install
npm run dev
```

## Tests

```bash
npm run test:run   # Unit-Tests
npm run coverage   # Unit-Tests + Coverage-Report
npm run e2e        # Playwright E2E auf Desktop + Mobile
npm run lint       # ESLint inkl. jsx-a11y
```
