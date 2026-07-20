# AutoReg

AutoReg is a test automation desktop app that reads a plain-language spec of your application, generates a complete end-to-end test suite for it, and keeps that suite passing by automatically diagnosing and fixing tests when they break.

## What AutoReg does

| Step | What happens |
|------|-------------|
| **1. Get a spec** | Generate `autoreg.md` for your app using the AutoReg skill — installs in seconds into any repo, application, or project |
| **2. Generate** | AutoReg opens your app, inspects it live, and generates a full set of test scenarios |
| **3. Plan** | Scenarios are grouped into a logical test plan |
| **4. Run** | Execute individual tests or the whole suite with one click |
| **5. Autoheal** | Failing tests are analyzed, root-caused, and regenerated automatically |

## Prerequisites

- **Operating system:** Windows 10 or later, or macOS (Apple Silicon or Intel)
- **Your application under test:** a running instance (local or deployed) with a reachable URL
- **Test credentials and sample data** for the app you want to test — usernames/passwords for each role you want covered, and realistic sample values for forms
- **An editor with an AI coding agent** — VS Code (or a VS Code-compatible editor) running an AI coding agent such as Claude Code, Cursor, GitHub Copilot, Windsurf, or Cline. This is where you install the AutoReg skill and generate `autoreg.md`
- **A generated `autoreg.md` spec** — see [Generating your spec](#generating-your-spec) below. AutoReg needs this before it can create a workflow

## Downloading and installing

1. Go to **[autoreg.sh/download](https://autoreg.sh/download)** and download the installer for your OS.

   | OS | Installer |
   |----|-----------|
   | macOS (Apple Silicon & Intel) | `AutoReg.dmg` — open it and drag AutoReg to Applications |
   | Windows 10+ | `AutoReg Setup.exe` — run it and follow the prompts |

2. Launch AutoReg.

That's it — no accounts or extra setup are required to start using the app.

## Getting started

1. **Generate your spec.** Install the **AutoReg: Skill Installer** extension in your editor and run it against your app — it produces `autoreg.md`, the spec that describes your app to AutoReg. See [Generating your spec](#generating-your-spec) below.
2. **Create a new workflow** in AutoReg (`Ctrl+N`) — give it a name, your app's URL, and paste in your `autoreg.md` spec, then choose a folder to save it to.
3. **Watch tests generate** — AutoReg opens your app, works through your spec, and writes out a set of test scenarios and a test plan in real time.
4. **Run your tests** — click the run icon next to any test, or run the whole plan at once.
5. **Autoheal failures** — if a test fails, ask AutoReg to fix it and it will diagnose the failure and regenerate the broken scenario.

## Generating your spec

`autoreg.md` is the one input AutoReg needs to understand your application — what it does, its URL, test credentials, the features to cover, and the edge cases that matter. AutoReg uses it to generate every test in your suite, so it isn't something you write by hand: it's produced by the AutoReg skill, which reads your application and writes the spec for you.

**Installing the skill:**

1. Install the **AutoReg: Skill Installer** extension in your editor.
2. Open it and point it at your project — it detects the AI coding agent already in your workspace (Claude Code, Cursor, GitHub Copilot, Windsurf, Cline, and others) and adds the AutoReg skill to it.
3. Run the skill from your coding agent. It reads through your application and writes a complete `autoreg.md` for you.

**Using the skill:**

- **Agent detected** — type the slash command in your coding agent's chat:
  ```
  /generate-autoreg
  ```
- **No agent detected** — a `generate-autoreg/` folder is created in your workspace with the skill inside it. Reference it directly in your agent's chat:
  ```
  @generate-autoreg/generate-autoreg.md
  ```

The skill installs into any repository, application, or project in a couple of clicks — no configuration required. It also asks you up front for anything it can't figure out on its own, like test credentials and sample form data.

Once generated, `autoreg.md` is ready to use — paste it into a new AutoReg workflow to start generating tests. Every generated spec is automatically checked when you import it, so AutoReg can confirm it's the one the skill produced and that it hasn't been altered since. If your app changes, re-run the skill to refresh the spec rather than editing the file directly.

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

The full documentation covers each of these topics in depth, including the complete guide to generating `autoreg.md`, the test step reference, and troubleshooting tips.
