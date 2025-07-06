## Local Development

This document intends to establish a series of steps to take in order to set up a local environment for developing on the primereact components with live reload, quick builds, and incremental builds.

## Instructions

You must have a local copy of this repository somewhere on your machine. From that repository. Before starting, make sure that the version for your `primereact/package.json` is a [valid semantic version](https://docs.npmjs.com/about-semantic-versioning) and does not contain a suffix such as `-SNAPSHOT`.

Once that is done, you will run:

**Unix/MacOS:**

```shell
~/primereact/ $ npm run dev:link
```

**Windows:**
dev:link:windows

```shell
C:\primereact> npm run dev:link:windows
```

This will alter the bundler to only emit non-minified esm modules. The aliasing plugin has also been disabled for components. Once everything has been bundled (this can take a few minutes) you should keep this command running. It will allow for incremental builds as you develop in the `primereact/` directory.

> Note: if you get "Error: JavaScript heap out of memory", it may help to set the following node variable: `export NODE_OPTIONS=--max-old-space-size=8192`.

> Note: The build will be finished when the terminal displays: `[20xx-xx-xx 00:00:00] waiting for changes...`.

This will create a local copy of the package that is used instead of the registry version.
Unlike `npm link`, `yalc` does not use symlinks, which avoids common module resolution issues.

### Open a new terminal and navigate to the `primereact/dist/` directory

Run yalc publish

```shell 
~/primereact/ $ cd dist
~/primereact/dist/ $ npx yalc publish
```

### Now change your directory to your local project you are developing on!

```shell
~/primereact/dist/ $ cd ~/my-cool-project
~/my-cool-project/ $
```

The goal now is to link your primereact dependency to the yalc package that we configured earlier:

```shell
~/my-cool-project/ $ npx yalc add primereact
```

As long at the dependencies version that you symlinked satisfies the version that is specified in `my-cool-project/package.json` then the link should have worked.

You can validate that by running:

```shell
~/my-cool-project/ $  npx yalc check

Yalc dependencies found: [ 'primereact' ]
```

After doing your changes in the `primereact/` directory, you can publish the changes to your local project by running:

```shell
~/primereact/dist/ $ npx yalc push
```

## Live Development
If you want to push your changes automatically to your local project, you can use the following:

```shell
~/primereact $ npm run dev:link -- -- --watch.onEnd="cd dist && npx yalc push"
```
This command will watch for changes in the `primereact/` directory and automatically push updates to your local project whenever you save a file. (note the double -- before `watch.onEnd`)

### Congratulations!

You can now live develop in the `primereact/` directory and your changes should be represented in your `my-cool-project/` build. (Assuming you are running vite or another bundler for `my-cool-project`)

### Cleanup

Once done, you can clean up with:

```shell
~/my-cool-project/ $ yalc remove primereact
~/my-cool-project/ $ rm -rf yalc.lock .yalc
~/my-cool-project/ $ npm install primereact@latest
```

> Note: `yalc` stores the published package in `~/.yalc/primereact` and uses file references in your project.  
> This avoids typical pitfalls of `npm link`, such as duplicated React versions or broken module scopes.
