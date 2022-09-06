#!/usr/bin/env sh

# abort on errors
set -e

# build
# pnpm build

# copy important vercel scripts
mkdir -p ./dist/scripts/vercel
cp -r ./scripts/vercel ./dist/scripts

# navigate into the build output directory
pushd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:daniel-meisterlabs/superhero-solidjs.git master:production-gh-pages

# navigate back to root
popd
