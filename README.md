# AutoReg

AutoReg is a test automation desktop app that reads a plain-language spec of your application, generates a complete end-to-end test suite for it, and keeps that suite passing by automatically diagnosing and fixing tests when they break.

## What AutoReg does

| Step | What happens |
|------|-------------|
| **1. Get a spec** | Describe your app in `autoreg.md` — write it by hand, or auto-generate it from your app's source code with an AI coding agent skill |
| **2. Generate** | AutoReg opens your app, inspects it live, and generates a full set of test scenarios |
| **3. Plan** | Scenarios are grouped into a logical test plan |
| **4. Run** | Execute individual tests or the whole suite with one click |
| **5. Autoheal** | Failing tests are analyzed, root-caused, and regenerated automatically |

## Prerequisites

- **Operating system:** Windows 10 or later, or macOS (Apple Silicon or Intel)
- **Your application under test:** a running instance (local or deployed) with a reachable URL
- **Test credentials and sample data** for the app you want to test — usernames/passwords for each role you want covered, and realistic sample values for forms
- **Optional — for automatic spec generation:** VS Code (or a VS Code-compatible editor) with an AI coding agent installed, such as Claude Code, Cursor, GitHub Copilot, Windsurf, or Cline. This lets you generate `autoreg.md` directly from your app's source code instead of writing it by hand.

## Downloading and installing

1. Go to **[autoreg-ai.vercel.app/download](https://autoreg-ai.vercel.app/download)** and download the installer for your OS.

   | OS | Installer |
   |----|-----------|
   | macOS (Apple Silicon & Intel) | `AutoReg.dmg` — open it and drag AutoReg to Applications |
   | Windows 10+ | `AutoReg Setup.exe` — run it and follow the prompts |

2. Launch AutoReg.

That's it — no accounts or extra setup are required to start using the app.

## Getting started

1. **Write or generate your spec.** Create an `autoreg.md` file describing your app: what it does, its URL, test credentials, the features to cover, and any edge cases that matter. You can write this by hand, or install the **AutoReg: Skill Installer** extension in your editor to add a skill that writes `autoreg.md` for you by analyzing your app's source code.
2. **Create a new workflow** in AutoReg (`Ctrl+N`) — give it a name, your app's URL, and paste in your `autoreg.md` spec, then choose a folder to save it to.
3. **Watch tests generate** — AutoReg opens your app, works through your spec, and writes out a set of test scenarios and a test plan in real time.
4. **Run your tests** — click the run icon next to any test, or run the whole plan at once.
5. **Autoheal failures** — if a test fails, ask AutoReg to fix it and it will diagnose the failure and regenerate the broken scenario.

## Working with `autoreg.md`

`autoreg.md` is the one input AutoReg needs to understand your application. It's a plain Markdown file — structure helps but isn't required. A good spec includes:

- **App overview** — what the app does and its base URL
- **Test credentials** — one set per role you want tested
- **Features to test** — a list of feature areas and behaviors
- **Edge cases** — validation errors, permission checks, limits you want covered
- **UI notes** — anything unusual the generator should know about (custom components, modals, multi-step flows)

More detail produces more accurate, more reliable tests. Vague specs produce generic happy-path coverage; specs with exact button labels, error text, and edge cases produce tests that pass on the first try.

## Talking to AutoReg

Most day-to-day work happens by typing requests into AutoReg's chat panel. Examples:

**Generating tests**
```
"Generate tests for my workflow at /path/to/workflow"
"Regenerate all tests"
"Add a test for the export CSV button"
```

**Running tests**
```
"Run all tests"
"Run scenario-003"
"Stop tests"
```

**Fixing failures**
```
"Fix the failing tests"
"Why is scenario-004 failing?"
"Heal all failing tests"
```

**Editing**
```
"Add a test scenario for password reset"
"Update scenario-002 to use the new modal selector"
"Delete scenario-011"
"Organize the plan into sections"
```

**Inspecting your app**
```
"Take a snapshot of https://myapp.example.com/dashboard"
"Show me the plan"
```

## Reviewing and editing tests manually

Every generated test is a plain JSON file that you can open and edit directly from the sidebar. Each test is a sequence of steps such as navigating, clicking, filling in fields, and asserting on page content — so you can tweak a selector, add a wait, or adjust an expected value without regenerating the whole test.

Every run produces a log, screenshots, and (if enabled) a video recording, so you can see exactly what happened at each step of a test.

## Keyboard shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+N` | New Workflow |

## Choosing an AI model

AutoReg works out of the box with its default model. You can switch models at any time from the chat composer without restarting the app.

## Logs

If you need to report an issue, AutoReg keeps a rotating log of app activity:

| OS | Path |
|----|------|
| Windows | `%APPDATA%\AutoReg\logs\autoregDDMMYYYY.log` |
| Mac | `~/Library/Logs/AutoReg/autoregDDMMYYYY.log` |

## Learn more

The full documentation covers each of these topics in depth, including the complete spec-writing guide, the test step reference, and troubleshooting tips.
