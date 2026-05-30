import { test, expect } from '@playwright/test'

const langDE = { name: 'DE', exact: true }
const langEN = { name: 'EN', exact: true }

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', langDE).click()
})

test.describe('Navbar', () => {
  test('PDF-Download-Link ist sichtbar und korrekt', async ({ page }) => {
    const pdfLink = page.getByRole('link', { name: /CV herunterladen/i })
    await expect(pdfLink).toBeVisible()
    await expect(pdfLink).toHaveAttribute('download', '')
  })

  test('Sprachumschalter wechselt den Inhalt', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Erfahrung' })).toBeVisible()
    await page.getByRole('button', langEN).click()
    await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible()
    await page.getByRole('button', langDE).click()
    await expect(page.getByRole('heading', { name: 'Erfahrung' })).toBeVisible()
  })
})

test.describe('CV-Seite', () => {
  test('zeigt den Namen im Header', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  })

  test('zeigt Erfahrungs-Sektion', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Erfahrung' })).toBeVisible()
  })

  test('zeigt Ausbildungs-Sektion', async ({ page }) => {
    await expect(page.getByText('Ausbildung')).toBeVisible()
  })

  test('alle Skills sind sichtbar', async ({ page }) => {
    for (const name of ['JavaScript', 'TypeScript', 'Vue.js', 'React']) {
      await expect(page.getByRole('button', { name, exact: true })).toBeVisible()
    }
  })
})

test.describe('Skill-Interaktion', () => {
  test('Klick auf Skill zeigt Detail-Ansicht', async ({ page }) => {
    await page.getByRole('button', { name: 'TypeScript', exact: true }).click()
    await expect(page.getByText('75%')).toBeVisible()
  })

  test('Zurück-Button bringt zur Skill-Übersicht', async ({ page }) => {
    await page.getByRole('button', { name: 'TypeScript', exact: true }).click()
    await page.getByRole('button', { name: /zurück/i }).click()
    await expect(page.getByRole('button', { name: 'JavaScript', exact: true })).toBeVisible()
  })
})
