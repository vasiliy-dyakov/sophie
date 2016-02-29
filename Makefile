NPM_ROOT = node_modules
NPM_BIN = $(NPM_ROOT)/.bin
TOOLS = tools

.PHONY: all
all: $(NPM_ROOT)

.PHONY: server
server: $(NPM_ROOT) $(DIST_CLIENT)

	@node server/index.js
$(NPM_ROOT):
	@npm install

.PHONY: lint
lint: $(NPM_ROOT)
	@$(NPM_BIN)/eslint .

.PHONY: test
test:
	@$(NPM_BIN)/jest --config=$(TOOLS)/jest-config.json

.PHONY: tdd
tdd:
	@node $(TOOLS)/tdd-watcher.js

.PHONY: clean
clean:
	@rm -rf node_modules
