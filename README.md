# Node Repo Template

This is a simple, yet complete, barebones **Node Repo Template**. It can be used to easily and quickly create a project repo for your next NodeJS based project.

<span align="center">

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/davidsaulrodriguez/nodejs-repo-template)
[![Build Status](https://travis-ci.com/davidsaulrodriguez/nodejs-repo-template.svg?branch=main)](https://travis-ci.com/davidsaulrodriguez/nodejs-repo-template)
[![GitHub license](https://img.shields.io/github/license/davidsaulrodriguez/nodejs-repo-template)](https://github.com/davidsaulrodriguez/nodejs-repo-template)

---

[![GitHub issues](https://img.shields.io/github/issues/davidsaulrodriguez/nodejs-repo-template)](https://github.com/davidsaulrodriguez/nodejs-repo-template/issues)
[![GitHub forks](https://img.shields.io/github/forks/davidsaulrodriguez/nodejs-repo-template)](https://github.com/davidsaulrodriguez/nodejs-repo-template/network)
[![GitHub stars](https://img.shields.io/github/stars/davidsaulrodriguez/nodejs-repo-template)](https://github.com/davidsaulrodriguez/nodejs-repo-template/stargazers)
![GitHub contributors](https://img.shields.io/github/contributors/davidsaulrodriguez/nodejs-repo-template)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_nodejs-repo-template&metric=bugs)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_nodejs-repo-template)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_nodejs-repo-template&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_nodejs-repo-template)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_nodejs-repo-template&metric=security_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_nodejs-repo-template)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_nodejs-repo-template&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_nodejs-repo-template)
![GitHub commits since latest release (by SemVer)](https://img.shields.io/github/commits-since/davidsaulrodriguez/nodejs-repo-template/latest/main)

</span>

**Note: This repo does not currently contain routes or an MVC pattern as these can be subjective and vary from project to project.**

> If a general MVC configuration pattern can be agreed upon or suggested then it will be taken into consideration for merging with a pull request in the next release.

This repo contains the following tree structure:

```shell
./nodejs-repo-template/
├── app.js
├── CODE_OF_CONDUCT.md
├── CODEOWNERS
├── CONTRIBUTING.md
├── docs
│   ├── assets
│   │   └── images
│   │       ├── chart.png
│   │       ├── feature.png
│   │       └── hotfix.png
│   ├── Branching_Model.md
│   └── Coordinated_Vulnerability_Disclosure.md
├── .env.example
├── .eslintrc.json
├── .github
│   ├── ISSUE_TEMPLATE
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── wip.yml
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── SECURITY.md
├── SLC.md
└── .travis.yml

5 directories, 23 files
```

## About the included files

- `.gitignore` - This is a basic .gitignore file that ignores common files for Linux, MacOS, Windows, Visual Studio Code, Node, React, React Native, Vue.js and Angular.

- `.eslintrc.json` - An ES Lint file that enables rules that report common problems and help to avoid errors. View the list of available rules [here](https://eslint.org/docs/rules/).

- `.travis.yml` - A simple TravisCI configuration file that tries to cover the most basic needs for a NodeJS build.

- `CODEOWNERS` - Code owners are automatically requested for review when someone opens a pull request that modifies code that they own.

- `CODE_OF_CONDUCT.md` - A code of conduct defines standards for how to engage in a community. It signals an inclusive environment that respects all contributions. It also outlines procedures for addressing problems between members of your project's community. This COC is adapted from the [Contributor Covenant](https://www.contributor-covenant.org/).

- `CONTRIBUTING.md` - This file contains instructions on how to quicly get started with contributing to the project.

- `SECURITY.md` - This file is used to give people instructions for responsibly reporting security vulnerabilities in your project.

- `SLC.md` - This file is used to inform people about the **Support Life Cycle** of your software and its supported versions.

- `LICENSE` - A standard BSD 2 Clause license file is included with this template. You may modify this to a license of your own choosing.

- `app.js` - This file contains a very bare bones Express server that is the entry point for your Node.js project. Feel free remove or rename this file as you see fit.

- `docs/wip.yml` - This is a Work In Progress configuration file to be used with the [WIP](https://github.com/marketplace/wip) application and allow authors of pull requests to set status to pending while still working on it by using specific keywords or emojis in their Pull Request title. 

- `docs/Branching_Model.md` - This file is a detailed document on how branching is handled with this project. It uses proper Git Workflow and best practices to help keep the codebase clean and efficient.

- `docs/Coordinated_Vulnerability_Disclosure.md` - This file contains a detailed description for the way we approach Coordinated Vulnerability Disclosures.

- `.github/PULL_REQUEST_TEMPLATE.md` - This file contains a detailed Pull Request Template. Contributors can use this templates to describe the proposed changes in their pull requests according to the repository's contributing guidelines.

- `.github/ISSUE_TEMPLATE/bug_report.md` - This file contains a template for a detailed bug report that will automatically be tagged with a *bug* label and conforms to the projects contribution guidelines.

- `.github/ISSUE_TEMPLATE/feature_request.md` - This file contains a template for a detailed feature request that conforms to the projects contribution guidelines. This feature request will automatically be tagged with an *enhancement* label.

- `.env.example` - This is just a placeholder file for the project to inform you and other developers that this project supports environment variables via a `.env` file.

- `.package.json` A simple package.json file used to easily pull in the NPM dependencies that this project uses to get you started.

- `.package-lock.json` A lock file that provides a manifest that calls out the exact version of every package in the tree at the time of this projects creation/release.

# LICENSE
This project is licensed under the BSD-2-Clause License.