# InternshipFortech
This is a web application that uses a country API

To see this project, please enter npm install in the terminal, then npm start.

You should be able to see all countries with select info on the homepage. There is a search component which will check the input vs the fetched data from API and return all matches that fit the criteria.

I also implemented a button which will take you to a more detailed page on those countries, where you can click on the borders and a new page (which contains that country) will load on the screen. I used React Hooks mainly for this project due to its vast functionality. useState() was used to create a state, which contains all the relevant information from the API and the input of the user (for the search box). useEffect() proved to be most usefull when making the HTTP requests to the API to fetch data. Especially in the detailed page for the specific country, where I had to make new requests every time one of the border buttons where clicked, I had to also mention a dependecy that will make the component re-render everytime the dependecy changes. If there are no dependencies listed (so empty []), the request is made only once, when the component mounts.

I added BrowserRouter, Route and Link so I can make most use of the React.

Have a good day! :)
