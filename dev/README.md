# dev

Local playground for developing the docz packages in this monorepo.
`docz` resolves to the workspace package in `core/docz`, so any change in
`core/*` or `other-packages/*` gets picked up here.

## Usage

From the repository root:

```sh
yarn            # install and link workspaces
yarn dev        # build all packages, then watch them and run `docz dev` here
```

Or run each part separately:

```sh
yarn packages:build     # build all packages once
yarn dev:packages       # rebuild packages on change (rollup -w)
yarn dev:docz           # run `docz dev` in this folder
```

Inside `dev/` you can also run `yarn build`/`yarn serve` (docz) and
`yarn app` (a plain Parcel React app using the same components).

Changes to `gatsby-theme-docz` or `docz-core` templates may need a restart
of `docz dev` (delete `dev/.docz` if things look stale).
