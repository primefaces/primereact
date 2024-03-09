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

> [!NOTE]
> It will be finished when the terminal displays: `[20xx-xx-xx 00:00:00] waiting for changes...`.

You will now `cd` into the `primereact/dist` directory and run:

```shell
~/primereact/dist/ $ npm link
```

This will create a symlink in your global npm scope so that other local packages will rely on this version of primereact when built. You can verify that the package is linked by running this from the `primereact` directory.

```shell
~/primereact/ $ npm ls -g --depth=0 --link=true

/opt/homebrew/lib
└── primereact@XX.X.XX -> ./../../../Users/${user}/primereact/dist     # <-- this must be in the dist/ dir !!!
```

> [!WARNING]
> Reminder! the XX.X.XX version must be a valid [valid semantic version](https://docs.npmjs.com/about-semantic-versioning) that you are using in your local project

### Now change your directory to your local project you are developing on!

```shell
~/primereact/dist/ $ cd ~/my-cool-project
~/my-cool-project/ $
```

The goal now is to link your primereact dependency to the symlink that we configured earlier:

```shell
~/my-cool-project/ $ npm link primereact
```

As long at the dependencies version that you symlinked satisfies the version that is specified in `my-cool-project/package.json` then the link should have worked.

You can validate that by running:

```shell
~/my-cool-project/ $  npm ls --link=true

my-cool-project@0.0.0 /Users/${user}/my-cool-project
└── primereact@npm:dist@xx.x.xx -> ./../../primereact/dist             # <-- this must be in the dist/ dir !!!
```

### Congratulations!

You can now live develop in the `primereact/` directory and your changes should be represented in your `my-cool-project/` build. (Assuming you are running vite or another bundler for `my-cool-project`)

### Cleanup

Once done, you can cleanup with:

```shell
~/primereact/ $ npm unlink
```
