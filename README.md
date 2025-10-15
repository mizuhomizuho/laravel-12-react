
## Run:

```shell
make up
```

```shell
make fresh # !!!
```

## Useful commands:

```shell
php artisan make:model Object/Type -m
php artisan make:model Object/Property -m
php artisan make:model Object/Item -m
php artisan make:migration create_object_item_properties_table

php artisan make:model Access/Group -m
php artisan make:migration create_access_user_groups_table

php artisan make:factory Object/TypeFactory
php artisan make:factory Access/GroupFactory

php artisan migrate
php artisan migrate:fresh # !!!
php artisan migrate --seed
```

## Created the project like this:

```shell

node -v
#v22.20.0
php -v
#PHP 8.3.6 (cli) (built: Jul 14 2025 18:30:55) (NTS)

#https://laravel.com/docs/12.x/starter-kits
#https://laravel.com/docs/12.x/starter-kits#react-customization
sudo apt install php-xml php-pgsql
composer global require laravel/installer
export PATH="$HOME/.config/composer/vendor/bin:$PATH"
laravel new md

```
