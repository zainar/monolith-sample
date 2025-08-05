# Monolith Architecture Sample

This repository is a sample of the monolith architecture proposed in the discussions for the new framework for Zainar
applications.

This takes advantage of [NPM workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces) to host multiple
applications within the same repository while providing access to a shared **source files**.

## Requirements

- Node v22.14.0+
- NPM 10.2.4+

## Instructions

1. Clone repository
2. Run `npm install` in root directory to install dependencies for entire app
3. Open `frontend` app at `http://localhost:5173`

## Dependency Management

Since the project utilizes NPM workspaces, shared dependencies (same package **name** and **version**) are lifted to the
root level, maintaining compatibility between packages.

To install a package in a specific workspace, use `npm install --save-dev --workspace <workspace-name> <package-name>`.

For example, to install the `axios` package in the `frontend` workspace, you'd use the following command:
`npm install --save-dev --workspace frontend axios`

The workspace name is configured to be the `name` field in the `package.json`.
