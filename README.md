# Snergly

The maze algorithms from Jamis Buck's [Mazes for Programmers][mazes],
implemented in Clojure.

See it in action at http://glv.github.io/snergly.

I'm doing this as a fun project to improve my Clojure skills.

[mazes]: https://pragprog.com/book/jbmaze/mazes-for-programmers

## Plans

I'd like to work through all of the maze algorithms themselves;
I already see enough of the same kind of complexity to deal with that
I think this will help me with some of the struggles I'm having with
[Cló][clo].

This is also a nice excuse for me to play with ClojureScript and Om,
to build dynamic displays that show the maze generation algorithms in
action, animating the flow of the algorithms as they process mazes.

[clo]: https://www.youtube.com/watch?v=824yVKUPFjU

## Usage

    Snergly: run and print a maze generation algorithm.
    
    Usage: lein run [options] algorithm
    
    Options:
      -c, --cell-size PIXELS  10     Size of maze cells. Ignored when rendering as text.
      -d, --distances START          Display result maze with distance labels from a starting cell (e.g., 2,2).
      -h, --help
      -l, --longest                  Show the longest path through the maze.
      -o, --output FILENAME          Write output to an image file (format defined by extension)
      -p, --path-to END              Result maze should show the path from START to END (requires -d).
      -s, --size DIMENS       [5 5]  Grid size (e.g. 5 or 8x5)
    
    Algorithms:
      aldous-broder
      binary-tree
      hunt-and-kill
      sidewinder
      wilsons
      all

## ClojureScript Usage

To get an interactive development environment run:

    lein run -m clojure.main script/figwheel.clj

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL. 

## License

Copyright © 2015 Glenn Vanderburg

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
