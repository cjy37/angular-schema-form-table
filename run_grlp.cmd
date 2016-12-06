if exist node_modules (
   call gulp
) else (
   call npm config set registry https://registry.npm.taobao.org --global
   call npm config set msvs_version 2015 --global
   call npm install
)

