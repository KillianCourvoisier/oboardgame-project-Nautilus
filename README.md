<!-- Hey désolé je voulais t'envoyer tout ça hier mais j'ai pas pu

faut déjà commencer par installer postgres et sqitch sur ton ordi

ensuite `
createdb oboardgame

tu te places dans le dossier back et tu fais sqitch deploy db:pg:oboardgame

tu insères les données de l'API node app/services/localisationAPI.js

ensuite les données de base psql -d oboardgame -f data/import_data.sql

c'est ce qu'on faisait sur la VM. Après j'ai déjà essayé une fois de faire tourner le projet sur mon pc mais j'ai rencontré une erreur avec postgres et j'ai jamais eu le courage de vraiment chercher c'était quoi le problème :sueur_et_sourire:

j'espère que ça marchera pour toi, sinon dis moi si t'as une erreur j'essaierai de t'aider -->

# Oboardgame

Oboardgame is a collaborative project from an idea of Mathis Pati, during the last month of class in O'clock virtual school (https://www.oclock.io).

The team counts five people :
+ [Mathis Pati](https://github.com/Mathis-web), Product Owner & Backend Developper
+ [Osée Ralantoarison](https://github.com/oralanto), Lead Frontend Developper
+ [Cédric Leizour](https://github.com/CedricLeizour), Scrum Master & Frontend Developper
+ [Kaio Fernandes Dias Cordeiro](https://github.com/KaioFernandes), Git Master & Frontend Developper
+ Killian Courvoiser (myself), Lead Backend Developper

_____________________________________________________________

## **The Project**

We notice that usually, boardgames are pretty expensive, and often, we hesitate buying them because of the potential lack of interest afterward. Then we came with Oboardgame, a (future) web application where you can rent boardgames of any type, for cheap, for the week or a few days.

The concept here is to be able to post, update, and rent with small ads and small wallets from your favourite boardgames experiences. Be able to share, the great moment you had playing this mighty Risk or this wild D&D extension you buy last month ... and make money in return . 

Based on community, we , as Oboardgame's Team, have no decisions on your activities. We believe that table game players are a wonderful community and we let you entire control of your organisation. Furthermore we dont fix prices, we dont arrange meetings (not yet) and we're not responsible for any problems you may encounter with the community. We're  only maintaining the application.

For the reactivity of the application, we're not checking every announces posted, but you will be hable to notify staff members if there's anything suspect requiring further exams.

To post an ad you will have to create an account (or sign in if done already). Give us simple informations like your username, a password and a valid email address and here you are, enjoying tons and tons of new boardgames possibilities for several euros. 
When you will do so, you will have to tell us a location , where the game can be recovered. No panic, a city will be enough, then you will decide where exactly you should meet directly with the potential new friend your making.

To do so you will have access to a private chat where either you or a player can contact each other for details (like paying methods) and negociations around the game you rent.
You will be able to report weirds and uncomfy messages you might receive directly to the staff of Oboardgame, in case clear threats, blackmailing, abusive behaviors ... because we wanna the Oboardgame community to be clean as the Shinkansen. If so , analyze will be lead and if necessary, delegate to local authorities.
_____________________________________________________________

## **The Stack**

Javascript, HTML, CSS

Front:
+ React,
+ Redux, 
+ Sass,
+ Axios

Back:
+ NodesJS,
+ Sqitch,
+ PostgreSQL,
+ Express (Active Record)

_____________________________________________________________

### To run Oboardgame locally :

Please be sure to have installed PostgreSQL and Sqitch properly and have every authorizations needed to create a database & interact with it.

* Clone repo on `main` branch
* Create a new database locally with `create database oboardgame`
* In terminal, get in _FRONT_ folder with `cd FRONT/`  & do `npm i` to download dependecies
* Now for the _BACK_ folder : `cd ../BACK/` then `npm i`
* After this you will need to deploy the migrations with `sqitch deploy db:pg:oboardgame`
* Then insert datas from the localisation API file in there with `node app/services/localisationAPI.js` (this is for the french cities names & zipcodes from french government's API)
* Wait a few seconds (there is many cities in france ...)
* Then the fake data for some users and ads with `psql -d oboardgame -f data/import_data.sql`

If everything is right , you should now be able to launch the application.

To do so : 

* `node index.js` in the _BACK_ folder to launch local server
* `yarn start` in the _FRONT_ folder to launch front in your browser

Here is the V1 of Oboardgame.

Everyone in the team involved his best in this realisation, in one month deadline, after five month of intensive learning in a new professional branch for each of us.

We do want to continue the development of Oboardgame but we're all busy with life since then, so stay tuned for potential evolutions.

Hope you like the concept !

__Killian Courvoisier__ - *Lead Dev Back on Oboardgame*
