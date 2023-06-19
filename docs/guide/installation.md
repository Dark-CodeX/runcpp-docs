# Installation

## Downloading the pre-compiled executable files

To download the pre-compiled executable files, you can visit [release page](https://github.com/Dark-CodeX/runcpp/releases).

## Building From Source

- ### Prerequisite
    - [`clang++`](https://releases.llvm.org/download.html) for GNU/Linux and MacOS based operating systems and [`msvc`](https://learn.microsoft.com/en-us/cpp/build/vscpp-step-0-installation) for Windows.
    - [`openutils`](https://github.com/Dark-CodeX/openutils.git) library, installation instructions are mentioned on library's repository.
    - [`git`](https://git-scm.com/downloads) to clone the `RUNCPP` repository.
- ### Compiling
    - Now, as you don't have `RUNCPP` already, you need to first compile it as a simple executable, and then generate an optimized executable.
        - #### GNU/Linux or MacOS:
            - ```bash
              $ clang++ ./runcpp/src/caller/caller.cc ./runcpp/src/io/io.cc ./runcpp/src/os/os.c ./runcpp/src/parser/*.cc ./runcpp/src/main/main.cc -o main
              $ ./main
              ```
            - After above commands are executed your optimized `RUNCPP` executable is ready-to-use, and is installed in `/usr/bin/runcpp`.
        - #### Windows:
            - ```powershell
              cl /std:c++latest ./runcpp/src/main/main.cc ./runcpp/src/caller/caller.cc ./runcpp/src/io/io.cc ./runcpp/src/os/os.c ./runcpp/src/parser/*.cc
              ./main
              ```
            - Now, an optimized executable file is created with name of `runcpp.exe` in `bin` directory.
