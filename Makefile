.PHONY: lint test dist



lint: 
	npm run lint

test:
	npm test

HOSTNAME=$(shell hostname)

dist:
	REACT_APP_HOST_NAME=$(HOSTNAME) npm run build
