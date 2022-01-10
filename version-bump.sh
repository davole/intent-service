#!/bin/bash

BRANCH=$(git branch --show-current)

if [[ $BRANCH == "main" ]]; then

  # Bump version and store it
  VERSION=$(npm version $1)

  echo 'New version is:' $VERSION

  # Stage files
  git add package.json package-lock.json

  # Amend last commit
  git commit --amend -C HEAD

  # Tag last commit with bumped version
  git tag $VERSION
else
  echo "Version bump is only available on branch 'main' (you're on branch '$BRANCH')"
fi
