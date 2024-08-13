---
group: Scripts
order: 1
title: Overview
---

## Overview

The `sa` command line tool in the project provides several commonly used functions:

- `cleanup`: Deletes directories such as `node_modules`, `dist`, etc.
- `update-pkg`: Updates dependency versions in `package.json`
- `git-commit`: Generates commit messages that conform to the Conventional Commits standard
- `git-commit-verify`: Verifies git commit messages to ensure they adhere to the Conventional Commits standard
- `changelog`: Generates a changelog
- `release`: Handles the release process, including version updates, changelog generation, and code commits
- `gen-route`: Generates routes

> The `sa` command is provided by `packages/scripts`.
