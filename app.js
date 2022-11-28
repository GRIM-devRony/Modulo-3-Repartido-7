const mongoose = require('mongoose');
const express = require('express');
const Student = require('./models/studentSchema')

const mongoServer = 'mongodb://127.0.0.1:27017/liceo';

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', async (req, res) => {
    const students = await Student.find();
    res.json(students) 
});

//BUSCA A LOS ESTUDIANTES SEGUN GRADO INGRESADO
app.get('/api/estudiantes/grado/:valor', async (req, res) => {
    const valor = req.params.valor
    const students = await Student.find({grade:valor},{subjects:0, orientation:0,"grade": 0});
    res.json(students) 
});


//BUSCA A LOS ESTUDIANTES SEGUN ORIENTACIONES
app.get('/api/estudiantes/orientacion/:valor', async (req, res) => {
    const students = await Student.find({orientation:req.params.valor},{age:0, orientation:0});
    res.json(students) 
});

//BUSCA LOS ESTUDIANTES MAYORES DE EDAD
app.get('/api/estudiantes/edad/mayor-de-edad', async (req, res) => {
    const students = await Student.find({$and:[{"age":{$gte: 17}}]},{_id:0,age:0, orientation:0,subjects:0}).sort({"name":1});
    res.json(students) 
});


//BUSCA ESTUDIANTES SEGUN ASIGNATURAS Y GRADOS QUE QUERRAMOS
app.get('/api/estudiantes/asignatura/:asig/:grado', async (req, res) => {
    let subjectsStudents = await Student.find({$and: [{subjects : req.params.asig, grade:req.params.grado}]})
    res.json(subjectsStudents)
});

//AQUI PODEMOS INGRESAR UN NUEVO ESTUDIANTE
app.post('/api/estudiantes/nuevo' , async (req, res) => {
    const newStudent = await Student.create(req.body);
    res.json(newStudent)     
    console.log(req.body)
});



mongoose.connect(mongoServer)
 .then(async () => {
   app.listen('3000', () => {console.log("Server running")})
 })