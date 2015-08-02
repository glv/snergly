# Snergly

The maze algorithms from Jamis Buck's [Mazes for Programmers][mazes],
implemented in Clojure.

I'm doing this as a fun project to improve my Clojure skills.

[mazes]: https://pragprog.com/book/jbmaze/mazes-for-programmers

## Plans

I'd like to work through all of the maze algorithms themselves;
I already see enough of the same kind of complexity to deal with that
I think this will help me with some of the struggles I'm having with
[Cló][clo].

But I'd also like to go farther.  In the book, Buck renders the mazes
using a PNG-generation library, but I think there would be value in
building dynamic displays that show the maze generation algorithms in
action, animating the flow of the algorithms as they process mazes.
That kind of display would be a nice excuse for me to play with 
ClojureScript and perhaps Om.

[clo]: https://www.youtube.com/watch?v=824yVKUPFjU

## Usage

TBD

## ClojureScript Usage

To get an interactive development environment run:

    lein figwheel

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
