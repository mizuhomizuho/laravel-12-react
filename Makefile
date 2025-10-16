
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
	php artisan config:cache      # Кэширует настройки из .env
	php artisan route:cache       # Кэширует маршруты
	php artisan view:cache        # Кэширует скомпилированные Blade-шаблоны
	php artisan event:cache       # Кэширует события и слушатели (опционально)
	php artisan route:list | grep object

