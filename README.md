# Digital Content Player

This is a digital content player made as an interview assignment for SeeSignage.

The coding took the full allotted six hours.

## How to run

### 1. Get backend ready

First make sure you have redis installed and a redis server running 
in the default location.

Then install all dependencies with
```sh
npm install
```

The navigate to the backend folder and run:

```sh
npm run build
```

to build the backend, and

```sh
npm run start
```

to start the backend. The backend will run on port 8080

### 2. Start the management ui and create a playlist

Navigate to the management ui folder. Then install dependencies with
```sh
npm install
```

and start the ui with
```sh
npm start
```

Click the create list button and enter a name and some image urls to create
a playlist you can view in the content player

### 3. start the content player

Navigate to the content player folder and install dependencies:
```sh
npm install
```

Then run the player with
```sh
npm start
```

If you still have the management ui running, enter "Y" to start the content player on another port.

Then add the name of your playlist to the url. For example if you have a list named **myList**, and the content player is on port 3001, enter `localhost:3001/myList` in the url bar


