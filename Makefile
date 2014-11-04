build:
	./node_modules/.bin/alc index.al index.js

run: build
	node index.js
