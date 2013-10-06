.PHONY: app server

app:
	./node_modules/.bin/bem make desktop.bundles/app/
	node app.js

server:
	./node_modules/.bin/bem server