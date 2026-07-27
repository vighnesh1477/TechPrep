export default [
    {
        id: "git-1",
        question: "What is the primary advantage of a Distributed Version Control System (DVCS) over a Centralized Version Control System (CVCS)?",
        options: [
            "It requires a network connection for every operation",
            "Every developer has a full copy of the repository including its history",
            "It uses a single central server that stores all file versions",
            "It only tracks the latest version of files"
        ],
        answer: 1,
        explanation: "In a DVCS like Git, every clone is a full backup of the repository with complete history, enabling offline work and faster operations.",
        difficulty: "Easy",
        topic: "Distributed Version Control"
    },
    {
        id: "git-2",
        question: "You accidentally run 'git reset --hard HEAD~3'. Your working directory and index are now 3 commits behind. What is the safest way to recover the lost commits?",
        options: [
            "git checkout HEAD~3",
            "git reflog and then git reset --hard to the lost commit SHA",
            "git revert HEAD~3",
            "git clean -fd"
        ],
        answer: 1,
        explanation: "git reflog keeps a log of all HEAD movements, including resets. You can find the SHA of the commit before the reset and reset back to it.",
        difficulty: "Medium",
        topic: "Recovering Deleted Commits"
    },
    {
        id: "git-3",
        question: "In a Git repository, what does the '.git/objects' directory store?",
        options: [
            "Only committed file contents",
            "All Git objects: blobs, trees, commits, and tags",
            "Only branch references and HEAD pointer",
            "Configuration files for the repository"
        ],
        answer: 1,
        explanation: "The objects directory stores all types of Git objects — blobs (file contents), trees (directory listings), commits, and annotated tag objects — each identified by a SHA-1 hash.",
        difficulty: "Easy",
        topic: "Git Objects"
    },
    {
        id: "git-4",
        question: "What happens when you create a lightweight tag in Git?",
        options: [
            "A full Git object is created in the object database with tagger info",
            "A simple pointer to a specific commit is created without storing metadata",
            "A new branch is created that cannot be moved",
            "The tagged commit is permanently protected from modification"
        ],
        answer: 1,
        explanation: "Lightweight tags are just a named reference to a commit SHA, stored in .git/refs/tags/, without any additional metadata like tagger name, message, or date.",
        difficulty: "Easy",
        topic: "Lightweight Tags"
    },
    {
        id: "git-5",
        question: "You are on branch 'feature-x' and want to switch to branch 'feature-y' without committing your current changes. Both branches have different files. Which command sequence ensures you don't lose work?",
        options: [
            "git checkout feature-y",
            "git stash && git switch feature-y",
            "git reset --hard && git switch feature-y",
            "git commit -m 'WIP' && git checkout feature-y && git reset HEAD~1"
        ],
        answer: 1,
        explanation: "git stash saves your uncommitted changes, then git switch moves you to the other branch. You can later apply the stash when you return.",
        difficulty: "Easy",
        topic: "Stash"
    },
    {
        id: "git-6",
        question: "What is the difference between 'git merge' and 'git rebase' when integrating a feature branch into main?",
        options: [
            "Merge creates a new merge commit preserving history; rebase replays commits on top of the target branch creating a linear history",
            "Merge replays commits; rebase creates a merge commit",
            "There is no difference; they are aliases",
            "Merge only works with fast-forward; rebase only works with three-way merge"
        ],
        answer: 0,
        explanation: "Merge preserves the original branch structure by creating a merge commit, while rebase moves the branch's commits to the tip of the target branch for a linear history.",
        difficulty: "Easy",
        topic: "Merge vs Rebase"
    },
    {
        id: "git-7",
        question: "You run 'git log --oneline --graph --all' and see a diamond-shaped merge pattern. What does this indicate?",
        options: [
            "A rebase was performed on the branch",
            "A non-fast-forward (three-way) merge occurred",
            "The branch was force-pushed to the remote",
            "A cherry-pick operation was used"
        ],
        answer: 1,
        explanation: "A diamond or fork-and-join pattern in the git log graph indicates a three-way merge where two divergent branches were joined with a merge commit.",
        difficulty: "Medium",
        topic: "Three-way Merge"
    },
    {
        id: "git-8",
        question: "In a corporate environment, you need to enforce that every commit on the 'main' branch must pass CI checks before merging. Which GitHub feature provides this?",
        options: [
            "CODEOWNERS file",
            "Branch protection rules with required status checks",
            "Issue templates",
            "Dependabot alerts"
        ],
        answer: 1,
        explanation: "Branch protection rules can require status checks (like CI pipeline results) to pass before any PR can be merged into the protected branch.",
        difficulty: "Easy",
        topic: "Branch Protection Rules"
    },
    {
        id: "git-9",
        question: "What does 'git cherry-pick abc123' do when you are currently on the 'develop' branch?",
        options: [
            "Creates a new branch with commit abc123",
            "Applies the changes introduced by commit abc123 as a new commit on develop",
            "Moves commit abc123 from its original branch to develop",
            "Deletes commit abc123 from its original branch"
        ],
        answer: 1,
        explanation: "Cherry-pick takes the diff introduced by a specific commit and applies it to the current branch as a new commit with a different SHA.",
        difficulty: "Easy",
        topic: "Cherry Picking"
    },
    {
        id: "git-10",
        question: "You are contributing to an open-source project. You fork the repo, make changes, and open a PR. The maintainer asks you to update your PR with the latest changes from upstream. What is the correct approach?",
        options: [
            "Delete the fork and create a new one",
            "Add the original repo as 'upstream', fetch from it, merge or rebase your branch, then force-push",
            "Open a new PR instead of updating the existing one",
            "Manually copy-paste the changed files from the original repo"
        ],
        answer: 1,
        explanation: "The standard fork workflow involves adding the original repo as 'upstream', fetching its changes, and rebasing or merging your feature branch before pushing the updated PR.",
        difficulty: "Medium",
        topic: "Fork Workflow"
    },
    {
        id: "git-11",
        question: "What is the purpose of the 'git bisect' command?",
        options: [
            "To split a large commit into smaller ones",
            "To binary search through commit history to find the commit that introduced a bug",
            "To divide a repository into two separate repositories",
            "To compare two branches and list differences"
        ],
        answer: 1,
        explanation: "git bisect uses binary search on the commit history to efficiently identify which commit introduced a regression or bug, by marking known good and bad commits.",
        difficulty: "Medium",
        topic: "Bisect"
    },
    {
        id: "git-12",
        question: "In a GitHub Actions workflow, what does the 'needs' keyword do?",
        options: [
            "Specifies the required environment variables for a job",
            "Defines dependencies between jobs, ensuring they run in a specific order",
            "Lists the required permissions for the workflow",
            "Declares the required runner labels"
        ],
        answer: 1,
        explanation: "The 'needs' keyword creates a dependency graph between jobs, so a job only runs after all jobs listed in its 'needs' field have completed successfully.",
        difficulty: "Easy",
        topic: "GitHub Actions"
    },
    {
        id: "git-13",
        question: "You have a file 'config.js' with local database credentials that was accidentally committed. You want to remove it from history entirely. Which tool is designed for this?",
        options: [
            "git rm config.js",
            "git filter-branch or git filter-repo",
            "git reset --hard HEAD~1",
            "git clean -fd"
        ],
        answer: 1,
        explanation: "git filter-repo (or the older git filter-branch) can rewrite repository history to remove files or sensitive data from all commits, which git rm alone cannot do.",
        difficulty: "Hard",
        topic: "Repository Security"
    },
    {
        id: "git-14",
        question: "What does 'git commit --amend' do when the staging area is empty?",
        options: [
            "Creates a new commit with no changes",
            "Allows you to modify the commit message of the most recent commit without changing its contents",
            "Deletes the last commit",
            "Stages all modified files and creates a new commit"
        ],
        answer: 1,
        explanation: "With an empty staging area, --amend only lets you change the commit message of the HEAD commit. If the staging area has changes, it also adds them to the amended commit.",
        difficulty: "Easy",
        topic: "git commit --amend"
    },
    {
        id: "git-15",
        question: "In Git Flow, which branch is considered the main branch where production-ready code resides?",
        options: [
            "develop",
            "main (or master)",
            "feature/*",
            "release/*"
        ],
        answer: 1,
        explanation: "In Git Flow, the 'main' branch always contains production-ready code. The 'develop' branch serves as the integration branch for features.",
        difficulty: "Easy",
        topic: "Git Flow"
    },
    {
        id: "git-16",
        question: "What is the key difference between 'git fetch' and 'git pull'?",
        options: [
            "git fetch downloads changes and merges them; git pull only downloads",
            "git fetch only downloads remote data without modifying working directory; git pull fetches and merges/rebases",
            "git pull works with all remotes; git fetch only works with origin",
            "There is no difference; they are synonymous"
        ],
        answer: 1,
        explanation: "git fetch downloads remote changes into remote-tracking branches without altering your working directory, while git pull additionally performs a merge or rebase to integrate those changes.",
        difficulty: "Easy",
        topic: "git fetch vs git pull"
    },
    {
        id: "git-17",
        question: "You see 'HEAD detached at abc1234' in your terminal. What does this mean?",
        options: [
            "The HEAD file has been deleted from .git",
            "HEAD points directly to a commit instead of a branch reference, so commits won't belong to any branch",
            "The repository is corrupted and needs repair",
            "The current branch has been deleted from the remote"
        ],
        answer: 1,
        explanation: "Detached HEAD means HEAD references a commit SHA directly rather than a branch. Any new commits created in this state will be orphaned once you switch branches.",
        difficulty: "Medium",
        topic: "Detached HEAD"
    },
    {
        id: "git-18",
        question: "A teammate says their branch is 'ahead of origin/feature-x by 3 commits'. What does this mean?",
        options: [
            "Their local branch is 3 commits behind the remote",
            "They have 3 local commits that have not been pushed to the remote yet",
            "The remote branch has 3 commits their local branch doesn't have",
            "Their branch has 3 merge conflicts to resolve"
        ],
        answer: 1,
        explanation: "'Ahead by 3 commits' means the local branch has 3 commits that don't exist on the remote-tracking branch, indicating unpushed work.",
        difficulty: "Easy",
        topic: "Remote Tracking"
    },
    {
        id: "git-19",
        question: "What is the effect of 'git reset --soft HEAD~1'?",
        options: [
            "Undoes the last commit and discards all changes",
            "Undoes the last commit but keeps changes in the staging area",
            "Undoes the last commit and moves changes to the working directory",
            "Deletes the last commit from remote history"
        ],
        answer: 1,
        explanation: "--soft moves HEAD back one commit but keeps all changes from that commit staged, allowing you to recommit or modify them.",
        difficulty: "Easy",
        topic: "git reset --soft"
    },
    {
        id: "git-20",
        question: "What is the difference between 'git reset --mixed' and 'git restore --staged' for a file?",
        options: [
            "They have no difference; they are identical",
            "reset --mixed also moves HEAD if a commit reference is given; restore --staged only unstages files without moving HEAD",
            "restore --staged deletes the file; reset --mixed keeps it",
            "reset --mixed only works on the index; restore --staged works on the working directory"
        ],
        answer: 1,
        explanation: "git reset --mixed can move HEAD and unstage files, while git restore --staged is a safer, more focused command that only unstages files without moving HEAD.",
        difficulty: "Medium",
        topic: "git reset --mixed vs git restore"
    },
    {
        id: "git-21",
        question: "In a GitHub Actions workflow, how do you securely pass an API key to a build step?",
        options: [
            "Hardcode it in the workflow YAML file",
            "Store it as a GitHub Secret and reference it using ${{ secrets.API_KEY }}",
            "Store it in a public environment variable",
            "Pass it as a command-line argument in the workflow"
        ],
        answer: 1,
        explanation: "GitHub Secrets are encrypted environment variables accessible in workflows. They are not visible in logs and provide secure storage for sensitive data like API keys.",
        difficulty: "Easy",
        topic: "Secrets"
    },
    {
        id: "git-22",
        question: "You want to ignore all '.log' files in your repository except those in the 'logs/' directory. Which .gitignore pattern achieves this?",
        options: [
            "*.log\n!logs/*.log",
            "*.log\n!logs/",
            "!logs/*.log\n*.log",
            "*.log\nlogs/*.log"
        ],
        answer: 0,
        explanation: "First ignore all .log files, then negate the rule for the logs/ directory. The negation must come after the ignore rule to override it.",
        difficulty: "Medium",
        topic: ".gitignore"
    },
    {
        id: "git-23",
        question: "What does 'git worktree add ../hotfix main' do?",
        options: [
            "Creates a new branch called 'hotfix' from main",
            "Checks out 'main' into a new working directory at '../hotfix' linked to the same repository",
            "Merges 'main' into a directory called 'hotfix'",
            "Creates a copy of the repository at '../hotfix' with its own .git directory"
        ],
        answer: 1,
        explanation: "git worktree creates an additional working directory linked to the same repository, allowing you to check out multiple branches simultaneously in different directories.",
        difficulty: "Hard",
        topic: "Git Worktrees"
    },
    {
        id: "git-24",
        question: "In an interactive rebase ('git rebase -i'), what does the 'fixup' action do compared to 'squash'?",
        options: [
            "fixup squashes the commit but discards its commit message, using only the previous commit's message",
            "fixup creates a merge commit instead of squashing",
            "fixup keeps both commit messages concatenated",
            "fixup drops the commit entirely without applying its changes"
        ],
        answer: 0,
        explanation: "fixup combines a commit with the previous one like squash, but it discards the fixup commit's message, making it useful for small corrections without cluttering the message.",
        difficulty: "Medium",
        topic: "Interactive Rebase"
    },
    {
        id: "git-25",
        question: "What is the primary purpose of a 'CODEOWNERS' file in a GitHub repository?",
        options: [
            "To list all contributors to the repository",
            "To automatically request reviews from specific users or teams when PRs modify files they own",
            "To define who can commit to the repository",
            "To assign copyright ownership of the code"
        ],
        answer: 1,
        explanation: "CODEOWNERS defines ownership rules for code paths. When a PR modifies files matching a pattern, GitHub automatically requests reviews from the specified users or teams.",
        difficulty: "Easy",
        topic: "CODEOWNERS"
    },
    {
        id: "git-26",
        question: "You run 'git push origin feature-x' and get 'error: failed to push some refs'. The remote has commits your local branch doesn't have. What happened?",
        options: [
            "Your branch was deleted on the remote",
            "Someone else pushed commits to the remote feature-x branch after you last fetched",
            "You don't have write access to the repository",
            "The branch name contains invalid characters"
        ],
        answer: 1,
        explanation: "This error occurs when the remote branch has been updated (by another push or rebase) and your local branch is not a fast-forward of the remote, requiring a pull or rebase first.",
        difficulty: "Medium",
        topic: "Force Push"
    },
    {
        id: "git-27",
        question: "What does the 'conventional commits' specification standardize?",
        options: [
            "Branch naming conventions in Git",
            "Commit message format with structured prefixes like 'feat:', 'fix:', 'docs:' for automated tooling",
            "Directory structure conventions for repositories",
            "Naming conventions for remote repositories"
        ],
        answer: 1,
        explanation: "Conventional Commits define a lightweight format for commit messages (e.g., 'feat: add login page') that enables automated changelog generation, semantic versioning, and tooling integration.",
        difficulty: "Easy",
        topic: "Conventional Commits"
    },
    {
        id: "git-28",
        question: "In a monorepo with multiple services, you want to run CI only for the service that changed. Which GitHub Actions feature helps achieve this?",
        options: [
            "Self-hosted runners",
            "Path-based filtering using 'paths' in 'on.push' or 'on.pull_request' triggers",
            "GitHub Packages",
            "Environment secrets"
        ],
        answer: 1,
        explanation: "Path filters in workflow triggers allow you to specify file paths that, when changed, trigger the workflow. This enables running CI only for affected services in a monorepo.",
        difficulty: "Medium",
        topic: "GitHub Actions"
    },
    {
        id: "git-29",
        question: "What is a Git 'blob' object?",
        options: [
            "A container for directory listings with filenames and pointers to other objects",
            "A stored snapshot of a file's contents, identified by its SHA-1 hash",
            "A reference to a specific commit with metadata",
            "A compressed archive of the entire working directory"
        ],
        answer: 1,
        explanation: "A blob stores the contents of a single file. It doesn't include filenames or metadata — just the raw file content, identified by the SHA-1 hash of that content.",
        difficulty: "Easy",
        topic: "Blob"
    },
    {
        id: "git-30",
        question: "You need to revert a merge commit (e.g., merging feature-x into main) without reverting the individual commits of feature-x. Which command is correct?",
        options: [
            "git revert feature-x",
            "git revert -m 1 <merge-commit-sha>",
            "git reset --hard <merge-commit-sha>",
            "git revert HEAD~1..HEAD"
        ],
        answer: 1,
        explanation: "Reverting a merge commit requires the -m flag to specify which parent to use as the mainline. -m 1 keeps the main branch state and undoes the merge, without reverting individual feature commits.",
        difficulty: "Hard",
        topic: "Revert"
    },
    {
        id: "git-31",
        question: "What does 'git clean -fd' do?",
        options: [
            "Removes all untracked files and directories from the working directory",
            "Removes all ignored files from the repository",
            "Deletes all branches except the current one",
            "Clears the Git reflog"
        ],
        answer: 0,
        explanation: "git clean -fd removes untracked files (-f) and untracked directories (-d) from the working directory. It does not affect tracked or ignored files.",
        difficulty: "Easy",
        topic: "git clean"
    },
    {
        id: "git-32",
        question: "In GitHub, what is the difference between a 'Draft Pull Request' and a regular Pull Request?",
        options: [
            "A Draft PR cannot receive review comments",
            "A Draft PR indicates work is in progress and cannot be merged, while a regular PR is ready for review and merging",
            "A Draft PR is created from a fork; a regular PR is created from a branch in the same repo",
            "There is no functional difference"
        ],
        answer: 1,
        explanation: "Draft PRs signal that the work is still in progress. They cannot be merged (the merge button is disabled) and are typically used for early feedback before requesting formal review.",
        difficulty: "Easy",
        topic: "Draft Pull Requests"
    },
    {
        id: "git-33",
        question: "You are using Trunk-Based Development. Which statement best describes this workflow?",
        options: [
            "Developers work on long-lived feature branches that are merged after weeks",
            "Developers commit to a single shared branch (trunk) frequently, using feature flags for incomplete work",
            "All development happens on the main branch with no branches allowed",
            "Developers use a separate integration branch that is merged to main daily"
        ],
        answer: 1,
        explanation: "Trunk-Based Development involves frequent commits to the main branch (trunk), with short-lived branches or feature flags to manage incomplete features, enabling continuous integration.",
        difficulty: "Medium",
        topic: "Trunk Based Development"
    },
    {
        id: "git-34",
        question: "What does 'git diff --staged' show?",
        options: [
            "Differences between the working directory and the staging area",
            "Differences between the staging area and the last commit",
            "Differences between the working directory and the last commit",
            "Differences between two remote branches"
        ],
        answer: 1,
        explanation: "git diff --staged compares the staging area (index) against the most recent commit, showing what will be included in the next commit.",
        difficulty: "Easy",
        topic: "git diff"
    },
    {
        id: "git-35",
        question: "A pre-commit hook in your team's repository runs linters and formatters. A developer bypasses it with 'git commit --no-verify'. How can you prevent this in a shared repo?",
        options: [
            "You cannot prevent --no-verify as it's a Git client-side feature; enforce checks in CI/CD instead",
            "Set the hook file permissions to read-only",
            "Use a post-commit hook instead",
            "Add the hook to .gitignore"
        ],
        answer: 0,
        explanation: "Git hooks are client-side and can always be bypassed with --no-verify. For enforcement, the same checks should run in CI/CD pipelines which cannot be bypassed by developers.",
        difficulty: "Hard",
        topic: "Hooks"
    },
    {
        id: "git-36",
        question: "What is the function of the 'git rerere' (Reuse Recorded Resolution) mechanism?",
        options: [
            "It automatically rebases conflicting branches",
            "It records how merge conflicts were resolved and automatically applies the same resolution if the same conflict appears again",
            "It reverts the last merge conflict resolution",
            "It removes duplicate commits from history"
        ],
        answer: 1,
        explanation: "rerere remembers how you resolved each merge conflict and, if the same conflict arises again (e.g., during rebases or recurring merges), automatically applies the recorded resolution.",
        difficulty: "Hard",
        topic: "Merge Conflict Resolution"
    },
    {
        id: "git-37",
        question: "In GitHub Actions, what is the purpose of the 'actions/cache' action?",
        options: [
            "To store workflow artifacts between runs",
            "To cache dependencies (like node_modules) between workflow runs to speed up builds",
            "To cache the Git object database",
            "To store secrets for the workflow"
        ],
        answer: 1,
        explanation: "actions/cache caches frequently used dependencies (e.g., npm packages, build outputs) between runs, reducing build times by avoiding re-downloading and re-building unchanged dependencies.",
        difficulty: "Easy",
        topic: "Caching"
    },
    {
        id: "git-38",
        question: "You have two commits on your feature branch that you want to combine into one before opening a PR. Which approach is most appropriate?",
        options: [
            "Delete the branch and recommit everything manually",
            "Use interactive rebase to squash the two commits into one",
            "Use git merge --squash with the main branch",
            "Use git cherry-pick to combine them"
        ],
        answer: 1,
        explanation: "Interactive rebase (git rebase -i HEAD~2) allows you to mark the second commit as 'squash', combining both commits into one with a unified message before pushing.",
        difficulty: "Medium",
        topic: "Squashing Commits"
    },
    {
        id: "git-39",
        question: "What does 'git ls-tree HEAD' display?",
        options: [
            "A list of all commits reachable from HEAD",
            "The contents of the tree object referenced by HEAD, showing files, modes, and blob SHAs",
            "The directory structure of the working directory",
            "A list of all branches in the repository"
        ],
        answer: 1,
        explanation: "git ls-tree shows the tree object at HEAD, listing files/directories with their mode (permissions), type (blob/tree), SHA-1 hash, and filename.",
        difficulty: "Medium",
        topic: "Tree"
    },
    {
        id: "git-40",
        question: "Your team uses Git LFS for storing large binary files. What happens when a clone is done without installing Git LFS?",
        options: [
            "The clone fails with an error",
            "The clone succeeds but LFS-tracked files contain pointer files (small text files with LFS metadata) instead of actual content",
            "The clone succeeds with full binary content automatically",
            "Only non-LFS files are cloned"
        ],
        answer: 1,
        explanation: "Without Git LFS installed, Git clones the pointer files (small text files containing the LFS object ID and download URL) instead of the actual large file content.",
        difficulty: "Medium",
        topic: "Git LFS"
    },
    {
        id: "git-41",
        question: "What is the difference between 'git push' and 'git push --force-with-lease'?",
        options: [
            "There is no difference",
            "--force-with-lease checks that the remote hasn't been updated by someone else before force-pushing, making it safer than --force",
            "--force-with-lease only pushes the current branch",
            "--force-with-lease requires branch protection to be disabled"
        ],
        answer: 1,
        explanation: "--force-with-lease verifies that the remote branch's current state matches what you last fetched, preventing accidental overwrites of commits pushed by others.",
        difficulty: "Medium",
        topic: "Force Push"
    },
    {
        id: "git-42",
        question: "In a GitHub repository, what does 'Dependabot' do?",
        options: [
            "It automatically formats code according to project style",
            "It automatically creates pull requests to update dependencies when new versions are available",
            "It runs security scans on your code",
            "It manages branch protection rules"
        ],
        answer: 1,
        explanation: "Dependabot monitors your project's dependencies and automatically opens PRs to update them when new versions (including security patches) are released.",
        difficulty: "Easy",
        topic: "Dependabot"
    },
    {
        id: "git-43",
        question: "You want to see which lines of a file were last modified by which commit and by whom. Which command should you use?",
        options: [
            "git log --follow file.js",
            "git blame file.js",
            "git diff file.js",
            "git show file.js"
        ],
        answer: 1,
        explanation: "git blame annotates each line of a file with the commit SHA, author, and timestamp of the last modification to that line, useful for code accountability.",
        difficulty: "Easy",
        topic: "git blame"
    },
    {
        id: "git-44",
        question: "What does a 'Git tree object' represent?",
        options: [
            "The entire file system of the operating system",
            "A snapshot of a directory's contents, mapping filenames to blob or tree objects",
            "The branch hierarchy of the repository",
            "The merge history of all branches"
        ],
        answer: 1,
        explanation: "A tree object represents a directory listing, containing entries that map filenames to their corresponding blob (file) or tree (subdirectory) objects with mode information.",
        difficulty: "Easy",
        topic: "Tree"
    },
    {
        id: "git-45",
        question: "You are reviewing a PR that has 47 commits, many of which are 'fix typo' or 'WIP'. What GitHub merge option would clean this up?",
        options: [
            "Create a merge commit",
            "Squash and merge",
            "Rebase and merge",
            "Close the PR and ask the contributor to rebase locally"
        ],
        answer: 1,
        explanation: "Squash and merge combines all commits in the PR into a single commit on the target branch, cleaning up messy commit history while preserving the changes.",
        difficulty: "Easy",
        topic: "Squash Merge"
    },
    {
        id: "git-46",
        question: "What is a 'Git commit object' composed of?",
        options: [
            "File contents and metadata",
            "A tree SHA, parent commit SHA(s), author info, committer info, and commit message",
            "Branch name, tag name, and file list",
            "Only the commit message and timestamp"
        ],
        answer: 1,
        explanation: "A commit object contains a pointer to a tree (snapshot), zero or more parent commit SHAs, author and committer details, and the commit message.",
        difficulty: "Easy",
        topic: "Commit"
    },
    {
        id: "git-47",
        question: "In a CI/CD pipeline using GitHub Actions, you want a deployment job to run only when a PR is merged to main. How do you configure this?",
        options: [
            "on: [push, pull_request]",
            "on: push: branches: [main]",
            "on: pull_request: types: [closed]",
            "on: schedule: - cron: '*/5 * * * *'"
        ],
        answer: 1,
        explanation: "Triggering on push to main branch ensures the deployment job runs when code is merged into main, which is the standard approach for deployment workflows.",
        difficulty: "Medium",
        topic: "GitHub Actions"
    },
    {
        id: "git-48",
        question: "What is the effect of 'git submodule update --init --recursive'?",
        options: [
            "It removes all submodules from the repository",
            "It initializes and clones all submodules including nested submodules",
            "It updates the submodule references to their latest remote commits",
            "It converts submodules into regular directories"
        ],
        answer: 1,
        explanation: "This command initializes uninitialized submodules, clones them at the commits recorded in the parent repository, and recursively does the same for any nested submodules.",
        difficulty: "Medium",
        topic: "Submodules"
    },
    {
        id: "git-49",
        question: "You want to move a file from 'src/old/file.js' to 'src/new/file.js' and have Git track this as a rename. Which command should you use?",
        options: [
            "git mv src/old/file.js src/new/file.js",
            "mv src/old/file.js src/new/file.js && git add src/new/file.js && git rm src/old/file.js",
            "git move src/old/file.js src/new/file.js",
            "Both A and B will result in Git detecting a rename"
        ],
        answer: 3,
        explanation: "Both git mv and manually moving + adding/removing produce the same result. Git detects renames by comparing content similarity, not by explicit rename tracking.",
        difficulty: "Medium",
        topic: "git mv"
    },
    {
        id: "git-50",
        question: "What is the purpose of 'git shortlog'?",
        options: [
            "To display a shortened version of the last commit message",
            "To summarize git log output grouped by author, showing commit counts per author",
            "To truncate long file paths in git output",
            "To show only the first line of each file in the repository"
        ],
        answer: 1,
        explanation: "git shortlog groups commit log entries by author and shows a summary with each author's name and the number of commits they've made.",
        difficulty: "Easy",
        topic: "git shortlog"
    },
    {
        id: "git-51",
        question: "You are in the middle of resolving a merge conflict and decide to abort the merge entirely. Which command do you run?",
        options: [
            "git reset --hard",
            "git merge --abort",
            "git checkout --theirs .",
            "git rebase --abort"
        ],
        answer: 1,
        explanation: "git merge --abort cleanly aborts an in-progress merge, restoring the branch to its state before the merge was attempted.",
        difficulty: "Easy",
        topic: "Merge Conflicts"
    },
    {
        id: "git-52",
        question: "What does 'git show HEAD~3:src/app.js' display?",
        options: [
            "The diff between HEAD~3 and HEAD for src/app.js",
            "The contents of src/app.js as it existed three commits before HEAD",
            "The commit message of HEAD~3 along with changes to src/app.js",
            "The blame output for src/app.js at HEAD~3"
        ],
        answer: 1,
        explanation: "The syntax git show <ref>:<path> displays the file contents at that specific commit. HEAD~3:src/app.js shows the file as it was 3 commits ago.",
        difficulty: "Medium",
        topic: "git show"
    },
    {
        id: "git-53",
        question: "In a large team, you notice that 'git log' takes several seconds to display. What is the most likely cause and solution?",
        options: [
            "The repository is corrupted; run git fsck",
            "The repository has a very long history; use --depth or pathspec to limit output",
            "Git is broken; reinstall it",
            "The .git directory is too large; delete it and re-clone"
        ],
        answer: 1,
        explanation: "Large repositories with extensive history can slow down log operations. Using flags like -n (limit count), --since, pathspecs, or shallow clones (--depth) can significantly improve performance.",
        difficulty: "Medium",
        topic: "Git Performance"
    },
    {
        id: "git-54",
        question: "What is the semantic versioning format that GitHub Releases commonly uses?",
        options: [
            "YYYY.MM.DD",
            "MAJOR.MINOR.PATCH (e.g., 2.1.0)",
            "vMAJOR_MINOR_PATCH (e.g., v2_1_0)",
            "MAJOR-MINOR-PATCH (e.g., 2-1-0)"
        ],
        answer: 1,
        explanation: "Semantic versioning uses MAJOR.MINOR.PATCH format (e.g., 2.1.0) where MAJOR indicates breaking changes, MINOR adds features, and PATCH fixes bugs.",
        difficulty: "Easy",
        topic: "Semantic Versioning"
    },
    {
        id: "git-55",
        question: "You want to apply a stash entry but keep it in the stash list for future use. Which command should you use?",
        options: [
            "git stash pop",
            "git stash apply",
            "git stash branch",
            "git stash show"
        ],
        answer: 1,
        explanation: "git stash apply applies the stash to your working directory but keeps the stash entry in the list, unlike git stash pop which removes it after applying.",
        difficulty: "Easy",
        topic: "stash apply"
    },
    {
        id: "git-56",
        question: "What does 'git merge --no-ff feature-x' do when feature-x can be fast-forwarded?",
        options: [
            "It fails with an error because fast-forward is possible",
            "It creates a merge commit even though a fast-forward would be possible, preserving branch history",
            "It performs the fast-forward and deletes the feature branch",
            "It rebases feature-x before merging"
        ],
        answer: 1,
        explanation: "--no-ff forces Git to create a merge commit even when a fast-forward is possible, which preserves the existence of the feature branch in the history.",
        difficulty: "Medium",
        topic: "Fast Forward Merge"
    },
    {
        id: "git-57",
        question: "What is the 'staging area' (index) in Git?",
        options: [
            "A separate directory where staged files are copied",
            "A binary file in .git that stores a snapshot of what will go into the next commit",
            "A remote server that holds pending changes",
            "A log of all staged operations"
        ],
        answer: 1,
        explanation: "The staging area (or index) is stored in .git/index and contains a snapshot of the files and their contents that will be included in the next commit.",
        difficulty: "Easy",
        topic: "Staging Area"
    },
    {
        id: "git-58",
        question: "You accidentally added a large binary file (500MB) to a commit and pushed it. Your teammates are complaining about slow clones. What should you do?",
        options: [
            "Just delete the file in the next commit; that will fix clone speeds",
            "Use git filter-repo to remove the file from all history, then force-push, and have teammates re-clone",
            "Run git gc and the file will be automatically removed",
            "Compress the file and push again"
        ],
        answer: 1,
        explanation: "Simply deleting the file in a new commit doesn't remove it from history. git filter-repo rewrites history to remove the large file entirely, reducing repository size for everyone.",
        difficulty: "Hard",
        topic: "Large Repositories"
    },
    {
        id: "git-59",
        question: "In GitHub, what does 'Secret Scanning' do?",
        options: [
            "Scans your code for performance issues",
            "Automatically detects tokens, private keys, and other secrets pushed to the repository and alerts the repository owner",
            "Scans for vulnerabilities in dependencies",
            "Checks if your repository is publicly accessible"
        ],
        answer: 1,
        explanation: "Secret scanning scans pushes for known secret patterns (API keys, tokens, credentials) and notifies the repository owner so they can revoke and replace the leaked secrets.",
        difficulty: "Easy",
        topic: "Secret Scanning"
    },
    {
        id: "git-60",
        question: "What does 'git config core.autocrlf true' do on Windows?",
        options: [
            "Disables all line ending conversion",
            "Converts LF to CRLF on checkout and CRLF to LF on commit",
            "Converts CRLF to LF on checkout and LF to CRLF on commit",
            "Sets the default file encoding to UTF-8"
        ],
        answer: 1,
        explanation: "On Windows, core.autocrlf=true converts line endings from LF (Unix) to CRLF (Windows) when checking out, and from CRLF back to LF when committing.",
        difficulty: "Medium",
        topic: "Git Configuration"
    },
    {
        id: "git-61",
        question: "You want to create a new branch 'feature-auth' from the remote 'origin/develop' without switching to it. Which command works?",
        options: [
            "git switch -c feature-auth origin/develop",
            "git branch feature-auth origin/develop",
            "git checkout origin/develop -b feature-auth",
            "Both B and C are correct"
        ],
        answer: 3,
        explanation: "Both git branch and git checkout -b can create a new branch from a remote-tracking reference without switching to it (git branch) or while switching (git checkout -b).",
        difficulty: "Easy",
        topic: "Creating Branches"
    },
    {
        id: "git-62",
        question: "What is the difference between 'git stash' and 'git stash -u'?",
        options: [
            "No difference; -u is the default behavior",
            "git stash -u also stashes untracked files in addition to tracked modified files",
            "git stash -u only stashes untracked files, ignoring tracked changes",
            "git stash -u unstages files without storing them"
        ],
        answer: 1,
        explanation: "By default, git stash only stashes tracked modified files. The -u (include untracked) flag also includes untracked files in the stash.",
        difficulty: "Easy",
        topic: "git stash"
    },
    {
        id: "git-63",
        question: "In a GitHub Actions workflow, what happens if two jobs have a circular 'needs' dependency (Job A needs Job B, Job B needs Job A)?",
        options: [
            "Both jobs run simultaneously",
            "The workflow fails to run and GitHub reports a circular dependency error",
            "Only the first job defined runs",
            "GitHub automatically resolves the circular dependency"
        ],
        answer: 1,
        explanation: "GitHub Actions detects circular dependencies in the job graph and prevents the workflow from running, displaying an error about the circular dependency.",
        difficulty: "Medium",
        topic: "GitHub Actions"
    },
    {
        id: "git-64",
        question: "What does 'git reflog show HEAD@{2.hours.ago}' display?",
        options: [
            "All commits made in the last 2 hours",
            "The state HEAD pointed to approximately 2 hours ago",
            "Commits that will be garbage collected in 2 hours",
            "The diff of all changes in the last 2 hours"
        ],
        answer: 1,
        explanation: "The reflog with time-based syntax shows where HEAD was at a specific point in time, useful for recovering to a known good state from a few hours ago.",
        difficulty: "Hard",
        topic: "Git Reflog"
    },
    {
        id: "git-65",
        question: "You are using 'git subtree' to include a shared library. How does subtree differ from submodule?",
        options: [
            "Subtree stores the library in a separate .git directory",
            "Subtree merges the library's code directly into your repository, while submodule keeps it as a separate reference",
            "Subtree requires network access for every operation",
            "Subtree and submodule are identical in functionality"
        ],
        answer: 1,
        explanation: "Git subtree incorporates the external project's files directly into your repository history, while submodules maintain a reference to an external repository and require separate cloning.",
        difficulty: "Medium",
        topic: "Subtrees"
    },
    {
        id: "git-66",
        question: "What does the 'post-merge' Git hook do?",
        options: [
            "Runs before a merge is performed",
            "Runs after a successful merge, useful for rebuilding dependencies or updating submodules",
            "Runs after a merge conflict is detected",
            "Runs after every git push that includes a merge"
        ],
        answer: 1,
        explanation: "The post-merge hook runs after git merge completes successfully. A common use case is running npm install or updating submodules after pulling merged changes.",
        difficulty: "Medium",
        topic: "Post-merge"
    },
    {
        id: "git-67",
        question: "In GitHub, what is a 'fork' technically?",
        options: [
            "A symbolic link to the original repository",
            "A server-side clone of the original repository that lives under your GitHub account",
            "A branch of the original repository",
            "A mirror that automatically syncs with the original"
        ],
        answer: 1,
        explanation: "A fork is a full copy of another repository on GitHub's servers under your account. It maintains a connection to the original repo for cross-repository PRs and sync.",
        difficulty: "Easy",
        topic: "Fork"
    },
    {
        id: "git-68",
        question: "You want to find all commits that modified a specific function 'calculateTotal' in 'utils.js'. Which command helps?",
        options: [
            "git log -S 'calculateTotal' -- utils.js",
            "git grep 'calculateTotal' utils.js",
            "git blame utils.js",
            "git diff utils.js"
        ],
        answer: 0,
        explanation: "git log -S (pickaxe) searches for commits where the specified string was added or removed, making it ideal for finding when a specific function or variable was introduced or changed.",
        difficulty: "Medium",
        topic: "Searching History"
    },
    {
        id: "git-69",
        question: "What is 'git fsck' used for?",
        options: [
            "To measure repository size and optimize storage",
            "To verify the integrity and connectivity of Git objects in the database",
            "To fix merge conflicts automatically",
            "To synchronize local branches with remote branches"
        ],
        answer: 1,
        explanation: "git fsck (file system check) verifies the integrity of the Git object database, checking for corrupted or missing objects and dangling references.",
        difficulty: "Medium",
        topic: "Debugging"
    },
    {
        id: "git-70",
        question: "You run 'git push origin :feature-old' (with a colon before the branch name). What does this do?",
        options: [
            "Renames the branch to 'feature-old' on the remote",
            "Deletes the 'feature-old' branch from the remote repository",
            "Pushes an empty commit to 'feature-old'",
            "Creates a new empty branch called 'feature-old' on the remote"
        ],
        answer: 1,
        explanation: "The colon syntax (git push origin :branch-name) is a shorthand for pushing 'nothing' to the remote branch, which effectively deletes it from the remote.",
        difficulty: "Medium",
        topic: "Deleting Branches"
    },
    {
        id: "git-71",
        question: "In a GitHub Actions workflow file, what does 'concurrency' control?",
        options: [
            "The number of parallel jobs that can run simultaneously",
            "Whether multiple workflow runs for the same branch/PR can execute concurrently or should cancel/queue previous runs",
            "The maximum number of steps in a job",
            "The number of self-hosted runners allocated"
        ],
        answer: 1,
        explanation: "The concurrency key ensures only one workflow run per group (e.g., per branch) runs at a time, canceling in-progress runs when a new one is triggered.",
        difficulty: "Medium",
        topic: "GitHub Actions"
    },
    {
        id: "git-72",
        question: "What does 'git status --porcelain' output?",
        options: [
            "A human-readable status message with colored output",
            "A machine-parseable output with two-character status codes for each file",
            "The status of only porcelain (brittle) files",
            "An empty output if the working directory is clean"
        ],
        answer: 1,
        explanation: "--porcelain produces a stable, machine-readable format with two-column status codes (e.g., 'M ' for staged modified, ' M' for unstaged modified) designed for scripting.",
        difficulty: "Medium",
        topic: "git status"
    },
    {
        id: "git-73",
        question: "You are on a shared 'develop' branch and realize you committed sensitive data 5 commits ago. What is the safest approach that minimizes disruption to teammates?",
        options: [
            "Force push after using git filter-repo to remove the data",
            "Use git filter-repo to rewrite history, coordinate with all teammates to re-clone or reset, and rotate the leaked credentials immediately",
            "Just add the file to .gitignore in a new commit",
            "Delete the repository and create a new one"
        ],
        answer: 1,
        explanation: "Rewriting shared history requires team coordination. The priority is rotating leaked credentials, then rewriting history with filter-repo, and having all contributors re-clone.",
        difficulty: "Hard",
        topic: "Repository Security"
    },
    {
        id: "git-74",
        question: "What is the SHA-1 hash in Git computed from for a commit object?",
        options: [
            "Only the commit message",
            "The tree SHA, parent SHA(s), author info, committer info, and commit message",
            "The file contents and the branch name",
            "The timestamp and author email only"
        ],
        answer: 1,
        explanation: "A commit's SHA-1 is calculated from all its components: the tree object SHA, zero or more parent commit SHAs, author and committer name/email/timestamp, and the commit message.",
        difficulty: "Medium",
        topic: "SHA-1"
    },
    {
        id: "git-75",
        question: "You want to set your name and email only for a specific repository. Which commands should you use?",
        options: [
            "git config --global user.name 'Name' && git config --global user.email 'email'",
            "git config user.name 'Name' && git config user.email 'email'",
            "git set-user --local 'Name' 'email'",
            "git config --system user.name 'Name' && git config --system user.email 'email'"
        ],
        answer: 1,
        explanation: "Omitting the --global flag sets the configuration at the local (repository) level, stored in .git/config, taking precedence over global and system configs.",
        difficulty: "Easy",
        topic: "Local Config"
    },
    {
        id: "git-76",
        question: "In GitHub, what does the 'Watch' feature do when set to 'Participating and @mentions'?",
        options: [
            "You receive notifications for all activity in the repository",
            "You only receive notifications when you are @mentioned or participating in threads",
            "You receive only release notifications",
            "You stop receiving all notifications from the repository"
        ],
        answer: 1,
        explanation: "The 'Participating and @mentions' watch level sends notifications only when you're directly involved in a conversation or specifically @mentioned, reducing noise.",
        difficulty: "Easy",
        topic: "Watch"
    },
    {
        id: "git-77",
        question: "You have a file that shows as modified in 'git status' but 'git diff' shows no changes. What is the most likely cause?",
        options: [
            "Git is broken and needs to be reinstalled",
            "The file mode (permissions) changed but the content is identical; Git is detecting a mode change",
            "The file was added to .gitignore",
            "The file is in a detached HEAD state"
        ],
        answer: 1,
        explanation: "Git tracks file permission changes. If only the executable bit or file mode changed without content changes, git status shows it as modified but git diff (by default) may not show a content difference.",
        difficulty: "Medium",
        topic: "Troubleshooting"
    },
    {
        id: "git-78",
        question: "What does 'git push --set-upstream origin feature-x' (or -u) do?",
        options: [
            "Pushes the branch and sets the default remote for all local branches to origin",
            "Pushes the branch and creates a tracking relationship so future git pull/push on this branch use origin/feature-x by default",
            "Sets the upstream repository URL for the entire local repository",
            "Pushes all branches to origin simultaneously"
        ],
        answer: 1,
        explanation: "The -u flag sets the upstream (remote-tracking) branch for the current branch, so subsequent git pull and git push commands on this branch work without specifying the remote and branch.",
        difficulty: "Easy",
        topic: "Remote Tracking"
    },
    {
        id: "git-79",
        question: "In an interview, you're asked: 'Can you have multiple 'origin' remotes in Git?' What is the correct answer?",
        options: [
            "Yes, you can have multiple remotes named 'origin'",
            "No, remote names must be unique, but you can have multiple remotes with different names (e.g., 'upstream', 'backup')",
            "Yes, but only if they point to the same URL",
            "No, Git only supports one remote per repository"
        ],
        answer: 1,
        explanation: "Remote names are unique identifiers in a repository. You cannot have two remotes named 'origin', but you can add multiple remotes with different names pointing to different URLs.",
        difficulty: "Easy",
        topic: "git remote"
    },
    {
        id: "git-80",
        question: "What is the 'octopus merge' strategy in Git?",
        options: [
            "A strategy that resolves all merge conflicts automatically",
            "A merge strategy that can merge more than two branches at once, but cannot handle conflicts",
            "A strategy that creates eight separate merge commits",
            "A deprecated merge strategy no longer supported"
        ],
        answer: 1,
        explanation: "The octopus strategy merges multiple branches simultaneously but refuses to proceed if any conflicts arise, making it useful for combining many topic branches with no overlapping changes.",
        difficulty: "Hard",
        topic: "Merge Strategies"
    },
    {
        id: "git-81",
        question: "You want to see only the files that changed between two commits, without the actual diff content. Which command is most efficient?",
        options: [
            "git diff commit1 commit2",
            "git diff --name-only commit1 commit2",
            "git log --stat commit1..commit2",
            "git show commit1 commit2"
        ],
        answer: 1,
        explanation: "git diff --name-only lists only the filenames that differ between two commits without showing the actual content changes, making it efficient for quick overview.",
        difficulty: "Easy",
        topic: "git diff"
    },
    {
        id: "git-82",
        question: "In GitHub Actions, what is an 'artifact'?",
        options: [
            "A cached dependency used across workflow runs",
            "A file or set of files produced by a job that can be downloaded or shared with subsequent jobs",
            "A secret stored encrypted in the repository",
            "A Docker image used by the workflow runner"
        ],
        answer: 1,
        explanation: "Artifacts are files produced during a workflow run (like build outputs, test results, logs) that can be uploaded, shared between jobs, and downloaded after the run completes.",
        difficulty: "Easy",
        topic: "Artifacts"
    },
    {
        id: "git-83",
        question: "What does 'git gc --aggressive' do compared to a regular 'git gc'?",
        options: [
            "It runs faster by skipping verification",
            "It spends more time optimizing, repacking objects more thoroughly and with higher compression, but takes significantly longer",
            "It deletes all unreachable objects immediately",
            "It only works on repositories larger than 1GB"
        ],
        answer: 1,
        explanation: "--aggressive tells Git to spend more time on garbage collection, using higher compression levels and more thorough repacking, at the cost of significantly increased runtime.",
        difficulty: "Hard",
        topic: "Git Performance"
    },
    {
        id: "git-84",
        question: "You are asked in an interview: 'What happens when you git clone a repository?' What is the most complete answer?",
        options: [
            "It downloads the latest version of all files",
            "It creates a new directory, initializes a .git folder, fetches all objects and refs from the remote, and checks out the default branch",
            "It copies the working directory without the .git folder",
            "It downloads the README and LICENSE files only"
        ],
        answer: 1,
        explanation: "git clone creates a full local repository with complete history (all objects), sets up remote tracking, and checks out the default branch's working tree.",
        difficulty: "Easy",
        topic: "git clone"
    },
    {
        id: "git-85",
        question: "What does 'git pull --rebase' do compared to a default 'git pull'?",
        options: [
            "It downloads changes and creates a merge commit",
            "It fetches remote changes and rebases your local commits on top of the fetched changes instead of merging",
            "It rebase the remote branch onto your local branch",
            "It reverses the pull operation if conflicts are found"
        ],
        answer: 1,
        explanation: "--rebase integrates remote changes by rebasing your local commits on top of the remote branch, producing a linear history instead of a merge commit.",
        difficulty: "Easy",
        topic: "git pull"
    },
    {
        id: "git-86",
        question: "In a GitHub repository's Settings, what does 'Archive this repository' do?",
        options: [
            "It creates a zip download of the repository",
            "It makes the repository read-only — it's still visible but cannot be committed to or modified",
            "It permanently deletes the repository after 30 days",
            "It moves the repository to GitHub's cold storage"
        ],
        answer: 1,
        explanation: "Archiving a repository sets it to read-only. All existing content remains visible and accessible, but no one can push, create issues, or make any modifications.",
        difficulty: "Easy",
        topic: "Repository Management"
    },
    {
        id: "git-87",
        question: "You run 'git log --all --oneline | wc -l' and get 1000, but 'git rev-list --count HEAD' shows 800. Why the difference?",
        options: [
            "The commands are identical and should produce the same result",
            "git log --all includes commits from all branches (including unreachable ones in reflog), while rev-list HEAD only counts commits reachable from HEAD",
            "git log --all counts each file change, not commits",
            "wc -l counts lines incorrectly in pipeline"
        ],
        answer: 1,
        explanation: "--all includes all refs (branches, tags, remote-tracking branches), so it counts commits on other branches not reachable from HEAD, explaining the higher count.",
        difficulty: "Hard",
        topic: "Git History"
    },
    {
        id: "git-88",
        question: "What is the recommended way to contribute a bug fix to an open-source project you don't have write access to?",
        options: [
            "Email the maintainer your patch file",
            "Fork the repository, create a branch with your fix, push to your fork, and open a pull request",
            "Open an issue and wait for the maintainer to fix it",
            "Clone the repo, make changes, and try to push directly"
        ],
        answer: 1,
        explanation: "The standard open-source contribution workflow is: fork → clone your fork → create a feature/fix branch → push to your fork → open a PR against the original repo.",
        difficulty: "Easy",
        topic: "Open Source Contribution"
    },
    {
        id: "git-89",
        question: "In a GitHub Actions workflow, what does 'runs-on: ubuntu-latest' specify?",
        options: [
            "The operating system of the machine triggering the workflow",
            "The type of runner (virtual machine) where the job will execute",
            "The target deployment environment",
            "The Docker image to use for the build"
        ],
        answer: 1,
        explanation: "runs-on specifies the runner environment — a GitHub-hosted virtual machine with the specified operating system where the job's steps will execute.",
        difficulty: "Easy",
        topic: "GitHub Actions"
    },
    {
        id: "git-90",
        question: "What is a 'dangling commit' in Git?",
        options: [
            "A commit that has been tagged",
            "A commit not reachable from any branch, tag, or other reference, typically created by amended or reset commits",
            "A commit on a deleted remote branch",
            "A commit with merge conflicts"
        ],
        answer: 1,
        explanation: "Dangling commits are unreachable from any ref — they often result from git commit --amend or git reset, which create new commits and leave the old ones orphaned.",
        difficulty: "Medium",
        topic: "Git Objects"
    },
    {
        id: "git-91",
        question: "You need to ensure that every PR in your repository is reviewed by at least two team members before merging. Which GitHub feature enforces this?",
        options: [
            "CODEOWNERS file",
            "Branch protection rules with 'Required number of approvals before merging' set to 2",
            "A GitHub Actions workflow that blocks merge",
            "Issue templates with reviewer assignments"
        ],
        answer: 1,
        explanation: "Branch protection rules can specify the minimum number of required approving reviews before a PR can be merged, ensuring code review requirements are met.",
        difficulty: "Easy",
        topic: "Branch Protection Rules"
    },
    {
        id: "git-92",
        question: "What does 'git rev-parse HEAD' output?",
        options: [
            "The branch name that HEAD points to",
            "The full SHA-1 hash of the commit that HEAD currently points to",
            "The contents of the .git/HEAD file",
            "The path to the .git directory"
        ],
        answer: 1,
        explanation: "git rev-parse HEAD resolves the HEAD reference to its full 40-character SHA-1 commit hash, useful in scripts where you need the exact commit identifier.",
        difficulty: "Medium",
        topic: "HEAD"
    },
    {
        id: "git-93",
        question: "You are using GitHub CLI (gh). What does 'gh pr create --title 'Fix login bug' --body 'Resolves #42'' do?",
        options: [
            "Creates a new issue titled 'Fix login bug'",
            "Creates a pull request from the current branch with the given title and body, linking it to issue #42",
            "Updates issue #42 with the given title and body",
            "Creates a draft PR without a title"
        ],
        answer: 1,
        explanation: "gh pr create creates a pull request from the current branch to the default base branch, with the specified title and body. 'Resolves #42' auto-links and can close the issue on merge.",
        difficulty: "Easy",
        topic: "GitHub CLI"
    },
    {
        id: "git-94",
        question: "What is the effect of adding a file to .gitignore that is already tracked by Git?",
        options: [
            "The file is immediately removed from the repository",
            "Git continues to track the file; .gitignore only affects untracked files",
            "The file is deleted from the working directory",
            "Git throws an error and stops working"
        ],
        answer: 1,
        explanation: ".gitignore only prevents untracked files from being added. Files already tracked by Git must be explicitly removed with 'git rm --cached' to stop tracking.",
        difficulty: "Easy",
        topic: ".gitignore"
    },
    {
        id: "git-95",
        question: "In a monorepo, you want to clone only the 'frontend/' directory for a CI build. Which Git feature enables this?",
        options: [
            "Git LFS",
            "git sparse-checkout",
            "git submodule",
            "git stash"
        ],
        answer: 1,
        explanation: "git sparse-checkout allows you to clone a repository but only check out specific directories, saving time and disk space in monorepo scenarios.",
        difficulty: "Hard",
        topic: "Large Repositories"
    },
    {
        id: "git-96",
        question: "You want to rename your current branch from 'feature-old-name' to 'feature-new-name'. Which command should you use?",
        options: [
            "git branch --move feature-new-name",
            "git rename branch feature-old-name feature-new-name",
            "git branch --copy feature-new-name && git branch -D feature-old-name",
            "git checkout -b feature-new-name && git branch -D feature-old-name"
        ],
        answer: 0,
        explanation: "git branch --move (or -m) renames the current branch. It's the cleanest approach as it updates the branch reference without requiring you to switch branches.",
        difficulty: "Easy",
        topic: "Renaming Branches"
    },
    {
        id: "git-97",
        question: "What is a 'pack file' in Git's object storage?",
        options: [
            "A single file containing one compressed Git object",
            "A compressed archive of multiple Git objects using delta compression to save space",
            "A backup file created by git stash",
            "A metadata file listing all branches in the repository"
        ],
        answer: 1,
        explanation: "Pack files store multiple objects compressed together, using delta compression where similar objects store only their differences, significantly reducing repository size.",
        difficulty: "Hard",
        topic: "Git Architecture"
    },
    {
        id: "git-98",
        question: "You run 'git rebase main' while on 'feature-x' and encounter a conflict. After resolving it, what must you do to continue the rebase?",
        options: [
            "git commit && git rebase --continue",
            "git add <resolved-files> && git rebase --continue",
            "git merge --continue",
            "Just run git rebase --continue; Git auto-detects resolved files"
        ],
        answer: 1,
        explanation: "During rebase, after resolving conflicts you must git add the resolved files to mark them as resolved, then git rebase --continue to proceed with the remaining commits.",
        difficulty: "Medium",
        topic: "Rebase"
    },
    {
        id: "git-99",
        question: "In GitHub, what does the 'Projects' feature provide?",
        options: [
            "A way to compile and build code",
            "A kanban-style board for tracking issues, PRs, and notes across repositories",
            "A container for managing GitHub Actions workflows",
            "A way to deploy applications to servers"
        ],
        answer: 1,
        explanation: "GitHub Projects provides project management boards (similar to Trello or Jira) where you can track issues, pull requests, and custom notes across multiple repositories.",
        difficulty: "Easy",
        topic: "Projects"
    },
    {
        id: "git-100",
        question: "What does 'git diff --cached' show?",
        options: [
            "The same as 'git diff --staged' — differences between the staging area and the last commit",
            "Differences between the working directory and the staging area",
            "Differences between two branches",
            "All uncommitted changes including unstaged ones"
        ],
        answer: 0,
        explanation: "--cached is an alias for --staged. Both show the differences between files in the staging area (index) and the most recent commit.",
        difficulty: "Easy",
        topic: "git diff"
    },
    {
        id: "git-101",
        question: "Your team has a pre-push hook that runs tests. A developer pushes with '--no-verify' and broken tests reach the remote. What is the most robust solution?",
        options: [
            "Remove the developer's push access",
            "Implement the same test checks in a CI pipeline triggered on push, as hooks can always be bypassed client-side",
            "Use a post-push hook instead",
            "Encrypt the pre-push hook file"
        ],
        answer: 1,
        explanation: "Since Git hooks are client-side and bypassable, the only reliable enforcement is running the same checks in server-side CI/CD pipelines that cannot be skipped by developers.",
        difficulty: "Medium",
        topic: "Pre-push"
    },
    {
        id: "git-102",
        question: "What does 'git tag -a v1.0.0 -m 'Release version 1.0.0'' create?",
        options: [
            "A lightweight tag named v1.0.0",
            "An annotated tag object stored in the Git database with tagger info, date, and message",
            "A new branch named v1.0.0",
            "A GitHub Release with the specified message"
        ],
        answer: 1,
        explanation: "The -a flag creates an annotated tag, which is a full Git object containing the tagger's name, email, date, message, and a pointer to the commit being tagged.",
        difficulty: "Easy",
        topic: "Annotated Tags"
    },
    {
        id: "git-103",
        question: "You are debugging why a GitHub Actions workflow fails. Which feature lets you re-run just the failed jobs instead of the entire workflow?",
        options: [
            "workflow_dispatch with inputs",
            "Re-run failed jobs button in the Actions UI",
            "Deleting and re-triggering the workflow",
            "Using 'continue-on-error: true' on all steps"
        ],
        answer: 1,
        explanation: "GitHub Actions allows you to re-run only the failed jobs in a workflow run, saving time and resources compared to re-running all jobs from scratch.",
        difficulty: "Easy",
        topic: "GitHub Actions"
    },
    {
        id: "git-104",
        question: "What is the difference between 'git restore --source=HEAD~2 file.js' and 'git checkout HEAD~2 -- file.js'?",
        options: [
            "They are completely different operations with different results",
            "Both restore file.js to its state at HEAD~2, but git restore is the modern recommended command while checkout is a legacy overloaded command",
            "restore modifies the staging area; checkout only modifies the working directory",
            "checkout creates a new branch; restore does not"
        ],
        answer: 1,
        explanation: "Both commands achieve the same result — restoring a file from a specific commit. git restore was introduced as a dedicated, less confusing alternative to the overloaded git checkout.",
        difficulty: "Medium",
        topic: "git restore"
    },
    {
        id: "git-105",
        question: "In a CI pipeline, you want to check if the current commit is part of a pull request. Which environment variable does GitHub Actions provide for this?",
        options: [
            "GITHUB_PR_NUMBER",
            "GITHUB_EVENT_NAME (set to 'pull_request') and GITHUB_REF (contains 'refs/pull/')",
            "CI_PULL_REQUEST",
            "GITHUB_IS_PR"
        ],
        answer: 1,
        explanation: "GitHub Actions uses GITHUB_EVENT_NAME to indicate the trigger type. For PRs, it's 'pull_request', and GITHUB_REF contains 'refs/pull/<number>/merge'.",
        difficulty: "Medium",
        topic: "Environment Variables"
    },
    {
        id: "git-106",
        question: "What does 'git log --follow -- file.js' do that 'git log -- file.js' does not?",
        options: [
            "It shows commits from all branches that modified the file",
            "It tracks the file across renames, showing history even if the file was renamed",
            "It follows merge commits to show the full history",
            "It continuously monitors the file for changes in real-time"
        ],
        answer: 1,
        explanation: "--follow enables rename detection for a single file path, so git log continues to show the file's history even after it has been renamed.",
        difficulty: "Medium",
        topic: "git log"
    },
    {
        id: "git-107",
        question: "You have three stashed entries. You want to apply only the second one (stash@{1}). Which command is correct?",
        options: [
            "git stash apply 2",
            "git stash apply stash@{1}",
            "git stash pop -n 1",
            "git stash apply --index=1"
        ],
        answer: 1,
        explanation: "Stash entries are referenced using the stash@{n} syntax where n is the index. stash@{0} is the latest, stash@{1} is the second most recent.",
        difficulty: "Easy",
        topic: "stash list"
    },
    {
        id: "git-108",
        question: "What is 'git notes' used for?",
        options: [
            "To add commit messages to commits that don't have one",
            "To attach additional metadata or information to commits without modifying the commit itself",
            "To create sticky notes on branches",
            "To annotate files in the working directory"
        ],
        answer: 1,
        explanation: "git notes allows you to add or modify metadata attached to commits without changing the commit hash. Notes are stored as separate objects and can be pushed to a remote refs/notes/ namespace.",
        difficulty: "Hard",
        topic: "Git Objects"
    },
    {
        id: "git-109",
        question: "A junior developer runs 'git add .' before every commit. What is the risk with this approach?",
        options: [
            "It is the recommended best practice with no risks",
            "It may accidentally stage files that shouldn't be committed, like build artifacts, credentials, or temporary files",
            "It causes Git to run significantly slower",
            "It only stages new files, not modifications"
        ],
        answer: 1,
        explanation: "'git add .' stages all changes including potentially unwanted files like .env files, build outputs, or logs. Selective staging with 'git add <specific-files>' is safer.",
        difficulty: "Easy",
        topic: "Best Practices"
    },
    {
        id: "git-110",
        question: "In GitHub, what is a 'Security Advisory'?",
        options: [
            "A recommendation to enable two-factor authentication",
            "A private report of a security vulnerability that can be coordinated with maintainers before public disclosure",
            "A list of all Dependabot alerts in the repository",
            "A GitHub feature that scans for malware"
        ],
        answer: 1,
        explanation: "Security Advisories allow maintainers to privately discuss and coordinate fixes for security vulnerabilities before publicly disclosing them, managing the disclosure timeline.",
        difficulty: "Medium",
        topic: "Security Advisories"
    },
    {
        id: "git-111",
        question: "What does 'git config --list --show-origin' display?",
        options: [
            "All configuration values with the file they come from (system, global, local)",
            "Only the local repository configuration",
            "The origin remote URL and configuration",
            "A list of all remote repositories"
        ],
        answer: 0,
        explanation: "--show-origin adds the source file path to each configuration entry, showing whether each setting comes from system, global, or local config files.",
        difficulty: "Medium",
        topic: "Git Configuration"
    },
    {
        id: "git-112",
        question: "You want to clone a repository but only need the last 3 commits for a quick CI build. Which command achieves this?",
        options: [
            "git clone --depth 3 <url>",
            "git clone --shallow 3 <url>",
            "git clone --last 3 <url>",
            "git clone --limit 3 <url>"
        ],
        answer: 0,
        explanation: "--depth 3 creates a shallow clone with only the 3 most recent commits, significantly reducing clone time and disk usage for CI environments.",
        difficulty: "Easy",
        topic: "git clone"
    },
    {
        id: "git-113",
        question: "What is the 'GitHub Flow' workflow?",
        options: [
            "A complex workflow with multiple long-lived branches",
            "A simple branch-based workflow: create a branch, make changes, open a PR, discuss, merge to main, deploy",
            "A workflow that only uses the main branch with no feature branches",
            "A workflow requiring Git LFS for all changes"
        ],
        answer: 1,
        explanation: "GitHub Flow is a lightweight workflow where developers create feature branches off main, open PRs for review, and merge back to main which is always deployable.",
        difficulty: "Easy",
        topic: "GitHub Flow"
    },
    {
        id: "git-114",
        question: "You run 'git push origin main' after rebasing a shared branch. A teammate who already pulled the original commits will now have diverged history. What is this called?",
        options: [
            "A fast-forward divergence",
            "A rewritten history problem causing potential duplicate commits for teammates",
            "A detached HEAD scenario",
            "A stash conflict"
        ],
        answer: 1,
        explanation: "Rebasing shared branches rewrites commit SHAs, causing teammates who already have the original commits to end up with duplicate commits if they pull again.",
        difficulty: "Hard",
        topic: "Rebase"
    },
    {
        id: "git-115",
        question: "What does 'GITHUB_TOKEN' in GitHub Actions represent?",
        options: [
            "A personal access token of the workflow author",
            "An automatically generated token for the workflow run with permissions scoped to the current repository",
            "A secret that must be manually configured",
            "A token valid for all repositories in the organization"
        ],
        answer: 1,
        explanation: "GITHUB_TOKEN is automatically provided to every workflow run, scoped to the repository where the workflow runs, with permissions that can be configured in the workflow or repository settings.",
        difficulty: "Medium",
        topic: "Environment Variables"
    },
    {
        id: "git-116",
        question: "In an interview, you're asked: 'Is Git a snapshot-based or diff-based version control system?' What is the correct answer?",
        options: [
            "Git is diff-based, storing changes between versions",
            "Git is snapshot-based, storing complete snapshots of files at each commit",
            "Git uses both equally for different file types",
            "Git is neither; it uses a hybrid delta-snapshot system"
        ],
        answer: 1,
        explanation: "Git stores complete snapshots of file contents as blob objects at each commit. While pack files use delta compression for storage efficiency, Git's logical model is snapshot-based.",
        difficulty: "Medium",
        topic: "Git Architecture"
    },
    {
        id: "git-117",
        question: "What does 'git describe --tags' output when HEAD is two commits after tag v1.0.0?",
        options: [
            "v1.0.0-2-gabcdef1",
            "v1.0.0+2",
            "v1.0.0..HEAD",
            "v1.0.0-2-abcdef1"
        ],
        answer: 0,
        explanation: "git describe outputs the nearest tag, the number of commits after it, and an abbreviated SHA prefixed with 'g' (for Git), like v1.0.0-2-gabcdef1.",
        difficulty: "Hard",
        topic: "Tags"
    },
    {
        id: "git-118",
        question: "You want to set up a GitHub Actions workflow that runs on every push to any branch. Which trigger configuration is correct?",
        options: [
            "on: push: branches: ['*']",
            "on: [push]",
            "on: push: all: true",
            "on: trigger: push"
        ],
        answer: 1,
        explanation: "on: [push] triggers the workflow on any push event to any branch or tag. Adding branches filter would restrict it to specific branches.",
        difficulty: "Easy",
        topic: "Workflows"
    },
    {
        id: "git-119",
        question: "What is the practical difference between 'git stash drop' and 'git stash clear'?",
        options: [
            "They are identical",
            "drop removes a single stash entry (by default the latest); clear removes all stash entries",
            "drop removes all entries; clear removes only the latest",
            "drop permanently deletes the stash; clear moves it to a backup"
        ],
        answer: 1,
        explanation: "git stash drop removes one specific stash entry (defaulting to stash@{0}), while git stash clear removes all entries from the stash list at once.",
        difficulty: "Easy",
        topic: "stash drop"
    },
    {
        id: "git-120",
        question: "You are on a feature branch and want to update it with the latest changes from main before opening a PR. Which approach keeps the cleanest history?",
        options: [
            "git merge main",
            "git rebase main",
            "git cherry-pick main",
            "git format-patch main && git am"
        ],
        answer: 1,
        explanation: "Rebasing replays your feature commits on top of the latest main, creating a linear history without merge commits, which is cleaner for PR review.",
        difficulty: "Medium",
        topic: "Rebase"
    },
    {
        id: "git-121",
        question: "In a large organization, you need to enforce that all commit messages include a Jira ticket number. How can this be automatically validated?",
        options: [
            "GitHub branch protection rules",
            "A pre-commit or commit-msg hook that validates the message format",
            "A .gitignore rule",
            "Git configuration setting"
        ],
        answer: 1,
        explanation: "A commit-msg hook can validate the commit message format (e.g., requiring 'PROJ-123: description') and reject commits that don't match the pattern.",
        difficulty: "Medium",
        topic: "Pre-commit"
    },
    {
        id: "git-122",
        question: "What does the 'git switch' command do compared to 'git checkout'?",
        options: [
            "switch can do everything checkout can do",
            "switch is a dedicated command for switching branches, while checkout is overloaded for switching branches, restoring files, and creating branches",
            "switch only works with remote branches",
            "switch and checkout are completely identical"
        ],
        answer: 1,
        explanation: "git switch was introduced to simplify branch switching by separating it from git checkout's file restoration functionality, reducing confusion from the overloaded checkout command.",
        difficulty: "Easy",
        topic: "git switch"
    },
    {
        id: "git-123",
        question: "You want to deploy to a staging environment only when a PR is opened against the 'develop' branch. How should you configure the GitHub Actions trigger?",
        options: [
            "on: push: branches: [develop]",
            "on: pull_request: branches: [develop]",
            "on: pull_request_target: branches: [develop]",
            "on: [pull_request, push]: branches: [develop]"
        ],
        answer: 1,
        explanation: "on: pull_request with a branches filter triggers the workflow when PRs are opened, synchronized, or reopened against the specified branch.",
        difficulty: "Medium",
        topic: "GitHub Actions"
    },
    {
        id: "git-124",
        question: "What is a 'shallow clone' in Git?",
        options: [
            "A clone that excludes the .git directory",
            "A clone with truncated history, containing only the most recent commits rather than the full history",
            "A clone that only includes the main branch",
            "A clone with compressed objects only"
        ],
        answer: 1,
        explanation: "A shallow clone (created with --depth) limits the commit history to a specified number of commits, saving time and space but losing full historical context.",
        difficulty: "Easy",
        topic: "git clone"
    },
    {
        id: "git-125",
        question: "In a code review, a reviewer asks you to split your single large commit into three logical commits. Your commit hasn't been pushed yet. What tool should you use?",
        options: [
            "git reset --soft HEAD~1, then stage and commit in parts",
            "git split HEAD",
            "Interactive rebase to edit the commit, then manually stage parts in separate commits",
            "Both A and C are valid approaches"
        ],
        answer: 3,
        explanation: "Both approaches work: reset --soft unstages the commit allowing you to re-commit in parts, or interactive rebase with 'edit' lets you split the commit during the rebase process.",
        difficulty: "Medium",
        topic: "Undoing Changes"
    },
    {
        id: "git-126",
        question: "What does 'git remote show origin' display?",
        options: [
            "The contents of the remote repository",
            "Detailed information about the 'origin' remote including URL, tracked branches, and local branches that push/pull to it",
            "A list of all files on the remote",
            "The remote's git log"
        ],
        answer: 1,
        explanation: "git remote show origin displays the remote URL, the HEAD branch, remote branches, and which local branches are configured to push to and pull from the remote.",
        difficulty: "Easy",
        topic: "git remote"
    },
    {
        id: "git-127",
        question: "You want to create a GitHub Release automatically when a tag matching 'v*' is pushed. How can you achieve this?",
        options: [
            "It happens automatically with no configuration needed",
            "Create a GitHub Actions workflow triggered on push to tags matching 'v*' that uses actions/create-release",
            "Add a .github/release.yml file",
            "Configure it in the repository's Settings under Releases"
        ],
        answer: 1,
        explanation: "You can create a workflow triggered by tag pushes (on: push: tags: ['v*']) that uses the actions/create-release or similar action to automatically create a GitHub Release.",
        difficulty: "Medium",
        topic: "GitHub Releases"
    },
    {
        id: "git-128",
        question: "What happens when you run 'git init' in an existing directory that already has files?",
        options: [
            "Git refuses to initialize if files exist",
            "Git creates a .git directory and starts tracking the existing files as untracked",
            "Git deletes all existing files",
            "Git automatically commits all existing files"
        ],
        answer: 1,
        explanation: "git init creates the .git directory structure in the existing folder. All pre-existing files appear as untracked and must be manually added and committed.",
        difficulty: "Easy",
        topic: "git init"
    },
    {
        id: "git-129",
        question: "Your CI/CD pipeline uses a self-hosted runner. What is a key advantage over GitHub-hosted runners?",
        options: [
            "Self-hosted runners are always faster",
            "Self-hosted runners can access internal network resources, use custom hardware/software, and avoid queue times",
            "Self-hosted runners don't require configuration",
            "Self-hosted runners are free with unlimited minutes"
        ],
        answer: 1,
        explanation: "Self-hosted runners are ideal when you need access to on-premises resources, custom tooling, specific hardware (like GPUs), or want to avoid GitHub-hosted runner limitations.",
        difficulty: "Medium",
        topic: "Self-hosted Runners"
    },
    {
        id: "git-130",
        question: "What does 'git merge --squash feature-x' do?",
        options: [
            "Merges feature-x and creates a merge commit",
            "Applies all changes from feature-x to the staging area without creating a commit, letting you create a single commit manually",
            "Deletes the feature-x branch after merging",
            "Squashes all commits in the repository into one"
        ],
        answer: 1,
        explanation: "--squash takes all changes from the feature branch and stages them without committing, allowing you to create a single commit with a custom message on the target branch.",
        difficulty: "Easy",
        topic: "Merge Strategies"
    },
    {
        id: "git-131",
        question: "In a Git repository, what does the 'packed-refs' file contain?",
        options: [
            "A list of all packed Git objects",
            "A compressed list of branch and tag references for efficient storage when there are many refs",
            "A backup of all commit messages",
            "Configuration for pack file compression"
        ],
        answer: 1,
        explanation: "packed-refs stores branch, tag, and other references in a single compressed file, improving performance when there are thousands of references.",
        difficulty: "Hard",
        topic: "Git Architecture"
    },
    {
        id: "git-132",
        question: "You want to push all local tags to the remote in a single command. Which command should you use?",
        options: [
            "git push --tags",
            "git push origin --tags",
            "git push --all --tags",
            "Both A and B work, but B is more explicit"
        ],
        answer: 3,
        explanation: "Both 'git push --tags' and 'git push origin --tags' push all local tags to the remote. The latter is more explicit about the destination remote.",
        difficulty: "Easy",
        topic: "git push"
    },
    {
        id: "git-133",
        question: "What is the 'Feature Branch Workflow'?",
        options: [
            "All developers work directly on the main branch",
            "Each feature is developed in its own dedicated branch, which is merged back via a pull request after completion and review",
            "Features are developed in submodules",
            "Each feature gets its own separate repository"
        ],
        answer: 1,
        explanation: "In Feature Branch Workflow, every piece of work gets its own branch. This enables parallel development, easier code review through PRs, and isolation of changes.",
        difficulty: "Easy",
        topic: "Feature Branch Workflow"
    },
    {
        id: "git-134",
        question: "You see the error 'fatal: not a git repository (or any of the parent directories): .git'. What does this mean?",
        options: [
            "The .git directory is corrupted",
            "You are running a Git command in a directory that is not inside a Git repository",
            "The repository has been archived",
            "Git is not installed on your system"
        ],
        answer: 1,
        explanation: "This error means the current directory (and none of its parent directories) contains a .git folder, so Git cannot find a repository to operate on.",
        difficulty: "Easy",
        topic: "Repository"
    },
    {
        id: "git-135",
        question: "What does 'git log --graph --decorate --oneline --all' display?",
        options: [
            "A plain list of all commit messages",
            "A compact ASCII graph showing branch and merge history with branch/tag names and abbreviated SHAs for all refs",
            "Only the commit messages of the current branch",
            "A detailed diff of all changes across all branches"
        ],
        answer: 1,
        explanation: "This combination of flags creates a compact visual representation of the repository's DAG (directed acyclic graph), showing branch structure, decorations (refs), and short SHAs.",
        difficulty: "Medium",
        topic: "git log"
    },
    {
        id: "git-136",
        question: "In a GitHub Actions workflow, what is the default shell for 'run' steps on ubuntu-latest?",
        options: [
            "fish",
            "zsh",
            "bash",
            "sh"
        ],
        answer: 2,
        explanation: "On GitHub-hosted ubuntu-latest runners, the default shell for 'run' steps is bash. On Windows it's PowerShell, and on macOS it's also bash.",
        difficulty: "Medium",
        topic: "GitHub Actions"
    },
    {
        id: "git-137",
        question: "You want to undo the last commit but keep all changes as staged files. Which command is correct?",
        options: [
            "git reset HEAD~1",
            "git reset --soft HEAD~1",
            "git revert HEAD",
            "git checkout HEAD~1"
        ],
        answer: 1,
        explanation: "git reset --soft HEAD~1 moves HEAD back one commit but keeps all changes from the undone commit in the staging area, ready to be re-committed.",
        difficulty: "Easy",
        topic: "git reset --soft"
    },
    {
        id: "git-138",
        question: "What does 'git pull --ff-only' do when the local branch has diverged from the remote?",
        options: [
            "It forces a fast-forward by resetting the local branch",
            "It refuses to pull and exits with an error, requiring you to rebase or merge explicitly",
            "It creates a merge commit automatically",
            "It rebases automatically"
        ],
        answer: 1,
        explanation: "--ff-only ensures that git pull only succeeds when a fast-forward is possible. If the branches have diverged, it errors out rather than creating a merge commit.",
        difficulty: "Medium",
        topic: "git pull"
    },
    {
        id: "git-139",
        question: "In a GitHub repository, what is the purpose of 'Issue Templates'?",
        options: [
            "To automatically create issues on a schedule",
            "To provide pre-defined forms that guide users to submit well-structured bug reports or feature requests",
            "To assign issues automatically to team members",
            "To link issues to Jira tickets"
        ],
        answer: 1,
        explanation: "Issue templates in .github/ISSUE_TEMPLATE/ provide structured forms for different types of issues (bug reports, feature requests), ensuring contributors provide necessary information.",
        difficulty: "Easy",
        topic: "Issue Templates"
    },
    {
        id: "git-140",
        question: "What does 'git blame -L 10,20 file.js' show?",
        options: [
            "The entire blame output for file.js, limited to 20 lines",
            "Only lines 10 through 20 of file.js with their commit and author information",
            "Lines 10 to 20 of the most recent commit message",
            "The diff between lines 10-20 of two commits"
        ],
        answer: 1,
        explanation: "The -L flag limits the blame output to a specific line range, showing commit SHA, author, and timestamp for only those lines.",
        difficulty: "Easy",
        topic: "git blame"
    },
    {
        id: "git-141",
        question: "You want to find the commit that introduced a specific line of code. Which combination of commands is most effective?",
        options: [
            "git log --all file.js",
            "git blame file.js to find the commit, then git show <commit-sha> for details",
            "git diff file.js",
            "git grep <pattern> file.js"
        ],
        answer: 1,
        explanation: "git blame identifies which commit last modified each line, and then git show provides the full commit details and changes for that specific commit.",
        difficulty: "Easy",
        topic: "Searching History"
    },
    {
        id: "git-142",
        question: "What is the risk of using 'git push --force' on a shared branch?",
        options: [
            "It has no risk if you are the branch owner",
            "It overwrites the remote branch history, potentially discarding commits from other team members",
            "It only affects your local repository",
            "It temporarily locks the branch"
        ],
        answer: 1,
        explanation: "Force pushing overwrites the remote branch with your local version, permanently deleting any commits on the remote that aren't in your local branch, causing data loss for teammates.",
        difficulty: "Easy",
        topic: "Force Push"
    },
    {
        id: "git-143",
        question: "In GitHub Actions, what does 'if: github.event_name == 'pull_request'' achieve as a step condition?",
        options: [
            "It triggers the workflow only for pull requests",
            "It makes the step execute only when the workflow was triggered by a pull request event",
            "It creates a pull request when the condition is met",
            "It cancels the workflow if it's not a pull request"
        ],
        answer: 1,
        explanation: "Step-level 'if' conditions control whether that specific step runs. This condition ensures the step only executes during pull request events, skipping it for pushes or other triggers.",
        difficulty: "Medium",
        topic: "GitHub Actions"
    },
    {
        id: "git-144",
        question: "What does 'git format-patch -3' generate?",
        options: [
            "A single patch file with the last 3 commits",
            "Three separate .patch files, one for each of the last 3 commits, suitable for emailing",
            "A compressed archive of the last 3 commits",
            "A diff between the current branch and 3 commits ago"
        ],
        answer: 1,
        explanation: "git format-patch generates individual .patch files for each commit, including commit metadata, suitable for sending via email to projects that accept email-based contributions.",
        difficulty: "Hard",
        topic: "Open Source Contribution"
    },
    {
        id: "git-145",
        question: "You want to see which branches contain a specific commit. Which command should you use?",
        options: [
            "git log --all --contains <commit-sha>",
            "git branch --contains <commit-sha>",
            "git branch --merged <commit-sha>",
            "Both A and B work"
        ],
        answer: 3,
        explanation: "Both 'git branch --contains' and 'git log --all --contains' show which branches have the specified commit in their history. The branch version is more concise.",
        difficulty: "Medium",
        topic: "Branches"
    },
    {
        id: "git-146",
        question: "What is the primary purpose of 'git gc' (garbage collection)?",
        options: [
            "To delete all branches except main",
            "To optimize repository storage by compressing objects, removing unreachable objects, and repacking",
            "To clean the working directory of temporary files",
            "To remove all stash entries"
        ],
        answer: 1,
        explanation: "git gc optimizes the repository by packing loose objects into pack files, removing unreachable objects, and pruning reflog entries that have expired.",
        difficulty: "Easy",
        topic: "Git Performance"
    },
    {
        id: "git-147",
        question: "In a GitHub Actions workflow, what is the difference between 'env' at the workflow level vs job level vs step level?",
        options: [
            "There is no difference; they all set the same variables",
            "Workflow-level env is available to all jobs and steps; job-level env overrides workflow env for that job; step-level env overrides both for that step",
            "Step-level env is available globally; workflow-level is only for that step",
            "Only workflow-level env is supported"
        ],
        answer: 1,
        explanation: "Environment variables follow a hierarchy: workflow-level provides defaults, job-level overrides for that job, and step-level overrides for that specific step.",
        difficulty: "Medium",
        topic: "Environment Variables"
    },
    {
        id: "git-148",
        question: "You are in a detached HEAD state and make commits. How can you save these commits to a new branch before switching?",
        options: [
            "git checkout -b new-branch",
            "git switch -c new-branch",
            "Both A and B work correctly",
            "You must first attach HEAD to a branch before creating a new one"
        ],
        answer: 2,
        explanation: "Both git checkout -b and git switch -c create a new branch at the current HEAD (even when detached), preserving the commits you made in the detached state.",
        difficulty: "Easy",
        topic: "Detached HEAD"
    },
    {
        id: "git-149",
        question: "What does 'git stash branch stash-branch' do?",
        options: [
            "Creates a branch from the stash but doesn't apply it",
            "Creates a new branch from the commit the stash was based on, applies the stash, and then drops it",
            "Moves the stash to a different branch",
            "Lists all stashes that contain branch information"
        ],
        answer: 1,
        explanation: "git stash branch creates a new branch at the base commit of the stash, applies the stash changes, and drops the stash — a convenient way to convert a stash into a branch.",
        difficulty: "Hard",
        topic: "stash branch"
    },
    {
        id: "git-150",
        question: "What is the difference between 'git revert' and 'git reset' for undoing changes?",
        options: [
            "They are identical",
            "revert creates a new commit that undoes changes (safe for shared branches); reset moves HEAD back, rewriting history (unsafe for shared branches)",
            "reset creates a new commit; revert moves HEAD back",
            "revert only works on the last commit; reset works on any commit"
        ],
        answer: 1,
        explanation: "revert is safe for shared branches as it creates a new commit that reverses changes. reset rewrites history by moving HEAD, which is dangerous on shared branches.",
        difficulty: "Easy",
        topic: "Revert vs Reset"
    },
    {
        id: "git-151",
        question: "You are on branch 'main' and run 'git merge --no-commit feature-x'. What is the state after this command?",
        options: [
            "The merge is completed without a commit message",
            "The merge changes are in the staging area but no merge commit is created, allowing you to inspect or modify before committing",
            "The merge is aborted",
            "A merge commit is created with a default message"
        ],
        answer: 1,
        explanation: "--no-commit performs the merge and stages all changes but stops before creating the merge commit, letting you review or adjust the merge result before finalizing.",
        difficulty: "Medium",
        topic: "Merge"
    },
    {
        id: "git-152",
        question: "In a GitHub repository, what does the 'Discussions' feature enable?",
        options: [
            "Private conversations between maintainers",
            "A forum-like space for community Q&A, announcements, and conversations that don't belong in issues",
            "A replacement for pull request reviews",
            "An alternative to code reviews"
        ],
        answer: 1,
        explanation: "GitHub Discussions provides a threaded conversation space for community engagement — asking questions, sharing ideas, and having discussions that aren't tied to bugs or feature requests.",
        difficulty: "Easy",
        topic: "Discussions"
    },
    {
        id: "git-153",
        question: "What does 'git fetch --prune' (or -p) do?",
        options: [
            "It removes all local branches that have been merged",
            "It deletes remote-tracking branches that no longer exist on the remote",
            "It prunes unreachable objects from the local object database",
            "It removes all tags that don't have corresponding remote tags"
        ],
        answer: 1,
        explanation: "--prune removes stale remote-tracking branches (branches that were deleted on the remote but still exist locally as origin/<branch-name>), keeping your remote references clean.",
        difficulty: "Medium",
        topic: "git fetch"
    },
    {
        id: "git-154",
        question: "You want to contribute to a project that requires 'Signed-off-by' in commit messages (DCO). How do you add this automatically?",
        options: [
            "Manually add 'Signed-off-by: Name <email>' to every commit message",
            "Configure git to automatically add it with 'git config --global commit.signoff true' or use -s flag with git commit",
            "Add it to .git/config",
            "It cannot be automated"
        ],
        answer: 1,
        explanation: "Setting commit.signoff to true or using 'git commit -s' automatically appends a 'Signed-off-by' trailer to your commit message, satisfying DCO requirements.",
        difficulty: "Medium",
        topic: "Commit Message Standards"
    },
    {
        id: "git-155",
        question: "In GitHub Actions, what does 'continue-on-error: true' on a step do?",
        options: [
            "It skips the step entirely",
            "The step runs and if it fails, the workflow continues instead of marking the job as failed",
            "It retries the step automatically on failure",
            "It marks the step as successful regardless of outcome"
        ],
        answer: 1,
        explanation: "continue-on-error allows a step to fail without failing the entire job. The step is marked as a warning (orange) in the UI, and subsequent steps continue running.",
        difficulty: "Easy",
        topic: "GitHub Actions"
    },
    {
        id: "git-156",
        question: "What is a 'tracking branch' in Git terminology?",
        options: [
            "A branch that tracks file modifications",
            "A local branch that has a direct relationship with a remote branch, configured for default push/pull operations",
            "A branch that follows another branch's commits automatically",
            "A special branch used by git bisect"
        ],
        answer: 1,
        explanation: "A tracking branch is a local branch connected to a remote branch. Git knows where to push and what to merge/pull from, so you don't need to specify the remote branch each time.",
        difficulty: "Easy",
        topic: "Tracking Branches"
    },
    {
        id: "git-157",
        question: "You run 'git rebase -i HEAD~5' and in the editor you see 'pick abc123 Fix bug'. If you change 'pick' to 'drop', what happens?",
        options: [
            "The commit is kept but its message is dropped",
            "The commit and its changes are completely excluded from the rebased history",
            "The commit is moved to the end of the list",
            "The commit is merged with the previous commit"
        ],
        answer: 1,
        explanation: "Changing 'pick' to 'drop' removes that commit entirely from the history — its changes are not applied and the commit is discarded during the rebase.",
        difficulty: "Medium",
        topic: "Interactive Rebase"
    },
    {
        id: "git-158",
        question: "What does 'git prune' do?",
        options: [
            "Removes all merged branches",
            "Removes unreachable loose objects from the object database that are not reachable from any ref",
            "Deletes all tags",
            "Removes all remote-tracking branches"
        ],
        answer: 1,
        explanation: "git prune removes loose unreachable objects from .git/objects that aren't referenced by any branch, tag, or the reflog, reclaiming disk space.",
        difficulty: "Hard",
        topic: "Git Performance"
    },
    {
        id: "git-159",
        question: "In a GitHub Actions workflow, how do you share data between steps within the same job?",
        options: [
            "Using GitHub Secrets",
            "Using environment variables or by writing to files and reading them in subsequent steps",
            "Using artifacts",
            "Using the GITHUB_STATE variable"
        ],
        answer: 1,
        explanation: "Steps in the same job share the same runner and filesystem. You can use environment variables, write to files, or use $GITHUB_STATE to pass data between steps.",
        difficulty: "Medium",
        topic: "GitHub Actions"
    },
    {
        id: "git-160",
        question: "What is the difference between 'git stash show' and 'git stash show -p'?",
        options: [
            "They display the same output",
            "git stash show shows a summary of changed files; -p shows the full diff of the stash",
            "git stash show shows the diff; -p shows only file names",
            "git stash show -p shows the stash message; without -p it shows the diff"
        ],
        answer: 1,
        explanation: "Without -p, git stash show displays a stat-like summary of files changed. With -p, it shows the full patch/diff of the stashed changes.",
        difficulty: "Easy",
        topic: "git stash"
    },
    {
        id: "git-161",
        question: "You want to clone a specific branch from a remote repository without downloading other branches. Which command works?",
        options: [
            "git clone --branch feature-x <url>",
            "git clone -b feature-x --single-branch <url>",
            "git clone <url> && git checkout feature-x",
            "Both A and B work, but B is more efficient as it only fetches the specified branch"
        ],
        answer: 3,
        explanation: "--single-branch combined with -b clones only the specified branch, reducing download size. Just using -b still fetches all branches but checks out the specified one.",
        difficulty: "Medium",
        topic: "git clone"
    },
    {
        id: "git-162",
        question: "What is a 'Git directory' (as opposed to the working directory)?",
        options: [
            "The directory where Git is installed on the system",
            "The .git folder containing all repository metadata, objects, and configuration",
            "The root directory of the project",
            "Any directory tracked by Git"
        ],
        answer: 1,
        explanation: "The Git directory (.git) contains all the repository data — objects, refs, config, hooks, and metadata — while the working directory is where you edit files.",
        difficulty: "Easy",
        topic: ".git Directory"
    },
    {
        id: "git-163",
        question: "You need to apply a hotfix from the main branch to a release branch that has diverged. The hotfix is a single commit. What is the most appropriate command?",
        options: [
            "git merge main",
            "git cherry-pick <hotfix-commit-sha>",
            "git rebase main",
            "git patch <hotfix-commit-sha>"
        ],
        answer: 1,
        explanation: "Cherry-pick is ideal for applying a specific commit (like a hotfix) to another branch without merging the entire branch history.",
        difficulty: "Easy",
        topic: "Cherry Picking"
    },
    {
        id: "git-164",
        question: "In GitHub, what does 'Squash and merge' do to the commit history?",
        options: [
            "It keeps all individual commits from the PR",
            "It combines all PR commits into a single commit on the target branch with a new commit SHA",
            "It rebase all PR commits onto the target branch",
            "It creates a merge commit that references all PR commits"
        ],
        answer: 1,
        explanation: "Squash and merge takes all commits in the PR, combines their changes into a single new commit on the base branch, and creates a new commit SHA.",
        difficulty: "Easy",
        topic: "Squash Merge"
    },
    {
        id: "git-165",
        question: "What does 'git status' show when you have staged a new file, modified a tracked file without staging, and deleted a tracked file without staging?",
        options: [
            "All three changes appear under 'Changes to be committed'",
            "New file under 'Changes to be committed', modified file under 'Changes not staged for commit', deleted file under 'Changes not staged for commit'",
            "Only the new file appears; Git ignores the other changes",
            "All three appear under 'Untracked files'"
        ],
        answer: 1,
        explanation: "git status categorizes changes: staged changes (new file), unstaged modifications (modified file), and unstaged deletions (deleted file) appear in separate sections.",
        difficulty: "Easy",
        topic: "git status"
    },
    {
        id: "git-166",
        question: "You are setting up CI for a monorepo with frontend and backend. You want the frontend job to run only when frontend files change. Which workflow trigger configuration achieves this?",
        options: [
            "on: push: branches: [main]",
            "on: pull_request: paths: ['frontend/**']",
            "on: push: workflow_dispatch: inputs: path:",
            "on: [push, pull_request]: filter: frontend"
        ],
        answer: 1,
        explanation: "Path filters in the trigger configuration restrict the workflow to run only when files matching the specified path patterns change, perfect for monorepo CI optimization.",
        difficulty: "Medium",
        topic: "GitHub Actions"
    },
    {
        id: "git-167",
        question: "What does 'git commit --allow-empty' do?",
        options: [
            "It fails because commits must have changes",
            "It creates a commit with no changes, useful for triggering CI/CD pipelines or documenting decisions",
            "It creates a commit that removes all files",
            "It empties the staging area without committing"
        ],
        answer: 1,
        explanation: "--allow-empty creates a commit with no file changes. This is useful for triggering workflows, documenting project milestones, or resetting CI/CD state.",
        difficulty: "Medium",
        topic: "git commit"
    },
    {
        id: "git-168",
        question: "In a code review scenario, a reviewer finds a bug in a commit that's already been pushed. The fix is small. What is the best practice?",
        options: [
            "Use git commit --amend and force push",
            "Create a new commit with the fix and push normally",
            "Rebase the entire branch to remove the buggy commit and replace it",
            "Delete the branch and start over"
        ],
        answer: 1,
        explanation: "For already-pushed commits, creating a new fix commit is the safest approach. Amending and force-pushing rewrites shared history, which can cause issues for collaborators.",
        difficulty: "Medium",
        topic: "Best Practices"
    },
    {
        id: "git-169",
        question: "What does the 'pre-commit' hook do?",
        options: [
            "Runs after a commit is created",
            "Runs before the commit is finalized, allowing you to validate or modify the staged content",
            "Runs before git push",
            "Runs when a branch is created"
        ],
        answer: 1,
        explanation: "The pre-commit hook runs after staging but before the commit is created. It can inspect staged files, run linters, format code, or reject the commit if checks fail.",
        difficulty: "Easy",
        topic: "Pre-commit"
    },
    {
        id: "git-170",
        question: "You want to see all branches that have been merged into main. Which command should you use?",
        options: [
            "git branch --all",
            "git branch --merged main",
            "git branch --no-merged main",
            "git log main --oneline"
        ],
        answer: 1,
        explanation: "git branch --merged main lists all local branches whose commits are already included in main, useful for identifying branches that can be safely deleted.",
        difficulty: "Easy",
        topic: "Branches"
    },
    {
        id: "git-171",
        question: "What is the effect of 'git reset --hard HEAD'?",
        options: [
            "It deletes the HEAD reference",
            "It resets the working directory and staging area to match HEAD, discarding all uncommitted changes",
            "It moves HEAD to the previous commit",
            "It removes the last commit from history"
        ],
        answer: 1,
        explanation: "git reset --hard HEAD resets both the staging area and working directory to match the current HEAD commit, permanently discarding all uncommitted changes.",
        difficulty: "Easy",
        topic: "git reset --hard"
    },
    {
        id: "git-172",
        question: "In GitHub Actions, what is a 'workflow dispatch' trigger?",
        options: [
            "A trigger that automatically dispatches workflows to multiple repositories",
            "A manual trigger that allows users to start a workflow from the GitHub UI or API with optional inputs",
            "A trigger that dispatches events to external systems",
            "A trigger that runs when a workflow is deleted"
        ],
        answer: 1,
        explanation: "workflow_dispatch enables manual triggering of workflows from the Actions tab in GitHub, optionally with input parameters that can customize the run.",
        difficulty: "Easy",
        topic: "GitHub Actions"
    },
    {
        id: "git-173",
        question: "You have a merge conflict in 'index.html'. You want to accept only the changes from the incoming branch (theirs). Which command resolves this for that specific file?",
        options: [
            "git checkout --theirs index.html && git add index.html",
            "git merge --accept-theirs index.html",
            "git resolve --theirs index.html",
            "git revert --theirs index.html"
        ],
        answer: 0,
        explanation: "During a conflict, 'git checkout --theirs <file>' replaces the file with the incoming branch's version. Then git add marks the conflict as resolved.",
        difficulty: "Medium",
        topic: "Conflict Resolution"
    },
    {
        id: "git-174",
        question: "What is the 'index' in Git terminology?",
        options: [
            "A list of all branches in alphabetical order",
            "The staging area — a binary file that stores a snapshot of what will go into the next commit",
            "The .gitignore file",
            "A catalog of all remote repositories"
        ],
        answer: 1,
        explanation: "The index (also called the staging area) is stored in .git/index and holds the exact snapshot of the next commit's content, including file modes and blob references.",
        difficulty: "Easy",
        topic: "Index"
    },
    {
        id: "git-175",
        question: "You want to push a local tag 'v2.0.0' to the remote 'origin'. Which command is correct?",
        options: [
            "git push origin v2.0.0",
            "git push --tags v2.0.0",
            "git tag --push v2.0.0",
            "git push tag v2.0.0"
        ],
        answer: 0,
        explanation: "git push origin v2.0.0 pushes the specific tag to the remote. Using --tags would push all local tags, which might not be desired.",
        difficulty: "Easy",
        topic: "git push"
    },
    {
        id: "git-176",
        question: "In an interview, you're asked: 'Can Git handle binary files like images and PDFs?' What is the accurate answer?",
        options: [
            "No, Git can only handle text files",
            "Yes, Git can store binary files but they cannot be diffed, and they can significantly increase repository size since Git cannot delta-compress them efficiently",
            "Yes, Git handles binary files better than text files",
            "Only if you use Git LFS"
        ],
        answer: 1,
        explanation: "Git can store binary files but treats them as opaque blobs — no meaningful diffs, and poor compression since delta encoding doesn't work well on binary data. Git LFS is recommended for large binaries.",
        difficulty: "Medium",
        topic: "Working with Files"
    },
    {
        id: "git-177",
        question: "What does 'git diff commit1...commit2' (three dots) show compared to 'git diff commit1..commit2' (two dots)?",
        options: [
            "They show the same output",
            "Two dots shows differences between commit1 and commit2; three dots shows changes on commit2 since it diverged from commit1",
            "Three dots shows all commits between them; two dots shows only the diff",
            "Two dots includes merge commits; three dots excludes them"
        ],
        answer: 1,
        explanation: "With three dots, git diff shows the changes on the second commit's branch since it diverged from the first. With two dots, it shows the direct difference between the two commits.",
        difficulty: "Hard",
        topic: "git diff"
    },
    {
        id: "git-178",
        question: "You want to configure Git to use VS Code as the default editor for commit messages. Which command is correct?",
        options: [
            "git config --global editor 'vscode'",
            "git config --global core.editor 'code --wait'",
            "git set editor vscode",
            "git config --global visual.editor 'code'"
        ],
        answer: 1,
        explanation: "Setting core.editor to 'code --wait' tells Git to use VS Code. The --wait flag is important so Git waits for the editor to close before proceeding.",
        difficulty: "Easy",
        topic: "Git Configuration"
    },
    {
        id: "git-179",
        question: "What is the purpose of the 'HEAD' file in a Git repository?",
        options: [
            "It stores the commit message of the latest commit",
            "It contains a reference (usually a branch name) to the current commit your working directory is based on",
            "It stores the hash of the root tree object",
            "It lists all branch names in the repository"
        ],
        answer: 1,
        explanation: "The HEAD file typically contains a symbolic reference like 'ref: refs/heads/main' pointing to the current branch, or a commit SHA in detached HEAD state.",
        difficulty: "Easy",
        topic: "HEAD"
    },
    {
        id: "git-180",
        question: "In GitHub Actions, how do you check out a specific tag instead of a branch?",
        options: [
            "uses: actions/checkout@v4: ref: v1.0.0",
            "uses: actions/checkout@v4 with: ref: v1.0.0",
            "uses: actions/checkout@v4: tag: v1.0.0",
            "uses: actions/checkout@v4: checkout-tag: v1.0.0"
        ],
        answer: 1,
        explanation: "The checkout action accepts a 'ref' parameter that can be a branch, tag, or commit SHA. Setting ref to 'v1.0.0' checks out that specific tag.",
        difficulty: "Medium",
        topic: "GitHub Actions"
    },
    {
        id: "git-181",
        question: "What does 'git add -p file.js' do?",
        options: [
            "Adds the entire file to the staging area",
            "Opens an interactive prompt to selectively add portions (hunks) of the file's changes",
            "Adds the file with a patch message",
            "Adds only the file's permissions, not content"
        ],
        answer: 1,
        explanation: "-p (patch) mode lets you interactively choose which hunks (sections of changes) to stage, allowing partial commits from a single file.",
        difficulty: "Medium",
        topic: "git add"
    },
    {
        id: "git-182",
        question: "You want to delete a remote branch that has already been merged. Which command should you use?",
        options: [
            "git branch -d origin/feature-x",
            "git push origin --delete feature-x",
            "git remote remove feature-x",
            "git branch -rd feature-x"
        ],
        answer: 1,
        explanation: "git push origin --delete (or the shorthand git push origin :feature-x) deletes the branch from the remote repository.",
        difficulty: "Easy",
        topic: "Deleting Branches"
    },
    {
        id: "git-183",
        question: "What is a 'monorepo' and what Git challenges does it present?",
        options: [
            "A single file containing all code; it makes Git slower due to file size",
            "A single repository containing multiple projects; challenges include large clone times, slow operations, and complex CI/CD",
            "Multiple repositories managed as one; challenges include merge conflicts across repos",
            "A repository with only one branch; challenges include lack of isolation"
        ],
        answer: 1,
        explanation: "Monorepos house multiple projects in one repository. Challenges include large clone sizes, slow git operations, complex CI/CD targeting, and permission management.",
        difficulty: "Medium",
        topic: "Monorepos"
    },
    {
        id: "git-184",
        question: "In GitHub, what does 'Rebase and merge' do when merging a PR?",
        options: [
            "It creates a merge commit with all PR commits",
            "It rebases PR commits onto the base branch and creates individual commits (with new SHAs) on the base branch",
            "It squashes all PR commits into one",
            "It performs a fast-forward merge"
        ],
        answer: 1,
        explanation: "Rebase and merge replays each PR commit onto the base branch, preserving individual commits but with new SHAs, resulting in a linear history without a merge commit.",
        difficulty: "Medium",
        topic: "Rebase Merge"
    },
    {
        id: "git-185",
        question: "What does 'git reflog expire --expire=now --all' do?",
        options: [
            "It deletes all branches",
            "It expires all reflog entries immediately, making previously referenced but now-unreachable objects eligible for garbage collection",
            "It removes all remote-tracking references",
            "It resets the repository to its initial state"
        ],
        answer: 1,
        explanation: "This command marks all reflog entries as expired immediately. Combined with git gc --prune=now, it permanently removes unreachable objects that were protected by reflog.",
        difficulty: "Hard",
        topic: "Git Reflog"
    },
    {
        id: "git-186",
        question: "You want to run a GitHub Actions workflow on a schedule, every weekday at 9 AM UTC. Which trigger configuration is correct?",
        options: [
            "on: schedule: - cron: '0 9 * * 1-5'",
            "on: schedule: - cron: '0 9 * * Mon-Fri'",
            "on: schedule: - cron: '9 0 * * 1-5'",
            "on: schedule: - every: weekday at 9am"
        ],
        answer: 0,
        explanation: "GitHub Actions uses standard cron syntax: minute hour day-of-month month day-of-week. '0 9 * * 1-5' runs at 9:00 AM UTC, Monday through Friday (1-5).",
        difficulty: "Medium",
        topic: "GitHub Actions"
    },
    {
        id: "git-187",
        question: "What does 'git rm --cached file.js' do?",
        options: [
            "Deletes file.js from the working directory and stops tracking it",
            "Removes file.js from Git tracking but keeps the file in the working directory",
            "Caches the file for faster operations",
            "Moves file.js to the Git cache directory"
        ],
        answer: 1,
        explanation: "--cached removes the file from the index (staging area) so Git no longer tracks it, but the file remains in your working directory. This is how you stop tracking files without deleting them.",
        difficulty: "Easy",
        topic: "git rm"
    },
    {
        id: "git-188",
        question: "You are troubleshooting a failing GitHub Actions workflow. Where can you find the detailed logs for each step?",
        options: [
            "In the repository's Settings > Logs",
            "By clicking on the specific workflow run, then clicking on a job, and expanding each step",
            "In the repository's Wiki",
            "By running 'gh logs' in the CLI"
        ],
        answer: 1,
        explanation: "Workflow logs are accessible by navigating to the Actions tab, clicking on a specific run, selecting a job, and expanding individual steps to view their output.",
        difficulty: "Easy",
        topic: "GitHub Actions"
    },
    {
        id: "git-189",
        question: "What does 'git log --since='2 weeks ago' --author='John'' show?",
        options: [
            "All commits by John in the last 2 weeks",
            "All commits in the last 2 weeks that also have 'John' in the commit message",
            "All commits by John since the repository was created 2 weeks ago",
            "All branches created by John in the last 2 weeks"
        ],
        answer: 0,
        explanation: "This combination filters the log to show only commits made by author 'John' within the last 2 weeks, using Git's date parsing capabilities.",
        difficulty: "Easy",
        topic: "git log"
    },
    {
        id: "git-190",
        question: "In Git Flow, what is the purpose of a 'release' branch?",
        options: [
            "To develop new features before merging to develop",
            "To prepare for a production release — allowing bug fixes, version bumping, and metadata updates while new features continue on develop",
            "To deploy code to production",
            "To create hotfixes for production issues"
        ],
        answer: 1,
        explanation: "Release branches allow stabilization for production releases (bug fixes, version numbers) while develop continues receiving new features. Once stable, it merges to both main and develop.",
        difficulty: "Medium",
        topic: "Git Flow"
    },
    {
        id: "git-191",
        question: "What does 'git bundle create repo.bundle --all' create?",
        options: [
            "A compressed archive of the working directory",
            "A single file containing the entire Git repository (objects and refs) that can be used to clone or fetch from",
            "A backup of only the .git directory",
            "A tarball of the repository files"
        ],
        answer: 1,
        explanation: "git bundle creates a single file containing Git objects and refs, essentially a portable repository that can be transferred via email, USB, or any file transfer method and used as a remote.",
        difficulty: "Hard",
        topic: "Git Architecture"
    },
    {
        id: "git-192",
        question: "You want to see what changes a commit introduced, including which files were added, modified, or deleted. Which command is most appropriate?",
        options: [
            "git log -1",
            "git show <commit-sha> --stat",
            "git diff HEAD~1",
            "git blame <commit-sha>"
        ],
        answer: 1,
        explanation: "git show with --stat displays the commit message, a summary table of files changed (additions/deletions count per file), and the actual diff, providing a complete picture of the commit.",
        difficulty: "Easy",
        topic: "git show"
    },
    {
        id: "git-193",
        question: "In GitHub Actions, what does 'permissions: contents: read' do at the workflow level?",
        options: [
            "Grants read access to the repository's file contents for the GITHUB_TOKEN",
            "Allows the workflow to read environment variables",
            "Grants read access to all repositories in the organization",
            "Allows reading the workflow YAML file"
        ],
        answer: 0,
        explanation: "The permissions key scopes the GITHUB_TOKEN's access. 'contents: read' allows the token to read repository contents (like checkout) but not write or modify them.",
        difficulty: "Medium",
        topic: "GitHub Actions"
    },
    {
        id: "git-194",
        question: "You are asked in an interview: 'What is the difference between Git and GitHub?' What is the best answer?",
        options: [
            "They are the same thing",
            "Git is a distributed version control system for tracking changes; GitHub is a cloud-based platform for hosting Git repositories and providing collaboration features",
            "Git is the graphical interface for GitHub",
            "GitHub is the open-source version of Git"
        ],
        answer: 1,
        explanation: "Git is the core VCS tool running locally. GitHub is a hosting/service platform built around Git, adding features like PRs, issues, Actions, and web-based collaboration.",
        difficulty: "Easy",
        topic: "GitHub"
    },
    {
        id: "git-195",
        question: "What does 'git config pull.rebase true' do?",
        options: [
            "It makes git pull always create a merge commit",
            "It configures git pull to use rebase instead of merge when integrating remote changes",
            "It enables rebasing of the remote branch onto the local branch",
            "It prevents git pull from working on shared branches"
        ],
        answer: 1,
        explanation: "This configuration makes 'git pull' behave like 'git pull --rebase' by default, integrating remote changes via rebase instead of creating a merge commit.",
        difficulty: "Medium",
        topic: "Git Configuration"
    },
    {
        id: "git-196",
        question: "You have a file 'config/production.json' with production API keys. You want to track a template version but not the actual keys. What is the best approach?",
        options: [
            "Add config/production.json to .gitignore",
            "Track config/production.template.json and add config/production.json to .gitignore",
            "Use git update-index --assume-unchanged on the file",
            "Encrypt the file before committing"
        ],
        answer: 1,
        explanation: "The best practice is to track a template file with placeholder values and add the actual config file (with real keys) to .gitignore, keeping secrets out of version control entirely.",
        difficulty: "Medium",
        topic: ".gitignore"
    },
    {
        id: "git-197",
        question: "What is a 'pack index' file in Git?",
        options: [
            "An index of all branches in the repository",
            "A file that maps object offsets within a pack file to their SHA-1 hashes, enabling fast object lookup",
            "A compressed version of the staging area",
            "A log of all pack operations"
        ],
        answer: 1,
        explanation: "The pack index (.idx) file provides fast random access to objects within a pack file by mapping SHA-1 hashes to their byte offsets in the corresponding .pack file.",
        difficulty: "Hard",
        topic: "Git Architecture"
    },
    {
        id: "git-198",
        question: "In GitHub, when you 'Watch' a repository with 'All Activity', what do you receive notifications for?",
        options: [
            "Only releases and new tags",
            "All events including commits, issues, PRs, discussions, releases, and any other activity in the repository",
            "Only when you are @mentioned",
            "Only when new branches are created"
        ],
        answer: 1,
        explanation: "Watching with 'All Activity' sends notifications for every event in the repository — pushes, issues, PRs, releases, discussions, and more.",
        difficulty: "Easy",
        topic: "Watch"
    },
    {
        id: "git-199",
        question: "You want to find all commits in your branch that are not in main. Which command is correct?",
        options: [
            "git log main..HEAD",
            "git log HEAD..main",
            "git diff main HEAD",
            "git log --all --not main"
        ],
        answer: 0,
        explanation: "git log main..HEAD (or main..feature-branch) shows commits reachable from HEAD but not from main — i.e., commits unique to your branch.",
        difficulty: "Medium",
        topic: "git log"
    },
    {
        id: "git-200",
        question: "What is the 'working directory' in Git?",
        options: [
            "The .git folder and its contents",
            "The directory on your filesystem where you edit files, which Git compares against the staging area",
            "The directory where Git is installed",
            "The root directory of all Git repositories on your machine"
        ],
        answer: 1,
        explanation: "The working directory is the actual file tree on disk where you view and edit files. Git detects changes by comparing it against the staging area (index).",
        difficulty: "Easy",
        topic: "Working Directory"
    },
    {
        id: "git-201",
        question: "You need to enforce that commit messages follow the format 'TYPE: description' in your team. What is the most practical approach?",
        options: [
            "Rely on developers to remember the format",
            "Use a commit-msg hook that validates the format and rejects non-conforming commits",
            "Add a GitHub Actions workflow that checks commit messages after push",
            "Use branch protection rules to enforce commit message format"
        ],
        answer: 1,
        explanation: "A commit-msg hook validates the message at commit time, providing immediate feedback. While CI can also check, hooks catch issues before they're pushed, though they can be bypassed.",
        difficulty: "Medium",
        topic: "Commit Message Standards"
    },
    {
        id: "git-202",
        question: "What does 'git update-index --assume-unchanged file.js' do?",
        options: [
            "Stops tracking the file permanently",
            "Tells Git to temporarily skip checking the file for changes, improving performance on large files you won't modify",
            "Marks the file as read-only",
            "Adds the file to .gitignore"
        ],
        answer: 1,
        explanation: "--assume-unchanged tells Git to assume the file won't change, skipping expensive stat checks. Useful for large build artifacts in the working directory that you don't want to modify.",
        difficulty: "Hard",
        topic: "Git Performance"
    },
    {
        id: "git-203",
        question: "In GitHub Actions, what is the purpose of 'steps.*.id'?",
        options: [
            "It uniquely identifies a step for use in workflow expressions and referencing outputs from that step",
            "It sets the step's execution order",
            "It assigns a Docker container ID to the step",
            "It creates a unique identifier for logging purposes only"
        ],
        answer: 0,
        explanation: "Step IDs allow you to reference a step's outputs using ${{ steps.<id>.outputs.<name> }} in subsequent steps, enabling data passing between steps.",
        difficulty: "Medium",
        topic: "GitHub Actions"
    },
    {
        id: "git-204",
        question: "What does 'git submodule status' show?",
        options: [
            "Whether submodules are up to date with the remote",
            "The commit SHA each submodule is currently at, prefixed with + if it differs from what the parent repository expects",
            "A detailed log of all submodule changes",
            "The URL of each submodule's remote"
        ],
        answer: 1,
        explanation: "git submodule status shows each submodule's current commit SHA. A '-' prefix means uninitialized, '+' means the checked-out commit differs from the expected commit.",
        difficulty: "Medium",
        topic: "Submodules"
    },
    {
        id: "git-205",
        question: "You accidentally committed your .env file with database credentials. The commit has been pushed. What are the immediate steps you should take?",
        options: [
            "Just add .env to .gitignore and commit again",
            "Rotate the credentials immediately, add .env to .gitignore, then use filter-repo to remove the file from history",
            "Delete the repository and start over",
            "Email GitHub support to remove the commit"
        ],
        answer: 1,
        explanation: "The critical first step is rotating leaked credentials. Then remove the file from tracking and history. Simply adding to .gitignore doesn't remove it from existing commits.",
        difficulty: "Medium",
        topic: "Repository Security"
    },
    {
        id: "git-206",
        question: "What is the difference between 'git stash save' and 'git stash push'?",
        options: [
            "They are completely different operations",
            "git stash save is a deprecated alias for git stash push; both do the same thing",
            "save stores to disk; push stores to memory",
            "save can include a message; push cannot"
        ],
        answer: 1,
        explanation: "git stash save is the older syntax that has been superseded by git stash push. They function identically, but push is the recommended modern command.",
        difficulty: "Easy",
        topic: "git stash"
    },
    {
        id: "git-207",
        question: "In GitHub, what does 'Require signed commits' in branch protection do?",
        options: [
            "Requires commits to have a GPG or SSH signature that can be verified against a known key",
            "Requires commit messages to include a 'Signed-off-by' line",
            "Requires the committer to have two-factor authentication enabled",
            "Requires commits to be made through the GitHub web interface"
        ],
        answer: 0,
        explanation: "This setting requires every commit to be cryptographically signed (GPG or SSH) and the signature must be verified against a public key associated with the committer's GitHub account.",
        difficulty: "Hard",
        topic: "Branch Protection Rules"
    },
    {
        id: "git-208",
        question: "You want to compare the staging area with the working directory. Which command shows this?",
        options: [
            "git diff --staged",
            "git diff (without any flags)",
            "git diff HEAD",
            "git diff --cached"
        ],
        answer: 1,
        explanation: "Running 'git diff' without flags shows the differences between the working directory and the staging area — changes you've made but haven't yet staged.",
        difficulty: "Easy",
        topic: "git diff"
    },
    {
        id: "git-209",
        question: "What is a 'Git hook'?",
        options: [
            "A way to hook into GitHub's API",
            "A script that Git automatically executes before or after specific Git events like commit, push, or receive",
            "A plugin system for Git GUI tools",
            "A configuration file that modifies Git behavior"
        ],
        answer: 1,
        explanation: "Git hooks are scripts (in .git/hooks/) that Git runs automatically before or after events like commits, pushes, and merges. They can be used for validation, formatting, or automation.",
        difficulty: "Easy",
        topic: "Hooks"
    },
    {
        id: "git-210",
        question: "You are using 'git rebase -i HEAD~10' and realize you made a mistake in the rebase. The rebase hasn't finished yet. How do you abort?",
        options: [
            "Close the terminal window",
            "git rebase --abort",
            "git reset --hard",
            "Ctrl+C will abort the rebase cleanly"
        ],
        answer: 1,
        explanation: "git rebase --abort cleanly stops the in-progress rebase and returns the branch to its state before the rebase started.",
        difficulty: "Easy",
        topic: "Rebase"
    },
    {
        id: "git-211",
        question: "In GitHub Actions, what is a 'reuseable workflow'?",
        options: [
            "A workflow that can only be run once",
            "A workflow defined in one repository that can be called by other workflows, reducing duplication",
            "A workflow template provided by GitHub",
            "A workflow that automatically re-runs on failure"
        ],
        answer: 1,
        explanation: "Reusable workflows allow you to define a workflow in one repository and call it from other workflows (same or different repos), promoting DRY principles across CI/CD pipelines.",
        difficulty: "Medium",
        topic: "GitHub Actions"
    },
    {
        id: "git-212",
        question: "What does 'git tag -d v0.9.0' do?",
        options: [
            "Deletes the v0.9.0 tag from both local and remote",
            "Deletes the v0.9.0 tag from the local repository only",
            "Deletes the commit that v0.9.0 points to",
            "Deletes all tags before v0.9.0"
        ],
        answer: 1,
        explanation: "git tag -d only deletes the tag locally. To delete from the remote, you must also run 'git push origin --delete v0.9.0'.",
        difficulty: "Easy",
        topic: "Tags"
    },
    {
        id: "git-213",
        question: "You want to set up a GitHub Pages site for your project. Which branch is GitHub Pages configured to use by default?",
        options: [
            "main",
            "gh-pages",
            "docs",
            "It depends on the repository creation settings, but gh-pages and main are common defaults"
        ],
        answer: 3,
        explanation: "GitHub Pages can be configured to deploy from any branch, but historically defaults to gh-pages or master/main depending on when the repository was created and the configuration chosen.",
        difficulty: "Easy",
        topic: "GitHub Pages"
    },
    {
        id: "git-214",
        question: "What does 'git am' do?",
        options: [
            "It amends the last commit",
            "It applies a mailbox-formatted patch (created by git format-patch) as commits, preserving authorship",
            "It automatically merges branches",
            "It manages Git aliases"
        ],
        answer: 1,
        explanation: "git am applies patches from a mailbox format (produced by git format-patch), creating commits that preserve the original author information, used in email-based contribution workflows.",
        difficulty: "Hard",
        topic: "Open Source Contribution"
    },
    {
        id: "git-215",
        question: "In a team using GitHub Flow, when should you create a pull request?",
        options: [
            "Only after the feature is completely finished",
            "Early in the development process, even as a draft PR, to enable early feedback and visibility",
            "Only when the code is ready to merge",
            "Only when asked by a team lead"
        ],
        answer: 1,
        explanation: "Best practice in GitHub Flow is to open PRs early (as drafts if needed) for visibility and early feedback, rather than waiting until the feature is complete.",
        difficulty: "Medium",
        topic: "Pull Requests"
    },
    {
        id: "git-216",
        question: "What does 'git remote rename old-name new-name' do?",
        options: [
            "Renames a branch on the remote",
            "Changes the name of a remote from 'old-name' to 'new-name' in your local configuration, updating all tracking branches accordingly",
            "Renames the repository on GitHub",
            "Renames the remote URL"
        ],
        answer: 1,
        explanation: "git remote rename changes the local short name of a remote and updates all remote-tracking branch names (e.g., old-name/main becomes new-name/main).",
        difficulty: "Easy",
        topic: "git remote"
    },
    {
        id: "git-217",
        question: "You want to see a compact summary of which authors made how many commits in the last month. Which command chain works best?",
        options: [
            "git log --since='1 month ago' --format='%aN' | sort | uniq -c | sort -rn",
            "git shortlog --since='1 month ago' -sn",
            "Both A and B produce similar output",
            "git log --all --author='*' --count"
        ],
        answer: 2,
        explanation: "Both commands produce a ranked list of authors by commit count. git shortlog -sn is the purpose-built command, while the pipeline approach offers more customization flexibility.",
        difficulty: "Medium",
        topic: "git shortlog"
    },
    {
        id: "git-218",
        question: "In a GitHub Actions workflow, what does 'timeout-minutes: 10' on a job do?",
        options: [
            "It delays the job start by 10 minutes",
            "It cancels the job if it runs longer than 10 minutes",
            "It sets a 10-minute timeout between steps",
            "It retries failed steps for up to 10 minutes"
        ],
        answer: 1,
        explanation: "timeout-minutes sets a maximum duration for the job. If the job exceeds this time, it is automatically canceled, preventing runaway workflows from consuming resources.",
        difficulty: "Easy",
        topic: "GitHub Actions"
    },
    {
        id: "git-219",
        question: "What does 'git log --no-merges' do?",
        options: [
            "Shows only merge commits",
            "Hides merge commits from the log output",
            "Prevents Git from performing any merges",
            "Shows the log without any branch information"
        ],
        answer: 1,
        explanation: "--no-merges filters out merge commits from the log, showing only non-merge commits which typically contain the actual code changes.",
        difficulty: "Easy",
        topic: "git log"
    },
    {
        id: "git-220",
        question: "You want to find the most recent common ancestor of two branches. Which command gives you this?",
        options: [
            "git log branch1..branch2",
            "git merge-base branch1 branch2",
            "git diff branch1 branch2",
            "git common-ancestor branch1 branch2"
        ],
        answer: 1,
        explanation: "git merge-base finds the best common ancestor(s) of two commits, which is the commit where the two branches diverged.",
        difficulty: "Medium",
        topic: "Merge"
    },
    {
        id: "git-221",
        question: "What is a 'remote-tracking branch' like 'origin/main'?",
        options: [
            "A branch that exists on the remote server",
            "A local read-only reference that tracks the state of a branch on a remote, updated by git fetch",
            "A branch that automatically syncs with the remote in real-time",
            "A copy of the remote branch that you can directly commit to"
        ],
        answer: 1,
        explanation: "Remote-tracking branches (origin/main) are local references that record the last known state of remote branches. They're updated by git fetch and shouldn't be modified directly.",
        difficulty: "Easy",
        topic: "Remote Branches"
    },
    {
        id: "git-222",
        question: "In GitHub Actions, what does 'uses: actions/checkout@v4' do?",
        options: [
            "Checks out code from a hotel management system",
            "Checks out your repository's source code into the runner's workspace",
            "Creates a new branch for the workflow",
            "Validates the workflow YAML syntax"
        ],
        answer: 1,
        explanation: "actions/checkout is the standard action that clones your repository into the runner's working directory, making your source code available to subsequent steps.",
        difficulty: "Easy",
        topic: "GitHub Actions"
    },
    {
        id: "git-223",
        question: "What is the 'Contributing Guidelines' (CONTRIBUTING.md) file used for in open-source projects?",
        options: [
            "To list all contributors to the project",
            "To document how to contribute to the project, including development setup, coding standards, PR process, and communication guidelines",
            "To store contributor license agreements",
            "To track contribution statistics"
        ],
        answer: 1,
        explanation: "CONTRIBUTING.md provides potential contributors with everything they need to know: how to set up the dev environment, coding standards, branch naming, PR requirements, and more.",
        difficulty: "Easy",
        topic: "Contribution Guidelines"
    },
    {
        id: "git-224",
        question: "You want to revert all changes to a file since it was last committed, discarding both staged and unstaged changes. Which command is correct?",
        options: [
            "git restore file.js",
            "git restore --staged --worktree file.js",
            "git checkout -- file.js",
            "Both B and C achieve the same result"
        ],
        answer: 3,
        explanation: "Both 'git restore --staged --worktree file.js' and 'git checkout -- file.js' restore the file to its committed state, undoing both staged and unstaged changes.",
        difficulty: "Medium",
        topic: "git restore"
    },
    {
        id: "git-225",
        question: "In a CI/CD pipeline, what is 'Continuous Integration'?",
        options: [
            "Automatically deploying code to production",
            "The practice of frequently merging code changes into a shared repository, with automated builds and tests run on each integration",
            "Continuously updating dependencies",
            "Merging all branches into main continuously"
        ],
        answer: 1,
        explanation: "CI involves developers frequently merging code into a shared branch, with each merge triggering automated builds and tests to detect integration issues early.",
        difficulty: "Easy",
        topic: "Continuous Integration"
    },
    {
        id: "git-226",
        question: "What does 'git cherry-pick --no-commit abc123 def456' do?",
        options: [
            "Creates two new commits from abc123 and def456",
            "Applies changes from both commits to the staging area without creating commits",
            "Deletes both commits from the repository",
            "Shows the diff of both commits without applying them"
        ],
        answer: 1,
        explanation: "--no-commit applies the changes from the specified commits to the staging area without creating new commits, allowing you to review or combine them into a single commit.",
        difficulty: "Hard",
        topic: "Cherry Picking"
    },
    {
        id: "git-227",
        question: "You want to configure different .gitignore rules for different environments. What is the best approach?",
        options: [
            "Use multiple .gitignore files in different directories",
            "Use a core.excludesFile for global ignores and .gitignore in the repository for shared rules",
            "Git doesn't support environment-specific ignore rules",
            "Use git config to set different ignores per branch"
        ],
        answer: 1,
        explanation: "You can use .gitignore for shared project rules and core.excludesFile (~/.gitignore_global) for personal/global rules like IDE files that differ between developers.",
        difficulty: "Medium",
        topic: ".gitignore"
    },
    {
        id: "git-228",
        question: "What does 'git log --pretty=format:'%h %s' --graph' display?",
        options: [
            "Default log output with a graph",
            "A custom-formatted log showing abbreviated SHAs and subject lines with an ASCII graph",
            "Only the commit subjects without any graph",
            "A JSON-formatted log output"
        ],
        answer: 1,
        explanation: "--pretty=format allows custom log formatting. %h is the abbreviated SHA, %s is the subject (first line of the message), and --graph adds the branch/merge visualization.",
        difficulty: "Medium",
        topic: "git log"
    },
    {
        id: "git-229",
        question: "In GitHub, what is the difference between 'Stars' and 'Watch'?",
        options: [
            "They are the same thing",
            "Stars bookmark a repository for later and indicate appreciation; Watch controls notification preferences for repository activity",
            "Stars send notifications; Watch just bookmarks",
            "Watch is private; Stars are public"
        ],
        answer: 1,
        explanation: "Starring is a public bookmark showing appreciation and discovery. Watching controls whether and how you receive notifications about repository activity.",
        difficulty: "Easy",
        topic: "Stars"
    },
    {
        id: "git-230",
        question: "You need to recover a file that was deleted 5 commits ago. You don't know the exact commit. What is the most efficient approach?",
        options: [
            "Check out each commit one by one until you find the file",
            "Use git log --all --full-history -- <file-path> to find the commit where it was deleted, then restore it from the commit before that",
            "Run git fsck to recover the file",
            "Use git reflog to find the file"
        ],
        answer: 1,
        explanation: "git log --all --full-history -- <path> shows all commits that affected the file, including the deletion. You can then restore it from the parent of the deletion commit.",
        difficulty: "Medium",
        topic: "Recovering Deleted Commits"
    },
    {
        id: "git-231",
        question: "What is the difference between 'git init' and 'git init --bare'?",
        options: [
            "There is no difference",
            "git init creates a working repository; git init --bare creates a repository without a working directory, suitable for use as a remote/server repository",
            "git init --bare creates a repository with encryption",
            "git init --bare creates a repository that can only be accessed via SSH"
        ],
        answer: 1,
        explanation: "A bare repository has no working directory or staging area — it only contains the Git objects and refs. This is what you want for a shared remote that only receives pushes.",
        difficulty: "Medium",
        topic: "Repository"
    },
    {
        id: "git-232",
        question: "In GitHub Actions, what does 'matrix' strategy do?",
        options: [
            "It runs jobs in a matrix display layout",
            "It runs multiple job configurations with different variable combinations (e.g., different OS, language versions) in parallel",
            "It creates a matrix of all workflow files",
            "It multiplies the timeout for all jobs"
        ],
        answer: 1,
        explanation: "Matrix strategy lets you define variables (like Node.js versions or operating systems) and automatically creates parallel job runs for each combination, enabling comprehensive testing.",
        difficulty: "Easy",
        topic: "GitHub Actions"
    },
    {
        id: "git-233",
        question: "What does 'git for-each-ref --sort=-committerdate refs/heads/' show?",
        options: [
            "All branches sorted alphabetically",
            "All local branches sorted by the date of their most recent commit, newest first",
            "All remote branches sorted by creation date",
            "All tags sorted by commit date"
        ],
        answer: 1,
        explanation: "for-each-ref lists references matching a pattern. With --sort=-committerdate, it sorts branches by their latest commit date in descending order (newest first).",
        difficulty: "Hard",
        topic: "Branches"
    },
    {
        id: "git-234",
        question: "You want to add a co-author to a commit message using the conventional format. Which trailer should you add?",
        options: [
            "Co-Author: Name <email>",
            "Co-authored-by: Name <email>",
            "Author: Name <email>",
            "Pair-Programmed-With: Name <email>"
        ],
        answer: 1,
        explanation: "GitHub recognizes the 'Co-authored-by:' trailer to attribute multiple contributors to a commit. It appears on the commit and is reflected in contribution graphs.",
        difficulty: "Easy",
        topic: "Commit Message Standards"
    },
    {
        id: "git-235",
        question: "What is the 'pull_request_target' event in GitHub Actions compared to 'pull_request'?",
        options: [
            "They are identical",
            "pull_request_target runs in the context of the base repository with its secrets, useful for workflows that need write access from fork PRs",
            "pull_request_target only runs on closed PRs",
            "pull_request_target runs on the fork's repository"
        ],
        answer: 1,
        explanation: "pull_request_target gives the workflow the base repository's GITHUB_TOKEN (with its permissions) even for fork PRs, but requires careful handling to prevent code injection from untrusted code.",
        difficulty: "Hard",
        topic: "GitHub Actions"
    },
    {
        id: "git-236",
        question: "You run 'git diff main...feature-x' (three dots). What range of changes does this show?",
        options: [
            "All differences between main and feature-x",
            "Changes on feature-x since it diverged from main (i.e., commits unique to feature-x)",
            "Changes on main since it diverged from feature-x",
            "All changes on both branches since their common ancestor"
        ],
        answer: 1,
        explanation: "With three dots in git diff, it shows changes on the right side (feature-x) since it diverged from the left side (main) — effectively the diff that would be merged.",
        difficulty: "Hard",
        topic: "git diff"
    },
    {
        id: "git-237",
        question: "What is the recommended way to handle merge conflicts in a large team?",
        options: [
            "Always accept 'theirs' to avoid delays",
            "Communicate with the team about overlapping changes, integrate frequently, use 'git rerere' for recurring conflicts, and understand both sides before resolving",
            "Always create new branches instead of merging",
            "Use git merge --strategy=ours for all merges"
        ],
        answer: 1,
        explanation: "Good merge conflict management involves frequent integration to minimize conflicts, clear team communication, understanding both sides of changes, and using tools like rerere for recurring patterns.",
        difficulty: "Medium",
        topic: "Merge Conflicts"
    },
    {
        id: "git-238",
        question: "You want to see the commit that added a specific line containing 'API_KEY' in config.js. Which command is most direct?",
        options: [
            "git log -S 'API_KEY' -- config.js",
            "git log -G 'API_KEY' -- config.js",
            "git blame config.js",
            "git grep 'API_KEY' config.js"
        ],
        answer: 2,
        explanation: "git blame shows the last commit that modified each line, so for a specific existing line, blame directly shows which commit introduced or last changed it. -S and -G search across all historical changes.",
        difficulty: "Medium",
        topic: "git blame"
    },
    {
        id: "git-239",
        question: "In GitHub, what does 'Require linear history' in branch protection enforce?",
        options: [
            "All commits must be made through the GitHub web interface",
            "No merge commits are allowed; PRs must be rebased or squashed before merging",
            "All commits must have a straight line in the git graph with no branches",
            "Commits must be made in chronological order"
        ],
        answer: 1,
        explanation: "Requiring linear history prevents merge commits, forcing PRs to be merged using squash or rebase strategies, resulting in a clean linear commit history.",
        difficulty: "Medium",
        topic: "Branch Protection Rules"
    },
    {
        id: "git-240",
        question: "What does 'git count-objects -v' display?",
        options: [
            "The number of files in the working directory",
            "Detailed statistics about the Git object database including number of objects, disk usage, and pack file information",
            "The number of commits per branch",
            "A count of all remote-tracking references"
        ],
        answer: 1,
        explanation: "git count-objects -v provides verbose statistics about the object database: number of loose objects, pack files, disk space used, and garbage collection eligibility.",
        difficulty: "Medium",
        topic: "Git Objects"
    },
    {
        id: "git-241",
        question: "You want to create a pre-commit hook that runs ESLint. Where should this hook file be placed?",
        options: [
            "In the project root directory",
            "In .git/hooks/pre-commit",
            "In .github/hooks/pre-commit",
            "In node_modules/.hooks/pre-commit"
        ],
        answer: 1,
        explanation: "Git hooks must be placed in the .git/hooks/ directory with the appropriate name (pre-commit, commit-msg, etc.). The file must be executable.",
        difficulty: "Easy",
        topic: "Pre-commit"
    },
    {
        id: "git-242",
        question: "What is the key advantage of using 'git rebase' before opening a PR?",
        options: [
            "It makes the PR merge faster",
            "It produces a clean, linear commit history that's easier for reviewers to understand",
            "It prevents merge conflicts",
            "It reduces the number of commits in the PR"
        ],
        answer: 1,
        explanation: "Rebasing onto the target branch before opening a PR creates a clean linear history, eliminating merge noise and making the sequence of changes clearer for reviewers.",
        difficulty: "Medium",
        topic: "Rebase"
    },
    {
        id: "git-243",
        question: "In GitHub Actions, how do you share data between jobs in different workflows?",
        options: [
            "Using environment variables",
            "Using artifacts — one workflow uploads an artifact, and another downloads it",
            "Using the GITHUB_STATE file",
            "Jobs in different workflows cannot share data"
        ],
        answer: 1,
        explanation: "Artifacts are the primary mechanism for sharing data between different workflow runs. One workflow uploads artifacts, and another workflow can download them using their name.",
        difficulty: "Medium",
        topic: "Artifacts"
    },
    {
        id: "git-244",
        question: "What does 'git replace <old-sha> <new-sha>' do?",
        options: [
            "Permanently replaces the old commit with the new one",
            "Creates a replacement reference that makes Git show the new object in place of the old one without rewriting history",
            "Swaps the positions of two commits in history",
            "Replaces the commit message of the old commit"
        ],
        answer: 1,
        explanation: "git replace creates a mapping that makes Git transparently use the replacement object instead of the original, useful for experimenting with history changes without permanently rewriting it.",
        difficulty: "Hard",
        topic: "Git Objects"
    },
    {
        id: "git-245",
        question: "You are setting up a new project and need to add a LICENSE file. Where should it be placed?",
        options: [
            "In a .license directory",
            "In the root of the repository as LICENSE or LICENSE.md",
            "In the .github directory",
            "In the docs directory"
        ],
        answer: 1,
        explanation: "The LICENSE file should be in the repository root so GitHub and other tools can automatically detect and display the project's license.",
        difficulty: "Easy",
        topic: "LICENSE"
    },
    {
        id: "git-246",
        question: "What does 'git log --stat' show that 'git log' alone does not?",
        options: [
            "Statistical analysis of commit frequency",
            "A table below each commit showing which files changed and how many lines were added/removed",
            "The total number of commits in the repository",
            "Author statistics per commit"
        ],
        answer: 1,
        explanation: "--stat appends a diffstat to each commit entry showing the number of files changed and a summary of insertions/deletions per file.",
        difficulty: "Easy",
        topic: "git log"
    },
    {
        id: "git-247",
        question: "In a GitHub Actions workflow, what is the difference between 'env' and 'secrets' contexts?",
        options: [
            "They are the same thing",
            "env stores non-sensitive variables visible in logs; secrets stores encrypted sensitive data that is masked in logs",
            "env is for workflow-level; secrets is for job-level only",
            "secrets can only be used in deploy steps"
        ],
        answer: 1,
        explanation: "Environment variables (env) are visible in logs and suitable for non-sensitive config. Secrets are encrypted, automatically masked in logs, and designed for sensitive data like API keys.",
        difficulty: "Medium",
        topic: "Secrets"
    },
    {
        id: "git-248",
        question: "You want to list all files ever committed in a repository's history, including deleted ones. Which command works?",
        options: [
            "git ls-files",
            "git log --all --name-only --pretty=format:",
            "git ls-tree -r HEAD",
            "find . -type f"
        ],
        answer: 1,
        explanation: "git log --all --name-only with an empty format string lists only the filenames from every commit in history, including files that were later deleted.",
        difficulty: "Hard",
        topic: "Searching History"
    },
    {
        id: "git-249",
        question: "What is the primary risk of force-pushing to a public branch in an open-source project?",
        options: [
            "It makes the repository public",
            "It rewrites public history, causing issues for all forks and contributors who have based work on the original commits",
            "It deletes the repository",
            "It changes the license of the project"
        ],
        answer: 1,
        explanation: "Force-pushing to public branches in open-source projects breaks all forks and contributors' local copies, creating confusing divergences and potentially losing contributions.",
        difficulty: "Medium",
        topic: "Force Push"
    },
    {
        id: "git-250",
        question: "What does 'git commit -v' do compared to 'git commit'?",
        options: [
            "It creates a verbose commit with extra metadata",
            "It shows the diff of staged changes in the commit message editor, helping you write a better commit message",
            "It increases the verbosity of the commit output",
            "It validates the commit format"
        ],
        answer: 1,
        explanation: "-v includes the diff of staged changes in the commit message editor, so you can see exactly what you're committing while writing your message.",
        difficulty: "Easy",
        topic: "git commit"
    },
    {
        id: "git-251",
        question: "You need to find which commit introduced a performance regression. The regression is somewhere in the last 200 commits. What is the most efficient approach?",
        options: [
            "Manually check out each commit and test performance",
            "Use git bisect: mark a known-good commit and a known-bad commit, then binary search to find the culprit",
            "Use git log to read all 200 commit messages",
            "Use git blame on all files"
        ],
        answer: 1,
        explanation: "git bisect performs a binary search through commit history. With 200 commits, it needs at most ~8 test iterations (log2(200)) to pinpoint the exact commit that introduced the regression.",
        difficulty: "Medium",
        topic: "git bisect"
    },
    {
        id: "git-252",
        question: "What does 'git tag -l 'v2.*'' do?",
        options: [
            "Lists all tags sorted by version",
            "Lists only tags matching the glob pattern 'v2.*' (like v2.0.0, v2.1.0)",
            "Lists tags in long format with details",
            "Creates a new tag matching the pattern"
        ],
        answer: 1,
        explanation: "git tag -l with a pattern argument lists only tags matching that shell glob pattern, useful for filtering tags by version prefix.",
        difficulty: "Easy",
        topic: "git tag"
    },
    {
        id: "git-253",
        question: "In a GitHub Actions workflow, what does 'outputs' in a job definition allow?",
        options: [
            "Printing output to the console",
            "Defining values that can be passed to dependent jobs using the 'needs' relationship",
            "Specifying artifact names",
            "Defining environment variable outputs"
        ],
        answer: 1,
        explanation: "Job outputs allow you to pass data from one job to another. A downstream job that 'needs' this job can access its outputs using ${{ needs.job-id.outputs.output-name }}.",
        difficulty: "Medium",
        topic: "GitHub Actions"
    },
    {
        id: "git-254",
        question: "What is the difference between 'git stash save -m 'WIP'' and 'git stash push -m 'WIP''?",
        options: [
            "save stores with a message; push doesn't support messages",
            "They are functionally identical; push is the modern replacement for the deprecated save",
            "save creates a new stash entry; push modifies the latest one",
            "save includes untracked files; push does not"
        ],
        answer: 1,
        explanation: "git stash save is deprecated in favor of git stash push. Both accept -m for a message and behave identically. The 'push' terminology aligns better with Git's conceptual model.",
        difficulty: "Easy",
        topic: "git stash"
    },
    {
        id: "git-255",
        question: "You want to rename the default branch from 'master' to 'main' on GitHub. What is the correct sequence?",
        options: [
            "Just rename it in GitHub Settings; Git handles the rest automatically",
            "Rename the local branch, push the new branch, update upstream, update origin's default branch in GitHub Settings, update CI/CD and documentation",
            "Delete master and create main",
            "Git doesn't allow renaming the default branch"
        ],
        answer: 1,
        explanation: "Renaming the default branch involves: local rename, pushing the new branch, setting it as default in GitHub Settings, updating all references in CI/CD, documentation, and team workflows.",
        difficulty: "Medium",
        topic: "Renaming Branches"
    },
    {
        id: "git-256",
        question: "What does 'git verify-pack -v .git/objects/pack/*.idx' do?",
        options: [
            "Verifies the repository's integrity",
            "Lists all objects in pack files with their types, sizes, and delta chains, useful for identifying large objects",
            "Creates a new pack file",
            "Unpacks all objects from pack files"
        ],
        answer: 1,
        explanation: "verify-pack lists pack contents with details about each object — type, size, and delta relationships — useful for finding the largest objects contributing to repository bloat.",
        difficulty: "Hard",
        topic: "Git Performance"
    },
    {
        id: "git-257",
        question: "In a pull request review on GitHub, what does 'Request Changes' do?",
        options: [
            "It closes the pull request",
            "It blocks the PR from being merged until the requested changes are addressed and a new review is submitted",
            "It automatically creates follow-up issues",
            "It reverts the PR commits"
        ],
        answer: 1,
        explanation: "Requesting changes sets the review status to 'changes requested', which prevents merging (if required reviews are enforced) until the author pushes fixes and an approver reviews again.",
        difficulty: "Easy",
        topic: "Review Requests"
    },
    {
        id: "git-258",
        question: "You have a git repository where 'git status' always shows a file as modified even though you haven't changed it. What is a likely cause?",
        options: [
            "The file is corrupted",
            "Line ending differences (CRLF vs LF) caused by inconsistent core.autocrlf settings between team members",
            "The file is too large for Git to track",
            "The file has Unicode characters that Git can't handle"
        ],
        answer: 1,
        explanation: "Mismatched line ending settings between team members or between .gitattributes and core.autocrlf can cause files to appear perpetually modified due to automatic CRLF/LF conversion.",
        difficulty: "Medium",
        topic: "Troubleshooting"
    },
    {
        id: "git-259",
        question: "What is the 'post-commit' hook typically used for?",
        options: [
            "Validating commit messages",
            "Running notifications, updating documentation, or triggering downstream tools after a commit is created",
            "Preventing bad commits from being created",
            "Staging additional files after each commit"
        ],
        answer: 1,
        explanation: "post-commit runs after a commit is successfully created. Common uses include sending notifications, updating project documentation, or triggering external build systems.",
        difficulty: "Easy",
        topic: "Post-commit"
    },
    {
        id: "git-260",
        question: "You want to see the difference between the working directory and the commit 3 versions ago. Which command works?",
        options: [
            "git diff HEAD~3",
            "git diff HEAD~3 -- file (or all files)",
            "git diff HEAD~3 HEAD",
            "Both B and C show the same thing"
        ],
        answer: 3,
        explanation: "'git diff HEAD~3' and 'git diff HEAD~3 HEAD' are equivalent — both show differences between the working directory and the commit 3 before HEAD.",
        difficulty: "Medium",
        topic: "git diff"
    },
    {
        id: "git-261",
        question: "In GitHub, what is a 'Review Comment' on a pull request?",
        options: [
            "A comment on the PR conversation thread",
            "A comment attached to a specific line of code in the diff view",
            "A comment that approves the PR",
            "A comment that requests changes"
        ],
        answer: 1,
        explanation: "Review comments are attached to specific lines in the PR diff, allowing precise feedback on particular code changes. They are distinct from general issue/PR comments.",
        difficulty: "Easy",
        topic: "Review Comments"
    },
    {
        id: "git-262",
        question: "What does 'git update-ref -d refs/heads/feature-x' do?",
        options: [
            "Deletes the feature-x branch file from disk",
            "Deletes the branch reference directly, which is a lower-level equivalent of git branch -D",
            "Updates the branch to point to the default branch",
            "Disables the branch temporarily"
        ],
        answer: 1,
        explanation: "update-ref -d deletes a reference directly, which is what git branch -D does internally. It's a lower-level command that bypasses some safety checks.",
        difficulty: "Hard",
        topic: "Deleting Branches"
    }
]