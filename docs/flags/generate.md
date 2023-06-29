# Generate

## `--generate`, `-gen`

`--generate`, `-gen` flag can be used as the following:

```bash
$ runcpp --generate
```

After executing above command, `RUNCPP` will start an interactive session, where you can customize you preferences i.e., compiler, arguments, sources and output.
If you don't enter anything default value is saved which is written between parenthesis.

For an example:

```bash
$ runcpp --generate
Compiler (g++): clang++
Arguments (-g -Wall): -std=c++2a -g -Wall
Sources (./main.cc): 
Output (./main.out): ./main.o

File './compile.rc' was saved.
You can use 'runcpp' to compile your program.

```

Now, if `./compile.rc` file is already present, then the prompt will ask you to overwrite it, if user hits `y` then `RUNCPP` will overwrite the old file with newer one, else if user hits `n` nothing happens.

For an example:

```bash
runcpp -gen
'./compile.rc' file already exists, would you like to overwrite it? [yn] 
y
Compiler (g++): cl.exe
Arguments (-g -Wall): /std:c++latest      
Sources (./main.cc): 
Output (./main.out): /Fe./main.exe

File './compile.rc' was saved.
You can use 'runcpp' to compile your program.

```

After above commands are executed and your preferences are saved into `./compile.rc` file, you can use following command to start compiling your app:

```bash
$ runcpp
```

The final file should appear like this:

```rc
[compile]:
    compiler = 'clang++'
    args = ['-std=c++2a', '-g', '-Wall']
    sources = ['./main.cc']
    output = ['-o', './main.o']

[all]:
    compile()

```