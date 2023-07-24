# Help

## `--help`, `-h`

`--help`, `-h` flag can be used as the following:

```bash
$ runcpp --help
```

Which will show the help message:

```bash
Usage: [options] [targets]
Options:
    --help, -h                Display this help message.
    --libs, -l                Show the list of used libraries.
    --version, -v             Display the version of the app.
    --generate, -gen          Generate a configuration file by taking user input.
    --print, -p               Print the parsed output.
    --file, -f                Specify the file to use.
    --print-gui-client        Print the parsed output with target's name and hash, must be used with '--file' or '--serialize' flag.
    --merge, -m               Resolves any 'import' statements and merges all imported files into a single file.
    --serialize, -s           Serialize the configuration file in binary format.
    --deserialize, -d         Deserialize the configuration file.
    --init, -i                Start the interactive mode.

Documentation:
For documentation you can visit: https://dark-codex.github.io/runcpp-docs/

Syntax Rules:
--print, -p:
    runcpp --print [targets]
--file, -f:
    runcpp --file --print <path_to_file> [targets]
    runcpp --file --print-gui-client <path_to_file>
--merge, -m:
    runcpp --merge <path_to_file> -o <path_to_output_file>
--serialize, -s:
    runcpp --serialize <path_to_input_file> -o <path_to_output_file>
    runcpp --serialize <path_to_input_file> -o <path_to_output_file> --print-gui-client
--deserialize, -d:
    runcpp --deserialize --print <path_to_input_file> [targets]

Notes:
1. If no targets are provided by the user, 'runcpp' will try to use 'all' target only.
2. In flags (i.e. '--file' and '--deserialize'), you can use '--print' flag which is optional.
3. You can use short-handed versions of above flags.
4. For any contribution to 'runcpp', visit: https://github.com/Dark-CodeX/runcpp.git
5. For any bug report, visit: https://github.com/Dark-CodeX/runcpp/issues

License:
This project is licensed under the GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007. You may obtain a copy of this license at https://www.gnu.org/licenses/gpl-3.0.en.html.
```