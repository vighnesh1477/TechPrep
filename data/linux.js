export default [
    {
        id: "linux-1",
        question: "Which command displays the absolute path of your current working directory?",
        options: [
            "cd",
            "dir",
            "pwd",
            "path"
        ],
        answer: 2,
        explanation: "The pwd (Print Working Directory) command outputs the full absolute path of the current directory you are in.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-2",
        question: "What does the 'ls -a' command do that 'ls' alone does not?",
        options: [
            "Shows only directories",
            "Displays file sizes in human-readable format",
            "Lists hidden files along with regular files",
            "Sorts files by modification time"
        ],
        answer: 2,
        explanation: "The -a flag lists all entries including hidden files (those starting with a dot), which are not shown by default.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-3",
        question: "Which directory in the FHS contains device files representing hardware components?",
        options: [
            "/dev",
            "/etc",
            "/proc",
            "/sys"
        ],
        answer: 0,
        explanation: "The /dev directory contains special device files that represent hardware devices and virtual devices in the system.",
        difficulty: "Easy",
        topic: "Directory Structure"
    },
    {
        id: "linux-4",
        question: "Which command is used to create a new empty file without opening an editor?",
        options: [
            "newfile",
            "touch",
            "create",
            "mkfile"
        ],
        answer: 1,
        explanation: "The touch command creates an empty file if it does not exist, or updates the timestamp if it does.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-5",
        question: "What is the primary purpose of the /boot directory in a Linux system?",
        options: [
            "Storing user login scripts",
            "Holding the kernel, initramfs, and bootloader files",
            "Containing system log files",
            "Storing temporary application data"
        ],
        answer: 1,
        explanation: "The /boot directory contains the Linux kernel, initial RAM disk (initramfs), and the GRUB bootloader configuration files needed for system startup.",
        difficulty: "Easy",
        topic: "Directory Structure"
    },
    {
        id: "linux-6",
        question: "Which command recursively removes a directory and all its contents?",
        options: [
            "rmdir -a /path",
            "rm -r /path",
            "del -f /path",
            "rm -d /path"
        ],
        answer: 1,
        explanation: "The rm -r command recursively deletes a directory and all files and subdirectories within it.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-7",
        question: "In Linux file permissions, what does the 'r' permission on a file allow a user to do?",
        options: [
            "Rename the file",
            "Read or view the contents of the file",
            "Execute the file as a program",
            "Delete the file"
        ],
        answer: 1,
        explanation: "The 'r' (read) permission on a file allows a user to open and view the contents of that file.",
        difficulty: "Easy",
        topic: "Permissions"
    },
    {
        id: "linux-8",
        question: "Which symbol represents the root user's home directory in Linux?",
        options: [
            "~root",
            "/root",
            "/home/root",
            "/root/home"
        ],
        answer: 1,
        explanation: "The root user's home directory is /root, located directly under the filesystem root, not under /home.",
        difficulty: "Easy",
        topic: "Directory Structure"
    },
    {
        id: "linux-9",
        question: "What is the default shell assigned to new users on most modern Linux distributions?",
        options: [
            "sh",
            "dash",
            "bash",
            "zsh"
        ],
        answer: 2,
        explanation: "Bash (Bourne Again Shell) is the default shell for most Linux distributions unless explicitly changed during installation.",
        difficulty: "Easy",
        topic: "Shell"
    },
    {
        id: "linux-10",
        question: "Which command is used to display the first 10 lines of a file by default?",
        options: [
            "top",
            "head",
            "first",
            "begin"
        ],
        answer: 1,
        explanation: "The head command outputs the first 10 lines of a file by default, and you can change this with the -n flag.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-11",
        question: "Which package manager is natively used on Debian-based systems like Ubuntu?",
        options: [
            "yum",
            "dnf",
            "apt",
            "zypper"
        ],
        answer: 2,
        explanation: "APT (Advanced Package Tool) is the primary package manager used on Debian and its derivatives like Ubuntu.",
        difficulty: "Easy",
        topic: "Package Managers"
    },
    {
        id: "linux-12",
        question: "What does the 'cd -' command do?",
        options: [
            "Removes the current directory",
            "Switches to the previous working directory",
            "Creates a new subdirectory",
            "Moves up one directory level"
        ],
        answer: 1,
        explanation: "The 'cd -' command switches back to the previous working directory, essentially toggling between the last two directories.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-13",
        question: "Which file stores the hashed passwords of users in modern Linux systems?",
        options: [
            "/etc/passwd",
            "/etc/shadow",
            "/etc/group",
            "/etc/security/passwd"
        ],
        answer: 1,
        explanation: "Modern Linux systems store password hashes in /etc/shadow, which is readable only by root for security reasons.",
        difficulty: "Easy",
        topic: "Users"
    },
    {
        id: "linux-14",
        question: "What is the function of the 'man' command in Linux?",
        options: [
            "Manages user accounts",
            "Displays the manual pages for commands",
            "Creates manual backups of files",
            "Monitors system resource usage"
        ],
        answer: 1,
        explanation: "The 'man' command displays the built-in manual pages (documentation) for almost any command, system call, or configuration file.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-15",
        question: "Which command counts the total number of lines, words, and bytes in a file?",
        options: [
            "count",
            "wc",
            "stat",
            "sum"
        ],
        answer: 1,
        explanation: "The wc (word count) command displays the number of lines, words, and bytes in a file by default.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-16",
        question: "Which key combination sends an interrupt signal (SIGINT) to the currently running foreground process?",
        options: [
            "Ctrl+C",
            "Ctrl+Z",
            "Ctrl+D",
            "Ctrl+S"
        ],
        answer: 0,
        explanation: "Ctrl+C sends SIGINT to the foreground process, typically causing it to terminate immediately.",
        difficulty: "Easy",
        topic: "Processes"
    },
    {
        id: "linux-17",
        question: "What does the 'mkdir -p /a/b/c' command do?",
        options: [
            "Creates only the /a directory",
            "Creates /a, /a/b, and /a/b/c in a single command",
            "Prompts for confirmation before creating each directory",
            "Sets permissions to public for all created directories"
        ],
        answer: 1,
        explanation: "The -p (parents) flag creates the entire directory tree, including any missing parent directories, without errors.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-18",
        question: "Which command is used to check the amount of free and used disk space on mounted filesystems?",
        options: [
            "du",
            "df",
            "fdisk",
            "free"
        ],
        answer: 1,
        explanation: "The df (disk free) command displays the amount of available and used disk space on all mounted filesystems.",
        difficulty: "Easy",
        topic: "System Monitoring"
    },
    {
        id: "linux-19",
        question: "What is the purpose of the /tmp directory?",
        options: [
            "Storing template configuration files",
            "Holding temporary files that are typically deleted on reboot",
            "Storing user profile pictures",
            "Containing timezone data"
        ],
        answer: 1,
        explanation: "The /tmp directory is used by applications and users to store temporary files, and many systems clean it automatically on reboot.",
        difficulty: "Easy",
        topic: "Directory Structure"
    },
    {
        id: "linux-20",
        question: "Which command copies a file while preserving its attributes like permissions and timestamps?",
        options: [
            "cp -r",
            "cp -p",
            "cp -f",
            "cp -i"
        ],
        answer: 1,
        explanation: "The cp -p flag preserves the original file's mode, ownership, and timestamps during the copy operation.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-21",
        question: "What does the 'which' command do?",
        options: [
            "Shows all files in a directory",
            "Locates the executable file path of a command",
            "Displays the type of a filesystem",
            "Shows which user is currently logged in"
        ],
        answer: 1,
        explanation: "The 'which' command shows the full path of the executable that would be run when you type a command, searching through PATH directories.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-22",
        question: "Which command is used to append text to the end of an existing file without opening it in an editor?",
        options: [
            "echo 'text' > file",
            "echo 'text' >> file",
            "echo 'text' -a file",
            "echo 'text' + file"
        ],
        answer: 1,
        explanation: "The >> operator appends output to the end of a file, while a single > overwrites the file contents.",
        difficulty: "Easy",
        topic: "Redirection"
    },
    {
        id: "linux-23",
        question: "What is the PID of the init process (systemd) on a Linux system?",
        options: [
            "0",
            "1",
            "2",
            "999"
        ],
        answer: 1,
        explanation: "The init process (systemd on modern systems) always has a PID of 1, making it the first user-space process started by the kernel.",
        difficulty: "Easy",
        topic: "Processes"
    },
    {
        id: "linux-24",
        question: "Which command displays your current username?",
        options: [
            "whoami",
            "username",
            "id -n",
            "myuser"
        ],
        answer: 0,
        explanation: "The whoami command prints the effective username of the currently logged-in user.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-25",
        question: "What is the octal representation of read and write permissions for the owner (no permissions for group and others)?",
        options: [
            "644",
            "600",
            "640",
            "700"
        ],
        answer: 1,
        explanation: "Read (4) + Write (2) = 6 for owner, and 0 for group and others gives the octal permission 600.",
        difficulty: "Easy",
        topic: "Permissions"
    },
    {
        id: "linux-26",
        question: "Which Linux distribution serves as the upstream source for Red Hat Enterprise Linux?",
        options: [
            "Ubuntu",
            "Debian",
            "Fedora",
            "openSUSE"
        ],
        answer: 2,
        explanation: "Fedora serves as the upstream testing ground for technologies that eventually get incorporated into Red Hat Enterprise Linux.",
        difficulty: "Easy",
        topic: "Linux Distributions"
    },
    {
        id: "linux-27",
        question: "What does the 'grep' command do?",
        options: [
            "Compares two files line by line",
            "Searches for a pattern or text string within files",
            "Replaces text within files",
            "Sorts lines of text alphabetically"
        ],
        answer: 1,
        explanation: "The grep command searches for a specified pattern in text input using regular expressions and prints matching lines.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-28",
        question: "Which file contains the filesystem table that defines how disk partitions are mounted at boot?",
        options: [
            "/etc/mtab",
            "/etc/fstab",
            "/etc/filesystems",
            "/etc/mount.conf"
        ],
        answer: 1,
        explanation: "The /etc/fstab file contains static information about filesystems, defining what gets mounted where during the boot process.",
        difficulty: "Easy",
        topic: "Disk Management"
    },
    {
        id: "linux-29",
        question: "What does the 'cat' command stand for?",
        options: [
            "Catalog",
            "Concatenate",
            "Categorize",
            "Capture"
        ],
        answer: 1,
        explanation: "cat stands for concatenate, as it was originally designed to concatenate and display the contents of multiple files sequentially.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-30",
        question: "Which command is used to safely shut down and power off the system immediately?",
        options: [
            "shutdown -h now",
            "halt",
            "poweroff",
            "All of the above"
        ],
        answer: 3,
        explanation: "All three commands can shut down the system, though 'shutdown -h now' is the most standard and graceful method across distributions.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-31",
        question: "What is the standard port number for the SSH service?",
        options: [
            "21",
            "22",
            "23",
            "25"
        ],
        answer: 1,
        explanation: "SSH (Secure Shell) by default listens on TCP port 22 for incoming connections.",
        difficulty: "Easy",
        topic: "Networking"
    },
    {
        id: "linux-32",
        question: "Which command shows the routing table of a Linux system?",
        options: [
            "ip route",
            "ip link",
            "ip addr",
            "ip neigh"
        ],
        answer: 0,
        explanation: "The 'ip route' command displays the kernel's IP routing table, showing how network packets are directed.",
        difficulty: "Easy",
        topic: "Networking"
    },
    {
        id: "linux-33",
        question: "What is the purpose of the /etc/hosts file?",
        options: [
            "Stores DNS server addresses",
            "Maps hostnames to IP addresses locally",
            "Lists all network interfaces",
            "Defines firewall rules"
        ],
        answer: 1,
        explanation: "The /etc/hosts file provides a simple local mechanism for hostname-to-IP resolution, checked before DNS queries.",
        difficulty: "Easy",
        topic: "Networking"
    },
    {
        id: "linux-34",
        question: "Which command is used to compress a file using the gzip algorithm?",
        options: [
            "compress file",
            "gzip file",
            "zip file",
            "pack file"
        ],
        answer: 1,
        explanation: "The gzip command compresses a file using the GNU zip algorithm, typically replacing the original file with a .gz version.",
        difficulty: "Easy",
        topic: "Compression"
    },
    {
        id: "linux-35",
        question: "What does the 'ps aux' command display?",
        options: [
            "Only the current user's processes",
            "All running processes on the system with detailed information",
            "Only stopped processes",
            "System uptime and load average"
        ],
        answer: 1,
        explanation: "The 'ps aux' combination shows all processes from all users in a detailed BSD-style format, including CPU and memory usage.",
        difficulty: "Easy",
        topic: "Processes"
    },
    {
        id: "linux-36",
        question: "Which command creates an archive of files and directories?",
        options: [
            "zip -c archive.tar /dir",
            "tar -cvf archive.tar /dir",
            "pack -a archive.tar /dir",
            "archive -m archive.tar /dir"
        ],
        answer: 1,
        explanation: "The tar command with -c (create), -v (verbose), and -f (file) flags creates a new tar archive from specified files or directories.",
        difficulty: "Easy",
        topic: "Compression"
    },
    {
        id: "linux-37",
        question: "What is the purpose of the /var directory?",
        options: [
            "Storing variable-length strings",
            "Containing variable data files like logs and spool files",
            "Holding virtual memory files",
            "Storing user variable declarations"
        ],
        answer: 1,
        explanation: "The /var directory contains variable data files that grow and change during system operation, such as logs, mail spools, and databases.",
        difficulty: "Easy",
        topic: "Directory Structure"
    },
    {
        id: "linux-38",
        question: "Which command is used to change the file ownership?",
        options: [
            "chmod",
            "chown",
            "chgrp",
            "chperm"
        ],
        answer: 1,
        explanation: "The chown command changes the owner and optionally the group of a file or directory.",
        difficulty: "Easy",
        topic: "Permissions"
    },
    {
        id: "linux-39",
        question: "What does the 'sort' command do by default?",
        options: [
            "Sorts files by size",
            "Sorts lines of text alphabetically in ascending order",
            "Sorts files by modification date",
            "Sorts directories alphabetically"
        ],
        answer: 1,
        explanation: "By default, the sort command sorts lines of input text alphabetically in ascending order using the current locale.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-40",
        question: "Which command finds files by name across the entire filesystem?",
        options: [
            "search -name '*.log'",
            "find / -name '*.log'",
            "locate '*.log' -all",
            "whereis -name '*.log'"
        ],
        answer: 1,
        explanation: "The find command starting from / (root) with -name flag searches the entire filesystem for files matching the given name pattern.",
        difficulty: "Easy",
        topic: "File Search"
    },
    {
        id: "linux-41",
        question: "What is the significance of the shebang line (#!/bin/bash) in a script?",
        options: [
            "It is a comment that is ignored",
            "It tells the system which interpreter to use to execute the script",
            "It defines the script's encoding format",
            "It marks the end of the script header"
        ],
        answer: 1,
        explanation: "The shebang line specifies the absolute path to the interpreter that should be used to execute the script file.",
        difficulty: "Easy",
        topic: "Shell Scripting"
    },
    {
        id: "linux-42",
        question: "Which command lists all currently active cron jobs for the current user?",
        options: [
            "cron -l",
            "crontab -l",
            "crond -list",
            "cronlist"
        ],
        answer: 1,
        explanation: "The 'crontab -l' command lists the current user's crontab entries, showing all scheduled cron jobs.",
        difficulty: "Easy",
        topic: "Cron Jobs"
    },
    {
        id: "linux-43",
        question: "What is the default runlevel for a graphical multi-user mode in systems using traditional SysVinit?",
        options: [
            "3",
            "5",
            "2",
            "4"
        ],
        answer: 1,
        explanation: "Runlevel 5 traditionally represents a multi-user mode with a graphical display manager (GUI) in SysVinit-based systems.",
        difficulty: "Easy",
        topic: "Runlevels"
    },
    {
        id: "linux-44",
        question: "Which command displays the system's hostname?",
        options: [
            "sysname",
            "hostname",
            "gethost",
            "machine"
        ],
        answer: 1,
        explanation: "The hostname command displays or sets the system's network hostname as configured in the kernel.",
        difficulty: "Easy",
        topic: "Networking"
    },
    {
        id: "linux-45",
        question: "What does the 'mv' command do when both source and destination are on the same filesystem?",
        options: [
            "Copies then deletes the source",
            "Simply renames the file inode entry",
            "Creates a hard link and deletes the source",
            "Compresses and moves the file"
        ],
        answer: 1,
        explanation: "On the same filesystem, mv simply renames the directory entry (inode link) without actually copying data, making it nearly instantaneous.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-46",
        question: "Which environment variable defines the directories the shell searches for executable commands?",
        options: [
            "HOME",
            "EXEC_PATH",
            "PATH",
            "BIN_DIRS"
        ],
        answer: 2,
        explanation: "The PATH environment variable contains a colon-separated list of directories that the shell searches when you type a command.",
        difficulty: "Easy",
        topic: "Environment Variables"
    },
    {
        id: "linux-47",
        question: "What is the effect of running 'chmod +x script.sh'?",
        options: [
            "Makes the file readable by everyone",
            "Adds execute permission for all users",
            "Makes the file writable only by the owner",
            "Removes all permissions except execute"
        ],
        answer: 1,
        explanation: "The +x flag adds execute permission for the owner, group, and others, allowing the script to be run directly.",
        difficulty: "Easy",
        topic: "Permissions"
    },
    {
        id: "linux-48",
        question: "Which command is used to securely copy files between systems over SSH?",
        options: [
            "sftp get",
            "scp",
            "rsync",
            "ftp"
        ],
        answer: 1,
        explanation: "The scp (Secure Copy) command uses SSH to securely copy files between a local and remote host or between two remote hosts.",
        difficulty: "Easy",
        topic: "Networking"
    },
    {
        id: "linux-49",
        question: "What does the 'uniq' command require to work correctly?",
        options: [
            "Files must be sorted first",
            "Files must be compressed first",
            "Files must have line numbers",
            "Files must be in binary format"
        ],
        answer: 0,
        explanation: "The uniq command only removes adjacent duplicate lines, so the input should be sorted first for it to remove all duplicates.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-50",
        question: "Which command displays real-time information about running processes, CPU, and memory usage?",
        options: [
            "ps",
            "top",
            "free",
            "uptime"
        ],
        answer: 1,
        explanation: "The top command provides a dynamic, real-time view of running system processes, updating every few seconds.",
        difficulty: "Easy",
        topic: "System Monitoring"
    },
    {
        id: "linux-51",
        question: "What is the primary function of the 'su' command?",
        options: [
            "Shut down the system",
            "Switch to another user account, typically root",
            "Suspend a running process",
            "Show system usage statistics"
        ],
        answer: 1,
        explanation: "The su (substitute user) command allows you to switch to another user account, most commonly used to become root.",
        difficulty: "Easy",
        topic: "Users"
    },
    {
        id: "linux-52",
        question: "Which command extracts a .tar.gz archive in one step?",
        options: [
            "tar -xvf archive.tar.gz",
            "tar -xzvf archive.tar.gz",
            "untar archive.tar.gz",
            "extract archive.tar.gz"
        ],
        answer: 1,
        explanation: "The -z flag tells tar to decompress using gzip, -x extracts, -v shows progress, and -f specifies the filename.",
        difficulty: "Easy",
        topic: "Compression"
    },
    {
        id: "linux-53",
        question: "What is stored in the /etc/passwd file?",
        options: [
            "Encrypted user passwords",
            "User account information including username, UID, home directory, and default shell",
            "Group membership information only",
            "SSH public keys for all users"
        ],
        answer: 1,
        explanation: "The /etc/passwd file contains user account information such as username, UID, GID, home directory, and default shell, but not passwords in modern systems.",
        difficulty: "Easy",
        topic: "Users"
    },
    {
        id: "linux-54",
        question: "Which command checks network connectivity to another host by sending ICMP packets?",
        options: [
            "ping",
            "traceroute",
            "dig",
            "nc"
        ],
        answer: 0,
        explanation: "The ping command sends ICMP Echo Request packets to a host and waits for Echo Reply packets to verify network reachability.",
        difficulty: "Easy",
        topic: "Networking"
    },
    {
        id: "linux-55",
        question: "What does the 'tee' command do?",
        options: [
            "Creates a T-shaped pipeline",
            "Reads from stdin and writes to both stdout and one or more files simultaneously",
            "Compares two files side by side",
            "Splits a file into equal parts"
        ],
        answer: 1,
        explanation: "The tee command takes input from stdin and writes it to stdout while also writing copies to one or more files, creating a 'T' junction in the data flow.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-56",
        question: "Which directory contains configuration files for installed packages and system settings?",
        options: [
            "/var",
            "/etc",
            "/opt",
            "/conf"
        ],
        answer: 1,
        explanation: "The /etc directory is the standard location for system-wide configuration files on Linux systems.",
        difficulty: "Easy",
        topic: "Directory Structure"
    },
    {
        id: "linux-57",
        question: "What does the 'history' command display?",
        options: [
            "System boot history",
            "A numbered list of previously executed commands in the current shell session",
            "File modification history",
            "User login history"
        ],
        answer: 1,
        explanation: "The history command displays a numbered list of commands previously executed in the current shell session, stored in the history file.",
        difficulty: "Easy",
        topic: "History"
    },
    {
        id: "linux-58",
        question: "Which flag with the 'rm' command prompts for confirmation before each file removal?",
        options: [
            "-f",
            "-i",
            "-r",
            "-v"
        ],
        answer: 1,
        explanation: "The -i (interactive) flag makes rm prompt the user for confirmation before removing each file.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-59",
        question: "What is the Linux kernel?",
        options: [
            "A graphical desktop environment",
            "The core component that manages hardware resources and provides services to user-space programs",
            "A package management system",
            "A command-line shell"
        ],
        answer: 1,
        explanation: "The Linux kernel is the core of the operating system that manages CPU, memory, devices, and provides system calls to user-space applications.",
        difficulty: "Easy",
        topic: "Kernel"
    },
    {
        id: "linux-60",
        question: "Which command shows the disk usage of a directory and its subdirectories in human-readable format?",
        options: [
            "df -h",
            "du -h",
            "ls -lh",
            "stat -h"
        ],
        answer: 1,
        explanation: "The du -h command displays the disk usage of files and directories with sizes in human-readable format (KB, MB, GB).",
        difficulty: "Easy",
        topic: "Disk Usage"
    },
    {
        id: "linux-61",
        question: "What is the purpose of the /proc filesystem?",
        options: [
            "Storing process executables",
            "Providing a virtual filesystem interface to kernel and process information",
            "Containing deleted process files for recovery",
            "Storing process configuration files"
        ],
        answer: 1,
        explanation: "The /proc filesystem is a virtual filesystem that provides a real-time interface to kernel data structures and process information.",
        difficulty: "Easy",
        topic: "File System"
    },
    {
        id: "linux-62",
        question: "Which command adds a new user account with a home directory?",
        options: [
            "useradd -m username",
            "newuser username",
            "adduser -d username",
            "usercreate username"
        ],
        answer: 0,
        explanation: "The 'useradd -m' command creates a new user and the -m flag ensures the home directory is also created.",
        difficulty: "Easy",
        topic: "User Management"
    },
    {
        id: "linux-63",
        question: "What does the 'tail -f /var/log/syslog' command do?",
        options: [
            "Displays the last line and exits",
            "Follows the file in real-time, showing new lines as they are added",
            "Formats the log file for printing",
            "Fixes corrupted log entries"
        ],
        answer: 1,
        explanation: "The -f (follow) flag makes tail wait for additional data to be appended to the file, displaying new lines in real-time.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-64",
        question: "Which command lists all network interfaces and their IP addresses?",
        options: [
            "ip link",
            "ip addr",
            "ifconfig -a",
            "Both B and C"
        ],
        answer: 3,
        explanation: "Both 'ip addr' (modern) and 'ifconfig -a' (legacy) can display all network interfaces along with their assigned IP addresses.",
        difficulty: "Easy",
        topic: "Networking"
    },
    {
        id: "linux-65",
        question: "What is the default target (equivalent to runlevel 3) in systemd-based systems?",
        options: [
            "graphical.target",
            "multi-user.target",
            "basic.target",
            "rescue.target"
        ],
        answer: 1,
        explanation: "The multi-user.target in systemd is equivalent to the traditional runlevel 3, providing a multi-user command-line environment without a GUI.",
        difficulty: "Easy",
        topic: "systemd"
    },
    {
        id: "linux-66",
        question: "Which command is used to download a file from the internet via HTTP/HTTPS from the command line?",
        options: [
            "fetch",
            "wget",
            "download",
            "get"
        ],
        answer: 1,
        explanation: "The wget command is a non-interactive network utility to download files from the web, supporting HTTP, HTTPS, and FTP protocols.",
        difficulty: "Easy",
        topic: "Networking"
    },
    {
        id: "linux-67",
        question: "What does the 'less' command offer that 'more' does not?",
        options: [
            "Colorized output",
            "Ability to scroll backward through the file",
            "Line numbering by default",
            "Faster file loading"
        ],
        answer: 1,
        explanation: "Unlike more, the less command allows backward navigation through the file using arrow keys or Page Up, making it more versatile.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-68",
        question: "Which command displays the amount of free and used physical and swap memory?",
        options: [
            "df",
            "free",
            "top",
            "mem"
        ],
        answer: 1,
        explanation: "The free command displays the total amount of free and used physical and swap memory in the system.",
        difficulty: "Easy",
        topic: "System Monitoring"
    },
    {
        id: "linux-69",
        question: "What is the purpose of the 'alias' command?",
        options: [
            "Creates a hard link to a file",
            "Creates a shortcut or alternative name for a command",
            "Assigns an IP alias to a network interface",
            "Creates an alternative user account"
        ],
        answer: 1,
        explanation: "The alias command creates a shorthand or alternative name for a command, often used to add default options to frequently used commands.",
        difficulty: "Easy",
        topic: "Aliases"
    },
    {
        id: "linux-70",
        question: "Which command safely unmounts a mounted filesystem?",
        options: [
            "umount /mount-point",
            "unmount /mount-point",
            "mount -u /mount-point",
            "detach /mount-point"
        ],
        answer: 0,
        explanation: "The umount command safely unmounts a previously mounted filesystem, ensuring all pending writes are flushed to disk.",
        difficulty: "Easy",
        topic: "Disk Management"
    },
    {
        id: "linux-71",
        question: "What does the 'cut' command extract from each line of input?",
        options: [
            "Lines matching a pattern",
            "Selected portions of each line based on delimiters or character positions",
            "Duplicate lines from sorted input",
            "Binary data from files"
        ],
        answer: 1,
        explanation: "The cut command removes (cuts out) selected portions of each line of input, using delimiters like -d or character ranges with -c.",
        difficulty: "Easy",
        topic: "Text Processing"
    },
    {
        id: "linux-72",
        question: "Which file in a user's home directory is sourced for interactive non-login shells?",
        options: [
            ".bash_profile",
            ".profile",
            ".bashrc",
            ".bash_login"
        ],
        answer: 2,
        explanation: "The .bashrc file is sourced for interactive non-login shells, such as when opening a new terminal window in a GUI.",
        difficulty: "Easy",
        topic: "Environment Variables"
    },
    {
        id: "linux-73",
        question: "What does Ctrl+Z do to a foreground process?",
        options: [
            "Kills the process immediately",
            "Suspends the process and sends it to the background",
            "Restarts the process from the beginning",
            "Sends the process to a different terminal"
        ],
        answer: 1,
        explanation: "Ctrl+Z sends SIGTSTP to the foreground process, suspending it and placing it in the background as a stopped job.",
        difficulty: "Easy",
        topic: "Processes"
    },
    {
        id: "linux-74",
        question: "Which command brings a suspended background job back to the foreground?",
        options: [
            "bg %1",
            "fg %1",
            "resume %1",
            "run %1"
        ],
        answer: 1,
        explanation: "The fg command brings a background or stopped job to the foreground, using the job number prefixed with %.",
        difficulty: "Easy",
        topic: "Processes"
    },
    {
        id: "linux-75",
        question: "What is the purpose of the 'export' command in shell scripting?",
        options: [
            "Exports files to a remote server",
            "Makes a variable available to child processes",
            "Saves variable values to a file",
            "Imports variables from another script"
        ],
        answer: 1,
        explanation: "The export command marks a shell variable so that it is passed to child processes, making it an environment variable.",
        difficulty: "Easy",
        topic: "Environment Variables"
    },
    {
        id: "linux-76",
        question: "Which command lists only the directories in the current location?",
        options: [
            "ls -d",
            "ls -l | grep '^d'",
            "ls -dir",
            "dir --only-dirs"
        ],
        answer: 1,
        explanation: "Piping ls -l output through grep with the pattern '^d' filters to show only lines starting with 'd', which are directories.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-77",
        question: "What is a zombie process in Linux?",
        options: [
            "A process that has been killed but still consumes CPU",
            "A process that has completed execution but still has an entry in the process table",
            "A process running in the background indefinitely",
            "A process that is using more memory than allocated"
        ],
        answer: 1,
        explanation: "A zombie process has finished execution but its parent has not yet read its exit status, so it remains as an entry in the process table.",
        difficulty: "Easy",
        topic: "Processes"
    },
    {
        id: "linux-78",
        question: "Which command is used to send a signal to a process by its PID?",
        options: [
            "send SIGTERM 1234",
            "kill 1234",
            "signal 1234",
            "notify 1234"
        ],
        answer: 1,
        explanation: "The kill command sends a signal (SIGTERM by default) to a process specified by its Process ID (PID).",
        difficulty: "Easy",
        topic: "Processes"
    },
    {
        id: "linux-79",
        question: "What does the '2>' redirection operator do?",
        options: [
            "Appends stderr to a file",
            "Redirects stderr to a file, overwriting it",
            "Redirects both stdout and stderr to a file",
            "Redirects stdout to file descriptor 2"
        ],
        answer: 1,
        explanation: "The 2> operator redirects the standard error stream (file descriptor 2) to a file, overwriting any existing content.",
        difficulty: "Easy",
        topic: "Redirection"
    },
    {
        id: "linux-80",
        question: "Which option with the 'find' command searches for files modified in the last 7 days?",
        options: [
            "-mtime +7",
            "-mtime -7",
            "-ctime 7",
            "-atime 7"
        ],
        answer: 1,
        explanation: "The -mtime -7 flag finds files modified less than 7 days ago, while +7 would find files modified more than 7 days ago.",
        difficulty: "Easy",
        topic: "File Search"
    },
    {
        id: "linux-81",
        question: "What is the function of the GRUB bootloader in Linux?",
        options: [
            "It manages user authentication",
            "It loads the Linux kernel and initramfs into memory",
            "It configures network interfaces at boot",
            "It manages package installations"
        ],
        answer: 1,
        explanation: "GRUB (Grand Unified Bootloader) is responsible for loading the Linux kernel and initial RAM disk into memory during the boot process.",
        difficulty: "Easy",
        topic: "Boot Process"
    },
    {
        id: "linux-82",
        question: "Which command shows active network connections and listening ports?",
        options: [
            "ip addr",
            "ss -tulpn",
            "ping localhost",
            "ifconfig -s"
        ],
        answer: 1,
        explanation: "The 'ss -tulpn' command displays TCP/UDP sockets, listening ports, and the processes using them without DNS resolution.",
        difficulty: "Easy",
        topic: "Networking"
    },
    {
        id: "linux-83",
        question: "What does the 'wget -q' flag do?",
        options: [
            "Quits after download",
            "Runs in quiet mode, suppressing all output",
            "Queues the download for later",
            "Sets the download quality"
        ],
        answer: 1,
        explanation: "The -q (quiet) flag suppresses all wget output, making it useful in scripts where you don't want console output.",
        difficulty: "Easy",
        topic: "Networking"
    },
    {
        id: "linux-84",
        question: "Which command displays DNS lookup information for a domain?",
        options: [
            "dnslookup example.com",
            "dig example.com",
            "hostcheck example.com",
            "nssearch example.com"
        ],
        answer: 1,
        explanation: "The dig command performs DNS lookups and displays detailed information about domain name resolution, including various DNS record types.",
        difficulty: "Easy",
        topic: "Networking"
    },
    {
        id: "linux-85",
        question: "What is the purpose of the 'xargs' command?",
        options: [
            "Displays arguments passed to a command",
            "Builds and executes command lines from standard input",
            "Removes extra arguments from commands",
            "Exports arguments to environment variables"
        ],
        answer: 1,
        explanation: "The xargs command reads items from standard input and converts them into arguments for a specified command, handling argument list limits.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-86",
        question: "Which command modifies an existing user's properties like home directory or shell?",
        options: [
            "useradd -m",
            "usermod",
            "useredit",
            "chuser"
        ],
        answer: 1,
        explanation: "The usermod command modifies a user account's properties, such as home directory, login shell, username, or group memberships.",
        difficulty: "Easy",
        topic: "User Management"
    },
    {
        id: "linux-87",
        question: "What does the 'tr' command do?",
        options: [
            "Tracks file modifications",
            "Translates or deletes characters from input",
            "Truncates files to a specified size",
            "Transfers files between directories"
        ],
        answer: 1,
        explanation: "The tr command translates characters from one set to another or deletes specified characters from the input stream.",
        difficulty: "Easy",
        topic: "Text Processing"
    },
    {
        id: "linux-88",
        question: "Which command creates a new group in Linux?",
        options: [
            "newgroup",
            "groupadd",
            "addgroup",
            "mkgroup"
        ],
        answer: 1,
        explanation: "The groupadd command creates a new group entry in the system, adding it to the /etc/group file.",
        difficulty: "Easy",
        topic: "User Management"
    },
    {
        id: "linux-89",
        question: "What is the effect of the 'set -e' option in a bash script?",
        options: [
            "Enables echo mode for debugging",
            "Causes the script to exit immediately if any command returns a non-zero exit status",
            "Enables error logging to a file",
            "Suppresses all error messages"
        ],
        answer: 1,
        explanation: "The 'set -e' option makes the script exit immediately if any command exits with a non-zero status, improving error handling.",
        difficulty: "Easy",
        topic: "Shell Scripting"
    },
    {
        id: "linux-90",
        question: "Which command shows how long the system has been running?",
        options: [
            "runtime",
            "uptime",
            "uptime -s",
            "sysinfo"
        ],
        answer: 1,
        explanation: "The uptime command displays the current time, how long the system has been running, the number of users, and load averages.",
        difficulty: "Easy",
        topic: "System Monitoring"
    },
    {
        id: "linux-91",
        question: "What does the '|' (pipe) character do in a command line?",
        options: [
            "Appends output to a file",
            "Sends the stdout of one command as stdin to the next command",
            "Runs two commands in parallel",
            "Separates multiple commands on the same line"
        ],
        answer: 1,
        explanation: "The pipe operator connects the standard output of one command directly to the standard input of the next command.",
        difficulty: "Easy",
        topic: "Pipes"
    },
    {
        id: "linux-92",
        question: "Which command removes an empty directory?",
        options: [
            "rm dir",
            "rmdir dir",
            "del dir",
            "cleandir dir"
        ],
        answer: 1,
        explanation: "The rmdir command removes empty directories only; it will fail if the directory contains any files or subdirectories.",
        difficulty: "Easy",
        topic: "Linux Commands"
    },
    {
        id: "linux-93",
        question: "What is the difference between 'su' and 'su -'?",
        options: [
            "No difference at all",
            "'su -' starts a full login shell simulating a complete login, while 'su' starts a non-login shell",
            "'su' requires a password while 'su -' does not",
            "'su -' only works for the root user"
        ],
        answer: 1,
        explanation: "The 'su -' command provides a complete login environment by sourcing the target user's profile files, while 'su' preserves the current environment.",
        difficulty: "Easy",
        topic: "Users"
    },
    {
        id: "linux-94",
        question: "Which file contains the list of superusers who can use sudo?",
        options: [
            "/etc/sudoers",
            "/etc/sudolist",
            "/etc/sudo.conf",
            "/etc/sudo.users"
        ],
        answer: 0,
        explanation: "The /etc/sudoers file defines which users and groups have sudo privileges and what commands they can execute.",
        difficulty: "Easy",
        topic: "Users"
    },
    {
        id: "linux-95",
        question: "What does the 'dmesg' command display?",
        options: [
            "Disk memory usage graphs",
            "Kernel ring buffer messages including boot and driver messages",
            "Daemon process status messages",
            "DNS message logs"
        ],
        answer: 1,
        explanation: "The dmesg command displays messages from the kernel ring buffer, including boot messages, hardware detection, and driver information.",
        difficulty: "Easy",
        topic: "Logs"
    },
    {
        id: "linux-96",
        question: "Which systemd command enables a service to start automatically at boot?",
        options: [
            "systemctl start service",
            "systemctl enable service",
            "systemctl auto service",
            "systemctl boot service"
        ],
        answer: 1,
        explanation: "The 'systemctl enable' command creates the necessary symlinks so the service starts automatically during the boot process.",
        difficulty: "Easy",
        topic: "Services"
    },
    {
        id: "linux-97",
        question: "What is the purpose of swap space in Linux?",
        options: [
            "Swapping between different kernel versions",
            "Providing virtual memory by using disk space when physical RAM is full",
            "Exchanging data between CPU cores",
            "Switching between different runlevels"
        ],
        answer: 1,
        explanation: "Swap space is disk space used as virtual memory when physical RAM is exhausted, allowing the system to move less-used memory pages to disk.",
        difficulty: "Easy",
        topic: "Disk Management"
    },
    {
        id: "linux-98",
        question: "Which command installs a .deb package file directly without using a repository?",
        options: [
            "apt install package.deb",
            "dpkg -i package.deb",
            "deb-install package.deb",
            "rpm -i package.deb"
        ],
        answer: 1,
        explanation: "The dpkg -i command installs a .deb package file directly, while apt is typically used for installing from repositories.",
        difficulty: "Easy",
        topic: "Package Managers"
    },
    {
        id: "linux-99",
        question: "What does the 'curl' command primarily do?",
        options: [
            "Creates URL shortcuts",
            "Transfers data to or from a server using various protocols",
            "Curls (wraps) text output for display",
            "Checks URL validity"
        ],
        answer: 1,
        explanation: "The curl command is a versatile tool for transferring data to or from a server, supporting HTTP, HTTPS, FTP, and many other protocols.",
        difficulty: "Easy",
        topic: "Networking"
    },
    {
        id: "linux-100",
        question: "Which command displays all environment variables currently set in the shell?",
        options: [
            "env",
            "set",
            "printenv",
            "All of the above can display environment variables"
        ],
        answer: 3,
        explanation: "All three commands (env, set, printenv) can display environment variables, though set also shows shell functions and local variables.",
        difficulty: "Easy",
        topic: "Environment Variables"
    },
    {
        id: "linux-101",
        question: "A user reports that a script runs correctly manually but fails when executed via cron. What is the most likely cause?",
        options: [
            "Cron does not support shell scripts",
            "The cron environment has a minimal PATH and lacks the environment variables available in an interactive shell",
            "Cron only runs scripts written in Python",
            "Cron executes scripts with lower CPU priority causing timeouts"
        ],
        answer: 1,
        explanation: "Cron jobs run with a very minimal environment, typically only having /usr/bin:/bin in PATH, so absolute paths or explicit PATH settings are needed.",
        difficulty: "Medium",
        topic: "Cron Jobs"
    },
    {
        id: "linux-102",
        question: "What is the output of the command 'echo {1..5}'?",
        options: [
            "{1..5}",
            "1 2 3 4 5",
            "12345",
            "1..5"
        ],
        answer: 1,
        explanation: "Bash brace expansion generates the sequence 1 through 5, and echo prints them separated by spaces.",
        difficulty: "Medium",
        topic: "Shell Scripting"
    },
    {
        id: "linux-103",
        question: "Which command finds all files larger than 100MB under the /var directory?",
        options: [
            "find /var -size +100M",
            "find /var -size 100M",
            "find /var -larger 100MB",
            "find /var -size gt 100M"
        ],
        answer: 0,
        explanation: "The find command with -size +100M locates files whose size exceeds 100 megabytes. The + prefix means 'greater than'.",
        difficulty: "Medium",
        topic: "File Search"
    },
    {
        id: "linux-104",
        question: "In a bash script, what does '$?' evaluate to?",
        options: [
            "The current script's PID",
            "The exit status of the last executed command",
            "The number of arguments passed to the script",
            "The name of the current script"
        ],
        answer: 1,
        explanation: "The special variable $? contains the exit status (return code) of the most recently executed foreground command.",
        difficulty: "Medium",
        topic: "Shell Scripting"
    },
    {
        id: "linux-105",
        question: "What is the effect of setting the Sticky Bit on a directory?",
        options: [
            "Prevents files from being deleted by anyone except the file owner or directory owner",
            "Makes all files in the directory executable",
            "Prevents users from creating new files in the directory",
            "Encrypts all files within the directory"
        ],
        answer: 0,
        explanation: "The Sticky Bit on a directory ensures that only the file owner, directory owner, or root can delete or rename files within it, commonly used on /tmp.",
        difficulty: "Medium",
        topic: "Special Permissions"
    },
    {
        id: "linux-106",
        question: "Which sed command replaces all occurrences of 'old' with 'new' in a file?",
        options: [
            "sed 's/old/new/' file",
            "sed 's/old/new/g' file",
            "sed 'r/old/new/g' file",
            "sed 'replace/old/new' file"
        ],
        answer: 1,
        explanation: "The 'g' (global) flag at the end of the substitution command tells sed to replace all occurrences on each line, not just the first.",
        difficulty: "Medium",
        topic: "Text Processing"
    },
    {
        id: "linux-107",
        question: "A system administrator runs 'kill -9 1234' but the process persists. What could explain this?",
        options: [
            "The process is a kernel thread that cannot be killed with SIGKILL",
            "The kill command only works on user processes",
            "PID 1234 is always a system process protected from termination",
            "SIGKILL only pauses the process temporarily"
        ],
        answer: 0,
        explanation: "Kernel threads running in kernel space cannot be killed with SIGKILL since they are not subject to normal signal handling. Only the kernel can stop them.",
        difficulty: "Medium",
        topic: "Processes"
    },
    {
        id: "linux-108",
        question: "What does the awk command 'awk '{print $3}' file.txt' do?",
        options: [
            "Prints the third character of each line",
            "Prints the third field of each line (whitespace-separated by default)",
            "Prints the first three lines of the file",
            "Prints lines that contain the number 3"
        ],
        answer: 1,
        explanation: "AWK splits each line into fields using whitespace as the default delimiter, and $3 refers to the third field on each line.",
        difficulty: "Medium",
        topic: "Text Processing"
    },
    {
        id: "linux-109",
        question: "What is the octal permission '2755' on a directory equivalent to?",
        options: [
            "SGID set, rwx for owner, rx for group and others",
            "SUID set, rwx for owner, rx for group and others",
            "Sticky bit set, rwx for owner, rx for group and others",
            "No special bit, rwx for owner, rwx for group, rx for others"
        ],
        answer: 0,
        explanation: "The leading 2 sets the SGID bit, and 755 gives rwx to owner, r-x to group, and r-x to others. SGID on directories causes new files to inherit the group.",
        difficulty: "Medium",
        topic: "Special Permissions"
    },
    {
        id: "linux-110",
        question: "Which LVM component is the actual logical volume that contains a filesystem?",
        options: [
            "Physical Volume (PV)",
            "Volume Group (VG)",
            "Logical Volume (LV)",
            "Physical Extent (PE)"
        ],
        answer: 2,
        explanation: "The Logical Volume (LV) is the LVM component that you format with a filesystem and mount, analogous to a traditional partition.",
        difficulty: "Medium",
        topic: "LVM"
    },
    {
        id: "linux-111",
        question: "What does the command 'find /home -type f -exec chmod 644 {} \\;' do?",
        options: [
            "Finds directories and sets them to 644",
            "Finds all regular files under /home and sets their permissions to 644",
            "Finds files owned by user 644 and changes their permissions",
            "Creates files with 644 permissions under /home"
        ],
        answer: 1,
        explanation: "The command finds all regular files (-type f) under /home and executes chmod 644 on each, where {} is a placeholder for the found filename.",
        difficulty: "Medium",
        topic: "File Search"
    },
    {
        id: "linux-112",
        question: "In an awk script, what does the NF variable represent?",
        options: [
            "Number of files processed",
            "Number of fields in the current record",
            "Name of the current file",
            "Number of lines filtered"
        ],
        answer: 1,
        explanation: "NF is a built-in AWK variable that holds the number of fields in the current input record (line).",
        difficulty: "Medium",
        topic: "Text Processing"
    },
    {
        id: "linux-113",
        question: "What is the difference between a hard link and a soft (symbolic) link?",
        options: [
            "A hard link works across filesystems while a soft link does not",
            "A hard link points to an inode while a soft link points to a path; deleting the original file breaks a soft link but not a hard link",
            "A soft link requires more disk space than a hard link",
            "There is no practical difference between them"
        ],
        answer: 1,
        explanation: "Hard links share the same inode as the original file and persist even if the original is deleted. Soft links point to a path and become dangling if the target is removed.",
        difficulty: "Medium",
        topic: "File System"
    },
    {
        id: "linux-114",
        question: "Which command prints the process tree showing parent-child relationships of all processes?",
        options: [
            "ps --tree",
            "pstree",
            "proctree",
            "tree -p"
        ],
        answer: 1,
        explanation: "The pstree command displays running processes in a tree format, showing the hierarchical parent-child relationships between processes.",
        difficulty: "Medium",
        topic: "Processes"
    },
    {
        id: "linux-115",
        question: "What does the SUID bit on an executable file allow?",
        options: [
            "The file is executed with the permissions of the user who runs it",
            "The file is executed with the permissions of the file's owner, not the user who runs it",
            "The file can only be executed by the superuser",
            "The file runs in a sandboxed environment"
        ],
        answer: 1,
        explanation: "When SUID is set on an executable, the process runs with the effective UID of the file's owner, allowing regular users to perform privileged operations.",
        difficulty: "Medium",
        topic: "Special Permissions"
    },
    {
        id: "linux-116",
        question: "Which crontab entry runs a script at 2:30 AM every Sunday?",
        options: [
            "30 2 * * 0 /script.sh",
            "0 2 30 * * /script.sh",
            "30 2 7 * * /script.sh",
            "* * 30 2 0 /script.sh"
        ],
        answer: 0,
        explanation: "The crontab format is: minute hour day-of-month month day-of-week. '30 2 * * 0' means 2:30 AM, any day of month, any month, Sunday (0).",
        difficulty: "Medium",
        topic: "Cron Jobs"
    },
    {
        id: "linux-117",
        question: "What does the 'nohup' command do when prepended to a command?",
        options: [
            "Runs the command at the highest priority",
            "Prevents the command from being terminated when the shell session ends",
            "Hides the command from the process list",
            "Runs the command without producing any output"
        ],
        answer: 1,
        explanation: "nohup (no hangup) makes a command immune to SIGHUP signals, so it continues running after the shell that started it exits.",
        difficulty: "Medium",
        topic: "Processes"
    },
    {
        id: "linux-118",
        question: "Which command displays the default gateway configured on a Linux system?",
        options: [
            "ip route | grep default",
            "ip link show",
            "ip addr show",
            "netstat -i"
        ],
        answer: 0,
        explanation: "The 'ip route' command shows all routes, and filtering with 'grep default' extracts the default gateway entry from the routing table.",
        difficulty: "Medium",
        topic: "Networking"
    },
    {
        id: "linux-119",
        question: "What is the purpose of the 'rsync' command compared to 'scp'?",
        options: [
            "rsync is always faster because it uses UDP",
            "rsync only transfers the differences between source and destination, making it more efficient for incremental backups",
            "rsync does not require SSH for remote transfers",
            "rsync can only transfer files locally"
        ],
        answer: 1,
        explanation: "rsync uses a delta-transfer algorithm that only sends the differences between source and destination files, making it ideal for backups and synchronization.",
        difficulty: "Medium",
        topic: "Networking"
    },
    {
        id: "linux-120",
        question: "In a bash script, what does '$#' represent?",
        options: [
            "The name of the script",
            "The last argument passed to the script",
            "The number of arguments passed to the script",
            "All arguments passed as a single string"
        ],
        answer: 2,
        explanation: "The special variable $# holds the number of positional parameters (arguments) passed to the script or function.",
        difficulty: "Medium",
        topic: "Shell Scripting"
    },
    {
        id: "linux-121",
        question: "Which command permanently adds a swap file without rebooting?",
        options: [
            "mkswap /swapfile && swapon /swapfile",
            "swapadd /swapfile",
            "createswap /swapfile",
            "mkswap /swapfile && mount /swapfile"
        ],
        answer: 0,
        explanation: "mkswap formats a file as swap space, and swapon activates it immediately. You must also add an entry to /etc/fstab for persistence across reboots.",
        difficulty: "Medium",
        topic: "Disk Management"
    },
    {
        id: "linux-122",
        question: "What does the 'journalctl -u nginx --since '1 hour ago'' command do?",
        options: [
            "Restarts the nginx service from 1 hour ago",
            "Shows journal log entries for the nginx unit from the last hour",
            "Checks nginx configuration from 1 hour ago",
            "Suspends the nginx service for 1 hour"
        ],
        answer: 1,
        explanation: "The -u flag filters by systemd unit, and --since filters by time, showing only nginx-related journal entries from the specified time window.",
        difficulty: "Medium",
        topic: "Logs"
    },
    {
        id: "linux-123",
        question: "What is the effect of the 'nice' value on a process?",
        options: [
            "Higher nice values give the process higher CPU priority",
            "Lower nice values (including negative) give the process higher CPU priority",
            "Nice values only affect I/O priority, not CPU",
            "Nice values have no effect on modern Linux kernels"
        ],
        answer: 1,
        explanation: "The nice value ranges from -20 (highest priority) to 19 (lowest priority). A lower or negative nice value gives the process more CPU time.",
        difficulty: "Medium",
        topic: "Processes"
    },
    {
        id: "linux-124",
        question: "Which command is used to extend an existing LVM logical volume after adding a new physical disk?",
        options: [
            "lvextend /dev/vg00/lvol0 /dev/sdb1 && resize2fs /dev/vg00/lvol0",
            "lvresize /dev/vg00/lvol0 +10G",
            "lvm extend /dev/vg00/lvol0",
            "pvextend /dev/vg00/lvol0 /dev/sdb1"
        ],
        answer: 0,
        explanation: "lvextend adds space to the LV, and resize2fs (for ext4) grows the filesystem to use the new space. Both steps are needed.",
        difficulty: "Medium",
        topic: "LVM"
    },
    {
        id: "linux-125",
        question: "What is the function of an ACL (Access Control List) in Linux?",
        options: [
            "It replaces the traditional permission system entirely",
            "It allows fine-grained permissions beyond owner/group/others, granting access to specific users or groups",
            "It only works on directories, not files",
            "It is used exclusively for network access control"
        ],
        answer: 1,
        explanation: "ACLs extend the traditional Unix permission model by allowing you to set permissions for multiple specific users and groups on a single file or directory.",
        difficulty: "Medium",
        topic: "ACL"
    },
    {
        id: "linux-126",
        question: "Which command sets an ACL allowing user 'alice' read and write access to a file?",
        options: [
            "setfacl -m u:alice:rw file",
            "acl set alice rw file",
            "chmod +acl alice:rw file",
            "facl -u alice:rw file"
        ],
        answer: 0,
        explanation: "The setfacl -m flag modifies ACLs, u:alice:rw grants user alice read and write permissions on the specified file.",
        difficulty: "Medium",
        topic: "ACL"
    },
    {
        id: "linux-127",
        question: "What does the 'strace' command do?",
        options: [
            "Traces network packets through the kernel",
            "Traces system calls and signals made by a process",
            "Traces file system changes in real-time",
            "Traces memory allocations by a process"
        ],
        answer: 1,
        explanation: "strace intercepts and records the system calls made by a process and the signals received, useful for debugging and understanding process behavior.",
        difficulty: "Medium",
        topic: "Troubleshooting"
    },
    {
        id: "linux-128",
        question: "Which command securely transfers files interactively over SSH with a CLI similar to FTP?",
        options: [
            "scp -i",
            "sftp",
            "sshfs",
            "rsync over ssh"
        ],
        answer: 1,
        explanation: "SFTP (SSH File Transfer Protocol) provides an interactive FTP-like interface over SSH, allowing commands like ls, cd, get, and put.",
        difficulty: "Medium",
        topic: "Networking"
    },
    {
        id: "linux-129",
        question: "What is the result of 'echo $(( 16#FF ))' in bash?",
        options: [
            "16#FF",
            "FF",
            "255",
            "256"
        ],
        answer: 2,
        explanation: "Bash arithmetic expansion with base#number notation converts hexadecimal FF (base 16) to its decimal equivalent, which is 255.",
        difficulty: "Medium",
        topic: "Shell Scripting"
    },
    {
        id: "linux-130",
        question: "A file has permissions '-rwsr-xr-x'. What does the 's' in the owner position indicate?",
        options: [
            "The file is a socket",
            "The SUID bit is set and the owner has execute permission",
            "The file is marked as a system file",
            "The file is statically linked"
        ],
        answer: 1,
        explanation: "A lowercase 's' in the owner's execute position means SUID is set AND the owner has execute permission. An uppercase 'S' would mean SUID is set but no execute permission.",
        difficulty: "Medium",
        topic: "Special Permissions"
    },
    {
        id: "linux-131",
        question: "Which command lists all block devices with their sizes and mount points in a tree-like format?",
        options: [
            "fdisk -l",
            "lsblk",
            "blkid",
            "parted -l"
        ],
        answer: 1,
        explanation: "The lsblk command lists block devices in a tree format showing relationships between disks, partitions, and their sizes and mount points.",
        difficulty: "Medium",
        topic: "Disk Management"
    },
    {
        id: "linux-132",
        question: "What does 'iptables -A INPUT -p tcp --dport 80 -j ACCEPT' do?",
        options: [
            "Blocks all HTTP traffic",
            "Appends a rule to allow incoming TCP traffic on port 80",
            "Redirects port 80 traffic to another port",
            "Logs all incoming HTTP connections"
        ],
        answer: 1,
        explanation: "This iptables rule appends (-A) to the INPUT chain, matching TCP protocol on destination port 80, and jumps to ACCEPT, allowing the traffic.",
        difficulty: "Medium",
        topic: "Firewall"
    },
    {
        id: "linux-133",
        question: "What is the function of the 'lsof' command?",
        options: [
            "Lists open files and the processes using them",
            "Lists only network sockets",
            "Lists files that have been recently deleted",
            "Lists files larger than a specified size"
        ],
        answer: 0,
        explanation: "lsof (LiSt Open Files) lists all open files and the processes that have them open, including regular files, directories, sockets, pipes, and devices.",
        difficulty: "Medium",
        topic: "Troubleshooting"
    },
    {
        id: "linux-134",
        question: "Which command shows the SELinux context of files in a directory?",
        options: [
            "ls -Z",
            "ls -s",
            "ls --context",
            "sestatus -l"
        ],
        answer: 0,
        explanation: "The ls -Z flag displays the SELinux security context (user:role:type:level) for each file alongside the usual listing.",
        difficulty: "Medium",
        topic: "SELinux"
    },
    {
        id: "linux-135",
        question: "What does the 'renice -n 5 -p 1234' command do?",
        options: [
            "Sets the priority of PID 1234 to the highest priority",
            "Sets the nice value of PID 1234 to 5, lowering its priority",
            "Increases the CPU affinity of PID 1234 to 5 cores",
            "Restarts PID 1234 with a 5-second delay"
        ],
        answer: 1,
        explanation: "The renice command changes the scheduling priority (nice value) of a running process. A nice value of 5 reduces its priority compared to the default of 0.",
        difficulty: "Medium",
        topic: "Processes"
    },
    {
        id: "linux-136",
        question: "Which command creates a GPT partition table on /dev/sdb?",
        options: [
            "fdisk /dev/sdb -> g",
            "parted /dev/sdb mklabel gpt",
            "mkfs.gpt /dev/sdb",
            "gptcreate /dev/sdb"
        ],
        answer: 1,
        explanation: "The parted command with 'mklabel gpt' creates a new GPT partition label on the specified disk, replacing any existing partition table.",
        difficulty: "Medium",
        topic: "Disk Management"
    },
    {
        id: "linux-137",
        question: "What is the purpose of the 'ulimit' command?",
        options: [
            "Limits network bandwidth for a user",
            "Sets or reports resource limits for the shell and its child processes",
            "Limits the number of login sessions per user",
            "Restricts which commands a user can execute"
        ],
        answer: 1,
        explanation: "ulimit controls system resource limits such as maximum file size, core file size, number of open files, and memory usage for the current shell.",
        difficulty: "Medium",
        topic: "Shell"
    },
    {
        id: "linux-138",
        question: "Which command identifies which process is listening on port 80?",
        options: [
            "netstat -tulpn | grep :80",
            "lsof -i :80",
            "ss -tulpn | grep :80",
            "All of the above"
        ],
        answer: 3,
        explanation: "All three commands can identify the process listening on a specific port by showing the PID and process name associated with the socket.",
        difficulty: "Medium",
        topic: "Networking"
    },
    {
        id: "linux-139",
        question: "What does the 'chmod 4755' permission setting do compared to 'chmod 755'?",
        options: [
            "Adds the sticky bit to the file",
            "Adds the SUID bit, making the file execute with the owner's privileges",
            "Adds the SGID bit, making the file execute with the group's privileges",
            "Restricts the file to be executable only by root"
        ],
        answer: 1,
        explanation: "The leading 4 sets the SUID bit. When this executable is run by any user, it executes with the effective UID of the file's owner.",
        difficulty: "Medium",
        topic: "Special Permissions"
    },
    {
        id: "linux-140",
        question: "In a bash script, what is the difference between '[[ $var ]]' and '[ $var ]'?",
        options: [
            "There is no difference",
            "[[ ]]' is a bash keyword that prevents word splitting and pathname expansion, while '[ ]' is a POSIX command susceptible to them",
            "[[ ]]' only works with numeric comparisons",
            "'[ ]' is deprecated and should never be used"
        ],
        answer: 1,
        explanation: "[[ ]]' is a bash enhanced test that doesn't perform word splitting or pathname expansion on variables, making it safer for string comparisons.",
        difficulty: "Medium",
        topic: "Shell Scripting"
    },
    {
        id: "linux-141",
        question: "Which command displays the UUID of all block devices?",
        options: [
            "lsblk -u",
            "blkid",
            "fdisk -u",
            "uuidlist"
        ],
        answer: 1,
        explanation: "The blkid command displays information about block devices including their UUID (Universally Unique Identifier), type, and label.",
        difficulty: "Medium",
        topic: "Disk Management"
    },
    {
        id: "linux-142",
        question: "What is the default SELinux mode on RHEL systems that enforces policy but logs violations?",
        options: [
            "Disabled",
            "Permissive",
            "Enforcing",
            "Monitoring"
        ],
        answer: 2,
        explanation: "Enforcing mode actively enforces SELinux security policy, denying unauthorized actions and logging them. Permissive mode only logs without denying.",
        difficulty: "Medium",
        topic: "SELinux"
    },
    {
        id: "linux-143",
        question: "Which command creates a tunnel to forward local port 8080 to remote port 80 through SSH?",
        options: [
            "ssh -L 8080:localhost:80 user@remote",
            "ssh -R 8080:localhost:80 user@remote",
            "ssh -T 8080:localhost:80 user@remote",
            "ssh -P 8080:localhost:80 user@remote"
        ],
        answer: 0,
        explanation: "The -L flag creates a local port forward: connections to local port 8080 are tunneled through SSH to localhost:80 on the remote machine.",
        difficulty: "Medium",
        topic: "SSH"
    },
    {
        id: "linux-144",
        question: "What does the 'vmstat 1 5' command do?",
        options: [
            "Shows virtual memory status once with 5-second intervals",
            "Shows virtual memory statistics 5 times at 1-second intervals",
            "Shows virtual machine status for 5 CPUs",
            "Allocates 1GB of virtual memory 5 times"
        ],
        answer: 1,
        explanation: "vmstat with two arguments reports statistics every 1 second, for a total of 5 iterations, showing processes, memory, swap, I/O, and CPU stats.",
        difficulty: "Medium",
        topic: "System Monitoring"
    },
    {
        id: "linux-145",
        question: "Which command is used to change the SELinux context of a file?",
        options: [
            "selinux-context file",
            "chcon user_u:object_r:httpd_sys_content_t file",
            "setsebool file httpd_sys_content_t",
            "semanage fcontext file"
        ],
        answer: 1,
        explanation: "The chcon command changes the SELinux security context of files. However, for persistent changes, semanage fcontext with restorecon is preferred.",
        difficulty: "Medium",
        topic: "SELinux"
    },
    {
        id: "linux-146",
        question: "What does the 'iostat -x 1' command display?",
        options: [
            "Basic I/O statistics once",
            "Extended I/O statistics updated every 1 second",
            "I/O statistics for exactly 1 disk",
            "I/O statistics in XML format"
        ],
        answer: 1,
        explanation: "The -x flag shows extended statistics including await, svctm, and %util, and the 1 argument sets a 1-second refresh interval.",
        difficulty: "Medium",
        topic: "System Monitoring"
    },
    {
        id: "linux-147",
        question: "Which file should you edit to persistently change the hostname on a systemd-based system?",
        options: [
            "/etc/hostname",
            "/etc/sysconfig/network",
            "/etc/hosts",
            "/proc/sys/kernel/hostname"
        ],
        answer: 0,
        explanation: "On systemd-based systems, /etc/hostname contains the system hostname and is read by the systemd-hostnamed service during boot.",
        difficulty: "Medium",
        topic: "Networking"
    },
    {
        id: "linux-148",
        question: "What is the effect of the 'umask 022' setting?",
        options: [
            "New files are created with 022 permissions",
            "New files get 644 (666-022) and directories get 755 (777-022) permissions",
            "New files get 022 permissions and directories get 022 permissions",
            "All new files are read-only for group and others"
        ],
        answer: 1,
        explanation: "umask subtracts from the base permissions: files (666-022=644) and directories (777-022=755). This is the default on most Linux systems.",
        difficulty: "Medium",
        topic: "Permissions"
    },
    {
        id: "linux-149",
        question: "Which command shows the dependency tree of systemd services?",
        options: [
            "systemctl list-dependencies",
            "systemctl tree",
            "systemctl deps",
            "systemd-analyze deps"
        ],
        answer: 0,
        explanation: "The 'systemctl list-dependencies' command shows the dependency tree of a specified unit or the default target, showing which units must start first.",
        difficulty: "Medium",
        topic: "systemd"
    },
    {
        id: "linux-150",
        question: "What does 'grep -E '(error|warning|critical)'' do compared to 'egrep'?",
        options: [
            "grep -E is faster than egrep",
            "They are functionally equivalent; -E enables extended regular expressions just like egrep",
            "egrep supports more features than grep -E",
            "grep -E only works with fixed strings"
        ],
        answer: 1,
        explanation: "grep -E and egrep are functionally identical, both enabling extended regular expression syntax. egrep is essentially deprecated in favor of grep -E.",
        difficulty: "Medium",
        topic: "Linux Commands"
    },
    {
        id: "linux-151",
        question: "Which command securely erases the contents of a block device by writing zeros?",
        options: [
            "rm -rf /dev/sdb",
            "dd if=/dev/zero of=/dev/sdb bs=1M status=progress",
            "erase /dev/sdb",
            "zerofill /dev/sdb"
        ],
        answer: 1,
        explanation: "The dd command with /dev/zero as input writes null bytes to the entire block device, effectively erasing all data.",
        difficulty: "Medium",
        topic: "Disk Management"
    },
    {
        id: "linux-152",
        question: "What is the purpose of the /etc/resolv.conf file?",
        options: [
            "Resolves hostname conflicts on the network",
            "Configures DNS nameservers and search domains for the system",
            "Stores resolved hostname cache entries",
            "Defines hostname resolution priority between DNS and /etc/hosts"
        ],
        answer: 1,
        explanation: "The /etc/resolv.conf file specifies the IP addresses of DNS nameservers and the domain search list used for hostname resolution.",
        difficulty: "Medium",
        topic: "Networking"
    },
    {
        id: "linux-153",
        question: "Which command creates a tar archive and compresses it with xz in a single step?",
        options: [
            "tar -cJvf archive.tar.xz /dir",
            "tar -czvf archive.tar.xz /dir",
            "tar -xJvf archive.tar.xz /dir",
            "xz -c archive.tar /dir"
        ],
        answer: 0,
        explanation: "The -J flag in tar enables xz compression. -c creates, -J compresses with xz, -v is verbose, and -f specifies the output filename.",
        difficulty: "Medium",
        topic: "Compression"
    },
    {
        id: "linux-154",
        question: "What does 'ssh-keygen -t ed25519' do?",
        options: [
            "Generates an ED25519 encrypted filesystem",
            "Generates an SSH key pair using the ED25519 elliptic curve algorithm",
            "Converts an existing RSA key to ED25519",
            "Tests an existing ED25519 key for validity"
        ],
        answer: 1,
        explanation: "The ssh-keygen command with -t ed25519 generates a new SSH key pair using the ED25519 algorithm, which is modern, fast, and secure.",
        difficulty: "Medium",
        topic: "SSH"
    },
    {
        id: "linux-155",
        question: "In a bash for loop, what does 'for i in $(seq 1 10)' iterate over?",
        options: [
            "The string 'seq 1 10'",
            "Numbers 1 through 10, each as a separate iteration",
            "A single value '1 10'",
            "All files matching the pattern 'seq 1 10'"
        ],
        answer: 1,
        explanation: "Command substitution $(seq 1 10) generates numbers 1 through 10 on separate lines, which the for loop iterates over one at a time.",
        difficulty: "Medium",
        topic: "Shell Scripting"
    },
    {
        id: "linux-156",
        question: "What is the function of the 'cgroups' (control groups) feature in Linux?",
        options: [
            "Groups commands for batch execution",
            "Limits, accounts for, and isolates resource usage (CPU, memory, I/O) for process groups",
            "Manages user group memberships for security",
            "Controls which users can access which commands"
        ],
        answer: 1,
        explanation: "cgroups allow you to allocate resources such as CPU time, memory, and I/O bandwidth to groups of processes, fundamental to container technologies.",
        difficulty: "Medium",
        topic: "Kernel"
    },
    {
        id: "linux-157",
        question: "Which command shows the boot time analysis of systemd, listing the time each service took to start?",
        options: [
            "systemctl boot-time",
            "systemd-analyze blame",
            "systemd-analyze time",
            "systemctl analyze"
        ],
        answer: 1,
        explanation: "The 'systemd-analyze blame' command lists all running units sorted by the time they took to initialize, helping identify slow boot services.",
        difficulty: "Medium",
        topic: "systemd"
    },
    {
        id: "linux-158",
        question: "What does the 'at' command do differently from 'cron'?",
        options: [
            "at is used for recurring scheduled tasks while cron is for one-time tasks",
            "at executes a command once at a specified future time while cron is for recurring schedules",
            "at runs tasks with higher priority than cron",
            "at can only be used by root"
        ],
        answer: 1,
        explanation: "The at command schedules a one-time execution of a command at a specific future time, unlike cron which handles recurring schedules.",
        difficulty: "Medium",
        topic: "Scheduling"
    },
    {
        id: "linux-159",
        question: "Which command lists all loaded kernel modules?",
        options: [
            "lsmod",
            "modlist",
            "ls /lib/modules/$(uname -r)",
            "insmod -l"
        ],
        answer: 0,
        explanation: "The lsmod command displays a list of all kernel modules currently loaded in the system, read from /proc/modules.",
        difficulty: "Medium",
        topic: "Kernel"
    },
    {
        id: "linux-160",
        question: "What does the 'firewalld' service use as its underlying packet filtering mechanism?",
        options: [
            "TCP Wrapper",
            "nftables or iptables",
            "SELinux",
            "AppArmor"
        ],
        answer: 1,
        explanation: "firewalld is a frontend management tool that uses nftables (preferred on modern systems) or iptables as the backend for actual packet filtering.",
        difficulty: "Medium",
        topic: "Firewall"
    },
    {
        id: "linux-161",
        question: "Which command resizes an ext4 filesystem to fill its logical volume after extending it?",
        options: [
            "fsck -f /dev/vg00/lvol0",
            "resize2fs /dev/vg00/lvol0",
            "ext4resize /dev/vg00/lvol0",
            "tune2fs -R /dev/vg00/lvol0"
        ],
        answer: 1,
        explanation: "resize2fs grows or shrinks an ext2/ext3/ext4 filesystem. After extending an LV, this command makes the filesystem use the new space.",
        difficulty: "Medium",
        topic: "LVM"
    },
    {
        id: "linux-162",
        question: "What is the purpose of the 'trap' command in bash scripting?",
        options: [
            "Traps and logs all command output",
            "Catches and handles signals sent to the script, allowing cleanup before exit",
            "Traps syntax errors during script execution",
            "Creates network traps for monitoring"
        ],
        answer: 1,
        explanation: "The trap command allows a script to catch signals (like SIGINT, SIGTERM) and execute a cleanup function before the script terminates.",
        difficulty: "Medium",
        topic: "Shell Scripting"
    },
    {
        id: "linux-163",
        question: "Which command checks and repairs an ext4 filesystem on an unmounted partition?",
        options: [
            "fsck.ext4 /dev/sdb1",
            "repairfs /dev/sdb1",
            "e2fsck -p /dev/sdb1",
            "Both A and C"
        ],
        answer: 3,
        explanation: "fsck.ext4 and e2fsck are the same command (fsck.ext4 is a symlink to e2fsck). Both check and optionally repair ext4 filesystems.",
        difficulty: "Medium",
        topic: "Disk Management"
    },
    {
        id: "linux-164",
        question: "What does the '2>&1' redirection do?",
        options: [
            "Redirects stdout to stderr",
            "Redirects stderr to stdout, so both go to the same destination",
            "Sends stderr to file descriptor 1 and stdout to file descriptor 2",
            "Doubles the output buffer size"
        ],
        answer: 1,
        explanation: "2>&1 redirects file descriptor 2 (stderr) to wherever file descriptor 1 (stdout) is currently pointing, merging both streams.",
        difficulty: "Medium",
        topic: "Redirection"
    },
    {
        id: "linux-165",
        question: "Which command adds a new physical volume to an existing volume group?",
        options: [
            "vgextend vg00 /dev/sdb1",
            "pvcreate /dev/sdb1 && vgextend vg00 /dev/sdb1",
            "lvextend vg00 /dev/sdb1",
            "pvadd vg00 /dev/sdb1"
        ],
        answer: 1,
        explanation: "You must first initialize the disk as a physical volume with pvcreate, then add it to the volume group with vgextend.",
        difficulty: "Medium",
        topic: "LVM"
    },
    {
        id: "linux-166",
        question: "What does the 'sar' command collect and report?",
        options: [
            "System security audit reports",
            "System activity information including CPU, memory, disk, and network statistics",
            "Software availability reports",
            "Storage array reports"
        ],
        answer: 1,
        explanation: "The sar (System Activity Reporter) command collects, reports, and saves system activity information, useful for performance analysis over time.",
        difficulty: "Medium",
        topic: "System Monitoring"
    },
    {
        id: "linux-167",
        question: "Which command shows the ARP cache table on a Linux system?",
        options: [
            "arp -a",
            "ip neigh",
            "Both A and B",
            "arp cache --show"
        ],
        answer: 2,
        explanation: "Both 'arp -a' (traditional) and 'ip neigh' (modern) display the ARP cache, which maps IP addresses to MAC addresses on the local network.",
        difficulty: "Medium",
        topic: "Networking"
    },
    {
        id: "linux-168",
        question: "What is the purpose of the 'sysctl' command?",
        options: [
            "Manages system services",
            "Reads and modifies kernel parameters at runtime",
            "Controls system logging levels",
            "Manages system users and groups"
        ],
        answer: 1,
        explanation: "The sysctl command reads and modifies kernel parameters in the /proc/sys directory at runtime, such as network settings and memory management.",
        difficulty: "Medium",
        topic: "Kernel"
    },
    {
        id: "linux-169",
        question: "Which command configures a network interface to have IP 192.168.1.10/24 using the ip command?",
        options: [
            "ip addr add 192.168.1.10/24 dev eth0",
            "ip set 192.168.1.10/24 eth0",
            "ip config eth0 192.168.1.10 netmask 255.255.255.0",
            "ip assign 192.168.1.10/24 to eth0"
        ],
        answer: 0,
        explanation: "The 'ip addr add' command assigns an IP address with CIDR notation to a specified network interface.",
        difficulty: "Medium",
        topic: "Networking"
    },
    {
        id: "linux-170",
        question: "What does the 'file' command determine about a file?",
        options: [
            "Only the file extension",
            "The file type by examining its contents (text, binary, executable, image, etc.)",
            "Only the file size and permissions",
            "The file's creation date"
        ],
        answer: 1,
        explanation: "The file command uses magic numbers and other content analysis to determine the actual file type, independent of the file extension.",
        difficulty: "Medium",
        topic: "Linux Commands"
    },
    {
        id: "linux-171",
        question: "Which systemd target is equivalent to single-user mode for maintenance purposes?",
        options: [
            "multi-user.target",
            "rescue.target",
            "emergency.target",
            "basic.target"
        ],
        answer: 1,
        explanation: "The rescue.target provides a single-user shell with basic system services loaded, equivalent to traditional single-user/runlevel 1 mode.",
        difficulty: "Medium",
        topic: "systemd"
    },
    {
        id: "linux-172",
        question: "What is the difference between 'kill' and 'killall'?",
        options: [
            "No difference, they are aliases",
            "kill targets a specific PID while killall sends a signal to all processes with a matching name",
            "killall only works on system processes",
            "kill is more powerful and can kill any process regardless of permissions"
        ],
        answer: 1,
        explanation: "kill sends a signal to a specific process by PID, while killall sends a signal to all processes that match a given process name.",
        difficulty: "Medium",
        topic: "Processes"
    },
    {
        id: "linux-173",
        question: "Which command creates a RAID 1 array using two block devices?",
        options: [
            "mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sdb1 /dev/sdc1",
            "raidcreate --level 1 /dev/md0 /dev/sdb1 /dev/sdc1",
            "mdadm --build /dev/md0 -l 1 -n 2 /dev/sdb1 /dev/sdc1",
            "mkraid -t mirror /dev/md0 /dev/sdb1 /dev/sdc1"
        ],
        answer: 0,
        explanation: "The mdadm --create command with --level=1 creates a RAID 1 (mirroring) array using the specified number of devices.",
        difficulty: "Medium",
        topic: "Disk Management"
    },
    {
        id: "linux-174",
        question: "What does the 'chroot /newroot /bin/bash' command accomplish?",
        options: [
            "Changes the root password",
            "Changes the apparent root directory for the current process and its children",
            "Creates a new root user account",
            "Mounts a new root filesystem"
        ],
        answer: 1,
        explanation: "chroot changes the root directory for the running process and its children, making /newroot appear as /, commonly used for recovery and testing.",
        difficulty: "Medium",
        topic: "System Administration"
    },
    {
        id: "linux-175",
        question: "Which command shows active firewall rules in firewalld?",
        options: [
            "firewall-cmd --list-all",
            "firewalld --show-rules",
            "firewall-cmd --get-rules",
            "firewall-list"
        ],
        answer: 0,
        explanation: "The 'firewall-cmd --list-all' command displays all active zones, services, ports, and rich rules configured in firewalld.",
        difficulty: "Medium",
        topic: "Firewall"
    },
    {
        id: "linux-176",
        question: "What does the 'paste' command do with two files as input?",
        options: [
            "Pastes file2 after file1 sequentially",
            "Merges lines from each file side by side, separated by tabs",
            "Pastes the content of file2 into file1 at a specified line",
            "Combines files by interleaving their lines"
        ],
        answer: 1,
        explanation: "The paste command joins corresponding lines from multiple files horizontally, separating them with a tab character by default.",
        difficulty: "Medium",
        topic: "Text Processing"
    },
    {
        id: "linux-177",
        question: "Which command lists all systemd unit files and their enabled/disabled status?",
        options: [
            "systemctl list-units --all",
            "systemctl list-unit-files",
            "systemctl status --all",
            "systemd-analyze list-units"
        ],
        answer: 1,
        explanation: "The 'systemctl list-unit-files' command shows all available unit files on disk and their installation state (enabled, disabled, static, masked).",
        difficulty: "Medium",
        topic: "systemd"
    },
    {
        id: "linux-178",
        question: "What does the 'ss -s' command display?",
        options: [
            "SSL certificate details",
            "Socket statistics summary",
            "SSH session statistics",
            "Swap space summary"
        ],
        answer: 1,
        explanation: "The 'ss -s' command shows a summary of socket statistics including total established, closed, and orphaned TCP connections.",
        difficulty: "Medium",
        topic: "Networking"
    },
    {
        id: "linux-179",
        question: "Which command recursively copies a directory while preserving permissions, ownership, and symlinks over SSH?",
        options: [
            "scp -r /local/dir user@remote:/remote/dir",
            "rsync -avz /local/dir/ user@remote:/remote/dir/",
            "cp -a /local/dir | ssh user@remote 'cat > /remote/dir'",
            "tar cf - /local/dir | ssh user@remote 'tar xf - -C /remote/dir'"
        ],
        answer: 1,
        explanation: "rsync -a preserves permissions, ownership, symlinks, and timestamps; -v shows progress; -z compresses during transfer over SSH.",
        difficulty: "Medium",
        topic: "Networking"
    },
    {
        id: "linux-180",
        question: "What is the purpose of the 'namespaces' feature in the Linux kernel?",
        options: [
            "Manages DNS namespace resolution",
            "Provides isolation of system resources like process IDs, network, and filesystems for containers",
            "Organizes kernel module names",
            "Creates virtual hostnames for network interfaces"
        ],
        answer: 1,
        explanation: "Namespaces isolate global system resources so that a process sees its own isolated instance, forming the foundation of Linux container technology.",
        difficulty: "Medium",
        topic: "Kernel"
    },
    {
        id: "linux-181",
        question: "Which command converts an RPM package to a Debian package format?",
        options: [
            "rpm2deb",
            "alien package.rpm",
            "dpkg --convert package.rpm",
            "convert-rpm package.rpm"
        ],
        answer: 1,
        explanation: "The alien command converts between different Linux package formats, including RPM to DEB, though native packages are always preferred.",
        difficulty: "Medium",
        topic: "Package Managers"
    },
    {
        id: "linux-182",
        question: "What does the 'watch -n 2 df -h' command do?",
        options: [
            "Watches the df command for errors every 2 seconds",
            "Repeatedly runs 'df -h' every 2 seconds, displaying the output in the terminal",
            "Monitors disk space changes and alerts when usage exceeds 2%",
            "Shows disk usage history for the last 2 hours"
        ],
        answer: 1,
        explanation: "The watch command repeatedly executes a command at a specified interval (2 seconds here), updating the terminal display with each execution.",
        difficulty: "Medium",
        topic: "System Monitoring"
    },
    {
        id: "linux-183",
        question: "Which command masks a systemd service, preventing it from being started manually or automatically?",
        options: [
            "systemctl disable service",
            "systemctl mask service",
            "systemctl block service",
            "systemctl stop service --permanent"
        ],
        answer: 1,
        explanation: "systemctl mask creates a symlink to /dev/null, making it impossible to start the service even manually, unlike disable which only prevents auto-start.",
        difficulty: "Medium",
        topic: "systemd"
    },
    {
        id: "linux-184",
        question: "What does the 'nc -lvnp 8080' command do?",
        options: [
            "Connects to a server on port 8080",
            "Listens on port 8080 for incoming connections without DNS resolution",
            "Scans port 8080 on the local machine",
            "Forwards traffic from port 80 to port 8080"
        ],
        answer: 1,
        explanation: "netcat with -l (listen), -v (verbose), -n (no DNS), and -p 8080 (port) creates a simple listener on port 8080 for incoming connections.",
        difficulty: "Medium",
        topic: "Networking"
    },
    {
        id: "linux-185",
        question: "Which command verifies the integrity of an installed package against its original files?",
        options: [
            "rpm -V package_name",
            "rpm --check package_name",
            "rpm --verify package_name",
            "Both A and C"
        ],
        answer: 3,
        explanation: "Both 'rpm -V' and 'rpm --verify' compare installed files with the package metadata, reporting any changes to permissions, size, or checksums.",
        difficulty: "Medium",
        topic: "Package Managers"
    },
    {
        id: "linux-186",
        question: "What is the function of the 'logrotate' utility?",
        options: [
            "Rotates log entries in real-time",
            "Automatically compresses, rotates, and removes old log files based on configured rules",
            "Rotates the syslog daemon",
            "Converts log formats between different systems"
        ],
        answer: 1,
        explanation: "logrotate manages log files by compressing, rotating (renaming), and removing old logs according to rules defined in /etc/logrotate.conf and /etc/logrotate.d/.",
        difficulty: "Medium",
        topic: "Logs"
    },
    {
        id: "linux-187",
        question: "Which command shows the memory map of a running process?",
        options: [
            "memstat -p PID",
            "pmap PID",
            "vmmap PID",
            "procmap PID"
        ],
        answer: 1,
        explanation: "The pmap command displays the memory map of a process, showing each memory region's address range, size, permissions, and mapping source.",
        difficulty: "Medium",
        topic: "Processes"
    },
    {
        id: "linux-188",
        question: "What does the 'curl -o output.html https://example.com' command do?",
        options: [
            "Only checks the HTTP headers of the URL",
            "Downloads the URL content and saves it to output.html instead of stdout",
            "Opens the URL in a browser",
            "Uploads output.html to the server"
        ],
        answer: 1,
        explanation: "The -o flag specifies an output filename, so curl writes the downloaded content to output.html instead of printing it to the terminal.",
        difficulty: "Medium",
        topic: "Networking"
    },
    {
        id: "linux-189",
        question: "Which command finds all files owned by a specific user ID (UID 1001)?",
        options: [
            "find / -uid 1001",
            "find / -user 1001",
            "ls -R / | grep 1001",
            "locate uid:1001"
        ],
        answer: 0,
        explanation: "The 'find / -uid 1001' command searches for all files whose owner's numeric user ID is 1001, even if the username has been deleted.",
        difficulty: "Medium",
        topic: "File Search"
    },
    {
        id: "linux-190",
        question: "What is the difference between a daemon and a regular process?",
        options: [
            "Daemons run at higher priority",
            "Daemons are background processes that run continuously, typically started at boot, unassociated with any terminal",
            "Daemons cannot be killed",
            "Daemons only exist in the kernel space"
        ],
        answer: 1,
        explanation: "Daemons are long-running background processes that detach from any controlling terminal, typically providing services or waiting for events.",
        difficulty: "Medium",
        topic: "Processes"
    },
    {
        id: "linux-191",
        question: "Which command configures a persistent static route on a RHEL system using NetworkManager?",
        options: [
            "ip route add 10.0.0.0/24 via 192.168.1.1",
            "nmcli connection modify eth0 +ipv4.routes '10.0.0.0/24 192.168.1.1'",
            "route add -net 10.0.0.0/24 gw 192.168.1.1",
            "echo '10.0.0.0/24 via 192.168.1.1' >> /etc/routes"
        ],
        answer: 1,
        explanation: "nmcli modifies the NetworkManager connection profile to add a persistent static route that survives reboots, unlike 'ip route add' which is temporary.",
        difficulty: "Medium",
        topic: "Networking"
    },
    {
        id: "linux-192",
        question: "What does the 'split -l 1000 largefile.txt' command do?",
        options: [
            "Splits the file into 1000 equal parts",
            "Splits the file into multiple smaller files, each containing 1000 lines",
            "Removes the first 1000 lines from the file",
            "Splits the file at line 1000, creating exactly two files"
        ],
        answer: 1,
        explanation: "The split -l flag splits a file into smaller files with the specified number of lines each, creating files named xaa, xab, xac, etc.",
        difficulty: "Medium",
        topic: "Text Processing"
    },
    {
        id: "linux-193",
        question: "Which command shows the SELinux boolean values and their current state?",
        options: [
            "sestatus -b",
            "getsebool -a",
            "semanage boolean -l",
            "selinux-bools --list"
        ],
        answer: 1,
        explanation: "The getsebool -a command lists all SELinux booleans and their current on/off state, which can be used to toggle specific policy allowances.",
        difficulty: "Medium",
        topic: "SELinux"
    },
    {
        id: "linux-194",
        question: "What is the effect of running 'exec > /var/log/script.log 2>&1' in a script?",
        options: [
            "Appends all output to the log file",
            "Replaces the current shell's stdout and stderr with the log file for all subsequent commands",
            "Creates a tee-like split of output to both console and file",
            "Only logs error messages to the file"
        ],
        answer: 1,
        explanation: "The exec command with redirection replaces the current shell's file descriptors, so all subsequent commands in the script write to the log file.",
        difficulty: "Medium",
        topic: "Redirection"
    },
    {
        id: "linux-195",
        question: "Which command creates a snapshot of an LVM logical volume?",
        options: [
            "lvcreate --snapshot -n snap01 -L 1G /dev/vg00/lvol0",
            "lvsnap -c snap01 /dev/vg00/lvol0",
            "lv snapshot /dev/vg00/lvol0 snap01 1G",
            "lvclone -s snap01 /dev/vg00/lvol0"
        ],
        answer: 0,
        explanation: "The lvcreate command with --snapshot creates a point-in-time snapshot of the specified LV, using the allocated space for tracking changes.",
        difficulty: "Medium",
        topic: "LVM"
    },
    {
        id: "linux-196",
        question: "What does the 'diff -u file1 file2' output format provide?",
        options: [
            "Only shows which lines are different without context",
            "Unified diff format showing added and removed lines with surrounding context",
            "A binary comparison result",
            "Only shows lines that exist in both files"
        ],
        answer: 1,
        explanation: "The -u (unified) format shows differences with context lines before and after each change, using + for additions and - for removals, which is the standard for patches.",
        difficulty: "Medium",
        topic: "Text Processing"
    },
    {
        id: "linux-197",
        question: "Which command lists all D-Bus messages for a specific systemd unit?",
        options: [
            "dbus-monitor --system",
            "journalctl -u unit.service -o verbose",
            "systemctl debug unit.service",
            "busctl monitor"
        ],
        answer: 1,
        explanation: "journalctl with -o verbose shows detailed journal entries including D-Bus fields for a specific unit, useful for debugging service communication.",
        difficulty: "Medium",
        topic: "systemd"
    },
    {
        id: "linux-198",
        question: "What does the 'tune2fs -l /dev/sda1' command display?",
        options: [
            "Files larger than 1MB on the filesystem",
            "Superblock information and filesystem parameters for an ext2/3/4 filesystem",
            "A list of all files on the partition",
            "Logical volume details"
        ],
        answer: 1,
        explanation: "The tune2fs -l command lists the superblock contents of an ext filesystem, showing parameters like block size, inode count, and mount count.",
        difficulty: "Medium",
        topic: "Disk Management"
    },
    {
        id: "linux-199",
        question: "Which command checks which package provides a specific file on a Debian system?",
        options: [
            "dpkg -S /path/to/file",
            "apt-file search /path/to/file",
            "Both A and B can be used for this purpose",
            "dpkg --provides /path/to/file"
        ],
        answer: 2,
        explanation: "dpkg -S searches installed packages, while apt-file search can search both installed and uninstalled package file lists for a given filename.",
        difficulty: "Medium",
        topic: "Package Managers"
    },
    {
        id: "linux-200",
        question: "What does the 'ssh -o StrictHostKeyChecking=no' option do?",
        options: [
            "Disables SSH key authentication entirely",
            "Automatically accepts new host keys without prompting, which is a security risk",
            "Disables checking of the user's SSH key permissions",
            "Prevents SSH from using any host key verification"
        ],
        answer: 1,
        explanation: "This option bypasses the host key verification prompt, automatically adding new host keys. This is convenient in scripts but vulnerable to MITM attacks.",
        difficulty: "Medium",
        topic: "SSH"
    },
    {
        id: "linux-201",
        question: "Which command shows the rate of context switches per second on a Linux system?",
        options: [
            "vmstat 1",
            "iostat -c 1",
            "mpstat 1",
            "All of the above can show context switch information"
        ],
        answer: 0,
        explanation: "vmstat shows the 'cs' (context switches) column in its output, displaying the number of context switches per second when run with an interval.",
        difficulty: "Medium",
        topic: "System Monitoring"
    },
    {
        id: "linux-202",
        question: "What is the function of the 'autofs' service in Linux?",
        options: [
            "Automatically mounts filesystems at boot",
            "Automatically mounts and unmounts filesystems on demand when they are accessed",
            "Automatically formats new disks",
            "Automatically creates filesystem snapshots"
        ],
        answer: 1,
        explanation: "autofs uses a map file to automatically mount filesystems when a user accesses a mount point and unmount them after a period of inactivity.",
        difficulty: "Medium",
        topic: "Disk Management"
    },
    {
        id: "linux-203",
        question: "Which command shows the default file descriptor limits for the current user?",
        options: [
            "ulimit -n",
            "ulimit -a",
            "Both show file descriptor limits, with different detail levels",
            "lsof --limits"
        ],
        answer: 2,
        explanation: "ulimit -n shows only the open files limit, while ulimit -a shows all resource limits including open files. Both are valid for checking file descriptor limits.",
        difficulty: "Medium",
        topic: "Shell"
    },
    {
        id: "linux-204",
        question: "What does the 'ldconfig' command do?",
        options: [
            "Loads kernel modules",
            "Updates the shared library cache from directories listed in /etc/ld.so.conf",
            "Configures LDAP authentication",
            "Loads dynamic kernel parameters"
        ],
        answer: 1,
        explanation: "ldconfig creates and updates the linker cache (/etc/ld.so.cache) from the shared libraries found in directories listed in /etc/ld.so.conf and its includes.",
        difficulty: "Medium",
        topic: "Linux Architecture"
    },
    {
        id: "linux-205",
        question: "Which command lists the dependencies (shared libraries) required by a binary executable?",
        options: [
            "ldd /path/to/binary",
            "ldconfig -p /path/to/binary",
            "depcheck /path/to/binary",
            "objdump -d /path/to/binary"
        ],
        answer: 0,
        explanation: "The ldd command lists the shared libraries required by a dynamically linked executable, showing each library's path and the loader that resolves them.",
        difficulty: "Medium",
        topic: "Linux Architecture"
    },
    {
        id: "linux-206",
        question: "What does 'grep -oP '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}' file.txt' extract?",
        options: [
            "All lines containing numbers",
            "Only IP addresses matching the pattern from each line",
            "All numeric characters from the file",
            "All lines that start with an IP address"
        ],
        answer: 1,
        explanation: "The -o flag outputs only the matching portions, -P enables Perl-compatible regex, and the pattern matches sequences that look like IP addresses.",
        difficulty: "Medium",
        topic: "Regular Expressions"
    },
    {
        id: "linux-207",
        question: "Which command is used to rebuild the initial RAM disk (initramfs) on a Debian-based system?",
        options: [
            "mkinitrd -o /boot/initrd.img",
            "update-initramfs -u -k all",
            "dracut -f",
            "mkinitcpio -P"
        ],
        answer: 1,
        explanation: "update-initramfs is the Debian/Ubuntu tool to generate or update initramfs images. dracut is used on RHEL/Fedora, and mkinitcpio on Arch.",
        difficulty: "Medium",
        topic: "Boot Process"
    },
    {
        id: "linux-208",
        question: "What does the 'read -p 'Enter name: ' name' command do in a script?",
        options: [
            "Reads from a file named 'name'",
            "Displays a prompt and reads user input into the variable 'name'",
            "Reads the variable 'name' from the environment",
            "Prints the value of 'name' with a prompt"
        ],
        answer: 1,
        explanation: "The read command with -p displays a prompt string without a newline, then reads user input from stdin into the specified variable.",
        difficulty: "Medium",
        topic: "Shell Scripting"
    },
    {
        id: "linux-209",
        question: "Which command shows the TCP connection state counts (ESTABLISHED, TIME_WAIT, etc.)?",
        options: [
            "ss -s",
            "netstat -an | grep tcp | awk '{print $6}' | sort | uniq -c",
            "Both can show TCP state counts",
            "tcpstate --count"
        ],
        answer: 2,
        explanation: "Both 'ss -s' (which shows a TCP summary) and the netstat/awk pipeline (which counts each state) can display TCP connection state distributions.",
        difficulty: "Medium",
        topic: "Networking"
    },
    {
        id: "linux-210",
        question: "What does the 'set -o pipefail' option do in bash?",
        options: [
            "Fails the pipe if any command in the pipeline fails, setting the exit status to the rightmost failed command",
            "Prevents pipes from being created",
            "Makes pipes fail silently",
            "Sets the pipe buffer size to zero"
        ],
        answer: 0,
        explanation: "By default, a pipeline's exit status is that of the last command. pipefail makes it return the exit status of the rightmost command that failed.",
        difficulty: "Medium",
        topic: "Shell Scripting"
    },
    {
        id: "linux-211",
        question: "Which command shows all environment variables and their values sorted alphabetically?",
        options: [
            "env | sort",
            "printenv | sort",
            "export | sort",
            "Both A and B"
        ],
        answer: 3,
        explanation: "Both env and printenv list environment variables. Piping to sort alphabetizes the output. 'export' without arguments also works but includes function declarations.",
        difficulty: "Medium",
        topic: "Environment Variables"
    },
    {
        id: "linux-212",
        question: "What is the purpose of the 'semanage fcontext' command?",
        options: [
            "Manages SELinux file context rules persistently",
            "Temporarily changes the SELinux context of a file",
            "Manages SELinux port contexts",
            "Manages SELinux boolean values"
        ],
        answer: 0,
        explanation: "semanage fcontext manages file context mapping rules in the SELinux policy, which can then be applied with restorecon for persistent context changes.",
        difficulty: "Medium",
        topic: "SELinux"
    },
    {
        id: "linux-213",
        question: "Which command creates a systemd service unit file from a command template?",
        options: [
            "systemctl create-service",
            "systemd-run --unit=myapp /path/to/app",
            "systemd-new-unit myapp",
            "mkunit myapp.service"
        ],
        answer: 1,
        explanation: "systemd-run can create and start a transient or persistent unit from a command line, useful for running commands as systemd services dynamically.",
        difficulty: "Medium",
        topic: "systemd"
    },
    {
        id: "linux-214",
        question: "What does 'du -sh * | sort -rh | head -5' display?",
        options: [
            "The five smallest files in the current directory",
            "The five largest files in the current directory",
            "The five largest directories/files in the current directory in human-readable format",
            "The total disk usage of the five most recently modified files"
        ],
        answer: 2,
        explanation: "du -sh * shows human-readable sizes, sort -rh sorts in reverse human-numeric order, and head -5 shows the top 5 largest entries.",
        difficulty: "Medium",
        topic: "Disk Usage"
    },
    {
        id: "linux-215",
        question: "Which command sets a kernel parameter to enable IP forwarding persistently?",
        options: [
            "echo 1 > /proc/sys/net/ipv4/ip_forward",
            "sysctl -w net.ipv4.ip_forward=1",
            "Adding 'net.ipv4.ip_forward = 1' to /etc/sysctl.conf and running sysctl -p",
            "ip route set forward on"
        ],
        answer: 2,
        explanation: "Adding the parameter to /etc/sysctl.conf (or a file in /etc/sysctl.d/) and applying with sysctl -p makes the change persistent across reboots.",
        difficulty: "Medium",
        topic: "Networking"
    },
    {
        id: "linux-216",
        question: "What does the 'column -t' command do when processing tabular data?",
        options: [
            "Removes table formatting",
            "Creates table columns from comma-separated values",
            "Determines column widths and aligns text into neat columns",
            "Transposes rows and columns"
        ],
        answer: 2,
        explanation: "The column -t flag determines the number of columns, calculates the width of each, and aligns input text into a neatly formatted table.",
        difficulty: "Medium",
        topic: "Text Processing"
    },
    {
        id: "linux-217",
        question: "Which command shows what a specific RPM package will install before actually installing it?",
        options: [
            "rpm -qpl package.rpm",
            "rpm --test -i package.rpm",
            "yum install --downloadonly package",
            "rpm -qp --scripts package.rpm"
        ],
        answer: 0,
        explanation: "The 'rpm -qpl' command queries an uninstalled RPM package and lists all files it would install, with -q for query, -p for package file, and -l for list.",
        difficulty: "Medium",
        topic: "Package Managers"
    },
    {
        id: "linux-218",
        question: "What is the purpose of the 'tmpfiles.d' configuration in systemd?",
        options: [
            "Manages temporary file cleanup and creation at boot and periodically",
            "Configures temporary filesystem mount options",
            "Manages tmpfs size limits",
            "Defines which directories can store temporary files"
        ],
        answer: 0,
        explanation: "systemd-tmpfiles reads configuration from tmpfiles.d to create, delete, or clean up temporary files and directories at boot and at regular intervals.",
        difficulty: "Medium",
        topic: "systemd"
    },
    {
        id: "linux-219",
        question: "Which command shows the mount options used for a specific filesystem?",
        options: [
            "mount | grep /mount-point",
            "findmnt -n -o OPTIONS /mount-point",
            "Both A and B",
            "cat /proc/mounts | grep /mount-point"
        ],
        answer: 2,
        explanation: "All three commands can display mount options: mount shows all mounts, findmnt can filter by mount point, and /proc/mounts shows kernel mount information.",
        difficulty: "Medium",
        topic: "Disk Management"
    },
    {
        id: "linux-220",
        question: "What does the 'tee /dev/tty' command in the middle of a pipeline accomplish?",
        options: [
            "Sends output only to the terminal",
            "Copies the pipeline data to the terminal (tty) while still passing it to the next command",
            "Creates a new terminal session",
            "Redirects terminal input to the pipeline"
        ],
        answer: 1,
        explanation: "tee /dev/tty writes a copy of the stdin data to the terminal display while also passing it through to stdout for the next pipeline command.",
        difficulty: "Medium",
        topic: "Pipes"
    },
    {
        id: "linux-221",
        question: "Which command enables UFW and allows SSH connections before applying broader rules?",
        options: [
            "ufw enable && ufw allow ssh",
            "ufw allow ssh && ufw enable",
            "ufw --enable-ssh",
            "ufw default allow && ufw enable"
        ],
        answer: 1,
        explanation: "You should add the SSH allow rule before enabling UFW to avoid locking yourself out. The order matters because enabling activates the firewall immediately.",
        difficulty: "Medium",
        topic: "Firewall"
    },
    {
        id: "linux-222",
        question: "What does the 'script' command do?",
        options: [
            "Executes a shell script",
            "Records a transcript of everything printed to your terminal session",
            "Checks shell script syntax",
            "Converts a shell script to binary"
        ],
        answer: 1,
        explanation: "The script command makes a typescript of everything printed on your terminal, saving it to a file for later review or documentation purposes.",
        difficulty: "Medium",
        topic: "Linux Commands"
    },
    {
        id: "linux-223",
        question: "Which command shrinks an XFS filesystem (if needed for LVM reduction)?",
        options: [
            "xfs_shrink /dev/vg00/lvol0",
            "xfs_growfs -D size /mount-point",
            "XFS filesystems cannot be shrunk; you must backup, recreate, and restore",
            "resize.xfs -s /dev/vg00/lvol0"
        ],
        answer: 2,
        explanation: "XFS is a filesystem that only supports growing, not shrinking. To reduce an XFS LV, you must backup data, destroy and recreate the LV smaller, and restore.",
        difficulty: "Medium",
        topic: "LVM"
    },
    {
        id: "linux-224",
        question: "What does the 'timeout 30 command' do?",
        options: [
            "Sets a CPU time limit of 30 seconds",
            "Runs the command and sends SIGTERM if it doesn't finish within 30 seconds",
            "Pauses for 30 seconds before running the command",
            "Retries the command every 30 seconds"
        ],
        answer: 1,
        explanation: "The timeout command runs a command with a time limit, sending SIGTERM (or SIGKILL after a grace period) if the command doesn't exit within the specified duration.",
        difficulty: "Medium",
        topic: "Processes"
    },
    {
        id: "linux-225",
        question: "Which command displays the process ID of the last background command started?",
        options: [
            "$!",
            "$?",
            "$$",
            "$#"
        ],
        answer: 0,
        explanation: "The special variable $! contains the process ID (PID) of the last command placed in the background using the & operator.",
        difficulty: "Medium",
        topic: "Shell Scripting"
    },
    {
        id: "linux-226",
        question: "What is the function of 'systemd-resolved' in modern Linux systems?",
        options: [
            "Resolves systemd service dependencies",
            "Provides network name resolution (DNS, LLMNR, mDNS) as a system service",
            "Resolves conflicts between systemd units",
            "Resolves kernel module dependencies"
        ],
        answer: 1,
        explanation: "systemd-resolved is a DNS stub resolver that provides network name resolution to local applications, handling DNS, LLMNR, and Multicast DNS.",
        difficulty: "Medium",
        topic: "systemd"
    },
    {
        id: "linux-227",
        question: "Which command shows what process is using a specific file or directory?",
        options: [
            "fuser /path/to/file",
            "lsof /path/to/file",
            "Both can show processes using a file",
            "findproc /path/to/file"
        ],
        answer: 2,
        explanation: "Both fuser and lsof can identify which processes have a specific file open. fuser is more concise, while lsof provides more detailed information.",
        difficulty: "Medium",
        topic: "Troubleshooting"
    },
    {
        id: "linux-228",
        question: "What does the 'chattr +i file' command do?",
        options: [
            "Makes the file immutable (cannot be modified, deleted, or renamed, even by root)",
            "Sets the file to be indexed for faster searching",
            "Makes the file invisible to ls",
            "Marks the file as important for the kernel"
        ],
        answer: 0,
        explanation: "The +i (immutable) attribute set by chattr makes the file completely immutable; even root cannot modify, delete, or create hard links to it until the attribute is removed.",
        difficulty: "Medium",
        topic: "Linux Security"
    },
    {
        id: "linux-229",
        question: "Which command shows the differences between the running configuration and the stored configuration of a firewalld zone?",
        options: [
            "firewall-cmd --diff",
            "firewall-cmd --check-config",
            "firewall-cmd --list-all --permanent",
            "firewall-cmd --compare"
        ],
        answer: 0,
        explanation: "The 'firewall-cmd --diff' command shows the differences between the current runtime configuration and the permanent configuration of firewalld.",
        difficulty: "Medium",
        topic: "Firewall"
    },
    {
        id: "linux-230",
        question: "What does the 'MAP#=' in awk's -F option signify when used as '-F'[,:]'?",
        options: [
            "Sets the field separator to a comma followed by a colon",
            "Sets the field separator to either a comma or a colon (character class)",
            "Sets the field separator to the string ',:'",
            "This is invalid awk syntax"
        ],
        answer: 1,
        explanation: "When the field separator is enclosed in brackets, awk treats it as a character class, so either comma or colon will be treated as a field delimiter.",
        difficulty: "Medium",
        topic: "Text Processing"
    },
    {
        id: "linux-231",
        question: "Which command on RHEL shows which package provides the 'vim' binary?",
        options: [
            "yum whatprovides '*/vim'",
            "rpm -qf /usr/bin/vim",
            "dnf provides vim",
            "All of the above can help find which package provides vim"
        ],
        answer: 3,
        explanation: "All three commands can help identify which package provides a specific file or binary, though they search in different ways and scopes.",
        difficulty: "Medium",
        topic: "Package Managers"
    },
    {
        id: "linux-232",
        question: "What is the purpose of the 'proc/sys/kernel/pid_max' file?",
        options: [
            "Shows the maximum number of processes allowed",
            "Shows the maximum PID value that can be assigned",
            "Shows the maximum number of threads per process",
            "Shows the maximum number of zombie processes allowed"
        ],
        answer: 1,
        explanation: "pid_max defines the maximum value for process IDs on the system. On 64-bit systems, the default is typically 32768 or 4194303.",
        difficulty: "Medium",
        topic: "Kernel"
    },
    {
        id: "linux-233",
        question: "Which command creates a self-signed SSL certificate and private key using OpenSSL?",
        options: [
            "openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes",
            "openssl genkey -selfsign -out cert.pem -keyout key.pem",
            "ssl-create --self-signed cert.pem key.pem",
            "mkcert --self-signed cert.pem key.pem"
        ],
        answer: 0,
        explanation: "This OpenSSL command generates a new RSA private key and a self-signed X.509 certificate valid for 365 days without encrypting the private key (-nodes).",
        difficulty: "Medium",
        topic: "Linux Security"
    },
    {
        id: "linux-234",
        question: "What does the 'sysctl fs.file-max' display?",
        options: [
            "Maximum file size in bytes",
            "System-wide limit on the number of open file descriptors",
            "Maximum number of files per user",
            "Maximum number of files per filesystem"
        ],
        answer: 1,
        explanation: "fs.file-max is a kernel parameter that sets the system-wide limit on the total number of open file descriptors across all processes.",
        difficulty: "Medium",
        topic: "Kernel"
    },
    {
        id: "linux-235",
        question: "Which command shows the priority and nice values of all running processes?",
        options: [
            "ps -eo pid,ni,pri,cmd",
            "top -o NI",
            "Both A and B",
            "nice --list"
        ],
        answer: 2,
        explanation: "Both commands can show priority information: ps with custom output format shows NI (nice) and PRI (priority), and top can sort by nice value.",
        difficulty: "Medium",
        topic: "Processes"
    },
    {
        id: "linux-236",
        question: "What does the 'date +%s' command output?",
        options: [
            "The current second (0-59)",
            "The current Unix epoch timestamp (seconds since 1970-01-01 00:00:00 UTC)",
            "The current date in short format",
            "The system's timezone offset in seconds"
        ],
        answer: 1,
        explanation: "The %s format specifier in the date command outputs the number of seconds since the Unix epoch (January 1, 1970, 00:00:00 UTC).",
        difficulty: "Medium",
        topic: "Shell Scripting"
    },
    {
        id: "linux-237",
        question: "Which command generates a random 32-character hex string suitable for use as a secret key?",
        options: [
            "rand -hex 32",
            "openssl rand -hex 16",
            "cat /dev/random | head -c 32 | xxd -p",
            "Both B and C work"
        ],
        answer: 3,
        explanation: "Both commands generate 32 hex characters: openssl rand -hex 16 produces 16 random bytes displayed as 32 hex chars, and the /dev/random pipeline does the same.",
        difficulty: "Medium",
        topic: "Linux Security"
    },
    {
        id: "linux-238",
        question: "What does the 'dnf history undo 5' command do on a RHEL/Fedora system?",
        options: [
            "Removes entry 5 from the history log",
            "Undoes all transactions performed in transaction ID 5, reversing package changes",
            "Redoes transaction 5 with different options",
            "Shows the details of transaction 5 before undoing"
        ],
        answer: 1,
        explanation: "The dnf history undo command reverses all package changes made during a specific transaction, effectively rolling back that set of installations or removals.",
        difficulty: "Medium",
        topic: "Package Managers"
    },
    {
        id: "linux-239",
        question: "Which command shows which network namespaces exist on the system?",
        options: [
            "ls /var/run/netns/",
            "ip netns list",
            "Both A and B",
            "netns --list"
        ],
        answer: 2,
        explanation: "Both 'ip netns list' and listing /var/run/netns/ show the persistent network namespaces configured on the system.",
        difficulty: "Medium",
        topic: "Networking"
    },
    {
        id: "linux-240",
        question: "What does 'shopt -s nocasematch' do in a bash script?",
        options: [
            "Disables case sensitivity for all commands",
            "Enables case-insensitive pattern matching in bash conditional expressions",
            "Makes variable names case-insensitive",
            "Disables case-sensitive filename completion"
        ],
        answer: 1,
        explanation: "The nocasematch shell option makes pattern matching in case and [[ ]] constructs case-insensitive, affecting string comparisons in scripts.",
        difficulty: "Medium",
        topic: "Shell Scripting"
    },
    {
        id: "linux-241",
        question: "A system fails to boot with 'Kernel panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0)'. What is the most likely cause?",
        options: [
            "The CPU is overheating",
            "The initramfs is missing, corrupted, or does not contain the necessary drivers to access the root filesystem",
            "The hostname is not configured correctly",
            "There is insufficient swap space"
        ],
        answer: 1,
        explanation: "This error indicates the kernel cannot find or access the root filesystem, usually because the initramfs lacks the storage driver (e.g., LVM, RAID, filesystem module) needed to mount it.",
        difficulty: "Hard",
        topic: "Boot Troubleshooting"
    },
    {
        id: "linux-242",
        question: "What happens when a process encounters a page fault for a page that is swapped out to disk?",
        options: [
            "The process is immediately killed with SIGSEGV",
            "The kernel suspends the process, reads the page from swap space into physical memory, updates the page table, and resumes the process",
            "The process continues execution using a zero-filled page",
            "The OOM killer is triggered to free memory"
        ],
        answer: 1,
        explanation: "A major page fault triggers the kernel's page fault handler to swap the page back in from disk. The process is blocked during this I/O operation and resumes once the page is available.",
        difficulty: "Hard",
        topic: "Kernel"
    },
    {
        id: "linux-243",
        question: "In LVM, what occurs when a physical volume in a volume group fails in a configuration WITHOUT mirroring?",
        options: [
            "Only the data on the failed PV is lost; remaining LVs continue normally",
            "All logical volumes in the VG may become corrupted or inaccessible since LV data is striped across PVs",
            "LVM automatically reconstructs the missing data from parity",
            "The VG is automatically deactivated to prevent data loss"
        ],
        answer: 1,
        explanation: "Without LVM mirroring, LV data is striped across PVs. If one PV fails, all LVs using extents on that PV will have corrupted or missing data, potentially making them inaccessible.",
        difficulty: "Hard",
        topic: "LVM"
    },
    {
        id: "linux-244",
        question: "What is the significance of the 'dentry cache' (dcache) in the Linux kernel?",
        options: [
            "It caches DNS lookups for faster name resolution",
            "It caches directory entry-to-inode mappings to speed up path resolution without hitting disk",
            "It caches directory listings for the ls command",
            "It stores deleted directory entries for recovery"
        ],
        answer: 1,
        explanation: "The dentry cache stores the results of directory lookups (name-to-inode mappings) in RAM, dramatically speeding up file path resolution by avoiding disk access for repeated lookups.",
        difficulty: "Hard",
        topic: "Kernel"
    },
    {
        id: "linux-245",
        question: "A server has high iowait but low CPU usage. Running 'iostat -x 1' shows %util at 100% on one disk with low await. What could explain this?",
        options: [
            "The disk is failing and needs replacement",
            "There are many small, random I/O operations saturating the disk's IOPS capacity despite low latency per operation",
            "The filesystem is corrupted",
            "The disk cache is disabled causing all writes to bypass the buffer"
        ],
        answer: 1,
        explanation: "High %util with low await and high iowait indicates the disk is saturated with many concurrent I/O operations. Each individual operation has low latency, but collectively they consume all available I/O capacity.",
        difficulty: "Hard",
        topic: "Performance Tuning"
    },
    {
        id: "linux-246",
        question: "What does the 'COW' (Copy-On-Write) mechanism mean in the context of the Linux kernel and filesystems like Btrfs?",
        options: [
            "All writes are copied to a separate log before being committed",
            "When data is modified, the original data is not overwritten; instead, a copy is made in a new location, preserving the original for snapshots",
            "Write operations are copied to a remote server for redundancy",
            "Data is written in a copy of the filesystem in memory before being flushed to disk"
        ],
        answer: 1,
        explanation: "COW ensures that when data is modified, the new data is written to a different location, leaving the original data intact. This enables efficient snapshots and data integrity features in filesystems like Btrfs and ZFS.",
        difficulty: "Hard",
        topic: "File System"
    },
    {
        id: "linux-247",
        question: "In SELinux, what is the difference between a 'domain transition' and a 'type transition'?",
        options: [
            "They are the same concept",
            "A domain transition changes the process security context (domain) during exec, while a type transition changes the file type created by a process",
            "A type transition is only used for network sockets",
            "Domain transitions are deprecated in modern SELinux"
        ],
        answer: 1,
        explanation: "Domain transitions change a process's security domain (e.g., when httpd executes a CGI script). Type transitions define what label new files receive when created by a process in a specific domain.",
        difficulty: "Hard",
        topic: "SELinux"
    },
    {
        id: "linux-248",
        question: "What is the function of the 'OOM killer' in the Linux kernel, and when is it triggered?",
        options: [
            "It kills processes that consume too much CPU time",
            "It is invoked when the system runs out of memory and cannot free enough pages, selecting and killing processes based on a scoring algorithm (oom_score)",
            "It kills all processes belonging to a user who exceeds their memory quota",
            "It is triggered when swap space is full"
        ],
        answer: 1,
        explanation: "The OOM killer is the kernel's last resort when no reclaimable memory is available. It uses oom_score (based on memory usage, nice value, and other factors) to select which process to terminate.",
        difficulty: "Hard",
        topic: "Kernel"
    },
    {
        id: "linux-249",
        question: "Which troubleshooting step should you take when a systemd service enters the 'failed' state immediately after starting?",
        options: [
            "Immediately restart the service with systemctl restart",
            "Check 'systemctl status service' for the exit code, then examine 'journalctl -u service -n 50 --no-pager' for detailed error logs",
            "Reinstall the package providing the service",
            "Disable SELinux and try again"
        ],
        answer: 1,
        explanation: "systemctl status provides the exit code and immediate error, while journalctl gives the full service output and error messages needed to diagnose the root cause before attempting fixes.",
        difficulty: "Hard",
        topic: "Troubleshooting"
    },
    {
        id: "linux-250",
        question: "What is the 'thundering herd' problem in the context of Linux epoll/select system calls?",
        options: [
            "Too many network connections causing a DDoS-like effect",
            "When an event occurs on a shared file descriptor, all waiting processes are woken up simultaneously but only one can handle it, wasting CPU resources",
            "Too many epoll instances created for a single application",
            "A kernel bug that causes network packets to be duplicated"
        ],
        answer: 1,
        explanation: "The thundering herd problem occurs when multiple processes block on the same resource and all are awakened when an event occurs, but only one can proceed, causing unnecessary CPU wakeups.",
        difficulty: "Hard",
        topic: "Kernel"
    },
    {
        id: "linux-251",
        question: "In a bash script, what is the difference between 'local var=value' inside a function and 'declare var=value'?",
        options: [
            "No difference; they are identical",
            "'local' creates a variable scoped only to the function, while 'declare' without -g creates a variable in the current scope (which may be global if not in a function)",
            "'declare' always creates a global variable regardless of context",
            "'local' is POSIX compliant while 'declare' is bash-specific"
        ],
        answer: 1,
        explanation: "'local' explicitly restricts the variable to the function scope. 'declare' without -g creates a variable in the current scope—global if used outside a function, but local if used inside one.",
        difficulty: "Hard",
        topic: "Shell Scripting"
    },
    {
        id: "linux-252",
        question: "What does the 'iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE' rule accomplish?",
        options: [
            "Blocks all outgoing traffic on eth0",
            "Enables IP masquerading (NAT) for outgoing packets on eth0, replacing the source IP with eth0's IP for connections from internal hosts",
            "Redirects incoming traffic on eth0 to an internal server",
            "Logs all outgoing packets on eth0"
        ],
        answer: 1,
        explanation: "This MASQUERADE rule in the POSTROUTING chain of the nat table replaces the source IP of outgoing packets with the interface's IP, enabling internal network hosts to access the internet.",
        difficulty: "Hard",
        topic: "Firewall"
    },
    {
        id: "linux-253",
        question: "A process shows as 'D' (uninterruptible sleep) in ps output and cannot be killed with SIGKILL. What is happening?",
        options: [
            "The process is a zombie that cannot be reaped",
            "The process is waiting in kernel space for a hardware operation (usually I/O) to complete and cannot be interrupted until that operation finishes",
            "The process has crashed and the kernel is holding it for debugging",
            "The process has been frozen by cgroup freezer"
        ],
        answer: 1,
        explanation: "Uninterruptible sleep (D state) means the process is in the kernel waiting for I/O completion. Signals cannot interrupt this state; the process only becomes killable when the kernel operation completes or times out.",
        difficulty: "Hard",
        topic: "Processes"
    },
    {
        id: "linux-254",
        question: "What is the purpose of the 'RCU' (Read-Copy-Update) mechanism in the Linux kernel?",
        options: [
            "It provides a recovery mechanism for crashed kernel modules",
            "It allows multiple readers to access shared data without locks while writers create copies, modify them, and atomically swap pointers",
            "It handles kernel crash dumps",
            "It manages CPU register contexts during context switches"
        ],
        answer: 1,
        explanation: "RCU is a synchronization mechanism where readers access data without any locks (zero overhead), while writers create a copy, modify it, and then atomically replace the pointer, with old copies reclaimed after a grace period.",
        difficulty: "Hard",
        topic: "Kernel"
    },
    {
        id: "linux-255",
        question: "You notice 'swapiness' (vm.swappiness) is set to 0 but the system still uses swap. Why?",
        options: [
            "The swappiness parameter is broken in the kernel",
            "Swappiness 0 does not completely disable swap; it only tells the kernel to avoid swapping unless absolutely necessary to prevent OOM",
            "Another process is manually writing to the swap partition",
            "The swap file was created with a special flag that bypasses swappiness"
        ],
        answer: 1,
        explanation: "Even with swappiness=0, the kernel may still swap pages if memory pressure is severe enough to risk an OOM condition. Swappiness controls the tendency, not an absolute prohibition.",
        difficulty: "Hard",
        topic: "Performance Tuning"
    },
    {
        id: "linux-256",
        question: "What is the danger of using 'kill -9' (SIGKILL) on a process that holds a file lock?",
        options: [
            "No danger; the kernel automatically releases all locks",
            "The lock is not released, potentially causing other processes waiting on that lock to deadlock",
            "The file is automatically deleted when the process is killed",
            "The kernel refuses to send SIGKILL to processes holding locks"
        ],
        answer: 1,
        explanation: "While the kernel does release fcntl locks when a process is killed, POSIX advisory locks held through flock may not be properly released with SIGKILL, leading to potential deadlocks in applications relying on cooperative locking.",
        difficulty: "Hard",
        topic: "Processes"
    },
    {
        id: "linux-257",
        question: "In the context of Docker on Linux, what is the relationship between cgroups and namespaces?",
        options: [
            "They are the same thing with different names",
            "Namespaces provide isolation (what a process can see) while cgroups provide resource limiting (how much a process can use)",
            "Namespaces limit resources while cgroups provide isolation",
            "Only one of them is needed to create containers"
        ],
        answer: 1,
        explanation: "Namespaces isolate what a process can see (PID, network, mount, etc.) while cgroups control how much of a resource (CPU, memory, I/O) a process group can consume. Both are needed for full container functionality.",
        difficulty: "Hard",
        topic: "Containers Basics"
    },
    {
        id: "linux-258",
        question: "What does the 'Dirty Ratio' (vm.dirty_ratio) kernel parameter control?",
        options: [
            "The percentage of dirty (modified) pages in memory that must be paged out before new pages can be allocated",
            "The maximum percentage of total system memory that can be filled with dirty pages before the kernel begins writing them back to disk aggressively",
            "The ratio of dirty pages to clean pages that triggers a filesystem sync",
            "The percentage of disk space that can be used for write-ahead logging"
        ],
        answer: 1,
        explanation: "vm.dirty_ratio defines the absolute maximum percentage of system memory that can hold dirty (modified but not yet written) pages before the kernel forces synchronous writeback to disk.",
        difficulty: "Hard",
        topic: "Performance Tuning"
    },
    {
        id: "linux-259",
        question: "A system with 64GB RAM has extremely high 'slab' memory usage shown in 'slabtop'. What could be the cause and how would you investigate?",
        options: [
            "This is always a kernel memory leak requiring a reboot",
            "Excessive dentry/inode cache from iterating over huge directories, or a kernel module leak. Investigate with 'slabtop -s d' and 'echo 2 > /proc/sys/vm/drop_caches' to test",
            "Slab memory is always fixed and cannot change",
            "This indicates a hardware RAM failure"
        ],
        answer: 1,
        explanation: "High slab usage often comes from dentry/inode caches (especially with large directory traversals) or kernel module leaks. slabtop helps identify which slab objects are consuming memory, and drop_caches can test if reclaim helps.",
        difficulty: "Hard",
        topic: "Performance Tuning"
    },
    {
        id: "linux-260",
        question: "What is the 'split-brain' scenario in a clustered Linux filesystem like GFS2 or OCFS2?",
        options: [
            "The filesystem is split across multiple disks",
            "Two nodes in a cluster lose connectivity to each other (fencing failure) and both try to write to the shared storage simultaneously, potentially causing data corruption",
            "The filesystem metadata is divided into two parts",
            "A process spawns child processes that access the filesystem independently"
        ],
        answer: 1,
        explanation: "Split-brain occurs when cluster nodes lose network connectivity but both continue accessing shared storage without proper fencing, leading to conflicting writes and data corruption.",
        difficulty: "Hard",
        topic: "Storage Troubleshooting"
    },
    {
        id: "linux-261",
        question: "What is the technical difference between epoll and select/poll for I/O multiplexing in Linux?",
        options: [
            "There is no significant difference",
            "epoll uses a stateful kernel data structure that returns only ready file descriptors (O(1) for ready events), while select/poll scan all file descriptors every call (O(n))",
            "select/poll are more efficient for large numbers of connections",
            "epoll only works with TCP sockets while select/poll work with any file descriptor"
        ],
        answer: 1,
        explanation: "epoll maintains a kernel-side set of monitored fds and returns only those with events, making it O(active fds). select/poll pass the full fd set each time and linearly scan all fds, making them O(total fds).",
        difficulty: "Hard",
        topic: "Kernel"
    },
    {
        id: "linux-262",
        question: "When troubleshooting a network issue, you see 'Send-Q' non-zero in 'ss -tn' output for an established connection. What does this indicate?",
        options: [
            "Data that the remote side has sent but the local application hasn't read yet",
            "Data that the local application has sent but has not been acknowledged by the remote side (data in the TCP send buffer)",
            "The connection is being closed gracefully",
            "The TCP window size is too small"
        ],
        answer: 1,
        explanation: "Non-zero Send-Q means the local TCP stack has data in its send buffer that hasn't been acknowledged by the remote side, possibly indicating network congestion or a slow receiver.",
        difficulty: "Hard",
        topic: "Network Troubleshooting"
    },
    {
        id: "linux-263",
        question: "What is the effect of setting 'net.ipv4.tcp_tw_reuse = 1'?",
        options: [
            "Reuses TCP connections without closing them",
            "Allows the kernel to reuse TIME_WAIT sockets for new outgoing connections when it determines it is safe to do so",
            "Forces all TIME_WAIT connections to close immediately",
            "Reuses the same source port for all connections"
        ],
        answer: 1,
        explanation: "This parameter allows the kernel to recycle TIME_WAIT sockets for new outgoing connections when the timestamp option is enabled, helping with port exhaustion on high-connection-rate servers.",
        difficulty: "Hard",
        topic: "Networking"
    },
    {
        id: "linux-264",
        question: "In the context of Linux boot, what is the role of 'initramfs' versus 'initrd'?",
        options: [
            "They are identical in implementation",
            "initramfs is a cpio archive unpacked directly into rootfs (tmpfs), while initrd is a block device image that must be mounted. initramfs is the modern preferred approach",
            "initrd is newer and replaces initramfs",
            "initramfs is only used with UEFI boot"
        ],
        answer: 1,
        explanation: "initramfs is unpacked directly into the kernel's rootfs as a tmpfs, avoiding the block device overhead of initrd. It's simpler, supports more flexibility, and is the standard in modern kernels.",
        difficulty: "Hard",
        topic: "Boot Process"
    },
    {
        id: "linux-265",
        question: "What does the 'reverse path filtering' (rp_filter) net.ipv4.conf.all.rp_filter setting do?",
        options: [
            "Filters packets based on their destination address",
            "Drops incoming packets if the source IP address would not be routed out through the same interface (anti-spoofing measure)",
            "Reverses the packet routing path for load balancing",
            "Filters packets that have been routed through more than 3 hops"
        ],
        answer: 1,
        explanation: "Reverse path filtering verifies that incoming packets arrive on the interface that would be used to route responses back, helping prevent IP spoofing in DDoS attacks.",
        difficulty: "Hard",
        topic: "Networking"
    },
    {
        id: "linux-266",
        question: "A server running a database shows high 'bi' (blocks in) in vmstat but the database reports no I/O. What could explain this?",
        options: [
            "The database is lying about its I/O statistics",
            "Another process (like a backup, log rotation, or file indexing service) is performing read I/O on the same disk or filesystem",
            "vmstat is malfunctioning",
            "The database is using direct I/O which bypasses the buffer cache"
        ],
        answer: 1,
        explanation: "vmstat shows system-wide I/O, not per-process. Other processes sharing the same storage (backups, indexing, log rotation, monitoring agents) can generate I/O that appears in vmstat but not in the database's own metrics.",
        difficulty: "Hard",
        topic: "Performance Tuning"
    },
    {
        id: "linux-267",
        question: "What is the purpose of 'huge pages' (hugetlbfs) in Linux, and when are they beneficial?",
        options: [
            "They increase the total amount of available memory",
            "They use larger page sizes (2MB or 1GB) to reduce TLB misses, benefiting applications with large working sets like databases and VMs",
            "They compress memory pages to fit more data",
            "They are only used for kernel memory allocation"
        ],
        answer: 1,
        explanation: "Huge pages reduce the number of TLB (Translation Lookaside Buffer) entries needed for large memory mappings, significantly improving performance for databases and virtualization by reducing TLB misses.",
        difficulty: "Hard",
        topic: "Kernel"
    },
    {
        id: "linux-268",
        question: "What is the difference between 'conntrack' and 'nftables' in the Linux networking stack?",
        options: [
            "They are the same thing",
            "conntrack is the connection tracking subsystem that tracks the state of network flows, while nftables is the packet filtering framework that can use conntrack state for rule matching",
            "nftables replaces conntrack entirely",
            "conntrack is a user-space tool while nftables is kernel-space only"
        ],
        answer: 1,
        explanation: "conntrack maintains state tables for network connections (tracking NEW, ESTABLISHED, RELATED, INVALID states). nftables is the packet filtering framework that can reference conntrack states in its rules.",
        difficulty: "Hard",
        topic: "Firewall"
    },
    {
        id: "linux-269",
        question: "You observe that a server with 32GB RAM has only 500MB free but 20GB in 'buff/cache'. The application team reports slowness. What should you do?",
        options: [
            "Immediately run 'echo 3 > /proc/sys/vm/drop_caches' to free memory",
            "Recognize that buff/cache is reclaimable memory used for file system caching and is not a problem; investigate actual memory pressure using 'free -h', 'vmstat', and 'available' memory column instead",
            "Add more RAM as the system is clearly out of memory",
            "Kill all processes using the most memory"
        ],
        answer: 1,
        explanation: "Linux uses free memory for disk cache, which is reclaimable when applications need it. The 'available' column in 'free -h' shows memory actually available to applications. Only if available memory is low should you investigate further.",
        difficulty: "Hard",
        topic: "Performance Tuning"
    },
    {
        id: "linux-270",
        question: "What is the 'ptrace' system call used for, and why is it a security concern?",
        options: [
            "It traces network packet paths through the kernel",
            "It allows one process to control another (inspect/modify memory, registers), which is essential for debuggers but can be exploited by malware to inject code into other processes",
            "It traces filesystem access patterns for auditing",
            "It manages process priority inheritance"
        ],
        answer: 1,
        explanation: "ptrace enables a debugger to inspect and modify a target process's memory and registers. This power makes it attractive for malware (process injection) and is often restricted via kernel.yama.ptrace_scope.",
        difficulty: "Hard",
        topic: "Linux Security"
    },
    {
        id: "linux-271",
        question: "In an LVM setup, what is the difference between 'lvchange -an' and 'lvchange -ay'?",
        options: [
            "They activate and deactivate the LV's automatic snapshot feature",
            "'-an' deactivates the LV (makes it unavailable to the system) while '-ay' activates it, making it available for mounting",
            "'-an' removes the LV while '-ay' creates it",
            "'-an' sets the LV to read-only while '-ay' sets it to read-write"
        ],
        answer: 1,
        explanation: "lvchange -an deactivates a logical volume, removing its device mapper mapping so it cannot be accessed. -ay activates it, creating the /dev/mapper device node for mounting.",
        difficulty: "Hard",
        topic: "LVM"
    },
    {
        id: "linux-272",
        question: "What is the 'SYN flood' attack, and which kernel parameter helps mitigate it?",
        options: [
            "It floods the server with UDP packets; mitigated by net.ipv4.udp_max_queued",
            "It sends many TCP SYN packets without completing handshakes, filling the half-open connection queue; mitigated by net.ipv4.tcp_syncookies which uses cryptographic cookies instead of storing state",
            "It floods DNS servers with queries; mitigated by net.ipv4.tcp_max_syn_backlog",
            "It sends oversized ICMP packets; mitigated by net.ipv4.icmp_echo_ignore_all"
        ],
        answer: 1,
        explanation: "SYN floods exhaust the server's half-open connection queue. tcp_syncookies allows the kernel to respond to SYN packets without allocating state, using a cryptographic cookie encoded in the SYN-ACK to validate legitimate handshakes.",
        difficulty: "Hard",
        topic: "Networking"
    },
    {
        id: "linux-273",
        question: "When using 'strace -f -e trace=write -p PID', you see many 'write(2, ...)' calls with small amounts of data. What performance issue might this indicate?",
        options: [
            "The process is reading too much data",
            "Excessive small writes to stderr (fd 2) could indicate a logging or error handling issue causing I/O bottlenecks and log file fragmentation",
            "The process is writing to a network socket instead of a file",
            "The process has a memory leak"
        ],
        answer: 1,
        explanation: "Many small writes indicate the application is not buffering its output efficiently. Each small write triggers a system call and potential disk I/O, causing performance degradation. Application-level buffering would help.",
        difficulty: "Hard",
        topic: "Troubleshooting"
    },
    {
        id: "linux-274",
        question: "What is the 'cgroup v2' hybrid mode, and why does it matter for container runtimes?",
        options: [
            "It runs both cgroup v1 and v2 simultaneously for all controllers",
            "Some controllers are mounted under v1 while others use v2, causing compatibility issues for container runtimes that expect a unified hierarchy",
            "It allows containers to use both v1 and v2 features simultaneously",
            "Hybrid mode is the recommended configuration for all systems"
        ],
        answer: 1,
        explanation: "Hybrid mode mixes v1 and v2 controllers, which can confuse container runtimes like Docker and Kubernetes that may expect a pure cgroup v1 or v2 setup. Most modern distributions now default to pure cgroup v2.",
        difficulty: "Hard",
        topic: "Containers Basics"
    },
    {
        id: "linux-275",
        question: "What does the 'journalctl --disk-usage' command reveal, and what is the risk of not managing journal log size?",
        options: [
            "It shows CPU usage by the journal daemon; the risk is high CPU consumption",
            "It shows disk space consumed by journal logs; unmanaged growth can fill the /var filesystem, potentially causing system instability",
            "It shows network bandwidth used for remote logging; the risk is network saturation",
            "It shows memory used by journald; the risk is OOM conditions"
        ],
        answer: 1,
        explanation: "Journal logs can grow indefinitely if not configured with size limits (SystemMaxUse, SystemKeepFree). Filling /var can prevent journald, SSH, and other services from functioning.",
        difficulty: "Hard",
        topic: "Logs"
    },
    {
        id: "linux-276",
        question: "In the context of Linux storage, what is the 'write hole' problem in software RAID 5?",
        options: [
            "A physical hole in the disk platter",
            "If power fails during a RAID 5 write, parity and data may become inconsistent because the stripe is only partially updated, leading to silent data corruption on rebuild",
            "The RAID controller has a buffer overflow vulnerability",
            "Data is written to the wrong disk in the array"
        ],
        answer: 1,
        explanation: "In RAID 5, a single write requires updating both data and parity blocks. If power fails between these updates, the stripe becomes inconsistent, and the inconsistency may not be detected until a rebuild reads corrupted data.",
        difficulty: "Hard",
        topic: "Disk Management"
    },
    {
        id: "linux-277",
        question: "What is the technical reason why you cannot create a hard link to a directory in Linux?",
        options: [
            "It would require too much disk space",
            "It would create cycles in the directory graph, breaking the assumption that the directory tree is acyclic, which would cause infinite loops in traversal utilities like find and rm -r",
            "Hard links to directories are supported but only for root",
            "The filesystem format does not support it"
        ],
        answer: 1,
        explanation: "Allowing hard links to directories would break the acyclic tree property of the filesystem. A cycle would cause recursive operations (find, du, rm -r) to loop infinitely, so the kernel explicitly prohibits it.",
        difficulty: "Hard",
        topic: "File System"
    },
    {
        id: "linux-278",
        question: "What does the 'net.core.somaxconn' parameter control, and what happens if it is set too low for a high-traffic web server?",
        options: [
            "Maximum number of concurrent TCP connections; too low causes connection refusals",
            "Maximum length of the SYN backlog queue; too low causes the kernel to drop SYN packets during traffic spikes, leading to failed connection attempts",
            "Maximum number of sockets per process; too low causes socket creation failures",
            "Maximum TCP buffer size; too low causes slow transfers"
        ],
        answer: 1,
        explanation: "somaxconn limits the listen() backlog queue size. If set too low, the kernel drops connection requests when the queue is full during traffic bursts, even if the application could handle them.",
        difficulty: "Hard",
        topic: "Networking"
    },
    {
        id: "linux-279",
        question: "A process has a 'VSZ' (virtual size) of 10GB but 'RSS' (resident set size) of only 100MB. Is this a memory leak?",
        options: [
            "Yes, a 10GB virtual size always indicates a memory leak",
            "Not necessarily; VSZ includes memory-mapped files, shared libraries, and allocated but not yet touched pages (lazy allocation), while RSS is only physical memory actually in use",
            "No, VSZ is always exactly double the RSS on Linux",
            "Yes, because the kernel should never allocate more virtual memory than physical memory"
        ],
        answer: 1,
        explanation: "Large VSZ with small RSS is normal. Programs like Java pre-allocate large virtual address spaces but only physical pages that are actually accessed count toward RSS. Memory leaks are indicated by growing RSS over time.",
        difficulty: "Hard",
        topic: "Processes"
    },
    {
        id: "linux-280",
        question: "What is the 'BPF' (Berkeley Packet Filter) in modern Linux, beyond its original packet filtering purpose?",
        options: [
            "It only filters network packets in tcpdump",
            "It is a versatile in-kernel virtual machine that allows running sandboxed programs for networking, security, tracing, and performance monitoring without modifying kernel source",
            "It replaces all iptables rules",
            "It is a deprecated feature replaced by nftables"
        ],
        answer: 1,
        explanation: "Modern BPF (eBPF) is a revolutionary technology allowing safe execution of sandboxed programs in the kernel for packet filtering, observability (bcc tools), security, and more, without kernel module development.",
        difficulty: "Hard",
        topic: "Kernel"
    },
    {
        id: "linux-281",
        question: "In a systemd service file, what is the critical difference between 'Type=simple' and 'Type=forking'?",
        options: [
            "simple runs in foreground, forking runs in background; systemd handles them identically",
            "With simple, systemd considers the service started immediately when the main process forks; with forking, systemd expects the main process to exit and uses the PID file to track the background daemon",
            "With simple, systemd considers the service started when the main process is ready; with forking, systemd expects the initial process to fork a child and exit, then tracks the child via PIDFile or fork detection",
            "forking is deprecated and should not be used"
        ],
        answer: 2,
        explanation: "Type=simple expects the main process to remain in the foreground. Type=forking expects the initial process to fork and exit; systemd then monitors the background child process, typically identified via PIDFile.",
        difficulty: "Hard",
        topic: "systemd"
    },
    {
        id: "linux-282",
        question: "What is the 'STP' (Spanning Tree Protocol) issue that can cause network connectivity problems when a Linux bridge is used in a virtualization environment?",
        options: [
            "STP blocks all traffic on the bridge for 30-50 seconds during topology changes, causing initial connectivity delays for newly created VMs",
            "STP encrypts all bridge traffic causing performance degradation",
            "STP prevents the bridge from forwarding any packets at all",
            "STP only works with physical switches, not Linux bridges"
        ],
        answer: 0,
        explanation: "STP's listening and learning states (each 15 seconds by default) block data forwarding when a new port becomes active. In virtualization, this causes VMs to have no network connectivity for up to 30 seconds after creation.",
        difficulty: "Hard",
        topic: "Networking"
    },
    {
        id: "linux-283",
        question: "What is the fundamental issue with using 'rsync --delete' for backups, and how can it be mitigated?",
        options: [
            "It is slower than without --delete",
            "If the source has a temporary failure or accidental deletion, --delete propagates the deletion to the destination, potentially destroying backup data. Mitigate with --backup-dir or snapshot-based backups",
            "It only works with local filesystems",
            "It consumes more network bandwidth"
        ],
        answer: 1,
        explanation: "The --delete flag removes files from the destination that no longer exist in the source. If the source accidentally loses files, the backup also loses them. Using --backup-dir moves deleted files to a separate directory instead of removing them.",
        difficulty: "Hard",
        topic: "Backup"
    },
    {
        id: "linux-284",
        question: "What does the 'CAP_SYS_ADMIN' capability grant, and why is it considered problematic from a security perspective?",
        options: [
            "It only grants the ability to administer system packages",
            "It is a broad capability covering mount operations, namespace creation, ptrace, and many other privileged operations, making it nearly equivalent to root and violating the principle of least privilege",
            "It grants access to all files on the system",
            "It allows the process to change its own UID to root"
        ],
        answer: 1,
        explanation: "CAP_SYS_ADMIN is an overpowered capability that covers too many unrelated privileged operations. Giving a container or process this capability effectively gives it near-root access, negating the security benefits of capability-based restrictions.",
        difficulty: "Hard",
        topic: "Linux Security"
    },
    {
        id: "linux-285",
        question: "When analyzing a core dump with GDB, what does a segfault at address '0x0000000000000000' (NULL pointer) typically indicate?",
        options: [
            "A stack buffer overflow",
            "A NULL pointer dereference where the program tried to access memory through an uninitialized or failed-pointer variable",
            "A heap corruption from double-free",
            "An integer overflow causing an out-of-bounds array access"
        ],
        answer: 1,
        explanation: "A segfault at address 0x0 is the classic NULL pointer dereference. The program attempted to read from or write to a pointer that was NULL (zero), usually because a function returned NULL on failure and the return value wasn't checked.",
        difficulty: "Hard",
        topic: "Troubleshooting"
    },
    {
        id: "linux-286",
        question: "What is the 'ping of death' attack, and why does it no longer work on modern Linux systems?",
        options: [
            "It sends ping packets at maximum rate; modern systems rate-limit ICMP",
            "It sends an ICMP packet larger than the maximum IP packet size (65535 bytes), causing buffer overflows in older TCP stacks. Modern kernels check and reject oversized packets",
            "It sends fragmented ping packets that reassemble into a malformed packet; modern firewalls block this",
            "It pings the broadcast address to flood all hosts; modern systems ignore broadcast pings"
        ],
        answer: 1,
        explanation: "The original ping of death exploited the fact that an IP packet's total length field is 16 bits (max 65535). Older systems couldn't handle reassembled ICMP packets exceeding this size, causing buffer overflows. Modern kernels validate packet sizes.",
        difficulty: "Hard",
        topic: "Networking"
    },
    {
        id: "linux-287",
        question: "In a deeply nested LVM configuration (LV on top of LV), what performance and reliability concerns arise?",
        options: [
            "There are no concerns; LVM handles nesting transparently",
            "Double write amplification (each write goes through two layers of mapping), increased latency, complexity in recovery, and potential for metadata corruption at either layer",
            "Only the outer LV experiences performance degradation",
            "Nested LVM is not supported by the kernel"
        ],
        answer: 1,
        explanation: "Nested LVM adds a second layer of metadata mapping, causing each I/O to traverse two device-mapper layers. This doubles metadata overhead, adds latency, and complicates troubleshooting and recovery if either layer fails.",
        difficulty: "Hard",
        topic: "LVM"
    },
    {
        id: "linux-288",
        question: "What is the 'Ambient Capability' feature in the Linux kernel, and what problem does it solve?",
        options: [
            "It allows capabilities to work in all environments automatically",
            "It allows a non-root process to retain specific capabilities across execve() without needing file capability bits set on the executable, solving the limitation that capabilities were traditionally lost on exec",
            "It grants all capabilities to processes in a specific ambient environment",
            "It is an alternative name for SELinux capabilities"
        ],
        answer: 1,
        explanation: "Before ambient capabilities, a process could have capabilities in its permitted set but lose them when executing a new program (unless the binary had file capabilities). Ambient capabilities are automatically inherited across execve(), solving this gap.",
        difficulty: "Hard",
        topic: "Kernel"
    },
    {
        id: "linux-289",
        question: "You are debugging intermittent network failures. 'tcpdump' shows retransmissions but 'ping' shows no packet loss. What could explain this?",
        options: [
            "tcpdump is misconfigured",
            "The retransmissions may be for a specific TCP flow experiencing congestion or packet loss that doesn't affect ICMP (which may take a different path or have different QoS treatment), or the loss is intermittent and not captured during the ping test",
            "ping always shows 0% loss because it is privileged",
            "TCP retransmissions are normal and not related to packet loss"
        ],
        answer: 1,
        explanation: "TCP retransmissions for a specific flow don't necessarily appear in ICMP ping results. The loss may be intermittent, affect only certain paths, or be caused by congestion specific to that TCP connection's path through the network.",
        difficulty: "Hard",
        topic: "Network Troubleshooting"
    },
    {
        id: "linux-290",
        question: "What is the 'fsync' vs 'fdatasync' distinction, and why does it matter for database performance?",
        options: [
            "There is no difference; they are aliases",
            "fsync flushes both file data and metadata (atime, mtime) to disk, while fdatasync flushes only data (and metadata needed to retrieve that data), avoiding unnecessary metadata writes and reducing I/O",
            "fdatasync is deprecated in favor of fsync",
            "fsync is asynchronous while fdatasync is synchronous"
        ],
        answer: 1,
        explanation: "fdatasync skips flushing non-essential metadata like access time, reducing disk writes. Databases like PostgreSQL use fdatasync for WAL writes to minimize I/O while still ensuring data durability.",
        difficulty: "Hard",
        topic: "File System"
    }
]