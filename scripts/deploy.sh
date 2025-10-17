#cd ~/PhpstormProjects
#rm -rf ./md_clone_tmp
#git clone ./md ./md_clone_tmp
#tar -czf ./md_clone.tar.gz ./md_clone_tmp
#rm -rf ./md_clone_tmp
#scp -i ~/.ssh/id_rsa.pub ./md_clone.tar.gz oomi\.ru@oomi.ru:/var/www/oomi.ru/data/www/md.oomi.ru
#ssh -i ~/.ssh/id_rsa.pub oomi\.ru@oomi.ru "tar -xzf /var/www/oomi.ru/data/www/md.oomi.ru/md_clone.tar.gz -C /var/www/oomi.ru/data/www/md.oomi.ru"

#/opt/php83/bin/php /usr/local/bin/composer install
#/opt/php83/bin/php artisan key:generate
#/opt/php83/bin/php artisan migrate --seed

#/opt/php83/bin/php artisan optimize:clear
#/opt/php83/bin/php artisan config:cache
#/opt/php83/bin/php artisan event:cache
#/opt/php83/bin/php artisan route:cache
#/opt/php83/bin/php artisan view:cache
#/opt/php83/bin/php artisan optimize

#export PATH=/opt/php83/bin:$PATH && npm run build

