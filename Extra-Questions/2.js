[
  {
    "id": 1,
    "topic": "Linux Basics",
    "difficulty": "Easy",
    "question": "What does the acronym Linux stand for?",
    "options": [
      "Nothing, it is not an acronym",
      "Linux Is Not UniX",
      "Logical Integrated Network Unified eXecutive",
      "Linus's Unique Network Integrated eXchange"
    ],
    "answer": 0,
    "explanation": "Linux is not an acronym. It is derived from Linus + Unix, named after Linus Torvalds who created the Linux kernel in 1991."
  },
  {
    "id": 2,
    "topic": "Linux Basics",
    "difficulty": "Easy",
    "question": "Which of the following is NOT a Linux distribution?",
    "options": [
      "Fedora",
      "FreeBSD",
      "Arch Linux",
      "openSUSE"
    ],
    "answer": 1,
    "explanation": "FreeBSD is a separate Unix-like operating system, not a Linux distribution. It has its own kernel and is derived from BSD Unix."
  },
  {
    "id": 3,
    "topic": "Linux Basics",
    "difficulty": "Easy",
    "question": "What is the default shell in most Linux distributions?",
    "options": [
      "sh",
      "csh",
      "bash",
      "zsh"
    ],
    "answer": 2,
    "explanation": "Bash (Bourne Again Shell) is the default shell in most Linux distributions including Ubuntu, CentOS, and Debian."
  },
  {
    "id": 4,
    "topic": "Linux Basics",
    "difficulty": "Easy",
    "question": "Which command is used to check the Linux kernel version?",
    "options": [
      "linux --version",
      "kernel -v",
      "uname -r",
      "ver"
    ],
    "answer": 2,
    "explanation": "uname -r displays the kernel release version. For example, it might output 5.15.0-76-generic."
  },
  {
    "id": 5,
    "topic": "Linux Basics",
    "difficulty": "Easy",
    "question": "What type of operating system is Linux?",
    "options": [
      "Proprietary",
      "Open source",
      "Freeware",
      "Shareware"
    ],
    "answer": 1,
    "explanation": "Linux is released under the GNU General Public License (GPL), making it open source software that anyone can view, modify, and distribute."
  },
  {
    "id": 6,
    "topic": "Linux Basics",
    "difficulty": "Easy",
    "question": "Which file system is commonly used as the default in modern Linux distributions?",
    "options": [
      "NTFS",
      "FAT32",
      "ext4",
      "HFS+"
    ],
    "answer": 2,
    "explanation": "ext4 is the most commonly used default file system in modern Linux distributions, succeeding ext3 with improved performance and reliability."
  },
  {
    "id": 7,
    "topic": "Linux Basics",
    "difficulty": "Easy",
    "question": "What is the root directory represented by in Linux?",
    "options": [
      "C:\\",
      "/",
      "~",
      "."
    ],
    "answer": 1,
    "explanation": "The root directory is represented by a forward slash (/) in Linux. It is the top-level directory in the file system hierarchy."
  },
  {
    "id": 8,
    "topic": "Linux Basics",
    "difficulty": "Easy",
    "question": "Which command displays the current working directory?",
    "options": [
      "cwd",
      "cd",
      "pwd",
      "dir"
    ],
    "answer": 2,
    "explanation": "pwd (Print Working Directory) displays the full path of the current working directory."
  },
  {
    "id": 9,
    "topic": "Linux Basics",
    "difficulty": "Easy",
    "question": "In Linux, everything is treated as a:",
    "options": [
      "Process",
      "Thread",
      "File",
      "Device"
    ],
    "answer": 2,
    "explanation": "In Linux, everything is treated as a file, including devices, directories, pipes, and sockets. This is a fundamental Unix philosophy."
  },
  {
    "id": 10,
    "topic": "Linux Basics",
    "difficulty": "Easy",
    "question": "Which symbol represents the home directory of the current user?",
    "options": [
      "/",
      "~",
      "$",
      "&"
    ],
    "answer": 1,
    "explanation": "The tilde (~) is a shortcut representing the current user's home directory. For user john, ~ expands to /home/john."
  },
  {
    "id": 11,
    "topic": "pwd",
    "difficulty": "Easy",
    "question": "What does the 'pwd' command stand for?",
    "options": [
      "Print Work Directory",
      "Present Working Directory",
      "Print Working Directory",
      "Path Working Directory"
    ],
    "answer": 2,
    "explanation": "pwd stands for Print Working Directory. It outputs the absolute path of the current directory you are in."
  },
  {
    "id": 12,
    "topic": "pwd",
    "difficulty": "Easy",
    "question": "If you are in /home/user/Documents and run pwd, what is the output?",
    "options": [
      "Documents",
      "/home/user/Documents",
      "~/Documents",
      "user/Documents"
    ],
    "answer": 1,
    "explanation": "pwd always prints the absolute (full) path, which would be /home/user/Documents in this case."
  },
  {
    "id": 13,
    "topic": "pwd",
    "difficulty": "Easy",
    "question": "Which option with pwd avoids following symlinks?",
    "options": [
      "pwd -a",
      "pwd -L",
      "pwd -P",
      "pwd -s"
    ],
    "answer": 2,
    "explanation": "pwd -P displays the physical directory without following symbolic links. The default behavior (-L) follows symlinks."
  },
  {
    "id": 14,
    "topic": "pwd",
    "difficulty": "Easy",
    "question": "The built-in pwd command differs from /bin/pwd in that the built-in version:",
    "options": [
      "Always shows the physical path",
      "Can be affected by shell options like -P",
      "Does not support any options",
      "Shows the parent directory"
    ],
    "answer": 1,
    "explanation": "The shell built-in pwd respects shell options like -P for physical path, while /bin/pwd is a standalone binary that always defaults to -P behavior."
  },
  {
    "id": 15,
    "topic": "ls",
    "difficulty": "Easy",
    "question": "Which flag displays hidden files with the ls command?",
    "options": [
      "ls -h",
      "ls -a",
      "ls -l",
      "ls -A"
    ],
    "answer": 1,
    "explanation": "ls -a shows all files including hidden ones (files starting with a dot). ls -A shows all files except . and .."
  },
  {
    "id": 16,
    "topic": "ls",
    "difficulty": "Easy",
    "question": "What does ls -l display?",
    "options": [
      "Only file names",
      "Long listing format with permissions, owner, size, and modification time",
      "Only directories",
      "Files in a single column"
    ],
    "answer": 1,
    "explanation": "ls -l uses long listing format showing file type, permissions, number of hard links, owner, group, size, and modification timestamp."
  },
  {
    "id": 17,
    "topic": "ls",
    "difficulty": "Easy",
    "question": "How do you sort files by size using ls?",
    "options": [
      "ls -s",
      "ls -S",
      "ls --size",
      "ls -r"
    ],
    "answer": 1,
    "explanation": "ls -S sorts files by size, largest first. Adding -r (ls -Sr) reverses the order to show smallest first."
  },
  {
    "id": 18,
    "topic": "ls",
    "difficulty": "Easy",
    "question": "What does the first character 'd' indicate in ls -l output?",
    "options": [
      "A device file",
      "A directory",
      "A data file",
      "A deleted file"
    ],
    "answer": 1,
    "explanation": "In ls -l output, the first character indicates file type: 'd' for directory, '-' for regular file, 'l' for symbolic link, 'b' for block device, 'c' for character device."
  },
  {
    "id": 19,
    "topic": "ls",
    "difficulty": "Easy",
    "question": "Which command lists files with human-readable file sizes?",
    "options": [
      "ls -h",
      "ls -H",
      "ls --human",
      "ls -m"
    ],
    "answer": 0,
    "explanation": "ls -h displays file sizes in human-readable format (e.g., 1K, 2M, 3G) instead of bytes. It is commonly combined with -l as ls -lh."
  },
  {
    "id": 20,
    "topic": "ls",
    "difficulty": "Easy",
    "question": "What does ls -R do?",
    "options": [
      "Reverses the sort order",
      "Lists files recursively through subdirectories",
      "Shows only regular files",
      "Removes empty directories"
    ],
    "answer": 1,
    "explanation": "ls -R lists directories recursively, showing the contents of all subdirectories in a tree-like manner."
  },
  {
    "id": 21,
    "topic": "cd",
    "difficulty": "Easy",
    "question": "Which command takes you to the home directory from anywhere in the file system?",
    "options": [
      "cd /",
      "cd ~",
      "cd ..",
      "cd ."
    ],
    "answer": 1,
    "explanation": "cd ~ or simply cd without arguments takes you to the current user's home directory."
  },
  {
    "id": 22,
    "topic": "cd",
    "difficulty": "Easy",
    "question": "What does 'cd -' do?",
    "options": [
      "Deletes the current directory",
      "Goes back to the previous directory",
      "Creates a new directory",
      "Shows directory size"
    ],
    "answer": 1,
    "explanation": "cd - switches to the previous working directory, essentially toggling between the last two directories visited."
  },
  {
    "id": 23,
    "topic": "cd",
    "difficulty": "Easy",
    "question": "What does 'cd ..' accomplish?",
    "options": [
      "Moves to the root directory",
      "Moves up one directory level",
      "Moves to the home directory",
      "Moves to the parent of the root"
    ],
    "answer": 1,
    "explanation": "cd .. moves up one directory level to the parent directory. You can use cd ../.. to move up two levels."
  },
  {
    "id": 24,
    "topic": "cd",
    "difficulty": "Easy",
    "question": "Which command changes to the root directory?",
    "options": [
      "cd ~",
      "cd /root",
      "cd /",
      "cd root"
    ],
    "answer": 2,
    "explanation": "cd / changes to the root directory (/), which is the top of the file system hierarchy. cd /root goes to root user's home directory."
  },
  {
    "id": 25,
    "topic": "cd",
    "difficulty": "Easy",
    "question": "If OLDPWD is set to /var/log and you run 'cd -', where do you go?",
    "options": [
      "/var/log",
      "The home directory",
      "The current directory",
      "An error occurs"
    ],
    "answer": 0,
    "explanation": "cd - uses the value of OLDPWD environment variable to switch back to the previous directory, which is /var/log in this case."
  },
  {
    "id": 26,
    "topic": "cp",
    "difficulty": "Easy",
    "question": "Which command copies a file preserving its attributes?",
    "options": [
      "cp file1 file2",
      "cp -p file1 file2",
      "cp -r file1 file2",
      "cp -a file1 file2"
    ],
    "answer": 1,
    "explanation": "cp -p preserves the file's mode, ownership, and timestamps. cp -a is an archive option that also preserves attributes and works recursively."
  },
  {
    "id": 27,
    "topic": "cp",
    "difficulty": "Easy",
    "question": "How do you copy a directory recursively?",
    "options": [
      "cp dir1 dir2",
      "cp -r dir1 dir2",
      "cp -d dir1 dir2",
      "cp -f dir1 dir2"
    ],
    "answer": 1,
    "explanation": "cp -r (or -R) copies directories recursively, including all files and subdirectories within them."
  },
  {
    "id": 28,
    "topic": "cp",
    "difficulty": "Easy",
    "question": "What does cp -i do?",
    "options": [
      "Copies only if the file is newer",
      "Prompts before overwriting an existing file",
      "Copies in interactive mode with progress",
      "Ignores errors"
    ],
    "answer": 1,
    "explanation": "cp -i prompts the user for confirmation before overwriting an existing destination file. This is often aliased in many distributions for safety."
  },
  {
    "id": 29,
    "topic": "cp",
    "difficulty": "Easy",
    "question": "Which flag forces cp to overwrite without prompting?",
    "options": [
      "cp -o",
      "cp -f",
      "cp -w",
      "cp -y"
    ],
    "answer": 1,
    "explanation": "cp -f forces the copy operation, removing existing destination files if needed without prompting."
  },
  {
    "id": 30,
    "topic": "cp",
    "difficulty": "Easy",
    "question": "What is the result of 'cp file1.txt file2.txt file3.txt /backup/'?",
    "options": [
      "Error, cp can only copy one file at a time",
      "All three files are copied to /backup/",
      "Files are concatenated into one in /backup/",
      "Only file1.txt is copied"
    ],
    "answer": 1,
    "explanation": "cp can copy multiple source files to a destination directory. All three files will be copied into /backup/."
  },
  {
    "id": 31,
    "topic": "mv",
    "difficulty": "Easy",
    "question": "What does the mv command do when moving a file within the same file system?",
    "options": [
      "Copies then deletes the original",
      "Updates the directory entry without moving data",
      "Creates a hard link and removes the original",
      "Compresses and transfers the file"
    ],
    "answer": 1,
    "explanation": "Within the same file system, mv simply updates the directory entry (inode pointer) without actually moving data on disk, making it nearly instantaneous."
  },
  {
    "id": 32,
    "topic": "mv",
    "difficulty": "Easy",
    "question": "Which flag with mv prompts before overwriting?",
    "options": [
      "mv -p",
      "mv -i",
      "mv -n",
      "mv -w"
    ],
    "answer": 1,
    "explanation": "mv -i prompts the user for confirmation before overwriting an existing file. mv -n prevents overwriting entirely."
  },
  {
    "id": 33,
    "topic": "mv",
    "difficulty": "Easy",
    "question": "What is the result of 'mv oldname.txt newname.txt'?",
    "options": [
      "Creates a copy called newname.txt",
      "Renames oldname.txt to newname.txt",
      "Moves oldname.txt to a directory called newname.txt",
      "Deletes oldname.txt"
    ],
    "answer": 1,
    "explanation": "When the destination is not a directory, mv renames the file. This is the standard way to rename files in Linux."
  },
  {
    "id": 34,
    "topic": "mv",
    "difficulty": "Easy",
    "question": "What does mv -n do?",
    "options": [
      "Negates the move operation",
      "Does not overwrite an existing file",
      "Moves only new files",
      "Runs in no-clobber mode only for directories"
    ],
    "answer": 1,
    "explanation": "mv -n (no-clobber) does not overwrite an existing file. If the destination exists, the move is silently skipped."
  },
  {
    "id": 35,
    "topic": "mv",
    "difficulty": "Easy",
    "question": "How do you move all .jpg files to the /images directory?",
    "options": [
      "mv *.jpg /images",
      "mv -jpg /images",
      "mv --all jpg /images",
      "mv .jpg /images"
    ],
    "answer": 0,
    "explanation": "mv *.jpg /images uses shell globbing to match all files ending with .jpg and moves them to the /images directory."
  },
  {
    "id": 36,
    "topic": "rm",
    "difficulty": "Easy",
    "question": "Which command recursively removes a directory and its contents?",
    "options": [
      "rm -r dir",
      "rm dir",
      "rm -f dir",
      "rm -d dir"
    ],
    "answer": 0,
    "explanation": "rm -r (or -R) recursively removes a directory and all its contents including files and subdirectories."
  },
  {
    "id": 37,
    "topic": "rm",
    "difficulty": "Easy",
    "question": "What does rm -f do?",
    "options": [
      "Removes only files",
      "Force removes without prompting, ignores nonexistent files",
      "Removes files in foreground",
      "Fast removes by skipping checks"
    ],
    "answer": 1,
    "explanation": "rm -f forces removal without prompting for confirmation and ignores nonexistent files and arguments without reporting errors."
  },
  {
    "id": 38,
    "topic": "rm",
    "difficulty": "Easy",
    "question": "Why is 'rm -rf /' dangerous?",
    "options": [
      "It only removes root's home directory",
      "It recursively and forcefully deletes all files on the system",
      "It removes only temporary files",
      "It formats the disk"
    ],
    "answer": 1,
    "explanation": "rm -rf / recursively and forcefully deletes every file and directory starting from the root, effectively destroying the entire file system."
  },
  {
    "id": 39,
    "topic": "rm",
    "difficulty": "Easy",
    "question": "Which option makes rm prompt before every removal?",
    "options": [
      "rm -p",
      "rm -i",
      "rm -a",
      "rm -v"
    ],
    "answer": 1,
    "explanation": "rm -i prompts for confirmation before removing each file. This is a safety measure often set as an alias in interactive shells."
  },
  {
    "id": 40,
    "topic": "rm",
    "difficulty": "Easy",
    "question": "What does rm -v do?",
    "options": [
      "Verifies files before removing",
      "Shows what is being removed (verbose mode)",
      "Removes in virtual mode without actual deletion",
      "Validates file checksums before removal"
    ],
    "answer": 1,
    "explanation": "rm -v enables verbose mode, printing the name of each file as it is being removed."
  },
  {
    "id": 41,
    "topic": "mkdir",
    "difficulty": "Easy",
    "question": "How do you create a directory with subdirectories in one command?",
    "options": [
      "mkdir -r a/b/c",
      "mkdir -p a/b/c",
      "mkdir --all a/b/c",
      "mkdir -s a/b/c"
    ],
    "answer": 1,
    "explanation": "mkdir -p creates parent directories as needed. Without -p, mkdir a/b/c would fail if a and b don't already exist."
  },
  {
    "id": 42,
    "topic": "mkdir",
    "difficulty": "Easy",
    "question": "What does mkdir -m 755 mydir do?",
    "options": [
      "Creates a directory with move permissions",
      "Creates a directory with 755 permissions",
      "Creates a directory with maximum size 755",
      "Modifies an existing directory to 755"
    ],
    "answer": 1,
    "explanation": "mkdir -m 755 sets the permission mode to 755 (rwxr-xr-x) at the time of directory creation."
  },
  {
    "id": 43,
    "topic": "mkdir",
    "difficulty": "Easy",
    "question": "Which command creates three directories: dir1, dir2, and dir3 at once?",
    "options": [
      "mkdir dir1,dir2,dir3",
      "mkdir dir1 dir2 dir3",
      "mkdir -c dir1 dir2 dir3",
      "mkdir --multi dir1 dir2 dir3"
    ],
    "answer": 1,
    "explanation": "mkdir can create multiple directories in a single command by listing them as space-separated arguments."
  },
  {
    "id": 44,
    "topic": "mkdir",
    "difficulty": "Easy",
    "question": "What happens if you try to create a directory that already exists without any flags?",
    "options": [
      "It silently succeeds",
      "It overwrites the existing directory",
      "It reports an error: File exists",
      "It appends a number to the name"
    ],
    "answer": 2,
    "explanation": "Without -p, mkdir reports an error if the directory already exists. With -p, it silently succeeds without error."
  },
  {
    "id": 45,
    "topic": "mkdir",
    "difficulty": "Easy",
    "question": "What does mkdir -v projects do?",
    "options": [
      "Creates a virtual directory",
      "Creates the directory and prints a message about it",
      "Verifies the directory name",
      "Creates with verbose error checking"
    ],
    "answer": 1,
    "explanation": "mkdir -v enables verbose mode, printing a message like 'mkdir: created directory projects' to confirm the action."
  },
  {
    "id": 46,
    "topic": "rmdir",
    "difficulty": "Easy",
    "question": "What condition must be met for rmdir to remove a directory?",
    "options": [
      "The directory must be empty",
      "The user must be root",
      "The directory must not be a subdirectory",
      "The directory must be writable"
    ],
    "answer": 0,
    "explanation": "rmdir only removes empty directories. If the directory contains any files or subdirectories, rmdir will fail with an error."
  },
  {
    "id": 47,
    "topic": "rmdir",
    "difficulty": "Easy",
    "question": "What does rmdir -p a/b/c do?",
    "options": [
      "Prompts before removing each directory",
      "Removes c, then b, then a if they become empty",
      "Permanently removes without confirmation",
      "Pauses between each removal"
    ],
    "answer": 1,
    "explanation": "rmdir -p removes the directory hierarchy. It removes c first, then b if empty, then a if empty, stopping when a non-empty directory is encountered."
  },
  {
    "id": 48,
    "topic": "rmdir",
    "difficulty": "Easy",
    "question": "What is the main difference between rmdir and rm -r?",
    "options": [
      "There is no difference",
      "rmdir only removes empty directories, rm -r removes directories with contents",
      "rm -r is safer than rmdir",
      "rmdir is faster than rm -r"
    ],
    "answer": 1,
    "explanation": "rmdir can only remove empty directories and is safer. rm -r recursively removes directories along with all their contents."
  },
  {
    "id": 49,
    "topic": "rmdir",
    "difficulty": "Easy",
    "question": "What does rmdir --ignore-fail-on-non-empty do?",
    "options": [
      "Forces removal of non-empty directories",
      "Does not report an error if the directory is not empty",
      "Ignores all errors",
      "Removes only hidden files from the directory"
    ],
    "answer": 1,
    "explanation": "This flag suppresses the error message that rmdir normally produces when attempting to remove a non-empty directory."
  },
  {
    "id": 50,
    "topic": "rmdir",
    "difficulty": "Easy",
    "question": "Which command removes multiple empty directories dir1, dir2, dir3?",
    "options": [
      "rmdir dir1,dir2,dir3",
      "rmdir dir1 dir2 dir3",
      "rmdir -m dir1 dir2 dir3",
      "rmdir --all dir1 dir2 dir3"
    ],
    "answer": 1,
    "explanation": "rmdir accepts multiple directory names as arguments and attempts to remove each one, provided they are all empty."
  },
  {
    "id": 51,
    "topic": "touch",
    "difficulty": "Easy",
    "question": "What does the touch command do when the specified file does not exist?",
    "options": [
      "Returns an error",
      "Creates an empty file",
      "Prompts for file content",
      "Creates a temporary file"
    ],
    "answer": 1,
    "explanation": "If the file does not exist, touch creates it as an empty file. If it exists, touch updates the file's access and modification timestamps."
  },
  {
    "id": 52,
    "topic": "touch",
    "difficulty": "Easy",
    "question": "How do you create multiple empty files at once using touch?",
    "options": [
      "touch -m file1 file2 file3",
      "touch file1 file2 file3",
      "touch --create file1 file2 file3",
      "touch -c file1 file2 file3"
    ],
    "answer": 1,
    "explanation": "touch accepts multiple filenames as arguments and creates each one as an empty file if it does not already exist."
  },
  {
    "id": 53,
    "topic": "touch",
    "difficulty": "Easy",
    "question": "What does touch -t 202401011200.00 file.txt do?",
    "options": [
      "Truncates the file to 1200 bytes",
      "Sets the file's timestamp to January 1, 2024, 12:00:00",
      "Tags the file with ID 202401011200",
      "Tests the file for 12 seconds"
    ],
    "answer": 1,
    "explanation": "touch -t sets the timestamp using the format [[CC]YY]MMDDhhmm[.ss]. This sets the file's time to Jan 1, 2024 at 12:00:00."
  },
  {
    "id": 54,
    "topic": "touch",
    "difficulty": "Easy",
    "question": "What does touch -c do?",
    "options": [
      "Creates a compressed file",
      "Does not create the file if it does not exist",
      "Copies timestamps from another file",
      "Clears the file content"
    ],
    "answer": 1,
    "explanation": "touch -c (no-create) does not create a file if it does not exist. It only updates timestamps of existing files."
  },
  {
    "id": 55,
    "topic": "touch",
    "difficulty": "Easy",
    "question": "How do you set a file's timestamp to match another file's timestamp using touch?",
    "options": [
      "touch -r ref_file target_file",
      "touch -s ref_file target_file",
      "touch --same ref_file target_file",
      "touch -m ref_file target_file"
    ],
    "answer": 0,
    "explanation": "touch -r (reference) uses the timestamp of the reference file (ref_file) as the timestamp for the target file."
  },
  {
    "id": 56,
    "topic": "cat",
    "difficulty": "Easy",
    "question": "What does the cat command stand for?",
    "options": [
      "Catalog",
      "Concatenate",
      "Category",
      "Capture"
    ],
    "answer": 1,
    "explanation": "cat stands for concatenate. It reads data from files and outputs their contents, and can combine (concatenate) multiple files."
  },
  {
    "id": 57,
    "topic": "cat",
    "difficulty": "Easy",
    "question": "Which option with cat displays line numbers?",
    "options": [
      "cat -l",
      "cat -n",
      "cat -#",
      "cat --lines"
    ],
    "answer": 1,
    "explanation": "cat -n numbers all output lines, starting from 1. cat -b numbers only non-empty lines."
  },
  {
    "id": 58,
    "topic": "cat",
    "difficulty": "Easy",
    "question": "What does cat file1 file2 > file3 do?",
    "options": [
      "Displays file1 and file2 content",
      "Concatenates file1 and file2 into file3",
      "Compares file1 and file2",
      "Copies file1 to file3"
    ],
    "answer": 1,
    "explanation": "This concatenates the contents of file1 and file2 and redirects the combined output into file3."
  },
  {
    "id": 59,
    "topic": "cat",
    "difficulty": "Easy",
    "question": "What does cat -s do?",
    "options": [
      "Shows file size",
      "Squeezes blank lines, replacing multiple blank lines with one",
      "Sorts the output",
      "Shows special characters"
    ],
    "answer": 1,
    "explanation": "cat -s (squeeze-blank) suppresses repeated empty output lines, replacing multiple consecutive blank lines with a single blank line."
  },
  {
    "id": 60,
    "topic": "cat",
    "difficulty": "Easy",
    "question": "Which option shows non-printing characters with cat?",
    "options": [
      "cat -a",
      "cat -v",
      "cat -np",
      "cat -x"
    ],
    "answer": 1,
    "explanation": "cat -v shows non-printing characters using ^ and M- notation. cat -A is equivalent to -vET, showing all non-printing chars, end-of-line $, and tabs as ^I."
  },
  {
    "id": 61,
    "topic": "less",
    "difficulty": "Easy",
    "question": "What key do you press to quit the less pager?",
    "options": [
      "Escape",
      "q",
      "x",
      "Ctrl+C"
    ],
    "answer": 1,
    "explanation": "Pressing 'q' quits the less pager and returns to the shell prompt."
  },
  {
    "id": 62,
    "topic": "less",
    "difficulty": "Easy",
    "question": "What is the advantage of less over more?",
    "options": [
      "less is faster",
      "less allows backward navigation",
      "less uses less memory",
      "less is always installed by default"
    ],
    "answer": 1,
    "explanation": "less allows both forward and backward navigation through the file, while more only allows forward movement."
  },
  {
    "id": 63,
    "topic": "less",
    "difficulty": "Easy",
    "question": "How do you search forward in less?",
    "options": [
      "?pattern",
      "/pattern",
      ":pattern",
      "!pattern"
    ],
    "answer": 1,
    "explanation": "In less, /pattern searches forward for the pattern. Use ?pattern to search backward. Press n for next match, N for previous match."
  },
  {
    "id": 64,
    "topic": "less",
    "difficulty": "Easy",
    "question": "What does less -N do?",
    "options": [
      "Shows line numbers",
      "Does not use line numbers",
      "Shows only the first N lines",
      "Navigates to line N"
    ],
    "answer": 0,
    "explanation": "less -N displays line numbers at the beginning of each line in the left margin."
  },
  {
    "id": 65,
    "topic": "less",
    "difficulty": "Easy",
    "question": "Which flag opens less with case-insensitive search by default?",
    "options": [
      "less -c",
      "less -i",
      "less -I",
      "less -s"
    ],
    "answer": 1,
    "explanation": "less -i enables case-insensitive search by default. Searches will match both uppercase and lowercase letters."
  },
  {
    "id": 66,
    "topic": "more",
    "difficulty": "Easy",
    "question": "What does the more command do?",
    "options": [
      "Displays more information about a file",
      "Pages through text one screen at a time",
      "Adds more content to a file",
      "Compares two files"
    ],
    "answer": 1,
    "explanation": "more is a filter for paging through text one screenful at a time. It is a simpler alternative to less."
  },
  {
    "id": 67,
    "topic": "more",
    "difficulty": "Easy",
    "question": "How do you advance to the next page in more?",
    "options": [
      "Press n",
      "Press Enter",
      "Press Space",
      "Press Tab"
    ],
    "answer": 2,
    "explanation": "Pressing Space advances one full page in more. Pressing Enter advances one line."
  },
  {
    "id": 68,
    "topic": "more",
    "difficulty": "Easy",
    "question": "Which flag with more clears the screen before displaying?",
    "options": [
      "more -c",
      "more -C",
      "more -clear",
      "more -f"
    ],
    "answer": 0,
    "explanation": "more -c clears the screen before displaying each page, providing a cleaner viewing experience."
  },
  {
    "id": 69,
    "topic": "more",
    "difficulty": "Easy",
    "question": "What does more +10 file.txt do?",
    "options": [
      "Shows 10 lines at a time",
      "Starts displaying from line 10",
      "Shows the first 10 lines only",
      "Adds 10 blank lines before display"
    ],
    "answer": 1,
    "explanation": "more +10 starts displaying the file from line 10, skipping the first 9 lines."
  },
  {
    "id": 70,
    "topic": "more",
    "difficulty": "Easy",
    "question": "Can you navigate backward in more?",
    "options": [
      "Yes, with the Up arrow",
      "Yes, with the b key",
      "No, more only supports forward navigation",
      "Yes, with the Backspace key"
    ],
    "answer": 2,
    "explanation": "more does not support backward navigation. This is a key limitation compared to less, which allows scrolling both directions."
  },
  {
    "id": 71,
    "topic": "head",
    "difficulty": "Easy",
    "question": "By default, how many lines does head display?",
    "options": [
      "5 lines",
      "10 lines",
      "15 lines",
      "20 lines"
    ],
    "answer": 1,
    "explanation": "head displays the first 10 lines of a file by default. Use -n to specify a different number of lines."
  },
  {
    "id": 72,
    "topic": "head",
    "difficulty": "Easy",
    "question": "How do you display the first 20 lines of a file?",
    "options": [
      "head -20 file",
      "head -n 20 file",
      "Both A and B",
      "head --first 20 file"
    ],
    "answer": 2,
    "explanation": "Both head -20 file and head -n 20 file display the first 20 lines. The -n option is the standard form, but the numeric shorthand is widely supported."
  },
  {
    "id": 73,
    "topic": "head",
    "difficulty": "Easy",
    "question": "What does head -c 100 file.txt do?",
    "options": [
      "Shows first 100 characters",
      "Shows first 100 columns",
      "Shows 100 lines in compressed mode",
      "Shows file header of 100 bytes"
    ],
    "answer": 0,
    "explanation": "head -c 100 outputs the first 100 bytes (characters) of the file rather than counting lines."
  },
  {
    "id": 74,
    "topic": "head",
    "difficulty": "Easy",
    "question": "What does head -q do when multiple files are specified?",
    "options": [
      "Shows file names before each output",
      "Suppresses file name headers",
      "Queries file metadata",
      "Runs in quiet mode with no output"
    ],
    "answer": 1,
    "explanation": "head -q (quiet) suppresses the file name headers that are normally printed before each file's content when multiple files are given."
  },
  {
    "id": 75,
    "topic": "head",
    "difficulty": "Easy",
    "question": "How do you get the first line of multiple files with filenames labeled?",
    "options": [
      "head -n 1 -v file1 file2",
      "head -n 1 file1 file2",
      "head -1 -q file1 file2",
      "head -n 1 --silent file1 file2"
    ],
    "answer": 0,
    "explanation": "head -v (verbose) explicitly shows file name headers. With multiple files, head shows headers by default, but -v ensures it."
  },
  {
    "id": 76,
    "topic": "tail",
    "difficulty": "Easy",
    "question": "By default, how many lines does tail display?",
    "options": [
      "5 lines",
      "10 lines",
      "15 lines",
      "Last line only"
    ],
    "answer": 1,
    "explanation": "tail displays the last 10 lines of a file by default. Use -n to specify a different number."
  },
  {
    "id": 77,
    "topic": "tail",
    "difficulty": "Easy",
    "question": "What does tail -f do?",
    "options": [
      "Forces tail to show all lines",
      "Follows the file as it grows, outputting appended data",
      "Formats the output",
      "Finds a specific pattern"
    ],
    "answer": 1,
    "explanation": "tail -f follows a file in real-time, displaying new lines as they are appended. This is extremely useful for monitoring log files."
  },
  {
    "id": 78,
    "topic": "tail",
    "difficulty": "Easy",
    "question": "How do you display the last 50 lines of a file?",
    "options": [
      "tail -50 file",
      "tail -n 50 file",
      "Both A and B",
      "tail --last 50 file"
    ],
    "answer": 2,
    "explanation": "Both tail -50 file and tail -n 50 file display the last 50 lines. The numeric shorthand is equivalent to -n."
  },
  {
    "id": 79,
    "topic": "tail",
    "difficulty": "Easy",
    "question": "What is the difference between tail -f and tail -F?",
    "options": [
      "There is no difference",
      "tail -F follows even if the file is rotated or recreated",
      "tail -F is faster than tail -f",
      "tail -F shows file metadata"
    ],
    "answer": 1,
    "explanation": "tail -F follows the file by name, so if the file is rotated (deleted and recreated, common with log rotation), tail -F continues following the new file."
  },
  {
    "id": 80,
    "topic": "tail",
    "difficulty": "Easy",
    "question": "What does tail -n +5 file.txt display?",
    "options": [
      "The last 5 lines",
      "Lines starting from line 5 to the end",
      "Only line 5",
      "5 lines from the middle"
    ],
    "answer": 1,
    "explanation": "tail -n +5 outputs starting from line 5 to the end of the file. The + sign means 'starting from this line number.'"
  },
  {
    "id": 81,
    "topic": "grep",
    "difficulty": "Easy",
    "question": "What does grep stand for?",
    "options": [
      "General Regular Expression Parser",
      "Global Regular Expression Print",
      "Get Regular Expression Pattern",
      "Global Search and Replace Expression Parser"
    ],
    "answer": 1,
    "explanation": "grep stands for Global Regular Expression Print. It searches for patterns in text using regular expressions and prints matching lines."
  },
  {
    "id": 82,
    "topic": "grep",
    "difficulty": "Easy",
    "question": "Which flag makes grep case-insensitive?",
    "options": [
      "grep -c",
      "grep -i",
      "grep -v",
      "grep -n"
    ],
    "answer": 1,
    "explanation": "grep -i performs case-insensitive matching, so 'pattern' matches 'Pattern', 'PATTERN', 'pattern', etc."
  },
  {
    "id": 83,
    "topic": "grep",
    "difficulty": "Easy",
    "question": "What does grep -v do?",
    "options": [
      "Shows verbose output",
      "Inverts the match, showing non-matching lines",
      "Shows the version of grep",
      "Validates the pattern"
    ],
    "answer": 1,
    "explanation": "grep -v inverts the matching, displaying only lines that do NOT match the pattern. It is useful for filtering out unwanted lines."
  },
  {
    "id": 84,
    "topic": "grep",
    "difficulty": "Easy",
    "question": "What does grep -n display?",
    "options": [
      "Only the count of matches",
      "Line numbers along with matching lines",
      "The next line after each match",
      "File names only"
    ],
    "answer": 1,
    "explanation": "grep -n prefixes each matching line with its line number in the file, making it easy to locate the match."
  },
  {
    "id": 85,
    "topic": "grep",
    "difficulty": "Easy",
    "question": "What does grep -c do?",
    "options": [
      "Shows the content of matched lines",
      "Shows only the count of matching lines",
      "Makes grep case-sensitive",
      "Shows column numbers"
    ],
    "answer": 1,
    "explanation": "grep -c only outputs the count of lines that match the pattern, without showing the actual matching lines."
  },
  {
    "id": 86,
    "topic": "find",
    "difficulty": "Easy",
    "question": "What does 'find /home -name *.txt' search for?",
    "options": [
      "All .txt files in /home and subdirectories",
      "Only .txt files directly in /home",
      "Files named '*.txt' literally",
      "All text files on the system"
    ],
    "answer": 0,
    "explanation": "find /home -name '*.txt' searches recursively under /home for files ending with .txt. The wildcard should be quoted to prevent shell expansion."
  },
  {
    "id": 87,
    "topic": "find",
    "difficulty": "Easy",
    "question": "How do you find files modified in the last 7 days using find?",
    "options": [
      "find / -mtime -7",
      "find / -mtime +7",
      "find / -time 7",
      "find / -date 7"
    ],
    "answer": 0,
    "explanation": "find / -mtime -7 finds files modified less than 7 days ago. The minus sign means 'less than.' A plus sign would mean 'more than.'"
  },
  {
    "id": 88,
    "topic": "find",
    "difficulty": "Easy",
    "question": "What does 'find . -type d' find?",
    "options": [
      "All regular files",
      "All directories",
      "All hidden files",
      "All device files"
    ],
    "answer": 1,
    "explanation": "find . -type d searches for directories only. Other types include f (regular file), l (symbolic link), b (block device), c (character device)."
  },
  {
    "id": 89,
    "topic": "find",
    "difficulty": "Easy",
    "question": "What does find . -type f -exec rm {} \\; do?",
    "options": [
      "Finds and removes all files",
      "Finds regular files and deletes them",
      "Finds directories and removes them",
      "Shows files that would be deleted"
    ],
    "answer": 1,
    "explanation": "This finds all regular files (-type f) and executes rm on each one. {} is replaced by the found filename, and \\; terminates the -exec command."
  },
  {
    "id": 90,
    "topic": "find",
    "difficulty": "Easy",
    "question": "How do you find files larger than 100MB?",
    "options": [
      "find / -size +100M",
      "find / -size 100M",
      "find / -larger 100M",
      "find / -gt 100MB"
    ],
    "answer": 0,
    "explanation": "find / -size +100M finds files larger than 100 megabytes. Units include c (bytes), k (KB), M (MB), G (GB)."
  },
  {
    "id": 91,
    "topic": "locate",
    "difficulty": "Easy",
    "question": "Why might locate not find a recently created file?",
    "options": [
      "locate only searches in the current directory",
      "The locate database has not been updated",
      "locate cannot find regular files",
      "locate only works for root user"
    ],
    "answer": 1,
    "explanation": "locate uses a pre-built database (updated by updatedb). If a file was created after the last database update, locate won't find it."
  },
  {
    "id": 92,
    "topic": "locate",
    "difficulty": "Easy",
    "question": "Which command updates the locate database?",
    "options": [
      "locate --update",
      "updatedb",
      "locate -r",
      "rebuild-locate"
    ],
    "answer": 1,
    "explanation": "updatedb rebuilds the database used by locate. It is typically run daily by cron, but can be run manually as root."
  },
  {
    "id": 93,
    "topic": "locate",
    "difficulty": "Easy",
    "question": "What is the main advantage of locate over find?",
    "options": [
      "locate can search file contents",
      "locate is faster because it uses a pre-built database",
      "locate has more search options",
      "locate can search network drives"
    ],
    "answer": 1,
    "explanation": "locate is much faster than find because it searches a pre-built database rather than traversing the file system in real-time."
  },
  {
    "id": 94,
    "topic": "locate",
    "difficulty": "Easy",
    "question": "What does locate -i filename do?",
    "options": [
      "Shows only the inode number",
      "Performs a case-insensitive search",
      "Includes hidden files",
      "Ignores errors"
    ],
    "answer": 1,
    "explanation": "locate -i performs a case-insensitive search, matching filenames regardless of uppercase or lowercase letters."
  },
  {
    "id": 95,
    "topic": "locate",
    "difficulty": "Easy",
    "question": "How do you limit locate results to a specific number of entries?",
    "options": [
      "locate -n 10 pattern",
      "locate -l 10 pattern",
      "locate --max 10 pattern",
      "locate -c 10 pattern"
    ],
    "answer": 0,
    "explanation": "locate -n 10 (or -limit 10) limits the output to 10 matching entries."
  },
  {
    "id": 96,
    "topic": "which",
    "difficulty": "Easy",
    "question": "What does the which command show?",
    "options": [
      "All locations of a command",
      "The location of the executable that would be run",
      "The source code of a command",
      "The manual page location"
    ],
    "answer": 1,
    "explanation": "which shows the full path of the command that would be executed based on the current PATH environment variable."
  },
  {
    "id": 97,
    "topic": "which",
    "difficulty": "Easy",
    "question": "What does 'which ls' typically return?",
    "options": [
      "/bin/ls",
      "/usr/bin/ls",
      "Either /bin/ls or /usr/bin/ls depending on distribution",
      "/sbin/ls"
    ],
    "answer": 2,
    "explanation": "The path to ls depends on the distribution. On some it's /bin/ls, on others /usr/bin/ls. Both are common."
  },
  {
    "id": 98,
    "topic": "which",
    "difficulty": "Easy",
    "question": "What does which return if a command is not found?",
    "options": [
      "An empty string",
      "Nothing and returns a non-zero exit status",
      "'Command not found' as output",
      "A null path"
    ],
    "answer": 1,
    "explanation": "If the command is not found in PATH, which outputs nothing and returns a non-zero exit status."
  },
  {
    "id": 99,
    "topic": "which",
    "difficulty": "Easy",
    "question": "What is a limitation of the which command?",
    "options": [
      "It only works for root",
      "It does not find shell built-in commands or aliases",
      "It only finds commands in /usr/bin",
      "It cannot find executables in the current directory"
    ],
    "answer": 1,
    "explanation": "which only finds executables in PATH. It does not find shell built-ins (like cd, pwd) or aliases. Use 'type' or 'command -v' for those."
  },
  {
    "id": 100,
    "topic": "which",
    "difficulty": "Easy",
    "question": "Which flag makes which show all matching executables in PATH?",
    "options": [
      "which -a",
      "which --all",
      "Both A and B",
      "which -l"
    ],
    "answer": 2,
    "explanation": "Both which -a and which --all show all matching executables found in PATH, not just the first one."
  },
  {
    "id": 101,
    "topic": "whereis",
    "difficulty": "Easy",
    "question": "What does whereis search for by default?",
    "options": [
      "Only the binary",
      "Binary, source, and manual page files",
      "Only the manual page",
      "Only the source code"
    ],
    "answer": 1,
    "explanation": "whereis locates the binary, source, and manual page files for a command. It searches in standard Linux directories, not the full PATH."
  },
  {
    "id": 102,
    "topic": "whereis",
    "difficulty": "Easy",
    "question": "How do you limit whereis to only find the binary?",
    "options": [
      "whereis -b command",
      "whereis --bin command",
      "Both A and B",
      "whereis -e command"
    ],
    "answer": 2,
    "explanation": "Both whereis -b and whereis --bin limit the search to only binary files."
  },
  {
    "id": 103,
    "topic": "whereis",
    "difficulty": "Easy",
    "question": "What is the key difference between whereis and which?",
    "options": [
      "They are identical",
      "whereis searches standard directories for binary, source, and man pages; which searches PATH for executables",
      "which is faster than whereis",
      "whereis requires root privileges"
    ],
    "answer": 1,
    "explanation": "whereis searches a fixed set of standard directories for binaries, sources, and man pages. which searches the user's PATH for the executable that would run."
  },
  {
    "id": 104,
    "topic": "whereis",
    "difficulty": "Easy",
    "question": "What does whereis -m ls show?",
    "options": [
      "The binary location of ls",
      "The manual page location for ls",
      "The source code location of ls",
      "The module path for ls"
    ],
    "answer": 1,
    "explanation": "whereis -m limits the search to manual page files only, showing where the man page for the command is located."
  },
  {
    "id": 105,
    "topic": "whereis",
    "difficulty": "Easy",
    "question": "What does whereis -B /custom/bin ls do?",
    "options": [
      "Blocks the search for ls",
      "Searches for the binary of ls only in /custom/bin",
      "Backs up the ls binary to /custom/bin",
      "Shows binaries before the man page"
    ],
    "answer": 1,
    "explanation": "whereis -B /custom/bin limits the binary search to the specified directory /custom/bin instead of the default binary paths."
  },
  {
    "id": 106,
    "topic": "File Permissions",
    "difficulty": "Easy",
    "question": "What does the permission string 'rwxr-xr--' represent?",
    "options": [
      "Owner: read, write, execute; Group: read, execute; Others: read",
      "Owner: read, write, execute; Group: read, write, execute; Others: read",
      "Owner: read, write; Group: read, execute; Others: read, execute",
      "Owner: read, write, execute; Group: read; Others: read, execute"
    ],
    "answer": 0,
    "explanation": "rwxr-xr-- breaks down as: owner (rwx=7), group (r-x=5), others (r--=4). This is the octal 754."
  },
  {
    "id": 107,
    "topic": "File Permissions",
    "difficulty": "Easy",
    "question": "What octal permission represents rwxr-xr-x?",
    "options": [
      "755",
      "775",
      "655",
      "765"
    ],
    "answer": 0,
    "explanation": "rwx=7 (4+2+1), r-x=5 (4+0+1), r-x=5 (4+0+1), giving 755. This is common for directories and executable files."
  },
  {
    "id": 108,
    "topic": "File Permissions",
    "difficulty": "Easy",
    "question": "Which command changes file permissions?",
    "options": [
      "chperm",
      "chmod",
      "setperm",
      "fileperm"
    ],
    "answer": 1,
    "explanation": "chmod (change mode) is used to change the file permission bits (read, write, execute) for owner, group, and others."
  },
  {
    "id": 109,
    "topic": "File Permissions",
    "difficulty": "Easy",
    "question": "What does chmod 644 file.txt do?",
    "options": [
      "Owner: rw, Group: r, Others: r",
      "Owner: rw, Group: rw, Others: r",
      "Owner: rwx, Group: r, Others: r",
      "Owner: rw, Group: r, Others: none"
    ],
    "answer": 0,
    "explanation": "644 = rw-r--r--. Owner gets read+write (6), group gets read (4), others get read (4). This is the default for many files."
  },
  {
    "id": 110,
    "topic": "File Permissions",
    "difficulty": "Easy",
    "question": "What does chmod +x script.sh do?",
    "options": [
      "Removes execute permission",
      "Adds execute permission for all (owner, group, others)",
      "Adds execute permission for owner only",
      "Sets execute permission to exactly x"
    ],
    "answer": 1,
    "explanation": "chmod +x adds execute permission for all three categories (owner, group, others). Use +u, +g, or +o to target specific categories."
  },
  {
    "id": 111,
    "topic": "chmod",
    "difficulty": "Easy",
    "question": "How do you remove write permission for others using symbolic mode?",
    "options": [
      "chmod -w others file",
      "chmod o-w file",
      "chmod -o+w file",
      "chmod remove-w file"
    ],
    "answer": 1,
    "explanation": "chmod o-w removes write permission for others. The syntax is [ugoa][+-=][rwxXst], where 'o' stands for others, '-' means remove, 'w' means write."
  },
  {
    "id": 112,
    "topic": "chmod",
    "difficulty": "Easy",
    "question": "What does chmod 777 file do?",
    "options": [
      "Restricts all permissions",
      "Gives read, write, and execute to everyone",
      "Gives read-only to everyone",
      "Deletes the file"
    ],
    "answer": 1,
    "explanation": "chmod 777 gives full permissions (read, write, execute) to owner, group, and others. This is generally considered insecure."
  },
  {
    "id": 113,
    "topic": "chmod",
    "difficulty": "Easy",
    "question": "What does chmod -R 755 /opt/app do?",
    "options": [
      "Removes permissions recursively",
      "Sets 755 permissions recursively on /opt/app and all its contents",
      "Sets 755 only on /opt/app directory",
      "Reverses the current permissions"
    ],
    "answer": 1,
    "explanation": "chmod -R recursively applies 755 permissions to the directory /opt/app and all files and subdirectories within it."
  },
  {
    "id": 114,
    "topic": "chmod",
    "difficulty": "Easy",
    "question": "What is the setuid bit represented by in octal?",
    "options": [
      "1000",
      "2000",
      "4000",
      "8000"
    ],
    "answer": 2,
    "explanation": "The setuid bit is 4000 in octal. setgid is 2000, and the sticky bit is 1000. For example, chmod 4755 sets setuid plus rwxr-xr-x."
  },
  {
    "id": 115,
    "topic": "chmod",
    "difficulty": "Easy",
    "question": "What does chmod a=r file do?",
    "options": [
      "Adds read permission for all",
      "Sets read-only permission for all, removing other permissions",
      "Removes read permission for all",
      "Adds read and execute for all"
    ],
    "answer": 1,
    "explanation": "chmod a=r sets (not adds) read permission for all (owner, group, others) and removes all other permissions. The '=' operator sets exact permissions."
  },
  {
    "id": 116,
    "topic": "chown",
    "difficulty": "Easy",
    "question": "What does chown do?",
    "options": [
      "Changes file permissions",
      "Changes file ownership",
      "Changes file group",
      "Changes file creation time"
    ],
    "answer": 1,
    "explanation": "chown (change owner) changes the user and/or group ownership of files. Only root can change the owner of a file."
  },
  {
    "id": 117,
    "topic": "chown",
    "difficulty": "Easy",
    "question": "How do you change both the owner and group of a file?",
    "options": [
      "chown user:group file",
      "chown user,group file",
      "chown user-group file",
      "chown user;group file"
    ],
    "answer": 0,
    "explanation": "chown user:group file changes both the owner to 'user' and the group to 'group'. The colon separates user and group."
  },
  {
    "id": 118,
    "topic": "chown",
    "difficulty": "Easy",
    "question": "What does chown -R user:group /var/www do?",
    "options": [
      "Removes ownership recursively",
      "Recursively changes ownership of /var/www and all contents",
      "Reverses the ownership change",
      "Shows ownership information recursively"
    ],
    "answer": 1,
    "explanation": "chown -R recursively changes the owner and group of /var/www and all files and directories within it."
  },
  {
    "id": 119,
    "topic": "chown",
    "difficulty": "Easy",
    "question": "Can a regular user change the owner of a file they own?",
    "options": [
      "Yes, using chown",
      "No, only root can change the owner",
      "Yes, but only to another user in the same group",
      "Yes, with the --allow flag"
    ],
    "answer": 1,
    "explanation": "Only root (or a process with CAP_CHOWN capability) can change the owner of a file. A regular user can change the group if they own the file and are a member of the new group."
  },
  {
    "id": 120,
    "topic": "chown",
    "difficulty": "Easy",
    "question": "What does chown :developers file.txt do?",
    "options": [
      "Removes the owner",
      "Changes only the group to 'developers'",
      "Changes the owner to 'developers'",
      "Adds the file to developers group"
    ],
    "answer": 1,
    "explanation": "When only a group is specified (preceded by a colon with no user), chown changes only the group ownership of the file."
  },
  {
    "id": 121,
    "topic": "chgrp",
    "difficulty": "Easy",
    "question": "What does the chgrp command do?",
    "options": [
      "Changes the owner of a file",
      "Changes the group ownership of a file",
      "Creates a new group",
      "Changes the group password"
    ],
    "answer": 1,
    "explanation": "chgrp (change group) changes the group ownership of files. It is functionally similar to 'chown :group file' but specifically for groups."
  },
  {
    "id": 122,
    "topic": "chgrp",
    "difficulty": "Easy",
    "question": "How do you recursively change the group of a directory?",
    "options": [
      "chgrp -r group dir",
      "chgrp -R group dir",
      "chgrp --all group dir",
      "chgrp -s group dir"
    ],
    "answer": 1,
    "explanation": "chgrp -R recursively changes the group ownership of a directory and all its contents."
  },
  {
    "id": 123,
    "topic": "chgrp",
    "difficulty": "Easy",
    "question": "What condition must be met for a non-root user to change a file's group using chgrp?",
    "options": [
      "The user must be root",
      "The user must own the file and be a member of the target group",
      "The user must be in the same group as the file",
      "No conditions, any user can change any file's group"
    ],
    "answer": 1,
    "explanation": "A non-root user can change a file's group only if they own the file and are a member of the target group."
  },
  {
    "id": 124,
    "topic": "chgrp",
    "difficulty": "Easy",
    "question": "What does chgrp --reference=ref_file target_file do?",
    "options": [
      "Creates a reference link",
      "Changes target_file's group to match ref_file's group",
      "Compares group ownership of both files",
      "Removes the group from target_file"
    ],
    "answer": 1,
    "explanation": "The --reference option copies the group ownership from the reference file and applies it to the target file."
  },
  {
    "id": 125,
    "topic": "chgrp",
    "difficulty": "Easy",
    "question": "Which command changes the group of file.txt to 'staff'?",
    "options": [
      "chgrp staff file.txt",
      "chown :staff file.txt",
      "Both A and B",
      "Neither A nor B"
    ],
    "answer": 2,
    "explanation": "Both chgrp staff file.txt and chown :staff file.txt change the group ownership of file.txt to 'staff'."
  },
  {
    "id": 126,
    "topic": "umask",
    "difficulty": "Easy",
    "question": "What does umask do?",
    "options": [
      "Sets the default file permissions",
      "Defines the permissions to remove from default file permissions",
      "Masks hidden files from listing",
      "Sets the maximum permission level"
    ],
    "answer": 1,
    "explanation": "umask defines which permission bits to remove (mask out) from the default permissions when creating new files (666) and directories (777)."
  },
  {
    "id": 127,
    "topic": "umask",
    "difficulty": "Easy",
    "question": "If umask is 022, what are the default permissions for a new file?",
    "options": [
      "644",
      "755",
      "622",
      "744"
    ],
    "answer": 0,
    "explanation": "Default file permissions are 666. With umask 022: 666 - 022 = 644 (rw-r--r--). For directories: 777 - 022 = 755 (rwxr-xr-x)."
  },
  {
    "id": 128,
    "topic": "umask",
    "difficulty": "Easy",
    "question": "How do you set the umask to 077?",
    "options": [
      "umask 077",
      "set umask 077",
      "umask --set 077",
      "export UMASK=077"
    ],
    "answer": 0,
    "explanation": "umask 077 sets the umask value. This would result in new files having 600 (rw-------) and directories having 700 (rwx------) permissions."
  },
  {
    "id": 129,
    "topic": "umask",
    "difficulty": "Easy",
    "question": "What does 'umask -S' display?",
    "options": [
      "The umask in octal form",
      "The umask in symbolic form",
      "The system default umask",
      "A short summary of umask"
    ],
    "answer": 1,
    "explanation": "umask -S displays the umask in symbolic (human-readable) form like u=rwx,g=rx,o=rx instead of the numeric octal form like 022."
  },
  {
    "id": 130,
    "topic": "umask",
    "difficulty": "Easy",
    "question": "If umask is 0027, what permissions do new directories get?",
    "options": [
      "750",
      "755",
      "727",
      "700"
    ],
    "answer": 0,
    "explanation": "Directory default: 777 - 027 = 750 (rwxr-x---). Owner gets full access, group gets read+execute, others get no permissions."
  },
  {
    "id": 131,
    "topic": "Hard Links",
    "difficulty": "Easy",
    "question": "What is true about hard links?",
    "options": [
      "They can cross file systems",
      "They point to the same inode as the original file",
      "They break if the original file is deleted",
      "They are different from the original file"
    ],
    "answer": 1,
    "explanation": "Hard links share the same inode as the original file. They cannot cross file systems, and the data is only deleted when all hard links are removed."
  },
  {
    "id": 132,
    "topic": "Hard Links",
    "difficulty": "Easy",
    "question": "How do you create a hard link?",
    "options": [
      "ln -s source link",
      "ln source link",
      "link -h source link",
      "hardlink source link"
    ],
    "answer": 1,
    "explanation": "ln source link creates a hard link. The -s flag creates a symbolic (soft) link instead."
  },
  {
    "id": 133,
    "topic": "Hard Links",
    "difficulty": "Easy",
    "question": "Can you create a hard link to a directory?",
    "options": [
      "Yes, with no restrictions",
      "No, most systems prevent hard links to directories to prevent circular references",
      "Yes, but only root can do it",
      "Yes, but only on ext4 file systems"
    ],
    "answer": 1,
    "explanation": "Most Linux systems prevent creating hard links to directories to avoid circular references in the directory tree that could cause infinite loops."
  },
  {
    "id": 134,
    "topic": "Hard Links",
    "difficulty": "Easy",
    "question": "What happens to the data when you delete the original file but a hard link exists?",
    "options": [
      "The data is immediately deleted",
      "The data remains accessible through the hard link",
      "The data becomes corrupted",
      "The hard link becomes a symbolic link"
    ],
    "answer": 1,
    "explanation": "Since hard links point to the same inode, deleting the original file only removes one directory entry. The data persists as long as at least one hard link exists."
  },
  {
    "id": 135,
    "topic": "Hard Links",
    "difficulty": "Easy",
    "question": "What column in 'ls -l' output shows the number of hard links?",
    "options": [
      "First column",
      "Second column (after permissions)",
      "Third column",
      "Fourth column"
    ],
    "answer": 1,
    "explanation": "The second column in ls -l output (after the permission string) shows the hard link count for the file."
  },
  {
    "id": 136,
    "topic": "Soft Links",
    "difficulty": "Easy",
    "question": "How do you create a symbolic (soft) link?",
    "options": [
      "ln source link",
      "ln -s source link",
      "symlink source link",
      "link -s source link"
    ],
    "answer": 1,
    "explanation": "ln -s source link creates a symbolic link. The -s flag stands for symbolic. The link points to the path of the source file, not its inode."
  },
  {
    "id": 137,
    "topic": "Soft Links",
    "difficulty": "Easy",
    "question": "What happens if the original file of a symbolic link is deleted?",
    "options": [
      "The symbolic link automatically becomes a regular file",
      "The symbolic link becomes a dangling/broken link",
      "The symbolic link is also deleted",
      "The data is moved into the symbolic link"
    ],
    "answer": 1,
    "explanation": "If the target file is deleted, the symbolic link becomes a dangling (broken) link that points to a non-existent file."
  },
  {
    "id": 138,
    "topic": "Soft Links",
    "difficulty": "Easy",
    "question": "Can symbolic links cross file systems?",
    "options": [
      "No, they are limited to the same file system",
      "Yes, because they store a path string, not an inode",
      "Yes, but only between similar file system types",
      "Only if created by root"
    ],
    "answer": 1,
    "explanation": "Symbolic links store a path string to the target, not an inode number, so they can point to files on any file system, including network mounts."
  },
  {
    "id": 139,
    "topic": "Soft Links",
    "difficulty": "Easy",
    "question": "What does 'ls -l' show for a symbolic link?",
    "options": [
      "Nothing special",
      "The link name starts with 'l' and shows the target path with an arrow",
      "The link is shown in a different color only",
      "The link shows the inode number instead of size"
    ],
    "answer": 1,
    "explanation": "Symbolic links show 'l' as the file type, and the target path is displayed after '->' at the end of the line."
  },
  {
    "id": 140,
    "topic": "Soft Links",
    "difficulty": "Easy",
    "question": "How do you create a symbolic link to a directory?",
    "options": [
      "ln -s /path/to/dir link_name",
      "ln /path/to/dir link_name",
      "ln -d /path/to/dir link_name",
      "symlink /path/to/dir link_name"
    ],
    "answer": 0,
    "explanation": "ln -s /path/to/dir link_name creates a symbolic link to a directory. Unlike hard links, symbolic links can point to directories."
  },
  {
    "id": 141,
    "topic": "Processes",
    "difficulty": "Easy",
    "question": "What is PID 1 in a Linux system?",
    "options": [
      "The kernel",
      "The init process (systemd or SysVinit)",
      "The first user process",
      "The scheduler"
    ],
    "answer": 1,
    "explanation": "PID 1 is the init process (typically systemd on modern systems), which is the first process started by the kernel and the ancestor of all other processes."
  },
  {
    "id": 142,
    "topic": "ps",
    "difficulty": "Easy",
    "question": "What does 'ps aux' show?",
    "options": [
      "Only the current user's processes",
      "All processes for all users in detailed format",
      "Only active processes",
      "Processes sorted by CPU usage"
    ],
    "answer": 1,
    "explanation": "ps aux shows all processes (a), for all users (u), in a user-oriented format (x includes processes not associated with a terminal)."
  },
  {
    "id": 143,
    "topic": "ps",
    "difficulty": "Easy",
    "question": "In 'ps aux' output, what does the STAT column 'R' mean?",
    "options": [
      "Running or runnable",
      "Resting",
      "Removed",
      "Restarting"
    ],
    "answer": 0,
    "explanation": "In the STAT column, 'R' means the process is running or on the run queue (ready to run). Other states include S (sleeping), D (uninterruptible sleep), Z (zombie), T (stopped)."
  },
  {
    "id": 144,
    "topic": "ps",
    "difficulty": "Easy",
    "question": "What does 'ps -ef' display?",
    "options": [
      "Only foreground processes",
      "All processes in full format",
      "Only effective user processes",
      "Process environment variables"
    ],
    "answer": 1,
    "explanation": "ps -ef shows all processes (-e) in full format (-f), displaying UID, PID, PPID, C, STIME, TTY, TIME, and CMD."
  },
  {
    "id": 145,
    "topic": "ps",
    "difficulty": "Easy",
    "question": "How do you find a specific process by name using ps?",
    "options": [
      "ps aux | grep processname",
      "ps -find processname",
      "ps --name processname",
      "ps -n processname"
    ],
    "answer": 0,
    "explanation": "ps aux | grep processname pipes the full process list to grep, which filters for lines containing the process name. Alternatively, pgrep can be used."
  },
  {
    "id": 146,
    "topic": "top",
    "difficulty": "Easy",
    "question": "What does the top command display?",
    "options": [
      "The top 10 largest files",
      "Real-time view of running processes and system resource usage",
      "The top-level directory structure",
      "TCP/IP connection statistics"
    ],
    "answer": 1,
    "explanation": "top provides a real-time, dynamic view of running system processes, including CPU usage, memory usage, and process information that updates every few seconds."
  },
  {
    "id": 147,
    "topic": "top",
    "difficulty": "Easy",
    "question": "How do you sort processes by memory usage in top?",
    "options": [
      "Press m",
      "Press M",
      "Press mem",
      "Press s"
    ],
    "answer": 1,
    "explanation": "Pressing 'M' (uppercase) in top sorts processes by memory usage (MEM%). Lowercase 'm' toggles memory display mode."
  },
  {
    "id": 148,
    "topic": "top",
    "difficulty": "Easy",
    "question": "How do you quit the top command?",
    "options": [
      "Press q",
      "Press Escape",
      "Press Ctrl+C",
      "Press x"
    ],
    "answer": 0,
    "explanation": "Pressing 'q' quits the top command and returns to the shell prompt."
  },
  {
    "id": 149,
    "topic": "top",
    "difficulty": "Easy",
    "question": "What does pressing 'k' in top allow you to do?",
    "options": [
      "Kill a process by entering its PID",
      "Keep a process on top",
      "Know the details of a process",
      "Kernel information display"
    ],
    "answer": 0,
    "explanation": "Pressing 'k' in top prompts you to enter a PID to kill. After entering the PID, it asks for the signal (default is SIGTERM, 15)."
  },
  {
    "id": 150,
    "topic": "top",
    "difficulty": "Easy",
    "question": "What does the load average line in top represent?",
    "options": [
      "CPU temperature averages",
      "System load averages over 1, 5, and 15 minutes",
      "Memory load averages",
      "Disk I/O averages"
    ],
    "answer": 1,
    "explanation": "Load average shows the average system load over the last 1, 5, and 15 minutes. A value equal to the number of CPU cores means the system is fully utilized."
  },
  {
    "id": 151,
    "topic": "htop",
    "difficulty": "Easy",
    "question": "What advantage does htop have over top?",
    "options": [
      "htop uses less memory",
      "htop provides a more interactive interface with mouse support and color",
      "htop shows fewer processes",
      "htop is always pre-installed"
    ],
    "answer": 1,
    "explanation": "htop offers a more user-friendly, interactive interface with mouse support, colors, horizontal/vertical scrolling, and easier process management compared to top."
  },
  {
    "id": 152,
    "topic": "htop",
    "difficulty": "Easy",
    "question": "How do you kill a process in htop?",
    "options": [
      "Press k and enter PID",
      "Select the process with arrow keys and press F9",
      "Press Ctrl+K",
      "Right-click the process"
    ],
    "answer": 1,
    "explanation": "In htop, use arrow keys to select a process, then press F9 (or k) to bring up the kill signal menu where you can choose which signal to send."
  },
  {
    "id": 153,
    "topic": "htop",
    "difficulty": "Easy",
    "question": "What does F5 do in htop?",
    "options": [
      "Filters processes",
      "Toggles between tree and list view",
      "Shows file descriptors",
      "Refreshes the display"
    ],
    "answer": 1,
    "explanation": "F5 toggles between the standard list view and a tree view that shows the parent-child process hierarchy."
  },
  {
    "id": 154,
    "topic": "htop",
    "difficulty": "Easy",
    "question": "How do you filter processes by name in htop?",
    "options": [
      "Press F4",
      "Press /",
      "Press f",
      "Press F3"
    ],
    "answer": 0,
    "explanation": "F4 in htop opens the filter prompt where you can type a filter string. Only processes matching the filter will be displayed."
  },
  {
    "id": 155,
    "topic": "htop",
    "difficulty": "Easy",
    "question": "What does F6 do in htop?",
    "options": [
      "Sorts processes by PID",
      "Opens a menu to select the sort column",
      "Shows process environment",
      "Toggles between user processes"
    ],
    "answer": 1,
    "explanation": "F6 opens a column selection menu where you can choose which column to sort by, such as PID, CPU%, MEM%, TIME+, etc."
  },
  {
    "id": 156,
    "topic": "kill",
    "difficulty": "Easy",
    "question": "What is the default signal sent by the kill command?",
    "options": [
      "SIGKILL (9)",
      "SIGTERM (15)",
      "SIGHUP (1)",
      "SIGINT (2)"
    ],
    "answer": 1,
    "explanation": "The default signal is SIGTERM (15), which politely asks the process to terminate. The process can catch this signal and perform cleanup before exiting."
  },
  {
    "id": 157,
    "topic": "kill",
    "difficulty": "Easy",
    "question": "What signal cannot be caught or ignored by a process?",
    "options": [
      "SIGTERM (15)",
      "SIGHUP (1)",
      "SIGKILL (9)",
      "SIGINT (2)"
    ],
    "answer": 2,
    "explanation": "SIGKILL (9) immediately terminates the process without allowing it to perform any cleanup. It cannot be caught, blocked, or ignored by the process."
  },
  {
    "id": 158,
    "topic": "kill",
    "difficulty": "Easy",
    "question": "How do you force kill a process with PID 1234?",
    "options": [
      "kill -9 1234",
      "kill -KILL 1234",
      "Both A and B",
      "kill -f 1234"
    ],
    "answer": 2,
    "explanation": "Both kill -9 1234 and kill -KILL 1234 send SIGKILL to process 1234. The number 9 and the name KILL refer to the same signal."
  },
  {
    "id": 159,
    "topic": "kill",
    "difficulty": "Easy",
    "question": "What does kill -1 PID send?",
    "options": [
      "SIGKILL",
      "SIGHUP",
      "SIGSTOP",
      "SIGUSR1"
    ],
    "answer": 1,
    "explanation": "kill -1 sends SIGHUP (signal hangup). This is commonly used to tell a daemon to re-read its configuration file without restarting."
  },
  {
    "id": 160,
    "topic": "kill",
    "difficulty": "Easy",
    "question": "What does 'killall nginx' do?",
    "options": [
      "Kills all processes on the system",
      "Kills all processes named 'nginx'",
      "Kills the nginx group",
      "Kills all processes owned by the nginx user"
    ],
    "answer": 1,
    "explanation": "killall sends a signal to all processes with the specified name. 'killall nginx' sends SIGTERM to all running nginx processes."
  },
  {
    "id": 161,
    "topic": "nice",
    "difficulty": "Easy",
    "question": "What is the range of nice values in Linux?",
    "options": [
      "0 to 20",
      "-20 to 19",
      "-10 to 10",
      "0 to 100"
    ],
    "answer": 1,
    "explanation": "Nice values range from -20 (highest priority) to 19 (lowest priority). Default nice value is 0. Only root can assign negative nice values."
  },
  {
    "id": 162,
    "topic": "nice",
    "difficulty": "Easy",
    "question": "How do you run a command with a nice value of 10?",
    "options": [
      "nice -10 command",
      "nice 10 command",
      "Both A and B",
      "nice --value=10 command"
    ],
    "answer": 2,
    "explanation": "Both 'nice -10 command' and 'nice 10 command' work. The nice command accepts the value with or without the dash prefix."
  },
  {
    "id": 163,
    "topic": "nice",
    "difficulty": "Easy",
    "question": "What does a higher nice value mean for a process?",
    "options": [
      "Higher priority",
      "Lower priority",
      "No change in priority",
      "The process is nicer to other processes"
    ],
    "answer": 1,
    "explanation": "A higher nice value means lower priority. A process with nice value 19 gets the least CPU time, while -20 gets the most."
  },
  {
    "id": 164,
    "topic": "nice",
    "difficulty": "Easy",
    "question": "Can a regular user decrease the nice value of a process?",
    "options": [
      "Yes, without restrictions",
      "No, only root can decrease (increase priority) a nice value",
      "Yes, but only by 1 point at a time",
      "Yes, if the process is owned by the user"
    ],
    "answer": 1,
    "explanation": "Regular users can only increase the nice value (lower priority). Only root can decrease the nice value (increase priority)."
  },
  {
    "id": 165,
    "topic": "nice",
    "difficulty": "Easy",
    "question": "What is the default nice value for a new process?",
    "options": [
      "-1",
      "0",
      "5",
      "10"
    ],
    "answer": 1,
    "explanation": "The default nice value is 0, which is the baseline priority. Users can increase it (lower priority) without root privileges."
  },
  {
    "id": 166,
    "topic": "renice",
    "difficulty": "Easy",
    "question": "What does the renice command do?",
    "options": [
      "Restarts a process with a new nice value",
      "Changes the nice value of an already running process",
      "Resets the nice value to 0",
      "Removes the nice value from a process"
    ],
    "answer": 1,
    "explanation": "renice alters the scheduling priority (nice value) of one or more running processes. Unlike nice, which is used when starting a process."
  },
  {
    "id": 167,
    "topic": "renice",
    "difficulty": "Easy",
    "question": "How do you change the nice value of PID 1234 to 5?",
    "options": [
      "renice 5 1234",
      "renice -n 5 -p 1234",
      "Both A and B",
      "renice --set 5 1234"
    ],
    "answer": 2,
    "explanation": "Both 'renice 5 1234' and 'renice -n 5 -p 1234' set the nice value of process 1234 to 5."
  },
  {
    "id": 168,
    "topic": "renice",
    "difficulty": "Easy",
    "question": "How do you change the nice value of all processes owned by user 'john'?",
    "options": [
      "renice 5 john",
      "renice -u john 5",
      "renice 5 -u john",
      "renice --user john 5"
    ],
    "answer": 2,
    "explanation": "renice 5 -u john changes the nice value of all processes owned by user 'john' to 5."
  },
  {
    "id": 169,
    "topic": "renice",
    "difficulty": "Easy",
    "question": "What does 'renice -n -10 -p 1234' require?",
    "options": [
      "No special privileges",
      "Root privileges since it decreases the nice value",
      "The process must be owned by the current user",
      "The process must be in a stopped state"
    ],
    "answer": 1,
    "explanation": "Decreasing the nice value (increasing priority) requires root privileges, as a negative nice value gives the process higher scheduling priority."
  },
  {
    "id": 170,
    "topic": "renice",
    "difficulty": "Easy",
    "question": "What happens if you try to set a nice value outside the -20 to 19 range?",
    "options": [
      "The process is killed",
      "The value is clamped to the nearest valid value",
      "An error occurs and no change is made",
      "The system crashes"
    ],
    "answer": 1,
    "explanation": "If a value outside the valid range is specified, renice clamps it to the nearest boundary (-20 or 19) rather than failing."
  },
  {
    "id": 171,
    "topic": "Jobs",
    "difficulty": "Easy",
    "question": "How do you send a running foreground process to the background?",
    "options": [
      "Press Ctrl+C",
      "Press Ctrl+Z",
      "Press Ctrl+B",
      "Press Ctrl+D"
    ],
    "answer": 1,
    "explanation": "Ctrl+Z sends SIGTSTP to suspend the process. It then becomes a stopped job that can be resumed in the background with 'bg' or foreground with 'fg'."
  },
  {
    "id": 172,
    "topic": "Jobs",
    "difficulty": "Easy",
    "question": "What does the 'bg' command do?",
    "options": [
      "Brings a job to the background",
      "Resumes a stopped job in the background",
      "Lists background jobs",
      "Kills background jobs"
    ],
    "answer": 1,
    "explanation": "bg resumes a stopped job in the background. Without arguments, it operates on the current (most recently stopped) job."
  },
  {
    "id": 173,
    "topic": "Jobs",
    "difficulty": "Easy",
    "question": "How do you list all jobs in the current shell?",
    "options": [
      "jobs",
      "ps",
      "listjobs",
      "showjobs"
    ],
    "answer": 0,
    "explanation": "jobs lists all active jobs (stopped and background) in the current shell session, showing their job number, status, and command."
  },
  {
    "id": 174,
    "topic": "Jobs",
    "difficulty": "Easy",
    "question": "How do you bring job number 2 to the foreground?",
    "options": [
      "fg 2",
      "foreground 2",
      "bring 2",
      "front 2"
    ],
    "answer": 0,
    "explanation": "fg 2 brings job number 2 to the foreground. Without a job number, fg operates on the current job."
  },
  {
    "id": 175,
    "topic": "Jobs",
    "difficulty": "Easy",
    "question": "How do you start a command directly in the background?",
    "options": [
      "command &",
      "bg command",
      "command @",
      "background command"
    ],
    "answer": 0,
    "explanation": "Appending & to a command starts it in the background. The shell prints the job number and PID, then returns to the prompt immediately."
  },
  {
    "id": 176,
    "topic": "Users",
    "difficulty": "Easy",
    "question": "Which command creates a new user in Linux?",
    "options": [
      "adduser or useradd",
      "newuser",
      "createuser",
      "mkuser"
    ],
    "answer": 0,
    "explanation": "Both adduser (a friendlier interactive script) and useradd (the low-level command) can create new users. adduser is preferred on Debian-based systems."
  },
  {
    "id": 177,
    "topic": "Users",
    "difficulty": "Easy",
    "question": "Where is user password information stored on Linux?",
    "options": [
      "/etc/passwd",
      "/etc/shadow",
      "/etc/users",
      "/etc/passwords"
    ],
    "answer": 1,
    "explanation": "Password hashes are stored in /etc/shadow, which is readable only by root. /etc/passwd contains user account information but not passwords."
  },
  {
    "id": 178,
    "topic": "Users",
    "difficulty": "Easy",
    "question": "What does 'id' command show?",
    "options": [
      "The process ID",
      "User ID (UID), group ID (GID), and group memberships",
      "The installation date",
      "The identity of the kernel"
    ],
    "answer": 1,
    "explanation": "id displays the real and effective user ID (UID), group ID (GID), and supplementary group memberships of the current user."
  },
  {
    "id": 179,
    "topic": "Users",
    "difficulty": "Easy",
    "question": "What is the UID of the root user?",
    "options": [
      "0",
      "1",
      "100",
      "1000"
    ],
    "answer": 0,
    "explanation": "The root user always has UID 0. Any user with UID 0 has root privileges regardless of the username."
  },
  {
    "id": 180,
    "topic": "Users",
    "difficulty": "Easy",
    "question": "Which command changes the current user's password?",
    "options": [
      "password",
      "chpass",
      "passwd",
      "setpass"
    ],
    "answer": 2,
    "explanation": "passwd changes the password for the current user. Root can change any user's password with 'passwd username'."
  },
  {
    "id": 181,
    "topic": "Groups",
    "difficulty": "Easy",
    "question": "Which command adds a user to a group?",
    "options": [
      "groupadd -u user group",
      "usermod -aG group user",
      "addgroup user group",
      "groupmod -a user group"
    ],
    "answer": 1,
    "explanation": "usermod -aG group user appends (-a) the user to the supplementary group (-G). Without -a, the user would be removed from other supplementary groups."
  },
  {
    "id": 182,
    "topic": "Groups",
    "difficulty": "Easy",
    "question": "How do you list the groups a user belongs to?",
    "options": [
      "groups username",
      "id username",
      "Both A and B",
      "listgroups username"
    ],
    "answer": 2,
    "explanation": "Both 'groups username' and 'id username' show the groups a user belongs to. 'id' also shows UID and GID information."
  },
  {
    "id": 183,
    "topic": "Groups",
    "difficulty": "Easy",
    "question": "Which command creates a new group?",
    "options": [
      "newgroup",
      "groupadd",
      "mkgroup",
      "creategroup"
    ],
    "answer": 1,
    "explanation": "groupadd creates a new group entry in /etc/group. On Debian-based systems, addgroup provides a more interactive interface."
  },
  {
    "id": 184,
    "topic": "Groups",
    "difficulty": "Easy",
    "question": "What is the primary group of a typical user on most Linux distributions?",
    "options": [
      "users",
      "staff",
      "A group with the same name as the user",
      "wheel"
    ],
    "answer": 2,
    "explanation": "Most modern Linux distributions create a primary group with the same name as the user (User Private Group concept) when creating a new user."
  },
  {
    "id": 185,
    "topic": "Groups",
    "difficulty": "Easy",
    "question": "What does the /etc/group file contain?",
    "options": [
      "User passwords",
      "Group name, password field, GID, and member list",
      "Only group names",
      "Group permissions"
    ],
    "answer": 1,
    "explanation": "/etc/group has four fields: group name, password (usually 'x' meaning in /etc/gshadow), GID, and comma-separated list of group members."
  },
  {
    "id": 186,
    "topic": "Environment Variables",
    "difficulty": "Easy",
    "question": "How do you display all environment variables?",
    "options": [
      "env",
      "printenv",
      "Both A and B",
      "showenv"
    ],
    "answer": 2,
    "explanation": "Both env and printenv display all environment variables. env can also be used to run a command in a modified environment."
  },
  {
    "id": 187,
    "topic": "Environment Variables",
    "difficulty": "Easy",
    "question": "How do you set an environment variable in bash?",
    "options": [
      "VAR=value",
      "export VAR=value",
      "setenv VAR value",
      "Both A and B, but only B makes it available to child processes"
    ],
    "answer": 3,
    "explanation": "VAR=value creates a shell variable. export VAR=value makes it an environment variable available to child processes. Without export, child processes won't see it."
  },
  {
    "id": 188,
    "topic": "Environment Variables",
    "difficulty": "Easy",
    "question": "What does the PATH variable contain?",
    "options": [
      "The current directory path",
      "A colon-separated list of directories searched for executables",
      "The path to the kernel",
      "The path to the home directory"
    ],
    "answer": 1,
    "explanation": "PATH contains a colon-separated list of directories that the shell searches when you type a command. For example: /usr/local/bin:/usr/bin:/bin"
  },
  {
    "id": 189,
    "topic": "Environment Variables",
    "difficulty": "Easy",
    "question": "How do you display the value of a specific environment variable HOME?",
    "options": [
      "echo $HOME",
      "printenv HOME",
      "Both A and B",
      "show HOME"
    ],
    "answer": 2,
    "explanation": "Both echo $HOME and printenv HOME display the value of the HOME variable. echo uses shell variable expansion, while printenv is a standalone command."
  },
  {
    "id": 190,
    "topic": "Environment Variables",
    "difficulty": "Easy",
    "question": "What file is commonly used to set environment variables for all users on login?",
    "options": [
      "~/.bashrc",
      "/etc/profile",
      "/etc/environment",
      "~/.profile"
    ],
    "answer": 2,
    "explanation": "/etc/environment is specifically designed for system-wide environment variable settings. /etc/profile is for login shell initialization and can also set variables."
  },
  {
    "id": 191,
    "topic": "Networking",
    "difficulty": "Easy",
    "question": "What does the ping command test?",
    "options": [
      "DNS resolution",
      "Network connectivity between two hosts using ICMP echo requests",
      "Bandwidth speed",
      "Port availability"
    ],
    "answer": 1,
    "explanation": "ping sends ICMP echo request packets to a host and waits for ICMP echo replies. It tests basic network connectivity and measures round-trip time."
  },
  {
    "id": 192,
    "topic": "ping",
    "difficulty": "Easy",
    "question": "How do you limit ping to send exactly 4 packets?",
    "options": [
      "ping -n 4 host",
      "ping -c 4 host",
      "ping --count 4 host",
      "ping -l 4 host"
    ],
    "answer": 1,
    "explanation": "ping -c 4 sends exactly 4 ICMP echo requests and then stops. Without -c, ping runs continuously until interrupted with Ctrl+C."
  },
  {
    "id": 193,
    "topic": "ping",
    "difficulty": "Easy",
    "question": "What does 'ping -i 2 host' do?",
    "options": [
      "Pings with an interval of 2 seconds",
      "Pings with a timeout of 2 seconds",
      "Sends 2 pings per second",
      "Pings on interface 2"
    ],
    "answer": 0,
    "explanation": "ping -i 2 sets the interval between ping packets to 2 seconds. The default interval is 1 second."
  },
  {
    "id": 194,
    "topic": "ping",
    "difficulty": "Easy",
    "question": "What does 100% packet loss in ping output indicate?",
    "options": [
      "The destination is processing requests slowly",
      "No ICMP replies were received from the destination",
      "The network cable is partially disconnected",
      "DNS resolution failed"
    ],
    "answer": 1,
    "explanation": "100% packet loss means none of the sent ICMP echo requests received a reply. This could indicate the host is down, firewalls are blocking ICMP, or network issues exist."
  },
  {
    "id": 195,
    "topic": "ping",
    "difficulty": "Easy",
    "question": "What does ping -s 1024 host do?",
    "options": [
      "Sends 1024 pings",
      "Sets the packet size to 1024 bytes",
      "Sets the speed to 1024 kbps",
      "Sends pings for 1024 seconds"
    ],
    "answer": 1,
    "explanation": "ping -s 1024 sets the data portion of the ICMP packet to 1024 bytes. The total packet size will be 1024 + 8 (ICMP header) + 20 (IP header) = 1052 bytes."
  },
  {
    "id": 196,
    "topic": "ip",
    "difficulty": "Easy",
    "question": "What replaced ifconfig in modern Linux distributions?",
    "options": [
      "netconf",
      "ip",
      "netstat",
      "nmap"
    ],
    "answer": 1,
    "explanation": "The ip command from the iproute2 package has replaced ifconfig (from net-tools) for network interface configuration in modern Linux."
  },
  {
    "id": 197,
    "topic": "ip",
    "difficulty": "Easy",
    "question": "How do you display IP addresses of all network interfaces?",
    "options": [
      "ip addr show",
      "ip address",
      "Both A and B",
      "ip --interfaces"
    ],
    "answer": 2,
    "explanation": "Both 'ip addr show' and 'ip address' (or 'ip a') display the IP addresses and configuration of all network interfaces."
  },
  {
    "id": 198,
    "topic": "ip",
    "difficulty": "Easy",
    "question": "What does 'ip link show' display?",
    "options": [
      "IP addresses of interfaces",
      "Network layer information including MAC addresses and interface state",
      "Routing table",
      "ARP table"
    ],
    "answer": 1,
    "explanation": "ip link show displays link layer (data link layer) information including MAC addresses, MTU, state (UP/DOWN), and interface flags."
  },
  {
    "id": 199,
    "topic": "ip",
    "difficulty": "Easy",
    "question": "How do you bring up a network interface eth0?",
    "options": [
      "ip link set eth0 up",
      "ip up eth0",
      "ip interface eth0 start",
      "ip enable eth0"
    ],
    "answer": 0,
    "explanation": "ip link set eth0 up activates (brings up) the network interface eth0. Use 'ip link set eth0 down' to deactivate it."
  },
  {
    "id": 200,
    "topic": "ip",
    "difficulty": "Easy",
    "question": "What does 'ip route show' display?",
    "options": [
      "DNS routing",
      "The kernel routing table",
      "Interface routes only",
      "Application routes"
    ],
    "answer": 1,
    "explanation": "ip route show displays the kernel's routing table, including default gateway, network routes, and their associated interfaces and metrics."
  },
  {
    "id": 201,
    "topic": "Package Managers",
    "difficulty": "Easy",
    "question": "Which package manager is used on Debian-based systems?",
    "options": [
      "yum",
      "dnf",
      "apt",
      "zypper"
    ],
    "answer": 2,
    "explanation": "apt (Advanced Package Tool) is the primary package manager for Debian-based distributions like Ubuntu, Debian, and Linux Mint."
  },
  {
    "id": 202,
    "topic": "apt",
    "difficulty": "Easy",
    "question": "What does 'apt update' do?",
    "options": [
      "Upgrades all installed packages",
      "Downloads the latest package information from repositories",
      "Updates the kernel",
      "Updates the apt package itself"
    ],
    "answer": 1,
    "explanation": "apt update downloads the latest package lists from the configured repositories. It does not upgrade any packages; use 'apt upgrade' for that."
  },
  {
    "id": 203,
    "topic": "apt",
    "difficulty": "Easy",
    "question": "What does 'apt install nginx' do?",
    "options": [
      "Downloads but does not install nginx",
      "Installs nginx and its dependencies",
      "Checks if nginx is installed",
      "Adds the nginx repository"
    ],
    "answer": 1,
    "explanation": "apt install nginx downloads and installs the nginx package along with any required dependencies from the configured repositories."
  },
  {
    "id": 204,
    "topic": "yum",
    "difficulty": "Easy",
    "question": "Which package manager is used on RHEL/CentOS systems?",
    "options": [
      "apt",
      "yum",
      "pacman",
      "emerge"
    ],
    "answer": 1,
    "explanation": "yum (Yellowdog Updater Modified) is the traditional package manager for Red Hat Enterprise Linux, CentOS, and Fedora (though Fedora now uses dnf)."
  },
  {
    "id": 205,
    "topic": "yum",
    "difficulty": "Easy",
    "question": "What does 'yum install httpd' do?",
    "options": [
      "Removes the httpd package",
      "Installs the Apache HTTP server package",
      "Updates the httpd package",
      "Searches for httpd"
    ],
    "answer": 1,
    "explanation": "yum install httpd installs the Apache HTTP Server (called httpd in RHEL/CentOS, vs apache2 in Debian/Ubuntu) and its dependencies."
  },
  {
    "id": 206,
    "topic": "dnf",
    "difficulty": "Easy",
    "question": "What is dnf?",
    "options": [
      "A Debian package manager",
      "The next-generation version of yum for RPM-based distributions",
      "A network diagnostic tool",
      "A disk formatting utility"
    ],
    "answer": 1,
    "explanation": "dnf (Dandified YUM) is the successor to yum, used in modern Fedora, RHEL 8+, and CentOS Stream. It offers better performance and dependency resolution."
  },
  {
    "id": 207,
    "topic": "rpm",
    "difficulty": "Easy",
    "question": "What does 'rpm -qa' do?",
    "options": [
      "Queries all installed packages",
      "Queries the author of a package",
      "Quits the rpm program",
      "Runs a quick audit"
    ],
    "answer": 0,
    "explanation": "rpm -qa queries all installed RPM packages, listing every package currently installed on the system."
  },
  {
    "id": 208,
    "topic": "rpm",
    "difficulty": "Easy",
    "question": "How do you check if a specific package is installed using rpm?",
    "options": [
      "rpm -q package_name",
      "rpm -i package_name",
      "rpm -c package_name",
      "rpm -s package_name"
    ],
    "answer": 0,
    "explanation": "rpm -q package_name queries whether the specified package is installed. It prints the package version if found, or an error if not."
  },
  {
    "id": 209,
    "topic": "dpkg",
    "difficulty": "Easy",
    "question": "What does 'dpkg -l' do?",
    "options": [
      "Loads a deb package",
      "Lists all installed packages",
      "Locks a package",
      "Logs package activity"
    ],
    "answer": 1,
    "explanation": "dpkg -l lists all installed packages in a table format showing package name, version, architecture, and status (ii = installed)."
  },
  {
    "id": 210,
    "topic": "dpkg",
    "difficulty": "Easy",
    "question": "How do you install a .deb file directly?",
    "options": [
      "apt install file.deb",
      "dpkg -i file.deb",
      "deb install file.deb",
      "rpm -i file.deb"
    ],
    "answer": 1,
    "explanation": "dpkg -i file.deb installs a .deb package file directly. Note that dpkg does not resolve dependencies automatically; use apt for that."
  },
  {
    "id": 211,
    "topic": "Disk Management",
    "difficulty": "Easy",
    "question": "What does 'df -h' show?",
    "options": [
      "Directory file sizes",
      "Disk space usage in human-readable format",
      "Hidden disk partitions",
      "Disk format information"
    ],
    "answer": 1,
    "explanation": "df -h displays disk space usage of file systems in human-readable format (KB, MB, GB) instead of 1K blocks."
  },
  {
    "id": 212,
    "topic": "df",
    "difficulty": "Easy",
    "question": "What does df -T show that df does not?",
    "options": [
      "Total disk size",
      "File system type",
      "Temporary files",
      "Timestamps"
    ],
    "answer": 1,
    "explanation": "df -T adds a Type column showing the file system type (ext4, xfs, tmpfs, etc.) for each mounted file system."
  },
  {
    "id": 213,
    "topic": "df",
    "difficulty": "Easy",
    "question": "What does the 'Available' column in df output represent?",
    "options": [
      "Total disk capacity",
      "Used disk space",
      "Disk space available for non-root users",
      "Free disk space"
    ],
    "answer": 2,
    "explanation": "The 'Available' column shows space available for non-root users. It may be less than the actual free space because some space is reserved for root (typically 5%)."
  },
  {
    "id": 214,
    "topic": "du",
    "difficulty": "Easy",
    "question": "What does the du command do?",
    "options": [
      "Shows disk partitions",
      "Estimates file and directory space usage",
      "Duplicates files",
      "Dumps disk data"
    ],
    "answer": 1,
    "explanation": "du (disk usage) estimates and displays the disk space used by files and directories, summarizing the total size of each directory."
  },
  {
    "id": 215,
    "topic": "du",
    "difficulty": "Easy",
    "question": "What does 'du -sh /var/log' show?",
    "options": [
      "A summary of all files in /var/log",
      "The total human-readable size of /var/log directory",
      "Only symbolic links in /var/log",
      "Hidden files in /var/log"
    ],
    "answer": 1,
    "explanation": "du -sh shows a summary (-s) of the total size in human-readable format (-h) for the /var/log directory."
  },
  {
    "id": 216,
    "topic": "du",
    "difficulty": "Easy",
    "question": "What does du -h --max-depth=1 do?",
    "options": [
      "Shows only the top-level directory size",
      "Shows sizes of directories one level deep in human-readable format",
      "Shows sizes limited to 1 GB",
      "Shows sizes with one decimal place"
    ],
    "answer": 1,
    "explanation": "--max-depth=1 limits the directory traversal to one level deep, showing sizes of immediate subdirectories plus the total."
  },
  {
    "id": 217,
    "topic": "mount",
    "difficulty": "Easy",
    "question": "How do you display all currently mounted file systems?",
    "options": [
      "mount -l",
      "mount",
      "findmnt",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "All three commands can display mounted file systems. 'mount' without arguments shows all mounts, 'mount -l' adds labels, and 'findmnt' shows them in a tree format."
  },
  {
    "id": 218,
    "topic": "mount",
    "difficulty": "Easy",
    "question": "How do you mount /dev/sdb1 to /mnt/usb?",
    "options": [
      "mount /dev/sdb1 /mnt/usb",
      "mount /mnt/usb /dev/sdb1",
      "attach /dev/sdb1 /mnt/usb",
      "connect /dev/sdb1 to /mnt/usb"
    ],
    "answer": 0,
    "explanation": "mount device mount_point mounts the specified device at the specified directory. The device is the first argument, and the mount point is the second."
  },
  {
    "id": 219,
    "topic": "mount",
    "difficulty": "Easy",
    "question": "How do you unmount a file system mounted at /mnt/usb?",
    "options": [
      "umount /mnt/usb",
      "unmount /mnt/usb",
      "mount -u /mnt/usb",
      "detach /mnt/usb"
    ],
    "answer": 0,
    "explanation": "umount /mnt/usb unmounts the file system. Note the spelling is 'umount' not 'unmount'. You can also specify the device instead of the mount point."
  },
  {
    "id": 220,
    "topic": "mount",
    "difficulty": "Easy",
    "question": "Where is the configuration for file systems to mount at boot stored?",
    "options": [
      "/etc/mount.conf",
      "/etc/fstab",
      "/etc/filesystems",
      "/boot/mounts"
    ],
    "answer": 1,
    "explanation": "/etc/fstab (file system table) contains information about file systems that are mounted at boot time, including device, mount point, file system type, and options."
  },
  {
    "id": 221,
    "topic": "Shell",
    "difficulty": "Easy",
    "question": "What is a shell in Linux?",
    "options": [
      "The kernel",
      "A command-line interpreter that provides an interface to the OS",
      "A file system type",
      "A network protocol"
    ],
    "answer": 1,
    "explanation": "A shell is a command-line interpreter that provides a user interface to the operating system. It reads commands, interprets them, and tells the OS what to do."
  },
  {
    "id": 222,
    "topic": "Shell",
    "difficulty": "Easy",
    "question": "Which of the following is NOT a Linux shell?",
    "options": [
      "bash",
      "zsh",
      "csh",
      "cmd"
    ],
    "answer": 3,
    "explanation": "cmd is the Windows command interpreter, not a Linux shell. bash, zsh, and csh are all Unix/Linux shells."
  },
  {
    "id": 223,
    "topic": "Shell",
    "difficulty": "Easy",
    "question": "How do you find out which shell you are currently using?",
    "options": [
      "echo $SHELL",
      "echo $0",
      "Both can give this information",
      "shell --current"
    ],
    "answer": 2,
    "explanation": "echo $SHELL shows your default shell, and echo $0 shows the currently running shell. They may differ if you started a different shell."
  },
  {
    "id": 224,
    "topic": "Shell",
    "difficulty": "Easy",
    "question": "What is the difference between a login shell and a non-login shell?",
    "options": [
      "There is no difference",
      "A login shell reads profile files like /etc/profile and ~/.bash_profile; a non-login shell reads ~/.bashrc",
      "A login shell has more privileges",
      "A non-login shell cannot run scripts"
    ],
    "answer": 1,
    "explanation": "Login shells read system-wide and user profile files for initialization. Non-login shells (like subshells) typically read only .bashrc for configuration."
  },
  {
    "id": 225,
    "topic": "Shell",
    "difficulty": "Easy",
    "question": "What file is sourced for an interactive non-login bash shell?",
    "options": [
      "~/.bash_profile",
      "~/.bashrc",
      "/etc/profile",
      "~/.profile"
    ],
    "answer": 1,
    "explanation": "Interactive non-login bash shells source ~/.bashrc. This is why aliases and functions are typically defined in .bashrc, which is sourced from .bash_profile."
  },
  {
    "id": 226,
    "topic": "Logs",
    "difficulty": "Easy",
    "question": "Where are most system logs stored on a traditional Linux system?",
    "options": [
      "/var/log/",
      "/etc/logs/",
      "/tmp/logs/",
      "/usr/log/"
    ],
    "answer": 0,
    "explanation": "System logs are typically stored in /var/log/. This includes files like /var/log/syslog, /var/log/auth.log, /var/log/kern.log, etc."
  },
  {
    "id": 227,
    "topic": "Logs",
    "difficulty": "Easy",
    "question": "What log file records authentication events on Debian-based systems?",
    "options": [
      "/var/log/syslog",
      "/var/log/auth.log",
      "/var/log/secure",
      "/var/log/messages"
    ],
    "answer": 1,
    "explanation": "On Debian-based systems, /var/log/auth.log records authentication events like login attempts, sudo usage, and SSH connections. On RHEL-based systems, it's /var/log/secure."
  },
  {
    "id": 228,
    "topic": "Logs",
    "difficulty": "Easy",
    "question": "What command views systemd journal logs?",
    "options": [
      "syslog",
      "journalctl",
      "logview",
      "showlog"
    ],
    "answer": 1,
    "explanation": "journalctl queries and displays logs collected by systemd-journald. It is the primary log viewing tool on systems using systemd."
  },
  {
    "id": 229,
    "topic": "Logs",
    "difficulty": "Easy",
    "question": "What does 'journalctl -f' do?",
    "options": [
      "Shows logs from the current boot only",
      "Follows the journal in real-time like tail -f",
      "Filters logs by facility",
      "Shows the first 10 log entries"
    ],
    "answer": 1,
    "explanation": "journalctl -f follows the journal output in real-time, showing new log entries as they are generated, similar to tail -f."
  },
  {
    "id": 230,
    "topic": "Logs",
    "difficulty": "Easy",
    "question": "What does 'journalctl -u nginx' show?",
    "options": [
      "Logs by user nginx",
      "Logs for the nginx systemd unit/service",
      "Logs about network connections",
      "Logs from the nginx user group"
    ],
    "answer": 1,
    "explanation": "journalctl -u nginx filters logs to show only entries for the nginx systemd unit (service), making it easy to debug specific services."
  },
  {
    "id": 231,
    "topic": "fdisk",
    "difficulty": "Easy",
    "question": "What is fdisk used for?",
    "options": [
      "Checking file system integrity",
      "Creating and managing disk partitions",
      "Formatting partitions",
      "Mounting file systems"
    ],
    "answer": 1,
    "explanation": "fdisk is a disk partition manipulation tool. It can create, delete, and modify partitions on a disk, but does not format or mount them."
  },
  {
    "id": 232,
    "topic": "fdisk",
    "difficulty": "Easy",
    "question": "How do you list the partition table of /dev/sda using fdisk?",
    "options": [
      "fdisk /dev/sda",
      "fdisk -l /dev/sda",
      "fdisk --list /dev/sda",
      "fdisk -s /dev/sda"
    ],
    "answer": 1,
    "explanation": "fdisk -l /dev/sda lists the partition table of /dev/sda without entering interactive mode. Running fdisk -l without a device shows all disks."
  },
  {
    "id": 233,
    "topic": "fdisk",
    "difficulty": "Easy",
    "question": "What command inside fdisk creates a new partition?",
    "options": [
      "c",
      "n",
      "a",
      "p"
    ],
    "answer": 1,
    "explanation": "Inside fdisk's interactive mode, 'n' creates a new partition, 'p' prints the partition table, 'd' deletes a partition, and 'w' writes changes."
  },
  {
    "id": 234,
    "topic": "fdisk",
    "difficulty": "Easy",
    "question": "What must you do after creating partitions with fdisk for them to be usable?",
    "options": [
      "Just reboot",
      "Format them with a file system (mkfs) and then mount them",
      "Nothing, they are immediately usable",
      "Run fdisk --apply"
    ],
    "answer": 1,
    "explanation": "After creating partitions, you must create a file system with mkfs (e.g., mkfs.ext4), and then mount them before they can store files."
  },
  {
    "id": 235,
    "topic": "fdisk",
    "difficulty": "Easy",
    "question": "What does the 'w' command do in fdisk?",
    "options": [
      "Wipes the disk",
      "Writes the partition table to disk and exits",
      "Shows warnings",
      "Waits for user input"
    ],
    "answer": 1,
    "explanation": "w writes the partition table changes to disk and exits fdisk. Changes are not applied until you write them, allowing you to abort with 'q'."
  },
  {
    "id": 236,
    "topic": "Terminal",
    "difficulty": "Easy",
    "question": "What does Ctrl+C do in the terminal?",
    "options": [
      "Copies selected text",
      "Sends SIGINT to interrupt the current foreground process",
      "Closes the terminal",
      "Clears the screen"
    ],
    "answer": 1,
    "explanation": "Ctrl+C sends SIGINT (interrupt signal) to the foreground process, typically causing it to terminate. This is different from Ctrl+Z which suspends a process."
  },
  {
    "id": 237,
    "topic": "Terminal",
    "difficulty": "Easy",
    "question": "What does Ctrl+D do in the terminal?",
    "options": [
      "Deletes the current line",
      "Sends EOF (End of File) to signal end of input",
      "Disconnects from the network",
      "Dumps the terminal buffer"
    ],
    "answer": 1,
    "explanation": "Ctrl+D sends EOF (End of File) character. When used at an empty prompt, it logs out of the shell. In other contexts, it signals end of input."
  },
  {
    "id": 238,
    "topic": "Terminal",
    "difficulty": "Easy",
    "question": "What does the clear command do?",
    "options": [
      "Clears the clipboard",
      "Clears the terminal screen",
      "Clears the command history",
      "Clears environment variables"
    ],
    "answer": 1,
    "explanation": "clear clears the terminal screen, giving you a clean display. The shortcut Ctrl+L achieves the same result in most terminals."
  },
  {
    "id": 239,
    "topic": "Terminal",
    "difficulty": "Easy",
    "question": "What does the 'history' command display?",
    "options": [
      "System boot history",
      "Command history of the current shell session",
      "File modification history",
      "Network connection history"
    ],
    "answer": 1,
    "explanation": "history displays the list of previously executed commands in the current shell session, numbered for easy reference with !number."
  },
  {
    "id": 240,
    "topic": "Terminal",
    "difficulty": "Easy",
    "question": "How do you run the 42nd command from your history?",
    "options": [
      "history 42",
      "!42",
      "run 42",
      "exec 42"
    ],
    "answer": 1,
    "explanation": "!42 executes the command at line 42 in the history list. Other history shortcuts include !! (last command) and !command (last command starting with 'command')."
  },
  {
    "id": 241,
    "topic": "Linux Architecture",
    "difficulty": "Medium",
    "question": "Which component of Linux architecture directly interacts with hardware?",
    "options": [
      "Shell",
      "Kernel",
      "System libraries",
      "Application layer"
    ],
    "answer": 1,
    "explanation": "The kernel is the core component that directly interacts with hardware through device drivers, managing CPU, memory, and I/O devices."
  },
  {
    "id": 242,
    "topic": "Linux Architecture",
    "difficulty": "Medium",
    "question": "What is the role of system libraries in Linux architecture?",
    "options": [
      "They manage hardware resources",
      "They provide reusable functions that applications can call instead of directly using system calls",
      "They compile source code",
      "They manage user accounts"
    ],
    "answer": 1,
    "explanation": "System libraries (like glibc) provide a layer between applications and the kernel, offering common functions (printf, malloc, etc.) that wrap system calls."
  },
  {
    "id": 243,
    "topic": "Linux Architecture",
    "difficulty": "Medium",
    "question": "What is the difference between monolithic and microkernel architectures?",
    "options": [
      "Monolithic kernels are slower",
      "Monolithic kernels run all services in kernel space; microkernels run most services in user space",
      "Microkernels are more common in Linux",
      "There is no difference"
    ],
    "answer": 1,
    "explanation": "Linux uses a monolithic kernel where all OS services run in kernel space. Microkernels (like Minix) keep only essential services in kernel space and run others in user space."
  },
  {
    "id": 244,
    "topic": "Linux Architecture",
    "difficulty": "Medium",
    "question": "What is a system call in Linux?",
    "options": [
      "A command you type in the terminal",
      "An interface through which a program requests a service from the kernel",
      "A function provided by glibc",
      "A network request"
    ],
    "answer": 1,
    "explanation": "System calls are the interface between user-space programs and the kernel. Examples include open(), read(), write(), fork(), execve(). They trigger a context switch to kernel mode."
  },
  {
    "id": 245,
    "topic": "Linux Architecture",
    "difficulty": "Medium",
    "question": "What is user space in Linux?",
    "options": [
      "The home directory of users",
      "The memory area where user applications and services run, separate from kernel space",
      "The disk space allocated to users",
      "A virtual machine environment"
    ],
    "answer": 1,
    "explanation": "User space is the memory and execution environment where normal applications run, isolated from kernel space. User processes cannot directly access kernel memory or hardware."
  },
  {
    "id": 246,
    "topic": "Linux Architecture",
    "difficulty": "Medium",
    "question": "What is the purpose of the Virtual File System (VFS) in Linux?",
    "options": [
      "To create virtual disks",
      "To provide a uniform interface for different file system types",
      "To encrypt file systems",
      "To compress files on disk"
    ],
    "answer": 1,
    "explanation": "VFS is an abstraction layer that provides a consistent interface for applications to access different file systems (ext4, xfs, NTFS, etc.) without knowing their implementation details."
  },
  {
    "id": 247,
    "topic": "Linux Architecture",
    "difficulty": "Medium",
    "question": "What does the /proc filesystem represent?",
    "options": [
      "A physical disk partition",
      "A virtual filesystem that provides kernel and process information as files",
      "A temporary file storage",
      "Process executable files"
    ],
    "answer": 1,
    "explanation": "/proc is a virtual filesystem created in memory. It provides a window into the kernel, exposing process information, hardware info, and kernel parameters as readable files."
  },
  {
    "id": 248,
    "topic": "Linux Architecture",
    "difficulty": "Medium",
    "question": "What is the role of the OOM Killer in Linux?",
    "options": [
      "It kills processes that consume too much CPU",
      "It terminates processes when the system runs out of memory to prevent a complete system crash",
      "It kills zombie processes",
      "It removes orphaned files"
    ],
    "answer": 1,
    "explanation": "The OOM (Out of Memory) Killer is invoked when the system is critically low on memory. It selects and kills processes based on a scoring system (oom_score) to free memory."
  },
  {
    "id": 249,
    "topic": "Linux Architecture",
    "difficulty": "Medium",
    "question": "What are loadable kernel modules (LKM)?",
    "options": [
      "User-space libraries",
      "Code that can be loaded and unloaded into the kernel at runtime without rebooting",
      "Kernel patches",
      "Boot loader modules"
    ],
    "answer": 1,
    "explanation": "LKMs are pieces of code (typically device drivers or filesystem drivers) that can be dynamically loaded into and unloaded from the kernel using modprobe/insmod/rmmod."
  },
  {
    "id": 250,
    "topic": "Linux Architecture",
    "difficulty": "Medium",
    "question": "What is the difference between kernel space and user space?",
    "options": [
      "Kernel space is on disk, user space is in RAM",
      "Kernel space has full hardware access and runs in privileged mode; user space is restricted and runs in unprivileged mode",
      "User space has higher priority than kernel space",
      "They share the same memory protection level"
    ],
    "answer": 1,
    "explanation": "Kernel space runs in ring 0 (privileged mode) with full hardware access. User space runs in ring 3 (unprivileged mode) and must use system calls to request kernel services."
  },
  {
    "id": 251,
    "topic": "Boot Process",
    "difficulty": "Medium",
    "question": "What is the first program that runs when a Linux system boots?",
    "options": [
      "The kernel",
      "GRUB",
      "BIOS/UEFI firmware",
      "systemd"
    ],
    "answer": 2,
    "explanation": "The BIOS/UEFI firmware runs first when power is applied. It performs POST (Power-On Self-Test), initializes hardware, and then loads the boot loader (GRUB) from the boot device."
  },
  {
    "id": 252,
    "topic": "Boot Process",
    "difficulty": "Medium",
    "question": "What is the role of GRUB in the Linux boot process?",
    "options": [
      "It manages network connections",
      "It is a boot loader that loads the Linux kernel into memory",
      "It compiles the kernel",
      "It manages user logins"
    ],
    "answer": 1,
    "explanation": "GRUB (Grand Unified Boot Loader) is a boot loader that presents a menu, loads the selected kernel and initramfs into memory, and passes control to the kernel."
  },
  {
    "id": 253,
    "topic": "Boot Process",
    "difficulty": "Medium",
    "question": "What is initramfs (initial RAM filesystem)?",
    "options": [
      "The first partition on the disk",
      "A temporary filesystem loaded into RAM that contains essential drivers and tools needed to mount the real root filesystem",
      "A backup of the root filesystem",
      "The kernel configuration file"
    ],
    "answer": 1,
    "explanation": "initramfs is a compressed archive loaded into RAM by the boot loader. It contains drivers (especially for storage and filesystems) and scripts needed to find and mount the real root filesystem."
  },
  {
    "id": 254,
    "topic": "Boot Process",
    "difficulty": "Medium",
    "question": "What is the correct order of the Linux boot process?",
    "options": [
      "Kernel -> BIOS -> GRUB -> Init -> Login",
      "BIOS -> GRUB -> Kernel -> Initramfs -> Init/Systemd -> Login",
      "GRUB -> BIOS -> Kernel -> Login",
      "BIOS -> Kernel -> GRUB -> Init -> Login"
    ],
    "answer": 1,
    "explanation": "The correct sequence is: BIOS/UEFI POST -> Boot loader (GRUB) -> Kernel loads with initramfs -> Init/Systemd starts services -> Login prompt."
  },
  {
    "id": 255,
    "topic": "Boot Process",
    "difficulty": "Medium",
    "question": "What is the purpose of the init process?",
    "options": [
      "To initialize the network",
      "To be the first user-space process that starts all other services and eventually provides the login prompt",
      "To initialize the kernel",
      "To initialize the BIOS"
    ],
    "answer": 1,
    "explanation": "init (PID 1) is the first user-space process. On modern systems, systemd takes this role. It starts all necessary services defined by the target runlevel."
  },
  {
    "id": 256,
    "topic": "Boot Process",
    "difficulty": "Medium",
    "question": "What are systemd targets?",
    "options": [
      "Network targets for routing",
      "Replacement for SysVinit runlevels that group units logically",
      "Storage targets for LVM",
      "Security targets for firewalls"
    ],
    "answer": 1,
    "explanation": "systemd targets replace traditional runlevels. For example, multi-user.target replaces runlevel 3, and graphical.target replaces runlevel 5."
  },
  {
    "id": 257,
    "topic": "Boot Process",
    "difficulty": "Medium",
    "question": "How do you check the default systemd boot target?",
    "options": [
      "systemctl default",
      "systemctl get-default",
      "systemctl show-default",
      "runlevel --default"
    ],
    "answer": 1,
    "explanation": "systemctl get-default shows the default target (like graphical.target or multi-user.target) that the system boots into."
  },
  {
    "id": 258,
    "topic": "Boot Process",
    "difficulty": "Medium",
    "question": "What does 'systemctl isolate multi-user.target' do?",
    "options": [
      "Shows the multi-user target configuration",
      "Changes the current system state to multi-user.target, stopping services not needed in that target",
      "Creates a new multi-user target",
      "Isolates the multi-user target from the network"
    ],
    "answer": 1,
    "explanation": "isolate changes the current system state to the specified target, starting/stopping services as needed. This is equivalent to changing runlevels in SysVinit."
  },
  {
    "id": 259,
    "topic": "Boot Process",
    "difficulty": "Medium",
    "question": "What file controls GRUB boot menu configuration?",
    "options": [
      "/boot/grub/grub.conf",
      "/etc/default/grub",
      "/boot/grub/grub.cfg (generated from /etc/default/grub)",
      "/etc/grub/menu.lst"
    ],
    "answer": 2,
    "explanation": "grub.cfg is the actual configuration file read by GRUB, but it is auto-generated. Users edit /etc/default/grub and then run 'grub-mkconfig' or 'update-grub' to regenerate grub.cfg."
  },
  {
    "id": 260,
    "topic": "Boot Process",
    "difficulty": "Medium",
    "question": "What is the difference between cold boot and warm boot?",
    "options": [
      "Cold boot is faster",
      "Cold boot powers on from zero state (POST); warm boot skips POST and reloads the OS",
      "Warm boot updates the BIOS",
      "There is no difference"
    ],
    "answer": 1,
    "explanation": "Cold boot (power-on) performs full POST and initializes all hardware. Warm boot (reboot) may skip some POST steps and reloads the OS more quickly."
  },
  {
    "id": 261,
    "topic": "GRUB",
    "difficulty": "Medium",
    "question": "How do you modify the GRUB timeout?",
    "options": [
      "Edit /boot/grub/grub.cfg directly",
      "Edit GRUB_TIMEOUT in /etc/default/grub and run update-grub",
      "Run grub --timeout 5",
      "Edit /etc/grub.conf"
    ],
    "answer": 1,
    "explanation": "You should edit /etc/default/grub to set GRUB_TIMEOUT=value (in seconds), then run update-grub (Debian) or grub2-mkconfig (RHEL) to apply changes."
  },
  {
    "id": 262,
    "topic": "GRUB",
    "difficulty": "Medium",
    "question": "What is GRUB2 rescue mode?",
    "options": [
      "A mode to rescue deleted files",
      "A minimal GRUB shell that loads when GRUB cannot find its configuration",
      "A system recovery mode",
      "A network boot mode"
    ],
    "answer": 1,
    "explanation": "GRUB rescue mode is a minimal shell that loads when GRUB cannot find its normal configuration file. It provides basic commands to manually locate and boot the kernel."
  },
  {
    "id": 263,
    "topic": "GRUB",
    "difficulty": "Medium",
    "question": "How do you reset a forgotten root password using GRUB?",
    "options": [
      "Edit the GRUB entry to add 'init=/bin/bash' to the kernel line, boot, and then change the password",
      "Reinstall GRUB from a USB",
      "Boot into Windows and reset it",
      "Remove the GRUB password"
    ],
    "answer": 0,
    "explanation": "By editing the GRUB boot entry to add 'init=/bin/bash' or 'rd.break', you can get a root shell without password, then remount the root filesystem and change the password."
  },
  {
    "id": 264,
    "topic": "GRUB",
    "difficulty": "Medium",
    "question": "What command regenerates the GRUB configuration file on RHEL-based systems?",
    "options": [
      "update-grub",
      "grub2-mkconfig -o /boot/grub2/grub.cfg",
      "grub-rebuild",
      "mkgrub"
    ],
    "answer": 1,
    "explanation": "On RHEL/CentOS/Fedora, use grub2-mkconfig -o /boot/grub2/grub.cfg. On Debian/Ubuntu, update-grub is a wrapper that calls grub-mkconfig."
  },
  {
    "id": 265,
    "topic": "GRUB",
    "difficulty": "Medium",
    "question": "What does 'GRUB_CMDLINE_LINUX_DEFAULT' in /etc/default/grub control?",
    "options": [
      "GRUB menu appearance",
      "Kernel command-line parameters for normal boot",
      "GRUB timeout settings",
      "GRUB password settings"
    ],
    "answer": 1,
    "explanation": "GRUB_CMDLINE_LINUX_DEFAULT specifies kernel parameters passed during normal boot. For example, adding 'quiet splash' suppresses verbose boot messages."
  },
  {
    "id": 266,
    "topic": "awk",
    "difficulty": "Medium",
    "question": "What does 'awk '{print $1}' file.txt' do?",
    "options": [
      "Prints the first line of the file",
      "Prints the first field of each line",
      "Prints the first character of each line",
      "Prints lines starting with '1'"
    ],
    "answer": 1,
    "explanation": "awk splits each line into fields (by default on whitespace). $1 refers to the first field, $2 the second, etc. $0 is the entire line."
  },
  {
    "id": 267,
    "topic": "awk",
    "difficulty": "Medium",
    "question": "How do you change the field separator in awk to a colon?",
    "options": [
      "awk -s ':' '{print $1}' file",
      "awk -F: '{print $1}' file",
      "awk --sep=':' '{print $1}' file",
      "awk -d ':' '{print $1}' file"
    ],
    "answer": 1,
    "explanation": "awk -F: sets the field separator to a colon. This is commonly used for parsing /etc/passwd. You can also use -F ':' with quotes."
  },
  {
    "id": 268,
    "topic": "awk",
    "difficulty": "Medium",
    "question": "What does 'awk '$3 > 100 {print $0}' file' do?",
    "options": [
      "Prints lines that are longer than 100 characters",
      "Prints entire lines where the third field is greater than 100",
      "Prints 100 lines starting from the third",
      "Counts lines where the third field exceeds 100"
    ],
    "answer": 1,
    "explanation": "This awk command uses a condition ($3 > 100) as a pattern. Only lines where the third field is greater than 100 will have the action {print $0} applied."
  },
  {
    "id": 269,
    "topic": "awk",
    "difficulty": "Medium",
    "question": "What does the BEGIN block in awk do?",
    "options": [
      "Starts a loop",
      "Executes before any input is read, used for initialization",
      "Marks the beginning of the file",
      "Begins a new output file"
    ],
    "answer": 1,
    "explanation": "BEGIN { } executes before any input lines are processed. It's typically used to set variable values, print headers, or change field separators."
  },
  {
    "id": 270,
    "topic": "awk",
    "difficulty": "Medium",
    "question": "What does 'awk '{sum += $1} END {print sum}' file' do?",
    "options": [
      "Counts the number of lines",
      "Sums all values in the first column and prints the total",
      "Prints the sum of all fields",
      "Averages the first column"
    ],
    "answer": 1,
    "explanation": "This accumulates the sum of the first field across all lines. The END block executes after all input is processed, printing the final sum."
  },
  {
    "id": 271,
    "topic": "awk",
    "difficulty": "Medium",
    "question": "How do you print the last field of each line in awk?",
    "options": [
      "awk '{print $last}' file",
      "awk '{print $NF}' file",
      "awk '{print $-1}' file",
      "awk '{print $END}' file"
    ],
    "answer": 1,
    "explanation": "NF is a built-in variable representing the Number of Fields in the current line. $NF refers to the last field, regardless of how many fields there are."
  },
  {
    "id": 272,
    "topic": "awk",
    "difficulty": "Medium",
    "question": "What does 'awk 'NR==5' file' do?",
    "options": [
      "Prints lines 1-5",
      "Prints only line 5",
      "Skips the first 5 lines",
      "Prints every 5th line"
    ],
    "answer": 1,
    "explanation": "NR is the Number of Records (line number). NR==5 is true only for line 5, so the default action (print the line) is applied only to that line."
  },
  {
    "id": 273,
    "topic": "sed",
    "difficulty": "Medium",
    "question": "What does 'sed 's/old/new/' file' do?",
    "options": [
      "Deletes 'old' from the file",
      "Substitutes the first occurrence of 'old' with 'new' on each line",
      "Substitutes all occurrences of 'old' with 'new'",
      "Searches for 'old' and 'new'"
    ],
    "answer": 1,
    "explanation": "sed 's/old/new/' substitutes the first occurrence of 'old' with 'new' on each line. Add the 'g' flag (s/old/new/g) for global replacement on each line."
  },
  {
    "id": 274,
    "topic": "sed",
    "difficulty": "Medium",
    "question": "How do you make sed modify a file in-place?",
    "options": [
      "sed -e 's/old/new/' file",
      "sed -i 's/old/new/' file",
      "sed -w 's/old/new/' file",
      "sed --edit 's/old/new/' file"
    ],
    "answer": 1,
    "explanation": "sed -i edits the file in-place. Without -i, sed outputs to stdout. It's recommended to use -i.bak to create a backup: sed -i.bak 's/old/new/' file."
  },
  {
    "id": 275,
    "topic": "sed",
    "difficulty": "Medium",
    "question": "How do you delete lines 3 to 5 from a file using sed?",
    "options": [
      "sed 'd 3,5' file",
      "sed '3,5d' file",
      "sed --delete 3-5 file",
      "sed 'remove 3:5' file"
    ],
    "answer": 1,
    "explanation": "sed '3,5d' applies the delete command (d) to lines 3 through 5. The address range '3,5' specifies which lines the command applies to."
  },
  {
    "id": 276,
    "topic": "sed",
    "difficulty": "Medium",
    "question": "What does 'sed -n '/pattern/p' file' do?",
    "options": [
      "Deletes lines matching the pattern",
      "Prints only lines matching the pattern (suppressing default output)",
      "Prints lines before the pattern",
      "Substitutes the pattern"
    ],
    "answer": 1,
    "explanation": "-n suppresses automatic printing. The /pattern/p command prints only lines matching 'pattern'. This is functionally similar to grep but more flexible."
  },
  {
    "id": 277,
    "topic": "sed",
    "difficulty": "Medium",
    "question": "How do you substitute 'old' with 'new' only on lines containing 'pattern'?",
    "options": [
      "sed '/pattern/s/old/new/' file",
      "sed 's/old/new/ /pattern/' file",
      "sed 's/old/new/g && /pattern/' file",
      "sed 'pattern s/old/new/' file"
    ],
    "answer": 0,
    "explanation": "The address '/pattern/' restricts the substitution command to only lines matching 'pattern'. Lines not matching the pattern are left unchanged."
  },
  {
    "id": 278,
    "topic": "sed",
    "difficulty": "Medium",
    "question": "What does 'sed 's/[0-9]//g' file' do?",
    "options": [
      "Replaces digits with the letter g",
      "Removes all digits from each line",
      "Replaces the number 0 with nothing",
      "Removes the first digit on each line"
    ],
    "answer": 1,
    "explanation": "[0-9] matches any digit, and replacing with nothing (//) effectively removes all digits. The 'g' flag ensures all occurrences on each line are removed."
  },
  {
    "id": 279,
    "topic": "sed",
    "difficulty": "Medium",
    "question": "What does the & character represent in the sed replacement string?",
    "options": [
      "A literal ampersand",
      "The matched text from the search pattern",
      "End of line",
      "A delimiter"
    ],
    "answer": 1,
    "explanation": "In sed's replacement string, & represents the entire matched text. For example, 's/[0-9]*/[&]/' wraps digit sequences in brackets."
  },
  {
    "id": 280,
    "topic": "sed",
    "difficulty": "Medium",
    "question": "How do you append a line after each line matching a pattern in sed?",
    "options": [
      "sed '/pattern/a\\New Line' file",
      "sed '/pattern/append New Line' file",
      "sed '/pattern/+ New Line' file",
      "sed '/pattern/A New Line' file"
    ],
    "answer": 0,
    "explanation": "The 'a' command appends text after the matched line. The backslash after 'a' is required in some sed versions. Use 'i' to insert text before the matched line."
  },
  {
    "id": 281,
    "topic": "cut",
    "difficulty": "Medium",
    "question": "How do you extract the first field from a colon-delimited file?",
    "options": [
      "cut -f1 -d: file",
      "cut -d: -f1 file",
      "Both A and B",
      "cut --field1 --delim=: file"
    ],
    "answer": 2,
    "explanation": "Both 'cut -f1 -d: file' and 'cut -d: -f1 file' extract the first field. -d specifies the delimiter and -f specifies the field number."
  },
  {
    "id": 282,
    "topic": "cut",
    "difficulty": "Medium",
    "question": "How do you extract characters 1-10 from each line using cut?",
    "options": [
      "cut -f1-10 file",
      "cut -c1-10 file",
      "cut -n1-10 file",
      "cut --chars 1,10 file"
    ],
    "answer": 1,
    "explanation": "cut -c1-10 extracts characters 1 through 10 from each line. The -c option selects characters by position rather than by delimiter-based fields."
  },
  {
    "id": 283,
    "topic": "cut",
    "difficulty": "Medium",
    "question": "What does 'cut -d' ' ' -f2,4 file' extract?",
    "options": [
      "Fields 2 through 4",
      "Only fields 2 and 4 using space as delimiter",
      "Fields 2 and 4 using tab as delimiter",
      "All fields except 2 and 4"
    ],
    "answer": 1,
    "explanation": "-d' ' sets the delimiter to a space, and -f2,4 extracts only the 2nd and 4th fields. To get a range, use -f2-4."
  },
  {
    "id": 284,
    "topic": "cut",
    "difficulty": "Medium",
    "question": "What does 'cut -d: -f1-3 /etc/passwd' show?",
    "options": [
      "Fields 1, 2, and 3 from each line of /etc/passwd",
      "Only field 1 through field 3 (first 3 fields)",
      "Fields 1 and 3",
      "All fields except the first 3"
    ],
    "answer": 0,
    "explanation": "cut -f1-3 extracts fields 1, 2, and 3 from /etc/passwd (username, password placeholder, UID) using colon as the delimiter."
  },
  {
    "id": 285,
    "topic": "cut",
    "difficulty": "Medium",
    "question": "What is the default delimiter for cut?",
    "options": [
      "Space",
      "Colon",
      "Tab",
      "Comma"
    ],
    "answer": 2,
    "explanation": "The default delimiter for cut is tab. You must use -d to specify a different delimiter like colon, comma, or space."
  },
  {
    "id": 286,
    "topic": "sort",
    "difficulty": "Medium",
    "question": "How do you sort a file numerically?",
    "options": [
      "sort -n file",
      "sort --numeric file",
      "sort -number file",
      "sort -i file"
    ],
    "answer": 0,
    "explanation": "sort -n sorts numerically. Without -n, sort uses lexicographic order where '10' comes before '2' because '1' is lexicographically less than '2'."
  },
  {
    "id": 287,
    "topic": "sort",
    "difficulty": "Medium",
    "question": "What does 'sort -r file' do?",
    "options": [
      "Removes duplicate lines then sorts",
      "Sorts in reverse (descending) order",
      "Sorts randomly",
      "Removes blank lines then sorts"
    ],
    "answer": 1,
    "explanation": "sort -r reverses the sort order, producing descending output. Combined with -n, it gives a numerical descending sort."
  },
  {
    "id": 288,
    "topic": "sort",
    "difficulty": "Medium",
    "question": "How do you sort by the 3rd field in a colon-delimited file?",
    "options": [
      "sort -f3 -d: file",
      "sort -t: -k3 file",
      "sort --key=3 --delim=: file",
      "sort -c3 file"
    ],
    "answer": 1,
    "explanation": "sort -t: -k3 uses colon as the field separator (-t:) and sorts by the 3rd field (-k3). You can specify more complex keys like -k3,3n for numeric sort on field 3."
  },
  {
    "id": 289,
    "topic": "sort",
    "difficulty": "Medium",
    "question": "What does 'sort -u file' do?",
    "options": [
      "Sorts in Unicode mode",
      "Sorts and removes duplicate lines",
      "Uncompresses the file before sorting",
      "Shows only unique characters"
    ],
    "answer": 1,
    "explanation": "sort -u (unique) sorts the file and removes duplicate lines, keeping only one instance of each unique line."
  },
  {
    "id": 290,
    "topic": "sort",
    "difficulty": "Medium",
    "question": "What does 'sort -k2,2n -t' ' ' file' do?",
    "options": [
      "Sorts by the second field numerically using space as delimiter",
      "Sorts fields 2 through 2n",
      "Sorts by the second and nth fields",
      "Sorts in non-numeric mode"
    ],
    "answer": 0,
    "explanation": "-k2,2n means sort key starts at field 2, ends at field 2, with numeric sort. -t' ' sets the delimiter to space."
  },
  {
    "id": 291,
    "topic": "uniq",
    "difficulty": "Medium",
    "question": "What condition must be met for uniq to remove duplicates?",
    "options": [
      "The file must be sorted first",
      "No condition, uniq works on any file",
      "The duplicates must be on adjacent lines",
      "Both A and C are correct"
    ],
    "answer": 3,
    "explanation": "uniq only removes adjacent duplicate lines. The file should be sorted first (sort file | uniq) to ensure all duplicates are adjacent."
  },
  {
    "id": 292,
    "topic": "uniq",
    "difficulty": "Medium",
    "question": "What does 'uniq -c' show?",
    "options": [
      "Only unique lines",
      "A count of occurrences prefixed to each line",
      "Compressed output",
      "Character-level uniqueness"
    ],
    "answer": 1,
    "explanation": "uniq -c prefixes each line with the number of times it occurs consecutively. This is useful for frequency analysis after sorting."
  },
  {
    "id": 293,
    "topic": "uniq",
    "difficulty": "Medium",
    "question": "What does 'uniq -d' display?",
    "options": [
      "Only duplicate lines (one per group)",
      "Only unique (non-duplicate) lines",
      "All duplicate lines",
      "Deletes all lines"
    ],
    "answer": 0,
    "explanation": "uniq -d shows only lines that are duplicated (one instance per duplicate group). Use -D to show all instances of duplicate lines."
  },
  {
    "id": 294,
    "topic": "uniq",
    "difficulty": "Medium",
    "question": "What does 'uniq -u' show?",
    "options": [
      "Only unique lines that appear exactly once",
      "All unique and duplicate lines",
      "Uncompressed output",
      "Lines with unique characters"
    ],
    "answer": 0,
    "explanation": "uniq -u shows only lines that are not duplicated, i.e., lines that appear exactly once in the input."
  },
  {
    "id": 295,
    "topic": "uniq",
    "difficulty": "Medium",
    "question": "How do you do a case-insensitive comparison with uniq?",
    "options": [
      "uniq -i",
      "uniq --ignore-case",
      "Both A and B",
      "uniq -c"
    ],
    "answer": 2,
    "explanation": "Both uniq -i and uniq --ignore-case perform case-insensitive comparison, treating 'Hello' and 'hello' as duplicates."
  },
  {
    "id": 296,
    "topic": "wc",
    "difficulty": "Medium",
    "question": "What does 'wc -l file' show?",
    "options": [
      "The length of the longest line",
      "The number of lines in the file",
      "The last line of the file",
      "Lines with only letters"
    ],
    "answer": 1,
    "explanation": "wc -l counts and displays the number of newline characters, which equals the number of lines in the file."
  },
  {
    "id": 297,
    "topic": "wc",
    "difficulty": "Medium",
    "question": "What does 'wc -w file' count?",
    "options": [
      "Windows (line endings)",
      "Words in the file",
      "Warnings in the file",
      "Whitespace characters"
    ],
    "answer": 1,
    "explanation": "wc -w counts the number of words in the file. A word is defined as a sequence of non-whitespace characters separated by whitespace."
  },
  {
    "id": 298,
    "topic": "wc",
    "difficulty": "Medium",
    "question": "What does 'wc' without options display?",
    "options": [
      "Only line count",
      "Line count, word count, and byte count",
      "Only word count",
      "File size only"
    ],
    "answer": 1,
    "explanation": "wc without options displays three numbers: line count, word count, and byte count, in that order."
  },
  {
    "id": 299,
    "topic": "wc",
    "difficulty": "Medium",
    "question": "What does 'wc -c file' show?",
    "options": [
      "Character count (same as byte count for ASCII)",
      "Column count",
      "Compressed size",
      "Chunk count"
    ],
    "answer": 0,
    "explanation": "wc -c counts bytes. For ASCII text, this equals the character count. For UTF-8 with multi-byte characters, use 'wc -m' for the true character count."
  },
  {
    "id": 300,
    "topic": "wc",
    "difficulty": "Medium",
    "question": "What does 'wc -L file' show?",
    "options": [
      "Total lines",
      "Length of the longest line",
      "Last line content",
      "Logical line count"
    ],
    "answer": 1,
    "explanation": "wc -L displays the length (number of characters) of the longest line in the file. This is useful for checking if lines exceed a certain length."
  },
  {
    "id": 301,
    "topic": "xargs",
    "difficulty": "Medium",
    "question": "What does xargs do?",
    "options": [
      "Parses XML arguments",
      "Reads items from stdin and converts them into arguments for a command",
      "Creates aliases for commands",
      "Manages execution arguments"
    ],
    "answer": 1,
    "explanation": "xargs reads items from standard input (separated by spaces, newlines, etc.) and executes a command with those items as arguments, handling argument list length limits."
  },
  {
    "id": 302,
    "topic": "xargs",
    "difficulty": "Medium",
    "question": "What does 'find . -name '*.log' | xargs rm' do?",
    "options": [
      "Finds and lists all .log files",
      "Finds all .log files and passes them as arguments to rm for deletion",
      "Finds .log files and renames them",
      "Creates .log files"
    ],
    "answer": 1,
    "explanation": "xargs takes the list of .log files from find's output and passes them as arguments to rm, deleting them. This is more efficient than find -exec rm {} \\; for many files."
  },
  {
    "id": 303,
    "topic": "xargs",
    "difficulty": "Medium",
    "question": "What does 'xargs -p' do?",
    "options": [
      "Runs in parallel",
      "Prompts the user before executing each command",
      "Shows progress",
      "Parses the input"
    ],
    "answer": 1,
    "explanation": "xargs -p (interactive) prompts the user for confirmation before running each command, showing the exact command that will be executed."
  },
  {
    "id": 304,
    "topic": "xargs",
    "difficulty": "Medium",
    "question": "What problem does xargs solve with 'Argument list too long' errors?",
    "options": [
      "It compresses the arguments",
      "It splits the input into batches that fit within the system's argument length limit",
      "It ignores extra arguments",
      "It stores arguments in a file"
    ],
    "answer": 1,
    "explanation": "xargs automatically breaks a long list of arguments into smaller batches that fit within the system's maximum argument length, executing the command multiple times if needed."
  },
  {
    "id": 305,
    "topic": "xargs",
    "difficulty": "Medium",
    "question": "What does 'xargs -n 1' do?",
    "options": [
      "Runs the command only once",
      "Uses one argument per command execution",
      "Excludes the first argument",
      "Shows only one result"
    ],
    "answer": 1,
    "explanation": "xargs -n 1 passes exactly one argument per command invocation. This is useful when the command only accepts one argument at a time."
  },
  {
    "id": 306,
    "topic": "xargs",
    "difficulty": "Medium",
    "question": "How do you handle filenames with spaces using xargs?",
    "options": [
      "xargs -s",
      "xargs -0 (with find -print0)",
      "xargs --spaces",
      "xargs -e"
    ],
    "answer": 1,
    "explanation": "Using find -print0 (null-delimited output) with xargs -0 (null-delimited input) safely handles filenames containing spaces, newlines, and special characters."
  },
  {
    "id": 307,
    "topic": "Shell Scripting",
    "difficulty": "Medium",
    "question": "What is the correct shebang line for a bash script?",
    "options": [
      "#!/bin/sh",
      "#!/bin/bash",
      "#!bash",
      "//bin/bash"
    ],
    "answer": 1,
    "explanation": "#!/bin/bash specifies that the script should be interpreted by /bin/bash. #!/bin/sh would use the system's default shell, which may not be bash."
  },
  {
    "id": 308,
    "topic": "Shell Scripting",
    "difficulty": "Medium",
    "question": "How do you check if a file exists in a bash script?",
    "options": [
      "if [ -e file ]; then",
      "if exist file; then",
      "if file exists; then",
      "if [ -f file ]; then"
    ],
    "answer": 0,
    "explanation": "[ -e file ] checks if the file exists (any type). [ -f file ] specifically checks for a regular file. Both are valid, but -e is more general."
  },
  {
    "id": 309,
    "topic": "Shell Scripting",
    "difficulty": "Medium",
    "question": "What does '$#' represent in a bash script?",
    "options": [
      "The name of the script",
      "The number of arguments passed to the script",
      "All arguments as a single string",
      "The exit status of the last command"
    ],
    "answer": 1,
    "explanation": "$# gives the number of positional parameters (arguments) passed to the script or function. $0 is the script name, $@ is all arguments."
  },
  {
    "id": 310,
    "topic": "Shell Scripting",
    "difficulty": "Medium",
    "question": "What is the difference between $* and $@ in bash?",
    "options": [
      "There is no difference",
      "$* expands to all arguments as a single word; $@ expands to separate words preserving argument boundaries",
      "$* is for functions, $@ is for scripts",
      "$@ includes $0, $* does not"
    ],
    "answer": 1,
    "explanation": "\"$*\" expands to \"$1 $2 $3...\" (single string), while \"$@\" expands to \"$1\" \"$2\" \"$3\"... (separate strings), preserving the original argument boundaries."
  },
  {
    "id": 311,
    "topic": "Shell Scripting",
    "difficulty": "Medium",
    "question": "What does '$?' represent in bash?",
    "options": [
      "The process ID of the script",
      "The exit status of the last executed command",
      "The current working directory",
      "The number of background jobs"
    ],
    "answer": 1,
    "explanation": "$? returns the exit status of the most recently executed command. 0 indicates success, non-zero indicates failure or an error code."
  },
  {
    "id": 312,
    "topic": "Shell Scripting",
    "difficulty": "Medium",
    "question": "How do you read user input in a bash script?",
    "options": [
      "input var",
      "read var",
      "scanf var",
      "get var"
    ],
    "answer": 1,
    "explanation": "read var reads a line from standard input and assigns it to the variable var. Use 'read -p \"Prompt: \" var' to display a prompt."
  },
  {
    "id": 313,
    "topic": "Shell Scripting",
    "difficulty": "Medium",
    "question": "What does 'set -e' do in a bash script?",
    "options": [
      "Enables echo for debugging",
      "Exits the script immediately if any command returns a non-zero exit status",
      "Enables error logging",
      "Sets the environment to production"
    ],
    "answer": 1,
    "explanation": "set -e makes the script exit immediately if any command exits with a non-zero status, preventing the script from continuing after a failure."
  },
  {
    "id": 314,
    "topic": "Shell Scripting",
    "difficulty": "Medium",
    "question": "What does 'set -x' do in a bash script?",
    "options": [
      "Exports all variables",
      "Prints each command before executing it (debug mode)",
      "Excludes certain lines from execution",
      "Sets the script to execute in the background"
    ],
    "answer": 1,
    "explanation": "set -x enables debug mode, printing each command (with variable expansions) to stderr before executing it. This is invaluable for troubleshooting scripts."
  }
]