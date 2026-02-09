SHELL = /bin/bash
COMPOSE = docker compose -f docker-compose.yml

.PHONY: help up down build dev ci.install ci.pre-commit

##
# Docker Compose Commands
##

up: ## Start the docker containers
	@$(COMPOSE) up

down: ## Stop the docker containers
	@$(COMPOSE) down

build: ## Build and start the docker containers
	@$(COMPOSE) up --build

##
# Local Development
##

dev: ## Start Astro dev server locally
	cd site && npm run dev

##
# CI Commands
##

ci.install: ## Install dependencies
	cd site && npm ci

ci.pre-commit: ## Run pre-commit hooks on all files
	pre-commit run --all-files

##
# Utilities
##

help: ## Show this help menu
	@echo 'Usage: make [TARGET]'
	@echo ''
	@echo 'Targets:'
	@grep -E '^[a-zA-Z_.-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
