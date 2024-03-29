// Git

// [Working Directory]                      [Staging Area]                     [Local Repo]           [Remote Repo]
//   {Untracked}          git add =>           {Index} git commit -m "message" => {Head} git push =>  {Remote Repo}
//   {Untracked} git commit -a -m "message" => {Index}       ===========>         {Head} git push =>  {Remote Repo}
//   {Untracked}     <==================       {Index}       <= git merge         {Head} <= git fetch {Remote Repo}
//   {Untracked}     <==================       {Index}       <===========         {Head} <= git pull  {Remote Repo}

// - How to create a branch (2 ways)
// -- git checkout -b "branch name" or git branch "branch name"

// - How to switch to a new branch
// -- git checkout "branch name"

// - What commands executes git pull
// -- git fetch and git merge

// - Difference between git merge and git rebase
// -- git merge creates a new commit that combines the changes from the source branch into the target branch
// -- git rebase doesn't create a new commit, it applies the changes from the source branch on top of the target branch
