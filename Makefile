
.PHONY: up
up:
	docker compose up -d
	composer run dev

.PHONY: fresh
fresh:
	php artisan migrate:fresh
	php artisan migrate --seed

