
# MD

```shell
php -v
#PHP 8.3.6 (cli) (built: Jul 14 2025 18:30:55) (NTS)
node -v
#v22.20.0
```

## Main commands:

```shell
make up
```

```shell
make rebuild_cache
```

```shell
make fresh # !!! The database will be recreated, all data will be lost.
```

## Links:

https://lucide.dev/icons/

## Useful commands:

```shell
php artisan make:model Test/Item/MainModel -m
php artisan make:factory Test/Item/MainModelFactory
php artisan make:controller Test/Item/BaseController
php artisan make:request Test/Item/StoreRequest
php artisan make:migration create_object_item_properties_table
```

## Created the project like this:

```shell
#https://laravel.com/docs/12.x/starter-kits
#https://laravel.com/docs/12.x/starter-kits#react-customization
sudo apt install php-xml php-pgsql
composer global require laravel/installer
export PATH="$HOME/.config/composer/vendor/bin:$PATH"
nvm use 22
laravel new md
php artisan migrate
```
