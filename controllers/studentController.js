const { fail } = require('assert');
const fs = require('fs');

const students = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/student.json`)
);


exports.checkId = (req, res, next, val) => {
    console.log(`student id = ${val}`);
    if (req.params.id*1 > students.length) {
        return res.status(404).json({
            status: 'fail',
            message :'invalid id'
        })
    }
    next();
};

exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.gpa) {
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or price'
        })
    }
    next();
};


exports.getAllStudents = (req, res) => {
    console.log(req.requestTime);
    res.json({
        status: "success",
        requestedAt: req.requestTime,
        results: students.length-1,
        data: {
            students
        }
    });
};

exports.getStudentById = (req, res) => {
    id = req.params.id * 1;
    if (id > students.length) {
        res.status(404).send(
            "invalid ID"
        )
    }
    else {
        const student = students.find(el => el.id === id);
        res.json({
            status: "success",
            data: {
                student
            }
        });
    }
};

exports.postStudent = (req, res) => {
    const newId = students[students.length - 1].id + 1;
    const newStudent = Object.assign({ id: newId }, req.body);
    students.push(newStudent);

    fs.writeFileSync(`${__dirname}/../dev-data/data/student.json`, JSON.stringify(students), err => {
        if (err) { return 'error in create ' };
        res.status(201).json(
            {
                status: "success",
                data: {
                    student: student
                }
            }
        );
    });
    
    // res.send('done');
    console.log(req.body);
};

exports.patchStudent = (req, res) => {
    id = req.params.id * 1;
    if (id > students.length) {
        return res.status(404).send(
            "invalid ID"
        )
    }
    res.status(200).json({
        status: "success",
        data: {
            student: '< Update data here >'
        }
    })
};

exports.deleteStudent = (req, res) => {
    
    res.status(204).json({
        status: "success",
        data: null
    })
};

