# Migrating to Fulcro

I initially wrote the ClojureScript web interface in 2015/2016, using Om Next. It was fun, but I didn't particularly enjoy dealing with Om. Looking at this again in 2021, it's clear that Om is a moribund framework, with newer takes on the same ideas having come to the forefront, namely Fulcro and re-frame. Because I'm now working in an environment where Fulcro is widely used, I'm going to port Snergly's web interface to Fulcro as a way of exploring and learning it. (I may later port it to re-frame as well, because it is also used in my workplace, although not as much as Fulcro.)

Steps:

- [x] Make sure the tests still run. (As I recall, I was in the process of converting them to use clojure.spec and I'm not sure I left them in a working state.)
- [ ] Finish converting property-based tests to use spec rather than test.check, to the degree that this makes sense.
- [ ] Add notes to the README about commands for various things (running tests, building, etc.)
- [x] Create a `deps.edn` file that points to up-to-date dependencies, including Fulcro. (I'll probably have to also include Om libraries, so that `core.cljs` will compile.)
- [x] Create a `shadow-cljs.edn` file and configure it to build with Fulcro. (It would be nice if I could also get it to work with the existing Om build, but that's not required.)
- [ ] Get the CLJC tests running in ClojureScript as well.
- [ ] Build a Fulcro front-end in `fulcro.cljs` (with a `fulcro.html` file to keep things completely separated).
- [ ] Break the implementation up into separate namespaces to clean the design up a bit. The single-file implementation is difficult to navigate.
- [ ] Update the `push-pages` script to deploy the Fulcro version as `index.html` (but also leaving it as `fulcro.html`).
- [ ] Build a re-frame front-end in `re-frame.cljs` (with a `re-frame.html` file to keep things completely separated).
- [ ] Update the `push-pages` script to deploy the re-frame version *alongside* the Fulcro version.
- [ ] Do something with the old Om version. Either:
  - Rename it to `om-next.cljs`/`om-next.html` and get it to work with shadow-cljs and the new `push-pages` script; or
  - Just delete it since Om isn't being supported anymore.
- [ ] Delete `project.clj`, `.lein*`, `figwheel-server.log`, `script/figwheel.clj`, and any other remnants of Leiningen, Figwheel, and (maybe) Om.
- [ ] Convert `animation.cljs` to a CLJC file. (I can use reader conditionals to choose the correct version to require if that distinction is still required.)
  - Why do this? Because I don't think it will be hard, and there's nothing in the file that really requires ClojureScript, so it shouldn't be a `cljs` file. This would allow writing tests against this code that run in the JVM alongside the algorithm tests and the like. Additionally, while I'm not aware of a JVM-based GUI framework I would want to use to write a non-web version of the animated interface, that doesn't mean there isn't one; I've just been out of that world for so long. So why leave this as an apparent barrier to that if I can easily move it over?
- [ ] Revisit my use of core.async based on Tim Baldridge's [Core.Async In Use](https://www.youtube.com/watch?v=096pIlA3GDo) talk. (In particular, his "just don't use async" section at the 13:00 mark that uses a transducer instead might allow me to get away from using core.async at all.)
- [ ] Better dynamic status display (not just a single message).
  - Total cells
  - Cells carved
  - Cells flooded
  - Length of longest path
  - Algorithm-specific stats (number of backtracks, total length of backtracking, number of deadends for hunt/kill, number of successful/failed start attempts for wilsons)
- [ ] Add pause/resume buttons for the animation.
- [ ] Keep stats over several runs (mainly length of longest path)
- [ ] Allow backing up through history?
- [ ] Keep on going through other algorithms and tricks in Jamis' book?
- [ ] Add descriptions of the algorithms
- [ ] Other analyses/stats on the mazes? Are there ways I can determine and or quantify bias or other attributes? Average number of connections per cell, broken down by NSEW, perhaps?