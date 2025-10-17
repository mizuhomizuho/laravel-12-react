
.PHONY: up
up:
	docker compose up -d
	export NVM_DIR="$$HOME/.nvm"; \. "$$NVM_DIR/nvm.sh"; nvm use 22; \
	node -v && composer run dev

.PHONY: fresh
fresh:
	php artisan migrate:fresh
	php artisan migrate --seed

.PHONY: rebuild_cache
rebuild_cache:
	php artisan optimize:clear
	php artisan config:cache
	php artisan event:cache
	php artisan route:cache
	php artisan view:cache
	php artisan route:list | grep object

