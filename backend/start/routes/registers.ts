import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'User/Register.index')
  Route.post('/', 'User/Register.store').middleware('acl:master')
  Route.get('/:id', 'User/Register.show')
  Route.put('/:id', 'User/Register.update').middleware('acl:master')
  Route.delete('/:id', 'User/Register.destroy').middleware('acl:master')
}).prefix('/registers')
