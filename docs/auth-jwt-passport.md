
#   Instalacion

npm 1 --save @nestjs/jw passport-jwt bcrypt
npm 1 --save-dev @types/passport-jwt

# Arrancamos proyecto 

npm tun strat:dev

# Modules & Resource

nest g mo modules/auth
nest g res modules/users

# Controllers & Sevices

nest g co modules/auth
nest g s modules/auth
