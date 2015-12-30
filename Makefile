test: test-chrome test-firefox

test-big: test-big-chrome test-big-firefox

BROWSERIFYCMD = browserify -d

SMOKECHROME = node_modules/.bin/tap-closer | \
	node_modules/.bin/smokestack -b chrome

SMOKEFIREFOX = node_modules/.bin/tap-closer | \
	node_modules/.bin/smokestack -b firefox

test-chrome:
	$(BROWSERIFYCMD) tests/basictests.js | $(SMOKECHROME)

test-firefox:
	$(BROWSERIFYCMD) tests/basictests.js | $(SMOKEFIREFOX)

test-big-chrome:
	$(BROWSERIFYCMD) tests/bigtests.js | $(SMOKECHROME)

test-big-chrome-no-close:
	browserify -d tests/bigtests.js | node_modules/.bin/smokestack -b chrome

test-big-firefox:
	$(BROWSERIFYCMD) tests/bigtests.js | $(SMOKEFIREFOX)

pushall:
	git push origin master && npm publish

run-workspace:
	wzrd tools/workspace.js -- -d
