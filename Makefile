
.PHONY: up
up:
	docker compose up -d
	composer run dev

