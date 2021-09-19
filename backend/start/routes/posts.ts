import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'PostsController.index')
  Route.post('/', 'PostsController.store').middleware('auth')

  Route.get('/:slug', 'PostsController.show')
  Route.put('/:slug', 'PostsController.update').middleware('auth')
  Route.delete('/:slug', 'PostsController.destroy').middleware('auth')
}).prefix('/posts')
