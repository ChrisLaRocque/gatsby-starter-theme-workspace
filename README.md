# Gatsby theme workspace starter
Starting point for developing a Gatsby theme/source plugin/transformer plugin. Uses Yarn workspaces and as such can't be used with .ts files in the theme. 

## Getting started
Uses Node v18. `/theme/` and `/site/` have their own respective `develop` commands. 

Run `yarn workspace theme develop` to start Babel in `watch` mode, which will compile your TS files.

Run `yarn workspace site start` to start the example site with your `theme` plugin. This will run `gatsby clean` to remove past versions of the plugin.