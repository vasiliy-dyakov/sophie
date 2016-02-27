NPM_ROOT = node_modules
NPM_BIN = $(NPM_ROOT)/.bin

.PHONY: all
all: $(NPM_ROOT)

$(NPM_ROOT):
	@npm install

.PHONY: lint
lint: $(NPM_ROOT)
	@$(NPM_BIN)/eslint .

.PHONY: test
test:
	@npm test

.PHONY: clean
clean:
	@rm -rf node_modules
