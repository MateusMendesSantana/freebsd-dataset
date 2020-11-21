Finding most changed files
git log --pretty=format: --name-only | sort | uniq -c | sort -rg | head -100
Change point
git checkout $(git rev-list -1 --first-parent --before="2020-01-00 00:00" master)