# hugo
Static site in Go
To run locally:
$ hugo server

To add sections:
* Add content to .toml
* Make new partial in themes/ hugo-elate-theme / layouts / partials
* Reference content in .toml
* Add css to style.css and optionally style2.css in themes/ hugo-elate-theme / static / css
* Add new partial to index.html in themes/ hugo-elate-theme / layouts
* Add new navbar reference to nav.html in themes/ hugo-elate-theme / layouts / partials
* Important: Add animation function to main.js in themes/ hugo-elate-theme / static / js and export function. The local server does not compile js changes - *Section will be invisible until it is actually built on the web.* To see how it looks, temporarily change to-animate classes to animated in the partial.
