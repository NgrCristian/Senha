var input =
require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var password = parseInt (lines[0]);

while (password !==2002){
if (password ===2002){
  console.log('Acesso Permitido');
} else{
  console.log('Senha Invalida');
}
}
