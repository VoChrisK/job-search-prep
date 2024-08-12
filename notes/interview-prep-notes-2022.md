# LEETCODE:

* Array
  * Two Pointer
  * Sliding Window
  * Cyclic Sort
  * Backtracking/Subsets
  * Binary Search
* Matrix
  * Merge Intervals
  * BFS
  * DFS
  * Backtracking/Subsets
* String
  * Two pointer
  * Sliding window
* Linked List
  * In-place reversal
* Trees
  * BFS
  * DFS

# DEFINITIONS AND TOPICS:

* # Rest vs GraphQL
  * GraphQL
    * Single request across multiple endpoints (ex. getPrefilledData covering identities, planningProfile, retirementProfile, incomes)
    * Server declares what resources are available, and the client asks for what it needs at the time
  * REST
    * “Representational state transfer”
    * Resources are determined by the server (ex.Cocoon follows RESTful architecture)
    * The server handles the transformation of the data received from the DB to be sent to the client
    * https://www.freecodecamp.org/news/benefits-of-rest/
* # What is Node.js? Pros/Cons of Node.js?
  * https://youtu.be/gnJWDW4jae0?t=189 (by Jason btw)
* # Fixed/Static, Fluid, Adaptive, and Responsive layouts
  * Fixed/Static - not used by many websites anymore.
    * Layout has a fixed width in pixels. The ‘container’ of the website is programmed to not move. Width stays the same independent of screen size
  * Fluid
    * Specify sizes in percentages, not pixels. If the screen size changes, the proportion of elements will stay the same
    * Cons - on smaller screens, things like columns can get very very narrow/tall
  * Adaptive
    * Several versions of the layout which are displayed based on screen size of the viewer. Think of it as several fixed layout designs. Layout A is displayed b/w sized X-XX, etc.
    * Pros - designer has more certainty. Cons - time and effort
  * Responsive
    * This is the expectation these days
    * Best of fluid and adaptive
    * There are several breakpoints, which divide all possible screen sizes in ranges. The interface has diff layout depending on screen size it’s viewed on. And depending on screensize, elements will stretch/shrink. Provides custom experience for whichever size it’s viewed on.
    * https://ux-alpaca.medium.com/so-what-exactly-is-the-difference-between-fixed-fluid-adaptive-and-responsive-layouts-and-why-3773272d8481
      * Above link as good visuals
* # Absolute vs Relative positioning CSS
  * Position: absolute - position element based on its closes positioned ancestor position - relative to its parent’s pos and changing the layout around it
  * Position: relative - position element based on its current pos w/o changing layout
  * https://leannezhang.medium.com/difference-between-css-position-absolute-versus-relative-35f064384c6 