# False points

Found during fact-check review. Sorted: most critical first. Verified by running code (repo runs as ES modules - matters for some).

## Critical - wrong facts

1. `js/14_array_object_methods.js:3,5` - push/unshift "returns the modified array"
   - False: they return the new **length** of the array. `[1,2].push(3)` returns `3`, not the array.
   - Classic interview trap. pop/shift descriptions are correct.

2. `js/04_hoisting.js:34` - calling `cube(25)` before `var cube = function` "throws ReferenceError"
   - False: throws `TypeError: cube is not a function`.
   - Why: `var cube` hoists as `undefined`, calling `undefined` = TypeError. ReferenceError is for let/const in TDZ.

3. `js/06_closures.js:12` - `console.log(helloToJoe) // Hello Joe`
   - False: logging the function itself prints `[Function (anonymous)]`.
   - "Hello Joe" comes from line 13, when the function is called. Then `undefined` is logged (no return value).

4. `js/es6/02_arrow_functions.js:57` - `person.arrowLog() // empty object {} => global object`
   - False here: prints `undefined`.
   - Why: repo has `"type": "module"`, top-level `this` in ES modules is `undefined`. The `{}` answer is CommonJS only.

5. `general/10_git.md` - "git rebase doesn't create a new commit"
   - False: rebase creates new commits - every replayed commit gets a new hash.
   - Correct claim: rebase doesn't create a **merge** commit, unlike merge.

## Moderate - misleading

6. `js/04_hoisting.js:17`, `js/05_let_const.js:2-3` - "const and let are NOT affected by hoisting"
   - Misleading: they ARE hoisted, but sit in the temporal dead zone (TDZ) until declaration line.
   - That's why the error says "Cannot access before initialization", not "not defined". Common senior-interview probe.

7. `js/10_prototypes.js:6` - "`__proto__` ES6 syntax"
   - Backwards: `__proto__` is the old legacy accessor. `Object.getPrototypeOf()` is the modern recommended way.

8. `js/js_concepts/02_context.js:1` - plain function `this` "will refer to the global object"
   - In ES modules (this repo) it's `undefined` - modules run in strict mode. Global object answer is for sloppy mode.

9. `js/14_array_object_methods.js:34` - `Object.freeze` "prevents any changes"
   - Shallow only: nested objects inside a frozen object stay mutable.

10. `general/13_http_rest_soap.md` - REST = "Representational State Transfer Application Programming Interface"
    - REST = "Representational State Transfer" only. API is not part of the acronym.

11. `general/02_oop_fp.md` - interface "must be implemented in any subclasses"
    - Implementing classes, not subclasses. A class implements an interface, it doesn't subclass it.

12. `js/js_concepts/03_closure.js:1` - "closures are just functions inside other functions"
    - Closure = function + its captured lexical scope. Nesting alone is not the point - remembering outer variables is.
