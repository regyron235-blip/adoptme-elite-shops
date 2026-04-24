# Testing EliteStore Application

## Overview
EliteStore is a single-file static HTML application (`index.html`) with no build step, no backend, and no CI. All logic (CSS, HTML, JS) lives in one file.

## How to Run
```bash
google-chrome file:///home/ubuntu/adoptme-elite-shops/index.html
```
No server needed — just open the file directly in Chrome.

## Key UI Elements

### Sidebar
- **All Pets** / **News** buttons — switch between pets grid and news view
- **Support** — opens support modal
- **Timezone button** — shows flag + city name + live HH:MM:SS clock. Clicking opens timezone modal.
- **Color picker** — changes site accent color
- **Language buttons** — bottom-left: quick-switch button (e.g. "UA") and "ALL" button that opens fullscreen language selector modal

### Modals
- **Language selector modal** — opened by clicking "ALL" button at bottom-left. Shows 20 language cards.
- **Timezone modal** — opened by clicking the timezone sidebar button. Same fullscreen style as language modal. Has ❓ hint text that translates with language.
- **Pet detail modal** — opened by clicking any pet card
- **News detail modal** — opened by clicking news title or "Детальніше →" link

## Testing Tips

### Multiple Tabs Issue
When using `google-chrome <URL>`, Chrome may open a new tab. If you have multiple tabs with the same URL, Playwright CDP (`browser.contexts[0].pages[0]`) might connect to the wrong tab. Always check which page index is the active tab:
```python
for i, page in enumerate(browser.contexts[0].pages):
    print(f'Page {i}: {page.url}')
```
Use the correct page index for JavaScript execution.

### Language Switching
- The quick-switch button (e.g. "UA") calls `setQuickLang('ua')`
- The "ALL" button calls `openAllLanguages()` which opens the language modal
- To switch language programmatically: `changeLang('en')` — but note the UI might not update visually if using the wrong tab
- Key JS functions: `changeLang(code)`, `openAllLanguages()`, `closeAllLanguages()`, `setQuickLang(code)`

### Timezone Testing
- Sidebar button calls `openTzModal()` on click
- Selecting a timezone calls `handleTimezoneChange(code)` then `closeTzModal()`
- The hint text updates via `updateTzModalTexts()` based on `currentLang`
- Key JS functions: `openTzModal()`, `closeTzModal()`, `generateTzGrid()`, `updateTzClock()`

### News Testing
- News titles have `onclick` handlers that call `openNewsDetail(title, date, desc)`
- Titles with single quotes (e.g. "Розета") are escaped via `.replace(/'/g, "\\'")`

### Console Tool
The `computer(action="console")` tool might report "Chrome is not in the foreground" even when Chrome is visible. Workaround: use Playwright CDP instead:
```python
from playwright.sync_api import sync_playwright
p = sync_playwright().start()
browser = p.chromium.connect_over_cdp('http://localhost:29229')
page = browser.contexts[0].pages[-1]  # or correct index
result = page.evaluate('someFunction()')
```

## Languages
20 languages supported (no Russian): ua, en, pl, de, fr, es, it, pt, tr, ja, ko, gr, nl, sv, cs, ro, da, fi, ar, zh

## Devin Secrets Needed
None — this is a static HTML file with no authentication or API keys.
