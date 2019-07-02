const express = require('express')

const server = express()

server.use(express.json())

let requests = 0

server.use((req, res, next) => {
  requests++

  console.log(`Requisições: ${requests}`)

  next()
})

function verifyProjectExistence(req, res, next) {
  const { id } = req.params

  if(projects.length === 0) return res.status(400).json({
    error: 'Project not found!'
  })

  projects.map(project => {
    if(project.id !== parseInt(id)) return res.status(400).json({
      error: 'Project not found!'
    })

    return project
  })

  return next();
}

let projects = []

server.post('/projects', (req, res) => {
  projects.push({...req.body})

  res.send(projects)
})

server.get('/projects', (req, res) => {
  res.send(projects)
})

server.put('/projects/:id', verifyProjectExistence,  (req, res) => {
  const { id } = req.params
  const { name } = req.body

  projects = projects.map(project => {
    if(project.id === parseInt(id)) {
      return {
        ...project,
        name: name
      }
    }

    return project
  })

  res.send(projects)
})

server.delete('/projects/:id', verifyProjectExistence, (req, res) => {
  const { id } = req.params

  projects = projects.filter(project => {
    return project.id !== parseInt(id)
  });

  res.send(projects)
})

server.post('/projects/:id/tasks', verifyProjectExistence, (req, res) => {
  const { title } = req.body

  projects = projects.map(project => {
    return {
      ...project,
      tasks: [...project.tasks, title]
    }
  })

  res.send(projects)
})

server.listen(3000)

