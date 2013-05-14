APP_NAME := level-model

all: clean install test build

build:
	@component build --dev

components: component.json
	@component install --dev

clean:
	@rm -rf ./node_modules
	@rm -rf build components template.js

install:
	@npm install .
	@component install

test:
	@test -d ./tmp && rm -rf ./tmp && mkdir ./tmp || mkdir ./tmp
	@./node_modules/mocha/bin/mocha -R spec

dist: build
	@test -d ./dist && rm -rf ./dist
	@mkdir ./dist
	@touch ./dist/$(APP_NAME).min.js
	@cat ./dist.wrapper.header.js >> ./dist/$(APP_NAME).min.js
	@cat ./build/build.js >> ./dist/$(APP_NAME).min.js
	@cat ./dist.wrapper.footer.js >> ./dist/$(APP_NAME).min.js
	@cp ./dist/$(APP_NAME).min.js ./$(APP_NAME).min.js

.PHONY: all clean install test components build dist