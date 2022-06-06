set -e

git checkout master

branches=(master 01-update-core-cli 02-typed-forms 03-page-titles 04-scams 05-scs 06-bootstrap 07-routing)
previous=
current=

for branch in ${branches[*]}; do
  previous=$current
  current=$next
  next=$branch

  if [ ! $current = "" ]; then
    git checkout $current
    git tag -d $(git tag | grep -E '.')
    git merge $previous -m merge
  fi
done

git checkout $branch
git merge $current $branch -m merge

git checkout master
