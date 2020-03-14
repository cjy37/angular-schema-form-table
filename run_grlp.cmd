if exist node_modules (
   call gulp
) else (
   call npm config set registry https://registry.npm.taobao.org --global
   call npm config set msvs_version 2017 --global
   call npm install --dev
   call gulp
)

