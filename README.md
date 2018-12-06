# HW W04D05: WikiPotterPedia

![:image](https://media.giphy.com/media/tpwwhv1BLd31e/giphy.gif)



## Hey it's me, your Project Manager

Hey, we have this Harry Potter fanclub that wants us to make an app that shows the different "Houses" in Harry Potter and all the characters from the series.  They've provided the data we need in the directory called "data" in a file called "data.js"

You are my trustworthy developer, here's a spec:


## The app needs five pages:


### Page 1:  Home Page ('/')

We need a home page (route: "/") that welcomes the users and leads to the next pages.  The page should have a header that says, "Welcome to WikiPotteredia" (awful name, right?).

Below the header there should be two links:
1. A link that says "view all students" that leads to Page 2 ('/students)
2. A link that says "view all houses" that leads to Page 4 ('/houses)

### Page 2: All Students Page ('/students')
The students page should render all of the students in the database, including their image and their name.  Their name should be a clickable link that leads to Page 3 ('/students/:id'), the invidual page for that student.

At the top of the page there should also be a link that says "go back to home" that links the user back to the home page ('/').

### Page 3: Individual Student Page ('students/:id')
The individual student page should render that student's image, name and house.  The house should be a clickable link that leads the user back to that house's page (i.e. '/houses/gryffindor').

In addition to the link leading to houses, at the top of the page there should be 2 additional clickable links (3 total):
1. a link that says "go back to home page" that leads the user back to the home page ('/')
2. a link that says "go back to all students" that leads the student back to the all-students page ('/students')
   

### Page 4:  All Houses Page ('/houses')

When the user clicks on "view all houses" on the homepage, direct them to this page.  This page should have a header that says "houses" and links to each house, which leads to their respective page.

(i.e. clicking on "Gryffindor" will lead them to '/houses/gryffindor'.  Repeat for all houses)

This page should also have a link at the top of the page that says "go back home" that leads to "/"

```
hint: you should not need mustache for this!  Basic html a-tags should be all you need.
```

### Page 5:  Individual House Pages ('/houses/:name')
Each house should have their own landing page ("/griffindor", "/hufflepuff", "/ravenclaw", and "/slytherin") that you can navigate to from the homepage.  The house pages should have the name of the house at the top, then a list of all the students that are part of that house. Each student should have their name and image rendered on the page.  Clicking on the name should lead you to their individual profile pages (page 3).

Every house page should also have 2 links at the top of the page:
1. One link that says "go back to homepage" that redirects the user back to the home page ('/').
2. One link that says "go back to houses" that redirects the user back to the houses pages ('/houses')



```
  Hint:  Look at the data provided.  How can we FILTER this list to get only the witches/wizards that belong to Gryffindor?  How about the rest of the houses?  How do we get that data to the view?
```

# Structure and Approach:
We're really getting into the weeds now.  Do NOT just jump into coding, spend time planning out your directory and file structure first.

I highly recommend beginning with "scaffolding" your application and pseudocoding often.  Create a plan for what directories and files you need and create them first. Then pick a feature to work on.  My personal approach would be:

1. Start with '/students', add clickable links to '/students/:id'
2. Complete '/students/:id', add clickable links to '/' and '/students' at the top.  You will need to add a clickable link to '/houses/:name', but let's put this off until we finish that page.  We'll come back to this in step 5.
3. Complete '/houses'.
4. Complete '/houses/:name', focus on getting data filtered by houseName and passing it to mustache.
5. Go back to '/students/:id' and add the link to the house name that leads back to /houses/:name.

## Due Date:
Saturday at midnight!

