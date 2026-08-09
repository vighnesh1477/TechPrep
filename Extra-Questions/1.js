[
  {
    "id": 1,
    "topic": "Git Basics",
    "difficulty": "Easy",
    "question": "What does Git primarily track in a project?",
    "options": [
      "File permissions only",
      "Changes to file content",
      "Disk space usage",
      "Network traffic"
    ],
    "answer": 1,
    "explanation": "Git is a distributed version control system that tracks changes to file content over time, enabling collaboration and history tracking."
  },
  {
    "id": 2,
    "topic": "Git Basics",
    "difficulty": "Easy",
    "question": "What type of version control system is Git?",
    "options": [
      "Centralized",
      "Distributed",
      "Local-only",
      "Client-server"
    ],
    "answer": 1,
    "explanation": "Git is a distributed version control system where every developer has a full copy of the repository, including its complete history."
  },
  {
    "id": 3,
    "topic": "Git Installation",
    "difficulty": "Easy",
    "question": "Which command verifies that Git is installed and shows its version?",
    "options": [
      "git --check",
      "git --version",
      "git --verify",
      "git --info"
    ],
    "answer": 1,
    "explanation": "Running git --version displays the installed Git version number, confirming that Git is properly installed on the system."
  },
  {
    "id": 4,
    "topic": "Git Installation",
    "difficulty": "Easy",
    "question": "On Ubuntu, which command installs Git using the package manager?",
    "options": [
      "yum install git",
      "apt-get install git",
      "brew install git",
      "dnf install git"
    ],
    "answer": 1,
    "explanation": "On Ubuntu and other Debian-based systems, apt-get install git is the standard command to install Git using the APT package manager."
  },
  {
    "id": 5,
    "topic": "Repository Initialization",
    "difficulty": "Easy",
    "question": "What command initializes a new Git repository in the current directory?",
    "options": [
      "git start",
      "git init",
      "git create",
      "git new"
    ],
    "answer": 1,
    "explanation": "git init creates a new .git subdirectory in the current folder, which contains all the necessary metadata for the repository."
  },
  {
    "id": 6,
    "topic": "Repository Initialization",
    "difficulty": "Easy",
    "question": "What hidden directory is created when you run git init?",
    "options": [
      ".gitconfig",
      ".git",
      ".gitrepo",
      ".gitdata"
    ],
    "answer": 1,
    "explanation": "git init creates a .git directory that stores all version control metadata, including objects, refs, and configuration files."
  },
  {
    "id": 7,
    "topic": "Git Config",
    "difficulty": "Easy",
    "question": "Which command sets your name globally for all Git repositories?",
    "options": [
      "git config --global user.name \"Your Name\"",
      "git set --global user.name \"Your Name\"",
      "git config --local user.name \"Your Name\"",
      "git config user.name \"Your Name\""
    ],
    "answer": 0,
    "explanation": "The --global flag sets the configuration at the user level, applying the name to all repositories on the system unless overridden locally."
  },
  {
    "id": 8,
    "topic": "Git Config",
    "difficulty": "Easy",
    "question": "Where are global Git configuration settings stored?",
    "options": [
      ".git/config in each repository",
      "~/.gitconfig",
      "/etc/gitconfig",
      "~/.git/config"
    ],
    "answer": 1,
    "explanation": "Global Git settings are stored in the ~/.gitconfig file in the user's home directory, applying across all repositories for that user."
  },
  {
    "id": 9,
    "topic": "Git Config",
    "difficulty": "Easy",
    "question": "Which command displays all your current Git configuration settings?",
    "options": [
      "git config --show",
      "git config --list",
      "git config --display",
      "git config --all"
    ],
    "answer": 1,
    "explanation": "git config --list prints all Git configuration values from all config files (system, global, and local) in a consolidated view."
  },
  {
    "id": 10,
    "topic": "Working Tree",
    "difficulty": "Easy",
    "question": "What is the working tree in Git?",
    "options": [
      "The .git directory",
      "The directory containing your actual project files",
      "The remote repository",
      "The staging area"
    ],
    "answer": 1,
    "explanation": "The working tree is the directory on your filesystem where you can see and edit your project files, separate from the .git metadata."
  },
  {
    "id": 11,
    "topic": "Working Tree",
    "difficulty": "Easy",
    "question": "What does a clean working tree mean?",
    "options": [
      "All files are deleted",
      "No uncommitted changes exist in the working directory",
      "The .git folder is empty",
      "The remote is up to date"
    ],
    "answer": 1,
    "explanation": "A clean working tree indicates there are no modified, staged, or untracked files, meaning the working directory matches the last commit."
  },
  {
    "id": 12,
    "topic": "Staging Area",
    "difficulty": "Easy",
    "question": "What command stages a single file for the next commit?",
    "options": [
      "git add --file myfile.txt",
      "git stage myfile.txt",
      "git add myfile.txt",
      "git prepare myfile.txt"
    ],
    "answer": 2,
    "explanation": "git add myfile.txt moves the specified file from the working tree to the staging area, preparing it for inclusion in the next commit."
  },
  {
    "id": 13,
    "topic": "Staging Area",
    "difficulty": "Easy",
    "question": "What does the staging area represent in Git?",
    "options": [
      "The final commit history",
      "A snapshot of changes to be included in the next commit",
      "A backup of the working tree",
      "The remote repository state"
    ],
    "answer": 1,
    "explanation": "The staging area (also called the index) holds a snapshot of changes that will be included in the next commit, giving you control over what gets committed."
  },
  {
    "id": 14,
    "topic": "Staging Area",
    "difficulty": "Easy",
    "question": "Which command stages all changes in the current directory for commit?",
    "options": [
      "git add .",
      "git add --all",
      "git stage --all",
      "git commit --all"
    ],
    "answer": 0,
    "explanation": "git add . stages all new, modified, and deleted files in the current directory and its subdirectories for the next commit."
  },
  {
    "id": 15,
    "topic": "Commits",
    "difficulty": "Easy",
    "question": "What command creates a commit with the staged changes?",
    "options": [
      "git save -m \"message\"",
      "git commit -m \"message\"",
      "git push -m \"message\"",
      "git store -m \"message\""
    ],
    "answer": 1,
    "explanation": "git commit -m creates a new commit with a message, permanently recording the staged snapshot in the repository history."
  },
  {
    "id": 16,
    "topic": "Commits",
    "difficulty": "Easy",
    "question": "What is a commit hash in Git?",
    "options": [
      "A random number assigned to each file",
      "A SHA-1 hash uniquely identifying a commit object",
      "An encrypted password for the repository",
      "A timestamp of when the commit was made"
    ],
    "answer": 1,
    "explanation": "Each commit is identified by a 40-character SHA-1 hash, which is uniquely generated from the commit's contents, metadata, and parent references."
  },
  {
    "id": 17,
    "topic": "Commits",
    "difficulty": "Easy",
    "question": "What does the -m flag do in a git commit command?",
    "options": [
      "Marks the commit as minor",
      "Specifies the commit message directly on the command line",
      "Merges the commit with the previous one",
      "Moves the commit to a different branch"
    ],
    "answer": 1,
    "explanation": "The -m flag allows you to provide the commit message inline, avoiding the opening of a text editor for message entry."
  },
  {
    "id": 18,
    "topic": "Commits",
    "difficulty": "Easy",
    "question": "What happens if you try to commit without staging any changes?",
    "options": [
      "Git creates an empty commit automatically",
      "Git throws an error saying nothing to commit",
      "Git stages all files and then commits",
      "Git deletes the current branch"
    ],
    "answer": 1,
    "explanation": "If no changes are staged, Git displays an error message indicating there is nothing to commit, unless you use the --allow-empty flag."
  },
  {
    "id": 19,
    "topic": "Commit History",
    "difficulty": "Easy",
    "question": "What does git show display by default?",
    "options": [
      "The entire commit history",
      "The most recent commit's details and diff",
      "Only the commit messages",
      "The branch structure"
    ],
    "answer": 1,
    "explanation": "Without arguments, git show displays information about the most recent commit, including the commit metadata and the diff it introduced."
  },
  {
    "id": 20,
    "topic": "Git Log",
    "difficulty": "Easy",
    "question": "What does git log display?",
    "options": [
      "Error messages from Git operations",
      "The commit history of the current branch",
      "A list of all files in the repository",
      "Remote repository URLs"
    ],
    "answer": 1,
    "explanation": "git log shows the commit history in reverse chronological order, including commit hashes, author information, dates, and commit messages."
  },
  {
    "id": 21,
    "topic": "Git Log",
    "difficulty": "Easy",
    "question": "Which flag limits git log output to a specific number of commits?",
    "options": [
      "-n",
      "-l",
      "-c",
      "-max"
    ],
    "answer": 0,
    "explanation": "git log -n <number> or git log -<number> limits the output to the specified number of most recent commits."
  },
  {
    "id": 22,
    "topic": "Git Log",
    "difficulty": "Easy",
    "question": "What does git log --oneline display?",
    "options": [
      "Only the first line of each commit message",
      "A shortened single-line format with commit hash and message",
      "Only the commit hashes without messages",
      "The log in a single column"
    ],
    "answer": 1,
    "explanation": "git log --oneline shows each commit on a single line with an abbreviated hash and the full commit message, making the log more compact."
  },
  {
    "id": 23,
    "topic": "Git Diff",
    "difficulty": "Easy",
    "question": "What does git diff show by default?",
    "options": [
      "Differences between staging area and the last commit",
      "Differences between the working tree and the staging area",
      "Differences between two branches",
      "Differences between local and remote"
    ],
    "answer": 1,
    "explanation": "Without arguments, git diff shows the changes in the working tree that have not yet been staged, comparing the working directory to the staging area."
  },
  {
    "id": 24,
    "topic": "Git Diff",
    "difficulty": "Easy",
    "question": "Which command shows changes that are staged but not yet committed?",
    "options": [
      "git diff --staged",
      "git diff --cached",
      "git diff --commit",
      "Both A and B"
    ],
    "answer": 3,
    "explanation": "Both --staged and --cached are equivalent flags that show the differences between the staging area and the most recent commit."
  },
  {
    "id": 25,
    "topic": "Git Status",
    "difficulty": "Easy",
    "question": "What information does git status provide?",
    "options": [
      "Only the current branch name",
      "The state of the working tree and staging area",
      "Only untracked files",
      "Only remote repository status"
    ],
    "answer": 1,
    "explanation": "git status shows the branch name, whether it is in sync with remote, and which files are modified, staged, or untracked."
  },
  {
    "id": 26,
    "topic": "Git Status",
    "difficulty": "Easy",
    "question": "What does 'Untracked files' mean in git status output?",
    "options": [
      "Files that have been deleted",
      "Files that Git is not currently tracking in version control",
      "Files that have been modified",
      "Files that are in the staging area"
    ],
    "answer": 1,
    "explanation": "Untracked files are those that exist in the working directory but have never been added to Git's version control tracking."
  },
  {
    "id": 27,
    "topic": "Git Status",
    "difficulty": "Easy",
    "question": "Which flag makes git status output more concise?",
    "options": [
      "-s",
      "-c",
      "-q",
      "-b"
    ],
    "answer": 0,
    "explanation": "git status -s or --short gives a compact output using two-character status codes (like M for modified, A for added, ?? for untracked) instead of full descriptions."
  },
  {
    "id": 28,
    "topic": "Branches",
    "difficulty": "Easy",
    "question": "What is a branch in Git?",
    "options": [
      "A copy of the entire repository",
      "A lightweight movable pointer to a commit",
      "A separate folder in the filesystem",
      "A backup of the working tree"
    ],
    "answer": 1,
    "explanation": "In Git, a branch is simply a lightweight pointer to a commit, making branch creation and switching extremely fast operations."
  },
  {
    "id": 29,
    "topic": "Branches",
    "difficulty": "Easy",
    "question": "Which command lists all local branches?",
    "options": [
      "git branches",
      "git branch",
      "git show-branches",
      "git list-branches"
    ],
    "answer": 1,
    "explanation": "git branch without any flags lists all local branches in the repository, marking the current branch with an asterisk."
  },
  {
    "id": 30,
    "topic": "Branches",
    "difficulty": "Easy",
    "question": "What is the default branch name in newly created Git repositories?",
    "options": [
      "master",
      "main",
      "It depends on the Git configuration",
      "default"
    ],
    "answer": 2,
    "explanation": "The default branch name depends on the Git version and configuration. Older versions default to 'master', while newer ones may use 'main' based on init.defaultBranch setting."
  },
  {
    "id": 31,
    "topic": "Branch Creation",
    "difficulty": "Easy",
    "question": "Which command creates a new branch without switching to it?",
    "options": [
      "git new-branch feature",
      "git branch feature",
      "git create-branch feature",
      "git switch --create-only feature"
    ],
    "answer": 1,
    "explanation": "git branch <name> creates a new branch pointing to the current commit but does not switch your working tree to that branch."
  },
  {
    "id": 32,
    "topic": "Branch Creation",
    "difficulty": "Easy",
    "question": "Which command creates and switches to a new branch in one step?",
    "options": [
      "git branch -s feature",
      "git checkout -b feature",
      "git switch -n feature",
      "git create -b feature"
    ],
    "answer": 1,
    "explanation": "git checkout -b <name> creates a new branch and immediately switches to it, combining branch creation and switching in a single command."
  },
  {
    "id": 33,
    "topic": "Branch Switching",
    "difficulty": "Easy",
    "question": "What is the recommended modern command to switch branches?",
    "options": [
      "git change feature",
      "git switch feature",
      "git go feature",
      "git move feature"
    ],
    "answer": 1,
    "explanation": "git switch is the modern command introduced in Git 2.23 specifically for switching branches, making the intent clearer than the older git checkout."
  },
  {
    "id": 34,
    "topic": "Branch Switching",
    "difficulty": "Easy",
    "question": "What happens if you switch branches with uncommitted changes?",
    "options": [
      "Git always discards the changes",
      "Git may prevent switching if changes would be overwritten",
      "Git automatically commits the changes",
      "Git moves the changes to the new branch automatically"
    ],
    "answer": 1,
    "explanation": "Git will refuse to switch branches if uncommitted changes would be overwritten by the switch, unless the changes are stashed or committed first."
  },
  {
    "id": 35,
    "topic": "Merge",
    "difficulty": "Easy",
    "question": "Which command merges a specified branch into the current branch?",
    "options": [
      "git merge from feature",
      "git merge feature",
      "git combine feature",
      "git join feature"
    ],
    "answer": 1,
    "explanation": "git merge <branch> takes the specified branch's commits and integrates them into the current branch, creating a merge commit if needed."
  },
  {
    "id": 36,
    "topic": "Merge",
    "difficulty": "Easy",
    "question": "What is a merge commit?",
    "options": [
      "A commit that deletes a branch",
      "A commit with two or more parent commits that combines branch histories",
      "A regular commit on the target branch",
      "A commit that reverts a previous merge"
    ],
    "answer": 1,
    "explanation": "A merge commit has multiple parent commits, representing the point where two separate branch histories were joined together."
  },
  {
    "id": 37,
    "topic": "Fast Forward Merge",
    "difficulty": "Easy",
    "question": "When does a fast-forward merge occur?",
    "options": [
      "When the target branch has commits not in the current branch",
      "When the current branch has no new commits since the branch diverged",
      "When both branches have new commits",
      "When a merge conflict is detected"
    ],
    "answer": 1,
    "explanation": "A fast-forward merge happens when the current branch has no new commits since the divergence point, so Git simply moves the branch pointer forward."
  },
  {
    "id": 38,
    "topic": "Fast Forward Merge",
    "difficulty": "Easy",
    "question": "Which flag prevents a fast-forward merge and forces a merge commit?",
    "options": [
      "--no-ff",
      "--force-merge",
      "--commit-merge",
      "--no-fast"
    ],
    "answer": 0,
    "explanation": "git merge --no-ff creates a merge commit even when a fast-forward is possible, preserving the branch history and making it clear a merge occurred."
  },
  {
    "id": 39,
    "topic": "HEAD",
    "difficulty": "Easy",
    "question": "What does HEAD represent in Git?",
    "options": [
      "The first commit in the repository",
      "A pointer to the current branch reference or commit",
      "The main branch",
      "The remote repository"
    ],
    "answer": 1,
    "explanation": "HEAD is a symbolic reference pointing to the current branch or commit you are working on, indicating where your working tree is based."
  },
  {
    "id": 40,
    "topic": "HEAD",
    "difficulty": "Easy",
    "question": "What does HEAD~2 refer to?",
    "options": [
      "The second branch in the repository",
      "The commit two parents before the current commit",
      "The second file in the staging area",
      "Two commits ahead of HEAD"
    ],
    "answer": 1,
    "explanation": "HEAD~2 is a shorthand for the commit that is two generations before the current commit, following the first parent of each commit."
  },
  {
    "id": 41,
    "topic": "Checkout",
    "difficulty": "Easy",
    "question": "What does git checkout <commit-hash> do?",
    "options": [
      "Deletes the commit",
      "Puts you in a detached HEAD state at that commit",
      "Merges the commit into the current branch",
      "Creates a new branch from that commit"
    ],
    "answer": 1,
    "explanation": "Checking out a specific commit hash puts Git in a detached HEAD state, where HEAD points directly to a commit rather than a branch reference."
  },
  {
    "id": 42,
    "topic": "Checkout",
    "difficulty": "Easy",
    "question": "Which command discards uncommitted changes in a specific file?",
    "options": [
      "git checkout -- file.txt",
      "git restore file.txt",
      "Both A and B",
      "git reset file.txt"
    ],
    "answer": 2,
    "explanation": "Both git checkout -- file.txt (traditional) and git restore file.txt (modern) discard uncommitted working tree changes for the specified file."
  },
  {
    "id": 43,
    "topic": "Checkout",
    "difficulty": "Easy",
    "question": "What does git checkout - do?",
    "options": [
      "Deletes the current branch",
      "Switches to the previous branch",
      "Creates a new branch",
      "Checks out all files"
    ],
    "answer": 1,
    "explanation": "git checkout - switches to the branch you were on previously, acting as a quick toggle between two branches."
  },
  {
    "id": 44,
    "topic": "Tags",
    "difficulty": "Easy",
    "question": "What is the purpose of a tag in Git?",
    "options": [
      "To create a new branch",
      "To mark a specific commit as important, like a release version",
      "To delete old commits",
      "To merge branches"
    ],
    "answer": 1,
    "explanation": "Tags are used to mark specific commits as significant, typically for release versions (e.g., v1.0.0), making them easy to reference later."
  },
  {
    "id": 45,
    "topic": "Tags",
    "difficulty": "Easy",
    "question": "What is the difference between lightweight and annotated tags?",
    "options": [
      "Lightweight tags store more metadata",
      "Annotated tags include author, date, and message; lightweight tags are just a pointer",
      "There is no difference",
      "Lightweight tags can be pushed but annotated tags cannot"
    ],
    "answer": 1,
    "explanation": "Annotated tags (created with -a) store extra metadata like tagger name, email, date, and message, while lightweight tags are simply named pointers to a commit."
  },
  {
    "id": 46,
    "topic": "Remote Repository",
    "difficulty": "Easy",
    "question": "What is a remote in Git?",
    "options": [
      "A local backup directory",
      "A reference to another copy of the repository, typically on a server",
      "A separate branch",
      "A configuration file"
    ],
    "answer": 1,
    "explanation": "A remote is a bookmark pointing to another version of the same repository, usually hosted on a server like GitHub, GitLab, or Bitbucket."
  },
  {
    "id": 47,
    "topic": "Remote Repository",
    "difficulty": "Easy",
    "question": "Which command lists all configured remotes?",
    "options": [
      "git remote list",
      "git remote -v",
      "git remotes",
      "git show-remotes"
    ],
    "answer": 1,
    "explanation": "git remote -v displays all configured remote repositories along with their fetch and push URLs, giving a complete view of remote connections."
  },
  {
    "id": 48,
    "topic": "Origin",
    "difficulty": "Easy",
    "question": "What is 'origin' in Git?",
    "options": [
      "The default branch name",
      "The default name Git gives to the primary remote repository",
      "The first commit in a repository",
      "A special Git configuration file"
    ],
    "answer": 1,
    "explanation": "Origin is the conventional default name assigned by Git to the primary remote repository when you clone or add a remote to your local repository."
  },
  {
    "id": 49,
    "topic": "Fetch",
    "difficulty": "Easy",
    "question": "What does git fetch do?",
    "options": [
      "Downloads remote changes and merges them automatically",
      "Downloads remote changes without merging into local branches",
      "Uploads local changes to the remote",
      "Deletes remote branches"
    ],
    "answer": 1,
    "explanation": "git fetch downloads objects and refs from a remote repository but does not modify your working tree or merge changes into your current branch."
  },
  {
    "id": 50,
    "topic": "Pull",
    "difficulty": "Easy",
    "question": "What is git pull equivalent to?",
    "options": [
      "git fetch followed by git merge",
      "git fetch followed by git rebase",
      "git push followed by git fetch",
      "git clone followed by git merge"
    ],
    "answer": 0,
    "explanation": "By default, git pull is equivalent to git fetch followed by git merge, integrating remote changes into the current branch."
  },
  {
    "id": 51,
    "topic": "Pull",
    "difficulty": "Easy",
    "question": "Which flag makes git pull use rebase instead of merge?",
    "options": [
      "--merge",
      "--rebase",
      "--no-merge",
      "--fast-forward"
    ],
    "answer": 1,
    "explanation": "git pull --rebase fetches remote changes and then rebases your local commits on top of the fetched changes instead of creating a merge commit."
  },
  {
    "id": 52,
    "topic": "Push",
    "difficulty": "Easy",
    "question": "What does git push do?",
    "options": [
      "Downloads changes from the remote",
      "Uploads local branch commits to a remote repository",
      "Creates a new local branch",
      "Deletes the remote repository"
    ],
    "answer": 1,
    "explanation": "git push transfers local branch commits to a remote repository, updating the remote refs so others can see your changes."
  },
  {
    "id": 53,
    "topic": "Push",
    "difficulty": "Easy",
    "question": "What does git push -u origin main do?",
    "options": [
      "Pushes and then deletes the local branch",
      "Pushes and sets the upstream tracking reference",
      "Pushes and undoes the last commit",
      "Pushes and creates a new remote"
    ],
    "answer": 1,
    "explanation": "The -u (or --set-upstream) flag pushes the branch and sets the upstream tracking reference, so future git pull/push commands work without specifying the remote and branch."
  },
  {
    "id": 54,
    "topic": "Clone",
    "difficulty": "Easy",
    "question": "What does git clone create?",
    "options": [
      "Only the working directory files",
      "A full copy of the repository including history and remotes",
      "A shallow copy without history",
      "Only the main branch"
    ],
    "answer": 1,
    "explanation": "git clone creates a complete copy of the remote repository, including all commit history, branches, and the remote configuration, in a new directory."
  },
  {
    "id": 55,
    "topic": "Clone",
    "difficulty": "Easy",
    "question": "Which flag creates a shallow clone with limited commit history?",
    "options": [
      "--depth",
      "--shallow",
      "--limit",
      "--history"
    ],
    "answer": 0,
    "explanation": "git clone --depth=1 creates a shallow clone with only the latest commit, significantly reducing download time and disk space for large repositories."
  },
  {
    "id": 56,
    "topic": "Fork",
    "difficulty": "Easy",
    "question": "What is a fork in the context of platforms like GitHub?",
    "options": [
      "A Git branch on the same repository",
      "A personal copy of someone else's repository on your account",
      "A merge of two repositories",
      "A tag on a remote repository"
    ],
    "answer": 1,
    "explanation": "A fork creates a personal copy of another user's repository under your own account, allowing you to make changes without affecting the original project."
  },
  {
    "id": 57,
    "topic": "Fork",
    "difficulty": "Easy",
    "question": "What is the typical workflow after forking a repository?",
    "options": [
      "Push directly to the original repository",
      "Clone your fork, make changes, and create a pull request to the original",
      "Delete the original repository",
      "Merge the fork back automatically"
    ],
    "answer": 1,
    "explanation": "The standard fork workflow involves cloning your fork locally, making changes, pushing to your fork, and then submitting a pull request to the upstream repository."
  },
  {
    "id": 58,
    "topic": "Upstream",
    "difficulty": "Easy",
    "question": "What does 'upstream' typically refer to in Git?",
    "options": [
      "A downstream branch",
      "The original repository from which a fork was created",
      "The local .git directory",
      "The most recent commit"
    ],
    "answer": 1,
    "explanation": "Upstream generally refers to the primary or original repository, especially in the context of forks where it points to the source repository."
  },
  {
    "id": 59,
    "topic": "Detached HEAD",
    "difficulty": "Easy",
    "question": "What does it mean to be in a detached HEAD state?",
    "options": [
      "The HEAD pointer is deleted",
      "HEAD points directly to a commit instead of a branch reference",
      "The repository has no commits",
      "The branch has been deleted"
    ],
    "answer": 1,
    "explanation": "In a detached HEAD state, HEAD points to a specific commit rather than a branch, meaning any new commits won't belong to any branch and could be lost."
  },
  {
    "id": 60,
    "topic": "Detached HEAD",
    "difficulty": "Easy",
    "question": "How do you exit a detached HEAD state?",
    "options": [
      "Delete the .git folder",
      "Switch to any branch using git switch or git checkout",
      "Run git detach --off",
      "Restart the computer"
    ],
    "answer": 1,
    "explanation": "You can exit a detached HEAD state by switching to any branch using git switch <branch> or git checkout <branch>, which reattaches HEAD to a branch."
  },
  {
    "id": 61,
    "topic": "Ignore (.gitignore)",
    "difficulty": "Easy",
    "question": "What is the purpose of a .gitignore file?",
    "options": [
      "To delete files from the repository",
      "To specify intentionally untracked files that Git should ignore",
      "To encrypt sensitive files",
      "To list all tracked files"
    ],
    "answer": 1,
    "explanation": ".gitignore tells Git which files or patterns to ignore, preventing build artifacts, dependencies, and sensitive files from being tracked."
  },
  {
    "id": 62,
    "topic": "Ignore (.gitignore)",
    "difficulty": "Easy",
    "question": "Which pattern in .gitignore ignores all .log files in any directory?",
    "options": [
      "*.log",
      "/ *.log",
      ".log",
      "**.log"
    ],
    "answer": 0,
    "explanation": "The *.log pattern matches any file ending with .log in any directory within the repository, effectively ignoring all log files."
  },
  {
    "id": 63,
    "topic": "Ignore (.gitignore)",
    "difficulty": "Easy",
    "question": "What does a leading slash in a .gitignore pattern do?",
    "options": [
      "Ignores files in subdirectories only",
      "Anchors the pattern to the repository root",
      "Comments out the line",
      "Escapes special characters"
    ],
    "answer": 1,
    "explanation": "A leading slash anchors the pattern to the root of the repository, so /config.json matches only at the root and not in subdirectories."
  },
  {
    "id": 64,
    "topic": "Aliases",
    "difficulty": "Easy",
    "question": "How do you create a Git alias for 'git status' as 'git st'?",
    "options": [
      "git alias st = status",
      "git config --global alias.st status",
      "git set-alias st status",
      "git alias --add st status"
    ],
    "answer": 1,
    "explanation": "git config --global alias.st status creates a global alias so that running 'git st' executes 'git status', saving typing for frequently used commands."
  },
  {
    "id": 65,
    "topic": "Git Basics",
    "difficulty": "Easy",
    "question": "Who created Git?",
    "options": [
      "Linus Torvalds",
      "Dennis Ritchie",
      "Richard Stallman",
      "Ken Thompson"
    ],
    "answer": 0,
    "explanation": "Linus Torvalds created Git in 2005 for Linux kernel development after the previous version control system, BitKeeper, revoked its free license."
  },
  {
    "id": 66,
    "topic": "Repository Initialization",
    "difficulty": "Easy",
    "question": "Which command creates a new Git repository in a specified directory?",
    "options": [
      "git init my-project",
      "git new my-project",
      "git create my-project",
      "git start my-project"
    ],
    "answer": 0,
    "explanation": "git init <directory> creates a new empty Git repository in the specified directory, creating the directory if it does not already exist."
  },
  {
    "id": 67,
    "topic": "Git Config",
    "difficulty": "Easy",
    "question": "Which command sets the default editor for Git commits?",
    "options": [
      "git config --global core.editor \"vim\"",
      "git set --global editor \"vim\"",
      "git config --global editor \"vim\"",
      "git config --global set.editor \"vim\""
    ],
    "answer": 0,
    "explanation": "git config --global core.editor sets the text editor that Git will open when it needs you to type a message, such as during commits or merges."
  },
  {
    "id": 68,
    "topic": "Git Config",
    "difficulty": "Easy",
    "question": "What is the scope of git config --local?",
    "options": [
      "Applies to all users on the system",
      "Applies only to the current repository",
      "Applies to the current user across all repositories",
      "Applies to the current branch only"
    ],
    "answer": 1,
    "explanation": "The --local flag sets configuration specific to the current repository, stored in .git/config, overriding global and system settings."
  },
  {
    "id": 69,
    "topic": "Working Tree",
    "difficulty": "Easy",
    "question": "Which command shows the difference between the working tree and the latest commit?",
    "options": [
      "git diff HEAD",
      "git diff --staged",
      "git status",
      "git log --diff"
    ],
    "answer": 0,
    "explanation": "git diff HEAD shows all differences between your working tree and the latest commit, including both staged and unstaged changes."
  },
  {
    "id": 70,
    "topic": "Staging Area",
    "difficulty": "Easy",
    "question": "How do you unstage a file that has been added to the staging area?",
    "options": [
      "git unstage file.txt",
      "git restore --staged file.txt",
      "git remove --staged file.txt",
      "git reset --hard file.txt"
    ],
    "answer": 1,
    "explanation": "git restore --staged file.txt (or git reset HEAD file.txt) removes the file from the staging area while keeping the changes in the working tree."
  },
  {
    "id": 71,
    "topic": "Staging Area",
    "difficulty": "Easy",
    "question": "What does git add -p do?",
    "options": [
      "Adds all files with .p extension",
      "Lets you interactively choose which hunks of changes to stage",
      "Adds files in parallel",
      "Adds only Python files"
    ],
    "answer": 1,
    "explanation": "git add -p (patch mode) lets you review each change hunk and decide whether to include it in the staging area, giving fine-grained control over commits."
  },
  {
    "id": 72,
    "topic": "Commits",
    "difficulty": "Easy",
    "question": "What does git commit --amend do?",
    "options": [
      "Creates a new unrelated commit",
      "Modifies the most recent commit by adding staged changes or changing the message",
      "Deletes the last commit",
      "Merges the last two commits"
    ],
    "answer": 1,
    "explanation": "git commit --amend replaces the last commit with a new one that includes any newly staged changes and/or an updated commit message."
  },
  {
    "id": 73,
    "topic": "Commits",
    "difficulty": "Easy",
    "question": "Which flag allows creating an empty commit?",
    "options": [
      "--empty",
      "--allow-empty",
      "--blank",
      "--no-files"
    ],
    "answer": 1,
    "explanation": "git commit --allow-empty creates a commit with no changes, which can be useful for triggering CI/CD pipelines or documenting workflow steps."
  },
  {
    "id": 74,
    "topic": "Commit History",
    "difficulty": "Easy",
    "question": "What command shows the commit history as a graph with branch topology?",
    "options": [
      "git log --graph",
      "git log --tree",
      "git log --visual",
      "git log --branch"
    ],
    "answer": 0,
    "explanation": "git log --graph adds an ASCII-art representation of the branch and merge history on the left side, making the commit topology visually clear."
  },
  {
    "id": 75,
    "topic": "Git Log",
    "difficulty": "Easy",
    "question": "Which git log flag shows commits from all branches?",
    "options": [
      "--all",
      "--everywhere",
      "--branches",
      "--global"
    ],
    "answer": 0,
    "explanation": "git log --all displays commits from all branches and refs, not just the current branch, giving a complete view of repository history."
  },
  {
    "id": 76,
    "topic": "Git Log",
    "difficulty": "Easy",
    "question": "How do you format git log output to show only commit hashes and messages?",
    "options": [
      "git log --format=\"%h %s\"",
      "git log --only-hash-message",
      "git log --simple",
      "git log --compact"
    ],
    "answer": 0,
    "explanation": "git log --format=\"%h %s\" uses format placeholders where %h is the abbreviated hash and %s is the subject (first line of the commit message)."
  },
  {
    "id": 77,
    "topic": "Git Diff",
    "difficulty": "Easy",
    "question": "Which command shows the diff between two specific branches?",
    "options": [
      "git diff branch1..branch2",
      "git diff --branches branch1 branch2",
      "git compare branch1 branch2",
      "git diff --between branch1 branch2"
    ],
    "answer": 0,
    "explanation": "git diff branch1..branch2 shows the differences between the tips of the two branches, revealing what changes exist in branch2 that are not in branch1."
  },
  {
    "id": 78,
    "topic": "Git Diff",
    "difficulty": "Easy",
    "question": "What does the --stat flag do with git diff?",
    "options": [
      "Shows detailed line-by-line differences",
      "Shows a summary of which files changed and how many lines",
      "Shows only file names",
      "Shows statistics about the repository"
    ],
    "answer": 1,
    "explanation": "git diff --stat provides a compact summary showing which files were modified and a count of insertions and deletions per file."
  },
  {
    "id": 79,
    "topic": "Git Status",
    "difficulty": "Easy",
    "question": "What does the status code '??' indicate in git status --short output?",
    "options": [
      "Modified file",
      "Deleted file",
      "Untracked file",
      "Staged file"
    ],
    "answer": 2,
    "explanation": "In short status output, '??' indicates an untracked file that Git has not yet been told to track through git add."
  },
  {
    "id": 80,
    "topic": "Git Status",
    "difficulty": "Easy",
    "question": "What does 'M ' (M followed by a space) mean in git status --short?",
    "options": [
      "File is modified in the working tree but not staged",
      "File is staged with modifications",
      "File has merge conflicts",
      "File was renamed"
    ],
    "answer": 1,
    "explanation": "In the short format, the first character represents the staging area status and the second represents the working tree status, so 'M ' means staged modifications."
  },
  {
    "id": 81,
    "topic": "Branches",
    "difficulty": "Easy",
    "question": "Which command deletes a local branch that has been fully merged?",
    "options": [
      "git branch --delete feature",
      "git branch -d feature",
      "git remove-branch feature",
      "Both A and B"
    ],
    "answer": 3,
    "explanation": "Both git branch --delete and git branch -d delete a local branch, but only if it has been fully merged into its upstream branch to prevent data loss."
  },
  {
    "id": 82,
    "topic": "Branches",
    "difficulty": "Easy",
    "question": "Which command lists all remote-tracking branches?",
    "options": [
      "git branch -r",
      "git branch --remote",
      "git remote branches",
      "Both A and B"
    ],
    "answer": 3,
    "explanation": "Both git branch -r and git branch --remote list remote-tracking branches, showing branches that represent the state of remote repositories."
  },
  {
    "id": 83,
    "topic": "Branch Creation",
    "difficulty": "Easy",
    "question": "How do you create a new branch based on a specific commit?",
    "options": [
      "git branch feature abc123",
      "git branch feature --from abc123",
      "git create-branch feature abc123",
      "git new-branch feature at abc123"
    ],
    "answer": 0,
    "explanation": "git branch <name> <commit> creates a new branch pointing to the specified commit, allowing you to branch off from any point in history."
  },
  {
    "id": 84,
    "topic": "Branch Switching",
    "difficulty": "Easy",
    "question": "What does git switch -c feature do?",
    "options": [
      "Closes the current branch",
      "Creates and switches to a new branch named feature",
      "Copies the current branch",
      "Checks out a remote branch"
    ],
    "answer": 1,
    "explanation": "git switch -c <name> (short for --create) creates a new branch and switches to it in one step, similar to git checkout -b."
  },
  {
    "id": 85,
    "topic": "Branch Switching",
    "difficulty": "Easy",
    "question": "How do you switch to a remote branch that exists on origin but not locally?",
    "options": [
      "git switch origin/feature",
      "git switch feature (after fetching)",
      "git switch --remote feature",
      "Both A and B"
    ],
    "answer": 1,
    "explanation": "After running git fetch, you can switch to a remote-tracking branch using git switch <branch-name>, and Git will automatically create a local branch that tracks the remote."
  },
  {
    "id": 86,
    "topic": "Merge",
    "difficulty": "Easy",
    "question": "What does git merge --abort do?",
    "options": [
      "Deletes the current branch",
      "Cancels the merge process and returns to the pre-merge state",
      "Completes the merge automatically",
      "Reverts the last merge commit"
    ],
    "answer": 1,
    "explanation": "git merge --abort cancels a conflicted merge and attempts to restore the working tree to the state before the merge began."
  },
  {
    "id": 87,
    "topic": "Merge",
    "difficulty": "Easy",
    "question": "What does git merge --squash feature do?",
    "options": [
      "Deletes the feature branch after merging",
      "Combines all feature branch changes into the staging area without committing",
      "Performs a fast-forward merge",
      "Creates multiple merge commits"
    ],
    "answer": 1,
    "explanation": "git merge --squash takes all the changes from the feature branch and stages them as a single set of changes without creating a merge commit."
  },
  {
    "id": 88,
    "topic": "Fast Forward Merge",
    "difficulty": "Easy",
    "question": "In a fast-forward merge, what happens to the branch pointer?",
    "options": [
      "It stays at the same commit",
      "It moves forward to point to the merged branch's latest commit",
      "It moves backward to a previous commit",
      "It is deleted"
    ],
    "answer": 1,
    "explanation": "During a fast-forward merge, the current branch pointer simply moves forward to point at the same commit as the branch being merged, with no new merge commit created."
  },
  {
    "id": 89,
    "topic": "HEAD",
    "difficulty": "Easy",
    "question": "What is the difference between HEAD and HEAD^?",
    "options": [
      "They refer to the same commit",
      "HEAD^ refers to the parent of the current commit",
      "HEAD^ refers to the child of the current commit",
      "HEAD^ refers to the next branch"
    ],
    "answer": 1,
    "explanation": "HEAD^ is a shorthand for the first parent of the commit that HEAD points to, allowing you to reference the previous commit in the history."
  },
  {
    "id": 90,
    "topic": "HEAD",
    "difficulty": "11",
    "question": "What does HEAD@{2} represent in the reflog?",
    "options": [
      "The second parent of HEAD",
      "The state of HEAD two operations ago in the reflog",
      "The second commit in the repository",
      "The second branch"
    ],
    "answer": 1,
    "explanation": "HEAD@{n} uses the reflog to reference where HEAD was n operations ago, which is different from HEAD~n that follows the commit parent chain."
  },
  {
    "id": 91,
    "topic": "Checkout",
    "difficulty": "Easy",
    "question": "Which command restores a specific file from the staging area to the working tree?",
    "options": [
      "git checkout HEAD -- file.txt",
      "git restore file.txt",
      "git revert file.txt",
      "Both A and B"
    ],
    "answer": 3,
    "explanation": "Both git checkout HEAD -- file.txt (traditional) and git restore file.txt (modern) restore a file in the working tree to match the staging area or HEAD."
  },
  {
    "id": 92,
    "topic": "Checkout",
    "difficulty": "Easy",
    "question": "What does git checkout -b feature origin/feature do?",
    "options": [
      "Deletes the remote branch and creates a local one",
      "Creates a local branch 'feature' that tracks 'origin/feature'",
      "Checks out the remote branch directly",
      "Merges the remote branch into the current branch"
    ],
    "answer": 1,
    "explanation": "This command creates a new local branch 'feature' based on 'origin/feature' and sets up tracking, all in a single step."
  },
  {
    "id": 93,
    "topic": "Tags",
    "difficulty": "Easy",
    "question": "Which command creates an annotated tag?",
    "options": [
      "git tag v1.0",
      "git tag -a v1.0 -m \"Version 1.0\"",
      "git tag --annotate v1.0",
      "git create-tag v1.0"
    ],
    "answer": 1,
    "explanation": "git tag -a v1.0 -m creates an annotated tag with a message, which stores additional metadata like the tagger's name, email, and date."
  },
  {
    "id": 94,
    "topic": "Tags",
    "difficulty": "Easy",
    "question": "Which command lists all tags in the repository?",
    "options": [
      "git tags",
      "git tag",
      "git tag --list",
      "Both B and C"
    ],
    "answer": 3,
    "explanation": "Both git tag and git tag --list display all tags in the repository. The --list flag is explicit but both produce the same output when no pattern is given."
  },
  {
    "id": 95,
    "topic": "Remote Repository",
    "difficulty": "Easy",
    "question": "How do you add a new remote named 'upstream'?",
    "options": [
      "git remote add upstream https://example.com/repo.git",
      "git remote set upstream https://example.com/repo.git",
      "git add remote upstream https://example.com/repo.git",
      "git remote new upstream https://example.com/repo.git"
    ],
    "answer": 0,
    "explanation": "git remote add <name> <url> adds a new remote with the specified name and URL, allowing you to interact with multiple remote repositories."
  },
  {
    "id": 96,
    "topic": "Origin",
    "difficulty": "Easy",
    "question": "How do you change the URL of the origin remote?",
    "options": [
      "git remote set-url origin https://new-url.com/repo.git",
      "git remote change origin https://new-url.com/repo.git",
      "git origin set-url https://new-url.com/repo.git",
      "git config remote.origin.url https://new-url.com/repo.git"
    ],
    "answer": 0,
    "explanation": "git remote set-url updates the URL of an existing remote, which is useful when a repository has been moved or you need to switch between SSH and HTTPS."
  },
  {
    "id": 97,
    "topic": "Origin",
    "difficulty": "Easy",
    "question": "What happens when you remove the origin remote?",
    "options": [
      "The local repository is deleted",
      "You lose the connection to the remote but keep all local commits",
      "All local branches are deleted",
      "The .git directory is corrupted"
    ],
    "answer": 1,
    "explanation": "Removing a remote only removes the connection reference. All local commits, branches, and history remain intact in your local repository."
  },
  {
    "id": 98,
    "topic": "Fetch",
    "difficulty": "Easy",
    "question": "What does git fetch --all do?",
    "options": [
      "Fetches all branches and deletes local ones not on remote",
      "Fetches from all configured remotes",
      "Fetches all files including ignored ones",
      "Fetches the entire repository history"
    ],
    "answer": 1,
    "explanation": "git fetch --all downloads new objects and refs from all configured remotes, not just the default origin remote."
  },
  {
    "id": 99,
    "topic": "Fetch",
    "difficulty": "Easy",
    "question": "After running git fetch, where are the downloaded commits stored?",
    "options": [
      "In the working tree",
      "In the staging area",
      "In remote-tracking branches like origin/main",
      "In a temporary folder"
    ],
    "answer": 2,
    "explanation": "git fetch stores downloaded commits in remote-tracking branches (e.g., origin/main), which are separate from your local branches until you merge or rebase."
  },
  {
    "id": 100,
    "topic": "Pull",
    "difficulty": "Easy",
    "question": "What happens if git pull encounters a merge conflict?",
    "options": [
      "Git automatically resolves the conflict",
      "Git pauses and marks the conflicted files for manual resolution",
      "Git cancels the pull operation entirely",
      "Git overwrites local changes with remote changes"
    ],
    "answer": 1,
    "explanation": "When a pull results in merge conflicts, Git marks the conflicted files and waits for you to resolve the conflicts manually before completing the merge."
  },
  {
    "id": 101,
    "topic": "Pull",
    "difficulty": "Easy",
    "question": "What does git pull --ff-only do?",
    "options": [
      "Pulls and forces a fast-forward merge",
      "Pulls only if a fast-forward merge is possible, otherwise aborts",
      "Pulls and creates a merge commit",
      "Pulls and rebases"
    ],
    "answer": 1,
    "explanation": "git pull --ff-only only succeeds if the merge can be done as a fast-forward, providing a safe pull that avoids creating merge commits."
  },
  {
    "id": 102,
    "topic": "Push",
    "difficulty": "Easy",
    "question": "What does git push --force do?",
    "options": [
      "Pushes all branches at once",
      "Overwrites the remote branch history with local history",
      "Pushes even when there are no changes",
      "Forces Git to use a faster upload protocol"
    ],
    "answer": 1,
    "explanation": "git push --force overwrites the remote branch with your local branch, which can discard commits on the remote that you don't have locally."
  },
  {
    "id": 103,
    "topic": "Push",
    "difficulty": "Easy",
    "question": "What does git push --force-with-lease do compared to --force?",
    "options": [
      "They are exactly the same",
      "It checks that the remote hasn't been updated by someone else before forcing",
      "It forces a lease on the remote repository",
      "It pushes only leased files"
    ],
    "answer": 1,
    "explanation": "git push --force-with-lease is safer than --force because it first checks that no one else has pushed new commits to the remote branch before overwriting."
  },
  {
    "id": 104,
    "topic": "Clone",
    "difficulty": "Easy",
    "question": "How do you clone a repository into a directory with a custom name?",
    "options": [
      "git clone https://repo.com/project.git --name my-folder",
      "git clone https://repo.com/project.git my-folder",
      "git clone https://repo.com/project.git -o my-folder",
      "git clone --into my-folder https://repo.com/project.git"
    ],
    "answer": 1,
    "explanation": "Appending a directory name to the git clone command creates the repository in a folder with that custom name instead of using the repository's default name."
  },
  {
    "id": 105,
    "topic": "Clone",
    "difficulty": "Easy",
    "question": "What does git clone -b feature https://repo.com/project.git do?",
    "options": [
      "Clones only the feature branch with no other branches",
      "Clones the repository and checks out the feature branch",
      "Creates a new branch called feature after cloning",
      "Blocks the feature branch from being cloned"
    ],
    "answer": 1,
    "explanation": "The -b flag specifies which branch to check out after cloning, so the working tree starts on the feature branch instead of the default branch."
  },
  {
    "id": 106,
    "topic": "Fork",
    "difficulty": "Easy",
    "question": "Can you push directly to the original repository from a fork?",
    "options": [
      "Yes, always",
      "No, you typically need write permissions or must use a pull request",
      "Only if the fork is on the same platform",
      "Only during weekends"
    ],
    "answer": 1,
    "explanation": "You generally cannot push directly to the original repository from a fork unless you have been granted write access. The standard practice is to submit a pull request."
  },
  {
    "id": 107,
    "topic": "Upstream",
    "difficulty": "Easy",
    "question": "How do you add the original repository as upstream after forking?",
    "options": [
      "git remote add upstream https://original-repo.com/project.git",
      "git upstream set https://original-repo.com/project.git",
      "git fork --add-upstream https://original-repo.com/project.git",
      "git remote set-origin upstream https://original-repo.com/project.git"
    ],
    "answer": 0,
    "explanation": "After forking, you add the original repository as 'upstream' so you can fetch changes from it and keep your fork synchronized."
  },
  {
    "id": 108,
    "topic": "Upstream",
    "difficulty": "Easy",
    "question": "What does git fetch upstream do in a fork workflow?",
    "options": [
      "Pushes your changes to the original repository",
      "Downloads changes from the original repository into remote-tracking branches",
      "Merges upstream changes into your branch",
      "Deletes your fork"
    ],
    "answer": 1,
    "explanation": "git fetch upstream downloads new commits and refs from the original repository into your local remote-tracking branches without modifying your working branches."
  },
  {
    "id": 109,
    "topic": "Detached HEAD",
    "difficulty": "Easy",
    "question": "If you make commits in a detached HEAD state, what happens when you switch branches?",
    "options": [
      "The commits are automatically saved to a new branch",
      "The commits may be lost since they are not referenced by any branch",
      "Git prevents you from making commits in detached HEAD",
      "The commits are pushed to the remote automatically"
    ],
    "answer": 1,
    "explanation": "Commits made in a detached HEAD state are not on any branch, so switching away may cause Git to eventually garbage collect them unless you create a branch first."
  },
  {
    "id": 110,
    "topic": "Ignore (.gitignore)",
    "difficulty": "Easy",
    "question": "How do you negate a pattern in .gitignore to track a previously ignored file?",
    "options": [
      "Using ! prefix, like !important.log",
      "Using + prefix, like +important.log",
      "Using # prefix, like #important.log",
      "Using - prefix, like -important.log"
    ],
    "answer": 0,
    "explanation": "A leading ! negates the pattern, so if *.log is ignored, !important.log would override that and track the important.log file."
  },
  {
    "id": 111,
    "topic": "Ignore (.gitignore)",
    "difficulty": "Easy",
    "question": "What does a trailing /** in a .gitignore pattern match?",
    "options": [
      "Only files in the root directory",
      "Everything inside the specified directory recursively",
      "Only direct children of the directory",
      "Hidden files only"
    ],
    "answer": 1,
    "explanation": "The /** pattern matches everything inside a directory and all its subdirectories, providing a recursive ignore pattern."
  },
  {
    "id": 112,
    "topic": "Aliases",
    "difficulty": "Easy",
    "question": "Which alias would let you run 'git co' instead of 'git checkout'?",
    "options": [
      "git config --global alias.co 'checkout'",
      "git config --global alias.co checkout",
      "git alias co = checkout",
      "git set alias co checkout"
    ],
    "answer": 1,
    "explanation": "git config --global alias.co checkout creates an alias where 'co' is the shortcut and 'checkout' is the Git command it expands to (no quotes needed for the value)."
  },
  {
    "id": 113,
    "topic": "Git Basics",
    "difficulty": "Easy",
    "question": "What does VCS stand for?",
    "options": [
      "Virtual Computing System",
      "Version Control System",
      "Variable Configuration System",
      "Virtual Cloud Storage"
    ],
    "answer": 1,
    "explanation": "VCS stands for Version Control System, which is software that helps manage changes to source code and other files over time."
  },
  {
    "id": 114,
    "topic": "Git Basics",
    "difficulty": "Easy",
    "question": "Which of the following is NOT a distributed version control system?",
    "options": [
      "Git",
      "Mercurial",
      "SVN",
      "Bazaar"
    ],
    "answer": 2,
    "explanation": "SVN (Subversion) is a centralized version control system, unlike Git, Mercurial, and Bazaar which are distributed systems."
  },
  {
    "id": 115,
    "topic": "Git Installation",
    "difficulty": "Easy",
    "question": "On macOS, which package manager can be used to install Git?",
    "options": [
      "apt-get",
      "yum",
      "Homebrew",
      "pacman"
    ],
    "answer": 2,
    "explanation": "Homebrew is the most popular package manager for macOS, and you can install Git using the command 'brew install git'."
  },
  {
    "id": 116,
    "topic": "Repository Initialization",
    "difficulty": "Easy",
    "question": "What does git init --bare create?",
    "options": [
      "An empty working directory",
      "A bare repository with no working tree, used as a shared server repository",
      "A repository with no .git folder",
      "A minimal repository with only one branch"
    ],
    "answer": 1,
    "explanation": "git init --bare creates a bare repository that contains only the Git version control data with no working tree, typically used on servers as a central repository."
  },
  {
    "id": 117,
    "topic": "Repository Initialization",
    "difficulty": "Easy",
    "question": "Can you run git init in an existing directory that already has files?",
    "options": [
      "No, the directory must be empty",
      "Yes, Git will start tracking the existing files after you add them",
      "Yes, but all existing files will be deleted",
      "No, Git will create a new subdirectory instead"
    ],
    "answer": 1,
    "explanation": "You can initialize Git in any existing directory. The files won't be automatically tracked until you explicitly add them with git add."
  },
  {
    "id": 118,
    "topic": "Git Config",
    "difficulty": "Easy",
    "question": "Where are system-level Git configurations stored?",
    "options": [
      "~/.gitconfig",
      ".git/config",
      "/etc/gitconfig",
      "/usr/local/git/config"
    ],
    "answer": 2,
    "explanation": "System-level configurations are stored in /etc/gitconfig (or the path specified by $XDG_CONFIG_HOME/git/config) and apply to all users and repositories on the system."
  },
  {
    "id": 119,
    "topic": "Working Tree",
    "difficulty": "Easy",
    "question": "What happens to uncommitted changes when you switch branches if there are no conflicts?",
    "options": [
      "They are always discarded",
      "They are carried over to the new branch",
      "They are automatically committed",
      "Git prevents the branch switch"
    ],
    "answer": 1,
    "explanation": "If the uncommitted changes don't conflict with the target branch, Git carries them over, allowing you to continue working on the new branch with the same modifications."
  },
  {
    "id": 120,
    "topic": "Staging Area",
    "difficulty": "Easy",
    "question": "Which command stages all modified files but not new (untracked) files?",
    "options": [
      "git add .",
      "git add -u",
      "git add --all",
      "git add --modified"
    ],
    "answer": 1,
    "explanation": "git add -u (or --update) stages modifications and deletions of already-tracked files but does not add new untracked files to the staging area."
  },
  {
    "id": 121,
    "topic": "Staging Area",
    "difficulty": "Easy",
    "question": "What does git add -A do?",
    "options": [
      "Adds only ASCII files",
      "Stages all changes including new, modified, and deleted files",
      "Adds all remote branches",
      "Adds all aliases"
    ],
    "answer": 1,
    "explanation": "git add -A (or --all) stages all changes across the entire repository: new files, modifications, and deletions, regardless of the current directory."
  },
  {
    "id": 122,
    "topic": "Commits",
    "difficulty": "Easy",
    "question": "What information is stored in a Git commit object?",
    "options": [
      "Only the file contents",
      "Author, committer, message, parent references, and tree object",
      "Only the commit message and author",
      "Only the changed files"
    ],
    "answer": 1,
    "explanation": "A commit object contains the tree object (snapshot), parent commit references, author and committer information, and the commit message."
  },
  {
    "id": 123,
    "topic": "Commits",
    "difficulty": "Easy",
    "question": "What command skips the pre-commit hooks during a commit?",
    "options": [
      "git commit --no-hooks",
      "git commit --no-verify",
      "git commit --skip-hooks",
      "git commit --bypass"
    ],
    "answer": 1,
    "explanation": "git commit --no-verify bypasses both the pre-commit and commit-msg hooks, useful when you need to commit quickly despite hook failures."
  },
  {
    "id": 124,
    "topic": "Commit History",
    "difficulty": "Easy",
    "question": "How many parent commits can a regular (non-merge) commit have?",
    "options": [
      "Zero",
      "One",
      "Two",
      "Unlimited"
    ],
    "answer": 1,
    "explanation": "A regular commit has exactly one parent commit, representing the state of the repository before this commit was made."
  },
  {
    "id": 125,
    "topic": "Git Log",
    "difficulty": "Easy",
    "question": "Which flag filters git log to show commits by a specific author?",
    "options": [
      "--author",
      "--by",
      "--user",
      "--person"
    ],
    "answer": 0,
    "explanation": "git log --author=\"name\" filters the log to show only commits authored by the specified person, supporting pattern matching."
  },
  {
    "id": 126,
    "topic": "Git Log",
    "difficulty": "Easy",
    "question": "Which flag filters git log to show commits since a specific date?",
    "options": [
      "--since",
      "--after",
      "--from-date",
      "Both A and B"
    ],
    "answer": 3,
    "explanation": "Both --since and --after filter commits to show only those made after the specified date, accepting various date formats."
  },
  {
    "id": 127,
    "topic": "Git Diff",
    "difficulty": "Easy",
    "question": "What does git diff --name-only show?",
    "options": [
      "Full file contents that changed",
      "Only the names of files that differ",
      "Only the line numbers that changed",
      "Only the commit hashes"
    ],
    "answer": 1,
    "explanation": "git diff --name-only displays just the file names that have changes, without showing the actual diff content, useful for a quick summary."
  },
  {
    "id": 128,
    "topic": "Git Diff",
    "difficulty": "Easy",
    "question": "Which flag makes git diff show word-level changes instead of line-level?",
    "options": [
      "--word",
      "--word-diff",
      "--words",
      "--granular"
    ],
    "answer": 1,
    "explanation": "git diff --word-diff shows changes at the word level within lines, highlighting exactly which words were added or removed."
  },
  {
    "id": 129,
    "topic": "Git Status",
    "difficulty": "Easy",
    "question": "What does 'D ' mean in git status --short output?",
    "options": [
      "A directory was created",
      "A file was deleted and the deletion is staged",
      "A file was detached",
      "A diff was detected"
    ],
    "answer": 1,
    "explanation": "'D ' in the short format means the file deletion has been staged (first character is D), but there are no additional unstaged changes (second character is space)."
  },
  {
    "id": 130,
    "topic": "Git Status",
    "difficulty": "Easy",
    "question": "Which flag in git status hides untracked files from the output?",
    "options": [
      "--no-untracked",
      "--hide-untracked",
      "-u no",
      "--untracked-files=no"
    ],
    "answer": 3,
    "explanation": "git status --untracked-files=no hides untracked files from the output, letting you focus on tracked files that have been modified or staged."
  },
  {
    "id": 131,
    "topic": "Branches",
    "difficulty": "Easy",
    "question": "Which command renames the current branch?",
    "options": [
      "git branch --rename new-name",
      "git branch -m new-name",
      "git rename-branch new-name",
      "Both A and B"
    ],
    "answer": 3,
    "explanation": "Both git branch --rename and git branch -m rename the current branch to the specified new name."
  },
  {
    "id": 132,
    "topic": "Branches",
    "difficulty": "Easy",
    "question": "What does git branch -a show?",
    "options": [
      "Only local branches",
      "Only remote branches",
      "Both local and remote-tracking branches",
      "All commits in all branches"
    ],
    "answer": 2,
    "explanation": "git branch -a lists all branches including local branches and remote-tracking branches from all configured remotes."
  },
  {
    "id": 133,
    "topic": "Branch Creation",
    "difficulty": "Easy",
    "question": "What happens if you create a branch with a name that already exists?",
    "options": [
      "Git overwrites the existing branch",
      "Git shows a fatal error about the branch already existing",
      "Git creates a duplicate branch",
      "Git silently does nothing"
    ],
    "answer": 1,
    "explanation": "Git prevents branch name collisions and displays a fatal error indicating that a branch with that name already exists."
  },
  {
    "id": 134,
    "topic": "Branch Switching",
    "difficulty": "Easy",
    "question": "What does git switch --discard-changes feature do?",
    "options": [
      "Switches and keeps changes",
      "Switches and discards all uncommitted changes",
      "Switches and stashes changes",
      "Switches and commits changes"
    ],
    "answer": 1,
    "explanation": "git switch --discard-changes forces the switch to the specified branch, discarding any uncommitted changes in the working tree and staging area."
  },
  {
    "id": 135,
    "topic": "Merge",
    "difficulty": "Easy",
    "question": "Which flag makes git merge produce a merge commit even when fast-forward is possible?",
    "options": [
      "--no-ff",
      "--force-commit",
      "--always-merge",
      "--no-fast-forward"
    ],
    "answer": 0,
    "explanation": "git merge --no-ff ensures a merge commit is always created, preserving the feature branch in the history even when a fast-forward would be possible."
  },
  {
    "id": 136,
    "topic": "Merge",
    "difficulty": "Easy",
    "question": "What does git merge --edit do?",
    "options": [
      "Opens an editor to modify the merge commit message",
      "Opens the conflicted files for editing",
      "Edits the branch names",
      "Opens the .git directory for editing"
    ],
    "answer": 0,
    "explanation": "git merge --edit opens the default editor to let you modify the default merge commit message before completing the merge."
  },
  {
    "id": 137,
    "topic": "Fast Forward Merge",
    "difficulty": "Easy",
    "question": "Does a fast-forward merge create a new commit object?",
    "options": [
      "Yes, it creates a merge commit",
      "No, it only moves the branch pointer",
      "Yes, it creates a regular commit",
      "It depends on the file changes"
    ],
    "answer": 1,
    "explanation": "A fast-forward merge does not create any new commit object; it simply moves the branch pointer forward to match the merged branch's tip commit."
  },
  {
    "id": 138,
    "topic": "HEAD",
    "difficulty": "Easy",
    "question": "What file does HEAD typically point to in a repository?",
    "options": [
      "A specific commit hash directly",
      "A reference file in .git/refs/heads/ for the current branch",
      "The .gitconfig file",
      "The .gitignore file"
    ],
    "answer": 1,
    "explanation": "Normally, HEAD contains a reference to a file in .git/refs/heads/ that in turn contains the commit hash of the current branch tip."
  },
  {
    "id": 139,
    "topic": "Checkout",
    "difficulty": "Easy",
    "question": "Which command checks out a file from a specific commit?",
    "options": [
      "git checkout abc123 -- file.txt",
      "git checkout abc123 file.txt",
      "Both A and B",
      "git restore --from abc123 file.txt"
    ],
    "answer": 2,
    "explanation": "Both git checkout abc123 -- file.txt and git checkout abc123 file.txt restore the file to its state at commit abc123."
  },
  {
    "id": 140,
    "topic": "Checkout",
    "difficulty": "Easy",
    "question": "What does git checkout . do?",
    "options": [
      "Checks out the root directory",
      "Discards all uncommitted changes in the working tree",
      "Creates a new branch named dot",
      "Shows the diff of all files"
    ],
    "answer": 1,
    "explanation": "git checkout . discards all uncommitted changes in the current directory and subdirectories, restoring all files to the staged or committed state."
  },
  {
    "id": 141,
    "topic": "Tags",
    "difficulty": "Easy",
    "question": "How do you push all tags to a remote repository?",
    "options": [
      "git push --tags",
      "git push origin --tags",
      "git push --all-tags",
      "All of the above work"
    ],
    "answer": 3,
    "explanation": "All three commands push tags to the remote. git push --tags and git push --all-tags push to the default remote, while git push origin --tags specifies the remote."
  },
  {
    "id": 142,
    "topic": "Tags",
    "difficulty": "Easy",
    "question": "How do you delete a local tag named 'v1.0'?",
    "options": [
      "git tag --delete v1.0",
      "git tag -d v1.0",
      "git remove-tag v1.0",
      "Both A and B"
    ],
    "answer": 3,
    "explanation": "Both git tag --delete and git tag -d delete a local tag. The -d flag is the short form of --delete."
  },
  {
    "id": 143,
    "topic": "Remote Repository",
    "difficulty": "Easy",
    "question": "How do you remove a remote named 'upstream'?",
    "options": [
      "git remote remove upstream",
      "git remote rm upstream",
      "git remote delete upstream",
      "Both A and B"
    ],
    "answer": 3,
    "explanation": "Both git remote remove and git remote rm remove the specified remote and its configuration from the repository."
  },
  {
    "id": 144,
    "topic": "Origin",
    "difficulty": "Easy",
    "question": "What does 'git remote show origin' display?",
    "options": [
      "Only the URL of origin",
      "Detailed information about the origin remote including tracked branches and URLs",
      "The contents of the origin repository",
      "Only the branch names on origin"
    ],
    "answer": 1,
    "explanation": "git remote show origin provides detailed information including the remote URLs, tracked branches, local branches that track remote branches, and stale references."
  },
  {
    "id": 145,
    "topic": "Fetch",
    "difficulty": "Easy",
    "question": "What does git fetch --prune do?",
    "options": [
      "Deletes local branches",
      "Removes remote-tracking branches that no longer exist on the remote",
      "Prunes untracked files",
      "Deletes old commit objects"
    ],
    "answer": 1,
    "explanation": "git fetch --prune (or git fetch -p) removes remote-tracking references for branches that have been deleted on the remote, keeping your remote refs clean."
  },
  {
    "id": 146,
    "topic": "Pull",
    "difficulty": "Easy",
    "question": "What is the default merge strategy used by git pull?",
    "options": [
      "recursive",
      "octopus",
      "ours",
      "resolve"
    ],
    "answer": 0,
    "explanation": "The 'recursive' strategy is the default merge strategy for git pull when merging a single branch, capable of handling renames and detecting criss-cross merges."
  },
  {
    "id": 147,
    "topic": "Push",
    "difficulty": "Easy",
    "question": "How do you push a specific tag to the remote?",
    "options": [
      "git push origin v1.0",
      "git push --tag v1.0",
      "git push v1.0",
      "git tag --push v1.0"
    ],
    "answer": 0,
    "explanation": "git push origin v1.0 pushes the specific tag named v1.0 to the origin remote, rather than pushing all tags."
  },
  {
    "id": 148,
    "topic": "Push",
    "difficulty": "Easy",
    "question": "What does git push --delete origin feature do?",
    "options": [
      "Deletes the local branch",
      "Deletes the remote branch 'feature' on origin",
      "Deletes the origin remote",
      "Deletes all branches on origin"
    ],
    "answer": 1,
    "explanation": "git push --delete origin feature deletes the branch named 'feature' from the remote repository 'origin'."
  },
  {
    "id": 149,
    "topic": "Clone",
    "difficulty": "Easy",
    "question": "What does git clone --mirror do?",
    "options": [
      "Creates a regular clone with a mirrored directory structure",
      "Creates a bare mirror clone that includes all refs including remote-tracking ones",
      "Clones only the main branch as a mirror",
      "Creates a read-only clone"
    ],
    "answer": 1,
    "explanation": "git clone --mirror creates a bare repository that mirrors all refs from the source, including remote-tracking branches, suitable for backup purposes."
  },
  {
    "id": 150,
    "topic": "Fork",
    "difficulty": "Easy",
    "question": "Where does a fork live on GitHub?",
    "options": [
      "In the same organization as the original",
      "In your personal account or organization",
      "In a special fork directory",
      "In the original repository"
    ],
    "answer": 1,
    "explanation": "A fork on GitHub is created under your personal account or an organization you own, as a separate repository from the original."
  },
  {
    "id": 151,
    "topic": "Upstream",
    "difficulty": "Easy",
    "question": "After fetching from upstream, how do you merge upstream changes into your local main branch?",
    "options": [
      "git merge upstream/main",
      "git merge upstream",
      "git pull upstream",
      "Both A and B could work depending on context"
    ],
    "answer": 0,
    "explanation": "git merge upstream/main merges the changes from the upstream's main branch into your current local branch, keeping your fork up to date."
  },
  {
    "id": 152,
    "topic": "Detached HEAD",
    "difficulty": "Easy",
    "question": "How do you save work done in a detached HEAD state?",
    "options": [
      "git save HEAD",
      "git branch <new-branch-name> to create a branch at the current commit",
      "git attach HEAD",
      "git commit --detach-save"
    ],
    "answer": 1,
    "explanation": "Running git branch <name> while in a detached HEAD state creates a new branch at the current commit, preserving any commits you've made."
  },
  {
    "id": 153,
    "topic": "Ignore (.gitignore)",
    "difficulty": "Easy",
    "question": "What does the # character do in a .gitignore file?",
    "options": [
      "Ignores hidden files",
      "Marks a comment line that Git ignores",
      "Specifies a numerical pattern",
      "Escapes the next character"
    ],
    "answer": 1,
    "explanation": "Lines beginning with # in .gitignore are treated as comments and are ignored by Git when processing ignore patterns."
  },
  {
    "id": 154,
    "topic": "Ignore (.gitignore)",
    "difficulty": "Easy",
    "question": "What does a single * in a .gitignore pattern match?",
    "options": [
      "All files and directories recursively",
      "Any characters except a slash within a single directory level",
      "Only hidden files",
      "Only text files"
    ],
    "answer": 1,
    "explanation": "A single * matches any number of characters except a slash, so it operates within a single directory level rather than recursively."
  },
  {
    "id": 155,
    "topic": "Aliases",
    "difficulty": "Easy",
    "question": "Can a Git alias include flags?",
    "options": [
      "No, aliases can only reference command names",
      "Yes, you can include flags in the alias value",
      "Only in the system config",
      "Only with the --allow-flags option"
    ],
    "answer": 1,
    "explanation": "Git aliases can include full command strings with flags, such as alias.lg = 'log --oneline --graph --decorate', which runs all those flags together."
  },
  {
    "id": 156,
    "topic": "Git Basics",
    "difficulty": "Easy",
    "question": "What does Git use to identify the content of files?",
    "options": [
      "File names and timestamps",
      "SHA-1 hashes of the file contents (blobs)",
      "File sizes",
      "File permissions"
    ],
    "answer": 1,
    "explanation": "Git computes a SHA-1 hash of the file content to create a blob object, ensuring that identical content produces the same hash regardless of file name or location."
  },
  {
    "id": 157,
    "topic": "Git Basics",
    "difficulty": "Easy",
    "question": "Is it possible to use Git without a remote repository?",
    "options": [
      "No, Git requires a remote to function",
      "Yes, Git works entirely locally as a version control system",
      "Only for the first commit",
      "Only with a special license"
    ],
    "answer": 1,
    "explanation": "Git is fully functional as a local version control system. Remotes are only needed for collaboration and backup, not for core Git operations."
  },
  {
    "id": 158,
    "topic": "Git Installation",
    "difficulty": "Easy",
    "question": "What is the minimum recommended Git version for modern workflows?",
    "options": [
      "1.5.x",
      "2.0.x",
      "2.30 or later",
      "1.9.x"
    ],
    "answer": 2,
    "explanation": "Git 2.30 or later is recommended for modern workflows as it includes features like git switch, git restore, improved security, and performance enhancements."
  },
  {
    "id": 159,
    "topic": "Repository Initialization",
    "difficulty": "Easy",
    "question": "What is the default branch name set by git init if not configured otherwise?",
    "options": [
      "It depends on the Git version and configuration",
      "Always 'master'",
      "Always 'main'",
      "Always 'develop'"
    ],
    "answer": 0,
    "explanation": "The default branch name depends on the init.defaultBranch configuration. Git 2.28+ can be configured to use 'main', while older versions default to 'master'."
  },
  {
    "id": 160,
    "topic": "Git Config",
    "difficulty": "Easy",
    "question": "Which command unsets a configuration value?",
    "options": [
      "git config --unset core.editor",
      "git config --remove core.editor",
      "git config --delete core.editor",
      "git config --clear core.editor"
    ],
    "answer": 0,
    "explanation": "git config --unset <key> removes the specified configuration variable from the config file, reverting to a lower-priority config or the default value."
  },
  {
    "id": 161,
    "topic": "Working Tree",
    "difficulty": "Easy",
    "question": "Which command shows a concise summary of the working tree state?",
    "options": [
      "git status -s",
      "git state",
      "git info",
      "git summary"
    ],
    "answer": 0,
    "explanation": "git status -s provides a short, concise summary of the working tree and staging area status using two-character status codes."
  },
  {
    "id": 162,
    "topic": "Staging Area",
    "difficulty": "Easy",
    "question": "What is another name for the staging area in Git?",
    "options": [
      "Cache",
      "Index",
      "Buffer",
      "Both A and B"
    ],
    "answer": 3,
    "explanation": "The staging area is also called the 'index' or 'cache' in Git documentation and commands (e.g., git diff --cached)."
  },
  {
    "id": 163,
    "topic": "Commits",
    "difficulty": "Easy",
    "question": "What is the minimum required information for a commit?",
    "options": [
      "Author email and file contents only",
      "A tree object and a commit message",
      "Only the file contents",
      "Author, date, and file contents"
    ],
    "answer": 1,
    "explanation": "A commit requires at minimum a tree object (the snapshot) and a commit message. Author and committer information are also typically included but have defaults."
  },
  {
    "id": 164,
    "topic": "Commits",
    "difficulty": "Easy",
    "question": "How long is a full Git commit SHA-1 hash?",
    "options": [
      "32 characters",
      "40 characters",
      "64 characters",
      "20 characters"
    ],
    "answer": 1,
    "explanation": "A full SHA-1 hash in Git is 40 hexadecimal characters long, representing 160 bits of hash output."
  },
  {
    "id": 165,
    "topic": "Git Log",
    "difficulty": "Easy",
    "question": "What does git log --decorate show?",
    "options": [
      "Colored output",
      "Reference names (branches, tags) next to commits",
      "Author avatars",
      "Commit file sizes"
    ],
    "answer": 1,
    "explanation": "git log --decorate adds reference names like branch and tag names next to the commit hashes, showing which refs point to which commits."
  },
  {
    "id": 166,
    "topic": "Git Log",
    "difficulty": "Easy",
    "question": "Which flag reverses the order of git log output?",
    "options": [
      "--reverse",
      "--backwards",
      "--oldest-first",
      "--ascending"
    ],
    "answer": 0,
    "explanation": "git log --reverse shows commits in chronological order from oldest to newest, reversing the default newest-first ordering."
  },
  {
    "id": 167,
    "topic": "Git Diff",
    "difficulty": "Easy",
    "question": "What color coding does git diff use by default for added lines?",
    "options": [
      "Red",
      "Green",
      "Blue",
      "Yellow"
    ],
    "answer": 1,
    "explanation": "By default, git diff shows added lines in green and removed lines in red when color output is enabled."
  },
  {
    "id": 168,
    "topic": "Git Diff",
    "difficulty": "Easy",
    "question": "How do you disable color output in git diff?",
    "options": [
      "git diff --no-color",
      "git diff --color=never",
      "Both A and B",
      "git diff --monochrome"
    ],
    "answer": 2,
    "explanation": "Both --no-color and --color=never disable color output in git diff, producing plain text output without ANSI color codes."
  },
  {
    "id": 169,
    "topic": "Git Status",
    "difficulty": "Easy",
    "question": "What does 'UU' mean in git status output during a merge?",
    "options": [
      "Both sides modified, causing a merge conflict",
      "Both files are untracked",
      "Both files are up to date",
      "Both sides unchanged"
    ],
    "answer": 0,
    "explanation": "'UU' indicates that both sides (ours and theirs) modified the same part of the file, resulting in a merge conflict that needs manual resolution."
  },
  {
    "id": 170,
    "topic": "Branches",
    "difficulty": "Easy",
    "question": "How many branches can a Git repository have?",
    "options": [
      "Maximum 100",
      "Maximum 1000",
      "There is no practical limit",
      "Maximum 256"
    ],
    "answer": 2,
    "explanation": "Git has no practical limit on the number of branches. Each branch is just a small file containing a commit hash, so they are very lightweight."
  },
  {
    "id": 171,
    "topic": "Branch Creation",
    "difficulty": "Easy",
    "question": "Can you create a branch from another branch that is not the current branch?",
    "options": [
      "No, you must be on the branch you want to branch from",
      "Yes, by specifying the source branch: git branch new-branch existing-branch",
      "Only if the source branch is main",
      "Only using git checkout"
    ],
    "answer": 1,
    "explanation": "git branch <new> <existing> creates a new branch from the tip of an existing branch, regardless of which branch you currently have checked out."
  },
  {
    "id": 172,
    "topic": "Branch Switching",
    "difficulty": "Easy",
    "question": "What does git switch - do?",
    "options": [
      "Deletes the current branch",
      "Switches to the previous branch",
      "Switches to the default branch",
      "Shows branch information"
    ],
    "answer": 1,
    "explanation": "git switch - switches to the branch you were on previously, providing a quick way to toggle between two branches."
  },
  {
    "id": 173,
    "topic": "Merge",
    "difficulty": "Easy",
    "question": "Can you merge a branch into itself?",
    "options": [
      "Yes, it creates a self-referential commit",
      "No, Git reports 'Already up to date'",
      "Yes, it duplicates all commits",
      "No, Git deletes the branch"
    ],
    "answer": 1,
    "explanation": "Merging a branch into itself results in Git reporting 'Already up to date' since the branch tip is the same as the merge target."
  },
  {
    "id": 174,
    "topic": "Fast Forward Merge",
    "difficulty": "Easy",
    "question": "How can you tell if a merge was a fast-forward?",
    "options": [
      "A new merge commit is created",
      "No new merge commit is created and the branch pointer moves forward",
      "Git displays a special message",
      "The branch name changes"
    ],
    "answer": 1,
    "explanation": "A fast-forward merge is identifiable by the absence of a new merge commit; the branch pointer simply moves forward to the target commit."
  },
  {
    "id": 175,
    "topic": "HEAD",
    "difficulty": "Easy",
    "question": "Where is the HEAD reference stored in a Git repository?",
    "options": [
      ".git/HEAD",
      ".git/refs/HEAD",
      ".git/config",
      ".git/heads/HEAD"
    ],
    "answer": 0,
    "explanation": "The HEAD reference is stored in the file .git/HEAD, which typically contains a reference to the current branch file in .git/refs/heads/."
  },
  {
    "id": 176,
    "topic": "Checkout",
    "difficulty": "Easy",
    "question": "Why is git checkout considered confusing by many developers?",
    "options": [
      "It is too slow",
      "It has multiple unrelated purposes: switching branches and restoring files",
      "It requires a password",
      "It only works on Windows"
    ],
    "answer": 1,
    "explanation": "git checkout is confusing because it serves two very different purposes: switching branches and restoring files, which is why git switch and git restore were introduced."
  },
  {
    "id": 177,
    "topic": "Tags",
    "difficulty": "Easy",
    "question": "Can a tag point to a different tag?",
    "options": [
      "Yes, tags can point to other tags",
      "No, tags point to commits, not other tags",
      "Only annotated tags can point to other tags",
      "Only lightweight tags can point to other tags"
    ],
    "answer": 1,
    "explanation": "In Git, tags always point to commit objects (or occasionally other objects like blobs or trees), but not to other tags directly."
  },
  {
    "id": 178,
    "topic": "Remote Repository",
    "difficulty": "Easy",
    "question": "Can a repository have multiple remotes?",
    "options": [
      "No, only one remote is allowed",
      "Yes, a repository can have any number of remotes",
      "Maximum of two remotes",
      "Only if they use different protocols"
    ],
    "answer": 1,
    "explanation": "A Git repository can have any number of remotes, each with a unique name, allowing interaction with multiple servers or repositories."
  },
  {
    "id": 179,
    "topic": "Origin",
    "difficulty": "Easy",
    "question": "Is 'origin' a reserved name that Git treats specially?",
    "options": [
      "Yes, 'origin' has special built-in behavior",
      "No, it is just a convention, not a reserved name",
      "Yes, but only for the main branch",
      "No, Git requires remotes to be named 'origin'"
    ],
    "answer": 1,
    "explanation": "'origin' is simply a convention used as the default remote name when cloning. Git treats it like any other remote name and does not give it special behavior."
  },
  {
    "id": 180,
    "topic": "Fetch",
    "difficulty": "Easy",
    "question": "Does git fetch modify your working directory?",
    "options": [
      "Yes, it updates all files",
      "No, it only downloads data without changing the working tree",
      "Yes, but only staged files",
      "It depends on the fetch flags"
    ],
    "answer": 1,
    "explanation": "git fetch only downloads new data and updates remote-tracking references; it never modifies your working directory, staging area, or current branch."
  },
  {
    "id": 181,
    "topic": "Pull",
    "difficulty": "Easy",
    "question": "What is the main risk of using git pull without reviewing changes first?",
    "options": [
      "It might delete the remote repository",
      "It might introduce merge conflicts or unexpected changes into your working tree",
      "It might change your Git configuration",
      "It might create a new remote"
    ],
    "answer": 1,
    "explanation": "git pull automatically merges remote changes, which can introduce unexpected changes or create merge conflicts in your working tree without giving you a chance to review first."
  },
  {
    "id": 182,
    "topic": "Push",
    "difficulty": "Easy",
    "question": "What must you do before pushing a new branch for the first time?",
    "options": [
      "Nothing, Git handles everything automatically",
      "Set the upstream with -u or specify the remote and branch explicitly",
      "Delete the origin remote and re-add it",
      "Create a tag for the branch"
    ],
    "answer": 1,
    "explanation": "When pushing a new branch for the first time, you must either use -u to set the upstream or explicitly specify the remote and branch name in the push command."
  },
  {
    "id": 183,
    "topic": "Clone",
    "difficulty": "Easy",
    "question": "Does git clone automatically set up the origin remote?",
    "options": [
      "No, you must add it manually",
      "Yes, it sets origin to the URL you cloned from",
      "Only if you use the --origin flag",
      "Only for HTTPS URLs"
    ],
    "answer": 1,
    "explanation": "git clone automatically creates an 'origin' remote pointing to the URL you cloned from, so you can immediately use git fetch, pull, and push."
  },
  {
    "id": 184,
    "topic": "Fork",
    "difficulty": "Easy",
    "question": "What happens to your fork when the original repository is deleted?",
    "options": [
      "Your fork is also deleted",
      "Your fork remains intact as an independent repository",
      "Your fork becomes read-only",
      "Your fork is automatically converted to a regular repository"
    ],
    "answer": 1,
    "explanation": "A fork is an independent copy of the repository at the time of forking. Deleting the original does not affect your fork."
  },
  {
    "id": 185,
    "topic": "Upstream",
    "difficulty": "Easy",
    "question": "What does 'git push upstream main' do in a fork workflow?",
    "options": [
      "Pushes to the original repository (if you have write access)",
      "Pushes to a remote named 'upstream'",
      "Pushes to the default remote",
      "Creates a new upstream remote"
    ],
    "answer": 1,
    "explanation": "git push upstream main pushes to a remote named 'upstream', which in a fork workflow typically points to the original repository."
  },
  {
    "id": 186,
    "topic": "Detached HEAD",
    "difficulty": "Easy",
    "question": "Can you still use git log, git diff, and git status in a detached HEAD state?",
    "options": [
      "No, most Git commands are disabled",
      "Yes, most read-only commands work normally",
      "Only git log works",
      "Only git status works"
    ],
    "answer": 1,
    "explanation": "Most Git commands that don't modify the repository work fine in a detached HEAD state, including log, diff, status, show, and blame."
  },
  {
    "id": 187,
    "topic": "Ignore (.gitignore)",
    "difficulty": "Easy",
    "question": "If a file is already tracked by Git, will adding it to .gitignore stop tracking it?",
    "options": [
      "Yes, immediately",
      "No, you must unstage and remove it from tracking first",
      "Yes, after the next commit",
      "No, .gitignore cannot affect already-tracked files"
    ],
    "answer": 1,
    "explanation": ".gitignore only prevents untracked files from being added. To stop tracking a file, you must first remove it from the index with git rm --cached."
  },
  {
    "id": 188,
    "topic": "Ignore (.gitignore)",
    "difficulty": "Easy",
    "question": "Where should you place a .gitignore file for it to apply to the entire repository?",
    "options": [
      "In the .git directory",
      "In the repository root",
      "In your home directory",
      "In any subdirectory"
    ],
    "answer": 1,
    "explanation": "A .gitignore file in the repository root applies to all files and directories in the repository, though patterns can be overridden by .gitignore files in subdirectories."
  },
  {
    "id": 189,
    "topic": "Aliases",
    "difficulty": "Easy",
    "question": "How do you remove a Git alias?",
    "options": [
      "git config --unset alias.<name>",
      "git alias --remove <name>",
      "git unalias <name>",
      "git config --delete-alias <name>"
    ],
    "answer": 0,
    "explanation": "git config --unset alias.<name> removes the specified alias from the configuration, restoring the original command behavior."
  },
  {
    "id": 190,
    "topic": "Git Basics",
    "difficulty": "Easy",
    "question": "What programming language is Git primarily written in?",
    "options": [
      "Python",
      "C",
      "Java",
      "Rust"
    ],
    "answer": 1,
    "explanation": "Git is primarily written in C, with some parts in shell scripting and Perl. This contributes to its speed and efficiency."
  },
  {
    "id": 191,
    "topic": "Git Basics",
    "difficulty": "Easy",
    "question": "What does Git store in its object database?",
    "options": [
      "Only file contents",
      "Blobs, trees, and commits",
      "Only commit messages",
      "Only branch names"
    ],
    "answer": 1,
    "explanation": "Git's object database stores three types of objects: blobs (file contents), trees (directory structures), and commits (snapshots with metadata)."
  },
  {
    "id": 192,
    "topic": "Repository Initialization",
    "difficulty": "Easy",
    "question": "What is the first commit in a repository often called?",
    "options": [
      "Root commit",
      "Initial commit",
      "Base commit",
      "Both A and B"
    ],
    "answer": 3,
    "explanation": "The first commit in a repository is commonly referred to as the root commit or initial commit, as it has no parent commits."
  },
  {
    "id": 193,
    "topic": "Git Config",
    "difficulty": "Easy",
    "question": "Which priority order does Git use for configuration files?",
    "options": [
      "Local > Global > System",
      "System > Global > Local",
      "Global > Local > System",
      "All have equal priority"
    ],
    "answer": 0,
    "explanation": "Local repository config (.git/config) has the highest priority, overriding global (~/.gitconfig), which overrides system (/etc/gitconfig) settings."
  },
  {
    "id": 194,
    "topic": "Working Tree",
    "difficulty": "Easy",
    "question": "What command shows all untracked files explicitly?",
    "options": [
      "git ls-files --others",
      "git status --untracked",
      "git list untracked",
      "git show-untracked"
    ],
    "answer": 0,
    "explanation": "git ls-files --others lists all untracked files in the repository, which can be useful for scripting or detailed analysis."
  },
  {
    "id": 195,
    "topic": "Staging Area",
    "difficulty": "Easy",
    "question": "What does git diff --cached show compared to git diff --staged?",
    "options": [
      "They show different things",
      "They are identical, --cached and --staged are synonyms",
      "--cached shows more detail",
      "--staged is deprecated"
    ],
    "answer": 1,
    "explanation": "--cached and --staged are exact synonyms in git diff, both showing the difference between the staging area and the most recent commit."
  },
  {
    "id": 196,
    "topic": "Commits",
    "difficulty": "Easy",
    "question": "Can a commit have zero parents?",
    "options": [
      "No, every commit must have at least one parent",
      "Yes, the initial (root) commit has no parents",
      "Only in bare repositories",
      "Only when using --allow-empty"
    ],
    "answer": 1,
    "explanation": "The root commit (first commit) in a repository has zero parents, as there is no previous commit to reference."
  },
  {
    "id": 197,
    "topic": "Git Log",
    "difficulty": "Easy",
    "question": "What does git log --grep=\"bugfix\" filter for?",
    "options": [
      "Files containing 'bugfix'",
      "Commits with 'bugfix' in the commit message",
      "Branches with 'bugfix' in the name",
      "Authors named 'bugfix'"
    ],
    "answer": 1,
    "explanation": "git log --grep filters commits by searching for the specified pattern in the commit message, not in file contents or author names."
  },
  {
    "id": 198,
    "topic": "Git Diff",
    "difficulty": "Easy",
    "question": "What does git diff commit1 commit2 -- file.txt show?",
    "options": [
      "Differences in file.txt between the two commits",
      "All differences between the two commits",
      "Only the staging area differences",
      "The full content of file.txt"
    ],
    "answer": 0,
    "explanation": "Specifying a file path at the end limits the diff output to changes in that specific file between the two commits."
  },
  {
    "id": 199,
    "topic": "Git Status",
    "difficulty": "Easy",
    "question": "What does 'A ' mean in git status --short?",
    "options": [
      "A file was amended",
      "A new file has been added to the staging area",
      "A file was archived",
      "A file was approved"
    ],
    "answer": 1,
    "explanation": "'A ' indicates that a file has been newly added to the staging area and will be included in the next commit."
  },
  {
    "id": 200,
    "topic": "Branches",
    "difficulty": "Easy",
    "question": "Which command forcefully deletes a local branch regardless of merge status?",
    "options": [
      "git branch -d feature",
      "git branch -D feature",
      "git branch --force-delete feature",
      "git delete-branch --force feature"
    ],
    "answer": 1,
    "explanation": "git branch -D (capital D, short for --delete --force) deletes a branch even if it hasn't been merged, which can result in losing unmerged commits."
  },
  {
    "id": 201,
    "topic": "Merge Conflicts",
    "difficulty": "Medium",
    "question": "What do conflict markers in a file look like?",
    "options": [
      "<!-- conflict --> and <!-- end -->",
      "<<<<<<< HEAD and >>>>>>> branch-name with ======= in between",
      "# CONFLICT START and # CONFLICT END",
      "[CONFLICT] and [/CONFLICT]"
    ],
    "answer": 1,
    "explanation": "Git uses <<<<<<< HEAD to mark the start of the conflict, ======= to separate the two versions, and >>>>>>> branch-name to mark the end."
  },
  {
    "id": 202,
    "topic": "Merge Conflicts",
    "difficulty": "Medium",
    "question": "What does git diff --check do during conflict resolution?",
    "options": [
      "Checks if all conflicts are resolved",
      "Detects leftover whitespace errors and conflict markers",
      "Checks the diff for syntax errors",
      "Verifies the merge commit message"
    ],
    "answer": 1,
    "explanation": "git diff --check detects whitespace errors and leftover conflict markers, helping you catch unresolved conflicts before committing."
  },
  {
    "id": 203,
    "topic": "Merge Conflicts",
    "difficulty": "Medium",
    "question": "What happens if you try to commit while merge conflicts are unresolved?",
    "options": [
      "Git commits the files with conflict markers",
      "Git prevents the commit with an error about unresolved conflicts",
      "Git automatically resolves conflicts",
      "Git creates a partial commit"
    ],
    "answer": 1,
    "explanation": "Git blocks the commit if any files still contain conflict markers, requiring you to resolve all conflicts and stage the resolved files first."
  },
  {
    "id": 204,
    "topic": "Rebase",
    "difficulty": "Medium",
    "question": "What does git rebase main do when on a feature branch?",
    "options": [
      "Moves the main branch to point at the feature branch",
      "Reapplies feature branch commits on top of the latest main branch",
      "Deletes the main branch",
      "Merges main into the feature branch"
    ],
    "answer": 1,
    "explanation": "git rebase main takes your feature branch commits, temporarily removes them, updates the branch to match main, then replays your commits on top."
  },
  {
    "id": 205,
    "topic": "Rebase",
    "difficulty": "Medium",
    "question": "What is the main advantage of rebasing over merging?",
    "options": [
      "It is always faster",
      "It produces a linear, cleaner commit history",
      "It preserves the original branch structure",
      "It automatically resolves all conflicts"
    ],
    "answer": 1,
    "explanation": "Rebasing creates a linear project history without merge commits, making it easier to read and follow the progression of changes."
  },
  {
    "id": 206,
    "topic": "Rebase",
    "difficulty": "Medium",
    "question": "What does git rebase --abort do?",
    "options": [
      "Deletes the current branch",
      "Cancels the rebase and returns the branch to its original state",
      "Completes the rebase automatically",
      "Skips the current conflicting commit"
    ],
    "answer": 1,
    "explanation": "git rebase --abort stops the rebase process and restores the branch to its state before the rebase began, useful when conflicts become too complex."
  },
  {
    "id": 207,
    "topic": "Cherry Pick",
    "difficulty": "Medium",
    "question": "What does git cherry-pick abc123 do?",
    "options": [
      "Deletes commit abc123",
      "Applies the changes from commit abc123 to the current branch",
      "Moves commit abc123 to a different branch",
      "Reverts the changes from commit abc123"
    ],
    "answer": 1,
    "explanation": "git cherry-pick takes the changes introduced by the specified commit and applies them as a new commit on the current branch."
  },
  {
    "id": 208,
    "topic": "Cherry Pick",
    "difficulty": "Medium",
    "question": "How do you cherry-pick multiple commits?",
    "options": [
      "git cherry-pick abc123 def456",
      "git cherry-pick abc123..def456 (exclusive range) or git cherry-pick abc123^..def456 (inclusive)",
      "git cherry-pick --multiple abc123 def456",
      "Both A and B"
    ],
    "answer": 3,
    "explanation": "You can cherry-pick individual commits by listing them or use a range. The A..B range is exclusive of A, so prepend ^ to include it."
  },
  {
    "id": 209,
    "topic": "Cherry Pick",
    "difficulty": "Medium",
    "question": "What does the -x flag do in git cherry-pick?",
    "options": [
      "Deletes the original commit after cherry-picking",
      "Appends the original commit hash to the cherry-picked commit message",
      "Creates a merge instead of a cherry-pick",
      "Excludes the commit from history"
    ],
    "answer": 1,
    "explanation": "git cherry-pick -x adds a line to the commit message showing the original commit hash, making it easier to trace where the change came from."
  },
  {
    "id": 210,
    "topic": "Reset",
    "difficulty": "Medium",
    "question": "What does git reset --soft HEAD~1 do?",
    "options": [
      "Discards the last commit and all its changes",
      "Undoes the last commit but keeps changes in the staging area",
      "Undoes the last commit and unstages the changes",
      "Deletes the last commit permanently"
    ],
    "answer": 1,
    "explanation": "git reset --soft moves the branch pointer back one commit but keeps all changes from the undone commit in the staging area, ready to be recommitted."
  },
  {
    "id": 211,
    "topic": "Reset",
    "difficulty": "Medium",
    "question": "What does git reset --mixed HEAD~1 do?",
    "options": [
      "Undoes the last commit and keeps changes staged",
      "Undoes the last commit and unstages the changes but keeps them in the working tree",
      "Discards the last commit and all its changes",
      "Resets the working tree to a clean state"
    ],
    "answer": 1,
    "explanation": "git reset --mixed (the default) moves the branch pointer back and unstages the changes, leaving them as modified files in the working tree."
  },
  {
    "id": 212,
    "topic": "Reset",
    "difficulty": "Medium",
    "question": "What does git reset --hard HEAD~1 do?",
    "options": [
      "Undoes the last commit but keeps changes",
      "Undoes the last commit and discards all changes in both the staging area and working tree",
      "Resets only the staging area",
      "Deletes the branch"
    ],
    "answer": 1,
    "explanation": "git reset --hard is destructive: it moves the branch pointer back and resets both the staging area and working tree to match, permanently discarding changes."
  },
  {
    "id": 213,
    "topic": "Revert",
    "difficulty": "Medium",
    "question": "How does git revert differ from git reset?",
    "options": [
      "They are the same command",
      "Revert creates a new commit that undoes changes; reset moves the branch pointer",
      "Revert is destructive; reset is safe",
      "Reset creates a new commit; revert moves the branch pointer"
    ],
    "answer": 1,
    "explanation": "Revert creates a new commit that inversely applies the changes from a previous commit, while reset moves the branch pointer back, potentially discarding history."
  },
  {
    "id": 214,
    "topic": "Revert",
    "difficulty": "Medium",
    "question": "What does git revert --no-commit do?",
    "options": [
      "Reverts without creating any record",
      "Applies the revert changes to the staging area without committing",
      "Deletes the commit being reverted",
      "Reverts the last commit silently"
    ],
    "answer": 1,
    "explanation": "git revert --no-commit applies the inverse changes to the staging area but does not create a commit, allowing you to combine multiple reverts into one commit."
  },
  {
    "id": 215,
    "topic": "Revert",
    "difficulty": "Medium",
    "question": "Can you revert a merge commit?",
    "options": [
      "No, merge commits cannot be reverted",
      "Yes, but you should use -m flag to specify which parent to revert to",
      "Yes, it works exactly like reverting a regular commit",
      "Only if there were no conflicts in the merge"
    ],
    "answer": 1,
    "explanation": "Reverting a merge commit requires the -m flag to specify which parent line to revert onto, because a merge has multiple parents and Git needs to know the target."
  },
  {
    "id": 216,
    "topic": "Restore",
    "difficulty": "Medium",
    "question": "What does git restore --staged file.txt do?",
    "options": [
      "Restores the file from the last commit to the working tree",
      "Unstages the file, moving it from the staging area back to the working tree",
      "Deletes the file",
      "Restores a deleted file from the staging area"
    ],
    "answer": 1,
    "explanation": "git restore --staged removes the file from the staging area while preserving its current content in the working tree, equivalent to git reset HEAD -- file.txt."
  },
  {
    "id": 217,
    "topic": "Restore",
    "difficulty": "Medium",
    "question": "How do you restore a file to its state at a specific commit using git restore?",
    "options": [
      "git restore --from abc123 file.txt",
      "git restore -s abc123 file.txt",
      "git restore --source abc123 file.txt",
      "Both B and C"
    ],
    "answer": 3,
    "explanation": "Both -s and --source specify the tree to restore from, so git restore -s abc123 file.txt and git restore --source abc123 file.txt are equivalent."
  },
  {
    "id": 218,
    "topic": "Stash",
    "difficulty": "Medium",
    "question": "What does git stash do?",
    "options": [
      "Permanently deletes uncommitted changes",
      "Temporarily saves uncommitted changes and reverts the working tree to the last commit",
      "Commits all changes with a special message",
      "Moves changes to a different branch"
    ],
    "answer": 1,
    "explanation": "git stash saves your uncommitted changes (both staged and unstaged) to a stack and restores the working tree to match the last commit."
  },
  {
    "id": 219,
    "topic": "Stash",
    "difficulty": "Medium",
    "question": "How do you apply the most recent stash without removing it from the stash list?",
    "options": [
      "git stash apply",
      "git stash pop",
      "git stash get",
      "git stash restore"
    ],
    "answer": 0,
    "explanation": "git stash apply applies the most recent stash to the working tree but keeps it in the stash list, unlike git stash pop which also removes it."
  },
  {
    "id": 220,
    "topic": "Stash",
    "difficulty": "Medium",
    "question": "What does git stash pop do?",
    "options": [
      "Shows the stash list",
      "Applies the most recent stash and removes it from the stash list",
      "Deletes the most recent stash without applying it",
      "Applies the stash but keeps it in the list"
    ],
    "answer": 1,
    "explanation": "git stash pop applies the most recent stash entries to the working tree and then removes them from the stash stack."
  },
  {
    "id": 221,
    "topic": "Stash",
    "difficulty": "Medium",
    "question": "How do you create a stash with a custom message?",
    "options": [
      "git stash --message \"my work\"",
      "git stash push -m \"my work\"",
      "git stash save \"my work\"",
      "Both B and C"
    ],
    "answer": 3,
    "explanation": "Both git stash push -m and git stash save (though deprecated) allow you to attach a descriptive message to the stash entry for easier identification later."
  },
  {
    "id": 222,
    "topic": "Tags",
    "difficulty": "Medium",
    "question": "How do you check out a specific tag to examine its state?",
    "options": [
      "git tag checkout v1.0",
      "git checkout v1.0",
      "git switch v1.0",
      "git use-tag v1.0"
    ],
    "answer": 1,
    "explanation": "git checkout v1.0 checks out the tag, putting you in a detached HEAD state at the commit the tag points to."
  },
  {
    "id": 223,
    "topic": "Tags",
    "difficulty": "Medium",
    "question": "How do you delete a remote tag?",
    "options": [
      "git push --delete origin v1.0",
      "git push origin :refs/tags/v1.0",
      "Both A and B",
      "git remote remove-tag origin v1.0"
    ],
    "answer": 2,
    "explanation": "Both git push --delete origin v1.0 (modern) and git push origin :refs/tags/v1.0 (traditional) delete the specified tag from the remote repository."
  },
  {
    "id": 224,
    "topic": "Remote Repository",
    "difficulty": "Medium",
    "question": "What does git remote rename old-name new-name do?",
    "options": [
      "Renames the remote repository on the server",
      "Changes the local remote reference name from old-name to new-name",
      "Renames all branches from the remote",
      "Creates a new remote with the new name"
    ],
    "answer": 1,
    "explanation": "git remote rename changes the local short name of a remote (e.g., renaming 'origin' to 'upstream'), updating all tracking branches that reference it."
  },
  {
    "id": 225,
    "topic": "Fetch",
    "difficulty": "Medium",
    "question": "What does git fetch origin feature:feature do?",
    "options": [
      "Fetches and merges the feature branch",
      "Fetches the feature branch from origin and stores it in a local branch named feature",
      "Deletes the local feature branch",
      "Renames the remote branch"
    ],
    "answer": 1,
    "explanation": "The refspec origin feature:feature fetches the remote 'feature' branch and stores it in the local 'feature' branch, creating or updating it."
  },
  {
    "id": 226,
    "topic": "Pull",
    "difficulty": "Medium",
    "question": "What does git pull --rebase --autostash do?",
    "options": [
      "Pulls with rebase and deletes uncommitted changes",
      "Stashes uncommitted changes before pulling, rebases, then applies the stash",
      "Pulls and creates a stash after rebase",
      "Automatically stashes after detecting conflicts"
    ],
    "answer": 1,
    "explanation": "--autostash temporarily stashes uncommitted changes before the pull/rebase operation and applies them back after it completes successfully."
  },
  {
    "id": 227,
    "topic": "Pull",
    "difficulty": "Medium",
    "question": "What does git pull --no-rebase do?",
    "options": [
      "Cancels the pull operation",
      "Ensures the pull uses merge instead of rebase, even if pull.rebase is configured",
      "Pulls without updating the working tree",
      "Pulls only the remote tracking branch"
    ],
    "answer": 1,
    "explanation": "git pull --no-rebase overrides any pull.rebase configuration and ensures the pull uses a merge strategy instead of rebase."
  },
  {
    "id": 228,
    "topic": "Push",
    "difficulty": "Medium",
    "question": "What does git push origin --all do?",
    "options": [
      "Pushes all files including ignored ones",
      "Pushes all local branches to origin",
      "Pushes all commits from all branches",
      "Pushes all tags and branches"
    ],
    "answer": 1,
    "explanation": "git push origin --all pushes all local branches to the specified remote, but does not push tags (use --tags separately for that)."
  },
  {
    "id": 229,
    "topic": "Push",
    "difficulty": "Medium",
    "question": "What does git push --dry-run do?",
    "options": [
      "Pushes without creating a commit",
      "Shows what would be pushed without actually sending anything",
      "Pushes to a temporary remote",
      "Pushes only small files"
    ],
    "answer": 1,
    "explanation": "git push --dry-run performs all the checks and displays what would be pushed, but does not actually send any data to the remote."
  },
  {
    "id": 230,
    "topic": "Clone",
    "difficulty": "Medium",
    "question": "How do you clone only a single branch from a repository?",
    "options": [
      "git clone --single-branch --branch feature https://repo.com/project.git",
      "git clone --only-branch feature https://repo.com/project.git",
      "git clone --branch-only feature https://repo.com/project.git",
      "git clone https://repo.com/project.git --filter=branch:feature"
    ],
    "answer": 0,
    "explanation": "git clone --single-branch --branch <name> clones only the specified branch, reducing the amount of data downloaded significantly."
  },
  {
    "id": 231,
    "topic": "Fork",
    "difficulty": "Medium",
    "question": "How do you sync your fork's main branch with the upstream repository?",
    "options": [
      "git fork --sync upstream",
      "git fetch upstream && git merge upstream/main",
      "git pull --fork-sync",
      "git sync-fork upstream/main"
    ],
    "answer": 1,
    "explanation": "The standard way to sync a fork is to fetch from upstream and then merge upstream/main into your local main, then push to your fork."
  },
  {
    "id": 232,
    "topic": "Upstream",
    "difficulty": "Medium",
    "question": "What does 'git push --set-upstream origin feature' establish?",
    "options": [
      "A new remote named origin",
      "A tracking relationship between the local feature branch and origin/feature",
      "A new upstream branch on origin",
      "A fork relationship"
    ],
    "answer": 1,
    "explanation": "--set-upstream (or -u) establishes a tracking relationship so that future git pull and git push commands on this branch know which remote branch to use."
  },
  {
    "id": 233,
    "topic": "Upstream",
    "difficulty": "Medium",
    "question": "What does 'git branch --set-upstream-to=origin/main' do?",
    "options": [
      "Creates a new branch tracking origin/main",
      "Sets the current branch to track origin/main",
      "Pushes the current branch to origin/main",
      "Renames the current branch to main"
    ],
    "answer": 1,
    "explanation": "git branch --set-upstream-to sets the current branch's upstream tracking reference, so git status shows ahead/behind info and git pull/push work without arguments."
  },
  {
    "id": 234,
    "topic": "Detached HEAD",
    "difficulty": "Medium",
    "question": "How do you create a new branch from a detached HEAD state to save your work?",
    "options": [
      "git branch save-work && git switch save-work",
      "git switch -c save-work",
      "Both A and B",
      "git attach save-work"
    ],
    "answer": 2,
    "explanation": "Both creating a branch and then switching to it, or using git switch -c to create and switch in one step, will save commits made in a detached HEAD state."
  },
  {
    "id": 235,
    "topic": "Detached HEAD",
    "difficulty": "Medium",
    "question": "What warning does Git show when entering a detached HEAD state?",
    "options": [
      "WARNING: You are in a dangerous state",
      "HEAD detached at <commit-hash>",
      "ERROR: No branch selected",
      "WARNING: Changes may be lost"
    ],
    "answer": 1,
    "explanation": "Git displays 'HEAD detached at <commit-hash>' to clearly indicate that HEAD is pointing to a commit rather than a branch reference."
  },
  {
    "id": 236,
    "topic": "Squash",
    "difficulty": "Medium",
    "question": "What does git merge --squash feature do?",
    "options": [
      "Deletes the feature branch",
      "Combines all feature branch commits into the staging area as uncommitted changes",
      "Creates a squashed commit automatically",
      "Rebases the feature branch into a single commit"
    ],
    "answer": 1,
    "explanation": "git merge --squash takes all changes from the feature branch and stages them as a single unit of changes without creating a commit, letting you commit them as one."
  },
  {
    "id": 237,
    "topic": "Squash",
    "difficulty": "Medium",
    "question": "What is the difference between squash merge and rebase squash?",
    "options": [
      "There is no difference",
      "Squash merge stages changes on the target branch; rebase squash rewrites history on the feature branch",
      "Rebase squash is faster",
      "Squash merge preserves branch history"
    ],
    "answer": 1,
    "explanation": "Squash merge combines changes into the staging area without modifying the feature branch, while rebase squash rewrites the feature branch's commits into one."
  },
  {
    "id": 238,
    "topic": "Interactive Rebase",
    "difficulty": "Medium",
    "question": "Which command starts an interactive rebase for the last 3 commits?",
    "options": [
      "git rebase -i HEAD~3",
      "git rebase --interactive HEAD~3",
      "Both A and B",
      "git interactive-rebase 3"
    ],
    "answer": 2,
    "explanation": "Both -i and --interactive start an interactive rebase. HEAD~3 specifies the last 3 commits to be included in the rebase operation."
  },
  {
    "id": 239,
    "topic": "Interactive Rebase",
    "difficulty": "Medium",
    "question": "In interactive rebase, what does the 'squash' action do?",
    "options": [
      "Deletes the commit",
      "Combines the commit with the previous one, keeping both messages",
      "Combines the commit with the previous one, using the earlier message",
      "Moves the commit to the end"
    ],
    "answer": 1,
    "explanation": "Squash combines a commit with the previous one, concatenating both commit messages so you can edit them into a single message."
  },
  {
    "id": 240,
    "topic": "Bisect",
    "difficulty": "Medium",
    "question": "What is git bisect used for?",
    "options": [
      "Splitting a repository into two",
      "Binary search through commit history to find the commit that introduced a bug",
      "Comparing two branches",
      "Dividing a large file into smaller parts"
    ],
    "answer": 1,
    "explanation": "git bisect performs a binary search through the commit history, using good and bad markers to efficiently find the commit that introduced a bug."
  },
  {
    "id": 241,
    "topic": "Bisect",
    "difficulty": "Medium",
    "question": "What does git bisect start do?",
    "options": [
      "Automatically finds the bug",
      "Begins a bisect session, preparing for marking good and bad commits",
      "Starts from the first commit",
      "Starts a new branch for debugging"
    ],
    "answer": 1,
    "explanation": "git bisect start initializes a bisect session, putting Git into a state where you can mark commits as good or bad to narrow down the bug."
  },
  {
    "id": 242,
    "topic": "Blame",
    "difficulty": "Medium",
    "question": "What does git blame file.txt show?",
    "options": [
      "Who deleted the file",
      "Which commit and author last modified each line of the file",
      "All commits that ever touched the file",
      "The diff of the file since the last commit"
    ],
    "answer": 1,
    "explanation": "git blame displays the commit hash, author, and timestamp for every line in a file, showing who last modified each line and in which commit."
  },
  {
    "id": 243,
    "topic": "Blame",
    "difficulty": "Medium",
    "question": "What does git blame -L 10,20 file.txt show?",
    "options": [
      "Blame for lines 1 through 20",
      "Blame for lines 10 through 20 only",
      "Blame starting from commit 10 to 20",
      "Blame for the 10th to 20th commits"
    ],
    "answer": 1,
    "explanation": "The -L flag specifies a line range, so -L 10,20 shows blame information only for lines 10 through 20 of the file."
  },
  {
    "id": 244,
    "topic": "Reflog",
    "difficulty": "Medium",
    "question": "What does git reflog show?",
    "options": [
      "Only commit messages",
      "A log of where HEAD and branch references have pointed over time",
      "Remote repository access logs",
      "File modification logs"
    ],
    "answer": 1,
    "explanation": "git reflog shows a chronological list of all movements of HEAD and branch references, including those from reset, rebase, checkout, and other operations."
  },
  {
    "id": 245,
    "topic": "Reflog",
    "difficulty": "Medium",
    "question": "How long are reflog entries kept by default?",
    "options": [
      "24 hours",
      "30 days",
      "90 days",
      "Forever"
    ],
    "answer": 2,
    "explanation": "By default, reflog entries for non-current branches are kept for 90 days, while entries for the current branch are kept for 30 days (configurable via gc.reflogExpire)."
  },
  {
    "id": 246,
    "topic": "Reflog",
    "difficulty": "Medium",
    "question": "How can you recover a commit that was lost after git reset --hard?",
    "options": [
      "It cannot be recovered",
      "Find the commit in git reflog and reset to it",
      "Run git undo",
      "Restore from the remote only"
    ],
    "answer": 1,
    "explanation": "git reflog records the previous position of the branch before the reset, so you can find the lost commit hash and reset back to it."
  },
  {
    "id": 247,
    "topic": "Ignore (.gitignore)",
    "difficulty": "Medium",
    "question": "What is the global gitignore file location?",
    "options": [
      "~/.gitignore",
      "~/.config/git/ignore",
      "It depends on core.excludesFile configuration",
      "/etc/gitignore"
    ],
    "answer": 2,
    "explanation": "The global gitignore file path is determined by the core.excludesFile configuration, which defaults to ~/.config/git/ignore on many systems."
  },
  {
    "id": 248,
    "topic": "Submodules",
    "difficulty": "Medium",
    "question": "What does git submodule add https://repo.com/lib.git libs/lib do?",
    "options": [
      "Copies all files from the repo into your project",
      "Adds a reference to the external repository at the specified path without copying its history",
      "Merges the external repository into yours",
      "Creates a symbolic link to the repository"
    ],
    "answer": 1,
    "explanation": "git submodule add registers an external repository as a submodule at the specified path, storing a reference to a specific commit rather than copying files."
  },
  {
    "id": 249,
    "topic": "Submodules",
    "difficulty": "Medium",
    "question": "What does git submodule update --init --recursive do?",
    "options": [
      "Updates all submodule references to latest",
      "Initializes and clones all submodules including nested submodules",
      "Deletes all submodules",
      "Updates the .gitmodules file"
    ],
    "answer": 1,
    "explanation": "This command initializes any uninitialized submodules, clones their repositories, and recursively does the same for any nested submodules."
  },
  {
    "id": 250,
    "topic": "Submodules",
    "difficulty": "Medium",
    "question": "What file stores submodule configuration in a repository?",
    "options": [
      ".git/submodules",
      ".gitmodules",
      "submodules.json",
      ".git/submodule-config"
    ],
    "answer": 1,
    "explanation": "The .gitmodules file in the repository root stores the mapping between submodule paths and their remote URLs, and is tracked in version control."
  },
  {
    "id": 251,
    "topic": "Git LFS",
    "difficulty": "Medium",
    "question": "What does Git LFS stand for?",
    "options": [
      "Git Large File System",
      "Git Long File Support",
      "Git Local File Storage",
      "Git Logical File System"
    ],
    "answer": 0,
    "explanation": "Git LFS stands for Git Large File System, an extension that replaces large files with pointer files while storing the actual content on a server."
  },
  {
    "id": 252,
    "topic": "Git LFS",
    "difficulty": "Medium",
    "question": "What does git lfs track '*.psd' do?",
    "options": [
      "Deletes all PSD files",
      "Configures LFS to manage all PSD files, storing them on the LFS server",
      "Compresses all PSD files",
      "Moves PSD files to a separate branch"
    ],
    "answer": 1,
    "explanation": "git lfs track configures Git LFS to intercept matching files and store them on the LFS server, replacing them with lightweight pointer files in the repository."
  },
  {
    "id": 253,
    "topic": "Hooks",
    "difficulty": "Medium",
    "question": "Where are Git hooks stored in a repository?",
    "options": [
      ".git/hooks/",
      ".hooks/",
      ".gitconfig/hooks/",
      "hooks/ in the repository root"
    ],
    "answer": 0,
    "explanation": "Git hooks are stored as scripts in the .git/hooks/ directory. Sample hooks with .sample extension are provided by default and need to be made executable."
  },
  {
    "id": 254,
    "topic": "Hooks",
    "difficulty": "Medium",
    "question": "Which hook runs before every commit?",
    "options": [
      "pre-commit",
      "post-commit",
      "commit-msg",
      "prepare-commit-msg"
    ],
    "answer": 0,
    "explanation": "The pre-commit hook runs before the commit is created, often used for linting, formatting checks, and running tests to ensure code quality."
  },
  {
    "id": 255,
    "topic": "Hooks",
    "difficulty": "Medium",
    "question": "Which hook is useful for enforcing commit message conventions?",
    "options": [
      "pre-commit",
      "commit-msg",
      "post-commit",
      "pre-rebase"
    ],
    "answer": 1,
    "explanation": "The commit-msg hook receives the commit message as an argument and can validate it against conventions, rejecting the commit if the message doesn't comply."
  },
  {
    "id": 256,
    "topic": "Workflow",
    "difficulty": "Medium",
    "question": "What is a Git workflow?",
    "options": [
      "A programming language for Git",
      "A set of conventions and practices for using Git in a team",
      "A Git plugin",
      "A type of merge strategy"
    ],
    "answer": 1,
    "explanation": "A Git workflow is a recommended or prescribed set of rules and practices for how team members use Git branches, commits, and merges."
  },
  {
    "id": 257,
    "topic": "Git Flow",
    "difficulty": "Medium",
    "question": "Which branches are mandatory in the Git Flow model?",
    "options": [
      "main and develop",
      "main, develop, feature, release, and hotfix",
      "Only main",
      "main and feature"
    ],
    "answer": 0,
    "explanation": "In Git Flow, main and develop are the two primary long-lived branches. Feature, release, and hotfix branches are created as needed."
  },
  {
    "id": 258,
    "topic": "Git Flow",
    "difficulty": "Medium",
    "question": "What is the purpose of a release branch in Git Flow?",
    "options": [
      "To develop new features",
      "To prepare for a production release with bug fixes and version bumps",
      "To fix production emergencies",
      "To test experimental features"
    ],
    "answer": 1,
    "explanation": "A release branch is created from develop to stabilize the code for release, allowing new features to continue being added to develop in parallel."
  },
  {
    "id": 259,
    "topic": "Feature Branch Workflow",
    "difficulty": "Medium",
    "question": "In the Feature Branch Workflow, what happens to a feature branch after merging?",
    "options": [
      "It is kept for future use",
      "It is typically deleted after merging",
      "It becomes the new main branch",
      "It is renamed"
    ],
    "answer": 1,
    "explanation": "In the Feature Branch Workflow, feature branches are usually deleted after being merged to keep the branch list clean and prevent confusion."
  },
  {
    "id": 260,
    "topic": "Feature Branch Workflow",
    "difficulty": "Medium",
    "question": "What is a key advantage of the Feature Branch Workflow over Git Flow?",
    "options": [
      "It supports more branch types",
      "It is simpler with fewer branch types and rules",
      "It automatically deploys code",
      "It requires no code reviews"
    ],
    "answer": 1,
    "explanation": "The Feature Branch Workflow is simpler than Git Flow, using only a main branch and feature branches, making it easier to adopt and manage."
  },
  {
    "id": 261,
    "topic": "Pull Requests",
    "difficulty": "Medium",
    "question": "What is a pull request?",
    "options": [
      "A command to pull from a remote",
      "A request to merge changes from one branch into another, typically with code review",
      "A request to download the repository",
      "A Git command built into Git CLI"
    ],
    "answer": 1,
    "explanation": "A pull request is a platform feature (GitHub, GitLab, etc.) that proposes merging changes from a source branch into a target branch, facilitating code review and discussion."
  },
  {
    "id": 262,
    "topic": "Pull Requests",
    "difficulty": "Medium",
    "question": "Can you create a pull request from the same repository?",
    "options": [
      "No, pull requests only work across forks",
      "Yes, you can create a PR between branches in the same repository",
      "Only if you have admin access",
      "Only for the main branch"
    ],
    "answer": 1,
    "explanation": "Pull requests can be created between any two branches in the same repository, which is common in the Feature Branch Workflow."
  },
  {
    "id": 263,
    "topic": "Code Reviews",
    "difficulty": "Medium",
    "question": "What is the primary purpose of code review in the context of Git workflows?",
    "options": [
      "To slow down development",
      "To ensure code quality, catch bugs, and share knowledge",
      "To enforce strict formatting rules only",
      "To replace automated testing"
    ],
    "answer": 1,
    "explanation": "Code review through pull requests helps maintain code quality, identifies potential bugs, facilitates knowledge sharing, and ensures adherence to project standards."
  },
  {
    "id": 264,
    "topic": "CI/CD Integration",
    "difficulty": "Medium",
    "question": "How do Git platforms typically trigger CI/CD pipelines?",
    "options": [
      "Manual triggering only",
      "Through webhooks triggered by push events, pull requests, or other Git operations",
      "Through cron jobs",
      "Through SSH connections"
    ],
    "answer": 1,
    "explanation": "Git platforms like GitHub and GitLab send webhook notifications to CI/CD systems when events like pushes or pull requests occur, triggering automated builds and tests."
  },
  {
    "id": 265,
    "topic": "CI/CD Integration",
    "difficulty": "Medium",
    "question": "What is a common pattern for CI/CD configuration files in Git repositories?",
    "options": [
      "Storing them in the .git directory",
      "Storing them in the repository root (e.g., .github/workflows/, .gitlab-ci.yml)",
      "Storing them on the CI server only",
      "Storing them in a separate repository"
    ],
    "answer": 1,
    "explanation": "Modern CI/CD systems use configuration files stored in the repository itself (like GitHub Actions workflows or GitLab CI yml files), making pipelines version-controlled."
  },
  {
    "id": 266,
    "topic": "Authentication",
    "difficulty": "Medium",
    "question": "What are the two primary methods for authenticating with Git remotes?",
    "options": [
      "FTP and SMTP",
      "SSH keys and HTTPS with personal access tokens",
      "Telnet and RDP",
      "API keys and cookies"
    ],
    "answer": 1,
    "explanation": "SSH keys and HTTPS with personal access tokens are the two primary authentication methods, with password-based authentication being deprecated by most platforms."
  },
  {
    "id": 267,
    "topic": "SSH Keys",
    "difficulty": "Medium",
    "question": "Which command generates a new SSH key pair?",
    "options": [
      "ssh-keygen",
      "ssh-create",
      "git ssh-key",
      "keygen --ssh"
    ],
    "answer": 0,
    "explanation": "ssh-keygen generates a new SSH key pair (private and public keys) that can be used for authenticating with Git remotes over SSH."
  },
  {
    "id": 268,
    "topic": "SSH Keys",
    "difficulty": "Medium",
    "question": "Which SSH key file should never be shared?",
    "options": [
      "The public key (.pub file)",
      "The private key (id_rsa, id_ed25519, etc.)",
      "The known_hosts file",
      "The SSH config file"
    ],
    "answer": 1,
    "explanation": "The private key must never be shared as it is used to prove your identity. Only the public key (.pub) should be added to Git platforms."
  },
  {
    "id": 269,
    "topic": "Personal Access Tokens",
    "difficulty": "Medium",
    "question": "Why have Git platforms moved from passwords to Personal Access Tokens (PATs)?",
    "options": [
      "PATs are easier to remember",
      "PATs provide scoped access, can be rotated, and are more secure than passwords",
      "Passwords are no longer supported by Git",
      "PATs are faster to authenticate"
    ],
    "answer": 1,
    "explanation": "PATs offer fine-grained permissions (scoped access), can be revoked without changing passwords, have expiration times, and provide an audit trail."
  },
  {
    "id": 270,
    "topic": "Best Practices",
    "difficulty": "Medium",
    "question": "What is a recommended best practice for commit messages?",
    "options": [
      "Use single-word messages for brevity",
      "Write a short subject line (50 chars or less) with an optional detailed body",
      "Include the entire diff in the message",
      "Use emoji-only messages"
    ],
    "answer": 1,
    "explanation": "Best practice is a concise subject line under 50 characters summarizing the change, optionally followed by a blank line and a detailed body explaining why."
  },
  {
    "id": 271,
    "topic": "Best Practices",
    "difficulty": "Medium",
    "question": "What is the recommended approach for making large changes?",
    "options": [
      "Make all changes in a single commit",
      "Break changes into small, logical, self-contained commits",
      "Use only stash to save changes",
      "Create one branch per file changed"
    ],
    "answer": 1,
    "explanation": "Small, logical commits are easier to review, revert if needed, and understand in the history. Each commit should represent a single logical change."
  },
  {
    "id": 272,
    "topic": "Troubleshooting",
    "difficulty": "Medium",
    "question": "What should you do if git push is rejected with 'non-fast-forward' error?",
    "options": [
      "Always use git push --force",
      "Pull or fetch first to integrate remote changes, then push",
      "Delete the remote branch and push again",
      "Reinstall Git"
    ],
    "answer": 1,
    "explanation": "A non-fast-forward rejection means the remote has commits you don't have locally. You should pull/rebase first to integrate those changes, then push."
  },
  {
    "id": 273,
    "topic": "Troubleshooting",
    "difficulty": "Medium",
    "question": "What does 'fatal: not a git repository' error mean?",
    "options": [
      "Git is not installed",
      "You are running a Git command outside of a Git repository directory",
      "The .git folder is corrupted",
      "The remote is down"
    ],
    "answer": 1,
    "explanation": "This error occurs when you run a Git command in a directory that is not inside a Git repository (no .git directory in the current path or parent directories)."
  },
  {
    "id": 274,
    "topic": "Troubleshooting",
    "difficulty": "Medium",
    "question": "How do you fix a detached HEAD state while keeping your changes?",
    "options": [
      "Run git attach",
      "Create a branch with git branch <name> or git switch -c <name> to save your work",
      "Run git reset --hard",
      "Delete the .git folder"
    ],
    "answer": 1,
    "explanation": "Creating a new branch from the detached HEAD state preserves any commits you made, giving them a permanent reference point."
  },
  {
    "id": 275,
    "topic": "Merge Conflicts",
    "difficulty": "Medium",
    "question": "How do you resolve a merge conflict by keeping only 'ours' changes?",
    "options": [
      "git checkout --ours file.txt && git add file.txt",
      "git resolve --ours file.txt",
      "git merge --keep-ours file.txt",
      "git conflict --ours file.txt"
    ],
    "answer": 0,
    "explanation": "git checkout --ours file.txt resolves the conflict by keeping your version, then git add stages the resolved file to complete the merge."
  },
  {
    "id": 276,
    "topic": "Rebase",
    "difficulty": "Medium",
    "question": "What happens during a rebase conflict?",
    "options": [
      "Git automatically skips the conflicting commit",
      "The rebase pauses, and you must resolve the conflict and run git rebase --continue",
      "Git automatically resolves using 'ours'",
      "The rebase is automatically aborted"
    ],
    "answer": 1,
    "explanation": "When a conflict occurs during rebase, Git pauses the process, marks the conflicts, and waits for you to resolve them and run git rebase --continue."
  },
  {
    "id": 277,
    "topic": "Rebase",
    "difficulty": "Medium",
    "question": "Why should you avoid rebasing shared (public) branches?",
    "options": [
      "It is too slow",
      "It rewrites commit history, causing problems for collaborators who have already pulled those commits",
      "It creates merge conflicts",
      "It deletes the branch"
    ],
    "answer": 1,
    "explanation": "Rebasing rewrites commit hashes, so anyone who already has the original commits will have diverged history, leading to duplicated commits and confusion."
  },
  {
    "id": 278,
    "topic": "Cherry Pick",
    "difficulty": "Medium",
    "question": "What happens if a cherry-picked commit's changes conflict with the current branch?",
    "options": [
      "Git skips the commit silently",
      "Git pauses and requires you to resolve the conflict before continuing",
      "Git automatically resolves using the cherry-picked version",
      "The cherry-pick is aborted completely"
    ],
    "answer": 1,
    "explanation": "If a cherry-pick encounters a conflict, Git pauses and marks the conflicting files, waiting for you to resolve them and then run git cherry-pick --continue."
  },
  {
    "id": 279,
    "topic": "Reset",
    "difficulty": "Medium",
    "question": "What is the difference between git reset and git checkout for a file?",
    "options": [
      "They are identical",
      "Reset moves the branch pointer; checkout only affects the working tree",
      "Reset only affects the working tree; checkout moves the branch pointer",
      "Reset is for branches, checkout is for files only"
    ],
    "answer": 1,
    "explanation": "git reset moves the branch pointer (affecting which commit the branch points to), while git checkout only updates the working tree without moving the branch."
  },
  {
    "id": 280,
    "topic": "Revert",
    "difficulty": "Medium",
    "question": "How do you revert multiple commits in a range?",
    "options": [
      "git revert commit1..commit2",
      "git revert commit1^..commit2",
      "git revert --range commit1 commit2",
      "You must revert them one at a time"
    ],
    "answer": 1,
    "explanation": "git revert commit1^..commit2 reverts all commits from commit1 to commit2 inclusive (the ^ ensures commit1 is included since the range is otherwise exclusive)."
  },
  {
    "id": 281,
    "topic": "Restore",
    "difficulty": "Medium",
    "question": "What does git restore --worktree --staged file.txt do?",
    "options": [
      "Restores the file from the last commit to both the working tree and staging area",
      "Only restores the staging area",
      "Only restores the working tree",
      "Deletes the file"
    ],
    "answer": 0,
    "explanation": "When both --worktree and --staged are specified, git restore resets the file in both the staging area and the working tree to match the specified source (default: HEAD)."
  },
  {
    "id": 282,
    "topic": "Stash",
    "difficulty": "Medium",
    "question": "How do you list all stashed changes?",
    "options": [
      "git stash list",
      "git stash show",
      "git stash --list",
      "git list-stashes"
    ],
    "answer": 0,
    "explanation": "git stash list displays all entries in the stash stack, showing the stash index, branch name, and description message for each entry."
  },
  {
    "id": 283,
    "topic": "Stash",
    "difficulty": "Medium",
    "question": "What does git stash branch <branch-name> do?",
    "options": [
      "Creates a branch from the stash and applies it",
      "Stashes the current branch name",
      "Creates a branch and deletes the stash",
      "Moves the stash to a different branch"
    ],
    "answer": 0,
    "explanation": "git stash branch creates a new branch from the commit the stash was based on, applies the stash changes, and then drops the stash if successful."
  },
  {
    "id": 284,
    "topic": "Stash",
    "difficulty": "Medium",
    "question": "How do you apply a specific stash entry by its index?",
    "options": [
      "git stash apply 0",
      "git stash apply stash@{0}",
      "Both A and B",
      "git stash apply --index 0"
    ],
    "answer": 2,
    "explanation": "Both git stash apply 0 (shorthand) and git stash apply stash@{0} (explicit) apply the first stash entry. The stash@{n} syntax is the full reflog-style reference."
  },
  {
    "id": 285,
    "topic": "Tags",
    "difficulty": "Medium",
    "question": "How do you verify a signed tag?",
    "options": [
      "git tag --verify v1.0",
      "git tag -v v1.0",
      "git verify-tag v1.0",
      "git check-tag v1.0"
    ],
    "answer": 1,
    "explanation": "git tag -v verifies a signed tag by checking the GPG signature against your keyring, confirming the tag was created by the claimed author."
  },
  {
    "id": 286,
    "topic": "Remote Repository",
    "difficulty": "Medium",
    "question": "What does git remote get-url origin show?",
    "options": [
      "All remote URLs",
      "The fetch and push URL for the origin remote",
      "Only the push URL",
      "The remote repository size"
    ],
    "answer": 1,
    "explanation": "git remote get-url displays the URL configured for the specified remote, showing the push URL if it differs from the fetch URL."
  }
]