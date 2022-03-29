/* ==========================================================================  **
## Midterm Instructions

1. WORK ON THIS MIDTERM ALONE!!!!!!
2. Open book, open notes, open internet.

See this Google doc for clarifications:

https://docs.google.com/document/d/1yEZ93ZyWrGIItlMrT15Z5khJw8sJwOObZzjsIvgNQsU/edit?usp=sharing

** ==========================================================================  **


1. Push your solution, contained entirely in midterm.ts, back to the github classroom
   repository. Please make sure you solution compiles!!! 

   To run the typescript compiler (`tsc`), make sure you have it installed
   ```
   tsc -v
   >> Version 4.4.3
   ```
   Then run the compiler
   ```
   tsc --strict --target es2019 --module commonjs midterm.ts
   ```
   to produce a file `midterm.js`. If we cannot compile your solution with `tsc`, we
   will not grade your submission. Even if you are looking for partial credit,
   your entire midterm.ts must compile, and we must be able to run the compiled js file
   using `node`. **Do not** commit your `.js` file.
2. **Do not** change any of the function interfaces.
3. **Do not** use any external libraries.
4. Replace `throw Error("TODO")` with your code. If you do not attempt a problem,
   please leave the `throw Error("TODO")` code there unmodified.
5. Always remember to check the function input types and the output types.
6. You can create any other additional helper functions that you would like.
7. You can leave testing code in provided that your code compiles and does not
   depend on external libraries. Remember it is up to you to test your own code.
8. You can use your solutions to questions in this assignment to answer other question
   in this assignment.

** ============================================================================ */


/* ==========================================================================  **
## Honor Pledge
** ============================================================================ */

export const HONOR_PLEDGE = "I pledge on my honor that this assignment is my own work.";
export const SIGNATURE = "Rui Qi Huang"; // TODO: FILL ME IN

// If you used resources, please list them here
export const RESOURCES_CONSULTED = [
    "www.google.com", // TODO: FILL ME IN
];


/* ==========================================================================  **
## OPTIONAL SURVEY

This section is purely optional. We are mainly asking because we would like to
improve the homeworks to see what you're thinking as you try to solve these
problems. This will not affect your grade in any way. As a reminder, Google is a
resource that we all use.
** ============================================================================ */

export const GOOGLE_QUERIES: {[id: string]: string[]} = {
    "1a": [],
    "1b": [],
    "2": [],
    "3a": [],
    "3b": [],
    "3c": [],
    "bonus": [],
}; 



/* ==========================================================================  **
## CSC 600 Midterm: The day before moving day

It's the day before moving day and that means you need to pack your stuff into containers.
We have 3 different kinds of containers that are each labeled with a name:
1. CUBE: a 10 x 10 x 10 box
2. RECTANGLE: a 10 x 10 x 5 box
3. BUNDLE: a bag that we can put other containers inside of (i.e., CUBES, RECTANGLES, or other BUNDLEs).

We can code this up with the following `Container` data type.

Unless stated otherwise, every function we write should be a pure function.

** ============================================================================ */

export type Cube = {
    tag: "CUBE",  // a 10 x 10 x 10 box
    name: string  // label of the box
};

export type Rectangle = {
    tag: "RECTANGLE",  // a 10 x 10 x 5 box
    name: string       // label of the box
};

export type Bundle = {
    tag: "BUNDLE",  // a bag
    name: string,   // label of the bag
    containers: Container[]
}

export type Container = 
    Cube
|   Rectangle
|   Bundle;


export function newCube(name: string): Cube {
    return {
        tag: "CUBE",
        name: name
    };
}

export function newRectangle(name: string): Rectangle {
    return {
        tag: "RECTANGLE",
        name: name
    };
}

export function newBundle(name: string, containers: Container[]): Bundle {
    return {
        tag: "BUNDLE",
        name: name,
        containers: containers
    };
}


/* ==========================================================================  **
## 

Key:
1. A CUBE or a RECTANGLE will just be notated with its name.
2. A bundle will be a enclosed off with |-| and have a name in the upper-left corner.
                                        |-|

Example:

  myStuff
 |-----------------------------------------------| 
 |      kitchenware                              |
 |      |-------------------------------------|  |
 |      |                                     |  |
 |      |  cookware          silverware       |  |
 |      |  |-----------|    |--------------|  |  |
 |      |  | pots pans |    | forks knives |  |  |
 |      |  |-----------|    |--------------|  |  |
 |      ---------------------------------------  |
 |                                               |
 |  media                clothes                 |
 |  |--------------|     |--------------------|  |
 |  | movies books |     | pants shirts socks |  |
 |  |--------------|     |--------------------|  |
 |-----------------------------------------------|

The same example is given in code below.
** ============================================================================ */

export const c1 = newCube("movies");
export const c2 = newRectangle("books");
export const c3 = newBundle("media", [c1, c2]);
export const c4 = 
    newBundle(
        "kitchenware",
        [
            newBundle(
                "cookware",
                [
                    newRectangle("pots"),
                    newRectangle("pans"),
                ]
            ),
            newBundle(
                "silverware",
                [
                    newCube("forks"),
                    newCube("knives"),
                ]
            ),
        ]
    )
export const c5 =
    newBundle(
        "clothes",
        [
            newCube("pants"),
            newCube("shirts"),
            newCube("socks"),
        ]
    )
export const myStuff = newBundle("mystuff", [c3, c4, c5])


/* ==========================================================================  **
## Problem 1: Basic functions on containers (25 pts)

We'll start with basic functions on containers.
1. Write *pure* functions unless stated otherwise.
2. You may assume that all names are unique, i.e., there are no duplicate labels.

** ============================================================================ */

/* ----------------------------------------------------- **
### Problem 1a (5 pts):

Write a *pure* function to get the name of a container.

Example 1:

    getName(c1) = "movies"


Example 2:

    getName(c2) = "books"

Example 3:

    getName(c3) = "media"

Example 4:

    getName(c4) = "kitchenware"

Example 5:

    getName(c5) = "clothes"

Example 6:

    getName(mystuff) = "mystuff"

** ----------------------------------------------------- */
//done
export function getName(container: Container): string {
    return container.name
}

// console.log(getName(myStuff))
/* ----------------------------------------------------- **
### Problem 1b (10 pts):

Write a *pure* function to get the names from a list of containers. You can return the names in any order.
1. Do *not* recurse.
2. As a reminder, you can assume that there are no duplicate names.

Example 1:

    getNames([]) = []

Example 2:

    getNames([c1]) = ['movies']

Example 3:

    getNames([c1, c2]) = ['movies', 'books']

Example 4:

    getNames([c1, c2, c3]) = ['movies', 'books', 'media']

Example 5:

    getNames([c1, c2, c3, c4]) = ['movies', 'books', 'media', 'kitchenware']

Example 6:

    getNames([myStuff]) = ['mystuff']

** ----------------------------------------------------- */
//done
export function getNames(containers: Container[]): string[] {
    let cont: string[] = []
    containers.forEach(element => {
        cont.push(element.name)
    });
    return cont;
}

// console.log(getNames([myStuff]))
/* ----------------------------------------------------- **
### Problem 1c (10 pts):

Write a *pure* function that, given a name and a list of containers,
returns either 1) the container in the list with that name, or 2)
`undefined` if there is not a container in the list with that name.
1. Do *not* recurse.
2. As a reminder, you can assume that there are no duplicate names.

Example 1:

    findContainer("media", []) = undefined

Example 2:
    findContainer("movies", [c1]) = 
        { tag: 'CUBE', name: 'movies' }

Example 3:
    findContainer("books", [c1, c2]) = 
        { tag: 'RECTANGLE', name: 'books' }

Example 4:
    findContainer("media", [c1, c2, c3]) = 
        {
            tag: 'BUNDLE',
            name: 'media',
            containers: [
                { tag: 'CUBE', name: 'movies' },
                { tag: 'RECTANGLE', name: 'books' }
            ]
        }

Example 5:
    findContainer("cookware", [c1, c2, c3, c4, c5]) = undefined

** ----------------------------------------------------- */
//done
export function findContainer(name: string, containers: Container[]): Container | undefined {
  

    for (const x of containers) {
       if (name == x.name) {
           return x
        } 
    }

    return undefined
    

}
// console.log(findContainer("media", []))
// console.log(findContainer("movies", [c1]))
// console.log(findContainer("books", [c1, c2]))
// console.log(findContainer("media", [c1, c2, c3]))
// console.log(findContainer("cookware", [c1, c2, c3, c4, c5]))

/* ==========================================================================  **
## Problem 2: Basic functions on Containers (30 pts)
** ============================================================================ */

/* ----------------------------------------------------- **
### Problem 2a (15 pts):

Write a *pure* function that, given a bundle and a name, removes any container
with that name from the bundle.
1. Do *not* recurse.
2. As a reminder, you can assume that there are no duplicate names.

Example 1:
    removeContainerFromBundle(c4, "cookware") = 
        {
            tag: 'BUNDLE',
            name: 'kitchenware',
            containers: [
                { 
                    tag: 'BUNDLE',
                    name: 'silverware',
                    containers: [
                        { tag: 'CUBE', name: 'forks' },
                        { tag: 'CUBE', name: 'knives' }
                    ]
                }
            ]
        }

Example 2:
    removeContainerFromBundle(c4, "silverware") = 
        {
            tag: 'BUNDLE',
            name: 'kitchenware',
            containers: [
                {
                    tag: 'BUNDLE',
                    name: 'cookware',
                    containers: [
                        { tag: 'RECTANGLE', name: 'pots' },
                        { tag: 'RECTANGLE', name: 'pans' }
                    ]
                }
            ]
        }

Example 3:
    removeContainerFromBundle(c4, "media") = 
        {
            tag: 'BUNDLE',
            name: 'kitchenware',
            containers: [
                { 
                    tag: 'BUNDLE',
                    name: 'silverware',
                    containers: [
                        { tag: 'CUBE', name: 'forks' },
                        { tag: 'CUBE', name: 'knives' }
                    ]
                },
                {
                    tag: 'BUNDLE',
                    name: 'cookware',
                    containers: [
                        { tag: 'RECTANGLE', name: 'pots' },
                        { tag: 'RECTANGLE', name: 'pans' }
                    ]
                }
            ]
        }

Example 4:
    removeContainerFromBundle(c4, "pots") = 
        {
            tag: 'BUNDLE',
            name: 'kitchenware',
            containers: [
                { 
                    tag: 'BUNDLE',
                    name: 'silverware',
                    containers: [
                        { tag: 'CUBE', name: 'forks' },
                        { tag: 'CUBE', name: 'knives' }
                    ]
                },
                {
                    tag: 'BUNDLE',
                    name: 'cookware',
                    containers: [
                        { tag: 'RECTANGLE', name: 'pots' },
                        { tag: 'RECTANGLE', name: 'pans' }
                    ]
                }
            ]
        }


Example 5:
    removeContainerFromBundle(newBundle("cookware", [newRectangle("pots"), newRectangle("pans")]), "pots") = 
        {
            tag: 'BUNDLE',
            name: 'cookware',
            containers: [ { tag: 'RECTANGLE', name: 'pans' } ]
        }
    
** ----------------------------------------------------- */
//done
export function removeContainerFromBundle(bundle: Bundle, name: string): Bundle {
    const result = bundle.containers.filter(x => x.name != name)
    let mybun: Bundle = {
        tag: "BUNDLE",
        name: bundle.name,
        containers: result
    }
    return mybun
}
//  console.log( removeContainerFromBundle(c4, "cookware"))
//  console.log(removeContainerFromBundle(c4, "silverware"))
//  console.log(removeContainerFromBundle(c4, "media"))
//  console.log(removeContainerFromBundle(c4, "pots"))
// console.log(removeContainerFromBundle(newBundle("cookware", [newRectangle("pots"), newRectangle("pans")]), "pots"))
/* ----------------------------------------------------- **
### Problem 2b (15 pts): 

Write a *pure* function that adds a container with a certain tag to a bundle (at the end of the bundle).
1. If the bundle already contains a container with that name,
   do not add the container and return the bundle unmodified.
2. You do *not* need to recursively check the containers within the
   current bundle.
3. Hint: you may want to use `findContainer`.
4. If you are creating a "BUNDLE", create it with an empty `containers` field.

Example 1:

    addContainerToBundle(c5, "shirts", "RECTANGLE") = 
        {
            tag: 'BUNDLE',
            name: 'clothes',
            containers: [
                { tag: 'CUBE', name: 'pants' },
                { tag: 'CUBE', name: 'shirts' },
                { tag: 'CUBE', name: 'socks' }
            ]
        }

Example 2:

    addContainerToBundle(c5, "coats", "RECTANGLE") =
        {
            tag: 'BUNDLE',
            name: 'clothes',
            containers: [
                { tag: 'CUBE', name: 'pants' },
                { tag: 'CUBE', name: 'shirts' },
                { tag: 'CUBE', name: 'socks' },
                { tag: 'RECTANGLE', name: 'coats' }
            ]
        }

Example 3:

    addContainerToBundle(c5, "coats", "BUNDLE") =
        {
            tag: 'BUNDLE',
            name: 'clothes',
            containers: [
                { tag: 'CUBE', name: 'pants' },
                { tag: 'CUBE', name: 'shirts' },
                { tag: 'CUBE', name: 'socks' },
                { tag: 'BUNDLE', name: 'coats', containers: [] }
            ]
        }

** ----------------------------------------------------- */
//done
export function addContainerToBundle(bundle: Bundle, name: string, tag: "CUBE" | "RECTANGLE" | "BUNDLE"): Bundle {
        let found =  findContainer(name, bundle.containers)
        let cont: Container[] = [...bundle.containers]
        if (found == undefined) {
            switch (tag) {
                    case "CUBE":
                        cont.push(newCube(name))
                        break;
                    case "RECTANGLE":
                        cont.push(newRectangle(name))
                        break;
                    case "BUNDLE":
                        cont.push(newBundle(name, []))
                        break;

            }

            
        }

        let mybun: Bundle = {
            tag: "BUNDLE",
            name: bundle.name,
            containers: cont
        
        }

        return mybun
}
//  console.log(addContainerToBundle(c5, "shirts", "RECTANGLE"))
//  console.log(addContainerToBundle(c5, "coats", "RECTANGLE"))
// console.log(addContainerToBundle(c5, "coats", "BUNDLE"))
/* ==========================================================================  **
## Problem 3: Complex functions on Containers (45 pts)

** ============================================================================ */


/* ----------------------------------------------------- **
### Problem 3a (20 pts): 

Suppose you want to compute the amount of space your stuff takes up.
1. A "CUBE" has a volume of 100 cubic inches.
2. A "RECTANGLE" has a volume of 50 cubic inches.
3. A "BUNDLE" has a volume of the stuff contained inside of it.

Write a *pure* function that computes the volume of a container.

Example 1:

    volumeOfContainer(c1) = 100

Example 2:
    
    volumeOfContainer(c2) = 50

Example 3:

    volumeOfContainer(c3) = 150

Example 4:
    
    volumeOfContainer(c4) = 300

Example 5:
    
    volumeOfContainer(c5) = 300

Example 6:

    volumeOfContainer(myStuff) = 750

** ----------------------------------------------------- */
//done
export function volumeOfContainer(container: Container): number {
    const cube = 100
    const rectangle = 50
    let numCube = 0
    let numRectangle = 0
    let returned = 0
    if(container.tag == "BUNDLE") {
        for (const x in container.containers) {
            switch (container.containers[x].tag) {
                case "CUBE":
                    numCube++
                break;
                case "RECTANGLE":
                    numRectangle++
                break;
                case "BUNDLE":
                        let temp = volumeOfContainer(container.containers[x])
                        returned = returned + temp
                   
                    break;
            }
        }   

    } 
      if (container.tag == "CUBE" ){
         numCube++
     }
     if (container.tag == "RECTANGLE" ){
        numRectangle++
    }

   
        
    return (numCube * cube) + (numRectangle * rectangle) + returned
}
//  console.log(c4)
// console.log(volumeOfContainer(c1))
// console.log(volumeOfContainer(c2))
// console.log(volumeOfContainer(c3))
//   console.log(volumeOfContainer(c4))
//  console.log(volumeOfContainer(c5))
//  console.log(volumeOfContainer(myStuff))
/* ----------------------------------------------------- **
### Problem 3b (25 pts):

Write a *pure* function that gathers all the labels in all of the containers.
You can return the labels in any order.

Example 1:
    allLabelsInContainer(c1) = 
        [ 'movies' ]

Example 2:
    allLabelsInContainer(c2) = 
        [ 'books' ]

Example 3:
    allLabelsInContainer(c3) = 
        [ 'media', 'movies', 'books' ]

Example 4:
    allLabelsInContainer(c4) = 
        [
            'kitchenware',
            'cookware',
            'pots',
            'pans',
            'silverware',
            'forks',
            'knives'
        ]

Example 5:
    allLabelsInContainer(c5) = 
        [ 'clothes', 'pants', 'shirts', 'socks' ]

Example 6:
    allLabelsInContainer(myStuff) = 
        [
            'mystuff',     'media',
            'movies',      'books',
            'kitchenware', 'cookware',
            'pots',        'pans',
            'silverware',  'forks',
            'knives',      'clothes',
            'pants',       'shirts',
            'socks'
        ]

** ----------------------------------------------------- */
//done
export function allLabelsInContainer(container: Container): string[] {
    let arr:string[] = []
    if (container.tag == "CUBE")   {
        arr.push(container.name)

    }

    if (container.tag == "RECTANGLE")   {
        arr.push(container.name)

    }
    if (container.tag == "BUNDLE") {
        arr.push(container.name)
        for(const x in container.containers) {
            switch (container.containers[x].tag) {
                case "CUBE":
                    arr.push(container.containers[x].name)

                    break;
                case "RECTANGLE": 
                arr.push(container.containers[x].name)

                break;   
                case "BUNDLE":
                    let temp = allLabelsInContainer(container.containers[x])
                    for (const y of temp) {
                        arr.push(y)

                    }
                    break;

            }
        }
    }


    return arr
}
// console.log(allLabelsInContainer(c1))
// console.log(allLabelsInContainer(c2))
//  console.log(allLabelsInContainer(c3))
// console.log(allLabelsInContainer(c4))
// console.log(allLabelsInContainer(c5))
// console.log( allLabelsInContainer(myStuff))
/* ==========================================================================  **
## Bonus (30 pts):

Write a *pure* function that traverses a path given as a string array and adds a container to the bundle at that location.
The path is similar to a file-system path that you might use.
Add the container to the end of the bundle.
If a container already exists with the name at that path, return the entire bundle unmodified.

Example 1:

    addContainerToBundleAtPath(["media"], newCube("squidGame"), c3) = 
        {
            tag: 'BUNDLE',
            name: 'media',
            containers: [
                { tag: 'CUBE', name: 'movies' },
                { tag: 'RECTANGLE', name: 'books' },
                { tag: 'CUBE', name: 'squidGame' }
            ]
        }

Example 2:

    addContainerToBundleAtPath([], newCube("squidGame"), c3) = 
        {
            tag: 'BUNDLE',
            name: 'media',
            containers: [
                { tag: 'CUBE', name: 'movies' },
                { tag: 'RECTANGLE', name: 'books' }
            ]
        }

Example 3:

    addContainerToBundleAtPath(["kitchenware", "silverware"], newCube("spoons"), c4) = 
        {
            tag: 'BUNDLE',
            name: 'kitchenware',
            containers: [
                { 
                    tag: 'BUNDLE',
                    name: 'silverware',
                    containers: [
                        { tag: 'CUBE', name: 'forks' },
                        { tag: 'CUBE', name: 'knives' },
                        { tag: 'CUBE', name: 'spoons' }
                    ]
                },
                {
                    tag: 'BUNDLE',
                    name: 'cookware',
                    containers: [
                        { tag: 'RECTANGLE', name: 'pots' },
                        { tag: 'RECTANGLE', name: 'pans' }
                    ]
                }
            ]
        }
** ============================================================================ */
//done
export function addContainerToBundleAtPath(path: string[], container: Container, bundle: Bundle): Bundle {
    
    let cont: Container[] = [...bundle.containers]


    if (path.length == 1 || 0) {
                cont.push(container)
        }

    

    if (path.length >= 2) { //[kitchenware, silverware]
           for (const x in path) { // [kitchware]
            let newBundle: Bundle = JSON.parse(JSON.stringify(bundle.containers[x]))
               if (newBundle.name == path[x]) { // [kitchware == path[0] = kitchware]
                cont.splice(cont.indexOf(cont[x]),1)
                path.shift()
                cont.push(addContainerToBundleAtPath(path, container, newBundle)) 

               }
           }
     }
   

    let bun: Bundle = {
        tag: "BUNDLE",
        name: bundle.name,
        containers: cont,

}
    return bun
}



//  console.log(addContainerToBundleAtPath(["media"], newCube("squidGame"), c3))
//  console.log(addContainerToBundleAtPath([], newCube("squidGame"), c3))

// console.log(JSON.stringify(addContainerToBundleAtPath(["kitchenware", "silverware"], newCube("spoons"), c4)))