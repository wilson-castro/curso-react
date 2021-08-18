const gulp = require('gulp')
const { series, parallel } = require('gulp')


const antes1 = cb => {
  console.log('1ª tarefa')

  return cb()
}

const antes2 = cb => {
  console.log('2ª tarefa')

  return cb()
}

function copiar(cb) {

  gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    .pipe(gulp.dest('partaB'))

  //.src('pastaA/**/*.txt')
  return cb()
}

function Fim(cb) {
  console.log('Última')
  return cb()
}

module.exports.default = series(
  parallel(antes1, antes2), copiar, Fim
)