.DEFAULT_GOAL :=

NODE_MODULES := ./node_modules/

BEM := $(NODE_MODULES).bin/bem

all::
	npm install
	cd server && npm install
	$(BEM) make
	node server/index.js

.PHONY: clean
clean::
	$(BEM) make -m clean