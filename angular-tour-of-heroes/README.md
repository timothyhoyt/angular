From command line / terminal, go to root folder (c:_home\simplilearn) or (~/_home/caltech)

mkdir <new project name>

cd <new project name>

git init

For Windows: echo hello > README.md

For Mac / Linux: touch README.md

Go to your browser and log into github.

Create repository <new project name> in github.

You will receive instructions on what to do next in github.

Back to command line, let's commit what we have:

git add .

git commit -m "init" (or whatever initial comment you want)

Copy first line from github instruction (git add remote origin <some url>)

git branch -M main

git push -u origin main (the first time we do this in a branch we need to specify what branch and what remote. After this you can just git push)

Check: git status (seeing that everything is commited and up to date) Refresh github page and see README.md file there.

There are MANY ways to do this, but this is the way we just did it.