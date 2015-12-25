test: test-chrome test-firefox

BROWSERIFYCMD = browserify -d

SMOKECHROME = node_modules/.bin/tap-closer | \
	node_modules/.bin/smokestack -b chrome

SMOKEFIREFOX = node_modules/.bin/tap-closer | \
	node_modules/.bin/smokestack -b firefox

test-chrome:
	$(BROWSERIFYCMD) tests/basictests.js | $(SMOKECHROME)

test-chrome-leave-up:
	$(BROWSERIFYCMD) tests/basictests.js | node_modules/.bin/smokestack -b chrome

test-firefox:
	$(BROWSERIFYCMD) tests/basictests.js | $(SMOKEFIREFOX)

pushall:
	git push origin master && npm publish
