import express from 'express'
const router = express.Router()
import Exercise  from '../models/exercise.model.js';

router.route('/').get((req,res)=>{
    Exercise.find()
    .then(exercises=>res.json(exercises))
    .catch(err=> res.status(400).json('error:'+err))

})

router.route('/add').post((req,res)=>{
    console.log(req.body)
  const username = req.body.username
  const description = req.body.description
  const duration = Number(req.body.duration)
  const date= Date.parse(req.body.date)

  const newExercise = new Exercise({
    username, description , duration , date,
  })
 newExercise.save()
 .then(()=>res.json('exercise added'))
 .catch((err)=>res.status(400).json('error'+err))

})

router.route('/:id').get((req,res)=>{
    Exercise.findById(req.params.id)
    .then((exercise)=>res.json(exercise))
    .catch(err=> res.status(400).json('error:' +err))

})

router.route('/:id').delete((req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(()=>res.json('exerise deleted'))
    .catch(err=> res.status(400).json('error:' +err))

})

router.route('/update/:id').post((req,res)=>{
    Exercise.findById(req.params.id)
    .then((exercise)=>{
        exercise.username= req.body.username
        exercise.description = req.body.description
        exercise.duration = Number(req.body.duration)
        exercise.date= Date.parse(req.body.date)

        exercise.save().then(()=>res.json('exercise updated'))
        .catch(err=>res.status(400).json('error :' +err))

    })
    .catch(err=> res.status(400).json('error'+err))


})
export default router

