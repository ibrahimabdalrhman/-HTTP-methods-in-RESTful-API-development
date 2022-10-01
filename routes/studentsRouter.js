
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');


router.param('id', studentController.checkId);
router
    .route('/')
    .get(studentController.getAllStudents)
    .post(studentController.checkBody, studentController.postStudent);
router
    .route('/:id')
    .get(studentController.getStudentById)
    .patch(studentController.patchStudent)
    .delete(studentController.deleteStudent); 


module.exports = router;