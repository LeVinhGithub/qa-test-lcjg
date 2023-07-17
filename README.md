# QA Test

## Tool

- `WebdriverIO`
- Javascript/`Typescript` with Node 14|16
- Yarn
- Cucumber/ `Gherkin` syntax
- Karate AP
- Java JDK (for Allure report)

## Get started for UI test

1. Clone this repository

2. Run command to install all dependencies:

```bash
yarn
```

3. Run command to run all tests

```bash
yarn wdio
```

5. Install `Java JDK`

6. Open `Allure` report by command

```bash
yarn report
```

## Get started for API Karate test
1. Change directory to features/apis

2. Run command to install all dependencies:

```bash
mvn clean test -Dtest=IndividualRunner
```
Note: Need to install Karate Runner extension to open the Report quickly, or can follow the path `features/apis/target/karate-reports/karate-summary.html`

## Integrate with Github Action
- Path `.github/workflows/e2e-pr-wdio.yml`
- CI/CD will be triggered for both UI and API by Manual trigger or PR trigger