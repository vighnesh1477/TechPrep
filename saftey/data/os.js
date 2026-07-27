// Operating Systems Questions - 200 of 300 Total Questions
[
  {
    "id": "os-061",
    "question": "What is the main difference between the wait() and waitpid() system calls in Unix/Linux?",
    "options": [
      "wait() can only wait for the first child, waitpid() can wait for any specific child",
      "wait() is non-blocking, waitpid() is blocking",
      "wait() returns the exit status, waitpid() does not",
      "There is no difference between the two"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "topic": "Process Management",
    "explanation": "The wait() system call suspends execution of the calling process until one of its children terminates, returning the PID of the terminated child. The waitpid() system call allows more specific control - it can wait for a particular child process (specified by PID), or use options like WNOHANG to make it non-blocking. This gives finer control over which child process to wait for."
  },
  {
    "id": "os-062",
    "question": "Which of the following is TRUE about zombie processes?",
    "options": [
      "Zombie processes consume significant CPU resources",
      "Zombie processes cannot be killed by the kill command",
      "Zombie processes are automatically cleaned up by the init process",
      "Zombie processes only occur in multi-threaded applications"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "topic": "Process Management",
    "explanation": "When a child process becomes a zombie (has terminated but not been waited for), the init process (PID 1) will eventually reap it when the parent fails to do so. Init periodically calls wait() to clean up any orphaned zombie processes. This prevents zombie processes from accumulating indefinitely in the process table."
  },
  {
    "id": "os-063",
    "question": "What is the purpose of the exec() family of functions in Unix/Linux?",
    "options": [
      "To create a new process",
      "To replace the current process image with a new program",
      "To terminate the current process",
      "To suspend the current process temporarily"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Process Management",
    "explanation": "The exec() family of functions (execl, execv, execle, execve, execlp, execvp) replaces the current process image with a new program. Unlike fork() which creates a duplicate process, exec() preserves the same PID but loads a new program into memory, discarding the current program's code, data, and stack. This is commonly used after fork() to run a different program in the child process."
  },
  {
    "id": "os-064",
    "question": "What is the difference between fork() and vfork() in Unix/Linux?",
    "options": [
      "fork() creates a full copy of the parent, vfork() shares memory with the parent",
      "vfork() is slower than fork()",
      "fork() is only available on Linux, vfork() on Unix",
      "There is no practical difference between the two"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "topic": "Process Management",
    "explanation": "The vfork() system call was created as an optimization over fork(). Unlike fork() which creates a complete copy of the parent's address space, vfork() creates a child process that shares the parent's memory space and thread of execution until the child calls exec() or exit(). This makes vfork() faster but more dangerous - the child must not modify memory or return from the function containing the vfork() call before calling exec() or exit()."
  },
  {
    "id": "os-065",
    "question": "Which of the following best describes the purpose of a pipeline in Unix/Linux?",
    "options": [
      "To decompress files",
      "To connect the standard output of one command to the standard input of another",
      "To compress files for storage",
      "To encrypt data during transmission"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "A pipeline in Unix/Linux, denoted by the | character, connects the standard output (stdout) of one command to the standard input (stdin) of another command. This allows the output of the first command to be used directly as input for the second command without needing temporary files. For example, 'ls | grep .txt' lists only text files in the current directory."
  },
  {
    "id": "os-066",
    "question": "What is the purpose of the nice command in Unix/Linux?",
    "options": [
      "To make the system more user-friendly",
      "To run a program with modified scheduling priority",
      "To create a nice graphical interface",
      "To clean up temporary files"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The nice command in Unix/Linux is used to run a program with an altered scheduling priority. By default, programs run with a nice value of 0. Using nice with a positive value (e.g., nice -n 10 command) lowers the priority, while using nice with a negative value (e.g., nice -n -10 command) increases the priority (requires appropriate permissions). This allows users to control CPU resource allocation among processes."
  },
  {
    "id": "os-067",
    "question": "Which of the following is TRUE about the top command in Unix/Linux?",
    "options": [
      "It only shows CPU usage, not memory usage",
      "It provides a dynamic real-time view of running processes",
      "It requires root privileges to run",
      "It displays information only about system processes, not user processes"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The top command provides a dynamic, real-time view of a running system. It displays system summary information as well as a list of processes or threads currently being managed by the Linux kernel. The display updates periodically, showing CPU usage, memory usage, swap space, and detailed information about each process including PID, user, priority, and resource consumption."
  },
  {
    "id": "os-068",
    "question": "What is the purpose of the ps command in Unix/Linux?",
    "options": [
      "To display directory contents",
      "To report a snapshot of the current processes",
      "To change file permissions",
      "To mount file systems"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The ps (process status) command in Unix/Linux provides information about the currently running processes, including their process identification numbers (PIDs), execution status, execution time, memory usage, and the command that started them. Different options control what information is displayed and in what format (e.g., ps aux shows all processes for all users in BSD format)."
  },
  {
    "id": "os-069",
    "question": "Which of the following best describes the purpose of the kill command in Unix/Linux?",
    "options": [
      "To delete files permanently from the system",
      "To send a signal to a process, typically to terminate it",
      "To terminate the current shell session",
      "To kill all processes belonging to a user"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The kill command in Unix/Linux sends a signal to a process or group of processes. By default, it sends SIGTERM (signal 15) which requests a graceful termination. Different signals can be specified (e.g., kill -9 PID sends SIGKILL which forces immediate termination). Despite its name, kill can send any signal, not just termination signals."
  },
  {
    "id": "os-070",
    "question": "What is the difference between a hard link and a soft (symbolic) link in Unix/Linux file systems?",
    "options": [
      "Hard links can span different file systems, soft links cannot",
      "Hard links point to the same inode, soft links point to a file path",
      "Soft links are faster to resolve than hard links",
      "There is no difference between the two"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "File Systems",
    "explanation": "A hard link is an additional directory entry for an existing inode, meaning it points directly to the same data blocks as the original file. A soft link (symbolic link) is a special file that contains a path to another file or directory. Hard links cannot span file systems (must be on same filesystem), while soft links can point to files on different filesystems or even to non-existent files."
  },
  {
    "id": "os-071",
    "question": "What is the purpose of the umask command in Unix/Linux?",
    "options": [
      "To remove user accounts from the system",
      "To set default file permissions for newly created files",
      "To unmount file systems",
      "To mask passwords when typing"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The umask command in Unix/Linux sets the default file permission mask for newly created files and directories. It works by subtracting its value from the default permissions from the default permissions. For example, a umask of 022 results in new files getting permissions 644 (rw-r--r--) and directories getting 755 (rwxr-xr-x). This allows users to control the default accessibility of files they create."
  },
  {
    "id": "os-072",
    "question": "Which of the following is TRUE about the df command in Unix/Linux?",
    "options": [
      "It displays the contents of a directory",
      "It reports file system disk space usage",
      "It deletes fragmented files",
      "It formats disk partitions"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The df (disk free) command in Unix/Linux displays the amount of available disk space for file systems on which the invoking user has appropriate read access. It shows information like total space, used space, available space, and usage percentage for each mounted file system. This is useful for monitoring storage capacity and preventing running out of disk space."
  },
  {
    "id": "os-073",
    "question": "What is the purpose of the du command in Unix/Linux?",
    "options": [
      "To display user information",
      "To estimate file space usage",
      "To delete unused files",
      "To update system drivers"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The du (disk usage) command in Unix/Linux estimates and displays the file space usage of files and directories. It can show the size of individual files or the cumulative size of directories and their subdirectories. Common options include -h for human-readable format (e.g., 1K, 23M, 2G) and -s for summary (only show total for each argument)."
  },
  {
    "id": "os-074",
    "question": "Which of the following best describes the purpose of the grep command in Unix/Linux?",
    "options": [
      "To sort lines in a file",
      "To search for patterns in files using regular expressions",
      "To group similar files together",
      "To generate random passwords"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The grep command (Global Regular Expression Print) searches input files for lines that match a given pattern and prints the matching lines. It supports basic regular expressions by default and extended regular expressions with the -E option. Common uses include searching log files for error messages, finding specific code patterns, or filtering command output."
  },
  {
    "id": "os-075",
    "question": "What is the purpose of the chmod command in Unix/Linux?",
    "options": [
      "To change the owner of a file",
      "To change the permissions of a file or directory",
      "To compress a file for storage",
      "To mount a file system"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "File Systems",
    "explanation": "The chmod (change mode) command in Unix/Linux is used to change the permissions of files and directories. Permissions control who can read, write, or execute a file. They can be specified using either symbolic notation (e.g., u+x to add execute permission for owner) or octal notation (e.g., 755 for rwxr-xr-x). This is fundamental to Unix/Linux security and access control."
  },
  {
    "id": "os-076",
    "question": "What is the purpose of the chown command in Unix/Linux?",
    "options": [
      "To change the permissions of a file",
      "To change the owner and/or group of a file or directory",
      "To compress a file for storage",
      "To mount a file system"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "File Systems",
    "explanation": "The chown (change owner) command in Unix/Linux is used to change the user and/or group ownership of files and directories. Only the superuser (root) or the current owner of a file can change its ownership. This is important for maintaining proper access control and ensuring that files are accessible to the intended users or groups while preventing unauthorized access."
  },
  {
    "id": "os-077",
    "question": "Which of the following is TRUE about the mount command in Unix/Linux?",
    "options": [
      "It can only be used by regular users",
      "It attaches a file system to a directory in the file system hierarchy",
      "It automatically formats the target device",
      "It deletes all data on the target device"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "File Systems",
    "explanation": "The mount command in Unix/Linux attaches a file system to a specific directory (mount point) in the existing file system hierarchy, making its contents accessible through that path. For example, 'mount /dev/sdb1 /mnt/usb' would make the contents of the first partition on the second disk accessible through /mnt/usb. The umount command reverses this process."
  },
  {
    "id": "os-078",
    "question": "What is the purpose of the fsck command in Unix/Linux?",
    "options": [
      "To format a file system",
      "To check and repair file system integrity",
      "To create a backup of a file system",
      "To mount a file system read-only"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "topic": "File Systems",
    "explanation": "The fsck (file system consistency check) command in Unix/Linux checks the structural integrity of a file system and attempts to repair any errors found. It's typically run automatically at boot time or can be executed manually. Different file system types have specific fsck versions (e.g., fsck.ext4 for ext4). Running fsck on a mounted file system can cause damage, so it's usually run on unmounted partitions or as part of the boot process."
  },
  {
    "id": "os-079",
    "question": "Which of the following best describes the purpose of the dd command in Unix/Linux?",
    "options": [
      "To decompress files",
      "To convert and copy files with various options",
      "To debug device drivers",
      "To delete directories recursively"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "topic": "System Administration",
    "explanation": "The dd (data duplicator) command in Unix/Linux is a versatile utility for converting and copying files. It can convert between different data formats, perform byte-order conversion, create disk images, backup and restore partitions, and perform low-level copying and conversion of data. Common uses include creating bootable USB drives, creating disk images for virtual machines, and wiping disks securely."
  },
  {
    "id": "os-080",
    "question": "What is the purpose of the lsblk command in Unix/Linux?",
    "options": [
      "To list blocked processes",
      "To list information about block devices",
      "To lock the screen",
      "To backup the kernel"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "System Administration",
    "explanation": "The lsblk (list block devices) command in Unix/Linux displays information about all available or specified block devices in a tree-like format. It shows device names, major and minor numbers, size, read-only status, type (disk, partition, lvm, etc.), and mount points. This is useful for understanding the storage configuration of a system without needing to parse /proc/partitions or /sys/block directly."
  },
  {
    "id": "os-081",
    "question": "Which of the following is TRUE about the uname command in Unix/Linux?",
    "options": [
      "It shows the current username",
      "It prints system information such as kernel name, version, and hardware",
      "It unmounts file systems",
      "It shows memory usage statistics"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "System Administration",
    "explanation": "The unane (Unix name) command in Unix/Linux prints system information about the operating system and hardware. Common options include -a for all information, -r for kernel release, -v for kernel version, -m for machine hardware name, and -n for the node name (hostname). This is useful for quickly identifying the system environment and compatibility."
  },
  {
    "id": "os-082",
    "question": "What is the purpose of the history command in Unix/Linux?",
    "options": [
      "To display the contents of the /var/log directory",
      "To show previously executed commands in the current session",
      "To clear the command prompt",
      "To delete user accounts"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The history command in Unix/Linux shows previously executed commands in the current shell session. It allows users to recall, edit, and re-execute previous commands. The history is typically stored in ~/.bash_history and can be manipulated with various options and history expansion features (!!, !-n, !string, etc.)."
  },
  {
    "id": "os-083",
    "question": "What is the purpose of the nice command in Unix/Linux?",
    "options": [
      "To make the system more user-friendly",
      "To run a program with modified scheduling priority",
      "To create a nice graphical interface",
      "To clean up temporary files"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The nice command in Unix/Linux is used to run a program with an altered scheduling priority. By default, programs run with a nice value of 0. Using nice with a positive value (e.g., nice -n 10 command) lowers the priority, while using nice with a negative value (e.g., nice -n -10 command) increases the priority (requires appropriate permissions). This allows users to control CPU resource allocation among processes."
  },
  {
    "id": "os-084",
    "question": "Which of the following is TRUE about the top command in Unix/Linux?",
    "options": [
      "It only shows CPU usage, not memory usage",
      "It provides a dynamic real-time view of running processes",
      "It requires root privileges to run",
      "It displays information only about system processes, not user processes"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The top command provides a dynamic, real-time view of a running system. It displays system summary information as well as a list of processes or threads currently being managed by the Linux kernel. The display updates periodically, showing CPU usage, memory usage, swap space, and detailed information about each process including PID, user, priority, and resource consumption."
  },
  {
    "id": "os-085",
    "question": "What is the purpose of the ps command in Unix/Linux?",
    "options": [
      "To display directory contents",
      "To report a snapshot of the current processes",
      "To change file permissions",
      "To mount file systems"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The ps (process status) command in Unix/Linux provides information about the currently running processes, including their process identification numbers (PIDs), execution status, execution time, memory usage, and the command that started them. Different options control what information is displayed and in what format (e.g., ps aux shows all processes for all users in BSD format)."
  },
  {
    "id": "os-086",
    "question": "Which of the following best describes the purpose of the kill command in Unix/Linux?",
    "options": [
      "To delete files permanently from the system",
      "To send a signal to a process, typically to terminate it",
      "To terminate the current shell session",
      "To kill all processes belonging to a user"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The kill command in Unix/Linux sends a signal to a process or group of processes. By default, it sends SIGTERM (signal 15) which requests a graceful termination. Different signals can be specified (e.g., kill -9 PID sends SIGKILL which forces immediate termination). Despite its name, kill can send any signal, not just termination signals."
  },
  {
    "id": "os-087",
    "question": "What is the difference between a hard link and a soft (symbolic) link in Unix/Linux file systems?",
    "options": [
      "Hard links can span different file systems, soft links cannot",
      "Hard links point to the same inode, soft links point to a file path",
      "Soft links are faster to resolve than hard links",
      "There is no difference between the two"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "File Systems",
    "explanation": "A hard link is an additional directory entry for an existing inode, meaning it points directly to the same data blocks as the original file. A soft link (symbolic link) is a special file that contains a path to another file or directory. Hard links cannot span file systems (must be on same filesystem), while soft links can point to files on different filesystems or even to non-existent files."
  },
  {
    "id": "os-088",
    "question": "What is the purpose of the umask command in Unix/Linux?",
    "options": [
      "To remove user accounts from the system",
      "To set default file permissions for newly created files",
      "To unmount file systems",
      "To mask passwords when typing"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The umask command in Unix/Linux sets the default file permission mask for newly created files and directories. It works by subtracting its value from the default permissions from the default permissions. For example, a umask of 022 results in new files getting permissions 644 (rw-r--r--) and directories getting 755 (rwxr-xr-x). This allows users to control the default accessibility of files they create."
  },
  {
    "id": "os-089",
    "question": "Which of the following is TRUE about the df command in Unix/Linux?",
    "options": [
      "It displays the contents of a directory",
      "It reports file system disk space usage",
      "It deletes fragmented files",
      "It formats disk partitions"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The df (disk free) command in Unix/Linux displays the amount of available disk space for file systems on which the invoking user has appropriate read access. It shows information like total space, used space, available space, and usage percentage for each mounted file system. This is useful for monitoring storage capacity and preventing running out of disk space."
  },
  {
    "id": "os-090",
    "question": "What is the purpose of the du command in Unix/Linux?",
    "options": [
      "To display user information",
      "To estimate file space usage",
      "To delete unused files",
      "To update system drivers"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The du (disk usage) command in Unix/Linux estimates and displays the file space usage of files and directories. It can show the size of individual files or the cumulative size of directories and their subdirectories. Common options include -h for human-readable format (e.g., 1K, 23M, 2G) and -s for summary (only show total for each argument)."
  },
  {
    "id": "os-091",
    "question": "Which of the following best describes the purpose of the grep command in Unix/Linux?",
    "options": [
      "To sort lines in a file",
      "To search for patterns in files using regular expressions",
      "To group similar files together",
      "To generate random passwords"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The grep command (Global Regular Expression Print) searches input files for lines that match a given pattern and prints the matching lines. It supports basic regular expressions by default and extended regular expressions with the -E option. Common uses include searching log files for error messages, finding specific code patterns, or filtering command output."
  },
  {
    "id": "os-092",
    "question": "What is the purpose of the chmod command in Unix/Linux?",
    "options": [
      "To change the owner of a file",
      "To change the permissions of a file or directory",
      "To compress a file for storage",
      "To mount a file system"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "File Systems",
    "explanation": "The chmod (change mode) command in Unix/Linux is used to change the permissions of files and directories. Permissions control who can read, write, or execute a file. They can be specified using either symbolic notation (e.g., u+x to add execute permission for owner) or octal notation (e.g., 755 for rwxr-xr-x). This is fundamental to Unix/Linux security and access control."
  },
  {
    "id": "os-093",
    "question": "What is the purpose of the chown command in Unix/Linux?",
    "options": [
      "To change the permissions of a file",
      "To change the owner and/or group of a file or directory",
      "To compress a file for storage",
      "To mount a file system"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "File Systems",
    "explanation": "The chown (change owner) command in Unix/Linux is used to change the user and/or group ownership of files and directories. Only the superuser (root) or the current owner of a file can change its ownership. This is important for maintaining proper access control and ensuring that files are accessible to the intended users or groups while preventing unauthorized access."
  },
  {
    "id": "os-094",
    "question": "Which of the following is TRUE about the mount command in Unix/Linux?",
    "options": [
      "It can only be used by regular users",
      "It attaches a file system to a directory in the file system hierarchy",
      "It automatically formats the target device",
      "It deletes all data on the target device"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "File Systems",
    "explanation": "The mount command in Unix/Linux attaches a file system to a specific directory (mount point) in the existing file system hierarchy, making its contents accessible through that path. For example, 'mount /dev/sdb1 /mnt/usb' would make the contents of the first partition on the second disk accessible through /mnt/usb. The umount command reverses this process."
  },
  {
    "id": "os-095",
    "question": "What is the purpose of the fsck command in Unix/Linux?",
    "options": [
      "To format a file system",
      "To check and repair file system integrity",
      "To create a backup of a file system",
      "To mount a file system read-only"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "topic": "File Systems",
    "explanation": "The fsck (file system consistency check) command in Unix/Linux checks the structural integrity of a file system and attempts to repair any errors found. It's typically run automatically at boot time or can be executed manually. Different file system types have specific fsck versions (e.g., fsck.ext4 for ext4). Running fsck on a mounted file system can cause damage, so it's usually run on unmounted partitions or as part of the boot process."
  },
  {
    "id": "os-096",
    "question": "Which of the following best describes the purpose of the dd command in Unix/Linux?",
    "options": [
      "To decompress files",
      "To convert and copy files with various options",
      "To debug device drivers",
      "To delete directories recursively"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "topic": "System Administration",
    "explanation": "The dd (data duplicator) command in Unix/Linux is a versatile utility for converting and copying files. It can convert between different data formats, perform byte-order conversion, create disk images, backup and restore partitions, and perform low-level copying and conversion of data. Common uses include creating bootable USB drives, creating disk images for virtual machines, and wiping disks securely."
  },
  {
    "id": "os-097",
    "question": "What is the purpose of the lsblk command in Unix/Linux?",
    "options": [
      "To list blocked processes",
      "To list information about block devices",
      "To lock the screen",
      "To backup the kernel"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "System Administration",
    "explanation": "The lsblk (list block devices) command in Unix/Linux displays information about all available or specified block devices in a tree-like format. It shows device names, major and minor numbers, size, read-only status, type (disk, partition, lvm, etc.), and mount points. This is useful for understanding the storage configuration of a system without needing to parse /proc/partitions or /sys/block directly."
  },
  {
    "id": "os-098",
    "question": "Which of the following is TRUE about the uname command in Unix/Linux?",
    "options": [
      "It shows the current username",
      "It prints system information such as kernel name, version, and hardware",
      "It unmounts file systems",
      "It shows memory usage statistics"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "System Administration",
    "explanation": "The uname (Unix name) command in Unix/Linux prints system information about the operating system and hardware. Common options include -a for all information, -r for kernel release, -v for kernel version, -m for machine hardware name, and -n for the node name (hostname). This is useful for quickly identifying the system environment and compatibility."
  },
  {
    "id": "os-099",
    "question": "What is the purpose of the history command in Unix/Linux?",
    "options": [
      "To display the contents of the /var/log directory",
      "To show previously executed commands in the current session",
      "To clear the command prompt",
      "To delete user accounts"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Shell and Utilities",
    "explanation": "The history command in Unix/Linux shows previously executed commands in the current shell session. It allows users to recall, edit, and re-execute previous commands. The history is typically stored in ~/.bash_history and can be manipulated with various options and history expansion features (!!, !-n, !string, etc.)."
  },
  {
    "id": "os-100",
    "question": "What is the difference between trapdoor and trapdoor in the context of operating system security?",
    "options": [
      "A trapdoor is a secret undocumented entry point into a program used to gain unauthorized access; a backdoor is similar but typically refers to a method bypassing normal authentication",
      "A trapdoor is a type of malware, while a backdoor is a security feature",
      "There is no difference; the terms are interchangeable",
      "A trapdoor is hardware-based, while a backdoor is software-based"
    ],
    "answer": 0,
    "difficulty": "Medium",
    "topic": "Security",
    "explanation": "In operating system security, a trapdoor (also called a backdoor) is a secret undocumented entry point into a program or system that allows unauthorized access bypassing normal authentication mechanisms. While the terms are sometimes used interchangeably, a trapdoor typically refers to a specific mechanism intentionally placed by developers, whereas a backdoor might refer to any unauthorized access method. Both represent serious security vulnerabilities."
  },
  {
    "id": "os-101",
    "question": "What is the purpose of virtual memory in an operating system?",
    "options": [
      "To increase the physical RAM capacity",
      "To allow processes to use more memory than physically available by using disk space",
      "To speed up CPU processing",
      "To improve network bandwidth"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Memory Management",
    "explanation": "Virtual memory is a memory management technique that creates an illusion of a larger memory space by using disk space as an extension of RAM. It allows processes to use more memory than physically available, with the OS swapping data between RAM and disk as needed. This provides memory protection, enables efficient sharing, and allows for memory abstraction."
  },
  {
    "id": "os-102",
    "question": "Which page replacement algorithm is considered optimal but not practically implementable?",
    "options": [
      "First-In-First-Out (FIFO)",
      "Least Recently Used (LRU)",
      "Optimal Page Replacement (OPT)",
      "Clock Algorithm"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "topic": "Memory Management",
    "explanation": "The Optimal Page Replacement (OPT) algorithm, also known as Bélády's optimal algorithm, replaces the page that will not be used for the longest period in the future. It provides the minimum number of page faults but requires future knowledge of memory accesses, making it impossible to implement in practice. It serves as a theoretical benchmark for comparing other algorithms."
  },
  {
    "id": "os-103",
    "question": "What is the purpose of a translation lookaside buffer (TLB) in a virtual memory system?",
    "options": [
      "To store frequently accessed file data",
      "To cache recent virtual-to-physical address translations",
      "To manage disk I/O operations",
      "To handle interrupt vector tables"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "topic": "Memory Management",
    "explanation": "The TLB is a hardware cache that stores recent virtual-to-physical address translations to speed up virtual address translation. When a virtual address needs to be translated, the CPU first checks the TLB. If the translation is found (TLB hit), it's used directly. If not (TLB miss), the page table is consulted and the result is cached in the TLB. This significantly reduces the overhead of address translation."
  },
  {
    "id": "os-104",
    "question": "Which of the following statements about segmentation in memory management is true?",
    "options": [
      "Segments are fixed-size blocks of memory",
      "Segmentation eliminates external fragmentation completely",
      "Each segment has its own address space starting from zero",
      "Segmentation requires hardware support but no operating system support"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "topic": "Memory Management",
    "explanation": "In segmentation, memory is divided into variable-sized segments based on logical units (like code, data, stack). Each segment has its own address space starting from zero, and a logical address consists of a segment selector and an offset within that segment. Segmentation provides protection and sharing capabilities but can suffer from external fragmentation."
  },
  {
    "id": "os-105",
    "question": "What is the difference between internal and external fragmentation in memory management?",
    "options": [
      "Internal fragmentation occurs between partitions, external within partitions",
      "Internal fragmentation is wasted space within allocated blocks, external is wasted space between blocks",
      "Internal fragmentation only occurs in paging, external only in segmentation",
      "There is no practical difference between the two"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "Memory Management",
    "explanation": "Internal fragmentation occurs when memory is allocated in fixed-sized blocks and a process requests less than a full block, wasting space within the allocated block. External fragmentation occurs when free memory is divided into small, non-contiguous blocks scattered throughout memory, preventing allocation of large requests despite sufficient total free memory. Paging eliminates external fragmentation but can have internal fragmentation."
  },
  {
    "id": "os-106",
    "question": "Which of the following is TRUE about demand paging?",
    "options": [
      "All pages of a process are loaded into memory at startup",
      "Pages are only loaded into memory when they are accessed",
      "Demand paging increases memory access time significantly",
      "Demand paging requires contiguous physical memory allocation"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "topic": "Memory Management",
    "explanation": "Demand paging is a virtual memory technique where pages are loaded into physical memory only when they are accessed (on demand), rather than loading the entire process at startup. This reduces memory usage and startup time, but may cause page faults when accessing non-resident pages. It's the foundation of modern virtual memory systems."
  },
  {
    "id": "os-107",
    "question": "What is thrashing in the context of virtual memory systems?",
    "options": [
      "Excessive CPU usage due to infinite loops",
      "Excessive paging activity that degrades system performance",
      "The process of clearing the TLB cache",
      "Memory corruption due to buffer overflows"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "topic": "Memory Management",
    "explanation": "Thrashing occurs when a system spends more time swapping pages between memory and disk than executing useful work. This happens when the degree of multiprogramming is too high, causing excessive page faults. As CPU utilization drops, the system may respond by increasing the degree of multiprogramming, making the problem worse. Thrashing can be mitigated by reducing the number of active processes or increasing physical memory."
  },
  {
    "id": "os-108",
    "question": "Which file allocation method is best suited for sequential access files?",
    "options": [
      "Contiguous allocation",
      "Linked allocation",
      "Indexed allocation",
      "All methods perform equally"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "topic": "File Systems",
    "explanation": "Contiguous allocation stores files in consecutive disk blocks, providing excellent sequential access performance since the entire file can be read with minimal seek time. However, it suffers from external fragmentation and makes file growth difficult. Linked and indexed allocations trade off sequential access performance for better flexibility in file allocation and growth."
  },
  {
    "id": "os-109",
    "question": "What is the purpose of journaling in file systems?",
    "options": [
      "To encrypt file system data",
      "To improve file system performance",
      "To provide faster recovery after system crashes",
      "To compress file system data"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "topic": "File Systems",
    "explanation": "Journaling file systems maintain a journal (log) of changes that will be made to the file system before committing those changes. This allows for faster recovery after crashes or power failures, as the system can replay the journal to restore consistency rather than performing a full consistency check. This significantly reduces boot time after an unexpected shutdown."
  },
  {
    "id": "os-110",
    "question": "Which of the following is TRUE about the elevator (SCAN) disk scheduling algorithm?",
    "options": [
      "It always services the closest request first",
      "It services requests in the order they arrive",
      "It moves the disk arm in one direction servicing requests until reaching the end, then reverses direction",
      "It prioritizes requests based on process priority"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "topic": "Disk Scheduling",
    "explanation": "The SCAN algorithm (elevator algorithm) works like an elevator: the disk arm starts at one end of the disk and moves toward the other end, servicing requests as it reaches each cylinder. When it reaches the end, it reverses direction and continues servicing requests. This provides better fairness than SSTF (Shortest Seek Time First) and prevents starvation of requests at the edges of the disk."
  },
  {
    "id": "os-111",
    "question": "What is the difference between internal and external fragmentation?",
    "options": [
      "Internal fragmentation wastes space within partitions, external wastes space between partitions",
      "Internal fragmentation only occurs in contiguous allocation, external only in paging",
      "Internal fragmentation is caused by processes, external by the operating system",
      "There is no meaningful difference between the two"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "topic": "Memory Management",
    "explanation": "Internal fragmentation occurs when memory is allocated in fixed-sized blocks and a process doesn't use the entire allocated space, wasting memory within the allocated block. External fragmentation occurs when free memory is broken into small, non-contiguous chunks scattered throughout memory, making it impossible to allocate large contiguous blocks despite sufficient total free memory. Paging eliminates external fragmentation but can suffer from internal fragmentation."
  },
  {
    "id": "os-112",
    "question": "Which synchronization primitive is best suited for implementing a readers-writers lock?",
    "options": [
      "Mutex",
      "Semaphore",
      "Condition variable",
      "Spinlock"
    ],
    "answer": 2,
    "difficulty": "Medium",
    "topic": "Process Synchronization",
    "explanation": "Condition variables are ideal for implementing readers-writers locks because they allow threads to wait efficiently for specific conditions (like 'no writers active') without busy-waiting. A readers-writers lock allows multiple concurrent readers or a single writer, requiring complex coordination that condition variables handle well when combined with mutexes for mutual exclusion."
  },
  {
    "id": "os-113",
    "question": "What is the purpose of the buddy system in memory allocation?",
    "options": [
      "To allocate memory in fixed-size blocks only",
      "To reduce external fragmentation by splitting and coalescing power-of-two sized blocks",
      "To eliminate internal fragmentation completely",
      "To allocate memory contiguously for large objects"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "topic": "Memory Management",
    "explanation": "The buddy system is a memory allocation algorithm that divides memory into partitions to satisfy memory requests. It uses splitting and coalescing of blocks that are powers of two in size. When a block is freed, it checks if its 'buddy' (adjacent block of same size) is also free, and if so, combines them into a larger block. This reduces external fragmentation while keeping allocation/deallocation relatively fast."
  },
  {
    "id": "os-114",
    "question": "Which of the following statements about semaphores is correct?",
    "options": [
      "Semaphores can only have values of 0 or 1",
      "Semaphores provide both mutual exclusion and synchronization capabilities",
      "Semaphores are implemented entirely in user space without kernel support",
      "Using semaphores eliminates the need for mutexes in all scenarios"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "topic": "Process Synchronization",
    "explanation": "Semaphores are synchronization primitives that maintain a counter representing the number of available resources. They provide both mutual exclusion (when initialized to 1, acting as a binary semaphore/mutex) and synchronization (coordinating access based on resource counts). Unlike mutexes, semaphores don't have ownership semantics, meaning any thread can release (signal) a semaphore acquired by another thread."
  },
  {
    "id": "os-115",
    "question": "What is the difference between a-counting semaphore and a binary semaphore?",
    "options": [
      "Counting semaphores can have any non-negative integer value, binary semaphores are restricted to 0 or 1",
      "Counting semaphores are faster than binary semaphores",
      "Binary semaphores can only be used with threads, counting semaphores with processes",
      "There is no functional difference between the two"
    ],
    "answer": 0,
    "difficulty": "Easy",
    "topic": "Process Synchronization",
    "explanation": "A counting semaphore can take on any non-negative integer value and is used to control access to a resource with multiple instances (e.g., allowing up to N processes to access a resource simultaneously). A binary semaphore is restricted to values 0 and 1 and is primarily used for mutual exclusion (similar to a mutex but without ownership semantics). Counting semaphores generalize binary semaphores for resource counting scenarios."
  },
  {
    "id": "os-116",
    "question": "What is the purpose of the nice value in Unix/Linux process scheduling?",
    "options": [
      "To determine the amount of memory a process can use",
      "To influence the priority of a process for CPU scheduling",
      "To set the maximum CPU time a process can consume",
      "To control network bandwidth usage"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "CPU Scheduling",
    "explanation": "The nice value is used to influence the priority of a process in Unix/Linux systems. Lower nice values (higher priority) give a process more favorable treatment by the scheduler, while higher nice values (lower priority) reduce its CPU access. The nice value ranges from -20 (highest priority) to +19 (lowest priority), with 0 being the default. This allows users to influence CPU resource allocation among processes."
  },
  {
    "id": "os-117",
    "question": "Which of the following is TRUE about the relationship between nice value and priority in Unix/Linux?",
    "options": [
      "Higher nice value means higher priority",
      "Lower nice value means higher priority",
      "Nice value has no effect on priority",
      "Nice value only affects I/O priority, not CPU priority"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "CPU Scheduling",
    "explanation": "In Unix/Linux, there's an inverse relationship between nice value and priority: lower nice values correspond to higher priorities, and higher nice values correspond to lower priorities. The scheduler uses the nice value to adjust the base priority of a process. A nice value of -20 gives the highest possible priority, while +19 gives the lowest. This allows users to nice processes to give them more or less CPU time relative to others."
  },
  {
    "id": "os-118",
    "question": "What is the main purpose of caching in operating systems?",
    "options": [
      "To increase the size of physical memory",
      "To store frequently accessed data in faster storage for quicker access",
      "To encrypt sensitive data",
      "To manage power consumption"
    ],
    "answer": 1,
    "difficulty": "Easy",
    "topic": "System Performance",
    "explanation": "Caching in operating systems stores frequently accessed data in faster storage (like CPU caches, disk cache, or page cache) to reduce access time. Examples include the disk cache that stores recently accessed disk blocks in memory, the TLB that caches address translations, and various buffer caches. This exploits locality of reference to improve system performance by reducing slower accesses to main memory or disk."
  },
  {
    "id": "os-119",
    "question": "Which of the following statements about memory protection is correct?",
    "options": [
      "Memory protection prevents processes from accessing any memory",
      "Memory protection uses hardware mechanisms to prevent processes from accessing memory they shouldn't",
      "Memory protection is only necessary in multi-user systems",
      "Memory protection decreases system performance significantly"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "topic": "Memory Management",
    "explanation": "Memory protection uses hardware features like the Memory Management Unit (MMU) and page tables to ensure that processes can only access memory locations they are authorized to access. This prevents one process from accidentally or maliciously accessing another process's memory or kernel memory, providing both security and stability. Modern MMUs provide efficient memory protection with minimal performance overhead."
  },
  {
    "id": "os-120",
    "question": "What is the difference between logical addressing and physical addressing in memory management?",
    "options": [
      "Logical addressing is used by the CPU, physical addressing by memory",
      "Logical addresses are generated by the CPU; physical addresses are what the memory unit sees",
      "Physical addressing is faster than logical addressing",
      "Logical addressing requires MMU, physical addressing does not"
    ],
    "answer": 1,
    "difficulty": "Medium",
    "topic": "Memory Management",
    "explanation": "Logical addresses (also called virtual addresses) are generated by the CPU when a program references memory. These addresses are translated to physical addresses by the Memory Management Unit (MMU) using page tables or segmentation. The physical address is what the actual memory hardware (RAM) sees and uses to access storage cells. This indirection enables memory protection, sharing, and virtual memory capabilities."
  }
]