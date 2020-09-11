#Adventurandom!
This project was built by Chatchawan L Suwaratana for Thinkful a solo capstone project.

This is the client for the adventurandom client
It accepts user input and randomises an adventure story. Everytime you play it should be different!

#Live app:
https://adventurandom.vercel.app/

#Screenshots:

[Main](https://i.imgur.com/yzzYsZh.png)

[Form](https://i.imgur.com/U0UUopz.png)

#My tech stack:

React

Heroku

PostgresQL

javaScript

#React components:
src/components/About/About.js
-Shows about information, acknowledgements and links to my GitHub and Twitter.
src/components/App/App.js
-Main app housing all other components.
src/components/Encounter/Encounter.js
-Repeated component depending on how many encounters the user chooses.
src/components/Header/Header.js
-Header component appearing above all other components, contains logo that links to Main page.
src/components/Header/Main.js
-Home screen with links to begin app functions and instructions on how to play. Also has link to About page.
src/components/Story/Story.js
-Result of the app function. Big block of text listing all the Encounters taking place.
src/components/StoryForm/StoryForm.js
-Where the user enters their input. Takes Location, Number of encounters, Character name and Character class.

## **API Documentation**

<This API gets lists of monsters, D&D classes and attacks as strings to display to the user. Nothing is authorization protected.>

- **URL**

  </>

- **Method:**

  <GET>

- **URL Params**

  <No params>

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `'Hello, world!'`

- **URL**

  </char>

- **Method:**

  <GET>

- **URL Params**

  <No params>

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `[ { "id": 1, "class_name": "Barbarian", "has_spells": false, "hitpoints": 20 }, {...}, {...}, ...]`

- **URL**

  </char/:id>

- **Method:**

  <GET>

- **URL Params**

  **Required:**

  `id=[integer]`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ "id": 1, "class_name": "Barbarian", "has_spells": false, "hitpoints": 20 }`

- **URL**

  </monster>

- **Method:**

  <GET>

- **URL Params**

  <No params>

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `[ { "id": 1, "monster_name": "Goblin", "hitpoints": 12, "damage_die": 6 }, {...}, {...}, ...]`

- **URL**

  </monster/:id>

- **Method:**

  <GET>

- **URL Params**

  **Required:**

  `id=[integer]`

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ "id": 1, "monster_name": "Goblin", "hitpoints": 12, "damage_die": 6 }`

- **URL**

  </location>

- **Method:**

  <GET>

- **URL Params**

  <No params>

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `[ { "id": 1, "location_flavor_string": "of the Twisted Root" }, {...}, {...}, ...]`
